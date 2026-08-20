(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = u(c);
    fetch(c.href, h);
  }
})();
var Gr = { exports: {} },
  dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ap;
function Eb() {
  if (Ap) return dl;
  Ap = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function u(s, c, h) {
    var f = null;
    if ((h !== void 0 && (f = "" + h), c.key !== void 0 && (f = "" + c.key), "key" in c)) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return ((c = h.ref), { $$typeof: i, type: s, key: f, ref: c !== void 0 ? c : null, props: h });
  }
  return ((dl.Fragment = a), (dl.jsx = u), (dl.jsxs = u), dl);
}
var Ep;
function Mb() {
  return (Ep || ((Ep = 1), (Gr.exports = Eb())), Gr.exports);
}
var _ = Mb(),
  Xr = { exports: {} },
  it = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mp;
function Db() {
  if (Mp) return it;
  Mp = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function D(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (T && A[T]) || A["@@iterator"]), typeof A == "function" ? A : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    L = {};
  function H(A, B, X) {
    ((this.props = A), (this.context = B), (this.refs = L), (this.updater = X || w));
  }
  ((H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (A, B) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, A, B, "setState");
    }),
    (H.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    }));
  function q() {}
  q.prototype = H.prototype;
  function Y(A, B, X) {
    ((this.props = A), (this.context = B), (this.refs = L), (this.updater = X || w));
  }
  var Z = (Y.prototype = new q());
  ((Z.constructor = Y), U(Z, H.prototype), (Z.isPureReactComponent = !0));
  var tt = Array.isArray;
  function ot() {}
  var J = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function Mt(A, B, X) {
    var W = X.ref;
    return { $$typeof: i, type: A, key: B, ref: W !== void 0 ? W : null, props: X };
  }
  function nt(A, B) {
    return Mt(A.type, B, A.props);
  }
  function bt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function xt(A) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (X) {
        return B[X];
      })
    );
  }
  var le = /\/+/g;
  function qt(A, B) {
    return typeof A == "object" && A !== null && A.key != null ? xt("" + A.key) : B.toString(36);
  }
  function Ut(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(ot, ot)
            : ((A.status = "pending"),
              A.then(
                function (B) {
                  A.status === "pending" && ((A.status = "fulfilled"), (A.value = B));
                },
                function (B) {
                  A.status === "pending" && ((A.status = "rejected"), (A.reason = B));
                },
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function R(A, B, X, W, at) {
    var rt = typeof A;
    (rt === "undefined" || rt === "boolean") && (A = null);
    var Tt = !1;
    if (A === null) Tt = !0;
    else
      switch (rt) {
        case "bigint":
        case "string":
        case "number":
          Tt = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case a:
              Tt = !0;
              break;
            case v:
              return ((Tt = A._init), R(Tt(A._payload), B, X, W, at));
          }
      }
    if (Tt)
      return (
        (at = at(A)),
        (Tt = W === "" ? "." + qt(A, 0) : W),
        tt(at)
          ? ((X = ""),
            Tt != null && (X = Tt.replace(le, "$&/") + "/"),
            R(at, B, X, "", function (Sa) {
              return Sa;
            }))
          : at != null &&
            (bt(at) &&
              (at = nt(
                at,
                X +
                  (at.key == null || (A && A.key === at.key)
                    ? ""
                    : ("" + at.key).replace(le, "$&/") + "/") +
                  Tt,
              )),
            B.push(at)),
        1
      );
    Tt = 0;
    var se = W === "" ? "." : W + ":";
    if (tt(A))
      for (var Lt = 0; Lt < A.length; Lt++)
        ((W = A[Lt]), (rt = se + qt(W, Lt)), (Tt += R(W, B, X, rt, at)));
    else if (((Lt = D(A)), typeof Lt == "function"))
      for (A = Lt.call(A), Lt = 0; !(W = A.next()).done;)
        ((W = W.value), (rt = se + qt(W, Lt++)), (Tt += R(W, B, X, rt, at)));
    else if (rt === "object") {
      if (typeof A.then == "function") return R(Ut(A), B, X, W, at);
      throw (
        (B = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Tt;
  }
  function G(A, B, X) {
    if (A == null) return A;
    var W = [],
      at = 0;
    return (
      R(A, W, "", "", function (rt) {
        return B.call(X, rt, at++);
      }),
      W
    );
  }
  function Q(A) {
    if (A._status === -1) {
      var B = A._result;
      ((B = B()),
        B.then(
          function (X) {
            (A._status === 0 || A._status === -1) && ((A._status = 1), (A._result = X));
          },
          function (X) {
            (A._status === 0 || A._status === -1) && ((A._status = 2), (A._result = X));
          },
        ),
        A._status === -1 && ((A._status = 0), (A._result = B)));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var st =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" && A !== null && typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    mt = {
      map: G,
      forEach: function (A, B, X) {
        G(
          A,
          function () {
            B.apply(this, arguments);
          },
          X,
        );
      },
      count: function (A) {
        var B = 0;
        return (
          G(A, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (A) {
        return (
          G(A, function (B) {
            return B;
          }) || []
        );
      },
      only: function (A) {
        if (!bt(A))
          throw Error("React.Children.only expected to receive a single React element child.");
        return A;
      },
    };
  return (
    (it.Activity = b),
    (it.Children = mt),
    (it.Component = H),
    (it.Fragment = u),
    (it.Profiler = c),
    (it.PureComponent = Y),
    (it.StrictMode = s),
    (it.Suspense = g),
    (it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (it.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return J.H.useMemoCache(A);
      },
    }),
    (it.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (it.cacheSignal = function () {
      return null;
    }),
    (it.cloneElement = function (A, B, X) {
      if (A == null) throw Error("The argument must be a React element, but you passed " + A + ".");
      var W = U({}, A.props),
        at = A.key;
      if (B != null)
        for (rt in (B.key !== void 0 && (at = "" + B.key), B))
          !$.call(B, rt) ||
            rt === "key" ||
            rt === "__self" ||
            rt === "__source" ||
            (rt === "ref" && B.ref === void 0) ||
            (W[rt] = B[rt]);
      var rt = arguments.length - 2;
      if (rt === 1) W.children = X;
      else if (1 < rt) {
        for (var Tt = Array(rt), se = 0; se < rt; se++) Tt[se] = arguments[se + 2];
        W.children = Tt;
      }
      return Mt(A.type, at, W);
    }),
    (it.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: h, _context: A }),
        A
      );
    }),
    (it.createElement = function (A, B, X) {
      var W,
        at = {},
        rt = null;
      if (B != null)
        for (W in (B.key !== void 0 && (rt = "" + B.key), B))
          $.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (at[W] = B[W]);
      var Tt = arguments.length - 2;
      if (Tt === 1) at.children = X;
      else if (1 < Tt) {
        for (var se = Array(Tt), Lt = 0; Lt < Tt; Lt++) se[Lt] = arguments[Lt + 2];
        at.children = se;
      }
      if (A && A.defaultProps)
        for (W in ((Tt = A.defaultProps), Tt)) at[W] === void 0 && (at[W] = Tt[W]);
      return Mt(A, rt, at);
    }),
    (it.createRef = function () {
      return { current: null };
    }),
    (it.forwardRef = function (A) {
      return { $$typeof: m, render: A };
    }),
    (it.isValidElement = bt),
    (it.lazy = function (A) {
      return { $$typeof: v, _payload: { _status: -1, _result: A }, _init: Q };
    }),
    (it.memo = function (A, B) {
      return { $$typeof: p, type: A, compare: B === void 0 ? null : B };
    }),
    (it.startTransition = function (A) {
      var B = J.T,
        X = {};
      J.T = X;
      try {
        var W = A(),
          at = J.S;
        (at !== null && at(X, W),
          typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ot, st));
      } catch (rt) {
        st(rt);
      } finally {
        (B !== null && X.types !== null && (B.types = X.types), (J.T = B));
      }
    }),
    (it.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (it.use = function (A) {
      return J.H.use(A);
    }),
    (it.useActionState = function (A, B, X) {
      return J.H.useActionState(A, B, X);
    }),
    (it.useCallback = function (A, B) {
      return J.H.useCallback(A, B);
    }),
    (it.useContext = function (A) {
      return J.H.useContext(A);
    }),
    (it.useDebugValue = function () {}),
    (it.useDeferredValue = function (A, B) {
      return J.H.useDeferredValue(A, B);
    }),
    (it.useEffect = function (A, B) {
      return J.H.useEffect(A, B);
    }),
    (it.useEffectEvent = function (A) {
      return J.H.useEffectEvent(A);
    }),
    (it.useId = function () {
      return J.H.useId();
    }),
    (it.useImperativeHandle = function (A, B, X) {
      return J.H.useImperativeHandle(A, B, X);
    }),
    (it.useInsertionEffect = function (A, B) {
      return J.H.useInsertionEffect(A, B);
    }),
    (it.useLayoutEffect = function (A, B) {
      return J.H.useLayoutEffect(A, B);
    }),
    (it.useMemo = function (A, B) {
      return J.H.useMemo(A, B);
    }),
    (it.useOptimistic = function (A, B) {
      return J.H.useOptimistic(A, B);
    }),
    (it.useReducer = function (A, B, X) {
      return J.H.useReducer(A, B, X);
    }),
    (it.useRef = function (A) {
      return J.H.useRef(A);
    }),
    (it.useState = function (A) {
      return J.H.useState(A);
    }),
    (it.useSyncExternalStore = function (A, B, X) {
      return J.H.useSyncExternalStore(A, B, X);
    }),
    (it.useTransition = function () {
      return J.H.useTransition();
    }),
    (it.version = "19.2.6"),
    it
  );
}
var Dp;
function Yc() {
  return (Dp || ((Dp = 1), (Xr.exports = Db())), Xr.exports);
}
var k = Yc(),
  Zr = { exports: {} },
  ml = {},
  Qr = { exports: {} },
  Kr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cp;
function Cb() {
  return (
    Cp ||
      ((Cp = 1),
      (function (i) {
        function a(R, G) {
          var Q = R.length;
          R.push(G);
          t: for (; 0 < Q;) {
            var st = (Q - 1) >>> 1,
              mt = R[st];
            if (0 < c(mt, G)) ((R[st] = G), (R[Q] = mt), (Q = st));
            else break t;
          }
        }
        function u(R) {
          return R.length === 0 ? null : R[0];
        }
        function s(R) {
          if (R.length === 0) return null;
          var G = R[0],
            Q = R.pop();
          if (Q !== G) {
            R[0] = Q;
            t: for (var st = 0, mt = R.length, A = mt >>> 1; st < A;) {
              var B = 2 * (st + 1) - 1,
                X = R[B],
                W = B + 1,
                at = R[W];
              if (0 > c(X, Q))
                W < mt && 0 > c(at, X)
                  ? ((R[st] = at), (R[W] = Q), (st = W))
                  : ((R[st] = X), (R[B] = Q), (st = B));
              else if (W < mt && 0 > c(at, Q)) ((R[st] = at), (R[W] = Q), (st = W));
              else break t;
            }
          }
          return G;
        }
        function c(R, G) {
          var Q = R.sortIndex - G.sortIndex;
          return Q !== 0 ? Q : R.id - G.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            m = f.now();
          i.unstable_now = function () {
            return f.now() - m;
          };
        }
        var g = [],
          p = [],
          v = 1,
          b = null,
          T = 3,
          D = !1,
          w = !1,
          U = !1,
          L = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function Z(R) {
          for (var G = u(p); G !== null;) {
            if (G.callback === null) s(p);
            else if (G.startTime <= R) (s(p), (G.sortIndex = G.expirationTime), a(g, G));
            else break;
            G = u(p);
          }
        }
        function tt(R) {
          if (((U = !1), Z(R), !w))
            if (u(g) !== null) ((w = !0), ot || ((ot = !0), xt()));
            else {
              var G = u(p);
              G !== null && Ut(tt, G.startTime - R);
            }
        }
        var ot = !1,
          J = -1,
          $ = 5,
          Mt = -1;
        function nt() {
          return L ? !0 : !(i.unstable_now() - Mt < $);
        }
        function bt() {
          if (((L = !1), ot)) {
            var R = i.unstable_now();
            Mt = R;
            var G = !0;
            try {
              t: {
                ((w = !1), U && ((U = !1), q(J), (J = -1)), (D = !0));
                var Q = T;
                try {
                  e: {
                    for (Z(R), b = u(g); b !== null && !(b.expirationTime > R && nt());) {
                      var st = b.callback;
                      if (typeof st == "function") {
                        ((b.callback = null), (T = b.priorityLevel));
                        var mt = st(b.expirationTime <= R);
                        if (((R = i.unstable_now()), typeof mt == "function")) {
                          ((b.callback = mt), Z(R), (G = !0));
                          break e;
                        }
                        (b === u(g) && s(g), Z(R));
                      } else s(g);
                      b = u(g);
                    }
                    if (b !== null) G = !0;
                    else {
                      var A = u(p);
                      (A !== null && Ut(tt, A.startTime - R), (G = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (T = Q), (D = !1));
                }
                G = void 0;
              }
            } finally {
              G ? xt() : (ot = !1);
            }
          }
        }
        var xt;
        if (typeof Y == "function")
          xt = function () {
            Y(bt);
          };
        else if (typeof MessageChannel < "u") {
          var le = new MessageChannel(),
            qt = le.port2;
          ((le.port1.onmessage = bt),
            (xt = function () {
              qt.postMessage(null);
            }));
        } else
          xt = function () {
            H(bt, 0);
          };
        function Ut(R, G) {
          J = H(function () {
            R(i.unstable_now());
          }, G);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (i.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : ($ = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (i.unstable_next = function (R) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = T;
            }
            var Q = T;
            T = G;
            try {
              return R();
            } finally {
              T = Q;
            }
          }),
          (i.unstable_requestPaint = function () {
            L = !0;
          }),
          (i.unstable_runWithPriority = function (R, G) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var Q = T;
            T = R;
            try {
              return G();
            } finally {
              T = Q;
            }
          }),
          (i.unstable_scheduleCallback = function (R, G, Q) {
            var st = i.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay), (Q = typeof Q == "number" && 0 < Q ? st + Q : st))
                : (Q = st),
              R)
            ) {
              case 1:
                var mt = -1;
                break;
              case 2:
                mt = 250;
                break;
              case 5:
                mt = 1073741823;
                break;
              case 4:
                mt = 1e4;
                break;
              default:
                mt = 5e3;
            }
            return (
              (mt = Q + mt),
              (R = {
                id: v++,
                callback: G,
                priorityLevel: R,
                startTime: Q,
                expirationTime: mt,
                sortIndex: -1,
              }),
              Q > st
                ? ((R.sortIndex = Q),
                  a(p, R),
                  u(g) === null && R === u(p) && (U ? (q(J), (J = -1)) : (U = !0), Ut(tt, Q - st)))
                : ((R.sortIndex = mt), a(g, R), w || D || ((w = !0), ot || ((ot = !0), xt()))),
              R
            );
          }),
          (i.unstable_shouldYield = nt),
          (i.unstable_wrapCallback = function (R) {
            var G = T;
            return function () {
              var Q = T;
              T = G;
              try {
                return R.apply(this, arguments);
              } finally {
                T = Q;
              }
            };
          }));
      })(Kr)),
    Kr
  );
}
var zp;
function zb() {
  return (zp || ((zp = 1), (Qr.exports = Cb())), Qr.exports);
}
var kr = { exports: {} },
  ae = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op;
function Ob() {
  if (Op) return ae;
  Op = 1;
  var i = Yc();
  function a(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++) p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var s = {
      d: {
        f: u,
        r: function () {
          throw Error(a(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(g, p, v) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: v,
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ae.createPortal = function (g, p) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)) throw Error(a(299));
      return h(g, p, null, v);
    }),
    (ae.flushSync = function (g) {
      var p = f.T,
        v = s.p;
      try {
        if (((f.T = null), (s.p = 2), g)) return g();
      } finally {
        ((f.T = p), (s.p = v), s.d.f());
      }
    }),
    (ae.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p = typeof p == "string" ? (p === "use-credentials" ? p : "") : void 0))
          : (p = null),
        s.d.C(g, p));
    }),
    (ae.prefetchDNS = function (g) {
      typeof g == "string" && s.d.D(g);
    }),
    (ae.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = m(v, p.crossOrigin),
          T = typeof p.integrity == "string" ? p.integrity : void 0,
          D = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? s.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: D,
            })
          : v === "script" &&
            s.d.X(g, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: D,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ae.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            s.d.M(g, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && s.d.M(g);
    }),
    (ae.preload = function (g, p) {
      if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
        var v = p.as,
          b = m(v, p.crossOrigin);
        s.d.L(g, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ae.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var v = m(p.as, p.crossOrigin);
          s.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else s.d.m(g);
    }),
    (ae.requestFormReset = function (g) {
      s.d.r(g);
    }),
    (ae.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (ae.useFormState = function (g, p, v) {
      return f.H.useFormState(g, p, v);
    }),
    (ae.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (ae.version = "19.2.6"),
    ae
  );
}
var Rp;
function Rb() {
  if (Rp) return kr.exports;
  Rp = 1;
  function i() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return (i(), (kr.exports = Ob()), kr.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wp;
function wb() {
  if (wp) return ml;
  wp = 1;
  var i = zb(),
    a = Yc(),
    u = Rb();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return;) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (h(t) !== t) throw Error(s(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ;) {
      var o = n.return;
      if (o === null) break;
      var r = o.alternate;
      if (r === null) {
        if (((l = o.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === r.child) {
        for (r = o.child; r;) {
          if (r === n) return (g(o), t);
          if (r === l) return (g(o), e);
          r = r.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) ((n = o), (l = r));
      else {
        for (var d = !1, y = o.child; y;) {
          if (y === n) {
            ((d = !0), (n = o), (l = r));
            break;
          }
          if (y === l) {
            ((d = !0), (l = o), (n = r));
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = r.child; y;) {
            if (y === n) {
              ((d = !0), (n = r), (l = o));
              break;
            }
            if (y === l) {
              ((d = !0), (l = r), (n = o));
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    T = Symbol.for("react.element"),
    D = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    q = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    tt = Symbol.for("react.suspense"),
    ot = Symbol.for("react.suspense_list"),
    J = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    Mt = Symbol.for("react.activity"),
    nt = Symbol.for("react.memo_cache_sentinel"),
    bt = Symbol.iterator;
  function xt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (bt && t[bt]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var le = Symbol.for("react.client.reference");
  function qt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === le ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case H:
        return "Profiler";
      case L:
        return "StrictMode";
      case tt:
        return "Suspense";
      case ot:
        return "SuspenseList";
      case Mt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return "Portal";
        case Y:
          return t.displayName || "Context";
        case q:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case J:
          return ((e = t.displayName || null), e !== null ? e : qt(t.type) || "Memo");
        case $:
          ((e = t._payload), (t = t._init));
          try {
            return qt(t(e));
          } catch {}
      }
    return null;
  }
  var Ut = Array.isArray,
    R = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    st = [],
    mt = -1;
  function A(t) {
    return { current: t };
  }
  function B(t) {
    0 > mt || ((t.current = st[mt]), (st[mt] = null), mt--);
  }
  function X(t, e) {
    (mt++, (st[mt] = t.current), (t.current = e));
  }
  var W = A(null),
    at = A(null),
    rt = A(null),
    Tt = A(null);
  function se(t, e) {
    switch ((X(rt, e), X(at, t), X(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Km(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = Km(e)), (t = km(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (B(W), X(W, t));
  }
  function Lt() {
    (B(W), B(at), B(rt));
  }
  function Sa(t) {
    t.memoizedState !== null && X(Tt, t);
    var e = W.current,
      n = km(e, t.type);
    e !== n && (X(at, t), X(W, n));
  }
  function wl(t) {
    (at.current === t && (B(W), B(at)), Tt.current === t && (B(Tt), (rl._currentValue = Q)));
  }
  var Au, xf;
  function Pn(t) {
    if (Au === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Au = (e && e[1]) || ""),
          (xf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Au +
      t +
      xf
    );
  }
  var Eu = !1;
  function Mu(t, e) {
    if (!t || Eu) return "";
    Eu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (O) {
                  var z = O;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (O) {
                  z = O;
                }
                t.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                z = O;
              }
              (j = t()) && typeof j.catch == "function" && j.catch(function () {});
            }
          } catch (O) {
            if (O && z && typeof O.stack == "string") return [O.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = l.DetermineComponentFrameRoot(),
        d = r[0],
        y = r[1];
      if (d && y) {
        var S = d.split(`
`),
          C = y.split(`
`);
        for (o = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot");) l++;
        for (; o < C.length && !C[o].includes("DetermineComponentFrameRoot");) o++;
        if (l === S.length || o === C.length)
          for (l = S.length - 1, o = C.length - 1; 1 <= l && 0 <= o && S[l] !== C[o];) o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (S[l] !== C[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || S[l] !== C[o])) {
                  var V =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      ((Eu = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Pn(n) : "";
  }
  function ev(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Pn(t.type);
      case 16:
        return Pn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Pn("Suspense Fallback") : Pn("Suspense");
      case 19:
        return Pn("SuspenseList");
      case 0:
      case 15:
        return Mu(t.type, !1);
      case 11:
        return Mu(t.type.render, !1);
      case 1:
        return Mu(t.type, !0);
      case 31:
        return Pn("Activity");
      default:
        return "";
    }
  }
  function Af(t) {
    try {
      var e = "",
        n = null;
      do ((e += ev(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Du = Object.prototype.hasOwnProperty,
    Cu = i.unstable_scheduleCallback,
    zu = i.unstable_cancelCallback,
    nv = i.unstable_shouldYield,
    iv = i.unstable_requestPaint,
    ve = i.unstable_now,
    av = i.unstable_getCurrentPriorityLevel,
    Ef = i.unstable_ImmediatePriority,
    Mf = i.unstable_UserBlockingPriority,
    Vl = i.unstable_NormalPriority,
    lv = i.unstable_LowPriority,
    Df = i.unstable_IdlePriority,
    sv = i.log,
    uv = i.unstable_setDisableYieldValue,
    Ta = null,
    be = null;
  function xn(t) {
    if ((typeof sv == "function" && uv(t), be && typeof be.setStrictMode == "function"))
      try {
        be.setStrictMode(Ta, t);
      } catch {}
  }
  var Se = Math.clz32 ? Math.clz32 : cv,
    ov = Math.log,
    rv = Math.LN2;
  function cv(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((ov(t) / rv) | 0)) | 0);
  }
  var Nl = 256,
    _l = 262144,
    jl = 4194304;
  function $n(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Bl(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      r = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0
        ? ((l = y & ~r),
          l !== 0
            ? (o = $n(l))
            : ((d &= y), d !== 0 ? (o = $n(d)) : n || ((n = y & ~t), n !== 0 && (o = $n(n)))))
        : ((y = l & ~r),
          y !== 0
            ? (o = $n(y))
            : d !== 0
              ? (o = $n(d))
              : n || ((n = l & ~t), n !== 0 && (o = $n(n)))),
      o === 0
        ? 0
        : e !== 0 &&
            e !== o &&
            (e & r) === 0 &&
            ((r = o & -o), (n = e & -e), r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : o
    );
  }
  function xa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function fv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cf() {
    var t = jl;
    return ((jl <<= 1), (jl & 62914560) === 0 && (jl = 4194304), t);
  }
  function Ou(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Aa(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function hv(t, e, n, l, o, r) {
    var d = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var y = t.entanglements,
      S = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = d & ~n; 0 < n;) {
      var V = 31 - Se(n),
        j = 1 << V;
      ((y[V] = 0), (S[V] = -1));
      var z = C[V];
      if (z !== null)
        for (C[V] = null, V = 0; V < z.length; V++) {
          var O = z[V];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~j;
    }
    (l !== 0 && zf(t, l, 0),
      r !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(d & ~e)));
  }
  function zf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var l = 31 - Se(e);
    ((t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Of(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
      var l = 31 - Se(n),
        o = 1 << l;
      ((o & e) | (t[l] & e) && (t[l] |= e), (n &= ~o));
    }
  }
  function Rf(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Ru(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Ru(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function wu(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function wf() {
    var t = G.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : yp(t.type));
  }
  function Vf(t, e) {
    var n = G.p;
    try {
      return ((G.p = t), e());
    } finally {
      G.p = n;
    }
  }
  var An = Math.random().toString(36).slice(2),
    $t = "__reactFiber$" + An,
    ce = "__reactProps$" + An,
    xi = "__reactContainer$" + An,
    Vu = "__reactEvents$" + An,
    dv = "__reactListeners$" + An,
    mv = "__reactHandles$" + An,
    Nf = "__reactResources$" + An,
    Ea = "__reactMarker$" + An;
  function Nu(t) {
    (delete t[$t], delete t[ce], delete t[Vu], delete t[dv], delete t[mv]);
  }
  function Ai(t) {
    var e = t[$t];
    if (e) return e;
    for (var n = t.parentNode; n;) {
      if ((e = n[xi] || n[$t])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = tp(t); t !== null;) {
            if ((n = t[$t])) return n;
            t = tp(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Ei(t) {
    if ((t = t[$t] || t[xi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Ma(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Mi(t) {
    var e = t[Nf];
    return (e || (e = t[Nf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Ft(t) {
    t[Ea] = !0;
  }
  var _f = new Set(),
    jf = {};
  function In(t, e) {
    (Di(t, e), Di(t + "Capture", e));
  }
  function Di(t, e) {
    for (jf[t] = e, t = 0; t < e.length; t++) _f.add(e[t]);
  }
  var pv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Bf = {},
    Uf = {};
  function yv(t) {
    return Du.call(Uf, t)
      ? !0
      : Du.call(Bf, t)
        ? !1
        : pv.test(t)
          ? (Uf[t] = !0)
          : ((Bf[t] = !0), !1);
  }
  function Ul(t, e, n) {
    if (yv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ll(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function nn(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function Oe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Lf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function gv(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var o = l.get,
        r = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (d) {
            ((n = "" + d), r.call(this, d));
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function _u(t) {
    if (!t._valueTracker) {
      var e = Lf(t) ? "checked" : "value";
      t._valueTracker = gv(t, e, "" + t[e]);
    }
  }
  function Hf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Lf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Hl(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var vv = /[\n"\\]/g;
  function Re(t) {
    return t.replace(vv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function ju(t, e, n, l, o, r, d, y) {
    ((t.name = ""),
      d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + Oe(e))
          : t.value !== "" + Oe(e) && (t.value = "" + Oe(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? Bu(t, d, Oe(e))
        : n != null
          ? Bu(t, d, Oe(n))
          : l != null && t.removeAttribute("value"),
      o == null && r != null && (t.defaultChecked = !!r),
      o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"),
      y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean"
        ? (t.name = "" + Oe(y))
        : t.removeAttribute("name"));
  }
  function Yf(t, e, n, l, o, r, d, y) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        _u(t);
        return;
      }
      ((n = n != null ? "" + Oe(n) : ""),
        (e = e != null ? "" + Oe(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = y ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      _u(t));
  }
  function Bu(t, e, n) {
    (e === "number" && Hl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ci(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
      for (n = 0; n < t.length; n++)
        ((o = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== o && (t[n].selected = o),
          o && l && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Oe(n), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === n) {
          ((t[o].selected = !0), l && (t[o].defaultSelected = !0));
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function qf(t, e, n) {
    if (e != null && ((e = "" + Oe(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Oe(n) : "";
  }
  function Gf(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (Ut(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Oe(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l),
      _u(t));
  }
  function zi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var bv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Xf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : l
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || bv.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Zf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
              ? (t.cssFloat = "")
              : (t[l] = ""));
      for (var o in e) ((l = e[o]), e.hasOwnProperty(o) && n[o] !== l && Xf(t, o, l));
    } else for (var r in e) e.hasOwnProperty(r) && Xf(t, r, e[r]);
  }
  function Uu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Sv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Tv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yl(t) {
    return Tv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function an() {}
  var Lu = null;
  function Hu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Oi = null,
    Ri = null;
  function Qf(t) {
    var e = Ei(t);
    if (e && (t = e.stateNode)) {
      var n = t[ce] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (ju(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll('input[name="' + Re("" + e) + '"][type="radio"]'), e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var o = l[ce] || null;
                if (!o) throw Error(s(90));
                ju(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name,
                );
              }
            }
            for (e = 0; e < n.length; e++) ((l = n[e]), l.form === t.form && Hf(l));
          }
          break t;
        case "textarea":
          qf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Ci(t, !!n.multiple, e, !1));
      }
    }
  }
  var Yu = !1;
  function Kf(t, e, n) {
    if (Yu) return t(e, n);
    Yu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Yu = !1),
        (Oi !== null || Ri !== null) &&
          (Cs(), Oi && ((e = Oi), (t = Ri), (Ri = Oi = null), Qf(e), t)))
      )
        for (e = 0; e < t.length; e++) Qf(t[e]);
    }
  }
  function Da(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[ce] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
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
          ((t = t.type),
          (l = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !l));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(s(231, e, typeof n));
    return n;
  }
  var ln = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    qu = !1;
  if (ln)
    try {
      var Ca = {};
      (Object.defineProperty(Ca, "passive", {
        get: function () {
          qu = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca));
    } catch {
      qu = !1;
    }
  var En = null,
    Gu = null,
    ql = null;
  function kf() {
    if (ql) return ql;
    var t,
      e = Gu,
      n = e.length,
      l,
      o = "value" in En ? En.value : En.textContent,
      r = o.length;
    for (t = 0; t < n && e[t] === o[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === o[r - l]; l++);
    return (ql = o.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Gl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Xl() {
    return !0;
  }
  function Jf() {
    return !1;
  }
  function fe(t) {
    function e(n, l, o, r, d) {
      ((this._reactName = n),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = r),
        (this.target = d),
        (this.currentTarget = null));
      for (var y in t) t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(r) : r[y]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Xl
          : Jf),
        (this.isPropagationStopped = Jf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Xl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Xl));
        },
        persist: function () {},
        isPersistent: Xl,
      }),
      e
    );
  }
  var ti = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zl = fe(ti),
    za = b({}, ti, { view: 0, detail: 0 }),
    xv = fe(za),
    Xu,
    Zu,
    Oa,
    Ql = b({}, za, {
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
      getModifierState: Ku,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Oa &&
              (Oa && t.type === "mousemove"
                ? ((Xu = t.screenX - Oa.screenX), (Zu = t.screenY - Oa.screenY))
                : (Zu = Xu = 0),
              (Oa = t)),
            Xu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Zu;
      },
    }),
    Ff = fe(Ql),
    Av = b({}, Ql, { dataTransfer: 0 }),
    Ev = fe(Av),
    Mv = b({}, za, { relatedTarget: 0 }),
    Qu = fe(Mv),
    Dv = b({}, ti, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cv = fe(Dv),
    zv = b({}, ti, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Ov = fe(zv),
    Rv = b({}, ti, { data: 0 }),
    Wf = fe(Rv),
    wv = {
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
    Vv = {
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
    Nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _v(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Nv[t]) ? !!e[t] : !1;
  }
  function Ku() {
    return _v;
  }
  var jv = b({}, za, {
      key: function (t) {
        if (t.key) {
          var e = wv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Gl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Vv[t.keyCode] || "Unidentified"
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
      getModifierState: Ku,
      charCode: function (t) {
        return t.type === "keypress" ? Gl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Gl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Bv = fe(jv),
    Uv = b({}, Ql, {
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
    Pf = fe(Uv),
    Lv = b({}, za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ku,
    }),
    Hv = fe(Lv),
    Yv = b({}, ti, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qv = fe(Yv),
    Gv = b({}, Ql, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Xv = fe(Gv),
    Zv = b({}, ti, { newState: 0, oldState: 0 }),
    Qv = fe(Zv),
    Kv = [9, 13, 27, 32],
    ku = ln && "CompositionEvent" in window,
    Ra = null;
  ln && "documentMode" in document && (Ra = document.documentMode);
  var kv = ln && "TextEvent" in window && !Ra,
    $f = ln && (!ku || (Ra && 8 < Ra && 11 >= Ra)),
    If = " ",
    th = !1;
  function eh(t, e) {
    switch (t) {
      case "keyup":
        return Kv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nh(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var wi = !1;
  function Jv(t, e) {
    switch (t) {
      case "compositionend":
        return nh(e);
      case "keypress":
        return e.which !== 32 ? null : ((th = !0), If);
      case "textInput":
        return ((t = e.data), t === If && th ? null : t);
      default:
        return null;
    }
  }
  function Fv(t, e) {
    if (wi)
      return t === "compositionend" || (!ku && eh(t, e))
        ? ((t = kf()), (ql = Gu = En = null), (wi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return $f && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Wv = {
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
  function ih(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Wv[t.type] : e === "textarea";
  }
  function ah(t, e, n, l) {
    (Oi ? (Ri ? Ri.push(l) : (Ri = [l])) : (Oi = l),
      (e = _s(e, "onChange")),
      0 < e.length &&
        ((n = new Zl("onChange", "change", null, n, l)), t.push({ event: n, listeners: e })));
  }
  var wa = null,
    Va = null;
  function Pv(t) {
    Ym(t, 0);
  }
  function Kl(t) {
    var e = Ma(t);
    if (Hf(e)) return t;
  }
  function lh(t, e) {
    if (t === "change") return e;
  }
  var sh = !1;
  if (ln) {
    var Ju;
    if (ln) {
      var Fu = "oninput" in document;
      if (!Fu) {
        var uh = document.createElement("div");
        (uh.setAttribute("oninput", "return;"), (Fu = typeof uh.oninput == "function"));
      }
      Ju = Fu;
    } else Ju = !1;
    sh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function oh() {
    wa && (wa.detachEvent("onpropertychange", rh), (Va = wa = null));
  }
  function rh(t) {
    if (t.propertyName === "value" && Kl(Va)) {
      var e = [];
      (ah(e, Va, t, Hu(t)), Kf(Pv, e));
    }
  }
  function $v(t, e, n) {
    t === "focusin"
      ? (oh(), (wa = e), (Va = n), wa.attachEvent("onpropertychange", rh))
      : t === "focusout" && oh();
  }
  function Iv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Kl(Va);
  }
  function t1(t, e) {
    if (t === "click") return Kl(e);
  }
  function e1(t, e) {
    if (t === "input" || t === "change") return Kl(e);
  }
  function n1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Te = typeof Object.is == "function" ? Object.is : n1;
  function Na(t, e) {
    if (Te(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!Du.call(e, o) || !Te(t[o], e[o])) return !1;
    }
    return !0;
  }
  function ch(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function fh(t, e) {
    var n = ch(t);
    t = 0;
    for (var l; n;) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e)) return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ch(n);
    }
  }
  function hh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? hh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function dh(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Hl(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Hl(t.document);
    }
    return e;
  }
  function Wu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var i1 = ln && "documentMode" in document && 11 >= document.documentMode,
    Vi = null,
    Pu = null,
    _a = null,
    $u = !1;
  function mh(t, e, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    $u ||
      Vi == null ||
      Vi !== Hl(l) ||
      ((l = Vi),
      "selectionStart" in l && Wu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (_a && Na(_a, l)) ||
        ((_a = l),
        (l = _s(Pu, "onSelect")),
        0 < l.length &&
          ((e = new Zl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = Vi))));
  }
  function ei(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ni = {
      animationend: ei("Animation", "AnimationEnd"),
      animationiteration: ei("Animation", "AnimationIteration"),
      animationstart: ei("Animation", "AnimationStart"),
      transitionrun: ei("Transition", "TransitionRun"),
      transitionstart: ei("Transition", "TransitionStart"),
      transitioncancel: ei("Transition", "TransitionCancel"),
      transitionend: ei("Transition", "TransitionEnd"),
    },
    Iu = {},
    ph = {};
  ln &&
    ((ph = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ni.animationend.animation,
      delete Ni.animationiteration.animation,
      delete Ni.animationstart.animation),
    "TransitionEvent" in window || delete Ni.transitionend.transition);
  function ni(t) {
    if (Iu[t]) return Iu[t];
    if (!Ni[t]) return t;
    var e = Ni[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ph) return (Iu[t] = e[n]);
    return t;
  }
  var yh = ni("animationend"),
    gh = ni("animationiteration"),
    vh = ni("animationstart"),
    a1 = ni("transitionrun"),
    l1 = ni("transitionstart"),
    s1 = ni("transitioncancel"),
    bh = ni("transitionend"),
    Sh = new Map(),
    to =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  to.push("scrollEnd");
  function qe(t, e) {
    (Sh.set(t, e), In(e, [t]));
  }
  var kl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" && t !== null && typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    we = [],
    _i = 0,
    eo = 0;
  function Jl() {
    for (var t = _i, e = (eo = _i = 0); e < t;) {
      var n = we[e];
      we[e++] = null;
      var l = we[e];
      we[e++] = null;
      var o = we[e];
      we[e++] = null;
      var r = we[e];
      if (((we[e++] = null), l !== null && o !== null)) {
        var d = l.pending;
        (d === null ? (o.next = o) : ((o.next = d.next), (d.next = o)), (l.pending = o));
      }
      r !== 0 && Th(n, o, r);
    }
  }
  function Fl(t, e, n, l) {
    ((we[_i++] = t),
      (we[_i++] = e),
      (we[_i++] = n),
      (we[_i++] = l),
      (eo |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l));
  }
  function no(t, e, n, l) {
    return (Fl(t, e, n, l), Wl(t));
  }
  function ii(t, e) {
    return (Fl(t, null, null, e), Wl(t));
  }
  function Th(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, r = t.return; r !== null;)
      ((r.childLanes |= n),
        (l = r.alternate),
        l !== null && (l.childLanes |= n),
        r.tag === 22 && ((t = r.stateNode), t === null || t._visibility & 1 || (o = !0)),
        (t = r),
        (r = r.return));
    return t.tag === 3
      ? ((r = t.stateNode),
        o &&
          e !== null &&
          ((o = 31 - Se(n)),
          (t = r.hiddenUpdates),
          (l = t[o]),
          l === null ? (t[o] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Wl(t) {
    if (50 < nl) throw ((nl = 0), (hr = null), Error(s(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var ji = {};
  function u1(t, e, n, l) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function xe(t, e, n, l) {
    return new u1(t, e, n, l);
  }
  function io(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function sn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = xe(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function xh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Pl(t, e, n, l, o, r) {
    var d = 0;
    if (((l = t), typeof t == "function")) io(t) && (d = 1);
    else if (typeof t == "string")
      d = hb(t, n, W.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Mt:
          return ((t = xe(31, n, e, o)), (t.elementType = Mt), (t.lanes = r), t);
        case U:
          return ai(n.children, o, r, e);
        case L:
          ((d = 8), (o |= 24));
          break;
        case H:
          return ((t = xe(12, n, e, o | 2)), (t.elementType = H), (t.lanes = r), t);
        case tt:
          return ((t = xe(13, n, e, o)), (t.elementType = tt), (t.lanes = r), t);
        case ot:
          return ((t = xe(19, n, e, o)), (t.elementType = ot), (t.lanes = r), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
                d = 10;
                break t;
              case q:
                d = 9;
                break t;
              case Z:
                d = 11;
                break t;
              case J:
                d = 14;
                break t;
              case $:
                ((d = 16), (l = null));
                break t;
            }
          ((d = 29), (n = Error(s(130, t === null ? "null" : typeof t, ""))), (l = null));
      }
    return ((e = xe(d, n, e, o)), (e.elementType = t), (e.type = l), (e.lanes = r), e);
  }
  function ai(t, e, n, l) {
    return ((t = xe(7, t, l, e)), (t.lanes = n), t);
  }
  function ao(t, e, n) {
    return ((t = xe(6, t, null, e)), (t.lanes = n), t);
  }
  function Ah(t) {
    var e = xe(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function lo(t, e, n) {
    return (
      (e = xe(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Eh = new WeakMap();
  function Ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Eh.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: Af(e) }), Eh.set(t, e), e);
    }
    return { value: t, source: e, stack: Af(e) };
  }
  var Bi = [],
    Ui = 0,
    $l = null,
    ja = 0,
    Ne = [],
    _e = 0,
    Mn = null,
    Fe = 1,
    We = "";
  function un(t, e) {
    ((Bi[Ui++] = ja), (Bi[Ui++] = $l), ($l = t), (ja = e));
  }
  function Mh(t, e, n) {
    ((Ne[_e++] = Fe), (Ne[_e++] = We), (Ne[_e++] = Mn), (Mn = t));
    var l = Fe;
    t = We;
    var o = 32 - Se(l) - 1;
    ((l &= ~(1 << o)), (n += 1));
    var r = 32 - Se(e) + o;
    if (30 < r) {
      var d = o - (o % 5);
      ((r = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (o -= d),
        (Fe = (1 << (32 - Se(e) + o)) | (n << o) | l),
        (We = r + t));
    } else ((Fe = (1 << r) | (n << o) | l), (We = t));
  }
  function so(t) {
    t.return !== null && (un(t, 1), Mh(t, 1, 0));
  }
  function uo(t) {
    for (; t === $l;) (($l = Bi[--Ui]), (Bi[Ui] = null), (ja = Bi[--Ui]), (Bi[Ui] = null));
    for (; t === Mn;)
      ((Mn = Ne[--_e]),
        (Ne[_e] = null),
        (We = Ne[--_e]),
        (Ne[_e] = null),
        (Fe = Ne[--_e]),
        (Ne[_e] = null));
  }
  function Dh(t, e) {
    ((Ne[_e++] = Fe), (Ne[_e++] = We), (Ne[_e++] = Mn), (Fe = e.id), (We = e.overflow), (Mn = t));
  }
  var It = null,
    wt = null,
    pt = !1,
    Dn = null,
    je = !1,
    oo = Error(s(519));
  function Cn(t) {
    var e = Error(
      s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Ba(Ve(e, t)), oo);
  }
  function Ch(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[$t] = t), (e[ce] = l), n)) {
      case "dialog":
        (ft("cancel", e), ft("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < al.length; n++) ft(al[n], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ft("error", e), ft("load", e));
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        (ft("invalid", e),
          Yf(e, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        (ft("invalid", e), Gf(e, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Zm(e.textContent, n)
        ? (l.popover != null && (ft("beforetoggle", e), ft("toggle", e)),
          l.onScroll != null && ft("scroll", e),
          l.onScrollEnd != null && ft("scrollend", e),
          l.onClick != null && (e.onclick = an),
          (e = !0))
        : (e = !1),
      e || Cn(t, !0));
  }
  function zh(t) {
    for (It = t.return; It;)
      switch (It.tag) {
        case 5:
        case 31:
        case 13:
          je = !1;
          return;
        case 27:
        case 3:
          je = !0;
          return;
        default:
          It = It.return;
      }
  }
  function Li(t) {
    if (t !== It) return !1;
    if (!pt) return (zh(t), (pt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type), (n = !(n !== "form" && n !== "button") || Cr(t.type, t.memoizedProps))),
        (n = !n)),
      n && wt && Cn(t),
      zh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(s(317));
      wt = Im(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(s(317));
      wt = Im(t);
    } else
      e === 27
        ? ((e = wt), qn(t.type) ? ((t = Vr), (Vr = null), (wt = t)) : (wt = e))
        : (wt = It ? Ue(t.stateNode.nextSibling) : null);
    return !0;
  }
  function li() {
    ((wt = It = null), (pt = !1));
  }
  function ro() {
    var t = Dn;
    return (t !== null && (pe === null ? (pe = t) : pe.push.apply(pe, t), (Dn = null)), t);
  }
  function Ba(t) {
    Dn === null ? (Dn = [t]) : Dn.push(t);
  }
  var co = A(null),
    si = null,
    on = null;
  function zn(t, e, n) {
    (X(co, e._currentValue), (e._currentValue = n));
  }
  function rn(t) {
    ((t._currentValue = co.current), B(co));
  }
  function fo(t, e, n) {
    for (; t !== null;) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function ho(t, e, n, l) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null;) {
      var r = o.dependencies;
      if (r !== null) {
        var d = o.child;
        r = r.firstContext;
        t: for (; r !== null;) {
          var y = r;
          r = o;
          for (var S = 0; S < e.length; S++)
            if (y.context === e[S]) {
              ((r.lanes |= n),
                (y = r.alternate),
                y !== null && (y.lanes |= n),
                fo(r.return, n, t),
                l || (d = null));
              break t;
            }
          r = y.next;
        }
      } else if (o.tag === 18) {
        if (((d = o.return), d === null)) throw Error(s(341));
        ((d.lanes |= n), (r = d.alternate), r !== null && (r.lanes |= n), fo(d, n, t), (d = null));
      } else d = o.child;
      if (d !== null) d.return = o;
      else
        for (d = o; d !== null;) {
          if (d === t) {
            d = null;
            break;
          }
          if (((o = d.sibling), o !== null)) {
            ((o.return = d.return), (d = o));
            break;
          }
          d = d.return;
        }
      o = d;
    }
  }
  function Hi(t, e, n, l) {
    t = null;
    for (var o = e, r = !1; o !== null;) {
      if (!r) {
        if ((o.flags & 524288) !== 0) r = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var d = o.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var y = o.type;
          Te(o.pendingProps.value, d.value) || (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (o === Tt.current) {
        if (((d = o.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (t !== null ? t.push(rl) : (t = [rl]));
      }
      o = o.return;
    }
    (t !== null && ho(e, t, n, l), (e.flags |= 262144));
  }
  function Il(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Te(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ui(t) {
    ((si = t), (on = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function te(t) {
    return Oh(si, t);
  }
  function ts(t, e) {
    return (si === null && ui(t), Oh(t, e));
  }
  function Oh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), on === null)) {
      if (t === null) throw Error(s(308));
      ((on = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else on = on.next = e;
    return n;
  }
  var o1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    r1 = i.unstable_scheduleCallback,
    c1 = i.unstable_NormalPriority,
    Gt = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function mo() {
    return { controller: new o1(), data: new Map(), refCount: 0 };
  }
  function Ua(t) {
    (t.refCount--,
      t.refCount === 0 &&
        r1(c1, function () {
          t.controller.abort();
        }));
  }
  var La = null,
    po = 0,
    Yi = 0,
    qi = null;
  function f1(t, e) {
    if (La === null) {
      var n = (La = []);
      ((po = 0),
        (Yi = vr()),
        (qi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (po++, e.then(Rh, Rh), e);
  }
  function Rh() {
    if (--po === 0 && La !== null) {
      qi !== null && (qi.status = "fulfilled");
      var t = La;
      ((La = null), (Yi = 0), (qi = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function h1(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      t.then(
        function () {
          ((l.status = "fulfilled"), (l.value = e));
          for (var o = 0; o < n.length; o++) (0, n[o])(e);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++) (0, n[o])(void 0);
        },
      ),
      l
    );
  }
  var wh = R.S;
  R.S = function (t, e) {
    ((mm = ve()),
      typeof e == "object" && e !== null && typeof e.then == "function" && f1(t, e),
      wh !== null && wh(t, e));
  };
  var oi = A(null);
  function yo() {
    var t = oi.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function es(t, e) {
    e === null ? X(oi, oi.current) : X(oi, e.pool);
  }
  function Vh() {
    var t = yo();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var Gi = Error(s(460)),
    go = Error(s(474)),
    ns = Error(s(542)),
    is = { then: function () {} };
  function Nh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function _h(t, e, n) {
    switch (
      ((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(an, an), (e = n)), e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Bh(t), t);
      default:
        if (typeof e.status == "string") e.then(an, an);
        else {
          if (((t = Ot), t !== null && 100 < t.shellSuspendCounter)) throw Error(s(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  ((o.status = "fulfilled"), (o.value = l));
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  ((o.status = "rejected"), (o.reason = l));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Bh(t), t);
        }
        throw ((ci = e), Gi);
    }
  }
  function ri(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? ((ci = n), Gi) : n;
    }
  }
  var ci = null;
  function jh() {
    if (ci === null) throw Error(s(459));
    var t = ci;
    return ((ci = null), t);
  }
  function Bh(t) {
    if (t === Gi || t === ns) throw Error(s(483));
  }
  var Xi = null,
    Ha = 0;
  function as(t) {
    var e = Ha;
    return ((Ha += 1), Xi === null && (Xi = []), _h(Xi, t, e));
  }
  function Ya(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function ls(t, e) {
    throw e.$$typeof === T
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t,
          ),
        ));
  }
  function Uh(t) {
    function e(E, x) {
      if (t) {
        var M = E.deletions;
        M === null ? ((E.deletions = [x]), (E.flags |= 16)) : M.push(x);
      }
    }
    function n(E, x) {
      if (!t) return null;
      for (; x !== null;) (e(E, x), (x = x.sibling));
      return null;
    }
    function l(E) {
      for (var x = new Map(); E !== null;)
        (E.key !== null ? x.set(E.key, E) : x.set(E.index, E), (E = E.sibling));
      return x;
    }
    function o(E, x) {
      return ((E = sn(E, x)), (E.index = 0), (E.sibling = null), E);
    }
    function r(E, x, M) {
      return (
        (E.index = M),
        t
          ? ((M = E.alternate),
            M !== null
              ? ((M = M.index), M < x ? ((E.flags |= 67108866), x) : M)
              : ((E.flags |= 67108866), x))
          : ((E.flags |= 1048576), x)
      );
    }
    function d(E) {
      return (t && E.alternate === null && (E.flags |= 67108866), E);
    }
    function y(E, x, M, N) {
      return x === null || x.tag !== 6
        ? ((x = ao(M, E.mode, N)), (x.return = E), x)
        : ((x = o(x, M)), (x.return = E), x);
    }
    function S(E, x, M, N) {
      var I = M.type;
      return I === U
        ? V(E, x, M.props.children, N, M.key)
        : x !== null &&
            (x.elementType === I ||
              (typeof I == "object" && I !== null && I.$$typeof === $ && ri(I) === x.type))
          ? ((x = o(x, M.props)), Ya(x, M), (x.return = E), x)
          : ((x = Pl(M.type, M.key, M.props, null, E.mode, N)), Ya(x, M), (x.return = E), x);
    }
    function C(E, x, M, N) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== M.containerInfo ||
        x.stateNode.implementation !== M.implementation
        ? ((x = lo(M, E.mode, N)), (x.return = E), x)
        : ((x = o(x, M.children || [])), (x.return = E), x);
    }
    function V(E, x, M, N, I) {
      return x === null || x.tag !== 7
        ? ((x = ai(M, E.mode, N, I)), (x.return = E), x)
        : ((x = o(x, M)), (x.return = E), x);
    }
    function j(E, x, M) {
      if ((typeof x == "string" && x !== "") || typeof x == "number" || typeof x == "bigint")
        return ((x = ao("" + x, E.mode, M)), (x.return = E), x);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case D:
            return ((M = Pl(x.type, x.key, x.props, null, E.mode, M)), Ya(M, x), (M.return = E), M);
          case w:
            return ((x = lo(x, E.mode, M)), (x.return = E), x);
          case $:
            return ((x = ri(x)), j(E, x, M));
        }
        if (Ut(x) || xt(x)) return ((x = ai(x, E.mode, M, null)), (x.return = E), x);
        if (typeof x.then == "function") return j(E, as(x), M);
        if (x.$$typeof === Y) return j(E, ts(E, x), M);
        ls(E, x);
      }
      return null;
    }
    function z(E, x, M, N) {
      var I = x !== null ? x.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint")
        return I !== null ? null : y(E, x, "" + M, N);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case D:
            return M.key === I ? S(E, x, M, N) : null;
          case w:
            return M.key === I ? C(E, x, M, N) : null;
          case $:
            return ((M = ri(M)), z(E, x, M, N));
        }
        if (Ut(M) || xt(M)) return I !== null ? null : V(E, x, M, N, null);
        if (typeof M.then == "function") return z(E, x, as(M), N);
        if (M.$$typeof === Y) return z(E, x, ts(E, M), N);
        ls(E, M);
      }
      return null;
    }
    function O(E, x, M, N, I) {
      if ((typeof N == "string" && N !== "") || typeof N == "number" || typeof N == "bigint")
        return ((E = E.get(M) || null), y(x, E, "" + N, I));
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case D:
            return ((E = E.get(N.key === null ? M : N.key) || null), S(x, E, N, I));
          case w:
            return ((E = E.get(N.key === null ? M : N.key) || null), C(x, E, N, I));
          case $:
            return ((N = ri(N)), O(E, x, M, N, I));
        }
        if (Ut(N) || xt(N)) return ((E = E.get(M) || null), V(x, E, N, I, null));
        if (typeof N.then == "function") return O(E, x, M, as(N), I);
        if (N.$$typeof === Y) return O(E, x, M, ts(x, N), I);
        ls(x, N);
      }
      return null;
    }
    function K(E, x, M, N) {
      for (
        var I = null, gt = null, P = x, ut = (x = 0), dt = null;
        P !== null && ut < M.length;
        ut++
      ) {
        P.index > ut ? ((dt = P), (P = null)) : (dt = P.sibling);
        var vt = z(E, P, M[ut], N);
        if (vt === null) {
          P === null && (P = dt);
          break;
        }
        (t && P && vt.alternate === null && e(E, P),
          (x = r(vt, x, ut)),
          gt === null ? (I = vt) : (gt.sibling = vt),
          (gt = vt),
          (P = dt));
      }
      if (ut === M.length) return (n(E, P), pt && un(E, ut), I);
      if (P === null) {
        for (; ut < M.length; ut++)
          ((P = j(E, M[ut], N)),
            P !== null && ((x = r(P, x, ut)), gt === null ? (I = P) : (gt.sibling = P), (gt = P)));
        return (pt && un(E, ut), I);
      }
      for (P = l(P); ut < M.length; ut++)
        ((dt = O(P, E, ut, M[ut], N)),
          dt !== null &&
            (t && dt.alternate !== null && P.delete(dt.key === null ? ut : dt.key),
            (x = r(dt, x, ut)),
            gt === null ? (I = dt) : (gt.sibling = dt),
            (gt = dt)));
      return (
        t &&
          P.forEach(function (Kn) {
            return e(E, Kn);
          }),
        pt && un(E, ut),
        I
      );
    }
    function et(E, x, M, N) {
      if (M == null) throw Error(s(151));
      for (
        var I = null, gt = null, P = x, ut = (x = 0), dt = null, vt = M.next();
        P !== null && !vt.done;
        ut++, vt = M.next()
      ) {
        P.index > ut ? ((dt = P), (P = null)) : (dt = P.sibling);
        var Kn = z(E, P, vt.value, N);
        if (Kn === null) {
          P === null && (P = dt);
          break;
        }
        (t && P && Kn.alternate === null && e(E, P),
          (x = r(Kn, x, ut)),
          gt === null ? (I = Kn) : (gt.sibling = Kn),
          (gt = Kn),
          (P = dt));
      }
      if (vt.done) return (n(E, P), pt && un(E, ut), I);
      if (P === null) {
        for (; !vt.done; ut++, vt = M.next())
          ((vt = j(E, vt.value, N)),
            vt !== null &&
              ((x = r(vt, x, ut)), gt === null ? (I = vt) : (gt.sibling = vt), (gt = vt)));
        return (pt && un(E, ut), I);
      }
      for (P = l(P); !vt.done; ut++, vt = M.next())
        ((vt = O(P, E, ut, vt.value, N)),
          vt !== null &&
            (t && vt.alternate !== null && P.delete(vt.key === null ? ut : vt.key),
            (x = r(vt, x, ut)),
            gt === null ? (I = vt) : (gt.sibling = vt),
            (gt = vt)));
      return (
        t &&
          P.forEach(function (Ab) {
            return e(E, Ab);
          }),
        pt && un(E, ut),
        I
      );
    }
    function zt(E, x, M, N) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === U &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case D:
            t: {
              for (var I = M.key; x !== null;) {
                if (x.key === I) {
                  if (((I = M.type), I === U)) {
                    if (x.tag === 7) {
                      (n(E, x.sibling), (N = o(x, M.props.children)), (N.return = E), (E = N));
                      break t;
                    }
                  } else if (
                    x.elementType === I ||
                    (typeof I == "object" && I !== null && I.$$typeof === $ && ri(I) === x.type)
                  ) {
                    (n(E, x.sibling), (N = o(x, M.props)), Ya(N, M), (N.return = E), (E = N));
                    break t;
                  }
                  n(E, x);
                  break;
                } else e(E, x);
                x = x.sibling;
              }
              M.type === U
                ? ((N = ai(M.props.children, E.mode, N, M.key)), (N.return = E), (E = N))
                : ((N = Pl(M.type, M.key, M.props, null, E.mode, N)),
                  Ya(N, M),
                  (N.return = E),
                  (E = N));
            }
            return d(E);
          case w:
            t: {
              for (I = M.key; x !== null;) {
                if (x.key === I)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === M.containerInfo &&
                    x.stateNode.implementation === M.implementation
                  ) {
                    (n(E, x.sibling), (N = o(x, M.children || [])), (N.return = E), (E = N));
                    break t;
                  } else {
                    n(E, x);
                    break;
                  }
                else e(E, x);
                x = x.sibling;
              }
              ((N = lo(M, E.mode, N)), (N.return = E), (E = N));
            }
            return d(E);
          case $:
            return ((M = ri(M)), zt(E, x, M, N));
        }
        if (Ut(M)) return K(E, x, M, N);
        if (xt(M)) {
          if (((I = xt(M)), typeof I != "function")) throw Error(s(150));
          return ((M = I.call(M)), et(E, x, M, N));
        }
        if (typeof M.then == "function") return zt(E, x, as(M), N);
        if (M.$$typeof === Y) return zt(E, x, ts(E, M), N);
        ls(E, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint"
        ? ((M = "" + M),
          x !== null && x.tag === 6
            ? (n(E, x.sibling), (N = o(x, M)), (N.return = E), (E = N))
            : (n(E, x), (N = ao(M, E.mode, N)), (N.return = E), (E = N)),
          d(E))
        : n(E, x);
    }
    return function (E, x, M, N) {
      try {
        Ha = 0;
        var I = zt(E, x, M, N);
        return ((Xi = null), I);
      } catch (P) {
        if (P === Gi || P === ns) throw P;
        var gt = xe(29, P, null, E.mode);
        return ((gt.lanes = N), (gt.return = E), gt);
      } finally {
      }
    };
  }
  var fi = Uh(!0),
    Lh = Uh(!1),
    On = !1;
  function vo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function bo(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Rn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function wn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (St & 2) !== 0)) {
      var o = l.pending;
      return (
        o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
        (l.pending = e),
        (e = Wl(t)),
        Th(t, null, n),
        e
      );
    }
    return (Fl(t, l, e, n), Wl(t));
  }
  function qa(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Of(t, n));
    }
  }
  function So(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var o = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (r === null ? (o = r = d) : (r = r.next = d), (n = n.next));
        } while (n !== null);
        r === null ? (o = r = e) : (r = r.next = e);
      } else o = r = e;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var To = !1;
  function Ga() {
    if (To) {
      var t = qi;
      if (t !== null) throw t;
    }
  }
  function Xa(t, e, n, l) {
    To = !1;
    var o = t.updateQueue;
    On = !1;
    var r = o.firstBaseUpdate,
      d = o.lastBaseUpdate,
      y = o.shared.pending;
    if (y !== null) {
      o.shared.pending = null;
      var S = y,
        C = S.next;
      ((S.next = null), d === null ? (r = C) : (d.next = C), (d = S));
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== d && (y === null ? (V.firstBaseUpdate = C) : (y.next = C), (V.lastBaseUpdate = S)));
    }
    if (r !== null) {
      var j = o.baseState;
      ((d = 0), (V = C = S = null), (y = r));
      do {
        var z = y.lane & -536870913,
          O = z !== y.lane;
        if (O ? (ht & z) === z : (l & z) === z) {
          (z !== 0 && z === Yi && (To = !0),
            V !== null &&
              (V = V.next =
                { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null }));
          t: {
            var K = t,
              et = y;
            z = e;
            var zt = n;
            switch (et.tag) {
              case 1:
                if (((K = et.payload), typeof K == "function")) {
                  j = K.call(zt, j, z);
                  break t;
                }
                j = K;
                break t;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = et.payload), (z = typeof K == "function" ? K.call(zt, j, z) : K), z == null)
                )
                  break t;
                j = b({}, j, z);
                break t;
              case 2:
                On = !0;
            }
          }
          ((z = y.callback),
            z !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = o.callbacks),
              O === null ? (o.callbacks = [z]) : O.push(z)));
        } else
          ((O = { lane: z, tag: y.tag, payload: y.payload, callback: y.callback, next: null }),
            V === null ? ((C = V = O), (S = j)) : (V = V.next = O),
            (d |= z));
        if (((y = y.next), y === null)) {
          if (((y = o.shared.pending), y === null)) break;
          ((O = y),
            (y = O.next),
            (O.next = null),
            (o.lastBaseUpdate = O),
            (o.shared.pending = null));
        }
      } while (!0);
      (V === null && (S = j),
        (o.baseState = S),
        (o.firstBaseUpdate = C),
        (o.lastBaseUpdate = V),
        r === null && (o.shared.lanes = 0),
        (Bn |= d),
        (t.lanes = d),
        (t.memoizedState = j));
    }
  }
  function Hh(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Yh(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) Hh(n[t], e);
  }
  var Zi = A(null),
    ss = A(0);
  function qh(t, e) {
    ((t = vn), X(ss, t), X(Zi, e), (vn = t | e.baseLanes));
  }
  function xo() {
    (X(ss, vn), X(Zi, Zi.current));
  }
  function Ao() {
    ((vn = ss.current), B(Zi), B(ss));
  }
  var Ae = A(null),
    Be = null;
  function Vn(t) {
    var e = t.alternate;
    (X(Ht, Ht.current & 1),
      X(Ae, t),
      Be === null && (e === null || Zi.current !== null || e.memoizedState !== null) && (Be = t));
  }
  function Eo(t) {
    (X(Ht, Ht.current), X(Ae, t), Be === null && (Be = t));
  }
  function Gh(t) {
    t.tag === 22 ? (X(Ht, Ht.current), X(Ae, t), Be === null && (Be = t)) : Nn();
  }
  function Nn() {
    (X(Ht, Ht.current), X(Ae, Ae.current));
  }
  function Ee(t) {
    (B(Ae), Be === t && (Be = null), B(Ht));
  }
  var Ht = A(0);
  function us(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Rr(n) || wr(n))) return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var cn = 0,
    lt = null,
    Dt = null,
    Xt = null,
    os = !1,
    Qi = !1,
    hi = !1,
    rs = 0,
    Za = 0,
    Ki = null,
    d1 = 0;
  function _t() {
    throw Error(s(321));
  }
  function Mo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!Te(t[n], e[n])) return !1;
    return !0;
  }
  function Do(t, e, n, l, o, r) {
    return (
      (cn = r),
      (lt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? Md : qo),
      (hi = !1),
      (r = n(l, o)),
      (hi = !1),
      Qi && (r = Zh(e, n, l, o)),
      Xh(t),
      r
    );
  }
  function Xh(t) {
    R.H = ka;
    var e = Dt !== null && Dt.next !== null;
    if (((cn = 0), (Xt = Dt = lt = null), (os = !1), (Za = 0), (Ki = null), e)) throw Error(s(300));
    t === null || Zt || ((t = t.dependencies), t !== null && Il(t) && (Zt = !0));
  }
  function Zh(t, e, n, l) {
    lt = t;
    var o = 0;
    do {
      if ((Qi && (Ki = null), (Za = 0), (Qi = !1), 25 <= o)) throw Error(s(301));
      if (((o += 1), (Xt = Dt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((R.H = Dd), (r = e(n, l)));
    } while (Qi);
    return r;
  }
  function m1() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Qa(e) : e),
      (t = t.useState()[0]),
      (Dt !== null ? Dt.memoizedState : null) !== t && (lt.flags |= 1024),
      e
    );
  }
  function Co() {
    var t = rs !== 0;
    return ((rs = 0), t);
  }
  function zo(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function Oo(t) {
    if (os) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      os = !1;
    }
    ((cn = 0), (Xt = Dt = lt = null), (Qi = !1), (Za = rs = 0), (Ki = null));
  }
  function ue() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Xt === null ? (lt.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt);
  }
  function Yt() {
    if (Dt === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Xt === null ? lt.memoizedState : Xt.next;
    if (e !== null) ((Xt = e), (Dt = t));
    else {
      if (t === null) throw lt.alternate === null ? Error(s(467)) : Error(s(310));
      ((Dt = t),
        (t = {
          memoizedState: Dt.memoizedState,
          baseState: Dt.baseState,
          baseQueue: Dt.baseQueue,
          queue: Dt.queue,
          next: null,
        }),
        Xt === null ? (lt.memoizedState = Xt = t) : (Xt = Xt.next = t));
    }
    return Xt;
  }
  function cs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Qa(t) {
    var e = Za;
    return (
      (Za += 1),
      Ki === null && (Ki = []),
      (t = _h(Ki, t, e)),
      (e = lt),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate), (R.H = e === null || e.memoizedState === null ? Md : qo)),
      t
    );
  }
  function fs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Qa(t);
      if (t.$$typeof === Y) return te(t);
    }
    throw Error(s(438, String(t)));
  }
  function Ro(t) {
    var e = null,
      n = lt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = lt.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = cs()), (lt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = nt;
    return (e.index++, n);
  }
  function fn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function hs(t) {
    var e = Yt();
    return wo(e, Dt, t);
  }
  function wo(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var o = t.baseQueue,
      r = l.pending;
    if (r !== null) {
      if (o !== null) {
        var d = o.next;
        ((o.next = r.next), (r.next = d));
      }
      ((e.baseQueue = o = r), (l.pending = null));
    }
    if (((r = t.baseState), o === null)) t.memoizedState = r;
    else {
      e = o.next;
      var y = (d = null),
        S = null,
        C = e,
        V = !1;
      do {
        var j = C.lane & -536870913;
        if (j !== C.lane ? (ht & j) === j : (cn & j) === j) {
          var z = C.revertLane;
          if (z === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              j === Yi && (V = !0));
          else if ((cn & z) === z) {
            ((C = C.next), z === Yi && (V = !0));
            continue;
          } else
            ((j = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              S === null ? ((y = S = j), (d = r)) : (S = S.next = j),
              (lt.lanes |= z),
              (Bn |= z));
          ((j = C.action), hi && n(r, j), (r = C.hasEagerState ? C.eagerState : n(r, j)));
        } else
          ((z = {
            lane: j,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            S === null ? ((y = S = z), (d = r)) : (S = S.next = z),
            (lt.lanes |= j),
            (Bn |= j));
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (S === null ? (d = r) : (S.next = y),
        !Te(r, t.memoizedState) && ((Zt = !0), V && ((n = qi), n !== null)))
      )
        throw n;
      ((t.memoizedState = r), (t.baseState = d), (t.baseQueue = S), (l.lastRenderedState = r));
    }
    return (o === null && (l.lanes = 0), [t.memoizedState, l.dispatch]);
  }
  function Vo(t) {
    var e = Yt(),
      n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      o = n.pending,
      r = e.memoizedState;
    if (o !== null) {
      n.pending = null;
      var d = (o = o.next);
      do ((r = t(r, d.action)), (d = d.next));
      while (d !== o);
      (Te(r, e.memoizedState) || (Zt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, l];
  }
  function Qh(t, e, n) {
    var l = lt,
      o = Yt(),
      r = pt;
    if (r) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var d = !Te((Dt || o).memoizedState, n);
    if (
      (d && ((o.memoizedState = n), (Zt = !0)),
      (o = o.queue),
      jo(Jh.bind(null, l, o, t), [t]),
      o.getSnapshot !== e || d || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ki(9, { destroy: void 0 }, kh.bind(null, l, o, n, e), null),
        Ot === null)
      )
        throw Error(s(349));
      r || (cn & 127) !== 0 || Kh(l, e, n);
    }
    return n;
  }
  function Kh(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = lt.updateQueue),
      e === null
        ? ((e = cs()), (lt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function kh(t, e, n, l) {
    ((e.value = n), (e.getSnapshot = l), Fh(e) && Wh(t));
  }
  function Jh(t, e, n) {
    return n(function () {
      Fh(e) && Wh(t);
    });
  }
  function Fh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Te(t, n);
    } catch {
      return !0;
    }
  }
  function Wh(t) {
    var e = ii(t, 2);
    e !== null && ye(e, t, 2);
  }
  function No(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), hi)) {
        xn(!0);
        try {
          n();
        } finally {
          xn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ph(t, e, n, l) {
    return ((t.baseState = n), wo(t, Dt, typeof l == "function" ? l : fn));
  }
  function p1(t, e, n, l, o) {
    if (ps(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          r.listeners.push(d);
        },
      };
      (R.T !== null ? n(!0) : (r.isTransition = !1),
        l(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), $h(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function $h(t, e) {
    var n = e.action,
      l = e.payload,
      o = t.state;
    if (e.isTransition) {
      var r = R.T,
        d = {};
      R.T = d;
      try {
        var y = n(o, l),
          S = R.S;
        (S !== null && S(d, y), Ih(t, e, y));
      } catch (C) {
        _o(t, e, C);
      } finally {
        (r !== null && d.types !== null && (r.types = d.types), (R.T = r));
      }
    } else
      try {
        ((r = n(o, l)), Ih(t, e, r));
      } catch (C) {
        _o(t, e, C);
      }
  }
  function Ih(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            td(t, e, l);
          },
          function (l) {
            return _o(t, e, l);
          },
        )
      : td(t, e, n);
  }
  function td(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      ed(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), $h(t, n))));
  }
  function _o(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do ((e.status = "rejected"), (e.reason = n), ed(e), (e = e.next));
      while (e !== l);
    }
    t.action = null;
  }
  function ed(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function nd(t, e) {
    return e;
  }
  function id(t, e) {
    if (pt) {
      var n = Ot.formState;
      if (n !== null) {
        t: {
          var l = lt;
          if (pt) {
            if (wt) {
              e: {
                for (var o = wt, r = je; o.nodeType !== 8;) {
                  if (!r) {
                    o = null;
                    break e;
                  }
                  if (((o = Ue(o.nextSibling)), o === null)) {
                    o = null;
                    break e;
                  }
                }
                ((r = o.data), (o = r === "F!" || r === "F" ? o : null));
              }
              if (o) {
                ((wt = Ue(o.nextSibling)), (l = o.data === "F!"));
                break t;
              }
            }
            Cn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nd,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = xd.bind(null, lt, l)),
      (l.dispatch = n),
      (l = No(!1)),
      (r = Yo.bind(null, lt, !1, l.queue)),
      (l = ue()),
      (o = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = o),
      (n = p1.bind(null, lt, o, r, n)),
      (o.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function ad(t) {
    var e = Yt();
    return ld(e, Dt, t);
  }
  function ld(t, e, n) {
    if (
      ((e = wo(t, e, nd)[0]),
      (t = hs(fn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Qa(e);
      } catch (d) {
        throw d === Gi ? ns : d;
      }
    else l = e;
    e = Yt();
    var o = e.queue,
      r = o.dispatch;
    return (
      n !== e.memoizedState &&
        ((lt.flags |= 2048), ki(9, { destroy: void 0 }, y1.bind(null, o, n), null)),
      [l, r, t]
    );
  }
  function y1(t, e) {
    t.action = e;
  }
  function sd(t) {
    var e = Yt(),
      n = Dt;
    if (n !== null) return ld(e, n, t);
    (Yt(), (e = e.memoizedState), (n = Yt()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = t), [e, l, !1]);
  }
  function ki(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = lt.updateQueue),
      e === null && ((e = cs()), (lt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function ud() {
    return Yt().memoizedState;
  }
  function ds(t, e, n, l) {
    var o = ue();
    ((lt.flags |= t),
      (o.memoizedState = ki(1 | e, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function ms(t, e, n, l) {
    var o = Yt();
    l = l === void 0 ? null : l;
    var r = o.memoizedState.inst;
    Dt !== null && l !== null && Mo(l, Dt.memoizedState.deps)
      ? (o.memoizedState = ki(e, r, n, l))
      : ((lt.flags |= t), (o.memoizedState = ki(1 | e, r, n, l)));
  }
  function od(t, e) {
    ds(8390656, 8, t, e);
  }
  function jo(t, e) {
    ms(2048, 8, t, e);
  }
  function g1(t) {
    lt.flags |= 4;
    var e = lt.updateQueue;
    if (e === null) ((e = cs()), (lt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function rd(t) {
    var e = Yt().memoizedState;
    return (
      g1({ ref: e, nextImpl: t }),
      function () {
        if ((St & 2) !== 0) throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function cd(t, e) {
    return ms(4, 2, t, e);
  }
  function fd(t, e) {
    return ms(4, 4, t, e);
  }
  function hd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function dd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), ms(4, 4, hd.bind(null, e, t), n));
  }
  function Bo() {}
  function md(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Mo(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function pd(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Mo(e, l[1])) return l[0];
    if (((l = t()), hi)) {
      xn(!0);
      try {
        t();
      } finally {
        xn(!1);
      }
    }
    return ((n.memoizedState = [l, e]), l);
  }
  function Uo(t, e, n) {
    return n === void 0 || ((cn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = ym()), (lt.lanes |= t), (Bn |= t), n);
  }
  function yd(t, e, n, l) {
    return Te(n, e)
      ? n
      : Zi.current !== null
        ? ((t = Uo(t, n, l)), Te(t, e) || (Zt = !0), t)
        : (cn & 42) === 0 || ((cn & 1073741824) !== 0 && (ht & 261930) === 0)
          ? ((Zt = !0), (t.memoizedState = n))
          : ((t = ym()), (lt.lanes |= t), (Bn |= t), e);
  }
  function gd(t, e, n, l, o) {
    var r = G.p;
    G.p = r !== 0 && 8 > r ? r : 8;
    var d = R.T,
      y = {};
    ((R.T = y), Yo(t, !1, e, n));
    try {
      var S = o(),
        C = R.S;
      if (
        (C !== null && C(y, S), S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var V = h1(S, l);
        Ka(t, e, V, Ce(t));
      } else Ka(t, e, l, Ce(t));
    } catch (j) {
      Ka(t, e, { then: function () {}, status: "rejected", reason: j }, Ce());
    } finally {
      ((G.p = r), d !== null && y.types !== null && (d.types = y.types), (R.T = d));
    }
  }
  function v1() {}
  function Lo(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var o = vd(t).queue;
    gd(
      t,
      o,
      e,
      Q,
      n === null
        ? v1
        : function () {
            return (bd(t), n(l));
          },
    );
  }
  function vd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: Q,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function bd(t) {
    var e = vd(t);
    (e.next === null && (e = t.alternate.memoizedState), Ka(t, e.next.queue, {}, Ce()));
  }
  function Ho() {
    return te(rl);
  }
  function Sd() {
    return Yt().memoizedState;
  }
  function Td() {
    return Yt().memoizedState;
  }
  function b1(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = Rn(n);
          var l = wn(e, t, n);
          (l !== null && (ye(l, e, n), qa(l, e, n)), (e = { cache: mo() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function S1(t, e, n) {
    var l = Ce();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ps(t) ? Ad(e, n) : ((n = no(t, e, n, l)), n !== null && (ye(n, t, l), Ed(n, e, l))));
  }
  function xd(t, e, n) {
    var l = Ce();
    Ka(t, e, n, l);
  }
  function Ka(t, e, n, l) {
    var o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ps(t)) Ad(e, o);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var d = e.lastRenderedState,
            y = r(d, n);
          if (((o.hasEagerState = !0), (o.eagerState = y), Te(y, d)))
            return (Fl(t, e, o, 0), Ot === null && Jl(), !1);
        } catch {
        } finally {
        }
      if (((n = no(t, e, o, l)), n !== null)) return (ye(n, t, l), Ed(n, e, l), !0);
    }
    return !1;
  }
  function Yo(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: vr(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ps(t))
    ) {
      if (e) throw Error(s(479));
    } else ((e = no(t, n, l, 2)), e !== null && ye(e, t, 2));
  }
  function ps(t) {
    var e = t.alternate;
    return t === lt || (e !== null && e === lt);
  }
  function Ad(t, e) {
    Qi = os = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function Ed(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      ((l &= t.pendingLanes), (n |= l), (e.lanes = n), Of(t, n));
    }
  }
  var ka = {
    readContext: te,
    use: fs,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
    useHostTransitionStatus: _t,
    useFormState: _t,
    useActionState: _t,
    useOptimistic: _t,
    useMemoCache: _t,
    useCacheRefresh: _t,
  };
  ka.useEffectEvent = _t;
  var Md = {
      readContext: te,
      use: fs,
      useCallback: function (t, e) {
        return ((ue().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: te,
      useEffect: od,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), ds(4194308, 4, hd.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return ds(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ds(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var l = t();
        if (hi) {
          xn(!0);
          try {
            t();
          } finally {
            xn(!1);
          }
        }
        return ((n.memoizedState = [l, e]), l);
      },
      useReducer: function (t, e, n) {
        var l = ue();
        if (n !== void 0) {
          var o = n(e);
          if (hi) {
            xn(!0);
            try {
              n(e);
            } finally {
              xn(!1);
            }
          }
        } else o = e;
        return (
          (l.memoizedState = l.baseState = o),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: o,
          }),
          (l.queue = t),
          (t = t.dispatch = S1.bind(null, lt, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = No(t);
        var e = t.queue,
          n = xd.bind(null, lt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Bo,
      useDeferredValue: function (t, e) {
        var n = ue();
        return Uo(n, t, e);
      },
      useTransition: function () {
        var t = No(!1);
        return ((t = gd.bind(null, lt, t.queue, !0, !1)), (ue().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var l = lt,
          o = ue();
        if (pt) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = e()), Ot === null)) throw Error(s(349));
          (ht & 127) !== 0 || Kh(l, e, n);
        }
        o.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (o.queue = r),
          od(Jh.bind(null, l, r, t), [t]),
          (l.flags |= 2048),
          ki(9, { destroy: void 0 }, kh.bind(null, l, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = Ot.identifierPrefix;
        if (pt) {
          var n = We,
            l = Fe;
          ((n = (l & ~(1 << (32 - Se(l) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = rs++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = d1++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ho,
      useFormState: id,
      useActionState: id,
      useOptimistic: function (t) {
        var e = ue();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return ((e.queue = n), (e = Yo.bind(null, lt, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: Ro,
      useCacheRefresh: function () {
        return (ue().memoizedState = b1.bind(null, lt));
      },
      useEffectEvent: function (t) {
        var e = ue(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((St & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    qo = {
      readContext: te,
      use: fs,
      useCallback: md,
      useContext: te,
      useEffect: jo,
      useImperativeHandle: dd,
      useInsertionEffect: cd,
      useLayoutEffect: fd,
      useMemo: pd,
      useReducer: hs,
      useRef: ud,
      useState: function () {
        return hs(fn);
      },
      useDebugValue: Bo,
      useDeferredValue: function (t, e) {
        var n = Yt();
        return yd(n, Dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = hs(fn)[0],
          e = Yt().memoizedState;
        return [typeof t == "boolean" ? t : Qa(t), e];
      },
      useSyncExternalStore: Qh,
      useId: Sd,
      useHostTransitionStatus: Ho,
      useFormState: ad,
      useActionState: ad,
      useOptimistic: function (t, e) {
        var n = Yt();
        return Ph(n, Dt, t, e);
      },
      useMemoCache: Ro,
      useCacheRefresh: Td,
    };
  qo.useEffectEvent = rd;
  var Dd = {
    readContext: te,
    use: fs,
    useCallback: md,
    useContext: te,
    useEffect: jo,
    useImperativeHandle: dd,
    useInsertionEffect: cd,
    useLayoutEffect: fd,
    useMemo: pd,
    useReducer: Vo,
    useRef: ud,
    useState: function () {
      return Vo(fn);
    },
    useDebugValue: Bo,
    useDeferredValue: function (t, e) {
      var n = Yt();
      return Dt === null ? Uo(n, t, e) : yd(n, Dt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Vo(fn)[0],
        e = Yt().memoizedState;
      return [typeof t == "boolean" ? t : Qa(t), e];
    },
    useSyncExternalStore: Qh,
    useId: Sd,
    useHostTransitionStatus: Ho,
    useFormState: sd,
    useActionState: sd,
    useOptimistic: function (t, e) {
      var n = Yt();
      return Dt !== null ? Ph(n, Dt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Ro,
    useCacheRefresh: Td,
  };
  Dd.useEffectEvent = rd;
  function Go(t, e, n, l) {
    ((e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Xo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = Ce(),
        o = Rn(l);
      ((o.payload = e),
        n != null && (o.callback = n),
        (e = wn(t, o, l)),
        e !== null && (ye(e, t, l), qa(e, t, l)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = Ce(),
        o = Rn(l);
      ((o.tag = 1),
        (o.payload = e),
        n != null && (o.callback = n),
        (e = wn(t, o, l)),
        e !== null && (ye(e, t, l), qa(e, t, l)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ce(),
        l = Rn(n);
      ((l.tag = 2),
        e != null && (l.callback = e),
        (e = wn(t, l, n)),
        e !== null && (ye(e, t, n), qa(e, t, n)));
    },
  };
  function Cd(t, e, n, l, o, r, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, r, d)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Na(n, l) || !Na(o, r)
          : !0
    );
  }
  function zd(t, e, n, l) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && Xo.enqueueReplaceState(e, e.state, null));
  }
  function di(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var o in t) n[o] === void 0 && (n[o] = t[o]);
    }
    return n;
  }
  function Od(t) {
    kl(t);
  }
  function Rd(t) {
    console.error(t);
  }
  function wd(t) {
    kl(t);
  }
  function ys(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Vd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Zo(t, e, n) {
    return (
      (n = Rn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ys(t, e);
      }),
      n
    );
  }
  function Nd(t) {
    return ((t = Rn(t)), (t.tag = 3), t);
  }
  function _d(t, e, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var r = l.value;
      ((t.payload = function () {
        return o(r);
      }),
        (t.callback = function () {
          Vd(e, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        (Vd(e, n, l),
          typeof o != "function" && (Un === null ? (Un = new Set([this])) : Un.add(this)));
        var y = l.stack;
        this.componentDidCatch(l.value, { componentStack: y !== null ? y : "" });
      });
  }
  function T1(t, e, n, l, o) {
    if (((n.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
      if (((e = n.alternate), e !== null && Hi(e, n, o, !0), (n = Ae.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Be === null ? zs() : n.alternate === null && jt === 0 && (jt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              l === is
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  pr(t, l, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === is
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  pr(t, l, o)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (pr(t, l, o), zs(), !1);
    }
    if (pt)
      return (
        (e = Ae.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = o),
            l !== oo && ((t = Error(s(422), { cause: l })), Ba(Ve(t, n))))
          : (l !== oo && ((e = Error(s(423), { cause: l })), Ba(Ve(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (o &= -o),
            (t.lanes |= o),
            (l = Ve(l, n)),
            (o = Zo(t.stateNode, l, o)),
            So(t, o),
            jt !== 4 && (jt = 2)),
        !1
      );
    var r = Error(s(520), { cause: l });
    if (((r = Ve(r, n)), el === null ? (el = [r]) : el.push(r), jt !== 4 && (jt = 2), e === null))
      return !0;
    ((l = Ve(l, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = o & -o),
            (n.lanes |= t),
            (t = Zo(n.stateNode, l, t)),
            So(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Un === null || !Un.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (o &= -o),
              (n.lanes |= o),
              (o = Nd(o)),
              _d(o, t, n, l),
              So(n, o),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Qo = Error(s(461)),
    Zt = !1;
  function ee(t, e, n, l) {
    e.child = t === null ? Lh(e, null, n, l) : fi(e, t.child, n, l);
  }
  function jd(t, e, n, l, o) {
    n = n.render;
    var r = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var y in l) y !== "ref" && (d[y] = l[y]);
    } else d = l;
    return (
      ui(e),
      (l = Do(t, e, n, d, r, o)),
      (y = Co()),
      t !== null && !Zt
        ? (zo(t, e, o), hn(t, e, o))
        : (pt && y && so(e), (e.flags |= 1), ee(t, e, l, o), e.child)
    );
  }
  function Bd(t, e, n, l, o) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !io(r) && r.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = r), Ud(t, e, r, l, o))
        : ((t = Pl(n.type, null, l, e, e.mode, o)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((r = t.child), !Io(t, o))) {
      var d = r.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Na), n(d, l) && t.ref === e.ref))
        return hn(t, e, o);
    }
    return ((e.flags |= 1), (t = sn(r, l)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function Ud(t, e, n, l, o) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Na(r, l) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = l = r), Io(t, o))) (t.flags & 131072) !== 0 && (Zt = !0);
        else return ((e.lanes = t.lanes), hn(t, e, o));
    }
    return Ko(t, e, n, l, o);
  }
  function Ld(t, e, n, l) {
    var o = l.children,
      r = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, o = 0; l !== null;)
            ((o = o | l.lanes | l.childLanes), (l = l.sibling));
          l = o & ~r;
        } else ((l = 0), (e.child = null));
        return Hd(t, e, r, n, l);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && es(e, r !== null ? r.cachePool : null),
          r !== null ? qh(e, r) : xo(),
          Gh(e));
      else return ((l = e.lanes = 536870912), Hd(t, e, r !== null ? r.baseLanes | n : n, n, l));
    } else
      r !== null
        ? (es(e, r.cachePool), qh(e, r), Nn(), (e.memoizedState = null))
        : (t !== null && es(e, null), xo(), Nn());
    return (ee(t, e, o, n), e.child);
  }
  function Ja(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Hd(t, e, n, l, o) {
    var r = yo();
    return (
      (r = r === null ? null : { parent: Gt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && es(e, null),
      xo(),
      Gh(e),
      t !== null && Hi(t, e, l, !0),
      (e.childLanes = o),
      null
    );
  }
  function gs(t, e) {
    return (
      (e = bs({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Yd(t, e, n) {
    return (
      fi(e, t.child, null, n),
      (t = gs(e, e.pendingProps)),
      (t.flags |= 2),
      Ee(e),
      (e.memoizedState = null),
      t
    );
  }
  function x1(t, e, n) {
    var l = e.pendingProps,
      o = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (pt) {
        if (l.mode === "hidden") return ((t = gs(e, l)), (e.lanes = 536870912), Ja(null, t));
        if (
          (Eo(e),
          (t = wt)
            ? ((t = $m(t, je)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Mn !== null ? { id: Fe, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ah(t)),
                (n.return = e),
                (e.child = n),
                (It = e),
                (wt = null)))
            : (t = null),
          t === null)
        )
          throw Cn(e);
        return ((e.lanes = 536870912), null);
      }
      return gs(e, l);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var d = r.dehydrated;
      if ((Eo(e), o))
        if (e.flags & 256) ((e.flags &= -257), (e = Yd(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(s(558));
      else if ((Zt || Hi(t, e, n, !1), (o = (n & t.childLanes) !== 0), Zt || o)) {
        if (((l = Ot), l !== null && ((d = Rf(l, n)), d !== 0 && d !== r.retryLane)))
          throw ((r.retryLane = d), ii(t, d), ye(l, t, d), Qo);
        (zs(), (e = Yd(t, e, n)));
      } else
        ((t = r.treeContext),
          (wt = Ue(d.nextSibling)),
          (It = e),
          (pt = !0),
          (Dn = null),
          (je = !1),
          t !== null && Dh(e, t),
          (e = gs(e, l)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = sn(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function vs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Ko(t, e, n, l, o) {
    return (
      ui(e),
      (n = Do(t, e, n, l, void 0, o)),
      (l = Co()),
      t !== null && !Zt
        ? (zo(t, e, o), hn(t, e, o))
        : (pt && l && so(e), (e.flags |= 1), ee(t, e, n, o), e.child)
    );
  }
  function qd(t, e, n, l, o, r) {
    return (
      ui(e),
      (e.updateQueue = null),
      (n = Zh(e, l, n, o)),
      Xh(t),
      (l = Co()),
      t !== null && !Zt
        ? (zo(t, e, r), hn(t, e, r))
        : (pt && l && so(e), (e.flags |= 1), ee(t, e, n, r), e.child)
    );
  }
  function Gd(t, e, n, l, o) {
    if ((ui(e), e.stateNode === null)) {
      var r = ji,
        d = n.contextType;
      (typeof d == "object" && d !== null && (r = te(d)),
        (r = new n(l, r)),
        (e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Xo),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = l),
        (r.state = e.memoizedState),
        (r.refs = {}),
        vo(e),
        (d = n.contextType),
        (r.context = typeof d == "object" && d !== null ? te(d) : ji),
        (r.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Go(e, n, d, l), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((d = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
          d !== r.state && Xo.enqueueReplaceState(r, r.state, null),
          Xa(e, l, r, o),
          Ga(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0));
    } else if (t === null) {
      r = e.stateNode;
      var y = e.memoizedProps,
        S = di(n, y);
      r.props = S;
      var C = r.context,
        V = n.contextType;
      ((d = ji), typeof V == "object" && V !== null && (d = te(V)));
      var j = n.getDerivedStateFromProps;
      ((V = typeof j == "function" || typeof r.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        V ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((y || C !== d) && zd(e, r, l, d)),
        (On = !1));
      var z = e.memoizedState;
      ((r.state = z),
        Xa(e, l, r, o),
        Ga(),
        (C = e.memoizedState),
        y || z !== C || On
          ? (typeof j == "function" && (Go(e, n, j, l), (C = e.memoizedState)),
            (S = On || Cd(e, n, S, l, z, C, d))
              ? (V ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" && r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = C)),
            (r.props = l),
            (r.state = C),
            (r.context = d),
            (l = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), (l = !1)));
    } else {
      ((r = e.stateNode),
        bo(t, e),
        (d = e.memoizedProps),
        (V = di(n, d)),
        (r.props = V),
        (j = e.pendingProps),
        (z = r.context),
        (C = n.contextType),
        (S = ji),
        typeof C == "object" && C !== null && (S = te(C)),
        (y = n.getDerivedStateFromProps),
        (C = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((d !== j || z !== S) && zd(e, r, l, S)),
        (On = !1),
        (z = e.memoizedState),
        (r.state = z),
        Xa(e, l, r, o),
        Ga());
      var O = e.memoizedState;
      d !== j || z !== O || On || (t !== null && t.dependencies !== null && Il(t.dependencies))
        ? (typeof y == "function" && (Go(e, n, y, l), (O = e.memoizedState)),
          (V =
            On ||
            Cd(e, n, V, l, z, O, S) ||
            (t !== null && t.dependencies !== null && Il(t.dependencies)))
            ? (C ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, O, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(l, O, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (d === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = O)),
          (r.props = l),
          (r.state = O),
          (r.context = S),
          (l = V))
        : (typeof r.componentDidUpdate != "function" ||
            (d === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (r = l),
      vs(t, e),
      (l = (e.flags & 128) !== 0),
      r || l
        ? ((r = e.stateNode),
          (n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = fi(e, t.child, null, o)), (e.child = fi(e, null, n, o)))
            : ee(t, e, n, o),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = hn(t, e, o)),
      t
    );
  }
  function Xd(t, e, n, l) {
    return (li(), (e.flags |= 256), ee(t, e, n, l), e.child);
  }
  var ko = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Jo(t) {
    return { baseLanes: t, cachePool: Vh() };
  }
  function Fo(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= De), t);
  }
  function Zd(t, e, n) {
    var l = e.pendingProps,
      o = !1,
      r = (e.flags & 128) !== 0,
      d;
    if (
      ((d = r) || (d = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      d && ((o = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (pt) {
        if (
          (o ? Vn(e) : Nn(),
          (t = wt)
            ? ((t = $m(t, je)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Mn !== null ? { id: Fe, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Ah(t)),
                (n.return = e),
                (e.child = n),
                (It = e),
                (wt = null)))
            : (t = null),
          t === null)
        )
          throw Cn(e);
        return (wr(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var y = l.children;
      return (
        (l = l.fallback),
        o
          ? (Nn(),
            (o = e.mode),
            (y = bs({ mode: "hidden", children: y }, o)),
            (l = ai(l, o, n, null)),
            (y.return = e),
            (l.return = e),
            (y.sibling = l),
            (e.child = y),
            (l = e.child),
            (l.memoizedState = Jo(n)),
            (l.childLanes = Fo(t, d, n)),
            (e.memoizedState = ko),
            Ja(null, l))
          : (Vn(e), Wo(e, y))
      );
    }
    var S = t.memoizedState;
    if (S !== null && ((y = S.dehydrated), y !== null)) {
      if (r)
        e.flags & 256
          ? (Vn(e), (e.flags &= -257), (e = Po(t, e, n)))
          : e.memoizedState !== null
            ? (Nn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Nn(),
              (y = l.fallback),
              (o = e.mode),
              (l = bs({ mode: "visible", children: l.children }, o)),
              (y = ai(y, o, n, null)),
              (y.flags |= 2),
              (l.return = e),
              (y.return = e),
              (l.sibling = y),
              (e.child = l),
              fi(e, t.child, null, n),
              (l = e.child),
              (l.memoizedState = Jo(n)),
              (l.childLanes = Fo(t, d, n)),
              (e.memoizedState = ko),
              (e = Ja(null, l)));
      else if ((Vn(e), wr(y))) {
        if (((d = y.nextSibling && y.nextSibling.dataset), d)) var C = d.dgst;
        ((d = C),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = d),
          Ba({ value: l, source: null, stack: null }),
          (e = Po(t, e, n)));
      } else if ((Zt || Hi(t, e, n, !1), (d = (n & t.childLanes) !== 0), Zt || d)) {
        if (((d = Ot), d !== null && ((l = Rf(d, n)), l !== 0 && l !== S.retryLane)))
          throw ((S.retryLane = l), ii(t, l), ye(d, t, l), Qo);
        (Rr(y) || zs(), (e = Po(t, e, n)));
      } else
        Rr(y)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (wt = Ue(y.nextSibling)),
            (It = e),
            (pt = !0),
            (Dn = null),
            (je = !1),
            t !== null && Dh(e, t),
            (e = Wo(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return o
      ? (Nn(),
        (y = l.fallback),
        (o = e.mode),
        (S = t.child),
        (C = S.sibling),
        (l = sn(S, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 65011712),
        C !== null ? (y = sn(C, y)) : ((y = ai(y, o, n, null)), (y.flags |= 2)),
        (y.return = e),
        (l.return = e),
        (l.sibling = y),
        (e.child = l),
        Ja(null, l),
        (l = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Jo(n))
          : ((o = y.cachePool),
            o !== null
              ? ((S = Gt._currentValue), (o = o.parent !== S ? { parent: S, pool: S } : o))
              : (o = Vh()),
            (y = { baseLanes: y.baseLanes | n, cachePool: o })),
        (l.memoizedState = y),
        (l.childLanes = Fo(t, d, n)),
        (e.memoizedState = ko),
        Ja(t.child, l))
      : (Vn(e),
        (n = t.child),
        (t = n.sibling),
        (n = sn(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions), d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Wo(t, e) {
    return ((e = bs({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function bs(t, e) {
    return ((t = xe(22, t, null, e)), (t.lanes = 0), t);
  }
  function Po(t, e, n) {
    return (
      fi(e, t.child, null, n),
      (t = Wo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Qd(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    (l !== null && (l.lanes |= e), fo(t.return, e, n));
  }
  function $o(t, e, n, l, o, r) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: o,
          treeForkCount: r,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = o),
        (d.treeForkCount = r));
  }
  function Kd(t, e, n) {
    var l = e.pendingProps,
      o = l.revealOrder,
      r = l.tail;
    l = l.children;
    var d = Ht.current,
      y = (d & 2) !== 0;
    if (
      (y ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      X(Ht, d),
      ee(t, e, l, n),
      (l = pt ? ja : 0),
      !y && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Qd(t, n, e);
        else if (t.tag === 19) Qd(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (o) {
      case "forwards":
        for (n = e.child, o = null; n !== null;)
          ((t = n.alternate), t !== null && us(t) === null && (o = n), (n = n.sibling));
        ((n = o),
          n === null ? ((o = e.child), (e.child = null)) : ((o = n.sibling), (n.sibling = null)),
          $o(e, !1, o, n, r, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = e.child, e.child = null; o !== null;) {
          if (((t = o.alternate), t !== null && us(t) === null)) {
            e.child = o;
            break;
          }
          ((t = o.sibling), (o.sibling = n), (n = o), (o = t));
        }
        $o(e, !0, n, null, r, l);
        break;
      case "together":
        $o(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function hn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (Bn |= e.lanes), (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Hi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, n = sn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;)
        ((t = t.sibling), (n = n.sibling = sn(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Io(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Il(t)));
  }
  function A1(t, e, n) {
    switch (e.tag) {
      case 3:
        (se(e, e.stateNode.containerInfo), zn(e, Gt, t.memoizedState.cache), li());
        break;
      case 27:
      case 5:
        Sa(e);
        break;
      case 4:
        se(e, e.stateNode.containerInfo);
        break;
      case 10:
        zn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Eo(e), null);
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Vn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Zd(t, e, n)
              : (Vn(e), (t = hn(t, e, n)), t !== null ? t.sibling : null);
        Vn(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Hi(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          o)
        ) {
          if (l) return Kd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((o = e.memoizedState),
          o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          X(Ht, Ht.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Ld(t, e, n, e.pendingProps));
      case 24:
        zn(e, Gt, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function kd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!Io(t, n) && (e.flags & 128) === 0) return ((Zt = !1), A1(t, e, n));
        Zt = (t.flags & 131072) !== 0;
      }
    else ((Zt = !1), pt && (e.flags & 1048576) !== 0 && Mh(e, ja, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = ri(e.elementType)), (e.type = t), typeof t == "function"))
            io(t)
              ? ((l = di(t, l)), (e.tag = 1), (e = Gd(null, e, t, l, n)))
              : ((e.tag = 0), (e = Ko(null, e, t, l, n)));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === Z) {
                ((e.tag = 11), (e = jd(null, e, t, l, n)));
                break t;
              } else if (o === J) {
                ((e.tag = 14), (e = Bd(null, e, t, l, n)));
                break t;
              }
            }
            throw ((e = qt(t) || t), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return Ko(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((l = e.type), (o = di(l, e.pendingProps)), Gd(t, e, l, o, n));
      case 3:
        t: {
          if ((se(e, e.stateNode.containerInfo), t === null)) throw Error(s(387));
          l = e.pendingProps;
          var r = e.memoizedState;
          ((o = r.element), bo(t, e), Xa(e, l, null, n));
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            zn(e, Gt, l),
            l !== r.cache && ho(e, [Gt], n, !0),
            Ga(),
            (l = d.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = Xd(t, e, l, n);
              break t;
            } else if (l !== o) {
              ((o = Ve(Error(s(424)), e)), Ba(o), (e = Xd(t, e, l, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                wt = Ue(t.firstChild),
                  It = e,
                  pt = !0,
                  Dn = null,
                  je = !0,
                  n = Lh(e, null, l, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((li(), l === o)) {
              e = hn(t, e, n);
              break t;
            }
            ee(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          vs(t, e),
          t === null
            ? (n = ap(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : pt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = js(rt.current).createElement(n)),
                (l[$t] = e),
                (l[ce] = t),
                ne(l, n, t),
                Ft(l),
                (e.stateNode = l))
            : (e.memoizedState = ap(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          Sa(e),
          t === null &&
            pt &&
            ((l = e.stateNode = ep(e.type, e.pendingProps, rt.current)),
            (It = e),
            (je = !0),
            (o = wt),
            qn(e.type) ? ((Vr = o), (wt = Ue(l.firstChild))) : (wt = o)),
          ee(t, e, e.pendingProps.children, n),
          vs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            pt &&
            ((o = l = wt) &&
              ((l = I1(l, e.type, e.pendingProps, je)),
              l !== null
                ? ((e.stateNode = l), (It = e), (wt = Ue(l.firstChild)), (je = !1), (o = !0))
                : (o = !1)),
            o || Cn(e)),
          Sa(e),
          (o = e.type),
          (r = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = r.children),
          Cr(o, r) ? (l = null) : d !== null && Cr(o, d) && (e.flags |= 32),
          e.memoizedState !== null && ((o = Do(t, e, m1, null, null, n)), (rl._currentValue = o)),
          vs(t, e),
          ee(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            pt &&
            ((t = n = wt) &&
              ((n = tb(n, e.pendingProps, je)),
              n !== null ? ((e.stateNode = n), (It = e), (wt = null), (t = !0)) : (t = !1)),
            t || Cn(e)),
          null
        );
      case 13:
        return Zd(t, e, n);
      case 4:
        return (
          se(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = fi(e, null, l, n)) : ee(t, e, l, n),
          e.child
        );
      case 11:
        return jd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (ee(t, e, e.pendingProps, n), e.child);
      case 8:
        return (ee(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (ee(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((l = e.pendingProps), zn(e, e.type, l.value), ee(t, e, l.children, n), e.child);
      case 9:
        return (
          (o = e.type._context),
          (l = e.pendingProps.children),
          ui(e),
          (o = te(o)),
          (l = l(o)),
          (e.flags |= 1),
          ee(t, e, l, n),
          e.child
        );
      case 14:
        return Bd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Ud(t, e, e.type, e.pendingProps, n);
      case 19:
        return Kd(t, e, n);
      case 31:
        return x1(t, e, n);
      case 22:
        return Ld(t, e, n, e.pendingProps);
      case 24:
        return (
          ui(e),
          (l = te(Gt)),
          t === null
            ? ((o = yo()),
              o === null &&
                ((o = Ot),
                (r = mo()),
                (o.pooledCache = r),
                r.refCount++,
                r !== null && (o.pooledCacheLanes |= n),
                (o = r)),
              (e.memoizedState = { parent: l, cache: o }),
              vo(e),
              zn(e, Gt, o))
            : ((t.lanes & n) !== 0 && (bo(t, e), Xa(e, null, null, n), Ga()),
              (o = t.memoizedState),
              (r = e.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (e.memoizedState = o),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o),
                  zn(e, Gt, l))
                : ((l = r.cache), zn(e, Gt, l), l !== o.cache && ho(e, [Gt], n, !0))),
          ee(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function dn(t) {
    t.flags |= 4;
  }
  function tr(t, e, n, l, o) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (o & 335544128) === o))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Sm()) t.flags |= 8192;
        else throw ((ci = is), go);
    } else t.flags &= -16777217;
  }
  function Jd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !rp(e)))
      if (Sm()) t.flags |= 8192;
      else throw ((ci = is), go);
  }
  function Ss(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? Cf() : 536870912), (t.lanes |= e), (Pi |= e)));
  }
  function Fa(t, e) {
    if (!pt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null;) (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null;) (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var o = t.child; o !== null;)
        ((n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 65011712),
          (l |= o.flags & 65011712),
          (o.return = t),
          (o = o.sibling));
    else
      for (o = t.child; o !== null;)
        ((n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = t),
          (o = o.sibling));
    return ((t.subtreeFlags |= l), (t.childLanes = n), e);
  }
  function E1(t, e, n) {
    var l = e.pendingProps;
    switch ((uo(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Vt(e), null);
      case 1:
        return (Vt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          rn(Gt),
          Lt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Li(e)
              ? dn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), ro())),
          Vt(e),
          null
        );
      case 26:
        var o = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (dn(e), r !== null ? (Vt(e), Jd(e, r)) : (Vt(e), tr(e, o, null, l, n)))
            : r
              ? r !== t.memoizedState
                ? (dn(e), Vt(e), Jd(e, r))
                : (Vt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== l && dn(e), Vt(e), tr(e, o, t, l, n)),
          null
        );
      case 27:
        if ((wl(e), (n = rt.current), (o = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && dn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return (Vt(e), null);
          }
          ((t = W.current), Li(e) ? Ch(e) : ((t = ep(o, l, n)), (e.stateNode = t), dn(e)));
        }
        return (Vt(e), null);
      case 5:
        if ((wl(e), (o = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && dn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return (Vt(e), null);
          }
          if (((r = W.current), Li(e))) Ch(e);
          else {
            var d = js(rt.current);
            switch (r) {
              case 1:
                r = d.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                r = d.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    r = d.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    r = d.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                    break;
                  case "script":
                    ((r = d.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple ? (r.multiple = !0) : l.size && (r.size = l.size));
                    break;
                  default:
                    r =
                      typeof l.is == "string"
                        ? d.createElement(o, { is: l.is })
                        : d.createElement(o);
                }
            }
            ((r[$t] = e), (r[ce] = l));
            t: for (d = e.child; d !== null;) {
              if (d.tag === 5 || d.tag === 6) r.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null;) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            e.stateNode = r;
            t: switch ((ne(r, o, l), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && dn(e);
          }
        }
        return (Vt(e), tr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && dn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = rt.current), Li(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (l = null), (o = It), o !== null))
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            ((t[$t] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Zm(t.nodeValue, n)
              )),
              t || Cn(e, !0));
          } else ((t = js(t).createTextNode(l)), (t[$t] = e), (e.stateNode = t));
        }
        return (Vt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = Li(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(s(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(s(557));
              t[$t] = e;
            } else (li(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Vt(e), (t = !1));
          } else
            ((n = ro()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return (Vt(e), null);
      case 13:
        if (
          ((l = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((o = Li(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!o) throw Error(s(318));
              if (((o = e.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(s(317));
              o[$t] = e;
            } else (li(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (Vt(e), (o = !1));
          } else
            ((o = ro()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o),
              (o = !0));
          if (!o) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
        }
        return (
          Ee(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (o = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (o = l.alternate.memoizedState.cachePool.pool),
                (r = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (r = l.memoizedState.cachePool.pool),
                r !== o && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Ss(e, e.updateQueue),
              Vt(e),
              null)
        );
      case 4:
        return (Lt(), t === null && xr(e.stateNode.containerInfo), Vt(e), null);
      case 10:
        return (rn(e.type), Vt(e), null);
      case 19:
        if ((B(Ht), (l = e.memoizedState), l === null)) return (Vt(e), null);
        if (((o = (e.flags & 128) !== 0), (r = l.rendering), r === null))
          if (o) Fa(l, !1);
          else {
            if (jt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((r = us(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Fa(l, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      Ss(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (xh(n, t), (n = n.sibling));
                  return (X(Ht, (Ht.current & 1) | 2), pt && un(e, l.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            l.tail !== null &&
              ve() > Ms &&
              ((e.flags |= 128), (o = !0), Fa(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = us(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ss(e, t),
                Fa(l, !0),
                l.tail === null && l.tailMode === "hidden" && !r.alternate && !pt)
              )
                return (Vt(e), null);
            } else
              2 * ve() - l.renderingStartTime > Ms &&
                n !== 536870912 &&
                ((e.flags |= 128), (o = !0), Fa(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = l.last), t !== null ? (t.sibling = r) : (e.child = r), (l.last = r));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = ve()),
            (t.sibling = null),
            (n = Ht.current),
            X(Ht, o ? (n & 1) | 2 : n & 1),
            pt && un(e, l.treeForkCount),
            t)
          : (Vt(e), null);
      case 22:
      case 23:
        return (
          Ee(e),
          Ao(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Vt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Vt(e),
          (n = e.updateQueue),
          n !== null && Ss(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && B(oi),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          rn(Gt),
          Vt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function M1(t, e) {
    switch ((uo(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          rn(Gt),
          Lt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (wl(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Ee(e), e.alternate === null)) throw Error(s(340));
          li();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((Ee(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(s(340));
          li();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (B(Ht), null);
      case 4:
        return (Lt(), null);
      case 10:
        return (rn(e.type), null);
      case 22:
      case 23:
        return (
          Ee(e),
          Ao(),
          t !== null && B(oi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (rn(Gt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fd(t, e) {
    switch ((uo(e), e.tag)) {
      case 3:
        (rn(Gt), Lt());
        break;
      case 26:
      case 27:
      case 5:
        wl(e);
        break;
      case 4:
        Lt();
        break;
      case 31:
        e.memoizedState !== null && Ee(e);
        break;
      case 13:
        Ee(e);
        break;
      case 19:
        B(Ht);
        break;
      case 10:
        rn(e.type);
        break;
      case 22:
      case 23:
        (Ee(e), Ao(), t !== null && B(oi));
        break;
      case 24:
        rn(Gt);
    }
  }
  function Wa(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var r = n.create,
              d = n.inst;
            ((l = r()), (d.destroy = l));
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (y) {
      Et(e, e.return, y);
    }
  }
  function _n(t, e, n) {
    try {
      var l = e.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var r = o.next;
        l = r;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              y = d.destroy;
            if (y !== void 0) {
              ((d.destroy = void 0), (o = e));
              var S = n,
                C = y;
              try {
                C();
              } catch (V) {
                Et(o, S, V);
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (V) {
      Et(e, e.return, V);
    }
  }
  function Wd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Yh(e, n);
      } catch (l) {
        Et(t, t.return, l);
      }
    }
  }
  function Pd(t, e, n) {
    ((n.props = di(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Et(t, e, l);
    }
  }
  function Pa(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (o) {
      Et(t, e, o);
    }
  }
  function Pe(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Et(t, e, o);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Et(t, e, o);
        }
      else n.current = null;
  }
  function $d(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      Et(t, t.return, o);
    }
  }
  function er(t, e, n) {
    try {
      var l = t.stateNode;
      (k1(l, t.type, n, e), (l[ce] = e));
    } catch (o) {
      Et(t, t.return, o);
    }
  }
  function Id(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && qn(t.type)) || t.tag === 4
    );
  }
  function nr(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Id(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && qn(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ir(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = an)));
    else if (
      l !== 4 &&
      (l === 27 && qn(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (ir(t, e, n), t = t.sibling; t !== null;) (ir(t, e, n), (t = t.sibling));
  }
  function Ts(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (l !== 4 && (l === 27 && qn(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (Ts(t, e, n), t = t.sibling; t !== null;) (Ts(t, e, n), (t = t.sibling));
  }
  function tm(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, o = e.attributes; o.length;) e.removeAttributeNode(o[0]);
      (ne(e, l, n), (e[$t] = t), (e[ce] = n));
    } catch (r) {
      Et(t, t.return, r);
    }
  }
  var mn = !1,
    Qt = !1,
    ar = !1,
    em = typeof WeakSet == "function" ? WeakSet : Set,
    Wt = null;
  function D1(t, e) {
    if (((t = t.containerInfo), (Mr = Gs), (t = dh(t)), Wu(t))) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var o = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              y = -1,
              S = -1,
              C = 0,
              V = 0,
              j = t,
              z = null;
            e: for (;;) {
              for (
                var O;
                j !== n || (o !== 0 && j.nodeType !== 3) || (y = d + o),
                  j !== r || (l !== 0 && j.nodeType !== 3) || (S = d + l),
                  j.nodeType === 3 && (d += j.nodeValue.length),
                  (O = j.firstChild) !== null;
              )
                ((z = j), (j = O));
              for (;;) {
                if (j === t) break e;
                if (
                  (z === n && ++C === o && (y = d),
                  z === r && ++V === l && (S = d),
                  (O = j.nextSibling) !== null)
                )
                  break;
                ((j = z), (z = j.parentNode));
              }
              j = O;
            }
            n = y === -1 || S === -1 ? null : { start: y, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Dr = { focusedElem: t, selectionRange: n }, Gs = !1, Wt = e; Wt !== null;)
      if (((e = Wt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
        ((t.return = e), (Wt = t));
      else
        for (; Wt !== null;) {
          switch (((e = Wt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue), (t = t !== null ? t.events : null), t !== null)
              )
                for (n = 0; n < t.length; n++) ((o = t[n]), (o.ref.impl = o.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                ((t = void 0),
                  (n = e),
                  (o = r.memoizedProps),
                  (r = r.memoizedState),
                  (l = n.stateNode));
                try {
                  var K = di(n.type, o);
                  ((t = l.getSnapshotBeforeUpdate(K, r)),
                    (l.__reactInternalSnapshotBeforeUpdate = t));
                } catch (et) {
                  Et(n, n.return, et);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) Or(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Or(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Wt = t));
            break;
          }
          Wt = e.return;
        }
  }
  function nm(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (yn(t, n), l & 4 && Wa(5, n));
        break;
      case 1:
        if ((yn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Et(n, n.return, d);
            }
          else {
            var o = di(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Et(n, n.return, d);
            }
          }
        (l & 64 && Wd(n), l & 512 && Pa(n, n.return));
        break;
      case 3:
        if ((yn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Yh(t, e);
          } catch (d) {
            Et(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && tm(n);
      case 26:
      case 5:
        (yn(t, n), e === null && l & 4 && $d(n), l & 512 && Pa(n, n.return));
        break;
      case 12:
        yn(t, n);
        break;
      case 31:
        (yn(t, n), l & 4 && lm(t, n));
        break;
      case 13:
        (yn(t, n),
          l & 4 && sm(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = j1.bind(null, n)), eb(t, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || mn), !l)) {
          ((e = (e !== null && e.memoizedState !== null) || Qt), (o = mn));
          var r = Qt;
          ((mn = l),
            (Qt = e) && !r ? gn(t, n, (n.subtreeFlags & 8772) !== 0) : yn(t, n),
            (mn = o),
            (Qt = r));
        }
        break;
      case 30:
        break;
      default:
        yn(t, n);
    }
  }
  function im(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), im(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Nu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Nt = null,
    he = !1;
  function pn(t, e, n) {
    for (n = n.child; n !== null;) (am(t, e, n), (n = n.sibling));
  }
  function am(t, e, n) {
    if (be && typeof be.onCommitFiberUnmount == "function")
      try {
        be.onCommitFiberUnmount(Ta, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Qt || Pe(n, e),
          pn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Qt || Pe(n, e);
        var l = Nt,
          o = he;
        (qn(n.type) && ((Nt = n.stateNode), (he = !1)),
          pn(t, e, n),
          sl(n.stateNode),
          (Nt = l),
          (he = o));
        break;
      case 5:
        Qt || Pe(n, e);
      case 6:
        if (((l = Nt), (o = he), (Nt = null), pn(t, e, n), (Nt = l), (he = o), Nt !== null))
          if (he)
            try {
              (Nt.nodeType === 9
                ? Nt.body
                : Nt.nodeName === "HTML"
                  ? Nt.ownerDocument.body
                  : Nt
              ).removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
          else
            try {
              Nt.removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
        break;
      case 18:
        Nt !== null &&
          (he
            ? ((t = Nt),
              Wm(
                t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
                n.stateNode,
              ),
              la(t))
            : Wm(Nt, n.stateNode));
        break;
      case 4:
        ((l = Nt),
          (o = he),
          (Nt = n.stateNode.containerInfo),
          (he = !0),
          pn(t, e, n),
          (Nt = l),
          (he = o));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_n(2, n, e), Qt || _n(4, n, e), pn(t, e, n));
        break;
      case 1:
        (Qt ||
          (Pe(n, e), (l = n.stateNode), typeof l.componentWillUnmount == "function" && Pd(n, e, l)),
          pn(t, e, n));
        break;
      case 21:
        pn(t, e, n);
        break;
      case 22:
        ((Qt = (l = Qt) || n.memoizedState !== null), pn(t, e, n), (Qt = l));
        break;
      default:
        pn(t, e, n);
    }
  }
  function lm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        la(t);
      } catch (n) {
        Et(e, e.return, n);
      }
    }
  }
  function sm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        la(t);
      } catch (n) {
        Et(e, e.return, n);
      }
  }
  function C1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new em()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new em()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function xs(t, e) {
    var n = C1(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var o = B1.bind(null, t, l);
        l.then(o, o);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l],
          r = t,
          d = e,
          y = d;
        t: for (; y !== null;) {
          switch (y.tag) {
            case 27:
              if (qn(y.type)) {
                ((Nt = y.stateNode), (he = !1));
                break t;
              }
              break;
            case 5:
              ((Nt = y.stateNode), (he = !1));
              break t;
            case 3:
            case 4:
              ((Nt = y.stateNode.containerInfo), (he = !0));
              break t;
          }
          y = y.return;
        }
        if (Nt === null) throw Error(s(160));
        (am(r, d, o),
          (Nt = null),
          (he = !1),
          (r = o.alternate),
          r !== null && (r.return = null),
          (o.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null;) (um(e, t), (e = e.sibling));
  }
  var Ge = null;
  function um(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (de(e, t), me(t), l & 4 && (_n(3, t, t.return), Wa(3, t), _n(5, t, t.return)));
        break;
      case 1:
        (de(e, t),
          me(t),
          l & 512 && (Qt || n === null || Pe(n, n.return)),
          l & 64 &&
            mn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var o = Ge;
        if ((de(e, t), me(t), l & 512 && (Qt || n === null || Pe(n, n.return)), l & 4)) {
          var r = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  ((l = t.type), (n = t.memoizedProps), (o = o.ownerDocument || o));
                  e: switch (l) {
                    case "title":
                      ((r = o.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Ea] ||
                          r[$t] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = o.createElement(l)),
                          o.head.insertBefore(r, o.querySelector("head > title"))),
                        ne(r, l, n),
                        (r[$t] = t),
                        Ft(r),
                        (l = r));
                      break t;
                    case "link":
                      var d = up("link", "href", o).get(l + (n.href || ""));
                      if (d) {
                        for (var y = 0; y < d.length; y++)
                          if (
                            ((r = d[y]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === "" ? null : n.href) &&
                              r.getAttribute("rel") === (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") === (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(y, 1);
                            break e;
                          }
                      }
                      ((r = o.createElement(l)), ne(r, l, n), o.head.appendChild(r));
                      break;
                    case "meta":
                      if ((d = up("meta", "content", o).get(l + (n.content || "")))) {
                        for (y = 0; y < d.length; y++)
                          if (
                            ((r = d[y]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") === (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") === (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(y, 1);
                            break e;
                          }
                      }
                      ((r = o.createElement(l)), ne(r, l, n), o.head.appendChild(r));
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  ((r[$t] = t), Ft(r), (l = r));
                }
                t.stateNode = l;
              } else op(o, t.type, t.stateNode);
            else t.stateNode = sp(o, l, t.memoizedProps);
          else
            r !== l
              ? (r === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                l === null ? op(o, t.type, t.stateNode) : sp(o, l, t.memoizedProps))
              : l === null && t.stateNode !== null && er(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (de(e, t),
          me(t),
          l & 512 && (Qt || n === null || Pe(n, n.return)),
          n !== null && l & 4 && er(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((de(e, t), me(t), l & 512 && (Qt || n === null || Pe(n, n.return)), t.flags & 32)) {
          o = t.stateNode;
          try {
            zi(o, "");
          } catch (K) {
            Et(t, t.return, K);
          }
        }
        (l & 4 &&
          t.stateNode != null &&
          ((o = t.memoizedProps), er(t, o, n !== null ? n.memoizedProps : o)),
          l & 1024 && (ar = !0));
        break;
      case 6:
        if ((de(e, t), me(t), l & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          ((l = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = l;
          } catch (K) {
            Et(t, t.return, K);
          }
        }
        break;
      case 3:
        if (
          ((Ls = null),
          (o = Ge),
          (Ge = Bs(e.containerInfo)),
          de(e, t),
          (Ge = o),
          me(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            la(e.containerInfo);
          } catch (K) {
            Et(t, t.return, K);
          }
        ar && ((ar = !1), om(t));
        break;
      case 4:
        ((l = Ge), (Ge = Bs(t.stateNode.containerInfo)), de(e, t), me(t), (Ge = l));
        break;
      case 12:
        (de(e, t), me(t));
        break;
      case 31:
        (de(e, t),
          me(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), xs(t, l))));
        break;
      case 13:
        (de(e, t),
          me(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (Es = ve()),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), xs(t, l))));
        break;
      case 22:
        o = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          C = mn,
          V = Qt;
        if (((mn = C || o), (Qt = V || S), de(e, t), (Qt = V), (mn = C), me(t), l & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = o ? e._visibility & -2 : e._visibility | 1,
              o && (n === null || S || mn || Qt || mi(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((r = S.stateNode), o))
                    ((d = r.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    y = S.stateNode;
                    var j = S.memoizedProps.style,
                      z = j != null && j.hasOwnProperty("display") ? j.display : null;
                    y.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (K) {
                  Et(S, S.return, K);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = o ? "" : S.memoizedProps;
                } catch (K) {
                  Et(S, S.return, K);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                S = e;
                try {
                  var O = S.stateNode;
                  o ? Pm(O, !0) : Pm(S.stateNode, !1);
                } catch (K) {
                  Et(S, S.return, K);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null), (e.sibling.return = e.return), (e = e.sibling));
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null && ((n = l.retryQueue), n !== null && ((l.retryQueue = null), xs(t, n))));
        break;
      case 19:
        (de(e, t),
          me(t),
          l & 4 && ((l = t.updateQueue), l !== null && ((t.updateQueue = null), xs(t, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (de(e, t), me(t));
    }
  }
  function me(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null;) {
          if (Id(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              r = nr(t);
            Ts(t, r, o);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (zi(d, ""), (n.flags &= -33));
            var y = nr(t);
            Ts(t, y, d);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              C = nr(t);
            ir(t, C, S);
            break;
          default:
            throw Error(s(161));
        }
      } catch (V) {
        Et(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function om(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (om(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function yn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) (nm(t, e.alternate, e), (e = e.sibling));
  }
  function mi(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_n(4, e, e.return), mi(e));
          break;
        case 1:
          Pe(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Pd(e, e.return, n), mi(e));
          break;
        case 27:
          sl(e.stateNode);
        case 26:
        case 5:
          (Pe(e, e.return), mi(e));
          break;
        case 22:
          e.memoizedState === null && mi(e);
          break;
        case 30:
          mi(e);
          break;
        default:
          mi(e);
      }
      t = t.sibling;
    }
  }
  function gn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var l = e.alternate,
        o = t,
        r = e,
        d = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (gn(o, r, n), Wa(4, r));
          break;
        case 1:
          if ((gn(o, r, n), (l = r), (o = l.stateNode), typeof o.componentDidMount == "function"))
            try {
              o.componentDidMount();
            } catch (C) {
              Et(l, l.return, C);
            }
          if (((l = r), (o = l.updateQueue), o !== null)) {
            var y = l.stateNode;
            try {
              var S = o.shared.hiddenCallbacks;
              if (S !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < S.length; o++) Hh(S[o], y);
            } catch (C) {
              Et(l, l.return, C);
            }
          }
          (n && d & 64 && Wd(r), Pa(r, r.return));
          break;
        case 27:
          tm(r);
        case 26:
        case 5:
          (gn(o, r, n), n && l === null && d & 4 && $d(r), Pa(r, r.return));
          break;
        case 12:
          gn(o, r, n);
          break;
        case 31:
          (gn(o, r, n), n && d & 4 && lm(o, r));
          break;
        case 13:
          (gn(o, r, n), n && d & 4 && sm(o, r));
          break;
        case 22:
          (r.memoizedState === null && gn(o, r, n), Pa(r, r.return));
          break;
        case 30:
          break;
        default:
          gn(o, r, n);
      }
      e = e.sibling;
    }
  }
  function lr(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ua(n)));
  }
  function sr(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ua(t)));
  }
  function Xe(t, e, n, l) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (rm(t, e, n, l), (e = e.sibling));
  }
  function rm(t, e, n, l) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Xe(t, e, n, l), o & 2048 && Wa(9, e));
        break;
      case 1:
        Xe(t, e, n, l);
        break;
      case 3:
        (Xe(t, e, n, l),
          o & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ua(t))));
        break;
      case 12:
        if (o & 2048) {
          (Xe(t, e, n, l), (t = e.stateNode));
          try {
            var r = e.memoizedProps,
              d = r.id,
              y = r.onPostCommit;
            typeof y == "function" &&
              y(d, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (S) {
            Et(e, e.return, S);
          }
        } else Xe(t, e, n, l);
        break;
      case 31:
        Xe(t, e, n, l);
        break;
      case 13:
        Xe(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Xe(t, e, n, l)
              : $a(t, e)
            : r._visibility & 2
              ? Xe(t, e, n, l)
              : ((r._visibility |= 2), Ji(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          o & 2048 && lr(d, e));
        break;
      case 24:
        (Xe(t, e, n, l), o & 2048 && sr(e.alternate, e));
        break;
      default:
        Xe(t, e, n, l);
    }
  }
  function Ji(t, e, n, l, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
      var r = t,
        d = e,
        y = n,
        S = l,
        C = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Ji(r, d, y, S, o), Wa(8, d));
          break;
        case 23:
          break;
        case 22:
          var V = d.stateNode;
          (d.memoizedState !== null
            ? V._visibility & 2
              ? Ji(r, d, y, S, o)
              : $a(r, d)
            : ((V._visibility |= 2), Ji(r, d, y, S, o)),
            o && C & 2048 && lr(d.alternate, d));
          break;
        case 24:
          (Ji(r, d, y, S, o), o && C & 2048 && sr(d.alternate, d));
          break;
        default:
          Ji(r, d, y, S, o);
      }
      e = e.sibling;
    }
  }
  function $a(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          l = e,
          o = l.flags;
        switch (l.tag) {
          case 22:
            ($a(n, l), o & 2048 && lr(l.alternate, l));
            break;
          case 24:
            ($a(n, l), o & 2048 && sr(l.alternate, l));
            break;
          default:
            $a(n, l);
        }
        e = e.sibling;
      }
  }
  var Ia = 8192;
  function Fi(t, e, n) {
    if (t.subtreeFlags & Ia) for (t = t.child; t !== null;) (cm(t, e, n), (t = t.sibling));
  }
  function cm(t, e, n) {
    switch (t.tag) {
      case 26:
        (Fi(t, e, n),
          t.flags & Ia && t.memoizedState !== null && db(n, Ge, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Fi(t, e, n);
        break;
      case 3:
      case 4:
        var l = Ge;
        ((Ge = Bs(t.stateNode.containerInfo)), Fi(t, e, n), (Ge = l));
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Ia), (Ia = 16777216), Fi(t, e, n), (Ia = l))
            : Fi(t, e, n));
        break;
      default:
        Fi(t, e, n);
    }
  }
  function fm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function tl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Wt = l), dm(l, t));
        }
      fm(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (hm(t), (t = t.sibling));
  }
  function hm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (tl(t), t.flags & 2048 && _n(9, t, t.return));
        break;
      case 3:
        tl(t);
        break;
      case 12:
        tl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), As(t))
          : tl(t);
        break;
      default:
        tl(t);
    }
  }
  function As(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          ((Wt = l), dm(l, t));
        }
      fm(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (_n(8, e, e.return), As(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), As(e)));
          break;
        default:
          As(e);
      }
      t = t.sibling;
    }
  }
  function dm(t, e) {
    for (; Wt !== null;) {
      var n = Wt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          _n(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ua(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Wt = l));
      else
        t: for (n = t; Wt !== null;) {
          l = Wt;
          var o = l.sibling,
            r = l.return;
          if ((im(l), l === n)) {
            Wt = null;
            break t;
          }
          if (o !== null) {
            ((o.return = r), (Wt = o));
            break t;
          }
          Wt = r;
        }
    }
  }
  var z1 = {
      getCacheForType: function (t) {
        var e = te(Gt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return te(Gt).controller.signal;
      },
    },
    O1 = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    Ot = null,
    ct = null,
    ht = 0,
    At = 0,
    Me = null,
    jn = !1,
    Wi = !1,
    ur = !1,
    vn = 0,
    jt = 0,
    Bn = 0,
    pi = 0,
    or = 0,
    De = 0,
    Pi = 0,
    el = null,
    pe = null,
    rr = !1,
    Es = 0,
    mm = 0,
    Ms = 1 / 0,
    Ds = null,
    Un = null,
    kt = 0,
    Ln = null,
    $i = null,
    bn = 0,
    cr = 0,
    fr = null,
    pm = null,
    nl = 0,
    hr = null;
  function Ce() {
    return (St & 2) !== 0 && ht !== 0 ? ht & -ht : R.T !== null ? vr() : wf();
  }
  function ym() {
    if (De === 0)
      if ((ht & 536870912) === 0 || pt) {
        var t = _l;
        ((_l <<= 1), (_l & 3932160) === 0 && (_l = 262144), (De = t));
      } else De = 536870912;
    return ((t = Ae.current), t !== null && (t.flags |= 32), De);
  }
  function ye(t, e, n) {
    (((t === Ot && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (Ii(t, 0), Hn(t, ht, De, !1)),
      Aa(t, n),
      ((St & 2) === 0 || t !== Ot) &&
        (t === Ot && ((St & 2) === 0 && (pi |= n), jt === 4 && Hn(t, ht, De, !1)), $e(t)));
  }
  function gm(t, e, n) {
    if ((St & 6) !== 0) throw Error(s(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || xa(t, e),
      o = l ? V1(t, e) : mr(t, e, !0),
      r = l;
    do {
      if (o === 0) {
        Wi && !l && Hn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !R1(n))) {
          ((o = mr(t, e, !1)), (r = !1));
          continue;
        }
        if (o === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var d = 0;
          else
            ((d = t.pendingLanes & -536870913), (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            e = d;
            t: {
              var y = t;
              o = el;
              var S = y.current.memoizedState.isDehydrated;
              if ((S && (Ii(y, d).flags |= 256), (d = mr(y, d, !1)), d !== 2)) {
                if (ur && !S) {
                  ((y.errorRecoveryDisabledLanes |= r), (pi |= r), (o = 4));
                  break t;
                }
                ((r = pe), (pe = o), r !== null && (pe === null ? (pe = r) : pe.push.apply(pe, r)));
              }
              o = d;
            }
            if (((r = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          (Ii(t, 0), Hn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((l = t), (r = o), r)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Hn(l, e, De, !jn);
              break t;
            case 2:
              pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((o = Es + 300 - ve()), 10 < o)) {
            if ((Hn(l, e, De, !jn), Bl(l, 0, !0) !== 0)) break t;
            ((bn = e),
              (l.timeoutHandle = Jm(
                vm.bind(null, l, n, pe, Ds, rr, e, De, pi, Pi, jn, r, "Throttled", -0, 0),
                o,
              )));
            break t;
          }
          vm(l, n, pe, Ds, rr, e, De, pi, Pi, jn, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    $e(t);
  }
  function vm(t, e, n, l, o, r, d, y, S, C, V, j, z, O) {
    if (((t.timeoutHandle = -1), (j = e.subtreeFlags), j & 8192 || (j & 16785408) === 16785408)) {
      ((j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: an,
      }),
        cm(e, r, j));
      var K = (r & 62914560) === r ? Es - ve() : (r & 4194048) === r ? mm - ve() : 0;
      if (((K = mb(j, K)), K !== null)) {
        ((bn = r),
          (t.cancelPendingCommit = K(Dm.bind(null, t, e, r, n, l, o, d, y, S, V, j, null, z, O))),
          Hn(t, r, d, !C));
        return;
      }
    }
    Dm(t, e, r, n, l, o, d, y, S);
  }
  function R1(t) {
    for (var e = t; ;) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var o = n[l],
            r = o.getSnapshot;
          o = o.value;
          try {
            if (!Te(r(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Hn(t, e, n, l) {
    ((e &= ~or),
      (e &= ~pi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes));
    for (var o = e; 0 < o;) {
      var r = 31 - Se(o),
        d = 1 << r;
      ((l[r] = -1), (o &= ~d));
    }
    n !== 0 && zf(t, n, e);
  }
  function Cs() {
    return (St & 6) === 0 ? (il(0), !1) : !0;
  }
  function dr() {
    if (ct !== null) {
      if (At === 0) var t = ct.return;
      else ((t = ct), (on = si = null), Oo(t), (Xi = null), (Ha = 0), (t = ct));
      for (; t !== null;) (Fd(t.alternate, t), (t = t.return));
      ct = null;
    }
  }
  function Ii(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), W1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (bn = 0),
      dr(),
      (Ot = t),
      (ct = n = sn(t.current, null)),
      (ht = e),
      (At = 0),
      (Me = null),
      (jn = !1),
      (Wi = xa(t, e)),
      (ur = !1),
      (Pi = De = or = pi = Bn = jt = 0),
      (pe = el = null),
      (rr = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l;) {
        var o = 31 - Se(l),
          r = 1 << o;
        ((e |= t[o]), (l &= ~r));
      }
    return ((vn = e), Jl(), n);
  }
  function bm(t, e) {
    ((lt = null),
      (R.H = ka),
      e === Gi || e === ns
        ? ((e = jh()), (At = 3))
        : e === go
          ? ((e = jh()), (At = 4))
          : (At =
              e === Qo
                ? 8
                : e !== null && typeof e == "object" && typeof e.then == "function"
                  ? 6
                  : 1),
      (Me = e),
      ct === null && ((jt = 1), ys(t, Ve(e, t.current))));
  }
  function Sm() {
    var t = Ae.current;
    return t === null
      ? !0
      : (ht & 4194048) === ht
        ? Be === null
        : (ht & 62914560) === ht || (ht & 536870912) !== 0
          ? t === Be
          : !1;
  }
  function Tm() {
    var t = R.H;
    return ((R.H = ka), t === null ? ka : t);
  }
  function xm() {
    var t = R.A;
    return ((R.A = z1), t);
  }
  function zs() {
    ((jt = 4),
      jn || ((ht & 4194048) !== ht && Ae.current !== null) || (Wi = !0),
      ((Bn & 134217727) === 0 && (pi & 134217727) === 0) || Ot === null || Hn(Ot, ht, De, !1));
  }
  function mr(t, e, n) {
    var l = St;
    St |= 2;
    var o = Tm(),
      r = xm();
    ((Ot !== t || ht !== e) && ((Ds = null), Ii(t, e)), (e = !1));
    var d = jt;
    t: do
      try {
        if (At !== 0 && ct !== null) {
          var y = ct,
            S = Me;
          switch (At) {
            case 8:
              (dr(), (d = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ae.current === null && (e = !0);
              var C = At;
              if (((At = 0), (Me = null), ta(t, y, S, C), n && Wi)) {
                d = 0;
                break t;
              }
              break;
            default:
              ((C = At), (At = 0), (Me = null), ta(t, y, S, C));
          }
        }
        (w1(), (d = jt));
        break;
      } catch (V) {
        bm(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (on = si = null),
      (St = l),
      (R.H = o),
      (R.A = r),
      ct === null && ((Ot = null), (ht = 0), Jl()),
      d
    );
  }
  function w1() {
    for (; ct !== null;) Am(ct);
  }
  function V1(t, e) {
    var n = St;
    St |= 2;
    var l = Tm(),
      o = xm();
    Ot !== t || ht !== e ? ((Ds = null), (Ms = ve() + 500), Ii(t, e)) : (Wi = xa(t, e));
    t: do
      try {
        if (At !== 0 && ct !== null) {
          e = ct;
          var r = Me;
          e: switch (At) {
            case 1:
              ((At = 0), (Me = null), ta(t, e, r, 1));
              break;
            case 2:
            case 9:
              if (Nh(r)) {
                ((At = 0), (Me = null), Em(e));
                break;
              }
              ((e = function () {
                ((At !== 2 && At !== 9) || Ot !== t || (At = 7), $e(t));
              }),
                r.then(e, e));
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              Nh(r) ? ((At = 0), (Me = null), Em(e)) : ((At = 0), (Me = null), ta(t, e, r, 7));
              break;
            case 5:
              var d = null;
              switch (ct.tag) {
                case 26:
                  d = ct.memoizedState;
                case 5:
                case 27:
                  var y = ct;
                  if (d ? rp(d) : y.stateNode.complete) {
                    ((At = 0), (Me = null));
                    var S = y.sibling;
                    if (S !== null) ct = S;
                    else {
                      var C = y.return;
                      C !== null ? ((ct = C), Os(C)) : (ct = null);
                    }
                    break e;
                  }
              }
              ((At = 0), (Me = null), ta(t, e, r, 5));
              break;
            case 6:
              ((At = 0), (Me = null), ta(t, e, r, 6));
              break;
            case 8:
              (dr(), (jt = 6));
              break t;
            default:
              throw Error(s(462));
          }
        }
        N1();
        break;
      } catch (V) {
        bm(t, V);
      }
    while (!0);
    return (
      (on = si = null),
      (R.H = l),
      (R.A = o),
      (St = n),
      ct !== null ? 0 : ((Ot = null), (ht = 0), Jl(), jt)
    );
  }
  function N1() {
    for (; ct !== null && !nv();) Am(ct);
  }
  function Am(t) {
    var e = kd(t.alternate, t, vn);
    ((t.memoizedProps = t.pendingProps), e === null ? Os(t) : (ct = e));
  }
  function Em(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = qd(n, e, e.pendingProps, e.type, void 0, ht);
        break;
      case 11:
        e = qd(n, e, e.pendingProps, e.type.render, e.ref, ht);
        break;
      case 5:
        Oo(e);
      default:
        (Fd(n, e), (e = ct = xh(e, vn)), (e = kd(n, e, vn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Os(t) : (ct = e));
  }
  function ta(t, e, n, l) {
    ((on = si = null), Oo(e), (Xi = null), (Ha = 0));
    var o = e.return;
    try {
      if (T1(t, o, e, n, ht)) {
        ((jt = 1), ys(t, Ve(n, t.current)), (ct = null));
        return;
      }
    } catch (r) {
      if (o !== null) throw ((ct = o), r);
      ((jt = 1), ys(t, Ve(n, t.current)), (ct = null));
      return;
    }
    e.flags & 32768
      ? (pt || l === 1
          ? (t = !0)
          : Wi || (ht & 536870912) !== 0
            ? (t = !1)
            : ((jn = t = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Ae.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Mm(e, t))
      : Os(e);
  }
  function Os(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Mm(e, jn);
        return;
      }
      t = e.return;
      var n = E1(e.alternate, e, vn);
      if (n !== null) {
        ct = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    jt === 0 && (jt = 5);
  }
  function Mm(t, e) {
    do {
      var n = M1(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (ct = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ct = t;
        return;
      }
      ct = t = n;
    } while (t !== null);
    ((jt = 6), (ct = null));
  }
  function Dm(t, e, n, l, o, r, d, y, S) {
    t.cancelPendingCommit = null;
    do Rs();
    while (kt !== 0);
    if ((St & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= eo),
        hv(t, n, r, d, y, S),
        t === Ot && ((ct = Ot = null), (ht = 0)),
        ($i = e),
        (Ln = t),
        (bn = n),
        (cr = r),
        (fr = o),
        (pm = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            U1(Vl, function () {
              return (wm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = R.T), (R.T = null), (o = G.p), (G.p = 2), (d = St), (St |= 4));
        try {
          D1(t, e, n);
        } finally {
          ((St = d), (G.p = o), (R.T = l));
        }
      }
      ((kt = 1), Cm(), zm(), Om());
    }
  }
  function Cm() {
    if (kt === 1) {
      kt = 0;
      var t = Ln,
        e = $i,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = G.p;
        G.p = 2;
        var o = St;
        St |= 4;
        try {
          um(e, t);
          var r = Dr,
            d = dh(t.containerInfo),
            y = r.focusedElem,
            S = r.selectionRange;
          if (d !== y && y && y.ownerDocument && hh(y.ownerDocument.documentElement, y)) {
            if (S !== null && Wu(y)) {
              var C = S.start,
                V = S.end;
              if ((V === void 0 && (V = C), "selectionStart" in y))
                ((y.selectionStart = C), (y.selectionEnd = Math.min(V, y.value.length)));
              else {
                var j = y.ownerDocument || document,
                  z = (j && j.defaultView) || window;
                if (z.getSelection) {
                  var O = z.getSelection(),
                    K = y.textContent.length,
                    et = Math.min(S.start, K),
                    zt = S.end === void 0 ? et : Math.min(S.end, K);
                  !O.extend && et > zt && ((d = zt), (zt = et), (et = d));
                  var E = fh(y, et),
                    x = fh(y, zt);
                  if (
                    E &&
                    x &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== E.node ||
                      O.anchorOffset !== E.offset ||
                      O.focusNode !== x.node ||
                      O.focusOffset !== x.offset)
                  ) {
                    var M = j.createRange();
                    (M.setStart(E.node, E.offset),
                      O.removeAllRanges(),
                      et > zt
                        ? (O.addRange(M), O.extend(x.node, x.offset))
                        : (M.setEnd(x.node, x.offset), O.addRange(M)));
                  }
                }
              }
            }
            for (j = [], O = y; (O = O.parentNode);)
              O.nodeType === 1 && j.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (typeof y.focus == "function" && y.focus(), y = 0; y < j.length; y++) {
              var N = j[y];
              ((N.element.scrollLeft = N.left), (N.element.scrollTop = N.top));
            }
          }
          ((Gs = !!Mr), (Dr = Mr = null));
        } finally {
          ((St = o), (G.p = l), (R.T = n));
        }
      }
      ((t.current = e), (kt = 2));
    }
  }
  function zm() {
    if (kt === 2) {
      kt = 0;
      var t = Ln,
        e = $i,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = R.T), (R.T = null));
        var l = G.p;
        G.p = 2;
        var o = St;
        St |= 4;
        try {
          nm(t, e.alternate, e);
        } finally {
          ((St = o), (G.p = l), (R.T = n));
        }
      }
      kt = 3;
    }
  }
  function Om() {
    if (kt === 4 || kt === 3) {
      ((kt = 0), iv());
      var t = Ln,
        e = $i,
        n = bn,
        l = pm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (kt = 5)
        : ((kt = 0), ($i = Ln = null), Rm(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (
        (o === 0 && (Un = null),
        wu(n),
        (e = e.stateNode),
        be && typeof be.onCommitFiberRoot == "function")
      )
        try {
          be.onCommitFiberRoot(Ta, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((e = R.T), (o = G.p), (G.p = 2), (R.T = null));
        try {
          for (var r = t.onRecoverableError, d = 0; d < l.length; d++) {
            var y = l[d];
            r(y.value, { componentStack: y.stack });
          }
        } finally {
          ((R.T = e), (G.p = o));
        }
      }
      ((bn & 3) !== 0 && Rs(),
        $e(t),
        (o = t.pendingLanes),
        (n & 261930) !== 0 && (o & 42) !== 0 ? (t === hr ? nl++ : ((nl = 0), (hr = t))) : (nl = 0),
        il(0));
    }
  }
  function Rm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ua(e)));
  }
  function Rs() {
    return (Cm(), zm(), Om(), wm());
  }
  function wm() {
    if (kt !== 5) return !1;
    var t = Ln,
      e = cr;
    cr = 0;
    var n = wu(bn),
      l = R.T,
      o = G.p;
    try {
      ((G.p = 32 > n ? 32 : n), (R.T = null), (n = fr), (fr = null));
      var r = Ln,
        d = bn;
      if (((kt = 0), ($i = Ln = null), (bn = 0), (St & 6) !== 0)) throw Error(s(331));
      var y = St;
      if (
        ((St |= 4),
        hm(r.current),
        rm(r, r.current, d, n),
        (St = y),
        il(0, !1),
        be && typeof be.onPostCommitFiberRoot == "function")
      )
        try {
          be.onPostCommitFiberRoot(Ta, r);
        } catch {}
      return !0;
    } finally {
      ((G.p = o), (R.T = l), Rm(t, e));
    }
  }
  function Vm(t, e, n) {
    ((e = Ve(n, e)),
      (e = Zo(t.stateNode, e, 2)),
      (t = wn(t, e, 2)),
      t !== null && (Aa(t, 2), $e(t)));
  }
  function Et(t, e, n) {
    if (t.tag === 3) Vm(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          Vm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" && (Un === null || !Un.has(l)))
          ) {
            ((t = Ve(n, t)),
              (n = Nd(2)),
              (l = wn(e, n, 2)),
              l !== null && (_d(n, l, e, t), Aa(l, 2), $e(l)));
            break;
          }
        }
        e = e.return;
      }
  }
  function pr(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new O1();
      var o = new Set();
      l.set(e, o);
    } else ((o = l.get(e)), o === void 0 && ((o = new Set()), l.set(e, o)));
    o.has(n) || ((ur = !0), o.add(n), (t = _1.bind(null, t, e, n)), e.then(t, t));
  }
  function _1(t, e, n) {
    var l = t.pingCache;
    (l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Ot === t &&
        (ht & n) === n &&
        (jt === 4 || (jt === 3 && (ht & 62914560) === ht && 300 > ve() - Es)
          ? (St & 2) === 0 && Ii(t, 0)
          : (or |= n),
        Pi === ht && (Pi = 0)),
      $e(t));
  }
  function Nm(t, e) {
    (e === 0 && (e = Cf()), (t = ii(t, e)), t !== null && (Aa(t, e), $e(t)));
  }
  function j1(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Nm(t, n));
  }
  function B1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          o = t.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(e), Nm(t, n));
  }
  function U1(t, e) {
    return Cu(t, e);
  }
  var ws = null,
    ea = null,
    yr = !1,
    Vs = !1,
    gr = !1,
    Yn = 0;
  function $e(t) {
    (t !== ea && t.next === null && (ea === null ? (ws = ea = t) : (ea = ea.next = t)),
      (Vs = !0),
      yr || ((yr = !0), H1()));
  }
  function il(t, e) {
    if (!gr && Vs) {
      gr = !0;
      do
        for (var n = !1, l = ws; l !== null;) {
          if (t !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var r = 0;
            else {
              var d = l.suspendedLanes,
                y = l.pingedLanes;
              ((r = (1 << (31 - Se(42 | t) + 1)) - 1),
                (r &= o & ~(d & ~y)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), Um(l, r));
          } else
            ((r = ht),
              (r = Bl(
                l,
                l === Ot ? r : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || xa(l, r) || ((n = !0), Um(l, r)));
          l = l.next;
        }
      while (n);
      gr = !1;
    }
  }
  function L1() {
    _m();
  }
  function _m() {
    Vs = yr = !1;
    var t = 0;
    Yn !== 0 && F1() && (t = Yn);
    for (var e = ve(), n = null, l = ws; l !== null;) {
      var o = l.next,
        r = jm(l, e);
      (r === 0
        ? ((l.next = null), n === null ? (ws = o) : (n.next = o), o === null && (ea = n))
        : ((n = l), (t !== 0 || (r & 3) !== 0) && (Vs = !0)),
        (l = o));
    }
    ((kt !== 0 && kt !== 5) || il(t), Yn !== 0 && (Yn = 0));
  }
  function jm(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        o = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var d = 31 - Se(r),
        y = 1 << d,
        S = o[d];
      (S === -1
        ? ((y & n) === 0 || (y & l) !== 0) && (o[d] = fv(y, e))
        : S <= e && (t.expiredLanes |= y),
        (r &= ~y));
    }
    if (
      ((e = Ot),
      (n = ht),
      (n = Bl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (l = t.callbackNode),
      n === 0 || (t === e && (At === 2 || At === 9)) || t.cancelPendingCommit !== null)
    )
      return (l !== null && l !== null && zu(l), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || xa(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && zu(l), wu(n))) {
        case 2:
        case 8:
          n = Mf;
          break;
        case 32:
          n = Vl;
          break;
        case 268435456:
          n = Df;
          break;
        default:
          n = Vl;
      }
      return (
        (l = Bm.bind(null, t)),
        (n = Cu(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && zu(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Bm(t, e) {
    if (kt !== 0 && kt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Rs() && t.callbackNode !== n) return null;
    var l = ht;
    return (
      (l = Bl(t, t === Ot ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      l === 0
        ? null
        : (gm(t, l, e),
          jm(t, ve()),
          t.callbackNode != null && t.callbackNode === n ? Bm.bind(null, t) : null)
    );
  }
  function Um(t, e) {
    if (Rs()) return null;
    gm(t, e, !0);
  }
  function H1() {
    P1(function () {
      (St & 6) !== 0 ? Cu(Ef, L1) : _m();
    });
  }
  function vr() {
    if (Yn === 0) {
      var t = Yi;
      (t === 0 && ((t = Nl), (Nl <<= 1), (Nl & 261888) === 0 && (Nl = 256)), (Yn = t));
    }
    return Yn;
  }
  function Lm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Yl("" + t);
  }
  function Hm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Y1(t, e, n, l, o) {
    if (e === "submit" && n && n.stateNode === o) {
      var r = Lm((o[ce] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[ce] || null) ? Lm(e.formAction) : d.getAttribute("formAction")),
        e !== null && ((r = e), (d = null)));
      var y = new Zl("action", "action", null, l, o);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Yn !== 0) {
                  var S = d ? Hm(o, d) : new FormData(o);
                  Lo(n, { pending: !0, data: S, method: o.method, action: r }, null, S);
                }
              } else
                typeof r == "function" &&
                  (y.preventDefault(),
                  (S = d ? Hm(o, d) : new FormData(o)),
                  Lo(n, { pending: !0, data: S, method: o.method, action: r }, r, S));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var br = 0; br < to.length; br++) {
    var Sr = to[br],
      q1 = Sr.toLowerCase(),
      G1 = Sr[0].toUpperCase() + Sr.slice(1);
    qe(q1, "on" + G1);
  }
  (qe(yh, "onAnimationEnd"),
    qe(gh, "onAnimationIteration"),
    qe(vh, "onAnimationStart"),
    qe("dblclick", "onDoubleClick"),
    qe("focusin", "onFocus"),
    qe("focusout", "onBlur"),
    qe(a1, "onTransitionRun"),
    qe(l1, "onTransitionStart"),
    qe(s1, "onTransitionCancel"),
    qe(bh, "onTransitionEnd"),
    Di("onMouseEnter", ["mouseout", "mouseover"]),
    Di("onMouseLeave", ["mouseout", "mouseover"]),
    Di("onPointerEnter", ["pointerout", "pointerover"]),
    Di("onPointerLeave", ["pointerout", "pointerover"]),
    In("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    In(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    In("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    In(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    In(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var al =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    X1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al),
    );
  function Ym(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        o = l.event;
      l = l.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var y = l[d],
              S = y.instance,
              C = y.currentTarget;
            if (((y = y.listener), S !== r && o.isPropagationStopped())) break t;
            ((r = y), (o.currentTarget = C));
            try {
              r(o);
            } catch (V) {
              kl(V);
            }
            ((o.currentTarget = null), (r = S));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((y = l[d]),
              (S = y.instance),
              (C = y.currentTarget),
              (y = y.listener),
              S !== r && o.isPropagationStopped())
            )
              break t;
            ((r = y), (o.currentTarget = C));
            try {
              r(o);
            } catch (V) {
              kl(V);
            }
            ((o.currentTarget = null), (r = S));
          }
      }
    }
  }
  function ft(t, e) {
    var n = e[Vu];
    n === void 0 && (n = e[Vu] = new Set());
    var l = t + "__bubble";
    n.has(l) || (qm(e, t, 2, !1), n.add(l));
  }
  function Tr(t, e, n) {
    var l = 0;
    (e && (l |= 4), qm(n, t, l, e));
  }
  var Ns = "_reactListening" + Math.random().toString(36).slice(2);
  function xr(t) {
    if (!t[Ns]) {
      ((t[Ns] = !0),
        _f.forEach(function (n) {
          n !== "selectionchange" && (X1.has(n) || Tr(n, !1, t), Tr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ns] || ((e[Ns] = !0), Tr("selectionchange", !1, e));
    }
  }
  function qm(t, e, n, l) {
    switch (yp(e)) {
      case 2:
        var o = gb;
        break;
      case 8:
        o = vb;
        break;
      default:
        o = Ur;
    }
    ((n = o.bind(null, e, n, t)),
      (o = void 0),
      !qu || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (o = !0),
      l
        ? o !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: o })
          : t.addEventListener(e, n, !0)
        : o !== void 0
          ? t.addEventListener(e, n, { passive: o })
          : t.addEventListener(e, n, !1));
  }
  function Ar(t, e, n, l, o) {
    var r = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var y = l.stateNode.containerInfo;
          if (y === o) break;
          if (d === 4)
            for (d = l.return; d !== null;) {
              var S = d.tag;
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === o) return;
              d = d.return;
            }
          for (; y !== null;) {
            if (((d = Ai(y)), d === null)) return;
            if (((S = d.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = r = d;
              continue t;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    Kf(function () {
      var C = r,
        V = Hu(n),
        j = [];
      t: {
        var z = Sh.get(t);
        if (z !== void 0) {
          var O = Zl,
            K = t;
          switch (t) {
            case "keypress":
              if (Gl(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = Bv;
              break;
            case "focusin":
              ((K = "focus"), (O = Qu));
              break;
            case "focusout":
              ((K = "blur"), (O = Qu));
              break;
            case "beforeblur":
            case "afterblur":
              O = Qu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = Ff;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Ev;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Hv;
              break;
            case yh:
            case gh:
            case vh:
              O = Cv;
              break;
            case bh:
              O = qv;
              break;
            case "scroll":
            case "scrollend":
              O = xv;
              break;
            case "wheel":
              O = Xv;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Ov;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Pf;
              break;
            case "toggle":
            case "beforetoggle":
              O = Qv;
          }
          var et = (e & 4) !== 0,
            zt = !et && (t === "scroll" || t === "scrollend"),
            E = et ? (z !== null ? z + "Capture" : null) : z;
          et = [];
          for (var x = C, M; x !== null;) {
            var N = x;
            if (
              ((M = N.stateNode),
              (N = N.tag),
              (N !== 5 && N !== 26 && N !== 27) ||
                M === null ||
                E === null ||
                ((N = Da(x, E)), N != null && et.push(ll(x, N, M))),
              zt)
            )
              break;
            x = x.return;
          }
          0 < et.length && ((z = new O(z, K, null, n, V)), j.push({ event: z, listeners: et }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            z && n !== Lu && (K = n.relatedTarget || n.fromElement) && (Ai(K) || K[xi]))
          )
            break t;
          if (
            (O || z) &&
            ((z =
              V.window === V
                ? V
                : (z = V.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            O
              ? ((K = n.relatedTarget || n.toElement),
                (O = C),
                (K = K ? Ai(K) : null),
                K !== null &&
                  ((zt = h(K)), (et = K.tag), K !== zt || (et !== 5 && et !== 27 && et !== 6)) &&
                  (K = null))
              : ((O = null), (K = C)),
            O !== K)
          ) {
            if (
              ((et = Ff),
              (N = "onMouseLeave"),
              (E = "onMouseEnter"),
              (x = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((et = Pf), (N = "onPointerLeave"), (E = "onPointerEnter"), (x = "pointer")),
              (zt = O == null ? z : Ma(O)),
              (M = K == null ? z : Ma(K)),
              (z = new et(N, x + "leave", O, n, V)),
              (z.target = zt),
              (z.relatedTarget = M),
              (N = null),
              Ai(V) === C &&
                ((et = new et(E, x + "enter", K, n, V)),
                (et.target = M),
                (et.relatedTarget = zt),
                (N = et)),
              (zt = N),
              O && K)
            )
              e: {
                for (et = Z1, E = O, x = K, M = 0, N = E; N; N = et(N)) M++;
                N = 0;
                for (var I = x; I; I = et(I)) N++;
                for (; 0 < M - N;) ((E = et(E)), M--);
                for (; 0 < N - M;) ((x = et(x)), N--);
                for (; M--;) {
                  if (E === x || (x !== null && E === x.alternate)) {
                    et = E;
                    break e;
                  }
                  ((E = et(E)), (x = et(x)));
                }
                et = null;
              }
            else et = null;
            (O !== null && Gm(j, z, O, et, !1), K !== null && zt !== null && Gm(j, zt, K, et, !0));
          }
        }
        t: {
          if (
            ((z = C ? Ma(C) : window),
            (O = z.nodeName && z.nodeName.toLowerCase()),
            O === "select" || (O === "input" && z.type === "file"))
          )
            var gt = lh;
          else if (ih(z))
            if (sh) gt = e1;
            else {
              gt = Iv;
              var P = $v;
            }
          else
            ((O = z.nodeName),
              !O || O.toLowerCase() !== "input" || (z.type !== "checkbox" && z.type !== "radio")
                ? C && Uu(C.elementType) && (gt = lh)
                : (gt = t1));
          if (gt && (gt = gt(t, C))) {
            ah(j, gt, n, V);
            break t;
          }
          (P && P(t, z, C),
            t === "focusout" &&
              C &&
              z.type === "number" &&
              C.memoizedProps.value != null &&
              Bu(z, "number", z.value));
        }
        switch (((P = C ? Ma(C) : window), t)) {
          case "focusin":
            (ih(P) || P.contentEditable === "true") && ((Vi = P), (Pu = C), (_a = null));
            break;
          case "focusout":
            _a = Pu = Vi = null;
            break;
          case "mousedown":
            $u = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (($u = !1), mh(j, n, V));
            break;
          case "selectionchange":
            if (i1) break;
          case "keydown":
          case "keyup":
            mh(j, n, V);
        }
        var ut;
        if (ku)
          t: {
            switch (t) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          wi
            ? eh(t, n) && (dt = "onCompositionEnd")
            : t === "keydown" && n.keyCode === 229 && (dt = "onCompositionStart");
        (dt &&
          ($f &&
            n.locale !== "ko" &&
            (wi || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && wi && (ut = kf())
              : ((En = V), (Gu = "value" in En ? En.value : En.textContent), (wi = !0))),
          (P = _s(C, dt)),
          0 < P.length &&
            ((dt = new Wf(dt, t, null, n, V)),
            j.push({ event: dt, listeners: P }),
            ut ? (dt.data = ut) : ((ut = nh(n)), ut !== null && (dt.data = ut)))),
          (ut = kv ? Jv(t, n) : Fv(t, n)) &&
            ((dt = _s(C, "onBeforeInput")),
            0 < dt.length &&
              ((P = new Wf("onBeforeInput", "beforeinput", null, n, V)),
              j.push({ event: P, listeners: dt }),
              (P.data = ut))),
          Y1(j, t, C, n, V));
      }
      Ym(j, e);
    });
  }
  function ll(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function _s(t, e) {
    for (var n = e + "Capture", l = []; t !== null;) {
      var o = t,
        r = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          r === null ||
          ((o = Da(t, n)),
          o != null && l.unshift(ll(t, o, r)),
          (o = Da(t, e)),
          o != null && l.push(ll(t, o, r))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function Z1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Gm(t, e, n, l, o) {
    for (var r = e._reactName, d = []; n !== null && n !== l;) {
      var y = n,
        S = y.alternate,
        C = y.stateNode;
      if (((y = y.tag), S !== null && S === l)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        C === null ||
        ((S = C),
        o
          ? ((C = Da(n, r)), C != null && d.unshift(ll(n, C, S)))
          : o || ((C = Da(n, r)), C != null && d.push(ll(n, C, S)))),
        (n = n.return));
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var Q1 = /\r\n?/g,
    K1 = /\u0000|\uFFFD/g;
  function Xm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Q1,
        `
`,
      )
      .replace(K1, "");
  }
  function Zm(t, e) {
    return ((e = Xm(e)), Xm(t) === e);
  }
  function Ct(t, e, n, l, o, r) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || zi(t, l)
          : (typeof l == "number" || typeof l == "bigint") && e !== "body" && zi(t, "" + l);
        break;
      case "className":
        Ll(t, "class", l);
        break;
      case "tabIndex":
        Ll(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ll(t, n, l);
        break;
      case "style":
        Zf(t, l, r);
        break;
      case "data":
        if (e !== "object") {
          Ll(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((l = Yl("" + l)), t.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Ct(t, e, "name", o.name, o, null),
                Ct(t, e, "formEncType", o.formEncType, o, null),
                Ct(t, e, "formMethod", o.formMethod, o, null),
                Ct(t, e, "formTarget", o.formTarget, o, null))
              : (Ct(t, e, "encType", o.encType, o, null),
                Ct(t, e, "method", o.method, o, null),
                Ct(t, e, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((l = Yl("" + l)), t.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (t.onclick = an);
        break;
      case "onScroll":
        l != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Yl("" + l)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol"
            ? t.setAttribute(n, l)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        (ft("beforetoggle", t), ft("toggle", t), Ul(t, "popover", l));
        break;
      case "xlinkActuate":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        nn(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        nn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        nn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        nn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ul(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Sv.get(n) || n), Ul(t, n, l));
    }
  }
  function Er(t, e, n, l, o, r) {
    switch (n) {
      case "style":
        Zf(t, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? zi(t, l)
          : (typeof l == "number" || typeof l == "bigint") && zi(t, "" + l);
        break;
      case "onScroll":
        l != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ft("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = an);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")),
              (e = n.slice(2, o ? n.length - 7 : void 0)),
              (r = t[ce] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, o),
              typeof l == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t ? (t[n] = null) : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, o));
              break t;
            }
            n in t ? (t[n] = l) : l === !0 ? t.setAttribute(n, "") : Ul(t, n, l);
          }
    }
  }
  function ne(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ft("error", t), ft("load", t));
        var l = !1,
          o = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Ct(t, e, r, d, n, null);
              }
          }
        (o && Ct(t, e, "srcSet", n.srcSet, n, null), l && Ct(t, e, "src", n.src, n, null));
        return;
      case "input":
        ft("invalid", t);
        var y = (r = d = o = null),
          S = null,
          C = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var V = n[l];
            if (V != null)
              switch (l) {
                case "name":
                  o = V;
                  break;
                case "type":
                  d = V;
                  break;
                case "checked":
                  S = V;
                  break;
                case "defaultChecked":
                  C = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  y = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(s(137, e));
                  break;
                default:
                  Ct(t, e, l, V, n, null);
              }
          }
        Yf(t, r, y, S, C, d, o, !1);
        return;
      case "select":
        (ft("invalid", t), (l = d = r = null));
        for (o in n)
          if (n.hasOwnProperty(o) && ((y = n[o]), y != null))
            switch (o) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                d = y;
                break;
              case "multiple":
                l = y;
              default:
                Ct(t, e, o, y, n, null);
            }
        ((e = r),
          (n = d),
          (t.multiple = !!l),
          e != null ? Ci(t, !!l, e, !1) : n != null && Ci(t, !!l, n, !0));
        return;
      case "textarea":
        (ft("invalid", t), (r = o = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((y = n[d]), y != null))
            switch (d) {
              case "value":
                l = y;
                break;
              case "defaultValue":
                o = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(s(91));
                break;
              default:
                Ct(t, e, d, y, n, null);
            }
        Gf(t, l, o, r);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((l = n[S]), l != null))
            switch (S) {
              case "selected":
                t.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ct(t, e, S, l, n, null);
            }
        return;
      case "dialog":
        (ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t));
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < al.length; l++) ft(al[l], t);
        break;
      case "image":
        (ft("error", t), ft("load", t));
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ft("error", t), ft("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Ct(t, e, C, l, n, null);
            }
        return;
      default:
        if (Uu(e)) {
          for (V in n)
            n.hasOwnProperty(V) && ((l = n[V]), l !== void 0 && Er(t, e, V, l, n, void 0));
          return;
        }
    }
    for (y in n) n.hasOwnProperty(y) && ((l = n[y]), l != null && Ct(t, e, y, l, n, null));
  }
  function k1(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          r = null,
          d = null,
          y = null,
          S = null,
          C = null,
          V = null;
        for (O in n) {
          var j = n[O];
          if (n.hasOwnProperty(O) && j != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = j;
              default:
                l.hasOwnProperty(O) || Ct(t, e, O, null, l, j);
            }
        }
        for (var z in l) {
          var O = l[z];
          if (((j = n[z]), l.hasOwnProperty(z) && (O != null || j != null)))
            switch (z) {
              case "type":
                r = O;
                break;
              case "name":
                o = O;
                break;
              case "checked":
                C = O;
                break;
              case "defaultChecked":
                V = O;
                break;
              case "value":
                d = O;
                break;
              case "defaultValue":
                y = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(137, e));
                break;
              default:
                O !== j && Ct(t, e, z, O, l, j);
            }
        }
        ju(t, d, y, S, C, V, r, o);
        return;
      case "select":
        O = d = y = z = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                O = S;
              default:
                l.hasOwnProperty(r) || Ct(t, e, r, null, l, S);
            }
        for (o in l)
          if (((r = l[o]), (S = n[o]), l.hasOwnProperty(o) && (r != null || S != null)))
            switch (o) {
              case "value":
                z = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                d = r;
              default:
                r !== S && Ct(t, e, o, r, l, S);
            }
        ((e = y),
          (n = d),
          (l = O),
          z != null
            ? Ci(t, !!n, z, !1)
            : !!l != !!n && (e != null ? Ci(t, !!n, e, !0) : Ci(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        O = z = null;
        for (y in n)
          if (((o = n[y]), n.hasOwnProperty(y) && o != null && !l.hasOwnProperty(y)))
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, y, null, l, o);
            }
        for (d in l)
          if (((o = l[d]), (r = n[d]), l.hasOwnProperty(d) && (o != null || r != null)))
            switch (d) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                O = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== r && Ct(t, e, d, o, l, r);
            }
        qf(t, z, O);
        return;
      case "option":
        for (var K in n)
          if (((z = n[K]), n.hasOwnProperty(K) && z != null && !l.hasOwnProperty(K)))
            switch (K) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ct(t, e, K, null, l, z);
            }
        for (S in l)
          if (((z = l[S]), (O = n[S]), l.hasOwnProperty(S) && z !== O && (z != null || O != null)))
            switch (S) {
              case "selected":
                t.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Ct(t, e, S, z, l, O);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var et in n)
          ((z = n[et]),
            n.hasOwnProperty(et) && z != null && !l.hasOwnProperty(et) && Ct(t, e, et, null, l, z));
        for (C in l)
          if (((z = l[C]), (O = n[C]), l.hasOwnProperty(C) && z !== O && (z != null || O != null)))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, e));
                break;
              default:
                Ct(t, e, C, z, l, O);
            }
        return;
      default:
        if (Uu(e)) {
          for (var zt in n)
            ((z = n[zt]),
              n.hasOwnProperty(zt) &&
                z !== void 0 &&
                !l.hasOwnProperty(zt) &&
                Er(t, e, zt, void 0, l, z));
          for (V in l)
            ((z = l[V]),
              (O = n[V]),
              !l.hasOwnProperty(V) ||
                z === O ||
                (z === void 0 && O === void 0) ||
                Er(t, e, V, z, l, O));
          return;
        }
    }
    for (var E in n)
      ((z = n[E]),
        n.hasOwnProperty(E) && z != null && !l.hasOwnProperty(E) && Ct(t, e, E, null, l, z));
    for (j in l)
      ((z = l[j]),
        (O = n[j]),
        !l.hasOwnProperty(j) || z === O || (z == null && O == null) || Ct(t, e, j, z, l, O));
  }
  function Qm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function J1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var o = n[l],
          r = o.transferSize,
          d = o.initiatorType,
          y = o.duration;
        if (r && y && Qm(d)) {
          for (d = 0, y = o.responseEnd, l += 1; l < n.length; l++) {
            var S = n[l],
              C = S.startTime;
            if (C > y) break;
            var V = S.transferSize,
              j = S.initiatorType;
            V && Qm(j) && ((S = S.responseEnd), (d += V * (S < y ? 1 : (y - C) / (S - C))));
          }
          if ((--l, (e += (8 * (r + d)) / (o.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Mr = null,
    Dr = null;
  function js(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Km(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function km(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Cr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var zr = null;
  function F1() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === zr ? !1 : ((zr = t), !0)) : ((zr = null), !1);
  }
  var Jm = typeof setTimeout == "function" ? setTimeout : void 0,
    W1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Fm = typeof Promise == "function" ? Promise : void 0,
    P1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Fm < "u"
          ? function (t) {
              return Fm.resolve(null).then(t).catch($1);
            }
          : Jm;
  function $1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function qn(t) {
    return t === "head";
  }
  function Wm(t, e) {
    var n = e,
      l = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (t.removeChild(o), la(e));
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") l++;
        else if (n === "html") sl(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), sl(n));
          for (var r = n.firstChild; r;) {
            var d = r.nextSibling,
              y = r.nodeName;
            (r[Ea] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = d));
          }
        } else n === "body" && sl(t.ownerDocument.body);
      n = o;
    } while (n);
    la(e);
  }
  function Pm(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display), (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = l;
    } while (n);
  }
  function Or(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Or(n), Nu(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function I1(t, e, n, l) {
    for (; t.nodeType === 1;) {
      var o = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Ea])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== o.rel ||
                t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) ||
                t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) ||
                t.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (o.src == null ? null : o.src) ||
                  t.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  t.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Ue(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function tb(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n) ||
        ((t = Ue(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function $m(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
        ((t = Ue(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Rr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function wr(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function eb(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var l = function () {
        (e(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l));
    }
  }
  function Ue(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Vr = null;
  function Im(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ue(t.nextSibling);
          e--;
        } else (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function tp(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ep(t, e, n) {
    switch (((e = js(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function sl(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    Nu(t);
  }
  var Le = new Map(),
    np = new Set();
  function Bs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Sn = G.d;
  G.d = { f: nb, r: ib, D: ab, C: lb, L: sb, m: ub, X: rb, S: ob, M: cb };
  function nb() {
    var t = Sn.f(),
      e = Cs();
    return t || e;
  }
  function ib(t) {
    var e = Ei(t);
    e !== null && e.tag === 5 && e.type === "form" ? bd(e) : Sn.r(t);
  }
  var na = typeof document > "u" ? null : document;
  function ip(t, e, n) {
    var l = na;
    if (l && typeof e == "string" && e) {
      var o = Re(e);
      ((o = 'link[rel="' + t + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        np.has(o) ||
          (np.add(o),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(o) === null &&
            ((e = l.createElement("link")), ne(e, "link", t), Ft(e), l.head.appendChild(e))));
    }
  }
  function ab(t) {
    (Sn.D(t), ip("dns-prefetch", t, null));
  }
  function lb(t, e) {
    (Sn.C(t, e), ip("preconnect", t, e));
  }
  function sb(t, e, n) {
    Sn.L(t, e, n);
    var l = na;
    if (l && t && e) {
      var o = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + Re(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" && (o += '[imagesizes="' + Re(n.imageSizes) + '"]'))
        : (o += '[href="' + Re(t) + '"]');
      var r = o;
      switch (e) {
        case "style":
          r = ia(t);
          break;
        case "script":
          r = aa(t);
      }
      Le.has(r) ||
        ((t = b(
          { rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e },
          n,
        )),
        Le.set(r, t),
        l.querySelector(o) !== null ||
          (e === "style" && l.querySelector(ul(r))) ||
          (e === "script" && l.querySelector(ol(r))) ||
          ((e = l.createElement("link")), ne(e, "link", t), Ft(e), l.head.appendChild(e)));
    }
  }
  function ub(t, e) {
    Sn.m(t, e);
    var n = na;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        o = 'link[rel="modulepreload"][as="' + Re(l) + '"][href="' + Re(t) + '"]',
        r = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = aa(t);
      }
      if (
        !Le.has(r) &&
        ((t = b({ rel: "modulepreload", href: t }, e)), Le.set(r, t), n.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ol(r))) return;
        }
        ((l = n.createElement("link")), ne(l, "link", t), Ft(l), n.head.appendChild(l));
      }
    }
  }
  function ob(t, e, n) {
    Sn.S(t, e, n);
    var l = na;
    if (l && t) {
      var o = Mi(l).hoistableStyles,
        r = ia(t);
      e = e || "default";
      var d = o.get(r);
      if (!d) {
        var y = { loading: 0, preload: null };
        if ((d = l.querySelector(ul(r)))) y.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Le.get(r)) && Nr(t, n));
          var S = (d = l.createElement("link"));
          (Ft(S),
            ne(S, "link", t),
            (S._p = new Promise(function (C, V) {
              ((S.onload = C), (S.onerror = V));
            })),
            S.addEventListener("load", function () {
              y.loading |= 1;
            }),
            S.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Us(d, e, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: y }), o.set(r, d));
      }
    }
  }
  function rb(t, e) {
    Sn.X(t, e);
    var n = na;
    if (n && t) {
      var l = Mi(n).hoistableScripts,
        o = aa(t),
        r = l.get(o);
      r ||
        ((r = n.querySelector(ol(o))),
        r ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Le.get(o)) && _r(t, e),
          (r = n.createElement("script")),
          Ft(r),
          ne(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(o, r));
    }
  }
  function cb(t, e) {
    Sn.M(t, e);
    var n = na;
    if (n && t) {
      var l = Mi(n).hoistableScripts,
        o = aa(t),
        r = l.get(o);
      r ||
        ((r = n.querySelector(ol(o))),
        r ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Le.get(o)) && _r(t, e),
          (r = n.createElement("script")),
          Ft(r),
          ne(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(o, r));
    }
  }
  function ap(t, e, n, l) {
    var o = (o = rt.current) ? Bs(o) : null;
    if (!o) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ia(n.href)),
            (n = Mi(o).hoistableStyles),
            (l = n.get(e)),
            l || ((l = { type: "style", instance: null, count: 0, state: null }), n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ia(n.href);
          var r = Mi(o).hoistableStyles,
            d = r.get(t);
          if (
            (d ||
              ((o = o.ownerDocument || o),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, d),
              (r = o.querySelector(ul(t))) && !r._p && ((d.instance = r), (d.state.loading = 5)),
              Le.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Le.set(t, n),
                r || fb(o, t, n, d.state))),
            e && l === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = aa(n)),
              (n = Mi(o).hoistableScripts),
              (l = n.get(e)),
              l || ((l = { type: "script", instance: null, count: 0, state: null }), n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function ia(t) {
    return 'href="' + Re(t) + '"';
  }
  function ul(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function lp(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function fb(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ne(e, "link", n),
        Ft(e),
        t.head.appendChild(e));
  }
  function aa(t) {
    return '[src="' + Re(t) + '"]';
  }
  function ol(t) {
    return "script[async]" + t;
  }
  function sp(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + Re(n.href) + '"]');
          if (l) return ((e.instance = l), Ft(l), l);
          var o = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Ft(l),
            ne(l, "style", o),
            Us(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          o = ia(n.href);
          var r = t.querySelector(ul(o));
          if (r) return ((e.state.loading |= 4), (e.instance = r), Ft(r), r);
          ((l = lp(n)),
            (o = Le.get(o)) && Nr(l, o),
            (r = (t.ownerDocument || t).createElement("link")),
            Ft(r));
          var d = r;
          return (
            (d._p = new Promise(function (y, S) {
              ((d.onload = y), (d.onerror = S));
            })),
            ne(r, "link", l),
            (e.state.loading |= 4),
            Us(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = aa(n.src)),
            (o = t.querySelector(ol(r)))
              ? ((e.instance = o), Ft(o), o)
              : ((l = n),
                (o = Le.get(r)) && ((l = b({}, n)), _r(l, o)),
                (t = t.ownerDocument || t),
                (o = t.createElement("script")),
                Ft(o),
                ne(o, "link", l),
                t.head.appendChild(o),
                (e.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Us(l, n.precedence, t));
    return e.instance;
  }
  function Us(t, e, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        o = l.length ? l[l.length - 1] : null,
        r = o,
        d = 0;
      d < l.length;
      d++
    ) {
      var y = l[d];
      if (y.dataset.precedence === e) r = y;
      else if (r !== o) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Nr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function _r(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Ls = null;
  function up(t, e, n) {
    if (Ls === null) {
      var l = new Map(),
        o = (Ls = new Map());
      o.set(n, l);
    } else ((o = Ls), (l = o.get(n)), l || ((l = new Map()), o.set(n, l)));
    if (l.has(t)) return l;
    for (l.set(t, null), n = n.getElementsByTagName(t), o = 0; o < n.length; o++) {
      var r = n[o];
      if (
        !(r[Ea] || r[$t] || (t === "link" && r.getAttribute("rel") === "stylesheet")) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = r.getAttribute(e) || "";
        d = t + d;
        var y = l.get(d);
        y ? y.push(r) : l.set(d, [r]);
      }
    }
    return l;
  }
  function op(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null));
  }
  function hb(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return ((t = e.disabled), typeof e.precedence == "string" && t == null);
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function rp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function db(t, e, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var o = ia(l.href),
          r = e.querySelector(ul(o));
        if (r) {
          ((e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Hs.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            Ft(r));
          return;
        }
        ((r = e.ownerDocument || e),
          (l = lp(l)),
          (o = Le.get(o)) && Nr(l, o),
          (r = r.createElement("link")),
          Ft(r));
        var d = r;
        ((d._p = new Promise(function (y, S) {
          ((d.onload = y), (d.onerror = S));
        })),
          ne(r, "link", l),
          (n.instance = r));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Hs.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var jr = 0;
  function mb(t, e) {
    return (
      t.stylesheets && t.count === 0 && qs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && qs(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4 + e);
            0 < t.imgBytes && jr === 0 && (jr = 62500 * J1());
            var o = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && qs(t, t.stylesheets), t.unsuspend))
                ) {
                  var r = t.unsuspend;
                  ((t.unsuspend = null), r());
                }
              },
              (t.imgBytes > jr ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(l), clearTimeout(o));
              }
            );
          }
        : null
    );
  }
  function Hs() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) qs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Ys = null;
  function qs(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Ys = new Map()), e.forEach(pb, t), (Ys = null), Hs.call(t)));
  }
  function pb(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Ys.get(t);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Ys.set(t, n));
        for (
          var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0;
          r < o.length;
          r++
        ) {
          var d = o[r];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      ((o = e.instance),
        (d = o.getAttribute("data-precedence")),
        (r = n.get(d) || l),
        r === l && n.set(null, o),
        n.set(d, o),
        this.count++,
        (l = Hs.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        r
          ? r.parentNode.insertBefore(o, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(o, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var rl = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function yb(t, e, n, l, o, r, d, y, S) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ou(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ou(0)),
      (this.hiddenUpdates = Ou(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = r),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function cp(t, e, n, l, o, r, d, y, S, C, V, j) {
    return (
      (t = new yb(t, e, n, d, S, C, V, j, y)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = xe(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = mo()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: l, isDehydrated: n, cache: e }),
      vo(r),
      t
    );
  }
  function fp(t) {
    return t ? ((t = ji), t) : ji;
  }
  function hp(t, e, n, l, o, r) {
    ((o = fp(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = Rn(e)),
      (l.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (l.callback = r),
      (n = wn(t, l, e)),
      n !== null && (ye(n, t, e), qa(n, t, e)));
  }
  function dp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Br(t, e) {
    (dp(t, e), (t = t.alternate) && dp(t, e));
  }
  function mp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ii(t, 67108864);
      (e !== null && ye(e, t, 67108864), Br(t, 67108864));
    }
  }
  function pp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = Ru(e);
      var n = ii(t, e);
      (n !== null && ye(n, t, e), Br(t, e));
    }
  }
  var Gs = !0;
  function gb(t, e, n, l) {
    var o = R.T;
    R.T = null;
    var r = G.p;
    try {
      ((G.p = 2), Ur(t, e, n, l));
    } finally {
      ((G.p = r), (R.T = o));
    }
  }
  function vb(t, e, n, l) {
    var o = R.T;
    R.T = null;
    var r = G.p;
    try {
      ((G.p = 8), Ur(t, e, n, l));
    } finally {
      ((G.p = r), (R.T = o));
    }
  }
  function Ur(t, e, n, l) {
    if (Gs) {
      var o = Lr(l);
      if (o === null) (Ar(t, e, l, Xs, n), gp(t, l));
      else if (Sb(o, t, e, n, l)) l.stopPropagation();
      else if ((gp(t, l), e & 4 && -1 < bb.indexOf(t))) {
        for (; o !== null;) {
          var r = Ei(o);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var d = $n(r.pendingLanes);
                  if (d !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; d;) {
                      var S = 1 << (31 - Se(d));
                      ((y.entanglements[1] |= S), (d &= ~S));
                    }
                    ($e(r), (St & 6) === 0 && ((Ms = ve() + 500), il(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((y = ii(r, 2)), y !== null && ye(y, r, 2), Cs(), Br(r, 2));
            }
          if (((r = Lr(l)), r === null && Ar(t, e, l, Xs, n), r === o)) break;
          o = r;
        }
        o !== null && l.stopPropagation();
      } else Ar(t, e, l, null, n);
    }
  }
  function Lr(t) {
    return ((t = Hu(t)), Hr(t));
  }
  var Xs = null;
  function Hr(t) {
    if (((Xs = null), (t = Ai(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Xs = t), null);
  }
  function yp(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (av()) {
          case Ef:
            return 2;
          case Mf:
            return 8;
          case Vl:
          case lv:
            return 32;
          case Df:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yr = !1,
    Gn = null,
    Xn = null,
    Zn = null,
    cl = new Map(),
    fl = new Map(),
    Qn = [],
    bb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function gp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Gn = null;
        break;
      case "dragenter":
      case "dragleave":
        Xn = null;
        break;
      case "mouseover":
      case "mouseout":
        Zn = null;
        break;
      case "pointerover":
      case "pointerout":
        cl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fl.delete(e.pointerId);
    }
  }
  function hl(t, e, n, l, o, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: r,
          targetContainers: [o],
        }),
        e !== null && ((e = Ei(e)), e !== null && mp(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        o !== null && e.indexOf(o) === -1 && e.push(o),
        t);
  }
  function Sb(t, e, n, l, o) {
    switch (e) {
      case "focusin":
        return ((Gn = hl(Gn, t, e, n, l, o)), !0);
      case "dragenter":
        return ((Xn = hl(Xn, t, e, n, l, o)), !0);
      case "mouseover":
        return ((Zn = hl(Zn, t, e, n, l, o)), !0);
      case "pointerover":
        var r = o.pointerId;
        return (cl.set(r, hl(cl.get(r) || null, t, e, n, l, o)), !0);
      case "gotpointercapture":
        return ((r = o.pointerId), fl.set(r, hl(fl.get(r) || null, t, e, n, l, o)), !0);
    }
    return !1;
  }
  function vp(t) {
    var e = Ai(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            ((t.blockedOn = e),
              Vf(t.priority, function () {
                pp(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            ((t.blockedOn = e),
              Vf(t.priority, function () {
                pp(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Zs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = Lr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Lu = l), n.target.dispatchEvent(l), (Lu = null));
      } else return ((e = Ei(n)), e !== null && mp(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function bp(t, e, n) {
    Zs(t) && n.delete(e);
  }
  function Tb() {
    ((Yr = !1),
      Gn !== null && Zs(Gn) && (Gn = null),
      Xn !== null && Zs(Xn) && (Xn = null),
      Zn !== null && Zs(Zn) && (Zn = null),
      cl.forEach(bp),
      fl.forEach(bp));
  }
  function Qs(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Yr || ((Yr = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, Tb)));
  }
  var Ks = null;
  function Sp(t) {
    Ks !== t &&
      ((Ks = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Ks === t && (Ks = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            o = t[e + 2];
          if (typeof l != "function") {
            if (Hr(l || n) === null) continue;
            break;
          }
          var r = Ei(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Lo(r, { pending: !0, data: o, method: n.method, action: l }, l, o));
        }
      }));
  }
  function la(t) {
    function e(S) {
      return Qs(S, t);
    }
    (Gn !== null && Qs(Gn, t),
      Xn !== null && Qs(Xn, t),
      Zn !== null && Qs(Zn, t),
      cl.forEach(e),
      fl.forEach(e));
    for (var n = 0; n < Qn.length; n++) {
      var l = Qn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null);)
      (vp(n), n.blockedOn === null && Qn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var o = n[l],
          r = n[l + 1],
          d = o[ce] || null;
        if (typeof r == "function") d || Sp(n);
        else if (d) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (((o = r), (d = r[ce] || null))) y = d.formAction;
            else if (Hr(o) !== null) continue;
          } else y = d.action;
          (typeof y == "function" ? (n[l + 1] = y) : (n.splice(l, 3), (l -= 3)), Sp(n));
        }
      }
  }
  function Tp() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (o = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (o !== null && (o(), (o = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        o = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            o !== null && (o(), (o = null)));
        }
      );
    }
  }
  function qr(t) {
    this._internalRoot = t;
  }
  ((ks.prototype.render = qr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var n = e.current,
        l = Ce();
      hp(n, l, t, e, null, null);
    }),
    (ks.prototype.unmount = qr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (hp(t.current, 2, null, t, null, null), Cs(), (e[xi] = null));
        }
      }));
  function ks(t) {
    this._internalRoot = t;
  }
  ks.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = wf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Qn.length && e !== 0 && e < Qn[n].priority; n++);
      (Qn.splice(n, 0, t), n === 0 && vp(t));
    }
  };
  var xp = a.version;
  if (xp !== "19.2.6") throw Error(s(527, xp, "19.2.6"));
  G.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return ((t = p(e)), (t = t !== null ? v(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var xb = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.6",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Js.isDisabled && Js.supportsFiber)
      try {
        ((Ta = Js.inject(xb)), (be = Js));
      } catch {}
  }
  return (
    (ml.createRoot = function (t, e) {
      if (!c(t)) throw Error(s(299));
      var n = !1,
        l = "",
        o = Od,
        r = Rd,
        d = wd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = cp(t, 1, !1, null, null, n, l, null, o, r, d, Tp)),
        (t[xi] = e.current),
        xr(t),
        new qr(e)
      );
    }),
    (ml.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(s(299));
      var l = !1,
        o = "",
        r = Od,
        d = Rd,
        y = wd,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (e = cp(t, 1, !0, e, n ?? null, l, o, S, r, d, y, Tp)),
        (e.context = fp(null)),
        (n = e.current),
        (l = Ce()),
        (l = Ru(l)),
        (o = Rn(l)),
        (o.callback = null),
        wn(n, o, l),
        (n = l),
        (e.current.lanes = n),
        Aa(e, n),
        $e(e),
        (t[xi] = e.current),
        xr(t),
        new ks(e)
      );
    }),
    (ml.version = "19.2.6"),
    ml
  );
}
var Vp;
function Vb() {
  if (Vp) return Zr.exports;
  Vp = 1;
  function i() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return (i(), (Zr.exports = wb()), Zr.exports);
}
var Nb = Vb();
function Al(i) {
  const a = i.replace(/^\//, "").replace(/\/$/, "");
  return a ? `#/${a}` : "#/";
}
function qc(i) {
  const a = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return a
    ? a.startsWith("/")
      ? { kind: "route", path: a.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: a }
    : null;
}
function l0(i, a = "smooth") {
  if (typeof document > "u") return !1;
  const u = document.getElementById(i);
  return u ? (u.scrollIntoView({ behavior: a, block: "start" }), !0) : !1;
}
function ha(i) {
  typeof window > "u" || (window.location.hash = Al(i));
}
function _b() {
  const i = qc();
  return (i == null ? void 0 : i.kind) === "route" ? i.path : "";
}
function s0() {
  if (typeof window > "u") return;
  const i = qc();
  (i == null ? void 0 : i.kind) === "section" && requestAnimationFrame(() => l0(i.id, "auto"));
}
function jb(i, a) {
  if (typeof window > "u") return () => {};
  const u = () => {
    const s = qc();
    if (!s) {
      i("");
      return;
    }
    if (s.kind === "route") {
      i(s.path);
      return;
    }
    (l0(s.id, "smooth"), i(""));
  };
  return (
    u(),
    window.addEventListener("hashchange", u),
    () => window.removeEventListener("hashchange", u)
  );
}
function Bb(i = "") {
  const [a, u] = k.useState(() => (typeof window < "u" ? _b() : i));
  return (k.useEffect(() => jb(u), []), a || i);
}
function Ub({ routes: i, defaultRoute: a = "", className: u }) {
  const s = Bb(a);
  k.useEffect(() => {
    s0();
  }, []);
  const c = s in i ? s : a,
    h = i[c] ?? i[a];
  return _.jsx("div", { className: u, children: h });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lb = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  u0 = (...i) =>
    i
      .filter((a, u, s) => !!a && a.trim() !== "" && s.indexOf(a) === u)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hb = {
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
 */ const Yb = k.forwardRef(
  (
    {
      color: i = "currentColor",
      size: a = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: s,
      className: c = "",
      children: h,
      iconNode: f,
      ...m
    },
    g,
  ) =>
    k.createElement(
      "svg",
      {
        ref: g,
        ...Hb,
        width: a,
        height: a,
        stroke: i,
        strokeWidth: s ? (Number(u) * 24) / Number(a) : u,
        className: u0("lucide", c),
        ...m,
      },
      [...f.map(([p, v]) => k.createElement(p, v)), ...(Array.isArray(h) ? h : [h])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gc = (i, a) => {
  const u = k.forwardRef(({ className: s, ...c }, h) =>
    k.createElement(Yb, { ref: h, iconNode: a, className: u0(`lucide-${Lb(i)}`, s), ...c }),
  );
  return ((u.displayName = `${i}`), u);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qb = Gc("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gb = Gc("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xb = Gc("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  o0 = [
    { label: "Platform", route: "platform" },
    { label: "How it works", route: "how-it-works" },
    { label: "Insights", route: "insights" },
  ];
function Zb({ open: i, onClick: a }) {
  return _.jsxs("button", {
    type: "button",
    onClick: a,
    className:
      "relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 lg:hidden",
    style: { backgroundColor: i ? "#1a1a1a" : "transparent" },
    "aria-label": "Toggle menu",
    children: [
      _.jsx("span", {
        className: "absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
        style: {
          opacity: i ? 0 : 1,
          transform: i ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)",
        },
        children: _.jsx(Gb, { size: 20, color: "white", strokeWidth: 1.5 }),
      }),
      _.jsx("span", {
        className: "absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
        style: {
          opacity: i ? 1 : 0,
          transform: i ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)",
        },
        children: _.jsx(Xb, { size: 20, color: "white", strokeWidth: 1.5 }),
      }),
    ],
  });
}
function Qb({ open: i, onClose: a }) {
  return _.jsxs(_.Fragment, {
    children: [
      _.jsx("div", {
        className: "fixed inset-0 z-30 transition-all duration-500 lg:hidden",
        style: {
          backdropFilter: i ? "blur(12px)" : "blur(0px)",
          backgroundColor: i ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          pointerEvents: i ? "auto" : "none",
        },
        onClick: a,
        "aria-hidden": !i,
      }),
      _.jsx("div", {
        className: "fixed left-0 right-0 top-0 z-40 overflow-hidden lg:hidden",
        style: {
          maxHeight: i ? "420px" : "0px",
          transition: "max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        },
        children: _.jsxs("div", {
          className: "px-5 pb-6 pt-20",
          style: {
            backgroundColor: "rgba(8,8,8,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          },
          children: [
            _.jsxs("div", {
              className: "flex flex-col gap-1",
              children: [
                _.jsx("a", {
                  href: Al(""),
                  onClick: (u) => {
                    (u.preventDefault(), ha(""), a());
                  },
                  className:
                    "flex items-center justify-between rounded-xl px-3 py-3 text-base text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white",
                  children: "Home",
                }),
                o0.map((u, s) =>
                  _.jsxs(
                    "a",
                    {
                      href: Al(u.route),
                      onClick: (c) => {
                        (c.preventDefault(), ha(u.route), a());
                      },
                      className:
                        "flex items-center justify-between rounded-xl px-3 py-3 text-base text-white/70 transition-all duration-200 hover:bg-white/5 hover:text-white group",
                      style: {
                        transitionDelay: i ? `${s * 50 + 80}ms` : "0ms",
                        opacity: i ? 1 : 0,
                        transform: i ? "translateY(0)" : "translateY(-8px)",
                        transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${s * 50 + 80}ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${s * 50 + 80}ms, color 0.2s, background 0.2s`,
                      },
                      children: [
                        u.label,
                        _.jsx(qb, {
                          size: 14,
                          className:
                            "-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-40",
                        }),
                      ],
                    },
                    u.route,
                  ),
                ),
              ],
            }),
            _.jsx("div", {
              className: "mt-5 pt-5",
              style: {
                borderTop: "1px solid rgba(255,255,255,0.07)",
                transitionDelay: i ? "360ms" : "0ms",
                opacity: i ? 1 : 0,
                transform: i ? "translateY(0)" : "translateY(-8px)",
                transition:
                  "opacity 0.4s cubic-bezier(0.23,1,0.32,1) 360ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) 360ms",
              },
              children: _.jsx("button", {
                type: "button",
                className:
                  "w-full rounded-full py-3 text-sm font-medium text-black transition-all duration-300 hover:opacity-80",
                style: { backgroundColor: "#ffffff" },
                onClick: () => {
                  (ha("contact"), a());
                },
                children: "Get started",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function r0({ fixed: i = !1 }) {
  const [a, u] = k.useState(!1);
  k.useEffect(() => {
    const h = (f) => f.key === "Escape" && u(!1);
    return (window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h));
  }, []);
  const s = (h) => (f) => {
      (f.preventDefault(), ha(h), u(!1));
    },
    c = i ? "fixed" : "absolute";
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("nav", {
        id: "navbar",
        "data-draftly-section-id": "navbar",
        className: `${c} left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 lg:px-10 lg:py-6`,
        children: [
          _.jsx("a", {
            href: Al(""),
            onClick: s(""),
            className: "font-manrope text-xl font-semibold tracking-tight text-white",
            "aria-label": "Baby Track home",
            children: "baby track",
          }),
          _.jsx("div", {
            className: "hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex",
            style: { backgroundColor: "#0C0C0C" },
            children: o0.map((h) =>
              _.jsx(
                "a",
                {
                  href: Al(h.route),
                  onClick: s(h.route),
                  className:
                    "rounded-full px-4 py-1.5 text-sm text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white",
                  children: h.label,
                },
                h.route,
              ),
            ),
          }),
          _.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              _.jsx(Zb, { open: a, onClick: () => u((h) => !h) }),
              _.jsx("button", {
                type: "button",
                className:
                  "hidden rounded-full px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:opacity-80 lg:block",
                style: { backgroundColor: "#ffffff" },
                onClick: () => ha("contact"),
                children: "Get started",
              }),
            ],
          }),
        ],
      }),
      _.jsx(Qb, { open: a, onClose: () => u(!1) }),
    ],
  });
}
function vu({ eyebrow: i, title: a, description: u, children: s }) {
  return _.jsxs("div", {
    className: "min-h-screen bg-black text-white",
    children: [
      _.jsx(r0, { fixed: !0 }),
      _.jsxs("div", {
        className: "mx-auto max-w-4xl px-5 pb-24 pt-28 lg:px-10 lg:pt-32",
        children: [
          _.jsx("p", {
            className: "text-xs font-semibold uppercase tracking-[0.35em] text-[#FF0000]",
            children: i,
          }),
          _.jsx("h1", {
            className:
              "mt-4 font-manrope text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
            children: a,
          }),
          _.jsx("p", {
            className: "mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg",
            children: u,
          }),
          s ? _.jsx("div", { className: "mt-12", children: s }) : null,
        ],
      }),
    ],
  });
}
function Kb() {
  return _.jsx(vu, {
    eyebrow: "Contact",
    title: "Get started",
    description:
      "Tell us about your operations stack—we onboard design partners in rolling cohorts.",
    children: _.jsxs("form", {
      id: "contact",
      "data-draftly-section-id": "contact",
      className: "max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6",
      onSubmit: (i) => i.preventDefault(),
      children: [
        _.jsxs("label", {
          className: "block text-sm font-medium",
          children: [
            "Work email",
            _.jsx("input", {
              type: "email",
              className:
                "mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm outline-none focus:border-[#FF0000]/50",
              placeholder: "you@company.com",
            }),
          ],
        }),
        _.jsxs("label", {
          className: "block text-sm font-medium",
          children: [
            "Company",
            _.jsx("input", {
              type: "text",
              className:
                "mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-sm outline-none focus:border-[#FF0000]/50",
              placeholder: "Your team",
            }),
          ],
        }),
        _.jsx("button", {
          type: "submit",
          className:
            "w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-opacity hover:opacity-85",
          children: "Request access",
        }),
      ],
    }),
  });
}
const c0 = k.createContext({});
function da(i) {
  const a = k.useRef(null);
  return (a.current === null && (a.current = i()), a.current);
}
const kb = typeof window < "u",
  Xc = kb ? k.useLayoutEffect : k.useEffect,
  Zc = k.createContext(null);
function Qc(i, a) {
  i.indexOf(a) === -1 && i.push(a);
}
function uu(i, a) {
  const u = i.indexOf(a);
  u > -1 && i.splice(u, 1);
}
const Je = (i, a, u) => (u > a ? a : u < i ? i : u);
let Kc = () => {};
const Fn = {},
  f0 = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
  h0 = (i) => typeof i == "object" && i !== null,
  d0 = (i) => /^0[^.\s]+$/u.test(i);
function m0(i) {
  let a;
  return () => (a === void 0 && (a = i()), a);
}
const ge = (i) => i,
  Cl = (...i) => i.reduce((a, u) => (s) => u(a(s))),
  ma = (i, a, u) => {
    const s = a - i;
    return s ? (u - i) / s : 1;
  };
class kc {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return (Qc(this.subscriptions, a), () => uu(this.subscriptions, a));
  }
  notify(a, u, s) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](a, u, s);
      else
        for (let h = 0; h < c; h++) {
          const f = this.subscriptions[h];
          f && f(a, u, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ze = (i) => i * 1e3,
  He = (i) => i / 1e3,
  Jc = (i, a) => (a ? i * (1e3 / a) : 0),
  p0 = (i, a, u) => (((1 - 3 * u + 3 * a) * i + (3 * u - 6 * a)) * i + 3 * a) * i,
  Jb = 1e-7,
  Fb = 12;
function Wb(i, a, u, s, c) {
  let h,
    f,
    m = 0;
  do ((f = a + (u - a) / 2), (h = p0(f, s, c) - i), h > 0 ? (u = f) : (a = f));
  while (Math.abs(h) > Jb && ++m < Fb);
  return f;
}
function zl(i, a, u, s) {
  if (i === a && u === s) return ge;
  const c = (h) => Wb(h, 0, 1, i, u);
  return (h) => (h === 0 || h === 1 ? h : p0(c(h), a, s));
}
const y0 = (i) => (a) => (a <= 0.5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2),
  g0 = (i) => (a) => 1 - i(1 - a),
  v0 = zl(0.33, 1.53, 0.69, 0.99),
  Fc = g0(v0),
  b0 = y0(Fc),
  S0 = (i) => (i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Fc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1)))),
  Wc = (i) => 1 - Math.sin(Math.acos(i)),
  T0 = g0(Wc),
  x0 = y0(Wc),
  Pb = zl(0.42, 0, 1, 1),
  $b = zl(0, 0, 0.58, 1),
  A0 = zl(0.42, 0, 0.58, 1),
  Ib = (i) => Array.isArray(i) && typeof i[0] != "number",
  E0 = (i) => Array.isArray(i) && typeof i[0] == "number",
  tS = {
    linear: ge,
    easeIn: Pb,
    easeInOut: A0,
    easeOut: $b,
    circIn: Wc,
    circInOut: x0,
    circOut: T0,
    backIn: Fc,
    backInOut: b0,
    backOut: v0,
    anticipate: S0,
  },
  eS = (i) => typeof i == "string",
  Np = (i) => {
    if (E0(i)) {
      Kc(i.length === 4);
      const [a, u, s, c] = i;
      return zl(a, u, s, c);
    } else if (eS(i)) return tS[i];
    return i;
  },
  Fs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function nS(i, a) {
  let u = new Set(),
    s = new Set(),
    c = !1,
    h = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    (f.has(v) && (p.schedule(v), i()), v(m));
  }
  const p = {
    schedule: (v, b = !1, T = !1) => {
      const w = T && c ? u : s;
      return (b && f.add(v), w.add(v), v);
    },
    cancel: (v) => {
      (s.delete(v), f.delete(v));
    },
    process: (v) => {
      if (((m = v), c)) {
        h = !0;
        return;
      }
      c = !0;
      const b = u;
      ((u = s), (s = b), u.forEach(g), u.clear(), (c = !1), h && ((h = !1), p.process(v)));
    },
  };
  return p;
}
const iS = 40;
function M0(i, a) {
  let u = !1,
    s = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (u = !0),
    f = Fs.reduce((Y, Z) => ((Y[Z] = nS(h)), Y), {}),
    {
      setup: m,
      read: g,
      resolveKeyframes: p,
      preUpdate: v,
      update: b,
      preRender: T,
      render: D,
      postRender: w,
    } = f,
    U = () => {
      const Y = Fn.useManualTiming,
        Z = Y ? c.timestamp : performance.now();
      ((u = !1),
        Y || (c.delta = s ? 1e3 / 60 : Math.max(Math.min(Z - c.timestamp, iS), 1)),
        (c.timestamp = Z),
        (c.isProcessing = !0),
        m.process(c),
        g.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        T.process(c),
        D.process(c),
        w.process(c),
        (c.isProcessing = !1),
        u && a && ((s = !1), i(U)));
    },
    L = () => {
      ((u = !0), (s = !0), c.isProcessing || i(U));
    };
  return {
    schedule: Fs.reduce((Y, Z) => {
      const tt = f[Z];
      return ((Y[Z] = (ot, J = !1, $ = !1) => (u || L(), tt.schedule(ot, J, $))), Y);
    }, {}),
    cancel: (Y) => {
      for (let Z = 0; Z < Fs.length; Z++) f[Fs[Z]].cancel(Y);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: yt,
  cancel: Ye,
  state: Pt,
  steps: Jr,
} = M0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ge, !0);
let tu;
function aS() {
  tu = void 0;
}
const oe = {
    now: () => (
      tu === void 0 &&
        oe.set(Pt.isProcessing || Fn.useManualTiming ? Pt.timestamp : performance.now()),
      tu
    ),
    set: (i) => {
      ((tu = i), queueMicrotask(aS));
    },
  },
  D0 = (i) => (a) => typeof a == "string" && a.startsWith(i),
  C0 = D0("--"),
  lS = D0("var(--"),
  Pc = (i) => (lS(i) ? sS.test(i.split("/*")[0].trim()) : !1),
  sS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function _p(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ga = { test: (i) => typeof i == "number", parse: parseFloat, transform: (i) => i },
  El = { ...ga, transform: (i) => Je(0, 1, i) },
  Ws = { ...ga, default: 1 },
  vl = (i) => Math.round(i * 1e5) / 1e5,
  $c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function uS(i) {
  return i == null;
}
const oS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ic = (i, a) => (u) =>
    !!(
      (typeof u == "string" && oS.test(u) && u.startsWith(i)) ||
      (a && !uS(u) && Object.prototype.hasOwnProperty.call(u, a))
    ),
  z0 = (i, a, u) => (s) => {
    if (typeof s != "string") return s;
    const [c, h, f, m] = s.match($c);
    return {
      [i]: parseFloat(c),
      [a]: parseFloat(h),
      [u]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  rS = (i) => Je(0, 255, i),
  Fr = { ...ga, transform: (i) => Math.round(rS(i)) },
  vi = {
    test: Ic("rgb", "red"),
    parse: z0("red", "green", "blue"),
    transform: ({ red: i, green: a, blue: u, alpha: s = 1 }) =>
      "rgba(" +
      Fr.transform(i) +
      ", " +
      Fr.transform(a) +
      ", " +
      Fr.transform(u) +
      ", " +
      vl(El.transform(s)) +
      ")",
  };
function cS(i) {
  let a = "",
    u = "",
    s = "",
    c = "";
  return (
    i.length > 5
      ? ((a = i.substring(1, 3)),
        (u = i.substring(3, 5)),
        (s = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((a = i.substring(1, 2)),
        (u = i.substring(2, 3)),
        (s = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (a += a),
        (u += u),
        (s += s),
        (c += c)),
    {
      red: parseInt(a, 16),
      green: parseInt(u, 16),
      blue: parseInt(s, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const hc = { test: Ic("#"), parse: cS, transform: vi.transform },
  Ol = (i) => ({
    test: (a) => typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${i}`,
  }),
  Tn = Ol("deg"),
  en = Ol("%"),
  F = Ol("px"),
  fS = Ol("vh"),
  hS = Ol("vw"),
  jp = { ...en, parse: (i) => en.parse(i) / 100, transform: (i) => en.transform(i * 100) },
  oa = {
    test: Ic("hsl", "hue"),
    parse: z0("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: a, lightness: u, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      en.transform(vl(a)) +
      ", " +
      en.transform(vl(u)) +
      ", " +
      vl(El.transform(s)) +
      ")",
  },
  Kt = {
    test: (i) => vi.test(i) || hc.test(i) || oa.test(i),
    parse: (i) => (vi.test(i) ? vi.parse(i) : oa.test(i) ? oa.parse(i) : hc.parse(i)),
    transform: (i) =>
      typeof i == "string" ? i : i.hasOwnProperty("red") ? vi.transform(i) : oa.transform(i),
    getAnimatableNone: (i) => {
      const a = Kt.parse(i);
      return ((a.alpha = 0), Kt.transform(a));
    },
  },
  dS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mS(i) {
  var a, u;
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (((a = i.match($c)) == null ? void 0 : a.length) || 0) +
      (((u = i.match(dS)) == null ? void 0 : u.length) || 0) >
      0
  );
}
const O0 = "number",
  R0 = "color",
  pS = "var",
  yS = "var(",
  Bp = "${}",
  gS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pa(i) {
  const a = i.toString(),
    u = [],
    s = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const m = a
    .replace(
      gS,
      (g) => (
        Kt.test(g)
          ? (s.color.push(h), c.push(R0), u.push(Kt.parse(g)))
          : g.startsWith(yS)
            ? (s.var.push(h), c.push(pS), u.push(g))
            : (s.number.push(h), c.push(O0), u.push(parseFloat(g))),
        ++h,
        Bp
      ),
    )
    .split(Bp);
  return { values: u, split: m, indexes: s, types: c };
}
function vS(i) {
  return pa(i).values;
}
function w0({ split: i, types: a }) {
  const u = i.length;
  return (s) => {
    let c = "";
    for (let h = 0; h < u; h++)
      if (((c += i[h]), s[h] !== void 0)) {
        const f = a[h];
        f === O0 ? (c += vl(s[h])) : f === R0 ? (c += Kt.transform(s[h])) : (c += s[h]);
      }
    return c;
  };
}
function bS(i) {
  return w0(pa(i));
}
const SS = (i) => (typeof i == "number" ? 0 : Kt.test(i) ? Kt.getAnimatableNone(i) : i),
  TS = (i, a) => (typeof i == "number" ? (a != null && a.trim().endsWith("/") ? i : 0) : SS(i));
function xS(i) {
  const a = pa(i);
  return w0(a)(a.values.map((s, c) => TS(s, a.split[c])));
}
const ke = { test: mS, parse: vS, createTransformer: bS, getAnimatableNone: xS };
function Wr(i, a, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6 ? i + (a - i) * 6 * u : u < 1 / 2 ? a : u < 2 / 3 ? i + (a - i) * (2 / 3 - u) * 6 : i
  );
}
function AS({ hue: i, saturation: a, lightness: u, alpha: s }) {
  ((i /= 360), (a /= 100), (u /= 100));
  let c = 0,
    h = 0,
    f = 0;
  if (!a) c = h = f = u;
  else {
    const m = u < 0.5 ? u * (1 + a) : u + a - u * a,
      g = 2 * u - m;
    ((c = Wr(g, m, i + 1 / 3)), (h = Wr(g, m, i)), (f = Wr(g, m, i - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: s,
  };
}
function ou(i, a) {
  return (u) => (u > 0 ? a : i);
}
const Rt = (i, a, u) => i + (a - i) * u,
  Pr = (i, a, u) => {
    const s = i * i,
      c = u * (a * a - s) + s;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  ES = [hc, vi, oa],
  MS = (i) => ES.find((a) => a.test(i));
function Up(i) {
  const a = MS(i);
  if (!a) return !1;
  let u = a.parse(i);
  return (a === oa && (u = AS(u)), u);
}
const Lp = (i, a) => {
    const u = Up(i),
      s = Up(a);
    if (!u || !s) return ou(i, a);
    const c = { ...u };
    return (h) => (
      (c.red = Pr(u.red, s.red, h)),
      (c.green = Pr(u.green, s.green, h)),
      (c.blue = Pr(u.blue, s.blue, h)),
      (c.alpha = Rt(u.alpha, s.alpha, h)),
      vi.transform(c)
    );
  },
  dc = new Set(["none", "hidden"]);
function DS(i, a) {
  return dc.has(i) ? (u) => (u <= 0 ? i : a) : (u) => (u >= 1 ? a : i);
}
function CS(i, a) {
  return (u) => Rt(i, a, u);
}
function tf(i) {
  return typeof i == "number"
    ? CS
    : typeof i == "string"
      ? Pc(i)
        ? ou
        : Kt.test(i)
          ? Lp
          : RS
      : Array.isArray(i)
        ? V0
        : typeof i == "object"
          ? Kt.test(i)
            ? Lp
            : zS
          : ou;
}
function V0(i, a) {
  const u = [...i],
    s = u.length,
    c = i.map((h, f) => tf(h)(h, a[f]));
  return (h) => {
    for (let f = 0; f < s; f++) u[f] = c[f](h);
    return u;
  };
}
function zS(i, a) {
  const u = { ...i, ...a },
    s = {};
  for (const c in u) i[c] !== void 0 && a[c] !== void 0 && (s[c] = tf(i[c])(i[c], a[c]));
  return (c) => {
    for (const h in s) u[h] = s[h](c);
    return u;
  };
}
function OS(i, a) {
  const u = [],
    s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < a.values.length; c++) {
    const h = a.types[c],
      f = i.indexes[h][s[h]],
      m = i.values[f] ?? 0;
    ((u[c] = m), s[h]++);
  }
  return u;
}
const RS = (i, a) => {
  const u = ke.createTransformer(a),
    s = pa(i),
    c = pa(a);
  return s.indexes.var.length === c.indexes.var.length &&
    s.indexes.color.length === c.indexes.color.length &&
    s.indexes.number.length >= c.indexes.number.length
    ? (dc.has(i) && !c.values.length) || (dc.has(a) && !s.values.length)
      ? DS(i, a)
      : Cl(V0(OS(s, c), c.values), u)
    : ou(i, a);
};
function N0(i, a, u) {
  return typeof i == "number" && typeof a == "number" && typeof u == "number"
    ? Rt(i, a, u)
    : tf(i)(i, a);
}
const wS = (i) => {
    const a = ({ timestamp: u }) => i(u);
    return {
      start: (u = !0) => yt.update(a, u),
      stop: () => Ye(a),
      now: () => (Pt.isProcessing ? Pt.timestamp : oe.now()),
    };
  },
  _0 = (i, a, u = 10) => {
    let s = "";
    const c = Math.max(Math.round(a / u), 2);
    for (let h = 0; h < c; h++) s += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  ru = 2e4;
function ef(i) {
  let a = 0;
  const u = 50;
  let s = i.next(a);
  for (; !s.done && a < ru;) ((a += u), (s = i.next(a)));
  return a >= ru ? 1 / 0 : a;
}
function VS(i, a = 100, u) {
  const s = u({ ...i, keyframes: [0, a] }),
    c = Math.min(ef(s), ru);
  return { type: "keyframes", ease: (h) => s.next(c * h).value / a, duration: He(c) };
}
const Bt = {
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
};
function mc(i, a) {
  return i * Math.sqrt(1 - a * a);
}
const NS = 12;
function _S(i, a, u) {
  let s = u;
  for (let c = 1; c < NS; c++) s = s - i(s) / a(s);
  return s;
}
const $r = 0.001;
function jS({
  duration: i = Bt.duration,
  bounce: a = Bt.bounce,
  velocity: u = Bt.velocity,
  mass: s = Bt.mass,
}) {
  let c,
    h,
    f = 1 - a;
  ((f = Je(Bt.minDamping, Bt.maxDamping, f)),
    (i = Je(Bt.minDuration, Bt.maxDuration, He(i))),
    f < 1
      ? ((c = (p) => {
          const v = p * f,
            b = v * i,
            T = v - u,
            D = mc(p, f),
            w = Math.exp(-b);
          return $r - (T / D) * w;
        }),
        (h = (p) => {
          const b = p * f * i,
            T = b * u + u,
            D = Math.pow(f, 2) * Math.pow(p, 2) * i,
            w = Math.exp(-b),
            U = mc(Math.pow(p, 2), f);
          return ((-c(p) + $r > 0 ? -1 : 1) * ((T - D) * w)) / U;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * i),
            b = (p - u) * i + 1;
          return -$r + v * b;
        }),
        (h = (p) => {
          const v = Math.exp(-p * i),
            b = (u - p) * (i * i);
          return v * b;
        })));
  const m = 5 / i,
    g = _S(c, h, m);
  if (((i = ze(i)), isNaN(g))) return { stiffness: Bt.stiffness, damping: Bt.damping, duration: i };
  {
    const p = Math.pow(g, 2) * s;
    return { stiffness: p, damping: f * 2 * Math.sqrt(s * p), duration: i };
  }
}
const BS = ["duration", "bounce"],
  US = ["stiffness", "damping", "mass"];
function Hp(i, a) {
  return a.some((u) => i[u] !== void 0);
}
function LS(i) {
  let a = {
    velocity: Bt.velocity,
    stiffness: Bt.stiffness,
    damping: Bt.damping,
    mass: Bt.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!Hp(i, US) && Hp(i, BS))
    if (((a.velocity = 0), i.visualDuration)) {
      const u = i.visualDuration,
        s = (2 * Math.PI) / (u * 1.2),
        c = s * s,
        h = 2 * Je(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      a = { ...a, mass: Bt.mass, stiffness: c, damping: h };
    } else {
      const u = jS({ ...i, velocity: 0 });
      ((a = { ...a, ...u, mass: Bt.mass }), (a.isResolvedFromDuration = !0));
    }
  return a;
}
function cu(i = Bt.visualDuration, a = Bt.bounce) {
  const u = typeof i != "object" ? { visualDuration: i, keyframes: [0, 1], bounce: a } : i;
  let { restSpeed: s, restDelta: c } = u;
  const h = u.keyframes[0],
    f = u.keyframes[u.keyframes.length - 1],
    m = { done: !1, value: h },
    {
      stiffness: g,
      damping: p,
      mass: v,
      duration: b,
      velocity: T,
      isResolvedFromDuration: D,
    } = LS({ ...u, velocity: -He(u.velocity || 0) }),
    w = T || 0,
    U = p / (2 * Math.sqrt(g * v)),
    L = f - h,
    H = He(Math.sqrt(g / v)),
    q = Math.abs(L) < 5;
  (s || (s = q ? Bt.restSpeed.granular : Bt.restSpeed.default),
    c || (c = q ? Bt.restDelta.granular : Bt.restDelta.default));
  let Y, Z, tt, ot, J, $;
  if (U < 1)
    ((tt = mc(H, U)),
      (ot = (w + U * H * L) / tt),
      (Y = (nt) => {
        const bt = Math.exp(-U * H * nt);
        return f - bt * (ot * Math.sin(tt * nt) + L * Math.cos(tt * nt));
      }),
      (J = U * H * ot + L * tt),
      ($ = U * H * L - ot * tt),
      (Z = (nt) => Math.exp(-U * H * nt) * (J * Math.sin(tt * nt) + $ * Math.cos(tt * nt))));
  else if (U === 1) {
    Y = (bt) => f - Math.exp(-H * bt) * (L + (w + H * L) * bt);
    const nt = w + H * L;
    Z = (bt) => Math.exp(-H * bt) * (H * nt * bt - w);
  } else {
    const nt = H * Math.sqrt(U * U - 1);
    Y = (qt) => {
      const Ut = Math.exp(-U * H * qt),
        R = Math.min(nt * qt, 300);
      return f - (Ut * ((w + U * H * L) * Math.sinh(R) + nt * L * Math.cosh(R))) / nt;
    };
    const bt = (w + U * H * L) / nt,
      xt = U * H * bt - L * nt,
      le = U * H * L - bt * nt;
    Z = (qt) => {
      const Ut = Math.exp(-U * H * qt),
        R = Math.min(nt * qt, 300);
      return Ut * (xt * Math.sinh(R) + le * Math.cosh(R));
    };
  }
  const Mt = {
    calculatedDuration: (D && b) || null,
    velocity: (nt) => ze(Z(nt)),
    next: (nt) => {
      if (!D && U < 1) {
        const xt = Math.exp(-U * H * nt),
          le = Math.sin(tt * nt),
          qt = Math.cos(tt * nt),
          Ut = f - xt * (ot * le + L * qt),
          R = ze(xt * (J * le + $ * qt));
        return (
          (m.done = Math.abs(R) <= s && Math.abs(f - Ut) <= c),
          (m.value = m.done ? f : Ut),
          m
        );
      }
      const bt = Y(nt);
      if (D) m.done = nt >= b;
      else {
        const xt = ze(Z(nt));
        m.done = Math.abs(xt) <= s && Math.abs(f - bt) <= c;
      }
      return ((m.value = m.done ? f : bt), m);
    },
    toString: () => {
      const nt = Math.min(ef(Mt), ru),
        bt = _0((xt) => Mt.next(nt * xt).value, nt, 30);
      return nt + "ms " + bt;
    },
    toTransition: () => {},
  };
  return Mt;
}
cu.applyToOptions = (i) => {
  const a = VS(i, 100, cu);
  return ((i.ease = a.ease), (i.duration = ze(a.duration)), (i.type = "keyframes"), i);
};
const HS = 5;
function j0(i, a, u) {
  const s = Math.max(a - HS, 0);
  return Jc(u - i(s), a - s);
}
function pc({
  keyframes: i,
  velocity: a = 0,
  power: u = 0.8,
  timeConstant: s = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: m,
  max: g,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const b = i[0],
    T = { done: !1, value: b },
    D = ($) => (m !== void 0 && $ < m) || (g !== void 0 && $ > g),
    w = ($) => (m === void 0 ? g : g === void 0 || Math.abs(m - $) < Math.abs(g - $) ? m : g);
  let U = u * a;
  const L = b + U,
    H = f === void 0 ? L : f(L);
  H !== L && (U = H - b);
  const q = ($) => -U * Math.exp(-$ / s),
    Y = ($) => H + q($),
    Z = ($) => {
      const Mt = q($),
        nt = Y($);
      ((T.done = Math.abs(Mt) <= p), (T.value = T.done ? H : nt));
    };
  let tt, ot;
  const J = ($) => {
    D(T.value) &&
      ((tt = $),
      (ot = cu({
        keyframes: [T.value, w(T.value)],
        velocity: j0(Y, $, T.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    J(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let Mt = !1;
        return (
          !ot && tt === void 0 && ((Mt = !0), Z($), J($)),
          tt !== void 0 && $ >= tt ? ot.next($ - tt) : (!Mt && Z($), T)
        );
      },
    }
  );
}
function YS(i, a, u) {
  const s = [],
    c = u || Fn.mix || N0,
    h = i.length - 1;
  for (let f = 0; f < h; f++) {
    let m = c(i[f], i[f + 1]);
    if (a) {
      const g = Array.isArray(a) ? a[f] || ge : a;
      m = Cl(g, m);
    }
    s.push(m);
  }
  return s;
}
function nf(i, a, { clamp: u = !0, ease: s, mixer: c } = {}) {
  const h = i.length;
  if ((Kc(h === a.length), h === 1)) return () => a[0];
  if (h === 2 && a[0] === a[1]) return () => a[1];
  const f = i[0] === i[1];
  i[0] > i[h - 1] && ((i = [...i].reverse()), (a = [...a].reverse()));
  const m = YS(a, s, c),
    g = m.length,
    p = (v) => {
      if (f && v < i[0]) return a[0];
      let b = 0;
      if (g > 1) for (; b < i.length - 2 && !(v < i[b + 1]); b++);
      const T = ma(i[b], i[b + 1], v);
      return m[b](T);
    };
  return u ? (v) => p(Je(i[0], i[h - 1], v)) : p;
}
function qS(i, a) {
  const u = i[i.length - 1];
  for (let s = 1; s <= a; s++) {
    const c = ma(0, a, s);
    i.push(Rt(u, 1, c));
  }
}
function B0(i) {
  const a = [0];
  return (qS(a, i.length - 1), a);
}
function GS(i, a) {
  return i.map((u) => u * a);
}
function XS(i, a) {
  return i.map(() => a || A0).splice(0, i.length - 1);
}
function bl({ duration: i = 300, keyframes: a, times: u, ease: s = "easeInOut" }) {
  const c = Ib(s) ? s.map(Np) : Np(s),
    h = { done: !1, value: a[0] },
    f = GS(u && u.length === a.length ? u : B0(a), i),
    m = nf(f, a, { ease: Array.isArray(c) ? c : XS(a, c) });
  return { calculatedDuration: i, next: (g) => ((h.value = m(g)), (h.done = g >= i), h) };
}
const ZS = (i) => i !== null;
function bu(i, { repeat: a, repeatType: u = "loop" }, s, c = 1) {
  const h = i.filter(ZS),
    m = c < 0 || (a && u !== "loop" && a % 2 === 1) ? 0 : h.length - 1;
  return !m || s === void 0 ? h[m] : s;
}
const QS = { decay: pc, inertia: pc, tween: bl, keyframes: bl, spring: cu };
function U0(i) {
  typeof i.type == "string" && (i.type = QS[i.type]);
}
class af {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((a) => {
      this.resolve = a;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(a, u) {
    return this.finished.then(a, u);
  }
}
const KS = (i) => i / 100;
class fu extends af {
  constructor(a) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var s, c;
        const { motionValue: u } = this.options;
        (u && u.updatedAt !== oe.now() && this.tick(oe.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (c = (s = this.options).onStop) == null || c.call(s)));
      }),
      (this.options = a),
      this.initAnimation(),
      this.play(),
      a.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: a } = this;
    U0(a);
    const { type: u = bl, repeat: s = 0, repeatDelay: c = 0, repeatType: h, velocity: f = 0 } = a;
    let { keyframes: m } = a;
    const g = u || bl;
    g !== bl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Cl(KS, N0(m[0], m[1]))), (m = [0, 100]));
    const p = g({ ...a, keyframes: m });
    (h === "mirror" &&
      (this.mirroredGenerator = g({ ...a, keyframes: [...m].reverse(), velocity: -f })),
      p.calculatedDuration === null && (p.calculatedDuration = ef(p)));
    const { calculatedDuration: v } = p;
    ((this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (s + 1) - c),
      (this.generator = p));
  }
  updateTime(a) {
    const u = Math.round(a - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = u);
  }
  tick(a, u = !1) {
    const {
      generator: s,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p = 0,
      keyframes: v,
      repeat: b,
      repeatType: T,
      repeatDelay: D,
      type: w,
      onUpdate: U,
      finalKeyframe: L,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, a))
      : this.speed < 0 && (this.startTime = Math.min(a - c / this.speed, this.startTime)),
      u ? (this.currentTime = a) : this.updateTime(a));
    const H = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      q = this.playbackSpeed >= 0 ? H < 0 : H > c;
    ((this.currentTime = Math.max(H, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c));
    let Y = this.currentTime,
      Z = s;
    if (b) {
      const $ = Math.min(this.currentTime, c) / m;
      let Mt = Math.floor($),
        nt = $ % 1;
      (!nt && $ >= 1 && (nt = 1),
        nt === 1 && Mt--,
        (Mt = Math.min(Mt, b + 1)),
        !!(Mt % 2) &&
          (T === "reverse" ? ((nt = 1 - nt), D && (nt -= D / m)) : T === "mirror" && (Z = f)),
        (Y = Je(0, 1, nt) * m));
    }
    let tt;
    (q ? ((this.delayState.value = v[0]), (tt = this.delayState)) : (tt = Z.next(Y)),
      h && !q && (tt.value = h(tt.value)));
    let { done: ot } = tt;
    !q &&
      g !== null &&
      (ot = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const J =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ot));
    return (
      J && w !== pc && (tt.value = bu(v, this.options, L, this.speed)),
      U && U(tt.value),
      J && this.finish(),
      tt
    );
  }
  then(a, u) {
    return this.finished.then(a, u);
  }
  get duration() {
    return He(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + He(a);
  }
  get time() {
    return He(this.currentTime);
  }
  set time(a) {
    ((a = ze(a)),
      (this.currentTime = a),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = a)
        : this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = a), this.tick(a)));
  }
  getGeneratorVelocity() {
    const a = this.currentTime;
    if (a <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(a);
    const u = this.generator.next(a).value;
    return j0((s) => this.generator.next(s).value, a, u);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const u = this.playbackSpeed !== a;
    (u && this.driver && this.updateTime(oe.now()),
      (this.playbackSpeed = a),
      u && this.driver && (this.time = He(this.currentTime)));
  }
  play() {
    var c, h;
    if (this.isStopped) return;
    const { driver: a = wS, startTime: u } = this.options;
    (this.driver || (this.driver = a((f) => this.tick(f))),
      (h = (c = this.options).onPlay) == null || h.call(c));
    const s = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
        ? (this.startTime = s - this.holdTime)
        : this.startTime || (this.startTime = u ?? s),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"), this.updateTime(oe.now()), (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null));
  }
  finish() {
    var a, u;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (u = (a = this.options).onComplete) == null || u.call(a));
  }
  cancel() {
    var a, u;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (u = (a = this.options).onCancel) == null || u.call(a));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return ((this.startTime = 0), this.tick(a, !0));
  }
  attachTimeline(a) {
    var u;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (u = this.driver) == null || u.stop(),
      a.observe(this)
    );
  }
}
function kS(i) {
  for (let a = 1; a < i.length; a++) i[a] ?? (i[a] = i[a - 1]);
}
const bi = (i) => (i * 180) / Math.PI,
  yc = (i) => {
    const a = bi(Math.atan2(i[1], i[0]));
    return gc(a);
  },
  JS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: yc,
    rotateZ: yc,
    skewX: (i) => bi(Math.atan(i[1])),
    skewY: (i) => bi(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  gc = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  Yp = yc,
  qp = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  Gp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  FS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: qp,
    scaleY: Gp,
    scale: (i) => (qp(i) + Gp(i)) / 2,
    rotateX: (i) => gc(bi(Math.atan2(i[6], i[5]))),
    rotateY: (i) => gc(bi(Math.atan2(-i[2], i[0]))),
    rotateZ: Yp,
    rotate: Yp,
    skewX: (i) => bi(Math.atan(i[4])),
    skewY: (i) => bi(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function vc(i) {
  return i.includes("scale") ? 1 : 0;
}
function bc(i, a) {
  if (!i || i === "none") return vc(a);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, c;
  if (u) ((s = FS), (c = u));
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((s = JS), (c = m));
  }
  if (!c) return vc(a);
  const h = s[a],
    f = c[1].split(",").map(PS);
  return typeof h == "function" ? h(f) : f[h];
}
const WS = (i, a) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return bc(u, a);
};
function PS(i) {
  return parseFloat(i.trim());
}
const va = [
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
  ba = new Set([...va, "pathRotation"]),
  Xp = (i) => i === ga || i === F,
  $S = new Set(["x", "y", "z"]),
  IS = va.filter((i) => !$S.has(i));
function tT(i) {
  const a = [];
  return (
    IS.forEach((u) => {
      const s = i.getValue(u);
      s !== void 0 && (a.push([u, s.get()]), s.set(u.startsWith("scale") ? 1 : 0));
    }),
    a
  );
}
const Jn = {
  width: ({ x: i }, { paddingLeft: a = "0", paddingRight: u = "0", boxSizing: s }) => {
    const c = i.max - i.min;
    return s === "border-box" ? c : c - parseFloat(a) - parseFloat(u);
  },
  height: ({ y: i }, { paddingTop: a = "0", paddingBottom: u = "0", boxSizing: s }) => {
    const c = i.max - i.min;
    return s === "border-box" ? c : c - parseFloat(a) - parseFloat(u);
  },
  top: (i, { top: a }) => parseFloat(a),
  left: (i, { left: a }) => parseFloat(a),
  bottom: ({ y: i }, { top: a }) => parseFloat(a) + (i.max - i.min),
  right: ({ x: i }, { left: a }) => parseFloat(a) + (i.max - i.min),
  x: (i, { transform: a }) => bc(a, "x"),
  y: (i, { transform: a }) => bc(a, "y"),
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const Si = new Set();
let Sc = !1,
  Tc = !1,
  xc = !1;
function L0() {
  if (Tc) {
    const i = Array.from(Si).filter((s) => s.needsMeasurement),
      a = new Set(i.map((s) => s.element)),
      u = new Map();
    (a.forEach((s) => {
      const c = tT(s);
      c.length && (u.set(s, c), s.render());
    }),
      i.forEach((s) => s.measureInitialState()),
      a.forEach((s) => {
        s.render();
        const c = u.get(s);
        c &&
          c.forEach(([h, f]) => {
            var m;
            (m = s.getValue(h)) == null || m.set(f);
          });
      }),
      i.forEach((s) => s.measureEndState()),
      i.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      }));
  }
  ((Tc = !1), (Sc = !1), Si.forEach((i) => i.complete(xc)), Si.clear());
}
function H0() {
  Si.forEach((i) => {
    (i.readKeyframes(), i.needsMeasurement && (Tc = !0));
  });
}
function eT() {
  ((xc = !0), H0(), L0(), (xc = !1));
}
class lf {
  constructor(a, u, s, c, h, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = u),
      (this.name = s),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Si.add(this), Sc || ((Sc = !0), yt.read(H0), yt.resolveKeyframes(L0)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, name: u, element: s, motionValue: c } = this;
    if (a[0] === null) {
      const h = c == null ? void 0 : c.get(),
        f = a[a.length - 1];
      if (h !== void 0) a[0] = h;
      else if (s && u) {
        const m = s.readValue(u, f);
        m != null && (a[0] = m);
      }
      (a[0] === void 0 && (a[0] = f), c && h === void 0 && c.set(a[0]));
    }
    kS(a);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(a = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
      Si.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Si.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const nT = (i) => i.startsWith("--");
function Y0(i, a, u) {
  nT(a) ? i.style.setProperty(a, u) : (i.style[a] = u);
}
const iT = {};
function sf(i, a) {
  const u = m0(i);
  return () => iT[a] ?? u();
}
const uf = sf(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  q0 = sf(() => window.ViewTimeline !== void 0, "viewTimeline"),
  G0 = sf(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  yl = ([i, a, u, s]) => `cubic-bezier(${i}, ${a}, ${u}, ${s})`,
  Zp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yl([0, 0.65, 0.55, 1]),
    circOut: yl([0.55, 0, 1, 0.45]),
    backIn: yl([0.31, 0.01, 0.66, -0.59]),
    backOut: yl([0.33, 1.53, 0.69, 0.99]),
  };
function X0(i, a) {
  if (i)
    return typeof i == "function"
      ? G0()
        ? _0(i, a)
        : "ease-out"
      : E0(i)
        ? yl(i)
        : Array.isArray(i)
          ? i.map((u) => X0(u, a) || Zp.easeOut)
          : Zp[i];
}
function aT(
  i,
  a,
  u,
  {
    delay: s = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: g,
  } = {},
  p = void 0,
) {
  const v = { [a]: u };
  g && (v.offset = g);
  const b = X0(m, c);
  Array.isArray(b) && (v.easing = b);
  const T = {
    delay: s,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (p && (T.pseudoElement = p), i.animate(v, T));
}
function Z0(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function lT({ type: i, ...a }) {
  return Z0(i) && G0()
    ? i.applyToOptions(a)
    : (a.duration ?? (a.duration = 300), a.ease ?? (a.ease = "easeOut"), a);
}
class Q0 extends af {
  constructor(a) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !a)
    )
      return;
    const {
      element: u,
      name: s,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: g,
    } = a;
    ((this.isPseudoElement = !!h),
      (this.allowFlatten = f),
      (this.options = a),
      Kc(typeof a.type != "string"));
    const p = lT(a);
    ((this.animation = aT(u, s, c, p, h)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const v = bu(c, this.options, m, this.speed);
          (this.updateMotionValue && this.updateMotionValue(v),
            Y0(u, s, v),
            this.animation.cancel());
        }
        (g == null || g(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var a, u;
    (u = (a = this.animation).finish) == null || u.call(a);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: a } = this;
    a === "idle" ||
      a === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var u, s, c;
    const a = (u = this.options) == null ? void 0 : u.element;
    !this.isPseudoElement &&
      a != null &&
      a.isConnected &&
      ((c = (s = this.animation).commitStyles) == null || c.call(s));
  }
  get duration() {
    var u, s;
    const a =
      ((s = (u = this.animation.effect) == null ? void 0 : u.getComputedTiming) == null
        ? void 0
        : s.call(u).duration) || 0;
    return He(Number(a));
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + He(a);
  }
  get time() {
    return He(Number(this.animation.currentTime) || 0);
  }
  set time(a) {
    const u = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = ze(a)),
      u && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(a) {
    (a < 0 && (this.finishedTime = null), (this.animation.playbackRate = a));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(a) {
    this.manualStartTime = this.animation.startTime = a;
  }
  attachTimeline({ timeline: a, rangeStart: u, rangeEnd: s, observe: c }) {
    var h;
    return (
      this.allowFlatten &&
        ((h = this.animation.effect) == null || h.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      a && uf()
        ? ((this.animation.timeline = a),
          u && (this.animation.rangeStart = u),
          s && (this.animation.rangeEnd = s),
          ge)
        : c(this)
    );
  }
}
const K0 = { anticipate: S0, backInOut: b0, circInOut: x0 };
function sT(i) {
  return i in K0;
}
function uT(i) {
  typeof i.ease == "string" && sT(i.ease) && (i.ease = K0[i.ease]);
}
const Ir = 10;
class oT extends Q0 {
  constructor(a) {
    (uT(a),
      U0(a),
      super(a),
      a.startTime !== void 0 && a.autoplay !== !1 && (this.startTime = a.startTime),
      (this.options = a));
  }
  updateMotionValue(a) {
    const { motionValue: u, onUpdate: s, onComplete: c, element: h, ...f } = this.options;
    if (!u) return;
    if (a !== void 0) {
      u.set(a);
      return;
    }
    const m = new fu({ ...f, autoplay: !1 }),
      g = Math.max(Ir, oe.now() - this.startTime),
      p = Je(0, Ir, g - Ir),
      v = m.sample(g).value,
      { name: b } = this.options;
    (h && b && Y0(h, b, v), u.setWithVelocity(m.sample(Math.max(0, g - p)).value, v, p), m.stop());
  }
}
const Qp = (i, a) =>
  a === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" && (ke.test(i) || i === "0") && !i.startsWith("url("))
      );
function rT(i) {
  const a = i[0];
  if (i.length === 1) return !0;
  for (let u = 0; u < i.length; u++) if (i[u] !== a) return !0;
}
function cT(i, a, u, s) {
  const c = i[0];
  if (c === null) return !1;
  if (a === "display" || a === "visibility") return !0;
  const h = i[i.length - 1],
    f = Qp(c, a),
    m = Qp(h, a);
  return !f || !m ? !1 : rT(i) || ((u === "spring" || Z0(u)) && s);
}
function Ac(i) {
  ((i.duration = 0), (i.type = "keyframes"));
}
const k0 = new Set(["opacity", "clipPath", "filter", "transform"]),
  fT = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hT(i) {
  for (let a = 0; a < i.length; a++) if (typeof i[a] == "string" && fT.test(i[a])) return !0;
  return !1;
}
const dT = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  mT = m0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function pT(i) {
  var b;
  const {
    motionValue: a,
    name: u,
    repeatDelay: s,
    repeatType: c,
    damping: h,
    type: f,
    keyframes: m,
  } = i;
  if (!(((b = a == null ? void 0 : a.owner) == null ? void 0 : b.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: p, transformTemplate: v } = a.owner.getProps();
  return (
    mT() &&
    u &&
    (k0.has(u) || (dT.has(u) && hT(m))) &&
    (u !== "transform" || !v) &&
    !p &&
    !s &&
    c !== "mirror" &&
    h !== 0 &&
    f !== "inertia"
  );
}
const yT = 40;
class gT extends af {
  constructor({
    autoplay: a = !0,
    delay: u = 0,
    type: s = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: g,
    motionValue: p,
    element: v,
    ...b
  }) {
    var w;
    (super(),
      (this.stop = () => {
        var U, L;
        (this._animation &&
          (this._animation.stop(), (U = this.stopTimeline) == null || U.call(this)),
          (L = this.keyframeResolver) == null || L.cancel());
      }),
      (this.createdAt = oe.now()));
    const T = {
        autoplay: a,
        delay: u,
        type: s,
        repeat: c,
        repeatDelay: h,
        repeatType: f,
        name: g,
        motionValue: p,
        element: v,
        ...b,
      },
      D = (v == null ? void 0 : v.KeyframeResolver) || lf;
    ((this.keyframeResolver = new D(
      m,
      (U, L, H) => this.onKeyframesResolved(U, L, T, !H),
      g,
      p,
      v,
    )),
      (w = this.keyframeResolver) == null || w.scheduleResolve());
  }
  onKeyframesResolved(a, u, s, c) {
    var H, q;
    this.keyframeResolver = void 0;
    const { name: h, type: f, velocity: m, delay: g, isHandoff: p, onUpdate: v } = s;
    this.resolvedAt = oe.now();
    let b = !0;
    cT(a, h, f, m) ||
      ((b = !1),
      (Fn.instantAnimations || !g) && (v == null || v(bu(a, s, u))),
      (a[0] = a[a.length - 1]),
      Ac(s),
      (s.repeat = 0));
    const D = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > yT
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: u,
        ...s,
        keyframes: a,
      },
      w = b && !p && pT(D),
      U = (q = (H = D.motionValue) == null ? void 0 : H.owner) == null ? void 0 : q.current;
    let L;
    if (w)
      try {
        L = new oT({ ...D, element: U });
      } catch {
        L = new fu(D);
      }
    else L = new fu(D);
    (L.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(ge),
      this.pendingTimeline &&
        ((this.stopTimeline = L.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = L));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(a, u) {
    return this.finished.finally(a).then(() => {});
  }
  get animation() {
    var a;
    return (
      this._animation || ((a = this.keyframeResolver) == null || a.resume(), eT()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(a) {
    this.animation.time = a;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(a) {
    this.animation.speed = a;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(a) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(a))
        : (this.pendingTimeline = a),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var a;
    (this._animation && this.animation.cancel(), (a = this.keyframeResolver) == null || a.cancel());
  }
}
function J0(i, a, u, s = 0, c = 1) {
  const h = Array.from(i)
      .sort((p, v) => p.sortNodePosition(v))
      .indexOf(a),
    f = i.size,
    m = (f - 1) * s;
  return typeof u == "function" ? u(h, f) : c === 1 ? h * s : m - h * s;
}
const Kp = 30,
  vT = (i) => !isNaN(parseFloat(i)),
  Sl = { current: void 0 };
class bT {
  constructor(a, u = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var h;
        const c = oe.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((h = this.events.change) == null || h.notify(this.current), this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = u.owner));
  }
  setCurrent(a) {
    ((this.current = a),
      (this.updatedAt = oe.now()),
      this.canTrackVelocity === null && a !== void 0 && (this.canTrackVelocity = vT(this.current)));
  }
  setPrevFrameValue(a = this.current) {
    ((this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, u) {
    this.events[a] || (this.events[a] = new kc());
    const s = this.events[a].add(u);
    return a === "change"
      ? () => {
          (s(),
            yt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : s;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, u) {
    ((this.passiveEffect = a), (this.stopPassiveEffect = u));
  }
  set(a) {
    this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a);
  }
  setWithVelocity(a, u, s) {
    (this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - s));
  }
  jump(a, u = !0) {
    (this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var a;
    (a = this.events.change) == null || a.notify(this.current);
  }
  addDependent(a) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(a));
  }
  removeDependent(a) {
    this.dependents && this.dependents.delete(a);
  }
  get() {
    return (Sl.current && Sl.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = oe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > Kp)
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Kp);
    return Jc(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((u) => {
        ((this.hasAnimated = !0),
          (this.animation = a(u)),
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
    var a, u;
    ((a = this.dependents) == null || a.clear(),
      (u = this.events.destroy) == null || u.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ke(i, a) {
  return new bT(i, a);
}
function F0(i, a) {
  if (i != null && i.inherit && a) {
    const { inherit: u, ...s } = i;
    return { ...a, ...s };
  }
  return i;
}
function of(i, a) {
  const u = (i == null ? void 0 : i[a]) ?? (i == null ? void 0 : i.default) ?? i;
  return u !== i ? F0(u, i) : u;
}
const ST = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  TT = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  xT = { type: "keyframes", duration: 0.8 },
  AT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ET = (i, { keyframes: a }) =>
    a.length > 2 ? xT : ba.has(i) ? (i.startsWith("scale") ? TT(a[1]) : ST) : AT,
  MT = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function DT(i) {
  for (const a in i) if (!MT.has(a)) return !0;
  return !1;
}
const rf =
    (i, a, u, s = {}, c, h) =>
    (f) => {
      const m = of(s, i) || {},
        g = m.delay || s.delay || 0;
      let { elapsed: p = 0 } = s;
      p = p - ze(g);
      const v = {
        keyframes: Array.isArray(u) ? u : [null, u],
        ease: "easeOut",
        velocity: a.getVelocity(),
        ...m,
        delay: -p,
        onUpdate: (T) => {
          (a.set(T), m.onUpdate && m.onUpdate(T));
        },
        onComplete: () => {
          (f(), m.onComplete && m.onComplete());
        },
        name: i,
        motionValue: a,
        element: h ? void 0 : c,
      };
      (DT(m) || Object.assign(v, ET(i, v)),
        v.duration && (v.duration = ze(v.duration)),
        v.repeatDelay && (v.repeatDelay = ze(v.repeatDelay)),
        v.from !== void 0 && (v.keyframes[0] = v.from));
      let b = !1;
      if (
        ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
          (Ac(v), v.delay === 0 && (b = !0)),
        (Fn.instantAnimations ||
          Fn.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          m.skipAnimations) &&
          ((b = !0), Ac(v), (v.delay = 0)),
        (v.allowFlatten = !m.type && !m.ease),
        b && !h && a.get() !== void 0)
      ) {
        const T = bu(v.keyframes, m);
        if (T !== void 0) {
          yt.update(() => {
            (v.onUpdate(T), v.onComplete());
          });
          return;
        }
      }
      return m.isSync ? new fu(v) : new gT(v);
    },
  CT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zT(i) {
  const a = CT.exec(i);
  if (!a) return [,];
  const [, u, s, c] = a;
  return [`--${u ?? s}`, c];
}
function W0(i, a, u = 1) {
  const [s, c] = zT(i);
  if (!s) return;
  const h = window.getComputedStyle(a).getPropertyValue(s);
  if (h) {
    const f = h.trim();
    return f0(f) ? parseFloat(f) : f;
  }
  return Pc(c) ? W0(c, a, u + 1) : c;
}
function kp(i) {
  const a = [{}, {}];
  return (
    i == null ||
      i.values.forEach((u, s) => {
        ((a[0][s] = u.get()), (a[1][s] = u.getVelocity()));
      }),
    a
  );
}
function cf(i, a, u, s) {
  if (typeof a == "function") {
    const [c, h] = kp(s);
    a = a(u !== void 0 ? u : i.custom, c, h);
  }
  if ((typeof a == "string" && (a = i.variants && i.variants[a]), typeof a == "function")) {
    const [c, h] = kp(s);
    a = a(u !== void 0 ? u : i.custom, c, h);
  }
  return a;
}
function Ti(i, a, u) {
  const s = i.getProps();
  return cf(s, a, u !== void 0 ? u : s.custom, i);
}
const P0 = new Set(["width", "height", "top", "left", "right", "bottom", ...va]),
  Ec = (i) => Array.isArray(i);
function OT(i, a, u) {
  i.hasValue(a) ? i.getValue(a).set(u) : i.addValue(a, Ke(u));
}
function RT(i) {
  return Ec(i) ? i[i.length - 1] || 0 : i;
}
function wT(i, a) {
  const u = Ti(i, a);
  let { transitionEnd: s = {}, transition: c = {}, ...h } = u || {};
  h = { ...h, ...s };
  for (const f in h) {
    const m = RT(h[f]);
    OT(i, f, m);
  }
}
const ie = (i) => !!(i && i.getVelocity);
function VT(i) {
  return !!(ie(i) && i.add);
}
function Mc(i, a) {
  const u = i.getValue("willChange");
  if (VT(u)) return u.add(a);
  if (!u && Fn.WillChange) {
    const s = new Fn.WillChange("auto");
    (i.addValue("willChange", s), s.add(a));
  }
}
function ff(i) {
  return i.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`);
}
const NT = "framerAppearId",
  $0 = "data-" + ff(NT);
function I0(i) {
  return i.props[$0];
}
function _T({ protectedKeys: i, needsAnimating: a }, u) {
  const s = i.hasOwnProperty(u) && a[u] !== !0;
  return ((a[u] = !1), s);
}
function tg(i, a, { delay: u = 0, transitionOverride: s, type: c } = {}) {
  let { transition: h, transitionEnd: f, ...m } = a;
  const g = i.getDefaultTransition();
  h = h ? F0(h, g) : g;
  const p = h == null ? void 0 : h.reduceMotion,
    v = h == null ? void 0 : h.skipAnimations;
  s && (h = s);
  const b = [],
    T = c && i.animationState && i.animationState.getState()[c],
    D = h == null ? void 0 : h.path;
  D && D.animateVisualElement(i, m, h, u, b);
  for (const w in m) {
    const U = i.getValue(w, i.latestValues[w] ?? null),
      L = m[w];
    if (L === void 0 || (T && _T(T, w))) continue;
    const H = { delay: u, ...of(h || {}, w) };
    v && (H.skipAnimations = !0);
    const q = U.get();
    if (q !== void 0 && !U.isAnimating() && !Array.isArray(L) && L === q && !H.velocity) {
      yt.update(() => U.set(L));
      continue;
    }
    let Y = !1;
    if (window.MotionHandoffAnimation) {
      const ot = I0(i);
      if (ot) {
        const J = window.MotionHandoffAnimation(ot, w, yt);
        J !== null && ((H.startTime = J), (Y = !0));
      }
    }
    Mc(i, w);
    const Z = p ?? i.shouldReduceMotion;
    U.start(rf(w, U, L, Z && P0.has(w) ? { type: !1 } : H, i, Y));
    const tt = U.animation;
    tt && b.push(tt);
  }
  if (f) {
    const w = () =>
      yt.update(() => {
        f && wT(i, f);
      });
    b.length ? Promise.all(b).then(w) : w();
  }
  return b;
}
function Dc(i, a, u = {}) {
  var g;
  const s = Ti(
    i,
    a,
    u.type === "exit" ? ((g = i.presenceContext) == null ? void 0 : g.custom) : void 0,
  );
  let { transition: c = i.getDefaultTransition() || {} } = s || {};
  u.transitionOverride && (c = u.transitionOverride);
  const h = s ? () => Promise.all(tg(i, s, u)) : () => Promise.resolve(),
    f =
      i.variantChildren && i.variantChildren.size
        ? (p = 0) => {
            const { delayChildren: v = 0, staggerChildren: b, staggerDirection: T } = c;
            return jT(i, a, p, v, b, T, u);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [p, v] = m === "beforeChildren" ? [h, f] : [f, h];
    return p().then(() => v());
  } else return Promise.all([h(), f(u.delay)]);
}
function jT(i, a, u = 0, s = 0, c = 0, h = 1, f) {
  const m = [];
  for (const g of i.variantChildren)
    (g.notify("AnimationStart", a),
      m.push(
        Dc(g, a, {
          ...f,
          delay: u + (typeof s == "function" ? 0 : s) + J0(i.variantChildren, g, s, c, h),
        }).then(() => g.notify("AnimationComplete", a)),
      ));
  return Promise.all(m);
}
function BT(i, a, u = {}) {
  i.notify("AnimationStart", a);
  let s;
  if (Array.isArray(a)) {
    const c = a.map((h) => Dc(i, h, u));
    s = Promise.all(c);
  } else if (typeof a == "string") s = Dc(i, a, u);
  else {
    const c = typeof a == "function" ? Ti(i, a, u.custom) : a;
    s = Promise.all(tg(i, c, u));
  }
  return s.then(() => {
    i.notify("AnimationComplete", a);
  });
}
const UT = { test: (i) => i === "auto", parse: (i) => i },
  eg = (i) => (a) => a.test(i),
  ng = [ga, F, en, Tn, hS, fS, UT],
  Jp = (i) => ng.find(eg(i));
function LT(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || d0(i) : !0;
}
const HT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function YT(i) {
  const [a, u] = i.slice(0, -1).split("(");
  if (a === "drop-shadow") return i;
  const [s] = u.match($c) || [];
  if (!s) return i;
  const c = u.replace(s, "");
  let h = HT.has(a) ? 1 : 0;
  return (s !== u && (h *= 100), a + "(" + h + c + ")");
}
const qT = /\b([a-z-]*)\(.*?\)/gu,
  Cc = {
    ...ke,
    getAnimatableNone: (i) => {
      const a = i.match(qT);
      return a ? a.map(YT).join(" ") : i;
    },
  },
  zc = {
    ...ke,
    getAnimatableNone: (i) => {
      const a = ke.parse(i);
      return ke.createTransformer(i)(
        a.map((s) => (typeof s == "number" ? 0 : typeof s == "object" ? { ...s, alpha: 1 } : s)),
      );
    },
  },
  Fp = { ...ga, transform: Math.round },
  GT = {
    rotate: Tn,
    pathRotation: Tn,
    rotateX: Tn,
    rotateY: Tn,
    rotateZ: Tn,
    scale: Ws,
    scaleX: Ws,
    scaleY: Ws,
    scaleZ: Ws,
    skew: Tn,
    skewX: Tn,
    skewY: Tn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: El,
    originX: jp,
    originY: jp,
    originZ: F,
  },
  hu = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    fontSize: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...GT,
    zIndex: Fp,
    fillOpacity: El,
    strokeOpacity: El,
    numOctaves: Fp,
  },
  XT = {
    ...hu,
    color: Kt,
    backgroundColor: Kt,
    outlineColor: Kt,
    fill: Kt,
    stroke: Kt,
    borderColor: Kt,
    borderTopColor: Kt,
    borderRightColor: Kt,
    borderBottomColor: Kt,
    borderLeftColor: Kt,
    filter: Cc,
    WebkitFilter: Cc,
    mask: zc,
    WebkitMask: zc,
  },
  ig = (i) => XT[i],
  ZT = new Set([Cc, zc]);
function ag(i, a) {
  let u = ig(i);
  return (ZT.has(u) || (u = ke), u.getAnimatableNone ? u.getAnimatableNone(a) : void 0);
}
const QT = new Set(["auto", "none", "0"]);
function KT(i, a, u) {
  let s = 0,
    c;
  for (; s < i.length && !c;) {
    const h = i[s];
    (typeof h == "string" && !QT.has(h) && pa(h).values.length && (c = i[s]), s++);
  }
  if (c && u) for (const h of a) i[h] = ag(u, c);
}
class kT extends lf {
  constructor(a, u, s, c, h) {
    super(a, u, s, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: u, name: s } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let v = 0; v < a.length; v++) {
      let b = a[v];
      if (typeof b == "string" && ((b = b.trim()), Pc(b))) {
        const T = W0(b, u.current);
        (T !== void 0 && (a[v] = T), v === a.length - 1 && (this.finalKeyframe = b));
      }
    }
    if ((this.resolveNoneKeyframes(), !P0.has(s) || a.length !== 2)) return;
    const [c, h] = a,
      f = Jp(c),
      m = Jp(h),
      g = _p(c),
      p = _p(h);
    if (g !== p && Jn[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (Xp(f) && Xp(m))
        for (let v = 0; v < a.length; v++) {
          const b = a[v];
          typeof b == "string" && (a[v] = parseFloat(b));
        }
      else Jn[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: u } = this,
      s = [];
    for (let c = 0; c < a.length; c++) (a[c] === null || LT(a[c])) && s.push(c);
    s.length && KT(a, s, u);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: u, name: s } = this;
    if (!a || !a.current) return;
    (s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Jn[s](a.measureViewportBox(), window.getComputedStyle(a.current))),
      (u[0] = this.measuredOrigin));
    const c = u[u.length - 1];
    c !== void 0 && a.getValue(s, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: a, name: u, unresolvedKeyframes: s } = this;
    if (!a || !a.current) return;
    const c = a.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const h = s.length - 1,
      f = s[h];
    ((s[h] = Jn[u](a.measureViewportBox(), window.getComputedStyle(a.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([g, p]) => {
          a.getValue(g).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
function lg(i, a, u) {
  if (i == null) return [];
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((s) => s != null);
}
const Oc = (i, a) => (a && typeof i == "number" ? a.transform(i) : i);
function sg(i) {
  return h0(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: ya, cancel: ug } = M0(queueMicrotask, !1),
  Qe = { x: !1, y: !1 };
function og() {
  return Qe.x || Qe.y;
}
function JT(i) {
  return i === "x" || i === "y"
    ? Qe[i]
      ? null
      : ((Qe[i] = !0),
        () => {
          Qe[i] = !1;
        })
    : Qe.x || Qe.y
      ? null
      : ((Qe.x = Qe.y = !0),
        () => {
          Qe.x = Qe.y = !1;
        });
}
function rg(i, a) {
  const u = lg(i),
    s = new AbortController(),
    c = { passive: !0, ...a, signal: s.signal };
  return [u, c, () => s.abort()];
}
function FT(i) {
  return !(i.pointerType === "touch" || og());
}
function WT(i, a, u = {}) {
  const [s, c, h] = rg(i, u);
  return (
    s.forEach((f) => {
      let m = !1,
        g = !1,
        p;
      const v = () => {
          f.removeEventListener("pointerleave", w);
        },
        b = (L) => {
          (p && (p(L), (p = void 0)), v());
        },
        T = (L) => {
          ((m = !1),
            window.removeEventListener("pointerup", T),
            window.removeEventListener("pointercancel", T),
            g && ((g = !1), b(L)));
        },
        D = () => {
          ((m = !0),
            window.addEventListener("pointerup", T, c),
            window.addEventListener("pointercancel", T, c));
        },
        w = (L) => {
          if (L.pointerType !== "touch") {
            if (m) {
              g = !0;
              return;
            }
            b(L);
          }
        },
        U = (L) => {
          if (!FT(L)) return;
          g = !1;
          const H = a(f, L);
          typeof H == "function" && ((p = H), f.addEventListener("pointerleave", w, c));
        };
      (f.addEventListener("pointerenter", U, c), f.addEventListener("pointerdown", D, c));
    }),
    h
  );
}
const cg = (i, a) => (a ? (i === a ? !0 : cg(i, a.parentElement)) : !1),
  hf = (i) =>
    i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1,
  PT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function $T(i) {
  return PT.has(i.tagName) || i.isContentEditable === !0;
}
const IT = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function tx(i) {
  return IT.has(i.tagName) || i.isContentEditable === !0;
}
const eu = new WeakSet();
function Wp(i) {
  return (a) => {
    a.key === "Enter" && i(a);
  };
}
function tc(i, a) {
  i.dispatchEvent(new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 }));
}
const ex = (i, a) => {
  const u = i.currentTarget;
  if (!u) return;
  const s = Wp(() => {
    if (eu.has(u)) return;
    tc(u, "down");
    const c = Wp(() => {
        tc(u, "up");
      }),
      h = () => tc(u, "cancel");
    (u.addEventListener("keyup", c, a), u.addEventListener("blur", h, a));
  });
  (u.addEventListener("keydown", s, a),
    u.addEventListener("blur", () => u.removeEventListener("keydown", s), a));
};
function Pp(i) {
  return hf(i) && !og();
}
const $p = new WeakSet();
function nx(i, a, u = {}) {
  const [s, c, h] = rg(i, u),
    f = (m) => {
      const g = m.currentTarget;
      if (!Pp(m) || $p.has(m)) return;
      (eu.add(g), u.stopPropagation && $p.add(m));
      const p = a(g, m),
        v = (D, w) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", T),
            eu.has(g) && eu.delete(g),
            Pp(D) && typeof p == "function" && p(D, { success: w }));
        },
        b = (D) => {
          v(D, g === window || g === document || u.useGlobalTarget || cg(g, D.target));
        },
        T = (D) => {
          v(D, !1);
        };
      (window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", T, c));
    };
  return (
    s.forEach((m) => {
      ((u.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        sg(m) &&
          (m.addEventListener("focus", (p) => ex(p, c)),
          !$T(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
    }),
    h
  );
}
function df(i) {
  return h0(i) && "ownerSVGElement" in i;
}
const nu = new WeakMap();
let kn;
const fg = (i, a, u) => (s, c) =>
    c && c[0] ? c[0][i + "Size"] : df(s) && "getBBox" in s ? s.getBBox()[a] : s[u],
  ix = fg("inline", "width", "offsetWidth"),
  ax = fg("block", "height", "offsetHeight");
function lx({ target: i, borderBoxSize: a }) {
  var u;
  (u = nu.get(i)) == null ||
    u.forEach((s) => {
      s(i, {
        get width() {
          return ix(i, a);
        },
        get height() {
          return ax(i, a);
        },
      });
    });
}
function sx(i) {
  i.forEach(lx);
}
function ux() {
  typeof ResizeObserver > "u" || (kn = new ResizeObserver(sx));
}
function ox(i, a) {
  kn || ux();
  const u = lg(i);
  return (
    u.forEach((s) => {
      let c = nu.get(s);
      (c || ((c = new Set()), nu.set(s, c)), c.add(a), kn == null || kn.observe(s));
    }),
    () => {
      u.forEach((s) => {
        const c = nu.get(s);
        (c == null || c.delete(a), (c != null && c.size) || kn == null || kn.unobserve(s));
      });
    }
  );
}
const iu = new Set();
let ra;
function rx() {
  ((ra = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    iu.forEach((a) => a(i));
  }),
    window.addEventListener("resize", ra));
}
function cx(i) {
  return (
    iu.add(i),
    ra || rx(),
    () => {
      (iu.delete(i),
        !iu.size &&
          typeof ra == "function" &&
          (window.removeEventListener("resize", ra), (ra = void 0)));
    }
  );
}
function Rc(i, a) {
  return typeof i == "function" ? cx(i) : ox(i, a);
}
function hg(i, a) {
  let u;
  const s = () => {
    const { currentTime: c } = a,
      f = (c === null ? 0 : c.value) / 100;
    (u !== f && i(f), (u = f));
  };
  return (yt.preUpdate(s, !0), () => Ye(s));
}
function fx(i) {
  return df(i) && i.tagName === "svg";
}
function hx(...i) {
  const a = !Array.isArray(i[0]),
    u = a ? 0 : -1,
    s = i[0 + u],
    c = i[1 + u],
    h = i[2 + u],
    f = i[3 + u],
    m = nf(c, h, f);
  return a ? m(s) : m;
}
const dx = [...ng, Kt, ke],
  mx = (i) => dx.find(eg(i)),
  Ip = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ca = () => ({ x: Ip(), y: Ip() }),
  ty = () => ({ min: 0, max: 0 }),
  Jt = () => ({ x: ty(), y: ty() }),
  px = new WeakMap();
function Su(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Ml(i) {
  return typeof i == "string" || Array.isArray(i);
}
const mf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  pf = ["initial", ...mf];
function Tu(i) {
  return Su(i.animate) || pf.some((a) => Ml(i[a]));
}
function dg(i) {
  return !!(Tu(i) || i.variants);
}
function yx(i, a, u) {
  for (const s in a) {
    const c = a[s],
      h = u[s];
    if (ie(c)) i.addValue(s, c);
    else if (ie(h)) i.addValue(s, Ke(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(s)) {
        const f = i.getValue(s);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(s);
        i.addValue(s, Ke(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const s in u) a[s] === void 0 && i.removeValue(s);
  return a;
}
const wc = { current: null },
  mg = { current: !1 },
  gx = typeof window < "u";
function vx() {
  if (((mg.current = !0), !!gx))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        a = () => (wc.current = i.matches);
      (i.addEventListener("change", a), a());
    } else wc.current = !1;
}
const ey = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let du = {};
function pg(i) {
  du = i;
}
function bx() {
  return du;
}
class Sx {
  scrapeMotionValuesFromProps(a, u, s) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: u,
      presenceContext: s,
      reducedMotionConfig: c,
      skipAnimations: h,
      blockInitialAnimation: f,
      visualState: m,
    },
    g = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = lf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
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
        const D = oe.now();
        this.renderScheduledAt < D &&
          ((this.renderScheduledAt = D), yt.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: v } = m;
    ((this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = u.initial ? { ...p } : {}),
      (this.renderState = v),
      (this.parent = a),
      (this.props = u),
      (this.presenceContext = s),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = h),
      (this.options = g),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Tu(u)),
      (this.isVariantNode = dg(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current)));
    const { willChange: b, ...T } = this.scrapeMotionValuesFromProps(u, {}, this);
    for (const D in T) {
      const w = T[D];
      p[D] !== void 0 && ie(w) && w.set(p[D]);
    }
  }
  mount(a) {
    var u, s;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((u = this.values.get(c)) == null || u.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = a),
      px.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, h) => this.bindToMotionValue(h, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (mg.current || vx(), (this.shouldReduceMotion = wc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (s = this.parent) == null || s.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var a;
    (this.projection && this.projection.unmount(),
      Ye(this.notifyUpdate),
      Ye(this.render),
      this.valueSubscriptions.forEach((u) => u()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (a = this.parent) == null || a.removeChild(this));
    for (const u in this.events) this.events[u].clear();
    for (const u in this.features) {
      const s = this.features[u];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(a) {
    (this.children.add(a),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(a));
  }
  removeChild(a) {
    (this.children.delete(a), this.enteringChildren && this.enteringChildren.delete(a));
  }
  bindToMotionValue(a, u) {
    if (
      (this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(),
      u.accelerate && k0.has(a) && this.current instanceof HTMLElement)
    ) {
      const { factory: f, keyframes: m, times: g, ease: p, duration: v } = u.accelerate,
        b = new Q0({
          element: this.current,
          name: a,
          keyframes: m,
          times: g,
          ease: p,
          duration: ze(v),
        }),
        T = f(b);
      this.valueSubscriptions.set(a, () => {
        (T(), b.cancel());
      });
      return;
    }
    const s = ba.has(a);
    s && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (f) => {
      ((this.latestValues[a] = f),
        this.props.onUpdate && yt.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let h;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, a, u)),
      this.valueSubscriptions.set(a, () => {
        (c(), h && h());
      }));
  }
  sortNodePosition(a) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== a.type
      ? 0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = "animation";
    for (a in du) {
      const u = du[a];
      if (!u) continue;
      const { isEnabled: s, Feature: c } = u;
      if (
        (!this.features[a] && c && s(this.props) && (this.features[a] = new c(this)),
        this.features[a])
      ) {
        const h = this.features[a];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Jt();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, u) {
    this.latestValues[a] = u;
  }
  update(a, u) {
    ((a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u));
    for (let s = 0; s < ey.length; s++) {
      const c = ey[s];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        f = a[h];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = yx(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
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
  addVariantChild(a) {
    const u = this.getClosestVariantNode();
    if (u)
      return (u.variantChildren && u.variantChildren.add(a), () => u.variantChildren.delete(a));
  }
  addValue(a, u) {
    const s = this.values.get(a);
    u !== s &&
      (s && this.removeValue(a),
      this.bindToMotionValue(a, u),
      this.values.set(a, u),
      (this.latestValues[a] = u.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const u = this.valueSubscriptions.get(a);
    (u && (u(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState));
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, u) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let s = this.values.get(a);
    return (
      s === void 0 &&
        u !== void 0 &&
        ((s = Ke(u === null ? void 0 : u, { owner: this })), this.addValue(a, s)),
      s
    );
  }
  readValue(a, u) {
    let s =
      this.latestValues[a] !== void 0 || !this.current
        ? this.latestValues[a]
        : (this.getBaseTargetFromProps(this.props, a) ??
          this.readValueFromInstance(this.current, a, this.options));
    return (
      s != null &&
        (typeof s == "string" && (f0(s) || d0(s))
          ? (s = parseFloat(s))
          : !mx(s) && ke.test(u) && (s = ag(a, u)),
        this.setBaseTarget(a, ie(s) ? s.get() : s)),
      ie(s) ? s.get() : s
    );
  }
  setBaseTarget(a, u) {
    this.baseTarget[a] = u;
  }
  getBaseTarget(a) {
    var h;
    const { initial: u } = this.props;
    let s;
    if (typeof u == "string" || typeof u == "object") {
      const f = cf(this.props, u, (h = this.presenceContext) == null ? void 0 : h.custom);
      f && (s = f[a]);
    }
    if (u && s !== void 0) return s;
    const c = this.getBaseTargetFromProps(this.props, a);
    return c !== void 0 && !ie(c)
      ? c
      : this.initialValues[a] !== void 0 && s === void 0
        ? void 0
        : this.baseTarget[a];
  }
  on(a, u) {
    return (this.events[a] || (this.events[a] = new kc()), this.events[a].add(u));
  }
  notify(a, ...u) {
    this.events[a] && this.events[a].notify(...u);
  }
  scheduleRenderMicrotask() {
    ya.render(this.render);
  }
}
class yg extends Sx {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = kT));
  }
  sortInstanceNodePosition(a, u) {
    return a.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, u) {
    const s = a.style;
    return s ? s[u] : void 0;
  }
  removeValueFromRenderState(a, { vars: u, style: s }) {
    (delete u[a], delete s[a]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    ie(a) &&
      (this.childSubscription = a.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
class Wn {
  constructor(a) {
    ((this.isMounted = !1), (this.node = a));
  }
  update() {}
}
function gg({ top: i, left: a, right: u, bottom: s }) {
  return { x: { min: a, max: u }, y: { min: i, max: s } };
}
function Tx({ x: i, y: a }) {
  return { top: a.min, right: i.max, bottom: a.max, left: i.min };
}
function xx(i, a) {
  if (!a) return i;
  const u = a({ x: i.left, y: i.top }),
    s = a({ x: i.right, y: i.bottom });
  return { top: u.y, left: u.x, bottom: s.y, right: s.x };
}
function ec(i) {
  return i === void 0 || i === 1;
}
function Vc({ scale: i, scaleX: a, scaleY: u }) {
  return !ec(i) || !ec(a) || !ec(u);
}
function gi(i) {
  return Vc(i) || vg(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function vg(i) {
  return ny(i.x) || ny(i.y);
}
function ny(i) {
  return i && i !== "0%";
}
function mu(i, a, u) {
  const s = i - u,
    c = a * s;
  return u + c;
}
function iy(i, a, u, s, c) {
  return (c !== void 0 && (i = mu(i, c, s)), mu(i, u, s) + a);
}
function Nc(i, a = 0, u = 1, s, c) {
  ((i.min = iy(i.min, a, u, s, c)), (i.max = iy(i.max, a, u, s, c)));
}
function bg(i, { x: a, y: u }) {
  (Nc(i.x, a.translate, a.scale, a.originPoint), Nc(i.y, u.translate, u.scale, u.originPoint));
}
const ay = 0.999999999999,
  ly = 1.0000000000001;
function Ax(i, a, u, s = !1) {
  var m;
  const c = u.length;
  if (!c) return;
  a.x = a.y = 1;
  let h, f;
  for (let g = 0; g < c; g++) {
    ((h = u[g]), (f = h.projectionDelta));
    const { visualElement: p } = h.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (s &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        (tn(i.x, -h.scroll.offset.x), tn(i.y, -h.scroll.offset.y)),
      f && ((a.x *= f.x.scale), (a.y *= f.y.scale), bg(i, f)),
      s &&
        gi(h.latestValues) &&
        au(i, h.latestValues, (m = h.layout) == null ? void 0 : m.layoutBox));
  }
  (a.x < ly && a.x > ay && (a.x = 1), a.y < ly && a.y > ay && (a.y = 1));
}
function tn(i, a) {
  ((i.min += a), (i.max += a));
}
function sy(i, a, u, s, c = 0.5) {
  const h = Rt(i.min, i.max, c);
  Nc(i, a, u, h, s);
}
function uy(i, a) {
  return typeof i == "string" ? (parseFloat(i) / 100) * (a.max - a.min) : i;
}
function au(i, a, u) {
  const s = u ?? i;
  (sy(i.x, uy(a.x, s.x), a.scaleX, a.scale, a.originX),
    sy(i.y, uy(a.y, s.y), a.scaleY, a.scale, a.originY));
}
function Sg(i, a) {
  return gg(xx(i.getBoundingClientRect(), a));
}
function Ex(i, a, u) {
  const s = Sg(i, u),
    { scroll: c } = a;
  return (c && (tn(s.x, c.offset.x), tn(s.y, c.offset.y)), s);
}
const Mx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Dx = va.length;
function Cx(i, a, u) {
  let s = "",
    c = !0;
  for (let f = 0; f < Dx; f++) {
    const m = va[f],
      g = i[m];
    if (g === void 0) continue;
    let p = !0;
    if (typeof g == "number") p = g === (m.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(g);
      p = m.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!p || u) {
      const v = Oc(g, hu[m]);
      if (!p) {
        c = !1;
        const b = Mx[m] || m;
        s += `${b}(${v}) `;
      }
      u && (a[m] = v);
    }
  }
  const h = i.pathRotation;
  return (
    h && ((c = !1), (s += `rotate(${Oc(h, hu.pathRotation)}) `)),
    (s = s.trim()),
    u ? (s = u(a, c ? "" : s)) : c && (s = "none"),
    s
  );
}
function yf(i, a, u) {
  const { style: s, vars: c, transformOrigin: h } = i;
  let f = !1,
    m = !1;
  for (const g in a) {
    const p = a[g];
    if (ba.has(g)) {
      f = !0;
      continue;
    } else if (C0(g)) {
      c[g] = p;
      continue;
    } else {
      const v = Oc(p, hu[g]);
      g.startsWith("origin") ? ((m = !0), (h[g] = v)) : (s[g] = v);
    }
  }
  if (
    (a.transform ||
      (f || u ? (s.transform = Cx(a, i.transform, u)) : s.transform && (s.transform = "none")),
    m)
  ) {
    const { originX: g = "50%", originY: p = "50%", originZ: v = 0 } = h;
    s.transformOrigin = `${g} ${p} ${v}`;
  }
}
function Tg(i, { style: a, vars: u }, s, c) {
  const h = i.style;
  let f;
  for (f in a) h[f] = a[f];
  c == null || c.applyProjectionStyles(h, s);
  for (f in u) h.setProperty(f, u[f]);
}
function oy(i, a) {
  return a.max === a.min ? 0 : (i / (a.max - a.min)) * 100;
}
const pl = {
    correct: (i, a) => {
      if (!a.target) return i;
      if (typeof i == "string")
        if (F.test(i)) i = parseFloat(i);
        else return i;
      const u = oy(i, a.target.x),
        s = oy(i, a.target.y);
      return `${u}% ${s}%`;
    },
  },
  zx = {
    correct: (i, { treeScale: a, projectionDelta: u }) => {
      const s = i,
        c = ke.parse(i);
      if (c.length > 5) return s;
      const h = ke.createTransformer(i),
        f = typeof c[0] != "number" ? 1 : 0,
        m = u.x.scale * a.x,
        g = u.y.scale * a.y;
      ((c[0 + f] /= m), (c[1 + f] /= g));
      const p = Rt(m, g, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= p),
        typeof c[3 + f] == "number" && (c[3 + f] /= p),
        h(c)
      );
    },
  },
  _c = {
    borderRadius: {
      ...pl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: pl,
    borderTopRightRadius: pl,
    borderBottomLeftRadius: pl,
    borderBottomRightRadius: pl,
    boxShadow: zx,
  };
function xg(i, { layout: a, layoutId: u }) {
  return (
    ba.has(i) || i.startsWith("origin") || ((a || u !== void 0) && (!!_c[i] || i === "opacity"))
  );
}
function gf(i, a, u) {
  var f;
  const s = i.style,
    c = a == null ? void 0 : a.style,
    h = {};
  if (!s) return h;
  for (const m in s)
    (ie(s[m]) ||
      (c && ie(c[m])) ||
      xg(m, i) ||
      ((f = u == null ? void 0 : u.getValue(m)) == null ? void 0 : f.liveStyle) !== void 0) &&
      (h[m] = s[m]);
  return h;
}
function Ox(i) {
  return window.getComputedStyle(i);
}
class Rx extends yg {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Tg));
  }
  readValueFromInstance(a, u) {
    var s;
    if (ba.has(u)) return (s = this.projection) != null && s.isProjecting ? vc(u) : WS(a, u);
    {
      const c = Ox(a),
        h = (C0(u) ? c.getPropertyValue(u) : c[u]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: u }) {
    return Sg(a, u);
  }
  build(a, u, s) {
    yf(a, u, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, u, s) {
    return gf(a, u, s);
  }
}
const wx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Vx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Nx(i, a, u = 1, s = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? wx : Vx;
  ((i[h.offset] = `${-s}`), (i[h.array] = `${a} ${u}`));
}
const _x = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Ag(
  i,
  { attrX: a, attrY: u, attrScale: s, pathLength: c, pathSpacing: h = 1, pathOffset: f = 0, ...m },
  g,
  p,
  v,
) {
  if ((yf(i, m, p), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  ((i.attrs = i.style), (i.style = {}));
  const { attrs: b, style: T } = i;
  (b.transform && ((T.transform = b.transform), delete b.transform),
    (T.transform || b.transformOrigin) &&
      ((T.transformOrigin = b.transformOrigin ?? "50% 50%"), delete b.transformOrigin),
    T.transform &&
      ((T.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete b.transformBox));
  for (const D of _x) b[D] !== void 0 && ((T[D] = b[D]), delete b[D]);
  (a !== void 0 && (b.x = a),
    u !== void 0 && (b.y = u),
    s !== void 0 && (b.scale = s),
    c !== void 0 && Nx(b, c, h, f, !1));
}
const Eg = new Set([
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
  ]),
  Mg = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function jx(i, a, u, s) {
  Tg(i, a, void 0, s);
  for (const c in a.attrs) i.setAttribute(Eg.has(c) ? c : ff(c), a.attrs[c]);
}
function Dg(i, a, u) {
  const s = gf(i, a, u);
  for (const c in i)
    if (ie(i[c]) || ie(a[c])) {
      const h = va.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      s[h] = i[c];
    }
  return s;
}
class Bx extends yg {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Jt));
  }
  getBaseTargetFromProps(a, u) {
    return a[u];
  }
  readValueFromInstance(a, u) {
    if (ba.has(u)) {
      const s = ig(u);
      return (s && s.default) || 0;
    }
    return ((u = Eg.has(u) ? u : ff(u)), a.getAttribute(u));
  }
  scrapeMotionValuesFromProps(a, u, s) {
    return Dg(a, u, s);
  }
  build(a, u, s) {
    Ag(a, u, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(a, u, s, c) {
    jx(a, u, s, c);
  }
  mount(a) {
    ((this.isSVGTag = Mg(a.tagName)), super.mount(a));
  }
}
const Ux = pf.length;
function Cg(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const u = i.parent ? Cg(i.parent) || {} : {};
    return (i.props.initial !== void 0 && (u.initial = i.props.initial), u);
  }
  const a = {};
  for (let u = 0; u < Ux; u++) {
    const s = pf[u],
      c = i.props[s];
    (Ml(c) || c === !1) && (a[s] = c);
  }
  return a;
}
function zg(i, a) {
  if (!Array.isArray(a)) return !1;
  const u = a.length;
  if (u !== i.length) return !1;
  for (let s = 0; s < u; s++) if (a[s] !== i[s]) return !1;
  return !0;
}
const Lx = [...mf].reverse(),
  Hx = mf.length;
function Yx(i) {
  return (a) => Promise.all(a.map(({ animation: u, options: s }) => BT(i, u, s)));
}
function qx(i) {
  let a = Yx(i),
    u = ry(),
    s = !0,
    c = !1;
  const h = (p) => (v, b) => {
    var D;
    const T = Ti(
      i,
      b,
      p === "exit" ? ((D = i.presenceContext) == null ? void 0 : D.custom) : void 0,
    );
    if (T) {
      const { transition: w, transitionEnd: U, ...L } = T;
      v = { ...v, ...L, ...U };
    }
    return v;
  };
  function f(p) {
    a = p(i);
  }
  function m(p) {
    const { props: v } = i,
      b = Cg(i.parent) || {},
      T = [],
      D = new Set();
    let w = {},
      U = 1 / 0;
    for (let H = 0; H < Hx; H++) {
      const q = Lx[H],
        Y = u[q],
        Z = v[q] !== void 0 ? v[q] : b[q],
        tt = Ml(Z),
        ot = q === p ? Y.isActive : null;
      ot === !1 && (U = H);
      let J = Z === b[q] && Z !== v[q] && tt;
      if (
        (J && (s || c) && i.manuallyAnimateOnMount && (J = !1),
        (Y.protectedKeys = { ...w }),
        (!Y.isActive && ot === null) || (!Z && !Y.prevProp) || Su(Z) || typeof Z == "boolean")
      )
        continue;
      if (q === "exit" && Y.isActive && ot !== !0) {
        Y.prevResolvedValues && (w = { ...w, ...Y.prevResolvedValues });
        continue;
      }
      const $ = Gx(Y.prevProp, Z);
      let Mt = $ || (q === p && Y.isActive && !J && tt) || (H > U && tt),
        nt = !1;
      const bt = Array.isArray(Z) ? Z : [Z];
      let xt = bt.reduce(h(q), {});
      ot === !1 && (xt = {});
      const { prevResolvedValues: le = {} } = Y,
        qt = { ...le, ...xt },
        Ut = (Q) => {
          ((Mt = !0), D.has(Q) && ((nt = !0), D.delete(Q)), (Y.needsAnimating[Q] = !0));
          const st = i.getValue(Q);
          st && (st.liveStyle = !1);
        };
      for (const Q in qt) {
        const st = xt[Q],
          mt = le[Q];
        if (w.hasOwnProperty(Q)) continue;
        let A = !1;
        (Ec(st) && Ec(mt) ? (A = !zg(st, mt) || $) : (A = st !== mt),
          A
            ? st != null
              ? Ut(Q)
              : D.add(Q)
            : st !== void 0 && D.has(Q)
              ? Ut(Q)
              : (Y.protectedKeys[Q] = !0));
      }
      ((Y.prevProp = Z),
        (Y.prevResolvedValues = xt),
        Y.isActive && (w = { ...w, ...xt }),
        (s || c) && i.blockInitialAnimation && (Mt = !1));
      const R = J && $;
      Mt &&
        (!R || nt) &&
        T.push(
          ...bt.map((Q) => {
            const st = { type: q };
            if (typeof Q == "string" && (s || c) && !R && i.manuallyAnimateOnMount && i.parent) {
              const { parent: mt } = i,
                A = Ti(mt, Q);
              if (mt.enteringChildren && A) {
                const { delayChildren: B } = A.transition || {};
                st.delay = J0(mt.enteringChildren, i, B);
              }
            }
            return { animation: Q, options: st };
          }),
        );
    }
    if (D.size) {
      const H = {};
      if (typeof v.initial != "boolean") {
        const q = Ti(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        q && q.transition && (H.transition = q.transition);
      }
      (D.forEach((q) => {
        const Y = i.getBaseTarget(q),
          Z = i.getValue(q);
        (Z && (Z.liveStyle = !0), (H[q] = Y ?? null));
      }),
        T.push({ animation: H }));
    }
    let L = !!T.length;
    return (
      s && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (L = !1),
      (s = !1),
      (c = !1),
      L ? a(T) : Promise.resolve()
    );
  }
  function g(p, v) {
    var T;
    if (u[p].isActive === v) return Promise.resolve();
    ((T = i.variantChildren) == null ||
      T.forEach((D) => {
        var w;
        return (w = D.animationState) == null ? void 0 : w.setActive(p, v);
      }),
      (u[p].isActive = v));
    const b = m(p);
    for (const D in u) u[D].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: m,
    setActive: g,
    setAnimateFunction: f,
    getState: () => u,
    reset: () => {
      ((u = ry()), (c = !0));
    },
  };
}
function Gx(i, a) {
  return typeof a == "string" ? a !== i : Array.isArray(a) ? !zg(a, i) : !1;
}
function yi(i = !1) {
  return { isActive: i, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function ry() {
  return {
    animate: yi(!0),
    whileInView: yi(),
    whileHover: yi(),
    whileTap: yi(),
    whileDrag: yi(),
    whileFocus: yi(),
    exit: yi(),
  };
}
function jc(i, a) {
  ((i.min = a.min), (i.max = a.max));
}
function Ze(i, a) {
  (jc(i.x, a.x), jc(i.y, a.y));
}
function cy(i, a) {
  ((i.translate = a.translate),
    (i.scale = a.scale),
    (i.originPoint = a.originPoint),
    (i.origin = a.origin));
}
const Og = 1e-4,
  Xx = 1 - Og,
  Zx = 1 + Og,
  Rg = 0.01,
  Qx = 0 - Rg,
  Kx = 0 + Rg;
function re(i) {
  return i.max - i.min;
}
function kx(i, a, u) {
  return Math.abs(i - a) <= u;
}
function fy(i, a, u, s = 0.5) {
  ((i.origin = s),
    (i.originPoint = Rt(a.min, a.max, i.origin)),
    (i.scale = re(u) / re(a)),
    (i.translate = Rt(u.min, u.max, i.origin) - i.originPoint),
    ((i.scale >= Xx && i.scale <= Zx) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= Qx && i.translate <= Kx) || isNaN(i.translate)) && (i.translate = 0));
}
function Tl(i, a, u, s) {
  (fy(i.x, a.x, u.x, s ? s.originX : void 0), fy(i.y, a.y, u.y, s ? s.originY : void 0));
}
function hy(i, a, u, s = 0) {
  const c = s ? Rt(u.min, u.max, s) : u.min;
  ((i.min = c + a.min), (i.max = i.min + re(a)));
}
function Jx(i, a, u, s) {
  (hy(i.x, a.x, u.x, s == null ? void 0 : s.x), hy(i.y, a.y, u.y, s == null ? void 0 : s.y));
}
function dy(i, a, u, s = 0) {
  const c = s ? Rt(u.min, u.max, s) : u.min;
  ((i.min = a.min - c), (i.max = i.min + re(a)));
}
function pu(i, a, u, s) {
  (dy(i.x, a.x, u.x, s == null ? void 0 : s.x), dy(i.y, a.y, u.y, s == null ? void 0 : s.y));
}
function my(i, a, u, s, c) {
  return ((i -= a), (i = mu(i, 1 / u, s)), c !== void 0 && (i = mu(i, 1 / c, s)), i);
}
function Fx(i, a = 0, u = 1, s = 0.5, c, h = i, f = i) {
  if (
    (en.test(a) && ((a = parseFloat(a)), (a = Rt(f.min, f.max, a / 100) - f.min)),
    typeof a != "number")
  )
    return;
  let m = Rt(h.min, h.max, s);
  (i === h && (m -= a), (i.min = my(i.min, a, u, m, c)), (i.max = my(i.max, a, u, m, c)));
}
function py(i, a, [u, s, c], h, f) {
  Fx(i, a[u], a[s], a[c], a.scale, h, f);
}
const Wx = ["x", "scaleX", "originX"],
  Px = ["y", "scaleY", "originY"];
function yy(i, a, u, s) {
  (py(i.x, a, Wx, u ? u.x : void 0, s ? s.x : void 0),
    py(i.y, a, Px, u ? u.y : void 0, s ? s.y : void 0));
}
function gy(i) {
  return i.translate === 0 && i.scale === 1;
}
function wg(i) {
  return gy(i.x) && gy(i.y);
}
function vy(i, a) {
  return i.min === a.min && i.max === a.max;
}
function $x(i, a) {
  return vy(i.x, a.x) && vy(i.y, a.y);
}
function by(i, a) {
  return Math.round(i.min) === Math.round(a.min) && Math.round(i.max) === Math.round(a.max);
}
function Vg(i, a) {
  return by(i.x, a.x) && by(i.y, a.y);
}
function Sy(i) {
  return re(i.x) / re(i.y);
}
function Ty(i, a) {
  return i.translate === a.translate && i.scale === a.scale && i.originPoint === a.originPoint;
}
function Ie(i) {
  return [i("x"), i("y")];
}
function Ix(i, a, u) {
  let s = "";
  const c = i.x.translate / a.x,
    h = i.y.translate / a.y,
    f = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || h || f) && (s = `translate3d(${c}px, ${h}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `),
    u)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      pathRotation: b,
      rotateX: T,
      rotateY: D,
      skewX: w,
      skewY: U,
    } = u;
    (p && (s = `perspective(${p}px) ${s}`),
      v && (s += `rotate(${v}deg) `),
      b && (s += `rotate(${b}deg) `),
      T && (s += `rotateX(${T}deg) `),
      D && (s += `rotateY(${D}deg) `),
      w && (s += `skewX(${w}deg) `),
      U && (s += `skewY(${U}deg) `));
  }
  const m = i.x.scale * a.x,
    g = i.y.scale * a.y;
  return ((m !== 1 || g !== 1) && (s += `scale(${m}, ${g})`), s || "none");
}
const Ng = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  t2 = Ng.length,
  xy = (i) => (typeof i == "string" ? parseFloat(i) : i),
  Ay = (i) => typeof i == "number" || F.test(i);
function e2(i, a, u, s, c, h) {
  c
    ? ((i.opacity = Rt(0, u.opacity ?? 1, n2(s))), (i.opacityExit = Rt(a.opacity ?? 1, 0, i2(s))))
    : h && (i.opacity = Rt(a.opacity ?? 1, u.opacity ?? 1, s));
  for (let f = 0; f < t2; f++) {
    const m = Ng[f];
    let g = Ey(a, m),
      p = Ey(u, m);
    if (g === void 0 && p === void 0) continue;
    (g || (g = 0),
      p || (p = 0),
      g === 0 || p === 0 || Ay(g) === Ay(p)
        ? ((i[m] = Math.max(Rt(xy(g), xy(p), s), 0)), (en.test(p) || en.test(g)) && (i[m] += "%"))
        : (i[m] = p));
  }
  (a.rotate || u.rotate) && (i.rotate = Rt(a.rotate || 0, u.rotate || 0, s));
}
function Ey(i, a) {
  return i[a] !== void 0 ? i[a] : i.borderRadius;
}
const n2 = _g(0, 0.5, T0),
  i2 = _g(0.5, 0.95, ge);
function _g(i, a, u) {
  return (s) => (s < i ? 0 : s > a ? 1 : u(ma(i, a, s)));
}
function a2(i, a, u) {
  const s = ie(i) ? i : Ke(i);
  return (s.start(rf("", s, a, u)), s.animation);
}
function Dl(i, a, u, s = { passive: !0 }) {
  return (i.addEventListener(a, u, s), () => i.removeEventListener(a, u));
}
const l2 = (i, a) => i.depth - a.depth;
class s2 {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(a) {
    (Qc(this.children, a), (this.isDirty = !0));
  }
  remove(a) {
    (uu(this.children, a), (this.isDirty = !0));
  }
  forEach(a) {
    (this.isDirty && this.children.sort(l2), (this.isDirty = !1), this.children.forEach(a));
  }
}
function u2(i, a) {
  const u = oe.now(),
    s = ({ timestamp: c }) => {
      const h = c - u;
      h >= a && (Ye(s), i(h - a));
    };
  return (yt.setup(s, !0), () => Ye(s));
}
function lu(i) {
  return ie(i) ? i.get() : i;
}
class o2 {
  constructor() {
    this.members = [];
  }
  add(a) {
    Qc(this.members, a);
    for (let u = this.members.length - 1; u >= 0; u--) {
      const s = this.members[u];
      if (s === a || s === this.lead || s === this.prevLead) continue;
      const c = s.instance;
      (!c || c.isConnected === !1) && !s.snapshot && (uu(this.members, s), s.unmount());
    }
    a.scheduleRender();
  }
  remove(a) {
    if ((uu(this.members, a), a === this.prevLead && (this.prevLead = void 0), a === this.lead)) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(a) {
    var u;
    for (let s = this.members.indexOf(a) - 1; s >= 0; s--) {
      const c = this.members[s];
      if (c.isPresent !== !1 && ((u = c.instance) == null ? void 0 : u.isConnected) !== !1)
        return (this.promote(c), !0);
    }
    return !1;
  }
  promote(a, u) {
    var c;
    const s = this.lead;
    if (a !== s && ((this.prevLead = s), (this.lead = a), a.show(), s)) {
      (s.updateSnapshot(), a.scheduleRender());
      const { layoutDependency: h } = s.options,
        { layoutDependency: f } = a.options;
      ((h === void 0 || h !== f) &&
        ((a.resumeFrom = s),
        u && (s.preserveOpacity = !0),
        s.snapshot &&
          ((a.snapshot = s.snapshot),
          (a.snapshot.latestValues = s.animationValues || s.latestValues)),
        (c = a.root) != null && c.isUpdating && (a.isLayoutDirty = !0)),
        a.options.crossfade === !1 && s.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      var u, s, c, h, f;
      ((s = (u = a.options).onExitComplete) == null || s.call(u),
        (f = (c = a.resumingFrom) == null ? void 0 : (h = c.options).onExitComplete) == null ||
          f.call(h));
    });
  }
  scheduleRender() {
    this.members.forEach((a) => a.instance && a.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var a;
    (a = this.lead) != null && a.snapshot && (this.lead.snapshot = void 0);
  }
}
const su = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  nc = ["", "X", "Y", "Z"],
  r2 = 1e3;
let c2 = 0;
function ic(i, a, u, s) {
  const { latestValues: c } = a;
  c[i] && ((u[i] = c[i]), a.setStaticValue(i, 0), s && (s[i] = 0));
}
function jg(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: a } = i.options;
  if (!a) return;
  const u = I0(a);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", yt, !(c || h));
  }
  const { parent: s } = i;
  s && !s.hasCheckedOptimisedAppear && jg(s);
}
function Bg({
  attachResizeListener: i,
  defaultParent: a,
  measureScroll: u,
  checkIsScrollRoot: s,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = a == null ? void 0 : a()) {
      ((this.id = c2++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
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
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(d2),
            this.nodes.forEach(b2),
            this.nodes.forEach(S2),
            this.nodes.forEach(m2));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0));
      for (let g = 0; g < this.path.length; g++) this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new s2());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new kc()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const g = this.eventHandlers.get(f);
      g && g.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = df(f) && !fx(f)), (this.instance = f));
      const { layoutId: m, layout: g, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0),
        i)
      ) {
        let v,
          b = 0;
        const T = () => (this.root.updateBlockedByResize = !1);
        (yt.read(() => {
          b = window.innerWidth;
        }),
          i(f, () => {
            const D = window.innerWidth;
            D !== b &&
              ((b = D),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = u2(T, 250)),
              su.hasAnimatedSinceResize &&
                ((su.hasAnimatedSinceResize = !1), this.nodes.forEach(Cy)));
          }));
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          p &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: v, hasLayoutChanged: b, hasRelativeLayoutChanged: T, layout: D }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const w = this.options.transition || p.getDefaultTransition() || M2,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: L } = p.getProps(),
                H = !this.targetLayout || !Vg(this.targetLayout, D),
                q = !b && T;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                q ||
                (b && (H || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const Y = { ...of(w, "layout"), onPlay: U, onComplete: L };
                ((p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y),
                  this.setAnimationOrigin(v, q, Y.path));
              } else
                (b || Cy(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = D;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ye(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(T2), this.animationId++);
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
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && jg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        ((b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" || typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g) return;
      const p = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const g = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          g && this.nodes.forEach(y2),
          this.nodes.forEach(My));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Dy);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(g2),
            this.nodes.forEach(v2),
            this.nodes.forEach(f2),
            this.nodes.forEach(h2))
          : this.nodes.forEach(Dy),
        this.clearAllSnapshots());
      const m = oe.now();
      ((Pt.delta = Je(0, 1e3 / 60, m - Pt.timestamp)),
        (Pt.timestamp = m),
        (Pt.isProcessing = !0),
        Jr.update.process(Pt),
        Jr.preRender.process(Pt),
        Jr.render.process(Pt),
        (Pt.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), ya.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(p2), this.sharedNodes.forEach(x2));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), yt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      yt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !re(this.snapshot.measuredBox.x) &&
          !re(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Jt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const g = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: g,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !wg(this.projectionDelta),
        g = this.getTransformTemplate(),
        p = g ? g(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || gi(this.latestValues) || v) &&
        (c(this.instance, p), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return (
        f && (g = this.removeTransform(g)),
        D2(g),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var p;
      const { visualElement: f } = this.options;
      if (!f) return Jt();
      const m = f.measureViewportBox();
      if (!(((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(C2))) {
        const { scroll: v } = this.root;
        v && (tn(m.x, v.offset.x), tn(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var g;
      const m = Jt();
      if ((Ze(m, f), (g = this.scroll) != null && g.wasRoot)) return m;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p],
          { scroll: b, options: T } = v;
        v !== this.root &&
          b &&
          T.layoutScroll &&
          (b.wasRoot && Ze(m, f), tn(m.x, b.offset.x), tn(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, g) {
      var v, b;
      const p = g || Jt();
      Ze(p, f);
      for (let T = 0; T < this.path.length; T++) {
        const D = this.path[T];
        (!m &&
          D.options.layoutScroll &&
          D.scroll &&
          D !== D.root &&
          (tn(p.x, -D.scroll.offset.x), tn(p.y, -D.scroll.offset.y)),
          gi(D.latestValues) &&
            au(p, D.latestValues, (v = D.layout) == null ? void 0 : v.layoutBox));
      }
      return (
        gi(this.latestValues) &&
          au(p, this.latestValues, (b = this.layout) == null ? void 0 : b.layoutBox),
        p
      );
    }
    removeTransform(f) {
      var g;
      const m = Jt();
      Ze(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        if (!gi(v.latestValues)) continue;
        let b;
        (v.instance &&
          (Vc(v.latestValues) && v.updateSnapshot(), (b = Jt()), Ze(b, v.measurePageBox())),
          yy(m, v.latestValues, (g = v.snapshot) == null ? void 0 : g.layoutBox, b));
      }
      return (gi(this.latestValues) && yy(m, this.latestValues), m);
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
        this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var D;
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const g = !!this.resumingFrom || this !== m;
      if (!(
        f ||
        (g && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((D = this.parent) != null && D.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!this.layout || !(v || b)) return;
      this.resolvedRelativeTargetAt = Pt.timestamp;
      const T = this.getClosestProjectingParent();
      (T &&
        this.linkedParentVersion !== T.layoutVersion &&
        !T.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && T && T.layout
            ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = Jt()), (this.targetWithTransforms = Jt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Jx(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Ze(this.target, this.layout.layoutBox),
                bg(this.target, this.targetDelta))
              : Ze(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(T, this.target, T.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Vc(this.parent.latestValues) || vg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, m, g) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Jt()),
        (this.relativeTargetOrigin = Jt()),
        pu(this.relativeTargetOrigin, m, g, this.options.layoutAnchor || void 0),
        Ze(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var w;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let g = !0;
      if (
        ((this.isProjectionDirty || ((w = this.parent) != null && w.isProjectionDirty)) && (g = !1),
        m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
        this.resolvedRelativeTargetAt === Pt.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: p, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || v))
      )
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        T = this.treeScale.y;
      (Ax(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Jt())));
      const { target: D } = f;
      if (!D) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (cy(this.prevProjectionDelta.x, this.projectionDelta.x),
          cy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Tl(this.projectionDelta, this.layoutCorrected, D, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== T ||
          !Ty(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Ty(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", D)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ca()),
        (this.projectionDelta = ca()),
        (this.projectionDeltaWithTransform = ca()));
    }
    setAnimationOrigin(f, m = !1, g) {
      const p = this.snapshot,
        v = p ? p.latestValues : {},
        b = { ...this.latestValues },
        T = ca();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m));
      const D = Jt(),
        w = p ? p.source : void 0,
        U = this.layout ? this.layout.source : void 0,
        L = w !== U,
        H = this.getStack(),
        q = !H || H.members.length <= 1,
        Y = !!(L && !q && this.options.crossfade === !0 && !this.path.some(E2));
      this.animationProgress = 0;
      let Z;
      const tt = g == null ? void 0 : g.interpolateProjection(f);
      ((this.mixTargetDelta = (ot) => {
        const J = ot / 1e3,
          $ = tt == null ? void 0 : tt(J);
        ($
          ? ((T.x.translate = $.x),
            (T.x.scale = Rt(f.x.scale, 1, J)),
            (T.x.origin = f.x.origin),
            (T.x.originPoint = f.x.originPoint),
            (T.y.translate = $.y),
            (T.y.scale = Rt(f.y.scale, 1, J)),
            (T.y.origin = f.y.origin),
            (T.y.originPoint = f.y.originPoint))
          : (zy(T.x, f.x, J), zy(T.y, f.y, J)),
          this.setTargetDelta(T),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (pu(
              D,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            A2(this.relativeTarget, this.relativeTargetOrigin, D, J),
            Z && $x(this.relativeTarget, Z) && (this.isProjectionDirty = !1),
            Z || (Z = Jt()),
            Ze(Z, this.relativeTarget)),
          L && ((this.animationValues = b), e2(b, v, this.latestValues, J, Y, q)),
          $ &&
            $.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = b),
            (this.animationValues.pathRotation = $.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = J));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var m, g, p;
      (this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (p = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || p.stop(),
        this.pendingAnimation && (Ye(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = yt.update(() => {
          ((su.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ke(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = a2(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (v) => {
                (this.mixTargetDelta(v), f.onUpdate && f.onUpdate(v));
              },
              onStop: () => {},
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
        (this.mixTargetDelta && this.mixTargetDelta(r2), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let { targetWithTransforms: m, target: g, layout: p, latestValues: v } = f;
      if (!(!m || !g || !p)) {
        if (
          this !== f &&
          this.layout &&
          p &&
          Ug(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          g = this.target || Jt();
          const b = re(this.layout.layoutBox.x);
          ((g.x.min = f.target.x.min), (g.x.max = g.x.min + b));
          const T = re(this.layout.layoutBox.y);
          ((g.y.min = f.target.y.min), (g.y.max = g.y.min + T));
        }
        (Ze(m, g), au(m, v), Tl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v));
      }
    }
    registerSharedNode(f, m) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new o2()),
        this.sharedNodes.get(f).add(m));
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(m) : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: g } = {}) {
      const p = this.getStack();
      (p && p.promote(this, g),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: g } = f;
      if (
        ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (m = !0),
        !m)
      )
        return;
      const p = {};
      g.z && ic("z", f, p, this.animationValues);
      for (let v = 0; v < nc.length; v++)
        (ic(`rotate${nc[v]}`, f, p, this.animationValues),
          ic(`skew${nc[v]}`, f, p, this.animationValues));
      f.render();
      for (const v in p)
        (f.setStaticValue(v, p[v]), this.animationValues && (this.animationValues[v] = p[v]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = lu(m == null ? void 0 : m.pointerEvents) || ""),
          (f.transform = g ? g(this.latestValues, "") : "none"));
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        (this.options.layoutId &&
          ((f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (f.pointerEvents = lu(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !gi(this.latestValues) &&
            ((f.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = Ix(this.projectionDeltaWithTransform, this.treeScale, v);
      (g && (b = g(v, b)), (f.transform = b));
      const { x: T, y: D } = this.projectionDelta;
      ((f.transformOrigin = `${T.origin * 100}% ${D.origin * 100}% 0`),
        p.animationValues
          ? (f.opacity =
              p === this
                ? (v.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (f.opacity =
              p === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0));
      for (const w in _c) {
        if (v[w] === void 0) continue;
        const { correct: U, applyTo: L, isCSSVariable: H } = _c[w],
          q = b === "none" ? v[w] : U(v[w], p);
        if (L) {
          const Y = L.length;
          for (let Z = 0; Z < Y; Z++) f[L[Z]] = q;
        } else H ? (this.options.visualElement.renderState.vars[w] = q) : (f[w] = q);
      }
      this.options.layoutId &&
        (f.pointerEvents = p === this ? lu(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(My),
        this.root.sharedNodes.clear());
    }
  };
}
function f2(i) {
  i.updateLayout();
}
function h2(i) {
  var u;
  const a = ((u = i.resumeFrom) == null ? void 0 : u.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && a && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: c } = i.layout,
      { animationType: h } = i.options,
      f = a.source !== i.layout.source;
    if (h === "size")
      Ie((b) => {
        const T = f ? a.measuredBox[b] : a.layoutBox[b],
          D = re(T);
        ((T.min = s[b].min), (T.max = T.min + D));
      });
    else if (h === "x" || h === "y") {
      const b = h === "x" ? "y" : "x";
      jc(f ? a.measuredBox[b] : a.layoutBox[b], s[b]);
    } else
      Ug(h, a.layoutBox, s) &&
        Ie((b) => {
          const T = f ? a.measuredBox[b] : a.layoutBox[b],
            D = re(s[b]);
          ((T.max = T.min + D),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[b].max = i.relativeTarget[b].min + D)));
        });
    const m = ca();
    Tl(m, s, a.layoutBox);
    const g = ca();
    f ? Tl(g, i.applyTransform(c, !0), a.measuredBox) : Tl(g, s, a.layoutBox);
    const p = !wg(m);
    let v = !1;
    if (!i.resumeFrom) {
      const b = i.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: T, layout: D } = b;
        if (T && D) {
          const w = i.options.layoutAnchor || void 0,
            U = Jt();
          pu(U, a.layoutBox, T.layoutBox, w);
          const L = Jt();
          (pu(L, s, D.layoutBox, w),
            Vg(U, L) || (v = !0),
            b.options.layoutRoot &&
              ((i.relativeTarget = L), (i.relativeTargetOrigin = U), (i.relativeParent = b)));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: s,
      snapshot: a,
      delta: g,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: v,
    });
  } else if (i.isLead()) {
    const { onExitComplete: s } = i.options;
    s && s();
  }
  i.options.transition = void 0;
}
function d2(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function m2(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function p2(i) {
  i.clearSnapshot();
}
function My(i) {
  i.clearMeasurements();
}
function y2(i) {
  ((i.isLayoutDirty = !0), i.updateLayout());
}
function Dy(i) {
  i.isLayoutDirty = !1;
}
function g2(i) {
  i.isAnimationBlocked &&
    i.layout &&
    !i.isLayoutDirty &&
    ((i.snapshot = i.layout), (i.isLayoutDirty = !0));
}
function v2(i) {
  const { visualElement: a } = i.options;
  (a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"), i.resetTransform());
}
function Cy(i) {
  (i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0));
}
function b2(i) {
  i.resolveTargetDelta();
}
function S2(i) {
  i.calcProjection();
}
function T2(i) {
  i.resetSkewAndRotation();
}
function x2(i) {
  i.removeLeadSnapshot();
}
function zy(i, a, u) {
  ((i.translate = Rt(a.translate, 0, u)),
    (i.scale = Rt(a.scale, 1, u)),
    (i.origin = a.origin),
    (i.originPoint = a.originPoint));
}
function Oy(i, a, u, s) {
  ((i.min = Rt(a.min, u.min, s)), (i.max = Rt(a.max, u.max, s)));
}
function A2(i, a, u, s) {
  (Oy(i.x, a.x, u.x, s), Oy(i.y, a.y, u.y, s));
}
function E2(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const M2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ry = (i) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i),
  wy = Ry("applewebkit/") && !Ry("chrome/") ? Math.round : ge;
function Vy(i) {
  ((i.min = wy(i.min)), (i.max = wy(i.max)));
}
function D2(i) {
  (Vy(i.x), Vy(i.y));
}
function Ug(i, a, u) {
  return i === "position" || (i === "preserve-aspect" && !kx(Sy(a), Sy(u), 0.2));
}
function C2(i) {
  var a;
  return i !== i.root && ((a = i.scroll) == null ? void 0 : a.wasRoot);
}
const z2 = Bg({
    attachResizeListener: (i, a) => Dl(i, "resize", a),
    measureScroll: () => {
      var i, a;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((i = document.body) == null ? void 0 : i.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((a = document.body) == null ? void 0 : a.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  ac = { current: void 0 },
  Lg = Bg({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!ac.current) {
        const i = new z2({});
        (i.mount(window), i.setOptions({ layoutScroll: !0 }), (ac.current = i));
      }
      return ac.current;
    },
    resetTransform: (i, a) => {
      i.style.transform = a !== void 0 ? a : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  vf = k.createContext({ transformPagePoint: (i) => i, isStatic: !1, reducedMotion: "never" });
function O2(i = !0) {
  const a = k.useContext(Zc);
  if (a === null) return [!0, null];
  const { isPresent: u, onExitComplete: s, register: c } = a,
    h = k.useId();
  k.useEffect(() => {
    if (i) return c(h);
  }, [i]);
  const f = k.useCallback(() => i && s && s(h), [h, s, i]);
  return !u && s ? [!1, f] : [!0];
}
const Hg = k.createContext({ strict: !1 }),
  Ny = {
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
  };
let _y = !1;
function R2() {
  if (_y) return;
  const i = {};
  for (const a in Ny) i[a] = { isEnabled: (u) => Ny[a].some((s) => !!u[s]) };
  (pg(i), (_y = !0));
}
function Yg() {
  return (R2(), bx());
}
function w2(i) {
  const a = Yg();
  for (const u in i) a[u] = { ...a[u], ...i[u] };
  pg(a);
}
const V2 = new Set([
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
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function yu(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    V2.has(i)
  );
}
let qg = (i) => !yu(i);
function N2(i) {
  typeof i == "function" && (qg = (a) => (a.startsWith("on") ? !yu(a) : i(a)));
}
try {
  N2(require("@emotion/is-prop-valid").default);
} catch {}
function _2(i, a, u) {
  const s = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ie(i[c]) ||
      ((qg(c) ||
        (u === !0 && yu(c)) ||
        (!a && !yu(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (s[c] = i[c]));
  return s;
}
const xu = k.createContext({});
function j2(i, a) {
  if (Tu(i)) {
    const { initial: u, animate: s } = i;
    return { initial: u === !1 || Ml(u) ? u : void 0, animate: Ml(s) ? s : void 0 };
  }
  return i.inherit !== !1 ? a : {};
}
function B2(i) {
  const { initial: a, animate: u } = j2(i, k.useContext(xu));
  return k.useMemo(() => ({ initial: a, animate: u }), [jy(a), jy(u)]);
}
function jy(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const bf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Gg(i, a, u) {
  for (const s in a) !ie(a[s]) && !xg(s, u) && (i[s] = a[s]);
}
function U2({ transformTemplate: i }, a) {
  return k.useMemo(() => {
    const u = bf();
    return (yf(u, a, i), Object.assign({}, u.vars, u.style));
  }, [a]);
}
function L2(i, a) {
  const u = i.style || {},
    s = {};
  return (Gg(s, u, i), Object.assign(s, U2(i, a)), s);
}
function H2(i, a) {
  const u = {},
    s = L2(i, a);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((u.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (u.tabIndex = 0),
    (u.style = s),
    u
  );
}
const Xg = () => ({ ...bf(), attrs: {} });
function Y2(i, a, u, s) {
  const c = k.useMemo(() => {
    const h = Xg();
    return (Ag(h, a, Mg(s), i.transformTemplate, i.style), { ...h.attrs, style: { ...h.style } });
  }, [a]);
  if (i.style) {
    const h = {};
    (Gg(h, i.style, i), (c.style = { ...h, ...c.style }));
  }
  return c;
}
const q2 = [
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
function Sf(i) {
  return typeof i != "string" || i.includes("-") ? !1 : !!(q2.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function G2(i, a, u, { latestValues: s }, c, h = !1, f) {
  const g = ((f ?? Sf(i)) ? Y2 : H2)(a, s, c, i),
    p = _2(a, typeof i == "string", h),
    v = i !== k.Fragment ? { ...p, ...g, ref: u } : {},
    { children: b } = a,
    T = k.useMemo(() => (ie(b) ? b.get() : b), [b]);
  return k.createElement(i, { ...v, children: T });
}
function X2({ scrapeMotionValuesFromProps: i, createRenderState: a }, u, s, c) {
  return { latestValues: Z2(u, s, c, i), renderState: a() };
}
function Z2(i, a, u, s) {
  const c = {},
    h = s(i, {});
  for (const T in h) c[T] = lu(h[T]);
  let { initial: f, animate: m } = i;
  const g = Tu(i),
    p = dg(i);
  a &&
    p &&
    !g &&
    i.inherit !== !1 &&
    (f === void 0 && (f = a.initial), m === void 0 && (m = a.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || f === !1;
  const b = v ? m : f;
  if (b && typeof b != "boolean" && !Su(b)) {
    const T = Array.isArray(b) ? b : [b];
    for (let D = 0; D < T.length; D++) {
      const w = cf(i, T[D]);
      if (w) {
        const { transitionEnd: U, transition: L, ...H } = w;
        for (const q in H) {
          let Y = H[q];
          if (Array.isArray(Y)) {
            const Z = v ? Y.length - 1 : 0;
            Y = Y[Z];
          }
          Y !== null && (c[q] = Y);
        }
        for (const q in U) c[q] = U[q];
      }
    }
  }
  return c;
}
const Zg = (i) => (a, u) => {
    const s = k.useContext(xu),
      c = k.useContext(Zc),
      h = () => X2(i, a, s, c);
    return u ? h() : da(h);
  },
  Q2 = Zg({ scrapeMotionValuesFromProps: gf, createRenderState: bf }),
  K2 = Zg({ scrapeMotionValuesFromProps: Dg, createRenderState: Xg }),
  k2 = Symbol.for("motionComponentSymbol");
function J2(i, a, u) {
  const s = k.useRef(u);
  k.useInsertionEffect(() => {
    s.current = u;
  });
  const c = k.useRef(null);
  return k.useCallback(
    (h) => {
      var m;
      (h && ((m = i.onMount) == null || m.call(i, h)), a && (h ? a.mount(h) : a.unmount()));
      const f = s.current;
      if (typeof f == "function")
        if (h) {
          const g = f(h);
          typeof g == "function" && (c.current = g);
        } else c.current ? (c.current(), (c.current = null)) : f(h);
      else f && (f.current = h);
    },
    [a],
  );
}
const Qg = k.createContext({});
function ua(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function F2(i, a, u, s, c, h) {
  var Y, Z;
  const { visualElement: f } = k.useContext(xu),
    m = k.useContext(Hg),
    g = k.useContext(Zc),
    p = k.useContext(vf),
    v = p.reducedMotion,
    b = p.skipAnimations,
    T = k.useRef(null),
    D = k.useRef(!1);
  ((s = s || m.renderer),
    !T.current &&
      s &&
      ((T.current = s(i, {
        visualState: a,
        parent: f,
        props: u,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: b,
        isSVG: h,
      })),
      D.current && T.current && (T.current.manuallyAnimateOnMount = !0)));
  const w = T.current,
    U = k.useContext(Qg);
  w && !w.projection && c && (w.type === "html" || w.type === "svg") && W2(T.current, u, c, U);
  const L = k.useRef(!1);
  k.useInsertionEffect(() => {
    w && L.current && w.update(u, g);
  });
  const H = u[$0],
    q = k.useRef(
      !!H &&
        typeof window < "u" &&
        !((Y = window.MotionHandoffIsComplete) != null && Y.call(window, H)) &&
        ((Z = window.MotionHasOptimisedAnimation) == null ? void 0 : Z.call(window, H)),
    );
  return (
    Xc(() => {
      ((D.current = !0),
        w &&
          ((L.current = !0),
          (window.MotionIsMounted = !0),
          w.updateFeatures(),
          w.scheduleRenderMicrotask(),
          q.current && w.animationState && w.animationState.animateChanges()));
    }),
    k.useEffect(() => {
      w &&
        (!q.current && w.animationState && w.animationState.animateChanges(),
        q.current &&
          (queueMicrotask(() => {
            var tt;
            (tt = window.MotionHandoffMarkAsComplete) == null || tt.call(window, H);
          }),
          (q.current = !1)),
        (w.enteringChildren = void 0));
    }),
    w
  );
}
function W2(i, a, u, s) {
  const {
    layoutId: c,
    layout: h,
    drag: f,
    dragConstraints: m,
    layoutScroll: g,
    layoutRoot: p,
    layoutAnchor: v,
    layoutCrossfade: b,
  } = a;
  ((i.projection = new u(i.latestValues, a["data-framer-portal-id"] ? void 0 : Kg(i.parent))),
    i.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!f || (m && ua(m)),
      visualElement: i,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: s,
      crossfade: b,
      layoutScroll: g,
      layoutRoot: p,
      layoutAnchor: v,
    }));
}
function Kg(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : Kg(i.parent);
}
function lc(i, { forwardMotionProps: a = !1, type: u } = {}, s, c) {
  s && w2(s);
  const h = u ? u === "svg" : Sf(i),
    f = h ? K2 : Q2;
  function m(p, v) {
    let b;
    const T = { ...k.useContext(vf), ...p, layoutId: P2(p) },
      { isStatic: D } = T,
      w = B2(p),
      U = f(p, D);
    if (!D && typeof window < "u") {
      $2();
      const L = I2(T);
      ((b = L.MeasureLayout), (w.visualElement = F2(i, U, T, c, L.ProjectionNode, h)));
    }
    return _.jsxs(xu.Provider, {
      value: w,
      children: [
        b && w.visualElement ? _.jsx(b, { visualElement: w.visualElement, ...T }) : null,
        G2(i, p, J2(U, w.visualElement, v), U, D, a, h),
      ],
    });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = k.forwardRef(m);
  return ((g[k2] = i), g);
}
function P2({ layoutId: i }) {
  const a = k.useContext(c0).id;
  return a && i !== void 0 ? a + "-" + i : i;
}
function $2(i, a) {
  k.useContext(Hg).strict;
}
function I2(i) {
  const a = Yg(),
    { drag: u, layout: s } = a;
  if (!u && !s) return {};
  const c = { ...u, ...s };
  return {
    MeasureLayout:
      (u != null && u.isEnabled(i)) || (s != null && s.isEnabled(i)) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function tA(i, a) {
  if (typeof Proxy > "u") return lc;
  const u = new Map(),
    s = (h, f) => lc(h, f, i, a),
    c = (h, f) => s(h, f);
  return new Proxy(c, {
    get: (h, f) => (f === "create" ? s : (u.has(f) || u.set(f, lc(f, void 0, i, a)), u.get(f))),
  });
}
const eA = (i, a) =>
  (a.isSVG ?? Sf(i)) ? new Bx(a) : new Rx(a, { allowProjection: i !== k.Fragment });
class nA extends Wn {
  constructor(a) {
    (super(a), a.animationState || (a.animationState = qx(a)));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    Su(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    a !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var a;
    (this.node.animationState.reset(), (a = this.unmountControls) == null || a.call(this));
  }
}
let iA = 0;
class aA extends Wn {
  constructor() {
    (super(...arguments), (this.id = iA++), (this.isExitComplete = !1));
  }
  update() {
    var h;
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: u } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === s) return;
    if (a && s === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: m } = this.node.getProps();
        if (typeof f == "string" || (typeof f == "object" && f !== null && !Array.isArray(f))) {
          const g = Ti(this.node, f, m);
          if (g) {
            const { transition: p, transitionEnd: v, ...b } = g;
            for (const T in b) (h = this.node.getValue(T)) == null || h.jump(b[T]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !a);
    u &&
      !a &&
      c.then(() => {
        ((this.isExitComplete = !0), u(this.id));
      });
  }
  mount() {
    const { register: a, onExitComplete: u } = this.node.presenceContext || {};
    (u && u(this.id), a && (this.unmount = a(this.id)));
  }
  unmount() {}
}
const lA = { animation: { Feature: nA }, exit: { Feature: aA } };
function Rl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const sA = (i) => (a) => hf(a) && i(a, Rl(a));
function xl(i, a, u, s) {
  return Dl(i, a, sA(u), s);
}
const kg = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  By = (i, a) => Math.abs(i - a);
function uA(i, a) {
  const u = By(i.x, a.x),
    s = By(i.y, a.y);
  return Math.sqrt(u ** 2 + s ** 2);
}
const Uy = new Set(["auto", "scroll"]);
class Jg {
  constructor(
    a,
    u,
    {
      transformPagePoint: s,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: f = 3,
      element: m,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (D) => {
        this.handleScroll(D.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Ps(this.lastRawMoveEventInfo, this.transformPagePoint));
        const D = sc(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          U = uA(D.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!w && !U) return;
        const { point: L } = D,
          { timestamp: H } = Pt;
        this.history.push({ ...L, timestamp: H });
        const { onStart: q, onMove: Y } = this.handlers;
        (w || (q && q(this.lastMoveEvent, D), (this.startEvent = this.lastMoveEvent)),
          Y && Y(this.lastMoveEvent, D));
      }),
      (this.handlePointerMove = (D, w) => {
        ((this.lastMoveEvent = D),
          (this.lastRawMoveEventInfo = w),
          (this.lastMoveEventInfo = Ps(w, this.transformPagePoint)),
          yt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (D, w) => {
        this.end();
        const { onEnd: U, onSessionEnd: L, resumeAnimation: H } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && H && H(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const q = sc(
          D.type === "pointercancel" ? this.lastMoveEventInfo : Ps(w, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && U && U(D, q), L && L(D, q));
      }),
      !hf(a))
    )
      return;
    ((this.dragSnapToOrigin = h),
      (this.handlers = u),
      (this.transformPagePoint = s),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const g = Rl(a),
      p = Ps(g, this.transformPagePoint),
      { point: v } = p,
      { timestamp: b } = Pt;
    this.history = [{ ...v, timestamp: b }];
    const { onSessionStart: T } = u;
    (T && T(a, sc(p, this.history)),
      (this.removeListeners = Cl(
        xl(this.contextWindow, "pointermove", this.handlePointerMove),
        xl(this.contextWindow, "pointerup", this.handlePointerUp),
        xl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      m && this.startScrollTracking(m));
  }
  startScrollTracking(a) {
    let u = a.parentElement;
    for (; u;) {
      const s = getComputedStyle(u);
      ((Uy.has(s.overflowX) || Uy.has(s.overflowY)) &&
        this.scrollPositions.set(u, { x: u.scrollLeft, y: u.scrollTop }),
        (u = u.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(a) {
    const u = this.scrollPositions.get(a);
    if (!u) return;
    const s = a === window,
      c = s ? { x: window.scrollX, y: window.scrollY } : { x: a.scrollLeft, y: a.scrollTop },
      h = { x: c.x - u.x, y: c.y - u.y };
    (h.x === 0 && h.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += h.x), (this.lastMoveEventInfo.point.y += h.y))
        : this.history.length > 0 && ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
      this.scrollPositions.set(a, c),
      yt.update(this.updatePoint, !0));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Ye(this.updatePoint));
  }
}
function Ps(i, a) {
  return a ? { point: a(i.point) } : i;
}
function Ly(i, a) {
  return { x: i.x - a.x, y: i.y - a.y };
}
function sc({ point: i }, a) {
  return { point: i, delta: Ly(i, Fg(a)), offset: Ly(i, oA(a)), velocity: rA(a, 0.1) };
}
function oA(i) {
  return i[0];
}
function Fg(i) {
  return i[i.length - 1];
}
function rA(i, a) {
  if (i.length < 2) return { x: 0, y: 0 };
  let u = i.length - 1,
    s = null;
  const c = Fg(i);
  for (; u >= 0 && ((s = i[u]), !(c.timestamp - s.timestamp > ze(a)));) u--;
  if (!s) return { x: 0, y: 0 };
  s === i[0] && i.length > 2 && c.timestamp - s.timestamp > ze(a) * 2 && (s = i[1]);
  const h = He(c.timestamp - s.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - s.x) / h, y: (c.y - s.y) / h };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function cA(i, { min: a, max: u }, s) {
  return (
    a !== void 0 && i < a
      ? (i = s ? Rt(a, i, s.min) : Math.max(i, a))
      : u !== void 0 && i > u && (i = s ? Rt(u, i, s.max) : Math.min(i, u)),
    i
  );
}
function Hy(i, a, u) {
  return {
    min: a !== void 0 ? i.min + a : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0,
  };
}
function fA(i, { top: a, left: u, bottom: s, right: c }) {
  return { x: Hy(i.x, u, c), y: Hy(i.y, a, s) };
}
function Yy(i, a) {
  let u = a.min - i.min,
    s = a.max - i.max;
  return (a.max - a.min < i.max - i.min && ([u, s] = [s, u]), { min: u, max: s });
}
function hA(i, a) {
  return { x: Yy(i.x, a.x), y: Yy(i.y, a.y) };
}
function dA(i, a) {
  let u = 0.5;
  const s = re(i),
    c = re(a);
  return (
    c > s ? (u = ma(a.min, a.max - s, i.min)) : s > c && (u = ma(i.min, i.max - c, a.min)),
    Je(0, 1, u)
  );
}
function mA(i, a) {
  const u = {};
  return (
    a.min !== void 0 && (u.min = a.min - i.min),
    a.max !== void 0 && (u.max = a.max - i.min),
    u
  );
}
const Bc = 0.35;
function pA(i = Bc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = Bc),
    { x: qy(i, "left", "right"), y: qy(i, "top", "bottom") }
  );
}
function qy(i, a, u) {
  return { min: Gy(i, a), max: Gy(i, u) };
}
function Gy(i, a) {
  return typeof i == "number" ? i : i[a] || 0;
}
const yA = new WeakMap();
class gA {
  constructor(a) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Jt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = a));
  }
  start(a, { snapToCursor: u = !1, distanceThreshold: s } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        (u && this.snapToCursor(Rl(b).point), this.stopAnimation());
      },
      f = (b, T) => {
        const { drag: D, dragPropagation: w, onDragStart: U } = this.getProps();
        if (
          D &&
          !w &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = JT(D)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = T),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((H) => {
            let q = this.getAxisMotionValue(H).get() || 0;
            if (en.test(q)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const Z = Y.layout.layoutBox[H];
                Z && (q = re(Z) * (parseFloat(q) / 100));
              }
            }
            this.originPoint[H] = q;
          }),
          U && yt.update(() => U(b, T), !1, !0),
          Mc(this.visualElement, "transform"));
        const { animationState: L } = this.visualElement;
        L && L.setActive("whileDrag", !0);
      },
      m = (b, T) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = T));
        const {
          dragPropagation: D,
          dragDirectionLock: w,
          onDirectionLock: U,
          onDrag: L,
        } = this.getProps();
        if (!D && !this.openDragLock) return;
        const { offset: H } = T;
        if (w && this.currentDirection === null) {
          ((this.currentDirection = bA(H)),
            this.currentDirection !== null && U && U(this.currentDirection));
          return;
        }
        (this.updateAxis("x", T.point, H),
          this.updateAxis("y", T.point, H),
          this.visualElement.render(),
          L && yt.update(() => L(b, T), !1, !0));
      },
      g = (b, T) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = T),
          this.stop(b, T),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      p = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new Jg(
      a,
      { onSessionStart: h, onStart: f, onMove: m, onSessionEnd: g, resumeAnimation: p },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: s,
        contextWindow: kg(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(a, u) {
    const s = a || this.latestPointerEvent,
      c = u || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !s)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && yt.postRender(() => m(s, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: u } = this.visualElement;
    (a && (a.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: s } = this.getProps();
    (!s && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(a, u, s) {
    const { drag: c } = this.getProps();
    if (!s || !$s(a, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(a);
    let f = this.originPoint[a] + s[a];
    (this.constraints && this.constraints[a] && (f = cA(f, this.constraints[a], this.elastic[a])),
      h.set(f));
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: a, dragElastic: u } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
            ? void 0
            : h.layout,
      c = this.constraints;
    (a && ua(a)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : a && s
        ? (this.constraints = fA(s.layoutBox, a))
        : (this.constraints = !1),
      (this.elastic = pA(u)),
      c !== this.constraints &&
        !ua(a) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = mA(s.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: u } = this.getProps();
    if (!a || !ua(a)) return !1;
    const s = a.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const h = Ex(s, c.root, this.visualElement.getTransformPagePoint());
    let f = hA(c.layout.layoutBox, h);
    if (u) {
      const m = u(Tx(f));
      ((this.hasMutatedConstraints = !!m), m && (f = gg(m)));
    }
    return f;
  }
  startAnimation(a) {
    const {
        drag: u,
        dragMomentum: s,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      g = this.constraints || {},
      p = Ie((v) => {
        if (!$s(v, u, this.currentDirection)) return;
        let b = (g && g[v]) || {};
        (f === !0 || f === v) && (b = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          D = c ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: s ? a[v] : 0,
            bounceStiffness: T,
            bounceDamping: D,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(v, w);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(a, u) {
    const s = this.getAxisMotionValue(a);
    return (Mc(this.visualElement, a), s.start(rf(a, s, 0, u, this.visualElement, !1)));
  }
  stopAnimation() {
    Ie((a) => this.getAxisMotionValue(a).stop());
  }
  getAxisMotionValue(a) {
    const u = `_drag${a.toUpperCase()}`,
      c = this.visualElement.getProps()[u];
    return c || this.visualElement.getValue(a, this.visualElement.latestValues[a] ?? 0);
  }
  snapToCursor(a) {
    Ie((u) => {
      const { drag: s } = this.getProps();
      if (!$s(u, s, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[u],
          g = h.get() || 0;
        h.set(a[u] - Rt(f, m, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: u } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!ua(u) || !s || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ie((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const g = m.get();
        c[f] = dA({ min: g, max: g }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ie((f) => {
        if (!$s(f, a, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: g, max: p } = this.constraints[f];
        m.set(Rt(g, p, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    yA.set(this.visualElement, this);
    const a = this.visualElement.current,
      u = xl(a, "pointerdown", (p) => {
        const { drag: v, dragListener: b = !0 } = this.getProps(),
          T = p.target,
          D = T !== a && tx(T);
        v && b && !D && this.start(p);
      });
    let s;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        ua(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s || (s = vA(a, p.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: h } = this.visualElement,
      f = h.addEventListener("measure", c);
    (h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), yt.read(c));
    const m = Dl(window, "resize", () => this.scalePositionWithinConstraints()),
      g = h.addEventListener("didUpdate", ({ delta: p, hasLayoutChanged: v }) => {
        this.isDragging &&
          v &&
          (Ie((b) => {
            const T = this.getAxisMotionValue(b);
            T && ((this.originPoint[b] += p[b].translate), T.set(T.get() + p[b].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (m(), u(), f(), g && g(), s && s());
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: s = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: f = Bc,
        dragMomentum: m = !0,
      } = a;
    return {
      ...a,
      drag: u,
      dragDirectionLock: s,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function Xy(i) {
  let a = !0;
  return () => {
    if (a) {
      a = !1;
      return;
    }
    i();
  };
}
function vA(i, a, u) {
  const s = Rc(i, Xy(u)),
    c = Rc(a, Xy(u));
  return () => {
    (s(), c());
  };
}
function $s(i, a, u) {
  return (a === !0 || a === i) && (u === null || u === i);
}
function bA(i, a = 10) {
  let u = null;
  return (Math.abs(i.y) > a ? (u = "y") : Math.abs(i.x) > a && (u = "x"), u);
}
class SA extends Wn {
  constructor(a) {
    (super(a),
      (this.removeGroupControls = ge),
      (this.removeListeners = ge),
      (this.controls = new gA(a)));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    (a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ge));
  }
  update() {
    const { dragControls: a } = this.node.getProps(),
      { dragControls: u } = this.node.prevProps || {};
    a !== u &&
      (this.removeGroupControls(), a && (this.removeGroupControls = a.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const uc = (i) => (a, u) => {
  i && yt.update(() => i(a, u), !1, !0);
};
class TA extends Wn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ge));
  }
  onPointerDown(a) {
    this.session = new Jg(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kg(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: a, onPanStart: u, onPan: s, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: uc(a),
      onStart: uc(u),
      onMove: uc(s),
      onEnd: (h, f) => {
        (delete this.session, c && yt.postRender(() => c(h, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = xl(this.node.current, "pointerdown", (a) =>
      this.onPointerDown(a),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let oc = !1;
class xA extends k.Component {
  componentDidMount() {
    const { visualElement: a, layoutGroup: u, switchLayoutGroup: s, layoutId: c } = this.props,
      { projection: h } = a;
    (h &&
      (u.group && u.group.add(h),
      s && s.register && c && s.register(h),
      oc && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (su.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(a) {
    const { layoutDependency: u, visualElement: s, drag: c, isPresent: h } = this.props,
      { projection: f } = s;
    return (
      f &&
        ((f.isPresent = h),
        a.layoutDependency !== u && f.setOptions({ ...f.options, layoutDependency: u }),
        (oc = !0),
        c || a.layoutDependency !== u || u === void 0 || a.isPresent !== h
          ? f.willUpdate()
          : this.safeToRemove(),
        a.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              yt.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: a, layoutAnchor: u } = this.props,
      { projection: s } = a;
    s &&
      ((s.options.layoutAnchor = u),
      s.root.didUpdate(),
      ya.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: a, layoutGroup: u, switchLayoutGroup: s } = this.props,
      { projection: c } = a;
    ((oc = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        s && s.deregister && s.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function Wg(i) {
  const [a, u] = O2(),
    s = k.useContext(c0);
  return _.jsx(xA, {
    ...i,
    layoutGroup: s,
    switchLayoutGroup: k.useContext(Qg),
    isPresent: a,
    safeToRemove: u,
  });
}
const AA = { pan: { Feature: TA }, drag: { Feature: SA, ProjectionNode: Lg, MeasureLayout: Wg } };
function Zy(i, a, u) {
  const { props: s } = i;
  i.animationState && s.whileHover && i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    h = s[c];
  h && yt.postRender(() => h(a, Rl(a)));
}
class EA extends Wn {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = WT(a, (u, s) => (Zy(this.node, s, "Start"), (c) => Zy(this.node, c, "End"))));
  }
  unmount() {}
}
class MA extends Wn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Cl(
      Dl(this.node.current, "focus", () => this.onFocus()),
      Dl(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Qy(i, a, u) {
  const { props: s } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState && s.whileTap && i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    h = s[c];
  h && yt.postRender(() => h(a, Rl(a)));
}
class DA extends Wn {
  mount() {
    const { current: a } = this.node;
    if (!a) return;
    const { globalTapTarget: u, propagate: s } = this.node.props;
    this.unmount = nx(
      a,
      (c, h) => (
        Qy(this.node, h, "Start"),
        (f, { success: m }) => Qy(this.node, f, m ? "End" : "Cancel")
      ),
      { useGlobalTarget: u, stopPropagation: (s == null ? void 0 : s.tap) === !1 },
    );
  }
  unmount() {}
}
const Uc = new WeakMap(),
  rc = new WeakMap(),
  CA = (i) => {
    const a = Uc.get(i.target);
    a && a(i);
  },
  zA = (i) => {
    i.forEach(CA);
  };
function OA({ root: i, ...a }) {
  const u = i || document;
  rc.has(u) || rc.set(u, {});
  const s = rc.get(u),
    c = JSON.stringify(a);
  return (s[c] || (s[c] = new IntersectionObserver(zA, { root: i, ...a })), s[c]);
}
function RA(i, a, u) {
  const s = OA(a);
  return (
    Uc.set(i, u),
    s.observe(i),
    () => {
      (Uc.delete(i), s.unobserve(i));
    }
  );
}
const wA = { some: 0, all: 1 };
class VA extends Wn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var g;
    (g = this.stopObserver) == null || g.call(this);
    const { viewport: a = {} } = this.node.getProps(),
      { root: u, margin: s, amount: c = "some", once: h } = a,
      f = {
        root: u ? u.current : void 0,
        rootMargin: s,
        threshold: typeof c == "number" ? c : wA[c],
      },
      m = (p) => {
        const { isIntersecting: v } = p;
        if (this.isInView === v || ((this.isInView = v), h && !v && this.hasEnteredView)) return;
        (v && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", v));
        const { onViewportEnter: b, onViewportLeave: T } = this.node.getProps(),
          D = v ? b : T;
        D && D(p);
      };
    this.stopObserver = RA(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: a, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(NA(a, u)) && this.startObserver();
  }
  unmount() {
    var a;
    ((a = this.stopObserver) == null || a.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function NA({ viewport: i = {} }, { viewport: a = {} } = {}) {
  return (u) => i[u] !== a[u];
}
const _A = {
    inView: { Feature: VA },
    tap: { Feature: DA },
    focus: { Feature: MA },
    hover: { Feature: EA },
  },
  jA = { layout: { ProjectionNode: Lg, MeasureLayout: Wg } },
  BA = { ...lA, ..._A, ...AA, ...jA },
  Ky = tA(BA, eA);
function gu(i) {
  return typeof window > "u" ? !1 : i ? q0() : uf();
}
const UA = 50,
  ky = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  LA = () => ({ time: 0, x: ky(), y: ky() }),
  HA = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
function Jy(i, a, u, s) {
  const c = u[a],
    { length: h, position: f } = HA[a],
    m = c.current,
    g = u.time;
  ((c.current = Math.abs(i[`scroll${f}`])),
    (c.scrollLength = i[`scroll${h}`] - i[`client${h}`]),
    (c.offset.length = 0),
    (c.offset[0] = 0),
    (c.offset[1] = c.scrollLength),
    (c.progress = ma(0, c.scrollLength, c.current)));
  const p = s - g;
  c.velocity = p > UA ? 0 : Jc(c.current - m, p);
}
function YA(i, a, u) {
  (Jy(i, "x", a, u), Jy(i, "y", a, u), (a.time = u));
}
function qA(i, a) {
  const u = { x: 0, y: 0 };
  let s = i;
  for (; s && s !== a;)
    if (sg(s)) ((u.x += s.offsetLeft), (u.y += s.offsetTop), (s = s.offsetParent));
    else if (s.tagName === "svg") {
      const c = s.getBoundingClientRect();
      s = s.parentElement;
      const h = s.getBoundingClientRect();
      ((u.x += c.left - h.left), (u.y += c.top - h.top));
    } else if (s instanceof SVGGraphicsElement) {
      const { x: c, y: h } = s.getBBox();
      ((u.x += c), (u.y += h));
      let f = null,
        m = s.parentNode;
      for (; !f;) (m.tagName === "svg" && (f = m), (m = s.parentNode));
      s = f;
    } else break;
  return u;
}
const Lc = { start: 0, center: 0.5, end: 1 };
function Fy(i, a, u = 0) {
  let s = 0;
  if ((i in Lc && (i = Lc[i]), typeof i == "string")) {
    const c = parseFloat(i);
    i.endsWith("px")
      ? (s = c)
      : i.endsWith("%")
        ? (i = c / 100)
        : i.endsWith("vw")
          ? (s = (c / 100) * document.documentElement.clientWidth)
          : i.endsWith("vh")
            ? (s = (c / 100) * document.documentElement.clientHeight)
            : (i = c);
  }
  return (typeof i == "number" && (s = a * i), u + s);
}
const GA = [0, 0];
function XA(i, a, u, s) {
  let c = Array.isArray(i) ? i : GA,
    h = 0,
    f = 0;
  return (
    typeof i == "number"
      ? (c = [i, i])
      : typeof i == "string" &&
        ((i = i.trim()), i.includes(" ") ? (c = i.split(" ")) : (c = [i, Lc[i] ? i : "0"])),
    (h = Fy(c[0], u, s)),
    (f = Fy(c[1], a)),
    h - f
  );
}
const gl = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  ZA = { x: 0, y: 0 };
function QA(i) {
  return "getBBox" in i && i.tagName !== "svg"
    ? i.getBBox()
    : { width: i.clientWidth, height: i.clientHeight };
}
function KA(i, a, u) {
  const { offset: s = gl.All } = u,
    { target: c = i, axis: h = "y" } = u,
    f = h === "y" ? "height" : "width",
    m = c !== i ? qA(c, i) : ZA,
    g = c === i ? { width: i.scrollWidth, height: i.scrollHeight } : QA(c),
    p = { width: i.clientWidth, height: i.clientHeight };
  a[h].offset.length = 0;
  let v = !a[h].interpolate;
  const b = s.length;
  for (let T = 0; T < b; T++) {
    const D = XA(s[T], p[f], g[f], m[h]);
    (!v && D !== a[h].interpolatorOffsets[T] && (v = !0), (a[h].offset[T] = D));
  }
  (v &&
    ((a[h].interpolate = nf(a[h].offset, B0(s), { clamp: !1 })),
    (a[h].interpolatorOffsets = [...a[h].offset])),
    (a[h].progress = Je(0, 1, a[h].interpolate(a[h].current))));
}
function kA(i, a = i, u) {
  if (((u.x.targetOffset = 0), (u.y.targetOffset = 0), a !== i)) {
    let s = a;
    for (; s && s !== i;)
      ((u.x.targetOffset += s.offsetLeft), (u.y.targetOffset += s.offsetTop), (s = s.offsetParent));
  }
  ((u.x.targetLength = a === i ? a.scrollWidth : a.clientWidth),
    (u.y.targetLength = a === i ? a.scrollHeight : a.clientHeight),
    (u.x.containerLength = i.clientWidth),
    (u.y.containerLength = i.clientHeight));
}
function JA(i, a, u, s = {}) {
  return {
    measure: (c) => {
      (kA(i, s.target, u), YA(i, u, c), (s.offset || s.target) && KA(i, u, s));
    },
    notify: () => a(u),
  };
}
const sa = new WeakMap(),
  Wy = new WeakMap(),
  cc = new WeakMap(),
  Py = new WeakMap(),
  Is = new WeakMap(),
  $y = (i) => (i === document.scrollingElement ? window : i);
function Pg(i, { container: a = document.scrollingElement, trackContentSize: u = !1, ...s } = {}) {
  if (!a) return ge;
  let c = cc.get(a);
  c || ((c = new Set()), cc.set(a, c));
  const h = LA(),
    f = JA(a, i, h, s);
  if ((c.add(f), !sa.has(a))) {
    const g = () => {
        for (const T of c) T.measure(Pt.timestamp);
        yt.preUpdate(p);
      },
      p = () => {
        for (const T of c) T.notify();
      },
      v = () => yt.read(g);
    sa.set(a, v);
    const b = $y(a);
    (window.addEventListener("resize", v),
      a !== document.documentElement && Wy.set(a, Rc(a, v)),
      b.addEventListener("scroll", v),
      v());
  }
  if (u && !Is.has(a)) {
    const g = sa.get(a),
      p = { width: a.scrollWidth, height: a.scrollHeight };
    Py.set(a, p);
    const v = () => {
        const T = a.scrollWidth,
          D = a.scrollHeight;
        (p.width !== T || p.height !== D) && (g(), (p.width = T), (p.height = D));
      },
      b = yt.read(v, !0);
    Is.set(a, b);
  }
  const m = sa.get(a);
  return (
    yt.read(m, !1, !0),
    () => {
      var b;
      Ye(m);
      const g = cc.get(a);
      if (!g || (g.delete(f), g.size)) return;
      const p = sa.get(a);
      (sa.delete(a),
        p &&
          ($y(a).removeEventListener("scroll", p),
          (b = Wy.get(a)) == null || b(),
          window.removeEventListener("resize", p)));
      const v = Is.get(a);
      (v && (Ye(v), Is.delete(a)), Py.delete(a));
    }
  );
}
const FA = [
    [gl.Enter, "entry"],
    [gl.Exit, "exit"],
    [gl.Any, "cover"],
    [gl.All, "contain"],
  ],
  Iy = { start: 0, end: 1 };
function WA(i) {
  const a = i.trim().split(/\s+/);
  if (a.length !== 2) return;
  const u = Iy[a[0]],
    s = Iy[a[1]];
  if (!(u === void 0 || s === void 0)) return [u, s];
}
function PA(i) {
  if (i.length !== 2) return;
  const a = [];
  for (const u of i)
    if (Array.isArray(u)) a.push(u);
    else if (typeof u == "string") {
      const s = WA(u);
      if (!s) return;
      a.push(s);
    } else return;
  return a;
}
function $A(i, a) {
  const u = PA(i);
  if (!u) return !1;
  for (let s = 0; s < 2; s++) {
    const c = u[s],
      h = a[s];
    if (c[0] !== h[0] || c[1] !== h[1]) return !1;
  }
  return !0;
}
function Tf(i) {
  if (!i) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [a, u] of FA) if ($A(i, a)) return { rangeStart: `${u} 0%`, rangeEnd: `${u} 100%` };
}
const t0 = new Map();
function e0(i) {
  const a = { value: 0 },
    u = Pg((s) => {
      a.value = s[i.axis].progress * 100;
    }, i);
  return { currentTime: a, cancel: u };
}
function $g({ source: i, container: a, ...u }) {
  const { axis: s } = u;
  i && (a = i);
  let c = t0.get(a);
  c || ((c = new Map()), t0.set(a, c));
  const h = u.target ?? "self";
  let f = c.get(h);
  f || ((f = {}), c.set(h, f));
  const m = s + (u.offset ?? []).join(",");
  return (
    f[m] ||
      (u.target && gu(u.target)
        ? Tf(u.offset)
          ? (f[m] = new ViewTimeline({ subject: u.target, axis: s }))
          : (f[m] = e0({ container: a, ...u }))
        : gu()
          ? (f[m] = new ScrollTimeline({ source: a, axis: s }))
          : (f[m] = e0({ container: a, ...u }))),
    f[m]
  );
}
function IA(i, a) {
  const u = $g(a),
    s = a.target ? Tf(a.offset) : void 0,
    c = a.target ? gu(a.target) && !!s : gu();
  return i.attachTimeline({
    timeline: c ? u : void 0,
    ...(s && c && { rangeStart: s.rangeStart, rangeEnd: s.rangeEnd }),
    observe: (h) => (
      h.pause(),
      hg((f) => {
        h.time = h.iterationDuration * f;
      }, u)
    ),
  });
}
function tE(i) {
  return i && (i.target || i.offset);
}
function eE(i) {
  return i.length === 2;
}
function nE(i, a) {
  return eE(i) || tE(a)
    ? Pg((u) => {
        i(u[a.axis].progress, u);
      }, a)
    : hg(i, $g(a));
}
function Ig(i, { axis: a = "y", container: u = document.scrollingElement, ...s } = {}) {
  if (!u) return ge;
  const c = { axis: a, container: u, ...s };
  return typeof i == "function" ? nE(i, c) : IA(i, c);
}
const iE = () => ({
    scrollX: Ke(0),
    scrollY: Ke(0),
    scrollXProgress: Ke(0),
    scrollYProgress: Ke(0),
  }),
  fa = (i) => (i ? !i.current : !1);
function n0(i, a, u, s) {
  return {
    factory: (c) => {
      let h;
      const f = () => {
        if (fa(u) || fa(s)) {
          ya.read(f);
          return;
        }
        h = Ig(c, {
          ...a,
          axis: i,
          container: (u == null ? void 0 : u.current) || void 0,
          target: (s == null ? void 0 : s.current) || void 0,
        });
      };
      return (
        ya.read(f),
        () => {
          (ug(f), h == null || h());
        }
      );
    },
    times: [0, 1],
    keyframes: [0, 1],
    ease: (c) => c,
    duration: 1,
  };
}
function aE(i, a) {
  return typeof window > "u" ? !1 : i ? q0() && !!Tf(a) : uf();
}
function lE({ container: i, target: a, ...u } = {}) {
  const s = da(iE);
  aE(a, u.offset) &&
    ((s.scrollXProgress.accelerate = n0("x", u, i, a)),
    (s.scrollYProgress.accelerate = n0("y", u, i, a)));
  const c = k.useRef(null),
    h = k.useRef(!1),
    f = k.useCallback(
      () => (
        (c.current = Ig(
          (m, { x: g, y: p }) => {
            (s.scrollX.set(g.current),
              s.scrollXProgress.set(g.progress),
              s.scrollY.set(p.current),
              s.scrollYProgress.set(p.progress));
          },
          {
            ...u,
            container: (i == null ? void 0 : i.current) || void 0,
            target: (a == null ? void 0 : a.current) || void 0,
          },
        )),
        () => {
          var m;
          (m = c.current) == null || m.call(c);
        }
      ),
      [i, a, JSON.stringify(u.offset)],
    );
  return (
    Xc(() => {
      if (((h.current = !1), fa(i) || fa(a))) {
        h.current = !0;
        return;
      } else return f();
    }, [f]),
    k.useEffect(() => {
      if (!h.current) return;
      let m;
      const g = () => {
        const p = fa(i),
          v = fa(a);
        !p && !v && (m = f());
      };
      return (
        ya.read(g),
        () => {
          (ug(g), m == null || m());
        }
      );
    }, [f]),
    s
  );
}
function sE(i) {
  const a = da(() => Ke(i)),
    { isStatic: u } = k.useContext(vf);
  if (u) {
    const [, s] = k.useState(i);
    k.useEffect(() => a.on("change", s), []);
  }
  return a;
}
function tv(i, a) {
  const u = sE(a()),
    s = () => u.set(a());
  return (
    s(),
    Xc(() => {
      const c = () => yt.preRender(s, !1, !0),
        h = i.map((f) => f.on("change", c));
      return () => {
        (h.forEach((f) => f()), Ye(s));
      };
    }),
    u
  );
}
function uE(i) {
  ((Sl.current = []), i());
  const a = tv(Sl.current, i);
  return ((Sl.current = void 0), a);
}
function Hc(i, a, u, s) {
  if (typeof i == "function") return uE(i);
  if (u !== void 0 && !Array.isArray(u) && typeof a != "function") return oE(i, a, u, s);
  const f = typeof a == "function" ? a : hx(a, u, s),
    m = Array.isArray(i) ? i0(i, f) : i0([i], ([p]) => f(p)),
    g = Array.isArray(i) ? void 0 : i.accelerate;
  return (
    g &&
      !g.isTransformed &&
      typeof a != "function" &&
      Array.isArray(u) &&
      (s == null ? void 0 : s.clamp) !== !1 &&
      (m.accelerate = { ...g, times: a, keyframes: u, isTransformed: !0 }),
    m
  );
}
function i0(i, a) {
  const u = da(() => []);
  return tv(i, () => {
    u.length = 0;
    const s = i.length;
    for (let c = 0; c < s; c++) u[c] = i[c].get();
    return a(u);
  });
}
function oE(i, a, u, s) {
  const c = da(() => Object.keys(u)),
    h = da(() => ({}));
  for (const f of c) h[f] = Hc(i, a, u[f], s);
  return h;
}
const rE =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4",
  cE =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4",
  a0 =
    "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20200%20120%22%3E%3Cpath%20fill=%22%23ffffff%22%20d=%22M160%20110H45a30%2030%200%201%201%206-59.4A45%2045%200%200%201%20138%2039a35%2035%200%200%201%2022%2071z%22/%3E%3C/svg%3E",
  fE =
    "M60 120C26.8629 120 0 93.1371 0 60V0C22.5654 0 42.2213 12.4569 52.4662 30.8691C38.4788 34.2089 28.0787 46.7902 28.0787 61.8006V63.1443C28.0787 79.9648 41.7146 93.6006 58.5353 93.6006H59.8789L59.8785 61.8006C59.8785 79.3633 74.1159 93.6006 91.6787 93.6006L91.6787 61.8006C91.6787 44.2783 77.5071 30.0661 60 30.0008L60 0H62.5352C94.2722 0 120 25.7279 120 57.4648V60C120 93.1371 93.1371 120 60 120Z";
function fc({ size: i = 48, className: a = "" }) {
  return _.jsx("svg", {
    width: i,
    height: i,
    viewBox: "0 0 120 120",
    fill: "currentColor",
    className: a,
    "aria-hidden": !0,
    children: _.jsx("path", { d: fE }),
  });
}
function hE() {
  const i = k.useRef(null),
    { scrollY: a } = lE({ container: i }),
    u = Hc(a, [0, 300], [0, -100]),
    s = Hc(a, [0, 300], [0, -24]);
  return _.jsxs("main", {
    ref: i,
    className: "relative h-screen overflow-y-auto overflow-x-hidden bg-black font-manrope",
    children: [
      _.jsxs("section", {
        id: "hero",
        "data-draftly-section-id": "hero",
        className: "relative h-screen w-full shrink-0 overflow-hidden",
        children: [
          _.jsx("video", {
            className: "absolute inset-0 z-10 h-full w-full object-cover",
            src: rE,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
          }),
          _.jsx("div", {
            className: "pointer-events-none absolute inset-0 z-20 bg-black/20",
            "aria-hidden": !0,
          }),
          _.jsx(r0, {}),
          _.jsxs("div", {
            className:
              "pointer-events-auto absolute left-[20px] top-[24px] z-40 max-w-[calc(100vw-140px)] md:left-[64px] md:top-[64px] md:max-w-none",
            children: [
              _.jsxs("div", {
                className: "flex items-center gap-[16px] md:gap-[24px]",
                children: [
                  _.jsx(fc, { size: 48, className: "text-white md:hidden" }),
                  _.jsx(fc, { size: 64, className: "hidden text-white md:block" }),
                  _.jsxs("p", {
                    className:
                      "w-[112px] text-[11px] font-semibold leading-[1.2] tracking-[0.02em] text-white md:w-auto md:text-[16px]",
                    children: [
                      _.jsxs("span", {
                        className: "hidden md:inline",
                        children: [
                          "Effortless Growth",
                          _.jsx("br", {}),
                          "Operations. We Handle All Tasks.",
                          _.jsx("br", {}),
                          "Stay Calm.",
                        ],
                      }),
                      _.jsxs("span", {
                        className: "md:hidden",
                        children: [
                          "Complete Business",
                          _.jsx("br", {}),
                          "Automation. We Handle All",
                          _.jsx("br", {}),
                          "Tasks. You Relax.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _.jsxs("div", {
                className:
                  "mt-[400px] hidden max-w-[320px] flex-col gap-[24px] text-[14px] font-normal leading-relaxed text-white md:flex",
                children: [
                  _.jsx("p", {
                    children:
                      "Baby Track automates the repetitive work that drains your team—scheduling, follow-ups, reporting, and handoffs—so operators stay focused on decisions that matter.",
                  }),
                  _.jsx("p", {
                    children:
                      "One platform connects your tools, learns your routines, and runs daily operations with calm precision while you scale.",
                  }),
                ],
              }),
            ],
          }),
          _.jsx("button", {
            type: "button",
            className:
              "absolute right-[20px] top-[24px] z-40 cursor-pointer rounded-[100%] border border-white bg-black/10 px-5 py-3 font-italiana text-[12px] uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-[48px] md:right-[64px] md:top-[64px] md:bg-transparent md:px-10 md:py-7 md:text-[18px] md:backdrop-blur-none",
            onClick: () => ha("contact"),
            children: "Get started",
          }),
          _.jsxs("div", {
            className:
              "absolute bottom-[32px] left-[20px] right-[20px] z-40 text-left md:bottom-[64px] md:left-auto md:right-[64px] md:max-w-[1200px] md:text-right",
            children: [
              _.jsxs("div", {
                className:
                  "mb-[32px] flex max-w-[280px] flex-col gap-[16px] text-[12px] font-normal text-white md:hidden",
                children: [
                  _.jsx("p", {
                    children:
                      "Baby Track automates daily operations so your team can focus on growth—not busywork.",
                  }),
                  _.jsx("p", {
                    children:
                      "Connect your stack once; routines run themselves with full visibility.",
                  }),
                ],
              }),
              _.jsxs("h1", {
                className:
                  "font-italiana text-[36px] leading-[1.1] text-white md:text-[96px] md:leading-[88px]",
                children: [
                  _.jsxs("span", {
                    className: "hidden md:inline",
                    children: [
                      "Intelligent Daily",
                      _.jsx("br", {}),
                      "Routine Automation",
                      _.jsx("br", {}),
                      "For Your Business.",
                      _.jsx("br", {}),
                      "You Relax",
                    ],
                  }),
                  _.jsxs("span", {
                    className: "text-[32px] md:hidden",
                    children: [
                      "Intelligent Daily Routine",
                      _.jsx("br", {}),
                      "Automation For Your",
                      _.jsx("br", {}),
                      "Business. You Relax",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      _.jsxs("section", {
        id: "automation",
        "data-draftly-section-id": "automation",
        className: "relative z-10 flex min-h-screen w-full flex-col bg-[#FF0000]",
        children: [
          _.jsx(Ky.div, {
            className:
              "pointer-events-none absolute left-0 top-0 z-[100] hidden w-full -translate-y-1/2 md:block",
            style: { y: u },
            children: _.jsx("img", {
              src: a0,
              alt: "",
              className: "block h-auto w-full",
              referrerPolicy: "no-referrer",
            }),
          }),
          _.jsx(Ky.div, {
            className:
              "pointer-events-none absolute left-0 top-0 z-[100] w-full -translate-y-1/2 md:hidden",
            style: { y: s },
            children: _.jsx("img", {
              src: a0,
              alt: "",
              className: "block h-auto w-full",
              referrerPolicy: "no-referrer",
            }),
          }),
          _.jsx("div", {
            className:
              "relative z-20 flex w-full flex-1 flex-col items-center pt-[100px] md:pt-[400px]",
            children: _.jsxs("div", {
              className:
                "relative z-20 mx-auto flex h-auto w-full max-w-[900px] flex-col items-center px-8 text-center md:h-[620px]",
              children: [
                _.jsx(fc, { size: 80, className: "text-white" }),
                _.jsx("p", {
                  className:
                    "mx-auto mb-[40px] h-[100px] max-w-[400px] text-[16px] uppercase leading-[1.6] tracking-wider text-white",
                  children:
                    "We built this platform with a single purpose to eliminate operational chaos and restore balance to your daily business routine",
                }),
                _.jsx("p", {
                  className: "font-marck mb-[32px] text-[120px] leading-none text-white",
                  children: "S.P.D",
                }),
                _.jsx("p", {
                  className: "mb-[24px] w-[400px] max-w-full text-[16px] font-light text-white",
                  children:
                    "Every workflow you delegate to Baby Track is monitored, versioned, and recoverable—so automation never feels like a black box.",
                }),
                _.jsx("p", {
                  className:
                    "mb-[100px] w-[400px] max-w-full text-[16px] font-light text-white md:mb-24",
                  children:
                    "Teams adopt in days, not quarters: connect tools, define rituals, and let the platform run the rhythm while you steer strategy.",
                }),
              ],
            }),
          }),
          _.jsxs("div", {
            className: "relative w-full shrink-0",
            children: [
              _.jsx("div", {
                className:
                  "pointer-events-none absolute top-0 left-0 z-10 h-[100px] w-full bg-gradient-to-b from-[#FF0000] to-transparent",
                "aria-hidden": !0,
              }),
              _.jsx("video", {
                className: "block h-auto w-full object-contain",
                src: cE,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const dE = [
  {
    step: "01",
    title: "Connect",
    body: "Link CRM, calendar, billing, and ops tools in minutes with guided OAuth flows.",
  },
  {
    step: "02",
    title: "Define",
    body: "Map rituals—standups, renewals, handoffs—with visual triggers and approval gates.",
  },
  {
    step: "03",
    title: "Run",
    body: "Baby Track executes routines with logs, retries, and human-in-the-loop checkpoints.",
  },
];
function mE() {
  return _.jsx(vu, {
    eyebrow: "How it works",
    title: "From chaos to calm in three moves",
    description:
      "Operators configure once; the platform keeps daily rhythm without spreadsheet glue.",
    children: _.jsx("ol", {
      className: "space-y-6",
      children: dE.map((i) =>
        _.jsxs(
          "li",
          {
            className: "flex gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6",
            children: [
              _.jsx("span", {
                className: "font-italiana text-3xl text-[#FF0000]",
                children: i.step,
              }),
              _.jsxs("div", {
                children: [
                  _.jsx("h2", { className: "text-lg font-semibold", children: i.title }),
                  _.jsx("p", { className: "mt-2 text-sm text-white/60", children: i.body }),
                ],
              }),
            ],
          },
          i.step,
        ),
      ),
    }),
  });
}
const pE = [
  { label: "Hours reclaimed / week", value: "12.4" },
  { label: "Tasks automated", value: "2.8k" },
  { label: "Error rate", value: "0.3%" },
];
function yE() {
  return _.jsx(vu, {
    eyebrow: "Insights",
    title: "Visibility without another dashboard",
    description:
      "Every automation emits structured events—latency, owner, outcome—so leaders audit flow health in one feed.",
    children: _.jsx("div", {
      className: "grid gap-4 sm:grid-cols-3",
      children: pE.map((i) =>
        _.jsxs(
          "div",
          {
            className: "rounded-2xl border border-white/10 bg-[#FF0000]/10 p-6 text-center",
            children: [
              _.jsx("p", { className: "font-italiana text-4xl text-white", children: i.value }),
              _.jsx("p", {
                className: "mt-2 text-xs uppercase tracking-widest text-white/60",
                children: i.label,
              }),
            ],
          },
          i.label,
        ),
      ),
    }),
  });
}
const gE = [
  {
    title: "Routine engine",
    body: "Compose daily automations from triggers, timers, and AI-assisted steps.",
  },
  {
    title: "Operations hub",
    body: "Unified inbox for tasks, alerts, and approvals across every connected tool.",
  },
  {
    title: "Policy layer",
    body: "Guardrails ensure automations stay within budget, scope, and compliance.",
  },
];
function vE() {
  return _.jsx(vu, {
    eyebrow: "Platform",
    title: "One surface for operational calm",
    description:
      "Baby Track coordinates work across your stack—routing, enriching, and completing tasks without manual glue code.",
    children: _.jsx("div", {
      className: "grid gap-4 sm:grid-cols-3",
      children: gE.map((i) =>
        _.jsxs(
          "article",
          {
            className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm",
            children: [
              _.jsx("h2", { className: "text-lg font-semibold text-white", children: i.title }),
              _.jsx("p", {
                className: "mt-2 text-sm leading-relaxed text-white/60",
                children: i.body,
              }),
            ],
          },
          i.title,
        ),
      ),
    }),
  });
}
function bE() {
  return (
    k.useEffect(() => {
      s0();
    }, []),
    _.jsx(Ub, {
      routes: {
        "": _.jsx(hE, {}),
        platform: _.jsx(vE, {}),
        "how-it-works": _.jsx(mE, {}),
        insights: _.jsx(yE, {}),
        contact: _.jsx(Kb, {}),
      },
    })
  );
}
Nb.createRoot(document.getElementById("root")).render(
  _.jsx(k.StrictMode, { children: _.jsx(bE, {}) }),
);
