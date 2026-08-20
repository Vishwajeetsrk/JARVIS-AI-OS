(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) V(z);
  new MutationObserver((z) => {
    for (const M of z)
      if (M.type === "childList")
        for (const J of M.addedNodes) J.tagName === "LINK" && J.rel === "modulepreload" && V(J);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(z) {
    const M = {};
    return (
      z.integrity && (M.integrity = z.integrity),
      z.referrerPolicy && (M.referrerPolicy = z.referrerPolicy),
      z.crossOrigin === "use-credentials"
        ? (M.credentials = "include")
        : z.crossOrigin === "anonymous"
          ? (M.credentials = "omit")
          : (M.credentials = "same-origin"),
      M
    );
  }
  function V(z) {
    if (z.ep) return;
    z.ep = !0;
    const M = m(z);
    fetch(z.href, M);
  }
})();
var Ni = { exports: {} },
  wr = {},
  Pi = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Vf() {
  if (La) return U;
  La = 1;
  var g = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    V = Symbol.for("react.strict_mode"),
    z = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    J = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    me = Symbol.for("react.memo"),
    ae = Symbol.for("react.lazy"),
    X = Symbol.iterator;
  function Z(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (X && c[X]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var we = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ce = Object.assign,
    H = {};
  function K(c, v, D) {
    ((this.props = c), (this.context = v), (this.refs = H), (this.updater = D || we));
  }
  ((K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (K.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function Me() {}
  Me.prototype = K.prototype;
  function Re(c, v, D) {
    ((this.props = c), (this.context = v), (this.refs = H), (this.updater = D || we));
  }
  var fe = (Re.prototype = new Me());
  ((fe.constructor = Re), ce(fe, K.prototype), (fe.isPureReactComponent = !0));
  var Ce = Array.isArray,
    nt = Object.prototype.hasOwnProperty,
    Te = { current: null },
    Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(c, v, D) {
    var A,
      B = {},
      W = null,
      b = null;
    if (v != null)
      for (A in (v.ref !== void 0 && (b = v.ref), v.key !== void 0 && (W = "" + v.key), v))
        nt.call(v, A) && !Fe.hasOwnProperty(A) && (B[A] = v[A]);
    var Y = arguments.length - 2;
    if (Y === 1) B.children = D;
    else if (1 < Y) {
      for (var re = Array(Y), We = 0; We < Y; We++) re[We] = arguments[We + 2];
      B.children = re;
    }
    if (c && c.defaultProps) for (A in ((Y = c.defaultProps), Y)) B[A] === void 0 && (B[A] = Y[A]);
    return { $$typeof: g, type: c, key: W, ref: b, props: B, _owner: Te.current };
  }
  function Pt(c, v) {
    return { $$typeof: g, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === g;
  }
  function Gt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (D) {
        return v[D];
      })
    );
  }
  var ft = /\/+/g;
  function Be(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Gt("" + c.key) : v.toString(36);
  }
  function rt(c, v, D, A, B) {
    var W = typeof c;
    (W === "undefined" || W === "boolean") && (c = null);
    var b = !1;
    if (c === null) b = !0;
    else
      switch (W) {
        case "string":
        case "number":
          b = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case g:
            case S:
              b = !0;
          }
      }
    if (b)
      return (
        (b = c),
        (B = B(b)),
        (c = A === "" ? "." + Be(b, 0) : A),
        Ce(B)
          ? ((D = ""),
            c != null && (D = c.replace(ft, "$&/") + "/"),
            rt(B, v, D, "", function (We) {
              return We;
            }))
          : B != null &&
            (gt(B) &&
              (B = Pt(
                B,
                D +
                  (!B.key || (b && b.key === B.key) ? "" : ("" + B.key).replace(ft, "$&/") + "/") +
                  c,
              )),
            v.push(B)),
        1
      );
    if (((b = 0), (A = A === "" ? "." : A + ":"), Ce(c)))
      for (var Y = 0; Y < c.length; Y++) {
        W = c[Y];
        var re = A + Be(W, Y);
        b += rt(W, v, D, re, B);
      }
    else if (((re = Z(c)), typeof re == "function"))
      for (c = re.call(c), Y = 0; !(W = c.next()).done;)
        ((W = W.value), (re = A + Be(W, Y++)), (b += rt(W, v, D, re, B)));
    else if (W === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return b;
  }
  function dt(c, v, D) {
    if (c == null) return c;
    var A = [],
      B = 0;
    return (
      rt(c, A, "", "", function (W) {
        return v.call(D, W, B++);
      }),
      A
    );
  }
  function Ie(c) {
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
    x = { transition: null },
    O = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: x, ReactCurrentOwner: Te };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (U.Children = {
      map: dt,
      forEach: function (c, v, D) {
        dt(
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
          dt(c, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (c) {
        return (
          dt(c, function (v) {
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
    (U.Component = K),
    (U.Fragment = m),
    (U.Profiler = z),
    (U.PureComponent = Re),
    (U.StrictMode = V),
    (U.Suspense = I),
    (U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (U.act = N),
    (U.cloneElement = function (c, v, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = ce({}, c.props),
        B = c.key,
        W = c.ref,
        b = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((W = v.ref), (b = Te.current)),
          v.key !== void 0 && (B = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var Y = c.type.defaultProps;
        for (re in v)
          nt.call(v, re) &&
            !Fe.hasOwnProperty(re) &&
            (A[re] = v[re] === void 0 && Y !== void 0 ? Y[re] : v[re]);
      }
      var re = arguments.length - 2;
      if (re === 1) A.children = D;
      else if (1 < re) {
        Y = Array(re);
        for (var We = 0; We < re; We++) Y[We] = arguments[We + 2];
        A.children = Y;
      }
      return { $$typeof: g, type: c.type, key: B, ref: W, props: A, _owner: b };
    }),
    (U.createContext = function (c) {
      return (
        (c = {
          $$typeof: J,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: M, _context: c }),
        (c.Consumer = c)
      );
    }),
    (U.createElement = Xe),
    (U.createFactory = function (c) {
      var v = Xe.bind(null, c);
      return ((v.type = c), v);
    }),
    (U.createRef = function () {
      return { current: null };
    }),
    (U.forwardRef = function (c) {
      return { $$typeof: q, render: c };
    }),
    (U.isValidElement = gt),
    (U.lazy = function (c) {
      return { $$typeof: ae, _payload: { _status: -1, _result: c }, _init: Ie };
    }),
    (U.memo = function (c, v) {
      return { $$typeof: me, type: c, compare: v === void 0 ? null : v };
    }),
    (U.startTransition = function (c) {
      var v = x.transition;
      x.transition = {};
      try {
        c();
      } finally {
        x.transition = v;
      }
    }),
    (U.unstable_act = N),
    (U.useCallback = function (c, v) {
      return oe.current.useCallback(c, v);
    }),
    (U.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (U.useDebugValue = function () {}),
    (U.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (U.useEffect = function (c, v) {
      return oe.current.useEffect(c, v);
    }),
    (U.useId = function () {
      return oe.current.useId();
    }),
    (U.useImperativeHandle = function (c, v, D) {
      return oe.current.useImperativeHandle(c, v, D);
    }),
    (U.useInsertionEffect = function (c, v) {
      return oe.current.useInsertionEffect(c, v);
    }),
    (U.useLayoutEffect = function (c, v) {
      return oe.current.useLayoutEffect(c, v);
    }),
    (U.useMemo = function (c, v) {
      return oe.current.useMemo(c, v);
    }),
    (U.useReducer = function (c, v, D) {
      return oe.current.useReducer(c, v, D);
    }),
    (U.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (U.useState = function (c) {
      return oe.current.useState(c);
    }),
    (U.useSyncExternalStore = function (c, v, D) {
      return oe.current.useSyncExternalStore(c, v, D);
    }),
    (U.useTransition = function () {
      return oe.current.useTransition();
    }),
    (U.version = "18.3.1"),
    U
  );
}
var Ra;
function ji() {
  return (Ra || ((Ra = 1), (Pi.exports = Vf())), Pi.exports);
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
function $f() {
  if (Ta) return wr;
  Ta = 1;
  var g = ji(),
    S = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    V = Object.prototype.hasOwnProperty,
    z = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(q, I, me) {
    var ae,
      X = {},
      Z = null,
      we = null;
    (me !== void 0 && (Z = "" + me),
      I.key !== void 0 && (Z = "" + I.key),
      I.ref !== void 0 && (we = I.ref));
    for (ae in I) V.call(I, ae) && !M.hasOwnProperty(ae) && (X[ae] = I[ae]);
    if (q && q.defaultProps)
      for (ae in ((I = q.defaultProps), I)) X[ae] === void 0 && (X[ae] = I[ae]);
    return { $$typeof: S, type: q, key: Z, ref: we, props: X, _owner: z.current };
  }
  return ((wr.Fragment = m), (wr.jsx = J), (wr.jsxs = J), wr);
}
var ja;
function Hf() {
  return (ja || ((ja = 1), (Ni.exports = $f())), Ni.exports);
}
var _ = Hf(),
  ve = ji(),
  Rl = {},
  zi = { exports: {} },
  He = {},
  Li = { exports: {} },
  Ri = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Bf() {
  return (
    Oa ||
      ((Oa = 1),
      (function (g) {
        function S(x, O) {
          var N = x.length;
          x.push(O);
          e: for (; 0 < N;) {
            var c = (N - 1) >>> 1,
              v = x[c];
            if (0 < z(v, O)) ((x[c] = O), (x[N] = v), (N = c));
            else break e;
          }
        }
        function m(x) {
          return x.length === 0 ? null : x[0];
        }
        function V(x) {
          if (x.length === 0) return null;
          var O = x[0],
            N = x.pop();
          if (N !== O) {
            x[0] = N;
            e: for (var c = 0, v = x.length, D = v >>> 1; c < D;) {
              var A = 2 * (c + 1) - 1,
                B = x[A],
                W = A + 1,
                b = x[W];
              if (0 > z(B, N))
                W < v && 0 > z(b, B)
                  ? ((x[c] = b), (x[W] = N), (c = W))
                  : ((x[c] = B), (x[A] = N), (c = A));
              else if (W < v && 0 > z(b, N)) ((x[c] = b), (x[W] = N), (c = W));
              else break e;
            }
          }
          return O;
        }
        function z(x, O) {
          var N = x.sortIndex - O.sortIndex;
          return N !== 0 ? N : x.id - O.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var M = performance;
          g.unstable_now = function () {
            return M.now();
          };
        } else {
          var J = Date,
            q = J.now();
          g.unstable_now = function () {
            return J.now() - q;
          };
        }
        var I = [],
          me = [],
          ae = 1,
          X = null,
          Z = 3,
          we = !1,
          ce = !1,
          H = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          Me = typeof clearTimeout == "function" ? clearTimeout : null,
          Re = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function fe(x) {
          for (var O = m(me); O !== null;) {
            if (O.callback === null) V(me);
            else if (O.startTime <= x) (V(me), (O.sortIndex = O.expirationTime), S(I, O));
            else break;
            O = m(me);
          }
        }
        function Ce(x) {
          if (((H = !1), fe(x), !ce))
            if (m(I) !== null) ((ce = !0), Ie(nt));
            else {
              var O = m(me);
              O !== null && oe(Ce, O.startTime - x);
            }
        }
        function nt(x, O) {
          ((ce = !1), H && ((H = !1), Me(Xe), (Xe = -1)), (we = !0));
          var N = Z;
          try {
            for (fe(O), X = m(I); X !== null && (!(X.expirationTime > O) || (x && !Gt()));) {
              var c = X.callback;
              if (typeof c == "function") {
                ((X.callback = null), (Z = X.priorityLevel));
                var v = c(X.expirationTime <= O);
                ((O = g.unstable_now()),
                  typeof v == "function" ? (X.callback = v) : X === m(I) && V(I),
                  fe(O));
              } else V(I);
              X = m(I);
            }
            if (X !== null) var D = !0;
            else {
              var A = m(me);
              (A !== null && oe(Ce, A.startTime - O), (D = !1));
            }
            return D;
          } finally {
            ((X = null), (Z = N), (we = !1));
          }
        }
        var Te = !1,
          Fe = null,
          Xe = -1,
          Pt = 5,
          gt = -1;
        function Gt() {
          return !(g.unstable_now() - gt < Pt);
        }
        function ft() {
          if (Fe !== null) {
            var x = g.unstable_now();
            gt = x;
            var O = !0;
            try {
              O = Fe(!0, x);
            } finally {
              O ? Be() : ((Te = !1), (Fe = null));
            }
          } else Te = !1;
        }
        var Be;
        if (typeof Re == "function")
          Be = function () {
            Re(ft);
          };
        else if (typeof MessageChannel < "u") {
          var rt = new MessageChannel(),
            dt = rt.port2;
          ((rt.port1.onmessage = ft),
            (Be = function () {
              dt.postMessage(null);
            }));
        } else
          Be = function () {
            K(ft, 0);
          };
        function Ie(x) {
          ((Fe = x), Te || ((Te = !0), Be()));
        }
        function oe(x, O) {
          Xe = K(function () {
            x(g.unstable_now());
          }, O);
        }
        ((g.unstable_IdlePriority = 5),
          (g.unstable_ImmediatePriority = 1),
          (g.unstable_LowPriority = 4),
          (g.unstable_NormalPriority = 3),
          (g.unstable_Profiling = null),
          (g.unstable_UserBlockingPriority = 2),
          (g.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (g.unstable_continueExecution = function () {
            ce || we || ((ce = !0), Ie(nt));
          }),
          (g.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (g.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (g.unstable_getFirstCallbackNode = function () {
            return m(I);
          }),
          (g.unstable_next = function (x) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = Z;
            }
            var N = Z;
            Z = O;
            try {
              return x();
            } finally {
              Z = N;
            }
          }),
          (g.unstable_pauseExecution = function () {}),
          (g.unstable_requestPaint = function () {}),
          (g.unstable_runWithPriority = function (x, O) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var N = Z;
            Z = x;
            try {
              return O();
            } finally {
              Z = N;
            }
          }),
          (g.unstable_scheduleCallback = function (x, O, N) {
            var c = g.unstable_now();
            switch (
              (typeof N == "object" && N !== null
                ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? c + N : c))
                : (N = c),
              x)
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
              (v = N + v),
              (x = {
                id: ae++,
                callback: O,
                priorityLevel: x,
                startTime: N,
                expirationTime: v,
                sortIndex: -1,
              }),
              N > c
                ? ((x.sortIndex = N),
                  S(me, x),
                  m(I) === null &&
                    x === m(me) &&
                    (H ? (Me(Xe), (Xe = -1)) : (H = !0), oe(Ce, N - c)))
                : ((x.sortIndex = v), S(I, x), ce || we || ((ce = !0), Ie(nt))),
              x
            );
          }),
          (g.unstable_shouldYield = Gt),
          (g.unstable_wrapCallback = function (x) {
            var O = Z;
            return function () {
              var N = Z;
              Z = O;
              try {
                return x.apply(this, arguments);
              } finally {
                Z = N;
              }
            };
          }));
      })(Ri)),
    Ri
  );
}
var Ma;
function Wf() {
  return (Ma || ((Ma = 1), (Li.exports = Bf())), Li.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa;
function Qf() {
  if (Fa) return He;
  Fa = 1;
  var g = ji(),
    S = Wf();
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
  var V = new Set(),
    z = {};
  function M(e, t) {
    (J(e, t), J(e + "Capture", t));
  }
  function J(e, t) {
    for (z[e] = t, e = 0; e < t.length; e++) V.add(t[e]);
  }
  var q = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    I = Object.prototype.hasOwnProperty,
    me =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ae = {},
    X = {};
  function Z(e) {
    return I.call(X, e) ? !0 : I.call(ae, e) ? !1 : me.test(e) ? (X[e] = !0) : ((ae[e] = !0), !1);
  }
  function we(e, t, n, r) {
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
  function ce(e, t, n, r) {
    if (t === null || typeof t > "u" || we(e, t, n, r)) return !0;
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
  function H(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
  }
  var K = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new H(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      K[t] = new H(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      K[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        K[e] = new H(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new H(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new H(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new H(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var Me = /[\-:]([a-z])/g;
  function Re(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Me, Re);
      K[t] = new H(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Me, Re);
        K[t] = new H(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Me, Re);
      K[t] = new H(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function fe(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (ce(t, n, l, r) && (n = null),
      r || l === null
        ? Z(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var Ce = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nt = Symbol.for("react.element"),
    Te = Symbol.for("react.portal"),
    Fe = Symbol.for("react.fragment"),
    Xe = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Gt = Symbol.for("react.context"),
    ft = Symbol.for("react.forward_ref"),
    Be = Symbol.for("react.suspense"),
    rt = Symbol.for("react.suspense_list"),
    dt = Symbol.for("react.memo"),
    Ie = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    x = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (x && e[x]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var N = Object.assign,
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
  function A(e, t) {
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
  function B(e) {
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
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
      default:
        return "";
    }
  }
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Fe:
        return "Fragment";
      case Te:
        return "Portal";
      case Pt:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case Be:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gt:
          return (e.displayName || "Context") + ".Consumer";
        case gt:
          return (e._context.displayName || "Context") + ".Provider";
        case ft:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dt:
          return ((t = e.displayName || null), t !== null ? t : W(e.type) || "Memo");
        case Ie:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  function b(e) {
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
        return W(t);
      case 8:
        return t === Xe ? "StrictMode" : "Mode";
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
  function Y(e) {
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
  function re(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function We(e) {
    var t = re(e) ? "checked" : "value",
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
  function kr(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function Mi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = re(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Sr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return N({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Fi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Y(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Ii(e, t) {
    ((t = t.checked), t != null && fe(e, "checked", t, !1));
  }
  function Ml(e, t) {
    Ii(e, t);
    var n = Y(t.value),
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
      ? Fl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Fl(e, t.type, Y(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Di(e, t, n) {
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
  function Fl(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Mn = Array.isArray;
  function an(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Y(n), t = null, l = 0; l < e.length; l++) {
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
    return N({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ui(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(m(92));
        if (Mn(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Y(n) };
  }
  function Ai(e, t) {
    var n = Y(t.value),
      r = Y(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Vi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function $i(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $i(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var xr,
    Hi = (function (e) {
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
    Ba = ["Webkit", "ms", "Moz", "O"];
  Object.keys(In).forEach(function (e) {
    Ba.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
    });
  });
  function Bi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Wi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bi(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Wa = N(
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
      if (Wa[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var Vl = null;
  function $l(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Hl = null,
    cn = null,
    fn = null;
  function Qi(e) {
    if ((e = lr(e))) {
      if (typeof Hl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Hl(e.stateNode, e.type, t));
    }
  }
  function Ki(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e);
  }
  function Yi() {
    if (cn) {
      var e = cn,
        t = fn;
      if (((fn = cn = null), Qi(e), t)) for (e = 0; e < t.length; e++) Qi(t[e]);
    }
  }
  function Gi(e, t) {
    return e(t);
  }
  function Xi() {}
  var Bl = !1;
  function Zi(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Gi(e, t, n);
    } finally {
      ((Bl = !1), (cn !== null || fn !== null) && (Xi(), Yi()));
    }
  }
  function Dn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
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
  var Wl = !1;
  if (q)
    try {
      var Un = {};
      (Object.defineProperty(Un, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Un, Un),
        window.removeEventListener("test", Un, Un));
    } catch {
      Wl = !1;
    }
  function Qa(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var An = !1,
    Er = null,
    _r = !1,
    Ql = null,
    Ka = {
      onError: function (e) {
        ((An = !0), (Er = e));
      },
    };
  function Ya(e, t, n, r, l, u, i, o, s) {
    ((An = !1), (Er = null), Qa.apply(Ka, arguments));
  }
  function Ga(e, t, n, r, l, u, i, o, s) {
    if ((Ya.apply(this, arguments), An)) {
      if (An) {
        var p = Er;
        ((An = !1), (Er = null));
      } else throw Error(m(198));
      _r || ((_r = !0), (Ql = p));
    }
  }
  function Xt(e) {
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
  function Ji(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function qi(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Xa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Xt(e)), t === null)) throw Error(m(188));
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
          if (u === n) return (qi(l), e);
          if (u === r) return (qi(l), t);
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
  function bi(e) {
    return ((e = Xa(e)), e !== null ? eo(e) : null);
  }
  function eo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = eo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var to = S.unstable_scheduleCallback,
    no = S.unstable_cancelCallback,
    Za = S.unstable_shouldYield,
    Ja = S.unstable_requestPaint,
    de = S.unstable_now,
    qa = S.unstable_getCurrentPriorityLevel,
    Kl = S.unstable_ImmediatePriority,
    ro = S.unstable_UserBlockingPriority,
    Cr = S.unstable_NormalPriority,
    ba = S.unstable_LowPriority,
    lo = S.unstable_IdlePriority,
    Nr = null,
    pt = null;
  function ec(e) {
    if (pt && typeof pt.onCommitFiberRoot == "function")
      try {
        pt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var lt = Math.clz32 ? Math.clz32 : rc,
    tc = Math.log,
    nc = Math.LN2;
  function rc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((tc(e) / nc) | 0)) | 0);
  }
  var Pr = 64,
    zr = 4194304;
  function Vn(e) {
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
      o !== 0 ? (r = Vn(o)) : ((u &= i), u !== 0 && (r = Vn(u)));
    } else ((i = n & ~l), i !== 0 ? (r = Vn(i)) : u !== 0 && (r = Vn(u)));
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
        ((n = 31 - lt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function lc(e, t) {
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
  function uc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - lt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = lc(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Yl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function uo() {
    var e = Pr;
    return ((Pr <<= 1), (Pr & 4194240) === 0 && (Pr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $n(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - lt(t)),
      (e[t] = n));
  }
  function ic(e, t) {
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
      var l = 31 - lt(n),
        u = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - lt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var G = 0;
  function io(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var oo,
    Zl,
    so,
    ao,
    co,
    Jl = !1,
    Rr = [],
    zt = null,
    Lt = null,
    Rt = null,
    Hn = new Map(),
    Bn = new Map(),
    Tt = [],
    oc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function fo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zt = null;
        break;
      case "dragenter":
      case "dragleave":
        Lt = null;
        break;
      case "mouseover":
      case "mouseout":
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Wn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Wn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Rt = Wn(Rt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Hn.set(u, Wn(Hn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Bn.set(u, Wn(Bn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function po(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ji(n)), t !== null)) {
            ((e.blockedOn = t),
              co(e.priority, function () {
                so(n);
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
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Vl = r), n.target.dispatchEvent(r), (Vl = null));
      } else return ((t = lr(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function mo(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function ac() {
    ((Jl = !1),
      zt !== null && Tr(zt) && (zt = null),
      Lt !== null && Tr(Lt) && (Lt = null),
      Rt !== null && Tr(Rt) && (Rt = null),
      Hn.forEach(mo),
      Bn.forEach(mo));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, ac)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Rr.length) {
      Qn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Qn(zt, e),
        Lt !== null && Qn(Lt, e),
        Rt !== null && Qn(Rt, e),
        Hn.forEach(t),
        Bn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (po(n), n.blockedOn === null && Tt.shift());
  }
  var dn = Ce.ReactCurrentBatchConfig,
    jr = !0;
  function cc(e, t, n, r) {
    var l = G,
      u = dn.transition;
    dn.transition = null;
    try {
      ((G = 1), ql(e, t, n, r));
    } finally {
      ((G = l), (dn.transition = u));
    }
  }
  function fc(e, t, n, r) {
    var l = G,
      u = dn.transition;
    dn.transition = null;
    try {
      ((G = 4), ql(e, t, n, r));
    } finally {
      ((G = l), (dn.transition = u));
    }
  }
  function ql(e, t, n, r) {
    if (jr) {
      var l = bl(e, t, n, r);
      if (l === null) (vu(e, t, r, Or, n), fo(e, r));
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if ((fo(e, r), t & 4 && -1 < oc.indexOf(e))) {
        for (; l !== null;) {
          var u = lr(l);
          if (
            (u !== null && oo(u), (u = bl(e, t, n, r)), u === null && vu(e, t, r, Or, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else vu(e, t, r, null, n);
    }
  }
  var Or = null;
  function bl(e, t, n, r) {
    if (((Or = null), (e = $l(r)), (e = Zt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ji(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Or = e), null);
  }
  function ho(e) {
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
        switch (qa()) {
          case Kl:
            return 1;
          case ro:
            return 4;
          case Cr:
          case ba:
            return 16;
          case lo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var jt = null,
    eu = null,
    Mr = null;
  function vo() {
    if (Mr) return Mr;
    var e,
      t = eu,
      n = t.length,
      r,
      l = "value" in jt ? jt.value : jt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
    return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ir() {
    return !0;
  }
  function yo() {
    return !1;
  }
  function Qe(e) {
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
          ? Ir
          : yo),
        (this.isPropagationStopped = yo),
        this
      );
    }
    return (
      N(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ir));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ir));
        },
        persist: function () {},
        isPersistent: Ir,
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
    tu = Qe(pn),
    Yn = N({}, pn, { view: 0, detail: 0 }),
    dc = Qe(Yn),
    nu,
    ru,
    Gn,
    Dr = N({}, Yn, {
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
      getModifierState: uu,
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
                ? ((nu = e.screenX - Gn.screenX), (ru = e.screenY - Gn.screenY))
                : (ru = nu = 0),
              (Gn = e)),
            nu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ru;
      },
    }),
    go = Qe(Dr),
    pc = N({}, Dr, { dataTransfer: 0 }),
    mc = Qe(pc),
    hc = N({}, Yn, { relatedTarget: 0 }),
    lu = Qe(hc),
    vc = N({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yc = Qe(vc),
    gc = N({}, pn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wc = Qe(gc),
    kc = N({}, pn, { data: 0 }),
    wo = Qe(kc),
    Sc = {
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
    xc = {
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
    Ec = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _c(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ec[e]) ? !!t[e] : !1;
  }
  function uu() {
    return _c;
  }
  var Cc = N({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = Sc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? xc[e.keyCode] || "Unidentified"
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
      getModifierState: uu,
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
    Nc = Qe(Cc),
    Pc = N({}, Dr, {
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
    ko = Qe(Pc),
    zc = N({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uu,
    }),
    Lc = Qe(zc),
    Rc = N({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tc = Qe(Rc),
    jc = N({}, Dr, {
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
    Oc = Qe(jc),
    Mc = [9, 13, 27, 32],
    iu = q && "CompositionEvent" in window,
    Xn = null;
  q && "documentMode" in document && (Xn = document.documentMode);
  var Fc = q && "TextEvent" in window && !Xn,
    So = q && (!iu || (Xn && 8 < Xn && 11 >= Xn)),
    xo = " ",
    Eo = !1;
  function _o(e, t) {
    switch (e) {
      case "keyup":
        return Mc.indexOf(t.keyCode) !== -1;
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
  function Co(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var mn = !1;
  function Ic(e, t) {
    switch (e) {
      case "compositionend":
        return Co(t);
      case "keypress":
        return t.which !== 32 ? null : ((Eo = !0), xo);
      case "textInput":
        return ((e = t.data), e === xo && Eo ? null : e);
      default:
        return null;
    }
  }
  function Dc(e, t) {
    if (mn)
      return e === "compositionend" || (!iu && _o(e, t))
        ? ((e = vo()), (Mr = eu = jt = null), (mn = !1), e)
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
        return So && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Uc = {
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
  function No(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Uc[e.type] : t === "textarea";
  }
  function Po(e, t, n, r) {
    (Ki(r),
      (t = Hr(t, "onChange")),
      0 < t.length &&
        ((n = new tu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    Jn = null;
  function Ac(e) {
    Qo(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Mi(t)) return e;
  }
  function Vc(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (q) {
    var ou;
    if (q) {
      var su = "oninput" in document;
      if (!su) {
        var Lo = document.createElement("div");
        (Lo.setAttribute("oninput", "return;"), (su = typeof Lo.oninput == "function"));
      }
      ou = su;
    } else ou = !1;
    zo = ou && (!document.documentMode || 9 < document.documentMode);
  }
  function Ro() {
    Zn && (Zn.detachEvent("onpropertychange", To), (Jn = Zn = null));
  }
  function To(e) {
    if (e.propertyName === "value" && Ur(Jn)) {
      var t = [];
      (Po(t, Jn, e, $l(e)), Zi(Ac, t));
    }
  }
  function $c(e, t, n) {
    e === "focusin"
      ? (Ro(), (Zn = t), (Jn = n), Zn.attachEvent("onpropertychange", To))
      : e === "focusout" && Ro();
  }
  function Hc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Jn);
  }
  function Bc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ut = typeof Object.is == "function" ? Object.is : Qc;
  function qn(e, t) {
    if (ut(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!I.call(t, l) || !ut(e[l], t[l])) return !1;
    }
    return !0;
  }
  function jo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Oo(e, t) {
    var n = jo(e);
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
      n = jo(n);
    }
  }
  function Mo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Mo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Fo() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function au(e) {
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
  function Kc(e) {
    var t = Fo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Mo(n.ownerDocument.documentElement, n)) {
      if (r !== null && au(n)) {
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
            (l = Oo(n, u)));
          var i = Oo(n, r);
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
  var Yc = q && "documentMode" in document && 11 >= document.documentMode,
    hn = null,
    cu = null,
    bn = null,
    fu = !1;
  function Io(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fu ||
      hn == null ||
      hn !== Sr(r) ||
      ((r = hn),
      "selectionStart" in r && au(r)
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
        (r = Hr(cu, "onSelect")),
        0 < r.length &&
          ((t = new tu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = hn))));
  }
  function Ar(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var vn = {
      animationend: Ar("Animation", "AnimationEnd"),
      animationiteration: Ar("Animation", "AnimationIteration"),
      animationstart: Ar("Animation", "AnimationStart"),
      transitionend: Ar("Transition", "TransitionEnd"),
    },
    du = {},
    Do = {};
  q &&
    ((Do = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete vn.animationend.animation,
      delete vn.animationiteration.animation,
      delete vn.animationstart.animation),
    "TransitionEvent" in window || delete vn.transitionend.transition);
  function Vr(e) {
    if (du[e]) return du[e];
    if (!vn[e]) return e;
    var t = vn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Do) return (du[e] = t[n]);
    return e;
  }
  var Uo = Vr("animationend"),
    Ao = Vr("animationiteration"),
    Vo = Vr("animationstart"),
    $o = Vr("transitionend"),
    Ho = new Map(),
    Bo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Ho.set(e, t), M(t, [e]));
  }
  for (var pu = 0; pu < Bo.length; pu++) {
    var mu = Bo[pu],
      Gc = mu.toLowerCase(),
      Xc = mu[0].toUpperCase() + mu.slice(1);
    Ot(Gc, "on" + Xc);
  }
  (Ot(Uo, "onAnimationEnd"),
    Ot(Ao, "onAnimationIteration"),
    Ot(Vo, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot($o, "onTransitionEnd"),
    J("onMouseEnter", ["mouseout", "mouseover"]),
    J("onMouseLeave", ["mouseout", "mouseover"]),
    J("onPointerEnter", ["pointerout", "pointerover"]),
    J("onPointerLeave", ["pointerout", "pointerover"]),
    M("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    M(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    M("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    M("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    M(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    M(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Wo(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ga(r, t, void 0, e), (e.currentTarget = null));
  }
  function Qo(e, t) {
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
            (Wo(l, o, p), (u = s));
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
            (Wo(l, o, p), (u = s));
          }
      }
    }
    if (_r) throw ((e = Ql), (_r = !1), (Ql = null), e);
  }
  function te(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ko(t, e, 2, !1), n.add(r));
  }
  function hu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ko(n, e, r, t));
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[$r]) {
      ((e[$r] = !0),
        V.forEach(function (n) {
          n !== "selectionchange" && (Zc.has(n) || hu(n, !1, e), hu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || ((t[$r] = !0), hu("selectionchange", !1, t));
    }
  }
  function Ko(e, t, n, r) {
    switch (ho(t)) {
      case 1:
        var l = cc;
        break;
      case 4:
        l = fc;
        break;
      default:
        l = ql;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Wl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function vu(e, t, n, r, l) {
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
    Zi(function () {
      var p = u,
        y = $l(n),
        w = [];
      e: {
        var h = Ho.get(e);
        if (h !== void 0) {
          var E = tu,
            P = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Nc;
              break;
            case "focusin":
              ((P = "focus"), (E = lu));
              break;
            case "focusout":
              ((P = "blur"), (E = lu));
              break;
            case "beforeblur":
            case "afterblur":
              E = lu;
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
              E = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = mc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = Lc;
              break;
            case Uo:
            case Ao:
            case Vo:
              E = yc;
              break;
            case $o:
              E = Tc;
              break;
            case "scroll":
              E = dc;
              break;
            case "wheel":
              E = Oc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = wc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = ko;
          }
          var L = (t & 4) !== 0,
            pe = !L && e === "scroll",
            f = L ? (h !== null ? h + "Capture" : null) : h;
          L = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Dn(a, f)), k != null && L.push(nr(a, k, d)))),
              pe)
            )
              break;
            a = a.return;
          }
          0 < L.length && ((h = new E(h, P, null, n, y)), w.push({ event: h, listeners: L }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            h && n !== Vl && (P = n.relatedTarget || n.fromElement) && (Zt(P) || P[wt]))
          )
            break e;
          if (
            (E || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            E
              ? ((P = n.relatedTarget || n.toElement),
                (E = p),
                (P = P ? Zt(P) : null),
                P !== null &&
                  ((pe = Xt(P)), P !== pe || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((E = null), (P = p)),
            E !== P)
          ) {
            if (
              ((L = go),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((L = ko), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (pe = E == null ? h : wn(E)),
              (d = P == null ? h : wn(P)),
              (h = new L(k, a + "leave", E, n, y)),
              (h.target = pe),
              (h.relatedTarget = d),
              (k = null),
              Zt(y) === p &&
                ((L = new L(f, a + "enter", P, n, y)),
                (L.target = d),
                (L.relatedTarget = pe),
                (k = L)),
              (pe = k),
              E && P)
            )
              t: {
                for (L = E, f = P, a = 0, d = L; d; d = yn(d)) a++;
                for (d = 0, k = f; k; k = yn(k)) d++;
                for (; 0 < a - d;) ((L = yn(L)), a--);
                for (; 0 < d - a;) ((f = yn(f)), d--);
                for (; a--;) {
                  if (L === f || (f !== null && L === f.alternate)) break t;
                  ((L = yn(L)), (f = yn(f)));
                }
                L = null;
              }
            else L = null;
            (E !== null && Yo(w, h, E, L, !1), P !== null && pe !== null && Yo(w, pe, P, L, !0));
          }
        }
        e: {
          if (
            ((h = p ? wn(p) : window),
            (E = h.nodeName && h.nodeName.toLowerCase()),
            E === "select" || (E === "input" && h.type === "file"))
          )
            var R = Vc;
          else if (No(h))
            if (zo) R = Wc;
            else {
              R = Hc;
              var T = $c;
            }
          else
            (E = h.nodeName) &&
              E.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (R = Bc);
          if (R && (R = R(e, p))) {
            Po(w, R, n, y);
            break e;
          }
          (T && T(e, h, p),
            e === "focusout" &&
              (T = h._wrapperState) &&
              T.controlled &&
              h.type === "number" &&
              Fl(h, "number", h.value));
        }
        switch (((T = p ? wn(p) : window), e)) {
          case "focusin":
            (No(T) || T.contentEditable === "true") && ((hn = T), (cu = p), (bn = null));
            break;
          case "focusout":
            bn = cu = hn = null;
            break;
          case "mousedown":
            fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fu = !1), Io(w, n, y));
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            Io(w, n, y);
        }
        var j;
        if (iu)
          e: {
            switch (e) {
              case "compositionstart":
                var F = "onCompositionStart";
                break e;
              case "compositionend":
                F = "onCompositionEnd";
                break e;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break e;
            }
            F = void 0;
          }
        else
          mn
            ? _o(e, n) && (F = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
        (F &&
          (So &&
            n.locale !== "ko" &&
            (mn || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && mn && (j = vo())
              : ((jt = y), (eu = "value" in jt ? jt.value : jt.textContent), (mn = !0))),
          (T = Hr(p, F)),
          0 < T.length &&
            ((F = new wo(F, e, null, n, y)),
            w.push({ event: F, listeners: T }),
            j ? (F.data = j) : ((j = Co(n)), j !== null && (F.data = j)))),
          (j = Fc ? Ic(e, n) : Dc(e, n)) &&
            ((p = Hr(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new wo("onBeforeInput", "beforeinput", null, n, y)),
              w.push({ event: y, listeners: p }),
              (y.data = j))));
      }
      Qo(w, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Dn(e, n)),
        u != null && r.unshift(nr(e, u, l)),
        (u = Dn(e, t)),
        u != null && r.push(nr(e, u, l))),
        (e = e.return));
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Yo(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Dn(n, u)), s != null && i.unshift(nr(n, s, o)))
          : l || ((s = Dn(n, u)), s != null && i.push(nr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Jc = /\r\n?/g,
    qc = /\u0000|\uFFFD/g;
  function Go(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Jc,
        `
`,
      )
      .replace(qc, "");
  }
  function Br(e, t, n) {
    if (((t = Go(t)), Go(e) !== t && n)) throw Error(m(425));
  }
  function Wr() {}
  var yu = null,
    gu = null;
  function wu(e, t) {
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
  var ku = typeof setTimeout == "function" ? setTimeout : void 0,
    bc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xo = typeof Promise == "function" ? Promise : void 0,
    ef =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xo < "u"
          ? function (e) {
              return Xo.resolve(null).then(e).catch(tf);
            }
          : ku;
  function tf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Su(e, t) {
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
  function Mt(e) {
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
  function Zo(e) {
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
  var gn = Math.random().toString(36).slice(2),
    mt = "__reactFiber$" + gn,
    rr = "__reactProps$" + gn,
    wt = "__reactContainer$" + gn,
    xu = "__reactEvents$" + gn,
    nf = "__reactListeners$" + gn,
    rf = "__reactHandles$" + gn;
  function Zt(e) {
    var t = e[mt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[mt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Zo(e); e !== null;) {
            if ((n = e[mt])) return n;
            e = Zo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function lr(e) {
    return (
      (e = e[mt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Eu = [],
    kn = -1;
  function Ft(e) {
    return { current: e };
  }
  function ne(e) {
    0 > kn || ((e.current = Eu[kn]), (Eu[kn] = null), kn--);
  }
  function ee(e, t) {
    (kn++, (Eu[kn] = e.current), (e.current = t));
  }
  var It = {},
    Ne = Ft(It),
    De = Ft(!1),
    Jt = It;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return It;
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
  function Ue(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (ne(De), ne(Ne));
  }
  function Jo(e, t, n) {
    if (Ne.current !== It) throw Error(m(168));
    (ee(Ne, t), ee(De, n));
  }
  function qo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, b(e) || "Unknown", l));
    return N({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || It),
      (Jt = Ne.current),
      ee(Ne, e),
      ee(De, De.current),
      !0
    );
  }
  function bo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = qo(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ne(De),
        ne(Ne),
        ee(Ne, e))
      : ne(De),
      ee(De, n));
  }
  var kt = null,
    Gr = !1,
    _u = !1;
  function es(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function lf(e) {
    ((Gr = !0), es(e));
  }
  function Dt() {
    if (!_u && kt !== null) {
      _u = !0;
      var e = 0,
        t = G;
      try {
        var n = kt;
        for (G = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Gr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), to(Kl, Dt), l);
      } finally {
        ((G = t), (_u = !1));
      }
    }
    return null;
  }
  var xn = [],
    En = 0,
    Xr = null,
    Zr = 0,
    Ze = [],
    Je = 0,
    qt = null,
    St = 1,
    xt = "";
  function bt(e, t) {
    ((xn[En++] = Zr), (xn[En++] = Xr), (Xr = e), (Zr = t));
  }
  function ts(e, t, n) {
    ((Ze[Je++] = St), (Ze[Je++] = xt), (Ze[Je++] = qt), (qt = e));
    var r = St;
    e = xt;
    var l = 32 - lt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - lt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (St = (1 << (32 - lt(t) + l)) | (n << l) | r),
        (xt = u + e));
    } else ((St = (1 << u) | (n << l) | r), (xt = e));
  }
  function Cu(e) {
    e.return !== null && (bt(e, 1), ts(e, 1, 0));
  }
  function Nu(e) {
    for (; e === Xr;) ((Xr = xn[--En]), (xn[En] = null), (Zr = xn[--En]), (xn[En] = null));
    for (; e === qt;)
      ((qt = Ze[--Je]),
        (Ze[Je] = null),
        (xt = Ze[--Je]),
        (Ze[Je] = null),
        (St = Ze[--Je]),
        (Ze[Je] = null));
  }
  var Ke = null,
    Ye = null,
    le = !1,
    it = null;
  function ns(e, t) {
    var n = tt(5, null, null, 0);
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
          t !== null ? ((e.stateNode = t), (Ke = e), (Ye = Mt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ke = e), (Ye = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: St, overflow: xt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = tt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ke = e),
              (Ye = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Pu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zu(e) {
    if (le) {
      var t = Ye;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Pu(e)) throw Error(m(418));
          t = Mt(n.nextSibling);
          var r = Ke;
          t && rs(e, t) ? ns(r, n) : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ke = e));
        }
      } else {
        if (Pu(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ke = e));
      }
    }
  }
  function ls(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ke = e;
  }
  function Jr(e) {
    if (e !== Ke) return !1;
    if (!le) return (ls(e), (le = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !wu(e.type, e.memoizedProps))),
      t && (t = Ye))
    ) {
      if (Pu(e)) throw (us(), Error(m(418)));
      for (; t;) (ns(e, t), (t = Mt(t.nextSibling)));
    }
    if ((ls(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ye = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else Ye = Ke ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Ye; e;) e = Mt(e.nextSibling);
  }
  function _n() {
    ((Ye = Ke = null), (le = !1));
  }
  function Lu(e) {
    it === null ? (it = [e]) : it.push(e);
  }
  var uf = Ce.ReactCurrentBatchConfig;
  function ur(e, t, n) {
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
  function qr(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function is(e) {
    var t = e._init;
    return t(e._payload);
  }
  function os(e) {
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
    function o(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = ki(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var R = d.type;
      return R === Fe
        ? y(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === R ||
              (typeof R == "object" && R !== null && R.$$typeof === Ie && is(R) === a.type))
          ? ((k = l(a, d.props)), (k.ref = ur(f, a, d)), (k.return = f), k)
          : ((k = xl(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = ur(f, a, d)),
            (k.return = f),
            k);
    }
    function p(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = Si(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, k, R) {
      return a === null || a.tag !== 7
        ? ((a = sn(d, f.mode, k, R)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = ki("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case nt:
            return (
              (d = xl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case Te:
            return ((a = Si(a, f.mode, d)), (a.return = f), a);
          case Ie:
            var k = a._init;
            return w(f, k(a._payload), d);
        }
        if (Mn(a) || O(a)) return ((a = sn(a, f.mode, d, null)), (a.return = f), a);
        qr(f, a);
      }
      return null;
    }
    function h(f, a, d, k) {
      var R = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return R !== null ? null : o(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nt:
            return d.key === R ? s(f, a, d, k) : null;
          case Te:
            return d.key === R ? p(f, a, d, k) : null;
          case Ie:
            return ((R = d._init), h(f, a, R(d._payload), k));
        }
        if (Mn(d) || O(d)) return R !== null ? null : y(f, a, d, k, null);
        qr(f, d);
      }
      return null;
    }
    function E(f, a, d, k, R) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), o(a, f, "" + k, R));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case nt:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, R));
          case Te:
            return ((f = f.get(k.key === null ? d : k.key) || null), p(a, f, k, R));
          case Ie:
            var T = k._init;
            return E(f, a, d, T(k._payload), R);
        }
        if (Mn(k) || O(k)) return ((f = f.get(d) || null), y(a, f, k, R, null));
        qr(a, k);
      }
      return null;
    }
    function P(f, a, d, k) {
      for (var R = null, T = null, j = a, F = (a = 0), xe = null; j !== null && F < d.length; F++) {
        j.index > F ? ((xe = j), (j = null)) : (xe = j.sibling);
        var Q = h(f, j, d[F], k);
        if (Q === null) {
          j === null && (j = xe);
          break;
        }
        (e && j && Q.alternate === null && t(f, j),
          (a = u(Q, a, F)),
          T === null ? (R = Q) : (T.sibling = Q),
          (T = Q),
          (j = xe));
      }
      if (F === d.length) return (n(f, j), le && bt(f, F), R);
      if (j === null) {
        for (; F < d.length; F++)
          ((j = w(f, d[F], k)),
            j !== null && ((a = u(j, a, F)), T === null ? (R = j) : (T.sibling = j), (T = j)));
        return (le && bt(f, F), R);
      }
      for (j = r(f, j); F < d.length; F++)
        ((xe = E(j, f, F, d[F], k)),
          xe !== null &&
            (e && xe.alternate !== null && j.delete(xe.key === null ? F : xe.key),
            (a = u(xe, a, F)),
            T === null ? (R = xe) : (T.sibling = xe),
            (T = xe)));
      return (
        e &&
          j.forEach(function (Kt) {
            return t(f, Kt);
          }),
        le && bt(f, F),
        R
      );
    }
    function L(f, a, d, k) {
      var R = O(d);
      if (typeof R != "function") throw Error(m(150));
      if (((d = R.call(d)), d == null)) throw Error(m(151));
      for (
        var T = (R = null), j = a, F = (a = 0), xe = null, Q = d.next();
        j !== null && !Q.done;
        F++, Q = d.next()
      ) {
        j.index > F ? ((xe = j), (j = null)) : (xe = j.sibling);
        var Kt = h(f, j, Q.value, k);
        if (Kt === null) {
          j === null && (j = xe);
          break;
        }
        (e && j && Kt.alternate === null && t(f, j),
          (a = u(Kt, a, F)),
          T === null ? (R = Kt) : (T.sibling = Kt),
          (T = Kt),
          (j = xe));
      }
      if (Q.done) return (n(f, j), le && bt(f, F), R);
      if (j === null) {
        for (; !Q.done; F++, Q = d.next())
          ((Q = w(f, Q.value, k)),
            Q !== null && ((a = u(Q, a, F)), T === null ? (R = Q) : (T.sibling = Q), (T = Q)));
        return (le && bt(f, F), R);
      }
      for (j = r(f, j); !Q.done; F++, Q = d.next())
        ((Q = E(j, f, F, Q.value, k)),
          Q !== null &&
            (e && Q.alternate !== null && j.delete(Q.key === null ? F : Q.key),
            (a = u(Q, a, F)),
            T === null ? (R = Q) : (T.sibling = Q),
            (T = Q)));
      return (
        e &&
          j.forEach(function (Af) {
            return t(f, Af);
          }),
        le && bt(f, F),
        R
      );
    }
    function pe(f, a, d, k) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Fe &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case nt:
            e: {
              for (var R = d.key, T = a; T !== null;) {
                if (T.key === R) {
                  if (((R = d.type), R === Fe)) {
                    if (T.tag === 7) {
                      (n(f, T.sibling), (a = l(T, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    T.elementType === R ||
                    (typeof R == "object" && R !== null && R.$$typeof === Ie && is(R) === T.type)
                  ) {
                    (n(f, T.sibling),
                      (a = l(T, d.props)),
                      (a.ref = ur(f, T, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              d.type === Fe
                ? ((a = sn(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = xl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = ur(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return i(f);
          case Te:
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
              ((a = Si(d, f.mode, k)), (a.return = f), (f = a));
            }
            return i(f);
          case Ie:
            return ((T = d._init), pe(f, a, T(d._payload), k));
        }
        if (Mn(d)) return P(f, a, d, k);
        if (O(d)) return L(f, a, d, k);
        qr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ki(d, f.mode, k)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return pe;
  }
  var Cn = os(!0),
    ss = os(!1),
    br = Ft(null),
    el = null,
    Nn = null,
    Ru = null;
  function Tu() {
    Ru = Nn = el = null;
  }
  function ju(e) {
    var t = br.current;
    (ne(br), (e._currentValue = t));
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
    ((el = e),
      (Ru = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ae = !0), (e.firstContext = null)));
  }
  function qe(e) {
    var t = e._currentValue;
    if (Ru !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (el === null) throw Error(m(308));
        ((Nn = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else Nn = Nn.next = e;
    return t;
  }
  var en = null;
  function Mu(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  function as(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Mu(t)) : ((n.next = l.next), (l.next = n)),
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
  function Fu(e) {
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
  function _t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ($ & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Mu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function tl(e, t, n) {
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
  function nl(e, t, n, r) {
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
      var w = l.baseState;
      ((i = 0), (y = p = s = null), (o = u));
      do {
        var h = o.lane,
          E = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: E,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var P = e,
              L = o;
            switch (((h = t), (E = n), L.tag)) {
              case 1:
                if (((P = L.payload), typeof P == "function")) {
                  w = P.call(E, w, h);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = L.payload), (h = typeof P == "function" ? P.call(E, w, h) : P), h == null)
                )
                  break e;
                w = N({}, w, h);
                break e;
              case 2:
                Ut = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [o]) : h.push(o));
        } else
          ((E = {
            eventTime: E,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = E), (s = w)) : (y = y.next = E),
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
        (y === null && (s = w),
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
      ((rn |= i), (e.lanes = i), (e.memoizedState = w));
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
  var ir = {},
    ht = Ft(ir),
    or = Ft(ir),
    sr = Ft(ir);
  function tn(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Iu(e, t) {
    switch ((ee(sr, t), ee(or, e), ee(ht, ir), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Dl(t, e)));
    }
    (ne(ht), ee(ht, t));
  }
  function zn() {
    (ne(ht), ne(or), ne(sr));
  }
  function ps(e) {
    tn(sr.current);
    var t = tn(ht.current),
      n = Dl(t, e.type);
    t !== n && (ee(or, e), ee(ht, n));
  }
  function Du(e) {
    or.current === e && (ne(ht), ne(or));
  }
  var ue = Ft(0);
  function rl(e) {
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
  var Uu = [];
  function Au() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var ll = Ce.ReactCurrentDispatcher,
    Vu = Ce.ReactCurrentBatchConfig,
    nn = 0,
    ie = null,
    ye = null,
    ke = null,
    ul = !1,
    ar = !1,
    cr = 0,
    of = 0;
  function Pe() {
    throw Error(m(321));
  }
  function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ut(e[n], t[n])) return !1;
    return !0;
  }
  function Hu(e, t, n, r, l, u) {
    if (
      ((nn = u),
      (ie = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? ff : df),
      (e = n(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (ke = ye = null), (t.updateQueue = null), (ll.current = pf), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = ye !== null && ye.next !== null),
      (nn = 0),
      (ke = ye = ie = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Bu() {
    var e = cr !== 0;
    return ((cr = 0), e);
  }
  function vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ke === null ? (ie.memoizedState = ke = e) : (ke = ke.next = e), ke);
  }
  function be() {
    if (ye === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ye.next;
    var t = ke === null ? ie.memoizedState : ke.next;
    if (t !== null) ((ke = t), (ye = e));
    else {
      if (e === null) throw Error(m(310));
      ((ye = e),
        (e = {
          memoizedState: ye.memoizedState,
          baseState: ye.baseState,
          baseQueue: ye.baseQueue,
          queue: ye.queue,
          next: null,
        }),
        ke === null ? (ie.memoizedState = ke = e) : (ke = ke.next = e));
    }
    return ke;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wu(e) {
    var t = be(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = ye,
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
          var w = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((o = s = w), (i = r)) : (s = s.next = w), (ie.lanes |= y), (rn |= y));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        ut(r, t.memoizedState) || (Ae = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (ie.lanes |= u), (rn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qu(e) {
    var t = be(),
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
      (ut(u, t.memoizedState) || (Ae = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function ms() {}
  function hs(e, t) {
    var n = ie,
      r = be(),
      l = t(),
      u = !ut(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ae = !0)),
      (r = r.queue),
      Ku(gs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (ke !== null && ke.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, ys.bind(null, n, r, l, t), void 0, null), Se === null))
        throw Error(m(349));
      (nn & 30) !== 0 || vs(n, t, l);
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
  function ys(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ws(t) && ks(e));
  }
  function gs(e, t, n) {
    return n(function () {
      ws(t) && ks(e);
    });
  }
  function ws(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ut(e, n);
    } catch {
      return !0;
    }
  }
  function ks(e) {
    var t = Et(e, 1);
    t !== null && ct(t, e, 1, -1);
  }
  function Ss(e) {
    var t = vt();
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
      (e = e.dispatch = cf.bind(null, ie, e)),
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
  function xs() {
    return be().memoizedState;
  }
  function il(e, t, n, r) {
    var l = vt();
    ((ie.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ye !== null) {
      var i = ye.memoizedState;
      if (((u = i.destroy), r !== null && $u(r, i.deps))) {
        l.memoizedState = dr(t, n, u, r);
        return;
      }
    }
    ((ie.flags |= e), (l.memoizedState = dr(1 | t, n, u, r)));
  }
  function Es(e, t) {
    return il(8390656, 8, e, t);
  }
  function Ku(e, t) {
    return ol(2048, 8, e, t);
  }
  function _s(e, t) {
    return ol(4, 2, e, t);
  }
  function Cs(e, t) {
    return ol(4, 4, e, t);
  }
  function Ns(e, t) {
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
  function Ps(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), ol(4, 4, Ns.bind(null, t, e), n));
  }
  function Yu() {}
  function zs(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ls(e, t) {
    var n = be();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $u(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Rs(e, t, n) {
    return (nn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n))
      : (ut(n, t) || ((n = uo()), (ie.lanes |= n), (rn |= n), (e.baseState = !0)), t);
  }
  function sf(e, t) {
    var n = G;
    ((G = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Vu.transition;
    Vu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((G = n), (Vu.transition = r));
    }
  }
  function Ts() {
    return be().memoizedState;
  }
  function af(e, t, n) {
    var r = Bt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), js(e)))
      Os(t, n);
    else if (((n = as(e, t, n, r)), n !== null)) {
      var l = Oe();
      (ct(n, e, r, l), Ms(n, t, r));
    }
  }
  function cf(e, t, n) {
    var r = Bt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (js(e)) Os(t, l);
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
          if (((l.hasEagerState = !0), (l.eagerState = o), ut(o, i))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Mu(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = as(e, t, l, r)), n !== null && ((l = Oe()), ct(n, e, r, l), Ms(n, t, r)));
    }
  }
  function js(e) {
    var t = e.alternate;
    return e === ie || (t !== null && t === ie);
  }
  function Os(e, t) {
    ar = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ms(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var sl = {
      readContext: qe,
      useCallback: Pe,
      useContext: Pe,
      useEffect: Pe,
      useImperativeHandle: Pe,
      useInsertionEffect: Pe,
      useLayoutEffect: Pe,
      useMemo: Pe,
      useReducer: Pe,
      useRef: Pe,
      useState: Pe,
      useDebugValue: Pe,
      useDeferredValue: Pe,
      useTransition: Pe,
      useMutableSource: Pe,
      useSyncExternalStore: Pe,
      useId: Pe,
      unstable_isNewReconciler: !1,
    },
    ff = {
      readContext: qe,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: qe,
      useEffect: Es,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), il(4194308, 4, Ns.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return il(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return il(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = vt();
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
          (e = e.dispatch = af.bind(null, ie, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ss,
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        return (vt().memoizedState = e);
      },
      useTransition: function () {
        var e = Ss(!1),
          t = e[0];
        return ((e = sf.bind(null, e[1])), (vt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ie,
          l = vt();
        if (le) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), Se === null)) throw Error(m(349));
          (nn & 30) !== 0 || vs(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Es(gs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          dr(9, ys.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = Se.identifierPrefix;
        if (le) {
          var n = xt,
            r = St;
          ((n = (r & ~(1 << (32 - lt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = of++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    df = {
      readContext: qe,
      useCallback: zs,
      useContext: qe,
      useEffect: Ku,
      useImperativeHandle: Ps,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ls,
      useReducer: Wu,
      useRef: xs,
      useState: function () {
        return Wu(fr);
      },
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        var t = be();
        return Rs(t, ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(fr)[0],
          t = be().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    pf = {
      readContext: qe,
      useCallback: zs,
      useContext: qe,
      useEffect: Ku,
      useImperativeHandle: Ps,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ls,
      useReducer: Qu,
      useRef: xs,
      useState: function () {
        return Qu(fr);
      },
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        var t = be();
        return ye === null ? (t.memoizedState = e) : Rs(t, ye.memoizedState, e);
      },
      useTransition: function () {
        var e = Qu(fr)[0],
          t = be().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      ((t = N({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : N({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Oe(),
        l = Bt(e),
        u = _t(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ct(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Oe(),
        l = Bt(e),
        u = _t(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (ct(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Oe(),
        r = Bt(e),
        l = _t(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (ct(t, e, r, n), tl(t, e, r)));
    },
  };
  function Fs(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !qn(n, r) || !qn(l, u)
          : !0
    );
  }
  function Is(e, t, n) {
    var r = !1,
      l = It,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = qe(u))
        : ((l = Ue(t) ? Jt : Ne.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? Sn(e, l) : It)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = al),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function Ds(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Xu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fu(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = qe(u))
      : ((u = Ue(t) ? Jt : Ne.current), (l.context = Sn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Gu(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && al.enqueueReplaceState(l, l.state, null),
        nl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ln(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += B(r)), (r = r.return));
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
  function Zu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ju(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (di = r)), Ju(e, t));
      }),
      n
    );
  }
  function As(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Ju(e, t);
        }));
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          (Ju(e, t),
            typeof r != "function" && ($t === null ? ($t = new Set([this])) : $t.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = zf.bind(null, e, t, n)), t.then(e, e));
  }
  function $s(e) {
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
  function Hs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = _t(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var hf = Ce.ReactCurrentOwner,
    Ae = !1;
  function je(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Pn(t, l),
      (r = Hu(e, t, n, r, u, l)),
      (n = Bu()),
      e !== null && !Ae
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (le && n && Cu(t), (t.flags |= 1), je(e, t, r, l), t.child)
    );
  }
  function Ws(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !wi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Qs(e, t, u, r, l))
        : ((e = xl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : qn), n(i, r) && e.ref === t.ref))
        return Ct(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (qn(u, r) && e.ref === t.ref)
        if (((Ae = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Ae = !0);
        else return ((t.lanes = e.lanes), Ct(e, t, l));
    }
    return qu(e, t, n, r, l);
  }
  function Ks(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ee(Tn, Ge),
          (Ge |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ee(Tn, Ge),
            (Ge |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          ee(Tn, Ge),
          (Ge |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        ee(Tn, Ge),
        (Ge |= r));
    return (je(e, t, l, n), t.child);
  }
  function Ys(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qu(e, t, n, r, l) {
    var u = Ue(n) ? Jt : Ne.current;
    return (
      (u = Sn(t, u)),
      Pn(t, l),
      (n = Hu(e, t, n, r, u, l)),
      (r = Bu()),
      e !== null && !Ae
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (le && r && Cu(t), (t.flags |= 1), je(e, t, n, l), t.child)
    );
  }
  function Gs(e, t, n, r, l) {
    if (Ue(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if ((Pn(t, l), t.stateNode === null)) (fl(e, t), Is(t, n, r), Xu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = qe(p))
        : ((p = Ue(n) ? Jt : Ne.current), (p = Sn(t, p)));
      var y = n.getDerivedStateFromProps,
        w = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Ds(t, i, r, p)),
        (Ut = !1));
      var h = t.memoizedState;
      ((i.state = h),
        nl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || h !== s || De.current || Ut
          ? (typeof y == "function" && (Gu(t, n, y, r), (s = t.memoizedState)),
            (o = Ut || Fs(t, n, o, r, h, s, p))
              ? (w ||
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
        cs(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : ot(t.type, o)),
        (i.props = p),
        (w = t.pendingProps),
        (h = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = qe(s))
          : ((s = Ue(n) ? Jt : Ne.current), (s = Sn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((y = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== w || h !== s) && Ds(t, i, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (i.state = h),
        nl(t, r, i, l));
      var P = t.memoizedState;
      o !== w || h !== P || De.current || Ut
        ? (typeof E == "function" && (Gu(t, n, E, r), (P = t.memoizedState)),
          (p = Ut || Fs(t, n, p, r, h, P, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, P, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, P, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (i.props = r),
          (i.state = P),
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
    return bu(e, t, n, r, u, l);
  }
  function bu(e, t, n, r, l, u) {
    Ys(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && bo(t, n, !1), Ct(e, t, u));
    ((r = t.stateNode), (hf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Cn(t, e.child, null, u)), (t.child = Cn(t, null, o, u)))
        : je(e, t, o, u),
      (t.memoizedState = r.state),
      l && bo(t, n, !0),
      t.child
    );
  }
  function Xs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Jo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Jo(e, t.context, !1),
      Iu(e, t.containerInfo));
  }
  function Zs(e, t, n, r, l) {
    return (_n(), Lu(l), (t.flags |= 256), je(e, t, n, r), t.child);
  }
  var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ti(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = ue.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      ee(ue, l & 1),
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
                  : (u = El(i, r, 0, null)),
                (e = sn(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = ti(n)),
                (t.memoizedState = ei),
                e)
              : ni(t, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return vf(e, t, i, r, o, l, n);
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
            ? ti(n)
            : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = ei),
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
  function ni(e, t) {
    return (
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Lu(r),
      Cn(t, e.child, null, n),
      (e = ni(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vf(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zu(Error(m(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (u = sn(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, i),
            (t.child.memoizedState = ti(i)),
            (t.memoizedState = ei),
            u);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Zu(u, r, void 0)), cl(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Ae || o)) {
      if (((r = Se), r !== null)) {
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
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), Et(e, l), ct(r, e, l, -1)));
      }
      return (gi(), (r = Zu(Error(m(421)))), cl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Lf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Ye = Mt(l.nextSibling)),
        (Ke = t),
        (le = !0),
        (it = null),
        e !== null &&
          ((Ze[Je++] = St),
          (Ze[Je++] = xt),
          (Ze[Je++] = qt),
          (St = e.id),
          (xt = e.overflow),
          (qt = t)),
        (t = ni(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function qs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ou(e.return, t, n));
  }
  function ri(e, t, n, r, l) {
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
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((je(e, t, r.children, n), (r = ue.current), (r & 2) !== 0))
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
    if ((ee(ue, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && rl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ri(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ri(t, !0, n, null, u);
          break;
        case "together":
          ri(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ct(e, t, n) {
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
  function yf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Xs(t), _n());
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Ue(t.type) && Yr(t);
        break;
      case 4:
        Iu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (ee(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (ee(ue, ue.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Js(e, t, n)
              : (ee(ue, ue.current & 1), (e = Ct(e, t, n)), e !== null ? e.sibling : null);
        ee(ue, ue.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return bs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          ee(ue, ue.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ks(e, t, n));
    }
    return Ct(e, t, n);
  }
  var ea, li, ta, na;
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
    (li = function () {}),
    (ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), tn(ht.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          case "select":
            ((l = N({}, l, { value: void 0 })), (r = N({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
        }
        Ul(n, r);
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
                (z.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (z.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && te("scroll", e), u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        n && (u = u || []).push("style", n);
        var p = u;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (na = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function pr(e, t) {
    if (!le)
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
  function ze(e) {
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
  function gf(e, t, n) {
    var r = t.pendingProps;
    switch ((Nu(t), t.tag)) {
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
        return (ze(t), null);
      case 1:
        return (Ue(t.type) && Kr(), ze(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          ne(De),
          ne(Ne),
          Au(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Jr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), it !== null && (hi(it), (it = null)))),
          li(e, t),
          ze(t),
          null
        );
      case 5:
        Du(t);
        var l = tn(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (ze(t), null);
          }
          if (((e = tn(ht.current)), Jr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[mt] = t), (r[rr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (te("cancel", r), te("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) te(er[l], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (te("error", r), te("load", r));
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                (Fi(r, u), te("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), te("invalid", r));
                break;
              case "textarea":
                (Ui(r, u), te("invalid", r));
            }
            (Ul(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 && Br(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 && Br(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : z.hasOwnProperty(i) && o != null && i === "onScroll" && te("scroll", r);
              }
            switch (n) {
              case "input":
                (kr(r), Di(r, u, !0));
                break;
              case "textarea":
                (kr(r), Vi(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Wr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $i(n)),
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
              (e[mt] = t),
              (e[rr] = r),
              ea(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Al(n, r)), n)) {
                case "dialog":
                  (te("cancel", e), te("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (te("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) te(er[l], e);
                  l = r;
                  break;
                case "source":
                  (te("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (te("error", e), te("load", e), (l = r));
                  break;
                case "details":
                  (te("toggle", e), (l = r));
                  break;
                case "input":
                  (Fi(e, r), (l = Ol(e, r)), te("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = N({}, r, { value: void 0 })),
                    te("invalid", e));
                  break;
                case "textarea":
                  (Ui(e, r), (l = Il(e, r)), te("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Wi(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Hi(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Fn(e, s)
                          : typeof s == "number" && Fn(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (z.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && te("scroll", e)
                            : s != null && fe(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (kr(e), Di(e, r, !1));
                  break;
                case "textarea":
                  (kr(e), Vi(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? an(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
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
        return (ze(t), null);
      case 6:
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = tn(sr.current)), tn(ht.current), Jr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[mt] = t),
              (u = r.nodeValue !== n) && ((e = Ke), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Br(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Br(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[mt] = t),
              (t.stateNode = r));
        }
        return (ze(t), null);
      case 13:
        if (
          (ne(ue),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (le && Ye !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (us(), _n(), (t.flags |= 98560), (u = !1));
          else if (((u = Jr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[mt] = t;
            } else (_n(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (ze(t), (u = !1));
          } else (it !== null && (hi(it), (it = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ue.current & 1) !== 0 ? ge === 0 && (ge = 3) : gi())),
            t.updateQueue !== null && (t.flags |= 4),
            ze(t),
            null);
      case 4:
        return (zn(), li(e, t), e === null && tr(t.stateNode.containerInfo), ze(t), null);
      case 10:
        return (ju(t.type._context), ze(t), null);
      case 17:
        return (Ue(t.type) && Kr(), ze(t), null);
      case 19:
        if ((ne(ue), (u = t.memoizedState), u === null)) return (ze(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = rl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      pr(u, !1),
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
                  return (ee(ue, (ue.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              de() > jn &&
              ((t.flags |= 128), (r = !0), pr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                pr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !le)
              )
                return (ze(t), null);
            } else
              2 * de() - u.renderingStartTime > jn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), pr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = u.last), n !== null ? (n.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = de()),
            (t.sibling = null),
            (n = ue.current),
            ee(ue, r ? (n & 1) | 2 : n & 1),
            t)
          : (ze(t), null);
      case 22:
      case 23:
        return (
          yi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Ge & 1073741824) !== 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ze(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function wf(e, t) {
    switch ((Nu(t), t.tag)) {
      case 1:
        return (
          Ue(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          ne(De),
          ne(Ne),
          Au(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Du(t), null);
      case 13:
        if ((ne(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          _n();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (ne(ue), null);
      case 4:
        return (zn(), null);
      case 10:
        return (ju(t.type._context), null);
      case 22:
      case 23:
        return (yi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    Le = !1,
    kf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
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
  function ui(e, t, n) {
    try {
      n();
    } catch (r) {
      se(e, t, r);
    }
  }
  var ra = !1;
  function Sf(e, t) {
    if (((yu = jr), (e = Fo()), au(e))) {
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
              w = e,
              h = null;
            t: for (;;) {
              for (
                var E;
                w !== n || (l !== 0 && w.nodeType !== 3) || (o = i + l),
                  w !== u || (r !== 0 && w.nodeType !== 3) || (s = i + r),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (E = w.firstChild) !== null;
              )
                ((h = w), (w = E));
              for (;;) {
                if (w === e) break t;
                if (
                  (h === n && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (E = w.nextSibling) !== null)
                )
                  break;
                ((w = h), (h = w.parentNode));
              }
              w = E;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gu = { focusedElem: e, selectionRange: n }, jr = !1, C = t; C !== null;)
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null;) {
          t = C;
          try {
            var P = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (P !== null) {
                    var L = P.memoizedProps,
                      pe = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? L : ot(t.type, L),
                        pe,
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
          } catch (k) {
            se(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((P = ra), (ra = !1), P);
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          ((l.destroy = void 0), u !== void 0 && ui(t, n, u));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
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
  function ii(e) {
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
        t !== null && (delete t[mt], delete t[rr], delete t[xu], delete t[nf], delete t[rf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function ua(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ia(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || ua(e.return)) return null;
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
  function oi(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Wr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oi(e, t, n), e = e.sibling; e !== null;) (oi(e, t, n), (e = e.sibling));
  }
  function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (si(e, t, n), e = e.sibling; e !== null;) (si(e, t, n), (e = e.sibling));
  }
  var Ee = null,
    st = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (oa(e, t, n), (n = n.sibling));
  }
  function oa(e, t, n) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Le || Rn(n, t);
      case 6:
        var r = Ee,
          l = st;
        ((Ee = null),
          Vt(e, t, n),
          (Ee = r),
          (st = l),
          Ee !== null &&
            (st
              ? ((e = Ee),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Ee.removeChild(n.stateNode)));
        break;
      case 18:
        Ee !== null &&
          (st
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? Su(e.parentNode, n) : e.nodeType === 1 && Su(e, n),
              Kn(e))
            : Su(Ee, n.stateNode));
        break;
      case 4:
        ((r = Ee),
          (l = st),
          (Ee = n.stateNode.containerInfo),
          (st = !0),
          Vt(e, t, n),
          (Ee = r),
          (st = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Le && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            ((u = u.tag),
              i !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ui(n, t, i),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Le && (Rn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            se(n, t, o);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Le = (r = Le) || n.memoizedState !== null), Vt(e, t, n), (Le = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new kf()),
        t.forEach(function (r) {
          var l = Rf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function at(e, t) {
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
                ((Ee = o.stateNode), (st = !1));
                break e;
              case 3:
                ((Ee = o.stateNode.containerInfo), (st = !0));
                break e;
              case 4:
                ((Ee = o.stateNode.containerInfo), (st = !0));
                break e;
            }
            o = o.return;
          }
          if (Ee === null) throw Error(m(160));
          (oa(u, i, l), (Ee = null), (st = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          se(l, t, p);
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
        if ((at(t, e), yt(e), r & 4)) {
          try {
            (mr(3, e, e.return), pl(3, e));
          } catch (L) {
            se(e, e.return, L);
          }
          try {
            mr(5, e, e.return);
          } catch (L) {
            se(e, e.return, L);
          }
        }
        break;
      case 1:
        (at(t, e), yt(e), r & 512 && n !== null && Rn(n, n.return));
        break;
      case 5:
        if ((at(t, e), yt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (L) {
            se(e, e.return, L);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = n !== null ? n.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && u.type === "radio" && u.name != null && Ii(l, u), Al(o, i));
              var p = Al(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  w = s[i + 1];
                y === "style"
                  ? Wi(l, w)
                  : y === "dangerouslySetInnerHTML"
                    ? Hi(l, w)
                    : y === "children"
                      ? Fn(l, w)
                      : fe(l, y, w, p);
              }
              switch (o) {
                case "input":
                  Ml(l, u);
                  break;
                case "textarea":
                  Ai(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var E = u.value;
                  E != null
                    ? an(l, !!u.multiple, E, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? an(l, !!u.multiple, u.defaultValue, !0)
                        : an(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[rr] = u;
            } catch (L) {
              se(e, e.return, L);
            }
        }
        break;
      case 6:
        if ((at(t, e), yt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (L) {
            se(e, e.return, L);
          }
        }
        break;
      case 3:
        if ((at(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (L) {
            se(e, e.return, L);
          }
        break;
      case 4:
        (at(t, e), yt(e));
        break;
      case 13:
        (at(t, e),
          yt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (fi = de())),
          r & 4 && sa(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Le = (p = Le) || y), at(t, e), (Le = p)) : at(t, e),
          yt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (C = e, y = e.child; y !== null;) {
              for (w = C = y; C !== null;) {
                switch (((h = C), (E = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, h, h.return);
                    break;
                  case 1:
                    Rn(h, h.return);
                    var P = h.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (L) {
                        se(r, n, L);
                      }
                    }
                    break;
                  case 5:
                    Rn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      da(w);
                      continue;
                    }
                }
                E !== null ? ((E.return = h), (C = E)) : da(w);
              }
              y = y.sibling;
            }
          e: for (y = null, w = e; ;) {
            if (w.tag === 5) {
              if (y === null) {
                y = w;
                try {
                  ((l = w.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = w.stateNode),
                        (s = w.memoizedProps.style),
                        (i = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Bi("display", i))));
                } catch (L) {
                  se(e, e.return, L);
                }
              }
            } else if (w.tag === 6) {
              if (y === null)
                try {
                  w.stateNode.nodeValue = p ? "" : w.memoizedProps;
                } catch (L) {
                  se(e, e.return, L);
                }
            } else if (
              ((w.tag !== 22 && w.tag !== 23) || w.memoizedState === null || w === e) &&
              w.child !== null
            ) {
              ((w.child.return = w), (w = w.child));
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null;) {
              if (w.return === null || w.return === e) break e;
              (y === w && (y = null), (w = w.return));
            }
            (y === w && (y = null), (w.sibling.return = w.return), (w = w.sibling));
          }
        }
        break;
      case 19:
        (at(t, e), yt(e), r & 4 && sa(e));
        break;
      case 21:
        break;
      default:
        (at(t, e), yt(e));
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null;) {
            if (ua(n)) {
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
            var u = ia(e);
            si(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ia(e);
            oi(e, o, i);
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
  function xf(e, t, n) {
    ((C = e), ca(e));
  }
  function ca(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
      var l = C,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || dl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Le;
          o = dl;
          var p = Le;
          if (((dl = i), (Le = s) && !p))
            for (C = l; C !== null;)
              ((i = C),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? pa(l)
                  : s !== null
                    ? ((s.return = i), (C = s))
                    : pa(l));
          for (; u !== null;) ((C = u), ca(u), (u = u.sibling));
          ((C = l), (dl = o), (Le = p));
        }
        fa(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? ((u.return = l), (C = u)) : fa(e);
    }
  }
  function fa(e) {
    for (; C !== null;) {
      var t = C;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Le || pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Le)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var u = t.updateQueue;
                u !== null && ds(t, u, r);
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
                  ds(t, i, n);
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
                      var w = y.dehydrated;
                      w !== null && Kn(w);
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
          Le || (t.flags & 512 && ii(t));
        } catch (h) {
          se(t, t.return, h);
        }
      }
      if (t === e) {
        C = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function da(e) {
    for (; C !== null;) {
      var t = C;
      if (t === e) {
        C = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (C = n));
        break;
      }
      C = t.return;
    }
  }
  function pa(e) {
    for (; C !== null;) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
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
              ii(t);
            } catch (s) {
              se(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ii(t);
            } catch (s) {
              se(t, i, s);
            }
        }
      } catch (s) {
        se(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (C = o));
        break;
      }
      C = t.return;
    }
  }
  var Ef = Math.ceil,
    ml = Ce.ReactCurrentDispatcher,
    ai = Ce.ReactCurrentOwner,
    et = Ce.ReactCurrentBatchConfig,
    $ = 0,
    Se = null,
    he = null,
    _e = 0,
    Ge = 0,
    Tn = Ft(0),
    ge = 0,
    hr = null,
    rn = 0,
    hl = 0,
    ci = 0,
    vr = null,
    Ve = null,
    fi = 0,
    jn = 1 / 0,
    Nt = null,
    vl = !1,
    di = null,
    $t = null,
    yl = !1,
    Ht = null,
    gl = 0,
    yr = 0,
    pi = null,
    wl = -1,
    kl = 0;
  function Oe() {
    return ($ & 6) !== 0 ? de() : wl !== -1 ? wl : (wl = de());
  }
  function Bt(e) {
    return (e.mode & 1) === 0
      ? 1
      : ($ & 2) !== 0 && _e !== 0
        ? _e & -_e
        : uf.transition !== null
          ? (kl === 0 && (kl = uo()), kl)
          : ((e = G), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ho(e.type))), e);
  }
  function ct(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (pi = null), Error(m(185)));
    ($n(e, n, r),
      (($ & 2) === 0 || e !== Se) &&
        (e === Se && (($ & 2) === 0 && (hl |= n), ge === 4 && Wt(e, _e)),
        $e(e, r),
        n === 1 && $ === 0 && (t.mode & 1) === 0 && ((jn = de() + 500), Gr && Dt())));
  }
  function $e(e, t) {
    var n = e.callbackNode;
    uc(e, t);
    var r = Lr(e, e === Se ? _e : 0);
    if (r === 0) (n !== null && no(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && no(n), t === 1))
        (e.tag === 0 ? lf(ha.bind(null, e)) : es(ha.bind(null, e)),
          ef(function () {
            ($ & 6) === 0 && Dt();
          }),
          (n = null));
      else {
        switch (io(r)) {
          case 1:
            n = Kl;
            break;
          case 4:
            n = ro;
            break;
          case 16:
            n = Cr;
            break;
          case 536870912:
            n = lo;
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
    if (((wl = -1), (kl = 0), ($ & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = Lr(e, e === Se ? _e : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = $;
      $ |= 2;
      var u = ya();
      (Se !== e || _e !== t) && ((Nt = null), (jn = de() + 500), un(e, t));
      do
        try {
          Nf();
          break;
        } catch (o) {
          va(e, o);
        }
      while (!0);
      (Tu(), (ml.current = u), ($ = l), he !== null ? (t = 0) : ((Se = null), (_e = 0), (t = ge)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = mi(e, l)))), t === 1))
        throw ((n = hr), un(e, 0), Wt(e, r), $e(e, de()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !_f(l) &&
            ((t = Sl(e, r)),
            t === 2 && ((u = Yl(e)), u !== 0 && ((r = u), (t = mi(e, u)))),
            t === 1))
        )
          throw ((n = hr), un(e, 0), Wt(e, r), $e(e, de()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            on(e, Ve, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = fi + 500 - de()), 10 < t))) {
              if (Lr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Oe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ku(on.bind(null, e, Ve, Nt), t);
              break;
            }
            on(e, Ve, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - lt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = de() - r),
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
                            : 1960 * Ef(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ku(on.bind(null, e, Ve, Nt), r);
              break;
            }
            on(e, Ve, Nt);
            break;
          case 5:
            on(e, Ve, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return ($e(e, de()), e.callbackNode === n ? ma.bind(null, e) : null);
  }
  function mi(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = Sl(e, t)),
      e !== 2 && ((t = Ve), (Ve = n), t !== null && hi(t)),
      e
    );
  }
  function hi(e) {
    Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
  }
  function _f(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!ut(u(), l)) return !1;
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
      t &= ~ci, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - lt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ha(e) {
    if (($ & 6) !== 0) throw Error(m(327));
    On();
    var t = Lr(e, 0);
    if ((t & 1) === 0) return ($e(e, de()), null);
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = mi(e, r)));
    }
    if (n === 1) throw ((n = hr), un(e, 0), Wt(e, t), $e(e, de()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      on(e, Ve, Nt),
      $e(e, de()),
      null
    );
  }
  function vi(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      (($ = n), $ === 0 && ((jn = de() + 500), Gr && Dt()));
    }
  }
  function ln(e) {
    Ht !== null && Ht.tag === 0 && ($ & 6) === 0 && On();
    var t = $;
    $ |= 1;
    var n = et.transition,
      r = G;
    try {
      if (((et.transition = null), (G = 1), e)) return e();
    } finally {
      ((G = r), (et.transition = n), ($ = t), ($ & 6) === 0 && Dt());
    }
  }
  function yi() {
    ((Ge = Tn.current), ne(Tn));
  }
  function un(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), bc(n)), he !== null))
      for (n = he.return; n !== null;) {
        var r = n;
        switch ((Nu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (zn(), ne(De), ne(Ne), Au());
            break;
          case 5:
            Du(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            ne(ue);
            break;
          case 19:
            ne(ue);
            break;
          case 10:
            ju(r.type._context);
            break;
          case 22:
          case 23:
            yi();
        }
        n = n.return;
      }
    if (
      ((Se = e),
      (he = e = Qt(e.current, null)),
      (_e = Ge = t),
      (ge = 0),
      (hr = null),
      (ci = hl = rn = 0),
      (Ve = vr = null),
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
  function va(e, t) {
    do {
      var n = he;
      try {
        if ((Tu(), (ll.current = sl), ul)) {
          for (var r = ie.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((nn = 0),
          (ke = ye = ie = null),
          (ar = !1),
          (cr = 0),
          (ai.current = null),
          n === null || n.return === null)
        ) {
          ((ge = 1), (hr = t), (he = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = _e),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = o,
              w = y.tag;
            if ((y.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var E = $s(i);
            if (E !== null) {
              ((E.flags &= -257), Hs(E, i, o, u, t), E.mode & 1 && Vs(u, p, t), (t = E), (s = p));
              var P = t.updateQueue;
              if (P === null) {
                var L = new Set();
                (L.add(s), (t.updateQueue = L));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Vs(u, p, t), gi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (le && o.mode & 1) {
            var pe = $s(i);
            if (pe !== null) {
              ((pe.flags & 65536) === 0 && (pe.flags |= 256), Hs(pe, i, o, u, t), Lu(Ln(s, o)));
              break e;
            }
          }
          ((u = s = Ln(s, o)),
            ge !== 4 && (ge = 2),
            vr === null ? (vr = [u]) : vr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Us(u, s, t);
                fs(u, f);
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
                      ($t === null || !$t.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var k = As(u, o, t);
                  fs(u, k);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        wa(n);
      } catch (R) {
        ((t = R), he === n && n !== null && (he = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function gi() {
    ((ge === 0 || ge === 3 || ge === 2) && (ge = 4),
      Se === null || ((rn & 268435455) === 0 && (hl & 268435455) === 0) || Wt(Se, _e));
  }
  function Sl(e, t) {
    var n = $;
    $ |= 2;
    var r = ya();
    (Se !== e || _e !== t) && ((Nt = null), un(e, t));
    do
      try {
        Cf();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if ((Tu(), ($ = n), (ml.current = r), he !== null)) throw Error(m(261));
    return ((Se = null), (_e = 0), ge);
  }
  function Cf() {
    for (; he !== null;) ga(he);
  }
  function Nf() {
    for (; he !== null && !Za();) ga(he);
  }
  function ga(e) {
    var t = xa(e.alternate, e, Ge);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (he = t), (ai.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = gf(n, t, Ge)), n !== null)) {
          he = n;
          return;
        }
      } else {
        if (((n = wf(n, t)), n !== null)) {
          ((n.flags &= 32767), (he = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((ge = 6), (he = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        he = t;
        return;
      }
      he = t = e;
    } while (t !== null);
    ge === 0 && (ge = 5);
  }
  function on(e, t, n) {
    var r = G,
      l = et.transition;
    try {
      ((et.transition = null), (G = 1), Pf(e, t, n, r));
    } finally {
      ((et.transition = l), (G = r));
    }
    return null;
  }
  function Pf(e, t, n, r) {
    do On();
    while (Ht !== null);
    if (($ & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (ic(e, u),
      e === Se && ((he = Se = null), (_e = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        Ea(Cr, function () {
          return (On(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = et.transition), (et.transition = null));
      var i = G;
      G = 1;
      var o = $;
      (($ |= 4),
        (ai.current = null),
        Sf(e, n),
        aa(n, e),
        Kc(gu),
        (jr = !!yu),
        (gu = yu = null),
        (e.current = n),
        xf(n),
        Ja(),
        ($ = o),
        (G = i),
        (et.transition = u));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Ht = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && ($t = null),
      ec(n.stateNode),
      $e(e, de()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = di), (di = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && On(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === pi ? yr++ : ((yr = 0), (pi = e))) : (yr = 0),
      Dt(),
      null
    );
  }
  function On() {
    if (Ht !== null) {
      var e = io(gl),
        t = et.transition,
        n = G;
      try {
        if (((et.transition = null), (G = 16 > e ? 16 : e), Ht === null)) var r = !1;
        else {
          if (((e = Ht), (Ht = null), (gl = 0), ($ & 6) !== 0)) throw Error(m(331));
          var l = $;
          for ($ |= 4, C = e.current; C !== null;) {
            var u = C,
              i = u.child;
            if ((C.flags & 16) !== 0) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (C = p; C !== null;) {
                    var y = C;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, y, u);
                    }
                    var w = y.child;
                    if (w !== null) ((w.return = y), (C = w));
                    else
                      for (; C !== null;) {
                        y = C;
                        var h = y.sibling,
                          E = y.return;
                        if ((la(y), y === p)) {
                          C = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = E), (C = h));
                          break;
                        }
                        C = E;
                      }
                  }
                }
                var P = u.alternate;
                if (P !== null) {
                  var L = P.child;
                  if (L !== null) {
                    P.child = null;
                    do {
                      var pe = L.sibling;
                      ((L.sibling = null), (L = pe));
                    } while (L !== null);
                  }
                }
                C = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && i !== null) ((i.return = u), (C = i));
            else
              e: for (; C !== null;) {
                if (((u = C), (u.flags & 2048) !== 0))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  ((f.return = u.return), (C = f));
                  break e;
                }
                C = u.return;
              }
          }
          var a = e.current;
          for (C = a; C !== null;) {
            i = C;
            var d = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = i), (C = d));
            else
              e: for (i = a; C !== null;) {
                if (((o = C), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pl(9, o);
                    }
                  } catch (R) {
                    se(o, o.return, R);
                  }
                if (o === i) {
                  C = null;
                  break e;
                }
                var k = o.sibling;
                if (k !== null) {
                  ((k.return = o.return), (C = k));
                  break e;
                }
                C = o.return;
              }
          }
          if ((($ = l), Dt(), pt && typeof pt.onPostCommitFiberRoot == "function"))
            try {
              pt.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((G = n), (et.transition = t));
      }
    }
    return !1;
  }
  function ka(e, t, n) {
    ((t = Ln(n, t)),
      (t = Us(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Oe()),
      e !== null && ($n(e, 1, t), $e(e, t)));
  }
  function se(e, t, n) {
    if (e.tag === 3) ka(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          ka(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Oe()),
              t !== null && ($n(t, 1, e), $e(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function zf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Oe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Se === e &&
        (_e & n) === n &&
        (ge === 4 || (ge === 3 && (_e & 130023424) === _e && 500 > de() - fi)
          ? un(e, 0)
          : (ci |= n)),
      $e(e, t));
  }
  function Sa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = zr), (zr <<= 1), (zr & 130023424) === 0 && (zr = 4194304)));
    var n = Oe();
    ((e = Et(e, t)), e !== null && ($n(e, t, n), $e(e, n)));
  }
  function Lf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Sa(e, n));
  }
  function Rf(e, t) {
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
  var xa;
  xa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || De.current) Ae = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Ae = !1), yf(e, t, n));
        Ae = (e.flags & 131072) !== 0;
      }
    else ((Ae = !1), le && (t.flags & 1048576) !== 0 && ts(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = Sn(t, Ne.current);
        (Pn(t, n), (l = Hu(null, t, r, e, l, n)));
        var u = Bu();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ue(r) ? ((u = !0), Yr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Fu(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xu(t, r, e, n),
              (t = bu(null, t, r, !0, u, n)))
            : ((t.tag = 0), le && u && Cu(t), je(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (fl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = jf(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = qu(null, t, r, e, n);
              break e;
            case 1:
              t = Gs(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Ws(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          qu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Gs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Xs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            cs(e, t),
            nl(t, r, null, n));
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
              ((l = Ln(Error(m(423)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(m(424)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else
              for (
                Ye = Mt(t.stateNode.containerInfo.firstChild),
                  Ke = t,
                  le = !0,
                  it = null,
                  n = ss(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_n(), r === l)) {
              t = Ct(e, t, n);
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
          e === null && zu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          wu(r, l) ? (i = null) : u !== null && wu(r, u) && (t.flags |= 32),
          Ys(e, t),
          je(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && zu(t), null);
      case 13:
        return Js(e, t, n);
      case 4:
        return (
          Iu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Bs(e, t, r, l, n)
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
            (u = t.memoizedProps),
            (i = l.value),
            ee(br, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (ut(u.value, i)) {
              if (u.children === l.children && !De.current) {
                t = Ct(e, t, n);
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
                        ((s = _t(-1, n & -n)), (s.tag = 2));
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
          (je(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Pn(t, n),
          (l = qe(l)),
          (r = r(l)),
          (t.flags |= 1),
          je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ot(r, t.pendingProps)), (l = ot(r.type, l)), Ws(e, t, r, l, n));
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          fl(e, t),
          (t.tag = 1),
          Ue(r) ? ((e = !0), Yr(t)) : (e = !1),
          Pn(t, n),
          Is(t, r, l),
          Xu(t, r, l, n),
          bu(null, t, r, !0, e, n)
        );
      case 19:
        return bs(e, t, n);
      case 22:
        return Ks(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Ea(e, t) {
    return to(e, t);
  }
  function Tf(e, t, n, r) {
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
  function tt(e, t, n, r) {
    return new Tf(e, t, n, r);
  }
  function wi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function jf(e) {
    if (typeof e == "function") return wi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ft)) return 11;
      if (e === dt) return 14;
    }
    return 2;
  }
  function Qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = tt(e.tag, t, e.key, e.mode)),
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
    if (((r = e), typeof e == "function")) wi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Fe:
          return sn(n.children, l, u, t);
        case Xe:
          ((i = 8), (l |= 8));
          break;
        case Pt:
          return ((e = tt(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = u), e);
        case Be:
          return ((e = tt(13, n, t, l)), (e.elementType = Be), (e.lanes = u), e);
        case rt:
          return ((e = tt(19, n, t, l)), (e.elementType = rt), (e.lanes = u), e);
        case oe:
          return El(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                i = 10;
                break e;
              case Gt:
                i = 9;
                break e;
              case ft:
                i = 11;
                break e;
              case dt:
                i = 14;
                break e;
              case Ie:
                ((i = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
  }
  function sn(e, t, n, r) {
    return ((e = tt(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = tt(22, e, r, t)),
      (e.elementType = oe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ki(e, t, n) {
    return ((e = tt(6, e, null, t)), (e.lanes = n), e);
  }
  function Si(e, t, n) {
    return (
      (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Of(e, t, n, r, l) {
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
  function xi(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Of(e, t, n, o, s)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = tt(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fu(u),
      e
    );
  }
  function Mf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Te,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function _a(e) {
    if (!e) return It;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ue(t.type)) {
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
      if (Ue(n)) return qo(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, u, i, o, s) {
    return (
      (e = xi(n, r, !0, e, l, u, i, o, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = Oe()),
      (l = Bt(n)),
      (u = _t(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      $n(e, l, r),
      $e(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      u = Oe(),
      i = Bt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (ct(e, l, i, u), tl(e, l, i)),
      i
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
  function Na(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ei(e, t) {
    (Na(e, t), (e = e.alternate) && Na(e, t));
  }
  function Ff() {
    return null;
  }
  var Pa =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _i(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = _i.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (Nl.prototype.unmount = _i.prototype.unmount =
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
  function Nl(e) {
    this._internalRoot = e;
  }
  Nl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ao();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
      (Tt.splice(n, 0, e), n === 0 && po(e));
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
  function za() {}
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = Cl(i);
          u.call(p);
        };
      }
      var i = Ca(t, r, e, 0, null, !1, !1, "", za);
      return (
        (e._reactRootContainer = i),
        (e[wt] = i.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        ln(),
        i
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = Cl(s);
        o.call(p);
      };
    }
    var s = xi(e, 0, !1, null, null, !1, !1, "", za);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      ln(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function zl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Cl(i);
          o.call(s);
        };
      }
      _l(t, i, e, l);
    } else i = If(n, t, e, l, r);
    return Cl(i);
  }
  ((oo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), $e(t, de()), ($ & 6) === 0 && ((jn = de() + 500), Dt()));
        }
        break;
      case 13:
        (ln(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = Oe();
            ct(r, e, 1, l);
          }
        }),
          Ei(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Oe();
          ct(t, e, 134217728, n);
        }
        Ei(e, 134217728);
      }
    }),
    (so = function (e) {
      if (e.tag === 13) {
        var t = Bt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Oe();
          ct(n, e, t, r);
        }
        Ei(e, t);
      }
    }),
    (ao = function () {
      return G;
    }),
    (co = function (e, t) {
      var n = G;
      try {
        return ((G = e), t());
      } finally {
        G = n;
      }
    }),
    (Hl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = Qr(r);
                if (!l) throw Error(m(90));
                (Mi(r), Ml(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ai(e, n);
          break;
        case "select":
          ((t = n.value), t != null && an(e, !!n.multiple, t, !1));
      }
    }),
    (Gi = vi),
    (Xi = ln));
  var Df = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, Ki, Yi, vi] },
    gr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Uf = {
      bundleType: gr.bundleType,
      version: gr.version,
      rendererPackageName: gr.rendererPackageName,
      rendererConfig: gr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ce.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = bi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Ff,
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
        ((Nr = Ll.inject(Uf)), (pt = Ll));
      } catch {}
  }
  return (
    (He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Df),
    (He.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ci(t)) throw Error(m(200));
      return Mf(e, t, null, n);
    }),
    (He.createRoot = function (e, t) {
      if (!Ci(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Pa;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = xi(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new _i(t)
      );
    }),
    (He.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = bi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (He.flushSync = function (e) {
      return ln(e);
    }),
    (He.hydrate = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !0, n);
    }),
    (He.hydrateRoot = function (e, t, n) {
      if (!Ci(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Pa;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, u, i)),
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
      return new Nl(t);
    }),
    (He.render = function (e, t, n) {
      if (!Pl(t)) throw Error(m(200));
      return zl(null, e, t, !1, n);
    }),
    (He.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (ln(function () {
            zl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (He.unstable_batchedUpdates = vi),
    (He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Pl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return zl(e, t, n, !1, r);
    }),
    (He.version = "18.3.1-next-f1338f8080-20240426"),
    He
  );
}
var Ia;
function Kf() {
  if (Ia) return zi.exports;
  Ia = 1;
  function g() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g);
      } catch (S) {
        console.error(S);
      }
  }
  return (g(), (zi.exports = Qf()), zi.exports);
}
var Da;
function Yf() {
  if (Da) return Rl;
  Da = 1;
  var g = Kf();
  return ((Rl.createRoot = g.createRoot), (Rl.hydrateRoot = g.hydrateRoot), Rl);
}
var Gf = Yf();
function Aa(g) {
  return `#${g}`;
}
function Va(g) {
  const S = g.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Xf(g) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function $a(g, S = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(g);
  return m ? (m.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function Zf(g, S = "smooth") {
  if (typeof window > "u") return;
  const m = Aa(g);
  if ($a(g, S)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function Jf(g) {
  typeof window > "u" || (window.location.hash = Va(g));
}
function qf(g) {
  return g.kind === "route" ? Va(g.path) : Aa(g.id);
}
function bf(g, S) {
  if ((g.preventDefault(), S.kind === "route")) {
    Jf(S.path);
    return;
  }
  Zf(S.id);
}
function ed() {
  if (typeof window > "u") return;
  const g = Xf();
  (g == null ? void 0 : g.kind) === "section" && requestAnimationFrame(() => $a(g.id, "auto"));
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = (g) => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ha = (...g) =>
    g
      .filter((S, m, V) => !!S && S.trim() !== "" && V.indexOf(S) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var nd = {
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
 */ const rd = ve.forwardRef(
  (
    {
      color: g = "currentColor",
      size: S = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: V,
      className: z = "",
      children: M,
      iconNode: J,
      ...q
    },
    I,
  ) =>
    ve.createElement(
      "svg",
      {
        ref: I,
        ...nd,
        width: S,
        height: S,
        stroke: g,
        strokeWidth: V ? (Number(m) * 24) / Number(S) : m,
        className: Ha("lucide", z),
        ...q,
      },
      [...J.map(([me, ae]) => ve.createElement(me, ae)), ...(Array.isArray(M) ? M : [M])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oi = (g, S) => {
  const m = ve.forwardRef(({ className: V, ...z }, M) =>
    ve.createElement(rd, { ref: M, iconNode: S, className: Ha(`lucide-${td(g)}`, V), ...z }),
  );
  return ((m.displayName = `${g}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = Oi("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = Oi("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = Oi("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Yt({ target: g, children: S, className: m, onClick: V, ...z }) {
  return _.jsx("a", {
    href: qf(g),
    className: m,
    onClick: (M) => {
      (bf(M, g), V == null || V(M));
    },
    ...z,
    children: S,
  });
}
const od =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260512_012043_9764f2d0-5c6e-4faa-94a6-a8253df08c5e.png&w=1280&q=85",
  sd =
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260512_012949_6b24738e-6e5f-4b6f-93d7-5772f4d32285.png&w=1280&q=85",
  Ti = 260,
  Tl = 48,
  Ua = [
    { label: "Device", section: "device" },
    { label: "Real Stories", section: "real-stories" },
    { label: "Science", section: "science" },
    { label: "Plans", section: "plans" },
    { label: "Reach Us", section: "contact" },
  ];
function ad({ offset: g }) {
  return _.jsxs("svg", {
    className: "pointer-events-none absolute inset-0 z-0 h-full w-full",
    style: { opacity: 0.1 },
    "aria-hidden": !0,
    children: [
      _.jsx("defs", {
        children: _.jsx("pattern", {
          id: "grid",
          width: Tl,
          height: Tl,
          patternUnits: "userSpaceOnUse",
          x: g.x,
          y: g.y,
          children: _.jsx("path", {
            d: `M ${Tl} 0 L 0 0 0 ${Tl}`,
            fill: "none",
            stroke: "#64748b",
            strokeWidth: "0.6",
          }),
        }),
      }),
      _.jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" }),
    ],
  });
}
function cd() {
  return _.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 256 256",
    fill: "none",
    "aria-hidden": !0,
    children: _.jsx("path", {
      d: "M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 96 95 L 63.5 128 L 64 128 L 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 64 L 64 0 L 192 0 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z",
      fill: "#111111",
    }),
  });
}
function fd({ onNavigate: g }) {
  const [S, m] = ve.useState(!1),
    V = () => {
      (m(!1), g == null || g());
    };
  return _.jsxs(_.Fragment, {
    children: [
      _.jsxs("nav", {
        className:
          "fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5",
        children: [
          _.jsx("div", {
            className: "flex items-center",
            children: _.jsx(Yt, {
              target: { kind: "section", id: "device" },
              className: "flex items-center",
              "aria-label": "PureFlow One home",
              onClick: V,
              children: _.jsx(cd, {}),
            }),
          }),
          _.jsx("div", {
            className:
              "absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-gray-900 px-2 py-1.5 md:flex",
            children: Ua.map((z) =>
              z.section === "device"
                ? _.jsx(
                    "span",
                    {
                      className:
                        "rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900",
                      "data-editable": !0,
                      children: z.label,
                    },
                    z.label,
                  )
                : _.jsx(
                    Yt,
                    {
                      target: { kind: "section", id: z.section },
                      className:
                        "rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-white",
                      "data-editable": !0,
                      children: z.label,
                    },
                    z.label,
                  ),
            ),
          }),
          _.jsxs(Yt, {
            target: { kind: "section", id: "contact" },
            className:
              "hidden items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 md:flex",
            "data-editable": !0,
            children: [
              _.jsx("span", {
                className: "inline-block h-2 w-2 rounded-full bg-green-400",
                "aria-hidden": !0,
              }),
              "Reserve Yours",
            ],
          }),
          _.jsx("button", {
            type: "button",
            className: "p-1 text-gray-900 md:hidden",
            onClick: () => m((z) => !z),
            "aria-label": S ? "Close menu" : "Open menu",
            "aria-expanded": S,
            children: S ? _.jsx(id, { size: 22 }) : _.jsx(ld, { size: 22 }),
          }),
        ],
      }),
      S &&
        _.jsxs("div", {
          className:
            "fixed left-0 right-0 top-0 z-40 flex flex-col gap-1 bg-white px-5 pb-6 pt-16 shadow-lg md:hidden",
          children: [
            Ua.map((z) =>
              _.jsx(
                Yt,
                {
                  target: { kind: "section", id: z.section },
                  className:
                    "border-b border-gray-100 py-3 text-left text-base font-medium text-gray-800 transition-colors hover:text-gray-500",
                  "data-editable": !0,
                  onClick: V,
                  children: z.label,
                },
                z.label,
              ),
            ),
            _.jsxs(Yt, {
              target: { kind: "section", id: "contact" },
              className:
                "mt-4 flex items-center justify-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700",
              "data-editable": !0,
              onClick: V,
              children: [
                _.jsx("span", {
                  className: "inline-block h-2 w-2 rounded-full bg-green-400",
                  "aria-hidden": !0,
                }),
                "Reserve Yours",
              ],
            }),
          ],
        }),
    ],
  });
}
function jl({ id: g, eyebrow: S, title: m, children: V }) {
  return _.jsx("section", {
    id: g,
    className: "scroll-mt-24 border-t border-slate-200 bg-white px-6 py-20 md:px-12 md:py-28",
    children: _.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        _.jsx("p", {
          className: "text-xs uppercase tracking-[0.2em] text-slate-500",
          "data-editable": !0,
          children: S,
        }),
        _.jsx("h2", {
          className: "mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl",
          "data-editable": !0,
          children: m,
        }),
        _.jsx("div", { className: "mt-8", children: V }),
      ],
    }),
  });
}
function dd() {
  return _.jsxs(_.Fragment, {
    children: [
      _.jsx(jl, {
        id: "real-stories",
        eyebrow: "Real Stories",
        title: "Everyday air, elevated",
        children: _.jsx("p", {
          className: "max-w-2xl text-base leading-relaxed text-slate-600",
          "data-editable": !0,
          children:
            "From studio apartments to cross-country flights, PureFlow One adapts to your rhythm—quiet filtration, all-day comfort, and a design that disappears into your space.",
        }),
      }),
      _.jsx(jl, {
        id: "science",
        eyebrow: "Science",
        title: "HEPA-grade filtration, whisper quiet",
        children: _.jsx("p", {
          className: "max-w-2xl text-base leading-relaxed text-slate-600",
          "data-editable": !0,
          children:
            "Multi-stage capture removes fine particles while maintaining low turbulence. Independent lab tests show consistent performance across temperature and humidity ranges.",
        }),
      }),
      _.jsx(jl, {
        id: "plans",
        eyebrow: "Plans",
        title: "Choose your flow",
        children: _.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: [
            { name: "Solo", price: "$149", desc: "Desk and bedside coverage." },
            { name: "Home", price: "$279", desc: "Whole-room purification." },
            { name: "Travel", price: "$199", desc: "Compact carry case included." },
          ].map((g) =>
            _.jsxs(
              "div",
              {
                className: "rounded-2xl border border-slate-200 bg-slate-50 p-6",
                children: [
                  _.jsx("h3", {
                    className: "text-lg font-medium text-slate-900",
                    "data-editable": !0,
                    children: g.name,
                  }),
                  _.jsx("p", {
                    className: "mt-2 text-2xl font-semibold text-slate-900",
                    "data-editable": !0,
                    children: g.price,
                  }),
                  _.jsx("p", {
                    className: "mt-2 text-sm text-slate-600",
                    "data-editable": !0,
                    children: g.desc,
                  }),
                ],
              },
              g.name,
            ),
          ),
        }),
      }),
      _.jsxs(jl, {
        id: "contact",
        eyebrow: "Reach Us",
        title: "Reserve yours today",
        children: [
          _.jsx("p", {
            className: "max-w-2xl text-base leading-relaxed text-slate-600",
            "data-editable": !0,
            children:
              "hello@pureflow.one · Ships in 3–5 business days. 30-day satisfaction guarantee.",
          }),
          _.jsx(Yt, {
            target: { kind: "section", id: "device" },
            className:
              "mt-6 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700",
            "data-editable": !0,
            children: "Back to device",
          }),
        ],
      }),
    ],
  });
}
function pd({ cursorPos: g }) {
  const S = ve.useRef(null),
    [m, V] = ve.useState("");
  return (
    ve.useEffect(() => {
      const z = S.current;
      if (!z) return;
      const M = () => {
        ((z.width = window.innerWidth), (z.height = window.innerHeight));
      };
      return (
        M(),
        window.addEventListener("resize", M),
        () => window.removeEventListener("resize", M)
      );
    }, []),
    ve.useEffect(() => {
      const z = S.current;
      if (!z) return;
      const M = z.getContext("2d");
      if (!M) return;
      const { x: J, y: q } = g;
      M.clearRect(0, 0, z.width, z.height);
      const I = M.createRadialGradient(J, q, 0, J, q, Ti);
      (I.addColorStop(0, "rgba(255,255,255,1)"),
        I.addColorStop(0.4, "rgba(255,255,255,1)"),
        I.addColorStop(0.6, "rgba(255,255,255,0.75)"),
        I.addColorStop(0.75, "rgba(255,255,255,0.4)"),
        I.addColorStop(0.88, "rgba(255,255,255,0.12)"),
        I.addColorStop(1, "rgba(255,255,255,0)"),
        M.beginPath(),
        M.arc(J, q, Ti, 0, Math.PI * 2),
        (M.fillStyle = I),
        M.fill(),
        V(z.toDataURL()));
    }, [g]),
    _.jsxs(_.Fragment, {
      children: [
        _.jsx("canvas", { ref: S, className: "hidden", "aria-hidden": !0 }),
        _.jsx("div", {
          className: "pointer-events-none absolute inset-0 z-30 bg-center bg-cover bg-no-repeat",
          style: {
            backgroundImage: `url('${sd}')`,
            WebkitMaskImage: m ? `url(${m})` : void 0,
            maskImage: m ? `url(${m})` : void 0,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          },
        }),
      ],
    })
  );
}
function md() {
  if (typeof window > "u") return !1;
  try {
    return new URLSearchParams(window.location.search).get("draftlyGallery") === "1";
  } catch {
    return !1;
  }
}
function hd(g) {
  const S = ve.useRef({
      x: typeof window < "u" ? window.innerWidth / 2 : 0,
      y: typeof window < "u" ? window.innerHeight / 2 : 0,
    }),
    m = ve.useRef({ ...S.current }),
    V = ve.useRef({ x: 0, y: 0 }),
    z = ve.useRef(0),
    [M, J] = ve.useState({ ...m.current }),
    [q, I] = ve.useState({ x: 0, y: 0 });
  return (
    ve.useEffect(() => {
      const me = md(),
        ae = (we) => {
          me || (S.current = { x: we.clientX, y: we.clientY });
        };
      window.addEventListener("mousemove", ae);
      let X = 0;
      const Z = () => {
        var K;
        if (me) {
          z.current += 0.018;
          const Me = window.innerWidth,
            Re = window.innerHeight,
            fe = z.current;
          S.current = {
            x: Me * 0.5 + Math.cos(fe) * Me * 0.22,
            y: Re * 0.5 + Math.sin(fe * 0.85) * Re * 0.18,
          };
        }
        const we = S.current,
          ce = m.current;
        ((ce.x += (we.x - ce.x) * 0.1), (ce.y += (we.y - ce.y) * 0.1));
        const H = (K = g.current) == null ? void 0 : K.getBoundingClientRect();
        if (H && H.width > 0 && H.height > 0) {
          const Me = (ce.x - H.left) / H.width - 0.5,
            Re = (ce.y - H.top) / H.height - 0.5,
            fe = V.current;
          ((fe.x += (Me * 16 - fe.x) * 0.06),
            (fe.y += (Re * 16 - fe.y) * 0.06),
            I({ x: fe.x, y: fe.y }));
        }
        (J({ x: ce.x, y: ce.y }), (X = requestAnimationFrame(Z)));
      };
      return (
        (X = requestAnimationFrame(Z)),
        () => {
          (window.removeEventListener("mousemove", ae), cancelAnimationFrame(X));
        }
      );
    }, [g]),
    { cursorPos: M, gridOffset: q, spotlightRadius: Ti }
  );
}
function vd() {
  const g = ve.useRef(null),
    { cursorPos: S, gridOffset: m } = hd(g);
  return _.jsxs("div", {
    className: "min-h-screen bg-white",
    style: { fontFamily: "Inter, sans-serif" },
    children: [
      _.jsx(fd, {}),
      _.jsxs("section", {
        id: "device",
        ref: g,
        className: "relative w-full overflow-hidden",
        style: { height: "100vh" },
        children: [
          _.jsx(ad, { offset: m }),
          _.jsx("div", {
            className: "absolute inset-0 z-10 bg-cover bg-center bg-no-repeat",
            style: { backgroundImage: `url('${od}')` },
            "aria-hidden": !0,
          }),
          _.jsx(pd, { cursorPos: S }),
          _.jsxs("div", {
            className:
              "absolute bottom-12 left-5 z-50 max-w-[260px] sm:bottom-12 sm:left-8 sm:max-w-xs md:bottom-56 md:left-12",
            children: [
              _.jsx("p", {
                className:
                  "mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:mb-3 sm:text-[11px]",
                "data-editable": !0,
                children: "PureFlow One",
              }),
              _.jsxs("h1", {
                className:
                  "mb-4 text-2xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl",
                "data-editable": !0,
                children: ["Clean Air, Clear", _.jsx("br", {}), "Mind. Anywhere."],
              }),
              _.jsxs("div", {
                className: "flex items-center gap-3 sm:gap-4",
                children: [
                  _.jsx(Yt, {
                    target: { kind: "section", id: "science" },
                    className:
                      "rounded-full bg-gray-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-gray-700 sm:px-6 sm:py-2.5 sm:text-sm",
                    "data-editable": !0,
                    children: "Discover",
                  }),
                  _.jsxs(Yt, {
                    target: { kind: "section", id: "plans" },
                    className:
                      "flex items-center gap-2 text-xs font-medium text-gray-700 transition-colors hover:text-gray-900 sm:text-sm",
                    "data-editable": !0,
                    children: [_.jsx(ud, { size: 12, className: "fill-gray-700" }), "View Specs"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      _.jsx(dd, {}),
    ],
  });
}
function yd() {
  return (
    ve.useEffect(() => {
      ed();
    }, []),
    _.jsx(vd, {})
  );
}
Gf.createRoot(document.getElementById("root")).render(
  _.jsx(ve.StrictMode, { children: _.jsx(yd, {}) }),
);
