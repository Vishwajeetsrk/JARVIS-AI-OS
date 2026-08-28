(function () {
  const S = document.createElement("link").relList;
  if (S && S.supports && S.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) M(L);
  new MutationObserver((L) => {
    for (const U of L)
      if (U.type === "childList")
        for (const ae of U.addedNodes) ae.tagName === "LINK" && ae.rel === "modulepreload" && M(ae);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(L) {
    const U = {};
    return (
      L.integrity && (U.integrity = L.integrity),
      L.referrerPolicy && (U.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : L.crossOrigin === "anonymous"
          ? (U.credentials = "omit")
          : (U.credentials = "same-origin"),
      U
    );
  }
  function M(L) {
    if (L.ep) return;
    L.ep = !0;
    const U = m(L);
    fetch(L.href, U);
  }
})();
var Po = { exports: {} },
  kr = {},
  zo = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function qf() {
  if (Ta) return F;
  Ta = 1;
  var v = Symbol.for("react.element"),
    S = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    U = Symbol.for("react.provider"),
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
    _e = { current: null },
    ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ke(c, g, D) {
    var A,
      V = {},
      B = null,
      X = null;
    if (g != null)
      for (A in (g.ref !== void 0 && (X = g.ref), g.key !== void 0 && (B = "" + g.key), g))
        et.call(g, A) && !ze.hasOwnProperty(A) && (V[A] = g[A]);
    var Q = arguments.length - 2;
    if (Q === 1) V.children = D;
    else if (1 < Q) {
      for (var ee = Array(Q), Ue = 0; Ue < Q; Ue++) ee[Ue] = arguments[Ue + 2];
      V.children = ee;
    }
    if (c && c.defaultProps) for (A in ((Q = c.defaultProps), Q)) V[A] === void 0 && (V[A] = Q[A]);
    return { $$typeof: v, type: c, key: B, ref: X, props: V, _owner: _e.current };
  }
  function Pt(c, g) {
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
  function Ae(c, g) {
    return typeof c == "object" && c !== null && c.key != null ? Gt("" + c.key) : g.toString(36);
  }
  function tt(c, g, D, A, V) {
    var B = typeof c;
    (B === "undefined" || B === "boolean") && (c = null);
    var X = !1;
    if (c === null) X = !0;
    else
      switch (B) {
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
        (c = A === "" ? "." + Ae(X, 0) : A),
        ke(V)
          ? ((D = ""),
            c != null && (D = c.replace(ct, "$&/") + "/"),
            tt(V, g, D, "", function (Ue) {
              return Ue;
            }))
          : V != null &&
            (gt(V) &&
              (V = Pt(
                V,
                D +
                  (!V.key || (X && X.key === V.key) ? "" : ("" + V.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            g.push(V)),
        1
      );
    if (((X = 0), (A = A === "" ? "." : A + ":"), ke(c)))
      for (var Q = 0; Q < c.length; Q++) {
        B = c[Q];
        var ee = A + Ae(B, Q);
        X += tt(B, g, D, ee, V);
      }
    else if (((ee = J(c)), typeof ee == "function"))
      for (c = ee.call(c), Q = 0; !(B = c.next()).done;)
        ((B = B.value), (ee = A + Ae(B, Q++)), (X += tt(B, g, D, ee, V)));
    else if (B === "object")
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
    var A = [],
      V = 0;
    return (
      tt(c, A, "", "", function (B) {
        return g.call(D, B, V++);
      }),
      A
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
  var ie = { current: null },
    E = { transition: null },
    O = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: E, ReactCurrentOwner: _e };
  function _() {
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
    (F.Fragment = m),
    (F.Profiler = L),
    (F.PureComponent = at),
    (F.StrictMode = M),
    (F.Suspense = W),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
    (F.act = _),
    (F.cloneElement = function (c, g, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = Qe({}, c.props),
        V = c.key,
        B = c.ref,
        X = c._owner;
      if (g != null) {
        if (
          (g.ref !== void 0 && ((B = g.ref), (X = _e.current)),
          g.key !== void 0 && (V = "" + g.key),
          c.type && c.type.defaultProps)
        )
          var Q = c.type.defaultProps;
        for (ee in g)
          et.call(g, ee) &&
            !ze.hasOwnProperty(ee) &&
            (A[ee] = g[ee] === void 0 && Q !== void 0 ? Q[ee] : g[ee]);
      }
      var ee = arguments.length - 2;
      if (ee === 1) A.children = D;
      else if (1 < ee) {
        Q = Array(ee);
        for (var Ue = 0; Ue < ee; Ue++) Q[Ue] = arguments[Ue + 2];
        A.children = Q;
      }
      return { $$typeof: v, type: c.type, key: V, ref: B, props: A, _owner: X };
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
        (c.Provider = { $$typeof: U, _context: c }),
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
    (F.useImperativeHandle = function (c, g, D) {
      return ie.current.useImperativeHandle(c, g, D);
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
    (F.useReducer = function (c, g, D) {
      return ie.current.useReducer(c, g, D);
    }),
    (F.useRef = function (c) {
      return ie.current.useRef(c);
    }),
    (F.useState = function (c) {
      return ie.current.useState(c);
    }),
    (F.useSyncExternalStore = function (c, g, D) {
      return ie.current.useSyncExternalStore(c, g, D);
    }),
    (F.useTransition = function () {
      return ie.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var Ra;
function Oo() {
  return (Ra || ((Ra = 1), (zo.exports = qf())), zo.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Zf() {
  if (Ma) return kr;
  Ma = 1;
  var v = Oo(),
    S = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    M = Object.prototype.hasOwnProperty,
    L = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(ce, W, ge) {
    var me,
      ne = {},
      J = null,
      We = null;
    (ge !== void 0 && (J = "" + ge),
      W.key !== void 0 && (J = "" + W.key),
      W.ref !== void 0 && (We = W.ref));
    for (me in W) M.call(W, me) && !U.hasOwnProperty(me) && (ne[me] = W[me]);
    if (ce && ce.defaultProps)
      for (me in ((W = ce.defaultProps), W)) ne[me] === void 0 && (ne[me] = W[me]);
    return { $$typeof: S, type: ce, key: J, ref: We, props: ne, _owner: L.current };
  }
  return ((kr.Fragment = m), (kr.jsx = ae), (kr.jsxs = ae), kr);
}
var Oa;
function Jf() {
  return (Oa || ((Oa = 1), (Po.exports = Zf())), Po.exports);
}
var p = Jf(),
  Fe = Oo(),
  Rl = {},
  Lo = { exports: {} },
  De = {},
  To = { exports: {} },
  Ro = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ia;
function bf() {
  return (
    Ia ||
      ((Ia = 1),
      (function (v) {
        function S(E, O) {
          var _ = E.length;
          E.push(O);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              g = E[c];
            if (0 < L(g, O)) ((E[c] = O), (E[_] = g), (_ = c));
            else break e;
          }
        }
        function m(E) {
          return E.length === 0 ? null : E[0];
        }
        function M(E) {
          if (E.length === 0) return null;
          var O = E[0],
            _ = E.pop();
          if (_ !== O) {
            E[0] = _;
            e: for (var c = 0, g = E.length, D = g >>> 1; c < D;) {
              var A = 2 * (c + 1) - 1,
                V = E[A],
                B = A + 1,
                X = E[B];
              if (0 > L(V, _))
                B < g && 0 > L(X, V)
                  ? ((E[c] = X), (E[B] = _), (c = B))
                  : ((E[c] = V), (E[A] = _), (c = A));
              else if (B < g && 0 > L(X, _)) ((E[c] = X), (E[B] = _), (c = B));
              else break e;
            }
          }
          return O;
        }
        function L(E, O) {
          var _ = E.sortIndex - O.sortIndex;
          return _ !== 0 ? _ : E.id - O.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var U = performance;
          v.unstable_now = function () {
            return U.now();
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
          J = 3,
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
          for (var O = m(ge); O !== null;) {
            if (O.callback === null) M(ge);
            else if (O.startTime <= E) (M(ge), (O.sortIndex = O.expirationTime), S(W, O));
            else break;
            O = m(ge);
          }
        }
        function ke(E) {
          if (((b = !1), be(E), !Qe))
            if (m(W) !== null) ((Qe = !0), Le(et));
            else {
              var O = m(ge);
              O !== null && ie(ke, O.startTime - E);
            }
        }
        function et(E, O) {
          ((Qe = !1), b && ((b = !1), yt(Ke), (Ke = -1)), (We = !0));
          var _ = J;
          try {
            for (be(O), ne = m(W); ne !== null && (!(ne.expirationTime > O) || (E && !Gt()));) {
              var c = ne.callback;
              if (typeof c == "function") {
                ((ne.callback = null), (J = ne.priorityLevel));
                var g = c(ne.expirationTime <= O);
                ((O = v.unstable_now()),
                  typeof g == "function" ? (ne.callback = g) : ne === m(W) && M(W),
                  be(O));
              } else M(W);
              ne = m(W);
            }
            if (ne !== null) var D = !0;
            else {
              var A = m(ge);
              (A !== null && ie(ke, A.startTime - O), (D = !1));
            }
            return D;
          } finally {
            ((ne = null), (J = _), (We = !1));
          }
        }
        var _e = !1,
          ze = null,
          Ke = -1,
          Pt = 5,
          gt = -1;
        function Gt() {
          return !(v.unstable_now() - gt < Pt);
        }
        function ct() {
          if (ze !== null) {
            var E = v.unstable_now();
            gt = E;
            var O = !0;
            try {
              O = ze(!0, E);
            } finally {
              O ? Ae() : ((_e = !1), (ze = null));
            }
          } else _e = !1;
        }
        var Ae;
        if (typeof at == "function")
          Ae = function () {
            at(ct);
          };
        else if (typeof MessageChannel < "u") {
          var tt = new MessageChannel(),
            ft = tt.port2;
          ((tt.port1.onmessage = ct),
            (Ae = function () {
              ft.postMessage(null);
            }));
        } else
          Ae = function () {
            Y(ct, 0);
          };
        function Le(E) {
          ((ze = E), _e || ((_e = !0), Ae()));
        }
        function ie(E, O) {
          Ke = Y(function () {
            E(v.unstable_now());
          }, O);
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
              : (Pt = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (v.unstable_getCurrentPriorityLevel = function () {
            return J;
          }),
          (v.unstable_getFirstCallbackNode = function () {
            return m(W);
          }),
          (v.unstable_next = function (E) {
            switch (J) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = J;
            }
            var _ = J;
            J = O;
            try {
              return E();
            } finally {
              J = _;
            }
          }),
          (v.unstable_pauseExecution = function () {}),
          (v.unstable_requestPaint = function () {}),
          (v.unstable_runWithPriority = function (E, O) {
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
            var _ = J;
            J = E;
            try {
              return O();
            } finally {
              J = _;
            }
          }),
          (v.unstable_scheduleCallback = function (E, O, _) {
            var c = v.unstable_now();
            switch (
              (typeof _ == "object" && _ !== null
                ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? c + _ : c))
                : (_ = c),
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
              (g = _ + g),
              (E = {
                id: me++,
                callback: O,
                priorityLevel: E,
                startTime: _,
                expirationTime: g,
                sortIndex: -1,
              }),
              _ > c
                ? ((E.sortIndex = _),
                  S(ge, E),
                  m(W) === null &&
                    E === m(ge) &&
                    (b ? (yt(Ke), (Ke = -1)) : (b = !0), ie(ke, _ - c)))
                : ((E.sortIndex = g), S(W, E), Qe || We || ((Qe = !0), Le(et))),
              E
            );
          }),
          (v.unstable_shouldYield = Gt),
          (v.unstable_wrapCallback = function (E) {
            var O = J;
            return function () {
              var _ = J;
              J = O;
              try {
                return E.apply(this, arguments);
              } finally {
                J = _;
              }
            };
          }));
      })(Ro)),
    Ro
  );
}
var Da;
function ed() {
  return (Da || ((Da = 1), (To.exports = bf())), To.exports);
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
function td() {
  if (Fa) return De;
  Fa = 1;
  var v = Oo(),
    S = ed();
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
  var M = new Set(),
    L = {};
  function U(e, t) {
    (ae(e, t), ae(e + "Capture", t));
  }
  function ae(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) M.add(t[e]);
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
  var ke = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    _e = Symbol.for("react.portal"),
    ze = Symbol.for("react.fragment"),
    Ke = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Gt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    E = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]), typeof e == "function" ? e : null);
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
        return ((e = A(e.type, !1)), e);
      case 11:
        return ((e = A(e.type.render, !1)), e);
      case 1:
        return ((e = A(e.type, !0)), e);
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
      case _e:
        return "Portal";
      case Pt:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ae:
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
          return ((t = e.displayName || null), t !== null ? t : B(e.type) || "Memo");
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return B(e(t));
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
        return B(t);
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
  function Fo(e) {
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
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Ao(e, t) {
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
  function Uo(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Il(e, t) {
    Uo(e, t);
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
      ? Dl(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Dl(e, t.type, Q(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Ho(e, t, n) {
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
  var Dn = Array.isArray;
  function fn(e, t, n, r) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Vo(e, t) {
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
  function Bo(e, t) {
    var n = Q(t.value),
      r = Q(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function $o(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Wo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Al(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Wo(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Nr,
    Qo = (function (e) {
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
          Nr = Nr || document.createElement("div"),
            Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Nr.firstChild;
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
  var An = {
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
    ba = ["Webkit", "ms", "Moz", "O"];
  Object.keys(An).forEach(function (e) {
    ba.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]));
    });
  });
  function Ko(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Yo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ko(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var ec = _(
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
      if (ec[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  function Hl(e, t) {
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
  var $l = null,
    dn = null,
    pn = null;
  function Xo(e) {
    if ((e = or(e))) {
      if (typeof $l != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Yr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Go(e) {
    dn ? (pn ? pn.push(e) : (pn = [e])) : (dn = e);
  }
  function qo() {
    if (dn) {
      var e = dn,
        t = pn;
      if (((pn = dn = null), Xo(e), t)) for (e = 0; e < t.length; e++) Xo(t[e]);
    }
  }
  function Zo(e, t) {
    return e(t);
  }
  function Jo() {}
  var Wl = !1;
  function bo(e, t, n) {
    if (Wl) return e(t, n);
    Wl = !0;
    try {
      return Zo(e, t, n);
    } finally {
      ((Wl = !1), (dn !== null || pn !== null) && (Jo(), qo()));
    }
  }
  function Un(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yr(n);
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
  var Ql = !1;
  if (ce)
    try {
      var Hn = {};
      (Object.defineProperty(Hn, "passive", {
        get: function () {
          Ql = !0;
        },
      }),
        window.addEventListener("test", Hn, Hn),
        window.removeEventListener("test", Hn, Hn));
    } catch {
      Ql = !1;
    }
  function tc(e, t, n, r, l, i, o, u, s) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var Vn = !1,
    Cr = null,
    _r = !1,
    Kl = null,
    nc = {
      onError: function (e) {
        ((Vn = !0), (Cr = e));
      },
    };
  function rc(e, t, n, r, l, i, o, u, s) {
    ((Vn = !1), (Cr = null), tc.apply(nc, arguments));
  }
  function lc(e, t, n, r, l, i, o, u, s) {
    if ((rc.apply(this, arguments), Vn)) {
      if (Vn) {
        var h = Cr;
        ((Vn = !1), (Cr = null));
      } else throw Error(m(198));
      _r || ((_r = !0), (Kl = h));
    }
  }
  function qt(e) {
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
  function eu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function tu(e) {
    if (qt(e) !== e) throw Error(m(188));
  }
  function ic(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = qt(e)), t === null)) throw Error(m(188));
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
          if (i === n) return (tu(l), e);
          if (i === r) return (tu(l), t);
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
  function nu(e) {
    return ((e = ic(e)), e !== null ? ru(e) : null);
  }
  function ru(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
      var t = ru(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var lu = S.unstable_scheduleCallback,
    iu = S.unstable_cancelCallback,
    oc = S.unstable_shouldYield,
    uc = S.unstable_requestPaint,
    ue = S.unstable_now,
    sc = S.unstable_getCurrentPriorityLevel,
    Yl = S.unstable_ImmediatePriority,
    ou = S.unstable_UserBlockingPriority,
    jr = S.unstable_NormalPriority,
    ac = S.unstable_LowPriority,
    uu = S.unstable_IdlePriority,
    Pr = null,
    dt = null;
  function cc(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : pc,
    fc = Math.log,
    dc = Math.LN2;
  function pc(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((fc(e) / dc) | 0)) | 0);
  }
  var zr = 64,
    Lr = 4194304;
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
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      i = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? (r = Bn(u)) : ((i &= o), i !== 0 && (r = Bn(i)));
    } else ((o = n & ~l), o !== 0 ? (r = Bn(o)) : i !== 0 && (r = Bn(i)));
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
  function mc(e, t) {
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
  function hc(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes;
      0 < i;
    ) {
      var o = 31 - nt(i),
        u = 1 << o,
        s = l[o];
      (s === -1
        ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = mc(u, t))
        : s <= t && (e.expiredLanes |= u),
        (i &= ~u));
    }
  }
  function Xl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function su() {
    var e = zr;
    return ((zr <<= 1), (zr & 4194240) === 0 && (zr = 64), e);
  }
  function Gl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function $n(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nt(t)),
      (e[t] = n));
  }
  function vc(e, t) {
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
  function ql(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var K = 0;
  function au(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var cu,
    Zl,
    fu,
    du,
    pu,
    Jl = !1,
    Rr = [],
    zt = null,
    Lt = null,
    Tt = null,
    Wn = new Map(),
    Qn = new Map(),
    Rt = [],
    yc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function mu(e, t) {
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
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function Kn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = or(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function gc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Kn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Kn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Tt = Kn(Tt, e, t, n, r, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Wn.set(i, Kn(Wn.get(i) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((i = l.pointerId), Qn.set(i, Kn(Qn.get(i) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function hu(e) {
    var t = Zt(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = eu(n)), t !== null)) {
            ((e.blockedOn = t),
              pu(e.priority, function () {
                fu(n);
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
  function Mr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Vl = r), n.target.dispatchEvent(r), (Vl = null));
      } else return ((t = or(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function vu(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function wc() {
    ((Jl = !1),
      zt !== null && Mr(zt) && (zt = null),
      Lt !== null && Mr(Lt) && (Lt = null),
      Tt !== null && Mr(Tt) && (Tt = null),
      Wn.forEach(vu),
      Qn.forEach(vu));
  }
  function Yn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, wc)));
  }
  function Xn(e) {
    function t(l) {
      return Yn(l, e);
    }
    if (0 < Rr.length) {
      Yn(Rr[0], e);
      for (var n = 1; n < Rr.length; n++) {
        var r = Rr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zt !== null && Yn(zt, e),
        Lt !== null && Yn(Lt, e),
        Tt !== null && Yn(Tt, e),
        Wn.forEach(t),
        Qn.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null);)
      (hu(n), n.blockedOn === null && Rt.shift());
  }
  var mn = ke.ReactCurrentBatchConfig,
    Or = !0;
  function xc(e, t, n, r) {
    var l = K,
      i = mn.transition;
    mn.transition = null;
    try {
      ((K = 1), bl(e, t, n, r));
    } finally {
      ((K = l), (mn.transition = i));
    }
  }
  function kc(e, t, n, r) {
    var l = K,
      i = mn.transition;
    mn.transition = null;
    try {
      ((K = 4), bl(e, t, n, r));
    } finally {
      ((K = l), (mn.transition = i));
    }
  }
  function bl(e, t, n, r) {
    if (Or) {
      var l = ei(e, t, n, r);
      if (l === null) (yi(e, t, r, Ir, n), mu(e, r));
      else if (gc(l, e, t, n, r)) r.stopPropagation();
      else if ((mu(e, r), t & 4 && -1 < yc.indexOf(e))) {
        for (; l !== null;) {
          var i = or(l);
          if (
            (i !== null && cu(i), (i = ei(e, t, n, r)), i === null && yi(e, t, r, Ir, n), i === l)
          )
            break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else yi(e, t, r, null, n);
    }
  }
  var Ir = null;
  function ei(e, t, n, r) {
    if (((Ir = null), (e = Bl(r)), (e = Zt(e)), e !== null))
      if (((t = qt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = eu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ir = e), null);
  }
  function yu(e) {
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
        switch (sc()) {
          case Yl:
            return 1;
          case ou:
            return 4;
          case jr:
          case ac:
            return 16;
          case uu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    ti = null,
    Dr = null;
  function gu() {
    if (Dr) return Dr;
    var e,
      t = ti,
      n = t.length,
      r,
      l = "value" in Mt ? Mt.value : Mt.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Fr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ar() {
    return !0;
  }
  function wu() {
    return !1;
  }
  function He(e) {
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
          ? Ar
          : wu),
        (this.isPropagationStopped = wu),
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
            (this.isDefaultPrevented = Ar));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ar));
        },
        persist: function () {},
        isPersistent: Ar,
      }),
      t
    );
  }
  var hn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ni = He(hn),
    Gn = _({}, hn, { view: 0, detail: 0 }),
    Sc = He(Gn),
    ri,
    li,
    qn,
    Ur = _({}, Gn, {
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
      getModifierState: oi,
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
          : (e !== qn &&
              (qn && e.type === "mousemove"
                ? ((ri = e.screenX - qn.screenX), (li = e.screenY - qn.screenY))
                : (li = ri = 0),
              (qn = e)),
            ri);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : li;
      },
    }),
    xu = He(Ur),
    Ec = _({}, Ur, { dataTransfer: 0 }),
    Nc = He(Ec),
    Cc = _({}, Gn, { relatedTarget: 0 }),
    ii = He(Cc),
    _c = _({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jc = He(_c),
    Pc = _({}, hn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    zc = He(Pc),
    Lc = _({}, hn, { data: 0 }),
    ku = He(Lc),
    Tc = {
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
    Rc = {
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
    Mc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Oc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mc[e]) ? !!t[e] : !1;
  }
  function oi() {
    return Oc;
  }
  var Ic = _({}, Gn, {
      key: function (e) {
        if (e.key) {
          var t = Tc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Rc[e.keyCode] || "Unidentified"
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
      getModifierState: oi,
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
    Dc = He(Ic),
    Fc = _({}, Ur, {
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
    Su = He(Fc),
    Ac = _({}, Gn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: oi,
    }),
    Uc = He(Ac),
    Hc = _({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vc = He(Hc),
    Bc = _({}, Ur, {
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
    $c = He(Bc),
    Wc = [9, 13, 27, 32],
    ui = ce && "CompositionEvent" in window,
    Zn = null;
  ce && "documentMode" in document && (Zn = document.documentMode);
  var Qc = ce && "TextEvent" in window && !Zn,
    Eu = ce && (!ui || (Zn && 8 < Zn && 11 >= Zn)),
    Nu = " ",
    Cu = !1;
  function _u(e, t) {
    switch (e) {
      case "keyup":
        return Wc.indexOf(t.keyCode) !== -1;
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
  function ju(e) {
    return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
  }
  var vn = !1;
  function Kc(e, t) {
    switch (e) {
      case "compositionend":
        return ju(t);
      case "keypress":
        return t.which !== 32 ? null : ((Cu = !0), Nu);
      case "textInput":
        return ((e = t.data), e === Nu && Cu ? null : e);
      default:
        return null;
    }
  }
  function Yc(e, t) {
    if (vn)
      return e === "compositionend" || (!ui && _u(e, t))
        ? ((e = gu()), (Dr = ti = Mt = null), (vn = !1), e)
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
        return Eu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Xc = {
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
  function Pu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Xc[e.type] : t === "textarea";
  }
  function zu(e, t, n, r) {
    (Go(r),
      (t = Wr(t, "onChange")),
      0 < t.length &&
        ((n = new ni("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Jn = null,
    bn = null;
  function Gc(e) {
    Yu(e, 0);
  }
  function Hr(e) {
    var t = kn(e);
    if (Fo(t)) return e;
  }
  function qc(e, t) {
    if (e === "change") return t;
  }
  var Lu = !1;
  if (ce) {
    var si;
    if (ce) {
      var ai = "oninput" in document;
      if (!ai) {
        var Tu = document.createElement("div");
        (Tu.setAttribute("oninput", "return;"), (ai = typeof Tu.oninput == "function"));
      }
      si = ai;
    } else si = !1;
    Lu = si && (!document.documentMode || 9 < document.documentMode);
  }
  function Ru() {
    Jn && (Jn.detachEvent("onpropertychange", Mu), (bn = Jn = null));
  }
  function Mu(e) {
    if (e.propertyName === "value" && Hr(bn)) {
      var t = [];
      (zu(t, bn, e, Bl(e)), bo(Gc, t));
    }
  }
  function Zc(e, t, n) {
    e === "focusin"
      ? (Ru(), (Jn = t), (bn = n), Jn.attachEvent("onpropertychange", Mu))
      : e === "focusout" && Ru();
  }
  function Jc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hr(bn);
  }
  function bc(e, t) {
    if (e === "click") return Hr(t);
  }
  function ef(e, t) {
    if (e === "input" || e === "change") return Hr(t);
  }
  function tf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : tf;
  function er(e, t) {
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
  function Ou(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Iu(e, t) {
    var n = Ou(e);
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
      n = Ou(n);
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
  function Fu() {
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
  function ci(e) {
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
  function nf(e) {
    var t = Fu(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Du(n.ownerDocument.documentElement, n)) {
      if (r !== null && ci(n)) {
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
            (l = Iu(n, i)));
          var o = Iu(n, r);
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
  var rf = ce && "documentMode" in document && 11 >= document.documentMode,
    yn = null,
    fi = null,
    tr = null,
    di = !1;
  function Au(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    di ||
      yn == null ||
      yn !== Er(r) ||
      ((r = yn),
      "selectionStart" in r && ci(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (tr && er(tr, r)) ||
        ((tr = r),
        (r = Wr(fi, "onSelect")),
        0 < r.length &&
          ((t = new ni("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = yn))));
  }
  function Vr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var gn = {
      animationend: Vr("Animation", "AnimationEnd"),
      animationiteration: Vr("Animation", "AnimationIteration"),
      animationstart: Vr("Animation", "AnimationStart"),
      transitionend: Vr("Transition", "TransitionEnd"),
    },
    pi = {},
    Uu = {};
  ce &&
    ((Uu = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete gn.animationend.animation,
      delete gn.animationiteration.animation,
      delete gn.animationstart.animation),
    "TransitionEvent" in window || delete gn.transitionend.transition);
  function Br(e) {
    if (pi[e]) return pi[e];
    if (!gn[e]) return e;
    var t = gn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Uu) return (pi[e] = t[n]);
    return e;
  }
  var Hu = Br("animationend"),
    Vu = Br("animationiteration"),
    Bu = Br("animationstart"),
    $u = Br("transitionend"),
    Wu = new Map(),
    Qu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Wu.set(e, t), U(t, [e]));
  }
  for (var mi = 0; mi < Qu.length; mi++) {
    var hi = Qu[mi],
      lf = hi.toLowerCase(),
      of = hi[0].toUpperCase() + hi.slice(1);
    Ot(lf, "on" + of);
  }
  (Ot(Hu, "onAnimationEnd"),
    Ot(Vu, "onAnimationIteration"),
    Ot(Bu, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot($u, "onTransitionEnd"),
    ae("onMouseEnter", ["mouseout", "mouseover"]),
    ae("onMouseLeave", ["mouseout", "mouseover"]),
    ae("onPointerEnter", ["pointerout", "pointerover"]),
    ae("onPointerLeave", ["pointerout", "pointerover"]),
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
  var nr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    uf = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
  function Ku(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), lc(r, t, void 0, e), (e.currentTarget = null));
  }
  function Yu(e, t) {
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
            (Ku(l, u, h), (i = s));
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
            (Ku(l, u, h), (i = s));
          }
      }
    }
    if (_r) throw ((e = Kl), (_r = !1), (Kl = null), e);
  }
  function q(e, t) {
    var n = t[Ei];
    n === void 0 && (n = t[Ei] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Xu(t, e, 2, !1), n.add(r));
  }
  function vi(e, t, n) {
    var r = 0;
    (t && (r |= 4), Xu(n, e, r, t));
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function rr(e) {
    if (!e[$r]) {
      ((e[$r] = !0),
        M.forEach(function (n) {
          n !== "selectionchange" && (uf.has(n) || vi(n, !1, e), vi(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$r] || ((t[$r] = !0), vi("selectionchange", !1, t));
    }
  }
  function Xu(e, t, n, r) {
    switch (yu(t)) {
      case 1:
        var l = xc;
        break;
      case 4:
        l = kc;
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
  function yi(e, t, n, r, l) {
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
            if (((o = Zt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    bo(function () {
      var h = i,
        w = Bl(n),
        x = [];
      e: {
        var y = Wu.get(e);
        if (y !== void 0) {
          var N = ni,
            j = e;
          switch (e) {
            case "keypress":
              if (Fr(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Dc;
              break;
            case "focusin":
              ((j = "focus"), (N = ii));
              break;
            case "focusout":
              ((j = "blur"), (N = ii));
              break;
            case "beforeblur":
            case "afterblur":
              N = ii;
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
              N = xu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Nc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Uc;
              break;
            case Hu:
            case Vu:
            case Bu:
              N = jc;
              break;
            case $u:
              N = Vc;
              break;
            case "scroll":
              N = Sc;
              break;
            case "wheel":
              N = $c;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = zc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Su;
          }
          var P = (t & 4) !== 0,
            se = !P && e === "scroll",
            f = P ? (y !== null ? y + "Capture" : null) : y;
          P = [];
          for (var a = h, d; a !== null;) {
            d = a;
            var k = d.stateNode;
            if (
              (d.tag === 5 &&
                k !== null &&
                ((d = k), f !== null && ((k = Un(a, f)), k != null && P.push(lr(a, k, d)))),
              se)
            )
              break;
            a = a.return;
          }
          0 < P.length && ((y = new N(y, j, null, n, w)), x.push({ event: y, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (N = e === "mouseout" || e === "pointerout"),
            y && n !== Vl && (j = n.relatedTarget || n.fromElement) && (Zt(j) || j[wt]))
          )
            break e;
          if (
            (N || y) &&
            ((y =
              w.window === w
                ? w
                : (y = w.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            N
              ? ((j = n.relatedTarget || n.toElement),
                (N = h),
                (j = j ? Zt(j) : null),
                j !== null &&
                  ((se = qt(j)), j !== se || (j.tag !== 5 && j.tag !== 6)) &&
                  (j = null))
              : ((N = null), (j = h)),
            N !== j)
          ) {
            if (
              ((P = xu),
              (k = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((P = Su), (k = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (se = N == null ? y : kn(N)),
              (d = j == null ? y : kn(j)),
              (y = new P(k, a + "leave", N, n, w)),
              (y.target = se),
              (y.relatedTarget = d),
              (k = null),
              Zt(w) === h &&
                ((P = new P(f, a + "enter", j, n, w)),
                (P.target = d),
                (P.relatedTarget = se),
                (k = P)),
              (se = k),
              N && j)
            )
              t: {
                for (P = N, f = j, a = 0, d = P; d; d = wn(d)) a++;
                for (d = 0, k = f; k; k = wn(k)) d++;
                for (; 0 < a - d;) ((P = wn(P)), a--);
                for (; 0 < d - a;) ((f = wn(f)), d--);
                for (; a--;) {
                  if (P === f || (f !== null && P === f.alternate)) break t;
                  ((P = wn(P)), (f = wn(f)));
                }
                P = null;
              }
            else P = null;
            (N !== null && Gu(x, y, N, P, !1), j !== null && se !== null && Gu(x, se, j, P, !0));
          }
        }
        e: {
          if (
            ((y = h ? kn(h) : window),
            (N = y.nodeName && y.nodeName.toLowerCase()),
            N === "select" || (N === "input" && y.type === "file"))
          )
            var z = qc;
          else if (Pu(y))
            if (Lu) z = ef;
            else {
              z = Jc;
              var T = Zc;
            }
          else
            (N = y.nodeName) &&
              N.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (z = bc);
          if (z && (z = z(e, h))) {
            zu(x, z, n, w);
            break e;
          }
          (T && T(e, y, h),
            e === "focusout" &&
              (T = y._wrapperState) &&
              T.controlled &&
              y.type === "number" &&
              Dl(y, "number", y.value));
        }
        switch (((T = h ? kn(h) : window), e)) {
          case "focusin":
            (Pu(T) || T.contentEditable === "true") && ((yn = T), (fi = h), (tr = null));
            break;
          case "focusout":
            tr = fi = yn = null;
            break;
          case "mousedown":
            di = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((di = !1), Au(x, n, w));
            break;
          case "selectionchange":
            if (rf) break;
          case "keydown":
          case "keyup":
            Au(x, n, w);
        }
        var R;
        if (ui)
          e: {
            switch (e) {
              case "compositionstart":
                var I = "onCompositionStart";
                break e;
              case "compositionend":
                I = "onCompositionEnd";
                break e;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break e;
            }
            I = void 0;
          }
        else
          vn
            ? _u(e, n) && (I = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
        (I &&
          (Eu &&
            n.locale !== "ko" &&
            (vn || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && vn && (R = gu())
              : ((Mt = w), (ti = "value" in Mt ? Mt.value : Mt.textContent), (vn = !0))),
          (T = Wr(h, I)),
          0 < T.length &&
            ((I = new ku(I, e, null, n, w)),
            x.push({ event: I, listeners: T }),
            R ? (I.data = R) : ((R = ju(n)), R !== null && (I.data = R)))),
          (R = Qc ? Kc(e, n) : Yc(e, n)) &&
            ((h = Wr(h, "onBeforeInput")),
            0 < h.length &&
              ((w = new ku("onBeforeInput", "beforeinput", null, n, w)),
              x.push({ event: w, listeners: h }),
              (w.data = R))));
      }
      Yu(x, t);
    });
  }
  function lr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        i = l.stateNode;
      (l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = Un(e, n)),
        i != null && r.unshift(lr(e, i, l)),
        (i = Un(e, t)),
        i != null && r.push(lr(e, i, l))),
        (e = e.return));
    }
    return r;
  }
  function wn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Gu(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
      var u = n,
        s = u.alternate,
        h = u.stateNode;
      if (s !== null && s === r) break;
      (u.tag === 5 &&
        h !== null &&
        ((u = h),
        l
          ? ((s = Un(n, i)), s != null && o.unshift(lr(n, s, u)))
          : l || ((s = Un(n, i)), s != null && o.push(lr(n, s, u)))),
        (n = n.return));
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var sf = /\r\n?/g,
    af = /\u0000|\uFFFD/g;
  function qu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        sf,
        `
`,
      )
      .replace(af, "");
  }
  function Qr(e, t, n) {
    if (((t = qu(t)), qu(e) !== t && n)) throw Error(m(425));
  }
  function Kr() {}
  var gi = null,
    wi = null;
  function xi(e, t) {
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
  var ki = typeof setTimeout == "function" ? setTimeout : void 0,
    cf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Zu = typeof Promise == "function" ? Promise : void 0,
    ff =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Zu < "u"
          ? function (e) {
              return Zu.resolve(null).then(e).catch(df);
            }
          : ki;
  function df(e) {
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
            (e.removeChild(l), Xn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Xn(t);
  }
  function It(e) {
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
  function Ju(e) {
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
    ir = "__reactProps$" + xn,
    wt = "__reactContainer$" + xn,
    Ei = "__reactEvents$" + xn,
    pf = "__reactListeners$" + xn,
    mf = "__reactHandles$" + xn;
  function Zt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Ju(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Ju(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function or(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Yr(e) {
    return e[ir] || null;
  }
  var Ni = [],
    Sn = -1;
  function Dt(e) {
    return { current: e };
  }
  function Z(e) {
    0 > Sn || ((e.current = Ni[Sn]), (Ni[Sn] = null), Sn--);
  }
  function G(e, t) {
    (Sn++, (Ni[Sn] = e.current), (e.current = t));
  }
  var Ft = {},
    Se = Dt(Ft),
    Te = Dt(!1),
    Jt = Ft;
  function En(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
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
  function Xr() {
    (Z(Te), Z(Se));
  }
  function bu(e, t, n) {
    if (Se.current !== Ft) throw Error(m(168));
    (G(Se, t), G(Te, n));
  }
  function es(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, X(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Gr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
      (Jt = Se.current),
      G(Se, e),
      G(Te, Te.current),
      !0
    );
  }
  function ts(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = es(e, t, Jt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        Z(Te),
        Z(Se),
        G(Se, e))
      : Z(Te),
      G(Te, n));
  }
  var xt = null,
    qr = !1,
    Ci = !1;
  function ns(e) {
    xt === null ? (xt = [e]) : xt.push(e);
  }
  function hf(e) {
    ((qr = !0), ns(e));
  }
  function At() {
    if (!Ci && xt !== null) {
      Ci = !0;
      var e = 0,
        t = K;
      try {
        var n = xt;
        for (K = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((xt = null), (qr = !1));
      } catch (l) {
        throw (xt !== null && (xt = xt.slice(e + 1)), lu(Yl, At), l);
      } finally {
        ((K = t), (Ci = !1));
      }
    }
    return null;
  }
  var Nn = [],
    Cn = 0,
    Zr = null,
    Jr = 0,
    Ye = [],
    Xe = 0,
    bt = null,
    kt = 1,
    St = "";
  function en(e, t) {
    ((Nn[Cn++] = Jr), (Nn[Cn++] = Zr), (Zr = e), (Jr = t));
  }
  function rs(e, t, n) {
    ((Ye[Xe++] = kt), (Ye[Xe++] = St), (Ye[Xe++] = bt), (bt = e));
    var r = kt;
    e = St;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var i = 32 - nt(t) + l;
    if (30 < i) {
      var o = l - (l % 5);
      ((i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (kt = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (St = i + e));
    } else ((kt = (1 << i) | (n << l) | r), (St = e));
  }
  function _i(e) {
    e.return !== null && (en(e, 1), rs(e, 1, 0));
  }
  function ji(e) {
    for (; e === Zr;) ((Zr = Nn[--Cn]), (Nn[Cn] = null), (Jr = Nn[--Cn]), (Nn[Cn] = null));
    for (; e === bt;)
      ((bt = Ye[--Xe]),
        (Ye[Xe] = null),
        (St = Ye[--Xe]),
        (Ye[Xe] = null),
        (kt = Ye[--Xe]),
        (Ye[Xe] = null));
  }
  var Ve = null,
    Be = null,
    te = !1,
    lt = null;
  function ls(e, t) {
    var n = Je(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function is(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Ve = e), (Be = It(t.firstChild)), !0) : !1
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
            ? ((n = bt !== null ? { id: kt, overflow: St } : null),
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
  function Pi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function zi(e) {
    if (te) {
      var t = Be;
      if (t) {
        var n = t;
        if (!is(e, t)) {
          if (Pi(e)) throw Error(m(418));
          t = It(n.nextSibling);
          var r = Ve;
          t && is(e, t) ? ls(r, n) : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
        }
      } else {
        if (Pi(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ve = e));
      }
    }
  }
  function os(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e;
  }
  function br(e) {
    if (e !== Ve) return !1;
    if (!te) return (os(e), (te = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !xi(e.type, e.memoizedProps))),
      t && (t = Be))
    ) {
      if (Pi(e)) throw (us(), Error(m(418)));
      for (; t;) (ls(e, t), (t = It(t.nextSibling)));
    }
    if ((os(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Be = It(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Be = null;
      }
    } else Be = Ve ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function us() {
    for (var e = Be; e;) e = It(e.nextSibling);
  }
  function _n() {
    ((Be = Ve = null), (te = !1));
  }
  function Li(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var vf = ke.ReactCurrentBatchConfig;
  function ur(e, t, n) {
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
  function el(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e),
      )
    );
  }
  function ss(e) {
    var t = e._init;
    return t(e._payload);
  }
  function as(e) {
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
    function u(f, a, d, k) {
      return a === null || a.tag !== 6
        ? ((a = So(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, k) {
      var z = d.type;
      return z === ze
        ? w(f, a, d.props.children, k, d.key)
        : a !== null &&
            (a.elementType === z ||
              (typeof z == "object" && z !== null && z.$$typeof === Le && ss(z) === a.type))
          ? ((k = l(a, d.props)), (k.ref = ur(f, a, d)), (k.return = f), k)
          : ((k = Nl(d.type, d.key, d.props, null, f.mode, k)),
            (k.ref = ur(f, a, d)),
            (k.return = f),
            k);
    }
    function h(f, a, d, k) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = Eo(d, f.mode, k)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function w(f, a, d, k, z) {
      return a === null || a.tag !== 7
        ? ((a = an(d, f.mode, k, z)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function x(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = So("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = Nl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = ur(f, null, a)),
              (d.return = f),
              d
            );
          case _e:
            return ((a = Eo(a, f.mode, d)), (a.return = f), a);
          case Le:
            var k = a._init;
            return x(f, k(a._payload), d);
        }
        if (Dn(a) || O(a)) return ((a = an(a, f.mode, d, null)), (a.return = f), a);
        el(f, a);
      }
      return null;
    }
    function y(f, a, d, k) {
      var z = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return z !== null ? null : u(f, a, "" + d, k);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case et:
            return d.key === z ? s(f, a, d, k) : null;
          case _e:
            return d.key === z ? h(f, a, d, k) : null;
          case Le:
            return ((z = d._init), y(f, a, z(d._payload), k));
        }
        if (Dn(d) || O(d)) return z !== null ? null : w(f, a, d, k, null);
        el(f, d);
      }
      return null;
    }
    function N(f, a, d, k, z) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return ((f = f.get(d) || null), u(a, f, "" + k, z));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case et:
            return ((f = f.get(k.key === null ? d : k.key) || null), s(a, f, k, z));
          case _e:
            return ((f = f.get(k.key === null ? d : k.key) || null), h(a, f, k, z));
          case Le:
            var T = k._init;
            return N(f, a, d, T(k._payload), z);
        }
        if (Dn(k) || O(k)) return ((f = f.get(d) || null), w(a, f, k, z, null));
        el(a, k);
      }
      return null;
    }
    function j(f, a, d, k) {
      for (var z = null, T = null, R = a, I = (a = 0), ye = null; R !== null && I < d.length; I++) {
        R.index > I ? ((ye = R), (R = null)) : (ye = R.sibling);
        var $ = y(f, R, d[I], k);
        if ($ === null) {
          R === null && (R = ye);
          break;
        }
        (e && R && $.alternate === null && t(f, R),
          (a = i($, a, I)),
          T === null ? (z = $) : (T.sibling = $),
          (T = $),
          (R = ye));
      }
      if (I === d.length) return (n(f, R), te && en(f, I), z);
      if (R === null) {
        for (; I < d.length; I++)
          ((R = x(f, d[I], k)),
            R !== null && ((a = i(R, a, I)), T === null ? (z = R) : (T.sibling = R), (T = R)));
        return (te && en(f, I), z);
      }
      for (R = r(f, R); I < d.length; I++)
        ((ye = N(R, f, I, d[I], k)),
          ye !== null &&
            (e && ye.alternate !== null && R.delete(ye.key === null ? I : ye.key),
            (a = i(ye, a, I)),
            T === null ? (z = ye) : (T.sibling = ye),
            (T = ye)));
      return (
        e &&
          R.forEach(function (Yt) {
            return t(f, Yt);
          }),
        te && en(f, I),
        z
      );
    }
    function P(f, a, d, k) {
      var z = O(d);
      if (typeof z != "function") throw Error(m(150));
      if (((d = z.call(d)), d == null)) throw Error(m(151));
      for (
        var T = (z = null), R = a, I = (a = 0), ye = null, $ = d.next();
        R !== null && !$.done;
        I++, $ = d.next()
      ) {
        R.index > I ? ((ye = R), (R = null)) : (ye = R.sibling);
        var Yt = y(f, R, $.value, k);
        if (Yt === null) {
          R === null && (R = ye);
          break;
        }
        (e && R && Yt.alternate === null && t(f, R),
          (a = i(Yt, a, I)),
          T === null ? (z = Yt) : (T.sibling = Yt),
          (T = Yt),
          (R = ye));
      }
      if ($.done) return (n(f, R), te && en(f, I), z);
      if (R === null) {
        for (; !$.done; I++, $ = d.next())
          (($ = x(f, $.value, k)),
            $ !== null && ((a = i($, a, I)), T === null ? (z = $) : (T.sibling = $), (T = $)));
        return (te && en(f, I), z);
      }
      for (R = r(f, R); !$.done; I++, $ = d.next())
        (($ = N(R, f, I, $.value, k)),
          $ !== null &&
            (e && $.alternate !== null && R.delete($.key === null ? I : $.key),
            (a = i($, a, I)),
            T === null ? (z = $) : (T.sibling = $),
            (T = $)));
      return (
        e &&
          R.forEach(function (Gf) {
            return t(f, Gf);
          }),
        te && en(f, I),
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
                    (typeof z == "object" && z !== null && z.$$typeof === Le && ss(z) === T.type)
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
              d.type === ze
                ? ((a = an(d.props.children, f.mode, k, d.key)), (a.return = f), (f = a))
                : ((k = Nl(d.type, d.key, d.props, null, f.mode, k)),
                  (k.ref = ur(f, a, d)),
                  (k.return = f),
                  (f = k));
            }
            return o(f);
          case _e:
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
              ((a = Eo(d, f.mode, k)), (a.return = f), (f = a));
            }
            return o(f);
          case Le:
            return ((T = d._init), se(f, a, T(d._payload), k));
        }
        if (Dn(d)) return j(f, a, d, k);
        if (O(d)) return P(f, a, d, k);
        el(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = So(d, f.mode, k)), (a.return = f), (f = a)),
          o(f))
        : n(f, a);
    }
    return se;
  }
  var jn = as(!0),
    cs = as(!1),
    tl = Dt(null),
    nl = null,
    Pn = null,
    Ti = null;
  function Ri() {
    Ti = Pn = nl = null;
  }
  function Mi(e) {
    var t = tl.current;
    (Z(tl), (e._currentValue = t));
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
  function zn(e, t) {
    ((nl = e),
      (Ti = Pn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Me = !0), (e.firstContext = null)));
  }
  function Ge(e) {
    var t = e._currentValue;
    if (Ti !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Pn === null)) {
        if (nl === null) throw Error(m(308));
        ((Pn = e), (nl.dependencies = { lanes: 0, firstContext: e }));
      } else Pn = Pn.next = e;
    return t;
  }
  var tn = null;
  function Ii(e) {
    tn === null ? (tn = [e]) : tn.push(e);
  }
  function fs(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ii(t)) : ((n.next = l.next), (l.next = n)),
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
  function Di(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function ds(e, t) {
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
  function Ht(e, t, n) {
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
      l === null ? ((t.next = t), Ii(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function rl(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n));
    }
  }
  function ps(e, t) {
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
  function ll(e, t, n, r) {
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
        var y = u.lane,
          N = u.eventTime;
        if ((r & y) === y) {
          w !== null &&
            (w = w.next =
              {
                eventTime: N,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var j = e,
              P = u;
            switch (((y = t), (N = n), P.tag)) {
              case 1:
                if (((j = P.payload), typeof j == "function")) {
                  x = j.call(N, x, y);
                  break e;
                }
                x = j;
                break e;
              case 3:
                j.flags = (j.flags & -65537) | 128;
              case 0:
                if (
                  ((j = P.payload), (y = typeof j == "function" ? j.call(N, x, y) : j), y == null)
                )
                  break e;
                x = _({}, x, y);
                break e;
              case 2:
                Ut = !0;
            }
          }
          u.callback !== null &&
            u.lane !== 0 &&
            ((e.flags |= 64), (y = l.effects), y === null ? (l.effects = [u]) : y.push(u));
        } else
          ((N = {
            eventTime: N,
            lane: y,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            w === null ? ((h = w = N), (s = x)) : (w = w.next = N),
            (o |= y));
        if (((u = u.next), u === null)) {
          if (((u = l.shared.pending), u === null)) break;
          ((y = u),
            (u = y.next),
            (y.next = null),
            (l.lastBaseUpdate = y),
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
      ((ln |= o), (e.lanes = o), (e.memoizedState = x));
    }
  }
  function ms(e, t, n) {
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
  var sr = {},
    mt = Dt(sr),
    ar = Dt(sr),
    cr = Dt(sr);
  function nn(e) {
    if (e === sr) throw Error(m(174));
    return e;
  }
  function Fi(e, t) {
    switch ((G(cr, t), G(ar, e), G(mt, sr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Al(t, e)));
    }
    (Z(mt), G(mt, t));
  }
  function Ln() {
    (Z(mt), Z(ar), Z(cr));
  }
  function hs(e) {
    nn(cr.current);
    var t = nn(mt.current),
      n = Al(t, e.type);
    t !== n && (G(ar, e), G(mt, n));
  }
  function Ai(e) {
    ar.current === e && (Z(mt), Z(ar));
  }
  var re = Dt(0);
  function il(e) {
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
  function Hi() {
    for (var e = 0; e < Ui.length; e++) Ui[e]._workInProgressVersionPrimary = null;
    Ui.length = 0;
  }
  var ol = ke.ReactCurrentDispatcher,
    Vi = ke.ReactCurrentBatchConfig,
    rn = 0,
    le = null,
    de = null,
    he = null,
    ul = !1,
    fr = !1,
    dr = 0,
    yf = 0;
  function Ee() {
    throw Error(m(321));
  }
  function Bi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function $i(e, t, n, r, l, i) {
    if (
      ((rn = i),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ol.current = e === null || e.memoizedState === null ? kf : Sf),
      (e = n(r, l)),
      fr)
    ) {
      i = 0;
      do {
        if (((fr = !1), (dr = 0), 25 <= i)) throw Error(m(301));
        ((i += 1), (he = de = null), (t.updateQueue = null), (ol.current = Ef), (e = n(r, l)));
      } while (fr);
    }
    if (
      ((ol.current = cl),
      (t = de !== null && de.next !== null),
      (rn = 0),
      (he = de = le = null),
      (ul = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Wi() {
    var e = dr !== 0;
    return ((dr = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (he === null ? (le.memoizedState = he = e) : (he = he.next = e), he);
  }
  function qe() {
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
  function pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qi(e) {
    var t = qe(),
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
        if ((rn & w) === w)
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
          (s === null ? ((u = s = x), (o = r)) : (s = s.next = x), (le.lanes |= w), (ln |= w));
        }
        h = h.next;
      } while (h !== null && h !== i);
      (s === null ? (o = r) : (s.next = u),
        rt(r, t.memoizedState) || (Me = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = s),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((i = l.lane), (le.lanes |= i), (ln |= i), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ki(e) {
    var t = qe(),
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
      (rt(i, t.memoizedState) || (Me = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, r];
  }
  function vs() {}
  function ys(e, t) {
    var n = le,
      r = qe(),
      l = t(),
      i = !rt(r.memoizedState, l);
    if (
      (i && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      Yi(xs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), mr(9, ws.bind(null, n, r, l, t), void 0, null), ve === null))
        throw Error(m(349));
      (rn & 30) !== 0 || gs(n, t, l);
    }
    return l;
  }
  function gs(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (le.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ws(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), ks(t) && Ss(e));
  }
  function xs(e, t, n) {
    return n(function () {
      ks(t) && Ss(e);
    });
  }
  function ks(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !rt(e, n);
    } catch {
      return !0;
    }
  }
  function Ss(e) {
    var t = Et(e, 1);
    t !== null && st(t, e, 1, -1);
  }
  function Es(e) {
    var t = ht();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = xf.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function mr(e, t, n, r) {
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
  function Ns() {
    return qe().memoizedState;
  }
  function sl(e, t, n, r) {
    var l = ht();
    ((le.flags |= e), (l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function al(e, t, n, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (de !== null) {
      var o = de.memoizedState;
      if (((i = o.destroy), r !== null && Bi(r, o.deps))) {
        l.memoizedState = mr(t, n, i, r);
        return;
      }
    }
    ((le.flags |= e), (l.memoizedState = mr(1 | t, n, i, r)));
  }
  function Cs(e, t) {
    return sl(8390656, 8, e, t);
  }
  function Yi(e, t) {
    return al(2048, 8, e, t);
  }
  function _s(e, t) {
    return al(4, 2, e, t);
  }
  function js(e, t) {
    return al(4, 4, e, t);
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
  function zs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), al(4, 4, Ps.bind(null, t, e), n));
  }
  function Xi() {}
  function Ls(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ts(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bi(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Rs(e, t, n) {
    return (rn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = su()), (le.lanes |= n), (ln |= n), (e.baseState = !0)), t);
  }
  function gf(e, t) {
    var n = K;
    ((K = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Vi.transition;
    Vi.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((K = n), (Vi.transition = r));
    }
  }
  function Ms() {
    return qe().memoizedState;
  }
  function wf(e, t, n) {
    var r = Wt(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Os(e)))
      Is(t, n);
    else if (((n = fs(e, t, n, r)), n !== null)) {
      var l = Pe();
      (st(n, e, r, l), Ds(n, t, r));
    }
  }
  function xf(e, t, n) {
    var r = Wt(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Os(e)) Is(t, l);
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
            (s === null ? ((l.next = l), Ii(t)) : ((l.next = s.next), (s.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = fs(e, t, l, r)), n !== null && ((l = Pe()), st(n, e, r, l), Ds(n, t, r)));
    }
  }
  function Os(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Is(e, t) {
    fr = ul = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function Ds(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ql(e, n));
    }
  }
  var cl = {
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
    kf = {
      readContext: Ge,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Ge,
      useEffect: Cs,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), sl(4194308, 4, Ps.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return sl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return sl(4, 2, e, t);
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
          (e = e.dispatch = wf.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Es,
      useDebugValue: Xi,
      useDeferredValue: function (e) {
        return (ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Es(!1),
          t = e[0];
        return ((e = gf.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
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
          (rn & 30) !== 0 || gs(r, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          Cs(xs.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          mr(9, ws.bind(null, r, i, n, t), void 0, null),
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
            (n = dr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = yf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Sf = {
      readContext: Ge,
      useCallback: Ls,
      useContext: Ge,
      useEffect: Yi,
      useImperativeHandle: zs,
      useInsertionEffect: _s,
      useLayoutEffect: js,
      useMemo: Ts,
      useReducer: Qi,
      useRef: Ns,
      useState: function () {
        return Qi(pr);
      },
      useDebugValue: Xi,
      useDeferredValue: function (e) {
        var t = qe();
        return Rs(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Qi(pr)[0],
          t = qe().memoizedState;
        return [e, t];
      },
      useMutableSource: vs,
      useSyncExternalStore: ys,
      useId: Ms,
      unstable_isNewReconciler: !1,
    },
    Ef = {
      readContext: Ge,
      useCallback: Ls,
      useContext: Ge,
      useEffect: Yi,
      useImperativeHandle: zs,
      useInsertionEffect: _s,
      useLayoutEffect: js,
      useMemo: Ts,
      useReducer: Ki,
      useRef: Ns,
      useState: function () {
        return Ki(pr);
      },
      useDebugValue: Xi,
      useDeferredValue: function (e) {
        var t = qe();
        return de === null ? (t.memoizedState = e) : Rs(t, de.memoizedState, e);
      },
      useTransition: function () {
        var e = Ki(pr)[0],
          t = qe().memoizedState;
        return [e, t];
      },
      useMutableSource: vs,
      useSyncExternalStore: ys,
      useId: Ms,
      unstable_isNewReconciler: !1,
    };
  function it(e, t) {
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
  var fl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? qt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Wt(e),
        i = Nt(r, l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Ht(e, i, l)),
        t !== null && (st(t, e, l, r), rl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Pe(),
        l = Wt(e),
        i = Nt(r, l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Ht(e, i, l)),
        t !== null && (st(t, e, l, r), rl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Pe(),
        r = Wt(e),
        l = Nt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ht(e, l, r)),
        t !== null && (st(t, e, r, n), rl(t, e, r)));
    },
  };
  function Fs(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
          ? !er(n, r) || !er(l, i)
          : !0
    );
  }
  function As(e, t, n) {
    var r = !1,
      l = Ft,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Ge(i))
        : ((l = Re(t) ? Jt : Se.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? En(e, l) : Ft)),
      (t = new t(n, i)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = fl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Us(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && fl.enqueueReplaceState(t, t.state, null));
  }
  function qi(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Di(e));
    var i = t.contextType;
    (typeof i == "object" && i !== null
      ? (l.context = Ge(i))
      : ((i = Re(t) ? Jt : Se.current), (l.context = En(e, i))),
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
        t !== l.state && fl.enqueueReplaceState(l, l.state, null),
        ll(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Tn(e, t) {
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
  var Nf = typeof WeakMap == "function" ? WeakMap : Map;
  function Hs(e, t, n) {
    ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (gl || ((gl = !0), (mo = r)), Ji(e, t));
      }),
      n
    );
  }
  function Vs(e, t, n) {
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
            typeof r != "function" && (Bt === null ? (Bt = new Set([this])) : Bt.add(this)));
          var o = t.stack;
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
        }),
      n
    );
  }
  function Bs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nf();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Af.bind(null, e, t, n)), t.then(e, e));
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
  function Ws(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Nt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Cf = ke.ReactCurrentOwner,
    Me = !1;
  function je(e, t, n, r) {
    t.child = e === null ? cs(t, null, n, r) : jn(t, e.child, n, r);
  }
  function Qs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      zn(t, l),
      (r = $i(e, t, n, r, i, l)),
      (n = Wi()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (te && n && _i(t), (t.flags |= 1), je(e, t, r, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !ko(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Ys(e, t, i, r, l))
        : ((e = Nl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), (e.lanes & l) === 0)) {
      var o = i.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref))
        return Ct(e, t, l);
    }
    return ((t.flags |= 1), (e = Kt(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Ys(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (er(i, r) && e.ref === t.ref)
        if (((Me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Me = !0);
        else return ((t.lanes = e.lanes), Ct(e, t, l));
    }
    return bi(e, t, n, r, l);
  }
  function Xs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          G(Mn, $e),
          ($e |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            G(Mn, $e),
            ($e |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = i !== null ? i.baseLanes : n),
          G(Mn, $e),
          ($e |= r));
      }
    else
      (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        G(Mn, $e),
        ($e |= r));
    return (je(e, t, l, n), t.child);
  }
  function Gs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function bi(e, t, n, r, l) {
    var i = Re(n) ? Jt : Se.current;
    return (
      (i = En(t, i)),
      zn(t, l),
      (n = $i(e, t, n, r, i, l)),
      (r = Wi()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (te && r && _i(t), (t.flags |= 1), je(e, t, n, l), t.child)
    );
  }
  function qs(e, t, n, r, l) {
    if (Re(n)) {
      var i = !0;
      Gr(t);
    } else i = !1;
    if ((zn(t, l), t.stateNode === null)) (pl(e, t), As(t, n, r), qi(t, n, r, l), (r = !0));
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        h = n.contextType;
      typeof h == "object" && h !== null
        ? (h = Ge(h))
        : ((h = Re(n) ? Jt : Se.current), (h = En(t, h)));
      var w = n.getDerivedStateFromProps,
        x = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      (x ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== r || s !== h) && Us(t, o, r, h)),
        (Ut = !1));
      var y = t.memoizedState;
      ((o.state = y),
        ll(t, r, o, l),
        (s = t.memoizedState),
        u !== r || y !== s || Te.current || Ut
          ? (typeof w == "function" && (Gi(t, n, w, r), (s = t.memoizedState)),
            (u = Ut || Fs(t, n, u, r, y, s, h))
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
        ds(e, t),
        (u = t.memoizedProps),
        (h = t.type === t.elementType ? u : it(t.type, u)),
        (o.props = h),
        (x = t.pendingProps),
        (y = o.context),
        (s = n.contextType),
        typeof s == "object" && s !== null
          ? (s = Ge(s))
          : ((s = Re(n) ? Jt : Se.current), (s = En(t, s))));
      var N = n.getDerivedStateFromProps;
      ((w = typeof N == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((u !== x || y !== s) && Us(t, o, r, s)),
        (Ut = !1),
        (y = t.memoizedState),
        (o.state = y),
        ll(t, r, o, l));
      var j = t.memoizedState;
      u !== x || y !== j || Te.current || Ut
        ? (typeof N == "function" && (Gi(t, n, N, r), (j = t.memoizedState)),
          (h = Ut || Fs(t, n, h, r, y, j, s) || !1)
            ? (w ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, j, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, j, s)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = j)),
          (o.props = r),
          (o.state = j),
          (o.context = s),
          (r = h))
        : (typeof o.componentDidUpdate != "function" ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return eo(e, t, n, r, i, l);
  }
  function eo(e, t, n, r, l, i) {
    Gs(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return (l && ts(t, n, !1), Ct(e, t, i));
    ((r = t.stateNode), (Cf.current = t));
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = jn(t, e.child, null, i)), (t.child = jn(t, null, u, i)))
        : je(e, t, u, i),
      (t.memoizedState = r.state),
      l && ts(t, n, !0),
      t.child
    );
  }
  function Zs(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? bu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && bu(e, t.context, !1),
      Fi(e, t.containerInfo));
  }
  function Js(e, t, n, r, l) {
    return (_n(), Li(l), (t.flags |= 256), je(e, t, n, r), t.child);
  }
  var to = { dehydrated: null, treeContext: null, retryLane: 0 };
  function no(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function bs(e, t, n) {
    var r = t.pendingProps,
      l = re.current,
      i = !1,
      o = (t.flags & 128) !== 0,
      u;
    if (
      ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      u ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      G(re, l & 1),
      e === null)
    )
      return (
        zi(t),
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
                  : (i = Cl(o, r, 0, null)),
                (e = an(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = no(n)),
                (t.memoizedState = to),
                e)
              : ro(t, o))
      );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
      return _f(e, t, o, r, u, l, n);
    if (i) {
      ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
      var s = { mode: "hidden", children: r.children };
      return (
        (o & 1) === 0 && t.child !== l
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
          : ((r = Kt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        u !== null ? (i = Kt(u, i)) : ((i = an(i, o, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? no(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (i.memoizedState = o),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = to),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = Kt(i, { mode: "visible", children: r.children })),
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
  function ro(e, t) {
    return (
      (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function dl(e, t, n, r) {
    return (
      r !== null && Li(r),
      jn(t, e.child, null, n),
      (e = ro(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function _f(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zi(Error(m(422)))), dl(e, t, o, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((i = r.fallback),
            (l = t.mode),
            (r = Cl({ mode: "visible", children: r.children }, l, 0, null)),
            (i = an(i, l, o, null)),
            (i.flags |= 2),
            (r.return = t),
            (i.return = t),
            (r.sibling = i),
            (t.child = r),
            (t.mode & 1) !== 0 && jn(t, e.child, null, o),
            (t.child.memoizedState = no(o)),
            (t.memoizedState = to),
            i);
    if ((t.mode & 1) === 0) return dl(e, t, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      return ((r = u), (i = Error(m(419))), (r = Zi(i, r, void 0)), dl(e, t, o, r));
    }
    if (((u = (o & e.childLanes) !== 0), Me || u)) {
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
      return (xo(), (r = Zi(Error(m(421)))), dl(e, t, o, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Uf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = i.treeContext),
        (Be = It(l.nextSibling)),
        (Ve = t),
        (te = !0),
        (lt = null),
        e !== null &&
          ((Ye[Xe++] = kt),
          (Ye[Xe++] = St),
          (Ye[Xe++] = bt),
          (kt = e.id),
          (St = e.overflow),
          (bt = t)),
        (t = ro(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ea(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), Oi(e.return, t, n));
  }
  function lo(e, t, n, r, l) {
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
  function ta(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((je(e, t, r.children, n), (r = re.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && ea(e, n, t);
          else if (e.tag === 19) ea(e, n, t);
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
            ((e = n.alternate), e !== null && il(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            lo(t, !1, l, n, i));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && il(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          lo(t, !0, n, null, i);
          break;
        case "together":
          lo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function pl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ct(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (ln |= t.lanes), (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
        ((e = e.sibling), (n = n.sibling = Kt(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function jf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Zs(t), _n());
        break;
      case 5:
        hs(t);
        break;
      case 1:
        Re(t.type) && Gr(t);
        break;
      case 4:
        Fi(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (G(tl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (G(re, re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? bs(e, t, n)
              : (G(re, re.current & 1), (e = Ct(e, t, n)), e !== null ? e.sibling : null);
        G(re, re.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return ta(e, t, n);
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
        return ((t.lanes = 0), Xs(e, t, n));
    }
    return Ct(e, t, n);
  }
  var na, io, ra, la;
  ((na = function (e, t) {
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
    (io = function () {}),
    (ra = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), nn(mt.current));
        var i = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (i = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (i = []));
            break;
          case "textarea":
            ((l = Fl(e, l)), (r = Fl(e, r)), (i = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
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
                (L.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
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
                    (L.hasOwnProperty(h)
                      ? (s != null && h === "onScroll" && q("scroll", e), i || u === s || (i = []))
                      : (i = i || []).push(h, s));
        }
        n && (i = i || []).push("style", n);
        var h = i;
        (t.updateQueue = h) && (t.flags |= 4);
      }
    }),
    (la = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function hr(e, t) {
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
  function Pf(e, t, n) {
    var r = t.pendingProps;
    switch ((ji(t), t.tag)) {
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
        return (Re(t.type) && Xr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Ln(),
          Z(Te),
          Z(Se),
          Hi(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (br(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (yo(lt), (lt = null)))),
          io(e, t),
          Ne(t),
          null
        );
      case 5:
        Ai(t);
        var l = nn(cr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ra(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ne(t), null);
          }
          if (((e = nn(mt.current)), br(t))) {
            ((r = t.stateNode), (n = t.type));
            var i = t.memoizedProps;
            switch (((r[pt] = t), (r[ir] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (q("cancel", r), q("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < nr.length; l++) q(nr[l], r);
                break;
              case "source":
                q("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (q("error", r), q("load", r));
                break;
              case "details":
                q("toggle", r);
                break;
              case "input":
                (Ao(r, i), q("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!i.multiple }), q("invalid", r));
                break;
              case "textarea":
                (Vo(r, i), q("invalid", r));
            }
            (Ul(n, i), (l = null));
            for (var o in i)
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                o === "children"
                  ? typeof u == "string"
                    ? r.textContent !== u &&
                      (i.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e),
                      (l = ["children", u]))
                    : typeof u == "number" &&
                      r.textContent !== "" + u &&
                      (i.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e),
                      (l = ["children", "" + u]))
                  : L.hasOwnProperty(o) && u != null && o === "onScroll" && q("scroll", r);
              }
            switch (n) {
              case "input":
                (Sr(r), Ho(r, i, !0));
                break;
              case "textarea":
                (Sr(r), $o(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Kr);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Wo(n)),
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
              (e[ir] = r),
              na(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((o = Hl(n, r)), n)) {
                case "dialog":
                  (q("cancel", e), q("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (q("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < nr.length; l++) q(nr[l], e);
                  l = r;
                  break;
                case "source":
                  (q("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (q("error", e), q("load", e), (l = r));
                  break;
                case "details":
                  (q("toggle", e), (l = r));
                  break;
                case "input":
                  (Ao(e, r), (l = Ol(e, r)), q("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    q("invalid", e));
                  break;
                case "textarea":
                  (Vo(e, r), (l = Fl(e, r)), q("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (u = l));
              for (i in u)
                if (u.hasOwnProperty(i)) {
                  var s = u[i];
                  i === "style"
                    ? Yo(e, s)
                    : i === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Qo(e, s))
                      : i === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && Fn(e, s)
                          : typeof s == "number" && Fn(e, "" + s)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (L.hasOwnProperty(i)
                            ? s != null && i === "onScroll" && q("scroll", e)
                            : s != null && be(e, i, s, o));
                }
              switch (n) {
                case "input":
                  (Sr(e), Ho(e, r, !1));
                  break;
                case "textarea":
                  (Sr(e), $o(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Q(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? fn(e, !!r.multiple, i, !1)
                      : r.defaultValue != null && fn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Kr);
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
        if (e && t.stateNode != null) la(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = nn(cr.current)), nn(mt.current), br(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (i = r.nodeValue !== n) && ((e = Ve), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Qr(r.nodeValue, n, (e.mode & 1) !== 0);
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
          (Z(re),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (te && Be !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (us(), _n(), (t.flags |= 98560), (i = !1));
          else if (((i = br(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
                throw Error(m(317));
              i[pt] = t;
            } else (_n(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (i = !1));
          } else (lt !== null && (yo(lt), (lt = null)), (i = !0));
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (re.current & 1) !== 0 ? pe === 0 && (pe = 3) : xo())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (Ln(), io(e, t), e === null && rr(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (Mi(t.type._context), Ne(t), null);
      case 17:
        return (Re(t.type) && Xr(), Ne(t), null);
      case 19:
        if ((Z(re), (i = t.memoizedState), i === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
          if (r) hr(i, !1);
          else {
            if (pe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((o = il(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      hr(i, !1),
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
                  return (G(re, (re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              ue() > On &&
              ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = il(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                hr(i, !0),
                i.tail === null && i.tailMode === "hidden" && !o.alternate && !te)
              )
                return (Ne(t), null);
            } else
              2 * ue() - i.renderingStartTime > On &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ue()),
            (t.sibling = null),
            (n = re.current),
            G(re, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          wo(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? ($e & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
  function zf(e, t) {
    switch ((ji(t), t.tag)) {
      case 1:
        return (
          Re(t.type) && Xr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ln(),
          Z(Te),
          Z(Se),
          Hi(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Ai(t), null);
      case 13:
        if ((Z(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          _n();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (Z(re), null);
      case 4:
        return (Ln(), null);
      case 10:
        return (Mi(t.type._context), null);
      case 22:
      case 23:
        return (wo(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ml = !1,
    Ce = !1,
    Lf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;
  function Rn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          oe(e, t, r);
        }
      else n.current = null;
  }
  function oo(e, t, n) {
    try {
      n();
    } catch (r) {
      oe(e, t, r);
    }
  }
  var ia = !1;
  function Tf(e, t) {
    if (((gi = Or), (e = Fu()), ci(e))) {
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
              y = null;
            t: for (;;) {
              for (
                var N;
                x !== n || (l !== 0 && x.nodeType !== 3) || (u = o + l),
                  x !== i || (r !== 0 && x.nodeType !== 3) || (s = o + r),
                  x.nodeType === 3 && (o += x.nodeValue.length),
                  (N = x.firstChild) !== null;
              )
                ((y = x), (x = N));
              for (;;) {
                if (x === e) break t;
                if (
                  (y === n && ++h === l && (u = o),
                  y === i && ++w === r && (s = o),
                  (N = x.nextSibling) !== null)
                )
                  break;
                ((x = y), (y = x.parentNode));
              }
              x = N;
            }
            n = u === -1 || s === -1 ? null : { start: u, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (wi = { focusedElem: e, selectionRange: n }, Or = !1, C = t; C !== null;)
      if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (C = e));
      else
        for (; C !== null;) {
          t = C;
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
                      se = j.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? P : it(t.type, P),
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
          } catch (k) {
            oe(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (C = e));
            break;
          }
          C = t.return;
        }
    return ((j = ia), (ia = !1), j);
  }
  function vr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          ((l.destroy = void 0), i !== void 0 && oo(t, n, i));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function hl(e, t) {
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
  function uo(e) {
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
        t !== null && (delete t[pt], delete t[ir], delete t[Ei], delete t[pf], delete t[mf])),
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
  function sa(e) {
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
  function so(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Kr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (so(e, t, n), e = e.sibling; e !== null;) (so(e, t, n), (e = e.sibling));
  }
  function ao(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ao(e, t, n), e = e.sibling; e !== null;) (ao(e, t, n), (e = e.sibling));
  }
  var we = null,
    ot = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (aa(e, t, n), (n = n.sibling));
  }
  function aa(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Pr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ce || Rn(n, t);
      case 6:
        var r = we,
          l = ot;
        ((we = null),
          Vt(e, t, n),
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
              Xn(e))
            : Si(we, n.stateNode));
        break;
      case 4:
        ((r = we),
          (l = ot),
          (we = n.stateNode.containerInfo),
          (ot = !0),
          Vt(e, t, n),
          (we = r),
          (ot = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ce && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          l = r = r.next;
          do {
            var i = l,
              o = i.destroy;
            ((i = i.tag),
              o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && oo(n, t, o),
              (l = l.next));
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Ce && (Rn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (u) {
            oe(n, t, u);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ce = (r = Ce) || n.memoizedState !== null), Vt(e, t, n), (Ce = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ca(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Lf()),
        t.forEach(function (r) {
          var l = Hf.bind(null, e, r);
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
          (aa(i, o, l), (we = null), (ot = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (h) {
          oe(l, t, h);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) (fa(t, e), (t = t.sibling));
  }
  function fa(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ut(t, e), vt(e), r & 4)) {
          try {
            (vr(3, e, e.return), hl(3, e));
          } catch (P) {
            oe(e, e.return, P);
          }
          try {
            vr(5, e, e.return);
          } catch (P) {
            oe(e, e.return, P);
          }
        }
        break;
      case 1:
        (ut(t, e), vt(e), r & 512 && n !== null && Rn(n, n.return));
        break;
      case 5:
        if ((ut(t, e), vt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            Fn(l, "");
          } catch (P) {
            oe(e, e.return, P);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var i = e.memoizedProps,
            o = n !== null ? n.memoizedProps : i,
            u = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              (u === "input" && i.type === "radio" && i.name != null && Uo(l, i), Hl(u, o));
              var h = Hl(u, i);
              for (o = 0; o < s.length; o += 2) {
                var w = s[o],
                  x = s[o + 1];
                w === "style"
                  ? Yo(l, x)
                  : w === "dangerouslySetInnerHTML"
                    ? Qo(l, x)
                    : w === "children"
                      ? Fn(l, x)
                      : be(l, w, x, h);
              }
              switch (u) {
                case "input":
                  Il(l, i);
                  break;
                case "textarea":
                  Bo(l, i);
                  break;
                case "select":
                  var y = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!i.multiple;
                  var N = i.value;
                  N != null
                    ? fn(l, !!i.multiple, N, !1)
                    : y !== !!i.multiple &&
                      (i.defaultValue != null
                        ? fn(l, !!i.multiple, i.defaultValue, !0)
                        : fn(l, !!i.multiple, i.multiple ? [] : "", !1));
              }
              l[ir] = i;
            } catch (P) {
              oe(e, e.return, P);
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
            oe(e, e.return, P);
          }
        }
        break;
      case 3:
        if ((ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Xn(t.containerInfo);
          } catch (P) {
            oe(e, e.return, P);
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
            !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (po = ue())),
          r & 4 && ca(e));
        break;
      case 22:
        if (
          ((w = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ce = (h = Ce) || w), ut(t, e), (Ce = h)) : ut(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((h = e.memoizedState !== null), (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0)
          )
            for (C = e, w = e.child; w !== null;) {
              for (x = C = w; C !== null;) {
                switch (((y = C), (N = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vr(4, y, y.return);
                    break;
                  case 1:
                    Rn(y, y.return);
                    var j = y.stateNode;
                    if (typeof j.componentWillUnmount == "function") {
                      ((r = y), (n = y.return));
                      try {
                        ((t = r),
                          (j.props = t.memoizedProps),
                          (j.state = t.memoizedState),
                          j.componentWillUnmount());
                      } catch (P) {
                        oe(r, n, P);
                      }
                    }
                    break;
                  case 5:
                    Rn(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      ma(x);
                      continue;
                    }
                }
                N !== null ? ((N.return = y), (C = N)) : ma(x);
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
                        (u.style.display = Ko("display", o))));
                } catch (P) {
                  oe(e, e.return, P);
                }
              }
            } else if (x.tag === 6) {
              if (w === null)
                try {
                  x.stateNode.nodeValue = h ? "" : x.memoizedProps;
                } catch (P) {
                  oe(e, e.return, P);
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
        (ut(t, e), vt(e), r & 4 && ca(e));
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
            var i = sa(e);
            ao(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              u = sa(e);
            so(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        oe(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rf(e, t, n) {
    ((C = e), da(e));
  }
  function da(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
      var l = C,
        i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || ml;
        if (!o) {
          var u = l.alternate,
            s = (u !== null && u.memoizedState !== null) || Ce;
          u = ml;
          var h = Ce;
          if (((ml = o), (Ce = s) && !h))
            for (C = l; C !== null;)
              ((o = C),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? ha(l)
                  : s !== null
                    ? ((s.return = o), (C = s))
                    : ha(l));
          for (; i !== null;) ((C = i), da(i), (i = i.sibling));
          ((C = l), (ml = u), (Ce = h));
        }
        pa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? ((i.return = l), (C = i)) : pa(e);
    }
  }
  function pa(e) {
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
                Ce || hl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ce)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var i = t.updateQueue;
                i !== null && ms(t, i, r);
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
                  ms(t, o, n);
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
                      x !== null && Xn(x);
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
          Ce || (t.flags & 512 && uo(t));
        } catch (y) {
          oe(t, t.return, y);
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
  function ma(e) {
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
  function ha(e) {
    for (; C !== null;) {
      var t = C;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              hl(4, t);
            } catch (s) {
              oe(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                oe(t, l, s);
              }
            }
            var i = t.return;
            try {
              uo(t);
            } catch (s) {
              oe(t, i, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              uo(t);
            } catch (s) {
              oe(t, o, s);
            }
        }
      } catch (s) {
        oe(t, t.return, s);
      }
      if (t === e) {
        C = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        ((u.return = t.return), (C = u));
        break;
      }
      C = t.return;
    }
  }
  var Mf = Math.ceil,
    vl = ke.ReactCurrentDispatcher,
    co = ke.ReactCurrentOwner,
    Ze = ke.ReactCurrentBatchConfig,
    H = 0,
    ve = null,
    fe = null,
    xe = 0,
    $e = 0,
    Mn = Dt(0),
    pe = 0,
    yr = null,
    ln = 0,
    yl = 0,
    fo = 0,
    gr = null,
    Oe = null,
    po = 0,
    On = 1 / 0,
    _t = null,
    gl = !1,
    mo = null,
    Bt = null,
    wl = !1,
    $t = null,
    xl = 0,
    wr = 0,
    ho = null,
    kl = -1,
    Sl = 0;
  function Pe() {
    return (H & 6) !== 0 ? ue() : kl !== -1 ? kl : (kl = ue());
  }
  function Wt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (H & 2) !== 0 && xe !== 0
        ? xe & -xe
        : vf.transition !== null
          ? (Sl === 0 && (Sl = su()), Sl)
          : ((e = K), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : yu(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < wr) throw ((wr = 0), (ho = null), Error(m(185)));
    ($n(e, n, r),
      ((H & 2) === 0 || e !== ve) &&
        (e === ve && ((H & 2) === 0 && (yl |= n), pe === 4 && Qt(e, xe)),
        Ie(e, r),
        n === 1 && H === 0 && (t.mode & 1) === 0 && ((On = ue() + 500), qr && At())));
  }
  function Ie(e, t) {
    var n = e.callbackNode;
    hc(e, t);
    var r = Tr(e, e === ve ? xe : 0);
    if (r === 0) (n !== null && iu(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && iu(n), t === 1))
        (e.tag === 0 ? hf(ya.bind(null, e)) : ns(ya.bind(null, e)),
          ff(function () {
            (H & 6) === 0 && At();
          }),
          (n = null));
      else {
        switch (au(r)) {
          case 1:
            n = Yl;
            break;
          case 4:
            n = ou;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = uu;
            break;
          default:
            n = jr;
        }
        n = Ca(n, va.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function va(e, t) {
    if (((kl = -1), (Sl = 0), (H & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (In() && e.callbackNode !== n) return null;
    var r = Tr(e, e === ve ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = El(e, r);
    else {
      t = r;
      var l = H;
      H |= 2;
      var i = wa();
      (ve !== e || xe !== t) && ((_t = null), (On = ue() + 500), un(e, t));
      do
        try {
          Df();
          break;
        } catch (u) {
          ga(e, u);
        }
      while (!0);
      (Ri(), (vl.current = i), (H = l), fe !== null ? (t = 0) : ((ve = null), (xe = 0), (t = pe)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Xl(e)), l !== 0 && ((r = l), (t = vo(e, l)))), t === 1))
        throw ((n = yr), un(e, 0), Qt(e, r), Ie(e, ue()), n);
      if (t === 6) Qt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Of(l) &&
            ((t = El(e, r)),
            t === 2 && ((i = Xl(e)), i !== 0 && ((r = i), (t = vo(e, i)))),
            t === 1))
        )
          throw ((n = yr), un(e, 0), Qt(e, r), Ie(e, ue()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            sn(e, Oe, _t);
            break;
          case 3:
            if ((Qt(e, r), (r & 130023424) === r && ((t = po + 500 - ue()), 10 < t))) {
              if (Tr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ki(sn.bind(null, e, Oe, _t), t);
              break;
            }
            sn(e, Oe, _t);
            break;
          case 4:
            if ((Qt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var o = 31 - nt(r);
              ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
            }
            if (
              ((r = l),
              (r = ue() - r),
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
                            : 1960 * Mf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ki(sn.bind(null, e, Oe, _t), r);
              break;
            }
            sn(e, Oe, _t);
            break;
          case 5:
            sn(e, Oe, _t);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Ie(e, ue()), e.callbackNode === n ? va.bind(null, e) : null);
  }
  function vo(e, t) {
    var n = gr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = El(e, t)),
      e !== 2 && ((t = Oe), (Oe = n), t !== null && yo(t)),
      e
    );
  }
  function yo(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function Of(e) {
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
  function Qt(e, t) {
    for (
      t &= ~fo, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function ya(e) {
    if ((H & 6) !== 0) throw Error(m(327));
    In();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return (Ie(e, ue()), null);
    var n = El(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Xl(e);
      r !== 0 && ((t = r), (n = vo(e, r)));
    }
    if (n === 1) throw ((n = yr), un(e, 0), Qt(e, t), Ie(e, ue()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      sn(e, Oe, _t),
      Ie(e, ue()),
      null
    );
  }
  function go(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      ((H = n), H === 0 && ((On = ue() + 500), qr && At()));
    }
  }
  function on(e) {
    $t !== null && $t.tag === 0 && (H & 6) === 0 && In();
    var t = H;
    H |= 1;
    var n = Ze.transition,
      r = K;
    try {
      if (((Ze.transition = null), (K = 1), e)) return e();
    } finally {
      ((K = r), (Ze.transition = n), (H = t), (H & 6) === 0 && At());
    }
  }
  function wo() {
    (($e = Mn.current), Z(Mn));
  }
  function un(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), cf(n)), fe !== null))
      for (n = fe.return; n !== null;) {
        var r = n;
        switch ((ji(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Xr());
            break;
          case 3:
            (Ln(), Z(Te), Z(Se), Hi());
            break;
          case 5:
            Ai(r);
            break;
          case 4:
            Ln();
            break;
          case 13:
            Z(re);
            break;
          case 19:
            Z(re);
            break;
          case 10:
            Mi(r.type._context);
            break;
          case 22:
          case 23:
            wo();
        }
        n = n.return;
      }
    if (
      ((ve = e),
      (fe = e = Kt(e.current, null)),
      (xe = $e = t),
      (pe = 0),
      (yr = null),
      (fo = yl = ln = 0),
      (Oe = gr = null),
      tn !== null)
    ) {
      for (t = 0; t < tn.length; t++)
        if (((n = tn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            i = n.pending;
          if (i !== null) {
            var o = i.next;
            ((i.next = l), (r.next = o));
          }
          n.pending = r;
        }
      tn = null;
    }
    return e;
  }
  function ga(e, t) {
    do {
      var n = fe;
      try {
        if ((Ri(), (ol.current = cl), ul)) {
          for (var r = le.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ul = !1;
        }
        if (
          ((rn = 0),
          (he = de = le = null),
          (fr = !1),
          (dr = 0),
          (co.current = null),
          n === null || n.return === null)
        ) {
          ((pe = 1), (yr = t), (fe = null));
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
              var y = w.alternate;
              y
                ? ((w.updateQueue = y.updateQueue),
                  (w.memoizedState = y.memoizedState),
                  (w.lanes = y.lanes))
                : ((w.updateQueue = null), (w.memoizedState = null));
            }
            var N = $s(o);
            if (N !== null) {
              ((N.flags &= -257), Ws(N, o, u, i, t), N.mode & 1 && Bs(i, h, t), (t = N), (s = h));
              var j = t.updateQueue;
              if (j === null) {
                var P = new Set();
                (P.add(s), (t.updateQueue = P));
              } else j.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Bs(i, h, t), xo());
                break e;
              }
              s = Error(m(426));
            }
          } else if (te && u.mode & 1) {
            var se = $s(o);
            if (se !== null) {
              ((se.flags & 65536) === 0 && (se.flags |= 256), Ws(se, o, u, i, t), Li(Tn(s, u)));
              break e;
            }
          }
          ((i = s = Tn(s, u)),
            pe !== 4 && (pe = 2),
            gr === null ? (gr = [i]) : gr.push(i),
            (i = o));
          do {
            switch (i.tag) {
              case 3:
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var f = Hs(i, s, t);
                ps(i, f);
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
                      (Bt === null || !Bt.has(d))))
                ) {
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var k = Vs(i, u, t);
                  ps(i, k);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ka(n);
      } catch (z) {
        ((t = z), fe === n && n !== null && (fe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function wa() {
    var e = vl.current;
    return ((vl.current = cl), e === null ? cl : e);
  }
  function xo() {
    ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
      ve === null || ((ln & 268435455) === 0 && (yl & 268435455) === 0) || Qt(ve, xe));
  }
  function El(e, t) {
    var n = H;
    H |= 2;
    var r = wa();
    (ve !== e || xe !== t) && ((_t = null), un(e, t));
    do
      try {
        If();
        break;
      } catch (l) {
        ga(e, l);
      }
    while (!0);
    if ((Ri(), (H = n), (vl.current = r), fe !== null)) throw Error(m(261));
    return ((ve = null), (xe = 0), pe);
  }
  function If() {
    for (; fe !== null;) xa(fe);
  }
  function Df() {
    for (; fe !== null && !oc();) xa(fe);
  }
  function xa(e) {
    var t = Na(e.alternate, e, $e);
    ((e.memoizedProps = e.pendingProps), t === null ? ka(e) : (fe = t), (co.current = null));
  }
  function ka(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Pf(n, t, $e)), n !== null)) {
          fe = n;
          return;
        }
      } else {
        if (((n = zf(n, t)), n !== null)) {
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
      l = Ze.transition;
    try {
      ((Ze.transition = null), (K = 1), Ff(e, t, n, r));
    } finally {
      ((Ze.transition = l), (K = r));
    }
    return null;
  }
  function Ff(e, t, n, r) {
    do In();
    while ($t !== null);
    if ((H & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var i = n.lanes | n.childLanes;
    if (
      (vc(e, i),
      e === ve && ((fe = ve = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        wl ||
        ((wl = !0),
        Ca(jr, function () {
          return (In(), null);
        })),
      (i = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || i)
    ) {
      ((i = Ze.transition), (Ze.transition = null));
      var o = K;
      K = 1;
      var u = H;
      ((H |= 4),
        (co.current = null),
        Tf(e, n),
        fa(n, e),
        nf(wi),
        (Or = !!gi),
        (wi = gi = null),
        (e.current = n),
        Rf(n),
        uc(),
        (H = u),
        (K = o),
        (Ze.transition = i));
    } else e.current = n;
    if (
      (wl && ((wl = !1), ($t = e), (xl = l)),
      (i = e.pendingLanes),
      i === 0 && (Bt = null),
      cc(n.stateNode),
      Ie(e, ue()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (gl) throw ((gl = !1), (e = mo), (mo = null), e);
    return (
      (xl & 1) !== 0 && e.tag !== 0 && In(),
      (i = e.pendingLanes),
      (i & 1) !== 0 ? (e === ho ? wr++ : ((wr = 0), (ho = e))) : (wr = 0),
      At(),
      null
    );
  }
  function In() {
    if ($t !== null) {
      var e = au(xl),
        t = Ze.transition,
        n = K;
      try {
        if (((Ze.transition = null), (K = 16 > e ? 16 : e), $t === null)) var r = !1;
        else {
          if (((e = $t), ($t = null), (xl = 0), (H & 6) !== 0)) throw Error(m(331));
          var l = H;
          for (H |= 4, C = e.current; C !== null;) {
            var i = C,
              o = i.child;
            if ((C.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var s = 0; s < u.length; s++) {
                  var h = u[s];
                  for (C = h; C !== null;) {
                    var w = C;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vr(8, w, i);
                    }
                    var x = w.child;
                    if (x !== null) ((x.return = w), (C = x));
                    else
                      for (; C !== null;) {
                        w = C;
                        var y = w.sibling,
                          N = w.return;
                        if ((oa(w), w === h)) {
                          C = null;
                          break;
                        }
                        if (y !== null) {
                          ((y.return = N), (C = y));
                          break;
                        }
                        C = N;
                      }
                  }
                }
                var j = i.alternate;
                if (j !== null) {
                  var P = j.child;
                  if (P !== null) {
                    j.child = null;
                    do {
                      var se = P.sibling;
                      ((P.sibling = null), (P = se));
                    } while (P !== null);
                  }
                }
                C = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) ((o.return = i), (C = o));
            else
              e: for (; C !== null;) {
                if (((i = C), (i.flags & 2048) !== 0))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(9, i, i.return);
                  }
                var f = i.sibling;
                if (f !== null) {
                  ((f.return = i.return), (C = f));
                  break e;
                }
                C = i.return;
              }
          }
          var a = e.current;
          for (C = a; C !== null;) {
            o = C;
            var d = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && d !== null) ((d.return = o), (C = d));
            else
              e: for (o = a; C !== null;) {
                if (((u = C), (u.flags & 2048) !== 0))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        hl(9, u);
                    }
                  } catch (z) {
                    oe(u, u.return, z);
                  }
                if (u === o) {
                  C = null;
                  break e;
                }
                var k = u.sibling;
                if (k !== null) {
                  ((k.return = u.return), (C = k));
                  break e;
                }
                C = u.return;
              }
          }
          if (((H = l), At(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Pr, e);
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
  function Sa(e, t, n) {
    ((t = Tn(n, t)),
      (t = Hs(e, t, 1)),
      (e = Ht(e, t, 1)),
      (t = Pe()),
      e !== null && ($n(e, 1, t), Ie(e, t)));
  }
  function oe(e, t, n) {
    if (e.tag === 3) Sa(e, e, n);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Sa(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" && (Bt === null || !Bt.has(r)))
          ) {
            ((e = Tn(n, e)),
              (e = Vs(t, e, 1)),
              (t = Ht(t, e, 1)),
              (e = Pe()),
              t !== null && ($n(t, 1, e), Ie(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Af(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Pe()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ve === e &&
        (xe & n) === n &&
        (pe === 4 || (pe === 3 && (xe & 130023424) === xe && 500 > ue() - po)
          ? un(e, 0)
          : (fo |= n)),
      Ie(e, t));
  }
  function Ea(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Lr), (Lr <<= 1), (Lr & 130023424) === 0 && (Lr = 4194304)));
    var n = Pe();
    ((e = Et(e, t)), e !== null && ($n(e, t, n), Ie(e, n)));
  }
  function Uf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ea(e, n));
  }
  function Hf(e, t) {
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
    (r !== null && r.delete(t), Ea(e, n));
  }
  var Na;
  Na = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Te.current) Me = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Me = !1), jf(e, t, n));
        Me = (e.flags & 131072) !== 0;
      }
    else ((Me = !1), te && (t.flags & 1048576) !== 0 && rs(t, Jr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (pl(e, t), (e = t.pendingProps));
        var l = En(t, Se.current);
        (zn(t, n), (l = $i(null, t, r, e, l, n)));
        var i = Wi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Re(r) ? ((i = !0), Gr(t)) : (i = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Di(t),
              (l.updater = fl),
              (t.stateNode = l),
              (l._reactInternals = t),
              qi(t, r, e, n),
              (t = eo(null, t, r, !0, i, n)))
            : ((t.tag = 0), te && i && _i(t), je(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (pl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Bf(r)),
            (e = it(r, e)),
            l)
          ) {
            case 0:
              t = bi(null, t, r, e, n);
              break e;
            case 1:
              t = qs(null, t, r, e, n);
              break e;
            case 11:
              t = Qs(null, t, r, e, n);
              break e;
            case 14:
              t = Ks(null, t, r, it(r.type, e), n);
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
          bi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          qs(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Zs(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (i = t.memoizedState),
            (l = i.element),
            ds(e, t),
            ll(t, r, null, n));
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
              ((l = Tn(Error(m(423)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = Tn(Error(m(424)), t)), (t = Js(e, t, r, n, l)));
              break e;
            } else
              for (
                Be = It(t.stateNode.containerInfo.firstChild),
                  Ve = t,
                  te = !0,
                  lt = null,
                  n = cs(t, null, r, n),
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
          hs(t),
          e === null && zi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          xi(r, l) ? (o = null) : i !== null && xi(r, i) && (t.flags |= 32),
          Gs(e, t),
          je(e, t, o, n),
          t.child
        );
      case 6:
        return (e === null && zi(t), null);
      case 13:
        return bs(e, t, n);
      case 4:
        return (
          Fi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jn(t, null, r, n)) : je(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          Qs(e, t, r, l, n)
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
            G(tl, r._currentValue),
            (r._currentValue = o),
            i !== null)
          )
            if (rt(i.value, o)) {
              if (i.children === l.children && !Te.current) {
                t = Ct(e, t, n);
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
                        Oi(i.return, n, t),
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
                    Oi(o, n, t),
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
          zn(t, n),
          (l = Ge(l)),
          (r = r(l)),
          (t.flags |= 1),
          je(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = it(r, t.pendingProps)), (l = it(r.type, l)), Ks(e, t, r, l, n));
      case 15:
        return Ys(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : it(r, l)),
          pl(e, t),
          (t.tag = 1),
          Re(r) ? ((e = !0), Gr(t)) : (e = !1),
          zn(t, n),
          As(t, r, l),
          qi(t, r, l, n),
          eo(null, t, r, !0, e, n)
        );
      case 19:
        return ta(e, t, n);
      case 22:
        return Xs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function Ca(e, t) {
    return lu(e, t);
  }
  function Vf(e, t, n, r) {
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
    return new Vf(e, t, n, r);
  }
  function ko(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Bf(e) {
    if (typeof e == "function") return ko(e) ? 1 : 0;
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
  function Nl(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) ko(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case ze:
          return an(n.children, l, i, t);
        case Ke:
          ((o = 8), (l |= 8));
          break;
        case Pt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = i), e);
        case Ae:
          return ((e = Je(13, n, t, l)), (e.elementType = Ae), (e.lanes = i), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = i), e);
        case ie:
          return Cl(n, l, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gt:
                o = 10;
                break e;
              case Gt:
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
  function an(e, t, n, r) {
    return ((e = Je(7, e, r, t)), (e.lanes = n), e);
  }
  function Cl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function So(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function Eo(e, t, n) {
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
  function $f(e, t, n, r, l) {
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
  function No(e, t, n, r, l, i, o, u, s) {
    return (
      (e = new $f(e, t, n, u, s)),
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
      Di(i),
      e
    );
  }
  function Wf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: _e,
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
      if (qt(e) !== e || e.tag !== 1) throw Error(m(170));
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
      if (Re(n)) return es(e, n, t);
    }
    return t;
  }
  function ja(e, t, n, r, l, i, o, u, s) {
    return (
      (e = No(n, r, !0, e, l, i, o, u, s)),
      (e.context = _a(null)),
      (n = e.current),
      (r = Pe()),
      (l = Wt(n)),
      (i = Nt(r, l)),
      (i.callback = t ?? null),
      Ht(n, i, l),
      (e.current.lanes = l),
      $n(e, l, r),
      Ie(e, r),
      e
    );
  }
  function _l(e, t, n, r) {
    var l = t.current,
      i = Pe(),
      o = Wt(l);
    return (
      (n = _a(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nt(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ht(l, t, o)),
      e !== null && (st(e, l, o, i), rl(e, l, o)),
      o
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
  function Co(e, t) {
    (Pa(e, t), (e = e.alternate) && Pa(e, t));
  }
  function Qf() {
    return null;
  }
  var za =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _o(e) {
    this._internalRoot = e;
  }
  ((Pl.prototype.render = _o.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      _l(e, t, null, null);
    }),
    (Pl.prototype.unmount = _o.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (on(function () {
            _l(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function Pl(e) {
    this._internalRoot = e;
  }
  Pl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = du();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
      (Rt.splice(n, 0, e), n === 0 && hu(e));
    }
  };
  function jo(e) {
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
  function La() {}
  function Kf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var h = jl(o);
          i.call(h);
        };
      }
      var o = ja(t, r, e, 0, null, !1, !1, "", La);
      return (
        (e._reactRootContainer = o),
        (e[wt] = o.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        on(),
        o
      );
    }
    for (; (l = e.lastChild);) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var h = jl(s);
        u.call(h);
      };
    }
    var s = No(e, 0, !1, null, null, !1, !1, "", La);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      rr(e.nodeType === 8 ? e.parentNode : e),
      on(function () {
        _l(t, s, n, r);
      }),
      s
    );
  }
  function Ll(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function () {
          var s = jl(o);
          u.call(s);
        };
      }
      _l(t, o, e, l);
    } else o = Kf(n, t, e, l, r);
    return jl(o);
  }
  ((cu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (ql(t, n | 1), Ie(t, ue()), (H & 6) === 0 && ((On = ue() + 500), At()));
        }
        break;
      case 13:
        (on(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = Pe();
            st(r, e, 1, l);
          }
        }),
          Co(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Pe();
          st(t, e, 134217728, n);
        }
        Co(e, 134217728);
      }
    }),
    (fu = function (e) {
      if (e.tag === 13) {
        var t = Wt(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Pe();
          st(n, e, t, r);
        }
        Co(e, t);
      }
    }),
    (du = function () {
      return K;
    }),
    (pu = function (e, t) {
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
                var l = Yr(r);
                if (!l) throw Error(m(90));
                (Fo(r), Il(r, l));
              }
            }
          }
          break;
        case "textarea":
          Bo(e, n);
          break;
        case "select":
          ((t = n.value), t != null && fn(e, !!n.multiple, t, !1));
      }
    }),
    (Zo = go),
    (Jo = on));
  var Yf = { usingClientEntryPoint: !1, Events: [or, kn, Yr, Go, qo, go] },
    xr = {
      findFiberByHostInstance: Zt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Xf = {
      bundleType: xr.bundleType,
      version: xr.version,
      rendererPackageName: xr.rendererPackageName,
      rendererConfig: xr.rendererConfig,
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
        return ((e = nu(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: xr.findFiberByHostInstance || Qf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber)
      try {
        ((Pr = Tl.inject(Xf)), (dt = Tl));
      } catch {}
  }
  return (
    (De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yf),
    (De.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jo(t)) throw Error(m(200));
      return Wf(e, t, null, n);
    }),
    (De.createRoot = function (e, t) {
      if (!jo(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = za;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = No(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        rr(e.nodeType === 8 ? e.parentNode : e),
        new _o(t)
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
      return ((e = nu(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (De.flushSync = function (e) {
      return on(e);
    }),
    (De.hydrate = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return Ll(null, e, t, !0, n);
    }),
    (De.hydrateRoot = function (e, t, n) {
      if (!jo(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        i = "",
        o = za;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = ja(t, null, e, 1, n ?? null, l, !1, i, o)),
        (e[wt] = t.current),
        rr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new Pl(t);
    }),
    (De.render = function (e, t, n) {
      if (!zl(t)) throw Error(m(200));
      return Ll(null, e, t, !1, n);
    }),
    (De.unmountComponentAtNode = function (e) {
      if (!zl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (on(function () {
            Ll(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (De.unstable_batchedUpdates = go),
    (De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!zl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Ll(e, t, n, !1, r);
    }),
    (De.version = "18.3.1-next-f1338f8080-20240426"),
    De
  );
}
var Aa;
function nd() {
  if (Aa) return Lo.exports;
  Aa = 1;
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
  return (v(), (Lo.exports = td()), Lo.exports);
}
var Ua;
function rd() {
  if (Ua) return Rl;
  Ua = 1;
  var v = nd();
  return ((Rl.createRoot = v.createRoot), (Rl.hydrateRoot = v.hydrateRoot), Rl);
}
var ld = rd();
function Ba(v) {
  return `#${v}`;
}
function $a(v) {
  const S = v.replace(/^\//, "").replace(/\/$/, "");
  return S ? `#/${S}` : "#/";
}
function Io(v) {
  const S = (typeof window < "u" ? window.location.hash : "").replace(/^#/, "");
  return S
    ? S.startsWith("/")
      ? { kind: "route", path: S.replace(/^\//, "").replace(/\/$/, "") }
      : { kind: "section", id: S }
    : null;
}
function Do(v, S = "smooth") {
  if (typeof document > "u") return !1;
  const m = document.getElementById(v);
  return m ? (m.scrollIntoView({ behavior: S, block: "start" }), !0) : !1;
}
function id(v, S = "smooth") {
  if (typeof window > "u") return;
  const m = Ba(v);
  if (Do(v, S)) {
    window.history.replaceState(null, "", m);
    return;
  }
  window.location.hash = m;
}
function od(v) {
  typeof window > "u" || (window.location.hash = $a(v));
}
function Wa() {
  const v = Io();
  return (v == null ? void 0 : v.kind) === "route" ? v.path : "";
}
function ud(v) {
  return v.kind === "route" ? $a(v.path) : Ba(v.id);
}
function sd(v, S) {
  if ((v.preventDefault(), S.kind === "route")) {
    od(S.path);
    return;
  }
  id(S.id);
}
function Qa() {
  if (typeof window > "u") return;
  const v = Io();
  (v == null ? void 0 : v.kind) === "section" && requestAnimationFrame(() => Do(v.id, "auto"));
}
function Ka(v, S) {
  if (typeof window > "u") return () => {};
  const m = () => {
    const M = Io();
    if (!M) {
      v("");
      return;
    }
    if (M.kind === "route") {
      v(M.path);
      return;
    }
    (Do(M.id, "smooth"), v(""));
  };
  return (
    m(),
    window.addEventListener("hashchange", m),
    () => window.removeEventListener("hashchange", m)
  );
}
function ad(v = "") {
  const [S, m] = Fe.useState(() => (typeof window < "u" ? Wa() : v));
  return (Fe.useEffect(() => Ka(m), []), S || v);
}
function cd({ routes: v, defaultRoute: S = "", className: m }) {
  const M = ad(S);
  Fe.useEffect(() => {
    Qa();
  }, []);
  const L = M in v ? M : S,
    U = v[L] ?? v[S];
  return p.jsx("div", { className: m, children: U });
}
function jt({ target: v, children: S, className: m, onClick: M, ...L }) {
  return p.jsx("a", {
    href: ud(v),
    className: m,
    onClick: (U) => {
      (sd(U, v), M == null || M(U));
    },
    ...L,
    children: S,
  });
}
const fd =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4",
  Mo = [
    { label: "Solutions", path: "solutions" },
    { label: "For Teams", path: "for-teams" },
    { label: "About", path: "about" },
    { label: "Learn Hub", path: "learn-hub" },
    { label: "Pricing", path: "pricing" },
    { label: "Contact", path: "contact" },
  ],
  Ha = [
    {
      id: "insights",
      label: "Insights",
      eyebrow: "Real-time intelligence",
      title: "See every signal in one orbit",
      description:
        "Live dashboards surface model drift, spend, and quality without leaving the canvas.",
      stats: [
        { label: "Latency", value: "42ms" },
        { label: "Accuracy", value: "99.2%" },
        { label: "Uptime", value: "99.99%" },
      ],
    },
    {
      id: "teams",
      label: "Teams",
      eyebrow: "Collaborative control",
      title: "Ship together across every squad",
      description:
        "Shared workspaces, review gates, and role-aware prompts keep humans in the loop.",
      stats: [
        { label: "Members", value: "128" },
        { label: "Reviews", value: "2.4k" },
        { label: "Ship rate", value: "+38%" },
      ],
    },
    {
      id: "pipelines",
      label: "Pipelines",
      eyebrow: "Production flows",
      title: "Orchestrate agents end to end",
      description: "Visual pipelines chain tools, memory, and guardrails with one-click deploy.",
      stats: [
        { label: "Steps", value: "12" },
        { label: "Runs/day", value: "8.1k" },
        { label: "Cost", value: "-24%" },
      ],
    },
    {
      id: "guardrails",
      label: "Guardrails",
      eyebrow: "Enterprise safety",
      title: "Policy layers that never sleep",
      description:
        "PII filters, audit trails, and compliance templates ship with every environment.",
      stats: [
        { label: "Policies", value: "64" },
        { label: "Blocks", value: "0" },
        { label: "SOC2", value: "Ready" },
      ],
    },
  ],
  Va = [
    "Anthropic",
    "Databricks",
    "Stripe",
    "Notion",
    "Linear",
    "Vercel",
    "Ramp",
    "Figma",
    "Snowflake",
    "OpenAI",
  ];
function Ya() {
  return p.jsx("footer", {
    className: "border-t border-white/5 bg-[#04050c] px-4 py-14 sm:px-8 md:px-12",
    children: p.jsxs("div", {
      className:
        "mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between",
      children: [
        p.jsxs("div", {
          children: [
            p.jsxs("p", {
              className: "font-display text-2xl font-semibold tracking-tight",
              children: ["Stellar", p.jsx("span", { className: "text-white/40", children: ".ai" })],
            }),
            p.jsxs("p", {
              className: "mt-2 max-w-sm text-sm text-white/45",
              children: [
                "Ship production AI with confidence. © ",
                new Date().getFullYear(),
                " Stellar Labs.",
              ],
            }),
          ],
        }),
        p.jsx("nav", {
          className: "flex flex-wrap gap-6",
          children: Mo.map((v) =>
            p.jsx(
              jt,
              {
                target: { kind: "route", path: v.path },
                className: "text-sm text-white/50 transition-colors hover:text-white",
                children: v.label,
              },
              v.path,
            ),
          ),
        }),
        p.jsx(jt, {
          target: { kind: "route", path: "pricing" },
          className:
            "inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90",
          children: "Start free trial",
        }),
      ],
    }),
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dd = (v) => v.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Xa = (...v) =>
    v
      .filter((S, m, M) => !!S && S.trim() !== "" && M.indexOf(S) === m)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var pd = {
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
 */ const md = Fe.forwardRef(
  (
    {
      color: v = "currentColor",
      size: S = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: M,
      className: L = "",
      children: U,
      iconNode: ae,
      ...ce
    },
    W,
  ) =>
    Fe.createElement(
      "svg",
      {
        ref: W,
        ...pd,
        width: S,
        height: S,
        stroke: v,
        strokeWidth: M ? (Number(m) * 24) / Number(S) : m,
        className: Xa("lucide", L),
        ...ce,
      },
      [...ae.map(([ge, me]) => Fe.createElement(ge, me)), ...(Array.isArray(U) ? U : [U])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xt = (v, S) => {
  const m = Fe.forwardRef(({ className: M, ...L }, U) =>
    Fe.createElement(md, { ref: U, iconNode: S, className: Xa(`lucide-${dd(v)}`, M), ...L }),
  );
  return ((m.displayName = `${v}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hd = Xt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ga = Xt("BookOpen", [
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
 */ const qa = Xt("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Za = Xt("Layers", [
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
 */ const vd = Xt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yd = Xt("Sparkles", [
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
 */ const Ja = Xt("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gd = Xt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function wd() {
  const [v, S] = Fe.useState(!1),
    [m, M] = Fe.useState("");
  return (
    Fe.useEffect(() => (M(Wa()), Ka(M)), []),
    p.jsxs("header", {
      className: "fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 md:px-12",
      children: [
        p.jsxs("div", {
          className: "mx-auto flex max-w-7xl items-center justify-between gap-4",
          children: [
            p.jsxs(jt, {
              target: { kind: "route", path: "" },
              className: "flex items-center gap-2.5",
              children: [
                p.jsx("span", {
                  className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/10",
                  children: p.jsx(yd, { className: "h-4 w-4 text-violet-300", strokeWidth: 1.5 }),
                }),
                p.jsxs("span", {
                  className: "font-display text-lg font-semibold tracking-tight",
                  children: [
                    "Stellar",
                    p.jsx("span", { className: "text-white/50", children: ".ai" }),
                  ],
                }),
              ],
            }),
            p.jsx("nav", {
              className: "liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex",
              "aria-label": "Primary",
              children: Mo.map((L) =>
                p.jsx(
                  jt,
                  {
                    target: { kind: "route", path: L.path },
                    className: `rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white ${m === L.path ? "bg-white/10 text-white" : "text-white/75"}`,
                    children: L.label,
                  },
                  L.path,
                ),
              ),
            }),
            p.jsxs("div", {
              className: "hidden items-center gap-3 md:flex",
              children: [
                p.jsx(jt, {
                  target: { kind: "route", path: "learn-hub" },
                  className: "text-sm font-medium text-white/60 transition-colors hover:text-white",
                  children: "Sign in",
                }),
                p.jsx(jt, {
                  target: { kind: "route", path: "pricing" },
                  className:
                    "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90",
                  children: "Get started",
                }),
              ],
            }),
            p.jsx("button", {
              type: "button",
              className:
                "liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden",
              onClick: () => S((L) => !L),
              "aria-label": v ? "Close menu" : "Open menu",
              children: v
                ? p.jsx(gd, { className: "h-5 w-5" })
                : p.jsx(vd, { className: "h-5 w-5" }),
            }),
          ],
        }),
        v &&
          p.jsxs("nav", {
            className:
              "liquid-glass mx-auto mt-3 flex max-w-7xl flex-col gap-1 rounded-2xl p-3 md:hidden",
            "aria-label": "Mobile",
            children: [
              Mo.map((L) =>
                p.jsx(
                  jt,
                  {
                    target: { kind: "route", path: L.path },
                    className:
                      "rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/5",
                    onClick: () => S(!1),
                    children: L.label,
                  },
                  L.path,
                ),
              ),
              p.jsx(jt, {
                target: { kind: "route", path: "pricing" },
                className:
                  "mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-black",
                onClick: () => S(!1),
                children: "Get started",
              }),
            ],
          }),
      ],
    })
  );
}
function cn({ children: v }) {
  return p.jsxs("div", {
    className: "min-h-screen bg-[#060812] text-white",
    children: [p.jsx(wd, {}), p.jsx("main", { children: v }), p.jsx(Ya, {})],
  });
}
const xd = {
  solutions: {
    id: "solutions",
    icon: Za,
    eyebrow: "Solutions",
    title: "One platform for every AI workload",
    body: "From retrieval pipelines to autonomous agents, Stellar.ai unifies prototyping, evaluation, and production deploys. Swap models without rewriting orchestration—version prompts, compare runs, and promote winners in a single control plane.",
    bullets: ["Model routing & fallbacks", "Eval suites & regression gates", "Multi-region deploy"],
  },
  "for-teams": {
    id: "for-teams",
    icon: Ja,
    eyebrow: "For Teams",
    title: "Built for cross-functional shipping",
    body: "Engineers, PMs, and operators share live canvases with comment threads, approval flows, and environment-scoped secrets. Every change is attributable—no more shadow prompts in spreadsheets.",
    bullets: ["Role-based workspaces", "Review & sign-off flows", "Slack & Linear integrations"],
  },
  about: {
    id: "about",
    icon: qa,
    eyebrow: "About",
    title: "We believe intelligence should feel inevitable",
    body: "Stellar.ai started in 2024 with a simple thesis: production AI deserves the same craft as consumer software. Today we power mission-critical workflows for teams who refuse to trade safety for speed.",
    bullets: [
      "HQ in San Francisco",
      "Backed by leading infra investors",
      "SOC2 Type II in progress",
    ],
  },
  "learn-hub": {
    id: "learn-hub",
    icon: Ga,
    eyebrow: "Learn Hub",
    title: "Guides, patterns, and office hours",
    body: "Explore playbooks for agent design, cost optimization, and governance templates. Weekly office hours with our solutions architects—free for every workspace on Pro and above.",
    bullets: ["Agent cookbook", "Cost playbook", "Compliance templates"],
  },
};
function Ml({ sectionKey: v }) {
  const S = xd[v],
    m = S.icon;
  return p.jsx("section", {
    id: S.id,
    className:
      "scroll-mt-24 border-t border-white/5 bg-[#060812] px-4 py-20 sm:px-8 md:px-12 md:py-28",
    children: p.jsxs("div", {
      className: "mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16",
      children: [
        p.jsxs("div", {
          children: [
            p.jsx("p", {
              className:
                "animate-fade-in-up text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80",
              children: S.eyebrow,
            }),
            p.jsx("h2", {
              className:
                "animate-fade-in-up mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl",
              children: S.title,
            }),
            p.jsx("p", {
              className:
                "animate-fade-in-up mt-4 text-base leading-relaxed text-white/55 md:text-lg",
              children: S.body,
            }),
            p.jsx("ul", {
              className: "animate-fade-in-up mt-6 space-y-2",
              children: S.bullets.map((M) =>
                p.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2 text-sm text-white/70",
                    children: [
                      p.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-violet-400" }),
                      M,
                    ],
                  },
                  M,
                ),
              ),
            }),
          ],
        }),
        p.jsxs("div", {
          className:
            "animate-fade-in-up liquid-glass flex aspect-[4/3] flex-col items-center justify-center rounded-3xl p-8",
          children: [
            p.jsx(m, { className: "h-12 w-12 text-violet-300/80", strokeWidth: 1.25 }),
            p.jsxs("p", {
              className: "mt-4 text-center text-sm text-white/45",
              children: [S.eyebrow, " preview panel"],
            }),
          ],
        }),
      ],
    }),
  });
}
function kd() {
  return p.jsx(cn, { children: p.jsx(Ml, { sectionKey: "about" }) });
}
function Sd() {
  return p.jsx(cn, {
    children: p.jsx("section", {
      className: "scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28",
      children: p.jsxs("div", {
        className: "mx-auto max-w-xl",
        children: [
          p.jsx("p", {
            className: "text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80",
            children: "Contact",
          }),
          p.jsx("h2", {
            className: "mt-3 font-display text-3xl font-semibold tracking-tight text-white",
            children: "Talk with Stellar.ai",
          }),
          p.jsx("p", {
            className: "mt-4 text-white/55",
            children: "hello@stellar.ai · Solutions team responds within one business day.",
          }),
          p.jsxs("form", {
            className: "mt-8 space-y-4",
            onSubmit: (v) => v.preventDefault(),
            children: [
              p.jsx("input", {
                type: "email",
                placeholder: "Work email",
                className:
                  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50",
              }),
              p.jsx("textarea", {
                rows: 4,
                placeholder: "Tell us about your AI stack…",
                className:
                  "w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50",
              }),
              p.jsx("button", {
                type: "submit",
                className:
                  "rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90",
                children: "Request demo",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Ed() {
  return p.jsx(cn, { children: p.jsx(Ml, { sectionKey: "for-teams" }) });
}
function Nd() {
  const v = [...Va, ...Va];
  return p.jsxs("section", {
    className: "border-y border-white/5 bg-[#080a14] py-12 md:py-14",
    children: [
      p.jsx("p", {
        className:
          "animate-fade-in-up text-center text-xs font-medium uppercase tracking-[0.3em] text-white/35",
        children: "Trusted by forward-thinking teams",
      }),
      p.jsxs("div", {
        className: "relative mt-8 overflow-hidden",
        children: [
          p.jsx("div", {
            className:
              "pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080a14] to-transparent",
          }),
          p.jsx("div", {
            className:
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080a14] to-transparent",
          }),
          p.jsx("div", {
            className: "marquee-track gap-12 px-6",
            children: v.map((S, m) =>
              p.jsx(
                "span",
                {
                  className:
                    "shrink-0 text-sm font-semibold tracking-tight text-white/35 transition-colors hover:text-white/60",
                  children: S,
                },
                `${S}-${m}`,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
const Cd = [
  {
    id: "solutions",
    icon: Za,
    eyebrow: "Solutions",
    title: "One platform for every AI workload",
    body: "From retrieval pipelines to autonomous agents, Stellar.ai unifies prototyping, evaluation, and production deploys. Swap models without rewriting orchestration—version prompts, compare runs, and promote winners in a single control plane.",
    bullets: ["Model routing & fallbacks", "Eval suites & regression gates", "Multi-region deploy"],
  },
  {
    id: "for-teams",
    icon: Ja,
    eyebrow: "For Teams",
    title: "Built for cross-functional shipping",
    body: "Engineers, PMs, and operators share live canvases with comment threads, approval flows, and environment-scoped secrets. Every change is attributable—no more shadow prompts in spreadsheets.",
    bullets: ["Role-based workspaces", "Review & sign-off flows", "Slack & Linear integrations"],
  },
  {
    id: "about",
    icon: qa,
    eyebrow: "About",
    title: "We believe intelligence should feel inevitable",
    body: "Stellar.ai started in 2024 with a simple thesis: production AI deserves the same craft as consumer software. Today we power mission-critical workflows for teams who refuse to trade safety for speed.",
    bullets: [
      "HQ in San Francisco",
      "Backed by leading infra investors",
      "SOC2 Type II in progress",
    ],
  },
  {
    id: "learn-hub",
    icon: Ga,
    eyebrow: "Learn Hub",
    title: "Guides, patterns, and office hours",
    body: "Explore playbooks for agent design, cost optimization, and governance templates. Weekly office hours with our solutions architects—free for every workspace on Pro and above.",
    bullets: ["Agent cookbook", "Cost playbook", "Compliance templates"],
  },
];
function _d() {
  return p.jsx(p.Fragment, {
    children: Cd.map((v, S) => {
      const m = v.icon,
        M = `${0.1 + S * 0.05}s`;
      return p.jsx(
        "section",
        {
          id: v.id,
          className:
            "scroll-mt-24 border-t border-white/5 bg-[#060812] px-4 py-20 sm:px-8 md:px-12 md:py-28",
          children: p.jsxs("div", {
            className: "mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center md:gap-16",
            children: [
              p.jsxs("div", {
                children: [
                  p.jsx("p", {
                    className:
                      "animate-fade-in-up text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80",
                    style: { animationDelay: M },
                    children: v.eyebrow,
                  }),
                  p.jsx("h2", {
                    className:
                      "animate-fade-in-up mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl",
                    style: { animationDelay: M },
                    children: v.title,
                  }),
                  p.jsx("p", {
                    className:
                      "animate-fade-in-up mt-4 text-base leading-relaxed text-white/55 md:text-lg",
                    style: { animationDelay: M },
                    children: v.body,
                  }),
                  p.jsx("ul", {
                    className: "animate-fade-in-up mt-6 space-y-2",
                    style: { animationDelay: M },
                    children: v.bullets.map((L) =>
                      p.jsxs(
                        "li",
                        {
                          className: "flex items-center gap-2 text-sm text-white/70",
                          children: [
                            p.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-violet-400" }),
                            L,
                          ],
                        },
                        L,
                      ),
                    ),
                  }),
                ],
              }),
              p.jsxs("div", {
                className:
                  "animate-fade-in-up liquid-glass flex aspect-[4/3] flex-col items-center justify-center rounded-3xl p-8",
                style: { animationDelay: M },
                children: [
                  p.jsx(m, { className: "h-12 w-12 text-violet-300/80", strokeWidth: 1.25 }),
                  p.jsxs("p", {
                    className: "mt-4 text-center text-sm text-white/45",
                    children: [v.eyebrow, " preview panel"],
                  }),
                ],
              }),
            ],
          }),
        },
        v.id,
      );
    }),
  });
}
function jd() {
  const [v, S] = Fe.useState(0),
    m = Ha[v];
  return p.jsxs("section", {
    className: "relative min-h-screen w-full overflow-hidden bg-[#060812]",
    children: [
      p.jsx("div", {
        className: "absolute inset-0 z-0",
        children: p.jsx("video", {
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: "h-full w-full object-cover",
          src: fd,
          "aria-hidden": !0,
        }),
      }),
      p.jsx("div", {
        className: "hero-vignette pointer-events-none absolute inset-0 z-[1]",
        "aria-hidden": !0,
      }),
      p.jsx("div", {
        className:
          "relative z-10 flex min-h-screen flex-col px-4 pb-10 pt-28 sm:px-8 md:px-12 md:pb-14 md:pt-32",
        children: p.jsxs("div", {
          className: "mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center",
          children: [
            p.jsx("p", {
              className:
                "animate-fade-in-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/45",
              style: { animationDelay: "0.1s" },
              children: "Enterprise AI platform",
            }),
            p.jsxs("h1", {
              className:
                "animate-fade-in-up font-display max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]",
              style: { animationDelay: "0.2s" },
              children: [
                p.jsx("span", {
                  className: "stellar-gradient-text",
                  children: "Stellar intelligence",
                }),
                p.jsx("span", { className: "block text-white", children: "for every workflow" }),
              ],
            }),
            p.jsx("p", {
              className:
                "animate-fade-in-up mt-5 max-w-xl text-base leading-relaxed text-white/55 md:text-lg",
              style: { animationDelay: "0.35s" },
              children:
                "Deploy models, orchestrate agents, and govern production AI from one tabbed command center—built for teams that ship at stellar velocity.",
            }),
            p.jsxs("div", {
              className: "animate-fade-in-up mt-8 flex flex-wrap gap-3",
              style: { animationDelay: "0.45s" },
              children: [
                p.jsxs("a", {
                  href: "#solutions",
                  className:
                    "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90",
                  children: ["Explore solutions", p.jsx(hd, { className: "h-4 w-4" })],
                }),
                p.jsx("a", {
                  href: "#learn-hub",
                  className:
                    "liquid-glass inline-flex items-center rounded-full px-7 py-3 text-sm font-medium text-white/90",
                  children: "Visit Learn Hub",
                }),
              ],
            }),
            p.jsxs("div", {
              className: "animate-fade-in-up mt-12 md:mt-16",
              style: { animationDelay: "0.55s" },
              children: [
                p.jsx("div", {
                  className: "liquid-glass mb-4 inline-flex flex-wrap gap-1 rounded-2xl p-1.5",
                  children: Ha.map((M, L) =>
                    p.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => S(L),
                        className: `rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${L === v ? "bg-white text-black shadow-lg shadow-violet-500/10" : "text-white/65 hover:bg-white/5 hover:text-white"}`,
                        children: M.label,
                      },
                      M.id,
                    ),
                  ),
                }),
                p.jsxs(
                  "div",
                  {
                    className: "tab-overlay-enter liquid-glass max-w-2xl rounded-2xl p-6 md:p-8",
                    children: [
                      p.jsx("p", {
                        className:
                          "text-xs font-medium uppercase tracking-[0.28em] text-violet-300/90",
                        children: m.eyebrow,
                      }),
                      p.jsx("h2", {
                        className:
                          "mt-2 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl",
                        children: m.title,
                      }),
                      p.jsx("p", {
                        className: "mt-3 text-sm leading-relaxed text-white/55 md:text-base",
                        children: m.description,
                      }),
                      p.jsx("div", {
                        className: "mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6",
                        children: m.stats.map((M) =>
                          p.jsxs(
                            "div",
                            {
                              children: [
                                p.jsx("p", {
                                  className:
                                    "text-[10px] font-medium uppercase tracking-widest text-white/40",
                                  children: M.label,
                                }),
                                p.jsx("p", {
                                  className:
                                    "mt-1 font-display text-lg font-semibold text-white md:text-xl",
                                  children: M.value,
                                }),
                              ],
                            },
                            M.label,
                          ),
                        ),
                      }),
                    ],
                  },
                  m.id,
                ),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Pd = [
  { name: "Starter", price: "$0", detail: "Prototyping & eval suites for small teams" },
  { name: "Pro", price: "$49", detail: "Production deploys, guardrails, multi-region" },
  { name: "Enterprise", price: "Custom", detail: "Dedicated VPC, SOC2, solutions architects" },
];
function zd() {
  return p.jsxs(cn, {
    children: [
      p.jsx(jd, {}),
      p.jsx(Nd, {}),
      p.jsx(_d, {}),
      p.jsx("section", {
        id: "pricing",
        className: "scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28",
        children: p.jsxs("div", {
          className: "mx-auto max-w-7xl",
          children: [
            p.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80",
              children: "Pricing",
            }),
            p.jsx("h2", {
              className:
                "mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl",
              children: "Plans for every AI control plane",
            }),
            p.jsx("div", {
              className: "mt-12 grid gap-6 md:grid-cols-3",
              children: Pd.map((v) =>
                p.jsxs(
                  "article",
                  {
                    className: "liquid-glass rounded-3xl p-8",
                    children: [
                      p.jsx("h3", {
                        className: "text-lg font-semibold text-white",
                        children: v.name,
                      }),
                      p.jsx("p", {
                        className: "mt-2 font-display text-3xl text-white",
                        children: v.price,
                      }),
                      p.jsx("p", { className: "mt-4 text-sm text-white/55", children: v.detail }),
                    ],
                  },
                  v.name,
                ),
              ),
            }),
            p.jsx("a", {
              href: "#contact",
              className:
                "mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black",
              children: "Start free trial",
            }),
          ],
        }),
      }),
      p.jsx("section", {
        id: "contact",
        className: "scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28",
        children: p.jsxs("div", {
          className: "mx-auto max-w-xl",
          children: [
            p.jsx("p", {
              className: "text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80",
              children: "Contact",
            }),
            p.jsx("h2", {
              className: "mt-3 font-display text-3xl font-semibold tracking-tight text-white",
              children: "Talk with Stellar.ai",
            }),
            p.jsx("p", {
              className: "mt-4 text-white/55",
              children: "hello@stellar.ai · Solutions team responds within one business day.",
            }),
            p.jsxs("form", {
              className: "mt-8 space-y-4",
              onSubmit: (v) => v.preventDefault(),
              children: [
                p.jsx("input", {
                  type: "email",
                  placeholder: "Work email",
                  className:
                    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50",
                }),
                p.jsx("textarea", {
                  rows: 4,
                  placeholder: "Tell us about your AI stack…",
                  className:
                    "w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-violet-400/50",
                }),
                p.jsx("button", {
                  type: "submit",
                  className:
                    "rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90",
                  children: "Request demo",
                }),
              ],
            }),
          ],
        }),
      }),
      p.jsx(Ya, {}),
    ],
  });
}
function Ld() {
  return p.jsx(cn, { children: p.jsx(Ml, { sectionKey: "learn-hub" }) });
}
const Td = [
  { name: "Starter", price: "$0", detail: "Prototyping & eval suites for small teams" },
  { name: "Pro", price: "$49", detail: "Production deploys, guardrails, multi-region" },
  { name: "Enterprise", price: "Custom", detail: "Dedicated VPC, SOC2, solutions architects" },
];
function Rd() {
  return p.jsx(cn, {
    children: p.jsx("section", {
      className: "scroll-mt-24 border-t border-white/5 px-4 py-20 sm:px-8 md:px-12 md:py-28",
      children: p.jsxs("div", {
        className: "mx-auto max-w-7xl",
        children: [
          p.jsx("p", {
            className: "text-xs font-medium uppercase tracking-[0.3em] text-violet-300/80",
            children: "Pricing",
          }),
          p.jsx("h2", {
            className:
              "mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl",
            children: "Plans for every AI control plane",
          }),
          p.jsx("div", {
            className: "mt-12 grid gap-6 md:grid-cols-3",
            children: Td.map((v) =>
              p.jsxs(
                "article",
                {
                  className: "liquid-glass rounded-3xl p-8",
                  children: [
                    p.jsx("h3", {
                      className: "text-lg font-semibold text-white",
                      children: v.name,
                    }),
                    p.jsx("p", {
                      className: "mt-2 font-display text-3xl text-white",
                      children: v.price,
                    }),
                    p.jsx("p", { className: "mt-4 text-sm text-white/55", children: v.detail }),
                  ],
                },
                v.name,
              ),
            ),
          }),
          p.jsx(jt, {
            target: { kind: "route", path: "contact" },
            className:
              "mt-10 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black",
            children: "Start free trial",
          }),
        ],
      }),
    }),
  });
}
function Md() {
  return p.jsx(cn, { children: p.jsx(Ml, { sectionKey: "solutions" }) });
}
function Od() {
  return (
    Fe.useEffect(() => {
      Qa();
    }, []),
    p.jsx(cd, {
      routes: {
        "": p.jsx(zd, {}),
        solutions: p.jsx(Md, {}),
        "for-teams": p.jsx(Ed, {}),
        about: p.jsx(kd, {}),
        "learn-hub": p.jsx(Ld, {}),
        pricing: p.jsx(Rd, {}),
        contact: p.jsx(Sd, {}),
      },
    })
  );
}
ld.createRoot(document.getElementById("root")).render(
  p.jsx(Fe.StrictMode, { children: p.jsx(Od, {}) }),
);
