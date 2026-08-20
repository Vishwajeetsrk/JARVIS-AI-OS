(function () {
  const L = document.createElement("link").relList;
  if (L && L.supports && L.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) Q(M);
  new MutationObserver((M) => {
    for (const D of M)
      if (D.type === "childList")
        for (const oe of D.addedNodes) oe.tagName === "LINK" && oe.rel === "modulepreload" && Q(oe);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(M) {
    const D = {};
    return (
      M.integrity && (D.integrity = M.integrity),
      M.referrerPolicy && (D.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === "use-credentials"
        ? (D.credentials = "include")
        : M.crossOrigin === "anonymous"
          ? (D.credentials = "omit")
          : (D.credentials = "same-origin"),
      D
    );
  }
  function Q(M) {
    if (M.ep) return;
    M.ep = !0;
    const D = m(M);
    fetch(M.href, D);
  }
})();
var Cu = { exports: {} },
  gr = {},
  ju = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Vf() {
  if (ja) return F;
  ja = 1;
  var v = Symbol.for("react.element"),
    L = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    D = Symbol.for("react.provider"),
    oe = Symbol.for("react.context"),
    pe = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    _e = Symbol.for("react.memo"),
    we = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function q(c) {
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
    We = Object.assign,
    b = {};
  function Y(c, g, I) {
    ((this.props = c), (this.context = g), (this.refs = b), (this.updater = I || $e));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (c, g) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, g, "setState");
    }),
    (Y.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function vt() {}
  vt.prototype = Y.prototype;
  function st(c, g, I) {
    ((this.props = c), (this.context = g), (this.refs = b), (this.updater = I || $e));
  }
  var qe = (st.prototype = new vt());
  ((qe.constructor = st), We(qe, Y.prototype), (qe.isPureReactComponent = !0));
  var xe = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, g, I) {
    var U,
      V = {},
      B = null,
      G = null;
    if (g != null)
      for (U in (g.ref !== void 0 && (G = g.ref), g.key !== void 0 && (B = "" + g.key), g))
        be.call(g, U) && !Le.hasOwnProperty(U) && (V[U] = g[U]);
    var $ = arguments.length - 2;
    if ($ === 1) V.children = I;
    else if (1 < $) {
      for (var ee = Array($), Ue = 0; Ue < $; Ue++) ee[Ue] = arguments[Ue + 2];
      V.children = ee;
    }
    if (c && c.defaultProps) for (U in (($ = c.defaultProps), $)) V[U] === void 0 && (V[U] = $[U]);
    return { $$typeof: v, type: c, key: B, ref: G, props: V, _owner: Ce.current };
  }
  function Ct(c, g) {
    return { $$typeof: v, type: c.type, key: g, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === v;
  }
  function Kt(c) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (I) {
        return g[I];
      })
    );
  }
  var at = /\/+/g;
  function Fe(c, g) {
    return typeof c == "object" && c !== null && c.key != null ? Kt("" + c.key) : g.toString(36);
  }
  function et(c, g, I, U, V) {
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
            case v:
            case L:
              G = !0;
          }
      }
    if (G)
      return (
        (G = c),
        (V = V(G)),
        (c = U === "" ? "." + Fe(G, 0) : U),
        xe(V)
          ? ((I = ""),
            c != null && (I = c.replace(at, "$&/") + "/"),
            et(V, g, I, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (yt(V) &&
              (V = Ct(
                V,
                I +
                  (!V.key || (G && G.key === V.key) ? "" : ("" + V.key).replace(at, "$&/") + "/") +
                  c,
              )),
            g.push(V)),
        1
      );
    if (((G = 0), (U = U === "" ? "." : U + ":"), xe(c)))
      for (var $ = 0; $ < c.length; $++) {
        B = c[$];
        var ee = U + Fe(B, $);
        G += et(B, g, I, ee, V);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), $ = 0; !(B = c.next()).done;)
        ((B = B.value), (ee = U + Fe(B, $++)), (G += et(B, g, I, ee, V)));
    else if (B === "object")
      throw (
        (g = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : g) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return G;
  }
  function ct(c, g, I) {
    if (c == null) return c;
    var U = [],
      V = 0;
    return (
      et(c, U, "", "", function (B) {
        return g.call(I, B, V++);
      }),
      U
    );
  }
  function ze(c) {
    if (c._status === -1) {
      var g = c._result;
      ((g = g()),
        g.then(
          function (I) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = I));
          },
          function (I) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = I));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = g)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ie = { current: null },
    S = { transition: null },
    R = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: S, ReactCurrentOwner: Ce };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
      map: ct,
      forEach: function (c, g, I) {
        ct(
          c,
          function () {
            g.apply(this, arguments);
          },
          I,
        );
      },
      count: function (c) {
        var g = 0;
        return (
          ct(c, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (c) {
        return (
          ct(c, function (g) {
            return g;
          }) || []
        );
      },
      only: function (c) {
        if (!yt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (F.Component = Y),
    (F.Fragment = m),
    (F.Profiler = M),
    (F.PureComponent = st),
    (F.StrictMode = Q),
    (F.Suspense = K),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (F.act = _),
    (F.cloneElement = function (c, g, I) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var U = We({}, c.props),
        V = c.key,
        B = c.ref,
        G = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((B = g.ref), (G = Ce.current)),
          g.key !== void 0 && (V = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var $ = c.type.defaultProps;
        for (ee in g)
          be.call(g, ee) &&
            !Le.hasOwnProperty(ee) &&
            (U[ee] = g[ee] === void 0 && $ !== void 0 ? $[ee] : g[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) U.children = I;
      else if (1 < ee) {
        $ = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) $[Ue] = arguments[Ue + 2];
        U.children = $;
      }
      return { $$typeof: v, type: c.type, key: V, ref: B, props: U, _owner: G };
    }),
    (F.createContext = function (c) {
      return (
        (c = {
          $$typeof: oe,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: D, _context: c }),
        (c.Consumer = c)
      );
    }),
    (F.createElement = Qe),
    (F.createFactory = function (c) {
      var g = Qe.bind(null, c);
      return ((g.type = c), g);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (c) {
      return { $$typeof: pe, render: c };
    }),
    (F.isValidElement = yt),
    (F.lazy = function (c) {
      return { $$typeof: we, _payload: { _status: -1, _result: c }, _init: ze };
    }),
    (F.memo = function (c, g) {
      return { $$typeof: _e, type: c, compare: g === void 0 ? null : g };
    }),
    (F.startTransition = function (c) {
      var g = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = g;
      }
    }),
    (F.unstable_act = _),
    (F.useCallback = function (c, g) {
      return ie.current.useCallback(c, g);
    }),
    (F.useContext = function (c) {
      return ie.current.useContext(c);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (c) {
      return ie.current.useDeferredValue(c);
    }),
    (F.useEffect = function (c, g) {
      return ie.current.useEffect(c, g);
    }),
    (F.useId = function () {
      return ie.current.useId();
    }),
    (F.useImperativeHandle = function (c, g, I) {
      return ie.current.useImperativeHandle(c, g, I);
    }),
    (F.useInsertionEffect = function (c, g) {
      return ie.current.useInsertionEffect(c, g);
    }),
    (F.useLayoutEffect = function (c, g) {
      return ie.current.useLayoutEffect(c, g);
    }),
    (F.useMemo = function (c, g) {
      return ie.current.useMemo(c, g);
    }),
    (F.useReducer = function (c, g, I) {
      return ie.current.useReducer(c, g, I);
    }),
    (F.useRef = function (c) {
      return ie.current.useRef(c);
    }),
    (F.useState = function (c) {
      return ie.current.useState(c);
    }),
    (F.useSyncExternalStore = function (c, g, I) {
      return ie.current.useSyncExternalStore(c, g, I);
    }),
    (F.useTransition = function () {
      return ie.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var Pa;
function Tu() {
  return (Pa || ((Pa = 1), (ju.exports = Vf())), ju.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Bf() {
  if (La) return gr;
  La = 1;
  var v = Tu(),
    L = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    Q = Object.prototype.hasOwnProperty,
    M = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    D = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(pe, K, _e) {
    var we,
      ne = {},
      q = null,
      $e = null;
    (_e !== void 0 && (q = "" + _e),
      K.key !== void 0 && (q = "" + K.key),
      K.ref !== void 0 && ($e = K.ref));
    for (we in K) Q.call(K, we) && !D.hasOwnProperty(we) && (ne[we] = K[we]);
    if (pe && pe.defaultProps)
      for (we in ((K = pe.defaultProps), K)) ne[we] === void 0 && (ne[we] = K[we]);
    return { $$typeof: L, type: pe, key: q, ref: $e, props: ne, _owner: M.current };
  }
  return ((gr.Fragment = m), (gr.jsx = oe), (gr.jsxs = oe), gr);
}
var za;
function Hf() {
  return (za || ((za = 1), (Cu.exports = Bf())), Cu.exports);
}
var h = Hf(),
  Rl = Tu(),
  Ll = {},
  Pu = { exports: {} },
  Ie = {},
  Lu = { exports: {} },
  zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function $f() {
  return (
    Ta ||
      ((Ta = 1),
      (function (v) {
        function L(S, R) {
          var _ = S.length;
          S.push(R);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              g = S[c];
            if (0 < M(g, R)) ((S[c] = R), (S[_] = g), (_ = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function Q(S) {
          if (S.length === 0) return null;
          var R = S[0],
            _ = S.pop();
          if (_ !== R) {
            S[0] = _;
            e: for (var c = 0, g = S.length, I = g >>> 1; c < I;) {
              var U = 2 * (c + 1) - 1,
                V = S[U],
                B = U + 1,
                G = S[B];
              if (0 > M(V, _))
                B < g && 0 > M(G, V)
                  ? ((S[c] = G), (S[B] = _), (c = B))
                  : ((S[c] = V), (S[U] = _), (c = U));
              else if (B < g && 0 > M(G, _)) ((S[c] = G), (S[B] = _), (c = B));
              else break e;
            }
          }
          return R;
        }
        function M(S, R) {
          var _ = S.sortIndex - R.sortIndex;
          return _ !== 0 ? _ : S.id - R.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var D = performance;
          v.unstable_now = function () {
            return D.now();
          };
        } else {
          var oe = Date,
            pe = oe.now();
          v.unstable_now = function () {
            return oe.now() - pe;
          };
        }
        var K = [],
          _e = [],
          we = 1,
          ne = null,
          q = 3,
          $e = !1,
          We = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          vt = typeof clearTimeout == "function" ? clearTimeout : null,
          st = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(S) {
          for (var R = m(_e); R !== null;) {
            if (R.callback === null) Q(_e);
            else if (R.startTime <= S) (Q(_e), (R.sortIndex = R.expirationTime), L(K, R));
            else break;
            R = m(_e);
          }
        }
        function xe(S) {
          if (((b = !1), qe(S), !We))
            if (m(K) !== null) ((We = !0), ze(be));
            else {
              var R = m(_e);
              R !== null && ie(xe, R.startTime - S);
            }
        }
        function be(S, R) {
          ((We = !1), b && ((b = !1), vt(Qe), (Qe = -1)), ($e = !0));
          var _ = q;
          try {
            for (qe(R), ne = m(K); ne !== null && (!(ne.expirationTime > R) || (S && !Kt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (q = ne.priorityLevel));
                var g = c(ne.expirationTime <= R);
                ((R = v.unstable_now()),
                  typeof g == "function" ? (ne.callback = g) : ne === m(K) && Q(K),
                  qe(R));
              } else Q(K);
              ne = m(K);
            }
            if (ne !== null) var I = !0;
            else {
              var U = m(_e);
              (U !== null && ie(xe, U.startTime - R), (I = !1));
            }
            return I;
          } finally {
            ((ne = null), (q = _), ($e = !1));
          }
        }
        var Ce = !1,
          Le = null,
          Qe = -1,
          Ct = 5,
          yt = -1;
        function Kt() {
          return !(v.unstable_now() - yt < Ct);
        }
        function at() {
          if (Le !== null) {
            var S = v.unstable_now();
            yt = S;
            var R = !0;
            try {
              R = Le(!0, S);
            } finally {
              R ? Fe() : ((Ce = !1), (Le = null));
            }
          } else Ce = !1;
        }
        var Fe;
        if (typeof st == "function")
          Fe = function () {
            st(at);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            ct = et.port2;
          ((et.port1.onmessage = at),
            (Fe = function () {
              ct.postMessage(null);
            }));
        } else
          Fe = function () {
            Y(at, 0);
          };
        function ze(S) {
          ((Le = S), Ce || ((Ce = !0), Fe()));
        }
        function ie(S, R) {
          Qe = Y(function () {
            S(v.unstable_now());
          }, R);
        }
        ((v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            We || $e || ((We = !0), ze(be));
          }),
          (v.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ct = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return m(K);
          }),
          (v.unstable_next = function (S) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = q;
            }
            var _ = q;
            q = R;
            try {
              return S();
            } finally {
              q = _;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (S, R) {
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
            var _ = q;
            q = S;
            try {
              return R();
            } finally {
              q = _;
            }
          }),
          (v.unstable_scheduleCallback = function (S, R, _) {
            var c = v.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
              S)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = _ + g),
              (S = {
                id: we++,
                callback: R,
                priorityLevel: S,
                startTime: _,
                expirationTime: g,
                sortIndex: -1,
              }),
              _ > c
                ? ((S.sortIndex = _),
                  L(_e, S),
                  m(K) === null &&
                    S === m(_e) &&
                    (b ? (vt(Qe), (Qe = -1)) : (b = !0), ie(xe, _ - c)))
                : ((S.sortIndex = g), L(K, S), We || $e || ((We = !0), ze(be))),
              S
            );
          }),
          (v.unstable_shouldYield = Kt),
          (v.unstable_wrapCallback = function (S) {
            var R = q;
            return function () {
              var _ = q;
              q = R;
              try {
                return S.apply(this, arguments);
              } finally {
                q = _;
              }
            };
          }));
      })(zu)),
    zu
  );
}
var Ra;
function Wf() {
  return (Ra || ((Ra = 1), (Lu.exports = $f())), Lu.exports);
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
function Qf() {
  if (Oa) return Ie;
  Oa = 1;
  var v = Tu(),
    L = Wf();
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
  var Q = new Set(),
    M = {};
  function D(e, t) {
    (oe(e, t), oe(e + "Capture", t));
  }
  function oe(e, t) {
    for (M[e] = t, e = 0; e < t.length; e++) Q.add(t[e]);
  }
  var pe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    K = Object.prototype.hasOwnProperty,
    _e =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    we = {},
    ne = {};
  function q(e) {
    return K.call(ne, e) ? !0 : K.call(we, e) ? !1 : _e.test(e) ? (ne[e] = !0) : ((we[e] = !0), !1);
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
  function We(e, t, n, r) {
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
  function b(e, t, n, r, l, i, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = u));
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
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(vt, st);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(vt, st);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(vt, st);
      Y[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (Y.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Y[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function qe(e, t, n, r) {
    var l = Y.hasOwnProperty(t) ? Y[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (We(t, n, l, r) && (n = null),
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
  var xe = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Ce = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Ct = Symbol.for("react.profiler"),
    yt = Symbol.for("react.provider"),
    Kt = Symbol.for("react.context"),
    at = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    ct = Symbol.for("react.memo"),
    ze = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (S && e[S]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var _ = Object.assign,
    c;
  function g(e) {
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
  var I = !1;
  function U(e, t) {
    if (!e || I) return "";
    I = !0;
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
            i = r.stack.split(`
`),
            u = l.length - 1,
            o = i.length - 1;
          1 <= u && 0 <= o && l[u] !== i[o];
        )
          o--;
        for (; 1 <= u && 0 <= o; u--, o--)
          if (l[u] !== i[o]) {
            if (u !== 1 || o !== 1)
              do
                if ((u--, o--, 0 > o || l[u] !== i[o])) {
                  var s =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= u && 0 <= o);
            break;
          }
      }
    } finally {
      ((I = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? g(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return g(e.type);
      case 16:
        return g("Lazy");
      case 13:
        return g("Suspense");
      case 19:
        return g("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = U(e.type, !1)), e);
      case 11:
        return ((e = U(e.type.render, !1)), e);
      case 1:
        return ((e = U(e.type, !0)), e);
      default:
        return "";
    }
  }
  function B(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Ce:
        return "Portal";
      case Ct:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Kt:
          return (e.displayName || "Context") + ".Consumer";
        case yt:
          return (e._context.displayName || "Context") + ".Provider";
        case at:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ct:
          return ((t = e.displayName || null), t !== null ? t : B(e.type) || "Memo");
        case ze:
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
          set: function (u) {
            ((r = "" + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Ru(e) {
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
  function xr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ou(e, t) {
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
  function Du(e, t) {
    ((t = t.checked), t != null && qe(e, "checked", t, !1));
  }
  function Dl(e, t) {
    Du(e, t);
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
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, $(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Mu(e, t, n) {
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
  function Ml(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var On = Array.isArray;
  function on(e, t, n, r) {
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
  function Iu(e, t) {
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
  function Fu(e, t) {
    var n = $(t.value),
      r = $(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Au(e) {
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
      ? Au(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var kr,
    Vu = (function (e) {
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
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kr.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Dn(e, t) {
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
    $a = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mn).forEach(function (e) {
    $a.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mn[t] = Mn[e]));
    });
  });
  function Bu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Mn.hasOwnProperty(e) && Mn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Hu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bu(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Wa = _(
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
  function Bl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Hl = null,
    sn = null,
    an = null;
  function $u(e) {
    if ((e = rr(e))) {
      if (typeof Hl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Wr(t)), Hl(e.stateNode, e.type, t));
    }
  }
  function Wu(e) {
    sn ? (an ? an.push(e) : (an = [e])) : (sn = e);
  }
  function Qu() {
    if (sn) {
      var e = sn,
        t = an;
      if (((an = sn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
    }
  }
  function Ku(e, t) {
    return e(t);
  }
  function Yu() {}
  var $l = !1;
  function Gu(e, t, n) {
    if ($l) return e(t, n);
    $l = !0;
    try {
      return Ku(e, t, n);
    } finally {
      (($l = !1), (sn !== null || an !== null) && (Yu(), Qu()));
    }
  }
  function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wr(n);
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
  if (pe)
    try {
      var Fn = {};
      (Object.defineProperty(Fn, "passive", {
        get: function () {
          Wl = !0;
        },
      }),
        window.addEventListener("test", Fn, Fn),
        window.removeEventListener("test", Fn, Fn));
    } catch {
      Wl = !1;
    }
  function Qa(e, t, n, r, l, i, u, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (w) {
      this.onError(w);
    }
  }
  var Un = !1,
    Sr = null,
    Er = !1,
    Ql = null,
    Ka = {
      onError: function (e) {
        ((Un = !0), (Sr = e));
      },
    };
  function Ya(e, t, n, r, l, i, u, o, s) {
    ((Un = !1), (Sr = null), Qa.apply(Ka, arguments));
  }
  function Ga(e, t, n, r, l, i, u, o, s) {
    if ((Ya.apply(this, arguments), Un)) {
      if (Un) {
        var p = Sr;
        ((Un = !1), (Sr = null));
      } else throw Error(m(198));
      Er || ((Er = !0), (Ql = p));
    }
  }
  function Yt(e) {
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
  function Xu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Zu(e) {
    if (Yt(e) !== e) throw Error(m(188));
  }
  function Xa(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Yt(e)), t === null)) throw Error(m(188));
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
          if (i === n) return (Zu(l), e);
          if (i === r) return (Zu(l), t);
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) ((n = l), (r = i));
      else {
        for (var u = !1, o = l.child; o;) {
          if (o === n) {
            ((u = !0), (n = l), (r = i));
            break;
          }
          if (o === r) {
            ((u = !0), (r = l), (n = i));
            break;
          }
          o = o.sibling;
        }
        if (!u) {
          for (o = i.child; o;) {
            if (o === n) {
              ((u = !0), (n = i), (r = l));
              break;
            }
            if (o === r) {
              ((u = !0), (r = i), (n = l));
              break;
            }
            o = o.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ju(e) {
    return ((e = Xa(e)), e !== null ? qu(e) : null);
  }
  function qu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = qu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bu = L.unstable_scheduleCallback,
    eo = L.unstable_cancelCallback,
    Za = L.unstable_shouldYield,
    Ja = L.unstable_requestPaint,
    se = L.unstable_now,
    qa = L.unstable_getCurrentPriorityLevel,
    Kl = L.unstable_ImmediatePriority,
    to = L.unstable_UserBlockingPriority,
    Nr = L.unstable_NormalPriority,
    ba = L.unstable_LowPriority,
    no = L.unstable_IdlePriority,
    _r = null,
    ft = null;
  function ec(e) {
    if (ft && typeof ft.onCommitFiberRoot == "function")
      try {
        ft.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : rc,
    tc = Math.log,
    nc = Math.LN2;
  function rc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((tc(e) / nc) | 0)) | 0);
  }
  var Cr = 64,
    jr = 4194304;
  function An(e) {
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
  function Pr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var o = u & ~l;
      o !== 0 ? (r = An(o)) : ((i &= u), i !== 0 && (r = An(i)));
    } else ((u = n & ~l), u !== 0 ? (r = An(u)) : i !== 0 && (r = An(i)));
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
        ((n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
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
  function ic(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var u = 31 - tt(i),
        o = 1 << u,
        s = l[u];
      (s === -1
        ? ((o & n) === 0 || (o & r) !== 0) && (l[u] = lc(o, t))
        : s <= t && (e.expiredLanes |= o),
        (i &= ~o));
    }
  }
  function Yl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ro() {
    var e = Cr;
    return ((Cr <<= 1), (Cr & 4194240) === 0 && (Cr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - tt(t)),
      (e[t] = n));
  }
  function uc(e, t) {
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
      var l = 31 - tt(n),
        i = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
    }
  }
  function Xl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - tt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var W = 0;
  function lo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var io,
    Zl,
    uo,
    oo,
    so,
    Jl = !1,
    Lr = [],
    jt = null,
    Pt = null,
    Lt = null,
    Bn = new Map(),
    Hn = new Map(),
    zt = [],
    oc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ao(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        Pt = null;
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
        Hn.delete(t.pointerId);
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
        t !== null && ((t = rr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((jt = $n(jt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Pt = $n(Pt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Lt = $n(Lt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Bn.set(i, $n(Bn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Hn.set(i, $n(Hn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function co(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Xu(n)), t !== null)) {
            ((e.blockedOn = t),
              so(e.priority, function () {
                uo(n);
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
  function zr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Vl = r), n.target.dispatchEvent(r), (Vl = null));
      } else return ((t = rr(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function fo(e, t, n) {
    zr(e) && n.delete(t);
  }
  function ac() {
    ((Jl = !1),
      jt !== null && zr(jt) && (jt = null),
      Pt !== null && zr(Pt) && (Pt = null),
      Lt !== null && zr(Lt) && (Lt = null),
      Bn.forEach(fo),
      Hn.forEach(fo));
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), L.unstable_scheduleCallback(L.unstable_NormalPriority, ac)));
  }
  function Qn(e) {
    function t(l) {
      return Wn(l, e);
    }
    if (0 < Lr.length) {
      Wn(Lr[0], e);
      for (var n = 1; n < Lr.length; n++) {
        var r = Lr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      jt !== null && Wn(jt, e),
        Pt !== null && Wn(Pt, e),
        Lt !== null && Wn(Lt, e),
        Bn.forEach(t),
        Hn.forEach(t),
        n = 0;
      n < zt.length;
      n++
    )
      ((r = zt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null);)
      (co(n), n.blockedOn === null && zt.shift());
  }
  var cn = xe.ReactCurrentBatchConfig,
    Tr = !0;
  function cc(e, t, n, r) {
    var l = W,
      i = cn.transition;
    cn.transition = null;
    try {
      ((W = 1), ql(e, t, n, r));
    } finally {
      ((W = l), (cn.transition = i));
    }
  }
  function fc(e, t, n, r) {
    var l = W,
      i = cn.transition;
    cn.transition = null;
    try {
      ((W = 4), ql(e, t, n, r));
    } finally {
      ((W = l), (cn.transition = i));
    }
  }
  function ql(e, t, n, r) {
    if (Tr) {
      var l = bl(e, t, n, r);
      if (l === null) (vi(e, t, r, Rr, n), ao(e, r));
      else if (sc(l, e, t, n, r)) r.stopPropagation();
      else if ((ao(e, r), t & 4 && -1 < oc.indexOf(e))) {
        for (; l !== null;) {
          var i = rr(l);
          if (
            (i !== null && io(i), (i = bl(e, t, n, r)), i === null && vi(e, t, r, Rr, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else vi(e, t, r, null, n);
    }
  }
  var Rr = null;
  function bl(e, t, n, r) {
    if (((Rr = null), (e = Bl(r)), (e = Gt(e)), e !== null))
      if (((t = Yt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Xu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Rr = e), null);
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
        switch (qa()) {
          case Kl:
            return 1;
          case to:
            return 4;
          case Nr:
          case ba:
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
  var Tt = null,
    ei = null,
    Or = null;
  function mo() {
    if (Or) return Or;
    var e,
      t = ei,
      n = t.length,
      r,
      l = "value" in Tt ? Tt.value : Tt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Dr(e) {
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
    function t(n, r, l, i, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Mr
          : ho),
        (this.isPropagationStopped = ho),
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
  var fn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ti = Ae(fn),
    Kn = _({}, fn, { view: 0, detail: 0 }),
    dc = Ae(Kn),
    ni,
    ri,
    Yn,
    Ir = _({}, Kn, {
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
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((ni = e.screenX - Yn.screenX), (ri = e.screenY - Yn.screenY))
                : (ri = ni = 0),
              (Yn = e)),
            ni);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ri;
      },
    }),
    vo = Ae(Ir),
    pc = _({}, Ir, { dataTransfer: 0 }),
    mc = Ae(pc),
    hc = _({}, Kn, { relatedTarget: 0 }),
    li = Ae(hc),
    vc = _({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yc = Ae(vc),
    gc = _({}, fn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wc = Ae(gc),
    xc = _({}, fn, { data: 0 }),
    yo = Ae(xc),
    kc = {
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
    Sc = {
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
  function Nc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ec[e]) ? !!t[e] : !1;
  }
  function ii() {
    return Nc;
  }
  var _c = _({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = kc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Dr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Sc[e.keyCode] || "Unidentified"
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
        return e.type === "keypress" ? Dr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Dr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Cc = Ae(_c),
    jc = _({}, Ir, {
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
    go = Ae(jc),
    Pc = _({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ii,
    }),
    Lc = Ae(Pc),
    zc = _({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tc = Ae(zc),
    Rc = _({}, Ir, {
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
    Oc = Ae(Rc),
    Dc = [9, 13, 27, 32],
    ui = pe && "CompositionEvent" in window,
    Gn = null;
  pe && "documentMode" in document && (Gn = document.documentMode);
  var Mc = pe && "TextEvent" in window && !Gn,
    wo = pe && (!ui || (Gn && 8 < Gn && 11 >= Gn)),
    xo = " ",
    ko = !1;
  function So(e, t) {
    switch (e) {
      case "keyup":
        return Dc.indexOf(t.keyCode) !== -1;
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
  function Eo(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var dn = !1;
  function Ic(e, t) {
    switch (e) {
      case "compositionend":
        return Eo(t);
      case "keypress":
        return t.which !== 32 ? null : ((ko = !0), xo);
      case "textInput":
        return ((e = t.data), e === xo && ko ? null : e);
      default:
        return null;
    }
  }
  function Fc(e, t) {
    if (dn)
      return e === "compositionend" || (!ui && So(e, t))
        ? ((e = mo()), (Or = ei = Tt = null), (dn = !1), e)
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
  function _o(e, t, n, r) {
    (Wu(r),
      (t = Br(t, "onChange")),
      0 < t.length &&
        ((n = new ti("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Xn = null,
    Zn = null;
  function Ac(e) {
    $o(e, 0);
  }
  function Fr(e) {
    var t = yn(e);
    if (Ru(t)) return e;
  }
  function Vc(e, t) {
    if (e === "change") return t;
  }
  var Co = !1;
  if (pe) {
    var oi;
    if (pe) {
      var si = "oninput" in document;
      if (!si) {
        var jo = document.createElement("div");
        (jo.setAttribute("oninput", "return;"), (si = typeof jo.oninput == "function"));
      }
      oi = si;
    } else oi = !1;
    Co = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Po() {
    Xn && (Xn.detachEvent("onpropertychange", Lo), (Zn = Xn = null));
  }
  function Lo(e) {
    if (e.propertyName === "value" && Fr(Zn)) {
      var t = [];
      (_o(t, Zn, e, Bl(e)), Gu(Ac, t));
    }
  }
  function Bc(e, t, n) {
    e === "focusin"
      ? (Po(), (Xn = t), (Zn = n), Xn.attachEvent("onpropertychange", Lo))
      : e === "focusout" && Po();
  }
  function Hc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Zn);
  }
  function $c(e, t) {
    if (e === "click") return Fr(t);
  }
  function Wc(e, t) {
    if (e === "input" || e === "change") return Fr(t);
  }
  function Qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : Qc;
  function Jn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!K.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function zo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function To(e, t) {
    var n = zo(e);
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
      n = zo(n);
    }
  }
  function Ro(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ro(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Oo() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
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
  function Kc(e) {
    var t = Oo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ro(n.ownerDocument.documentElement, n)) {
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
            (l = To(n, i)));
          var u = To(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode);)
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
    }
  }
  var Yc = pe && "documentMode" in document && 11 >= document.documentMode,
    pn = null,
    ci = null,
    qn = null,
    fi = !1;
  function Do(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
      pn == null ||
      pn !== xr(r) ||
      ((r = pn),
      "selectionStart" in r && ai(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (qn && Jn(qn, r)) ||
        ((qn = r),
        (r = Br(ci, "onSelect")),
        0 < r.length &&
          ((t = new ti("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = pn))));
  }
  function Ur(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var mn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    di = {},
    Mo = {};
  pe &&
    ((Mo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mn.animationend.animation,
      delete mn.animationiteration.animation,
      delete mn.animationstart.animation),
    "TransitionEvent" in window || delete mn.transitionend.transition);
  function Ar(e) {
    if (di[e]) return di[e];
    if (!mn[e]) return e;
    var t = mn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mo) return (di[e] = t[n]);
    return e;
  }
  var Io = Ar("animationend"),
    Fo = Ar("animationiteration"),
    Uo = Ar("animationstart"),
    Ao = Ar("transitionend"),
    Vo = new Map(),
    Bo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Rt(e, t) {
    (Vo.set(e, t), D(t, [e]));
  }
  for (var pi = 0; pi < Bo.length; pi++) {
    var mi = Bo[pi],
      Gc = mi.toLowerCase(),
      Xc = mi[0].toUpperCase() + mi.slice(1);
    Rt(Gc, "on" + Xc);
  }
  (Rt(Io, "onAnimationEnd"),
    Rt(Fo, "onAnimationIteration"),
    Rt(Uo, "onAnimationStart"),
    Rt("dblclick", "onDoubleClick"),
    Rt("focusin", "onFocus"),
    Rt("focusout", "onBlur"),
    Rt(Ao, "onTransitionEnd"),
    oe("onMouseEnter", ["mouseout", "mouseover"]),
    oe("onMouseLeave", ["mouseout", "mouseover"]),
    oe("onPointerEnter", ["pointerout", "pointerover"]),
    oe("onPointerLeave", ["pointerout", "pointerover"]),
    D("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    D(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    D("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    D("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    D(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    D(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Ho(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), Ga(r, t, void 0, e), (e.currentTarget = null));
  }
  function $o(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var o = r[u],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== i && l.isPropagationStopped())) break e;
            (Ho(l, o, p), (i = s));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((o = r[u]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            (Ho(l, o, p), (i = s));
          }
      }
    }
    if (Er) throw ((e = Ql), (Er = !1), (Ql = null), e);
  }
  function Z(e, t) {
    var n = t[Si];
    n === void 0 && (n = t[Si] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wo(t, e, 2, !1), n.add(r));
  }
  function hi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wo(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        Q.forEach(function (n) {
          n !== "selectionchange" && (Zc.has(n) || hi(n, !1, e), hi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), hi("selectionchange", !1, t));
    }
  }
  function Wo(e, t, n, r) {
    switch (po(t)) {
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
  function vi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null;) {
              var s = u.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = u.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; o !== null;) {
            if (((u = Gt(o)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = i = u;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Gu(function () {
      var p = i,
        w = Bl(n),
        x = [];
      e: {
        var y = Vo.get(e);
        if (y !== void 0) {
          var E = ti,
            C = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Cc;
              break;
            case "focusin":
              ((C = "focus"), (E = li));
              break;
            case "focusout":
              ((C = "blur"), (E = li));
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
              E = vo;
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
            case Io:
            case Fo:
            case Uo:
              E = yc;
              break;
            case Ao:
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
              E = go;
          }
          var j = (t & 4) !== 0,
            ae = !j && e === "scroll",
            f = j ? (y !== null ? y + "Capture" : null) : y;
          j = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = In(a, f)), k != null && j.push(tr(a, k, d)))),
              ae)
            )
              break;
            a = a.return;
          }
          0 < j.length && ((y = new E(y, C, null, n, w)), x.push({ event: y, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (E = e === "mouseout" || e === "pointerout"),
            y && n !== Vl && (C = n.relatedTarget || n.fromElement) && (Gt(C) || C[gt]))
          )
            break e;
          if (
            (E || y) &&
            ((y =
              w.window === w
                ? w
                : (y = w.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            E
              ? ((C = n.relatedTarget || n.toElement),
                (E = p),
                (C = C ? Gt(C) : null),
                C !== null &&
                  ((ae = Yt(C)), C !== ae || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((E = null), (C = p)),
            E !== C)
          ) {
            if (
              ((j = vo),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((j = go), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (ae = E == null ? y : yn(E)),
              (d = C == null ? y : yn(C)),
              (y = new j(k, a + "leave", E, n, w)),
              (y.target = ae),
              (y.relatedTarget = d),
              (k = null),
              Gt(w) === p &&
                ((j = new j(f, a + "enter", C, n, w)),
                (j.target = d),
                (j.relatedTarget = ae),
                (k = j)),
              (ae = k),
              E && C)
            )
              t: {
                for (j = E, f = C, a = 0, d = j; d; d = hn(d)) a++;
                for (d = 0, k = f; k; k = hn(k)) d++;
                for (; 0 < a - d;) ((j = hn(j)), a--);
                for (; 0 < d - a;) ((f = hn(f)), d--);
                for (; a--;) {
                  if (j === f || (f !== null && j === f.alternate)) break t;
                  ((j = hn(j)), (f = hn(f)));
                }
                j = null;
              }
            else j = null;
            (E !== null && Qo(x, y, E, j, !1), C !== null && ae !== null && Qo(x, ae, C, j, !0));
          }
        }
        e: {
          if (
            ((y = p ? yn(p) : window),
            (E = y.nodeName && y.nodeName.toLowerCase()),
            E === "select" || (E === "input" && y.type === "file"))
          )
            var P = Vc;
          else if (No(y))
            if (Co) P = Wc;
            else {
              P = Hc;
              var z = Bc;
            }
          else
            (E = y.nodeName) &&
              E.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (P = $c);
          if (P && (P = P(e, p))) {
            _o(x, P, n, w);
            break e;
          }
          (z && z(e, y, p),
            e === "focusout" &&
              (z = y._wrapperState) &&
              z.controlled &&
              y.type === "number" &&
              Ml(y, "number", y.value));
        }
        switch (((z = p ? yn(p) : window), e)) {
          case "focusin":
            (No(z) || z.contentEditable === "true") && ((pn = z), (ci = p), (qn = null));
            break;
          case "focusout":
            qn = ci = pn = null;
            break;
          case "mousedown":
            fi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fi = !1), Do(x, n, w));
            break;
          case "selectionchange":
            if (Yc) break;
          case "keydown":
          case "keyup":
            Do(x, n, w);
        }
        var T;
        if (ui)
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
          dn
            ? So(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (wo &&
            n.locale !== "ko" &&
            (dn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && dn && (T = mo())
              : ((Tt = w), (ei = "value" in Tt ? Tt.value : Tt.textContent), (dn = !0))),
          (z = Br(p, O)),
          0 < z.length &&
            ((O = new yo(O, e, null, n, w)),
            x.push({ event: O, listeners: z }),
            T ? (O.data = T) : ((T = Eo(n)), T !== null && (O.data = T)))),
          (T = Mc ? Ic(e, n) : Fc(e, n)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((w = new yo("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: p }),
              (w.data = T))));
      }
      $o(x, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = In(e, n)),
        i != null && r.unshift(tr(e, i, l)),
        (i = In(e, t)),
        i != null && r.push(tr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function hn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qo(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r;) {
      var o = n,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      (o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = In(n, i)), s != null && u.unshift(tr(n, s, o)))
          : l || ((s = In(n, i)), s != null && u.push(tr(n, s, o)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Jc = /\r\n?/g,
    qc = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Jc,
        `
`,
      )
      .replace(qc, "");
  }
  function Hr(e, t, n) {
    if (((t = Ko(t)), Ko(e) !== t && n)) throw Error(m(425));
  }
  function $r() {}
  var yi = null,
    gi = null;
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
    bc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yo = typeof Promise == "function" ? Promise : void 0,
    ef =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yo < "u"
          ? function (e) {
              return Yo.resolve(null).then(e).catch(tf);
            }
          : xi;
  function tf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ki(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Qn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Qn(t);
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
  function Go(e) {
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
  var vn = Math.random().toString(36).slice(2),
    dt = "__reactFiber$" + vn,
    nr = "__reactProps$" + vn,
    gt = "__reactContainer$" + vn,
    Si = "__reactEvents$" + vn,
    nf = "__reactListeners$" + vn,
    rf = "__reactHandles$" + vn;
  function Gt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[gt] || n[dt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Go(e); e !== null;) {
            if ((n = e[dt])) return n;
            e = Go(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[dt] || e[gt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function yn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var Ei = [],
    gn = -1;
  function Dt(e) {
    return { current: e };
  }
  function J(e) {
    0 > gn || ((e.current = Ei[gn]), (Ei[gn] = null), gn--);
  }
  function X(e, t) {
    (gn++, (Ei[gn] = e.current), (e.current = t));
  }
  var Mt = {},
    ke = Dt(Mt),
    Te = Dt(!1),
    Xt = Mt;
  function wn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mt;
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
  function Re(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Qr() {
    (J(Te), J(ke));
  }
  function Xo(e, t, n) {
    if (ke.current !== Mt) throw Error(m(168));
    (X(ke, t), X(Te, n));
  }
  function Zo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, G(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Kr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
      (Xt = ke.current),
      X(ke, e),
      X(Te, Te.current),
      !0
    );
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Zo(e, t, Xt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(ke),
        X(ke, e))
      : J(Te),
      X(Te, n));
  }
  var wt = null,
    Yr = !1,
    Ni = !1;
  function qo(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function lf(e) {
    ((Yr = !0), qo(e));
  }
  function It() {
    if (!Ni && wt !== null) {
      Ni = !0;
      var e = 0,
        t = W;
      try {
        var n = wt;
        for (W = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((wt = null), (Yr = !1));
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), bu(Kl, It), l);
      } finally {
        ((W = t), (Ni = !1));
      }
    }
    return null;
  }
  var xn = [],
    kn = 0,
    Gr = null,
    Xr = 0,
    Ke = [],
    Ye = 0,
    Zt = null,
    xt = 1,
    kt = "";
  function Jt(e, t) {
    ((xn[kn++] = Xr), (xn[kn++] = Gr), (Gr = e), (Xr = t));
  }
  function bo(e, t, n) {
    ((Ke[Ye++] = xt), (Ke[Ye++] = kt), (Ke[Ye++] = Zt), (Zt = e));
    var r = xt;
    e = kt;
    var l = 32 - tt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - tt(t) + l;
    if (30 < i) {
      var u = l - (l % 5);
      ((i = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (xt = (1 << (32 - tt(t) + l)) | (n << l) | r),
        (kt = i + e));
    } else ((xt = (1 << i) | (n << l) | r), (kt = e));
  }
  function _i(e) {
    e.return !== null && (Jt(e, 1), bo(e, 1, 0));
  }
  function Ci(e) {
    for (; e === Gr;) ((Gr = xn[--kn]), (xn[kn] = null), (Xr = xn[--kn]), (xn[kn] = null));
    for (; e === Zt;)
      ((Zt = Ke[--Ye]),
        (Ke[Ye] = null),
        (kt = Ke[--Ye]),
        (Ke[Ye] = null),
        (xt = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var Ve = null,
    Be = null,
    te = !1,
    rt = null;
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
          t !== null ? ((e.stateNode = t), (Ve = e), (Be = Ot(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (Be = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Zt !== null ? { id: xt, overflow: kt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ve = e),
              (Be = null),
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
      var t = Be;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (ji(e)) throw Error(m(418));
          t = Ot(n.nextSibling);
          var r = Ve;
          t && ts(e, t) ? es(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
        }
      } else {
        if (ji(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e;
  }
  function Zr(e) {
    if (e !== Ve) return !1;
    if (!te) return (ns(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (ji(e)) throw (rs(), Error(m(418)));
      for (; t;) (es(e, t), (t = Ot(t.nextSibling)));
    }
    if ((ns(e), e.tag === 13)) {
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
    } else Be = Ve ? Ot(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = Be; e;) e = Ot(e.nextSibling);
  }
  function Sn() {
    ((Be = Ve = null), (te = !1));
  }
  function Li(e) {
    rt === null ? (rt = [e]) : rt.push(e);
  }
  var uf = xe.ReactCurrentBatchConfig;
  function lr(e, t, n) {
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
          : ((t = function (u) {
              var o = l.refs;
              u === null ? delete o[i] : (o[i] = u);
            }),
            (t._stringRef = i),
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
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function is(e) {
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
      return ((f = Wt(f, a)), (f.index = 0), (f.sibling = null), f);
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
    function u(f) {
      return (e && f.alternate === null && (f.flags |= 2), f);
    }
    function o(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = xu(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var P = d.type;
      return P === Le
        ? w(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === P ||
              (typeof P == "object" && P !== null && P.$$typeof === ze && ls(P) === a.type))
          ? ((k = l(a, d.props)), (k.ref = lr(f, a, d)), (k.return = f), k)
          : ((k = kl(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = lr(f, a, d)),
            (k.return = f),
            k);
    }
    function p(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = ku(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function w(f, a, d, k, P) {
      return a === null || a.tag !== 7
        ? ((a = un(d, f.mode, k, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = xu("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = kl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case Ce:
            return ((a = ku(a, f.mode, d)), (a.return = f), a);
          case ze:
            var k = a._init;
            return x(f, k(a._payload), d);
        }
        if (On(a) || R(a)) return ((a = un(a, f.mode, d, null)), (a.return = f), a);
        Jr(f, a);
      }
      return null;
    }
    function y(f, a, d, k) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : o(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === P ? s(f, a, d, k) : null;
          case Ce:
            return d.key === P ? p(f, a, d, k) : null;
          case ze:
            return ((P = d._init), y(f, a, P(d._payload), k));
        }
        if (On(d) || R(d)) return P !== null ? null : w(f, a, d, k, null);
        Jr(f, d);
      }
      return null;
    }
    function E(f, a, d, k, P) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), o(a, f, "" + k, P));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case be:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, P));
          case Ce:
            return ((f = f.get(k.key === null ? d : k.key) || null), p(a, f, k, P));
          case ze:
            var z = k._init;
            return E(f, a, d, z(k._payload), P);
        }
        if (On(k) || R(k)) return ((f = f.get(d) || null), w(a, f, k, P, null));
        Jr(a, k);
      }
      return null;
    }
    function C(f, a, d, k) {
      for (var P = null, z = null, T = a, O = (a = 0), ve = null; T !== null && O < d.length; O++) {
        T.index > O ? ((ve = T), (T = null)) : (ve = T.sibling);
        var H = y(f, T, d[O], k);
        if (H === null) {
          T === null && (T = ve);
          break;
        }
        (e && T && H.alternate === null && t(f, T),
          (a = i(H, a, O)),
          z === null ? (P = H) : (z.sibling = H),
          (z = H),
          (T = ve));
      }
      if (O === d.length) return (n(f, T), te && Jt(f, O), P);
      if (T === null) {
        for (; O < d.length; O++)
          ((T = x(f, d[O], k)),
            T !== null && ((a = i(T, a, O)), z === null ? (P = T) : (z.sibling = T), (z = T)));
        return (te && Jt(f, O), P);
      }
      for (T = r(f, T); O < d.length; O++)
        ((ve = E(T, f, O, d[O], k)),
          ve !== null &&
            (e && ve.alternate !== null && T.delete(ve.key === null ? O : ve.key),
            (a = i(ve, a, O)),
            z === null ? (P = ve) : (z.sibling = ve),
            (z = ve)));
      return (
        e &&
          T.forEach(function (Qt) {
            return t(f, Qt);
          }),
        te && Jt(f, O),
        P
      );
    }
    function j(f, a, d, k) {
      var P = R(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var z = (P = null), T = a, O = (a = 0), ve = null, H = d.next();
        T !== null && !H.done;
        O++, H = d.next()
      ) {
        T.index > O ? ((ve = T), (T = null)) : (ve = T.sibling);
        var Qt = y(f, T, H.value, k);
        if (Qt === null) {
          T === null && (T = ve);
          break;
        }
        (e && T && Qt.alternate === null && t(f, T),
          (a = i(Qt, a, O)),
          z === null ? (P = Qt) : (z.sibling = Qt),
          (z = Qt),
          (T = ve));
      }
      if (H.done) return (n(f, T), te && Jt(f, O), P);
      if (T === null) {
        for (; !H.done; O++, H = d.next())
          ((H = x(f, H.value, k)),
            H !== null && ((a = i(H, a, O)), z === null ? (P = H) : (z.sibling = H), (z = H)));
        return (te && Jt(f, O), P);
      }
      for (T = r(f, T); !H.done; O++, H = d.next())
        ((H = E(T, f, O, H.value, k)),
          H !== null &&
            (e && H.alternate !== null && T.delete(H.key === null ? O : H.key),
            (a = i(H, a, O)),
            z === null ? (P = H) : (z.sibling = H),
            (z = H)));
      return (
        e &&
          T.forEach(function (Af) {
            return t(f, Af);
          }),
        te && Jt(f, O),
        P
      );
    }
    function ae(f, a, d, k) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Le &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var P = d.key, z = a; z !== null;) {
                if (z.key === P) {
                  if (((P = d.type), P === Le)) {
                    if (z.tag === 7) {
                      (n(f, z.sibling), (a = l(z, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    z.elementType === P ||
                    (typeof P == "object" && P !== null && P.$$typeof === ze && ls(P) === z.type)
                  ) {
                    (n(f, z.sibling),
                      (a = l(z, d.props)),
                      (a.ref = lr(f, z, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, z);
                  break;
                } else t(f, z);
                z = z.sibling;
              }
              d.type === Le
                ? ((a = un(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = kl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = lr(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return u(f);
          case Ce:
            e: {
              for (z = d.key; a !== null;) {
                if (a.key === z)
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
              ((a = ku(d, f.mode, k)), (a.return = f), (f = a));
            }
            return u(f);
          case ze:
            return ((z = d._init), ae(f, a, z(d._payload), k));
        }
        if (On(d)) return C(f, a, d, k);
        if (R(d)) return j(f, a, d, k);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = xu(d, f.mode, k)), (a.return = f), (f = a)),
          u(f))
        : n(f, a);
    }
    return ae;
  }
  var En = is(!0),
    us = is(!1),
    qr = Dt(null),
    br = null,
    Nn = null,
    zi = null;
  function Ti() {
    zi = Nn = br = null;
  }
  function Ri(e) {
    var t = qr.current;
    (J(qr), (e._currentValue = t));
  }
  function Oi(e, t, n) {
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
  function _n(e, t) {
    ((br = e),
      (zi = Nn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Oe = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (zi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
        if (br === null) throw Error(m(308));
        ((Nn = e), (br.dependencies = { lanes: 0, firstContext: e }));
      } else Nn = Nn.next = e;
    return t;
  }
  var qt = null;
  function Di(e) {
    qt === null ? (qt = [e]) : qt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      St(e, r)
    );
  }
  function St(e, t) {
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
  var Ft = !1;
  function Mi(e) {
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
  function Et(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (A & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        St(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      St(e, n)
    );
  }
  function el(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  function as(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (i === null ? (l = i = u) : (i = i.next = u), (n = n.next));
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
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var i = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      ((s.next = null), u === null ? (i = p) : (u.next = p), (u = s));
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (o = w.lastBaseUpdate),
        o !== u && (o === null ? (w.firstBaseUpdate = p) : (o.next = p), (w.lastBaseUpdate = s)));
    }
    if (i !== null) {
      var x = l.baseState;
      ((u = 0), (w = p = s = null), (o = i));
      do {
        var y = o.lane,
          E = o.eventTime;
        if ((r & y) === y) {
          w !== null &&
            (w = w.next =
              {
                eventTime: E,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var C = e,
              j = o;
            switch (((y = t), (E = n), j.tag)) {
              case 1:
                if (((C = j.payload), typeof C == "function")) {
                  x = C.call(E, x, y);
                  break e;
                }
                x = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = j.payload), (y = typeof C == "function" ? C.call(E, x, y) : C), y == null)
                )
                  break e;
                x = _({}, x, y);
                break e;
              case 2:
                Ft = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [o]) : y.push(o));
        } else
          ((E = {
            eventTime: E,
            lane: y,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            w === null ? ((p = w = E), (s = x)) : (w = w.next = E),
            (u |= y));
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          ((y = o),
            (o = y.next),
            (y.next = null),
            (l.lastBaseUpdate = y),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (w === null && (s = x),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = w),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      ((tn |= u), (e.lanes = u), (e.memoizedState = x));
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
  var ir = {},
    pt = Dt(ir),
    ur = Dt(ir),
    or = Dt(ir);
  function bt(e) {
    if (e === ir) throw Error(m(174));
    return e;
  }
  function Ii(e, t) {
    switch ((X(or, t), X(ur, e), X(pt, ir), (e = t.nodeType), e)) {
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
    (J(pt), X(pt, t));
  }
  function Cn() {
    (J(pt), J(ur), J(or));
  }
  function fs(e) {
    bt(or.current);
    var t = bt(pt.current),
      n = Fl(t, e.type);
    t !== n && (X(ur, e), X(pt, n));
  }
  function Fi(e) {
    ur.current === e && (J(pt), J(ur));
  }
  var re = Dt(0);
  function nl(e) {
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
  var rl = xe.ReactCurrentDispatcher,
    Vi = xe.ReactCurrentBatchConfig,
    en = 0,
    le = null,
    fe = null,
    me = null,
    ll = !1,
    sr = !1,
    ar = 0,
    of = 0;
  function Se() {
    throw Error(m(321));
  }
  function Bi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Hi(e, t, n, r, l, i) {
    if (
      ((en = i),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? ff : df),
      (e = n(r, l)),
      sr)
    ) {
      i = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= i)) throw Error(m(301));
        ((i += 1), (me = fe = null), (t.updateQueue = null), (rl.current = pf), (e = n(r, l)));
      } while (sr);
    }
    if (
      ((rl.current = ol),
      (t = fe !== null && fe.next !== null),
      (en = 0),
      (me = fe = le = null),
      (ll = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function $i() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (me === null ? (le.memoizedState = me = e) : (me = me.next = e), me);
  }
  function Xe() {
    if (fe === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = fe.next;
    var t = me === null ? le.memoizedState : me.next;
    if (t !== null) ((me = t), (fe = e));
    else {
      if (e === null) throw Error(m(310));
      ((fe = e),
        (e = {
          memoizedState: fe.memoizedState,
          baseState: fe.baseState,
          baseQueue: fe.baseQueue,
          queue: fe.queue,
          next: null,
        }),
        me === null ? (le.memoizedState = me = e) : (me = me.next = e));
    }
    return me;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = Xe(),
      n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = fe,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = i.next), (i.next = u));
      }
      ((r.baseQueue = l = i), (n.pending = null));
    }
    if (l !== null) {
      ((i = l.next), (r = r.baseState));
      var o = (u = null),
        s = null,
        p = i;
      do {
        var w = p.lane;
        if ((en & w) === w)
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
          var x = {
            lane: w,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          (s === null ? ((o = s = x), (u = r)) : (s = s.next = x), (le.lanes |= w), (tn |= w));
        }
        p = p.next;
      } while (p !== null && p !== i);
      (s === null ? (u = r) : (s.next = o),
        nt(r, t.memoizedState) || (Oe = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (le.lanes |= i), (tn |= i), (l = l.next));
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
      var u = (l = l.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== l);
      (nt(i, t.memoizedState) || (Oe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function ds() {}
  function ps(e, t) {
    var n = le,
      r = Xe(),
      l = t(),
      i = !nt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Oe = !0)),
      (r = r.queue),
      Ki(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), fr(9, hs.bind(null, n, r, l, t), void 0, null), he === null))
        throw Error(m(349));
      (en & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
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
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = St(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function ws(e) {
    var t = mt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = cf.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
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
  function xs() {
    return Xe().memoizedState;
  }
  function il(e, t, n, r) {
    var l = mt();
    ((le.flags |= e), (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ul(e, t, n, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (fe !== null) {
      var u = fe.memoizedState;
      if (((i = u.destroy), r !== null && Bi(r, u.deps))) {
        l.memoizedState = fr(t, n, i, r);
        return;
      }
    }
    ((le.flags |= e), (l.memoizedState = fr(1 | t, n, i, r)));
  }
  function ks(e, t) {
    return il(8390656, 8, e, t);
  }
  function Ki(e, t) {
    return ul(2048, 8, e, t);
  }
  function Ss(e, t) {
    return ul(4, 2, e, t);
  }
  function Es(e, t) {
    return ul(4, 4, e, t);
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
  function _s(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), ul(4, 4, Ns.bind(null, t, e), n));
  }
  function Yi() {}
  function Cs(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function js(e, t) {
    var n = Xe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ps(e, t, n) {
    return (en & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n))
      : (nt(n, t) || ((n = ro()), (le.lanes |= n), (tn |= n), (e.baseState = !0)), t);
  }
  function sf(e, t) {
    var n = W;
    ((W = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Vi.transition;
    Vi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((W = n), (Vi.transition = r));
    }
  }
  function Ls() {
    return Xe().memoizedState;
  }
  function af(e, t, n) {
    var r = Ht(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), zs(e)))
      Ts(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = Pe();
      (ot(n, e, r, l), Rs(n, t, r));
    }
  }
  function cf(e, t, n) {
    var r = Ht(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (zs(e)) Ts(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            o = i(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = o), nt(o, u))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Di(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = os(e, t, l, r)), n !== null && ((l = Pe()), ot(n, e, r, l), Rs(n, t, r)));
    }
  }
  function zs(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Ts(e, t) {
    sr = ll = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Rs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
    }
  }
  var ol = {
      readContext: Ge,
      useCallback: Se,
      useContext: Se,
      useEffect: Se,
      useImperativeHandle: Se,
      useInsertionEffect: Se,
      useLayoutEffect: Se,
      useMemo: Se,
      useReducer: Se,
      useRef: Se,
      useState: Se,
      useDebugValue: Se,
      useDeferredValue: Se,
      useTransition: Se,
      useMutableSource: Se,
      useSyncExternalStore: Se,
      useId: Se,
      unstable_isNewReconciler: !1,
    },
    ff = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((mt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: ks,
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
        var n = mt();
        return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
      },
      useReducer: function (e, t, n) {
        var r = mt();
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
          (e = e.dispatch = af.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = mt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ws,
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        return (mt().memoizedState = e);
      },
      useTransition: function () {
        var e = ws(!1),
          t = e[0];
        return ((e = sf.bind(null, e[1])), (mt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = mt();
        if (te) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), he === null)) throw Error(m(349));
          (en & 30) !== 0 || ms(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          ks(vs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          fr(9, hs.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = mt(),
          t = he.identifierPrefix;
        if (te) {
          var n = kt,
            r = xt;
          ((n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = of++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    df = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: Es,
      useMemo: js,
      useReducer: Wi,
      useRef: xs,
      useState: function () {
        return Wi(cr);
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Xe();
        return Ps(t, fe.memoizedState, e);
      },
      useTransition: function () {
        var e = Wi(cr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    },
    pf = {
      readContext: Ge,
      useCallback: Cs,
      useContext: Ge,
      useEffect: Ki,
      useImperativeHandle: _s,
      useInsertionEffect: Ss,
      useLayoutEffect: Es,
      useMemo: js,
      useReducer: Qi,
      useRef: xs,
      useState: function () {
        return Qi(cr);
      },
      useDebugValue: Yi,
      useDeferredValue: function (e) {
        var t = Xe();
        return fe === null ? (t.memoizedState = e) : Ps(t, fe.memoizedState, e);
      },
      useTransition: function () {
        var e = Qi(cr)[0],
          t = Xe().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    };
  function lt(e, t) {
    if (e && e.defaultProps) {
      ((t = _({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Gi(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Yt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Ht(e),
        i = Et(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (ot(t, e, l, r), el(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Ht(e),
        i = Et(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ut(e, i, l)),
        t !== null && (ot(t, e, l, r), el(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Ht(e),
        l = Et(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ut(e, l, r)),
        t !== null && (ot(t, e, r, n), el(t, e, r)));
    },
  };
  function Os(e, t, n, r, l, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, i)
          : !0
    );
  }
  function Ds(e, t, n) {
    var r = !1,
      l = Mt,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Re(t) ? Xt : ke.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? wn(e, l) : Mt)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
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
      t.state !== e && sl.enqueueReplaceState(t, t.state, null));
  }
  function Xi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mi(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Re(t) ? Xt : ke.current), (l.context = wn(e, i))),
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
        t !== l.state && sl.enqueueReplaceState(l, l.state, null),
        tl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function jn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += V(r)), (r = r.return));
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
  var mf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (hl || ((hl = !0), (du = r)), Ji(e, t));
      }),
      n
    );
  }
  function Fs(e, t, n) {
    ((n = Et(-1, n)), (n.tag = 3));
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
            typeof r != "function" && (Vt === null ? (Vt = new Set([this])) : Vt.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
        }),
      n
    );
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new mf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Pf.bind(null, e, t, n)), t.then(e, e));
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
  function Vs(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Et(-1, 1)), (t.tag = 2), Ut(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var hf = xe.ReactCurrentOwner,
    Oe = !1;
  function je(e, t, n, r) {
    t.child = e === null ? us(t, null, n, r) : En(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      _n(t, l),
      (r = Hi(e, t, n, r, i, l)),
      (n = $i()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Nt(e, t, l))
        : (te && n && _i(t), (t.flags |= 1), je(e, t, r, l), t.child)
    );
  }
  function Hs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !wu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), $s(e, t, i, r, l))
        : ((e = kl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var u = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(u, r) && e.ref === t.ref))
        return Nt(e, t, l);
    }
    return ((t.flags |= 1), (e = Wt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function $s(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Jn(i, r) && e.ref === t.ref)
        if (((Oe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Oe = !0);
        else return ((t.lanes = e.lanes), Nt(e, t, l));
    }
    return qi(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          X(Ln, He),
          (He |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            X(Ln, He),
            (He |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          X(Ln, He),
          (He |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        X(Ln, He),
        (He |= r));
    return (je(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qi(e, t, n, r, l) {
    var i = Re(n) ? Xt : ke.current;
    return (
      (i = wn(t, i)),
      _n(t, l),
      (n = Hi(e, t, n, r, i, l)),
      (r = $i()),
      e !== null && !Oe
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Nt(e, t, l))
        : (te && r && _i(t), (t.flags |= 1), je(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      Kr(t);
    } else i = !1;
    if ((_n(t, l), t.stateNode === null)) (cl(e, t), Ds(t, n, r), Xi(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        o = t.memoizedProps;
      u.props = o;
      var s = u.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Ge(p))
        : ((p = Re(n) ? Xt : ke.current), (p = wn(t, p)));
      var w = n.getDerivedStateFromProps,
        x = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Ms(t, u, r, p)),
        (Ft = !1));
      var y = t.memoizedState;
      ((u.state = y),
        tl(t, r, u, l),
        (s = t.memoizedState),
        o !== r || y !== s || Te.current || Ft
          ? (typeof w == "function" && (Gi(t, n, w, r), (s = t.memoizedState)),
            (o = Ft || Os(t, n, o, r, y, s, p))
              ? (x ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (u.props = r),
            (u.state = s),
            (u.context = p),
            (r = o))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((u = t.stateNode),
        ss(e, t),
        (o = t.memoizedProps),
        (p = t.type === t.elementType ? o : lt(t.type, o)),
        (u.props = p),
        (x = t.pendingProps),
        (y = u.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? Xt : ke.current), (s = wn(t, s))));
      var E = n.getDerivedStateFromProps;
      ((w = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((o !== x || y !== s) && Ms(t, u, r, s)),
        (Ft = !1),
        (y = t.memoizedState),
        (u.state = y),
        tl(t, r, u, l));
      var C = t.memoizedState;
      o !== x || y !== C || Te.current || Ft
        ? (typeof E == "function" && (Gi(t, n, E, r), (C = t.memoizedState)),
          (p = Ft || Os(t, n, p, r, y, C, s) || !1)
            ? (w ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, C, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, C, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (o === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = C)),
          (u.props = r),
          (u.state = C),
          (u.context = s),
          (r = p))
        : (typeof u.componentDidUpdate != "function" ||
            (o === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return bi(e, t, n, r, i, l);
  }
  function bi(e, t, n, r, l, i) {
    Qs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && Jo(t, n, !1), Nt(e, t, i));
    ((r = t.stateNode), (hf.current = t));
    var o = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = En(t, e.child, null, i)), (t.child = En(t, null, o, i)))
        : je(e, t, o, i),
      (t.memoizedState = r.state),
      l && Jo(t, n, !0),
      t.child
    );
  }
  function Ys(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Xo(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Xo(e, t.context, !1),
      Ii(e, t.containerInfo));
  }
  function Gs(e, t, n, r, l) {
    return (Sn(), Li(l), (t.flags |= 256), je(e, t, n, r), t.child);
  }
  var eu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function tu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      i = !1,
      u = (t.flags & 128) !== 0,
      o;
    if (
      ((o = u) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      X(re, l & 1),
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
          : ((u = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = u))
                  : (i = Sl(u, r, 0, null)),
                (e = un(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = tu(n)),
                (t.memoizedState = eu),
                e)
              : nu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return vf(e, t, u, r, o, l, n);
    if (i) {
      ((i = r.fallback), (u = t.mode), (l = e.child), (o = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (i = Wt(o, i)) : ((i = un(i, u, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? tu(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (i.memoizedState = u),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = eu),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Wt(i, { mode: "visible", children: r.children })),
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
  function nu(e, t) {
    return (
      (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function al(e, t, n, r) {
    return (
      r !== null && Li(r),
      En(t, e.child, null, n),
      (e = nu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(m(422)))), al(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = un(i, l, u, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && En(t, e.child, null, u),
            (t.child.memoizedState = tu(u)),
            (t.memoizedState = eu),
            i);
    if ((t.mode & 1) === 0) return al(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (i = Error(m(419))), (r = Zi(i, r, void 0)), al(e, t, u, r));
    }
    if (((o = (u & e.childLanes) !== 0), Oe || o)) {
      if (((r = he), r !== null)) {
        switch (u & -u) {
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
        ((l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l),
          l !== 0 && l !== i.retryLane && ((i.retryLane = l), St(e, l), ot(r, e, l, -1)));
      }
      return (gu(), (r = Zi(Error(m(421)))), al(e, t, u, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Lf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (Be = Ot(l.nextSibling)),
        (Ve = t),
        (te = !0),
        (rt = null),
        e !== null &&
          ((Ke[Ye++] = xt),
          (Ke[Ye++] = kt),
          (Ke[Ye++] = Zt),
          (xt = e.id),
          (kt = e.overflow),
          (Zt = t)),
        (t = nu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Oi(e.return, t, n));
  }
  function ru(e, t, n, r, l) {
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
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((je(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
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
    if ((X(re, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && nl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ru(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ru(t, !0, n, null, i);
          break;
        case "together":
          ru(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function cl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Nt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (tn |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function yf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ys(t), Sn());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Re(t.type) && Kr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (X(qr, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (X(re, re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Xs(e, t, n)
              : (X(re, re.current & 1), (e = Nt(e, t, n)), e !== null ? e.sibling : null);
        X(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Js(e, t, n);
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
        return ((t.lanes = 0), Ws(e, t, n));
    }
    return Nt(e, t, n);
  }
  var qs, lu, bs, ea;
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
    (lu = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), bt(pt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (i = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Il(e, l)), (r = Il(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
        }
        Ul(n, r);
        var u;
        n = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (u in o) o.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (M.hasOwnProperty(p) ? i || (i = []) : (i = i || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (u in o)
                  !o.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in s) s.hasOwnProperty(u) && o[u] !== s[u] && (n || (n = {}), (n[u] = s[u]));
              } else (n || (i || (i = []), i.push(p, n)), (n = s));
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (i = i || []).push(p, s))
                : p === "children"
                  ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(p, "" + s)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (M.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && Z("scroll", e), i || o === s || (i = []))
                      : (i = i || []).push(p, s));
        }
        n && (i = i || []).push("style", n);
        var p = i;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    }),
    (ea = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function dr(e, t) {
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
  function Ee(e) {
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
        return (Ee(t), null);
      case 1:
        return (Re(t.type) && Qr(), Ee(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Cn(),
          J(Te),
          J(ke),
          Ai(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), rt !== null && (hu(rt), (rt = null)))),
          lu(e, t),
          Ee(t),
          null
        );
      case 5:
        Fi(t);
        var l = bt(or.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ee(t), null);
          }
          if (((e = bt(pt.current)), Zr(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[dt] = t), (r[nr] = i), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < bn.length; l++) Z(bn[l], r);
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
                (Ou(r, i), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Iu(r, i), Z("invalid", r));
            }
            (Ul(n, i), (l = null));
            for (var u in i)
              if (i.hasOwnProperty(u)) {
                var o = i[u];
                u === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (i.suppressHydrationWarning !== !0 && Hr(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (i.suppressHydrationWarning !== !0 && Hr(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : M.hasOwnProperty(u) && o != null && u === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (wr(r), Mu(r, i, !0));
                break;
              case "textarea":
                (wr(r), Uu(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $r);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Au(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)),
                      n === "select" &&
                        ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[dt] = t),
              (e[nr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((u = Al(n, r)), n)) {
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
                  for (l = 0; l < bn.length; l++) Z(bn[l], e);
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
                  (Ou(e, r), (l = Ol(e, r)), Z("invalid", e));
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
                  (Iu(e, r), (l = Il(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (o = l));
              for (i in o)
                if (o.hasOwnProperty(i)) {
                  var s = o[i];
                  i === "style"
                    ? Hu(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vu(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Dn(e, s)
                          : typeof s == "number" && Dn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (M.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && Z("scroll", e)
                            : s != null && qe(e, i, s, u));
                }
              switch (n) {
                case "input":
                  (wr(e), Mu(e, r, !1));
                  break;
                case "textarea":
                  (wr(e), Uu(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + $(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? on(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && on(e, !!r.multiple, r.defaultValue, !0));
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
        return (Ee(t), null);
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = bt(or.current)), bt(pt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[dt] = t),
              (i = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Hr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[dt] = t),
              (t.stateNode = r));
        }
        return (Ee(t), null);
      case 13:
        if (
          (J(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rs(), Sn(), (t.flags |= 98560), (i = !1));
          else if (((i = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(m(317));
              i[dt] = t;
            } else (Sn(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ee(t), (i = !1));
          } else (rt !== null && (hu(rt), (rt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (re.current & 1) !== 0 ? de === 0 && (de = 3) : gu())),
            t.updateQueue !== null && (t.flags |= 4),
            Ee(t),
            null);
      case 4:
        return (Cn(), lu(e, t), e === null && er(t.stateNode.containerInfo), Ee(t), null);
      case 10:
        return (Ri(t.type._context), Ee(t), null);
      case 17:
        return (Re(t.type) && Qr(), Ee(t), null);
      case 19:
        if ((J(re), (i = t.memoizedState), i === null)) return (Ee(t), null);
        if (((r = (t.flags & 128) !== 0), (u = i.rendering), u === null))
          if (r) dr(i, !1);
          else {
            if (de !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = nl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      dr(i, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (u = i.alternate),
                      u === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = u.childLanes),
                          (i.lanes = u.lanes),
                          (i.child = u.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = u.memoizedProps),
                          (i.memoizedState = u.memoizedState),
                          (i.updateQueue = u.updateQueue),
                          (i.type = u.type),
                          (e = u.dependencies),
                          (i.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (X(re, (re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              se() > zn &&
              ((t.flags |= 128), (r = !0), dr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !u.alternate && !te)
              )
                return (Ee(t), null);
            } else
              2 * se() - i.renderingStartTime > zn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), dr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = i.last), n !== null ? (n.sibling = u) : (t.child = u), (i.last = u));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = se()),
            (t.sibling = null),
            (n = re.current),
            X(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ee(t), null);
      case 22:
      case 23:
        return (
          yu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (He & 1073741824) !== 0 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ee(t),
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
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Qr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Cn(),
          J(Te),
          J(ke),
          Ai(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Fi(t), null);
      case 13:
        if ((J(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          Sn();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(re), null);
      case 4:
        return (Cn(), null);
      case 10:
        return (Ri(t.type._context), null);
      case 22:
      case 23:
        return (yu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    Ne = !1,
    xf = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;
  function Pn(e, t) {
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
  function iu(e, t, n) {
    try {
      n();
    } catch (r) {
      ue(e, t, r);
    }
  }
  var ta = !1;
  function kf(e, t) {
    if (((yi = Tr), (e = Oo()), ai(e))) {
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
            var u = 0,
              o = -1,
              s = -1,
              p = 0,
              w = 0,
              x = e,
              y = null;
            t: for (;;) {
              for (
                var E;
                x !== n || (l !== 0 && x.nodeType !== 3) || (o = u + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = u + r),
                  x.nodeType === 3 && (u += x.nodeValue.length),
                  (E = x.firstChild) !== null;
              )
                ((y = x), (x = E));
              for (;;) {
                if (x === e) break t;
                if (
                  (y === n && ++p === l && (o = u),
                  y === i && ++w === r && (s = u),
                  (E = x.nextSibling) !== null)
                )
                  break;
                ((x = y), (y = x.parentNode));
              }
              x = E;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gi = { focusedElem: e, selectionRange: n }, Tr = !1, N = t; N !== null;)
      if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (N = e));
      else
        for (; N !== null;) {
          t = N;
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
                    var j = C.memoizedProps,
                      ae = C.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? j : lt(t.type, j),
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
          } catch (k) {
            ue(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (N = e));
            break;
          }
          N = t.return;
        }
    return ((C = ta), (ta = !1), C);
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && iu(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
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
  function uu(e) {
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
        t !== null && (delete t[dt], delete t[nr], delete t[Si], delete t[nf], delete t[rf])),
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
  function ou(e, t, n) {
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
      for (ou(e, t, n), e = e.sibling; e !== null;) (ou(e, t, n), (e = e.sibling));
  }
  function su(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (su(e, t, n), e = e.sibling; e !== null;) (su(e, t, n), (e = e.sibling));
  }
  var ye = null,
    it = !1;
  function At(e, t, n) {
    for (n = n.child; n !== null;) (ia(e, t, n), (n = n.sibling));
  }
  function ia(e, t, n) {
    if (ft && typeof ft.onCommitFiberUnmount == "function")
      try {
        ft.onCommitFiberUnmount(_r, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ne || Pn(n, t);
      case 6:
        var r = ye,
          l = it;
        ((ye = null),
          At(e, t, n),
          (ye = r),
          (it = l),
          ye !== null &&
            (it
              ? ((e = ye),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : ye.removeChild(n.stateNode)));
        break;
      case 18:
        ye !== null &&
          (it
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? ki(e.parentNode, n) : e.nodeType === 1 && ki(e, n),
              Qn(e))
            : ki(ye, n.stateNode));
        break;
      case 4:
        ((r = ye),
          (l = it),
          (ye = n.stateNode.containerInfo),
          (it = !0),
          At(e, t, n),
          (ye = r),
          (it = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ne && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              u = i.destroy;
            ((i = i.tag),
              u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && iu(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        At(e, t, n);
        break;
      case 1:
        if (!Ne && (Pn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ue(n, t, o);
          }
        At(e, t, n);
        break;
      case 21:
        At(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ne = (r = Ne) || n.memoizedState !== null), At(e, t, n), (Ne = r))
          : At(e, t, n);
        break;
      default:
        At(e, t, n);
    }
  }
  function ua(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new xf()),
        t.forEach(function (r) {
          var l = zf.bind(null, e, r);
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
            u = t,
            o = u;
          e: for (; o !== null;) {
            switch (o.tag) {
              case 5:
                ((ye = o.stateNode), (it = !1));
                break e;
              case 3:
                ((ye = o.stateNode.containerInfo), (it = !0));
                break e;
              case 4:
                ((ye = o.stateNode.containerInfo), (it = !0));
                break e;
            }
            o = o.return;
          }
          if (ye === null) throw Error(m(160));
          (ia(i, u, l), (ye = null), (it = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ue(l, t, p);
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
        if ((ut(t, e), ht(e), r & 4)) {
          try {
            (pr(3, e, e.return), dl(3, e));
          } catch (j) {
            ue(e, e.return, j);
          }
          try {
            pr(5, e, e.return);
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 1:
        (ut(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return));
        break;
      case 5:
        if ((ut(t, e), ht(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            u = n !== null ? n.memoizedProps : i,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (o === "input" && i.type === "radio" && i.name != null && Du(l, i), Al(o, u));
              var p = Al(o, i);
              for (u = 0; u < s.length; u += 2) {
                var w = s[u],
                  x = s[u + 1];
                w === "style"
                  ? Hu(l, x)
                  : w === "dangerouslySetInnerHTML"
                    ? Vu(l, x)
                    : w === "children"
                      ? Dn(l, x)
                      : qe(l, w, x, p);
              }
              switch (o) {
                case "input":
                  Dl(l, i);
                  break;
                case "textarea":
                  Fu(l, i);
                  break;
                case "select":
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var E = i.value;
                  E != null
                    ? on(l, !!i.multiple, E, !1)
                    : y !== !!i.multiple &&
                      (i.defaultValue != null
                        ? on(l, !!i.multiple, i.defaultValue, !0)
                        : on(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[nr] = i;
            } catch (j) {
              ue(e, e.return, j);
            }
        }
        break;
      case 6:
        if ((ut(t, e), ht(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (i = e.memoizedProps));
          try {
            l.nodeValue = i;
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 3:
        if ((ut(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Qn(t.containerInfo);
          } catch (j) {
            ue(e, e.return, j);
          }
        break;
      case 4:
        (ut(t, e), ht(e));
        break;
      case 13:
        (ut(t, e),
          ht(e),
          (l = e.child),
          l.flags & 8192 &&
            ((i = l.memoizedState !== null),
            (l.stateNode.isHidden = i),
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (fu = se())),
          r & 4 && ua(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ne = (p = Ne) || w), ut(t, e), (Ne = p)) : ut(t, e),
          ht(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !w && (e.mode & 1) !== 0)
          )
            for (N = e, w = e.child; w !== null;) {
              for (x = N = w; N !== null;) {
                switch (((y = N), (E = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, y, y.return);
                    break;
                  case 1:
                    Pn(y, y.return);
                    var C = y.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (C.props = t.memoizedProps),
                          (C.state = t.memoizedState),
                          C.componentWillUnmount());
                      } catch (j) {
                        ue(r, n, j);
                      }
                    }
                    break;
                  case 5:
                    Pn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      ca(x);
                      continue;
                    }
                }
                E !== null ? ((E.return = y), (N = E)) : ca(x);
              }
              w = w.sibling;
            }
          e: for (w = null, x = e; ;) {
            if (x.tag === 5) {
              if (w === null) {
                w = x;
                try {
                  ((l = x.stateNode),
                    p
                      ? ((i = l.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((o = x.stateNode),
                        (s = x.memoizedProps.style),
                        (u = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (o.style.display = Bu("display", u))));
                } catch (j) {
                  ue(e, e.return, j);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = p ? "" : x.memoizedProps;
                } catch (j) {
                  ue(e, e.return, j);
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
        (ut(t, e), ht(e), r & 4 && ua(e));
        break;
      case 21:
        break;
      default:
        (ut(t, e), ht(e));
    }
  }
  function ht(e) {
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
            r.flags & 32 && (Dn(l, ""), (r.flags &= -33));
            var i = la(e);
            su(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              o = la(e);
            ou(e, o, u);
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
  function Sf(e, t, n) {
    ((N = e), sa(e));
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null;) {
      var l = N,
        i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || fl;
        if (!u) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Ne;
          o = fl;
          var p = Ne;
          if (((fl = u), (Ne = s) && !p))
            for (N = l; N !== null;)
              ((u = N),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? fa(l)
                  : s !== null
                    ? ((s.return = u), (N = s))
                    : fa(l));
          for (; i !== null;) ((N = i), sa(i), (i = i.sibling));
          ((N = l), (fl = o), (Ne = p));
        }
        aa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (N = i)) : aa(e);
    }
  }
  function aa(e) {
    for (; N !== null;) {
      var t = N;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ne || dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ne)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && cs(t, i, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  cs(t, u, n);
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
                    var w = p.memoizedState;
                    if (w !== null) {
                      var x = w.dehydrated;
                      x !== null && Qn(x);
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
          Ne || (t.flags & 512 && uu(t));
        } catch (y) {
          ue(t, t.return, y);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (N = n));
        break;
      }
      N = t.return;
    }
  }
  function ca(e) {
    for (; N !== null;) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (N = n));
        break;
      }
      N = t.return;
    }
  }
  function fa(e) {
    for (; N !== null;) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
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
              uu(t);
            } catch (s) {
              ue(t, i, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              uu(t);
            } catch (s) {
              ue(t, u, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        N = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        ((o.return = t.return), (N = o));
        break;
      }
      N = t.return;
    }
  }
  var Ef = Math.ceil,
    pl = xe.ReactCurrentDispatcher,
    au = xe.ReactCurrentOwner,
    Ze = xe.ReactCurrentBatchConfig,
    A = 0,
    he = null,
    ce = null,
    ge = 0,
    He = 0,
    Ln = Dt(0),
    de = 0,
    mr = null,
    tn = 0,
    ml = 0,
    cu = 0,
    hr = null,
    De = null,
    fu = 0,
    zn = 1 / 0,
    _t = null,
    hl = !1,
    du = null,
    Vt = null,
    vl = !1,
    Bt = null,
    yl = 0,
    vr = 0,
    pu = null,
    gl = -1,
    wl = 0;
  function Pe() {
    return (A & 6) !== 0 ? se() : gl !== -1 ? gl : (gl = se());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : (A & 2) !== 0 && ge !== 0
        ? ge & -ge
        : uf.transition !== null
          ? (wl === 0 && (wl = ro()), wl)
          : ((e = W), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : po(e.type))), e);
  }
  function ot(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (pu = null), Error(m(185)));
    (Vn(e, n, r),
      ((A & 2) === 0 || e !== he) &&
        (e === he && ((A & 2) === 0 && (ml |= n), de === 4 && $t(e, ge)),
        Me(e, r),
        n === 1 && A === 0 && (t.mode & 1) === 0 && ((zn = se() + 500), Yr && It())));
  }
  function Me(e, t) {
    var n = e.callbackNode;
    ic(e, t);
    var r = Pr(e, e === he ? ge : 0);
    if (r === 0) (n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eo(n), t === 1))
        (e.tag === 0 ? lf(pa.bind(null, e)) : qo(pa.bind(null, e)),
          ef(function () {
            (A & 6) === 0 && It();
          }),
          (n = null));
      else {
        switch (lo(r)) {
          case 1:
            n = Kl;
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
        n = ka(n, da.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function da(e, t) {
    if (((gl = -1), (wl = 0), (A & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = Pr(e, e === he ? ge : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = xl(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var i = ha();
      (he !== e || ge !== t) && ((_t = null), (zn = se() + 500), rn(e, t));
      do
        try {
          Cf();
          break;
        } catch (o) {
          ma(e, o);
        }
      while (!0);
      (Ti(), (pl.current = i), (A = l), ce !== null ? (t = 0) : ((he = null), (ge = 0), (t = de)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = mu(e, l)))), t === 1))
        throw ((n = mr), rn(e, 0), $t(e, r), Me(e, se()), n);
      if (t === 6) $t(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Nf(l) &&
            ((t = xl(e, r)),
            t === 2 && ((i = Yl(e)), i !== 0 && ((r = i), (t = mu(e, i)))),
            t === 1))
        )
          throw ((n = mr), rn(e, 0), $t(e, r), Me(e, se()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ln(e, De, _t);
            break;
          case 3:
            if (($t(e, r), (r & 130023424) === r && ((t = fu + 500 - se()), 10 < t))) {
              if (Pr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = xi(ln.bind(null, e, De, _t), t);
              break;
            }
            ln(e, De, _t);
            break;
          case 4:
            if (($t(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var u = 31 - tt(r);
              ((i = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~i));
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
                            : 1960 * Ef(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = xi(ln.bind(null, e, De, _t), r);
              break;
            }
            ln(e, De, _t);
            break;
          case 5:
            ln(e, De, _t);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Me(e, se()), e.callbackNode === n ? da.bind(null, e) : null);
  }
  function mu(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256),
      (e = xl(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && hu(t)),
      e
    );
  }
  function hu(e) {
    De === null ? (De = e) : De.push.apply(De, e);
  }
  function Nf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              i = l.getSnapshot;
            l = l.value;
            try {
              if (!nt(i(), l)) return !1;
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
      t &= ~cu, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - tt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function pa(e) {
    if ((A & 6) !== 0) throw Error(m(327));
    Tn();
    var t = Pr(e, 0);
    if ((t & 1) === 0) return (Me(e, se()), null);
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = mu(e, r)));
    }
    if (n === 1) throw ((n = mr), rn(e, 0), $t(e, t), Me(e, se()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ln(e, De, _t),
      Me(e, se()),
      null
    );
  }
  function vu(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      ((A = n), A === 0 && ((zn = se() + 500), Yr && It()));
    }
  }
  function nn(e) {
    Bt !== null && Bt.tag === 0 && (A & 6) === 0 && Tn();
    var t = A;
    A |= 1;
    var n = Ze.transition,
      r = W;
    try {
      if (((Ze.transition = null), (W = 1), e)) return e();
    } finally {
      ((W = r), (Ze.transition = n), (A = t), (A & 6) === 0 && It());
    }
  }
  function yu() {
    ((He = Ln.current), J(Ln));
  }
  function rn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), bc(n)), ce !== null))
      for (n = ce.return; n !== null;) {
        var r = n;
        switch ((Ci(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Qr());
            break;
          case 3:
            (Cn(), J(Te), J(ke), Ai());
            break;
          case 5:
            Fi(r);
            break;
          case 4:
            Cn();
            break;
          case 13:
            J(re);
            break;
          case 19:
            J(re);
            break;
          case 10:
            Ri(r.type._context);
            break;
          case 22:
          case 23:
            yu();
        }
        n = n.return;
      }
    if (
      ((he = e),
      (ce = e = Wt(e.current, null)),
      (ge = He = t),
      (de = 0),
      (mr = null),
      (cu = ml = tn = 0),
      (De = hr = null),
      qt !== null)
    ) {
      for (t = 0; t < qt.length; t++)
        if (((n = qt[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var u = i.next;
            ((i.next = l), (r.next = u));
          }
          n.pending = r;
        }
      qt = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = ce;
      try {
        if ((Ti(), (rl.current = ol), ll)) {
          for (var r = le.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ll = !1;
        }
        if (
          ((en = 0),
          (me = fe = le = null),
          (sr = !1),
          (ar = 0),
          (au.current = null),
          n === null || n.return === null)
        ) {
          ((de = 1), (mr = t), (ce = null));
          break;
        }
        e: {
          var i = e,
            u = n.return,
            o = n,
            s = t;
          if (
            ((t = ge),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              w = o,
              x = w.tag;
            if ((w.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var y = w.alternate;
              y
                ? ((w.updateQueue = y.updateQueue),
                  (w.memoizedState = y.memoizedState),
                  (w.lanes = y.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var E = As(u);
            if (E !== null) {
              ((E.flags &= -257), Vs(E, u, o, i, t), E.mode & 1 && Us(i, p, t), (t = E), (s = p));
              var C = t.updateQueue;
              if (C === null) {
                var j = new Set();
                (j.add(s), (t.updateQueue = j));
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Us(i, p, t), gu());
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && o.mode & 1) {
            var ae = As(u);
            if (ae !== null) {
              ((ae.flags & 65536) === 0 && (ae.flags |= 256), Vs(ae, u, o, i, t), Li(jn(s, o)));
              break e;
            }
          }
          ((i = s = jn(s, o)),
            de !== 4 && (de = 2),
            hr === null ? (hr = [i]) : hr.push(i),
            (i = u));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Is(i, s, t);
                as(i, f);
                break e;
              case 1:
                o = s;
                var a = i.type,
                  d = i.stateNode;
                if (
                  (i.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Vt === null || !Vt.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Fs(i, o, t);
                  as(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ya(n);
      } catch (P) {
        ((t = P), ce === n && n !== null && (ce = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = pl.current;
    return ((pl.current = ol), e === null ? ol : e);
  }
  function gu() {
    ((de === 0 || de === 3 || de === 2) && (de = 4),
      he === null || ((tn & 268435455) === 0 && (ml & 268435455) === 0) || $t(he, ge));
  }
  function xl(e, t) {
    var n = A;
    A |= 2;
    var r = ha();
    (he !== e || ge !== t) && ((_t = null), rn(e, t));
    do
      try {
        _f();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if ((Ti(), (A = n), (pl.current = r), ce !== null)) throw Error(m(261));
    return ((he = null), (ge = 0), de);
  }
  function _f() {
    for (; ce !== null;) va(ce);
  }
  function Cf() {
    for (; ce !== null && !Za();) va(ce);
  }
  function va(e) {
    var t = xa(e.alternate, e, He);
    ((e.memoizedProps = e.pendingProps), t === null ? ya(e) : (ce = t), (au.current = null));
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = gf(n, t, He)), n !== null)) {
          ce = n;
          return;
        }
      } else {
        if (((n = wf(n, t)), n !== null)) {
          ((n.flags &= 32767), (ce = n));
          return;
        }
        if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((de = 6), (ce = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    de === 0 && (de = 5);
  }
  function ln(e, t, n) {
    var r = W,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (W = 1), jf(e, t, n, r));
    } finally {
      ((Ze.transition = l), (W = r));
    }
    return null;
  }
  function jf(e, t, n, r) {
    do Tn();
    while (Bt !== null);
    if ((A & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (uc(e, i),
      e === he && ((ce = he = null), (ge = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        vl ||
        ((vl = !0),
        ka(Nr, function () {
          return (Tn(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Ze.transition), (Ze.transition = null));
      var u = W;
      W = 1;
      var o = A;
      ((A |= 4),
        (au.current = null),
        kf(e, n),
        oa(n, e),
        Kc(gi),
        (Tr = !!yi),
        (gi = yi = null),
        (e.current = n),
        Sf(n),
        Ja(),
        (A = o),
        (W = u),
        (Ze.transition = i));
    } else e.current = n;
    if (
      (vl && ((vl = !1), (Bt = e), (yl = l)),
      (i = e.pendingLanes),
      i === 0 && (Vt = null),
      ec(n.stateNode),
      Me(e, se()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (hl) throw ((hl = !1), (e = du), (du = null), e);
    return (
      (yl & 1) !== 0 && e.tag !== 0 && Tn(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === pu ? vr++ : ((vr = 0), (pu = e))) : (vr = 0),
      It(),
      null
    );
  }
  function Tn() {
    if (Bt !== null) {
      var e = lo(yl),
        t = Ze.transition,
        n = W;
      try {
        if (((Ze.transition = null), (W = 16 > e ? 16 : e), Bt === null)) var r = !1;
        else {
          if (((e = Bt), (Bt = null), (yl = 0), (A & 6) !== 0)) throw Error(m(331));
          var l = A;
          for (A |= 4, N = e.current; N !== null;) {
            var i = N,
              u = i.child;
            if ((N.flags & 16) !== 0) {
              var o = i.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (N = p; N !== null;) {
                    var w = N;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, w, i);
                    }
                    var x = w.child;
                    if (x !== null) ((x.return = w), (N = x));
                    else
                      for (; N !== null;) {
                        w = N;
                        var y = w.sibling,
                          E = w.return;
                        if ((na(w), w === p)) {
                          N = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = E), (N = y));
                          break;
                        }
                        N = E;
                      }
                  }
                }
                var C = i.alternate;
                if (C !== null) {
                  var j = C.child;
                  if (j !== null) {
                    C.child = null;
                    do {
                      var ae = j.sibling;
                      ((j.sibling = null), (j = ae));
                    } while (j !== null);
                  }
                }
                N = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = i), (N = u));
            else
              e: for (; N !== null;) {
                if (((i = N), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (N = f));
                  break e;
                }
                N = i.return;
              }
          }
          var a = e.current;
          for (N = a; N !== null;) {
            u = N;
            var d = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = u), (N = d));
            else
              e: for (u = a; N !== null;) {
                if (((o = N), (o.flags & 2048) !== 0))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, o);
                    }
                  } catch (P) {
                    ue(o, o.return, P);
                  }
                if (o === u) {
                  N = null;
                  break e;
                }
                var k = o.sibling;
                if (k !== null) {
                  ((k.return = o.return), (N = k));
                  break e;
                }
                N = o.return;
              }
          }
          if (((A = l), It(), ft && typeof ft.onPostCommitFiberRoot == "function"))
            try {
              ft.onPostCommitFiberRoot(_r, e);
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
    ((t = jn(n, t)),
      (t = Is(e, t, 1)),
      (e = Ut(e, t, 1)),
      (t = Pe()),
      e !== null && (Vn(e, 1, t), Me(e, t)));
  }
  function ue(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r)))
          ) {
            ((e = jn(n, e)),
              (e = Fs(t, e, 1)),
              (t = Ut(t, e, 1)),
              (e = Pe()),
              t !== null && (Vn(t, 1, e), Me(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Pf(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      he === e &&
        (ge & n) === n &&
        (de === 4 || (de === 3 && (ge & 130023424) === ge && 500 > se() - fu)
          ? rn(e, 0)
          : (cu |= n)),
      Me(e, t));
  }
  function wa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = jr), (jr <<= 1), (jr & 130023424) === 0 && (jr = 4194304)));
    var n = Pe();
    ((e = St(e, t)), e !== null && (Vn(e, t, n), Me(e, n)));
  }
  function Lf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), wa(e, n));
  }
  function zf(e, t) {
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
  var xa;
  xa = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Oe = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Oe = !1), yf(e, t, n));
        Oe = (e.flags & 131072) !== 0;
      }
    else ((Oe = !1), te && (t.flags & 1048576) !== 0 && bo(t, Xr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (cl(e, t), (e = t.pendingProps));
        var l = wn(t, ke.current);
        (_n(t, n), (l = Hi(null, t, r, e, l, n)));
        var i = $i();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((i = !0), Kr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Mi(t),
              (l.updater = sl),
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
            (cl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rf(r)),
            (e = lt(r, e)),
            l)
          ) {
            case 0:
              t = qi(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Hs(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          qi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ys(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            ss(e, t),
            tl(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              ((l = jn(Error(m(423)), t)), (t = Gs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = jn(Error(m(424)), t)), (t = Gs(e, t, r, n, l)));
              break e;
            } else
              for (
                Be = Ot(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  te = !0,
                  rt = null,
                  n = us(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((Sn(), r === l)) {
              t = Nt(e, t, n);
              break e;
            }
            je(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          fs(t),
          e === null && Pi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (u = l.children),
          wi(r, l) ? (u = null) : i !== null && wi(r, i) && (t.flags |= 32),
          Qs(e, t),
          je(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && Pi(t), null);
      case 13:
        return Xs(e, t, n);
      case 4:
        return (
          Ii(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = En(t, null, r, n)) : je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
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
            (i = t.memoizedProps),
            (u = l.value),
            X(qr, r._currentValue),
            (r._currentValue = u),
            i !== null)
          )
            if (nt(i.value, u)) {
              if (i.children === l.children && !Te.current) {
                t = Nt(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null;) {
                var o = i.dependencies;
                if (o !== null) {
                  u = i.child;
                  for (var s = o.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (i.tag === 1) {
                        ((s = Et(-1, n & -n)), (s.tag = 2));
                        var p = i.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var w = p.pending;
                          (w === null ? (s.next = s) : ((s.next = w.next), (w.next = s)),
                            (p.pending = s));
                        }
                      }
                      ((i.lanes |= n),
                        (s = i.alternate),
                        s !== null && (s.lanes |= n),
                        Oi(i.return, n, t),
                        (o.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((u = i.return), u === null)) throw Error(m(341));
                  ((u.lanes |= n),
                    (o = u.alternate),
                    o !== null && (o.lanes |= n),
                    Oi(u, n, t),
                    (u = i.sibling));
                } else u = i.child;
                if (u !== null) u.return = i;
                else
                  for (u = i; u !== null;) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((i = u.sibling), i !== null)) {
                      ((i.return = u.return), (u = i));
                      break;
                    }
                    u = u.return;
                  }
                i = u;
              }
          (je(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          _n(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = lt(r, t.pendingProps)), (l = lt(r.type, l)), Hs(e, t, r, l, n));
      case 15:
        return $s(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : lt(r, l)),
          cl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Kr(t)) : (e = !1),
          _n(t, n),
          Ds(t, r, l),
          Xi(t, r, l, n),
          bi(null, t, r, !0, e, n)
        );
      case 19:
        return Js(e, t, n);
      case 22:
        return Ws(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function ka(e, t) {
    return bu(e, t);
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
  function Je(e, t, n, r) {
    return new Tf(e, t, n, r);
  }
  function wu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Rf(e) {
    if (typeof e == "function") return wu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === at)) return 11;
      if (e === ct) return 14;
    }
    return 2;
  }
  function Wt(e, t) {
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
  function kl(e, t, n, r, l, i) {
    var u = 2;
    if (((r = e), typeof e == "function")) wu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case Le:
          return un(n.children, l, i, t);
        case Qe:
          ((u = 8), (l |= 8));
          break;
        case Ct:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Ct), (e.lanes = i), e);
        case Fe:
          return ((e = Je(13, n, t, l)), (e.elementType = Fe), (e.lanes = i), e);
        case et:
          return ((e = Je(19, n, t, l)), (e.elementType = et), (e.lanes = i), e);
        case ie:
          return Sl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case yt:
                u = 10;
                break e;
              case Kt:
                u = 9;
                break e;
              case at:
                u = 11;
                break e;
              case ct:
                u = 14;
                break e;
              case ze:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return ((t = Je(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t);
  }
  function un(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function Sl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function xu(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function ku(e, t, n) {
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
  function Su(e, t, n, r, l, i, u, o, s) {
    return (
      (e = new Of(e, t, n, o, s)),
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
      Mi(i),
      e
    );
  }
  function Df(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Sa(e) {
    if (!e) return Mt;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(m(170));
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
      if (Re(n)) return Zo(e, n, t);
    }
    return t;
  }
  function Ea(e, t, n, r, l, i, u, o, s) {
    return (
      (e = Su(n, r, !0, e, l, i, u, o, s)),
      (e.context = Sa(null)),
      (n = e.current),
      (r = Pe()),
      (l = Ht(n)),
      (i = Et(r, l)),
      (i.callback = t ?? null),
      Ut(n, i, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      Me(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      i = Pe(),
      u = Ht(l);
    return (
      (n = Sa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Et(i, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ut(l, t, u)),
      e !== null && (ot(e, l, u, i), el(e, l, u)),
      u
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
  function Na(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Eu(e, t) {
    (Na(e, t), (e = e.alternate) && Na(e, t));
  }
  function Mf() {
    return null;
  }
  var _a =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Nu(e) {
    this._internalRoot = e;
  }
  ((_l.prototype.render = Nu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      El(e, t, null, null);
    }),
    (_l.prototype.unmount = Nu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (nn(function () {
            El(null, e, null, null);
          }),
            (t[gt] = null));
        }
      }));
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
      (zt.splice(n, 0, e), n === 0 && co(e));
    }
  };
  function _u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Cl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ca() {}
  function If(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var p = Nl(u);
          i.call(p);
        };
      }
      var u = Ea(t, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = u),
        (e[gt] = u.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        nn(),
        u
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
    var s = Su(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      nn(function () {
        El(t, s, n, r);
      }),
      s
    );
  }
  function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Nl(u);
          o.call(s);
        };
      }
      El(t, u, e, l);
    } else u = If(n, t, e, l, r);
    return Nl(u);
  }
  ((io = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), Me(t, se()), (A & 6) === 0 && ((zn = se() + 500), It()));
        }
        break;
      case 13:
        (nn(function () {
          var r = St(e, 1);
          if (r !== null) {
            var l = Pe();
            ot(r, e, 1, l);
          }
        }),
          Eu(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = St(e, 134217728);
        if (t !== null) {
          var n = Pe();
          ot(t, e, 134217728, n);
        }
        Eu(e, 134217728);
      }
    }),
    (uo = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = St(e, t);
        if (n !== null) {
          var r = Pe();
          ot(n, e, t, r);
        }
        Eu(e, t);
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
    (Hl = function (e, t, n) {
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
                var l = Wr(r);
                if (!l) throw Error(m(90));
                (Ru(r), Dl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fu(e, n);
          break;
        case "select":
          ((t = n.value), t != null && on(e, !!n.multiple, t, !1));
      }
    }),
    (Ku = vu),
    (Yu = nn));
  var Ff = { usingClientEntryPoint: !1, Events: [rr, yn, Wr, Wu, Qu, vu] },
    yr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Uf = {
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
      currentDispatcherRef: xe.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ju(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Mf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        ((_r = Pl.inject(Uf)), (ft = Pl));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_u(t)) throw Error(m(200));
      return Df(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!_u(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = _a;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Su(e, 1, !1, null, null, n, !1, r, l)),
        (e[gt] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new Nu(t)
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
      return ((e = Ju(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return nn(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Cl(t)) throw Error(m(200));
      return jl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!_u(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        u = _a;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Ea(t, null, e, 1, n ?? null, l, !1, i, u)),
        (e[gt] = t.current),
        er(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new _l(t);
    }),
    (Ie.render = function (e, t, n) {
      if (!Cl(t)) throw Error(m(200));
      return jl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!Cl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (nn(function () {
            jl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[gt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = vu),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Cl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return jl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Da;
function Kf() {
  if (Da) return Pu.exports;
  Da = 1;
  function v() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (L) {
        console.error(L);
      }
  }
  return (v(), (Pu.exports = Qf()), Pu.exports);
}
var Ma;
function Yf() {
  if (Ma) return Ll;
  Ma = 1;
  var v = Kf();
  return ((Ll.createRoot = v.createRoot), (Ll.hydrateRoot = v.hydrateRoot), Ll);
}
var Gf = Yf();
function Xf() {
  if (!(typeof window > "u"))
    try {
      if (new URLSearchParams(window.location.search).get("draftlyGallery") !== "1") return;
      if (
        (document.documentElement.classList.add("draftly-gallery-preview"),
        !document.getElementById("draftly-gallery-preview-css"))
      ) {
        const D = document.createElement("link");
        ((D.id = "draftly-gallery-preview-css"),
          (D.rel = "stylesheet"),
          (D.href = "/preset-sites/_shared/preset-gallery-preview.css"),
          document.head.appendChild(D));
      }
      const v = () => {
        (window.dispatchEvent(new Event("draftly-gallery-autoplay")),
          document.querySelectorAll("video").forEach((D) => {
            ((D.muted = !0), D.play().catch(() => {}));
          }));
      };
      document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", v, { once: !0 })
        : v();
      let L = 0;
      const m = ["hero", "security", "companies", "benefits"],
        Q = () => {
          var oe;
          const D = m[L % m.length];
          ((L += 1),
            (oe = document.getElementById(D)) == null ||
              oe.scrollIntoView({ behavior: "smooth", block: "start" }));
        },
        M = window.setInterval(Q, 4500);
      (window.setTimeout(Q, 1200),
        window.addEventListener("pagehide", () => window.clearInterval(M), { once: !0 }));
    } catch {}
}
function Fa(v) {
  return `#${v}`;
}
function Ua(v) {
  const L = v.replace(/^\//, "").replace(/\/$/, "");
  return L ? `#/${L}` : "#/";
}
function Zf(v) {
  const L = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return L
    ? L.startsWith("/")
      ? { kind: "route", path: L.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: L }
    : null;
}
function Aa(v, L = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(v);
  return m ? (m.scrollIntoView({ behavior: L, block: "start" }), !0) : !1;
}
function Jf(v, L = "smooth") {
  if (typeof window > "u") return;
  const m = Fa(v);
  if (Aa(v, L)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function qf(v) {
  typeof window > "u" || (window.location.hash = Ua(v));
}
function bf(v) {
  return v.kind === "route" ? Ua(v.path) : Fa(v.id);
}
function ed(v, L) {
  if ((v.preventDefault(), L.kind === "route")) {
    qf(L.path);
    return;
  }
  Jf(L.id);
}
function td() {
  if (typeof window > "u") return;
  const v = Zf();
  (v == null ? void 0 : v.kind) === "section" && requestAnimationFrame(() => Aa(v.id, "auto"));
}
function Rn({ target: v, children: L, className: m, onClick: Q, ...M }) {
  return h.jsx("a", {
    href: bf(v),
    className: m,
    onClick: (D) => {
      (ed(D, v), Q == null || Q(D));
    },
    ...M,
    children: L,
  });
}
const Va = {
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
function zl({ id: v, eyebrow: L, title: m, children: Q, theme: M }) {
  const D = Va[M];
  return h.jsx("section", {
    id: v,
    className: `${D.section} scroll-mt-24`,
    children: h.jsxs("div", {
      className: "mx-auto max-w-6xl",
      children: [
        h.jsx("p", { className: D.eyebrow, children: L }),
        h.jsx("h2", { className: `${D.title} mt-3`, children: m }),
        h.jsx("div", { className: "mt-8", children: Q }),
      ],
    }),
  });
}
function nd({ theme: v = "dark", brand: L = "Product" }) {
  const m = Va[v],
    Q = [
      { title: "Fast setup", desc: `Ship ${L} experiences in minutes with guided defaults.` },
      { title: "Built to scale", desc: "Production-ready patterns for teams that iterate daily." },
      { title: "Secure by design", desc: "Privacy-first flows with audit-friendly configuration." },
    ];
  return h.jsxs(h.Fragment, {
    children: [
      h.jsx(zl, {
        id: "features",
        eyebrow: "Features",
        title: "Everything you need in one flow",
        theme: v,
        children: h.jsx("div", {
          className: "grid gap-4 md:grid-cols-3",
          children: Q.map((M) =>
            h.jsxs(
              "div",
              {
                className: m.card,
                children: [
                  h.jsx("h3", {
                    className:
                      v === "dark"
                        ? "text-lg font-medium text-white"
                        : "text-lg font-medium text-slate-900",
                    children: M.title,
                  }),
                  h.jsx("p", { className: `${m.body} mt-2 text-sm`, children: M.desc }),
                ],
              },
              M.title,
            ),
          ),
        }),
      }),
      h.jsx(zl, {
        id: "about",
        eyebrow: "About",
        title: `Why teams choose ${L}`,
        theme: v,
        children: h.jsx("p", {
          className: m.body,
          children:
            "We combine cinematic presentation with practical product storytelling—so every visit feels premium while staying effortless to keep current as you grow.",
        }),
      }),
      h.jsx(zl, {
        id: "faq",
        eyebrow: "FAQ",
        title: "Common questions",
        theme: v,
        children: h.jsx("dl", {
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
          ].map(([M, D]) =>
            h.jsxs(
              "div",
              {
                className: m.card,
                children: [
                  h.jsx("dt", {
                    className:
                      v === "dark" ? "font-medium text-white" : "font-medium text-slate-900",
                    children: M,
                  }),
                  h.jsx("dd", { className: `${m.body} mt-2 text-sm`, children: D }),
                ],
              },
              M,
            ),
          ),
        }),
      }),
      h.jsxs(zl, {
        id: "contact",
        eyebrow: "Contact",
        title: "Talk with our team",
        theme: v,
        children: [
          h.jsx("p", { className: m.body, children: "We respond within one business day." }),
          h.jsx("a", {
            href: "#contact",
            className:
              v === "dark"
                ? "mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                : "mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white",
            children: "Get in touch",
          }),
        ],
      }),
    ],
  });
}
function rd() {
  if (typeof window > "u") return !1;
  try {
    return window.__DRAFTLY_EDITOR_MODE__
      ? !0
      : new URLSearchParams(window.location.search).get("draftlyEditor") === "1";
  } catch {
    return !1;
  }
}
function ld() {
  if (typeof window > "u") return !1;
  try {
    return new URLSearchParams(window.location.search).get("draftlyGallery") === "1";
  } catch {
    return !1;
  }
}
function id(v = !1) {
  const [L, m] = Rl.useState(v);
  return (
    Rl.useEffect(() => {
      (rd() || ld()) && m(!0);
      const Q = () => m(!0);
      return (
        window.addEventListener("draftly-gallery-autoplay", Q),
        () => window.removeEventListener("draftly-gallery-autoplay", Q)
      );
    }, []),
    L
  );
}
const ud =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_074215_f4339e1c-0b1a-4f60-98b2-90e3d7840cb7.mp4",
  od =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072418_508a7d2e-396d-4f6f-9d42-ec920fcf7755.mp4",
  sd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4",
  ad = [
    { label: "products", section: "security" },
    { label: "offerings", section: "companies" },
    { label: "mission", section: "benefits" },
    { label: "contact", section: "contact" },
  ],
  Ba = "linear-gradient(90deg, #FA8453 0%, #F8C9B2 100%)";
function cd({ className: v = "" }) {
  return h.jsx("svg", {
    viewBox: "0 0 256 256",
    className: v,
    fill: "white",
    "aria-hidden": !0,
    children: h.jsx("path", {
      d: "M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z",
    }),
  });
}
function Ha({ src: v, playing: L }) {
  return h.jsx("video", {
    className: "absolute inset-0 h-full w-full object-cover",
    src: v,
    autoPlay: L,
    loop: !0,
    muted: !0,
    playsInline: !0,
  });
}
function fd({ className: v = "" }) {
  return h.jsx(Rn, {
    target: { kind: "section", id: "contact" },
    className: `inline-block whitespace-nowrap rounded-full px-4 py-2 text-xs text-black sm:px-7 sm:py-3 sm:text-sm ${v}`,
    style: { background: Ba },
    "data-editable": !0,
    children: "run demo",
  });
}
function dd() {
  return h.jsxs("nav", {
    id: "navbar",
    className:
      "absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-3 pt-4 sm:px-6 sm:pt-6 md:px-10",
    children: [
      h.jsxs(Rn, {
        target: { kind: "section", id: "hero" },
        className:
          "flex items-center gap-2 rounded-full bg-neutral-900/90 py-2.5 pl-3 pr-4 backdrop-blur sm:gap-2.5 sm:py-3 sm:pl-4 sm:pr-6",
        children: [
          h.jsx(cd, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
          h.jsx("span", {
            className: "text-xs text-white sm:text-sm",
            "data-editable": !0,
            children: "guardnet",
          }),
        ],
      }),
      h.jsx("div", {
        className: "hidden rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex",
        children: ad.map((v) =>
          h.jsx(
            Rn,
            {
              target: { kind: "section", id: v.section },
              className:
                "rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white",
              children: v.label,
            },
            v.section,
          ),
        ),
      }),
      h.jsx(Rn, {
        target: { kind: "section", id: "contact" },
        className:
          "rounded-full bg-white px-4 py-2.5 text-xs text-black transition-colors hover:bg-neutral-200 sm:px-6 sm:py-3 sm:text-sm",
        children: "start today",
      }),
    ],
  });
}
function pd({ playing: v }) {
  return h.jsxs("section", {
    id: "hero",
    className: "relative h-screen min-h-screen w-full overflow-hidden bg-black scroll-mt-0",
    children: [
      h.jsx(Ha, { src: ud, playing: v }),
      h.jsxs("div", {
        className: "relative mx-auto h-full w-full max-w-[1320px]",
        children: [
          h.jsx("h1", {
            className:
              "hero-title absolute left-3 top-[20%] text-[24vw] font-medium lowercase text-white sm:left-4 sm:top-[18%] md:left-10 md:text-[18vw]",
            "data-editable": !0,
            children: "shelter",
          }),
          h.jsx("h1", {
            className:
              "hero-title absolute right-3 top-[36%] text-[24vw] font-medium lowercase text-white sm:right-4 sm:top-[38%] md:right-10 md:text-[18vw]",
            "data-editable": !0,
            children: "user",
          }),
          h.jsx("h1", {
            className:
              "hero-title absolute left-[10%] top-[56%] text-[24vw] font-medium lowercase text-white sm:left-[18%] sm:top-[58%] md:left-[28%] md:text-[18vw]",
            "data-editable": !0,
            children: "info",
          }),
          h.jsx("p", {
            className:
              "absolute left-4 top-[48%] max-w-[220px] text-[13px] font-light leading-relaxed text-white/90 sm:left-6 sm:top-[46%] sm:max-w-[300px] sm:text-[18px] md:left-10",
            "data-editable": !0,
            children:
              "we are holding each file with supreme care, granting user with safety in all place",
          }),
          h.jsx("div", {
            className: "absolute bottom-20 left-4 sm:bottom-24 sm:left-6 md:left-10",
            children: h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl",
                      "data-editable": !0,
                      children: "+2.7b",
                    }),
                    h.jsx("p", {
                      className: "mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm",
                      "data-editable": !0,
                      children: "mb info was concealed",
                    }),
                  ],
                }),
                h.jsx("span", {
                  className: "hidden h-px w-24 bg-white/40 md:block",
                  style: { transform: "rotate(-20deg)" },
                  "aria-hidden": !0,
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: "absolute right-4 top-[22%] sm:right-6 md:right-10",
            children: h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsx("span", {
                  className: "hidden h-px w-24 bg-white/40 md:block",
                  style: { transform: "rotate(20deg)" },
                  "aria-hidden": !0,
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl",
                      "data-editable": !0,
                      children: "+90k",
                    }),
                    h.jsx("p", {
                      className: "mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm",
                      "data-editable": !0,
                      children: "ventures run",
                    }),
                  ],
                }),
              ],
            }),
          }),
          h.jsx("div", {
            className: "absolute bottom-20 right-4 sm:bottom-24 sm:right-6 md:right-10",
            children: h.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                h.jsx("span", {
                  className: "hidden h-px w-24 bg-white/40 md:block",
                  style: { transform: "rotate(-20deg)" },
                  "aria-hidden": !0,
                }),
                h.jsxs("div", {
                  children: [
                    h.jsx("p", {
                      className: "text-2xl font-medium tracking-tight sm:text-4xl md:text-5xl",
                      "data-editable": !0,
                      children: "+450k",
                    }),
                    h.jsx("p", {
                      className: "mt-1 text-[10px] font-light text-white/70 sm:text-xs md:text-sm",
                      "data-editable": !0,
                      children: "transfers",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      h.jsx("div", {
        className:
          "pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black",
        "aria-hidden": !0,
      }),
    ],
  });
}
function md({ playing: v }) {
  return h.jsxs("section", {
    id: "security",
    className: "relative h-screen min-h-[600px] w-full overflow-hidden bg-black scroll-mt-24",
    children: [
      h.jsx(Ha, { src: od, playing: v }),
      h.jsx("div", {
        className:
          "pointer-events-none absolute left-0 right-0 top-0 z-10 h-48 bg-gradient-to-b from-black to-transparent",
        "aria-hidden": !0,
      }),
      h.jsxs("div", {
        className: "relative mx-auto h-full w-full max-w-[1100px]",
        children: [
          h.jsx("div", {
            className:
              "absolute left-1/2 top-6 z-20 w-max max-w-[95vw] -translate-x-1/2 rounded-full bg-neutral-900/80 p-2 backdrop-blur sm:top-10 sm:p-3",
            children: h.jsxs("div", {
              className: "flex items-center gap-1 sm:gap-2",
              children: [
                h.jsx(Rn, {
                  target: { kind: "section", id: "security" },
                  className:
                    "whitespace-nowrap rounded-full px-4 py-2 text-xs text-white/90 transition-colors hover:text-white sm:px-7 sm:py-3 sm:text-sm",
                  children: "confirm real person",
                }),
                h.jsx(fd, {}),
              ],
            }),
          }),
          h.jsx("p", {
            className:
              "absolute left-4 top-[62%] max-w-[280px] text-[13px] font-light leading-relaxed text-white/80 sm:left-6 sm:top-[56%] sm:max-w-[440px] sm:text-[18px] md:left-16",
            "data-editable": !0,
            children:
              "shielding users info with premier tech, granting them with safety in all place",
          }),
          h.jsx("p", {
            className:
              "absolute right-4 top-[26%] max-w-[280px] text-[13px] font-light leading-relaxed text-white/90 sm:right-6 sm:top-[34%] sm:max-w-[500px] sm:text-[18px] md:right-16",
            "data-editable": !0,
            children:
              "By teaming up with a defender service, a business can dramatically improve the safeguard of its important info. This covers applying strong obfuscation protocols, gateway barriers, and observation engines to shield against unauthorized entries, info escapes, and malicious cyberhacks.",
          }),
        ],
      }),
    ],
  });
}
function Tl({ icon: v, label: L, twoLine: m }) {
  return h.jsxs("div", {
    className: "relative z-10 flex items-center gap-2 sm:gap-3",
    children: [
      v,
      m
        ? h.jsxs("div", {
            className:
              "text-lg font-semibold leading-tight tracking-tight lowercase text-white sm:text-2xl",
            "data-editable": !0,
            children: [h.jsx("div", { children: "eastern" }), h.jsx("div", { children: "delta" })],
          })
        : h.jsx("span", {
            className: "text-xl font-semibold tracking-tight lowercase text-white sm:text-3xl",
            "data-editable": !0,
            children: L,
          }),
    ],
  });
}
function hd() {
  return h.jsxs("section", {
    id: "companies",
    className: "relative w-full scroll-mt-24 bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10",
    children: [
      h.jsxs("div", {
        className: "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
        children: [
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -left-24 -top-24 h-40 w-40 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsx(Tl, {
                label: "apex",
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M12 2l2.39 4.84L20 8l-4 3.9L17.28 18 12 15.27 6.72 18 8 11.9 4 8l5.61-1.16L12 2z",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -left-24 -top-24 h-40 w-40 rounded-full bg-[#FA8453] opacity-30 blur-3xl",
              }),
              h.jsx("div", {
                className:
                  "absolute -bottom-24 -right-24 h-40 w-40 rounded-full bg-[#F5D547] opacity-25 blur-3xl",
              }),
              h.jsx(Tl, {
                label: "forge",
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M20.63 8.46l-4.73-2.73-.53.31 5.1 2.94v5.88l-5.1 2.94.53.3 4.73-2.72V8.46zM8.1 6.04l.53.3L3.53 9.28v5.88L8.63 18.1l-.53.3-4.73-2.72V8.46L8.1 6.04zM16.05 14.3v-4.6L12 7.4 7.95 9.7v4.6L12 16.6l4.05-2.3zm-.53-.3L12 16.02l-3.52-2.02v-4.02L12 7.96l3.52 2.02v4.02z",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-[#F5D547] opacity-30 blur-3xl",
              }),
              h.jsx(Tl, {
                label: "eastern delta",
                twoLine: !0,
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M2 4l3 16h3l2-10 2 10h3l3-16h-3l-1.5 10L12 4h-2L8.5 14 7 4H2z",
                  }),
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-32 md:h-36",
            children: [
              h.jsx("div", {
                className:
                  "absolute -right-28 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsx(Tl, {
                label: "skybank",
                icon: h.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "h-6 w-6 fill-white sm:h-8 sm:w-8",
                  "aria-hidden": !0,
                  children: h.jsx("path", {
                    d: "M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75L18 9.5l-6-3.75L18 2zM0 13.25L6 9.5l6 3.75L6 17l-6-3.75zm18-3.75l6 3.75L18 17l-6-3.75 6-3.75zM6 18.25L12 14.5l6 3.75L12 22l-6-3.75z",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      h.jsxs("div", {
        className:
          "mt-16 flex flex-col items-start justify-between gap-6 sm:mt-28 sm:gap-8 md:ml-auto md:w-[70%] md:flex-row md:items-center",
        children: [
          h.jsx("p", {
            className:
              "max-w-md text-[13px] font-light leading-relaxed text-white/70 sm:text-[18px]",
            "data-editable": !0,
            children:
              "shielding users info with premier tech, granting them with safety in all place",
          }),
          h.jsx("div", {
            className: "relative rounded-full p-[1.5px]",
            style: { background: Ba },
            children: h.jsx(Rn, {
              target: { kind: "section", id: "contact" },
              className:
                "block rounded-full bg-black px-8 py-2.5 text-sm lowercase text-white sm:px-10 sm:py-3",
              "data-editable": !0,
              children: "run demo",
            }),
          }),
        ],
      }),
    ],
  });
}
const Ia =
  "Defense platforms constantly observe bandwidth streams, record files, and machine behaviors to uncover unusual patterns or outliers that could signal a defensive failure.";
function vd({ playing: v }) {
  return h.jsxs("section", {
    id: "benefits",
    className: "relative w-full scroll-mt-24 bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10",
    children: [
      h.jsx("h2", {
        className:
          "mb-12 text-center text-3xl font-light lowercase text-white sm:mb-24 sm:text-4xl md:text-5xl",
        style: { letterSpacing: "-0.04em" },
        "data-editable": !0,
        children: "key benefits",
      }),
      h.jsxs("div", {
        className: "grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3",
        children: [
          h.jsxs("div", {
            className:
              "relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8",
            children: [
              h.jsx("div", {
                className:
                  "absolute top-1/2 -left-[420px] h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsxs("div", {
                className: "relative z-10",
                children: [
                  h.jsxs("h3", {
                    className: "text-xl font-light leading-tight lowercase sm:text-2xl",
                    "data-editable": !0,
                    children: ["preemptive risks", h.jsx("br", {}), "scouting and reactions"],
                  }),
                  h.jsx("p", {
                    className:
                      "mt-12 max-w-[280px] text-[13px] font-light leading-relaxed text-white/70 sm:mt-20 sm:text-[14px]",
                    "data-editable": !0,
                    children: Ia,
                  }),
                ],
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 sm:h-[460px]",
            children: [
              h.jsxs("div", {
                className: "relative w-full overflow-hidden",
                style: { height: "75%" },
                children: [
                  h.jsx("video", {
                    className: "block h-full w-full object-cover",
                    src: sd,
                    autoPlay: v,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                  }),
                  h.jsx("div", {
                    className:
                      "pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950",
                    "aria-hidden": !0,
                  }),
                ],
              }),
              h.jsx("div", {
                className: "flex flex-1 items-center justify-start p-6 sm:p-8",
                children: h.jsxs("h3", {
                  className: "text-xl font-light leading-tight lowercase sm:text-2xl",
                  "data-editable": !0,
                  children: ["know-how and sectoral", h.jsx("br", {}), "awareness"],
                }),
              }),
            ],
          }),
          h.jsxs("div", {
            className:
              "relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8",
            children: [
              h.jsx("div", {
                className:
                  "absolute -right-28 -top-28 h-56 w-56 rounded-full bg-[#1e3a8a] opacity-40 blur-3xl",
              }),
              h.jsxs("div", {
                className: "relative z-10 flex h-full flex-col",
                children: [
                  h.jsxs("h3", {
                    className: "text-xl font-light leading-tight lowercase sm:text-2xl",
                    "data-editable": !0,
                    children: ["preemptive risks", h.jsx("br", {}), "scouting and reactions"],
                  }),
                  h.jsx("p", {
                    className:
                      "mt-auto max-w-[320px] text-[13px] font-light leading-relaxed text-white/70 sm:text-[14px]",
                    "data-editable": !0,
                    children: Ia,
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
function yd() {
  const v = id(!0);
  return (
    Rl.useEffect(() => {
      td();
    }, []),
    h.jsxs("div", {
      className:
        "flex min-h-screen w-full flex-col items-center overflow-x-hidden bg-black text-white",
      children: [
        h.jsxs("div", {
          className: "relative w-full",
          children: [h.jsx(dd, {}), h.jsx(pd, { playing: v })],
        }),
        h.jsxs("div", {
          className: "w-full max-w-[1400px]",
          children: [h.jsx(md, { playing: v }), h.jsx(hd, {}), h.jsx(vd, { playing: v })],
        }),
        h.jsx(nd, { theme: "dark", brand: "Guardnet" }),
      ],
    })
  );
}
Xf();
Gf.createRoot(document.getElementById("root")).render(
  h.jsx(Rl.StrictMode, { children: h.jsx(yd, {}) }),
);
