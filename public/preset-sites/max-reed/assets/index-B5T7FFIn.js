(function () {
  const j = document.createElement("link").relList;
  if (j && j.supports && j.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) G(F);
  new MutationObserver((F) => {
    for (const B of F)
      if (B.type === "childList")
        for (const ae of B.addedNodes) ae.tagName === "LINK" && ae.rel === "modulepreload" && G(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(F) {
    const B = {};
    return (
      F.integrity && (B.integrity = F.integrity),
      F.referrerPolicy && (B.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : F.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function G(F) {
    if (F.ep) return;
    F.ep = !0;
    const B = m(F);
    fetch(F.href, B);
  }
})();
var _i = { exports: {} },
  wr = {},
  Ni = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Uf() {
  if (ja) return I;
  ja = 1;
  var k = Symbol.for("react.element"),
    j = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    G = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    ae = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function J(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ne && c[ne]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var $e = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    b = {};
  function K(c, v, O) {
    ((this.props = c), (this.context = v), (this.refs = b), (this.updater = O || $e));
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
  function yt() {}
  yt.prototype = K.prototype;
  function at(c, v, O) {
    ((this.props = c), (this.context = v), (this.refs = b), (this.updater = O || $e));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), Qe(be, K.prototype), (be.isPureReactComponent = !0));
  var ke = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Ne = { current: null },
    je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, v, O) {
    var D,
      A = {},
      V = null,
      Y = null;
    if (v != null)
      for (D in (v.ref !== void 0 && (Y = v.ref), v.key !== void 0 && (V = "" + v.key), v))
        et.call(v, D) && !je.hasOwnProperty(D) && (A[D] = v[D]);
    var $ = arguments.length - 2;
    if ($ === 1) A.children = O;
    else if (1 < $) {
      for (var ee = Array($), Ae = 0; Ae < $; Ae++) ee[Ae] = arguments[Ae + 2];
      A.children = ee;
    }
    if (c && c.defaultProps) for (D in (($ = c.defaultProps), $)) A[D] === void 0 && (A[D] = $[D]);
    return { $$typeof: k, type: c, key: V, ref: Y, props: A, _owner: Ne.current };
  }
  function zt(c, v) {
    return { $$typeof: k, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === k;
  }
  function Yt(c) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (O) {
        return v[O];
      })
    );
  }
  var ct = /\/+/g;
  function Ue(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : v.toString(36);
  }
  function tt(c, v, O, D, A) {
    var V = typeof c;
    (V === "undefined" || V === "boolean") && (c = null);
    var Y = !1;
    if (c === null) Y = !0;
    else
      switch (V) {
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case k:
            case j:
              Y = !0;
          }
      }
    if (Y)
      return (
        (Y = c),
        (A = A(Y)),
        (c = D === "" ? "." + Ue(Y, 0) : D),
        ke(A)
          ? ((O = ""),
            c != null && (O = c.replace(ct, "$&/") + "/"),
            tt(A, v, O, "", function (Ae) {
              return Ae;
            }))
          : A != null &&
            (gt(A) &&
              (A = zt(
                A,
                O +
                  (!A.key || (Y && Y.key === A.key) ? "" : ("" + A.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            v.push(A)),
        1
      );
    if (((Y = 0), (D = D === "" ? "." : D + ":"), ke(c)))
      for (var $ = 0; $ < c.length; $++) {
        V = c[$];
        var ee = D + Ue(V, $);
        Y += tt(V, v, O, ee, A);
      }
    else if (((ee = J(c)), typeof ee == "function"))
      for (c = ee.call(c), $ = 0; !(V = c.next()).done;)
        ((V = V.value), (ee = D + Ue(V, $++)), (Y += tt(V, v, O, ee, A)));
    else if (V === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Y;
  }
  function ft(c, v, O) {
    if (c == null) return c;
    var D = [],
      A = 0;
    return (
      tt(c, D, "", "", function (V) {
        return v.call(O, V, A++);
      }),
      D
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var v = c._result;
      ((v = v()),
        v.then(
          function (O) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = O));
          },
          function (O) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = O));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = v)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ue = { current: null },
    S = { transition: null },
    R = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: S, ReactCurrentOwner: Ne };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: ft,
      forEach: function (c, v, O) {
        ft(
          c,
          function () {
            v.apply(this, arguments);
          },
          O,
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
    (I.Component = K),
    (I.Fragment = m),
    (I.Profiler = F),
    (I.PureComponent = at),
    (I.StrictMode = G),
    (I.Suspense = W),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (I.act = _),
    (I.cloneElement = function (c, v, O) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var D = Qe({}, c.props),
        A = c.key,
        V = c.ref,
        Y = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((V = v.ref), (Y = Ne.current)),
          v.key !== void 0 && (A = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var $ = c.type.defaultProps;
        for (ee in v)
          et.call(v, ee) &&
            !je.hasOwnProperty(ee) &&
            (D[ee] = v[ee] === void 0 && $ !== void 0 ? $[ee] : v[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) D.children = O;
      else if (1 < ee) {
        $ = Array(ee);
        for (var Ae = 0; Ae < ee; Ae++) $[Ae] = arguments[Ae + 2];
        D.children = $;
      }
      return { $$typeof: k, type: c.type, key: A, ref: V, props: D, _owner: Y };
    }),
    (I.createContext = function (c) {
      return (
        (c = {
          $$typeof: ae,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: B, _context: c }),
        (c.Consumer = c)
      );
    }),
    (I.createElement = Ke),
    (I.createFactory = function (c) {
      var v = Ke.bind(null, c);
      return ((v.type = c), v);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (I.isValidElement = gt),
    (I.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (I.memo = function (c, v) {
      return { $$typeof: ge, type: c, compare: v === void 0 ? null : v };
    }),
    (I.startTransition = function (c) {
      var v = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = v;
      }
    }),
    (I.unstable_act = _),
    (I.useCallback = function (c, v) {
      return ue.current.useCallback(c, v);
    }),
    (I.useContext = function (c) {
      return ue.current.useContext(c);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (c) {
      return ue.current.useDeferredValue(c);
    }),
    (I.useEffect = function (c, v) {
      return ue.current.useEffect(c, v);
    }),
    (I.useId = function () {
      return ue.current.useId();
    }),
    (I.useImperativeHandle = function (c, v, O) {
      return ue.current.useImperativeHandle(c, v, O);
    }),
    (I.useInsertionEffect = function (c, v) {
      return ue.current.useInsertionEffect(c, v);
    }),
    (I.useLayoutEffect = function (c, v) {
      return ue.current.useLayoutEffect(c, v);
    }),
    (I.useMemo = function (c, v) {
      return ue.current.useMemo(c, v);
    }),
    (I.useReducer = function (c, v, O) {
      return ue.current.useReducer(c, v, O);
    }),
    (I.useRef = function (c) {
      return ue.current.useRef(c);
    }),
    (I.useState = function (c) {
      return ue.current.useState(c);
    }),
    (I.useSyncExternalStore = function (c, v, O) {
      return ue.current.useSyncExternalStore(c, v, O);
    }),
    (I.useTransition = function () {
      return ue.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
var La;
function Mi() {
  return (La || ((La = 1), (Ni.exports = Uf())), Ni.exports);
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
function Af() {
  if (Ta) return wr;
  Ta = 1;
  var k = Mi(),
    j = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    G = Object.prototype.hasOwnProperty,
    F = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, W, ge) {
    var me,
      ne = {},
      J = null,
      $e = null;
    (ge !== void 0 && (J = "" + ge),
      W.key !== void 0 && (J = "" + W.key),
      W.ref !== void 0 && ($e = W.ref));
    for (me in W) G.call(W, me) && !B.hasOwnProperty(me) && (ne[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W)) ne[me] === void 0 && (ne[me] = W[me]);
    return { $$typeof: j, type: ce, key: J, ref: $e, props: ne, _owner: F.current };
  }
  return ((wr.Fragment = m), (wr.jsx = ae), (wr.jsxs = ae), wr);
}
var Ra;
function Vf() {
  return (Ra || ((Ra = 1), (_i.exports = Af())), _i.exports);
}
var x = Vf(),
  Mn = Mi(),
  Ll = {},
  zi = { exports: {} },
  De = {},
  Pi = { exports: {} },
  ji = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Hf() {
  return (
    Ma ||
      ((Ma = 1),
      (function (k) {
        function j(S, R) {
          var _ = S.length;
          S.push(R);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              v = S[c];
            if (0 < F(v, R)) ((S[c] = R), (S[_] = v), (_ = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function G(S) {
          if (S.length === 0) return null;
          var R = S[0],
            _ = S.pop();
          if (_ !== R) {
            S[0] = _;
            e: for (var c = 0, v = S.length, O = v >>> 1; c < O;) {
              var D = 2 * (c + 1) - 1,
                A = S[D],
                V = D + 1,
                Y = S[V];
              if (0 > F(A, _))
                V < v && 0 > F(Y, A)
                  ? ((S[c] = Y), (S[V] = _), (c = V))
                  : ((S[c] = A), (S[D] = _), (c = D));
              else if (V < v && 0 > F(Y, _)) ((S[c] = Y), (S[V] = _), (c = V));
              else break e;
            }
          }
          return R;
        }
        function F(S, R) {
          var _ = S.sortIndex - R.sortIndex;
          return _ !== 0 ? _ : S.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var B = performance;
          k.unstable_now = function () {
            return B.now();
          };
        } else {
          var ae = Date,
            ce = ae.now();
          k.unstable_now = function () {
            return ae.now() - ce;
          };
        }
        var W = [],
          ge = [],
          me = 1,
          ne = null,
          J = 3,
          $e = !1,
          Qe = !1,
          b = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(S) {
          for (var R = m(ge); R !== null;) {
            if (R.callback === null) G(ge);
            else if (R.startTime <= S) (G(ge), (R.sortIndex = R.expirationTime), j(W, R));
            else break;
            R = m(ge);
          }
        }
        function ke(S) {
          if (((b = !1), be(S), !Qe))
            if (m(W) !== null) ((Qe = !0), Le(et));
            else {
              var R = m(ge);
              R !== null && ue(ke, R.startTime - S);
            }
        }
        function et(S, R) {
          ((Qe = !1), b && ((b = !1), yt(Ke), (Ke = -1)), ($e = !0));
          var _ = J;
          try {
            for (be(R), ne = m(W); ne !== null && (!(ne.expirationTime > R) || (S && !Yt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (J = ne.priorityLevel));
                var v = c(ne.expirationTime <= R);
                ((R = k.unstable_now()),
                  typeof v == "function" ? (ne.callback = v) : ne === m(W) && G(W),
                  be(R));
              } else G(W);
              ne = m(W);
            }
            if (ne !== null) var O = !0;
            else {
              var D = m(ge);
              (D !== null && ue(ke, D.startTime - R), (O = !1));
            }
            return O;
          } finally {
            ((ne = null), (J = _), ($e = !1));
          }
        }
        var Ne = !1,
          je = null,
          Ke = -1,
          zt = 5,
          gt = -1;
        function Yt() {
          return !(k.unstable_now() - gt < zt);
        }
        function ct() {
          if (je !== null) {
            var S = k.unstable_now();
            gt = S;
            var R = !0;
            try {
              R = je(!0, S);
            } finally {
              R ? Ue() : ((Ne = !1), (je = null));
            }
          } else Ne = !1;
        }
        var Ue;
        if (typeof at == "function")
          Ue = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Ue = function () {
              ft.postMessage(null);
            }));
        } else
          Ue = function () {
            K(ct, 0);
          };
        function Le(S) {
          ((je = S), Ne || ((Ne = !0), Ue()));
        }
        function ue(S, R) {
          Ke = K(function () {
            S(k.unstable_now());
          }, R);
        }
        ((k.unstable_IdlePriority = 5),
          (k.unstable_ImmediatePriority = 1),
          (k.unstable_LowPriority = 4),
          (k.unstable_NormalPriority = 3),
          (k.unstable_Profiling = null),
          (k.unstable_UserBlockingPriority = 2),
          (k.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (k.unstable_continueExecution = function () {
            Qe || $e || ((Qe = !0), Le(et));
          }),
          (k.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (zt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (k.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (k.unstable_getFirstCallbackNode = function () {
            return m(W);
          }),
          (k.unstable_next = function (S) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = J;
            }
            var _ = J;
            J = R;
            try {
              return S();
            } finally {
              J = _;
            }
          }),
          (k.unstable_pauseExecution = function () {}),
          (k.unstable_requestPaint = function () {}),
          (k.unstable_runWithPriority = function (S, R) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var _ = J;
            J = S;
            try {
              return R();
            } finally {
              J = _;
            }
          }),
          (k.unstable_scheduleCallback = function (S, R, _) {
            var c = k.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
              S)
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
              (v = _ + v),
              (S = {
                id: me++,
                callback: R,
                priorityLevel: S,
                startTime: _,
                expirationTime: v,
                sortIndex: -1,
              }),
              _ > c
                ? ((S.sortIndex = _),
                  j(ge, S),
                  m(W) === null &&
                    S === m(ge) &&
                    (b ? (yt(Ke), (Ke = -1)) : (b = !0), ue(ke, _ - c)))
                : ((S.sortIndex = v), j(W, S), Qe || $e || ((Qe = !0), Le(et))),
              S
            );
          }),
          (k.unstable_shouldYield = Yt),
          (k.unstable_wrapCallback = function (S) {
            var R = J;
            return function () {
              var _ = J;
              J = R;
              try {
                return S.apply(this, arguments);
              } finally {
                J = _;
              }
            };
          }));
      })(ji)),
    ji
  );
}
var Oa;
function Bf() {
  return (Oa || ((Oa = 1), (Pi.exports = Hf())), Pi.exports);
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
function Wf() {
  if (Ia) return De;
  Ia = 1;
  var k = Mi(),
    j = Bf();
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
  var G = new Set(),
    F = {};
  function B(e, t) {
    (ae(e, t), ae(e + "Capture", t));
  }
  function ae(e, t) {
    for (F[e] = t, e = 0; e < t.length; e++) G.add(t[e]);
  }
  var ce = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    W = Object.prototype.hasOwnProperty,
    ge =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    me = {},
    ne = {};
  function J(e) {
    return W.call(ne, e) ? !0 : W.call(me, e) ? !1 : ge.test(e) ? (ne[e] = !0) : ((me[e] = !0), !1);
  }
  function $e(e, t, n, r) {
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
  function Qe(e, t, n, r) {
    if (t === null || typeof t > "u" || $e(e, t, n, r)) return !0;
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
  function b(e, t, n, r, l, u, i) {
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
      K[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      K[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      K[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        K[e] = new b(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      K[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        K[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      K[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = K.hasOwnProperty(t) ? K[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (Qe(t, n, l, r) && (n = null),
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
  var ke = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Ne = Symbol.for("react.portal"),
    je = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    zt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Ue = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ue = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
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
  var O = !1;
  function D(e, t) {
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
      ((O = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function A(e) {
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
        return ((e = D(e.type, !1)), e);
      case 11:
        return ((e = D(e.type.render, !1)), e);
      case 1:
        return ((e = D(e.type, !0)), e);
      default:
        return "";
    }
  }
  function V(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case Ne:
        return "Portal";
      case zt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ue:
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
          return ((t = e.displayName || null), t !== null ? t : V(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return V(e(t));
          } catch {}
      }
    return null;
  }
  function Y(e) {
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
        return V(t);
      case 8:
        return t === Ke ? "StrictMode" : "Mode";
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
  function $(e) {
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
  function Ae(e) {
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
  function xr(e) {
    e._valueTracker || (e._valueTracker = Ae(e));
  }
  function Oi(e) {
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
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ii(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = $(t.value != null ? t.value : n)),
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
  function Ml(e, t) {
    Di(e, t);
    var n = $(t.value),
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
      : t.hasOwnProperty("defaultValue") && Ol(e, t.type, $(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Fi(e, t, n) {
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
  var On = Array.isArray;
  function sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + $(n), t = null, l = 0; l < e.length; l++) {
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
    return _({}, t, {
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
        if (On(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: $(n) };
  }
  function Ai(e, t) {
    var n = $(t.value),
      r = $(t.defaultValue);
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
  function Hi(e) {
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
      ? Hi(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Sr,
    Bi = (function (e) {
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
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Sr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function In(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
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
    Ha = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function (e) {
    Ha.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]));
    });
  });
  function Wi(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function $i(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Wi(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ba = _(
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
  function Fl(e, t) {
    if (t) {
      if (Ba[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Vl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Hl = null,
    an = null,
    cn = null;
  function Qi(e) {
    if ((e = lr(e))) {
      if (typeof Hl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Qr(t)), Hl(e.stateNode, e.type, t));
    }
  }
  function Ki(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Yi() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Qi(e), t)) for (e = 0; e < t.length; e++) Qi(t[e]);
    }
  }
  function Xi(e, t) {
    return e(t);
  }
  function Gi() {}
  var Bl = !1;
  function Zi(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Xi(e, t, n);
    } finally {
      ((Bl = !1), (an !== null || cn !== null) && (Gi(), Yi()));
    }
  }
  function Fn(e, t) {
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
  if (ce)
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
  function Wa(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var An = !1,
    Er = null,
    Cr = !1,
    $l = null,
    $a = {
      onError: function (e) {
        ((An = !0), (Er = e));
      },
    };
  function Qa(e, t, n, r, l, u, i, o, s) {
    ((An = !1), (Er = null), Wa.apply($a, arguments));
  }
  function Ka(e, t, n, r, l, u, i, o, s) {
    if ((Qa.apply(this, arguments), An)) {
      if (An) {
        var p = Er;
        ((An = !1), (Er = null));
      } else throw Error(m(198));
      Cr || ((Cr = !0), ($l = p));
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
  function qi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ji(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Ya(e) {
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
          if (u === n) return (Ji(l), e);
          if (u === r) return (Ji(l), t);
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
    return ((e = Ya(e)), e !== null ? eo(e) : null);
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
  var to = j.unstable_scheduleCallback,
    no = j.unstable_cancelCallback,
    Xa = j.unstable_shouldYield,
    Ga = j.unstable_requestPaint,
    oe = j.unstable_now,
    Za = j.unstable_getCurrentPriorityLevel,
    Ql = j.unstable_ImmediatePriority,
    ro = j.unstable_UserBlockingPriority,
    _r = j.unstable_NormalPriority,
    qa = j.unstable_LowPriority,
    lo = j.unstable_IdlePriority,
    Nr = null,
    dt = null;
  function Ja(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Nr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : tc,
    ba = Math.log,
    ec = Math.LN2;
  function tc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ba(e) / ec) | 0)) | 0);
  }
  var zr = 64,
    Pr = 4194304;
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
  function jr(e, t) {
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
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function nc(e, t) {
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
  function rc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
      0 < u;
    ) {
      var i = 31 - nt(u),
        o = 1 << i,
        s = l[i];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[i] = nc(o, t))
        : s <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
  }
  function Kl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function uo() {
    var e = zr;
    return ((zr <<= 1), (zr & 4194240) === 0 && (zr = 64), e);
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function lc(e, t) {
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
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Q = 0;
  function io(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var oo,
    Gl,
    so,
    ao,
    co,
    Zl = !1,
    Lr = [],
    Pt = null,
    jt = null,
    Lt = null,
    Bn = new Map(),
    Wn = new Map(),
    Tt = [],
    uc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function fo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
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
        Wn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = lr(t)), t !== null && Gl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ic(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((Pt = $n(Pt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((jt = $n(jt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Bn.set(u, $n(Bn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), Wn.set(u, $n(Wn.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function po(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = qi(n)), t !== null)) {
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
      var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Al = r), n.target.dispatchEvent(r), (Al = null));
      } else return ((t = lr(n)), t !== null && Gl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function mo(e, t, n) {
    Tr(e) && n.delete(t);
  }
  function oc() {
    ((Zl = !1),
      Pt !== null && Tr(Pt) && (Pt = null),
      jt !== null && Tr(jt) && (jt = null),
      Lt !== null && Tr(Lt) && (Lt = null),
      Bn.forEach(mo),
      Wn.forEach(mo));
  }
  function Qn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zl || ((Zl = !0), j.unstable_scheduleCallback(j.unstable_NormalPriority, oc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < Lr.length) {
      Qn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Pt !== null && Qn(Pt, e),
        jt !== null && Qn(jt, e),
        Lt !== null && Qn(Lt, e),
        Bn.forEach(t),
        Wn.forEach(t),
        n = 0;
      n < Tt.length;
      n++
    )
      ((r = Tt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null);)
      (po(n), n.blockedOn === null && Tt.shift());
  }
  var fn = ke.ReactCurrentBatchConfig,
    Rr = !0;
  function sc(e, t, n, r) {
    var l = Q,
      u = fn.transition;
    fn.transition = null;
    try {
      ((Q = 1), ql(e, t, n, r));
    } finally {
      ((Q = l), (fn.transition = u));
    }
  }
  function ac(e, t, n, r) {
    var l = Q,
      u = fn.transition;
    fn.transition = null;
    try {
      ((Q = 4), ql(e, t, n, r));
    } finally {
      ((Q = l), (fn.transition = u));
    }
  }
  function ql(e, t, n, r) {
    if (Rr) {
      var l = Jl(e, t, n, r);
      if (l === null) (hu(e, t, r, Mr, n), fo(e, r));
      else if (ic(l, e, t, n, r)) r.stopPropagation();
      else if ((fo(e, r), t & 4 && -1 < uc.indexOf(e))) {
        for (; l !== null;) {
          var u = lr(l);
          if (
            (u !== null && oo(u), (u = Jl(e, t, n, r)), u === null && hu(e, t, r, Mr, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else hu(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Jl(e, t, n, r) {
    if (((Mr = null), (e = Vl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = qi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Mr = e), null);
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
        switch (Za()) {
          case Ql:
            return 1;
          case ro:
            return 4;
          case _r:
          case qa:
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
  var Rt = null,
    bl = null,
    Or = null;
  function vo() {
    if (Or) return Or;
    var e,
      t = bl,
      n = t.length,
      r,
      l = "value" in Rt ? Rt.value : Rt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++);
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
  function Dr() {
    return !0;
  }
  function yo() {
    return !1;
  }
  function Ve(e) {
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
          ? Dr
          : yo),
        (this.isPropagationStopped = yo),
        this
      );
    }
    return (
      _(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      t
    );
  }
  var dn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    eu = Ve(dn),
    Yn = _({}, dn, { view: 0, detail: 0 }),
    cc = Ve(Yn),
    tu,
    nu,
    Xn,
    Fr = _({}, Yn, {
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
          : (e !== Xn &&
              (Xn && e.type === "mousemove"
                ? ((tu = e.screenX - Xn.screenX), (nu = e.screenY - Xn.screenY))
                : (nu = tu = 0),
              (Xn = e)),
            tu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nu;
      },
    }),
    go = Ve(Fr),
    fc = _({}, Fr, { dataTransfer: 0 }),
    dc = Ve(fc),
    pc = _({}, Yn, { relatedTarget: 0 }),
    ru = Ve(pc),
    mc = _({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hc = Ve(mc),
    vc = _({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    yc = Ve(vc),
    gc = _({}, dn, { data: 0 }),
    wo = Ve(gc),
    wc = {
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
    kc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = kc[e]) ? !!t[e] : !1;
  }
  function lu() {
    return Sc;
  }
  var Ec = _({}, Yn, {
      key: function (e) {
        if (e.key) {
          var t = wc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      getModifierState: lu,
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
    Cc = Ve(Ec),
    _c = _({}, Fr, {
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
    xo = Ve(_c),
    Nc = _({}, Yn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lu,
    }),
    zc = Ve(Nc),
    Pc = _({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jc = Ve(Pc),
    Lc = _({}, Fr, {
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
    Tc = Ve(Lc),
    Rc = [9, 13, 27, 32],
    uu = ce && "CompositionEvent" in window,
    Gn = null;
  ce && "documentMode" in document && (Gn = document.documentMode);
  var Mc = ce && "TextEvent" in window && !Gn,
    ko = ce && (!uu || (Gn && 8 < Gn && 11 >= Gn)),
    So = " ",
    Eo = !1;
  function Co(e, t) {
    switch (e) {
      case "keyup":
        return Rc.indexOf(t.keyCode) !== -1;
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
  function _o(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var pn = !1;
  function Oc(e, t) {
    switch (e) {
      case "compositionend":
        return _o(t);
      case "keypress":
        return t.which !== 32 ? null : ((Eo = !0), So);
      case "textInput":
        return ((e = t.data), e === So && Eo ? null : e);
      default:
        return null;
    }
  }
  function Ic(e, t) {
    if (pn)
      return e === "compositionend" || (!uu && Co(e, t))
        ? ((e = vo()), (Or = bl = Rt = null), (pn = !1), e)
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
        return ko && t.locale !== "ko" ? null : t.data;
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
  function No(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dc[e.type] : t === "textarea";
  }
  function zo(e, t, n, r) {
    (Ki(r),
      (t = Br(t, "onChange")),
      0 < t.length &&
        ((n = new eu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Zn = null,
    qn = null;
  function Fc(e) {
    Qo(e, 0);
  }
  function Ur(e) {
    var t = gn(e);
    if (Oi(t)) return e;
  }
  function Uc(e, t) {
    if (e === "change") return t;
  }
  var Po = !1;
  if (ce) {
    var iu;
    if (ce) {
      var ou = "oninput" in document;
      if (!ou) {
        var jo = document.createElement("div");
        (jo.setAttribute("oninput", "return;"), (ou = typeof jo.oninput == "function"));
      }
      iu = ou;
    } else iu = !1;
    Po = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    Zn && (Zn.detachEvent("onpropertychange", To), (qn = Zn = null));
  }
  function To(e) {
    if (e.propertyName === "value" && Ur(qn)) {
      var t = [];
      (zo(t, qn, e, Vl(e)), Zi(Fc, t));
    }
  }
  function Ac(e, t, n) {
    e === "focusin"
      ? (Lo(), (Zn = t), (qn = n), Zn.attachEvent("onpropertychange", To))
      : e === "focusout" && Lo();
  }
  function Vc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(qn);
  }
  function Hc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Bc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Wc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Wc;
  function Jn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!W.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ro(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Mo(e, t) {
    var n = Ro(e);
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
      n = Ro(n);
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
  function $c(e) {
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
            (l = Mo(n, u)));
          var i = Mo(n, r);
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
  var Qc = ce && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    au = null,
    bn = null,
    cu = !1;
  function Do(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    cu ||
      mn == null ||
      mn !== kr(r) ||
      ((r = mn),
      "selectionStart" in r && su(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (bn && Jn(bn, r)) ||
        ((bn = r),
        (r = Br(au, "onSelect")),
        0 < r.length &&
          ((t = new eu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
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
  var hn = {
      animationend: Ar("Animation", "AnimationEnd"),
      animationiteration: Ar("Animation", "AnimationIteration"),
      animationstart: Ar("Animation", "AnimationStart"),
      transitionend: Ar("Transition", "TransitionEnd"),
    },
    fu = {},
    Fo = {};
  ce &&
    ((Fo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Vr(e) {
    if (fu[e]) return fu[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fo) return (fu[e] = t[n]);
    return e;
  }
  var Uo = Vr("animationend"),
    Ao = Vr("animationiteration"),
    Vo = Vr("animationstart"),
    Ho = Vr("transitionend"),
    Bo = new Map(),
    Wo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Mt(e, t) {
    (Bo.set(e, t), B(t, [e]));
  }
  for (var du = 0; du < Wo.length; du++) {
    var pu = Wo[du],
      Kc = pu.toLowerCase(),
      Yc = pu[0].toUpperCase() + pu.slice(1);
    Mt(Kc, "on" + Yc);
  }
  (Mt(Uo, "onAnimationEnd"),
    Mt(Ao, "onAnimationIteration"),
    Mt(Vo, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(Ho, "onTransitionEnd"),
    ae("onMouseEnter", ["mouseout", "mouseover"]),
    ae("onMouseLeave", ["mouseout", "mouseover"]),
    ae("onPointerEnter", ["pointerout", "pointerover"]),
    ae("onPointerLeave", ["pointerout", "pointerover"]),
    B("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    B(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    B("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    B("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    B(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    B(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var er =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Xc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function $o(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ka(r, t, void 0, e), (e.currentTarget = null));
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
            ($o(l, o, p), (u = s));
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
            ($o(l, o, p), (u = s));
          }
      }
    }
    if (Cr) throw ((e = $l), (Cr = !1), ($l = null), e);
  }
  function Z(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ko(t, e, 2, !1), n.add(r));
  }
  function mu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Ko(n, e, r, t));
  }
  var Hr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Hr]) {
      ((e[Hr] = !0),
        G.forEach(function (n) {
          n !== "selectionchange" && (Xc.has(n) || mu(n, !1, e), mu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hr] || ((t[Hr] = !0), mu("selectionchange", !1, t));
    }
  }
  function Ko(e, t, n, r) {
    switch (ho(t)) {
      case 1:
        var l = sc;
        break;
      case 4:
        l = ac;
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
            if (((i = Gt(o)), i === null)) return;
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
        y = Vl(n),
        g = [];
      e: {
        var h = Bo.get(e);
        if (h !== void 0) {
          var E = eu,
            N = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Cc;
              break;
            case "focusin":
              ((N = "focus"), (E = ru));
              break;
            case "focusout":
              ((N = "blur"), (E = ru));
              break;
            case "beforeblur":
            case "afterblur":
              E = ru;
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
              E = dc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = zc;
              break;
            case Uo:
            case Ao:
            case Vo:
              E = hc;
              break;
            case Ho:
              E = jc;
              break;
            case "scroll":
              E = cc;
              break;
            case "wheel":
              E = Tc;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = yc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = xo;
          }
          var z = (t & 4) !== 0,
            se = !z && e === "scroll",
            f = z ? (h !== null ? h + "Capture" : null) : h;
          z = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = Fn(a, f)), w != null && z.push(nr(a, w, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < z.length && ((h = new E(h, N, null, n, y)), g.push({ event: h, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            h && n !== Al && (N = n.relatedTarget || n.fromElement) && (Gt(N) || N[wt]))
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
              ? ((N = n.relatedTarget || n.toElement),
                (E = p),
                (N = N ? Gt(N) : null),
                N !== null &&
                  ((se = Xt(N)), N !== se || (N.tag !== 5 && N.tag !== 6)) &&
                  (N = null))
              : ((E = null), (N = p)),
            E !== N)
          ) {
            if (
              ((z = go),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((z = xo), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (se = E == null ? h : gn(E)),
              (d = N == null ? h : gn(N)),
              (h = new z(w, a + "leave", E, n, y)),
              (h.target = se),
              (h.relatedTarget = d),
              (w = null),
              Gt(y) === p &&
                ((z = new z(f, a + "enter", N, n, y)),
                (z.target = d),
                (z.relatedTarget = se),
                (w = z)),
              (se = w),
              E && N)
            )
              t: {
                for (z = E, f = N, a = 0, d = z; d; d = vn(d)) a++;
                for (d = 0, w = f; w; w = vn(w)) d++;
                for (; 0 < a - d;) ((z = vn(z)), a--);
                for (; 0 < d - a;) ((f = vn(f)), d--);
                for (; a--;) {
                  if (z === f || (f !== null && z === f.alternate)) break t;
                  ((z = vn(z)), (f = vn(f)));
                }
                z = null;
              }
            else z = null;
            (E !== null && Yo(g, h, E, z, !1), N !== null && se !== null && Yo(g, se, N, z, !0));
          }
        }
        e: {
          if (
            ((h = p ? gn(p) : window),
            (E = h.nodeName && h.nodeName.toLowerCase()),
            E === "select" || (E === "input" && h.type === "file"))
          )
            var P = Uc;
          else if (No(h))
            if (Po) P = Bc;
            else {
              P = Vc;
              var L = Ac;
            }
          else
            (E = h.nodeName) &&
              E.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (P = Hc);
          if (P && (P = P(e, p))) {
            zo(g, P, n, y);
            break e;
          }
          (L && L(e, h, p),
            e === "focusout" &&
              (L = h._wrapperState) &&
              L.controlled &&
              h.type === "number" &&
              Ol(h, "number", h.value));
        }
        switch (((L = p ? gn(p) : window), e)) {
          case "focusin":
            (No(L) || L.contentEditable === "true") && ((mn = L), (au = p), (bn = null));
            break;
          case "focusout":
            bn = au = mn = null;
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
            if (Qc) break;
          case "keydown":
          case "keyup":
            Do(g, n, y);
        }
        var T;
        if (uu)
          e: {
            switch (e) {
              case "compositionstart":
                var M = "onCompositionStart";
                break e;
              case "compositionend":
                M = "onCompositionEnd";
                break e;
              case "compositionupdate":
                M = "onCompositionUpdate";
                break e;
            }
            M = void 0;
          }
        else
          pn
            ? Co(e, n) && (M = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
        (M &&
          (ko &&
            n.locale !== "ko" &&
            (pn || M !== "onCompositionStart"
              ? M === "onCompositionEnd" && pn && (T = vo())
              : ((Rt = y), (bl = "value" in Rt ? Rt.value : Rt.textContent), (pn = !0))),
          (L = Br(p, M)),
          0 < L.length &&
            ((M = new wo(M, e, null, n, y)),
            g.push({ event: M, listeners: L }),
            T ? (M.data = T) : ((T = _o(n)), T !== null && (M.data = T)))),
          (T = Mc ? Oc(e, n) : Ic(e, n)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new wo("onBeforeInput", "beforeinput", null, n, y)),
              g.push({ event: y, listeners: p }),
              (y.data = T))));
      }
      Qo(g, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Fn(e, n)),
        u != null && r.unshift(nr(e, u, l)),
        (u = Fn(e, t)),
        u != null && r.push(nr(e, u, l))),
        (e = e.return));
    }
    return r;
  }
  function vn(e) {
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
          ? ((s = Fn(n, u)), s != null && i.unshift(nr(n, s, o)))
          : l || ((s = Fn(n, u)), s != null && i.push(nr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Gc = /\r\n?/g,
    Zc = /\u0000|\uFFFD/g;
  function Xo(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Gc,
        `
`,
      )
      .replace(Zc, "");
  }
  function Wr(e, t, n) {
    if (((t = Xo(t)), Xo(e) !== t && n)) throw Error(m(425));
  }
  function $r() {}
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
    qc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Go = typeof Promise == "function" ? Promise : void 0,
    Jc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Go < "u"
          ? function (e) {
              return Go.resolve(null).then(e).catch(bc);
            }
          : wu;
  function bc(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xu(e, t) {
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
  function Ot(e) {
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
  var yn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + yn,
    rr = "__reactProps$" + yn,
    wt = "__reactContainer$" + yn,
    ku = "__reactEvents$" + yn,
    ef = "__reactListeners$" + yn,
    tf = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Zo(e); e !== null;) {
            if ((n = e[pt])) return n;
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
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Su = [],
    wn = -1;
  function It(e) {
    return { current: e };
  }
  function q(e) {
    0 > wn || ((e.current = Su[wn]), (Su[wn] = null), wn--);
  }
  function X(e, t) {
    (wn++, (Su[wn] = e.current), (e.current = t));
  }
  var Dt = {},
    Se = It(Dt),
    Te = It(!1),
    Zt = Dt;
  function xn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
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
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Kr() {
    (q(Te), q(Se));
  }
  function qo(e, t, n) {
    if (Se.current !== Dt) throw Error(m(168));
    (X(Se, t), X(Te, n));
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, Y(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Yr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Zt = Se.current),
      X(Se, e),
      X(Te, Te.current),
      !0
    );
  }
  function bo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Jo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        q(Te),
        q(Se),
        X(Se, e))
      : q(Te),
      X(Te, n));
  }
  var xt = null,
    Xr = !1,
    Eu = !1;
  function es(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function nf(e) {
    ((Xr = !0), es(e));
  }
  function Ft() {
    if (!Eu && xt !== null) {
      Eu = !0;
      var e = 0,
        t = Q;
      try {
        var n = xt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (Xr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), to(Ql, Ft), l);
      } finally {
        ((Q = t), (Eu = !1));
      }
    }
    return null;
  }
  var kn = [],
    Sn = 0,
    Gr = null,
    Zr = 0,
    Ye = [],
    Xe = 0,
    qt = null,
    kt = 1,
    St = "";
  function Jt(e, t) {
    ((kn[Sn++] = Zr), (kn[Sn++] = Gr), (Gr = e), (Zr = t));
  }
  function ts(e, t, n) {
    ((Ye[Xe++] = kt), (Ye[Xe++] = St), (Ye[Xe++] = qt), (qt = e));
    var r = kt;
    e = St;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - nt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (kt = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (St = u + e));
    } else ((kt = (1 << u) | (n << l) | r), (St = e));
  }
  function Cu(e) {
    e.return !== null && (Jt(e, 1), ts(e, 1, 0));
  }
  function _u(e) {
    for (; e === Gr;) ((Gr = kn[--Sn]), (kn[Sn] = null), (Zr = kn[--Sn]), (kn[Sn] = null));
    for (; e === qt;)
      ((qt = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null),
        (kt = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var He = null,
    Be = null,
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
          t !== null ? ((e.stateNode = t), (He = e), (Be = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (He = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = qt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (He = e),
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
    if (te) {
      var t = Be;
      if (t) {
        var n = t;
        if (!rs(e, t)) {
          if (Nu(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = He;
          t && rs(e, t) ? ns(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
        }
      } else {
        if (Nu(e)) throw Error(m(418));
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
        ((t = e.type), (t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (Nu(e)) throw (us(), Error(m(418)));
      for (; t;) (ns(e, t), (t = Ot(t.nextSibling)));
    }
    if ((ls(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = Ot(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = He ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Be; e;) e = Ot(e.nextSibling);
  }
  function En() {
    ((Be = He = null), (te = !1));
  }
  function Pu(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var rf = ke.ReactCurrentBatchConfig;
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
  function Jr(e, t) {
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
    function o(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = wi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === je
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === P ||
              (typeof P == "object" && P !== null && P.$$typeof === Le && is(P) === a.type))
          ? ((w = l(a, d.props)), (w.ref = ur(f, a, d)), (w.return = f), w)
          : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = ur(f, a, d)),
            (w.return = f),
            w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = xi(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, w, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = wi("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case Ne:
            return ((a = xi(a, f.mode, d)), (a.return = f), a);
          case Le:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (On(a) || R(a)) return ((a = on(a, f.mode, d, null)), (a.return = f), a);
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : o(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === P ? s(f, a, d, w) : null;
          case Ne:
            return d.key === P ? p(f, a, d, w) : null;
          case Le:
            return ((P = d._init), h(f, a, P(d._payload), w));
        }
        if (On(d) || R(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), o(a, f, "" + w, P));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case et:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, P));
          case Ne:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, P));
          case Le:
            var L = w._init;
            return E(f, a, d, L(w._payload), P);
        }
        if (On(w) || R(w)) return ((f = f.get(d) || null), y(a, f, w, P, null));
        Jr(a, w);
      }
      return null;
    }
    function N(f, a, d, w) {
      for (var P = null, L = null, T = a, M = (a = 0), ye = null; T !== null && M < d.length; M++) {
        T.index > M ? ((ye = T), (T = null)) : (ye = T.sibling);
        var H = h(f, T, d[M], w);
        if (H === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && H.alternate === null && t(f, T),
          (a = u(H, a, M)),
          L === null ? (P = H) : (L.sibling = H),
          (L = H),
          (T = ye));
      }
      if (M === d.length) return (n(f, T), te && Jt(f, M), P);
      if (T === null) {
        for (; M < d.length; M++)
          ((T = g(f, d[M], w)),
            T !== null && ((a = u(T, a, M)), L === null ? (P = T) : (L.sibling = T), (L = T)));
        return (te && Jt(f, M), P);
      }
      for (T = r(f, T); M < d.length; M++)
        ((ye = E(T, f, M, d[M], w)),
          ye !== null &&
            (e && ye.alternate !== null && T.delete(ye.key === null ? M : ye.key),
            (a = u(ye, a, M)),
            L === null ? (P = ye) : (L.sibling = ye),
            (L = ye)));
      return (
        e &&
          T.forEach(function (Kt) {
            return t(f, Kt);
          }),
        te && Jt(f, M),
        P
      );
    }
    function z(f, a, d, w) {
      var P = R(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (P = null), T = a, M = (a = 0), ye = null, H = d.next();
        T !== null && !H.done;
        M++, H = d.next()
      ) {
        T.index > M ? ((ye = T), (T = null)) : (ye = T.sibling);
        var Kt = h(f, T, H.value, w);
        if (Kt === null) {
          T === null && (T = ye);
          break;
        }
        (e && T && Kt.alternate === null && t(f, T),
          (a = u(Kt, a, M)),
          L === null ? (P = Kt) : (L.sibling = Kt),
          (L = Kt),
          (T = ye));
      }
      if (H.done) return (n(f, T), te && Jt(f, M), P);
      if (T === null) {
        for (; !H.done; M++, H = d.next())
          ((H = g(f, H.value, w)),
            H !== null && ((a = u(H, a, M)), L === null ? (P = H) : (L.sibling = H), (L = H)));
        return (te && Jt(f, M), P);
      }
      for (T = r(f, T); !H.done; M++, H = d.next())
        ((H = E(T, f, M, H.value, w)),
          H !== null &&
            (e && H.alternate !== null && T.delete(H.key === null ? M : H.key),
            (a = u(H, a, M)),
            L === null ? (P = H) : (L.sibling = H),
            (L = H)));
      return (
        e &&
          T.forEach(function (Ff) {
            return t(f, Ff);
          }),
        te && Jt(f, M),
        P
      );
    }
    function se(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === je &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var P = d.key, L = a; L !== null;) {
                if (L.key === P) {
                  if (((P = d.type), P === je)) {
                    if (L.tag === 7) {
                      (n(f, L.sibling), (a = l(L, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    L.elementType === P ||
                    (typeof P == "object" && P !== null && P.$$typeof === Le && is(P) === L.type)
                  ) {
                    (n(f, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = ur(f, L, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, L);
                  break;
                } else t(f, L);
                L = L.sibling;
              }
              d.type === je
                ? ((a = on(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = ur(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case Ne:
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
              ((a = xi(d, f.mode, w)), (a.return = f), (f = a));
            }
            return i(f);
          case Le:
            return ((L = d._init), se(f, a, L(d._payload), w));
        }
        if (On(d)) return N(f, a, d, w);
        if (R(d)) return z(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = wi(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return se;
  }
  var Cn = os(!0),
    ss = os(!1),
    br = It(null),
    el = null,
    _n = null,
    ju = null;
  function Lu() {
    ju = _n = el = null;
  }
  function Tu(e) {
    var t = br.current;
    (q(br), (e._currentValue = t));
  }
  function Ru(e, t, n) {
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
  function Nn(e, t) {
    ((el = e),
      (ju = _n = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Me = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (ju !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
        if (el === null) throw Error(m(308));
        ((_n = e), (el.dependencies = { lanes: 0, firstContext: e }));
      } else _n = _n.next = e;
    return t;
  }
  var bt = null;
  function Mu(e) {
    bt === null ? (bt = [e]) : bt.push(e);
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
  function Ou(e) {
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
  function Ct(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (U & 2) !== 0)) {
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
      var g = l.baseState;
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
            var N = e,
              z = o;
            switch (((h = t), (E = n), z.tag)) {
              case 1:
                if (((N = z.payload), typeof N == "function")) {
                  g = N.call(E, g, h);
                  break e;
                }
                g = N;
                break e;
              case 3:
                N.flags = (N.flags & -65537) | 128;
              case 0:
                if (
                  ((N = z.payload), (h = typeof N == "function" ? N.call(E, g, h) : N), h == null)
                )
                  break e;
                g = _({}, g, h);
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
            y === null ? ((p = y = E), (s = g)) : (y = y.next = E),
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
      ((nn |= i), (e.lanes = i), (e.memoizedState = g));
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
    mt = It(ir),
    or = It(ir),
    sr = It(ir);
  function en(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Iu(e, t) {
    switch ((X(sr, t), X(or, e), X(mt, ir), (e = t.nodeType), e)) {
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
    (q(mt), X(mt, t));
  }
  function zn() {
    (q(mt), q(or), q(sr));
  }
  function ps(e) {
    en(sr.current);
    var t = en(mt.current),
      n = Dl(t, e.type);
    t !== n && (X(or, e), X(mt, n));
  }
  function Du(e) {
    or.current === e && (q(mt), q(or));
  }
  var re = It(0);
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
  var Fu = [];
  function Uu() {
    for (var e = 0; e < Fu.length; e++) Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var ll = ke.ReactCurrentDispatcher,
    Au = ke.ReactCurrentBatchConfig,
    tn = 0,
    le = null,
    de = null,
    he = null,
    ul = !1,
    ar = !1,
    cr = 0,
    lf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Hu(e, t, n, r, l, u) {
    if (
      ((tn = u),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ll.current = e === null || e.memoizedState === null ? af : cf),
      (e = n(r, l)),
      ar)
    ) {
      u = 0;
      do {
        if (((ar = !1), (cr = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (he = de = null), (t.updateQueue = null), (ll.current = ff), (e = n(r, l)));
      } while (ar);
    }
    if (
      ((ll.current = sl),
      (t = de !== null && de.next !== null),
      (tn = 0),
      (he = de = le = null),
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
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (he === null ? (le.memoizedState = he = e) : (he = he.next = e), he);
  }
  function Ze() {
    if (de === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = he === null ? le.memoizedState : he.next;
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
        he === null ? (le.memoizedState = he = e) : (he = he.next = e));
    }
    return he;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wu(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = de,
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
        if ((tn & y) === y)
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
          (s === null ? ((o = s = g), (i = r)) : (s = s.next = g), (le.lanes |= y), (nn |= y));
        }
        p = p.next;
      } while (p !== null && p !== u);
      (s === null ? (i = r) : (s.next = o),
        rt(r, t.memoizedState) || (Me = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((u = l.lane), (le.lanes |= u), (nn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $u(e) {
    var t = Ze(),
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
      (rt(u, t.memoizedState) || (Me = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function ms() {}
  function hs(e, t) {
    var n = le,
      r = Ze(),
      l = t(),
      u = !rt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      Qu(gs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), dr(9, ys.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(m(349));
      (tn & 30) !== 0 || vs(n, t, l);
    }
    return l;
  }
  function vs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ys(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ws(t) && xs(e));
  }
  function gs(e, t, n) {
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
  function ks(e) {
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
      (e = e.dispatch = sf.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function dr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ss() {
    return Ze().memoizedState;
  }
  function il(e, t, n, r) {
    var l = ht();
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ol(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (de !== null) {
      var i = de.memoizedState;
      if (((u = i.destroy), r !== null && Vu(r, i.deps))) {
        l.memoizedState = dr(t, n, u, r);
        return;
      }
    }
    ((le.flags |= e), (l.memoizedState = dr(1 | t, n, u, r)));
  }
  function Es(e, t) {
    return il(8390656, 8, e, t);
  }
  function Qu(e, t) {
    return ol(2048, 8, e, t);
  }
  function Cs(e, t) {
    return ol(4, 2, e, t);
  }
  function _s(e, t) {
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
  function zs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), ol(4, 4, Ns.bind(null, t, e), n));
  }
  function Ku() {}
  function Ps(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function js(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Vu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = uo()), (le.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function uf(e, t) {
    var n = Q;
    ((Q = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Au.transition;
    Au.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Q = n), (Au.transition = r));
    }
  }
  function Ts() {
    return Ze().memoizedState;
  }
  function of(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Rs(e)))
      Ms(t, n);
    else if (((n = as(e, t, n, r)), n !== null)) {
      var l = Pe();
      (st(n, e, r, l), Os(n, t, r));
    }
  }
  function sf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Rs(e)) Ms(t, l);
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
            (s === null ? ((l.next = l), Mu(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = as(e, t, l, r)), n !== null && ((l = Pe()), st(n, e, r, l), Os(n, t, r)));
    }
  }
  function Rs(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Ms(e, t) {
    ar = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Os(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var sl = {
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
    af = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
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
          (e = e.dispatch = of.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ks,
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = ks(!1),
          t = e[0];
        return ((e = uf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(m(349));
          (tn & 30) !== 0 || vs(r, t, n);
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
        var e = ht(),
          t = ve.identifierPrefix;
        if (te) {
          var n = St,
            r = kt;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = cr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = lf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    cf = {
      readContext: Ge,
      useCallback: Ps,
      useContext: Ge,
      useEffect: Qu,
      useImperativeHandle: zs,
      useInsertionEffect: Cs,
      useLayoutEffect: _s,
      useMemo: js,
      useReducer: Wu,
      useRef: Ss,
      useState: function () {
        return Wu(fr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var t = Ze();
        return Ls(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    ff = {
      readContext: Ge,
      useCallback: Ps,
      useContext: Ge,
      useEffect: Qu,
      useImperativeHandle: zs,
      useInsertionEffect: Cs,
      useLayoutEffect: _s,
      useMemo: js,
      useReducer: $u,
      useRef: Ss,
      useState: function () {
        return $u(fr);
      },
      useDebugValue: Ku,
      useDeferredValue: function (e) {
        var t = Ze();
        return de === null ? (t.memoizedState = e) : Ls(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = $u(fr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: ms,
      useSyncExternalStore: hs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function ut(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var al = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Wt(e),
        u = Ct(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Wt(e),
        u = Ct(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (st(t, e, l, r), tl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Wt(e),
        l = Ct(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), tl(t, e, r)));
    },
  };
  function Is(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, u)
          : !0
    );
  }
  function Ds(e, t, n) {
    var r = !1,
      l = Dt,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((l = Re(t) ? Zt : Se.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? xn(e, l) : Dt)),
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
  function Fs(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && al.enqueueReplaceState(t, t.state, null));
  }
  function Xu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ou(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Ge(u))
      : ((u = Re(t) ? Zt : Se.current), (l.context = xn(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (Yu(e, t, u, n), (l.state = e.memoizedState)),
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
  function Pn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += A(r)), (r = r.return));
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
  var df = typeof WeakMap == "function" ? WeakMap : Map;
  function Us(e, t, n) {
    ((n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (vl || ((vl = !0), (fi = r)), Zu(e, t));
      }),
      n
    );
  }
  function As(e, t, n) {
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
            typeof r != "function" && (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var i = t.stack;
          this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
        }),
      n
    );
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new df();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Nf.bind(null, e, t, n)), t.then(e, e));
  }
  function Hs(e) {
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
              (n.alternate === null ? (n.tag = 17) : ((t = Ct(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var pf = ke.ReactCurrentOwner,
    Me = !1;
  function ze(e, t, n, r) {
    t.child = e === null ? ss(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Ws(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = Hu(e, t, n, r, u, l)),
      (n = Bu()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && n && Cu(t), (t.flags |= 1), ze(e, t, r, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !gi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Qs(e, t, u, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Qs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref)
        if (((Me = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Me = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
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
          X(Ln, We),
          (We |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            X(Ln, We),
            (We |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          X(Ln, We),
          (We |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(Ln, We),
        (We |= r));
    return (ze(e, t, l, n), t.child);
  }
  function Ys(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qu(e, t, n, r, l) {
    var u = Re(n) ? Zt : Se.current;
    return (
      (u = xn(t, u)),
      Nn(t, l),
      (n = Hu(e, t, n, r, u, l)),
      (r = Bu()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && r && Cu(t), (t.flags |= 1), ze(e, t, n, l), t.child)
    );
  }
  function Xs(e, t, n, r, l) {
    if (Re(n)) {
      var u = !0;
      Yr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null)) (fl(e, t), Ds(t, n, r), Xu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = Re(n) ? Zt : Se.current), (p = xn(t, p)));
      var y = n.getDerivedStateFromProps,
        g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Fs(t, i, r, p)),
        (Ut = !1));
      var h = t.memoizedState;
      ((i.state = h),
        nl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || h !== s || Te.current || Ut
          ? (typeof y == "function" && (Yu(t, n, y, r), (s = t.memoizedState)),
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
        cs(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : ut(t.type, o)),
        (i.props = p),
        (g = t.pendingProps),
        (h = i.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? Zt : Se.current), (s = xn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((y = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && Fs(t, i, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (i.state = h),
        nl(t, r, i, l));
      var N = t.memoizedState;
      o !== g || h !== N || Te.current || Ut
        ? (typeof E == "function" && (Yu(t, n, E, r), (N = t.memoizedState)),
          (p = Ut || Is(t, n, p, r, h, N, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, N, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, N, s)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = N)),
          (i.props = r),
          (i.state = N),
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
    return Ju(e, t, n, r, u, l);
  }
  function Ju(e, t, n, r, l, u) {
    Ys(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && bo(t, n, !1), _t(e, t, u));
    ((r = t.stateNode), (pf.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = Cn(t, e.child, null, u)), (t.child = Cn(t, null, o, u)))
        : ze(e, t, o, u),
      (t.memoizedState = r.state),
      l && bo(t, n, !0),
      t.child
    );
  }
  function Gs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? qo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qo(e, t.context, !1),
      Iu(e, t.containerInfo));
  }
  function Zs(e, t, n, r, l) {
    return (En(), Pu(l), (t.flags |= 256), ze(e, t, n, r), t.child);
  }
  var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qs(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      X(re, l & 1),
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
                (e = on(e, r, n, null)),
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
      return mf(e, t, i, r, o, l, n);
    if (u) {
      ((u = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (i & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Qt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Qt(o, u)) : ((u = on(u, i, n, null)), (u.flags |= 2)),
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
      (t = El({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function cl(e, t, n, r) {
    return (
      r !== null && Pu(r),
      Cn(t, e.child, null, n),
      (e = ti(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function mf(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Gu(Error(m(422)))), cl(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = El({ mode: "visible", children: r.children }, l, 0, null)),
            (u = on(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, i),
            (t.child.memoizedState = ei(i)),
            (t.memoizedState = bu),
            u);
    if ((t.mode & 1) === 0) return cl(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Gu(u, r, void 0)), cl(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Me || o)) {
      if (((r = ve), r !== null)) {
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
          l !== 0 && l !== u.retryLane && ((u.retryLane = l), Et(e, l), st(r, e, l, -1)));
      }
      return (yi(), (r = Gu(Error(m(421)))), cl(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = zf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (Be = Ot(l.nextSibling)),
        (He = t),
        (te = !0),
        (lt = null),
        e !== null &&
          ((Ye[Xe++] = kt),
          (Ye[Xe++] = St),
          (Ye[Xe++] = qt),
          (kt = e.id),
          (St = e.overflow),
          (qt = t)),
        (t = ti(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Ru(e.return, t, n));
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
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((ze(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
          else if (e.tag === 19) Js(e, n, t);
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
    if ((X(re, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && rl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ni(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && rl(e) === null)) {
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
  function fl(e, t) {
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
  function hf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Gs(t), En());
        break;
      case 5:
        ps(t);
        break;
      case 1:
        Re(t.type) && Yr(t);
        break;
      case 4:
        Iu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (X(br, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(re, re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? qs(e, t, n)
              : (X(re, re.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        X(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return bs(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          X(re, re.current),
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
  var ea, ri, ta, na;
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
    (ri = function () {}),
    (ta = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Rl(e, l)), (r = Rl(e, r)), (u = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
        }
        Fl(n, r);
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
                (F.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (F.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && Z("scroll", e), u || o === s || (u = []))
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
  function vf(e, t, n) {
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
        return (Re(t.type) && Kr(), Ce(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          q(Te),
          q(Se),
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
        Du(t);
        var l = en(sr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ta(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ce(t), null);
          }
          if (((e = en(mt.current)), qr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[pt] = t), (r[rr] = u), (e = (t.mode & 1) !== 0), n)) {
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
                (Ii(r, u), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Ui(r, u), Z("invalid", r));
            }
            (Fl(n, u), (l = null));
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
                  : F.hasOwnProperty(i) && o != null && i === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (xr(r), Fi(r, u, !0));
                break;
              case "textarea":
                (xr(r), Vi(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = $r);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Hi(n)),
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
              (e[rr] = r),
              ea(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Ul(n, r)), n)) {
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
                  (Ii(e, r), (l = Rl(e, r)), Z("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    Z("invalid", e));
                  break;
                case "textarea":
                  (Ui(e, r), (l = Il(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Fl(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? $i(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Bi(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && In(e, s)
                          : typeof s == "number" && In(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (F.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && Z("scroll", e)
                            : s != null && be(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (xr(e), Fi(e, r, !1));
                  break;
                case "textarea":
                  (xr(e), Vi(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? sn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
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
        if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(sr.current)), en(mt.current), qr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (u = r.nodeValue !== n) && ((e = He), e !== null))
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
          (q(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (us(), En(), (t.flags |= 98560), (u = !1));
          else if (((u = qr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[pt] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
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
                (e === null || (re.current & 1) !== 0 ? pe === 0 && (pe = 3) : yi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ce(t),
            null);
      case 4:
        return (zn(), ri(e, t), e === null && tr(t.stateNode.containerInfo), Ce(t), null);
      case 10:
        return (Tu(t.type._context), Ce(t), null);
      case 17:
        return (Re(t.type) && Kr(), Ce(t), null);
      case 19:
        if ((q(re), (u = t.memoizedState), u === null)) return (Ce(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) pr(u, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
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
                  return (X(re, (re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              oe() > Tn &&
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
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !te)
              )
                return (Ce(t), null);
            } else
              2 * oe() - u.renderingStartTime > Tn &&
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
            (u.renderingStartTime = oe()),
            (t.sibling = null),
            (n = re.current),
            X(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ce(t), null);
      case 22:
      case 23:
        return (
          vi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (We & 1073741824) !== 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
  function yf(e, t) {
    switch ((_u(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Kr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          q(Te),
          q(Se),
          Uu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Du(t), null);
      case 13:
        if ((q(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (q(re), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Tu(t.type._context), null);
      case 22:
      case 23:
        return (vi(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1,
    _e = !1,
    gf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ie(e, t, r);
        }
      else n.current = null;
  }
  function li(e, t, n) {
    try {
      n();
    } catch (r) {
      ie(e, t, r);
    }
  }
  var ra = !1;
  function wf(e, t) {
    if (((vu = Rr), (e = Io()), su(e))) {
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
                var E;
                g !== n || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (E = g.firstChild) !== null;
              )
                ((h = g), (g = E));
              for (;;) {
                if (g === e) break t;
                if (
                  (h === n && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (E = g.nextSibling) !== null)
                )
                  break;
                ((g = h), (h = g.parentNode));
              }
              g = E;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yu = { focusedElem: e, selectionRange: n }, Rr = !1, C = t; C !== null;)
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null;) {
          t = C;
          try {
            var N = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (N !== null) {
                    var z = N.memoizedProps,
                      se = N.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? z : ut(t.type, z),
                        se,
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
            ie(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((N = ra), (ra = !1), N);
  }
  function mr(e, t, n) {
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
  function la(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), la(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[rr], delete t[ku], delete t[ef], delete t[tf])),
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
            n != null || t.onclick !== null || (t.onclick = $r)));
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
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (oa(e, t, n), (n = n.sibling));
  }
  function oa(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Nr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || jn(n, t);
      case 6:
        var r = we,
          l = it;
        ((we = null),
          Vt(e, t, n),
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
              e.nodeType === 8 ? xu(e.parentNode, n) : e.nodeType === 1 && xu(e, n),
              Kn(e))
            : xu(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = it),
          (we = n.stateNode.containerInfo),
          (it = !0),
          Vt(e, t, n),
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
        Vt(e, t, n);
        break;
      case 1:
        if (!_e && (jn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ie(n, t, o);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((_e = (r = _e) || n.memoizedState !== null), Vt(e, t, n), (_e = r))
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
      (n === null && (n = e.stateNode = new gf()),
        t.forEach(function (r) {
          var l = Pf.bind(null, e, r);
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
          (oa(u, i, l), (we = null), (it = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ie(l, t, p);
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
        if ((ot(t, e), vt(e), r & 4)) {
          try {
            (mr(3, e, e.return), pl(3, e));
          } catch (z) {
            ie(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            ie(e, e.return, z);
          }
        }
        break;
      case 1:
        (ot(t, e), vt(e), r & 512 && n !== null && jn(n, n.return));
        break;
      case 5:
        if ((ot(t, e), vt(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (z) {
            ie(e, e.return, z);
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
                  ? $i(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? Bi(l, g)
                    : y === "children"
                      ? In(l, g)
                      : be(l, y, g, p);
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
                    ? sn(l, !!u.multiple, E, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? sn(l, !!u.multiple, u.defaultValue, !0)
                        : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[rr] = u;
            } catch (z) {
              ie(e, e.return, z);
            }
        }
        break;
      case 6:
        if ((ot(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (z) {
            ie(e, e.return, z);
          }
        }
        break;
      case 3:
        if ((ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Kn(t.containerInfo);
          } catch (z) {
            ie(e, e.return, z);
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
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (ci = oe())),
          r & 4 && sa(e));
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
            for (C = e, y = e.child; y !== null;) {
              for (g = C = y; C !== null;) {
                switch (((h = C), (E = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    mr(4, h, h.return);
                    break;
                  case 1:
                    jn(h, h.return);
                    var N = h.stateNode;
                    if (typeof N.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (N.props = t.memoizedProps),
                          (N.state = t.memoizedState),
                          N.componentWillUnmount());
                      } catch (z) {
                        ie(r, n, z);
                      }
                    }
                    break;
                  case 5:
                    jn(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      da(g);
                      continue;
                    }
                }
                E !== null ? ((E.return = h), (C = E)) : da(g);
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
                        (o.style.display = Wi("display", i))));
                } catch (z) {
                  ie(e, e.return, z);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (z) {
                  ie(e, e.return, z);
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
        (ot(t, e), vt(e), r & 4 && sa(e));
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
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var u = ia(e);
            oi(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = ia(e);
            ii(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ie(e, e.return, s);
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
            s = (o !== null && o.memoizedState !== null) || _e;
          o = dl;
          var p = _e;
          if (((dl = i), (_e = s) && !p))
            for (C = l; C !== null;)
              ((i = C),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? pa(l)
                  : s !== null
                    ? ((s.return = i), (C = s))
                    : pa(l));
          for (; u !== null;) ((C = u), ca(u), (u = u.sibling));
          ((C = l), (dl = o), (_e = p));
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
                _e || pl(5, t);
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
                      var g = y.dehydrated;
                      g !== null && Kn(g);
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
          ie(t, t.return, h);
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
              ie(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ie(t, l, s);
              }
            }
            var u = t.return;
            try {
              ui(t);
            } catch (s) {
              ie(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ui(t);
            } catch (s) {
              ie(t, i, s);
            }
        }
      } catch (s) {
        ie(t, t.return, s);
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
  var kf = Math.ceil,
    ml = ke.ReactCurrentDispatcher,
    si = ke.ReactCurrentOwner,
    qe = ke.ReactCurrentBatchConfig,
    U = 0,
    ve = null,
    fe = null,
    xe = 0,
    We = 0,
    Ln = It(0),
    pe = 0,
    hr = null,
    nn = 0,
    hl = 0,
    ai = 0,
    vr = null,
    Oe = null,
    ci = 0,
    Tn = 1 / 0,
    Nt = null,
    vl = !1,
    fi = null,
    Ht = null,
    yl = !1,
    Bt = null,
    gl = 0,
    yr = 0,
    di = null,
    wl = -1,
    xl = 0;
  function Pe() {
    return (U & 6) !== 0 ? oe() : wl !== -1 ? wl : (wl = oe());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (U & 2) !== 0 && xe !== 0
        ? xe & -xe
        : rf.transition !== null
          ? (xl === 0 && (xl = uo()), xl)
          : ((e = Q), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ho(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < yr) throw ((yr = 0), (di = null), Error(m(185)));
    (Hn(e, n, r),
      ((U & 2) === 0 || e !== ve) &&
        (e === ve && ((U & 2) === 0 && (hl |= n), pe === 4 && $t(e, xe)),
        Ie(e, r),
        n === 1 && U === 0 && (t.mode & 1) === 0 && ((Tn = oe() + 500), Xr && Ft())));
  }
  function Ie(e, t) {
    var n = e.callbackNode;
    rc(e, t);
    var r = jr(e, e === ve ? xe : 0);
    if (r === 0) (n !== null && no(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && no(n), t === 1))
        (e.tag === 0 ? nf(ha.bind(null, e)) : es(ha.bind(null, e)),
          Jc(function () {
            (U & 6) === 0 && Ft();
          }),
          (n = null));
      else {
        switch (io(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = ro;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = lo;
            break;
          default:
            n = _r;
        }
        n = Ea(n, ma.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ma(e, t) {
    if (((wl = -1), (xl = 0), (U & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n) return null;
    var r = jr(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = U;
      U |= 2;
      var u = ya();
      (ve !== e || xe !== t) && ((Nt = null), (Tn = oe() + 500), ln(e, t));
      do
        try {
          Cf();
          break;
        } catch (o) {
          va(e, o);
        }
      while (!0);
      (Lu(), (ml.current = u), (U = l), fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Kl(e)), l !== 0 && ((r = l), (t = pi(e, l)))), t === 1))
        throw ((n = hr), ln(e, 0), $t(e, r), Ie(e, oe()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Sf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((u = Kl(e)), u !== 0 && ((r = u), (t = pi(e, u)))),
            t === 1))
        )
          throw ((n = hr), ln(e, 0), $t(e, r), Ie(e, oe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Oe, Nt);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = ci + 500 - oe()), 10 < t))) {
              if (jr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = wu(un.bind(null, e, Oe, Nt), t);
              break;
            }
            un(e, Oe, Nt);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - nt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = oe() - r),
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
                            : 1960 * kf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = wu(un.bind(null, e, Oe, Nt), r);
              break;
            }
            un(e, Oe, Nt);
            break;
          case 5:
            un(e, Oe, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Ie(e, oe()), e.callbackNode === n ? ma.bind(null, e) : null);
  }
  function pi(e, t) {
    var n = vr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && mi(t)),
      e
    );
  }
  function mi(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Sf(e) {
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
  function $t(e, t) {
    for (
      t &= ~ai, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ha(e) {
    if ((U & 6) !== 0) throw Error(m(327));
    Rn();
    var t = jr(e, 0);
    if ((t & 1) === 0) return (Ie(e, oe()), null);
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && ((t = r), (n = pi(e, r)));
    }
    if (n === 1) throw ((n = hr), ln(e, 0), $t(e, t), Ie(e, oe()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, Oe, Nt),
      Ie(e, oe()),
      null
    );
  }
  function hi(e, t) {
    var n = U;
    U |= 1;
    try {
      return e(t);
    } finally {
      ((U = n), U === 0 && ((Tn = oe() + 500), Xr && Ft()));
    }
  }
  function rn(e) {
    Bt !== null && Bt.tag === 0 && (U & 6) === 0 && Rn();
    var t = U;
    U |= 1;
    var n = qe.transition,
      r = Q;
    try {
      if (((qe.transition = null), (Q = 1), e)) return e();
    } finally {
      ((Q = r), (qe.transition = n), (U = t), (U & 6) === 0 && Ft());
    }
  }
  function vi() {
    ((We = Ln.current), q(Ln));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), qc(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((_u(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Kr());
            break;
          case 3:
            (zn(), q(Te), q(Se), Uu());
            break;
          case 5:
            Du(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            q(re);
            break;
          case 19:
            q(re);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            vi();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Qt(e.current, null)),
      (xe = We = t),
      (pe = 0),
      (hr = null),
      (ai = hl = nn = 0),
      (Oe = vr = null),
      bt !== null)
    ) {
      for (t = 0; t < bt.length; t++)
        if (((n = bt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var i = u.next;
            ((u.next = l), (r.next = i));
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
        if ((Lu(), (ll.current = sl), ul)) {
          for (var r = le.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((tn = 0),
          (he = de = le = null),
          (ar = !1),
          (cr = 0),
          (si.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (hr = t), (fe = null));
          break;
        }
        e: {
          var u = e,
            i = n.return,
            o = n,
            s = t;
          if (
            ((t = xe),
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
            var E = Hs(i);
            if (E !== null) {
              ((E.flags &= -257), Bs(E, i, o, u, t), E.mode & 1 && Vs(u, p, t), (t = E), (s = p));
              var N = t.updateQueue;
              if (N === null) {
                var z = new Set();
                (z.add(s), (t.updateQueue = z));
              } else N.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Vs(u, p, t), yi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && o.mode & 1) {
            var se = Hs(i);
            if (se !== null) {
              ((se.flags & 65536) === 0 && (se.flags |= 256), Bs(se, i, o, u, t), Pu(Pn(s, o)));
              break e;
            }
          }
          ((u = s = Pn(s, o)),
            pe !== 4 && (pe = 2),
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
                      (Ht === null || !Ht.has(d))))
                ) {
                  ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                  var w = As(u, o, t);
                  fs(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        wa(n);
      } catch (P) {
        ((t = P), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ya() {
    var e = ml.current;
    return ((ml.current = sl), e === null ? sl : e);
  }
  function yi() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((nn & 268435455) === 0 && (hl & 268435455) === 0) || $t(ve, xe));
  }
  function kl(e, t) {
    var n = U;
    U |= 2;
    var r = ya();
    (ve !== e || xe !== t) && ((Nt = null), ln(e, t));
    do
      try {
        Ef();
        break;
      } catch (l) {
        va(e, l);
      }
    while (!0);
    if ((Lu(), (U = n), (ml.current = r), fe !== null)) throw Error(m(261));
    return ((ve = null), (xe = 0), pe);
  }
  function Ef() {
    for (; fe !== null;) ga(fe);
  }
  function Cf() {
    for (; fe !== null && !Xa();) ga(fe);
  }
  function ga(e) {
    var t = Sa(e.alternate, e, We);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (fe = t), (si.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = vf(n, t, We)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = yf(n, t)), n !== null)) {
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
  function un(e, t, n) {
    var r = Q,
      l = qe.transition;
    try {
      ((qe.transition = null), (Q = 1), _f(e, t, n, r));
    } finally {
      ((qe.transition = l), (Q = r));
    }
    return null;
  }
  function _f(e, t, n, r) {
    do Rn();
    while (Bt !== null);
    if ((U & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (lc(e, u),
      e === ve && ((fe = ve = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        yl ||
        ((yl = !0),
        Ea(_r, function () {
          return (Rn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = qe.transition), (qe.transition = null));
      var i = Q;
      Q = 1;
      var o = U;
      ((U |= 4),
        (si.current = null),
        wf(e, n),
        aa(n, e),
        $c(yu),
        (Rr = !!vu),
        (yu = vu = null),
        (e.current = n),
        xf(n),
        Ga(),
        (U = o),
        (Q = i),
        (qe.transition = u));
    } else e.current = n;
    if (
      (yl && ((yl = !1), (Bt = e), (gl = l)),
      (u = e.pendingLanes),
      u === 0 && (Ht = null),
      Ja(n.stateNode),
      Ie(e, oe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (vl) throw ((vl = !1), (e = fi), (fi = null), e);
    return (
      (gl & 1) !== 0 && e.tag !== 0 && Rn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === di ? yr++ : ((yr = 0), (di = e))) : (yr = 0),
      Ft(),
      null
    );
  }
  function Rn() {
    if (Bt !== null) {
      var e = io(gl),
        t = qe.transition,
        n = Q;
      try {
        if (((qe.transition = null), (Q = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (gl = 0), (U & 6) !== 0)) throw Error(m(331));
          var l = U;
          for (U |= 4, C = e.current; C !== null;) {
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
                    var g = y.child;
                    if (g !== null) ((g.return = y), (C = g));
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
                var N = u.alternate;
                if (N !== null) {
                  var z = N.child;
                  if (z !== null) {
                    N.child = null;
                    do {
                      var se = z.sibling;
                      ((z.sibling = null), (z = se));
                    } while (z !== null);
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
                  } catch (P) {
                    ie(o, o.return, P);
                  }
                if (o === i) {
                  C = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  ((w.return = o.return), (C = w));
                  break e;
                }
                C = o.return;
              }
          }
          if (((U = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Nr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Q = n), (qe.transition = t));
      }
    }
    return !1;
  }
  function xa(e, t, n) {
    ((t = Pn(n, t)),
      (t = Us(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Pe()),
      e !== null && (Hn(e, 1, t), Ie(e, t)));
  }
  function ie(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r)))
          ) {
            ((e = Pn(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Pe()),
              t !== null && (Hn(t, 1, e), Ie(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > oe() - ci)
          ? ln(e, 0)
          : (ai |= n)),
      Ie(e, t));
  }
  function ka(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Pe();
    ((e = Et(e, t)), e !== null && (Hn(e, t, n), Ie(e, n)));
  }
  function zf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), ka(e, n));
  }
  function Pf(e, t) {
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
    (r !== null && r.delete(t), ka(e, n));
  }
  var Sa;
  Sa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Me = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Me = !1), hf(e, t, n));
        Me = (e.flags & 131072) !== 0;
      }
    else ((Me = !1), te && (t.flags & 1048576) !== 0 && ts(t, Zr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (fl(e, t), (e = t.pendingProps));
        var l = xn(t, Se.current);
        (Nn(t, n), (l = Hu(null, t, r, e, l, n)));
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
              Re(r) ? ((u = !0), Yr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(t),
              (l.updater = al),
              (t.stateNode = l),
              (l._reactInternals = t),
              Xu(t, r, e, n),
              (t = Ju(null, t, r, !0, u, n)))
            : ((t.tag = 0), te && u && Cu(t), ze(null, t, l, n), (t = t.child)),
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
            (l = t.tag = Lf(r)),
            (e = ut(r, e)),
            l)
          ) {
            case 0:
              t = qu(null, t, r, e, n);
              break e;
            case 1:
              t = Xs(null, t, r, e, n);
              break e;
            case 11:
              t = Ws(null, t, r, e, n);
              break e;
            case 14:
              t = $s(null, t, r, ut(r.type, e), n);
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
          qu(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Xs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Gs(t), e === null)) throw Error(m(387));
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
              ((l = Pn(Error(m(423)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Pn(Error(m(424)), t)), (t = Zs(e, t, r, n, l)));
              break e;
            } else
              for (
                Be = Ot(t.stateNode.containerInfo.firstChild),
                  He = t,
                  te = !0,
                  lt = null,
                  n = ss(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((En(), r === l)) {
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
          ps(t),
          e === null && zu(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          gu(r, l) ? (i = null) : u !== null && gu(r, u) && (t.flags |= 32),
          Ys(e, t),
          ze(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && zu(t), null);
      case 13:
        return qs(e, t, n);
      case 4:
        return (
          Iu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : ze(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          Ws(e, t, r, l, n)
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
            X(br, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (rt(u.value, i)) {
              if (u.children === l.children && !Te.current) {
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
                        Ru(u.return, n, t),
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
                    Ru(i, n, t),
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
          Nn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          ze(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ut(r, t.pendingProps)), (l = ut(r.type, l)), $s(e, t, r, l, n));
      case 15:
        return Qs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          fl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Yr(t)) : (e = !1),
          Nn(t, n),
          Ds(t, r, l),
          Xu(t, r, l, n),
          Ju(null, t, r, !0, e, n)
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
  function jf(e, t, n, r) {
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
    return new jf(e, t, n, r);
  }
  function gi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Lf(e) {
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
  function Sl(e, t, n, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case je:
          return on(n.children, l, u, t);
        case Ke:
          ((i = 8), (l |= 8));
          break;
        case zt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = zt), (e.lanes = u), e);
        case Ue:
          return ((e = Je(13, n, t, l)), (e.elementType = Ue), (e.lanes = u), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = u), e);
        case ue:
          return El(n, l, u, t);
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
  function on(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function El(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ue),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function wi(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function xi(e, t, n) {
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
      (this.eventTimes = Yl(0)),
      (this.expirationTimes = Yl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Yl(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ki(e, t, n, r, l, u, i, o, s) {
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
      Ou(u),
      e
    );
  }
  function Rf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ne,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Ca(e) {
    if (!e) return Dt;
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
            if (Re(t.type)) {
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
      if (Re(n)) return Jo(e, n, t);
    }
    return t;
  }
  function _a(e, t, n, r, l, u, i, o, s) {
    return (
      (e = ki(n, r, !0, e, l, u, i, o, s)),
      (e.context = Ca(null)),
      (n = e.current),
      (r = Pe()),
      (l = Wt(n)),
      (u = Ct(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      Hn(e, l, r),
      Ie(e, r),
      e
    );
  }
  function Cl(e, t, n, r) {
    var l = t.current,
      u = Pe(),
      i = Wt(l);
    return (
      (n = Ca(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ct(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (st(e, l, i, u), tl(e, l, i)),
      i
    );
  }
  function _l(e) {
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
  function Si(e, t) {
    (Na(e, t), (e = e.alternate) && Na(e, t));
  }
  function Mf() {
    return null;
  }
  var za =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ei(e) {
    this._internalRoot = e;
  }
  ((Nl.prototype.render = Ei.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      Cl(e, t, null, null);
    }),
    (Nl.prototype.unmount = Ei.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            Cl(null, e, null, null);
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
  function zl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Pa() {}
  function Of(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = _a(t, r, e, 0, null, !1, !1, "", Pa);
      return (
        (e._reactRootContainer = i),
        (e[wt] = i.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        rn(),
        i
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = _l(s);
        o.call(p);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, "", Pa);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        Cl(t, s, n, r);
      }),
      s
    );
  }
  function Pl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = _l(i);
          o.call(s);
        };
      }
      Cl(t, i, e, l);
    } else i = Of(n, t, e, l, r);
    return _l(i);
  }
  ((oo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Ie(t, oe()), (U & 6) === 0 && ((Tn = oe() + 500), Ft()));
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
          Si(e, 1));
    }
  }),
    (Gl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Pe();
          st(t, e, 134217728, n);
        }
        Si(e, 134217728);
      }
    }),
    (so = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Pe();
          st(n, e, t, r);
        }
        Si(e, t);
      }
    }),
    (ao = function () {
      return Q;
    }),
    (co = function (e, t) {
      var n = Q;
      try {
        return ((Q = e), t());
      } finally {
        Q = n;
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
                (Oi(r), Ml(r, l));
              }
            }
          }
          break;
        case "textarea":
          Ai(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Xi = hi),
    (Gi = rn));
  var If = { usingClientEntryPoint: !1, Events: [lr, gn, Qr, Ki, Yi, hi] },
    gr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Df = {
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
      currentDispatcherRef: ke.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = bi(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: gr.findFiberByHostInstance || Mf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jl.isDisabled && jl.supportsFiber)
      try {
        ((Nr = jl.inject(Df)), (dt = jl));
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If),
    (De.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ci(t)) throw Error(m(200));
      return Rf(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!Ci(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = za;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = ki(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        tr(e.nodeType === 8 ? e.parentNode : e),
        new Ei(t)
      );
    }),
    (De.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = bi(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (De.flushSync = function (e) {
      return rn(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return Pl(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!Ci(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = za;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = _a(t, null, e, 1, n ?? null, l, !1, u, i)),
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
    (De.render = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return Pl(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            Pl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = hi),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Pl(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Da;
function $f() {
  if (Da) return zi.exports;
  Da = 1;
  function k() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (j) {
        console.error(j);
      }
  }
  return (k(), (zi.exports = Wf()), zi.exports);
}
var Fa;
function Qf() {
  if (Fa) return Ll;
  Fa = 1;
  var k = $f();
  return ((Ll.createRoot = k.createRoot), (Ll.hydrateRoot = k.hydrateRoot), Ll);
}
var Kf = Qf();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = (k) => k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Va = (...k) =>
    k
      .filter((j, m, G) => !!j && j.trim() !== "" && G.indexOf(j) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xf = {
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
 */ const Gf = Mn.forwardRef(
  (
    {
      color: k = "currentColor",
      size: j = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: G,
      className: F = "",
      children: B,
      iconNode: ae,
      ...ce
    },
    W,
  ) =>
    Mn.createElement(
      "svg",
      {
        ref: W,
        ...Xf,
        width: j,
        height: j,
        stroke: k,
        strokeWidth: G ? (Number(m) * 24) / Number(j) : m,
        className: Va("lucide", F),
        ...ce,
      },
      [...ae.map(([ge, me]) => Mn.createElement(ge, me)), ...(Array.isArray(B) ? B : [B])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fe = (k, j) => {
  const m = Mn.forwardRef(({ className: G, ...F }, B) =>
    Mn.createElement(Gf, { ref: B, iconNode: j, className: Va(`lucide-${Yf(k)}`, G), ...F }),
  );
  return ((m.displayName = `${k}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = Fe("Aperture", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14.31 8 5.74 9.94", key: "1y6ab4" }],
  ["path", { d: "M9.69 8h11.48", key: "1wxppr" }],
  ["path", { d: "m7.38 12 5.74-9.94", key: "1grp0k" }],
  ["path", { d: "M9.69 16 3.95 6.06", key: "libnyf" }],
  ["path", { d: "M14.31 16H2.83", key: "x5fava" }],
  ["path", { d: "m16.62 12-5.74 9.94", key: "1vwawt" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = Fe("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = Fe("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay",
    },
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = Fe("Brush", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = Fe("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = Fe("Chrome", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = Fe("Figma", [
  ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
  ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
  ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
  ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
  ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rd = Fe("Framer", [
  ["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ld = Fe("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo",
    },
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc",
    },
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ud = Fe("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const id = Fe("PenTool", [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      key: "nt11vn",
    },
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      key: "15qc1e",
    },
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Li = Fe("Sparkle", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const od = Fe("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = Fe("WandSparkles", [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6",
      },
    ],
    ["path", { d: "m14 7 3 3", key: "1r5n42" }],
    ["path", { d: "M5 6v4", key: "ilb8ba" }],
    ["path", { d: "M19 14v4", key: "blhpug" }],
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M7 8H3", key: "zfb6yr" }],
    ["path", { d: "M21 16h-4", key: "1cnmox" }],
    ["path", { d: "M11 3H9", key: "1obp7u" }],
  ]),
  ad =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4",
  cd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4",
  fd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4",
  dd = [
    { year: "2024", role: "Lead Product Designer" },
    { year: "2022", role: "Senior UI Designer" },
    { year: "2020", role: "Product Designer" },
    { year: "2018", role: "Freelance Creative" },
  ];
function Ti({ src: k, className: j = "" }) {
  return x.jsx("video", {
    autoPlay: !0,
    loop: !0,
    muted: !0,
    playsInline: !0,
    className: `absolute inset-0 h-full w-full object-cover ${j}`,
    src: k,
  });
}
const Ua = [nd, rd, ud, id, ld, od, Zf, td, ed, bf, Jf, sd],
  pd = 1.5;
function md({ Icon: k }) {
  return x.jsx("div", {
    className:
      "liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-xl md:h-12 md:w-12",
    children: x.jsx(k, { className: "h-5 w-5 text-white/80", strokeWidth: pd }),
  });
}
function Aa({ direction: k }) {
  const j = k === "left" ? "marquee-left" : "marquee-right",
    m = [...Ua, ...Ua];
  return x.jsx("div", {
    className: "overflow-hidden",
    children: x.jsx("div", {
      className: `marquee-track ${j}`,
      children: m.map((G, F) => x.jsx(md, { Icon: G }, `${k}-${F}`)),
    }),
  });
}
function hd() {
  return x.jsxs("div", {
    className: "flex flex-col gap-3 pt-4",
    children: [x.jsx(Aa, { direction: "left" }), x.jsx(Aa, { direction: "right" })],
  });
}
const Tl = 1.5;
function vd() {
  return x.jsxs("section", {
    className:
      "min-h-screen bg-canvas px-4 py-6 text-white sm:px-6 sm:py-8 md:px-10 md:py-10 lg:flex lg:h-screen lg:flex-col lg:px-14",
    children: [
      x.jsxs("header", {
        className:
          "mb-6 flex flex-col gap-6 lg:mb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10",
        children: [
          x.jsxs("div", {
            className: "max-w-3xl",
            children: [
              x.jsx("h1", {
                className:
                  "text-[28px] font-normal leading-[1.15] tracking-tight sm:text-3xl md:text-4xl lg:text-[44px]",
                children: "Hi, I'm Max Reed!",
              }),
              x.jsx("p", {
                className: "mt-3 max-w-3xl text-sm leading-[1.6] text-white/60 md:text-[15px]",
                children:
                  "A London-based creator crafting bold digital products, brand systems, and motion-led interfaces for teams who want clarity without losing personality.",
              }),
            ],
          }),
          x.jsx("button", {
            type: "button",
            className:
              "liquid-glass shrink-0 self-start rounded-full px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5 md:px-7 md:py-3.5",
            children: "Let's Team Up Today",
          }),
        ],
      }),
      x.jsxs("div", {
        className: "grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5",
        children: [
          x.jsxs("div", {
            className:
              "relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl bg-black md:min-h-[480px] lg:min-h-0",
            children: [
              x.jsx(Ti, { src: ad }),
              x.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20",
              }),
              x.jsxs("div", {
                className: "relative z-10 flex flex-1 flex-col justify-between p-5 md:p-6",
                children: [
                  x.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70",
                    children: [
                      x.jsx(Li, { className: "h-3.5 w-3.5", strokeWidth: Tl }),
                      x.jsx("span", { children: "Background" }),
                      x.jsx(Li, { className: "h-3.5 w-3.5", strokeWidth: Tl }),
                    ],
                  }),
                  x.jsx("div", {
                    className:
                      "mt-auto grid grid-cols-4 gap-2 border-t border-white/10 pt-5 md:gap-3 md:pt-6",
                    children: dd.map((k) =>
                      x.jsxs(
                        "div",
                        {
                          className: "flex flex-col items-center gap-2 text-center sm:gap-2.5",
                          children: [
                            x.jsx("span", {
                              className: "text-xs font-medium text-white/50 md:text-sm",
                              children: k.year,
                            }),
                            x.jsx(Li, { className: "h-3 w-3 text-white/30", strokeWidth: Tl }),
                            x.jsx("span", {
                              className:
                                "text-[10px] leading-snug text-white/90 sm:text-xs md:text-sm",
                              children: k.role,
                            }),
                          ],
                        },
                        k.year,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          x.jsxs("div", {
            className: "flex flex-col gap-4 md:gap-5",
            children: [
              x.jsxs("div", {
                className: "relative overflow-hidden rounded-2xl bg-card p-5 md:p-6",
                children: [
                  x.jsx("div", { className: "noise-overlay", "aria-hidden": !0 }),
                  x.jsx("p", {
                    className:
                      "relative z-10 text-xs font-medium uppercase tracking-[0.18em] text-white/50",
                    children: "Client Voice",
                  }),
                  x.jsx("blockquote", {
                    className:
                      "relative z-10 mt-4 text-base leading-[1.55] text-white/90 md:text-lg",
                    children:
                      "“Max translated our messy product story into a crisp, cinematic experience. Elena Brooks, CMO at Northline.”",
                  }),
                  x.jsx("p", {
                    className: "relative z-10 mt-4 text-sm text-white/50",
                    children: "Elena Brooks",
                  }),
                ],
              }),
              x.jsxs("div", {
                className:
                  "relative min-h-[200px] flex-1 overflow-hidden rounded-2xl md:min-h-[240px]",
                children: [
                  x.jsx(Ti, { src: cd }),
                  x.jsx("div", { className: "absolute inset-0 bg-black/35" }),
                  x.jsxs("div", {
                    className:
                      "relative z-10 flex h-full min-h-[200px] flex-col justify-end p-5 md:min-h-[240px] md:p-6",
                    children: [
                      x.jsx("p", {
                        className: "text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl",
                        children: "10M+",
                      }),
                      x.jsx("p", {
                        className: "mt-1 text-sm text-white/60",
                        children: "Views across shipped campaigns",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          x.jsxs("div", {
            className: "flex flex-col gap-4 md:col-span-2 md:gap-5 lg:col-span-1",
            children: [
              x.jsxs("div", {
                className: "relative overflow-hidden rounded-2xl",
                children: [
                  x.jsxs("div", {
                    className: "relative min-h-[220px] md:min-h-[260px]",
                    children: [
                      x.jsx(Ti, { src: fd }),
                      x.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80",
                      }),
                      x.jsxs("div", {
                        className: "relative z-10 p-5 md:p-6",
                        children: [
                          x.jsx("p", {
                            className:
                              "text-xs font-medium uppercase tracking-[0.18em] text-white/60",
                            children: "Daily Software",
                          }),
                          x.jsx("p", {
                            className: "mt-2 max-w-xs text-sm leading-[1.5] text-white/70",
                            children:
                              "Tools I reach for when shaping interfaces, motion, and brand systems.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  x.jsx("div", {
                    className: "relative z-10 -mt-2 overflow-hidden px-4 pb-4 md:px-5 md:pb-5",
                    children: x.jsx(hd, {}),
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "relative overflow-hidden rounded-2xl bg-card p-5 md:p-6",
                children: [
                  x.jsx("div", { className: "noise-overlay", "aria-hidden": !0 }),
                  x.jsxs("div", {
                    className: "relative z-10 flex items-start justify-between gap-4",
                    children: [
                      x.jsxs("div", {
                        children: [
                          x.jsx("p", {
                            className:
                              "text-xs font-medium uppercase tracking-[0.18em] text-white/50",
                            children: "Reach Me",
                          }),
                          x.jsx("p", {
                            className: "mt-3 text-sm text-white/80",
                            children: "hello@maxreed.studio",
                          }),
                          x.jsx("p", {
                            className: "mt-1 text-sm text-white/60",
                            children: "+44 20 7946 0958",
                          }),
                          x.jsx("p", {
                            className: "mt-1 text-sm text-white/60",
                            children: "London, UK",
                          }),
                        ],
                      }),
                      x.jsx("button", {
                        type: "button",
                        className:
                          "liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/5",
                        "aria-label": "Contact Max Reed",
                        children: x.jsx(qf, { className: "h-5 w-5", strokeWidth: Tl }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function yd({ variant: k = "dark" }) {
  const j =
      k === "dark"
        ? "border-t border-white/10 bg-black px-6 py-20 md:px-12"
        : "border-t border-[#e2e8f0] bg-white px-6 py-20 md:px-12",
    m =
      k === "dark" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#0f172a]",
    G =
      k === "dark"
        ? "mt-4 max-w-2xl text-sm leading-relaxed text-white/60"
        : "mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b]";
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("section", {
        id: "privacy",
        className: j,
        children: x.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            x.jsx("h2", { className: m, children: "Privacy Policy" }),
            x.jsx("p", {
              className: G,
              children:
                "This privacy policy describes how we collect, use, and protect information when you use our services. Replace this copy with your legal team's final text before launch.",
            }),
          ],
        }),
      }),
      x.jsx("section", {
        id: "terms",
        className: j,
        children: x.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            x.jsx("h2", { className: m, children: "Terms of Service" }),
            x.jsx("p", {
              className: G,
              children:
                "These terms govern access to the site and products. By continuing to browse, you agree to the policies published here. Update with your jurisdiction-specific terms before production.",
            }),
          ],
        }),
      }),
    ],
  });
}
function Ri(k) {
  const j = k.replace(/^\//, "").replace(/\/$/, "");
  return j ? `#/${j}` : "#/";
}
function gd(k) {
  typeof window > "u" || (window.location.hash = Ri(k));
}
const wd = [
  { label: "Home", route: "" },
  { label: "Work", route: "work" },
  { label: "About", route: "about" },
  { label: "Studio", route: "studio" },
  { label: "Journal", route: "journal" },
  { label: "FAQ", route: "faq" },
  { label: "Contact", route: "contact" },
];
function xd() {
  const k = (j) => (m) => {
    (m.preventDefault(), gd(j));
  };
  return x.jsxs("header", {
    className:
      "sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-canvas/90 px-4 py-4 backdrop-blur-md md:px-10",
    children: [
      x.jsx("a", {
        href: Ri(""),
        onClick: k(""),
        className: "text-sm font-medium text-white/90",
        children: "Max Reed",
      }),
      x.jsx("nav", {
        className: "hidden gap-6 sm:flex",
        children: wd.map((j) =>
          x.jsx(
            "a",
            {
              href: Ri(j.route),
              onClick: k(j.route),
              className: "text-sm text-white/60 transition hover:text-white",
              children: j.label,
            },
            j.route,
          ),
        ),
      }),
    ],
  });
}
const kd = [
  {
    id: "about",
    title: "About",
    body: "London-based creator crafting bold digital products, brand systems, and motion-led interfaces for teams worldwide.",
  },
  {
    id: "contact",
    title: "Contact",
    body: "hello@maxreed.studio · +44 20 7946 0958 — available for collaborations and studio retainers.",
  },
  {
    id: "faq",
    title: "FAQ",
    body: "Typical engagements run 4–12 weeks. We ship design systems, launch films, and product UI with async-friendly workflows.",
  },
];
function Sd() {
  return x.jsxs("main", {
    className: "min-h-screen bg-canvas text-white",
    children: [
      x.jsx(xd, {}),
      x.jsx(vd, {}),
      kd.map((k) =>
        x.jsx(
          "section",
          {
            id: k.id,
            className: "border-t border-white/10 px-4 py-20 md:px-14",
            children: x.jsxs("div", {
              className: "mx-auto max-w-3xl",
              children: [
                x.jsx("h2", {
                  className: "text-3xl font-normal tracking-tight",
                  children: k.title,
                }),
                x.jsx("p", { className: "mt-4 text-sm text-white/60", children: k.body }),
              ],
            }),
          },
          k.id,
        ),
      ),
      x.jsx(yd, {}),
      x.jsx("footer", {
        className: "border-t border-white/10 py-8 text-center text-xs text-white/40",
        children: "© 2026 Max Reed Studio",
      }),
    ],
  });
}
Kf.createRoot(document.getElementById("root")).render(
  x.jsx(Mn.StrictMode, { children: x.jsx(Sd, {}) }),
);
