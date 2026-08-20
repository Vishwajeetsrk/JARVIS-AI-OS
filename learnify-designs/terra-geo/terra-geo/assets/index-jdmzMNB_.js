(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) I(L);
  new MutationObserver((L) => {
    for (const B of L)
      if (B.type === "childList")
        for (const ae of B.addedNodes) ae.tagName === "LINK" && ae.rel === "modulepreload" && I(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function p(L) {
    const B = {};
    return (
      L.integrity && (B.integrity = L.integrity),
      L.referrerPolicy && (B.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : L.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function I(L) {
    if (L.ep) return;
    L.ep = !0;
    const B = p(L);
    fetch(L.href, B);
  }
})();
var ju = { exports: {} },
  Sr = {},
  zu = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Yf() {
  if (La) return F;
  La = 1;
  var v = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    p = Symbol.for("react.fragment"),
    I = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    B = Symbol.for("react.provider"),
    ae = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    ge = Symbol.for("react.memo"),
    me = Symbol.for("react.lazy"),
    ne = Symbol.iterator;
  function q(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (ne && c[ne]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var We = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Qe = Object.assign,
    b = {};
  function Y(c, g, D) {
    ((this.props = c), (this.context = g), (this.refs = b), (this.updater = D || We));
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
  function yt() {}
  yt.prototype = Y.prototype;
  function at(c, g, D) {
    ((this.props = c), (this.context = g), (this.refs = b), (this.updater = D || We));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), Qe(be, Y.prototype), (be.isPureReactComponent = !0));
  var ke = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    Ce = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, g, D) {
    var U,
      V = {},
      H = null,
      X = null;
    if (g != null)
      for (U in (g.ref !== void 0 && (X = g.ref), g.key !== void 0 && (H = "" + g.key), g))
        et.call(g, U) && !ze.hasOwnProperty(U) && (V[U] = g[U]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = D;
    else if (1 < Q) {
      for (var ee = Array(Q), Ue = 0; Ue < Q; Ue++) ee[Ue] = arguments[Ue + 2];
      V.children = ee;
    }
    if (c && c.defaultProps) for (U in ((Q = c.defaultProps), Q)) V[U] === void 0 && (V[U] = Q[U]);
    return { $$typeof: v, type: c, key: H, ref: X, props: V, _owner: Ce.current };
  }
  function jt(c, g) {
    return { $$typeof: v, type: c.type, key: g, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === v;
  }
  function Gt(c) {
    var g = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (D) {
        return g[D];
      })
    );
  }
  var ct = /\/+/g;
  function Fe(c, g) {
    return typeof c == "object" && c !== null && c.key != null ? Gt("" + c.key) : g.toString(36);
  }
  function tt(c, g, D, U, V) {
    var H = typeof c;
    (H === "undefined" || H === "boolean") && (c = null);
    var X = !1;
    if (c === null) X = !0;
    else
      switch (H) {
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case v:
            case S:
              X = !0;
          }
      }
    if (X)
      return (
        (X = c),
        (V = V(X)),
        (c = U === "" ? "." + Fe(X, 0) : U),
        ke(V)
          ? ((D = ""),
            c != null && (D = c.replace(ct, "$&/") + "/"),
            tt(V, g, D, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (gt(V) &&
              (V = jt(
                V,
                D +
                  (!V.key || (X && X.key === V.key) ? "" : ("" + V.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            g.push(V)),
        1
      );
    if (((X = 0), (U = U === "" ? "." : U + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        H = c[Q];
        var ee = U + Fe(H, Q);
        X += tt(H, g, D, ee, V);
      }
    else if (((ee = q(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !(H = c.next()).done;)
        ((H = H.value), (ee = U + Fe(H, Q++)), (X += tt(H, g, D, ee, V)));
    else if (H === "object")
      throw (
        (g = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (g === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : g) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return X;
  }
  function ft(c, g, D) {
    if (c == null) return c;
    var U = [],
      V = 0;
    return (
      tt(c, U, "", "", function (H) {
        return g.call(D, H, V++);
      }),
      U
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var g = c._result;
      ((g = g()),
        g.then(
          function (D) {
            (c._status === 0 || c._status === -1) && ((c._status = 1), (c._result = D));
          },
          function (D) {
            (c._status === 0 || c._status === -1) && ((c._status = 2), (c._result = D));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = g)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var oe = { current: null },
    E = { transition: null },
    M = { ReactCurrentDispatcher: oe, ReactCurrentBatchConfig: E, ReactCurrentOwner: Ce };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
      map: ft,
      forEach: function (c, g, D) {
        ft(
          c,
          function () {
            g.apply(this, arguments);
          },
          D,
        );
      },
      count: function (c) {
        var g = 0;
        return (
          ft(c, function () {
            g++;
          }),
          g
        );
      },
      toArray: function (c) {
        return (
          ft(c, function (g) {
            return g;
          }) || []
        );
      },
      only: function (c) {
        if (!gt(c))
          throw Error("React.Children.only expected to receive a single React element child.");
        return c;
      },
    }),
    (F.Component = Y),
    (F.Fragment = p),
    (F.Profiler = L),
    (F.PureComponent = at),
    (F.StrictMode = I),
    (F.Suspense = W),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (F.act = C),
    (F.cloneElement = function (c, g, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var U = Qe({}, c.props),
        V = c.key,
        H = c.ref,
        X = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((H = g.ref), (X = Ce.current)),
          g.key !== void 0 && (V = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in g)
          et.call(g, ee) &&
            !ze.hasOwnProperty(ee) &&
            (U[ee] = g[ee] === void 0 && Q !== void 0 ? Q[ee] : g[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) U.children = D;
      else if (1 < ee) {
        Q = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) Q[Ue] = arguments[Ue + 2];
        U.children = Q;
      }
      return { $$typeof: v, type: c.type, key: V, ref: H, props: U, _owner: X };
    }),
    (F.createContext = function (c) {
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
    (F.createElement = Ke),
    (F.createFactory = function (c) {
      var g = Ke.bind(null, c);
      return ((g.type = c), g);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (c) {
      return { $$typeof: ce, render: c };
    }),
    (F.isValidElement = gt),
    (F.lazy = function (c) {
      return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (F.memo = function (c, g) {
      return { $$typeof: ge, type: c, compare: g === void 0 ? null : g };
    }),
    (F.startTransition = function (c) {
      var g = E.transition;
      E.transition = {};
      try {
        c();
      } finally {
        E.transition = g;
      }
    }),
    (F.unstable_act = C),
    (F.useCallback = function (c, g) {
      return oe.current.useCallback(c, g);
    }),
    (F.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (F.useEffect = function (c, g) {
      return oe.current.useEffect(c, g);
    }),
    (F.useId = function () {
      return oe.current.useId();
    }),
    (F.useImperativeHandle = function (c, g, D) {
      return oe.current.useImperativeHandle(c, g, D);
    }),
    (F.useInsertionEffect = function (c, g) {
      return oe.current.useInsertionEffect(c, g);
    }),
    (F.useLayoutEffect = function (c, g) {
      return oe.current.useLayoutEffect(c, g);
    }),
    (F.useMemo = function (c, g) {
      return oe.current.useMemo(c, g);
    }),
    (F.useReducer = function (c, g, D) {
      return oe.current.useReducer(c, g, D);
    }),
    (F.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (F.useState = function (c) {
      return oe.current.useState(c);
    }),
    (F.useSyncExternalStore = function (c, g, D) {
      return oe.current.useSyncExternalStore(c, g, D);
    }),
    (F.useTransition = function () {
      return oe.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var Ta;
function Mu() {
  return (Ta || ((Ta = 1), (zu.exports = Yf())), zu.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ra;
function Xf() {
  if (Ra) return Sr;
  Ra = 1;
  var v = Mu(),
    S = Symbol.for("react.element"),
    p = Symbol.for("react.fragment"),
    I = Object.prototype.hasOwnProperty,
    L = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, W, ge) {
    var me,
      ne = {},
      q = null,
      We = null;
    (ge !== void 0 && (q = "" + ge),
      W.key !== void 0 && (q = "" + W.key),
      W.ref !== void 0 && (We = W.ref));
    for (me in W) I.call(W, me) && !B.hasOwnProperty(me) && (ne[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W)) ne[me] === void 0 && (ne[me] = W[me]);
    return { $$typeof: S, type: ce, key: q, ref: We, props: ne, _owner: L.current };
  }
  return ((Sr.Fragment = p), (Sr.jsx = ae), (Sr.jsxs = ae), Sr);
}
var Ma;
function Gf() {
  return (Ma || ((Ma = 1), (ju.exports = Xf())), ju.exports);
}
var h = Gf(),
  $e = Mu(),
  Ml = {},
  Lu = { exports: {} },
  Ie = {},
  Tu = { exports: {} },
  Ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Zf() {
  return (
    Oa ||
      ((Oa = 1),
      (function (v) {
        function S(E, M) {
          var C = E.length;
          E.push(M);
          e: for (; 0 < C;) {
            var c = (C - 1) >>> 1,
              g = E[c];
            if (0 < L(g, M)) ((E[c] = M), (E[C] = g), (C = c));
            else break e;
          }
        }
        function p(E) {
          return E.length === 0 ? null : E[0];
        }
        function I(E) {
          if (E.length === 0) return null;
          var M = E[0],
            C = E.pop();
          if (C !== M) {
            E[0] = C;
            e: for (var c = 0, g = E.length, D = g >>> 1; c < D;) {
              var U = 2 * (c + 1) - 1,
                V = E[U],
                H = U + 1,
                X = E[H];
              if (0 > L(V, C))
                H < g && 0 > L(X, V)
                  ? ((E[c] = X), (E[H] = C), (c = H))
                  : ((E[c] = V), (E[U] = C), (c = U));
              else if (H < g && 0 > L(X, C)) ((E[c] = X), (E[H] = C), (c = H));
              else break e;
            }
          }
          return M;
        }
        function L(E, M) {
          var C = E.sortIndex - M.sortIndex;
          return C !== 0 ? C : E.id - M.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var B = performance;
          v.unstable_now = function () {
            return B.now();
          };
        } else {
          var ae = Date,
            ce = ae.now();
          v.unstable_now = function () {
            return ae.now() - ce;
          };
        }
        var W = [],
          ge = [],
          me = 1,
          ne = null,
          q = 3,
          We = !1,
          Qe = !1,
          b = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(E) {
          for (var M = p(ge); M !== null;) {
            if (M.callback === null) I(ge);
            else if (M.startTime <= E) (I(ge), (M.sortIndex = M.expirationTime), S(W, M));
            else break;
            M = p(ge);
          }
        }
        function ke(E) {
          if (((b = !1), be(E), !Qe))
            if (p(W) !== null) ((Qe = !0), Le(et));
            else {
              var M = p(ge);
              M !== null && oe(ke, M.startTime - E);
            }
        }
        function et(E, M) {
          ((Qe = !1), b && ((b = !1), yt(Ke), (Ke = -1)), (We = !0));
          var C = q;
          try {
            for (be(M), ne = p(W); ne !== null && (!(ne.expirationTime > M) || (E && !Gt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (q = ne.priorityLevel));
                var g = c(ne.expirationTime <= M);
                ((M = v.unstable_now()),
                  typeof g == "function" ? (ne.callback = g) : ne === p(W) && I(W),
                  be(M));
              } else I(W);
              ne = p(W);
            }
            if (ne !== null) var D = !0;
            else {
              var U = p(ge);
              (U !== null && oe(ke, U.startTime - M), (D = !1));
            }
            return D;
          } finally {
            ((ne = null), (q = C), (We = !1));
          }
        }
        var Ce = !1,
          ze = null,
          Ke = -1,
          jt = 5,
          gt = -1;
        function Gt() {
          return !(v.unstable_now() - gt < jt);
        }
        function ct() {
          if (ze !== null) {
            var E = v.unstable_now();
            gt = E;
            var M = !0;
            try {
              M = ze(!0, E);
            } finally {
              M ? Fe() : ((Ce = !1), (ze = null));
            }
          } else Ce = !1;
        }
        var Fe;
        if (typeof at == "function")
          Fe = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Fe = function () {
              ft.postMessage(null);
            }));
        } else
          Fe = function () {
            Y(ct, 0);
          };
        function Le(E) {
          ((ze = E), Ce || ((Ce = !0), Fe()));
        }
        function oe(E, M) {
          Ke = Y(function () {
            E(v.unstable_now());
          }, M);
        }
        ((v.unstable_IdlePriority = 5),
          (v.unstable_ImmediatePriority = 1),
          (v.unstable_LowPriority = 4),
          (v.unstable_NormalPriority = 3),
          (v.unstable_Profiling = null),
          (v.unstable_UserBlockingPriority = 2),
          (v.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (v.unstable_continueExecution = function () {
            Qe || We || ((Qe = !0), Le(et));
          }),
          (v.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (jt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return p(W);
          }),
          (v.unstable_next = function (E) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var M = 3;
                break;
              default:
                M = q;
            }
            var C = q;
            q = M;
            try {
              return E();
            } finally {
              q = C;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (E, M) {
            switch (E) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                E = 3;
            }
            var C = q;
            q = E;
            try {
              return M();
            } finally {
              q = C;
            }
          }),
          (v.unstable_scheduleCallback = function (E, M, C) {
            var c = v.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? c + C : c))
                : (C = c),
              E)
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
              (g = C + g),
              (E = {
                id: me++,
                callback: M,
                priorityLevel: E,
                startTime: C,
                expirationTime: g,
                sortIndex: -1,
              }),
              C > c
                ? ((E.sortIndex = C),
                  S(ge, E),
                  p(W) === null &&
                    E === p(ge) &&
                    (b ? (yt(Ke), (Ke = -1)) : (b = !0), oe(ke, C - c)))
                : ((E.sortIndex = g), S(W, E), Qe || We || ((Qe = !0), Le(et))),
              E
            );
          }),
          (v.unstable_shouldYield = Gt),
          (v.unstable_wrapCallback = function (E) {
            var M = q;
            return function () {
              var C = q;
              q = M;
              try {
                return E.apply(this, arguments);
              } finally {
                q = C;
              }
            };
          }));
      })(Ru)),
    Ru
  );
}
var Da;
function Jf() {
  return (Da || ((Da = 1), (Tu.exports = Zf())), Tu.exports);
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
function qf() {
  if (Ia) return Ie;
  Ia = 1;
  var v = Mu(),
    S = Jf();
  function p(e) {
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
  var I = new Set(),
    L = {};
  function B(e, t) {
    (ae(e, t), ae(e + "Capture", t));
  }
  function ae(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) I.add(t[e]);
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
  function q(e) {
    return W.call(ne, e) ? !0 : W.call(me, e) ? !1 : ge.test(e) ? (ne[e] = !0) : ((me[e] = !0), !1);
  }
  function We(e, t, n, r) {
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
    if (t === null || typeof t > "u" || We(e, t, n, r)) return !0;
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
  function b(e, t, n, r, l, o, u) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
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
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      Y[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        Y[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
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
      (Qe(t, n, l, r) && (n = null),
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
  var ke = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    Ce = Symbol.for("react.portal"),
    ze = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    jt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Gt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Fe = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function M(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var C = Object.assign,
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
  var D = !1;
  function U(e, t) {
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
          } catch (m) {
            var r = m;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (m) {
            r = m;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (
          var l = m.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            i = o.length - 1;
          1 <= u && 0 <= i && l[u] !== o[i];
        )
          i--;
        for (; 1 <= u && 0 <= i; u--, i--)
          if (l[u] !== o[i]) {
            if (u !== 1 || i !== 1)
              do
                if ((u--, i--, 0 > i || l[u] !== o[i])) {
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
              while (1 <= u && 0 <= i);
            break;
          }
      }
    } finally {
      ((D = !1), (Error.prepareStackTrace = n));
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
  function H(e) {
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
      case Ke:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case tt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gt:
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
          return ((t = e.displayName || null), t !== null ? t : H(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return H(e(t));
          } catch {}
      }
    return null;
  }
  function X(e) {
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
        return H(t);
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
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            ((r = "" + u), o.call(this, u));
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
  function Er(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Iu(e) {
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
  function Nr(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Fu(e, t) {
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
  function Uu(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Dl(e, t) {
    Uu(e, t);
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
      ? Il(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Il(e, t.type, Q(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Bu(e, t, n) {
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
  function Il(e, t, n) {
    (t !== "number" || Nr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Fn = Array.isArray;
  function cn(e, t, n, r) {
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
  function Fl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Au(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(p(92));
        if (Fn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: Q(n) };
  }
  function Vu(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Hu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function $u(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ul(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $u(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var _r,
    Wu = (function (e) {
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
          _r = _r || document.createElement("div"),
            _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = _r.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild);
      }
    });
  function Un(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
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
    Za = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function (e) {
    Za.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]));
    });
  });
  function Qu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Ku(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Qu(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ja = C(
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
  function Bl(e, t) {
    if (t) {
      if (Ja[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
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
  function Hl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $l = null,
    fn = null,
    dn = null;
  function Yu(e) {
    if ((e = ir(e))) {
      if (typeof $l != "function") throw Error(p(280));
      var t = e.stateNode;
      t && ((t = Xr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Xu(e) {
    fn ? (dn ? dn.push(e) : (dn = [e])) : (fn = e);
  }
  function Gu() {
    if (fn) {
      var e = fn,
        t = dn;
      if (((dn = fn = null), Yu(e), t)) for (e = 0; e < t.length; e++) Yu(t[e]);
    }
  }
  function Zu(e, t) {
    return e(t);
  }
  function Ju() {}
  var Wl = !1;
  function qu(e, t, n) {
    if (Wl) return e(t, n);
    Wl = !0;
    try {
      return Zu(e, t, n);
    } finally {
      ((Wl = !1), (fn !== null || dn !== null) && (Ju(), Gu()));
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Xr(n);
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
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Ql = !1;
  if (ce)
    try {
      var Vn = {};
      (Object.defineProperty(Vn, "passive", {
        get: function () {
          Ql = !0;
        },
      }),
        window.addEventListener("test", Vn, Vn),
        window.removeEventListener("test", Vn, Vn));
    } catch {
      Ql = !1;
    }
  function qa(e, t, n, r, l, o, u, i, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (x) {
      this.onError(x);
    }
  }
  var Hn = !1,
    Cr = null,
    Pr = !1,
    Kl = null,
    ba = {
      onError: function (e) {
        ((Hn = !0), (Cr = e));
      },
    };
  function ec(e, t, n, r, l, o, u, i, s) {
    ((Hn = !1), (Cr = null), qa.apply(ba, arguments));
  }
  function tc(e, t, n, r, l, o, u, i, s) {
    if ((ec.apply(this, arguments), Hn)) {
      if (Hn) {
        var m = Cr;
        ((Hn = !1), (Cr = null));
      } else throw Error(p(198));
      Pr || ((Pr = !0), (Kl = m));
    }
  }
  function Zt(e) {
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
  function bu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function ei(e) {
    if (Zt(e) !== e) throw Error(p(188));
  }
  function nc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Zt(e)), t === null)) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ;) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o;) {
          if (o === n) return (ei(l), e);
          if (o === r) return (ei(l), t);
          o = o.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) ((n = l), (r = o));
      else {
        for (var u = !1, i = l.child; i;) {
          if (i === n) {
            ((u = !0), (n = l), (r = o));
            break;
          }
          if (i === r) {
            ((u = !0), (r = l), (n = o));
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i;) {
            if (i === n) {
              ((u = !0), (n = o), (r = l));
              break;
            }
            if (i === r) {
              ((u = !0), (r = o), (n = l));
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function ti(e) {
    return ((e = nc(e)), e !== null ? ni(e) : null);
  }
  function ni(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = ni(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ri = S.unstable_scheduleCallback,
    li = S.unstable_cancelCallback,
    rc = S.unstable_shouldYield,
    lc = S.unstable_requestPaint,
    ie = S.unstable_now,
    oc = S.unstable_getCurrentPriorityLevel,
    Yl = S.unstable_ImmediatePriority,
    oi = S.unstable_UserBlockingPriority,
    jr = S.unstable_NormalPriority,
    uc = S.unstable_LowPriority,
    ui = S.unstable_IdlePriority,
    zr = null,
    dt = null;
  function ic(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(zr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : cc,
    sc = Math.log,
    ac = Math.LN2;
  function cc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((sc(e) / ac) | 0)) | 0);
  }
  var Lr = 64,
    Tr = 4194304;
  function $n(e) {
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
  function Rr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? (r = $n(i)) : ((o &= u), o !== 0 && (r = $n(o)));
    } else ((u = n & ~l), u !== 0 ? (r = $n(u)) : o !== 0 && (r = $n(o)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((n = 31 - nt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function fc(e, t) {
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
  function dc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
      0 < o;
    ) {
      var u = 31 - nt(o),
        i = 1 << u,
        s = l[u];
      (s === -1
        ? ((i & n) === 0 || (i & r) !== 0) && (l[u] = fc(i, t))
        : s <= t && (e.expiredLanes |= i),
        (o &= ~i));
    }
  }
  function Xl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ii() {
    var e = Lr;
    return ((Lr <<= 1), (Lr & 4194240) === 0 && (Lr = 64), e);
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
  function pc(e, t) {
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
        o = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
    }
  }
  function Zl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function si(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var ai,
    Jl,
    ci,
    fi,
    di,
    ql = !1,
    Mr = [],
    zt = null,
    Lt = null,
    Tt = null,
    Qn = new Map(),
    Kn = new Map(),
    Rt = [],
    mc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function pi(e, t) {
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
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        Qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kn.delete(t.pointerId);
    }
  }
  function Yn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = ir(t)), t !== null && Jl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function hc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Yn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Yn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Tt = Yn(Tt, e, t, n, r, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (Qn.set(o, Yn(Qn.get(o) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((o = l.pointerId), Kn.set(o, Yn(Kn.get(o) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function mi(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Zt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = bu(n)), t !== null)) {
            ((e.blockedOn = t),
              di(e.priority, function () {
                ci(n);
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
      var n = eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Vl = r), n.target.dispatchEvent(r), (Vl = null));
      } else return ((t = ir(n)), t !== null && Jl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function hi(e, t, n) {
    Or(e) && n.delete(t);
  }
  function vc() {
    ((ql = !1),
      zt !== null && Or(zt) && (zt = null),
      Lt !== null && Or(Lt) && (Lt = null),
      Tt !== null && Or(Tt) && (Tt = null),
      Qn.forEach(hi),
      Kn.forEach(hi));
  }
  function Xn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ql || ((ql = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, vc)));
  }
  function Gn(e) {
    function t(l) {
      return Xn(l, e);
    }
    if (0 < Mr.length) {
      Xn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
        var r = Mr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Xn(zt, e),
        Lt !== null && Xn(Lt, e),
        Tt !== null && Xn(Tt, e),
        Qn.forEach(t),
        Kn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null);)
      (mi(n), n.blockedOn === null && Rt.shift());
  }
  var pn = ke.ReactCurrentBatchConfig,
    Dr = !0;
  function yc(e, t, n, r) {
    var l = K,
      o = pn.transition;
    pn.transition = null;
    try {
      ((K = 1), bl(e, t, n, r));
    } finally {
      ((K = l), (pn.transition = o));
    }
  }
  function gc(e, t, n, r) {
    var l = K,
      o = pn.transition;
    pn.transition = null;
    try {
      ((K = 4), bl(e, t, n, r));
    } finally {
      ((K = l), (pn.transition = o));
    }
  }
  function bl(e, t, n, r) {
    if (Dr) {
      var l = eo(e, t, n, r);
      if (l === null) (go(e, t, r, Ir, n), pi(e, r));
      else if (hc(l, e, t, n, r)) r.stopPropagation();
      else if ((pi(e, r), t & 4 && -1 < mc.indexOf(e))) {
        for (; l !== null;) {
          var o = ir(l);
          if (
            (o !== null && ai(o), (o = eo(e, t, n, r)), o === null && go(e, t, r, Ir, n), o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else go(e, t, r, null, n);
    }
  }
  var Ir = null;
  function eo(e, t, n, r) {
    if (((Ir = null), (e = Hl(r)), (e = Jt(e)), e !== null))
      if (((t = Zt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = bu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ir = e), null);
  }
  function vi(e) {
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
          case Yl:
            return 1;
          case oi:
            return 4;
          case jr:
          case uc:
            return 16;
          case ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    to = null,
    Fr = null;
  function yi() {
    if (Fr) return Fr;
    var e,
      t = to,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ur(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Br() {
    return !0;
  }
  function gi() {
    return !1;
  }
  function Be(e) {
    function t(n, r, l, o, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null));
      for (var i in e) e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(o) : o[i]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Br
          : gi),
        (this.isPropagationStopped = gi),
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
            (this.isDefaultPrevented = Br));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Br));
        },
        persist: function () {},
        isPersistent: Br,
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
    no = Be(mn),
    Zn = C({}, mn, { view: 0, detail: 0 }),
    xc = Be(Zn),
    ro,
    lo,
    Jn,
    Ar = C({}, Zn, {
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
      getModifierState: uo,
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
          : (e !== Jn &&
              (Jn && e.type === "mousemove"
                ? ((ro = e.screenX - Jn.screenX), (lo = e.screenY - Jn.screenY))
                : (lo = ro = 0),
              (Jn = e)),
            ro);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : lo;
      },
    }),
    xi = Be(Ar),
    wc = C({}, Ar, { dataTransfer: 0 }),
    kc = Be(wc),
    Sc = C({}, Zn, { relatedTarget: 0 }),
    oo = Be(Sc),
    Ec = C({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nc = Be(Ec),
    _c = C({}, mn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Cc = Be(_c),
    Pc = C({}, mn, { data: 0 }),
    wi = Be(Pc),
    jc = {
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
    zc = {
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
    Lc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Tc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lc[e]) ? !!t[e] : !1;
  }
  function uo() {
    return Tc;
  }
  var Rc = C({}, Zn, {
      key: function (e) {
        if (e.key) {
          var t = jc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? zc[e.keyCode] || "Unidentified"
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
      getModifierState: uo,
      charCode: function (e) {
        return e.type === "keypress" ? Ur(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ur(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Mc = Be(Rc),
    Oc = C({}, Ar, {
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
    ki = Be(Oc),
    Dc = C({}, Zn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uo,
    }),
    Ic = Be(Dc),
    Fc = C({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uc = Be(Fc),
    Bc = C({}, Ar, {
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
    Ac = Be(Bc),
    Vc = [9, 13, 27, 32],
    io = ce && "CompositionEvent" in window,
    qn = null;
  ce && "documentMode" in document && (qn = document.documentMode);
  var Hc = ce && "TextEvent" in window && !qn,
    Si = ce && (!io || (qn && 8 < qn && 11 >= qn)),
    Ei = " ",
    Ni = !1;
  function _i(e, t) {
    switch (e) {
      case "keyup":
        return Vc.indexOf(t.keyCode) !== -1;
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
  function Ci(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var hn = !1;
  function $c(e, t) {
    switch (e) {
      case "compositionend":
        return Ci(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ni = !0), Ei);
      case "textInput":
        return ((e = t.data), e === Ei && Ni ? null : e);
      default:
        return null;
    }
  }
  function Wc(e, t) {
    if (hn)
      return e === "compositionend" || (!io && _i(e, t))
        ? ((e = yi()), (Fr = to = Mt = null), (hn = !1), e)
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
        return Si && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Qc = {
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
  function Pi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Qc[e.type] : t === "textarea";
  }
  function ji(e, t, n, r) {
    (Xu(r),
      (t = Qr(t, "onChange")),
      0 < t.length &&
        ((n = new no("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var bn = null,
    er = null;
  function Kc(e) {
    Ki(e, 0);
  }
  function Vr(e) {
    var t = wn(e);
    if (Iu(t)) return e;
  }
  function Yc(e, t) {
    if (e === "change") return t;
  }
  var zi = !1;
  if (ce) {
    var so;
    if (ce) {
      var ao = "oninput" in document;
      if (!ao) {
        var Li = document.createElement("div");
        (Li.setAttribute("oninput", "return;"), (ao = typeof Li.oninput == "function"));
      }
      so = ao;
    } else so = !1;
    zi = so && (!document.documentMode || 9 < document.documentMode);
  }
  function Ti() {
    bn && (bn.detachEvent("onpropertychange", Ri), (er = bn = null));
  }
  function Ri(e) {
    if (e.propertyName === "value" && Vr(er)) {
      var t = [];
      (ji(t, er, e, Hl(e)), qu(Kc, t));
    }
  }
  function Xc(e, t, n) {
    e === "focusin"
      ? (Ti(), (bn = t), (er = n), bn.attachEvent("onpropertychange", Ri))
      : e === "focusout" && Ti();
  }
  function Gc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vr(er);
  }
  function Zc(e, t) {
    if (e === "click") return Vr(t);
  }
  function Jc(e, t) {
    if (e === "input" || e === "change") return Vr(t);
  }
  function qc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : qc;
  function tr(e, t) {
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
  function Mi(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Oi(e, t) {
    var n = Mi(e);
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
      n = Mi(n);
    }
  }
  function Di(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Di(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Ii() {
    for (var e = window, t = Nr(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Nr(e.document);
    }
    return t;
  }
  function co(e) {
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
  function bc(e) {
    var t = Ii(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Di(n.ownerDocument.documentElement, n)) {
      if (r !== null && co(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
          ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          ((r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = Oi(n, o)));
          var u = Oi(n, r);
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
            o > r
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
  var ef = ce && "documentMode" in document && 11 >= document.documentMode,
    vn = null,
    fo = null,
    nr = null,
    po = !1;
  function Fi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    po ||
      vn == null ||
      vn !== Nr(r) ||
      ((r = vn),
      "selectionStart" in r && co(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (nr && tr(nr, r)) ||
        ((nr = r),
        (r = Qr(fo, "onSelect")),
        0 < r.length &&
          ((t = new no("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = vn))));
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
  var yn = {
      animationend: Hr("Animation", "AnimationEnd"),
      animationiteration: Hr("Animation", "AnimationIteration"),
      animationstart: Hr("Animation", "AnimationStart"),
      transitionend: Hr("Transition", "TransitionEnd"),
    },
    mo = {},
    Ui = {};
  ce &&
    ((Ui = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yn.animationend.animation,
      delete yn.animationiteration.animation,
      delete yn.animationstart.animation),
    "TransitionEvent" in window || delete yn.transitionend.transition);
  function $r(e) {
    if (mo[e]) return mo[e];
    if (!yn[e]) return e;
    var t = yn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ui) return (mo[e] = t[n]);
    return e;
  }
  var Bi = $r("animationend"),
    Ai = $r("animationiteration"),
    Vi = $r("animationstart"),
    Hi = $r("transitionend"),
    $i = new Map(),
    Wi =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    ($i.set(e, t), B(t, [e]));
  }
  for (var ho = 0; ho < Wi.length; ho++) {
    var vo = Wi[ho],
      tf = vo.toLowerCase(),
      nf = vo[0].toUpperCase() + vo.slice(1);
    Ot(tf, "on" + nf);
  }
  (Ot(Bi, "onAnimationEnd"),
    Ot(Ai, "onAnimationIteration"),
    Ot(Vi, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Hi, "onTransitionEnd"),
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
  var rr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));
  function Qi(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), tc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Ki(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var i = r[u],
              s = i.instance,
              m = i.currentTarget;
            if (((i = i.listener), s !== o && l.isPropagationStopped())) break e;
            (Qi(l, i, m), (o = s));
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((i = r[u]),
              (s = i.instance),
              (m = i.currentTarget),
              (i = i.listener),
              s !== o && l.isPropagationStopped())
            )
              break e;
            (Qi(l, i, m), (o = s));
          }
      }
    }
    if (Pr) throw ((e = Kl), (Pr = !1), (Kl = null), e);
  }
  function Z(e, t) {
    var n = t[No];
    n === void 0 && (n = t[No] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Yi(t, e, 2, !1), n.add(r));
  }
  function yo(e, t, n) {
    var r = 0;
    (t && (r |= 4), Yi(n, e, r, t));
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function lr(e) {
    if (!e[Wr]) {
      ((e[Wr] = !0),
        I.forEach(function (n) {
          n !== "selectionchange" && (rf.has(n) || yo(n, !1, e), yo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Wr] || ((t[Wr] = !0), yo("selectionchange", !1, t));
    }
  }
  function Yi(e, t, n, r) {
    switch (vi(t)) {
      case 1:
        var l = yc;
        break;
      case 4:
        l = gc;
        break;
      default:
        l = bl;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ql || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function go(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
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
          for (; i !== null;) {
            if (((u = Jt(i)), u === null)) return;
            if (((s = u.tag), s === 5 || s === 6)) {
              r = o = u;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    qu(function () {
      var m = o,
        x = Hl(n),
        w = [];
      e: {
        var y = $i.get(e);
        if (y !== void 0) {
          var N = no,
            P = e;
          switch (e) {
            case "keypress":
              if (Ur(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Mc;
              break;
            case "focusin":
              ((P = "focus"), (N = oo));
              break;
            case "focusout":
              ((P = "blur"), (N = oo));
              break;
            case "beforeblur":
            case "afterblur":
              N = oo;
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
              N = xi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = kc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Ic;
              break;
            case Bi:
            case Ai:
            case Vi:
              N = Nc;
              break;
            case Hi:
              N = Uc;
              break;
            case "scroll":
              N = xc;
              break;
            case "wheel":
              N = Ac;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Cc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = ki;
          }
          var j = (t & 4) !== 0,
            se = !j && e === "scroll",
            f = j ? (y !== null ? y + "Capture" : null) : y;
          j = [];
          for (var a = m, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = An(a, f)), k != null && j.push(or(a, k, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < j.length && ((y = new N(y, P, null, n, x)), w.push({ event: y, listeners: j }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            y && n !== Vl && (P = n.relatedTarget || n.fromElement) && (Jt(P) || P[xt]))
          )
            break e;
          if (
            (N || y) &&
            ((y =
              x.window === x
                ? x
                : (y = x.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            N
              ? ((P = n.relatedTarget || n.toElement),
                (N = m),
                (P = P ? Jt(P) : null),
                P !== null &&
                  ((se = Zt(P)), P !== se || (P.tag !== 5 && P.tag !== 6)) &&
                  (P = null))
              : ((N = null), (P = m)),
            N !== P)
          ) {
            if (
              ((j = xi),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((j = ki), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (se = N == null ? y : wn(N)),
              (d = P == null ? y : wn(P)),
              (y = new j(k, a + "leave", N, n, x)),
              (y.target = se),
              (y.relatedTarget = d),
              (k = null),
              Jt(x) === m &&
                ((j = new j(f, a + "enter", P, n, x)),
                (j.target = d),
                (j.relatedTarget = se),
                (k = j)),
              (se = k),
              N && P)
            )
              t: {
                for (j = N, f = P, a = 0, d = j; d; d = gn(d)) a++;
                for (d = 0, k = f; k; k = gn(k)) d++;
                for (; 0 < a - d;) ((j = gn(j)), a--);
                for (; 0 < d - a;) ((f = gn(f)), d--);
                for (; a--;) {
                  if (j === f || (f !== null && j === f.alternate)) break t;
                  ((j = gn(j)), (f = gn(f)));
                }
                j = null;
              }
            else j = null;
            (N !== null && Xi(w, y, N, j, !1), P !== null && se !== null && Xi(w, se, P, j, !0));
          }
        }
        e: {
          if (
            ((y = m ? wn(m) : window),
            (N = y.nodeName && y.nodeName.toLowerCase()),
            N === "select" || (N === "input" && y.type === "file"))
          )
            var z = Yc;
          else if (Pi(y))
            if (zi) z = Jc;
            else {
              z = Gc;
              var T = Xc;
            }
          else
            (N = y.nodeName) &&
              N.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (z = Zc);
          if (z && (z = z(e, m))) {
            ji(w, z, n, x);
            break e;
          }
          (T && T(e, y, m),
            e === "focusout" &&
              (T = y._wrapperState) &&
              T.controlled &&
              y.type === "number" &&
              Il(y, "number", y.value));
        }
        switch (((T = m ? wn(m) : window), e)) {
          case "focusin":
            (Pi(T) || T.contentEditable === "true") && ((vn = T), (fo = m), (nr = null));
            break;
          case "focusout":
            nr = fo = vn = null;
            break;
          case "mousedown":
            po = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((po = !1), Fi(w, n, x));
            break;
          case "selectionchange":
            if (ef) break;
          case "keydown":
          case "keyup":
            Fi(w, n, x);
        }
        var R;
        if (io)
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
            ? _i(e, n) && (O = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        (O &&
          (Si &&
            n.locale !== "ko" &&
            (hn || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && hn && (R = yi())
              : ((Mt = x), (to = "value" in Mt ? Mt.value : Mt.textContent), (hn = !0))),
          (T = Qr(m, O)),
          0 < T.length &&
            ((O = new wi(O, e, null, n, x)),
            w.push({ event: O, listeners: T }),
            R ? (O.data = R) : ((R = Ci(n)), R !== null && (O.data = R)))),
          (R = Hc ? $c(e, n) : Wc(e, n)) &&
            ((m = Qr(m, "onBeforeInput")),
            0 < m.length &&
              ((x = new wi("onBeforeInput", "beforeinput", null, n, x)),
              w.push({ event: x, listeners: m }),
              (x.data = R))));
      }
      Ki(w, t);
    });
  }
  function or(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        o = l.stateNode;
      (l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = An(e, n)),
        o != null && r.unshift(or(e, o, l)),
        (o = An(e, t)),
        o != null && r.push(or(e, o, l))),
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
  function Xi(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r;) {
      var i = n,
        s = i.alternate,
        m = i.stateNode;
      if (s !== null && s === r) break;
      (i.tag === 5 &&
        m !== null &&
        ((i = m),
        l
          ? ((s = An(n, o)), s != null && u.unshift(or(n, s, i)))
          : l || ((s = An(n, o)), s != null && u.push(or(n, s, i)))),
        (n = n.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var lf = /\r\n?/g,
    of = /\u0000|\uFFFD/g;
  function Gi(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        lf,
        `
`,
      )
      .replace(of, "");
  }
  function Kr(e, t, n) {
    if (((t = Gi(t)), Gi(e) !== t && n)) throw Error(p(425));
  }
  function Yr() {}
  var xo = null,
    wo = null;
  function ko(e, t) {
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
  var So = typeof setTimeout == "function" ? setTimeout : void 0,
    uf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zi = typeof Promise == "function" ? Promise : void 0,
    sf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zi < "u"
          ? function (e) {
              return Zi.resolve(null).then(e).catch(af);
            }
          : So;
  function af(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Eo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Gn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Gn(t);
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
  function Ji(e) {
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
  var xn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + xn,
    ur = "__reactProps$" + xn,
    xt = "__reactContainer$" + xn,
    No = "__reactEvents$" + xn,
    cf = "__reactListeners$" + xn,
    ff = "__reactHandles$" + xn;
  function Jt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[xt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ji(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Ji(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ir(e) {
    return (
      (e = e[pt] || e[xt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function Xr(e) {
    return e[ur] || null;
  }
  var _o = [],
    kn = -1;
  function It(e) {
    return { current: e };
  }
  function J(e) {
    0 > kn || ((e.current = _o[kn]), (_o[kn] = null), kn--);
  }
  function G(e, t) {
    (kn++, (_o[kn] = e.current), (e.current = t));
  }
  var Ft = {},
    Se = It(Ft),
    Te = It(!1),
    qt = Ft;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
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
  function Gr() {
    (J(Te), J(Se));
  }
  function qi(e, t, n) {
    if (Se.current !== Ft) throw Error(p(168));
    (G(Se, t), G(Te, n));
  }
  function bi(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, X(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Zr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
      (qt = Se.current),
      G(Se, e),
      G(Te, Te.current),
      !0
    );
  }
  function es(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    (n
      ? ((e = bi(e, t, qt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        J(Te),
        J(Se),
        G(Se, e))
      : J(Te),
      G(Te, n));
  }
  var wt = null,
    Jr = !1,
    Co = !1;
  function ts(e) {
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function df(e) {
    ((Jr = !0), ts(e));
  }
  function Ut() {
    if (!Co && wt !== null) {
      Co = !0;
      var e = 0,
        t = K;
      try {
        var n = wt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((wt = null), (Jr = !1));
      } catch (l) {
        throw (wt !== null && (wt = wt.slice(e + 1)), ri(Yl, Ut), l);
      } finally {
        ((K = t), (Co = !1));
      }
    }
    return null;
  }
  var En = [],
    Nn = 0,
    qr = null,
    br = 0,
    Ye = [],
    Xe = 0,
    bt = null,
    kt = 1,
    St = "";
  function en(e, t) {
    ((En[Nn++] = br), (En[Nn++] = qr), (qr = e), (br = t));
  }
  function ns(e, t, n) {
    ((Ye[Xe++] = kt), (Ye[Xe++] = St), (Ye[Xe++] = bt), (bt = e));
    var r = kt;
    e = St;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var o = 32 - nt(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      ((o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (kt = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (St = o + e));
    } else ((kt = (1 << o) | (n << l) | r), (St = e));
  }
  function Po(e) {
    e.return !== null && (en(e, 1), ns(e, 1, 0));
  }
  function jo(e) {
    for (; e === qr;) ((qr = En[--Nn]), (En[Nn] = null), (br = En[--Nn]), (En[Nn] = null));
    for (; e === bt;)
      ((bt = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null),
        (kt = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var Ae = null,
    Ve = null,
    te = !1,
    lt = null;
  function rs(e, t) {
    var n = qe(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function ls(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ae = e), (Ve = Dt(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ae = e), (Ve = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = bt !== null ? { id: kt, overflow: St } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = qe(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ae = e),
              (Ve = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function zo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Lo(e) {
    if (te) {
      var t = Ve;
      if (t) {
        var n = t;
        if (!ls(e, t)) {
          if (zo(e)) throw Error(p(418));
          t = Dt(n.nextSibling);
          var r = Ae;
          t && ls(e, t) ? rs(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ae = e));
        }
      } else {
        if (zo(e)) throw Error(p(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ae = e));
      }
    }
  }
  function os(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ae = e;
  }
  function el(e) {
    if (e !== Ae) return !1;
    if (!te) return (os(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !ko(e.type, e.memoizedProps))),
      t && (t = Ve))
    ) {
      if (zo(e)) throw (us(), Error(p(418)));
      for (; t;) (rs(e, t), (t = Dt(t.nextSibling)));
    }
    if ((os(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ve = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Ve; e;) e = Dt(e.nextSibling);
  }
  function _n() {
    ((Ve = Ae = null), (te = !1));
  }
  function To(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var pf = ke.ReactCurrentBatchConfig;
  function sr(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r,
          o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var i = l.refs;
              u === null ? delete i[o] : (i[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function tl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function is(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ss(e) {
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
      return ((f = Kt(f, a)), (f.index = 0), (f.sibling = null), f);
    }
    function o(f, a, d) {
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
    function i(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = Su(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var z = d.type;
      return z === ze
        ? x(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && is(z) === a.type))
          ? ((k = l(a, d.props)), (k.ref = sr(f, a, d)), (k.return = f), k)
          : ((k = _l(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = sr(f, a, d)),
            (k.return = f),
            k);
    }
    function m(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = Eu(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function x(f, a, d, k, z) {
      return a === null || a.tag !== 7
        ? ((a = an(d, f.mode, k, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function w(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = Su("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = _l(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = sr(f, null, a)),
              (d.return = f),
              d
            );
          case Ce:
            return ((a = Eu(a, f.mode, d)), (a.return = f), a);
          case Le:
            var k = a._init;
            return w(f, k(a._payload), d);
        }
        if (Fn(a) || M(a)) return ((a = an(a, f.mode, d, null)), (a.return = f), a);
        tl(f, a);
      }
      return null;
    }
    function y(f, a, d, k) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : i(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === z ? s(f, a, d, k) : null;
          case Ce:
            return d.key === z ? m(f, a, d, k) : null;
          case Le:
            return ((z = d._init), y(f, a, z(d._payload), k));
        }
        if (Fn(d) || M(d)) return z !== null ? null : x(f, a, d, k, null);
        tl(f, d);
      }
      return null;
    }
    function N(f, a, d, k, z) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), i(a, f, "" + k, z));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case et:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, z));
          case Ce:
            return ((f = f.get(k.key === null ? d : k.key) || null), m(a, f, k, z));
          case Le:
            var T = k._init;
            return N(f, a, d, T(k._payload), z);
        }
        if (Fn(k) || M(k)) return ((f = f.get(d) || null), x(a, f, k, z, null));
        tl(a, k);
      }
      return null;
    }
    function P(f, a, d, k) {
      for (var z = null, T = null, R = a, O = (a = 0), ye = null; R !== null && O < d.length; O++) {
        R.index > O ? ((ye = R), (R = null)) : (ye = R.sibling);
        var $ = y(f, R, d[O], k);
        if ($ === null) {
          R === null && (R = ye);
          break;
        }
        (e && R && $.alternate === null && t(f, R),
          (a = o($, a, O)),
          T === null ? (z = $) : (T.sibling = $),
          (T = $),
          (R = ye));
      }
      if (O === d.length) return (n(f, R), te && en(f, O), z);
      if (R === null) {
        for (; O < d.length; O++)
          ((R = w(f, d[O], k)),
            R !== null && ((a = o(R, a, O)), T === null ? (z = R) : (T.sibling = R), (T = R)));
        return (te && en(f, O), z);
      }
      for (R = r(f, R); O < d.length; O++)
        ((ye = N(R, f, O, d[O], k)),
          ye !== null &&
            (e && ye.alternate !== null && R.delete(ye.key === null ? O : ye.key),
            (a = o(ye, a, O)),
            T === null ? (z = ye) : (T.sibling = ye),
            (T = ye)));
      return (
        e &&
          R.forEach(function (Yt) {
            return t(f, Yt);
          }),
        te && en(f, O),
        z
      );
    }
    function j(f, a, d, k) {
      var z = M(d);
      if (typeof z != "function") throw Error(p(150));
      if (((d = z.call(d)), d == null)) throw Error(p(151));
      for (
        var T = (z = null), R = a, O = (a = 0), ye = null, $ = d.next();
        R !== null && !$.done;
        O++, $ = d.next()
      ) {
        R.index > O ? ((ye = R), (R = null)) : (ye = R.sibling);
        var Yt = y(f, R, $.value, k);
        if (Yt === null) {
          R === null && (R = ye);
          break;
        }
        (e && R && Yt.alternate === null && t(f, R),
          (a = o(Yt, a, O)),
          T === null ? (z = Yt) : (T.sibling = Yt),
          (T = Yt),
          (R = ye));
      }
      if ($.done) return (n(f, R), te && en(f, O), z);
      if (R === null) {
        for (; !$.done; O++, $ = d.next())
          (($ = w(f, $.value, k)),
            $ !== null && ((a = o($, a, O)), T === null ? (z = $) : (T.sibling = $), (T = $)));
        return (te && en(f, O), z);
      }
      for (R = r(f, R); !$.done; O++, $ = d.next())
        (($ = N(R, f, O, $.value, k)),
          $ !== null &&
            (e && $.alternate !== null && R.delete($.key === null ? O : $.key),
            (a = o($, a, O)),
            T === null ? (z = $) : (T.sibling = $),
            (T = $)));
      return (
        e &&
          R.forEach(function (Kf) {
            return t(f, Kf);
          }),
        te && en(f, O),
        z
      );
    }
    function se(f, a, d, k) {
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
              for (var z = d.key, T = a; T !== null;) {
                if (T.key === z) {
                  if (((z = d.type), z === ze)) {
                    if (T.tag === 7) {
                      (n(f, T.sibling), (a = l(T, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    T.elementType === z ||
                    (typeof z == "object" && z !== null && z.$$typeof === Le && is(z) === T.type)
                  ) {
                    (n(f, T.sibling),
                      (a = l(T, d.props)),
                      (a.ref = sr(f, T, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, T);
                  break;
                } else t(f, T);
                T = T.sibling;
              }
              d.type === ze
                ? ((a = an(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = _l(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = sr(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return u(f);
          case Ce:
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
              ((a = Eu(d, f.mode, k)), (a.return = f), (f = a));
            }
            return u(f);
          case Le:
            return ((T = d._init), se(f, a, T(d._payload), k));
        }
        if (Fn(d)) return P(f, a, d, k);
        if (M(d)) return j(f, a, d, k);
        tl(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = Su(d, f.mode, k)), (a.return = f), (f = a)),
          u(f))
        : n(f, a);
    }
    return se;
  }
  var Cn = ss(!0),
    as = ss(!1),
    nl = It(null),
    rl = null,
    Pn = null,
    Ro = null;
  function Mo() {
    Ro = Pn = rl = null;
  }
  function Oo(e) {
    var t = nl.current;
    (J(nl), (e._currentValue = t));
  }
  function Do(e, t, n) {
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
    ((rl = e),
      (Ro = Pn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Me = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Ro !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
        if (rl === null) throw Error(p(308));
        ((Pn = e), (rl.dependencies = { lanes: 0, firstContext: e }));
      } else Pn = Pn.next = e;
    return t;
  }
  var tn = null;
  function Io(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function cs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Io(t)) : ((n.next = l.next), (l.next = n)),
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
  var Bt = !1;
  function Fo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function fs(e, t) {
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
    if (((r = r.shared), (A & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Et(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Io(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function ll(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Zl(e, n));
    }
  }
  function ds(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
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
          (o === null ? (l = o = u) : (o = o.next = u), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
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
  function ol(e, t, n, r) {
    var l = e.updateQueue;
    Bt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        m = s.next;
      ((s.next = null), u === null ? (o = m) : (u.next = m), (u = s));
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (i = x.lastBaseUpdate),
        i !== u && (i === null ? (x.firstBaseUpdate = m) : (i.next = m), (x.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var w = l.baseState;
      ((u = 0), (x = m = s = null), (i = o));
      do {
        var y = i.lane,
          N = i.eventTime;
        if ((r & y) === y) {
          x !== null &&
            (x = x.next =
              {
                eventTime: N,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var P = e,
              j = i;
            switch (((y = t), (N = n), j.tag)) {
              case 1:
                if (((P = j.payload), typeof P == "function")) {
                  w = P.call(N, w, y);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = j.payload), (y = typeof P == "function" ? P.call(N, w, y) : P), y == null)
                )
                  break e;
                w = C({}, w, y);
                break e;
              case 2:
                Bt = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [i]) : y.push(i));
        } else
          ((N = {
            eventTime: N,
            lane: y,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            x === null ? ((m = x = N), (s = w)) : (x = x.next = N),
            (u |= y));
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          ((y = i),
            (i = y.next),
            (y.next = null),
            (l.lastBaseUpdate = y),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (x === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = x),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((u |= l.lane), (l = l.next));
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      ((ln |= u), (e.lanes = u), (e.memoizedState = w));
    }
  }
  function ps(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function")) throw Error(p(191, l));
          l.call(r);
        }
      }
  }
  var ar = {},
    mt = It(ar),
    cr = It(ar),
    fr = It(ar);
  function nn(e) {
    if (e === ar) throw Error(p(174));
    return e;
  }
  function Uo(e, t) {
    switch ((G(fr, t), G(cr, e), G(mt, ar), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ul(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ul(t, e)));
    }
    (J(mt), G(mt, t));
  }
  function zn() {
    (J(mt), J(cr), J(fr));
  }
  function ms(e) {
    nn(fr.current);
    var t = nn(mt.current),
      n = Ul(t, e.type);
    t !== n && (G(cr, e), G(mt, n));
  }
  function Bo(e) {
    cr.current === e && (J(mt), J(cr));
  }
  var re = It(0);
  function ul(e) {
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
  var Ao = [];
  function Vo() {
    for (var e = 0; e < Ao.length; e++) Ao[e]._workInProgressVersionPrimary = null;
    Ao.length = 0;
  }
  var il = ke.ReactCurrentDispatcher,
    Ho = ke.ReactCurrentBatchConfig,
    rn = 0,
    le = null,
    de = null,
    he = null,
    sl = !1,
    dr = !1,
    pr = 0,
    mf = 0;
  function Ee() {
    throw Error(p(321));
  }
  function $o(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function Wo(e, t, n, r, l, o) {
    if (
      ((rn = o),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (il.current = e === null || e.memoizedState === null ? gf : xf),
      (e = n(r, l)),
      dr)
    ) {
      o = 0;
      do {
        if (((dr = !1), (pr = 0), 25 <= o)) throw Error(p(301));
        ((o += 1), (he = de = null), (t.updateQueue = null), (il.current = wf), (e = n(r, l)));
      } while (dr);
    }
    if (
      ((il.current = fl),
      (t = de !== null && de.next !== null),
      (rn = 0),
      (he = de = le = null),
      (sl = !1),
      t)
    )
      throw Error(p(300));
    return e;
  }
  function Qo() {
    var e = pr !== 0;
    return ((pr = 0), e);
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
      if (e === null) throw Error(p(310));
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
  function mr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ko(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = de,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = o.next), (o.next = u));
      }
      ((r.baseQueue = l = o), (n.pending = null));
    }
    if (l !== null) {
      ((o = l.next), (r = r.baseState));
      var i = (u = null),
        s = null,
        m = o;
      do {
        var x = m.lane;
        if ((rn & x) === x)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: m.action,
                hasEagerState: m.hasEagerState,
                eagerState: m.eagerState,
                next: null,
              }),
            (r = m.hasEagerState ? m.eagerState : e(r, m.action)));
        else {
          var w = {
            lane: x,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          };
          (s === null ? ((i = s = w), (u = r)) : (s = s.next = w), (le.lanes |= x), (ln |= x));
        }
        m = m.next;
      } while (m !== null && m !== o);
      (s === null ? (u = r) : (s.next = i),
        rt(r, t.memoizedState) || (Me = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((o = l.lane), (le.lanes |= o), (ln |= o), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Yo(e) {
    var t = Ze(),
      n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((o = e(o, u.action)), (u = u.next));
      while (u !== l);
      (rt(o, t.memoizedState) || (Me = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, r];
  }
  function hs() {}
  function vs(e, t) {
    var n = le,
      r = Ze(),
      l = t(),
      o = !rt(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      Xo(xs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), hr(9, gs.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(p(349));
      (rn & 30) !== 0 || ys(n, t, l);
    }
    return l;
  }
  function ys(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function gs(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ws(t) && ks(e));
  }
  function xs(e, t, n) {
    return n(function () {
      ws(t) && ks(e);
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
  function ks(e) {
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
        lastRenderedReducer: mr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yf.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function hr(e, t, n, r) {
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
  function Es() {
    return Ze().memoizedState;
  }
  function al(e, t, n, r) {
    var l = ht();
    ((le.flags |= e), (l.memoizedState = hr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function cl(e, t, n, r) {
    var l = Ze();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (de !== null) {
      var u = de.memoizedState;
      if (((o = u.destroy), r !== null && $o(r, u.deps))) {
        l.memoizedState = hr(t, n, o, r);
        return;
      }
    }
    ((le.flags |= e), (l.memoizedState = hr(1 | t, n, o, r)));
  }
  function Ns(e, t) {
    return al(8390656, 8, e, t);
  }
  function Xo(e, t) {
    return cl(2048, 8, e, t);
  }
  function _s(e, t) {
    return cl(4, 2, e, t);
  }
  function Cs(e, t) {
    return cl(4, 4, e, t);
  }
  function Ps(e, t) {
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
    return ((n = n != null ? n.concat([e]) : null), cl(4, 4, Ps.bind(null, t, e), n));
  }
  function Go() {}
  function zs(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ls(e, t) {
    var n = Ze();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && $o(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ts(e, t, n) {
    return (rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = ii()), (le.lanes |= n), (ln |= n), (e.baseState = !0)), t);
  }
  function hf(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Ho.transition;
    Ho.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Ho.transition = r));
    }
  }
  function Rs() {
    return Ze().memoizedState;
  }
  function vf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ms(e)))
      Os(t, n);
    else if (((n = cs(e, t, n, r)), n !== null)) {
      var l = je();
      (st(n, e, r, l), Ds(n, t, r));
    }
  }
  function yf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ms(e)) Os(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            i = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = i), rt(i, u))) {
            var s = t.interleaved;
            (s === null ? ((l.next = l), Io(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = cs(e, t, l, r)), n !== null && ((l = je()), st(n, e, r, l), Ds(n, t, r)));
    }
  }
  function Ms(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Os(e, t) {
    dr = sl = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ds(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Zl(e, n));
    }
  }
  var fl = {
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
    gf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Ns,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), al(4194308, 4, Ps.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return al(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return al(4, 2, e, t);
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
          (e = e.dispatch = vf.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Ss,
      useDebugValue: Go,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Ss(!1),
          t = e[0];
        return ((e = hf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          l = ht();
        if (te) {
          if (n === void 0) throw Error(p(407));
          n = n();
        } else {
          if (((n = t()), ve === null)) throw Error(p(349));
          (rn & 30) !== 0 || ys(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          Ns(xs.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          hr(9, gs.bind(null, r, o, n, t), void 0, null),
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
            (n = pr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = mf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    xf = {
      readContext: Ge,
      useCallback: zs,
      useContext: Ge,
      useEffect: Xo,
      useImperativeHandle: js,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ls,
      useReducer: Ko,
      useRef: Es,
      useState: function () {
        return Ko(mr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = Ze();
        return Ts(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Ko(mr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: hs,
      useSyncExternalStore: vs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    },
    wf = {
      readContext: Ge,
      useCallback: zs,
      useContext: Ge,
      useEffect: Xo,
      useImperativeHandle: js,
      useInsertionEffect: _s,
      useLayoutEffect: Cs,
      useMemo: Ls,
      useReducer: Yo,
      useRef: Es,
      useState: function () {
        return Yo(mr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = Ze();
        return de === null ? (t.memoizedState = e) : Ts(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Yo(mr)[0],
          t = Ze().memoizedState;
        return [e, t];
      },
      useMutableSource: hs,
      useSyncExternalStore: vs,
      useId: Rs,
      unstable_isNewReconciler: !1,
    };
  function ot(e, t) {
    if (e && e.defaultProps) {
      ((t = C({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Zo(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : C({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var dl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Zt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Wt(e),
        o = Nt(r, l);
      ((o.payload = t),
        n != null && (o.callback = n),
        (t = At(e, o, l)),
        t !== null && (st(t, e, l, r), ll(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = je(),
        l = Wt(e),
        o = Nt(r, l);
      ((o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = At(e, o, l)),
        t !== null && (st(t, e, l, r), ll(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = je(),
        r = Wt(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), ll(t, e, r)));
    },
  };
  function Is(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !tr(n, r) || !tr(l, o)
          : !0
    );
  }
  function Fs(e, t, n) {
    var r = !1,
      l = Ft,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = Ge(o))
        : ((l = Re(t) ? qt : Se.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Sn(e, l) : Ft)),
      (t = new t(n, o)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = dl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Us(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && dl.enqueueReplaceState(t, t.state, null));
  }
  function Jo(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Fo(e));
    var o = t.contextType;
    (typeof o == "object" && o !== null
      ? (l.context = Ge(o))
      : ((o = Re(t) ? qt : Se.current), (l.context = Sn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Zo(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        t !== l.state && dl.enqueueReplaceState(l, l.state, null),
        ol(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Ln(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += V(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function qo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function bo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var kf = typeof WeakMap == "function" ? WeakMap : Map;
  function Bs(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (xl || ((xl = !0), (mu = r)), bo(e, t));
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
          bo(e, t);
        }));
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          (bo(e, t),
            typeof r != "function" && (Ht === null ? (Ht = new Set([this])) : Ht.add(this)));
          var u = t.stack;
          this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
        }),
      n
    );
  }
  function Vs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new kf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Df.bind(null, e, t, n)), t.then(e, e));
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
  function $s(e, t, n, r, l) {
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
  var Sf = ke.ReactCurrentOwner,
    Me = !1;
  function Pe(e, t, n, r) {
    t.child = e === null ? as(t, null, n, r) : Cn(t, e.child, n, r);
  }
  function Ws(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      jn(t, l),
      (r = Wo(e, t, n, r, o, l)),
      (n = Qo()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && n && Po(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
    );
  }
  function Qs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !ku(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Ks(e, t, o, r, l))
        : ((e = _l(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), (e.lanes & l) === 0)) {
      var u = o.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : tr), n(u, r) && e.ref === t.ref))
        return _t(e, t, l);
    }
    return ((t.flags |= 1), (e = Kt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ks(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (tr(o, r) && e.ref === t.ref)
        if (((Me = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Me = !0);
        else return ((t.lanes = e.lanes), _t(e, t, l));
    }
    return eu(e, t, n, r, l);
  }
  function Ys(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          G(Rn, He),
          (He |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            G(Rn, He),
            (He |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = o !== null ? o.baseLanes : n),
          G(Rn, He),
          (He |= r));
      }
    else
      (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Rn, He),
        (He |= r));
    return (Pe(e, t, l, n), t.child);
  }
  function Xs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function eu(e, t, n, r, l) {
    var o = Re(n) ? qt : Se.current;
    return (
      (o = Sn(t, o)),
      jn(t, l),
      (n = Wo(e, t, n, r, o, l)),
      (r = Qo()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), _t(e, t, l))
        : (te && r && Po(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
    );
  }
  function Gs(e, t, n, r, l) {
    if (Re(n)) {
      var o = !0;
      Zr(t);
    } else o = !1;
    if ((jn(t, l), t.stateNode === null)) (ml(e, t), Fs(t, n, r), Jo(t, n, r, l), (r = !0));
    else if (e === null) {
      var u = t.stateNode,
        i = t.memoizedProps;
      u.props = i;
      var s = u.context,
        m = n.contextType;
      typeof m == "object" && m !== null
        ? (m = Ge(m))
        : ((m = Re(n) ? qt : Se.current), (m = Sn(t, m)));
      var x = n.getDerivedStateFromProps,
        w = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      (w ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((i !== r || s !== m) && Us(t, u, r, m)),
        (Bt = !1));
      var y = t.memoizedState;
      ((u.state = y),
        ol(t, r, u, l),
        (s = t.memoizedState),
        i !== r || y !== s || Te.current || Bt
          ? (typeof x == "function" && (Zo(t, n, x, r), (s = t.memoizedState)),
            (i = Bt || Is(t, n, i, r, y, s, m))
              ? (w ||
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
            (u.context = m),
            (r = i))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
    } else {
      ((u = t.stateNode),
        fs(e, t),
        (i = t.memoizedProps),
        (m = t.type === t.elementType ? i : ot(t.type, i)),
        (u.props = m),
        (w = t.pendingProps),
        (y = u.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? qt : Se.current), (s = Sn(t, s))));
      var N = n.getDerivedStateFromProps;
      ((x = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((i !== w || y !== s) && Us(t, u, r, s)),
        (Bt = !1),
        (y = t.memoizedState),
        (u.state = y),
        ol(t, r, u, l));
      var P = t.memoizedState;
      i !== w || y !== P || Te.current || Bt
        ? (typeof N == "function" && (Zo(t, n, N, r), (P = t.memoizedState)),
          (m = Bt || Is(t, n, m, r, y, P, s) || !1)
            ? (x ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, P, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, P, s)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = P)),
          (u.props = r),
          (u.state = P),
          (u.context = s),
          (r = m))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return tu(e, t, n, r, o, l);
  }
  function tu(e, t, n, r, l, o) {
    Xs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return (l && es(t, n, !1), _t(e, t, o));
    ((r = t.stateNode), (Sf.current = t));
    var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = Cn(t, e.child, null, o)), (t.child = Cn(t, null, i, o)))
        : Pe(e, t, i, o),
      (t.memoizedState = r.state),
      l && es(t, n, !0),
      t.child
    );
  }
  function Zs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? qi(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && qi(e, t.context, !1),
      Uo(e, t.containerInfo));
  }
  function Js(e, t, n, r, l) {
    return (_n(), To(l), (t.flags |= 256), Pe(e, t, n, r), t.child);
  }
  var nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ru(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function qs(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      i ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      G(re, l & 1),
      e === null)
    )
      return (
        Lo(t),
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
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                (r & 1) === 0 && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Cl(u, r, 0, null)),
                (e = an(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = ru(n)),
                (t.memoizedState = nu),
                e)
              : lu(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
      return Ef(e, t, u, r, i, l, n);
    if (o) {
      ((o = r.fallback), (u = t.mode), (l = e.child), (i = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (u & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        i !== null ? (o = Kt(i, o)) : ((o = an(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? ru(n)
            : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = nu),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = Kt(o, { mode: "visible", children: r.children })),
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
  function lu(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pl(e, t, n, r) {
    return (
      r !== null && To(r),
      Cn(t, e.child, null, n),
      (e = lu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ef(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = qo(Error(p(422)))), pl(e, t, u, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (o = an(o, l, u, null)),
            (o.flags |= 2),
            (r.return = t),
            (o.return = t),
            (r.sibling = o),
            (t.child = r),
            (t.mode & 1) !== 0 && Cn(t, e.child, null, u),
            (t.child.memoizedState = ru(u)),
            (t.memoizedState = nu),
            o);
    if ((t.mode & 1) === 0) return pl(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
      return ((r = i), (o = Error(p(419))), (r = qo(o, r, void 0)), pl(e, t, u, r));
    }
    if (((i = (u & e.childLanes) !== 0), Me || i)) {
      if (((r = ve), r !== null)) {
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
          l !== 0 && l !== o.retryLane && ((o.retryLane = l), Et(e, l), st(r, e, l, -1)));
      }
      return (wu(), (r = qo(Error(p(421)))), pl(e, t, u, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = If.bind(null, e)), (l._reactRetry = t), null)
      : ((e = o.treeContext),
        (Ve = Dt(l.nextSibling)),
        (Ae = t),
        (te = !0),
        (lt = null),
        e !== null &&
          ((Ye[Xe++] = kt),
          (Ye[Xe++] = St),
          (Ye[Xe++] = bt),
          (kt = e.id),
          (St = e.overflow),
          (bt = t)),
        (t = lu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function bs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Do(e.return, t, n));
  }
  function ou(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function ea(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if ((Pe(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && bs(e, n, t);
          else if (e.tag === 19) bs(e, n, t);
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
    if ((G(re, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && ul(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ou(t, !1, l, n, o));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && ul(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ou(t, !0, n, null, o);
          break;
        case "together":
          ou(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ml(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ln |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Nf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Zs(t), _n());
        break;
      case 5:
        ms(t);
        break;
      case 1:
        Re(t.type) && Zr(t);
        break;
      case 4:
        Uo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (G(nl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(re, re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? qs(e, t, n)
              : (G(re, re.current & 1), (e = _t(e, t, n)), e !== null ? e.sibling : null);
        G(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ea(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          G(re, re.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ys(e, t, n));
    }
    return _t(e, t, n);
  }
  var ta, uu, na, ra;
  ((ta = function (e, t) {
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
    (uu = function () {}),
    (na = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), nn(mt.current));
        var o = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (o = []));
            break;
          case "select":
            ((l = C({}, l, { value: void 0 })), (r = C({}, r, { value: void 0 })), (o = []));
            break;
          case "textarea":
            ((l = Fl(e, l)), (r = Fl(e, r)), (o = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
        }
        Bl(n, r);
        var u;
        n = null;
        for (m in l)
          if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
            if (m === "style") {
              var i = l[m];
              for (u in i) i.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              m !== "dangerouslySetInnerHTML" &&
                m !== "children" &&
                m !== "suppressContentEditableWarning" &&
                m !== "suppressHydrationWarning" &&
                m !== "autoFocus" &&
                (L.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
        for (m in r) {
          var s = r[m];
          if (
            ((i = l != null ? l[m] : void 0),
            r.hasOwnProperty(m) && s !== i && (s != null || i != null))
          )
            if (m === "style")
              if (i) {
                for (u in i)
                  !i.hasOwnProperty(u) ||
                    (s && s.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (n || (n = {}), (n[u] = s[u]));
              } else (n || (o || (o = []), o.push(m, n)), (n = s));
            else
              m === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (i = i ? i.__html : void 0),
                  s != null && i !== s && (o = o || []).push(m, s))
                : m === "children"
                  ? (typeof s != "string" && typeof s != "number") || (o = o || []).push(m, "" + s)
                  : m !== "suppressContentEditableWarning" &&
                    m !== "suppressHydrationWarning" &&
                    (L.hasOwnProperty(m)
                      ? (s != null && m === "onScroll" && Z("scroll", e), o || i === s || (o = []))
                      : (o = o || []).push(m, s));
        }
        n && (o = o || []).push("style", n);
        var m = o;
        (t.updateQueue = m) && (t.flags |= 4);
      }
    }),
    (ra = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function vr(e, t) {
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
  function _f(e, t, n) {
    var r = t.pendingProps;
    switch ((jo(t), t.tag)) {
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
        return (Re(t.type) && Gr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          zn(),
          J(Te),
          J(Se),
          Vo(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (el(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (yu(lt), (lt = null)))),
          uu(e, t),
          Ne(t),
          null
        );
      case 5:
        Bo(t);
        var l = nn(fr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (na(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return (Ne(t), null);
          }
          if (((e = nn(mt.current)), el(t))) {
            ((r = t.stateNode), (n = t.type));
            var o = t.memoizedProps;
            switch (((r[pt] = t), (r[ur] = o), (e = (t.mode & 1) !== 0), n)) {
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
                for (l = 0; l < rr.length; l++) Z(rr[l], r);
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
                (Fu(r, o), Z("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!o.multiple }), Z("invalid", r));
                break;
              case "textarea":
                (Au(r, o), Z("invalid", r));
            }
            (Bl(n, o), (l = null));
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var i = o[u];
                u === "children"
                  ? typeof i == "string"
                    ? r.textContent !== i &&
                      (o.suppressHydrationWarning !== !0 && Kr(r.textContent, i, e),
                      (l = ["children", i]))
                    : typeof i == "number" &&
                      r.textContent !== "" + i &&
                      (o.suppressHydrationWarning !== !0 && Kr(r.textContent, i, e),
                      (l = ["children", "" + i]))
                  : L.hasOwnProperty(u) && i != null && u === "onScroll" && Z("scroll", r);
              }
            switch (n) {
              case "input":
                (Er(r), Bu(r, o, !0));
                break;
              case "textarea":
                (Er(r), Hu(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Yr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $u(n)),
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
              (e[pt] = t),
              (e[ur] = r),
              ta(e, t, !1, !1),
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
                  for (l = 0; l < rr.length; l++) Z(rr[l], e);
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
                  (Fu(e, r), (l = Ol(e, r)), Z("invalid", e));
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
                  (Au(e, r), (l = Fl(e, r)), Z("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Bl(n, l), (i = l));
              for (o in i)
                if (i.hasOwnProperty(o)) {
                  var s = i[o];
                  o === "style"
                    ? Ku(e, s)
                    : o === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Wu(e, s))
                      : o === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Un(e, s)
                          : typeof s == "number" && Un(e, "" + s)
                        : o !== "suppressContentEditableWarning" &&
                          o !== "suppressHydrationWarning" &&
                          o !== "autoFocus" &&
                          (L.hasOwnProperty(o)
                            ? s != null && o === "onScroll" && Z("scroll", e)
                            : s != null && be(e, o, s, u));
                }
              switch (n) {
                case "input":
                  (Er(e), Bu(e, r, !1));
                  break;
                case "textarea":
                  (Er(e), Hu(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? cn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null && cn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Yr);
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
        if (e && t.stateNode != null) ra(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (((n = nn(fr.current)), nn(mt.current), el(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (o = r.nodeValue !== n) && ((e = Ae), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Kr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Kr(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ne(t), null);
      case 13:
        if (
          (J(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Ve !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (us(), _n(), (t.flags |= 98560), (o = !1));
          else if (((o = el(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(p(318));
              if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
                throw Error(p(317));
              o[pt] = t;
            } else (_n(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (o = !1));
          } else (lt !== null && (yu(lt), (lt = null)), (o = !0));
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (re.current & 1) !== 0 ? pe === 0 && (pe = 3) : wu())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (zn(), uu(e, t), e === null && lr(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Oo(t.type._context), Ne(t), null);
      case 17:
        return (Re(t.type) && Gr(), Ne(t), null);
      case 19:
        if ((J(re), (o = t.memoizedState), o === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) vr(o, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((u = ul(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      vr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling));
                  return (G(re, (re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            o.tail !== null &&
              ie() > Mn &&
              ((t.flags |= 128), (r = !0), vr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = ul(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                vr(o, !0),
                o.tail === null && o.tailMode === "hidden" && !u.alternate && !te)
              )
                return (Ne(t), null);
            } else
              2 * ie() - o.renderingStartTime > Mn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), vr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last), n !== null ? (n.sibling = u) : (t.child = u), (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = ie()),
            (t.sibling = null),
            (n = re.current),
            G(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          xu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (He & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ne(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function Cf(e, t) {
    switch ((jo(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Gr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          zn(),
          J(Te),
          J(Se),
          Vo(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Bo(t), null);
      case 13:
        if ((J(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(p(340));
          _n();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (J(re), null);
      case 4:
        return (zn(), null);
      case 10:
        return (Oo(t.type._context), null);
      case 22:
      case 23:
        return (xu(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hl = !1,
    _e = !1,
    Pf = typeof WeakSet == "function" ? WeakSet : Set,
    _ = null;
  function Tn(e, t) {
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
  var la = !1;
  function jf(e, t) {
    if (((xo = Dr), (e = Ii()), co(e))) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              i = -1,
              s = -1,
              m = 0,
              x = 0,
              w = e,
              y = null;
            t: for (;;) {
              for (
                var N;
                w !== n || (l !== 0 && w.nodeType !== 3) || (i = u + l),
                  w !== o || (r !== 0 && w.nodeType !== 3) || (s = u + r),
                  w.nodeType === 3 && (u += w.nodeValue.length),
                  (N = w.firstChild) !== null;
              )
                ((y = w), (w = N));
              for (;;) {
                if (w === e) break t;
                if (
                  (y === n && ++m === l && (i = u),
                  y === o && ++x === r && (s = u),
                  (N = w.nextSibling) !== null)
                )
                  break;
                ((w = y), (y = w.parentNode));
              }
              w = N;
            }
            n = i === -1 || s === -1 ? null : { start: i, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wo = { focusedElem: e, selectionRange: n }, Dr = !1, _ = t; _ !== null;)
      if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (_ = e));
      else
        for (; _ !== null;) {
          t = _;
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
                    var j = P.memoizedProps,
                      se = P.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? j : ot(t.type, j),
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
                  throw Error(p(163));
              }
          } catch (k) {
            ue(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (_ = e));
            break;
          }
          _ = t.return;
        }
    return ((P = la), (la = !1), P);
  }
  function yr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          ((l.destroy = void 0), o !== void 0 && iu(t, n, o));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function vl(e, t) {
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
  function su(e) {
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
  function oa(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), oa(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[ur], delete t[No], delete t[cf], delete t[ff])),
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
  function au(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Yr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (au(e, t, n), e = e.sibling; e !== null;) (au(e, t, n), (e = e.sibling));
  }
  function cu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (cu(e, t, n), e = e.sibling; e !== null;) (cu(e, t, n), (e = e.sibling));
  }
  var xe = null,
    ut = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (sa(e, t, n), (n = n.sibling));
  }
  function sa(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(zr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        _e || Tn(n, t);
      case 6:
        var r = xe,
          l = ut;
        ((xe = null),
          Vt(e, t, n),
          (xe = r),
          (ut = l),
          xe !== null &&
            (ut
              ? ((e = xe),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : xe.removeChild(n.stateNode)));
        break;
      case 18:
        xe !== null &&
          (ut
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? Eo(e.parentNode, n) : e.nodeType === 1 && Eo(e, n),
              Gn(e))
            : Eo(xe, n.stateNode));
        break;
      case 4:
        ((r = xe),
          (l = ut),
          (xe = n.stateNode.containerInfo),
          (ut = !0),
          Vt(e, t, n),
          (xe = r),
          (ut = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            ((o = o.tag),
              u !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && iu(n, t, u),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!_e && (Tn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (i) {
            ue(n, t, i);
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
  function aa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Pf()),
        t.forEach(function (r) {
          var l = Ff.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function it(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            i = u;
          e: for (; i !== null;) {
            switch (i.tag) {
              case 5:
                ((xe = i.stateNode), (ut = !1));
                break e;
              case 3:
                ((xe = i.stateNode.containerInfo), (ut = !0));
                break e;
              case 4:
                ((xe = i.stateNode.containerInfo), (ut = !0));
                break e;
            }
            i = i.return;
          }
          if (xe === null) throw Error(p(160));
          (sa(o, u, l), (xe = null), (ut = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (m) {
          ue(l, t, m);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (ca(t, e), (t = t.sibling));
  }
  function ca(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((it(t, e), vt(e), r & 4)) {
          try {
            (yr(3, e, e.return), vl(3, e));
          } catch (j) {
            ue(e, e.return, j);
          }
          try {
            yr(5, e, e.return);
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 1:
        (it(t, e), vt(e), r & 512 && n !== null && Tn(n, n.return));
        break;
      case 5:
        if ((it(t, e), vt(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Un(l, "");
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            i = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (i === "input" && o.type === "radio" && o.name != null && Uu(l, o), Al(i, u));
              var m = Al(i, o);
              for (u = 0; u < s.length; u += 2) {
                var x = s[u],
                  w = s[u + 1];
                x === "style"
                  ? Ku(l, w)
                  : x === "dangerouslySetInnerHTML"
                    ? Wu(l, w)
                    : x === "children"
                      ? Un(l, w)
                      : be(l, x, w, m);
              }
              switch (i) {
                case "input":
                  Dl(l, o);
                  break;
                case "textarea":
                  Vu(l, o);
                  break;
                case "select":
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var N = o.value;
                  N != null
                    ? cn(l, !!o.multiple, N, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? cn(l, !!o.multiple, o.defaultValue, !0)
                        : cn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[ur] = o;
            } catch (j) {
              ue(e, e.return, j);
            }
        }
        break;
      case 6:
        if ((it(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(p(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (j) {
            ue(e, e.return, j);
          }
        }
        break;
      case 3:
        if ((it(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Gn(t.containerInfo);
          } catch (j) {
            ue(e, e.return, j);
          }
        break;
      case 4:
        (it(t, e), vt(e));
        break;
      case 13:
        (it(t, e),
          vt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (pu = ie())),
          r & 4 && aa(e));
        break;
      case 22:
        if (
          ((x = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((_e = (m = _e) || x), it(t, e), (_e = m)) : it(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((m = e.memoizedState !== null), (e.stateNode.isHidden = m) && !x && (e.mode & 1) !== 0)
          )
            for (_ = e, x = e.child; x !== null;) {
              for (w = _ = x; _ !== null;) {
                switch (((y = _), (N = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yr(4, y, y.return);
                    break;
                  case 1:
                    Tn(y, y.return);
                    var P = y.stateNode;
                    if (typeof P.componentWillUnmount == "function") {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (P.props = t.memoizedProps),
                          (P.state = t.memoizedState),
                          P.componentWillUnmount());
                      } catch (j) {
                        ue(r, n, j);
                      }
                    }
                    break;
                  case 5:
                    Tn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      pa(w);
                      continue;
                    }
                }
                N !== null ? ((N.return = y), (_ = N)) : pa(w);
              }
              x = x.sibling;
            }
          e: for (x = null, w = e; ;) {
            if (w.tag === 5) {
              if (x === null) {
                x = w;
                try {
                  ((l = w.stateNode),
                    m
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((i = w.stateNode),
                        (s = w.memoizedProps.style),
                        (u = s != null && s.hasOwnProperty("display") ? s.display : null),
                        (i.style.display = Qu("display", u))));
                } catch (j) {
                  ue(e, e.return, j);
                }
              }
            } else if (w.tag === 6) {
              if (x === null)
                try {
                  w.stateNode.nodeValue = m ? "" : w.memoizedProps;
                } catch (j) {
                  ue(e, e.return, j);
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
              (x === w && (x = null), (w = w.return));
            }
            (x === w && (x = null), (w.sibling.return = w.return), (w = w.sibling));
          }
        }
        break;
      case 19:
        (it(t, e), vt(e), r & 4 && aa(e));
        break;
      case 21:
        break;
      default:
        (it(t, e), vt(e));
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
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Un(l, ""), (r.flags &= -33));
            var o = ia(e);
            cu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              i = ia(e);
            au(e, i, u);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        ue(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function zf(e, t, n) {
    ((_ = e), fa(e));
  }
  function fa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null;) {
      var l = _,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || hl;
        if (!u) {
          var i = l.alternate,
            s = (i !== null && i.memoizedState !== null) || _e;
          i = hl;
          var m = _e;
          if (((hl = u), (_e = s) && !m))
            for (_ = l; _ !== null;)
              ((u = _),
                (s = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? ma(l)
                  : s !== null
                    ? ((s.return = u), (_ = s))
                    : ma(l));
          for (; o !== null;) ((_ = o), fa(o), (o = o.sibling));
          ((_ = l), (hl = i), (_e = m));
        }
        da(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = l), (_ = o)) : da(e);
    }
  }
  function da(e) {
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
                _e || vl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !_e)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : ot(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = t.updateQueue;
                o !== null && ps(t, o, r);
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
                  ps(t, u, n);
                }
                break;
              case 5:
                var i = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = i;
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
                  var m = t.alternate;
                  if (m !== null) {
                    var x = m.memoizedState;
                    if (x !== null) {
                      var w = x.dehydrated;
                      w !== null && Gn(w);
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
                throw Error(p(163));
            }
          _e || (t.flags & 512 && su(t));
        } catch (y) {
          ue(t, t.return, y);
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
  function pa(e) {
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
  function ma(e) {
    for (; _ !== null;) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              vl(4, t);
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
            var o = t.return;
            try {
              su(t);
            } catch (s) {
              ue(t, o, s);
            }
            break;
          case 5:
            var u = t.return;
            try {
              su(t);
            } catch (s) {
              ue(t, u, s);
            }
        }
      } catch (s) {
        ue(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        ((i.return = t.return), (_ = i));
        break;
      }
      _ = t.return;
    }
  }
  var Lf = Math.ceil,
    yl = ke.ReactCurrentDispatcher,
    fu = ke.ReactCurrentOwner,
    Je = ke.ReactCurrentBatchConfig,
    A = 0,
    ve = null,
    fe = null,
    we = 0,
    He = 0,
    Rn = It(0),
    pe = 0,
    gr = null,
    ln = 0,
    gl = 0,
    du = 0,
    xr = null,
    Oe = null,
    pu = 0,
    Mn = 1 / 0,
    Ct = null,
    xl = !1,
    mu = null,
    Ht = null,
    wl = !1,
    $t = null,
    kl = 0,
    wr = 0,
    hu = null,
    Sl = -1,
    El = 0;
  function je() {
    return (A & 6) !== 0 ? ie() : Sl !== -1 ? Sl : (Sl = ie());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (A & 2) !== 0 && we !== 0
        ? we & -we
        : pf.transition !== null
          ? (El === 0 && (El = ii()), El)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vi(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < wr) throw ((wr = 0), (hu = null), Error(p(185)));
    (Wn(e, n, r),
      ((A & 2) === 0 || e !== ve) &&
        (e === ve && ((A & 2) === 0 && (gl |= n), pe === 4 && Qt(e, we)),
        De(e, r),
        n === 1 && A === 0 && (t.mode & 1) === 0 && ((Mn = ie() + 500), Jr && Ut())));
  }
  function De(e, t) {
    var n = e.callbackNode;
    dc(e, t);
    var r = Rr(e, e === ve ? we : 0);
    if (r === 0) (n !== null && li(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && li(n), t === 1))
        (e.tag === 0 ? df(va.bind(null, e)) : ts(va.bind(null, e)),
          sf(function () {
            (A & 6) === 0 && Ut();
          }),
          (n = null));
      else {
        switch (si(r)) {
          case 1:
            n = Yl;
            break;
          case 4:
            n = oi;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = ui;
            break;
          default:
            n = jr;
        }
        n = Na(n, ha.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function ha(e, t) {
    if (((Sl = -1), (El = 0), (A & 6) !== 0)) throw Error(p(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = Rr(e, e === ve ? we : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Nl(e, r);
    else {
      t = r;
      var l = A;
      A |= 2;
      var o = ga();
      (ve !== e || we !== t) && ((Ct = null), (Mn = ie() + 500), un(e, t));
      do
        try {
          Mf();
          break;
        } catch (i) {
          ya(e, i);
        }
      while (!0);
      (Mo(), (yl.current = o), (A = l), fe !== null ? (t = 0) : ((ve = null), (we = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Xl(e)), l !== 0 && ((r = l), (t = vu(e, l)))), t === 1))
        throw ((n = gr), un(e, 0), Qt(e, r), De(e, ie()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Tf(l) &&
            ((t = Nl(e, r)),
            t === 2 && ((o = Xl(e)), o !== 0 && ((r = o), (t = vu(e, o)))),
            t === 1))
        )
          throw ((n = gr), un(e, 0), Qt(e, r), De(e, ie()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            sn(e, Oe, Ct);
            break;
          case 3:
            if ((Qt(e, r), (r & 130023424) === r && ((t = pu + 500 - ie()), 10 < t))) {
              if (Rr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (je(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = So(sn.bind(null, e, Oe, Ct), t);
              break;
            }
            sn(e, Oe, Ct);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var u = 31 - nt(r);
              ((o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o));
            }
            if (
              ((r = l),
              (r = ie() - r),
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
                            : 1960 * Lf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = So(sn.bind(null, e, Oe, Ct), r);
              break;
            }
            sn(e, Oe, Ct);
            break;
          case 5:
            sn(e, Oe, Ct);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return (De(e, ie()), e.callbackNode === n ? ha.bind(null, e) : null);
  }
  function vu(e, t) {
    var n = xr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = Nl(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && yu(t)),
      e
    );
  }
  function yu(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Tf(e) {
    for (var t = e; ;) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!rt(o(), l)) return !1;
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
  function Qt(e, t) {
    for (
      t &= ~du, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function va(e) {
    if ((A & 6) !== 0) throw Error(p(327));
    On();
    var t = Rr(e, 0);
    if ((t & 1) === 0) return (De(e, ie()), null);
    var n = Nl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && ((t = r), (n = vu(e, r)));
    }
    if (n === 1) throw ((n = gr), un(e, 0), Qt(e, t), De(e, ie()), n);
    if (n === 6) throw Error(p(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sn(e, Oe, Ct),
      De(e, ie()),
      null
    );
  }
  function gu(e, t) {
    var n = A;
    A |= 1;
    try {
      return e(t);
    } finally {
      ((A = n), A === 0 && ((Mn = ie() + 500), Jr && Ut()));
    }
  }
  function on(e) {
    $t !== null && $t.tag === 0 && (A & 6) === 0 && On();
    var t = A;
    A |= 1;
    var n = Je.transition,
      r = K;
    try {
      if (((Je.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Je.transition = n), (A = t), (A & 6) === 0 && Ut());
    }
  }
  function xu() {
    ((He = Rn.current), J(Rn));
  }
  function un(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), uf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((jo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Gr());
            break;
          case 3:
            (zn(), J(Te), J(Se), Vo());
            break;
          case 5:
            Bo(r);
            break;
          case 4:
            zn();
            break;
          case 13:
            J(re);
            break;
          case 19:
            J(re);
            break;
          case 10:
            Oo(r.type._context);
            break;
          case 22:
          case 23:
            xu();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Kt(e.current, null)),
      (we = He = t),
      (pe = 0),
      (gr = null),
      (du = gl = ln = 0),
      (Oe = xr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            ((o.next = l), (r.next = u));
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function ya(e, t) {
    do {
      var n = fe;
      try {
        if ((Mo(), (il.current = fl), sl)) {
          for (var r = le.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          sl = !1;
        }
        if (
          ((rn = 0),
          (he = de = le = null),
          (dr = !1),
          (pr = 0),
          (fu.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (gr = t), (fe = null));
          break;
        }
        e: {
          var o = e,
            u = n.return,
            i = n,
            s = t;
          if (
            ((t = we),
            (i.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var m = s,
              x = i,
              w = x.tag;
            if ((x.mode & 1) === 0 && (w === 0 || w === 11 || w === 15)) {
              var y = x.alternate;
              y
                ? ((x.updateQueue = y.updateQueue),
                  (x.memoizedState = y.memoizedState),
                  (x.lanes = y.lanes))
                : ((x.updateQueue = null), (x.memoizedState = null));
            }
            var N = Hs(u);
            if (N !== null) {
              ((N.flags &= -257), $s(N, u, i, o, t), N.mode & 1 && Vs(o, m, t), (t = N), (s = m));
              var P = t.updateQueue;
              if (P === null) {
                var j = new Set();
                (j.add(s), (t.updateQueue = j));
              } else P.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Vs(o, m, t), wu());
                break e;
              }
              s = Error(p(426));
            }
          } else if (te && i.mode & 1) {
            var se = Hs(u);
            if (se !== null) {
              ((se.flags & 65536) === 0 && (se.flags |= 256), $s(se, u, i, o, t), To(Ln(s, i)));
              break e;
            }
          }
          ((o = s = Ln(s, i)),
            pe !== 4 && (pe = 2),
            xr === null ? (xr = [o]) : xr.push(o),
            (o = u));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var f = Bs(o, s, t);
                ds(o, f);
                break e;
              case 1:
                i = s;
                var a = o.type,
                  d = o.stateNode;
                if (
                  (o.flags & 128) === 0 &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Ht === null || !Ht.has(d))))
                ) {
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var k = As(o, i, t);
                  ds(o, k);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
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
    var e = yl.current;
    return ((yl.current = fl), e === null ? fl : e);
  }
  function wu() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((ln & 268435455) === 0 && (gl & 268435455) === 0) || Qt(ve, we));
  }
  function Nl(e, t) {
    var n = A;
    A |= 2;
    var r = ga();
    (ve !== e || we !== t) && ((Ct = null), un(e, t));
    do
      try {
        Rf();
        break;
      } catch (l) {
        ya(e, l);
      }
    while (!0);
    if ((Mo(), (A = n), (yl.current = r), fe !== null)) throw Error(p(261));
    return ((ve = null), (we = 0), pe);
  }
  function Rf() {
    for (; fe !== null;) xa(fe);
  }
  function Mf() {
    for (; fe !== null && !rc();) xa(fe);
  }
  function xa(e) {
    var t = Ea(e.alternate, e, He);
    ((e.memoizedProps = e.pendingProps), t === null ? wa(e) : (fe = t), (fu.current = null));
  }
  function wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = _f(n, t, He)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = Cf(n, t)), n !== null)) {
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
  function sn(e, t, n) {
    var r = K,
      l = Je.transition;
    try {
      ((Je.transition = null), (K = 1), Of(e, t, n, r));
    } finally {
      ((Je.transition = l), (K = r));
    }
    return null;
  }
  function Of(e, t, n, r) {
    do On();
    while ($t !== null);
    if ((A & 6) !== 0) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(p(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var o = n.lanes | n.childLanes;
    if (
      (pc(e, o),
      e === ve && ((fe = ve = null), (we = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        wl ||
        ((wl = !0),
        Na(jr, function () {
          return (On(), null);
        })),
      (o = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || o)
    ) {
      ((o = Je.transition), (Je.transition = null));
      var u = K;
      K = 1;
      var i = A;
      ((A |= 4),
        (fu.current = null),
        jf(e, n),
        ca(n, e),
        bc(wo),
        (Dr = !!xo),
        (wo = xo = null),
        (e.current = n),
        zf(n),
        lc(),
        (A = i),
        (K = u),
        (Je.transition = o));
    } else e.current = n;
    if (
      (wl && ((wl = !1), ($t = e), (kl = l)),
      (o = e.pendingLanes),
      o === 0 && (Ht = null),
      ic(n.stateNode),
      De(e, ie()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (xl) throw ((xl = !1), (e = mu), (mu = null), e);
    return (
      (kl & 1) !== 0 && e.tag !== 0 && On(),
      (o = e.pendingLanes),
      (o & 1) !== 0 ? (e === hu ? wr++ : ((wr = 0), (hu = e))) : (wr = 0),
      Ut(),
      null
    );
  }
  function On() {
    if ($t !== null) {
      var e = si(kl),
        t = Je.transition,
        n = K;
      try {
        if (((Je.transition = null), (K = 16 > e ? 16 : e), $t === null)) var r = !1;
        else {
          if (((e = $t), ($t = null), (kl = 0), (A & 6) !== 0)) throw Error(p(331));
          var l = A;
          for (A |= 4, _ = e.current; _ !== null;) {
            var o = _,
              u = o.child;
            if ((_.flags & 16) !== 0) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var m = i[s];
                  for (_ = m; _ !== null;) {
                    var x = _;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yr(8, x, o);
                    }
                    var w = x.child;
                    if (w !== null) ((w.return = x), (_ = w));
                    else
                      for (; _ !== null;) {
                        x = _;
                        var y = x.sibling,
                          N = x.return;
                        if ((oa(x), x === m)) {
                          _ = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = N), (_ = y));
                          break;
                        }
                        _ = N;
                      }
                  }
                }
                var P = o.alternate;
                if (P !== null) {
                  var j = P.child;
                  if (j !== null) {
                    P.child = null;
                    do {
                      var se = j.sibling;
                      ((j.sibling = null), (j = se));
                    } while (j !== null);
                  }
                }
                _ = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && u !== null) ((u.return = o), (_ = u));
            else
              e: for (; _ !== null;) {
                if (((o = _), (o.flags & 2048) !== 0))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  ((f.return = o.return), (_ = f));
                  break e;
                }
                _ = o.return;
              }
          }
          var a = e.current;
          for (_ = a; _ !== null;) {
            u = _;
            var d = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = u), (_ = d));
            else
              e: for (u = a; _ !== null;) {
                if (((i = _), (i.flags & 2048) !== 0))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vl(9, i);
                    }
                  } catch (z) {
                    ue(i, i.return, z);
                  }
                if (i === u) {
                  _ = null;
                  break e;
                }
                var k = i.sibling;
                if (k !== null) {
                  ((k.return = i.return), (_ = k));
                  break e;
                }
                _ = i.return;
              }
          }
          if (((A = l), Ut(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(zr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((K = n), (Je.transition = t));
      }
    }
    return !1;
  }
  function ka(e, t, n) {
    ((t = Ln(n, t)),
      (t = Bs(e, t, 1)),
      (e = At(e, t, 1)),
      (t = je()),
      e !== null && (Wn(e, 1, t), De(e, t)));
  }
  function ue(e, t, n) {
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
            (typeof r.componentDidCatch == "function" && (Ht === null || !Ht.has(r)))
          ) {
            ((e = Ln(n, e)),
              (e = As(t, e, 1)),
              (t = At(t, e, 1)),
              (e = je()),
              t !== null && (Wn(t, 1, e), De(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Df(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = je()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (we & n) === n &&
        (pe === 4 || (pe === 3 && (we & 130023424) === we && 500 > ie() - pu)
          ? un(e, 0)
          : (du |= n)),
      De(e, t));
  }
  function Sa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Tr), (Tr <<= 1), (Tr & 130023424) === 0 && (Tr = 4194304)));
    var n = je();
    ((e = Et(e, t)), e !== null && (Wn(e, t, n), De(e, n)));
  }
  function If(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Sa(e, n));
  }
  function Ff(e, t) {
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
        throw Error(p(314));
    }
    (r !== null && r.delete(t), Sa(e, n));
  }
  var Ea;
  Ea = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Me = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Me = !1), Nf(e, t, n));
        Me = (e.flags & 131072) !== 0;
      }
    else ((Me = !1), te && (t.flags & 1048576) !== 0 && ns(t, br, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (ml(e, t), (e = t.pendingProps));
        var l = Sn(t, Se.current);
        (jn(t, n), (l = Wo(null, t, r, e, l, n)));
        var o = Qo();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((o = !0), Zr(t)) : (o = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Fo(t),
              (l.updater = dl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Jo(t, r, e, n),
              (t = tu(null, t, r, !0, o, n)))
            : ((t.tag = 0), te && o && Po(t), Pe(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ml(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Bf(r)),
            (e = ot(r, e)),
            l)
          ) {
            case 0:
              t = eu(null, t, r, e, n);
              break e;
            case 1:
              t = Gs(null, t, r, e, n);
              break e;
            case 11:
              t = Ws(null, t, r, e, n);
              break e;
            case 14:
              t = Qs(null, t, r, ot(r.type, e), n);
              break e;
          }
          throw Error(p(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          eu(e, t, r, l, n)
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
          if ((Zs(t), e === null)) throw Error(p(387));
          ((r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            fs(e, t),
            ol(t, r, null, n));
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              ((l = Ln(Error(p(423)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Ln(Error(p(424)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else
              for (
                Ve = Dt(t.stateNode.containerInfo.firstChild),
                  Ae = t,
                  te = !0,
                  lt = null,
                  n = as(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_n(), r === l)) {
              t = _t(e, t, n);
              break e;
            }
            Pe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          ms(t),
          e === null && Lo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          ko(r, l) ? (u = null) : o !== null && ko(r, o) && (t.flags |= 32),
          Xs(e, t),
          Pe(e, t, u, n),
          t.child
        );
      case 6:
        return (e === null && Lo(t), null);
      case 13:
        return qs(e, t, n);
      case 4:
        return (
          Uo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Cn(t, null, r, n)) : Pe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          Ws(e, t, r, l, n)
        );
      case 7:
        return (Pe(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Pe(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            G(nl, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (rt(o.value, u)) {
              if (o.children === l.children && !Te.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null;) {
                var i = o.dependencies;
                if (i !== null) {
                  u = o.child;
                  for (var s = i.firstContext; s !== null;) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        ((s = Nt(-1, n & -n)), (s.tag = 2));
                        var m = o.updateQueue;
                        if (m !== null) {
                          m = m.shared;
                          var x = m.pending;
                          (x === null ? (s.next = s) : ((s.next = x.next), (x.next = s)),
                            (m.pending = s));
                        }
                      }
                      ((o.lanes |= n),
                        (s = o.alternate),
                        s !== null && (s.lanes |= n),
                        Do(o.return, n, t),
                        (i.lanes |= n));
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(p(341));
                  ((u.lanes |= n),
                    (i = u.alternate),
                    i !== null && (i.lanes |= n),
                    Do(u, n, t),
                    (u = o.sibling));
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null;) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      ((o.return = u.return), (u = o));
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          (Pe(e, t, l.children, n), (t = t.child));
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
          Pe(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ot(r, t.pendingProps)), (l = ot(r.type, l)), Qs(e, t, r, l, n));
      case 15:
        return Ks(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ot(r, l)),
          ml(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Zr(t)) : (e = !1),
          jn(t, n),
          Fs(t, r, l),
          Jo(t, r, l, n),
          tu(null, t, r, !0, e, n)
        );
      case 19:
        return ea(e, t, n);
      case 22:
        return Ys(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function Na(e, t) {
    return ri(e, t);
  }
  function Uf(e, t, n, r) {
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
  function qe(e, t, n, r) {
    return new Uf(e, t, n, r);
  }
  function ku(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Bf(e) {
    if (typeof e == "function") return ku(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ct)) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = qe(e.tag, t, e.key, e.mode)),
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
  function _l(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) ku(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case ze:
          return an(n.children, l, o, t);
        case Ke:
          ((u = 8), (l |= 8));
          break;
        case jt:
          return ((e = qe(12, n, t, l | 2)), (e.elementType = jt), (e.lanes = o), e);
        case Fe:
          return ((e = qe(13, n, t, l)), (e.elementType = Fe), (e.lanes = o), e);
        case tt:
          return ((e = qe(19, n, t, l)), (e.elementType = tt), (e.lanes = o), e);
        case oe:
          return Cl(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                u = 10;
                break e;
              case Gt:
                u = 9;
                break e;
              case ct:
                u = 11;
                break e;
              case ft:
                u = 14;
                break e;
              case Le:
                ((u = 16), (r = null));
                break e;
            }
          throw Error(p(130, e == null ? e : typeof e, ""));
      }
    return ((t = qe(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
  }
  function an(e, t, n, r) {
    return ((e = qe(7, e, r, t)), (e.lanes = n), e);
  }
  function Cl(e, t, n, r) {
    return (
      (e = qe(22, e, r, t)),
      (e.elementType = oe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Su(e, t, n) {
    return ((e = qe(6, e, null, t)), (e.lanes = n), e);
  }
  function Eu(e, t, n) {
    return (
      (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Af(e, t, n, r, l) {
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
  function Nu(e, t, n, r, l, o, u, i, s) {
    return (
      (e = new Af(e, t, n, i, s)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = qe(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fo(o),
      e
    );
  }
  function Vf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ce,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function _a(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Zt(e) !== e || e.tag !== 1) throw Error(p(170));
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
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Re(n)) return bi(e, n, t);
    }
    return t;
  }
  function Ca(e, t, n, r, l, o, u, i, s) {
    return (
      (e = Nu(n, r, !0, e, l, o, u, i, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = je()),
      (l = Wt(n)),
      (o = Nt(r, l)),
      (o.callback = t ?? null),
      At(n, o, l),
      (e.current.lanes = l),
      Wn(e, l, r),
      De(e, r),
      e
    );
  }
  function Pl(e, t, n, r) {
    var l = t.current,
      o = je(),
      u = Wt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, u)),
      e !== null && (st(e, l, u, o), ll(e, l, u)),
      u
    );
  }
  function jl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Pa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _u(e, t) {
    (Pa(e, t), (e = e.alternate) && Pa(e, t));
  }
  function Hf() {
    return null;
  }
  var ja =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Cu(e) {
    this._internalRoot = e;
  }
  ((zl.prototype.render = Cu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(p(409));
      Pl(e, t, null, null);
    }),
    (zl.prototype.unmount = Cu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (on(function () {
            Pl(null, e, null, null);
          }),
            (t[xt] = null));
        }
      }));
  function zl(e) {
    this._internalRoot = e;
  }
  zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = fi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && mi(e));
    }
  };
  function Pu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Ll(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function za() {}
  function $f(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var m = jl(u);
          o.call(m);
        };
      }
      var u = Ca(t, r, e, 0, null, !1, !1, "", za);
      return (
        (e._reactRootContainer = u),
        (e[xt] = u.current),
        lr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        u
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var m = jl(s);
        i.call(m);
      };
    }
    var s = Nu(e, 0, !1, null, null, !1, !1, "", za);
    return (
      (e._reactRootContainer = s),
      (e[xt] = s.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      on(function () {
        Pl(t, s, n, r);
      }),
      s
    );
  }
  function Tl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function () {
          var s = jl(u);
          i.call(s);
        };
      }
      Pl(t, u, e, l);
    } else u = $f(n, t, e, l, r);
    return jl(u);
  }
  ((ai = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $n(t.pendingLanes);
          n !== 0 && (Zl(t, n | 1), De(t, ie()), (A & 6) === 0 && ((Mn = ie() + 500), Ut()));
        }
        break;
      case 13:
        (on(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = je();
            st(r, e, 1, l);
          }
        }),
          _u(e, 1));
    }
  }),
    (Jl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = je();
          st(t, e, 134217728, n);
        }
        _u(e, 134217728);
      }
    }),
    (ci = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = je();
          st(n, e, t, r);
        }
        _u(e, t);
      }
    }),
    (fi = function () {
      return K;
    }),
    (di = function (e, t) {
      var n = K;
      try {
        return ((K = e), t());
      } finally {
        K = n;
      }
    }),
    ($l = function (e, t, n) {
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
                var l = Xr(r);
                if (!l) throw Error(p(90));
                (Iu(r), Dl(r, l));
              }
            }
          }
          break;
        case "textarea":
          Vu(e, n);
          break;
        case "select":
          ((t = n.value), t != null && cn(e, !!n.multiple, t, !1));
      }
    }),
    (Zu = gu),
    (Ju = on));
  var Wf = { usingClientEntryPoint: !1, Events: [ir, wn, Xr, Xu, Gu, gu] },
    kr = {
      findFiberByHostInstance: Jt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Qf = {
      bundleType: kr.bundleType,
      version: kr.version,
      rendererPackageName: kr.rendererPackageName,
      rendererConfig: kr.rendererConfig,
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
        return ((e = ti(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: kr.findFiberByHostInstance || Hf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Rl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Rl.isDisabled && Rl.supportsFiber)
      try {
        ((zr = Rl.inject(Qf)), (dt = Rl));
      } catch {}
  }
  return (
    (Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wf),
    (Ie.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pu(t)) throw Error(p(200));
      return Vf(e, t, null, n);
    }),
    (Ie.createRoot = function (e, t) {
      if (!Pu(e)) throw Error(p(299));
      var n = !1,
        r = "",
        l = ja;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Nu(e, 1, !1, null, null, n, !1, r, l)),
        (e[xt] = t.current),
        lr(e.nodeType === 8 ? e.parentNode : e),
        new Cu(t)
      );
    }),
    (Ie.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(p(188))
          : ((e = Object.keys(e).join(",")), Error(p(268, e)));
      return ((e = ti(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ie.flushSync = function (e) {
      return on(e);
    }),
    (Ie.hydrate = function (e, t, n) {
      if (!Ll(t)) throw Error(p(200));
      return Tl(null, e, t, !0, n);
    }),
    (Ie.hydrateRoot = function (e, t, n) {
      if (!Pu(e)) throw Error(p(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = ja;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = Ca(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[xt] = t.current),
        lr(e),
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
    (Ie.render = function (e, t, n) {
      if (!Ll(t)) throw Error(p(200));
      return Tl(null, e, t, !1, n);
    }),
    (Ie.unmountComponentAtNode = function (e) {
      if (!Ll(e)) throw Error(p(40));
      return e._reactRootContainer
        ? (on(function () {
            Tl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[xt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ie.unstable_batchedUpdates = gu),
    (Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ll(n)) throw Error(p(200));
      if (e == null || e._reactInternals === void 0) throw Error(p(38));
      return Tl(e, t, n, !1, r);
    }),
    (Ie.version = "18.3.1-next-f1338f8080-20240426"),
    Ie
  );
}
var Fa;
function bf() {
  if (Fa) return Lu.exports;
  Fa = 1;
  function v() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (S) {
        console.error(S);
      }
  }
  return (v(), (Lu.exports = qf()), Lu.exports);
}
var Ua;
function ed() {
  if (Ua) return Ml;
  Ua = 1;
  var v = bf();
  return ((Ml.createRoot = v.createRoot), (Ml.hydrateRoot = v.hydrateRoot), Ml);
}
var td = ed();
function Va(v) {
  return `#${v}`;
}
function Ha(v) {
  const S = v.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Ou(v) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function Du(v, S = "smooth") {
  if (typeof document > "u") return !1;
  const p = document.getElementById(v);
  return p ? (p.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function nd(v, S = "smooth") {
  if (typeof window > "u") return;
  const p = Va(v);
  if (Du(v, S)) {
    window.history.replaceState(null, "", p);
    return;
  }
  window.location.hash = p;
}
function rd(v) {
  typeof window > "u" || (window.location.hash = Ha(v));
}
function $a() {
  const v = Ou();
  return (v == null ? void 0 : v.kind) === "route" ? v.path : "";
}
function ld(v) {
  return v.kind === "route" ? Ha(v.path) : Va(v.id);
}
function od(v, S) {
  if ((v.preventDefault(), S.kind === "route")) {
    rd(S.path);
    return;
  }
  nd(S.id);
}
function Wa() {
  if (typeof window > "u") return;
  const v = Ou();
  (v == null ? void 0 : v.kind) === "section" && requestAnimationFrame(() => Du(v.id, "auto"));
}
function Qa(v, S) {
  if (typeof window > "u") return () => {};
  const p = () => {
    const I = Ou();
    if (!I) {
      v("");
      return;
    }
    if (I.kind === "route") {
      v(I.path);
      return;
    }
    (Du(I.id, "smooth"), v(""));
  };
  return (
    p(),
    window.addEventListener("hashchange", p),
    () => window.removeEventListener("hashchange", p)
  );
}
function ud(v = "") {
  const [S, p] = $e.useState(() => (typeof window < "u" ? $a() : v));
  return ($e.useEffect(() => Qa(p), []), S || v);
}
function id({ routes: v, defaultRoute: S = "", className: p }) {
  const I = ud(S);
  $e.useEffect(() => {
    Wa();
  }, []);
  const L = I in v ? I : S,
    B = v[L] ?? v[S];
  return h.jsx("div", { className: p, children: B });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sd = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ka = (...v) =>
    v
      .filter((S, p, I) => !!S && S.trim() !== "" && I.indexOf(S) === p)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ad = {
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
 */ const cd = $e.forwardRef(
  (
    {
      color: v = "currentColor",
      size: S = 24,
      strokeWidth: p = 2,
      absoluteStrokeWidth: I,
      className: L = "",
      children: B,
      iconNode: ae,
      ...ce
    },
    W,
  ) =>
    $e.createElement(
      "svg",
      {
        ref: W,
        ...ad,
        width: S,
        height: S,
        stroke: v,
        strokeWidth: I ? (Number(p) * 24) / Number(S) : p,
        className: Ka("lucide", L),
        ...ce,
      },
      [...ae.map(([ge, me]) => $e.createElement(ge, me)), ...(Array.isArray(B) ? B : [B])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xt = (v, S) => {
  const p = $e.forwardRef(({ className: I, ...L }, B) =>
    $e.createElement(cd, { ref: B, iconNode: S, className: Ka(`lucide-${sd(v)}`, I), ...L }),
  );
  return ((p.displayName = `${v}`), p);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fd = Xt("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ya = Xt("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = Xt("Earth", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
      key: "1tzkfa",
    },
  ],
  ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "14pb5j" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pd = Xt("Layers", [
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
 */ const md = Xt("Map", [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5",
    },
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = Xt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vd = Xt("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = Xt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function Pt({ target: v, children: S, className: p, onClick: I, ...L }) {
  return h.jsx("a", {
    href: ld(v),
    className: p,
    onClick: (B) => {
      (od(B, v), I == null || I(B));
    },
    ...L,
    children: S,
  });
}
const gd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_092310_5c71bab5-63cd-4a95-9390-cc6a1189d553.mp4",
  Ba = [
    { label: "Product", path: "product", dropdown: !0 },
    { label: "Solutions", path: "solutions", dropdown: !0 },
    { label: "Resources", path: "resources", dropdown: !0 },
    { label: "Examples", path: "examples", dropdown: !1 },
    { label: "Pricing", path: "pricing", dropdown: !1 },
  ],
  Aa = ["Mapbox", "Planet", "Esri", "Carto", "Felt", "Foursquare", "Orbital", "Descartes"];
function xd() {
  const [v, S] = $e.useState(!1),
    [p, I] = $e.useState("");
  return (
    $e.useEffect(
      () => (
        I($a()),
        Qa((L) => {
          (I(L), S(!1));
        })
      ),
      [],
    ),
    h.jsxs("header", {
      className: "sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-sm",
      children: [
        h.jsxs("div", {
          className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8",
          children: [
            h.jsxs(Pt, {
              target: { kind: "route", path: "" },
              className: "flex shrink-0 items-center gap-2.5",
              children: [
                h.jsx("span", {
                  className:
                    "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-400 text-base",
                  children: "🌍",
                }),
                h.jsx("span", {
                  className: "text-lg font-bold tracking-tight text-foreground",
                  "data-editable": !0,
                  children: "Terra",
                }),
              ],
            }),
            h.jsx("nav", {
              className: "hidden items-center gap-6 lg:flex",
              "aria-label": "Primary",
              children: Ba.map((L) =>
                h.jsxs(
                  Pt,
                  {
                    target: { kind: "route", path: L.path },
                    className: `inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground ${p === L.path ? "font-medium text-foreground" : ""}`,
                    "data-editable": !0,
                    children: [
                      L.label,
                      L.dropdown ? h.jsx(Ya, { className: "ml-0.5 h-3.5 w-3.5 opacity-60" }) : null,
                    ],
                  },
                  L.path,
                ),
              ),
            }),
            h.jsxs("div", {
              className: "hidden items-center gap-3 lg:flex",
              children: [
                h.jsx(Pt, {
                  target: { kind: "route", path: "contact" },
                  className:
                    "rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:text-foreground/80",
                  "data-editable": !0,
                  children: "Login",
                }),
                h.jsx(Pt, {
                  target: { kind: "route", path: "contact" },
                  className:
                    "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90",
                  "data-editable": !0,
                  children: "Sign Up",
                }),
              ],
            }),
            h.jsx("button", {
              type: "button",
              className:
                "flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden",
              onClick: () => S((L) => !L),
              "aria-label": v ? "Close menu" : "Open menu",
              "aria-expanded": v,
              children: v
                ? h.jsx(yd, { className: "h-5 w-5" })
                : h.jsx(hd, { className: "h-5 w-5" }),
            }),
          ],
        }),
        v &&
          h.jsxs("nav", {
            className: "border-t border-border px-4 py-4 lg:hidden",
            "aria-label": "Mobile",
            children: [
              h.jsx("ul", {
                className: "flex flex-col gap-1",
                children: Ba.map((L) =>
                  h.jsx(
                    "li",
                    {
                      children: h.jsxs(Pt, {
                        target: { kind: "route", path: L.path },
                        className:
                          "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                        "data-editable": !0,
                        children: [L.label, L.dropdown ? h.jsx(wd, {}) : null],
                      }),
                    },
                    L.path,
                  ),
                ),
              }),
              h.jsxs("div", {
                className: "mt-4 flex flex-col gap-2 border-t border-border pt-4",
                children: [
                  h.jsx(Pt, {
                    target: { kind: "route", path: "contact" },
                    className:
                      "rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium",
                    "data-editable": !0,
                    children: "Login",
                  }),
                  h.jsx(Pt, {
                    target: { kind: "route", path: "contact" },
                    className:
                      "rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground",
                    "data-editable": !0,
                    children: "Sign Up",
                  }),
                ],
              }),
            ],
          }),
      ],
    })
  );
}
function wd() {
  return h.jsx(Ya, { className: "ml-1 h-3.5 w-3.5 opacity-60" });
}
function In({ children: v }) {
  return h.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      h.jsx(xd, {}),
      h.jsx("main", { children: v }),
      h.jsx("footer", {
        className:
          "border-t border-border px-4 py-10 text-center text-sm text-muted-foreground sm:px-8",
        children: h.jsxs("p", {
          children: ["© ", new Date().getFullYear(), " Terra · Geo map builder"],
        }),
      }),
    ],
  });
}
function Xa({ embedded: v }) {
  const S = h.jsx("section", {
    id: "contact",
    className: "scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 md:py-28",
    children: h.jsxs("div", {
      className: "mx-auto max-w-xl",
      children: [
        h.jsx("p", {
          className: "text-xs font-medium uppercase tracking-[0.28em] text-primary/80",
          children: "Contact",
        }),
        h.jsx("h2", {
          className: "mt-3 text-3xl font-medium tracking-tight text-foreground",
          children: "Talk with Terra",
        }),
        h.jsx("p", {
          className: "mt-4 text-muted-foreground",
          children: "hello@terra.maps · Solutions team responds within one business day.",
        }),
        h.jsxs("form", {
          className: "mt-8 space-y-4",
          onSubmit: (p) => p.preventDefault(),
          children: [
            h.jsx("input", {
              type: "email",
              placeholder: "Work email",
              className:
                "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50",
            }),
            h.jsx("textarea", {
              rows: 4,
              placeholder: "Tell us about your geospatial stack…",
              className:
                "w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50",
            }),
            h.jsx("button", {
              type: "submit",
              className:
                "rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90",
              children: "Request demo",
            }),
          ],
        }),
      ],
    }),
  });
  return v ? S : h.jsx(In, { children: S });
}
const kd = {
  product: {
    id: "product",
    icon: md,
    eyebrow: "Product",
    title: "Design maps with a visual studio",
    body: "Layer vectors, rasters, and live feeds on an infinite canvas. Version every change, branch scenarios, and publish share links without exporting static tiles.",
    bullets: ["Drag-and-drop layer stack", "Real-time collaboration", "One-click publish"],
  },
  solutions: {
    id: "solutions",
    icon: pd,
    eyebrow: "Solutions",
    title: "Spatial intelligence for every team",
    body: "Operations, logistics, and research teams run geospatial workflows on the same platform—from site selection to fleet routing—with governance built in.",
    bullets: ["Fleet & route optimization", "Site intelligence", "Risk overlays"],
  },
  resources: {
    id: "resources",
    icon: fd,
    eyebrow: "Resources",
    title: "Guides, SDKs, and office hours",
    body: "API references, Terraform modules, and weekly map-design reviews. Templates for census blocks, satellite basemaps, and custom tile pipelines.",
    bullets: ["REST & GraphQL APIs", "Terraform modules", "Weekly office hours"],
  },
  examples: {
    id: "examples",
    icon: vd,
    eyebrow: "Examples",
    title: "Maps teams ship with Terra",
    body: "Explore customer galleries: supply-chain control towers, climate risk dashboards, and civic planning portals—all built without leaving the browser.",
    bullets: ["Supply chain control tower", "Climate risk dashboard", "Civic planning portal"],
  },
};
function Dn({ sectionKey: v }) {
  const S = kd[v],
    p = S.icon;
  return h.jsx("section", {
    id: S.id,
    className: "scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 md:py-28",
    children: h.jsxs("div", {
      className: "mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16",
      children: [
        h.jsxs("div", {
          children: [
            h.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.28em] text-primary/80",
              children: S.eyebrow,
            }),
            h.jsx("h2", {
              className: "mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl",
              children: S.title,
            }),
            h.jsx("p", {
              className: "mt-4 text-base leading-relaxed text-muted-foreground md:text-lg",
              children: S.body,
            }),
            h.jsx("ul", {
              className: "mt-6 space-y-2",
              children: S.bullets.map((I) =>
                h.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2 text-sm text-foreground/80",
                    children: [
                      h.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
                      I,
                    ],
                  },
                  I,
                ),
              ),
            }),
          ],
        }),
        h.jsxs("div", {
          className:
            "flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-border bg-muted/40 p-8",
          children: [
            h.jsx(p, { className: "h-12 w-12 text-primary/70", strokeWidth: 1.25 }),
            h.jsxs("p", {
              className: "mt-4 text-center text-sm text-muted-foreground",
              children: [S.eyebrow, " preview"],
            }),
          ],
        }),
      ],
    }),
  });
}
function Sd() {
  return h.jsx("section", {
    className: "border-t border-border bg-primary/5 px-4 py-16 sm:px-8",
    children: h.jsxs("div", {
      className:
        "mx-auto flex max-w-7xl flex-col items-center gap-4 text-center md:flex-row md:text-left",
      children: [
        h.jsx(dd, { className: "h-10 w-10 shrink-0 text-primary", strokeWidth: 1.25 }),
        h.jsxs("div", {
          children: [
            h.jsx("h3", {
              className: "text-xl font-medium text-foreground",
              children: "Built for planet-scale data",
            }),
            h.jsx("p", {
              className: "mt-1 max-w-2xl text-sm text-muted-foreground",
              children:
                "Ingest GeoJSON, vector tiles, and live sensor streams. Terra normalizes CRS, caches tiles, and serves sub-50ms panes at global zoom.",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ed() {
  return h.jsx(In, { children: h.jsx(Dn, { sectionKey: "examples" }) });
}
function Nd() {
  return h.jsxs("svg", {
    className:
      "pointer-events-none absolute -inset-3 md:-inset-4 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] -rotate-[0.5deg]",
    viewBox: "0 0 200 95",
    preserveAspectRatio: "none",
    "aria-hidden": !0,
    children: [
      h.jsx("path", {
        d: "M5 5 L195 5 L195 88 L5 72 Z",
        fill: "none",
        stroke: "#B0B0B0",
        strokeWidth: "1.2",
        strokeDasharray: "6 4",
      }),
      h.jsx("circle", { cx: "5", cy: "5", r: "3.5", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "195", cy: "5", r: "3.5", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "5", cy: "72", r: "3.5", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "195", cy: "88", r: "3.5", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "100", cy: "5", r: "3", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "100", cy: "80", r: "3", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "5", cy: "38.5", r: "3", fill: "#B0B0B0" }),
      h.jsx("circle", { cx: "195", cy: "46.5", r: "3", fill: "#B0B0B0" }),
    ],
  });
}
function _d() {
  return h.jsx("section", {
    id: "home",
    className: "flex min-h-screen flex-col bg-background",
    children: h.jsxs("div", {
      className: "flex flex-1 flex-col items-center justify-center px-4 pt-8",
      children: [
        h.jsxs("div", {
          className:
            "animate-fade-in-up mt-10 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/50 px-3 py-1.5",
          style: { animationDelay: "80ms" },
          children: [
            h.jsx("span", { "aria-hidden": !0, children: "🏆" }),
            h.jsx("span", {
              className: "text-[10px] font-medium uppercase tracking-wider text-red-400",
              "data-editable": !0,
              children: "Product Hunt",
            }),
            h.jsx("span", {
              className: "text-sm font-semibold text-red-500",
              "data-editable": !0,
              children: "#1 Product of the Day",
            }),
          ],
        }),
        h.jsxs("h1", {
          className:
            "animate-fade-in-up mt-8 text-center text-5xl font-medium text-primary md:text-7xl",
          style: { letterSpacing: "-0.2em", animationDelay: "160ms" },
          children: [
            h.jsx("span", {
              className: "block",
              "data-editable": !0,
              children: "The ultimate geo",
            }),
            h.jsxs("span", {
              className: "mt-1 block",
              children: [
                h.jsx("span", { "data-editable": !0, children: "map " }),
                h.jsxs("span", {
                  className: "relative inline-block",
                  children: [
                    h.jsx("span", {
                      className: "terra-builder-gradient relative z-10",
                      "data-editable": !0,
                      children: "builder",
                    }),
                    h.jsx(Nd, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
        h.jsxs("p", {
          className:
            "animate-fade-in-up mt-8 max-w-lg text-center text-base text-muted-foreground md:text-lg",
          style: { animationDelay: "240ms" },
          "data-editable": !0,
          children: [
            "Terra is how teams build maps and",
            h.jsx("br", {}),
            "run spatial intelligence together.",
            h.jsx("br", {}),
            "Design, collaborate, share — all in one place.",
          ],
        }),
        h.jsx(Pt, {
          target: { kind: "route", path: "contact" },
          className:
            "animate-fade-in-up mt-8 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90",
          style: { animationDelay: "320ms" },
          "data-editable": !0,
          children: "Start building free",
        }),
        h.jsx("div", {
          className: "animate-fade-in-up mt-12 w-full max-w-5xl overflow-hidden rounded-xl",
          style: { animationDelay: "400ms" },
          children: h.jsx("video", {
            src: gd,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: "aspect-video w-full object-cover",
          }),
        }),
      ],
    }),
  });
}
function Cd() {
  const v = [...Aa, ...Aa];
  return h.jsxs("section", {
    className: "overflow-hidden border-t border-border py-12",
    children: [
      h.jsx("p", {
        className:
          "mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground",
        children: "Trusted by spatial teams",
      }),
      h.jsx("div", {
        className: "relative",
        children: h.jsx("div", {
          className: "marquee-track gap-12 px-6",
          children: v.map((S, p) =>
            h.jsx(
              "span",
              {
                className:
                  "whitespace-nowrap text-lg font-semibold tracking-tight text-foreground/35",
                children: S,
              },
              `${S}-${p}`,
            ),
          ),
        }),
      }),
    ],
  });
}
const Pd = [
  { name: "Starter", price: "$0", detail: "Personal maps, 3 collaborators, public share links" },
  { name: "Team", price: "$29", detail: "Unlimited layers, SSO, version history, API access" },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "Dedicated tiles, VPC deploy, solutions architects",
  },
];
function Ga({ embedded: v }) {
  const S = h.jsx("section", {
    id: "pricing",
    className: "scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 md:py-28",
    children: h.jsxs("div", {
      className: "mx-auto max-w-7xl",
      children: [
        h.jsx("p", {
          className: "text-xs font-medium uppercase tracking-[0.28em] text-primary/80",
          children: "Pricing",
        }),
        h.jsx("h2", {
          className: "mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl",
          children: "Plans for every map team",
        }),
        h.jsx("div", {
          className: "mt-12 grid gap-6 md:grid-cols-3",
          children: Pd.map((p) =>
            h.jsxs(
              "article",
              {
                className: "rounded-2xl border border-border bg-background p-8 shadow-sm",
                children: [
                  h.jsx("h3", {
                    className: "text-lg font-semibold text-foreground",
                    children: p.name,
                  }),
                  h.jsx("p", {
                    className: "mt-2 text-3xl font-medium text-primary",
                    children: p.price,
                  }),
                  h.jsx("p", {
                    className: "mt-4 text-sm text-muted-foreground",
                    children: p.detail,
                  }),
                ],
              },
              p.name,
            ),
          ),
        }),
        h.jsx(Pt, {
          target: { kind: "route", path: "contact" },
          className:
            "mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90",
          "data-editable": !0,
          children: "Start building free",
        }),
      ],
    }),
  });
  return v ? S : h.jsx(h.Fragment, { children: S });
}
function jd() {
  return h.jsxs(In, {
    children: [
      h.jsx(_d, {}),
      h.jsx(Cd, {}),
      h.jsx(Sd, {}),
      h.jsx(Dn, { sectionKey: "product" }),
      h.jsx(Dn, { sectionKey: "solutions" }),
      h.jsx("div", { className: "scroll-mt-8", children: h.jsx(Ga, { embedded: !0 }) }),
      h.jsx("div", { className: "scroll-mt-8", children: h.jsx(Xa, { embedded: !0 }) }),
    ],
  });
}
function zd() {
  return h.jsx(In, { children: h.jsx(Dn, { sectionKey: "product" }) });
}
function Ld() {
  return h.jsx(In, { children: h.jsx(Dn, { sectionKey: "resources" }) });
}
function Td() {
  return h.jsx(In, { children: h.jsx(Dn, { sectionKey: "solutions" }) });
}
function Rd() {
  return (
    $e.useEffect(() => {
      Wa();
    }, []),
    h.jsx(id, {
      routes: {
        "": h.jsx(jd, {}),
        product: h.jsx(zd, {}),
        solutions: h.jsx(Td, {}),
        resources: h.jsx(Ld, {}),
        examples: h.jsx(Ed, {}),
        pricing: h.jsx(Ga, {}),
        contact: h.jsx(Xa, {}),
      },
    })
  );
}
td.createRoot(document.getElementById("root")).render(
  h.jsx($e.StrictMode, { children: h.jsx(Rd, {}) }),
);
