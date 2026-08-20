(function () {
  const T = document.createElement("link").relList;
  if (T && T.supports && T.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) O(L);
  new MutationObserver((L) => {
    for (const V of L)
      if (V.type === "childList")
        for (const ne of V.addedNodes) ne.tagName === "LINK" && ne.rel === "modulepreload" && O(ne);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(L) {
    const V = {};
    return (
      L.integrity && (V.integrity = L.integrity),
      L.referrerPolicy && (V.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (V.credentials = "include")
        : L.crossOrigin === "anonymous"
          ? (V.credentials = "omit")
          : (V.credentials = "same-origin"),
      V
    );
  }
  function O(L) {
    if (L.ep) return;
    L.ep = !0;
    const V = m(L);
    fetch(L.href, V);
  }
})();
var Ni = { exports: {} },
  gr = {},
  Pi = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Df() {
  if (Pa) return F;
  Pa = 1;
  var k = Symbol.for("react.element"),
    T = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    V = Symbol.for("react.provider"),
    ne = Symbol.for("react.context"),
    ie = Symbol.for("react.forward_ref"),
    B = Symbol.for("react.suspense"),
    U = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    K = Symbol.iterator;
  function Y(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (K && c[K]) || c["@@iterator"]), typeof c == "function" ? c : null);
  }
  var ke = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ve = Object.assign,
    G = {};
  function X(c, v, D) {
    ((this.props = c), (this.context = v), (this.refs = G), (this.updater = D || ke));
  }
  ((X.prototype.isReactComponent = {}),
    (X.prototype.setState = function (c, v) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, c, v, "setState");
    }),
    (X.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    }));
  function yt() {}
  yt.prototype = X.prototype;
  function at(c, v, D) {
    ((this.props = c), (this.context = v), (this.refs = G), (this.updater = D || ke));
  }
  var be = (at.prototype = new yt());
  ((be.constructor = at), ve(be, X.prototype), (be.isPureReactComponent = !0));
  var Ee = Array.isArray,
    et = Object.prototype.hasOwnProperty,
    ze = { current: null },
    Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(c, v, D) {
    var A,
      H = {},
      W = null,
      q = null;
    if (v != null)
      for (A in (v.ref !== void 0 && (q = v.ref), v.key !== void 0 && (W = "" + v.key), v))
        et.call(v, A) && !Re.hasOwnProperty(A) && (H[A] = v[A]);
    var Z = arguments.length - 2;
    if (Z === 1) H.children = D;
    else if (1 < Z) {
      for (var le = Array(Z), Ve = 0; Ve < Z; Ve++) le[Ve] = arguments[Ve + 2];
      H.children = le;
    }
    if (c && c.defaultProps) for (A in ((Z = c.defaultProps), Z)) H[A] === void 0 && (H[A] = Z[A]);
    return { $$typeof: k, type: c, key: W, ref: q, props: H, _owner: ze.current };
  }
  function Pt(c, v) {
    return { $$typeof: k, type: c.type, key: v, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function gt(c) {
    return typeof c == "object" && c !== null && c.$$typeof === k;
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
  function Ae(c, v) {
    return typeof c == "object" && c !== null && c.key != null ? Yt("" + c.key) : v.toString(36);
  }
  function tt(c, v, D, A, H) {
    var W = typeof c;
    (W === "undefined" || W === "boolean") && (c = null);
    var q = !1;
    if (c === null) q = !0;
    else
      switch (W) {
        case "string":
        case "number":
          q = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case k:
            case T:
              q = !0;
          }
      }
    if (q)
      return (
        (q = c),
        (H = H(q)),
        (c = A === "" ? "." + Ae(q, 0) : A),
        Ee(H)
          ? ((D = ""),
            c != null && (D = c.replace(ct, "$&/") + "/"),
            tt(H, v, D, "", function (Ve) {
              return Ve;
            }))
          : H != null &&
            (gt(H) &&
              (H = Pt(
                H,
                D +
                  (!H.key || (q && q.key === H.key) ? "" : ("" + H.key).replace(ct, "$&/") + "/") +
                  c,
              )),
            v.push(H)),
        1
      );
    if (((q = 0), (A = A === "" ? "." : A + ":"), Ee(c)))
      for (var Z = 0; Z < c.length; Z++) {
        W = c[Z];
        var le = A + Ae(W, Z);
        q += tt(W, v, D, le, H);
      }
    else if (((le = Y(c)), typeof le == "function"))
      for (c = le.call(c), Z = 0; !(W = c.next()).done;)
        ((W = W.value), (le = A + Ae(W, Z++)), (q += tt(W, v, D, le, H)));
    else if (W === "object")
      throw (
        (v = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : v) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return q;
  }
  function ft(c, v, D) {
    if (c == null) return c;
    var A = [],
      H = 0;
    return (
      tt(c, A, "", "", function (W) {
        return v.call(D, W, H++);
      }),
      A
    );
  }
  function je(c) {
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
  var ae = { current: null },
    S = { transition: null },
    I = { ReactCurrentDispatcher: ae, ReactCurrentBatchConfig: S, ReactCurrentOwner: ze };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
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
    (F.Component = X),
    (F.Fragment = m),
    (F.Profiler = L),
    (F.PureComponent = at),
    (F.StrictMode = O),
    (F.Suspense = B),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
    (F.act = _),
    (F.cloneElement = function (c, v, D) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            ".",
        );
      var A = ve({}, c.props),
        H = c.key,
        W = c.ref,
        q = c._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((W = v.ref), (q = ze.current)),
          v.key !== void 0 && (H = "" + v.key),
          c.type && c.type.defaultProps)
        )
          var Z = c.type.defaultProps;
        for (le in v)
          et.call(v, le) &&
            !Re.hasOwnProperty(le) &&
            (A[le] = v[le] === void 0 && Z !== void 0 ? Z[le] : v[le]);
      }
      var le = arguments.length - 2;
      if (le === 1) A.children = D;
      else if (1 < le) {
        Z = Array(le);
        for (var Ve = 0; Ve < le; Ve++) Z[Ve] = arguments[Ve + 2];
        A.children = Z;
      }
      return { $$typeof: k, type: c.type, key: H, ref: W, props: A, _owner: q };
    }),
    (F.createContext = function (c) {
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
        (c.Provider = { $$typeof: V, _context: c }),
        (c.Consumer = c)
      );
    }),
    (F.createElement = Qe),
    (F.createFactory = function (c) {
      var v = Qe.bind(null, c);
      return ((v.type = c), v);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (c) {
      return { $$typeof: ie, render: c };
    }),
    (F.isValidElement = gt),
    (F.lazy = function (c) {
      return { $$typeof: re, _payload: { _status: -1, _result: c }, _init: je };
    }),
    (F.memo = function (c, v) {
      return { $$typeof: U, type: c, compare: v === void 0 ? null : v };
    }),
    (F.startTransition = function (c) {
      var v = S.transition;
      S.transition = {};
      try {
        c();
      } finally {
        S.transition = v;
      }
    }),
    (F.unstable_act = _),
    (F.useCallback = function (c, v) {
      return ae.current.useCallback(c, v);
    }),
    (F.useContext = function (c) {
      return ae.current.useContext(c);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (c) {
      return ae.current.useDeferredValue(c);
    }),
    (F.useEffect = function (c, v) {
      return ae.current.useEffect(c, v);
    }),
    (F.useId = function () {
      return ae.current.useId();
    }),
    (F.useImperativeHandle = function (c, v, D) {
      return ae.current.useImperativeHandle(c, v, D);
    }),
    (F.useInsertionEffect = function (c, v) {
      return ae.current.useInsertionEffect(c, v);
    }),
    (F.useLayoutEffect = function (c, v) {
      return ae.current.useLayoutEffect(c, v);
    }),
    (F.useMemo = function (c, v) {
      return ae.current.useMemo(c, v);
    }),
    (F.useReducer = function (c, v, D) {
      return ae.current.useReducer(c, v, D);
    }),
    (F.useRef = function (c) {
      return ae.current.useRef(c);
    }),
    (F.useState = function (c) {
      return ae.current.useState(c);
    }),
    (F.useSyncExternalStore = function (c, v, D) {
      return ae.current.useSyncExternalStore(c, v, D);
    }),
    (F.useTransition = function () {
      return ae.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var za;
function Ri() {
  return (za || ((za = 1), (Pi.exports = Df())), Pi.exports);
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
function Ff() {
  if (La) return gr;
  La = 1;
  var k = Ri(),
    T = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    O = Object.prototype.hasOwnProperty,
    L = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(ie, B, U) {
    var re,
      K = {},
      Y = null,
      ke = null;
    (U !== void 0 && (Y = "" + U),
      B.key !== void 0 && (Y = "" + B.key),
      B.ref !== void 0 && (ke = B.ref));
    for (re in B) O.call(B, re) && !V.hasOwnProperty(re) && (K[re] = B[re]);
    if (ie && ie.defaultProps)
      for (re in ((B = ie.defaultProps), B)) K[re] === void 0 && (K[re] = B[re]);
    return { $$typeof: T, type: ie, key: Y, ref: ke, props: K, _owner: L.current };
  }
  return ((gr.Fragment = m), (gr.jsx = ne), (gr.jsxs = ne), gr);
}
var Ta;
function Uf() {
  return (Ta || ((Ta = 1), (Ni.exports = Ff())), Ni.exports);
}
var z = Uf(),
  qe = Ri(),
  Ll = {},
  zi = { exports: {} },
  Ue = {},
  Li = { exports: {} },
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
      (function (k) {
        function T(S, I) {
          var _ = S.length;
          S.push(I);
          e: for (; 0 < _;) {
            var c = (_ - 1) >>> 1,
              v = S[c];
            if (0 < L(v, I)) ((S[c] = I), (S[_] = v), (_ = c));
            else break e;
          }
        }
        function m(S) {
          return S.length === 0 ? null : S[0];
        }
        function O(S) {
          if (S.length === 0) return null;
          var I = S[0],
            _ = S.pop();
          if (_ !== I) {
            S[0] = _;
            e: for (var c = 0, v = S.length, D = v >>> 1; c < D;) {
              var A = 2 * (c + 1) - 1,
                H = S[A],
                W = A + 1,
                q = S[W];
              if (0 > L(H, _))
                W < v && 0 > L(q, H)
                  ? ((S[c] = q), (S[W] = _), (c = W))
                  : ((S[c] = H), (S[A] = _), (c = A));
              else if (W < v && 0 > L(q, _)) ((S[c] = q), (S[W] = _), (c = W));
              else break e;
            }
          }
          return I;
        }
        function L(S, I) {
          var _ = S.sortIndex - I.sortIndex;
          return _ !== 0 ? _ : S.id - I.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var V = performance;
          k.unstable_now = function () {
            return V.now();
          };
        } else {
          var ne = Date,
            ie = ne.now();
          k.unstable_now = function () {
            return ne.now() - ie;
          };
        }
        var B = [],
          U = [],
          re = 1,
          K = null,
          Y = 3,
          ke = !1,
          ve = !1,
          G = !1,
          X = typeof setTimeout == "function" ? setTimeout : null,
          yt = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function be(S) {
          for (var I = m(U); I !== null;) {
            if (I.callback === null) O(U);
            else if (I.startTime <= S) (O(U), (I.sortIndex = I.expirationTime), T(B, I));
            else break;
            I = m(U);
          }
        }
        function Ee(S) {
          if (((G = !1), be(S), !ve))
            if (m(B) !== null) ((ve = !0), je(et));
            else {
              var I = m(U);
              I !== null && ae(Ee, I.startTime - S);
            }
        }
        function et(S, I) {
          ((ve = !1), G && ((G = !1), yt(Qe), (Qe = -1)), (ke = !0));
          var _ = Y;
          try {
            for (be(I), K = m(B); K !== null && (!(K.expirationTime > I) || (S && !Yt()));) {
              var c = K.callback;
              if (typeof c == "function") {
                ((K.callback = null), (Y = K.priorityLevel));
                var v = c(K.expirationTime <= I);
                ((I = k.unstable_now()),
                  typeof v == "function" ? (K.callback = v) : K === m(B) && O(B),
                  be(I));
              } else O(B);
              K = m(B);
            }
            if (K !== null) var D = !0;
            else {
              var A = m(U);
              (A !== null && ae(Ee, A.startTime - I), (D = !1));
            }
            return D;
          } finally {
            ((K = null), (Y = _), (ke = !1));
          }
        }
        var ze = !1,
          Re = null,
          Qe = -1,
          Pt = 5,
          gt = -1;
        function Yt() {
          return !(k.unstable_now() - gt < Pt);
        }
        function ct() {
          if (Re !== null) {
            var S = k.unstable_now();
            gt = S;
            var I = !0;
            try {
              I = Re(!0, S);
            } finally {
              I ? Ae() : ((ze = !1), (Re = null));
            }
          } else ze = !1;
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
            X(ct, 0);
          };
        function je(S) {
          ((Re = S), ze || ((ze = !0), Ae()));
        }
        function ae(S, I) {
          Qe = X(function () {
            S(k.unstable_now());
          }, I);
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
            ve || ke || ((ve = !0), je(et));
          }),
          (k.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pt = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (k.unstable_getCurrentPriorityLevel = function () {
            return Y;
          }),
          (k.unstable_getFirstCallbackNode = function () {
            return m(B);
          }),
          (k.unstable_next = function (S) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = Y;
            }
            var _ = Y;
            Y = I;
            try {
              return S();
            } finally {
              Y = _;
            }
          }),
          (k.unstable_pauseExecution = function () {}),
          (k.unstable_requestPaint = function () {}),
          (k.unstable_runWithPriority = function (S, I) {
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
            var _ = Y;
            Y = S;
            try {
              return I();
            } finally {
              Y = _;
            }
          }),
          (k.unstable_scheduleCallback = function (S, I, _) {
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
                id: re++,
                callback: I,
                priorityLevel: S,
                startTime: _,
                expirationTime: v,
                sortIndex: -1,
              }),
              _ > c
                ? ((S.sortIndex = _),
                  T(U, S),
                  m(B) === null &&
                    S === m(U) &&
                    (G ? (yt(Qe), (Qe = -1)) : (G = !0), ae(Ee, _ - c)))
                : ((S.sortIndex = v), T(B, S), ve || ke || ((ve = !0), je(et))),
              S
            );
          }),
          (k.unstable_shouldYield = Yt),
          (k.unstable_wrapCallback = function (S) {
            var I = Y;
            return function () {
              var _ = Y;
              Y = I;
              try {
                return S.apply(this, arguments);
              } finally {
                Y = _;
              }
            };
          }));
      })(Ti)),
    Ti
  );
}
var ja;
function Vf() {
  return (ja || ((ja = 1), (Li.exports = Af())), Li.exports);
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
function Bf() {
  if (Oa) return Ue;
  Oa = 1;
  var k = Ri(),
    T = Vf();
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
  var O = new Set(),
    L = {};
  function V(e, t) {
    (ne(e, t), ne(e + "Capture", t));
  }
  function ne(e, t) {
    for (L[e] = t, e = 0; e < t.length; e++) O.add(t[e]);
  }
  var ie = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    B = Object.prototype.hasOwnProperty,
    U =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    re = {},
    K = {};
  function Y(e) {
    return B.call(K, e) ? !0 : B.call(re, e) ? !1 : U.test(e) ? (K[e] = !0) : ((re[e] = !0), !1);
  }
  function ke(e, t, n, r) {
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
  function ve(e, t, n, r) {
    if (t === null || typeof t > "u" || ke(e, t, n, r)) return !0;
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
  function G(e, t, n, r, l, u, i) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i));
  }
  var X = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      X[e] = new G(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      X[t] = new G(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      X[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(
      function (e) {
        X[e] = new G(e, 2, !1, e, null, !1, !1);
      },
    ),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        X[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      X[e] = new G(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      X[e] = new G(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      X[e] = new G(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      X[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var yt = /[\-:]([a-z])/g;
  function at(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(yt, at);
      X[t] = new G(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yt, at);
        X[t] = new G(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yt, at);
      X[t] = new G(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      X[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (X.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      X[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function be(e, t, n, r) {
    var l = X.hasOwnProperty(t) ? X[t] : null;
    (l !== null
      ? l.type !== 0
      : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (ve(t, n, l, r) && (n = null),
      r || l === null
        ? Y(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
  var Ee = k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    et = Symbol.for("react.element"),
    ze = Symbol.for("react.portal"),
    Re = Symbol.for("react.fragment"),
    Qe = Symbol.for("react.strict_mode"),
    Pt = Symbol.for("react.profiler"),
    gt = Symbol.for("react.provider"),
    Yt = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Ae = Symbol.for("react.suspense"),
    tt = Symbol.for("react.suspense_list"),
    ft = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    ae = Symbol.for("react.offscreen"),
    S = Symbol.iterator;
  function I(e) {
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
  function H(e) {
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
      case Re:
        return "Fragment";
      case ze:
        return "Portal";
      case Pt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Ae:
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
          return ((t = e.displayName || null), t !== null ? t : W(e.type) || "Memo");
        case je:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  function q(e) {
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
  function Z(e) {
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
  function le(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ve(e) {
    var t = le(e) ? "checked" : "value",
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
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ve(e));
  }
  function ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
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
  function Ol(e, t) {
    var n = t.checked;
    return _({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Oi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = Z(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      }));
  }
  function Ii(e, t) {
    ((t = t.checked), t != null && be(e, "checked", t, !1));
  }
  function Il(e, t) {
    Ii(e, t);
    var n = Z(t.value),
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
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, Z(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
  }
  function Mi(e, t, n) {
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
      for (n = "" + Z(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Di(e, t) {
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
    e._wrapperState = { initialValue: Z(n) };
  }
  function Fi(e, t) {
    var n = Z(t.value),
      r = Z(t.defaultValue);
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
  var Sr,
    Vi = (function (e) {
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
  function $i(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Bi(n, t[n], r);
        (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Va = _(
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
      if (Va[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  var $l = null,
    an = null,
    cn = null;
  function Hi(e) {
    if ((e = rr(e))) {
      if (typeof $l != "function") throw Error(m(280));
      var t = e.stateNode;
      t && ((t = Wr(t)), $l(e.stateNode, e.type, t));
    }
  }
  function Wi(e) {
    an ? (cn ? cn.push(e) : (cn = [e])) : (an = e);
  }
  function Qi() {
    if (an) {
      var e = an,
        t = cn;
      if (((cn = an = null), Hi(e), t)) for (e = 0; e < t.length; e++) Hi(t[e]);
    }
  }
  function Ki(e, t) {
    return e(t);
  }
  function Yi() {}
  var Hl = !1;
  function Xi(e, t, n) {
    if (Hl) return e(t, n);
    Hl = !0;
    try {
      return Ki(e, t, n);
    } finally {
      ((Hl = !1), (an !== null || cn !== null) && (Yi(), Qi()));
    }
  }
  function Dn(e, t) {
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
  if (ie)
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
  function Ba(e, t, n, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Un = !1,
    xr = null,
    Er = !1,
    Ql = null,
    $a = {
      onError: function (e) {
        ((Un = !0), (xr = e));
      },
    };
  function Ha(e, t, n, r, l, u, i, o, s) {
    ((Un = !1), (xr = null), Ba.apply($a, arguments));
  }
  function Wa(e, t, n, r, l, u, i, o, s) {
    if ((Ha.apply(this, arguments), Un)) {
      if (Un) {
        var p = xr;
        ((Un = !1), (xr = null));
      } else throw Error(m(198));
      Er || ((Er = !0), (Ql = p));
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
  function Gi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Zi(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Qa(e) {
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
  var bi = T.unstable_scheduleCallback,
    eo = T.unstable_cancelCallback,
    Ka = T.unstable_shouldYield,
    Ya = T.unstable_requestPaint,
    fe = T.unstable_now,
    Xa = T.unstable_getCurrentPriorityLevel,
    Kl = T.unstable_ImmediatePriority,
    to = T.unstable_UserBlockingPriority,
    _r = T.unstable_NormalPriority,
    Ga = T.unstable_LowPriority,
    no = T.unstable_IdlePriority,
    Cr = null,
    dt = null;
  function Za(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
      try {
        dt.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nt = Math.clz32 ? Math.clz32 : ba,
    Ja = Math.log,
    qa = Math.LN2;
  function ba(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ja(e) / qa) | 0)) | 0);
  }
  var Nr = 64,
    Pr = 4194304;
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
  function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = An(o)) : ((u &= i), u !== 0 && (r = An(u)));
    } else ((i = n & ~l), i !== 0 ? (r = An(i)) : u !== 0 && (r = An(u)));
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
  function Yl(e) {
    return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
  }
  function ro() {
    var e = Nr;
    return ((Nr <<= 1), (Nr & 4194240) === 0 && (Nr = 64), e);
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
  function Gl(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - nt(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var J = 0;
  function lo(e) {
    return ((e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
  }
  var uo,
    Zl,
    io,
    oo,
    so,
    Jl = !1,
    Lr = [],
    zt = null,
    Lt = null,
    Tt = null,
    Bn = new Map(),
    $n = new Map(),
    Rt = [],
    rc =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function ao(e, t) {
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
        Bn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $n.delete(t.pointerId);
    }
  }
  function Hn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = rr(t)), t !== null && Zl(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((zt = Hn(zt, e, t, n, r, l)), !0);
      case "dragenter":
        return ((Lt = Hn(Lt, e, t, n, r, l)), !0);
      case "mouseover":
        return ((Tt = Hn(Tt, e, t, n, r, l)), !0);
      case "pointerover":
        var u = l.pointerId;
        return (Bn.set(u, Hn(Bn.get(u) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return ((u = l.pointerId), $n.set(u, Hn($n.get(u) || null, e, t, n, r, l)), !0);
    }
    return !1;
  }
  function co(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = Xt(t);
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
  function Tr(e) {
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
    Tr(e) && n.delete(t);
  }
  function uc() {
    ((Jl = !1),
      zt !== null && Tr(zt) && (zt = null),
      Lt !== null && Tr(Lt) && (Lt = null),
      Tt !== null && Tr(Tt) && (Tt = null),
      Bn.forEach(fo),
      $n.forEach(fo));
  }
  function Wn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jl || ((Jl = !0), T.unstable_scheduleCallback(T.unstable_NormalPriority, uc)));
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
      zt !== null && Wn(zt, e),
        Lt !== null && Wn(Lt, e),
        Tt !== null && Wn(Tt, e),
        Bn.forEach(t),
        $n.forEach(t),
        n = 0;
      n < Rt.length;
      n++
    )
      ((r = Rt[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null);)
      (co(n), n.blockedOn === null && Rt.shift());
  }
  var fn = Ee.ReactCurrentBatchConfig,
    Rr = !0;
  function ic(e, t, n, r) {
    var l = J,
      u = fn.transition;
    fn.transition = null;
    try {
      ((J = 1), ql(e, t, n, r));
    } finally {
      ((J = l), (fn.transition = u));
    }
  }
  function oc(e, t, n, r) {
    var l = J,
      u = fn.transition;
    fn.transition = null;
    try {
      ((J = 4), ql(e, t, n, r));
    } finally {
      ((J = l), (fn.transition = u));
    }
  }
  function ql(e, t, n, r) {
    if (Rr) {
      var l = bl(e, t, n, r);
      if (l === null) (vu(e, t, r, jr, n), ao(e, r));
      else if (lc(l, e, t, n, r)) r.stopPropagation();
      else if ((ao(e, r), t & 4 && -1 < rc.indexOf(e))) {
        for (; l !== null;) {
          var u = rr(l);
          if (
            (u !== null && uo(u), (u = bl(e, t, n, r)), u === null && vu(e, t, r, jr, n), u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else vu(e, t, r, null, n);
    }
  }
  var jr = null;
  function bl(e, t, n, r) {
    if (((jr = null), (e = Bl(r)), (e = Gt(e)), e !== null))
      if (((t = Xt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Gi(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((jr = e), null);
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
        switch (Xa()) {
          case Kl:
            return 1;
          case to:
            return 4;
          case _r:
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
  var jt = null,
    eu = null,
    Or = null;
  function mo() {
    if (Or) return Or;
    var e,
      t = eu,
      n = t.length,
      r,
      l = "value" in jt ? jt.value : jt.textContent,
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
  function Mr() {
    return !0;
  }
  function ho() {
    return !1;
  }
  function Be(e) {
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
    tu = Be(dn),
    Kn = _({}, dn, { view: 0, detail: 0 }),
    sc = Be(Kn),
    nu,
    ru,
    Yn,
    Dr = _({}, Kn, {
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
          : (e !== Yn &&
              (Yn && e.type === "mousemove"
                ? ((nu = e.screenX - Yn.screenX), (ru = e.screenY - Yn.screenY))
                : (ru = nu = 0),
              (Yn = e)),
            nu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ru;
      },
    }),
    vo = Be(Dr),
    ac = _({}, Dr, { dataTransfer: 0 }),
    cc = Be(ac),
    fc = _({}, Kn, { relatedTarget: 0 }),
    lu = Be(fc),
    dc = _({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pc = Be(dc),
    mc = _({}, dn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    hc = Be(mc),
    vc = _({}, dn, { data: 0 }),
    yo = Be(vc),
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
  function uu() {
    return kc;
  }
  var Sc = _({}, Kn, {
      key: function (e) {
        if (e.key) {
          var t = yc[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      getModifierState: uu,
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
    xc = Be(Sc),
    Ec = _({}, Dr, {
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
    go = Be(Ec),
    _c = _({}, Kn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: uu,
    }),
    Cc = Be(_c),
    Nc = _({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pc = Be(Nc),
    zc = _({}, Dr, {
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
    Lc = Be(zc),
    Tc = [9, 13, 27, 32],
    iu = ie && "CompositionEvent" in window,
    Xn = null;
  ie && "documentMode" in document && (Xn = document.documentMode);
  var Rc = ie && "TextEvent" in window && !Xn,
    wo = ie && (!iu || (Xn && 8 < Xn && 11 >= Xn)),
    ko = " ",
    So = !1;
  function xo(e, t) {
    switch (e) {
      case "keyup":
        return Tc.indexOf(t.keyCode) !== -1;
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
  var pn = !1;
  function jc(e, t) {
    switch (e) {
      case "compositionend":
        return Eo(t);
      case "keypress":
        return t.which !== 32 ? null : ((So = !0), ko);
      case "textInput":
        return ((e = t.data), e === ko && So ? null : e);
      default:
        return null;
    }
  }
  function Oc(e, t) {
    if (pn)
      return e === "compositionend" || (!iu && xo(e, t))
        ? ((e = mo()), (Or = eu = jt = null), (pn = !1), e)
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
  var Ic = {
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
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ic[e.type] : t === "textarea";
  }
  function Co(e, t, n, r) {
    (Wi(r),
      (t = Br(t, "onChange")),
      0 < t.length &&
        ((n = new tu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
  }
  var Gn = null,
    Zn = null;
  function Mc(e) {
    Ho(e, 0);
  }
  function Fr(e) {
    var t = gn(e);
    if (ji(t)) return e;
  }
  function Dc(e, t) {
    if (e === "change") return t;
  }
  var No = !1;
  if (ie) {
    var ou;
    if (ie) {
      var su = "oninput" in document;
      if (!su) {
        var Po = document.createElement("div");
        (Po.setAttribute("oninput", "return;"), (su = typeof Po.oninput == "function"));
      }
      ou = su;
    } else ou = !1;
    No = ou && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    Gn && (Gn.detachEvent("onpropertychange", Lo), (Zn = Gn = null));
  }
  function Lo(e) {
    if (e.propertyName === "value" && Fr(Zn)) {
      var t = [];
      (Co(t, Zn, e, Bl(e)), Xi(Mc, t));
    }
  }
  function Fc(e, t, n) {
    e === "focusin"
      ? (zo(), (Gn = t), (Zn = n), Gn.attachEvent("onpropertychange", Lo))
      : e === "focusout" && zo();
  }
  function Uc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Zn);
  }
  function Ac(e, t) {
    if (e === "click") return Fr(t);
  }
  function Vc(e, t) {
    if (e === "input" || e === "change") return Fr(t);
  }
  function Bc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var rt = typeof Object.is == "function" ? Object.is : Bc;
  function Jn(e, t) {
    if (rt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!B.call(t, l) || !rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function To(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Ro(e, t) {
    var n = To(e);
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
      n = To(n);
    }
  }
  function jo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? jo(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Oo() {
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
  function $c(e) {
    var t = Oo(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && jo(n.ownerDocument.documentElement, n)) {
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
    mn = null,
    cu = null,
    qn = null,
    fu = !1;
  function Io(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fu ||
      mn == null ||
      mn !== kr(r) ||
      ((r = mn),
      "selectionStart" in r && au(r)
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
        (r = Br(cu, "onSelect")),
        0 < r.length &&
          ((t = new tu("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mn))));
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
  var hn = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    du = {},
    Mo = {};
  ie &&
    ((Mo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hn.animationend.animation,
      delete hn.animationiteration.animation,
      delete hn.animationstart.animation),
    "TransitionEvent" in window || delete hn.transitionend.transition);
  function Ar(e) {
    if (du[e]) return du[e];
    if (!hn[e]) return e;
    var t = hn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Mo) return (du[e] = t[n]);
    return e;
  }
  var Do = Ar("animationend"),
    Fo = Ar("animationiteration"),
    Uo = Ar("animationstart"),
    Ao = Ar("transitionend"),
    Vo = new Map(),
    Bo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Ot(e, t) {
    (Vo.set(e, t), V(t, [e]));
  }
  for (var pu = 0; pu < Bo.length; pu++) {
    var mu = Bo[pu],
      Wc = mu.toLowerCase(),
      Qc = mu[0].toUpperCase() + mu.slice(1);
    Ot(Wc, "on" + Qc);
  }
  (Ot(Do, "onAnimationEnd"),
    Ot(Fo, "onAnimationIteration"),
    Ot(Uo, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Ao, "onTransitionEnd"),
    ne("onMouseEnter", ["mouseout", "mouseover"]),
    ne("onMouseLeave", ["mouseout", "mouseover"]),
    ne("onPointerEnter", ["pointerout", "pointerover"]),
    ne("onPointerLeave", ["pointerout", "pointerover"]),
    V("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    V(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    V("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    V("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    V(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    V(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var bn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Kc = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function $o(e, t, n) {
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
    if (Er) throw ((e = Ql), (Er = !1), (Ql = null), e);
  }
  function ee(e, t) {
    var n = t[xu];
    n === void 0 && (n = t[xu] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wo(t, e, 2, !1), n.add(r));
  }
  function hu(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wo(n, e, r, t));
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      ((e[Vr] = !0),
        O.forEach(function (n) {
          n !== "selectionchange" && (Kc.has(n) || hu(n, !1, e), hu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || ((t[Vr] = !0), hu("selectionchange", !1, t));
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
    Xi(function () {
      var p = u,
        y = Bl(n),
        g = [];
      e: {
        var h = Vo.get(e);
        if (h !== void 0) {
          var x = tu,
            C = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              x = xc;
              break;
            case "focusin":
              ((C = "focus"), (x = lu));
              break;
            case "focusout":
              ((C = "blur"), (x = lu));
              break;
            case "beforeblur":
            case "afterblur":
              x = lu;
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
              x = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = cc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Cc;
              break;
            case Do:
            case Fo:
            case Uo:
              x = pc;
              break;
            case Ao:
              x = Pc;
              break;
            case "scroll":
              x = sc;
              break;
            case "wheel":
              x = Lc;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = hc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = go;
          }
          var N = (t & 4) !== 0,
            de = !N && e === "scroll",
            f = N ? (h !== null ? h + "Capture" : null) : h;
          N = [];
          for (var a = p, d; a !== null;) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w), f !== null && ((w = Dn(a, f)), w != null && N.push(tr(a, w, d)))),
              de)
            )
              break;
            a = a.return;
          }
          0 < N.length && ((h = new x(h, C, null, n, y)), g.push({ event: h, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (x = e === "mouseout" || e === "pointerout"),
            h && n !== Vl && (C = n.relatedTarget || n.fromElement) && (Gt(C) || C[wt]))
          )
            break e;
          if (
            (x || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            x
              ? ((C = n.relatedTarget || n.toElement),
                (x = p),
                (C = C ? Gt(C) : null),
                C !== null &&
                  ((de = Xt(C)), C !== de || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((x = null), (C = p)),
            x !== C)
          ) {
            if (
              ((N = vo),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((N = go), (w = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
              (de = x == null ? h : gn(x)),
              (d = C == null ? h : gn(C)),
              (h = new N(w, a + "leave", x, n, y)),
              (h.target = de),
              (h.relatedTarget = d),
              (w = null),
              Gt(y) === p &&
                ((N = new N(f, a + "enter", C, n, y)),
                (N.target = d),
                (N.relatedTarget = de),
                (w = N)),
              (de = w),
              x && C)
            )
              t: {
                for (N = x, f = C, a = 0, d = N; d; d = vn(d)) a++;
                for (d = 0, w = f; w; w = vn(w)) d++;
                for (; 0 < a - d;) ((N = vn(N)), a--);
                for (; 0 < d - a;) ((f = vn(f)), d--);
                for (; a--;) {
                  if (N === f || (f !== null && N === f.alternate)) break t;
                  ((N = vn(N)), (f = vn(f)));
                }
                N = null;
              }
            else N = null;
            (x !== null && Qo(g, h, x, N, !1), C !== null && de !== null && Qo(g, de, C, N, !0));
          }
        }
        e: {
          if (
            ((h = p ? gn(p) : window),
            (x = h.nodeName && h.nodeName.toLowerCase()),
            x === "select" || (x === "input" && h.type === "file"))
          )
            var P = Dc;
          else if (_o(h))
            if (No) P = Vc;
            else {
              P = Uc;
              var R = Fc;
            }
          else
            (x = h.nodeName) &&
              x.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (P = Ac);
          if (P && (P = P(e, p))) {
            Co(g, P, n, y);
            break e;
          }
          (R && R(e, h, p),
            e === "focusout" &&
              (R = h._wrapperState) &&
              R.controlled &&
              h.type === "number" &&
              Ml(h, "number", h.value));
        }
        switch (((R = p ? gn(p) : window), e)) {
          case "focusin":
            (_o(R) || R.contentEditable === "true") && ((mn = R), (cu = p), (qn = null));
            break;
          case "focusout":
            qn = cu = mn = null;
            break;
          case "mousedown":
            fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fu = !1), Io(g, n, y));
            break;
          case "selectionchange":
            if (Hc) break;
          case "keydown":
          case "keyup":
            Io(g, n, y);
        }
        var j;
        if (iu)
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
            ? xo(e, n) && (M = "onCompositionEnd")
            : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
        (M &&
          (wo &&
            n.locale !== "ko" &&
            (pn || M !== "onCompositionStart"
              ? M === "onCompositionEnd" && pn && (j = mo())
              : ((jt = y), (eu = "value" in jt ? jt.value : jt.textContent), (pn = !0))),
          (R = Br(p, M)),
          0 < R.length &&
            ((M = new yo(M, e, null, n, y)),
            g.push({ event: M, listeners: R }),
            j ? (M.data = j) : ((j = Eo(n)), j !== null && (M.data = j)))),
          (j = Rc ? jc(e, n) : Oc(e, n)) &&
            ((p = Br(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new yo("onBeforeInput", "beforeinput", null, n, y)),
              g.push({ event: y, listeners: p }),
              (y.data = j))));
      }
      Ho(g, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Br(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
      var l = e,
        u = l.stateNode;
      (l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Dn(e, n)),
        u != null && r.unshift(tr(e, u, l)),
        (u = Dn(e, t)),
        u != null && r.push(tr(e, u, l))),
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
          ? ((s = Dn(n, u)), s != null && i.unshift(tr(n, s, o)))
          : l || ((s = Dn(n, u)), s != null && i.push(tr(n, s, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Yc = /\r\n?/g,
    Xc = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Yc,
        `
`,
      )
      .replace(Xc, "");
  }
  function $r(e, t, n) {
    if (((t = Ko(t)), Ko(e) !== t && n)) throw Error(m(425));
  }
  function Hr() {}
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
    Gc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yo = typeof Promise == "function" ? Promise : void 0,
    Zc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Yo < "u"
          ? function (e) {
              return Yo.resolve(null).then(e).catch(Jc);
            }
          : ku;
  function Jc(e) {
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
            (e.removeChild(l), Qn(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Qn(t);
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
  function Xo(e) {
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
    nr = "__reactProps$" + yn,
    wt = "__reactContainer$" + yn,
    xu = "__reactEvents$" + yn,
    qc = "__reactListeners$" + yn,
    bc = "__reactHandles$" + yn;
  function Gt(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[wt] || n[pt])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Xo(e); e !== null;) {
            if ((n = e[pt])) return n;
            e = Xo(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function rr(e) {
    return (
      (e = e[pt] || e[wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[nr] || null;
  }
  var Eu = [],
    wn = -1;
  function Mt(e) {
    return { current: e };
  }
  function te(e) {
    0 > wn || ((e.current = Eu[wn]), (Eu[wn] = null), wn--);
  }
  function b(e, t) {
    (wn++, (Eu[wn] = e.current), (e.current = t));
  }
  var Dt = {},
    _e = Mt(Dt),
    Oe = Mt(!1),
    Zt = Dt;
  function kn(e, t) {
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
  function Ie(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Qr() {
    (te(Oe), te(_e));
  }
  function Go(e, t, n) {
    if (_e.current !== Dt) throw Error(m(168));
    (b(_e, t), b(Oe, n));
  }
  function Zo(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, q(e) || "Unknown", l));
    return _({}, n, r);
  }
  function Kr(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
      (Zt = _e.current),
      b(_e, e),
      b(Oe, Oe.current),
      !0
    );
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    (n
      ? ((e = Zo(e, t, Zt)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        te(Oe),
        te(_e),
        b(_e, e))
      : te(Oe),
      b(Oe, n));
  }
  var kt = null,
    Yr = !1,
    _u = !1;
  function qo(e) {
    kt === null ? (kt = [e]) : kt.push(e);
  }
  function ef(e) {
    ((Yr = !0), qo(e));
  }
  function Ft() {
    if (!_u && kt !== null) {
      _u = !0;
      var e = 0,
        t = J;
      try {
        var n = kt;
        for (J = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((kt = null), (Yr = !1));
      } catch (l) {
        throw (kt !== null && (kt = kt.slice(e + 1)), bi(Kl, Ft), l);
      } finally {
        ((J = t), (_u = !1));
      }
    }
    return null;
  }
  var Sn = [],
    xn = 0,
    Xr = null,
    Gr = 0,
    Ke = [],
    Ye = 0,
    Jt = null,
    St = 1,
    xt = "";
  function qt(e, t) {
    ((Sn[xn++] = Gr), (Sn[xn++] = Xr), (Xr = e), (Gr = t));
  }
  function bo(e, t, n) {
    ((Ke[Ye++] = St), (Ke[Ye++] = xt), (Ke[Ye++] = Jt), (Jt = e));
    var r = St;
    e = xt;
    var l = 32 - nt(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var u = 32 - nt(t) + l;
    if (30 < u) {
      var i = l - (l % 5);
      ((u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (St = (1 << (32 - nt(t) + l)) | (n << l) | r),
        (xt = u + e));
    } else ((St = (1 << u) | (n << l) | r), (xt = e));
  }
  function Cu(e) {
    e.return !== null && (qt(e, 1), bo(e, 1, 0));
  }
  function Nu(e) {
    for (; e === Xr;) ((Xr = Sn[--xn]), (Sn[xn] = null), (Gr = Sn[--xn]), (Sn[xn] = null));
    for (; e === Jt;)
      ((Jt = Ke[--Ye]),
        (Ke[Ye] = null),
        (xt = Ke[--Ye]),
        (Ke[Ye] = null),
        (St = Ke[--Ye]),
        (Ke[Ye] = null));
  }
  var $e = null,
    He = null,
    ue = !1,
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
          t !== null ? ((e.stateNode = t), ($e = e), (He = It(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), ($e = e), (He = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Jt !== null ? { id: St, overflow: xt } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = Je(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              ($e = e),
              (He = null),
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
    if (ue) {
      var t = He;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (Pu(e)) throw Error(m(418));
          t = It(n.nextSibling);
          var r = $e;
          t && ts(e, t) ? es(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), ($e = e));
        }
      } else {
        if (Pu(e)) throw Error(m(418));
        ((e.flags = (e.flags & -4097) | 2), (ue = !1), ($e = e));
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    $e = e;
  }
  function Zr(e) {
    if (e !== $e) return !1;
    if (!ue) return (ns(e), (ue = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !wu(e.type, e.memoizedProps))),
      t && (t = He))
    ) {
      if (Pu(e)) throw (rs(), Error(m(418)));
      for (; t;) (es(e, t), (t = It(t.nextSibling)));
    }
    if ((ns(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = It(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = $e ? It(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = He; e;) e = It(e.nextSibling);
  }
  function En() {
    ((He = $e = null), (ue = !1));
  }
  function Lu(e) {
    lt === null ? (lt = [e]) : lt.push(e);
  }
  var tf = Ee.ReactCurrentBatchConfig;
  function lr(e, t, n) {
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
        ? ((a = ki(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === Re
        ? y(f, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === P ||
              (typeof P == "object" && P !== null && P.$$typeof === je && ls(P) === a.type))
          ? ((w = l(a, d.props)), (w.ref = lr(f, a, d)), (w.return = f), w)
          : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
            (w.ref = lr(f, a, d)),
            (w.return = f),
            w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = Si(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = on(d, f.mode, w, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return ((a = ki("" + a, f.mode, d)), (a.return = f), a);
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case et:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = lr(f, null, a)),
              (d.return = f),
              d
            );
          case ze:
            return ((a = Si(a, f.mode, d)), (a.return = f), a);
          case je:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (On(a) || I(a)) return ((a = on(a, f.mode, d, null)), (a.return = f), a);
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
          case ze:
            return d.key === P ? p(f, a, d, w) : null;
          case je:
            return ((P = d._init), h(f, a, P(d._payload), w));
        }
        if (On(d) || I(d)) return P !== null ? null : y(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function x(f, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((f = f.get(d) || null), o(a, f, "" + w, P));
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case et:
            return ((f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, P));
          case ze:
            return ((f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, P));
          case je:
            var R = w._init;
            return x(f, a, d, R(w._payload), P);
        }
        if (On(w) || I(w)) return ((f = f.get(d) || null), y(a, f, w, P, null));
        Jr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var P = null, R = null, j = a, M = (a = 0), we = null; j !== null && M < d.length; M++) {
        j.index > M ? ((we = j), (j = null)) : (we = j.sibling);
        var Q = h(f, j, d[M], w);
        if (Q === null) {
          j === null && (j = we);
          break;
        }
        (e && j && Q.alternate === null && t(f, j),
          (a = u(Q, a, M)),
          R === null ? (P = Q) : (R.sibling = Q),
          (R = Q),
          (j = we));
      }
      if (M === d.length) return (n(f, j), ue && qt(f, M), P);
      if (j === null) {
        for (; M < d.length; M++)
          ((j = g(f, d[M], w)),
            j !== null && ((a = u(j, a, M)), R === null ? (P = j) : (R.sibling = j), (R = j)));
        return (ue && qt(f, M), P);
      }
      for (j = r(f, j); M < d.length; M++)
        ((we = x(j, f, M, d[M], w)),
          we !== null &&
            (e && we.alternate !== null && j.delete(we.key === null ? M : we.key),
            (a = u(we, a, M)),
            R === null ? (P = we) : (R.sibling = we),
            (R = we)));
      return (
        e &&
          j.forEach(function (Kt) {
            return t(f, Kt);
          }),
        ue && qt(f, M),
        P
      );
    }
    function N(f, a, d, w) {
      var P = I(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var R = (P = null), j = a, M = (a = 0), we = null, Q = d.next();
        j !== null && !Q.done;
        M++, Q = d.next()
      ) {
        j.index > M ? ((we = j), (j = null)) : (we = j.sibling);
        var Kt = h(f, j, Q.value, w);
        if (Kt === null) {
          j === null && (j = we);
          break;
        }
        (e && j && Kt.alternate === null && t(f, j),
          (a = u(Kt, a, M)),
          R === null ? (P = Kt) : (R.sibling = Kt),
          (R = Kt),
          (j = we));
      }
      if (Q.done) return (n(f, j), ue && qt(f, M), P);
      if (j === null) {
        for (; !Q.done; M++, Q = d.next())
          ((Q = g(f, Q.value, w)),
            Q !== null && ((a = u(Q, a, M)), R === null ? (P = Q) : (R.sibling = Q), (R = Q)));
        return (ue && qt(f, M), P);
      }
      for (j = r(f, j); !Q.done; M++, Q = d.next())
        ((Q = x(j, f, M, Q.value, w)),
          Q !== null &&
            (e && Q.alternate !== null && j.delete(Q.key === null ? M : Q.key),
            (a = u(Q, a, M)),
            R === null ? (P = Q) : (R.sibling = Q),
            (R = Q)));
      return (
        e &&
          j.forEach(function (Mf) {
            return t(f, Mf);
          }),
        ue && qt(f, M),
        P
      );
    }
    function de(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Re &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case et:
            e: {
              for (var P = d.key, R = a; R !== null;) {
                if (R.key === P) {
                  if (((P = d.type), P === Re)) {
                    if (R.tag === 7) {
                      (n(f, R.sibling), (a = l(R, d.props.children)), (a.return = f), (f = a));
                      break e;
                    }
                  } else if (
                    R.elementType === P ||
                    (typeof P == "object" && P !== null && P.$$typeof === je && ls(P) === R.type)
                  ) {
                    (n(f, R.sibling),
                      (a = l(R, d.props)),
                      (a.ref = lr(f, R, d)),
                      (a.return = f),
                      (f = a));
                    break e;
                  }
                  n(f, R);
                  break;
                } else t(f, R);
                R = R.sibling;
              }
              d.type === Re
                ? ((a = on(d.props.children, f.mode, w, d.key)), (a.return = f), (f = a))
                : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = lr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return i(f);
          case ze:
            e: {
              for (R = d.key; a !== null;) {
                if (a.key === R)
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
              ((a = Si(d, f.mode, w)), (a.return = f), (f = a));
            }
            return i(f);
          case je:
            return ((R = d._init), de(f, a, R(d._payload), w));
        }
        if (On(d)) return C(f, a, d, w);
        if (I(d)) return N(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (n(f, a), (a = ki(d, f.mode, w)), (a.return = f), (f = a)),
          i(f))
        : n(f, a);
    }
    return de;
  }
  var _n = us(!0),
    is = us(!1),
    qr = Mt(null),
    br = null,
    Cn = null,
    Tu = null;
  function Ru() {
    Tu = Cn = br = null;
  }
  function ju(e) {
    var t = qr.current;
    (te(qr), (e._currentValue = t));
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
  function Nn(e, t) {
    ((br = e),
      (Tu = Cn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Me = !0), (e.firstContext = null)));
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Tu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
        if (br === null) throw Error(m(308));
        ((Cn = e), (br.dependencies = { lanes: 0, firstContext: e }));
      } else Cn = Cn.next = e;
    return t;
  }
  var bt = null;
  function Iu(e) {
    bt === null ? (bt = [e]) : bt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Iu(t)) : ((n.next = l.next), (l.next = n)),
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
  function Mu(e) {
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
      l === null ? ((t.next = t), Iu(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Et(e, n)
    );
  }
  function el(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n));
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
  function tl(e, t, n, r) {
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
          x = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: x,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var C = e,
              N = o;
            switch (((h = t), (x = n), N.tag)) {
              case 1:
                if (((C = N.payload), typeof C == "function")) {
                  g = C.call(x, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = N.payload), (h = typeof C == "function" ? C.call(x, g, h) : C), h == null)
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
          ((x = {
            eventTime: x,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = x), (s = g)) : (y = y.next = x),
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
  var ur = {},
    mt = Mt(ur),
    ir = Mt(ur),
    or = Mt(ur);
  function en(e) {
    if (e === ur) throw Error(m(174));
    return e;
  }
  function Du(e, t) {
    switch ((b(or, t), b(ir, e), b(mt, ur), (e = t.nodeType), e)) {
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
    (te(mt), b(mt, t));
  }
  function Pn() {
    (te(mt), te(ir), te(or));
  }
  function fs(e) {
    en(or.current);
    var t = en(mt.current),
      n = Fl(t, e.type);
    t !== n && (b(ir, e), b(mt, n));
  }
  function Fu(e) {
    ir.current === e && (te(mt), te(ir));
  }
  var oe = Mt(0);
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
  var Uu = [];
  function Au() {
    for (var e = 0; e < Uu.length; e++) Uu[e]._workInProgressVersionPrimary = null;
    Uu.length = 0;
  }
  var rl = Ee.ReactCurrentDispatcher,
    Vu = Ee.ReactCurrentBatchConfig,
    tn = 0,
    se = null,
    me = null,
    ye = null,
    ll = !1,
    sr = !1,
    ar = 0,
    nf = 0;
  function Ce() {
    throw Error(m(321));
  }
  function Bu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!rt(e[n], t[n])) return !1;
    return !0;
  }
  function $u(e, t, n, r, l, u) {
    if (
      ((tn = u),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? of : sf),
      (e = n(r, l)),
      sr)
    ) {
      u = 0;
      do {
        if (((sr = !1), (ar = 0), 25 <= u)) throw Error(m(301));
        ((u += 1), (ye = me = null), (t.updateQueue = null), (rl.current = af), (e = n(r, l)));
      } while (sr);
    }
    if (
      ((rl.current = ol),
      (t = me !== null && me.next !== null),
      (tn = 0),
      (ye = me = se = null),
      (ll = !1),
      t)
    )
      throw Error(m(300));
    return e;
  }
  function Hu() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function ht() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e), ye);
  }
  function Ge() {
    if (me === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var t = ye === null ? se.memoizedState : ye.next;
    if (t !== null) ((ye = t), (me = e));
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
        ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e));
    }
    return ye;
  }
  function cr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wu(e) {
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
          (s === null ? ((o = s = g), (i = r)) : (s = s.next = g), (se.lanes |= y), (nn |= y));
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
      do ((u = l.lane), (se.lanes |= u), (nn |= u), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Qu(e) {
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
      (rt(u, t.memoizedState) || (Me = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, r];
  }
  function ds() {}
  function ps(e, t) {
    var n = se,
      r = Ge(),
      l = t(),
      u = !rt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Me = !0)),
      (r = r.queue),
      Ku(vs.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (ye !== null && ye.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), fr(9, hs.bind(null, n, r, l, t), void 0, null), ge === null))
        throw Error(m(349));
      (tn & 30) !== 0 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (se.updateQueue = t), (t.stores = [e]))
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
    var t = Et(e, 1);
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
        lastRenderedReducer: cr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = uf.bind(null, se, e)),
      [t.memoizedState, e]
    );
  }
  function fr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = se.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (se.updateQueue = t),
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
  function ul(e, t, n, r) {
    var l = ht();
    ((se.flags |= e), (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function il(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var i = me.memoizedState;
      if (((u = i.destroy), r !== null && Bu(r, i.deps))) {
        l.memoizedState = fr(t, n, u, r);
        return;
      }
    }
    ((se.flags |= e), (l.memoizedState = fr(1 | t, n, u, r)));
  }
  function Ss(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Ku(e, t) {
    return il(2048, 8, e, t);
  }
  function xs(e, t) {
    return il(4, 2, e, t);
  }
  function Es(e, t) {
    return il(4, 4, e, t);
  }
  function _s(e, t) {
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
  function Cs(e, t, n) {
    return ((n = n != null ? n.concat([e]) : null), il(4, 4, _s.bind(null, t, e), n));
  }
  function Yu() {}
  function Ns(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
  }
  function Ps(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function zs(e, t, n) {
    return (tn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
      : (rt(n, t) || ((n = ro()), (se.lanes |= n), (nn |= n), (e.baseState = !0)), t);
  }
  function rf(e, t) {
    var n = J;
    ((J = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = Vu.transition;
    Vu.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((J = n), (Vu.transition = r));
    }
  }
  function Ls() {
    return Ge().memoizedState;
  }
  function lf(e, t, n) {
    var r = Ht(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ts(e)))
      Rs(t, n);
    else if (((n = os(e, t, n, r)), n !== null)) {
      var l = Te();
      (st(n, e, r, l), js(n, t, r));
    }
  }
  function uf(e, t, n) {
    var r = Ht(e),
      l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ts(e)) Rs(t, l);
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
      ((n = os(e, t, l, r)), n !== null && ((l = Te()), st(n, e, r, l), js(n, t, r)));
    }
  }
  function Ts(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function Rs(e, t) {
    sr = ll = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function js(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n));
    }
  }
  var ol = {
      readContext: Xe,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useInsertionEffect: Ce,
      useLayoutEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useMutableSource: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      unstable_isNewReconciler: !1,
    },
    of = {
      readContext: Xe,
      useCallback: function (e, t) {
        return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Xe,
      useEffect: Ss,
      useImperativeHandle: function (e, t, n) {
        return ((n = n != null ? n.concat([e]) : null), ul(4194308, 4, _s.bind(null, t, e), n));
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
          (e = e.dispatch = lf.bind(null, se, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: ws,
      useDebugValue: Yu,
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
        var r = se,
          l = ht();
        if (ue) {
          if (n === void 0) throw Error(m(407));
          n = n();
        } else {
          if (((n = t()), ge === null)) throw Error(m(349));
          (tn & 30) !== 0 || ms(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          Ss(vs.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, hs.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ht(),
          t = ge.identifierPrefix;
        if (ue) {
          var n = xt,
            r = St;
          ((n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = nf++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: Xe,
      useCallback: Ns,
      useContext: Xe,
      useEffect: Ku,
      useImperativeHandle: Cs,
      useInsertionEffect: xs,
      useLayoutEffect: Es,
      useMemo: Ps,
      useReducer: Wu,
      useRef: ks,
      useState: function () {
        return Wu(cr);
      },
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        var t = Ge();
        return zs(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Wu(cr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
      unstable_isNewReconciler: !1,
    },
    af = {
      readContext: Xe,
      useCallback: Ns,
      useContext: Xe,
      useEffect: Ku,
      useImperativeHandle: Cs,
      useInsertionEffect: xs,
      useLayoutEffect: Es,
      useMemo: Ps,
      useReducer: Qu,
      useRef: ks,
      useState: function () {
        return Qu(cr);
      },
      useDebugValue: Yu,
      useDeferredValue: function (e) {
        var t = Ge();
        return me === null ? (t.memoizedState = e) : zs(t, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Qu(cr)[0],
          t = Ge().memoizedState;
        return [e, t];
      },
      useMutableSource: ds,
      useSyncExternalStore: ps,
      useId: Ls,
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
  function Xu(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : _({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Ht(e),
        u = _t(r, l);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (st(t, e, l, r), el(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Te(),
        l = Ht(e),
        u = _t(r, l);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = At(e, u, l)),
        t !== null && (st(t, e, l, r), el(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Te(),
        r = Ht(e),
        l = _t(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = At(e, l, r)),
        t !== null && (st(t, e, r, n), el(t, e, r)));
    },
  };
  function Os(e, t, n, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Jn(n, r) || !Jn(l, u)
          : !0
    );
  }
  function Is(e, t, n) {
    var r = !1,
      l = Dt,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((l = Ie(t) ? Zt : _e.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? kn(e, l) : Dt)),
      (t = new t(n, u)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
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
  function Gu(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Mu(e));
    var u = t.contextType;
    (typeof u == "object" && u !== null
      ? (l.context = Xe(u))
      : ((u = Ie(t) ? Zt : _e.current), (l.context = kn(e, u))),
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
        t !== l.state && sl.enqueueReplaceState(l, l.state, null),
        tl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function zn(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += H(r)), (r = r.return));
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
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, t, n) {
    ((n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (hl || ((hl = !0), (di = r)), Ju(e, t));
      }),
      n
    );
  }
  function Fs(e, t, n) {
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
    l.has(n) || (l.add(n), (e = _f.bind(null, e, t, n)), t.then(e, e));
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
              (n.alternate === null ? (n.tag = 17) : ((t = _t(-1, 1)), (t.tag = 2), At(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var ff = Ee.ReactCurrentOwner,
    Me = !1;
  function Le(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Nn(t, l),
      (r = $u(e, t, n, r, u, l)),
      (n = Hu()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (ue && n && Cu(t), (t.flags |= 1), Le(e, t, r, l), t.child)
    );
  }
  function $s(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !wi(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Hs(e, t, u, r, l))
        : ((e = Sl(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), (e.lanes & l) === 0)) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Jn), n(i, r) && e.ref === t.ref))
        return Ct(e, t, l);
    }
    return ((t.flags |= 1), (e = Qt(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Hs(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref)
        if (((Me = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (Me = !0);
        else return ((t.lanes = e.lanes), Ct(e, t, l));
    }
    return qu(e, t, n, r, l);
  }
  function Ws(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          b(Tn, We),
          (We |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            b(Tn, We),
            (We |= e),
            null
          );
        ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = u !== null ? u.baseLanes : n),
          b(Tn, We),
          (We |= r));
      }
    else
      (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        b(Tn, We),
        (We |= r));
    return (Le(e, t, l, n), t.child);
  }
  function Qs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qu(e, t, n, r, l) {
    var u = Ie(n) ? Zt : _e.current;
    return (
      (u = kn(t, u)),
      Nn(t, l),
      (n = $u(e, t, n, r, u, l)),
      (r = Hu()),
      e !== null && !Me
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Ct(e, t, l))
        : (ue && r && Cu(t), (t.flags |= 1), Le(e, t, n, l), t.child)
    );
  }
  function Ks(e, t, n, r, l) {
    if (Ie(n)) {
      var u = !0;
      Kr(t);
    } else u = !1;
    if ((Nn(t, l), t.stateNode === null)) (cl(e, t), Is(t, n, r), Gu(t, n, r, l), (r = !0));
    else if (e === null) {
      var i = t.stateNode,
        o = t.memoizedProps;
      i.props = o;
      var s = i.context,
        p = n.contextType;
      typeof p == "object" && p !== null
        ? (p = Xe(p))
        : ((p = Ie(n) ? Zt : _e.current), (p = kn(t, p)));
      var y = n.getDerivedStateFromProps,
        g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      (g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Ms(t, i, r, p)),
        (Ut = !1));
      var h = t.memoizedState;
      ((i.state = h),
        tl(t, r, i, l),
        (s = t.memoizedState),
        o !== r || h !== s || Oe.current || Ut
          ? (typeof y == "function" && (Xu(t, n, y, r), (s = t.memoizedState)),
            (o = Ut || Os(t, n, o, r, h, s, p))
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
          ? (s = Xe(s))
          : ((s = Ie(n) ? Zt : _e.current), (s = kn(t, s))));
      var x = n.getDerivedStateFromProps;
      ((y = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && Ms(t, i, r, s)),
        (Ut = !1),
        (h = t.memoizedState),
        (i.state = h),
        tl(t, r, i, l));
      var C = t.memoizedState;
      o !== g || h !== C || Oe.current || Ut
        ? (typeof x == "function" && (Xu(t, n, x, r), (C = t.memoizedState)),
          (p = Ut || Os(t, n, p, r, h, C, s) || !1)
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
    return bu(e, t, n, r, u, l);
  }
  function bu(e, t, n, r, l, u) {
    Qs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return (l && Jo(t, n, !1), Ct(e, t, u));
    ((r = t.stateNode), (ff.current = t));
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && i
        ? ((t.child = _n(t, e.child, null, u)), (t.child = _n(t, null, o, u)))
        : Le(e, t, o, u),
      (t.memoizedState = r.state),
      l && Jo(t, n, !0),
      t.child
    );
  }
  function Ys(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Go(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Go(e, t.context, !1),
      Du(e, t.containerInfo));
  }
  function Xs(e, t, n, r, l) {
    return (En(), Lu(l), (t.flags |= 256), Le(e, t, n, r), t.child);
  }
  var ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ti(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps,
      l = oe.current,
      u = !1,
      i = (t.flags & 128) !== 0,
      o;
    if (
      ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
      b(oe, l & 1),
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
                  : (u = xl(i, r, 0, null)),
                (e = on(e, r, n, null)),
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
      return df(e, t, i, r, o, l, n);
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
      (t = xl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function al(e, t, n, r) {
    return (
      r !== null && Lu(r),
      _n(t, e.child, null, n),
      (e = ni(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function df(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zu(Error(m(422)))), al(e, t, i, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((u = r.fallback),
            (l = t.mode),
            (r = xl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = on(u, l, i, null)),
            (u.flags |= 2),
            (r.return = t),
            (u.return = t),
            (r.sibling = u),
            (t.child = r),
            (t.mode & 1) !== 0 && _n(t, e.child, null, i),
            (t.child.memoizedState = ti(i)),
            (t.memoizedState = ei),
            u);
    if ((t.mode & 1) === 0) return al(e, t, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return ((r = o), (u = Error(m(419))), (r = Zu(u, r, void 0)), al(e, t, i, r));
    }
    if (((o = (i & e.childLanes) !== 0), Me || o)) {
      if (((r = ge), r !== null)) {
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
      return (gi(), (r = Zu(Error(m(421)))), al(e, t, i, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = Cf.bind(null, e)), (l._reactRetry = t), null)
      : ((e = u.treeContext),
        (He = It(l.nextSibling)),
        ($e = t),
        (ue = !0),
        (lt = null),
        e !== null &&
          ((Ke[Ye++] = St),
          (Ke[Ye++] = xt),
          (Ke[Ye++] = Jt),
          (St = e.id),
          (xt = e.overflow),
          (Jt = t)),
        (t = ni(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Zs(e, t, n) {
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
  function Js(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Le(e, t, r.children, n), (r = oe.current), (r & 2) !== 0))
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
    if ((b(oe, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null;)
            ((e = n.alternate), e !== null && nl(e) === null && (l = n), (n = n.sibling));
          ((n = l),
            n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
            ri(t, !1, l, n, u));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null;) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
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
  function cl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ct(e, t, n) {
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
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ys(t), En());
        break;
      case 5:
        fs(t);
        break;
      case 1:
        Ie(t.type) && Kr(t);
        break;
      case 4:
        Du(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (b(qr, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (b(oe, oe.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Gs(e, t, n)
              : (b(oe, oe.current & 1), (e = Ct(e, t, n)), e !== null ? e.sibling : null);
        b(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          b(oe, oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Ws(e, t, n));
    }
    return Ct(e, t, n);
  }
  var qs, li, bs, ea;
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
    (li = function () {}),
    (bs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), en(mt.current));
        var u = null;
        switch (n) {
          case "input":
            ((l = Ol(e, l)), (r = Ol(e, r)), (u = []));
            break;
          case "select":
            ((l = _({}, l, { value: void 0 })), (r = _({}, r, { value: void 0 })), (u = []));
            break;
          case "textarea":
            ((l = Dl(e, l)), (r = Dl(e, r)), (u = []));
            break;
          default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
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
                (L.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
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
                    (L.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && ee("scroll", e), u || o === s || (u = []))
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
  function dr(e, t) {
    if (!ue)
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
  function mf(e, t, n) {
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
        return (Ne(t), null);
      case 1:
        return (Ie(t.type) && Qr(), Ne(t), null);
      case 3:
        return (
          (r = t.stateNode),
          Pn(),
          te(Oe),
          te(_e),
          Au(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), lt !== null && (hi(lt), (lt = null)))),
          li(e, t),
          Ne(t),
          null
        );
      case 5:
        Fu(t);
        var l = en(or.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (bs(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return (Ne(t), null);
          }
          if (((e = en(mt.current)), Zr(t))) {
            ((r = t.stateNode), (n = t.type));
            var u = t.memoizedProps;
            switch (((r[pt] = t), (r[nr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (ee("cancel", r), ee("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) ee(bn[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (ee("error", r), ee("load", r));
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                (Oi(r, u), ee("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!u.multiple }), ee("invalid", r));
                break;
              case "textarea":
                (Di(r, u), ee("invalid", r));
            }
            (Ul(n, u), (l = null));
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 && $r(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 && $r(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : L.hasOwnProperty(i) && o != null && i === "onScroll" && ee("scroll", r);
              }
            switch (n) {
              case "input":
                (wr(r), Mi(r, u, !0));
                break;
              case "textarea":
                (wr(r), Ui(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
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
              (e[nr] = r),
              qs(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((i = Al(n, r)), n)) {
                case "dialog":
                  (ee("cancel", e), ee("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (ee("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) ee(bn[l], e);
                  l = r;
                  break;
                case "source":
                  (ee("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (ee("error", e), ee("load", e), (l = r));
                  break;
                case "details":
                  (ee("toggle", e), (l = r));
                  break;
                case "input":
                  (Oi(e, r), (l = Ol(e, r)), ee("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = _({}, r, { value: void 0 })),
                    ee("invalid", e));
                  break;
                case "textarea":
                  (Di(e, r), (l = Dl(e, r)), ee("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ul(n, l), (o = l));
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? $i(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Vi(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (n !== "textarea" || s !== "") && In(e, s)
                          : typeof s == "number" && In(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (L.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && ee("scroll", e)
                            : s != null && be(e, u, s, i));
                }
              switch (n) {
                case "input":
                  (wr(e), Mi(e, r, !1));
                  break;
                case "textarea":
                  (wr(e), Ui(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Z(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? sn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null && sn(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
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
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (((n = en(or.current)), en(mt.current), Zr(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[pt] = t),
              (u = r.nodeValue !== n) && ((e = $e), e !== null))
            )
              switch (e.tag) {
                case 3:
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    $r(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[pt] = t),
              (t.stateNode = r));
        }
        return (Ne(t), null);
      case 13:
        if (
          (te(oe),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ue && He !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (rs(), En(), (t.flags |= 98560), (u = !1));
          else if (((u = Zr(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(m(317));
              u[pt] = t;
            } else (En(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4));
            (Ne(t), (u = !1));
          } else (lt !== null && (hi(lt), (lt = null)), (u = !0));
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (oe.current & 1) !== 0 ? he === 0 && (he = 3) : gi())),
            t.updateQueue !== null && (t.flags |= 4),
            Ne(t),
            null);
      case 4:
        return (Pn(), li(e, t), e === null && er(t.stateNode.containerInfo), Ne(t), null);
      case 10:
        return (ju(t.type._context), Ne(t), null);
      case 17:
        return (Ie(t.type) && Qr(), Ne(t), null);
      case 19:
        if ((te(oe), (u = t.memoizedState), u === null)) return (Ne(t), null);
        if (((r = (t.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) dr(u, !1);
          else {
            if (he !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((i = nl(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      dr(u, !1),
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
                  return (b(oe, (oe.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            u.tail !== null &&
              fe() > Rn &&
              ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                dr(u, !0),
                u.tail === null && u.tailMode === "hidden" && !i.alternate && !ue)
              )
                return (Ne(t), null);
            } else
              2 * fe() - u.renderingStartTime > Rn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), dr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((n = u.last), n !== null ? (n.sibling = i) : (t.child = i), (u.last = i));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = fe()),
            (t.sibling = null),
            (n = oe.current),
            b(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ne(t), null);
      case 22:
      case 23:
        return (
          yi(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (We & 1073741824) !== 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
  function hf(e, t) {
    switch ((Nu(t), t.tag)) {
      case 1:
        return (
          Ie(t.type) && Qr(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pn(),
          te(Oe),
          te(_e),
          Au(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return (Fu(t), null);
      case 13:
        if ((te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
      case 19:
        return (te(oe), null);
      case 4:
        return (Pn(), null);
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
  var fl = !1,
    Pe = !1,
    vf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function Ln(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ce(e, t, r);
        }
      else n.current = null;
  }
  function ui(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var ta = !1;
  function yf(e, t) {
    if (((yu = Rr), (e = Oo()), au(e))) {
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
                var x;
                g !== n || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (x = g.firstChild) !== null;
              )
                ((h = g), (g = x));
              for (;;) {
                if (g === e) break t;
                if (
                  (h === n && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (x = g.nextSibling) !== null)
                )
                  break;
                ((g = h), (h = g.parentNode));
              }
              g = x;
            }
            n = o === -1 || s === -1 ? null : { start: o, end: s };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (gu = { focusedElem: e, selectionRange: n }, Rr = !1, E = t; E !== null;)
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
                    var N = C.memoizedProps,
                      de = C.memoizedState,
                      f = t.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? N : ut(t.type, N),
                        de,
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
            ce(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (E = e));
            break;
          }
          E = t.return;
        }
    return ((C = ta), (ta = !1), C);
  }
  function pr(e, t, n) {
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
  function na(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), na(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[pt], delete t[nr], delete t[xu], delete t[qc], delete t[bc])),
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
            n != null || t.onclick !== null || (t.onclick = Hr)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (oi(e, t, n), e = e.sibling; e !== null;) (oi(e, t, n), (e = e.sibling));
  }
  function si(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (si(e, t, n), e = e.sibling; e !== null;) (si(e, t, n), (e = e.sibling));
  }
  var Se = null,
    it = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null;) (ua(e, t, n), (n = n.sibling));
  }
  function ua(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Cr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Pe || Ln(n, t);
      case 6:
        var r = Se,
          l = it;
        ((Se = null),
          Vt(e, t, n),
          (Se = r),
          (it = l),
          Se !== null &&
            (it
              ? ((e = Se),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : Se.removeChild(n.stateNode)));
        break;
      case 18:
        Se !== null &&
          (it
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? Su(e.parentNode, n) : e.nodeType === 1 && Su(e, n),
              Qn(e))
            : Su(Se, n.stateNode));
        break;
      case 4:
        ((r = Se),
          (l = it),
          (Se = n.stateNode.containerInfo),
          (it = !0),
          Vt(e, t, n),
          (Se = r),
          (it = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
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
        if (!Pe && (Ln(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
          try {
            ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
          } catch (o) {
            ce(n, t, o);
          }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Pe = (r = Pe) || n.memoizedState !== null), Vt(e, t, n), (Pe = r))
          : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
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
                ((Se = o.stateNode), (it = !1));
                break e;
              case 3:
                ((Se = o.stateNode.containerInfo), (it = !0));
                break e;
              case 4:
                ((Se = o.stateNode.containerInfo), (it = !0));
                break e;
            }
            o = o.return;
          }
          if (Se === null) throw Error(m(160));
          (ua(u, i, l), (Se = null), (it = !1));
          var s = l.alternate;
          (s !== null && (s.return = null), (l.return = null));
        } catch (p) {
          ce(l, t, p);
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
            (pr(3, e, e.return), dl(3, e));
          } catch (N) {
            ce(e, e.return, N);
          }
          try {
            pr(5, e, e.return);
          } catch (N) {
            ce(e, e.return, N);
          }
        }
        break;
      case 1:
        (ot(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return));
        break;
      case 5:
        if ((ot(t, e), vt(e), r & 512 && n !== null && Ln(n, n.return), e.flags & 32)) {
          var l = e.stateNode;
          try {
            In(l, "");
          } catch (N) {
            ce(e, e.return, N);
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
                  g = s[i + 1];
                y === "style"
                  ? $i(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? Vi(l, g)
                    : y === "children"
                      ? In(l, g)
                      : be(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Il(l, u);
                  break;
                case "textarea":
                  Fi(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var x = u.value;
                  x != null
                    ? sn(l, !!u.multiple, x, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? sn(l, !!u.multiple, u.defaultValue, !0)
                        : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (N) {
              ce(e, e.return, N);
            }
        }
        break;
      case 6:
        if ((ot(t, e), vt(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          ((l = e.stateNode), (u = e.memoizedProps));
          try {
            l.nodeValue = u;
          } catch (N) {
            ce(e, e.return, N);
          }
        }
        break;
      case 3:
        if ((ot(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Qn(t.containerInfo);
          } catch (N) {
            ce(e, e.return, N);
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
            !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (fi = fe())),
          r & 4 && ia(e));
        break;
      case 22:
        if (
          ((y = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Pe = (p = Pe) || y), ot(t, e), (Pe = p)) : ot(t, e),
          vt(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !y && (e.mode & 1) !== 0)
          )
            for (E = e, y = e.child; y !== null;) {
              for (g = E = y; E !== null;) {
                switch (((h = E), (x = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    Ln(h, h.return);
                    var C = h.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      ((r = h), (n = h.return));
                      try {
                        ((t = r),
                          (C.props = t.memoizedProps),
                          (C.state = t.memoizedState),
                          C.componentWillUnmount());
                      } catch (N) {
                        ce(r, n, N);
                      }
                    }
                    break;
                  case 5:
                    Ln(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ca(g);
                      continue;
                    }
                }
                x !== null ? ((x.return = h), (E = x)) : ca(g);
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
                } catch (N) {
                  ce(e, e.return, N);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (N) {
                  ce(e, e.return, N);
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
            r.flags & 32 && (In(l, ""), (r.flags &= -33));
            var u = la(e);
            si(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = la(e);
            oi(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ce(e, e.return, s);
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
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Pe;
          o = fl;
          var p = Pe;
          if (((fl = i), (Pe = s) && !p))
            for (E = l; E !== null;)
              ((i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? fa(l)
                  : s !== null
                    ? ((s.return = i), (E = s))
                    : fa(l));
          for (; u !== null;) ((E = u), sa(u), (u = u.sibling));
          ((E = l), (fl = o), (Pe = p));
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
                Pe || dl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Pe)
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
                      g !== null && Qn(g);
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
          Pe || (t.flags & 512 && ii(t));
        } catch (h) {
          ce(t, t.return, h);
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
              dl(4, t);
            } catch (s) {
              ce(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ce(t, l, s);
              }
            }
            var u = t.return;
            try {
              ii(t);
            } catch (s) {
              ce(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ii(t);
            } catch (s) {
              ce(t, i, s);
            }
        }
      } catch (s) {
        ce(t, t.return, s);
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
    pl = Ee.ReactCurrentDispatcher,
    ai = Ee.ReactCurrentOwner,
    Ze = Ee.ReactCurrentBatchConfig,
    $ = 0,
    ge = null,
    pe = null,
    xe = 0,
    We = 0,
    Tn = Mt(0),
    he = 0,
    mr = null,
    nn = 0,
    ml = 0,
    ci = 0,
    hr = null,
    De = null,
    fi = 0,
    Rn = 1 / 0,
    Nt = null,
    hl = !1,
    di = null,
    Bt = null,
    vl = !1,
    $t = null,
    yl = 0,
    vr = 0,
    pi = null,
    gl = -1,
    wl = 0;
  function Te() {
    return ($ & 6) !== 0 ? fe() : gl !== -1 ? gl : (gl = fe());
  }
  function Ht(e) {
    return (e.mode & 1) === 0
      ? 1
      : ($ & 2) !== 0 && xe !== 0
        ? xe & -xe
        : tf.transition !== null
          ? (wl === 0 && (wl = ro()), wl)
          : ((e = J), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : po(e.type))), e);
  }
  function st(e, t, n, r) {
    if (50 < vr) throw ((vr = 0), (pi = null), Error(m(185)));
    (Vn(e, n, r),
      (($ & 2) === 0 || e !== ge) &&
        (e === ge && (($ & 2) === 0 && (ml |= n), he === 4 && Wt(e, xe)),
        Fe(e, r),
        n === 1 && $ === 0 && (t.mode & 1) === 0 && ((Rn = fe() + 500), Yr && Ft())));
  }
  function Fe(e, t) {
    var n = e.callbackNode;
    tc(e, t);
    var r = zr(e, e === ge ? xe : 0);
    if (r === 0) (n !== null && eo(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && eo(n), t === 1))
        (e.tag === 0 ? ef(pa.bind(null, e)) : qo(pa.bind(null, e)),
          Zc(function () {
            ($ & 6) === 0 && Ft();
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
            n = _r;
            break;
          case 536870912:
            n = no;
            break;
          default:
            n = _r;
        }
        n = Sa(n, da.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function da(e, t) {
    if (((gl = -1), (wl = 0), ($ & 6) !== 0)) throw Error(m(327));
    var n = e.callbackNode;
    if (jn() && e.callbackNode !== n) return null;
    var r = zr(e, e === ge ? xe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = kl(e, r);
    else {
      t = r;
      var l = $;
      $ |= 2;
      var u = ha();
      (ge !== e || xe !== t) && ((Nt = null), (Rn = fe() + 500), ln(e, t));
      do
        try {
          xf();
          break;
        } catch (o) {
          ma(e, o);
        }
      while (!0);
      (Ru(), (pl.current = u), ($ = l), pe !== null ? (t = 0) : ((ge = null), (xe = 0), (t = he)));
    }
    if (t !== 0) {
      if ((t === 2 && ((l = Yl(e)), l !== 0 && ((r = l), (t = mi(e, l)))), t === 1))
        throw ((n = mr), ln(e, 0), Wt(e, r), Fe(e, fe()), n);
      if (t === 6) Wt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !kf(l) &&
            ((t = kl(e, r)),
            t === 2 && ((u = Yl(e)), u !== 0 && ((r = u), (t = mi(e, u)))),
            t === 1))
        )
          throw ((n = mr), ln(e, 0), Wt(e, r), Fe(e, fe()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, De, Nt);
            break;
          case 3:
            if ((Wt(e, r), (r & 130023424) === r && ((t = fi + 500 - fe()), 10 < t))) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (Te(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ku(un.bind(null, e, De, Nt), t);
              break;
            }
            un(e, De, Nt);
            break;
          case 4:
            if ((Wt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r;) {
              var i = 31 - nt(r);
              ((u = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~u));
            }
            if (
              ((r = l),
              (r = fe() - r),
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
              e.timeoutHandle = ku(un.bind(null, e, De, Nt), r);
              break;
            }
            un(e, De, Nt);
            break;
          case 5:
            un(e, De, Nt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return (Fe(e, fe()), e.callbackNode === n ? da.bind(null, e) : null);
  }
  function mi(e, t) {
    var n = hr;
    return (
      e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
      (e = kl(e, t)),
      e !== 2 && ((t = De), (De = n), t !== null && hi(t)),
      e
    );
  }
  function hi(e) {
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
      t &= ~ci, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - nt(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function pa(e) {
    if (($ & 6) !== 0) throw Error(m(327));
    jn();
    var t = zr(e, 0);
    if ((t & 1) === 0) return (Fe(e, fe()), null);
    var n = kl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Yl(e);
      r !== 0 && ((t = r), (n = mi(e, r)));
    }
    if (n === 1) throw ((n = mr), ln(e, 0), Wt(e, t), Fe(e, fe()), n);
    if (n === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, De, Nt),
      Fe(e, fe()),
      null
    );
  }
  function vi(e, t) {
    var n = $;
    $ |= 1;
    try {
      return e(t);
    } finally {
      (($ = n), $ === 0 && ((Rn = fe() + 500), Yr && Ft()));
    }
  }
  function rn(e) {
    $t !== null && $t.tag === 0 && ($ & 6) === 0 && jn();
    var t = $;
    $ |= 1;
    var n = Ze.transition,
      r = J;
    try {
      if (((Ze.transition = null), (J = 1), e)) return e();
    } finally {
      ((J = r), (Ze.transition = n), ($ = t), ($ & 6) === 0 && Ft());
    }
  }
  function yi() {
    ((We = Tn.current), te(Tn));
  }
  function ln(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Gc(n)), pe !== null))
      for (n = pe.return; n !== null;) {
        var r = n;
        switch ((Nu(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Qr());
            break;
          case 3:
            (Pn(), te(Oe), te(_e), Au());
            break;
          case 5:
            Fu(r);
            break;
          case 4:
            Pn();
            break;
          case 13:
            te(oe);
            break;
          case 19:
            te(oe);
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
      ((ge = e),
      (pe = e = Qt(e.current, null)),
      (xe = We = t),
      (he = 0),
      (mr = null),
      (ci = ml = nn = 0),
      (De = hr = null),
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
  function ma(e, t) {
    do {
      var n = pe;
      try {
        if ((Ru(), (rl.current = ol), ll)) {
          for (var r = se.memoizedState; r !== null;) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          ll = !1;
        }
        if (
          ((tn = 0),
          (ye = me = se = null),
          (sr = !1),
          (ar = 0),
          (ai.current = null),
          n === null || n.return === null)
        ) {
          ((he = 1), (mr = t), (pe = null));
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
            var x = As(i);
            if (x !== null) {
              ((x.flags &= -257), Vs(x, i, o, u, t), x.mode & 1 && Us(u, p, t), (t = x), (s = p));
              var C = t.updateQueue;
              if (C === null) {
                var N = new Set();
                (N.add(s), (t.updateQueue = N));
              } else C.add(s);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Us(u, p, t), gi());
                break e;
              }
              s = Error(m(426));
            }
          } else if (ue && o.mode & 1) {
            var de = As(i);
            if (de !== null) {
              ((de.flags & 65536) === 0 && (de.flags |= 256), Vs(de, i, o, u, t), Lu(zn(s, o)));
              break e;
            }
          }
          ((u = s = zn(s, o)),
            he !== 4 && (he = 2),
            hr === null ? (hr = [u]) : hr.push(u),
            (u = i));
          do {
            switch (u.tag) {
              case 3:
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var f = Ds(u, s, t);
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
                  var w = Fs(u, o, t);
                  as(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ya(n);
      } catch (P) {
        ((t = P), pe === n && n !== null && (pe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = pl.current;
    return ((pl.current = ol), e === null ? ol : e);
  }
  function gi() {
    ((he === 0 || he === 3 || he === 2) && (he = 4),
      ge === null || ((nn & 268435455) === 0 && (ml & 268435455) === 0) || Wt(ge, xe));
  }
  function kl(e, t) {
    var n = $;
    $ |= 2;
    var r = ha();
    (ge !== e || xe !== t) && ((Nt = null), ln(e, t));
    do
      try {
        Sf();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if ((Ru(), ($ = n), (pl.current = r), pe !== null)) throw Error(m(261));
    return ((ge = null), (xe = 0), he);
  }
  function Sf() {
    for (; pe !== null;) va(pe);
  }
  function xf() {
    for (; pe !== null && !Ka();) va(pe);
  }
  function va(e) {
    var t = ka(e.alternate, e, We);
    ((e.memoizedProps = e.pendingProps), t === null ? ya(e) : (pe = t), (ai.current = null));
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = mf(n, t, We)), n !== null)) {
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
  function un(e, t, n) {
    var r = J,
      l = Ze.transition;
    try {
      ((Ze.transition = null), (J = 1), Ef(e, t, n, r));
    } finally {
      ((Ze.transition = l), (J = r));
    }
    return null;
  }
  function Ef(e, t, n, r) {
    do jn();
    while ($t !== null);
    if (($ & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(m(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var u = n.lanes | n.childLanes;
    if (
      (nc(e, u),
      e === ge && ((pe = ge = null), (xe = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        vl ||
        ((vl = !0),
        Sa(_r, function () {
          return (jn(), null);
        })),
      (u = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || u)
    ) {
      ((u = Ze.transition), (Ze.transition = null));
      var i = J;
      J = 1;
      var o = $;
      (($ |= 4),
        (ai.current = null),
        yf(e, n),
        oa(n, e),
        $c(gu),
        (Rr = !!yu),
        (gu = yu = null),
        (e.current = n),
        gf(n),
        Ya(),
        ($ = o),
        (J = i),
        (Ze.transition = u));
    } else e.current = n;
    if (
      (vl && ((vl = !1), ($t = e), (yl = l)),
      (u = e.pendingLanes),
      u === 0 && (Bt = null),
      Za(n.stateNode),
      Fe(e, fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (hl) throw ((hl = !1), (e = di), (di = null), e);
    return (
      (yl & 1) !== 0 && e.tag !== 0 && jn(),
      (u = e.pendingLanes),
      (u & 1) !== 0 ? (e === pi ? vr++ : ((vr = 0), (pi = e))) : (vr = 0),
      Ft(),
      null
    );
  }
  function jn() {
    if ($t !== null) {
      var e = lo(yl),
        t = Ze.transition,
        n = J;
      try {
        if (((Ze.transition = null), (J = 16 > e ? 16 : e), $t === null)) var r = !1;
        else {
          if (((e = $t), ($t = null), (yl = 0), ($ & 6) !== 0)) throw Error(m(331));
          var l = $;
          for ($ |= 4, E = e.current; E !== null;) {
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
                        pr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) ((g.return = y), (E = g));
                    else
                      for (; E !== null;) {
                        y = E;
                        var h = y.sibling,
                          x = y.return;
                        if ((na(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          ((h.return = x), (E = h));
                          break;
                        }
                        E = x;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var N = C.child;
                  if (N !== null) {
                    C.child = null;
                    do {
                      var de = N.sibling;
                      ((N.sibling = null), (N = de));
                    } while (N !== null);
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
                      pr(9, u, u.return);
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
                        dl(9, o);
                    }
                  } catch (P) {
                    ce(o, o.return, P);
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
          if ((($ = l), Ft(), dt && typeof dt.onPostCommitFiberRoot == "function"))
            try {
              dt.onPostCommitFiberRoot(Cr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((J = n), (Ze.transition = t));
      }
    }
    return !1;
  }
  function ga(e, t, n) {
    ((t = zn(n, t)),
      (t = Ds(e, t, 1)),
      (e = At(e, t, 1)),
      (t = Te()),
      e !== null && (Vn(e, 1, t), Fe(e, t)));
  }
  function ce(e, t, n) {
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
            ((e = zn(n, e)),
              (e = Fs(t, e, 1)),
              (t = At(t, e, 1)),
              (e = Te()),
              t !== null && (Vn(t, 1, e), Fe(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function _f(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = Te()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ge === e &&
        (xe & n) === n &&
        (he === 4 || (he === 3 && (xe & 130023424) === xe && 500 > fe() - fi)
          ? ln(e, 0)
          : (ci |= n)),
      Fe(e, t));
  }
  function wa(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = Te();
    ((e = Et(e, t)), e !== null && (Vn(e, t, n), Fe(e, n)));
  }
  function Cf(e) {
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
      if (e.memoizedProps !== t.pendingProps || Oe.current) Me = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return ((Me = !1), pf(e, t, n));
        Me = (e.flags & 131072) !== 0;
      }
    else ((Me = !1), ue && (t.flags & 1048576) !== 0 && bo(t, Gr, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (cl(e, t), (e = t.pendingProps));
        var l = kn(t, _e.current);
        (Nn(t, n), (l = $u(null, t, r, e, l, n)));
        var u = Hu();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ie(r) ? ((u = !0), Kr(t)) : (u = !1),
              (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
              Mu(t),
              (l.updater = sl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Gu(t, r, e, n),
              (t = bu(null, t, r, !0, u, n)))
            : ((t.tag = 0), ue && u && Cu(t), Le(null, t, l, n), (t = t.child)),
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
            (l = t.tag = zf(r)),
            (e = ut(r, e)),
            l)
          ) {
            case 0:
              t = qu(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
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
          Ks(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((Ys(t), e === null)) throw Error(m(387));
          ((r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            ss(e, t),
            tl(t, r, null, n));
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
              ((l = zn(Error(m(423)), t)), (t = Xs(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = zn(Error(m(424)), t)), (t = Xs(e, t, r, n, l)));
              break e;
            } else
              for (
                He = It(t.stateNode.containerInfo.firstChild),
                  $e = t,
                  ue = !0,
                  lt = null,
                  n = is(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((En(), r === l)) {
              t = Ct(e, t, n);
              break e;
            }
            Le(e, t, r, n);
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
          wu(r, l) ? (i = null) : u !== null && wu(r, u) && (t.flags |= 32),
          Qs(e, t),
          Le(e, t, i, n),
          t.child
        );
      case 6:
        return (e === null && zu(t), null);
      case 13:
        return Gs(e, t, n);
      case 4:
        return (
          Du(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = _n(t, null, r, n)) : Le(e, t, r, n),
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
        return (Le(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Le(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Le(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (i = l.value),
            b(qr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (rt(u.value, i)) {
              if (u.children === l.children && !Oe.current) {
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
          (Le(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Nn(t, n),
          (l = Xe(l)),
          (r = r(l)),
          (t.flags |= 1),
          Le(e, t, r, n),
          t.child
        );
      case 14:
        return ((r = t.type), (l = ut(r, t.pendingProps)), (l = ut(r.type, l)), $s(e, t, r, l, n));
      case 15:
        return Hs(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ut(r, l)),
          cl(e, t),
          (t.tag = 1),
          Ie(r) ? ((e = !0), Kr(t)) : (e = !1),
          Nn(t, n),
          Is(t, r, l),
          Gu(t, r, l, n),
          bu(null, t, r, !0, e, n)
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
  function Pf(e, t, n, r) {
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
    return new Pf(e, t, n, r);
  }
  function wi(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function zf(e) {
    if (typeof e == "function") return wi(e) ? 1 : 0;
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
    if (((r = e), typeof e == "function")) wi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case Re:
          return on(n.children, l, u, t);
        case Qe:
          ((i = 8), (l |= 8));
          break;
        case Pt:
          return ((e = Je(12, n, t, l | 2)), (e.elementType = Pt), (e.lanes = u), e);
        case Ae:
          return ((e = Je(13, n, t, l)), (e.elementType = Ae), (e.lanes = u), e);
        case tt:
          return ((e = Je(19, n, t, l)), (e.elementType = tt), (e.lanes = u), e);
        case ae:
          return xl(n, l, u, t);
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
              case je:
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
  function xl(e, t, n, r) {
    return (
      (e = Je(22, e, r, t)),
      (e.elementType = ae),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ki(e, t, n) {
    return ((e = Je(6, e, null, t)), (e.lanes = n), e);
  }
  function Si(e, t, n) {
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
  function Lf(e, t, n, r, l) {
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
  function xi(e, t, n, r, l, u, i, o, s) {
    return (
      (e = new Lf(e, t, n, o, s)),
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
      Mu(u),
      e
    );
  }
  function Tf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ze,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function xa(e) {
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
            if (Ie(t.type)) {
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
      if (Ie(n)) return Zo(e, n, t);
    }
    return t;
  }
  function Ea(e, t, n, r, l, u, i, o, s) {
    return (
      (e = xi(n, r, !0, e, l, u, i, o, s)),
      (e.context = xa(null)),
      (n = e.current),
      (r = Te()),
      (l = Ht(n)),
      (u = _t(r, l)),
      (u.callback = t ?? null),
      At(n, u, l),
      (e.current.lanes = l),
      Vn(e, l, r),
      Fe(e, r),
      e
    );
  }
  function El(e, t, n, r) {
    var l = t.current,
      u = Te(),
      i = Ht(l);
    return (
      (n = xa(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = _t(u, i)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = At(l, t, i)),
      e !== null && (st(e, l, i, u), el(e, l, i)),
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
  function _a(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ei(e, t) {
    (_a(e, t), (e = e.alternate) && _a(e, t));
  }
  function Rf() {
    return null;
  }
  var Ca =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function _i(e) {
    this._internalRoot = e;
  }
  ((Cl.prototype.render = _i.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(m(409));
      El(e, t, null, null);
    }),
    (Cl.prototype.unmount = _i.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (rn(function () {
            El(null, e, null, null);
          }),
            (t[wt] = null));
        }
      }));
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function (e) {
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
  function Nl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Na() {}
  function jf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = Ea(t, r, e, 0, null, !1, !1, "", Na);
      return (
        (e._reactRootContainer = i),
        (e[wt] = i.current),
        er(e.nodeType === 8 ? e.parentNode : e),
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
    var s = xi(e, 0, !1, null, null, !1, !1, "", Na);
    return (
      (e._reactRootContainer = s),
      (e[wt] = s.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      rn(function () {
        El(t, s, n, r);
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
      El(t, i, e, l);
    } else i = jf(n, t, e, l, r);
    return _l(i);
  }
  ((uo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = An(t.pendingLanes);
          n !== 0 && (Gl(t, n | 1), Fe(t, fe()), ($ & 6) === 0 && ((Rn = fe() + 500), Ft()));
        }
        break;
      case 13:
        (rn(function () {
          var r = Et(e, 1);
          if (r !== null) {
            var l = Te();
            st(r, e, 1, l);
          }
        }),
          Ei(e, 1));
    }
  }),
    (Zl = function (e) {
      if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
          var n = Te();
          st(t, e, 134217728, n);
        }
        Ei(e, 134217728);
      }
    }),
    (io = function (e) {
      if (e.tag === 13) {
        var t = Ht(e),
          n = Et(e, t);
        if (n !== null) {
          var r = Te();
          st(n, e, t, r);
        }
        Ei(e, t);
      }
    }),
    (oo = function () {
      return J;
    }),
    (so = function (e, t) {
      var n = J;
      try {
        return ((J = e), t());
      } finally {
        J = n;
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
                var l = Wr(r);
                if (!l) throw Error(m(90));
                (ji(r), Il(r, l));
              }
            }
          }
          break;
        case "textarea":
          Fi(e, n);
          break;
        case "select":
          ((t = n.value), t != null && sn(e, !!n.multiple, t, !1));
      }
    }),
    (Ki = vi),
    (Yi = rn));
  var Of = { usingClientEntryPoint: !1, Events: [rr, gn, Wr, Wi, Qi, vi] },
    yr = {
      findFiberByHostInstance: Gt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    If = {
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
      currentDispatcherRef: Ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Ji(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: yr.findFiberByHostInstance || Rf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        ((Cr = zl.inject(If)), (dt = zl));
      } catch {}
  }
  return (
    (Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of),
    (Ue.createPortal = function (e, t) {
      var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ci(t)) throw Error(m(200));
      return Tf(e, t, null, n);
    }),
    (Ue.createRoot = function (e, t) {
      if (!Ci(e)) throw Error(m(299));
      var n = !1,
        r = "",
        l = Ca;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = xi(e, 1, !1, null, null, n, !1, r, l)),
        (e[wt] = t.current),
        er(e.nodeType === 8 ? e.parentNode : e),
        new _i(t)
      );
    }),
    (Ue.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return ((e = Ji(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (Ue.flushSync = function (e) {
      return rn(e);
    }),
    (Ue.hydrate = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Pl(null, e, t, !0, n);
    }),
    (Ue.hydrateRoot = function (e, t, n) {
      if (!Ci(e)) throw Error(m(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        i = Ca;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Ea(t, null, e, 1, n ?? null, l, !1, u, i)),
        (e[wt] = t.current),
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
      return new Cl(t);
    }),
    (Ue.render = function (e, t, n) {
      if (!Nl(t)) throw Error(m(200));
      return Pl(null, e, t, !1, n);
    }),
    (Ue.unmountComponentAtNode = function (e) {
      if (!Nl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rn(function () {
            Pl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (Ue.unstable_batchedUpdates = vi),
    (Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Nl(n)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Pl(e, t, n, !1, r);
    }),
    (Ue.version = "18.3.1-next-f1338f8080-20240426"),
    Ue
  );
}
var Ia;
function $f() {
  if (Ia) return zi.exports;
  Ia = 1;
  function k() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k);
      } catch (T) {
        console.error(T);
      }
  }
  return (k(), (zi.exports = Bf()), zi.exports);
}
var Ma;
function Hf() {
  if (Ma) return Ll;
  Ma = 1;
  var k = $f();
  return ((Ll.createRoot = k.createRoot), (Ll.hydrateRoot = k.hydrateRoot), Ll);
}
var Wf = Hf();
function Qf({ src: k, className: T, style: m }) {
  const O = qe.useRef(null),
    L = qe.useRef(null),
    V = qe.useRef(!1),
    [ne, ie] = qe.useState(!1),
    B = (U, re = 500) => {
      const K = O.current;
      if (!K || ne) return;
      L.current !== null && (cancelAnimationFrame(L.current), (L.current = null));
      const Y = K.style.opacity ? parseFloat(K.style.opacity) : 0,
        ke = performance.now(),
        ve = (G) => {
          const X = Math.min((G - ke) / re, 1);
          ((K.style.opacity = String(Y + (U - Y) * X)),
            X < 1 ? (L.current = requestAnimationFrame(ve)) : (L.current = null));
        };
      L.current = requestAnimationFrame(ve);
    };
  return (
    qe.useEffect(() => {
      ie(!1);
      const U = O.current;
      if (!U) return;
      ((U.loop = !1), (U.style.opacity = "0"), (V.current = !1));
      const re = () => {
          ((U.style.opacity = "0"),
            U.play()
              .then(() => B(1))
              .catch(() => B(1)));
        },
        K = () => {
          const ve = U.duration;
          if (!ve || V.current) return;
          const G = ve - U.currentTime;
          G <= 0.55 && G > 0 && ((V.current = !0), B(0));
        },
        Y = () => {
          ((U.style.opacity = "0"),
            L.current !== null && cancelAnimationFrame(L.current),
            window.setTimeout(() => {
              O.current &&
                ((O.current.currentTime = 0),
                O.current
                  .play()
                  .then(() => {
                    ((V.current = !1), B(1));
                  })
                  .catch(() => {}));
            }, 100));
        },
        ke = () => ie(!0);
      return (
        U.addEventListener("loadeddata", re),
        U.addEventListener("timeupdate", K),
        U.addEventListener("ended", Y),
        U.addEventListener("error", ke),
        U.readyState >= 2 && re(),
        () => {
          (U.removeEventListener("loadeddata", re),
            U.removeEventListener("timeupdate", K),
            U.removeEventListener("ended", Y),
            U.removeEventListener("error", ke),
            L.current !== null && cancelAnimationFrame(L.current));
        }
      );
    }, [k, ne]),
    ne
      ? z.jsx("div", { className: `video-fallback ${T ?? ""}`, style: m, "aria-hidden": !0 })
      : z.jsx("video", {
          ref: O,
          src: k,
          className: T,
          style: { opacity: 0, ...m },
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          preload: "auto",
        })
  );
}
function Kf({ variant: k = "dark" }) {
  const T =
      k === "dark"
        ? "border-t border-white/10 bg-black px-6 py-20 md:px-12"
        : "border-t border-[#e2e8f0] bg-white px-6 py-20 md:px-12",
    m =
      k === "dark" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#0f172a]",
    O =
      k === "dark"
        ? "mt-4 max-w-2xl text-sm leading-relaxed text-white/60"
        : "mt-4 max-w-2xl text-sm leading-relaxed text-[#64748b]";
  return z.jsxs(z.Fragment, {
    children: [
      z.jsx("section", {
        id: "privacy",
        className: T,
        children: z.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            z.jsx("h2", { className: m, children: "Privacy Policy" }),
            z.jsx("p", {
              className: O,
              children:
                "This privacy policy describes how we collect, use, and protect information when you use our services. Replace this copy with your legal team's final text before launch.",
            }),
          ],
        }),
      }),
      z.jsx("section", {
        id: "terms",
        className: T,
        children: z.jsxs("div", {
          className: "mx-auto max-w-4xl",
          children: [
            z.jsx("h2", { className: m, children: "Terms of Service" }),
            z.jsx("p", {
              className: O,
              children:
                "These terms govern access to the site and products. By continuing to browse, you agree to the policies published here. Update with your jurisdiction-specific terms before production.",
            }),
          ],
        }),
      }),
    ],
  });
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = (k) => k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Fa = (...k) =>
    k
      .filter((T, m, O) => !!T && T.trim() !== "" && O.indexOf(T) === m)
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
 */ const Gf = qe.forwardRef(
  (
    {
      color: k = "currentColor",
      size: T = 24,
      strokeWidth: m = 2,
      absoluteStrokeWidth: O,
      className: L = "",
      children: V,
      iconNode: ne,
      ...ie
    },
    B,
  ) =>
    qe.createElement(
      "svg",
      {
        ref: B,
        ...Xf,
        width: T,
        height: T,
        stroke: k,
        strokeWidth: O ? (Number(m) * 24) / Number(T) : m,
        className: Fa("lucide", L),
        ...ie,
      },
      [...ne.map(([U, re]) => qe.createElement(U, re)), ...(Array.isArray(V) ? V : [V])],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ua = (k, T) => {
  const m = qe.forwardRef(({ className: O, ...L }, V) =>
    qe.createElement(Gf, { ref: V, iconNode: T, className: Fa(`lucide-${Yf(k)}`, O), ...L }),
  );
  return ((m.displayName = `${k}`), m);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = Ua("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = Ua("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function jl(k) {
  return k
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
function Tl(k) {
  return `#${jl(k)}`;
}
function Rl(k, T, m) {
  k.preventDefault();
  const O = document.getElementById(T);
  (O &&
    (O.scrollIntoView({ behavior: "smooth", block: "start" }),
    window.history.replaceState(null, "", `#${T}`)),
    m == null || m());
}
const Da = ["Product", "Solutions", "Research", "Company"],
  qf = "/preset-sites/power-ai/logo.png";
function bf() {
  const [k, T] = qe.useState(!1),
    m = () => T(!1);
  return z.jsxs(z.Fragment, {
    children: [
      z.jsxs("header", {
        className:
          "sticky top-0 z-50 flex items-center justify-between bg-black/40 px-5 py-5 backdrop-blur-md sm:px-8 md:px-12",
        children: [
          z.jsxs("a", {
            href: Tl("home"),
            onClick: (O) => Rl(O, "home"),
            className: "flex items-center gap-3",
            "aria-label": "Power AI home",
            children: [
              z.jsx("img", {
                src: qf,
                alt: "",
                width: 36,
                height: 36,
                className: "h-9 w-9 rounded-lg object-cover",
              }),
              z.jsx("span", {
                className: "text-sm font-semibold tracking-tight text-foreground/90",
                children: "Power AI",
              }),
            ],
          }),
          z.jsx("nav", {
            className: "hidden items-center gap-8 md:flex",
            children: Da.map((O) =>
              z.jsx(
                "a",
                {
                  href: Tl(O),
                  onClick: (L) => Rl(L, jl(O)),
                  className:
                    "text-sm font-medium text-foreground/75 transition-colors hover:text-foreground",
                  children: O,
                },
                O,
              ),
            ),
          }),
          z.jsx("div", {
            className: "hidden md:block",
            children: z.jsx("button", {
              type: "button",
              className:
                "liquid-glass rounded-full px-6 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90",
              children: "Sign Up",
            }),
          }),
          z.jsx("button", {
            type: "button",
            className:
              "liquid-glass flex h-10 w-10 items-center justify-center rounded-full md:hidden",
            "aria-label": k ? "Close menu" : "Open menu",
            onClick: () => T((O) => !O),
            children: k
              ? z.jsx(Jf, { className: "h-[18px] w-[18px]" })
              : z.jsx(Zf, { className: "h-[18px] w-[18px]" }),
          }),
        ],
      }),
      k &&
        z.jsx("div", {
          className:
            "relative z-50 border-t border-white/10 bg-background/90 px-5 py-4 backdrop-blur-xl md:hidden",
          children: z.jsxs("nav", {
            className: "flex flex-col gap-3",
            children: [
              Da.map((O) =>
                z.jsx(
                  "a",
                  {
                    href: Tl(O),
                    className: "text-sm font-medium text-foreground/80",
                    onClick: (L) => {
                      Rl(L, jl(O), m);
                    },
                    children: O,
                  },
                  O,
                ),
              ),
              z.jsx("button", {
                type: "button",
                className:
                  "liquid-glass mt-2 w-full rounded-full px-6 py-2.5 text-sm font-semibold",
                children: "Sign Up",
              }),
            ],
          }),
        }),
    ],
  });
}
const ed = [
  {
    id: "product",
    title: "Product",
    body: "Deploy models, orchestrate agents, and ship production AI experiences on a single liquid-glass platform built for enterprise teams.",
  },
  {
    id: "solutions",
    title: "Solutions",
    body: "From research labs to customer-facing apps, Power AI unifies inference, fine-tuning, and observability so every workflow stays fast and auditable.",
  },
  {
    id: "research",
    title: "Research",
    body: "Explore frontier capabilities with reproducible benchmarks, safety evaluations, and open collaboration with leading institutions.",
  },
  {
    id: "company",
    title: "Company",
    body: "We are building durable AI infrastructure with a focus on reliability, transparency, and partnerships that scale with your ambition.",
  },
];
function td({ variant: k = "dark" }) {
  const T =
      k === "dark"
        ? "border-t border-white/10 bg-black px-6 py-24 md:px-12"
        : "border-t border-[#e2e8f0] bg-white px-6 py-24 md:px-12",
    m =
      k === "dark"
        ? "text-3xl font-semibold tracking-tight text-white"
        : "text-3xl font-semibold tracking-tight text-[#0f172a]",
    O =
      k === "dark"
        ? "mt-4 max-w-2xl text-base text-white/60"
        : "mt-4 max-w-2xl text-base text-[#64748b]";
  return z.jsx(z.Fragment, {
    children: ed.map((L) =>
      z.jsx(
        "section",
        {
          id: L.id,
          className: T,
          children: z.jsxs("div", {
            className: "mx-auto max-w-4xl",
            children: [
              z.jsx("h2", { className: m, children: L.title }),
              z.jsx("p", { className: O, children: L.body }),
            ],
          }),
        },
        L.id,
      ),
    ),
  });
}
const nd = ["Privacy", "Terms"];
function rd() {
  return z.jsx("footer", {
    className: "border-t border-white/10 bg-black px-6 py-10 md:px-12",
    children: z.jsxs("div", {
      className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row",
      children: [
        z.jsx("p", {
          className: "text-xs text-white/40",
          children: "© 2026 Power AI. All rights reserved.",
        }),
        z.jsx("div", {
          className: "flex gap-6",
          children: nd.map((k) =>
            z.jsx(
              "a",
              {
                href: Tl(k),
                onClick: (T) => Rl(T, jl(k)),
                className: "text-xs text-white/50 transition-colors hover:text-white/80",
                children: k,
              },
              k,
            ),
          ),
        }),
      ],
    }),
  });
}
const ld =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";
function ud() {
  return z.jsxs("div", {
    className: "relative min-h-screen bg-black text-white",
    children: [
      z.jsx("div", {
        className: "fixed inset-0 z-0",
        children: z.jsx(Qf, { src: ld, className: "h-full w-full object-cover" }),
      }),
      z.jsx("div", {
        className: "pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl bottom-blur-overlay",
        "aria-hidden": !0,
      }),
      z.jsxs("div", {
        className: "relative z-10",
        children: [
          z.jsx(bf, {}),
          z.jsx("section", {
            id: "home",
            className: "relative flex min-h-screen flex-col",
            children: z.jsxs("main", {
              className:
                "flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center md:px-12",
              children: [
                z.jsx("p", {
                  className:
                    "animate-blur-fade-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/50",
                  style: { animationDelay: "200ms" },
                  children: "Enterprise AI infrastructure",
                }),
                z.jsx("h1", {
                  className:
                    "animate-blur-fade-up ai-gradient-text max-w-5xl text-[clamp(2.5rem,8vw,13.75rem)] font-semibold leading-[0.95] tracking-[-0.04em]",
                  style: { animationDelay: "350ms" },
                  children: "Power every workflow with intelligence",
                }),
                z.jsx("p", {
                  className:
                    "animate-blur-fade-up mt-6 max-w-xl text-sm text-white/60 md:text-base",
                  style: { animationDelay: "500ms" },
                  children:
                    "Deploy models, orchestrate agents, and ship production AI experiences on a single liquid-glass platform.",
                }),
                z.jsxs("div", {
                  className:
                    "animate-blur-fade-up mt-10 flex flex-wrap items-center justify-center gap-4",
                  style: { animationDelay: "650ms" },
                  children: [
                    z.jsx("button", {
                      type: "button",
                      className:
                        "liquid-glass rounded-full px-8 py-3 text-sm font-semibold text-white",
                      children: "Request access",
                    }),
                    z.jsx("button", {
                      type: "button",
                      className:
                        "rounded-full border border-white/25 px-8 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10",
                      children: "View research",
                    }),
                  ],
                }),
              ],
            }),
          }),
          z.jsx(td, {}),
          z.jsx(Kf, {}),
          z.jsx(rd, {}),
        ],
      }),
    ],
  });
}
Wf.createRoot(document.getElementById("root")).render(
  z.jsx(qe.StrictMode, { children: z.jsx(ud, {}) }),
);
