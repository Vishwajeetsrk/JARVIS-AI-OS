(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
  new MutationObserver((c) => {
    for (const d of c)
      if (d.type === "childList")
        for (const h of d.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(c) {
    const d = {};
    return (
      c.integrity && (d.integrity = c.integrity),
      c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function u(c) {
    if (c.ep) return;
    c.ep = !0;
    const d = o(c);
    fetch(c.href, d);
  }
})();
var _r = { exports: {} },
  ul = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ey;
function w1() {
  if (ey) return ul;
  ey = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function o(u, c, d) {
    var h = null;
    if ((d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c)) {
      d = {};
      for (var m in c) m !== "key" && (d[m] = c[m]);
    } else d = c;
    return ((c = d.ref), { $$typeof: i, type: u, key: h, ref: c !== void 0 ? c : null, props: d });
  }
  return ((ul.Fragment = l), (ul.jsx = o), (ul.jsxs = o), ul);
}
var ny;
function L1() {
  return (ny || ((ny = 1), (_r.exports = w1())), _r.exports);
}
var yt = L1(),
  Ur = { exports: {} },
  nt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iy;
function j1() {
  if (iy) return nt;
  iy = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    S = Symbol.for("react.activity"),
    b = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (b && E[b]) || E["@@iterator"]), typeof E == "function" ? E : null);
  }
  var V = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    L = {};
  function j(E, N, G) {
    ((this.props = E), (this.context = N), (this.refs = L), (this.updater = G || V));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (E, N) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, N, "setState");
    }),
    (j.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function Y() {}
  Y.prototype = j.prototype;
  function H(E, N, G) {
    ((this.props = E), (this.context = N), (this.refs = L), (this.updater = G || V));
  }
  var X = (H.prototype = new Y());
  ((X.constructor = H), w(X, j.prototype), (X.isPureReactComponent = !0));
  var $ = Array.isArray;
  function ut() {}
  var K = { H: null, A: null, T: null, S: null },
    W = Object.prototype.hasOwnProperty;
  function xt(E, N, G) {
    var k = G.ref;
    return { $$typeof: i, type: E, key: N, ref: k !== void 0 ? k : null, props: G };
  }
  function et(E, N) {
    return xt(E.type, N, E.props);
  }
  function vt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function bt(E) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (G) {
        return N[G];
      })
    );
  }
  var le = /\/+/g;
  function qt(E, N) {
    return typeof E == "object" && E !== null && E.key != null ? bt("" + E.key) : N.toString(36);
  }
  function Lt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(ut, ut)
            : ((E.status = "pending"),
              E.then(
                function (N) {
                  E.status === "pending" && ((E.status = "fulfilled"), (E.value = N));
                },
                function (N) {
                  E.status === "pending" && ((E.status = "rejected"), (E.reason = N));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function O(E, N, G, k, it) {
    var ot = typeof E;
    (ot === "undefined" || ot === "boolean") && (E = null);
    var Tt = !1;
    if (E === null) Tt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          Tt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case l:
              Tt = !0;
              break;
            case v:
              return ((Tt = E._init), O(Tt(E._payload), N, G, k, it));
          }
      }
    if (Tt)
      return (
        (it = it(E)),
        (Tt = k === "" ? "." + qt(E, 0) : k),
        $(it)
          ? ((G = ""),
            Tt != null && (G = Tt.replace(le, "$&/") + "/"),
            O(it, N, G, "", function (ma) {
              return ma;
            }))
          : it != null &&
            (vt(it) &&
              (it = et(
                it,
                G +
                  (it.key == null || (E && E.key === it.key)
                    ? ""
                    : ("" + it.key).replace(le, "$&/") + "/") +
                  Tt,
              )),
            N.push(it)),
        1
      );
    Tt = 0;
    var se = k === "" ? "." : k + ":";
    if ($(E))
      for (var jt = 0; jt < E.length; jt++)
        ((k = E[jt]), (ot = se + qt(k, jt)), (Tt += O(k, N, G, ot, it)));
    else if (((jt = C(E)), typeof jt == "function"))
      for (E = jt.call(E), jt = 0; !(k = E.next()).done;)
        ((k = k.value), (ot = se + qt(k, jt++)), (Tt += O(k, N, G, ot, it)));
    else if (ot === "object") {
      if (typeof E.then == "function") return O(Lt(E), N, G, k, it);
      throw (
        (N = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Tt;
  }
  function q(E, N, G) {
    if (E == null) return E;
    var k = [],
      it = 0;
    return (
      O(E, k, "", "", function (ot) {
        return N.call(G, ot, it++);
      }),
      k
    );
  }
  function Z(E) {
    if (E._status === -1) {
      var N = E._result;
      ((N = N()),
        N.then(
          function (G) {
            (E._status === 0 || E._status === -1) && ((E._status = 1), (E._result = G));
          },
          function (G) {
            (E._status === 0 || E._status === -1) && ((E._status = 2), (E._result = G));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = N)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var lt =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
              var N = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" && E !== null && typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(N)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    dt = {
      map: q,
      forEach: function (E, N, G) {
        q(
          E,
          function () {
            N.apply(this, arguments);
          },
          G,
        );
      },
      count: function (E) {
        var N = 0;
        return (
          q(E, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (E) {
        return (
          q(E, function (N) {
            return N;
          }) || []
        );
      },
      only: function (E) {
        if (!vt(E))
          throw Error("React.Children.only expected to receive a single React element child.");
        return E;
      },
    };
  return (
    (nt.Activity = S),
    (nt.Children = dt),
    (nt.Component = j),
    (nt.Fragment = o),
    (nt.Profiler = c),
    (nt.PureComponent = H),
    (nt.StrictMode = u),
    (nt.Suspense = g),
    (nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (nt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return K.H.useMemoCache(E);
      },
    }),
    (nt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (nt.cacheSignal = function () {
      return null;
    }),
    (nt.cloneElement = function (E, N, G) {
      if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
      var k = w({}, E.props),
        it = E.key;
      if (N != null)
        for (ot in (N.key !== void 0 && (it = "" + N.key), N))
          !W.call(N, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && N.ref === void 0) ||
            (k[ot] = N[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) k.children = G;
      else if (1 < ot) {
        for (var Tt = Array(ot), se = 0; se < ot; se++) Tt[se] = arguments[se + 2];
        k.children = Tt;
      }
      return xt(E.type, it, k);
    }),
    (nt.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: d, _context: E }),
        E
      );
    }),
    (nt.createElement = function (E, N, G) {
      var k,
        it = {},
        ot = null;
      if (N != null)
        for (k in (N.key !== void 0 && (ot = "" + N.key), N))
          W.call(N, k) && k !== "key" && k !== "__self" && k !== "__source" && (it[k] = N[k]);
      var Tt = arguments.length - 2;
      if (Tt === 1) it.children = G;
      else if (1 < Tt) {
        for (var se = Array(Tt), jt = 0; jt < Tt; jt++) se[jt] = arguments[jt + 2];
        it.children = se;
      }
      if (E && E.defaultProps)
        for (k in ((Tt = E.defaultProps), Tt)) it[k] === void 0 && (it[k] = Tt[k]);
      return xt(E, ot, it);
    }),
    (nt.createRef = function () {
      return { current: null };
    }),
    (nt.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (nt.isValidElement = vt),
    (nt.lazy = function (E) {
      return { $$typeof: v, _payload: { _status: -1, _result: E }, _init: Z };
    }),
    (nt.memo = function (E, N) {
      return { $$typeof: y, type: E, compare: N === void 0 ? null : N };
    }),
    (nt.startTransition = function (E) {
      var N = K.T,
        G = {};
      K.T = G;
      try {
        var k = E(),
          it = K.S;
        (it !== null && it(G, k),
          typeof k == "object" && k !== null && typeof k.then == "function" && k.then(ut, lt));
      } catch (ot) {
        lt(ot);
      } finally {
        (N !== null && G.types !== null && (N.types = G.types), (K.T = N));
      }
    }),
    (nt.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (nt.use = function (E) {
      return K.H.use(E);
    }),
    (nt.useActionState = function (E, N, G) {
      return K.H.useActionState(E, N, G);
    }),
    (nt.useCallback = function (E, N) {
      return K.H.useCallback(E, N);
    }),
    (nt.useContext = function (E) {
      return K.H.useContext(E);
    }),
    (nt.useDebugValue = function () {}),
    (nt.useDeferredValue = function (E, N) {
      return K.H.useDeferredValue(E, N);
    }),
    (nt.useEffect = function (E, N) {
      return K.H.useEffect(E, N);
    }),
    (nt.useEffectEvent = function (E) {
      return K.H.useEffectEvent(E);
    }),
    (nt.useId = function () {
      return K.H.useId();
    }),
    (nt.useImperativeHandle = function (E, N, G) {
      return K.H.useImperativeHandle(E, N, G);
    }),
    (nt.useInsertionEffect = function (E, N) {
      return K.H.useInsertionEffect(E, N);
    }),
    (nt.useLayoutEffect = function (E, N) {
      return K.H.useLayoutEffect(E, N);
    }),
    (nt.useMemo = function (E, N) {
      return K.H.useMemo(E, N);
    }),
    (nt.useOptimistic = function (E, N) {
      return K.H.useOptimistic(E, N);
    }),
    (nt.useReducer = function (E, N, G) {
      return K.H.useReducer(E, N, G);
    }),
    (nt.useRef = function (E) {
      return K.H.useRef(E);
    }),
    (nt.useState = function (E) {
      return K.H.useState(E);
    }),
    (nt.useSyncExternalStore = function (E, N, G) {
      return K.H.useSyncExternalStore(E, N, G);
    }),
    (nt.useTransition = function () {
      return K.H.useTransition();
    }),
    (nt.version = "19.2.6"),
    nt
  );
}
var ay;
function Mc() {
  return (ay || ((ay = 1), (Ur.exports = j1())), Ur.exports);
}
var I = Mc(),
  Br = { exports: {} },
  ol = {},
  Nr = { exports: {} },
  wr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ly;
function H1() {
  return (
    ly ||
      ((ly = 1),
      (function (i) {
        function l(O, q) {
          var Z = O.length;
          O.push(q);
          t: for (; 0 < Z;) {
            var lt = (Z - 1) >>> 1,
              dt = O[lt];
            if (0 < c(dt, q)) ((O[lt] = q), (O[Z] = dt), (Z = lt));
            else break t;
          }
        }
        function o(O) {
          return O.length === 0 ? null : O[0];
        }
        function u(O) {
          if (O.length === 0) return null;
          var q = O[0],
            Z = O.pop();
          if (Z !== q) {
            O[0] = Z;
            t: for (var lt = 0, dt = O.length, E = dt >>> 1; lt < E;) {
              var N = 2 * (lt + 1) - 1,
                G = O[N],
                k = N + 1,
                it = O[k];
              if (0 > c(G, Z))
                k < dt && 0 > c(it, G)
                  ? ((O[lt] = it), (O[k] = Z), (lt = k))
                  : ((O[lt] = G), (O[N] = Z), (lt = N));
              else if (k < dt && 0 > c(it, Z)) ((O[lt] = it), (O[k] = Z), (lt = k));
              else break t;
            }
          }
          return q;
        }
        function c(O, q) {
          var Z = O.sortIndex - q.sortIndex;
          return Z !== 0 ? Z : O.id - q.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" && typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var h = Date,
            m = h.now();
          i.unstable_now = function () {
            return h.now() - m;
          };
        }
        var g = [],
          y = [],
          v = 1,
          S = null,
          b = 3,
          C = !1,
          V = !1,
          w = !1,
          L = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          Y = typeof clearTimeout == "function" ? clearTimeout : null,
          H = typeof setImmediate < "u" ? setImmediate : null;
        function X(O) {
          for (var q = o(y); q !== null;) {
            if (q.callback === null) u(y);
            else if (q.startTime <= O) (u(y), (q.sortIndex = q.expirationTime), l(g, q));
            else break;
            q = o(y);
          }
        }
        function $(O) {
          if (((w = !1), X(O), !V))
            if (o(g) !== null) ((V = !0), ut || ((ut = !0), bt()));
            else {
              var q = o(y);
              q !== null && Lt($, q.startTime - O);
            }
        }
        var ut = !1,
          K = -1,
          W = 5,
          xt = -1;
        function et() {
          return L ? !0 : !(i.unstable_now() - xt < W);
        }
        function vt() {
          if (((L = !1), ut)) {
            var O = i.unstable_now();
            xt = O;
            var q = !0;
            try {
              t: {
                ((V = !1), w && ((w = !1), Y(K), (K = -1)), (C = !0));
                var Z = b;
                try {
                  e: {
                    for (X(O), S = o(g); S !== null && !(S.expirationTime > O && et());) {
                      var lt = S.callback;
                      if (typeof lt == "function") {
                        ((S.callback = null), (b = S.priorityLevel));
                        var dt = lt(S.expirationTime <= O);
                        if (((O = i.unstable_now()), typeof dt == "function")) {
                          ((S.callback = dt), X(O), (q = !0));
                          break e;
                        }
                        (S === o(g) && u(g), X(O));
                      } else u(g);
                      S = o(g);
                    }
                    if (S !== null) q = !0;
                    else {
                      var E = o(y);
                      (E !== null && Lt($, E.startTime - O), (q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((S = null), (b = Z), (C = !1));
                }
                q = void 0;
              }
            } finally {
              q ? bt() : (ut = !1);
            }
          }
        }
        var bt;
        if (typeof H == "function")
          bt = function () {
            H(vt);
          };
        else if (typeof MessageChannel < "u") {
          var le = new MessageChannel(),
            qt = le.port2;
          ((le.port1.onmessage = vt),
            (bt = function () {
              qt.postMessage(null);
            }));
        } else
          bt = function () {
            j(vt, 0);
          };
        function Lt(O, q) {
          K = j(function () {
            O(i.unstable_now());
          }, q);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (i.unstable_next = function (O) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = b;
            }
            var Z = b;
            b = q;
            try {
              return O();
            } finally {
              b = Z;
            }
          }),
          (i.unstable_requestPaint = function () {
            L = !0;
          }),
          (i.unstable_runWithPriority = function (O, q) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Z = b;
            b = O;
            try {
              return q();
            } finally {
              b = Z;
            }
          }),
          (i.unstable_scheduleCallback = function (O, q, Z) {
            var lt = i.unstable_now();
            switch (
              (typeof Z == "object" && Z !== null
                ? ((Z = Z.delay), (Z = typeof Z == "number" && 0 < Z ? lt + Z : lt))
                : (Z = lt),
              O)
            ) {
              case 1:
                var dt = -1;
                break;
              case 2:
                dt = 250;
                break;
              case 5:
                dt = 1073741823;
                break;
              case 4:
                dt = 1e4;
                break;
              default:
                dt = 5e3;
            }
            return (
              (dt = Z + dt),
              (O = {
                id: v++,
                callback: q,
                priorityLevel: O,
                startTime: Z,
                expirationTime: dt,
                sortIndex: -1,
              }),
              Z > lt
                ? ((O.sortIndex = Z),
                  l(y, O),
                  o(g) === null && O === o(y) && (w ? (Y(K), (K = -1)) : (w = !0), Lt($, Z - lt)))
                : ((O.sortIndex = dt), l(g, O), V || C || ((V = !0), ut || ((ut = !0), bt()))),
              O
            );
          }),
          (i.unstable_shouldYield = et),
          (i.unstable_wrapCallback = function (O) {
            var q = b;
            return function () {
              var Z = b;
              b = q;
              try {
                return O.apply(this, arguments);
              } finally {
                b = Z;
              }
            };
          }));
      })(wr)),
    wr
  );
}
var sy;
function Y1() {
  return (sy || ((sy = 1), (Nr.exports = H1())), Nr.exports);
}
var Lr = { exports: {} },
  ae = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uy;
function q1() {
  if (uy) return ae;
  uy = 1;
  var i = Mc();
  function l(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++) y += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var u = {
      d: {
        f: o,
        r: function () {
          throw Error(l(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function d(g, y, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: g,
      containerInfo: y,
      implementation: v,
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, y) {
    if (g === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (ae.createPortal = function (g, y) {
      var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)) throw Error(l(299));
      return d(g, y, null, v);
    }),
    (ae.flushSync = function (g) {
      var y = h.T,
        v = u.p;
      try {
        if (((h.T = null), (u.p = 2), g)) return g();
      } finally {
        ((h.T = y), (u.p = v), u.d.f());
      }
    }),
    (ae.preconnect = function (g, y) {
      typeof g == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y = typeof y == "string" ? (y === "use-credentials" ? y : "") : void 0))
          : (y = null),
        u.d.C(g, y));
    }),
    (ae.prefetchDNS = function (g) {
      typeof g == "string" && u.d.D(g);
    }),
    (ae.preinit = function (g, y) {
      if (typeof g == "string" && y && typeof y.as == "string") {
        var v = y.as,
          S = m(v, y.crossOrigin),
          b = typeof y.integrity == "string" ? y.integrity : void 0,
          C = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        v === "style"
          ? u.d.S(g, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: S,
              integrity: b,
              fetchPriority: C,
            })
          : v === "script" &&
            u.d.X(g, {
              crossOrigin: S,
              integrity: b,
              fetchPriority: C,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (ae.preinitModule = function (g, y) {
      if (typeof g == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var v = m(y.as, y.crossOrigin);
            u.d.M(g, {
              crossOrigin: v,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && u.d.M(g);
    }),
    (ae.preload = function (g, y) {
      if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var v = y.as,
          S = m(v, y.crossOrigin);
        u.d.L(g, v, {
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (ae.preloadModule = function (g, y) {
      if (typeof g == "string")
        if (y) {
          var v = m(y.as, y.crossOrigin);
          u.d.m(g, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: v,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else u.d.m(g);
    }),
    (ae.requestFormReset = function (g) {
      u.d.r(g);
    }),
    (ae.unstable_batchedUpdates = function (g, y) {
      return g(y);
    }),
    (ae.useFormState = function (g, y, v) {
      return h.H.useFormState(g, y, v);
    }),
    (ae.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ae.version = "19.2.6"),
    ae
  );
}
var oy;
function G1() {
  if (oy) return Lr.exports;
  oy = 1;
  function i() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return (i(), (Lr.exports = q1()), Lr.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ry;
function X1() {
  if (ry) return ol;
  ry = 1;
  var i = Y1(),
    l = Mc(),
    o = G1();
  function u(t) {
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
  function d(t) {
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
  function h(t) {
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
    if (d(t) !== t) throw Error(u(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ;) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r;) {
          if (r === n) return (g(s), t);
          if (r === a) return (g(s), e);
          r = r.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== a.return) ((n = s), (a = r));
      else {
        for (var f = !1, p = s.child; p;) {
          if (p === n) {
            ((f = !0), (n = s), (a = r));
            break;
          }
          if (p === a) {
            ((f = !0), (a = s), (n = r));
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = r.child; p;) {
            if (p === n) {
              ((f = !0), (n = r), (a = s));
              break;
            }
            if (p === a) {
              ((f = !0), (a = r), (n = s));
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (n.alternate !== a) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
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
  var S = Object.assign,
    b = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    V = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    Y = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    xt = Symbol.for("react.activity"),
    et = Symbol.for("react.memo_cache_sentinel"),
    vt = Symbol.iterator;
  function bt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (vt && t[vt]) || t["@@iterator"]), typeof t == "function" ? t : null);
  }
  var le = Symbol.for("react.client.reference");
  function qt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === le ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case w:
        return "Fragment";
      case j:
        return "Profiler";
      case L:
        return "StrictMode";
      case $:
        return "Suspense";
      case ut:
        return "SuspenseList";
      case xt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case V:
          return "Portal";
        case H:
          return t.displayName || "Context";
        case Y:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case K:
          return ((e = t.displayName || null), e !== null ? e : qt(t.type) || "Memo");
        case W:
          ((e = t._payload), (t = t._init));
          try {
            return qt(t(e));
          } catch {}
      }
    return null;
  }
  var Lt = Array.isArray,
    O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    lt = [],
    dt = -1;
  function E(t) {
    return { current: t };
  }
  function N(t) {
    0 > dt || ((t.current = lt[dt]), (lt[dt] = null), dt--);
  }
  function G(t, e) {
    (dt++, (lt[dt] = t.current), (t.current = e));
  }
  var k = E(null),
    it = E(null),
    ot = E(null),
    Tt = E(null);
  function se(t, e) {
    switch ((G(ot, e), G(it, t), G(k, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? xm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI))) ((e = xm(e)), (t = Mm(e, t)));
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
    (N(k), G(k, t));
  }
  function jt() {
    (N(k), N(it), N(ot));
  }
  function ma(t) {
    t.memoizedState !== null && G(Tt, t);
    var e = k.current,
      n = Mm(e, t.type);
    e !== n && (G(it, t), G(k, n));
  }
  function xl(t) {
    (it.current === t && (N(k), N(it)), Tt.current === t && (N(Tt), (il._currentValue = Z)));
  }
  var du, Ic;
  function Wn(t) {
    if (du === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((du = (e && e[1]) || ""),
          (Ic =
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
      du +
      t +
      Ic
    );
  }
  var mu = !1;
  function yu(t, e) {
    if (!t || mu) return "";
    mu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (R) {
                  var z = R;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (R) {
                  z = R;
                }
                t.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (R) {
                z = R;
              }
              (B = t()) && typeof B.catch == "function" && B.catch(function () {});
            }
          } catch (R) {
            if (R && z && typeof R.stack == "string") return [R.stack, z.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = a.DetermineComponentFrameRoot(),
        f = r[0],
        p = r[1];
      if (f && p) {
        var T = f.split(`
`),
          D = p.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot");) a++;
        for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot");) s++;
        if (a === T.length || s === D.length)
          for (a = T.length - 1, s = D.length - 1; 1 <= a && 0 <= s && T[a] !== D[s];) s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== D[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || T[a] !== D[s])) {
                  var _ =
                    `
` + T[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      _.includes("<anonymous>") &&
                      (_ = _.replace("<anonymous>", t.displayName)),
                    _
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ((mu = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? Wn(n) : "";
  }
  function d0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Wn(t.type);
      case 16:
        return Wn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Wn("Suspense Fallback") : Wn("Suspense");
      case 19:
        return Wn("SuspenseList");
      case 0:
      case 15:
        return yu(t.type, !1);
      case 11:
        return yu(t.type.render, !1);
      case 1:
        return yu(t.type, !0);
      case 31:
        return Wn("Activity");
      default:
        return "";
    }
  }
  function tf(t) {
    try {
      var e = "",
        n = null;
      do ((e += d0(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var pu = Object.prototype.hasOwnProperty,
    gu = i.unstable_scheduleCallback,
    vu = i.unstable_cancelCallback,
    m0 = i.unstable_shouldYield,
    y0 = i.unstable_requestPaint,
    ge = i.unstable_now,
    p0 = i.unstable_getCurrentPriorityLevel,
    ef = i.unstable_ImmediatePriority,
    nf = i.unstable_UserBlockingPriority,
    Ml = i.unstable_NormalPriority,
    g0 = i.unstable_LowPriority,
    af = i.unstable_IdlePriority,
    v0 = i.log,
    S0 = i.unstable_setDisableYieldValue,
    ya = null,
    ve = null;
  function Tn(t) {
    if ((typeof v0 == "function" && S0(t), ve && typeof ve.setStrictMode == "function"))
      try {
        ve.setStrictMode(ya, t);
      } catch {}
  }
  var Se = Math.clz32 ? Math.clz32 : A0,
    T0 = Math.log,
    b0 = Math.LN2;
  function A0(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((T0(t) / b0) | 0)) | 0);
  }
  var Dl = 256,
    Cl = 262144,
    zl = 4194304;
  function Pn(t) {
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
  function Rl(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return (
      p !== 0
        ? ((a = p & ~r),
          a !== 0
            ? (s = Pn(a))
            : ((f &= p), f !== 0 ? (s = Pn(f)) : n || ((n = p & ~t), n !== 0 && (s = Pn(n)))))
        : ((p = a & ~r),
          p !== 0
            ? (s = Pn(p))
            : f !== 0
              ? (s = Pn(f))
              : n || ((n = a & ~t), n !== 0 && (s = Pn(n)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & r) === 0 &&
            ((r = s & -s), (n = e & -e), r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : s
    );
  }
  function pa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function E0(t, e) {
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
  function lf() {
    var t = zl;
    return ((zl <<= 1), (zl & 62914560) === 0 && (zl = 4194304), t);
  }
  function Su(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ga(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function x0(t, e, n, a, s, r) {
    var f = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var p = t.entanglements,
      T = t.expirationTimes,
      D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n;) {
      var _ = 31 - Se(n),
        B = 1 << _;
      ((p[_] = 0), (T[_] = -1));
      var z = D[_];
      if (z !== null)
        for (D[_] = null, _ = 0; _ < z.length; _++) {
          var R = z[_];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~B;
    }
    (a !== 0 && sf(t, a, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e)));
  }
  function sf(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - Se(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function uf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
      var a = 31 - Se(n),
        s = 1 << a;
      ((s & e) | (t[a] & e) && (t[a] |= e), (n &= ~s));
    }
  }
  function of(t, e) {
    var n = e & -e;
    return ((n = (n & 42) !== 0 ? 1 : Tu(n)), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n);
  }
  function Tu(t) {
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
  function bu(t) {
    return ((t &= -t), 2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2);
  }
  function rf() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : km(t.type));
  }
  function cf(t, e) {
    var n = q.p;
    try {
      return ((q.p = t), e());
    } finally {
      q.p = n;
    }
  }
  var bn = Math.random().toString(36).slice(2),
    Pt = "__reactFiber$" + bn,
    ce = "__reactProps$" + bn,
    bi = "__reactContainer$" + bn,
    Au = "__reactEvents$" + bn,
    M0 = "__reactListeners$" + bn,
    D0 = "__reactHandles$" + bn,
    ff = "__reactResources$" + bn,
    va = "__reactMarker$" + bn;
  function Eu(t) {
    (delete t[Pt], delete t[ce], delete t[Au], delete t[M0], delete t[D0]);
  }
  function Ai(t) {
    var e = t[Pt];
    if (e) return e;
    for (var n = t.parentNode; n;) {
      if ((e = n[bi] || n[Pt])) {
        if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
          for (t = _m(t); t !== null;) {
            if ((n = t[Pt])) return n;
            t = _m(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Ei(t) {
    if ((t = t[Pt] || t[bi])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
    }
    return null;
  }
  function Sa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function xi(t) {
    var e = t[ff];
    return (e || (e = t[ff] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e);
  }
  function Ft(t) {
    t[va] = !0;
  }
  var hf = new Set(),
    df = {};
  function $n(t, e) {
    (Mi(t, e), Mi(t + "Capture", e));
  }
  function Mi(t, e) {
    for (df[t] = e, t = 0; t < e.length; t++) hf.add(e[t]);
  }
  var C0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    mf = {},
    yf = {};
  function z0(t) {
    return pu.call(yf, t)
      ? !0
      : pu.call(mf, t)
        ? !1
        : C0.test(t)
          ? (yf[t] = !0)
          : ((mf[t] = !0), !1);
  }
  function Ol(t, e, n) {
    if (z0(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Vl(t, e, n) {
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
  function tn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function ze(t) {
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
  function pf(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function R0(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        r = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            ((n = "" + f), r.call(this, f));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function xu(t) {
    if (!t._valueTracker) {
      var e = pf(t) ? "checked" : "value";
      t._valueTracker = R0(t, e, "" + t[e]);
    }
  }
  function gf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = pf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function _l(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var O0 = /[\n"\\]/g;
  function Re(t) {
    return t.replace(O0, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Mu(t, e, n, a, s, r, f, p) {
    ((t.name = ""),
      f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) && (t.value = "" + ze(e))
          : t.value !== "" + ze(e) && (t.value = "" + ze(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Du(t, f, ze(e))
        : n != null
          ? Du(t, f, ze(n))
          : a != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean"
        ? (t.name = "" + ze(p))
        : t.removeAttribute("name"));
  }
  function vf(t, e, n, a, s, r, f, p) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        xu(t);
        return;
      }
      ((n = n != null ? "" + ze(n) : ""),
        (e = e != null ? "" + ze(e) : n),
        p || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = p ? t.checked : !!a),
      (t.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      xu(t));
  }
  function Du(t, e, n) {
    (e === "number" && _l(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Di(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        ((s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && a && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + ze(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          ((t[s].selected = !0), a && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Sf(t, e, n) {
    if (e != null && ((e = "" + ze(e)), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ze(n) : "";
  }
  function Tf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(u(92));
        if (Lt(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = ze(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      xu(t));
  }
  function Ci(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var V0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function bf(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || V0.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Af(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var s in e) ((a = e[s]), e.hasOwnProperty(s) && n[s] !== a && bf(t, s, a));
    } else for (var r in e) e.hasOwnProperty(r) && bf(t, r, e[r]);
  }
  function Cu(t) {
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
  var _0 = new Map([
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
    U0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ul(t) {
    return U0.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function en() {}
  var zu = null;
  function Ru(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var zi = null,
    Ri = null;
  function Ef(t) {
    var e = Ei(t);
    if (e && (t = e.stateNode)) {
      var n = t[ce] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Mu(
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
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[ce] || null;
                if (!s) throw Error(u(90));
                Mu(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < n.length; e++) ((a = n[e]), a.form === t.form && gf(a));
          }
          break t;
        case "textarea":
          Sf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Di(t, !!n.multiple, e, !1));
      }
    }
  }
  var Ou = !1;
  function xf(t, e, n) {
    if (Ou) return t(e, n);
    Ou = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Ou = !1),
        (zi !== null || Ri !== null) &&
          (Ts(), zi && ((e = zi), (t = Ri), (Ri = zi = null), Ef(e), t)))
      )
        for (e = 0; e < t.length; e++) Ef(t[e]);
    }
  }
  function Ta(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[ce] || null;
    if (a === null) return null;
    n = a[e];
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
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Vu = !1;
  if (nn)
    try {
      var ba = {};
      (Object.defineProperty(ba, "passive", {
        get: function () {
          Vu = !0;
        },
      }),
        window.addEventListener("test", ba, ba),
        window.removeEventListener("test", ba, ba));
    } catch {
      Vu = !1;
    }
  var An = null,
    _u = null,
    Bl = null;
  function Mf() {
    if (Bl) return Bl;
    var t,
      e = _u,
      n = e.length,
      a,
      s = "value" in An ? An.value : An.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[r - a]; a++);
    return (Bl = s.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Nl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function wl() {
    return !0;
  }
  function Df() {
    return !1;
  }
  function fe(t) {
    function e(n, a, s, r, f) {
      ((this._reactName = n),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null));
      for (var p in t) t.hasOwnProperty(p) && ((n = t[p]), (this[p] = n ? n(r) : r[p]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? wl
          : Df),
        (this.isPropagationStopped = Df),
        this
      );
    }
    return (
      S(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = wl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = wl));
        },
        persist: function () {},
        isPersistent: wl,
      }),
      e
    );
  }
  var In = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ll = fe(In),
    Aa = S({}, In, { view: 0, detail: 0 }),
    B0 = fe(Aa),
    Uu,
    Bu,
    Ea,
    jl = S({}, Aa, {
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
      getModifierState: wu,
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
          : (t !== Ea &&
              (Ea && t.type === "mousemove"
                ? ((Uu = t.screenX - Ea.screenX), (Bu = t.screenY - Ea.screenY))
                : (Bu = Uu = 0),
              (Ea = t)),
            Uu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Bu;
      },
    }),
    Cf = fe(jl),
    N0 = S({}, jl, { dataTransfer: 0 }),
    w0 = fe(N0),
    L0 = S({}, Aa, { relatedTarget: 0 }),
    Nu = fe(L0),
    j0 = S({}, In, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    H0 = fe(j0),
    Y0 = S({}, In, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    q0 = fe(Y0),
    G0 = S({}, In, { data: 0 }),
    zf = fe(G0),
    X0 = {
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
    Z0 = {
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
    Q0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function K0(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Q0[t]) ? !!e[t] : !1;
  }
  function wu() {
    return K0;
  }
  var J0 = S({}, Aa, {
      key: function (t) {
        if (t.key) {
          var e = X0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Nl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Z0[t.keyCode] || "Unidentified"
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
      getModifierState: wu,
      charCode: function (t) {
        return t.type === "keypress" ? Nl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Nl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    k0 = fe(J0),
    F0 = S({}, jl, {
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
    Rf = fe(F0),
    W0 = S({}, Aa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wu,
    }),
    P0 = fe(W0),
    $0 = S({}, In, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I0 = fe($0),
    tv = S({}, jl, {
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
    ev = fe(tv),
    nv = S({}, In, { newState: 0, oldState: 0 }),
    iv = fe(nv),
    av = [9, 13, 27, 32],
    Lu = nn && "CompositionEvent" in window,
    xa = null;
  nn && "documentMode" in document && (xa = document.documentMode);
  var lv = nn && "TextEvent" in window && !xa,
    Of = nn && (!Lu || (xa && 8 < xa && 11 >= xa)),
    Vf = " ",
    _f = !1;
  function Uf(t, e) {
    switch (t) {
      case "keyup":
        return av.indexOf(e.keyCode) !== -1;
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
  function Bf(t) {
    return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
  }
  var Oi = !1;
  function sv(t, e) {
    switch (t) {
      case "compositionend":
        return Bf(e);
      case "keypress":
        return e.which !== 32 ? null : ((_f = !0), Vf);
      case "textInput":
        return ((t = e.data), t === Vf && _f ? null : t);
      default:
        return null;
    }
  }
  function uv(t, e) {
    if (Oi)
      return t === "compositionend" || (!Lu && Uf(t, e))
        ? ((t = Mf()), (Bl = _u = An = null), (Oi = !1), t)
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
        return Of && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var ov = {
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
  function Nf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ov[t.type] : e === "textarea";
  }
  function wf(t, e, n, a) {
    (zi ? (Ri ? Ri.push(a) : (Ri = [a])) : (zi = a),
      (e = Cs(e, "onChange")),
      0 < e.length &&
        ((n = new Ll("onChange", "change", null, n, a)), t.push({ event: n, listeners: e })));
  }
  var Ma = null,
    Da = null;
  function rv(t) {
    vm(t, 0);
  }
  function Hl(t) {
    var e = Sa(t);
    if (gf(e)) return t;
  }
  function Lf(t, e) {
    if (t === "change") return e;
  }
  var jf = !1;
  if (nn) {
    var ju;
    if (nn) {
      var Hu = "oninput" in document;
      if (!Hu) {
        var Hf = document.createElement("div");
        (Hf.setAttribute("oninput", "return;"), (Hu = typeof Hf.oninput == "function"));
      }
      ju = Hu;
    } else ju = !1;
    jf = ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Yf() {
    Ma && (Ma.detachEvent("onpropertychange", qf), (Da = Ma = null));
  }
  function qf(t) {
    if (t.propertyName === "value" && Hl(Da)) {
      var e = [];
      (wf(e, Da, t, Ru(t)), xf(rv, e));
    }
  }
  function cv(t, e, n) {
    t === "focusin"
      ? (Yf(), (Ma = e), (Da = n), Ma.attachEvent("onpropertychange", qf))
      : t === "focusout" && Yf();
  }
  function fv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Hl(Da);
  }
  function hv(t, e) {
    if (t === "click") return Hl(e);
  }
  function dv(t, e) {
    if (t === "input" || t === "change") return Hl(e);
  }
  function mv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Te = typeof Object.is == "function" ? Object.is : mv;
  function Ca(t, e) {
    if (Te(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!pu.call(e, s) || !Te(t[s], e[s])) return !1;
    }
    return !0;
  }
  function Gf(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function Xf(t, e) {
    var n = Gf(t);
    t = 0;
    for (var a; n;) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e)) return { node: n, offset: e - t };
        t = a;
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
      n = Gf(n);
    }
  }
  function Zf(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? Zf(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Qf(t) {
    t =
      t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = _l(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = _l(t.document);
    }
    return e;
  }
  function Yu(t) {
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
  var yv = nn && "documentMode" in document && 11 >= document.documentMode,
    Vi = null,
    qu = null,
    za = null,
    Gu = !1;
  function Kf(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gu ||
      Vi == null ||
      Vi !== _l(a) ||
      ((a = Vi),
      "selectionStart" in a && Yu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (za && Ca(za, a)) ||
        ((za = a),
        (a = Cs(qu, "onSelect")),
        0 < a.length &&
          ((e = new Ll("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = Vi))));
  }
  function ti(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var _i = {
      animationend: ti("Animation", "AnimationEnd"),
      animationiteration: ti("Animation", "AnimationIteration"),
      animationstart: ti("Animation", "AnimationStart"),
      transitionrun: ti("Transition", "TransitionRun"),
      transitionstart: ti("Transition", "TransitionStart"),
      transitioncancel: ti("Transition", "TransitionCancel"),
      transitionend: ti("Transition", "TransitionEnd"),
    },
    Xu = {},
    Jf = {};
  nn &&
    ((Jf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _i.animationend.animation,
      delete _i.animationiteration.animation,
      delete _i.animationstart.animation),
    "TransitionEvent" in window || delete _i.transitionend.transition);
  function ei(t) {
    if (Xu[t]) return Xu[t];
    if (!_i[t]) return t;
    var e = _i[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Jf) return (Xu[t] = e[n]);
    return t;
  }
  var kf = ei("animationend"),
    Ff = ei("animationiteration"),
    Wf = ei("animationstart"),
    pv = ei("transitionrun"),
    gv = ei("transitionstart"),
    vv = ei("transitioncancel"),
    Pf = ei("transitionend"),
    $f = new Map(),
    Zu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Zu.push("scrollEnd");
  function Ye(t, e) {
    ($f.set(t, e), $n(e, [t]));
  }
  var Yl =
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
    Oe = [],
    Ui = 0,
    Qu = 0;
  function ql() {
    for (var t = Ui, e = (Qu = Ui = 0); e < t;) {
      var n = Oe[e];
      Oe[e++] = null;
      var a = Oe[e];
      Oe[e++] = null;
      var s = Oe[e];
      Oe[e++] = null;
      var r = Oe[e];
      if (((Oe[e++] = null), a !== null && s !== null)) {
        var f = a.pending;
        (f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)), (a.pending = s));
      }
      r !== 0 && If(n, s, r);
    }
  }
  function Gl(t, e, n, a) {
    ((Oe[Ui++] = t),
      (Oe[Ui++] = e),
      (Oe[Ui++] = n),
      (Oe[Ui++] = a),
      (Qu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function Ku(t, e, n, a) {
    return (Gl(t, e, n, a), Xl(t));
  }
  function ni(t, e) {
    return (Gl(t, null, null, e), Xl(t));
  }
  function If(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, r = t.return; r !== null;)
      ((r.childLanes |= n),
        (a = r.alternate),
        a !== null && (a.childLanes |= n),
        r.tag === 22 && ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return));
    return t.tag === 3
      ? ((r = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Se(n)),
          (t = r.hiddenUpdates),
          (a = t[s]),
          a === null ? (t[s] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Xl(t) {
    if (50 < Wa) throw ((Wa = 0), (nr = null), Error(u(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Bi = {};
  function Sv(t, e, n, a) {
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
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function be(t, e, n, a) {
    return new Sv(t, e, n, a);
  }
  function Ju(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function an(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = be(t.tag, e, t.key, t.mode)),
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
  function th(t, e) {
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
  function Zl(t, e, n, a, s, r) {
    var f = 0;
    if (((a = t), typeof t == "function")) Ju(t) && (f = 1);
    else if (typeof t == "string")
      f = x1(t, n, k.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case xt:
          return ((t = be(31, n, e, s)), (t.elementType = xt), (t.lanes = r), t);
        case w:
          return ii(n.children, s, r, e);
        case L:
          ((f = 8), (s |= 24));
          break;
        case j:
          return ((t = be(12, n, e, s | 2)), (t.elementType = j), (t.lanes = r), t);
        case $:
          return ((t = be(13, n, e, s)), (t.elementType = $), (t.lanes = r), t);
        case ut:
          return ((t = be(19, n, e, s)), (t.elementType = ut), (t.lanes = r), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case H:
                f = 10;
                break t;
              case Y:
                f = 9;
                break t;
              case X:
                f = 11;
                break t;
              case K:
                f = 14;
                break t;
              case W:
                ((f = 16), (a = null));
                break t;
            }
          ((f = 29), (n = Error(u(130, t === null ? "null" : typeof t, ""))), (a = null));
      }
    return ((e = be(f, n, e, s)), (e.elementType = t), (e.type = a), (e.lanes = r), e);
  }
  function ii(t, e, n, a) {
    return ((t = be(7, t, a, e)), (t.lanes = n), t);
  }
  function ku(t, e, n) {
    return ((t = be(6, t, null, e)), (t.lanes = n), t);
  }
  function eh(t) {
    var e = be(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Fu(t, e, n) {
    return (
      (e = be(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var nh = new WeakMap();
  function Ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = nh.get(t);
      return n !== void 0 ? n : ((e = { value: t, source: e, stack: tf(e) }), nh.set(t, e), e);
    }
    return { value: t, source: e, stack: tf(e) };
  }
  var Ni = [],
    wi = 0,
    Ql = null,
    Ra = 0,
    _e = [],
    Ue = 0,
    En = null,
    Ke = 1,
    Je = "";
  function ln(t, e) {
    ((Ni[wi++] = Ra), (Ni[wi++] = Ql), (Ql = t), (Ra = e));
  }
  function ih(t, e, n) {
    ((_e[Ue++] = Ke), (_e[Ue++] = Je), (_e[Ue++] = En), (En = t));
    var a = Ke;
    t = Je;
    var s = 32 - Se(a) - 1;
    ((a &= ~(1 << s)), (n += 1));
    var r = 32 - Se(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      ((r = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (s -= f),
        (Ke = (1 << (32 - Se(e) + s)) | (n << s) | a),
        (Je = r + t));
    } else ((Ke = (1 << r) | (n << s) | a), (Je = t));
  }
  function Wu(t) {
    t.return !== null && (ln(t, 1), ih(t, 1, 0));
  }
  function Pu(t) {
    for (; t === Ql;) ((Ql = Ni[--wi]), (Ni[wi] = null), (Ra = Ni[--wi]), (Ni[wi] = null));
    for (; t === En;)
      ((En = _e[--Ue]),
        (_e[Ue] = null),
        (Je = _e[--Ue]),
        (_e[Ue] = null),
        (Ke = _e[--Ue]),
        (_e[Ue] = null));
  }
  function ah(t, e) {
    ((_e[Ue++] = Ke), (_e[Ue++] = Je), (_e[Ue++] = En), (Ke = e.id), (Je = e.overflow), (En = t));
  }
  var $t = null,
    Vt = null,
    mt = !1,
    xn = null,
    Be = !1,
    $u = Error(u(519));
  function Mn(t) {
    var e = Error(
      u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""),
    );
    throw (Oa(Ve(e, t)), $u);
  }
  function lh(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Pt] = t), (e[ce] = a), n)) {
      case "dialog":
        (ct("cancel", e), ct("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < $a.length; n++) ct($a[n], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (ct("error", e), ct("load", e));
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        (ct("invalid", e),
          vf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0));
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        (ct("invalid", e), Tf(e, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Am(e.textContent, n)
        ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          a.onScroll != null && ct("scroll", e),
          a.onScrollEnd != null && ct("scrollend", e),
          a.onClick != null && (e.onclick = en),
          (e = !0))
        : (e = !1),
      e || Mn(t, !0));
  }
  function sh(t) {
    for ($t = t.return; $t;)
      switch ($t.tag) {
        case 5:
        case 31:
        case 13:
          Be = !1;
          return;
        case 27:
        case 3:
          Be = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function Li(t) {
    if (t !== $t) return !1;
    if (!mt) return (sh(t), (mt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type), (n = !(n !== "form" && n !== "button") || gr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Vt && Mn(t),
      sh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(317));
      Vt = Vm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(u(317));
      Vt = Vm(t);
    } else
      e === 27
        ? ((e = Vt), Hn(t.type) ? ((t = Ar), (Ar = null), (Vt = t)) : (Vt = e))
        : (Vt = $t ? we(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ai() {
    ((Vt = $t = null), (mt = !1));
  }
  function Iu() {
    var t = xn;
    return (t !== null && (ye === null ? (ye = t) : ye.push.apply(ye, t), (xn = null)), t);
  }
  function Oa(t) {
    xn === null ? (xn = [t]) : xn.push(t);
  }
  var to = E(null),
    li = null,
    sn = null;
  function Dn(t, e, n) {
    (G(to, e._currentValue), (e._currentValue = n));
  }
  function un(t) {
    ((t._currentValue = to.current), N(to));
  }
  function eo(t, e, n) {
    for (; t !== null;) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function no(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null;) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null;) {
          var p = r;
          r = s;
          for (var T = 0; T < e.length; T++)
            if (p.context === e[T]) {
              ((r.lanes |= n),
                (p = r.alternate),
                p !== null && (p.lanes |= n),
                eo(r.return, n, t),
                a || (f = null));
              break t;
            }
          r = p.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(u(341));
        ((f.lanes |= n), (r = f.alternate), r !== null && (r.lanes |= n), eo(f, n, t), (f = null));
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null;) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            ((s.return = f.return), (f = s));
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function ji(t, e, n, a) {
    t = null;
    for (var s = e, r = !1; s !== null;) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(u(387));
        if (((f = f.memoizedProps), f !== null)) {
          var p = s.type;
          Te(s.pendingProps.value, f.value) || (t !== null ? t.push(p) : (t = [p]));
        }
      } else if (s === Tt.current) {
        if (((f = s.alternate), f === null)) throw Error(u(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(il) : (t = [il]));
      }
      s = s.return;
    }
    (t !== null && no(e, t, n, a), (e.flags |= 262144));
  }
  function Kl(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Te(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function si(t) {
    ((li = t), (sn = null), (t = t.dependencies), t !== null && (t.firstContext = null));
  }
  function It(t) {
    return uh(li, t);
  }
  function Jl(t, e) {
    return (li === null && si(t), uh(t, e));
  }
  function uh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), sn === null)) {
      if (t === null) throw Error(u(308));
      ((sn = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288));
    } else sn = sn.next = e;
    return n;
  }
  var Tv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    bv = i.unstable_scheduleCallback,
    Av = i.unstable_NormalPriority,
    Gt = {
      $$typeof: H,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function io() {
    return { controller: new Tv(), data: new Map(), refCount: 0 };
  }
  function Va(t) {
    (t.refCount--,
      t.refCount === 0 &&
        bv(Av, function () {
          t.controller.abort();
        }));
  }
  var _a = null,
    ao = 0,
    Hi = 0,
    Yi = null;
  function Ev(t, e) {
    if (_a === null) {
      var n = (_a = []);
      ((ao = 0),
        (Hi = or()),
        (Yi = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (ao++, e.then(oh, oh), e);
  }
  function oh() {
    if (--ao === 0 && _a !== null) {
      Yi !== null && (Yi.status = "fulfilled");
      var t = _a;
      ((_a = null), (Hi = 0), (Yi = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function xv(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++) (0, n[s])(void 0);
        },
      ),
      a
    );
  }
  var rh = O.S;
  O.S = function (t, e) {
    ((Kd = ge()),
      typeof e == "object" && e !== null && typeof e.then == "function" && Ev(t, e),
      rh !== null && rh(t, e));
  };
  var ui = E(null);
  function lo() {
    var t = ui.current;
    return t !== null ? t : zt.pooledCache;
  }
  function kl(t, e) {
    e === null ? G(ui, ui.current) : G(ui, e.pool);
  }
  function ch() {
    var t = lo();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var qi = Error(u(460)),
    so = Error(u(474)),
    Fl = Error(u(542)),
    Wl = { then: function () {} };
  function fh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function hh(t, e, n) {
    switch (
      ((n = t[n]), n === void 0 ? t.push(e) : n !== e && (e.then(en, en), (e = n)), e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), mh(t), t);
      default:
        if (typeof e.status == "string") e.then(en, en);
        else {
          if (((t = zt), t !== null && 100 < t.shellSuspendCounter)) throw Error(u(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), mh(t), t);
        }
        throw ((ri = e), qi);
    }
  }
  function oi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? ((ri = n), qi) : n;
    }
  }
  var ri = null;
  function dh() {
    if (ri === null) throw Error(u(459));
    var t = ri;
    return ((ri = null), t);
  }
  function mh(t) {
    if (t === qi || t === Fl) throw Error(u(483));
  }
  var Gi = null,
    Ua = 0;
  function Pl(t) {
    var e = Ua;
    return ((Ua += 1), Gi === null && (Gi = []), hh(Gi, t, e));
  }
  function Ba(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function $l(t, e) {
    throw e.$$typeof === b
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t,
          ),
        ));
  }
  function yh(t) {
    function e(x, A) {
      if (t) {
        var M = x.deletions;
        M === null ? ((x.deletions = [A]), (x.flags |= 16)) : M.push(A);
      }
    }
    function n(x, A) {
      if (!t) return null;
      for (; A !== null;) (e(x, A), (A = A.sibling));
      return null;
    }
    function a(x) {
      for (var A = new Map(); x !== null;)
        (x.key !== null ? A.set(x.key, x) : A.set(x.index, x), (x = x.sibling));
      return A;
    }
    function s(x, A) {
      return ((x = an(x, A)), (x.index = 0), (x.sibling = null), x);
    }
    function r(x, A, M) {
      return (
        (x.index = M),
        t
          ? ((M = x.alternate),
            M !== null
              ? ((M = M.index), M < A ? ((x.flags |= 67108866), A) : M)
              : ((x.flags |= 67108866), A))
          : ((x.flags |= 1048576), A)
      );
    }
    function f(x) {
      return (t && x.alternate === null && (x.flags |= 67108866), x);
    }
    function p(x, A, M, U) {
      return A === null || A.tag !== 6
        ? ((A = ku(M, x.mode, U)), (A.return = x), A)
        : ((A = s(A, M)), (A.return = x), A);
    }
    function T(x, A, M, U) {
      var P = M.type;
      return P === w
        ? _(x, A, M.props.children, U, M.key)
        : A !== null &&
            (A.elementType === P ||
              (typeof P == "object" && P !== null && P.$$typeof === W && oi(P) === A.type))
          ? ((A = s(A, M.props)), Ba(A, M), (A.return = x), A)
          : ((A = Zl(M.type, M.key, M.props, null, x.mode, U)), Ba(A, M), (A.return = x), A);
    }
    function D(x, A, M, U) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== M.containerInfo ||
        A.stateNode.implementation !== M.implementation
        ? ((A = Fu(M, x.mode, U)), (A.return = x), A)
        : ((A = s(A, M.children || [])), (A.return = x), A);
    }
    function _(x, A, M, U, P) {
      return A === null || A.tag !== 7
        ? ((A = ii(M, x.mode, U, P)), (A.return = x), A)
        : ((A = s(A, M)), (A.return = x), A);
    }
    function B(x, A, M) {
      if ((typeof A == "string" && A !== "") || typeof A == "number" || typeof A == "bigint")
        return ((A = ku("" + A, x.mode, M)), (A.return = x), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case C:
            return ((M = Zl(A.type, A.key, A.props, null, x.mode, M)), Ba(M, A), (M.return = x), M);
          case V:
            return ((A = Fu(A, x.mode, M)), (A.return = x), A);
          case W:
            return ((A = oi(A)), B(x, A, M));
        }
        if (Lt(A) || bt(A)) return ((A = ii(A, x.mode, M, null)), (A.return = x), A);
        if (typeof A.then == "function") return B(x, Pl(A), M);
        if (A.$$typeof === H) return B(x, Jl(x, A), M);
        $l(x, A);
      }
      return null;
    }
    function z(x, A, M, U) {
      var P = A !== null ? A.key : null;
      if ((typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint")
        return P !== null ? null : p(x, A, "" + M, U);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case C:
            return M.key === P ? T(x, A, M, U) : null;
          case V:
            return M.key === P ? D(x, A, M, U) : null;
          case W:
            return ((M = oi(M)), z(x, A, M, U));
        }
        if (Lt(M) || bt(M)) return P !== null ? null : _(x, A, M, U, null);
        if (typeof M.then == "function") return z(x, A, Pl(M), U);
        if (M.$$typeof === H) return z(x, A, Jl(x, M), U);
        $l(x, M);
      }
      return null;
    }
    function R(x, A, M, U, P) {
      if ((typeof U == "string" && U !== "") || typeof U == "number" || typeof U == "bigint")
        return ((x = x.get(M) || null), p(A, x, "" + U, P));
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case C:
            return ((x = x.get(U.key === null ? M : U.key) || null), T(A, x, U, P));
          case V:
            return ((x = x.get(U.key === null ? M : U.key) || null), D(A, x, U, P));
          case W:
            return ((U = oi(U)), R(x, A, M, U, P));
        }
        if (Lt(U) || bt(U)) return ((x = x.get(M) || null), _(A, x, U, P, null));
        if (typeof U.then == "function") return R(x, A, M, Pl(U), P);
        if (U.$$typeof === H) return R(x, A, M, Jl(A, U), P);
        $l(A, U);
      }
      return null;
    }
    function Q(x, A, M, U) {
      for (
        var P = null, pt = null, F = A, st = (A = 0), ht = null;
        F !== null && st < M.length;
        st++
      ) {
        F.index > st ? ((ht = F), (F = null)) : (ht = F.sibling);
        var gt = z(x, F, M[st], U);
        if (gt === null) {
          F === null && (F = ht);
          break;
        }
        (t && F && gt.alternate === null && e(x, F),
          (A = r(gt, A, st)),
          pt === null ? (P = gt) : (pt.sibling = gt),
          (pt = gt),
          (F = ht));
      }
      if (st === M.length) return (n(x, F), mt && ln(x, st), P);
      if (F === null) {
        for (; st < M.length; st++)
          ((F = B(x, M[st], U)),
            F !== null && ((A = r(F, A, st)), pt === null ? (P = F) : (pt.sibling = F), (pt = F)));
        return (mt && ln(x, st), P);
      }
      for (F = a(F); st < M.length; st++)
        ((ht = R(F, x, st, M[st], U)),
          ht !== null &&
            (t && ht.alternate !== null && F.delete(ht.key === null ? st : ht.key),
            (A = r(ht, A, st)),
            pt === null ? (P = ht) : (pt.sibling = ht),
            (pt = ht)));
      return (
        t &&
          F.forEach(function (Zn) {
            return e(x, Zn);
          }),
        mt && ln(x, st),
        P
      );
    }
    function tt(x, A, M, U) {
      if (M == null) throw Error(u(151));
      for (
        var P = null, pt = null, F = A, st = (A = 0), ht = null, gt = M.next();
        F !== null && !gt.done;
        st++, gt = M.next()
      ) {
        F.index > st ? ((ht = F), (F = null)) : (ht = F.sibling);
        var Zn = z(x, F, gt.value, U);
        if (Zn === null) {
          F === null && (F = ht);
          break;
        }
        (t && F && Zn.alternate === null && e(x, F),
          (A = r(Zn, A, st)),
          pt === null ? (P = Zn) : (pt.sibling = Zn),
          (pt = Zn),
          (F = ht));
      }
      if (gt.done) return (n(x, F), mt && ln(x, st), P);
      if (F === null) {
        for (; !gt.done; st++, gt = M.next())
          ((gt = B(x, gt.value, U)),
            gt !== null &&
              ((A = r(gt, A, st)), pt === null ? (P = gt) : (pt.sibling = gt), (pt = gt)));
        return (mt && ln(x, st), P);
      }
      for (F = a(F); !gt.done; st++, gt = M.next())
        ((gt = R(F, x, st, gt.value, U)),
          gt !== null &&
            (t && gt.alternate !== null && F.delete(gt.key === null ? st : gt.key),
            (A = r(gt, A, st)),
            pt === null ? (P = gt) : (pt.sibling = gt),
            (pt = gt)));
      return (
        t &&
          F.forEach(function (N1) {
            return e(x, N1);
          }),
        mt && ln(x, st),
        P
      );
    }
    function Ct(x, A, M, U) {
      if (
        (typeof M == "object" &&
          M !== null &&
          M.type === w &&
          M.key === null &&
          (M = M.props.children),
        typeof M == "object" && M !== null)
      ) {
        switch (M.$$typeof) {
          case C:
            t: {
              for (var P = M.key; A !== null;) {
                if (A.key === P) {
                  if (((P = M.type), P === w)) {
                    if (A.tag === 7) {
                      (n(x, A.sibling), (U = s(A, M.props.children)), (U.return = x), (x = U));
                      break t;
                    }
                  } else if (
                    A.elementType === P ||
                    (typeof P == "object" && P !== null && P.$$typeof === W && oi(P) === A.type)
                  ) {
                    (n(x, A.sibling), (U = s(A, M.props)), Ba(U, M), (U.return = x), (x = U));
                    break t;
                  }
                  n(x, A);
                  break;
                } else e(x, A);
                A = A.sibling;
              }
              M.type === w
                ? ((U = ii(M.props.children, x.mode, U, M.key)), (U.return = x), (x = U))
                : ((U = Zl(M.type, M.key, M.props, null, x.mode, U)),
                  Ba(U, M),
                  (U.return = x),
                  (x = U));
            }
            return f(x);
          case V:
            t: {
              for (P = M.key; A !== null;) {
                if (A.key === P)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === M.containerInfo &&
                    A.stateNode.implementation === M.implementation
                  ) {
                    (n(x, A.sibling), (U = s(A, M.children || [])), (U.return = x), (x = U));
                    break t;
                  } else {
                    n(x, A);
                    break;
                  }
                else e(x, A);
                A = A.sibling;
              }
              ((U = Fu(M, x.mode, U)), (U.return = x), (x = U));
            }
            return f(x);
          case W:
            return ((M = oi(M)), Ct(x, A, M, U));
        }
        if (Lt(M)) return Q(x, A, M, U);
        if (bt(M)) {
          if (((P = bt(M)), typeof P != "function")) throw Error(u(150));
          return ((M = P.call(M)), tt(x, A, M, U));
        }
        if (typeof M.then == "function") return Ct(x, A, Pl(M), U);
        if (M.$$typeof === H) return Ct(x, A, Jl(x, M), U);
        $l(x, M);
      }
      return (typeof M == "string" && M !== "") || typeof M == "number" || typeof M == "bigint"
        ? ((M = "" + M),
          A !== null && A.tag === 6
            ? (n(x, A.sibling), (U = s(A, M)), (U.return = x), (x = U))
            : (n(x, A), (U = ku(M, x.mode, U)), (U.return = x), (x = U)),
          f(x))
        : n(x, A);
    }
    return function (x, A, M, U) {
      try {
        Ua = 0;
        var P = Ct(x, A, M, U);
        return ((Gi = null), P);
      } catch (F) {
        if (F === qi || F === Fl) throw F;
        var pt = be(29, F, null, x.mode);
        return ((pt.lanes = U), (pt.return = x), pt);
      } finally {
      }
    };
  }
  var ci = yh(!0),
    ph = yh(!1),
    Cn = !1;
  function uo(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function oo(t, e) {
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
  function zn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (St & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (a.pending = e),
        (e = Xl(t)),
        If(t, null, n),
        e
      );
    }
    return (Gl(t, a, e, n), Xl(t));
  }
  function Na(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), uf(t, n));
    }
  }
  function ro(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (r === null ? (s = r = f) : (r = r.next = f), (n = n.next));
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var co = !1;
  function wa() {
    if (co) {
      var t = Yi;
      if (t !== null) throw t;
    }
  }
  function La(t, e, n, a) {
    co = !1;
    var s = t.updateQueue;
    Cn = !1;
    var r = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var T = p,
        D = T.next;
      ((T.next = null), f === null ? (r = D) : (f.next = D), (f = T));
      var _ = t.alternate;
      _ !== null &&
        ((_ = _.updateQueue),
        (p = _.lastBaseUpdate),
        p !== f && (p === null ? (_.firstBaseUpdate = D) : (p.next = D), (_.lastBaseUpdate = T)));
    }
    if (r !== null) {
      var B = s.baseState;
      ((f = 0), (_ = D = T = null), (p = r));
      do {
        var z = p.lane & -536870913,
          R = z !== p.lane;
        if (R ? (ft & z) === z : (a & z) === z) {
          (z !== 0 && z === Hi && (co = !0),
            _ !== null &&
              (_ = _.next =
                { lane: 0, tag: p.tag, payload: p.payload, callback: null, next: null }));
          t: {
            var Q = t,
              tt = p;
            z = e;
            var Ct = n;
            switch (tt.tag) {
              case 1:
                if (((Q = tt.payload), typeof Q == "function")) {
                  B = Q.call(Ct, B, z);
                  break t;
                }
                B = Q;
                break t;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = tt.payload), (z = typeof Q == "function" ? Q.call(Ct, B, z) : Q), z == null)
                )
                  break t;
                B = S({}, B, z);
                break t;
              case 2:
                Cn = !0;
            }
          }
          ((z = p.callback),
            z !== null &&
              ((t.flags |= 64),
              R && (t.flags |= 8192),
              (R = s.callbacks),
              R === null ? (s.callbacks = [z]) : R.push(z)));
        } else
          ((R = { lane: z, tag: p.tag, payload: p.payload, callback: p.callback, next: null }),
            _ === null ? ((D = _ = R), (T = B)) : (_ = _.next = R),
            (f |= z));
        if (((p = p.next), p === null)) {
          if (((p = s.shared.pending), p === null)) break;
          ((R = p),
            (p = R.next),
            (R.next = null),
            (s.lastBaseUpdate = R),
            (s.shared.pending = null));
        }
      } while (!0);
      (_ === null && (T = B),
        (s.baseState = T),
        (s.firstBaseUpdate = D),
        (s.lastBaseUpdate = _),
        r === null && (s.shared.lanes = 0),
        (Bn |= f),
        (t.lanes = f),
        (t.memoizedState = B));
    }
  }
  function gh(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function vh(t, e) {
    var n = t.callbacks;
    if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++) gh(n[t], e);
  }
  var Xi = E(null),
    Il = E(0);
  function Sh(t, e) {
    ((t = pn), G(Il, t), G(Xi, e), (pn = t | e.baseLanes));
  }
  function fo() {
    (G(Il, pn), G(Xi, Xi.current));
  }
  function ho() {
    ((pn = Il.current), N(Xi), N(Il));
  }
  var Ae = E(null),
    Ne = null;
  function On(t) {
    var e = t.alternate;
    (G(Ht, Ht.current & 1),
      G(Ae, t),
      Ne === null && (e === null || Xi.current !== null || e.memoizedState !== null) && (Ne = t));
  }
  function mo(t) {
    (G(Ht, Ht.current), G(Ae, t), Ne === null && (Ne = t));
  }
  function Th(t) {
    t.tag === 22 ? (G(Ht, Ht.current), G(Ae, t), Ne === null && (Ne = t)) : Vn();
  }
  function Vn() {
    (G(Ht, Ht.current), G(Ae, Ae.current));
  }
  function Ee(t) {
    (N(Ae), Ne === t && (Ne = null), N(Ht));
  }
  var Ht = E(0);
  function ts(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Tr(n) || br(n))) return e;
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
  var on = 0,
    at = null,
    Mt = null,
    Xt = null,
    es = !1,
    Zi = !1,
    fi = !1,
    ns = 0,
    ja = 0,
    Qi = null,
    Mv = 0;
  function Bt() {
    throw Error(u(321));
  }
  function yo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!Te(t[n], e[n])) return !1;
    return !0;
  }
  function po(t, e, n, a, s, r) {
    return (
      (on = r),
      (at = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? id : Vo),
      (fi = !1),
      (r = n(a, s)),
      (fi = !1),
      Zi && (r = Ah(e, n, a, s)),
      bh(t),
      r
    );
  }
  function bh(t) {
    O.H = qa;
    var e = Mt !== null && Mt.next !== null;
    if (((on = 0), (Xt = Mt = at = null), (es = !1), (ja = 0), (Qi = null), e)) throw Error(u(300));
    t === null || Zt || ((t = t.dependencies), t !== null && Kl(t) && (Zt = !0));
  }
  function Ah(t, e, n, a) {
    at = t;
    var s = 0;
    do {
      if ((Zi && (Qi = null), (ja = 0), (Zi = !1), 25 <= s)) throw Error(u(301));
      if (((s += 1), (Xt = Mt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((O.H = ad), (r = e(n, a)));
    } while (Zi);
    return r;
  }
  function Dv() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Ha(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (at.flags |= 1024),
      e
    );
  }
  function go() {
    var t = ns !== 0;
    return ((ns = 0), t);
  }
  function vo(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function So(t) {
    if (es) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      es = !1;
    }
    ((on = 0), (Xt = Mt = at = null), (Zi = !1), (ja = ns = 0), (Qi = null));
  }
  function ue() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (Xt === null ? (at.memoizedState = Xt = t) : (Xt = Xt.next = t), Xt);
  }
  function Yt() {
    if (Mt === null) {
      var t = at.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Xt === null ? at.memoizedState : Xt.next;
    if (e !== null) ((Xt = e), (Mt = t));
    else {
      if (t === null) throw at.alternate === null ? Error(u(467)) : Error(u(310));
      ((Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Xt === null ? (at.memoizedState = Xt = t) : (Xt = Xt.next = t));
    }
    return Xt;
  }
  function is() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ha(t) {
    var e = ja;
    return (
      (ja += 1),
      Qi === null && (Qi = []),
      (t = hh(Qi, t, e)),
      (e = at),
      (Xt === null ? e.memoizedState : Xt.next) === null &&
        ((e = e.alternate), (O.H = e === null || e.memoizedState === null ? id : Vo)),
      t
    );
  }
  function as(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ha(t);
      if (t.$$typeof === H) return It(t);
    }
    throw Error(u(438, String(t)));
  }
  function To(t) {
    var e = null,
      n = at.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = at.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = is()), (at.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = et;
    return (e.index++, n);
  }
  function rn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ls(t) {
    var e = Yt();
    return bo(e, Mt, t);
  }
  function bo(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = a.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        ((s.next = r.next), (r.next = f));
      }
      ((e.baseQueue = s = r), (a.pending = null));
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var p = (f = null),
        T = null,
        D = e,
        _ = !1;
      do {
        var B = D.lane & -536870913;
        if (B !== D.lane ? (ft & B) === B : (on & B) === B) {
          var z = D.revertLane;
          if (z === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: D.action,
                  hasEagerState: D.hasEagerState,
                  eagerState: D.eagerState,
                  next: null,
                }),
              B === Hi && (_ = !0));
          else if ((on & z) === z) {
            ((D = D.next), z === Hi && (_ = !0));
            continue;
          } else
            ((B = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null,
            }),
              T === null ? ((p = T = B), (f = r)) : (T = T.next = B),
              (at.lanes |= z),
              (Bn |= z));
          ((B = D.action), fi && n(r, B), (r = D.hasEagerState ? D.eagerState : n(r, B)));
        } else
          ((z = {
            lane: B,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null,
          }),
            T === null ? ((p = T = z), (f = r)) : (T = T.next = z),
            (at.lanes |= B),
            (Bn |= B));
        D = D.next;
      } while (D !== null && D !== e);
      if (
        (T === null ? (f = r) : (T.next = p),
        !Te(r, t.memoizedState) && ((Zt = !0), _ && ((n = Yi), n !== null)))
      )
        throw n;
      ((t.memoizedState = r), (t.baseState = f), (t.baseQueue = T), (a.lastRenderedState = r));
    }
    return (s === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function Ao(t) {
    var e = Yt(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do ((r = t(r, f.action)), (f = f.next));
      while (f !== s);
      (Te(r, e.memoizedState) || (Zt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, a];
  }
  function Eh(t, e, n) {
    var a = at,
      s = Yt(),
      r = mt;
    if (r) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var f = !Te((Mt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Zt = !0)),
      (s = s.queue),
      Mo(Dh.bind(null, a, s, t), [t]),
      s.getSnapshot !== e || f || (Xt !== null && Xt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ki(9, { destroy: void 0 }, Mh.bind(null, a, s, n, e), null),
        zt === null)
      )
        throw Error(u(349));
      r || (on & 127) !== 0 || xh(a, e, n);
    }
    return n;
  }
  function xh(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = at.updateQueue),
      e === null
        ? ((e = is()), (at.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Mh(t, e, n, a) {
    ((e.value = n), (e.getSnapshot = a), Ch(e) && zh(t));
  }
  function Dh(t, e, n) {
    return n(function () {
      Ch(e) && zh(t);
    });
  }
  function Ch(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Te(t, n);
    } catch {
      return !0;
    }
  }
  function zh(t) {
    var e = ni(t, 2);
    e !== null && pe(e, t, 2);
  }
  function Eo(t) {
    var e = ue();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), fi)) {
        Tn(!0);
        try {
          n();
        } finally {
          Tn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Rh(t, e, n, a) {
    return ((t.baseState = n), bo(t, Mt, typeof a == "function" ? a : rn));
  }
  function Cv(t, e, n, a, s) {
    if (os(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      (O.T !== null ? n(!0) : (r.isTransition = !1),
        a(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), Oh(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function Oh(t, e) {
    var n = e.action,
      a = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = O.T,
        f = {};
      O.T = f;
      try {
        var p = n(s, a),
          T = O.S;
        (T !== null && T(f, p), Vh(t, e, p));
      } catch (D) {
        xo(t, e, D);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (O.T = r));
      }
    } else
      try {
        ((r = n(s, a)), Vh(t, e, r));
      } catch (D) {
        xo(t, e, D);
      }
  }
  function Vh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            _h(t, e, a);
          },
          function (a) {
            return xo(t, e, a);
          },
        )
      : _h(t, e, n);
  }
  function _h(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      Uh(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next), n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Oh(t, n))));
  }
  function xo(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = n), Uh(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function Uh(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Bh(t, e) {
    return e;
  }
  function Nh(t, e) {
    if (mt) {
      var n = zt.formState;
      if (n !== null) {
        t: {
          var a = at;
          if (mt) {
            if (Vt) {
              e: {
                for (var s = Vt, r = Be; s.nodeType !== 8;) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = we(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((r = s.data), (s = r === "F!" || r === "F" ? s : null));
              }
              if (s) {
                ((Vt = we(s.nextSibling)), (a = s.data === "F!"));
                break t;
              }
            }
            Mn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ue()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bh,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = td.bind(null, at, a)),
      (a.dispatch = n),
      (a = Eo(!1)),
      (r = Oo.bind(null, at, !1, a.queue)),
      (a = ue()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = s),
      (n = Cv.bind(null, at, s, r, n)),
      (s.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function wh(t) {
    var e = Yt();
    return Lh(e, Mt, t);
  }
  function Lh(t, e, n) {
    if (
      ((e = bo(t, e, Bh)[0]),
      (t = ls(rn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Ha(e);
      } catch (f) {
        throw f === qi ? Fl : f;
      }
    else a = e;
    e = Yt();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((at.flags |= 2048), Ki(9, { destroy: void 0 }, zv.bind(null, s, n), null)),
      [a, r, t]
    );
  }
  function zv(t, e) {
    t.action = e;
  }
  function jh(t) {
    var e = Yt(),
      n = Mt;
    if (n !== null) return Lh(e, n, t);
    (Yt(), (e = e.memoizedState), (n = Yt()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = t), [e, a, !1]);
  }
  function Ki(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = at.updateQueue),
      e === null && ((e = is()), (at.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Hh() {
    return Yt().memoizedState;
  }
  function ss(t, e, n, a) {
    var s = ue();
    ((at.flags |= t),
      (s.memoizedState = Ki(1 | e, { destroy: void 0 }, n, a === void 0 ? null : a)));
  }
  function us(t, e, n, a) {
    var s = Yt();
    a = a === void 0 ? null : a;
    var r = s.memoizedState.inst;
    Mt !== null && a !== null && yo(a, Mt.memoizedState.deps)
      ? (s.memoizedState = Ki(e, r, n, a))
      : ((at.flags |= t), (s.memoizedState = Ki(1 | e, r, n, a)));
  }
  function Yh(t, e) {
    ss(8390656, 8, t, e);
  }
  function Mo(t, e) {
    us(2048, 8, t, e);
  }
  function Rv(t) {
    at.flags |= 4;
    var e = at.updateQueue;
    if (e === null) ((e = is()), (at.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function qh(t) {
    var e = Yt().memoizedState;
    return (
      Rv({ ref: e, nextImpl: t }),
      function () {
        if ((St & 2) !== 0) throw Error(u(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function Gh(t, e) {
    return us(4, 2, t, e);
  }
  function Xh(t, e) {
    return us(4, 4, t, e);
  }
  function Zh(t, e) {
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
  function Qh(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), us(4, 4, Zh.bind(null, e, t), n));
  }
  function Do() {}
  function Kh(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && yo(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function Jh(t, e) {
    var n = Yt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && yo(e, a[1])) return a[0];
    if (((a = t()), fi)) {
      Tn(!0);
      try {
        t();
      } finally {
        Tn(!1);
      }
    }
    return ((n.memoizedState = [a, e]), a);
  }
  function Co(t, e, n) {
    return n === void 0 || ((on & 1073741824) !== 0 && (ft & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = kd()), (at.lanes |= t), (Bn |= t), n);
  }
  function kh(t, e, n, a) {
    return Te(n, e)
      ? n
      : Xi.current !== null
        ? ((t = Co(t, n, a)), Te(t, e) || (Zt = !0), t)
        : (on & 42) === 0 || ((on & 1073741824) !== 0 && (ft & 261930) === 0)
          ? ((Zt = !0), (t.memoizedState = n))
          : ((t = kd()), (at.lanes |= t), (Bn |= t), e);
  }
  function Fh(t, e, n, a, s) {
    var r = q.p;
    q.p = r !== 0 && 8 > r ? r : 8;
    var f = O.T,
      p = {};
    ((O.T = p), Oo(t, !1, e, n));
    try {
      var T = s(),
        D = O.S;
      if (
        (D !== null && D(p, T), T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var _ = xv(T, a);
        Ya(t, e, _, De(t));
      } else Ya(t, e, a, De(t));
    } catch (B) {
      Ya(t, e, { then: function () {}, status: "rejected", reason: B }, De());
    } finally {
      ((q.p = r), f !== null && p.types !== null && (f.types = p.types), (O.T = f));
    }
  }
  function Ov() {}
  function zo(t, e, n, a) {
    if (t.tag !== 5) throw Error(u(476));
    var s = Wh(t).queue;
    Fh(
      t,
      s,
      e,
      Z,
      n === null
        ? Ov
        : function () {
            return (Ph(t), n(a));
          },
    );
  }
  function Wh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rn,
        lastRenderedState: Z,
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
          lastRenderedReducer: rn,
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
  function Ph(t) {
    var e = Wh(t);
    (e.next === null && (e = t.alternate.memoizedState), Ya(t, e.next.queue, {}, De()));
  }
  function Ro() {
    return It(il);
  }
  function $h() {
    return Yt().memoizedState;
  }
  function Ih() {
    return Yt().memoizedState;
  }
  function Vv(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = De();
          t = zn(n);
          var a = Rn(e, t, n);
          (a !== null && (pe(a, e, n), Na(a, e, n)), (e = { cache: io() }), (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function _v(t, e, n) {
    var a = De();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      os(t) ? ed(e, n) : ((n = Ku(t, e, n, a)), n !== null && (pe(n, t, a), nd(n, e, a))));
  }
  function td(t, e, n) {
    var a = De();
    Ya(t, e, n, a);
  }
  function Ya(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (os(t)) ed(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var f = e.lastRenderedState,
            p = r(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = p), Te(p, f)))
            return (Gl(t, e, s, 0), zt === null && ql(), !1);
        } catch {
        } finally {
        }
      if (((n = Ku(t, e, s, a)), n !== null)) return (pe(n, t, a), nd(n, e, a), !0);
    }
    return !1;
  }
  function Oo(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: or(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      os(t))
    ) {
      if (e) throw Error(u(479));
    } else ((e = Ku(t, n, a, 2)), e !== null && pe(e, t, 2));
  }
  function os(t) {
    var e = t.alternate;
    return t === at || (e !== null && e === at);
  }
  function ed(t, e) {
    Zi = es = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e));
  }
  function nd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), uf(t, n));
    }
  }
  var qa = {
    readContext: It,
    use: as,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    useHostTransitionStatus: Bt,
    useFormState: Bt,
    useActionState: Bt,
    useOptimistic: Bt,
    useMemoCache: Bt,
    useCacheRefresh: Bt,
  };
  qa.useEffectEvent = Bt;
  var id = {
      readContext: It,
      use: as,
      useCallback: function (t, e) {
        return ((ue().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: It,
      useEffect: Yh,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null), ss(4194308, 4, Zh.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return ss(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ss(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ue();
        e = e === void 0 ? null : e;
        var a = t();
        if (fi) {
          Tn(!0);
          try {
            t();
          } finally {
            Tn(!1);
          }
        }
        return ((n.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, n) {
        var a = ue();
        if (n !== void 0) {
          var s = n(e);
          if (fi) {
            Tn(!0);
            try {
              n(e);
            } finally {
              Tn(!1);
            }
          }
        } else s = e;
        return (
          (a.memoizedState = a.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (a.queue = t),
          (t = t.dispatch = _v.bind(null, at, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ue();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Eo(t);
        var e = t.queue,
          n = td.bind(null, at, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Do,
      useDeferredValue: function (t, e) {
        var n = ue();
        return Co(n, t, e);
      },
      useTransition: function () {
        var t = Eo(!1);
        return ((t = Fh.bind(null, at, t.queue, !0, !1)), (ue().memoizedState = t), [!1, t]);
      },
      useSyncExternalStore: function (t, e, n) {
        var a = at,
          s = ue();
        if (mt) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), zt === null)) throw Error(u(349));
          (ft & 127) !== 0 || xh(a, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          Yh(Dh.bind(null, a, r, t), [t]),
          (a.flags |= 2048),
          Ki(9, { destroy: void 0 }, Mh.bind(null, a, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ue(),
          e = zt.identifierPrefix;
        if (mt) {
          var n = Je,
            a = Ke;
          ((n = (a & ~(1 << (32 - Se(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = ns++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Mv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Ro,
      useFormState: Nh,
      useActionState: Nh,
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
        return ((e.queue = n), (e = Oo.bind(null, at, !0, n)), (n.dispatch = e), [t, e]);
      },
      useMemoCache: To,
      useCacheRefresh: function () {
        return (ue().memoizedState = Vv.bind(null, at));
      },
      useEffectEvent: function (t) {
        var e = ue(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((St & 2) !== 0) throw Error(u(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Vo = {
      readContext: It,
      use: as,
      useCallback: Kh,
      useContext: It,
      useEffect: Mo,
      useImperativeHandle: Qh,
      useInsertionEffect: Gh,
      useLayoutEffect: Xh,
      useMemo: Jh,
      useReducer: ls,
      useRef: Hh,
      useState: function () {
        return ls(rn);
      },
      useDebugValue: Do,
      useDeferredValue: function (t, e) {
        var n = Yt();
        return kh(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ls(rn)[0],
          e = Yt().memoizedState;
        return [typeof t == "boolean" ? t : Ha(t), e];
      },
      useSyncExternalStore: Eh,
      useId: $h,
      useHostTransitionStatus: Ro,
      useFormState: wh,
      useActionState: wh,
      useOptimistic: function (t, e) {
        var n = Yt();
        return Rh(n, Mt, t, e);
      },
      useMemoCache: To,
      useCacheRefresh: Ih,
    };
  Vo.useEffectEvent = qh;
  var ad = {
    readContext: It,
    use: as,
    useCallback: Kh,
    useContext: It,
    useEffect: Mo,
    useImperativeHandle: Qh,
    useInsertionEffect: Gh,
    useLayoutEffect: Xh,
    useMemo: Jh,
    useReducer: Ao,
    useRef: Hh,
    useState: function () {
      return Ao(rn);
    },
    useDebugValue: Do,
    useDeferredValue: function (t, e) {
      var n = Yt();
      return Mt === null ? Co(n, t, e) : kh(n, Mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Ao(rn)[0],
        e = Yt().memoizedState;
      return [typeof t == "boolean" ? t : Ha(t), e];
    },
    useSyncExternalStore: Eh,
    useId: $h,
    useHostTransitionStatus: Ro,
    useFormState: jh,
    useActionState: jh,
    useOptimistic: function (t, e) {
      var n = Yt();
      return Mt !== null ? Rh(n, Mt, t, e) : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: To,
    useCacheRefresh: Ih,
  };
  ad.useEffectEvent = qh;
  function _o(t, e, n, a) {
    ((e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : S({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Uo = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = De(),
        s = zn(a);
      ((s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, a)),
        e !== null && (pe(e, t, a), Na(e, t, a)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = De(),
        s = zn(a);
      ((s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, a)),
        e !== null && (pe(e, t, a), Na(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = De(),
        a = zn(n);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = Rn(t, a, n)),
        e !== null && (pe(e, t, n), Na(e, t, n)));
    },
  };
  function ld(t, e, n, a, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, r, f)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ca(n, a) || !Ca(s, r)
          : !0
    );
  }
  function sd(t, e, n, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Uo.enqueueReplaceState(e, e.state, null));
  }
  function hi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = S({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function ud(t) {
    Yl(t);
  }
  function od(t) {
    console.error(t);
  }
  function rd(t) {
    Yl(t);
  }
  function rs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function cd(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Bo(t, e, n) {
    return (
      (n = zn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        rs(t, e);
      }),
      n
    );
  }
  function fd(t) {
    return ((t = zn(t)), (t.tag = 3), t);
  }
  function hd(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = a.value;
      ((t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          cd(e, n, a);
        }));
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        (cd(e, n, a),
          typeof s != "function" && (Nn === null ? (Nn = new Set([this])) : Nn.add(this)));
        var p = a.stack;
        this.componentDidCatch(a.value, { componentStack: p !== null ? p : "" });
      });
  }
  function Uv(t, e, n, a, s) {
    if (((n.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
      if (((e = n.alternate), e !== null && ji(e, n, s, !0), (n = Ae.current), n !== null)) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ne === null ? bs() : n.alternate === null && Nt === 0 && (Nt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              a === Wl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  lr(t, a, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Wl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue), n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  lr(t, a, s)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return (lr(t, a, s), bs(), !1);
    }
    if (mt)
      return (
        (e = Ae.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            a !== $u && ((t = Error(u(422), { cause: a })), Oa(Ve(t, n))))
          : (a !== $u && ((e = Error(u(423), { cause: a })), Oa(Ve(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (a = Ve(a, n)),
            (s = Bo(t.stateNode, a, s)),
            ro(t, s),
            Nt !== 4 && (Nt = 2)),
        !1
      );
    var r = Error(u(520), { cause: a });
    if (((r = Ve(r, n)), Fa === null ? (Fa = [r]) : Fa.push(r), Nt !== 4 && (Nt = 2), e === null))
      return !0;
    ((a = Ve(a, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Bo(n.stateNode, a, t)),
            ro(n, t),
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
                  (Nn === null || !Nn.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = fd(s)),
              hd(s, t, n, a),
              ro(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var No = Error(u(461)),
    Zt = !1;
  function te(t, e, n, a) {
    e.child = t === null ? ph(e, null, n, a) : ci(e, t.child, n, a);
  }
  function dd(t, e, n, a, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a) p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return (
      si(e),
      (a = po(t, e, n, f, r, s)),
      (p = go()),
      t !== null && !Zt
        ? (vo(t, e, s), cn(t, e, s))
        : (mt && p && Wu(e), (e.flags |= 1), te(t, e, a, s), e.child)
    );
  }
  function md(t, e, n, a, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" && !Ju(r) && r.defaultProps === void 0 && n.compare === null
        ? ((e.tag = 15), (e.type = r), yd(t, e, r, a, s))
        : ((t = Zl(n.type, null, a, e, e.mode, s)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((r = t.child), !Xo(t, s))) {
      var f = r.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Ca), n(f, a) && t.ref === e.ref))
        return cn(t, e, s);
    }
    return ((e.flags |= 1), (t = an(r, a)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  function yd(t, e, n, a, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Ca(r, a) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = a = r), Xo(t, s))) (t.flags & 131072) !== 0 && (Zt = !0);
        else return ((e.lanes = t.lanes), cn(t, e, s));
    }
    return wo(t, e, n, a, s);
  }
  function pd(t, e, n, a) {
    var s = a.children,
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
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, s = 0; a !== null;)
            ((s = s | a.lanes | a.childLanes), (a = a.sibling));
          a = s & ~r;
        } else ((a = 0), (e.child = null));
        return gd(t, e, r, n, a);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && kl(e, r !== null ? r.cachePool : null),
          r !== null ? Sh(e, r) : fo(),
          Th(e));
      else return ((a = e.lanes = 536870912), gd(t, e, r !== null ? r.baseLanes | n : n, n, a));
    } else
      r !== null
        ? (kl(e, r.cachePool), Sh(e, r), Vn(), (e.memoizedState = null))
        : (t !== null && kl(e, null), fo(), Vn());
    return (te(t, e, s, n), e.child);
  }
  function Ga(t, e) {
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
  function gd(t, e, n, a, s) {
    var r = lo();
    return (
      (r = r === null ? null : { parent: Gt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && kl(e, null),
      fo(),
      Th(e),
      t !== null && ji(t, e, a, !0),
      (e.childLanes = s),
      null
    );
  }
  function cs(t, e) {
    return (
      (e = hs({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function vd(t, e, n) {
    return (
      ci(e, t.child, null, n),
      (t = cs(e, e.pendingProps)),
      (t.flags |= 2),
      Ee(e),
      (e.memoizedState = null),
      t
    );
  }
  function Bv(t, e, n) {
    var a = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (mt) {
        if (a.mode === "hidden") return ((t = cs(e, a)), (e.lanes = 536870912), Ga(null, t));
        if (
          (mo(e),
          (t = Vt)
            ? ((t = Om(t, Be)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = eh(t)),
                (n.return = e),
                (e.child = n),
                ($t = e),
                (Vt = null)))
            : (t = null),
          t === null)
        )
          throw Mn(e);
        return ((e.lanes = 536870912), null);
      }
      return cs(e, a);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((mo(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = vd(t, e, n)));
        else if (e.memoizedState !== null) ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(u(558));
      else if ((Zt || ji(t, e, n, !1), (s = (n & t.childLanes) !== 0), Zt || s)) {
        if (((a = zt), a !== null && ((f = of(a, n)), f !== 0 && f !== r.retryLane)))
          throw ((r.retryLane = f), ni(t, f), pe(a, t, f), No);
        (bs(), (e = vd(t, e, n)));
      } else
        ((t = r.treeContext),
          (Vt = we(f.nextSibling)),
          ($t = e),
          (mt = !0),
          (xn = null),
          (Be = !1),
          t !== null && ah(e, t),
          (e = cs(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = an(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function fs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function wo(t, e, n, a, s) {
    return (
      si(e),
      (n = po(t, e, n, a, void 0, s)),
      (a = go()),
      t !== null && !Zt
        ? (vo(t, e, s), cn(t, e, s))
        : (mt && a && Wu(e), (e.flags |= 1), te(t, e, n, s), e.child)
    );
  }
  function Sd(t, e, n, a, s, r) {
    return (
      si(e),
      (e.updateQueue = null),
      (n = Ah(e, a, n, s)),
      bh(t),
      (a = go()),
      t !== null && !Zt
        ? (vo(t, e, r), cn(t, e, r))
        : (mt && a && Wu(e), (e.flags |= 1), te(t, e, n, r), e.child)
    );
  }
  function Td(t, e, n, a, s) {
    if ((si(e), e.stateNode === null)) {
      var r = Bi,
        f = n.contextType;
      (typeof f == "object" && f !== null && (r = It(f)),
        (r = new n(a, r)),
        (e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Uo),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = a),
        (r.state = e.memoizedState),
        (r.refs = {}),
        uo(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? It(f) : Bi),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (_o(e, n, f, a), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
          f !== r.state && Uo.enqueueReplaceState(r, r.state, null),
          La(e, a, r, s),
          wa(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      r = e.stateNode;
      var p = e.memoizedProps,
        T = hi(n, p);
      r.props = T;
      var D = r.context,
        _ = n.contextType;
      ((f = Bi), typeof _ == "object" && _ !== null && (f = It(_)));
      var B = n.getDerivedStateFromProps;
      ((_ = typeof B == "function" || typeof r.getSnapshotBeforeUpdate == "function"),
        (p = e.pendingProps !== p),
        _ ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((p || D !== f) && sd(e, r, a, f)),
        (Cn = !1));
      var z = e.memoizedState;
      ((r.state = z),
        La(e, a, r, s),
        wa(),
        (D = e.memoizedState),
        p || z !== D || Cn
          ? (typeof B == "function" && (_o(e, n, B, a), (D = e.memoizedState)),
            (T = Cn || ld(e, n, T, a, z, D, f))
              ? (_ ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" && r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" && (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = D)),
            (r.props = a),
            (r.state = D),
            (r.context = f),
            (a = T))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), (a = !1)));
    } else {
      ((r = e.stateNode),
        oo(t, e),
        (f = e.memoizedProps),
        (_ = hi(n, f)),
        (r.props = _),
        (B = e.pendingProps),
        (z = r.context),
        (D = n.contextType),
        (T = Bi),
        typeof D == "object" && D !== null && (T = It(D)),
        (p = n.getDerivedStateFromProps),
        (D = typeof p == "function" || typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== B || z !== T) && sd(e, r, a, T)),
        (Cn = !1),
        (z = e.memoizedState),
        (r.state = z),
        La(e, a, r, s),
        wa());
      var R = e.memoizedState;
      f !== B || z !== R || Cn || (t !== null && t.dependencies !== null && Kl(t.dependencies))
        ? (typeof p == "function" && (_o(e, n, p, a), (R = e.memoizedState)),
          (_ =
            Cn ||
            ld(e, n, _, a, z, R, T) ||
            (t !== null && t.dependencies !== null && Kl(t.dependencies)))
            ? (D ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, R, T),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(a, R, T)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = R)),
          (r.props = a),
          (r.state = R),
          (r.context = T),
          (a = _))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (r = a),
      fs(t, e),
      (a = (e.flags & 128) !== 0),
      r || a
        ? ((r = e.stateNode),
          (n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = ci(e, t.child, null, s)), (e.child = ci(e, null, n, s)))
            : te(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = cn(t, e, s)),
      t
    );
  }
  function bd(t, e, n, a) {
    return (ai(), (e.flags |= 256), te(t, e, n, a), e.child);
  }
  var Lo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function jo(t) {
    return { baseLanes: t, cachePool: ch() };
  }
  function Ho(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Me), t);
  }
  function Ad(t, e, n) {
    var a = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) || (f = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (mt) {
        if (
          (s ? On(e) : Vn(),
          (t = Vt)
            ? ((t = Om(t, Be)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: En !== null ? { id: Ke, overflow: Je } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = eh(t)),
                (n.return = e),
                (e.child = n),
                ($t = e),
                (Vt = null)))
            : (t = null),
          t === null)
        )
          throw Mn(e);
        return (br(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var p = a.children;
      return (
        (a = a.fallback),
        s
          ? (Vn(),
            (s = e.mode),
            (p = hs({ mode: "hidden", children: p }, s)),
            (a = ii(a, s, n, null)),
            (p.return = e),
            (a.return = e),
            (p.sibling = a),
            (e.child = p),
            (a = e.child),
            (a.memoizedState = jo(n)),
            (a.childLanes = Ho(t, f, n)),
            (e.memoizedState = Lo),
            Ga(null, a))
          : (On(e), Yo(e, p))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((p = T.dehydrated), p !== null)) {
      if (r)
        e.flags & 256
          ? (On(e), (e.flags &= -257), (e = qo(t, e, n)))
          : e.memoizedState !== null
            ? (Vn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Vn(),
              (p = a.fallback),
              (s = e.mode),
              (a = hs({ mode: "visible", children: a.children }, s)),
              (p = ii(p, s, n, null)),
              (p.flags |= 2),
              (a.return = e),
              (p.return = e),
              (a.sibling = p),
              (e.child = a),
              ci(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = jo(n)),
              (a.childLanes = Ho(t, f, n)),
              (e.memoizedState = Lo),
              (e = Ga(null, a)));
      else if ((On(e), br(p))) {
        if (((f = p.nextSibling && p.nextSibling.dataset), f)) var D = f.dgst;
        ((f = D),
          (a = Error(u(419))),
          (a.stack = ""),
          (a.digest = f),
          Oa({ value: a, source: null, stack: null }),
          (e = qo(t, e, n)));
      } else if ((Zt || ji(t, e, n, !1), (f = (n & t.childLanes) !== 0), Zt || f)) {
        if (((f = zt), f !== null && ((a = of(f, n)), a !== 0 && a !== T.retryLane)))
          throw ((T.retryLane = a), ni(t, a), pe(f, t, a), No);
        (Tr(p) || bs(), (e = qo(t, e, n)));
      } else
        Tr(p)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Vt = we(p.nextSibling)),
            ($t = e),
            (mt = !0),
            (xn = null),
            (Be = !1),
            t !== null && ah(e, t),
            (e = Yo(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Vn(),
        (p = a.fallback),
        (s = e.mode),
        (T = t.child),
        (D = T.sibling),
        (a = an(T, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = T.subtreeFlags & 65011712),
        D !== null ? (p = an(D, p)) : ((p = ii(p, s, n, null)), (p.flags |= 2)),
        (p.return = e),
        (a.return = e),
        (a.sibling = p),
        (e.child = a),
        Ga(null, a),
        (a = e.child),
        (p = t.child.memoizedState),
        p === null
          ? (p = jo(n))
          : ((s = p.cachePool),
            s !== null
              ? ((T = Gt._currentValue), (s = s.parent !== T ? { parent: T, pool: T } : s))
              : (s = ch()),
            (p = { baseLanes: p.baseLanes | n, cachePool: s })),
        (a.memoizedState = p),
        (a.childLanes = Ho(t, f, n)),
        (e.memoizedState = Lo),
        Ga(t.child, a))
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = an(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions), f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Yo(t, e) {
    return ((e = hs({ mode: "visible", children: e }, t.mode)), (e.return = t), (t.child = e));
  }
  function hs(t, e) {
    return ((t = be(22, t, null, e)), (t.lanes = 0), t);
  }
  function qo(t, e, n) {
    return (
      ci(e, t.child, null, n),
      (t = Yo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Ed(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), eo(t.return, e, n));
  }
  function Go(t, e, n, a, s, r) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: r,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = a),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = r));
  }
  function xd(t, e, n) {
    var a = e.pendingProps,
      s = a.revealOrder,
      r = a.tail;
    a = a.children;
    var f = Ht.current,
      p = (f & 2) !== 0;
    if (
      (p ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      G(Ht, f),
      te(t, e, a, n),
      (a = mt ? Ra : 0),
      !p && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Ed(t, n, e);
        else if (t.tag === 19) Ed(t, n, e);
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
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null;)
          ((t = n.alternate), t !== null && ts(t) === null && (s = n), (n = n.sibling));
        ((n = s),
          n === null ? ((s = e.child), (e.child = null)) : ((s = n.sibling), (n.sibling = null)),
          Go(e, !1, s, n, r, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null;) {
          if (((t = s.alternate), t !== null && ts(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = n), (n = s), (s = t));
        }
        Go(e, !0, n, null, r, a);
        break;
      case "together":
        Go(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function cn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies), (Bn |= e.lanes), (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ji(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (t = e.child, n = an(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;)
        ((t = t.sibling), (n = n.sibling = an(t, t.pendingProps)), (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function Xo(t, e) {
    return (t.lanes & e) !== 0 ? !0 : ((t = t.dependencies), !!(t !== null && Kl(t)));
  }
  function Nv(t, e, n) {
    switch (e.tag) {
      case 3:
        (se(e, e.stateNode.containerInfo), Dn(e, Gt, t.memoizedState.cache), ai());
        break;
      case 27:
      case 5:
        ma(e);
        break;
      case 4:
        se(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), mo(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Ad(t, e, n)
              : (On(e), (t = cn(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (ji(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (a) return xd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          G(Ht, Ht.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), pd(t, e, n, e.pendingProps));
      case 24:
        Dn(e, Gt, t.memoizedState.cache);
    }
    return cn(t, e, n);
  }
  function Md(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!Xo(t, n) && (e.flags & 128) === 0) return ((Zt = !1), Nv(t, e, n));
        Zt = (t.flags & 131072) !== 0;
      }
    else ((Zt = !1), mt && (e.flags & 1048576) !== 0 && ih(e, Ra, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = oi(e.elementType)), (e.type = t), typeof t == "function"))
            Ju(t)
              ? ((a = hi(t, a)), (e.tag = 1), (e = Td(null, e, t, a, n)))
              : ((e.tag = 0), (e = wo(null, e, t, a, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === X) {
                ((e.tag = 11), (e = dd(null, e, t, a, n)));
                break t;
              } else if (s === K) {
                ((e.tag = 14), (e = md(null, e, t, a, n)));
                break t;
              }
            }
            throw ((e = qt(t) || t), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return wo(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((a = e.type), (s = hi(a, e.pendingProps)), Td(t, e, a, s, n));
      case 3:
        t: {
          if ((se(e, e.stateNode.containerInfo), t === null)) throw Error(u(387));
          a = e.pendingProps;
          var r = e.memoizedState;
          ((s = r.element), oo(t, e), La(e, a, null, n));
          var f = e.memoizedState;
          if (
            ((a = f.cache),
            Dn(e, Gt, a),
            a !== r.cache && no(e, [Gt], n, !0),
            wa(),
            (a = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: a, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = bd(t, e, a, n);
              break t;
            } else if (a !== s) {
              ((s = Ve(Error(u(424)), e)), Oa(s), (e = bd(t, e, a, n)));
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
                Vt = we(t.firstChild),
                  $t = e,
                  mt = !0,
                  xn = null,
                  Be = !0,
                  n = ph(e, null, a, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((ai(), a === s)) {
              e = cn(t, e, n);
              break t;
            }
            te(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          fs(t, e),
          t === null
            ? (n = wm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : mt ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = zs(ot.current).createElement(n)),
                (a[Pt] = e),
                (a[ce] = t),
                ee(a, n, t),
                Ft(a),
                (e.stateNode = a))
            : (e.memoizedState = wm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)),
          null
        );
      case 27:
        return (
          ma(e),
          t === null &&
            mt &&
            ((a = e.stateNode = Um(e.type, e.pendingProps, ot.current)),
            ($t = e),
            (Be = !0),
            (s = Vt),
            Hn(e.type) ? ((Ar = s), (Vt = we(a.firstChild))) : (Vt = s)),
          te(t, e, e.pendingProps.children, n),
          fs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            mt &&
            ((s = a = Vt) &&
              ((a = f1(a, e.type, e.pendingProps, Be)),
              a !== null
                ? ((e.stateNode = a), ($t = e), (Vt = we(a.firstChild)), (Be = !1), (s = !0))
                : (s = !1)),
            s || Mn(e)),
          ma(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (a = r.children),
          gr(s, r) ? (a = null) : f !== null && gr(s, f) && (e.flags |= 32),
          e.memoizedState !== null && ((s = po(t, e, Dv, null, null, n)), (il._currentValue = s)),
          fs(t, e),
          te(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            mt &&
            ((t = n = Vt) &&
              ((n = h1(n, e.pendingProps, Be)),
              n !== null ? ((e.stateNode = n), ($t = e), (Vt = null), (t = !0)) : (t = !1)),
            t || Mn(e)),
          null
        );
      case 13:
        return Ad(t, e, n);
      case 4:
        return (
          se(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = ci(e, null, a, n)) : te(t, e, a, n),
          e.child
        );
      case 11:
        return dd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (te(t, e, e.pendingProps, n), e.child);
      case 8:
        return (te(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (te(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return ((a = e.pendingProps), Dn(e, e.type, a.value), te(t, e, a.children, n), e.child);
      case 9:
        return (
          (s = e.type._context),
          (a = e.pendingProps.children),
          si(e),
          (s = It(s)),
          (a = a(s)),
          (e.flags |= 1),
          te(t, e, a, n),
          e.child
        );
      case 14:
        return md(t, e, e.type, e.pendingProps, n);
      case 15:
        return yd(t, e, e.type, e.pendingProps, n);
      case 19:
        return xd(t, e, n);
      case 31:
        return Bv(t, e, n);
      case 22:
        return pd(t, e, n, e.pendingProps);
      case 24:
        return (
          si(e),
          (a = It(Gt)),
          t === null
            ? ((s = lo()),
              s === null &&
                ((s = zt),
                (r = io()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: a, cache: s }),
              uo(e),
              Dn(e, Gt, s))
            : ((t.lanes & n) !== 0 && (oo(t, e), La(e, null, null, n), wa()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (e.memoizedState = s),
                  e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
                  Dn(e, Gt, a))
                : ((a = r.cache), Dn(e, Gt, a), a !== s.cache && no(e, [Gt], n, !0))),
          te(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function fn(t) {
    t.flags |= 4;
  }
  function Zo(t, e, n, a, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if ($d()) t.flags |= 8192;
        else throw ((ri = Wl), so);
    } else t.flags &= -16777217;
  }
  function Dd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (((t.flags |= 16777216), !qm(e)))
      if ($d()) t.flags |= 8192;
      else throw ((ri = Wl), so);
  }
  function ds(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 && ((e = t.tag !== 22 ? lf() : 536870912), (t.lanes |= e), (Wi |= e)));
  }
  function Xa(t, e) {
    if (!mt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null;) (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null;) (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var s = t.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null;)
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = n), e);
  }
  function wv(t, e, n) {
    var a = e.pendingProps;
    switch ((Pu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (_t(e), null);
      case 1:
        return (_t(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          un(Gt),
          jt(),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Li(e)
              ? fn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Iu())),
          _t(e),
          null
        );
      case 26:
        var s = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (fn(e), r !== null ? (_t(e), Dd(e, r)) : (_t(e), Zo(e, s, null, a, n)))
            : r
              ? r !== t.memoizedState
                ? (fn(e), _t(e), Dd(e, r))
                : (_t(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps), t !== a && fn(e), _t(e), Zo(e, s, t, a, n)),
          null
        );
      case 27:
        if ((xl(e), (n = ot.current), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && fn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return (_t(e), null);
          }
          ((t = k.current), Li(e) ? lh(e) : ((t = Um(s, a, n)), (e.stateNode = t), fn(e)));
        }
        return (_t(e), null);
      case 5:
        if ((xl(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && fn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return (_t(e), null);
          }
          if (((r = k.current), Li(e))) lh(e);
          else {
            var f = zs(ot.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    ((r = f.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof a.is == "string"
                        ? f.createElement("select", { is: a.is })
                        : f.createElement("select")),
                      a.multiple ? (r.multiple = !0) : a.size && (r.size = a.size));
                    break;
                  default:
                    r =
                      typeof a.is == "string"
                        ? f.createElement(s, { is: a.is })
                        : f.createElement(s);
                }
            }
            ((r[Pt] = e), (r[ce] = a));
            t: for (f = e.child; f !== null;) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null;) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            e.stateNode = r;
            t: switch ((ee(r, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && fn(e);
          }
        }
        return (_t(e), Zo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null);
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && fn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = ot.current), Li(e))) {
            if (((t = e.stateNode), (n = e.memoizedProps), (a = null), (s = $t), s !== null))
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            ((t[Pt] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Am(t.nodeValue, n)
              )),
              t || Mn(e, !0));
          } else ((t = zs(t).createTextNode(a)), (t[Pt] = e), (e.stateNode = t));
        }
        return (_t(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = Li(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(u(318));
              if (((t = e.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
                throw Error(u(557));
              t[Pt] = e;
            } else (ai(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (_t(e), (t = !1));
          } else
            ((n = Iu()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
          if ((e.flags & 128) !== 0) throw Error(u(558));
        }
        return (_t(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Li(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(u(318));
              if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                throw Error(u(317));
              s[Pt] = e;
            } else (ai(), (e.flags & 128) === 0 && (e.memoizedState = null), (e.flags |= 4));
            (_t(e), (s = !1));
          } else
            ((s = Iu()),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Ee(e), e) : (Ee(e), null);
        }
        return (
          Ee(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (r = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (r = a.memoizedState.cachePool.pool),
                r !== s && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ds(e, e.updateQueue),
              _t(e),
              null)
        );
      case 4:
        return (jt(), t === null && hr(e.stateNode.containerInfo), _t(e), null);
      case 10:
        return (un(e.type), _t(e), null);
      case 19:
        if ((N(Ht), (a = e.memoizedState), a === null)) return (_t(e), null);
        if (((s = (e.flags & 128) !== 0), (r = a.rendering), r === null))
          if (s) Xa(a, !1);
          else {
            if (Nt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((r = ts(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Xa(a, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      ds(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (th(n, t), (n = n.sibling));
                  return (G(Ht, (Ht.current & 1) | 2), mt && ln(e, a.treeForkCount), e.child);
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ge() > vs &&
              ((e.flags |= 128), (s = !0), Xa(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = ts(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ds(e, t),
                Xa(a, !0),
                a.tail === null && a.tailMode === "hidden" && !r.alternate && !mt)
              )
                return (_t(e), null);
            } else
              2 * ge() - a.renderingStartTime > vs &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Xa(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = a.last), t !== null ? (t.sibling = r) : (e.child = r), (a.last = r));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ge()),
            (t.sibling = null),
            (n = Ht.current),
            G(Ht, s ? (n & 1) | 2 : n & 1),
            mt && ln(e, a.treeForkCount),
            t)
          : (_t(e), null);
      case 22:
      case 23:
        return (
          Ee(e),
          ho(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : _t(e),
          (n = e.updateQueue),
          n !== null && ds(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && N(ui),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          un(Gt),
          _t(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function Lv(t, e) {
    switch ((Pu(e), e.tag)) {
      case 1:
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 3:
        return (
          un(Gt),
          jt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 26:
      case 27:
      case 5:
        return (xl(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Ee(e), e.alternate === null)) throw Error(u(340));
          ai();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 13:
        if ((Ee(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(u(340));
          ai();
        }
        return ((t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null);
      case 19:
        return (N(Ht), null);
      case 4:
        return (jt(), null);
      case 10:
        return (un(e.type), null);
      case 22:
      case 23:
        return (
          Ee(e),
          ho(),
          t !== null && N(ui),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (un(Gt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cd(t, e) {
    switch ((Pu(e), e.tag)) {
      case 3:
        (un(Gt), jt());
        break;
      case 26:
      case 27:
      case 5:
        xl(e);
        break;
      case 4:
        jt();
        break;
      case 31:
        e.memoizedState !== null && Ee(e);
        break;
      case 13:
        Ee(e);
        break;
      case 19:
        N(Ht);
        break;
      case 10:
        un(e.type);
        break;
      case 22:
      case 23:
        (Ee(e), ho(), t !== null && N(ui));
        break;
      case 24:
        un(Gt);
    }
  }
  function Za(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var r = n.create,
              f = n.inst;
            ((a = r()), (f.destroy = a));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      Et(e, e.return, p);
    }
  }
  function _n(t, e, n) {
    try {
      var a = e.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        a = r;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst,
              p = f.destroy;
            if (p !== void 0) {
              ((f.destroy = void 0), (s = e));
              var T = n,
                D = p;
              try {
                D();
              } catch (_) {
                Et(s, T, _);
              }
            }
          }
          a = a.next;
        } while (a !== r);
      }
    } catch (_) {
      Et(e, e.return, _);
    }
  }
  function zd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        vh(e, n);
      } catch (a) {
        Et(t, t.return, a);
      }
    }
  }
  function Rd(t, e, n) {
    ((n.props = hi(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Et(t, e, a);
    }
  }
  function Qa(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (s) {
      Et(t, e, s);
    }
  }
  function ke(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Et(t, e, s);
        } finally {
          ((t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Et(t, e, s);
        }
      else n.current = null;
  }
  function Od(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Et(t, t.return, s);
    }
  }
  function Qo(t, e, n) {
    try {
      var a = t.stateNode;
      (l1(a, t.type, n, e), (a[ce] = e));
    } catch (s) {
      Et(t, t.return, s);
    }
  }
  function Vd(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || (t.tag === 27 && Hn(t.type)) || t.tag === 4
    );
  }
  function Ko(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || Vd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if ((t.tag === 27 && Hn(t.type)) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Jo(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
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
            n != null || e.onclick !== null || (e.onclick = en)));
    else if (
      a !== 4 &&
      (a === 27 && Hn(t.type) && ((n = t.stateNode), (e = null)), (t = t.child), t !== null)
    )
      for (Jo(t, e, n), t = t.sibling; t !== null;) (Jo(t, e, n), (t = t.sibling));
  }
  function ms(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6) ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (a !== 4 && (a === 27 && Hn(t.type) && (n = t.stateNode), (t = t.child), t !== null))
      for (ms(t, e, n), t = t.sibling; t !== null;) (ms(t, e, n), (t = t.sibling));
  }
  function _d(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length;) e.removeAttributeNode(s[0]);
      (ee(e, a, n), (e[Pt] = t), (e[ce] = n));
    } catch (r) {
      Et(t, t.return, r);
    }
  }
  var hn = !1,
    Qt = !1,
    ko = !1,
    Ud = typeof WeakSet == "function" ? WeakSet : Set,
    Wt = null;
  function jv(t, e) {
    if (((t = t.containerInfo), (yr = Ns), (t = Qf(t)), Yu(t))) {
      if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
              r = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              p = -1,
              T = -1,
              D = 0,
              _ = 0,
              B = t,
              z = null;
            e: for (;;) {
              for (
                var R;
                B !== n || (s !== 0 && B.nodeType !== 3) || (p = f + s),
                  B !== r || (a !== 0 && B.nodeType !== 3) || (T = f + a),
                  B.nodeType === 3 && (f += B.nodeValue.length),
                  (R = B.firstChild) !== null;
              )
                ((z = B), (B = R));
              for (;;) {
                if (B === t) break e;
                if (
                  (z === n && ++D === s && (p = f),
                  z === r && ++_ === a && (T = f),
                  (R = B.nextSibling) !== null)
                )
                  break;
                ((B = z), (z = B.parentNode));
              }
              B = R;
            }
            n = p === -1 || T === -1 ? null : { start: p, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (pr = { focusedElem: t, selectionRange: n }, Ns = !1, Wt = e; Wt !== null;)
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
                for (n = 0; n < t.length; n++) ((s = t[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                ((t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (a = n.stateNode));
                try {
                  var Q = hi(n.type, s);
                  ((t = a.getSnapshotBeforeUpdate(Q, r)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (tt) {
                  Et(n, n.return, tt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)) Sr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Sr(t);
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
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Wt = t));
            break;
          }
          Wt = e.return;
        }
  }
  function Bd(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (mn(t, n), a & 4 && Za(5, n));
        break;
      case 1:
        if ((mn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Et(n, n.return, f);
            }
          else {
            var s = hi(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Et(n, n.return, f);
            }
          }
        (a & 64 && zd(n), a & 512 && Qa(n, n.return));
        break;
      case 3:
        if ((mn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
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
            vh(t, e);
          } catch (f) {
            Et(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && _d(n);
      case 26:
      case 5:
        (mn(t, n), e === null && a & 4 && Od(n), a & 512 && Qa(n, n.return));
        break;
      case 12:
        mn(t, n);
        break;
      case 31:
        (mn(t, n), a & 4 && Ld(t, n));
        break;
      case 13:
        (mn(t, n),
          a & 4 && jd(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null && ((n = Jv.bind(null, n)), d1(t, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || hn), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || Qt), (s = hn));
          var r = Qt;
          ((hn = a),
            (Qt = e) && !r ? yn(t, n, (n.subtreeFlags & 8772) !== 0) : mn(t, n),
            (hn = s),
            (Qt = r));
        }
        break;
      case 30:
        break;
      default:
        mn(t, n);
    }
  }
  function Nd(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), Nd(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Eu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ut = null,
    he = !1;
  function dn(t, e, n) {
    for (n = n.child; n !== null;) (wd(t, e, n), (n = n.sibling));
  }
  function wd(t, e, n) {
    if (ve && typeof ve.onCommitFiberUnmount == "function")
      try {
        ve.onCommitFiberUnmount(ya, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Qt || ke(n, e),
          dn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Qt || ke(n, e);
        var a = Ut,
          s = he;
        (Hn(n.type) && ((Ut = n.stateNode), (he = !1)),
          dn(t, e, n),
          tl(n.stateNode),
          (Ut = a),
          (he = s));
        break;
      case 5:
        Qt || ke(n, e);
      case 6:
        if (((a = Ut), (s = he), (Ut = null), dn(t, e, n), (Ut = a), (he = s), Ut !== null))
          if (he)
            try {
              (Ut.nodeType === 9
                ? Ut.body
                : Ut.nodeName === "HTML"
                  ? Ut.ownerDocument.body
                  : Ut
              ).removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
          else
            try {
              Ut.removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
        break;
      case 18:
        Ut !== null &&
          (he
            ? ((t = Ut),
              zm(
                t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
                n.stateNode,
              ),
              aa(t))
            : zm(Ut, n.stateNode));
        break;
      case 4:
        ((a = Ut),
          (s = he),
          (Ut = n.stateNode.containerInfo),
          (he = !0),
          dn(t, e, n),
          (Ut = a),
          (he = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (_n(2, n, e), Qt || _n(4, n, e), dn(t, e, n));
        break;
      case 1:
        (Qt ||
          (ke(n, e), (a = n.stateNode), typeof a.componentWillUnmount == "function" && Rd(n, e, a)),
          dn(t, e, n));
        break;
      case 21:
        dn(t, e, n);
        break;
      case 22:
        ((Qt = (a = Qt) || n.memoizedState !== null), dn(t, e, n), (Qt = a));
        break;
      default:
        dn(t, e, n);
    }
  }
  function Ld(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        aa(t);
      } catch (n) {
        Et(e, e.return, n);
      }
    }
  }
  function jd(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        aa(t);
      } catch (n) {
        Et(e, e.return, n);
      }
  }
  function Hv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new Ud()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Ud()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function ys(t, e) {
    var n = Hv(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = kv.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function de(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
          r = t,
          f = e,
          p = f;
        t: for (; p !== null;) {
          switch (p.tag) {
            case 27:
              if (Hn(p.type)) {
                ((Ut = p.stateNode), (he = !1));
                break t;
              }
              break;
            case 5:
              ((Ut = p.stateNode), (he = !1));
              break t;
            case 3:
            case 4:
              ((Ut = p.stateNode.containerInfo), (he = !0));
              break t;
          }
          p = p.return;
        }
        if (Ut === null) throw Error(u(160));
        (wd(r, f, s),
          (Ut = null),
          (he = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886) for (e = e.child; e !== null;) (Hd(e, t), (e = e.sibling));
  }
  var qe = null;
  function Hd(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (de(e, t), me(t), a & 4 && (_n(3, t, t.return), Za(3, t), _n(5, t, t.return)));
        break;
      case 1:
        (de(e, t),
          me(t),
          a & 512 && (Qt || n === null || ke(n, n.return)),
          a & 64 &&
            hn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var s = qe;
        if ((de(e, t), me(t), a & 512 && (Qt || n === null || ke(n, n.return)), a & 4)) {
          var r = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type), (n = t.memoizedProps), (s = s.ownerDocument || s));
                  e: switch (a) {
                    case "title":
                      ((r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[va] ||
                          r[Pt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(a)),
                          s.head.insertBefore(r, s.querySelector("head > title"))),
                        ee(r, a, n),
                        (r[Pt] = t),
                        Ft(r),
                        (a = r));
                      break t;
                    case "link":
                      var f = Hm("link", "href", s).get(a + (n.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (
                            ((r = f[p]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === "" ? null : n.href) &&
                              r.getAttribute("rel") === (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") === (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(a)), ee(r, a, n), s.head.appendChild(r));
                      break;
                    case "meta":
                      if ((f = Hm("meta", "content", s).get(a + (n.content || "")))) {
                        for (p = 0; p < f.length; p++)
                          if (
                            ((r = f[p]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") === (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") === (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(p, 1);
                            break e;
                          }
                      }
                      ((r = s.createElement(a)), ee(r, a, n), s.head.appendChild(r));
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  ((r[Pt] = t), Ft(r), (a = r));
                }
                t.stateNode = a;
              } else Ym(s, t.type, t.stateNode);
            else t.stateNode = jm(s, a, t.memoizedProps);
          else
            r !== a
              ? (r === null
                  ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                a === null ? Ym(s, t.type, t.stateNode) : jm(s, a, t.memoizedProps))
              : a === null && t.stateNode !== null && Qo(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (de(e, t),
          me(t),
          a & 512 && (Qt || n === null || ke(n, n.return)),
          n !== null && a & 4 && Qo(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if ((de(e, t), me(t), a & 512 && (Qt || n === null || ke(n, n.return)), t.flags & 32)) {
          s = t.stateNode;
          try {
            Ci(s, "");
          } catch (Q) {
            Et(t, t.return, Q);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Qo(t, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (ko = !0));
        break;
      case 6:
        if ((de(e, t), me(t), a & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          ((a = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = a;
          } catch (Q) {
            Et(t, t.return, Q);
          }
        }
        break;
      case 3:
        if (
          ((Vs = null),
          (s = qe),
          (qe = Rs(e.containerInfo)),
          de(e, t),
          (qe = s),
          me(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            aa(e.containerInfo);
          } catch (Q) {
            Et(t, t.return, Q);
          }
        ko && ((ko = !1), Yd(t));
        break;
      case 4:
        ((a = qe), (qe = Rs(t.stateNode.containerInfo)), de(e, t), me(t), (qe = a));
        break;
      case 12:
        (de(e, t), me(t));
        break;
      case 31:
        (de(e, t),
          me(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), ys(t, a))));
        break;
      case 13:
        (de(e, t),
          me(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
            (gs = ge()),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), ys(t, a))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          D = hn,
          _ = Qt;
        if (((hn = D || s), (Qt = _ || T), de(e, t), (Qt = _), (hn = D), me(t), a & 8192))
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || T || hn || Qt || di(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((r = T.stateNode), s))
                    ((f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    p = T.stateNode;
                    var B = T.memoizedProps.style,
                      z = B != null && B.hasOwnProperty("display") ? B.display : null;
                    p.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (Q) {
                  Et(T, T.return, Q);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (Q) {
                  Et(T, T.return, Q);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var R = T.stateNode;
                  s ? Rm(R, !0) : Rm(T.stateNode, !1);
                } catch (Q) {
                  Et(T, T.return, Q);
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
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((n = a.retryQueue), n !== null && ((a.retryQueue = null), ys(t, n))));
        break;
      case 19:
        (de(e, t),
          me(t),
          a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), ys(t, a))));
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
        for (var n, a = t.return; a !== null;) {
          if (Vd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              r = Ko(t);
            ms(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ci(f, ""), (n.flags &= -33));
            var p = Ko(t);
            ms(t, p, f);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              D = Ko(t);
            Jo(t, D, T);
            break;
          default:
            throw Error(u(161));
        }
      } catch (_) {
        Et(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Yd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (Yd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling));
      }
  }
  function mn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) (Bd(t, e.alternate, e), (e = e.sibling));
  }
  function di(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_n(4, e, e.return), di(e));
          break;
        case 1:
          ke(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Rd(e, e.return, n), di(e));
          break;
        case 27:
          tl(e.stateNode);
        case 26:
        case 5:
          (ke(e, e.return), di(e));
          break;
        case 22:
          e.memoizedState === null && di(e);
          break;
        case 30:
          di(e);
          break;
        default:
          di(e);
      }
      t = t.sibling;
    }
  }
  function yn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var a = e.alternate,
        s = t,
        r = e,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (yn(s, r, n), Za(4, r));
          break;
        case 1:
          if ((yn(s, r, n), (a = r), (s = a.stateNode), typeof s.componentDidMount == "function"))
            try {
              s.componentDidMount();
            } catch (D) {
              Et(a, a.return, D);
            }
          if (((a = r), (s = a.updateQueue), s !== null)) {
            var p = a.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++) gh(T[s], p);
            } catch (D) {
              Et(a, a.return, D);
            }
          }
          (n && f & 64 && zd(r), Qa(r, r.return));
          break;
        case 27:
          _d(r);
        case 26:
        case 5:
          (yn(s, r, n), n && a === null && f & 4 && Od(r), Qa(r, r.return));
          break;
        case 12:
          yn(s, r, n);
          break;
        case 31:
          (yn(s, r, n), n && f & 4 && Ld(s, r));
          break;
        case 13:
          (yn(s, r, n), n && f & 4 && jd(s, r));
          break;
        case 22:
          (r.memoizedState === null && yn(s, r, n), Qa(r, r.return));
          break;
        case 30:
          break;
        default:
          yn(s, r, n);
      }
      e = e.sibling;
    }
  }
  function Fo(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Va(n)));
  }
  function Wo(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Va(t)));
  }
  function Ge(t, e, n, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (qd(t, e, n, a), (e = e.sibling));
  }
  function qd(t, e, n, a) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ge(t, e, n, a), s & 2048 && Za(9, e));
        break;
      case 1:
        Ge(t, e, n, a);
        break;
      case 3:
        (Ge(t, e, n, a),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Va(t))));
        break;
      case 12:
        if (s & 2048) {
          (Ge(t, e, n, a), (t = e.stateNode));
          try {
            var r = e.memoizedProps,
              f = r.id,
              p = r.onPostCommit;
            typeof p == "function" &&
              p(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (T) {
            Et(e, e.return, T);
          }
        } else Ge(t, e, n, a);
        break;
      case 31:
        Ge(t, e, n, a);
        break;
      case 13:
        Ge(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Ge(t, e, n, a)
              : Ka(t, e)
            : r._visibility & 2
              ? Ge(t, e, n, a)
              : ((r._visibility |= 2), Ji(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Fo(f, e));
        break;
      case 24:
        (Ge(t, e, n, a), s & 2048 && Wo(e.alternate, e));
        break;
      default:
        Ge(t, e, n, a);
    }
  }
  function Ji(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
      var r = t,
        f = e,
        p = n,
        T = a,
        D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Ji(r, f, p, T, s), Za(8, f));
          break;
        case 23:
          break;
        case 22:
          var _ = f.stateNode;
          (f.memoizedState !== null
            ? _._visibility & 2
              ? Ji(r, f, p, T, s)
              : Ka(r, f)
            : ((_._visibility |= 2), Ji(r, f, p, T, s)),
            s && D & 2048 && Fo(f.alternate, f));
          break;
        case 24:
          (Ji(r, f, p, T, s), s && D & 2048 && Wo(f.alternate, f));
          break;
        default:
          Ji(r, f, p, T, s);
      }
      e = e.sibling;
    }
  }
  function Ka(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          a = e,
          s = a.flags;
        switch (a.tag) {
          case 22:
            (Ka(n, a), s & 2048 && Fo(a.alternate, a));
            break;
          case 24:
            (Ka(n, a), s & 2048 && Wo(a.alternate, a));
            break;
          default:
            Ka(n, a);
        }
        e = e.sibling;
      }
  }
  var Ja = 8192;
  function ki(t, e, n) {
    if (t.subtreeFlags & Ja) for (t = t.child; t !== null;) (Gd(t, e, n), (t = t.sibling));
  }
  function Gd(t, e, n) {
    switch (t.tag) {
      case 26:
        (ki(t, e, n),
          t.flags & Ja && t.memoizedState !== null && M1(n, qe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ki(t, e, n);
        break;
      case 3:
      case 4:
        var a = qe;
        ((qe = Rs(t.stateNode.containerInfo)), ki(t, e, n), (qe = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Ja), (Ja = 16777216), ki(t, e, n), (Ja = a))
            : ki(t, e, n));
        break;
      default:
        ki(t, e, n);
    }
  }
  function Xd(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function ka(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((Wt = a), Qd(a, t));
        }
      Xd(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Zd(t), (t = t.sibling));
  }
  function Zd(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ka(t), t.flags & 2048 && _n(9, t, t.return));
        break;
      case 3:
        ka(t);
        break;
      case 12:
        ka(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), ps(t))
          : ka(t);
        break;
      default:
        ka(t);
    }
  }
  function ps(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((Wt = a), Qd(a, t));
        }
      Xd(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (_n(8, e, e.return), ps(e));
          break;
        case 22:
          ((n = e.stateNode), n._visibility & 2 && ((n._visibility &= -3), ps(e)));
          break;
        default:
          ps(e);
      }
      t = t.sibling;
    }
  }
  function Qd(t, e) {
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
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (Wt = a));
      else
        t: for (n = t; Wt !== null;) {
          a = Wt;
          var s = a.sibling,
            r = a.return;
          if ((Nd(a), a === n)) {
            Wt = null;
            break t;
          }
          if (s !== null) {
            ((s.return = r), (Wt = s));
            break t;
          }
          Wt = r;
        }
    }
  }
  var Yv = {
      getCacheForType: function (t) {
        var e = It(Gt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return It(Gt).controller.signal;
      },
    },
    qv = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    zt = null,
    rt = null,
    ft = 0,
    At = 0,
    xe = null,
    Un = !1,
    Fi = !1,
    Po = !1,
    pn = 0,
    Nt = 0,
    Bn = 0,
    mi = 0,
    $o = 0,
    Me = 0,
    Wi = 0,
    Fa = null,
    ye = null,
    Io = !1,
    gs = 0,
    Kd = 0,
    vs = 1 / 0,
    Ss = null,
    Nn = null,
    Jt = 0,
    wn = null,
    Pi = null,
    gn = 0,
    tr = 0,
    er = null,
    Jd = null,
    Wa = 0,
    nr = null;
  function De() {
    return (St & 2) !== 0 && ft !== 0 ? ft & -ft : O.T !== null ? or() : rf();
  }
  function kd() {
    if (Me === 0)
      if ((ft & 536870912) === 0 || mt) {
        var t = Cl;
        ((Cl <<= 1), (Cl & 3932160) === 0 && (Cl = 262144), (Me = t));
      } else Me = 536870912;
    return ((t = Ae.current), t !== null && (t.flags |= 32), Me);
  }
  function pe(t, e, n) {
    (((t === zt && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      ($i(t, 0), Ln(t, ft, Me, !1)),
      ga(t, n),
      ((St & 2) === 0 || t !== zt) &&
        (t === zt && ((St & 2) === 0 && (mi |= n), Nt === 4 && Ln(t, ft, Me, !1)), Fe(t)));
  }
  function Fd(t, e, n) {
    if ((St & 6) !== 0) throw Error(u(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || pa(t, e),
      s = a ? Zv(t, e) : ar(t, e, !0),
      r = a;
    do {
      if (s === 0) {
        Fi && !a && Ln(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !Gv(n))) {
          ((s = ar(t, e, !1)), (r = !1));
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            ((f = t.pendingLanes & -536870913), (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Fa;
              var T = p.current.memoizedState.isDehydrated;
              if ((T && ($i(p, f).flags |= 256), (f = ar(p, f, !1)), f !== 2)) {
                if (Po && !T) {
                  ((p.errorRecoveryDisabledLanes |= r), (mi |= r), (s = 4));
                  break t;
                }
                ((r = ye), (ye = s), r !== null && (ye === null ? (ye = r) : ye.push.apply(ye, r)));
              }
              s = f;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          ($i(t, 0), Ln(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ln(a, e, Me, !Un);
              break t;
            case 2:
              ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((s = gs + 300 - ge()), 10 < s)) {
            if ((Ln(a, e, Me, !Un), Rl(a, 0, !0) !== 0)) break t;
            ((gn = e),
              (a.timeoutHandle = Dm(
                Wd.bind(null, a, n, ye, Ss, Io, e, Me, mi, Wi, Un, r, "Throttled", -0, 0),
                s,
              )));
            break t;
          }
          Wd(a, n, ye, Ss, Io, e, Me, mi, Wi, Un, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Fe(t);
  }
  function Wd(t, e, n, a, s, r, f, p, T, D, _, B, z, R) {
    if (((t.timeoutHandle = -1), (B = e.subtreeFlags), B & 8192 || (B & 16785408) === 16785408)) {
      ((B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: en,
      }),
        Gd(e, r, B));
      var Q = (r & 62914560) === r ? gs - ge() : (r & 4194048) === r ? Kd - ge() : 0;
      if (((Q = D1(B, Q)), Q !== null)) {
        ((gn = r),
          (t.cancelPendingCommit = Q(am.bind(null, t, e, r, n, a, s, f, p, T, _, B, null, z, R))),
          Ln(t, r, f, !D));
        return;
      }
    }
    am(t, e, r, n, a, s, f, p, T);
  }
  function Gv(t) {
    for (var e = t; ;) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!Te(r(), s)) return !1;
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
  function Ln(t, e, n, a) {
    ((e &= ~$o),
      (e &= ~mi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var s = e; 0 < s;) {
      var r = 31 - Se(s),
        f = 1 << r;
      ((a[r] = -1), (s &= ~f));
    }
    n !== 0 && sf(t, n, e);
  }
  function Ts() {
    return (St & 6) === 0 ? (Pa(0), !1) : !0;
  }
  function ir() {
    if (rt !== null) {
      if (At === 0) var t = rt.return;
      else ((t = rt), (sn = li = null), So(t), (Gi = null), (Ua = 0), (t = rt));
      for (; t !== null;) (Cd(t.alternate, t), (t = t.return));
      rt = null;
    }
  }
  function $i(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), o1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (gn = 0),
      ir(),
      (zt = t),
      (rt = n = an(t.current, null)),
      (ft = e),
      (At = 0),
      (xe = null),
      (Un = !1),
      (Fi = pa(t, e)),
      (Po = !1),
      (Wi = Me = $o = mi = Bn = Nt = 0),
      (ye = Fa = null),
      (Io = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a;) {
        var s = 31 - Se(a),
          r = 1 << s;
        ((e |= t[s]), (a &= ~r));
      }
    return ((pn = e), ql(), n);
  }
  function Pd(t, e) {
    ((at = null),
      (O.H = qa),
      e === qi || e === Fl
        ? ((e = dh()), (At = 3))
        : e === so
          ? ((e = dh()), (At = 4))
          : (At =
              e === No
                ? 8
                : e !== null && typeof e == "object" && typeof e.then == "function"
                  ? 6
                  : 1),
      (xe = e),
      rt === null && ((Nt = 1), rs(t, Ve(e, t.current))));
  }
  function $d() {
    var t = Ae.current;
    return t === null
      ? !0
      : (ft & 4194048) === ft
        ? Ne === null
        : (ft & 62914560) === ft || (ft & 536870912) !== 0
          ? t === Ne
          : !1;
  }
  function Id() {
    var t = O.H;
    return ((O.H = qa), t === null ? qa : t);
  }
  function tm() {
    var t = O.A;
    return ((O.A = Yv), t);
  }
  function bs() {
    ((Nt = 4),
      Un || ((ft & 4194048) !== ft && Ae.current !== null) || (Fi = !0),
      ((Bn & 134217727) === 0 && (mi & 134217727) === 0) || zt === null || Ln(zt, ft, Me, !1));
  }
  function ar(t, e, n) {
    var a = St;
    St |= 2;
    var s = Id(),
      r = tm();
    ((zt !== t || ft !== e) && ((Ss = null), $i(t, e)), (e = !1));
    var f = Nt;
    t: do
      try {
        if (At !== 0 && rt !== null) {
          var p = rt,
            T = xe;
          switch (At) {
            case 8:
              (ir(), (f = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ae.current === null && (e = !0);
              var D = At;
              if (((At = 0), (xe = null), Ii(t, p, T, D), n && Fi)) {
                f = 0;
                break t;
              }
              break;
            default:
              ((D = At), (At = 0), (xe = null), Ii(t, p, T, D));
          }
        }
        (Xv(), (f = Nt));
        break;
      } catch (_) {
        Pd(t, _);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (sn = li = null),
      (St = a),
      (O.H = s),
      (O.A = r),
      rt === null && ((zt = null), (ft = 0), ql()),
      f
    );
  }
  function Xv() {
    for (; rt !== null;) em(rt);
  }
  function Zv(t, e) {
    var n = St;
    St |= 2;
    var a = Id(),
      s = tm();
    zt !== t || ft !== e ? ((Ss = null), (vs = ge() + 500), $i(t, e)) : (Fi = pa(t, e));
    t: do
      try {
        if (At !== 0 && rt !== null) {
          e = rt;
          var r = xe;
          e: switch (At) {
            case 1:
              ((At = 0), (xe = null), Ii(t, e, r, 1));
              break;
            case 2:
            case 9:
              if (fh(r)) {
                ((At = 0), (xe = null), nm(e));
                break;
              }
              ((e = function () {
                ((At !== 2 && At !== 9) || zt !== t || (At = 7), Fe(t));
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
              fh(r) ? ((At = 0), (xe = null), nm(e)) : ((At = 0), (xe = null), Ii(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (rt.tag) {
                case 26:
                  f = rt.memoizedState;
                case 5:
                case 27:
                  var p = rt;
                  if (f ? qm(f) : p.stateNode.complete) {
                    ((At = 0), (xe = null));
                    var T = p.sibling;
                    if (T !== null) rt = T;
                    else {
                      var D = p.return;
                      D !== null ? ((rt = D), As(D)) : (rt = null);
                    }
                    break e;
                  }
              }
              ((At = 0), (xe = null), Ii(t, e, r, 5));
              break;
            case 6:
              ((At = 0), (xe = null), Ii(t, e, r, 6));
              break;
            case 8:
              (ir(), (Nt = 6));
              break t;
            default:
              throw Error(u(462));
          }
        }
        Qv();
        break;
      } catch (_) {
        Pd(t, _);
      }
    while (!0);
    return (
      (sn = li = null),
      (O.H = a),
      (O.A = s),
      (St = n),
      rt !== null ? 0 : ((zt = null), (ft = 0), ql(), Nt)
    );
  }
  function Qv() {
    for (; rt !== null && !m0();) em(rt);
  }
  function em(t) {
    var e = Md(t.alternate, t, pn);
    ((t.memoizedProps = t.pendingProps), e === null ? As(t) : (rt = e));
  }
  function nm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Sd(n, e, e.pendingProps, e.type, void 0, ft);
        break;
      case 11:
        e = Sd(n, e, e.pendingProps, e.type.render, e.ref, ft);
        break;
      case 5:
        So(e);
      default:
        (Cd(n, e), (e = rt = th(e, pn)), (e = Md(n, e, pn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? As(t) : (rt = e));
  }
  function Ii(t, e, n, a) {
    ((sn = li = null), So(e), (Gi = null), (Ua = 0));
    var s = e.return;
    try {
      if (Uv(t, s, e, n, ft)) {
        ((Nt = 1), rs(t, Ve(n, t.current)), (rt = null));
        return;
      }
    } catch (r) {
      if (s !== null) throw ((rt = s), r);
      ((Nt = 1), rs(t, Ve(n, t.current)), (rt = null));
      return;
    }
    e.flags & 32768
      ? (mt || a === 1
          ? (t = !0)
          : Fi || (ft & 536870912) !== 0
            ? (t = !1)
            : ((Un = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Ae.current), a !== null && a.tag === 13 && (a.flags |= 16384))),
        im(e, t))
      : As(e);
  }
  function As(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        im(e, Un);
        return;
      }
      t = e.return;
      var n = wv(e.alternate, e, pn);
      if (n !== null) {
        rt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        rt = e;
        return;
      }
      rt = e = t;
    } while (e !== null);
    Nt === 0 && (Nt = 5);
  }
  function im(t, e) {
    do {
      var n = Lv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (rt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        rt = t;
        return;
      }
      rt = t = n;
    } while (t !== null);
    ((Nt = 6), (rt = null));
  }
  function am(t, e, n, a, s, r, f, p, T) {
    t.cancelPendingCommit = null;
    do Es();
    while (Jt !== 0);
    if ((St & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= Qu),
        x0(t, n, r, f, p, T),
        t === zt && ((rt = zt = null), (ft = 0)),
        (Pi = e),
        (wn = t),
        (gn = n),
        (tr = r),
        (er = s),
        (Jd = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Fv(Ml, function () {
              return (rm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = O.T), (O.T = null), (s = q.p), (q.p = 2), (f = St), (St |= 4));
        try {
          jv(t, e, n);
        } finally {
          ((St = f), (q.p = s), (O.T = a));
        }
      }
      ((Jt = 1), lm(), sm(), um());
    }
  }
  function lm() {
    if (Jt === 1) {
      Jt = 0;
      var t = wn,
        e = Pi,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var a = q.p;
        q.p = 2;
        var s = St;
        St |= 4;
        try {
          Hd(e, t);
          var r = pr,
            f = Qf(t.containerInfo),
            p = r.focusedElem,
            T = r.selectionRange;
          if (f !== p && p && p.ownerDocument && Zf(p.ownerDocument.documentElement, p)) {
            if (T !== null && Yu(p)) {
              var D = T.start,
                _ = T.end;
              if ((_ === void 0 && (_ = D), "selectionStart" in p))
                ((p.selectionStart = D), (p.selectionEnd = Math.min(_, p.value.length)));
              else {
                var B = p.ownerDocument || document,
                  z = (B && B.defaultView) || window;
                if (z.getSelection) {
                  var R = z.getSelection(),
                    Q = p.textContent.length,
                    tt = Math.min(T.start, Q),
                    Ct = T.end === void 0 ? tt : Math.min(T.end, Q);
                  !R.extend && tt > Ct && ((f = Ct), (Ct = tt), (tt = f));
                  var x = Xf(p, tt),
                    A = Xf(p, Ct);
                  if (
                    x &&
                    A &&
                    (R.rangeCount !== 1 ||
                      R.anchorNode !== x.node ||
                      R.anchorOffset !== x.offset ||
                      R.focusNode !== A.node ||
                      R.focusOffset !== A.offset)
                  ) {
                    var M = B.createRange();
                    (M.setStart(x.node, x.offset),
                      R.removeAllRanges(),
                      tt > Ct
                        ? (R.addRange(M), R.extend(A.node, A.offset))
                        : (M.setEnd(A.node, A.offset), R.addRange(M)));
                  }
                }
              }
            }
            for (B = [], R = p; (R = R.parentNode);)
              R.nodeType === 1 && B.push({ element: R, left: R.scrollLeft, top: R.scrollTop });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < B.length; p++) {
              var U = B[p];
              ((U.element.scrollLeft = U.left), (U.element.scrollTop = U.top));
            }
          }
          ((Ns = !!yr), (pr = yr = null));
        } finally {
          ((St = s), (q.p = a), (O.T = n));
        }
      }
      ((t.current = e), (Jt = 2));
    }
  }
  function sm() {
    if (Jt === 2) {
      Jt = 0;
      var t = wn,
        e = Pi,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = O.T), (O.T = null));
        var a = q.p;
        q.p = 2;
        var s = St;
        St |= 4;
        try {
          Bd(t, e.alternate, e);
        } finally {
          ((St = s), (q.p = a), (O.T = n));
        }
      }
      Jt = 3;
    }
  }
  function um() {
    if (Jt === 4 || Jt === 3) {
      ((Jt = 0), y0());
      var t = wn,
        e = Pi,
        n = gn,
        a = Jd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (Pi = wn = null), om(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Nn = null),
        bu(n),
        (e = e.stateNode),
        ve && typeof ve.onCommitFiberRoot == "function")
      )
        try {
          ve.onCommitFiberRoot(ya, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = O.T), (s = q.p), (q.p = 2), (O.T = null));
        try {
          for (var r = t.onRecoverableError, f = 0; f < a.length; f++) {
            var p = a[f];
            r(p.value, { componentStack: p.stack });
          }
        } finally {
          ((O.T = e), (q.p = s));
        }
      }
      ((gn & 3) !== 0 && Es(),
        Fe(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0 ? (t === nr ? Wa++ : ((Wa = 0), (nr = t))) : (Wa = 0),
        Pa(0));
    }
  }
  function om(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Va(e)));
  }
  function Es() {
    return (lm(), sm(), um(), rm());
  }
  function rm() {
    if (Jt !== 5) return !1;
    var t = wn,
      e = tr;
    tr = 0;
    var n = bu(gn),
      a = O.T,
      s = q.p;
    try {
      ((q.p = 32 > n ? 32 : n), (O.T = null), (n = er), (er = null));
      var r = wn,
        f = gn;
      if (((Jt = 0), (Pi = wn = null), (gn = 0), (St & 6) !== 0)) throw Error(u(331));
      var p = St;
      if (
        ((St |= 4),
        Zd(r.current),
        qd(r, r.current, f, n),
        (St = p),
        Pa(0, !1),
        ve && typeof ve.onPostCommitFiberRoot == "function")
      )
        try {
          ve.onPostCommitFiberRoot(ya, r);
        } catch {}
      return !0;
    } finally {
      ((q.p = s), (O.T = a), om(t, e));
    }
  }
  function cm(t, e, n) {
    ((e = Ve(n, e)),
      (e = Bo(t.stateNode, e, 2)),
      (t = Rn(t, e, 2)),
      t !== null && (ga(t, 2), Fe(t)));
  }
  function Et(t, e, n) {
    if (t.tag === 3) cm(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          cm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" && (Nn === null || !Nn.has(a)))
          ) {
            ((t = Ve(n, t)),
              (n = fd(2)),
              (a = Rn(e, n, 2)),
              a !== null && (hd(n, a, e, t), ga(a, 2), Fe(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function lr(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new qv();
      var s = new Set();
      a.set(e, s);
    } else ((s = a.get(e)), s === void 0 && ((s = new Set()), a.set(e, s)));
    s.has(n) || ((Po = !0), s.add(n), (t = Kv.bind(null, t, e, n)), e.then(t, t));
  }
  function Kv(t, e, n) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      zt === t &&
        (ft & n) === n &&
        (Nt === 4 || (Nt === 3 && (ft & 62914560) === ft && 300 > ge() - gs)
          ? (St & 2) === 0 && $i(t, 0)
          : ($o |= n),
        Wi === ft && (Wi = 0)),
      Fe(t));
  }
  function fm(t, e) {
    (e === 0 && (e = lf()), (t = ni(t, e)), t !== null && (ga(t, e), Fe(t)));
  }
  function Jv(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), fm(t, n));
  }
  function kv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (a !== null && a.delete(e), fm(t, n));
  }
  function Fv(t, e) {
    return gu(t, e);
  }
  var xs = null,
    ta = null,
    sr = !1,
    Ms = !1,
    ur = !1,
    jn = 0;
  function Fe(t) {
    (t !== ta && t.next === null && (ta === null ? (xs = ta = t) : (ta = ta.next = t)),
      (Ms = !0),
      sr || ((sr = !0), Pv()));
  }
  function Pa(t, e) {
    if (!ur && Ms) {
      ur = !0;
      do
        for (var n = !1, a = xs; a !== null;) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = a.suspendedLanes,
                p = a.pingedLanes;
              ((r = (1 << (31 - Se(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~p)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), ym(a, r));
          } else
            ((r = ft),
              (r = Rl(
                a,
                a === zt ? r : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || pa(a, r) || ((n = !0), ym(a, r)));
          a = a.next;
        }
      while (n);
      ur = !1;
    }
  }
  function Wv() {
    hm();
  }
  function hm() {
    Ms = sr = !1;
    var t = 0;
    jn !== 0 && u1() && (t = jn);
    for (var e = ge(), n = null, a = xs; a !== null;) {
      var s = a.next,
        r = dm(a, e);
      (r === 0
        ? ((a.next = null), n === null ? (xs = s) : (n.next = s), s === null && (ta = n))
        : ((n = a), (t !== 0 || (r & 3) !== 0) && (Ms = !0)),
        (a = s));
    }
    ((Jt !== 0 && Jt !== 5) || Pa(t), jn !== 0 && (jn = 0));
  }
  function dm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var f = 31 - Se(r),
        p = 1 << f,
        T = s[f];
      (T === -1
        ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = E0(p, e))
        : T <= e && (t.expiredLanes |= p),
        (r &= ~p));
    }
    if (
      ((e = zt),
      (n = ft),
      (n = Rl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      (a = t.callbackNode),
      n === 0 || (t === e && (At === 2 || At === 9)) || t.cancelPendingCommit !== null)
    )
      return (a !== null && a !== null && vu(a), (t.callbackNode = null), (t.callbackPriority = 0));
    if ((n & 3) === 0 || pa(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && vu(a), bu(n))) {
        case 2:
        case 8:
          n = nf;
          break;
        case 32:
          n = Ml;
          break;
        case 268435456:
          n = af;
          break;
        default:
          n = Ml;
      }
      return (
        (a = mm.bind(null, t)),
        (n = gu(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && vu(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function mm(t, e) {
    if (Jt !== 0 && Jt !== 5) return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Es() && t.callbackNode !== n) return null;
    var a = ft;
    return (
      (a = Rl(t, t === zt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1)),
      a === 0
        ? null
        : (Fd(t, a, e),
          dm(t, ge()),
          t.callbackNode != null && t.callbackNode === n ? mm.bind(null, t) : null)
    );
  }
  function ym(t, e) {
    if (Es()) return null;
    Fd(t, e, !0);
  }
  function Pv() {
    r1(function () {
      (St & 6) !== 0 ? gu(ef, Wv) : hm();
    });
  }
  function or() {
    if (jn === 0) {
      var t = Hi;
      (t === 0 && ((t = Dl), (Dl <<= 1), (Dl & 261888) === 0 && (Dl = 256)), (jn = t));
    }
    return jn;
  }
  function pm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ul("" + t);
  }
  function gm(t, e) {
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
  function $v(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = pm((s[ce] || null).action),
        f = a.submitter;
      f &&
        ((e = (e = f[ce] || null) ? pm(e.formAction) : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var p = new Ll("action", "action", null, a, s);
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (jn !== 0) {
                  var T = f ? gm(s, f) : new FormData(s);
                  zo(n, { pending: !0, data: T, method: s.method, action: r }, null, T);
                }
              } else
                typeof r == "function" &&
                  (p.preventDefault(),
                  (T = f ? gm(s, f) : new FormData(s)),
                  zo(n, { pending: !0, data: T, method: s.method, action: r }, r, T));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var rr = 0; rr < Zu.length; rr++) {
    var cr = Zu[rr],
      Iv = cr.toLowerCase(),
      t1 = cr[0].toUpperCase() + cr.slice(1);
    Ye(Iv, "on" + t1);
  }
  (Ye(kf, "onAnimationEnd"),
    Ye(Ff, "onAnimationIteration"),
    Ye(Wf, "onAnimationStart"),
    Ye("dblclick", "onDoubleClick"),
    Ye("focusin", "onFocus"),
    Ye("focusout", "onBlur"),
    Ye(pv, "onTransitionRun"),
    Ye(gv, "onTransitionStart"),
    Ye(vv, "onTransitionCancel"),
    Ye(Pf, "onTransitionEnd"),
    Mi("onMouseEnter", ["mouseout", "mouseover"]),
    Mi("onMouseLeave", ["mouseout", "mouseover"]),
    Mi("onPointerEnter", ["pointerout", "pointerover"]),
    Mi("onPointerLeave", ["pointerout", "pointerover"]),
    $n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    $n(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    $n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    $n(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    $n(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var $a =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    e1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($a),
    );
  function vm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        s = a.event;
      a = a.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f],
              T = p.instance,
              D = p.currentTarget;
            if (((p = p.listener), T !== r && s.isPropagationStopped())) break t;
            ((r = p), (s.currentTarget = D));
            try {
              r(s);
            } catch (_) {
              Yl(_);
            }
            ((s.currentTarget = null), (r = T));
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((p = a[f]),
              (T = p.instance),
              (D = p.currentTarget),
              (p = p.listener),
              T !== r && s.isPropagationStopped())
            )
              break t;
            ((r = p), (s.currentTarget = D));
            try {
              r(s);
            } catch (_) {
              Yl(_);
            }
            ((s.currentTarget = null), (r = T));
          }
      }
    }
  }
  function ct(t, e) {
    var n = e[Au];
    n === void 0 && (n = e[Au] = new Set());
    var a = t + "__bubble";
    n.has(a) || (Sm(e, t, 2, !1), n.add(a));
  }
  function fr(t, e, n) {
    var a = 0;
    (e && (a |= 4), Sm(n, t, a, e));
  }
  var Ds = "_reactListening" + Math.random().toString(36).slice(2);
  function hr(t) {
    if (!t[Ds]) {
      ((t[Ds] = !0),
        hf.forEach(function (n) {
          n !== "selectionchange" && (e1.has(n) || fr(n, !1, t), fr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ds] || ((e[Ds] = !0), fr("selectionchange", !1, e));
    }
  }
  function Sm(t, e, n, a) {
    switch (km(e)) {
      case 2:
        var s = R1;
        break;
      case 8:
        s = O1;
        break;
      default:
        s = Cr;
    }
    ((n = s.bind(null, e, n, t)),
      (s = void 0),
      !Vu || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (s = !0),
      a
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
          ? t.addEventListener(e, n, { passive: s })
          : t.addEventListener(e, n, !1));
  }
  function dr(t, e, n, a, s) {
    var r = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var p = a.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = a.return; f !== null;) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s) return;
              f = f.return;
            }
          for (; p !== null;) {
            if (((f = Ai(p)), f === null)) return;
            if (((T = f.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              a = r = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    xf(function () {
      var D = r,
        _ = Ru(n),
        B = [];
      t: {
        var z = $f.get(t);
        if (z !== void 0) {
          var R = Ll,
            Q = t;
          switch (t) {
            case "keypress":
              if (Nl(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = k0;
              break;
            case "focusin":
              ((Q = "focus"), (R = Nu));
              break;
            case "focusout":
              ((Q = "blur"), (R = Nu));
              break;
            case "beforeblur":
            case "afterblur":
              R = Nu;
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
              R = Cf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = w0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = P0;
              break;
            case kf:
            case Ff:
            case Wf:
              R = H0;
              break;
            case Pf:
              R = I0;
              break;
            case "scroll":
            case "scrollend":
              R = B0;
              break;
            case "wheel":
              R = ev;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = q0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Rf;
              break;
            case "toggle":
            case "beforetoggle":
              R = iv;
          }
          var tt = (e & 4) !== 0,
            Ct = !tt && (t === "scroll" || t === "scrollend"),
            x = tt ? (z !== null ? z + "Capture" : null) : z;
          tt = [];
          for (var A = D, M; A !== null;) {
            var U = A;
            if (
              ((M = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                M === null ||
                x === null ||
                ((U = Ta(A, x)), U != null && tt.push(Ia(A, U, M))),
              Ct)
            )
              break;
            A = A.return;
          }
          0 < tt.length && ((z = new R(z, Q, null, n, _)), B.push({ event: z, listeners: tt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (R = t === "mouseout" || t === "pointerout"),
            z && n !== zu && (Q = n.relatedTarget || n.fromElement) && (Ai(Q) || Q[bi]))
          )
            break t;
          if (
            (R || z) &&
            ((z =
              _.window === _
                ? _
                : (z = _.ownerDocument)
                  ? z.defaultView || z.parentWindow
                  : window),
            R
              ? ((Q = n.relatedTarget || n.toElement),
                (R = D),
                (Q = Q ? Ai(Q) : null),
                Q !== null &&
                  ((Ct = d(Q)), (tt = Q.tag), Q !== Ct || (tt !== 5 && tt !== 27 && tt !== 6)) &&
                  (Q = null))
              : ((R = null), (Q = D)),
            R !== Q)
          ) {
            if (
              ((tt = Cf),
              (U = "onMouseLeave"),
              (x = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((tt = Rf), (U = "onPointerLeave"), (x = "onPointerEnter"), (A = "pointer")),
              (Ct = R == null ? z : Sa(R)),
              (M = Q == null ? z : Sa(Q)),
              (z = new tt(U, A + "leave", R, n, _)),
              (z.target = Ct),
              (z.relatedTarget = M),
              (U = null),
              Ai(_) === D &&
                ((tt = new tt(x, A + "enter", Q, n, _)),
                (tt.target = M),
                (tt.relatedTarget = Ct),
                (U = tt)),
              (Ct = U),
              R && Q)
            )
              e: {
                for (tt = n1, x = R, A = Q, M = 0, U = x; U; U = tt(U)) M++;
                U = 0;
                for (var P = A; P; P = tt(P)) U++;
                for (; 0 < M - U;) ((x = tt(x)), M--);
                for (; 0 < U - M;) ((A = tt(A)), U--);
                for (; M--;) {
                  if (x === A || (A !== null && x === A.alternate)) {
                    tt = x;
                    break e;
                  }
                  ((x = tt(x)), (A = tt(A)));
                }
                tt = null;
              }
            else tt = null;
            (R !== null && Tm(B, z, R, tt, !1), Q !== null && Ct !== null && Tm(B, Ct, Q, tt, !0));
          }
        }
        t: {
          if (
            ((z = D ? Sa(D) : window),
            (R = z.nodeName && z.nodeName.toLowerCase()),
            R === "select" || (R === "input" && z.type === "file"))
          )
            var pt = Lf;
          else if (Nf(z))
            if (jf) pt = dv;
            else {
              pt = fv;
              var F = cv;
            }
          else
            ((R = z.nodeName),
              !R || R.toLowerCase() !== "input" || (z.type !== "checkbox" && z.type !== "radio")
                ? D && Cu(D.elementType) && (pt = Lf)
                : (pt = hv));
          if (pt && (pt = pt(t, D))) {
            wf(B, pt, n, _);
            break t;
          }
          (F && F(t, z, D),
            t === "focusout" &&
              D &&
              z.type === "number" &&
              D.memoizedProps.value != null &&
              Du(z, "number", z.value));
        }
        switch (((F = D ? Sa(D) : window), t)) {
          case "focusin":
            (Nf(F) || F.contentEditable === "true") && ((Vi = F), (qu = D), (za = null));
            break;
          case "focusout":
            za = qu = Vi = null;
            break;
          case "mousedown":
            Gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Gu = !1), Kf(B, n, _));
            break;
          case "selectionchange":
            if (yv) break;
          case "keydown":
          case "keyup":
            Kf(B, n, _);
        }
        var st;
        if (Lu)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          Oi
            ? Uf(t, n) && (ht = "onCompositionEnd")
            : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
        (ht &&
          (Of &&
            n.locale !== "ko" &&
            (Oi || ht !== "onCompositionStart"
              ? ht === "onCompositionEnd" && Oi && (st = Mf())
              : ((An = _), (_u = "value" in An ? An.value : An.textContent), (Oi = !0))),
          (F = Cs(D, ht)),
          0 < F.length &&
            ((ht = new zf(ht, t, null, n, _)),
            B.push({ event: ht, listeners: F }),
            st ? (ht.data = st) : ((st = Bf(n)), st !== null && (ht.data = st)))),
          (st = lv ? sv(t, n) : uv(t, n)) &&
            ((ht = Cs(D, "onBeforeInput")),
            0 < ht.length &&
              ((F = new zf("onBeforeInput", "beforeinput", null, n, _)),
              B.push({ event: F, listeners: ht }),
              (F.data = st))),
          $v(B, t, D, n, _));
      }
      vm(B, e);
    });
  }
  function Ia(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Cs(t, e) {
    for (var n = e + "Capture", a = []; t !== null;) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = Ta(t, n)),
          s != null && a.unshift(Ia(t, s, r)),
          (s = Ta(t, e)),
          s != null && a.push(Ia(t, s, r))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function n1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Tm(t, e, n, a, s) {
    for (var r = e._reactName, f = []; n !== null && n !== a;) {
      var p = n,
        T = p.alternate,
        D = p.stateNode;
      if (((p = p.tag), T !== null && T === a)) break;
      ((p !== 5 && p !== 26 && p !== 27) ||
        D === null ||
        ((T = D),
        s
          ? ((D = Ta(n, r)), D != null && f.unshift(Ia(n, D, T)))
          : s || ((D = Ta(n, r)), D != null && f.push(Ia(n, D, T)))),
        (n = n.return));
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var i1 = /\r\n?/g,
    a1 = /\u0000|\uFFFD/g;
  function bm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        i1,
        `
`,
      )
      .replace(a1, "");
  }
  function Am(t, e) {
    return ((e = bm(e)), bm(t) === e);
  }
  function Dt(t, e, n, a, s, r) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Ci(t, a)
          : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Ci(t, "" + a);
        break;
      case "className":
        Vl(t, "class", a);
        break;
      case "tabIndex":
        Vl(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vl(t, n, a);
        break;
      case "style":
        Af(t, a, r);
        break;
      case "data":
        if (e !== "object") {
          Vl(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Ul("" + a)), t.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                Dt(t, e, "formEncType", s.formEncType, s, null),
                Dt(t, e, "formMethod", s.formMethod, s, null),
                Dt(t, e, "formTarget", s.formTarget, s, null))
              : (Dt(t, e, "encType", s.encType, s, null),
                Dt(t, e, "method", s.method, s, null),
                Dt(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Ul("" + a)), t.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (t.onclick = en);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Ul("" + a)), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
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
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        (ct("beforetoggle", t), ct("toggle", t), Ol(t, "popover", a));
        break;
      case "xlinkActuate":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        tn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        tn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ol(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
          ((n = _0.get(n) || n), Ol(t, n, a));
    }
  }
  function mr(t, e, n, a, s, r) {
    switch (n) {
      case "style":
        Af(t, a, r);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Ci(t, a)
          : (typeof a == "number" || typeof a == "bigint") && Ci(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = en);
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
        if (!df.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[ce] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof a == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t ? (t[n] = null) : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, s));
              break t;
            }
            n in t ? (t[n] = a) : a === !0 ? t.setAttribute(n, "") : Ol(t, n, a);
          }
    }
  }
  function ee(t, e, n) {
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
        (ct("error", t), ct("load", t));
        var a = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  Dt(t, e, r, f, n, null);
              }
          }
        (s && Dt(t, e, "srcSet", n.srcSet, n, null), a && Dt(t, e, "src", n.src, n, null));
        return;
      case "input":
        ct("invalid", t);
        var p = (r = f = s = null),
          T = null,
          D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var _ = n[a];
            if (_ != null)
              switch (a) {
                case "name":
                  s = _;
                  break;
                case "type":
                  f = _;
                  break;
                case "checked":
                  T = _;
                  break;
                case "defaultChecked":
                  D = _;
                  break;
                case "value":
                  r = _;
                  break;
                case "defaultValue":
                  p = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null) throw Error(u(137, e));
                  break;
                default:
                  Dt(t, e, a, _, n, null);
              }
          }
        vf(t, r, p, T, D, f, s, !1);
        return;
      case "select":
        (ct("invalid", t), (a = f = r = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((p = n[s]), p != null))
            switch (s) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                a = p;
              default:
                Dt(t, e, s, p, n, null);
            }
        ((e = r),
          (n = f),
          (t.multiple = !!a),
          e != null ? Di(t, !!a, e, !1) : n != null && Di(t, !!a, n, !0));
        return;
      case "textarea":
        (ct("invalid", t), (r = s = a = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((p = n[f]), p != null))
            switch (f) {
              case "value":
                a = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(u(91));
                break;
              default:
                Dt(t, e, f, p, n, null);
            }
        Tf(t, a, s, r);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && ((a = n[T]), a != null))
            switch (T) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Dt(t, e, T, a, n, null);
            }
        return;
      case "dialog":
        (ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t));
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < $a.length; a++) ct($a[a], t);
        break;
      case "image":
        (ct("error", t), ct("load", t));
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (ct("error", t), ct("load", t));
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
        for (D in n)
          if (n.hasOwnProperty(D) && ((a = n[D]), a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                Dt(t, e, D, a, n, null);
            }
        return;
      default:
        if (Cu(e)) {
          for (_ in n)
            n.hasOwnProperty(_) && ((a = n[_]), a !== void 0 && mr(t, e, _, a, n, void 0));
          return;
        }
    }
    for (p in n) n.hasOwnProperty(p) && ((a = n[p]), a != null && Dt(t, e, p, a, n, null));
  }
  function l1(t, e, n, a) {
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
        var s = null,
          r = null,
          f = null,
          p = null,
          T = null,
          D = null,
          _ = null;
        for (R in n) {
          var B = n[R];
          if (n.hasOwnProperty(R) && B != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = B;
              default:
                a.hasOwnProperty(R) || Dt(t, e, R, null, a, B);
            }
        }
        for (var z in a) {
          var R = a[z];
          if (((B = n[z]), a.hasOwnProperty(z) && (R != null || B != null)))
            switch (z) {
              case "type":
                r = R;
                break;
              case "name":
                s = R;
                break;
              case "checked":
                D = R;
                break;
              case "defaultChecked":
                _ = R;
                break;
              case "value":
                f = R;
                break;
              case "defaultValue":
                p = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(u(137, e));
                break;
              default:
                R !== B && Dt(t, e, z, R, a, B);
            }
        }
        Mu(t, f, p, T, D, _, r, s);
        return;
      case "select":
        R = f = p = z = null;
        for (r in n)
          if (((T = n[r]), n.hasOwnProperty(r) && T != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                R = T;
              default:
                a.hasOwnProperty(r) || Dt(t, e, r, null, a, T);
            }
        for (s in a)
          if (((r = a[s]), (T = n[s]), a.hasOwnProperty(s) && (r != null || T != null)))
            switch (s) {
              case "value":
                z = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== T && Dt(t, e, s, r, a, T);
            }
        ((e = p),
          (n = f),
          (a = R),
          z != null
            ? Di(t, !!n, z, !1)
            : !!a != !!n && (e != null ? Di(t, !!n, e, !0) : Di(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        R = z = null;
        for (p in n)
          if (((s = n[p]), n.hasOwnProperty(p) && s != null && !a.hasOwnProperty(p)))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, p, null, a, s);
            }
        for (f in a)
          if (((s = a[f]), (r = n[f]), a.hasOwnProperty(f) && (s != null || r != null)))
            switch (f) {
              case "value":
                z = s;
                break;
              case "defaultValue":
                R = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(u(91));
                break;
              default:
                s !== r && Dt(t, e, f, s, a, r);
            }
        Sf(t, z, R);
        return;
      case "option":
        for (var Q in n)
          if (((z = n[Q]), n.hasOwnProperty(Q) && z != null && !a.hasOwnProperty(Q)))
            switch (Q) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Dt(t, e, Q, null, a, z);
            }
        for (T in a)
          if (((z = a[T]), (R = n[T]), a.hasOwnProperty(T) && z !== R && (z != null || R != null)))
            switch (T) {
              case "selected":
                t.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Dt(t, e, T, z, a, R);
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
        for (var tt in n)
          ((z = n[tt]),
            n.hasOwnProperty(tt) && z != null && !a.hasOwnProperty(tt) && Dt(t, e, tt, null, a, z));
        for (D in a)
          if (((z = a[D]), (R = n[D]), a.hasOwnProperty(D) && z !== R && (z != null || R != null)))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(u(137, e));
                break;
              default:
                Dt(t, e, D, z, a, R);
            }
        return;
      default:
        if (Cu(e)) {
          for (var Ct in n)
            ((z = n[Ct]),
              n.hasOwnProperty(Ct) &&
                z !== void 0 &&
                !a.hasOwnProperty(Ct) &&
                mr(t, e, Ct, void 0, a, z));
          for (_ in a)
            ((z = a[_]),
              (R = n[_]),
              !a.hasOwnProperty(_) ||
                z === R ||
                (z === void 0 && R === void 0) ||
                mr(t, e, _, z, a, R));
          return;
        }
    }
    for (var x in n)
      ((z = n[x]),
        n.hasOwnProperty(x) && z != null && !a.hasOwnProperty(x) && Dt(t, e, x, null, a, z));
    for (B in a)
      ((z = a[B]),
        (R = n[B]),
        !a.hasOwnProperty(B) || z === R || (z == null && R == null) || Dt(t, e, B, z, a, R));
  }
  function Em(t) {
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
  function s1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          r = s.transferSize,
          f = s.initiatorType,
          p = s.duration;
        if (r && p && Em(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a],
              D = T.startTime;
            if (D > p) break;
            var _ = T.transferSize,
              B = T.initiatorType;
            _ && Em(B) && ((T = T.responseEnd), (f += _ * (T < p ? 1 : (p - D) / (T - D))));
          }
          if ((--a, (e += (8 * (r + f)) / (s.duration / 1e3)), t++, 10 < t)) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var yr = null,
    pr = null;
  function zs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function xm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mm(t, e) {
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
  function gr(t, e) {
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
  var vr = null;
  function u1() {
    var t = window.event;
    return t && t.type === "popstate" ? (t === vr ? !1 : ((vr = t), !0)) : ((vr = null), !1);
  }
  var Dm = typeof setTimeout == "function" ? setTimeout : void 0,
    o1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Cm = typeof Promise == "function" ? Promise : void 0,
    r1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Cm < "u"
          ? function (t) {
              return Cm.resolve(null).then(t).catch(c1);
            }
          : Dm;
  function c1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Hn(t) {
    return t === "head";
  }
  function zm(t, e) {
    var n = e,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (t.removeChild(s), aa(e));
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++;
        else if (n === "html") tl(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), tl(n));
          for (var r = n.firstChild; r;) {
            var f = r.nextSibling,
              p = r.nodeName;
            (r[va] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = f));
          }
        } else n === "body" && tl(t.ownerDocument.body);
      n = s;
    } while (n);
    aa(e);
  }
  function Rm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
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
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function Sr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Sr(n), Eu(n));
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
  function f1(t, e, n, a) {
    for (; t.nodeType === 1;) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[va])
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
                r !== s.rel ||
                t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
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
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = we(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function h1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n) ||
        ((t = we(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Om(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e) ||
        ((t = we(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Tr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function br(t) {
    return t.data === "$!" || (t.data === "$?" && t.ownerDocument.readyState !== "loading");
  }
  function d1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function we(t) {
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
  var Ar = null;
  function Vm(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return we(t.nextSibling);
          e--;
        } else (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function _m(t) {
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
  function Um(t, e, n) {
    switch (((e = zs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function tl(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    Eu(t);
  }
  var Le = new Map(),
    Bm = new Set();
  function Rs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var vn = q.d;
  q.d = { f: m1, r: y1, D: p1, C: g1, L: v1, m: S1, X: b1, S: T1, M: A1 };
  function m1() {
    var t = vn.f(),
      e = Ts();
    return t || e;
  }
  function y1(t) {
    var e = Ei(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ph(e) : vn.r(t);
  }
  var ea = typeof document > "u" ? null : document;
  function Nm(t, e, n) {
    var a = ea;
    if (a && typeof e == "string" && e) {
      var s = Re(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        Bm.has(s) ||
          (Bm.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(s) === null &&
            ((e = a.createElement("link")), ee(e, "link", t), Ft(e), a.head.appendChild(e))));
    }
  }
  function p1(t) {
    (vn.D(t), Nm("dns-prefetch", t, null));
  }
  function g1(t, e) {
    (vn.C(t, e), Nm("preconnect", t, e));
  }
  function v1(t, e, n) {
    vn.L(t, e, n);
    var a = ea;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Re(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" && (s += '[imagesizes="' + Re(n.imageSizes) + '"]'))
        : (s += '[href="' + Re(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = na(t);
          break;
        case "script":
          r = ia(t);
      }
      Le.has(r) ||
        ((t = S(
          { rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e },
          n,
        )),
        Le.set(r, t),
        a.querySelector(s) !== null ||
          (e === "style" && a.querySelector(el(r))) ||
          (e === "script" && a.querySelector(nl(r))) ||
          ((e = a.createElement("link")), ee(e, "link", t), Ft(e), a.head.appendChild(e)));
    }
  }
  function S1(t, e) {
    vn.m(t, e);
    var n = ea;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        s = 'link[rel="modulepreload"][as="' + Re(a) + '"][href="' + Re(t) + '"]',
        r = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ia(t);
      }
      if (
        !Le.has(r) &&
        ((t = S({ rel: "modulepreload", href: t }, e)), Le.set(r, t), n.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(nl(r))) return;
        }
        ((a = n.createElement("link")), ee(a, "link", t), Ft(a), n.head.appendChild(a));
      }
    }
  }
  function T1(t, e, n) {
    vn.S(t, e, n);
    var a = ea;
    if (a && t) {
      var s = xi(a).hoistableStyles,
        r = na(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var p = { loading: 0, preload: null };
        if ((f = a.querySelector(el(r)))) p.loading = 5;
        else {
          ((t = S({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Le.get(r)) && Er(t, n));
          var T = (f = a.createElement("link"));
          (Ft(T),
            ee(T, "link", t),
            (T._p = new Promise(function (D, _) {
              ((T.onload = D), (T.onerror = _));
            })),
            T.addEventListener("load", function () {
              p.loading |= 1;
            }),
            T.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            Os(f, e, a));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: p }), s.set(r, f));
      }
    }
  }
  function b1(t, e) {
    vn.X(t, e);
    var n = ea;
    if (n && t) {
      var a = xi(n).hoistableScripts,
        s = ia(t),
        r = a.get(s);
      r ||
        ((r = n.querySelector(nl(s))),
        r ||
          ((t = S({ src: t, async: !0 }, e)),
          (e = Le.get(s)) && xr(t, e),
          (r = n.createElement("script")),
          Ft(r),
          ee(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(s, r));
    }
  }
  function A1(t, e) {
    vn.M(t, e);
    var n = ea;
    if (n && t) {
      var a = xi(n).hoistableScripts,
        s = ia(t),
        r = a.get(s);
      r ||
        ((r = n.querySelector(nl(s))),
        r ||
          ((t = S({ src: t, async: !0, type: "module" }, e)),
          (e = Le.get(s)) && xr(t, e),
          (r = n.createElement("script")),
          Ft(r),
          ee(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        a.set(s, r));
    }
  }
  function wm(t, e, n, a) {
    var s = (s = ot.current) ? Rs(s) : null;
    if (!s) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = na(n.href)),
            (n = xi(s).hoistableStyles),
            (a = n.get(e)),
            a || ((a = { type: "style", instance: null, count: 0, state: null }), n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = na(n.href);
          var r = xi(s).hoistableStyles,
            f = r.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, f),
              (r = s.querySelector(el(t))) && !r._p && ((f.instance = r), (f.state.loading = 5)),
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
                r || E1(s, t, n, f.state))),
            e && a === null)
          )
            throw Error(u(528, ""));
          return f;
        }
        if (e && a !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" && e && typeof e != "function" && typeof e != "symbol"
            ? ((e = ia(n)),
              (n = xi(s).hoistableScripts),
              (a = n.get(e)),
              a || ((a = { type: "script", instance: null, count: 0, state: null }), n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function na(t) {
    return 'href="' + Re(t) + '"';
  }
  function el(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Lm(t) {
    return S({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function E1(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ee(e, "link", n),
        Ft(e),
        t.head.appendChild(e));
  }
  function ia(t) {
    return '[src="' + Re(t) + '"]';
  }
  function nl(t) {
    return "script[async]" + t;
  }
  function jm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Re(n.href) + '"]');
          if (a) return ((e.instance = a), Ft(a), a);
          var s = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ft(a),
            ee(a, "style", s),
            Os(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          s = na(n.href);
          var r = t.querySelector(el(s));
          if (r) return ((e.state.loading |= 4), (e.instance = r), Ft(r), r);
          ((a = Lm(n)),
            (s = Le.get(s)) && Er(a, s),
            (r = (t.ownerDocument || t).createElement("link")),
            Ft(r));
          var f = r;
          return (
            (f._p = new Promise(function (p, T) {
              ((f.onload = p), (f.onerror = T));
            })),
            ee(r, "link", a),
            (e.state.loading |= 4),
            Os(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = ia(n.src)),
            (s = t.querySelector(nl(r)))
              ? ((e.instance = s), Ft(s), s)
              : ((a = n),
                (s = Le.get(r)) && ((a = S({}, n)), xr(a, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Ft(s),
                ee(s, "link", a),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Os(a, n.precedence, t));
    return e.instance;
  }
  function Os(t, e, n) {
    for (
      var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        s = a.length ? a[a.length - 1] : null,
        r = s,
        f = 0;
      f < a.length;
      f++
    ) {
      var p = a[f];
      if (p.dataset.precedence === e) r = p;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Er(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function xr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Vs = null;
  function Hm(t, e, n) {
    if (Vs === null) {
      var a = new Map(),
        s = (Vs = new Map());
      s.set(n, a);
    } else ((s = Vs), (a = s.get(n)), a || ((a = new Map()), s.set(n, a)));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var r = n[s];
      if (
        !(r[va] || r[Pt] || (t === "link" && r.getAttribute("rel") === "stylesheet")) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(r) : a.set(f, [r]);
      }
    }
    return a;
  }
  function Ym(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null));
  }
  function x1(t, e, n) {
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
  function qm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function M1(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = na(a.href),
          r = e.querySelector(el(s));
        if (r) {
          ((e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = _s.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            Ft(r));
          return;
        }
        ((r = e.ownerDocument || e),
          (a = Lm(a)),
          (s = Le.get(s)) && Er(a, s),
          (r = r.createElement("link")),
          Ft(r));
        var f = r;
        ((f._p = new Promise(function (p, T) {
          ((f.onload = p), (f.onerror = T));
        })),
          ee(r, "link", a),
          (n.instance = r));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = _s.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Mr = 0;
  function D1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Bs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Bs(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Mr === 0 && (Mr = 62500 * s1());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 && (t.stylesheets && Bs(t, t.stylesheets), t.unsuspend))
                ) {
                  var r = t.unsuspend;
                  ((t.unsuspend = null), r());
                }
              },
              (t.imgBytes > Mr ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function _s() {
    if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
      if (this.stylesheets) Bs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Us = null;
  function Bs(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++, (Us = new Map()), e.forEach(C1, t), (Us = null), _s.call(t)));
  }
  function C1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Us.get(t);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Us.set(t, n));
        for (
          var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0;
          r < s.length;
          r++
        ) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (a = f));
        }
        a && n.set(null, a);
      }
      ((s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || a),
        r === a && n.set(null, s),
        n.set(f, s),
        this.count++,
        (a = _s.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var il = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function z1(t, e, n, a, s, r, f, p, T) {
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
      (this.expirationTimes = Su(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Su(0)),
      (this.hiddenUpdates = Su(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function Gm(t, e, n, a, s, r, f, p, T, D, _, B) {
    return (
      (t = new z1(t, e, n, f, T, D, _, B, p)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = be(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = io()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: a, isDehydrated: n, cache: e }),
      uo(r),
      t
    );
  }
  function Xm(t) {
    return t ? ((t = Bi), t) : Bi;
  }
  function Zm(t, e, n, a, s, r) {
    ((s = Xm(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = zn(e)),
      (a.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (a.callback = r),
      (n = Rn(t, a, e)),
      n !== null && (pe(n, t, e), Na(n, t, e)));
  }
  function Qm(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Dr(t, e) {
    (Qm(t, e), (t = t.alternate) && Qm(t, e));
  }
  function Km(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ni(t, 67108864);
      (e !== null && pe(e, t, 67108864), Dr(t, 67108864));
    }
  }
  function Jm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = De();
      e = Tu(e);
      var n = ni(t, e);
      (n !== null && pe(n, t, e), Dr(t, e));
    }
  }
  var Ns = !0;
  function R1(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var r = q.p;
    try {
      ((q.p = 2), Cr(t, e, n, a));
    } finally {
      ((q.p = r), (O.T = s));
    }
  }
  function O1(t, e, n, a) {
    var s = O.T;
    O.T = null;
    var r = q.p;
    try {
      ((q.p = 8), Cr(t, e, n, a));
    } finally {
      ((q.p = r), (O.T = s));
    }
  }
  function Cr(t, e, n, a) {
    if (Ns) {
      var s = zr(a);
      if (s === null) (dr(t, e, a, ws, n), Fm(t, a));
      else if (_1(s, t, e, n, a)) a.stopPropagation();
      else if ((Fm(t, a), e & 4 && -1 < V1.indexOf(t))) {
        for (; s !== null;) {
          var r = Ei(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = Pn(r.pendingLanes);
                  if (f !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f;) {
                      var T = 1 << (31 - Se(f));
                      ((p.entanglements[1] |= T), (f &= ~T));
                    }
                    (Fe(r), (St & 6) === 0 && ((vs = ge() + 500), Pa(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((p = ni(r, 2)), p !== null && pe(p, r, 2), Ts(), Dr(r, 2));
            }
          if (((r = zr(a)), r === null && dr(t, e, a, ws, n), r === s)) break;
          s = r;
        }
        s !== null && a.stopPropagation();
      } else dr(t, e, a, null, n);
    }
  }
  function zr(t) {
    return ((t = Ru(t)), Rr(t));
  }
  var ws = null;
  function Rr(t) {
    if (((ws = null), (t = Ai(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = h(e)), t !== null)) return t;
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
    return ((ws = t), null);
  }
  function km(t) {
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
        switch (p0()) {
          case ef:
            return 2;
          case nf:
            return 8;
          case Ml:
          case g0:
            return 32;
          case af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Or = !1,
    Yn = null,
    qn = null,
    Gn = null,
    al = new Map(),
    ll = new Map(),
    Xn = [],
    V1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Fm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Gn = null;
        break;
      case "pointerover":
      case "pointerout":
        al.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ll.delete(e.pointerId);
    }
  }
  function sl(t, e, n, a, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = Ei(e)), e !== null && Km(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function _1(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return ((Yn = sl(Yn, t, e, n, a, s)), !0);
      case "dragenter":
        return ((qn = sl(qn, t, e, n, a, s)), !0);
      case "mouseover":
        return ((Gn = sl(Gn, t, e, n, a, s)), !0);
      case "pointerover":
        var r = s.pointerId;
        return (al.set(r, sl(al.get(r) || null, t, e, n, a, s)), !0);
      case "gotpointercapture":
        return ((r = s.pointerId), ll.set(r, sl(ll.get(r) || null, t, e, n, a, s)), !0);
    }
    return !1;
  }
  function Wm(t) {
    var e = Ai(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = h(n)), e !== null)) {
            ((t.blockedOn = e),
              cf(t.priority, function () {
                Jm(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            ((t.blockedOn = e),
              cf(t.priority, function () {
                Jm(n);
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
  function Ls(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = zr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((zu = a), n.target.dispatchEvent(a), (zu = null));
      } else return ((e = Ei(n)), e !== null && Km(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Pm(t, e, n) {
    Ls(t) && n.delete(e);
  }
  function U1() {
    ((Or = !1),
      Yn !== null && Ls(Yn) && (Yn = null),
      qn !== null && Ls(qn) && (qn = null),
      Gn !== null && Ls(Gn) && (Gn = null),
      al.forEach(Pm),
      ll.forEach(Pm));
  }
  function js(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Or || ((Or = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, U1)));
  }
  var Hs = null;
  function $m(t) {
    Hs !== t &&
      ((Hs = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Hs === t && (Hs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            s = t[e + 2];
          if (typeof a != "function") {
            if (Rr(a || n) === null) continue;
            break;
          }
          var r = Ei(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            zo(r, { pending: !0, data: s, method: n.method, action: a }, a, s));
        }
      }));
  }
  function aa(t) {
    function e(T) {
      return js(T, t);
    }
    (Yn !== null && js(Yn, t),
      qn !== null && js(qn, t),
      Gn !== null && js(Gn, t),
      al.forEach(e),
      ll.forEach(e));
    for (var n = 0; n < Xn.length; n++) {
      var a = Xn[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Xn.length && ((n = Xn[0]), n.blockedOn === null);)
      (Wm(n), n.blockedOn === null && Xn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          r = n[a + 1],
          f = s[ce] || null;
        if (typeof r == "function") f || $m(n);
        else if (f) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[ce] || null))) p = f.formAction;
            else if (Rr(s) !== null) continue;
          } else p = f.action;
          (typeof p == "function" ? (n[a + 1] = p) : (n.splice(a, 3), (a -= 3)), $m(n));
        }
      }
  }
  function Im() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
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
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Vr(t) {
    this._internalRoot = t;
  }
  ((Ys.prototype.render = Vr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        a = De();
      Zm(n, a, t, e, null, null);
    }),
    (Ys.prototype.unmount = Vr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (Zm(t.current, 2, null, t, null, null), Ts(), (e[bi] = null));
        }
      }));
  function Ys(t) {
    this._internalRoot = t;
  }
  Ys.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = rf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++);
      (Xn.splice(n, 0, t), n === 0 && Wm(t));
    }
  };
  var ty = l.version;
  if (ty !== "19.2.6") throw Error(u(527, ty, "19.2.6"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return ((t = y(e)), (t = t !== null ? v(t) : null), (t = t === null ? null : t.stateNode), t);
  };
  var B1 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.6",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qs.isDisabled && qs.supportsFiber)
      try {
        ((ya = qs.inject(B1)), (ve = qs));
      } catch {}
  }
  return (
    (ol.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        a = "",
        s = ud,
        r = od,
        f = rd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = Gm(t, 1, !1, null, null, n, a, null, s, r, f, Im)),
        (t[bi] = e.current),
        hr(t),
        new Vr(e)
      );
    }),
    (ol.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var a = !1,
        s = "",
        r = ud,
        f = od,
        p = rd,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = Gm(t, 1, !0, e, n ?? null, a, s, T, r, f, p, Im)),
        (e.context = Xm(null)),
        (n = e.current),
        (a = De()),
        (a = Tu(a)),
        (s = zn(a)),
        (s.callback = null),
        Rn(n, s, a),
        (n = a),
        (e.current.lanes = n),
        ga(e, n),
        Fe(e),
        (t[bi] = e.current),
        hr(t),
        new Ys(e)
      );
    }),
    (ol.version = "19.2.6"),
    ol
  );
}
var cy;
function Z1() {
  if (cy) return Br.exports;
  cy = 1;
  function i() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return (i(), (Br.exports = X1()), Br.exports);
}
var Q1 = Z1();
const K1 = "modulepreload",
  J1 = function (i) {
    return "/preset-sites/auto-machines/" + i;
  },
  fy = {},
  k1 = function (l, o, u) {
    let c = Promise.resolve();
    if (o && o.length > 0) {
      let h = function (y) {
        return Promise.all(
          y.map((v) =>
            Promise.resolve(v).then(
              (S) => ({ status: "fulfilled", value: S }),
              (S) => ({ status: "rejected", reason: S }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const m = document.querySelector("meta[property=csp-nonce]"),
        g = (m == null ? void 0 : m.nonce) || (m == null ? void 0 : m.getAttribute("nonce"));
      c = h(
        o.map((y) => {
          if (((y = J1(y)), y in fy)) return;
          fy[y] = !0;
          const v = y.endsWith(".css"),
            S = v ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${y}"]${S}`)) return;
          const b = document.createElement("link");
          if (
            ((b.rel = v ? "stylesheet" : K1),
            v || (b.as = "script"),
            (b.crossOrigin = ""),
            (b.href = y),
            g && b.setAttribute("nonce", g),
            document.head.appendChild(b),
            v)
          )
            return new Promise((C, V) => {
              (b.addEventListener("load", C),
                b.addEventListener("error", () => V(new Error(`Unable to preload CSS for ${y}`))));
            });
        }),
      );
    }
    function d(h) {
      const m = new Event("vite:preloadError", { cancelable: !0 });
      if (((m.payload = h), window.dispatchEvent(m), !m.defaultPrevented)) throw h;
    }
    return c.then((h) => {
      for (const m of h || []) m.status === "rejected" && d(m.reason);
      return l().catch(d);
    });
  },
  Cp = I.createContext({});
function F1(i) {
  const l = I.useRef(null);
  return (l.current === null && (l.current = i()), l.current);
}
const W1 = typeof window < "u",
  P1 = W1 ? I.useLayoutEffect : I.useEffect,
  Dc = I.createContext(null);
function Cc(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function Is(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const Ie = (i, l, o) => (o > l ? l : o < i ? i : o);
let zc = () => {};
const Jn = {},
  zp = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),
  Rp = (i) => typeof i == "object" && i !== null,
  Op = (i) => /^0[^.\s]+$/u.test(i);
function Vp(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const He = (i) => i,
  Tl = (...i) => i.reduce((l, o) => (u) => o(l(u))),
  pl = (i, l, o) => {
    const u = l - i;
    return u ? (o - i) / u : 1;
  };
class Rc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return (Cc(this.subscriptions, l), () => Is(this.subscriptions, l));
  }
  notify(l, o, u) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, o, u);
      else
        for (let d = 0; d < c; d++) {
          const h = this.subscriptions[d];
          h && h(l, o, u);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ce = (i) => i * 1e3,
  je = (i) => i / 1e3,
  _p = (i, l) => (l ? i * (1e3 / l) : 0),
  Up = (i, l, o) => (((1 - 3 * o + 3 * l) * i + (3 * o - 6 * l)) * i + 3 * l) * i,
  $1 = 1e-7,
  I1 = 12;
function tS(i, l, o, u, c) {
  let d,
    h,
    m = 0;
  do ((h = l + (o - l) / 2), (d = Up(h, u, c) - i), d > 0 ? (o = h) : (l = h));
  while (Math.abs(d) > $1 && ++m < I1);
  return h;
}
function bl(i, l, o, u) {
  if (i === l && o === u) return He;
  const c = (d) => tS(d, 0, 1, i, o);
  return (d) => (d === 0 || d === 1 ? d : Up(c(d), l, u));
}
const Bp = (i) => (l) => (l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2),
  Np = (i) => (l) => 1 - i(1 - l),
  wp = bl(0.33, 1.53, 0.69, 0.99),
  Oc = Np(wp),
  Lp = Bp(Oc),
  jp = (i) => (i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Oc(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1)))),
  Vc = (i) => 1 - Math.sin(Math.acos(i)),
  Hp = Np(Vc),
  Yp = Bp(Vc),
  eS = bl(0.42, 0, 1, 1),
  nS = bl(0, 0, 0.58, 1),
  qp = bl(0.42, 0, 0.58, 1),
  iS = (i) => Array.isArray(i) && typeof i[0] != "number",
  Gp = (i) => Array.isArray(i) && typeof i[0] == "number",
  aS = {
    linear: He,
    easeIn: eS,
    easeInOut: qp,
    easeOut: nS,
    circIn: Vc,
    circInOut: Yp,
    circOut: Hp,
    backIn: Oc,
    backInOut: Lp,
    backOut: wp,
    anticipate: jp,
  },
  lS = (i) => typeof i == "string",
  hy = (i) => {
    if (Gp(i)) {
      zc(i.length === 4);
      const [l, o, u, c] = i;
      return bl(l, o, u, c);
    } else if (lS(i)) return aS[i];
    return i;
  },
  Gs = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function sS(i, l) {
  let o = new Set(),
    u = new Set(),
    c = !1,
    d = !1;
  const h = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function g(v) {
    (h.has(v) && (y.schedule(v), i()), v(m));
  }
  const y = {
    schedule: (v, S = !1, b = !1) => {
      const V = b && c ? o : u;
      return (S && h.add(v), V.add(v), v);
    },
    cancel: (v) => {
      (u.delete(v), h.delete(v));
    },
    process: (v) => {
      if (((m = v), c)) {
        d = !0;
        return;
      }
      c = !0;
      const S = o;
      ((o = u), (u = S), o.forEach(g), o.clear(), (c = !1), d && ((d = !1), y.process(v)));
    },
  };
  return y;
}
const uS = 40;
function Xp(i, l) {
  let o = !1,
    u = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    d = () => (o = !0),
    h = Gs.reduce((H, X) => ((H[X] = sS(d)), H), {}),
    {
      setup: m,
      read: g,
      resolveKeyframes: y,
      preUpdate: v,
      update: S,
      preRender: b,
      render: C,
      postRender: V,
    } = h,
    w = () => {
      const H = Jn.useManualTiming,
        X = H ? c.timestamp : performance.now();
      ((o = !1),
        H || (c.delta = u ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, uS), 1)),
        (c.timestamp = X),
        (c.isProcessing = !0),
        m.process(c),
        g.process(c),
        y.process(c),
        v.process(c),
        S.process(c),
        b.process(c),
        C.process(c),
        V.process(c),
        (c.isProcessing = !1),
        o && l && ((u = !1), i(w)));
    },
    L = () => {
      ((o = !0), (u = !0), c.isProcessing || i(w));
    };
  return {
    schedule: Gs.reduce((H, X) => {
      const $ = h[X];
      return ((H[X] = (ut, K = !1, W = !1) => (o || L(), $.schedule(ut, K, W))), H);
    }, {}),
    cancel: (H) => {
      for (let X = 0; X < Gs.length; X++) h[Gs[X]].cancel(H);
    },
    state: c,
    steps: h,
  };
}
const {
  schedule: Ot,
  cancel: kn,
  state: ne,
  steps: jr,
} = Xp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0);
let Ks;
function oS() {
  Ks = void 0;
}
const oe = {
    now: () => (
      Ks === void 0 &&
        oe.set(ne.isProcessing || Jn.useManualTiming ? ne.timestamp : performance.now()),
      Ks
    ),
    set: (i) => {
      ((Ks = i), queueMicrotask(oS));
    },
  },
  Zp = (i) => (l) => typeof l == "string" && l.startsWith(i),
  Qp = Zp("--"),
  rS = Zp("var(--"),
  _c = (i) => (rS(i) ? cS.test(i.split("/*")[0].trim()) : !1),
  cS = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function dy(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const fa = { test: (i) => typeof i == "number", parse: parseFloat, transform: (i) => i },
  gl = { ...fa, transform: (i) => Ie(0, 1, i) },
  Xs = { ...fa, default: 1 },
  hl = (i) => Math.round(i * 1e5) / 1e5,
  Uc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fS(i) {
  return i == null;
}
const hS =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Bc = (i, l) => (o) =>
    !!(
      (typeof o == "string" && hS.test(o) && o.startsWith(i)) ||
      (l && !fS(o) && Object.prototype.hasOwnProperty.call(o, l))
    ),
  Kp = (i, l, o) => (u) => {
    if (typeof u != "string") return u;
    const [c, d, h, m] = u.match(Uc);
    return {
      [i]: parseFloat(c),
      [l]: parseFloat(d),
      [o]: parseFloat(h),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  dS = (i) => Ie(0, 255, i),
  Hr = { ...fa, transform: (i) => Math.round(dS(i)) },
  gi = {
    test: Bc("rgb", "red"),
    parse: Kp("red", "green", "blue"),
    transform: ({ red: i, green: l, blue: o, alpha: u = 1 }) =>
      "rgba(" +
      Hr.transform(i) +
      ", " +
      Hr.transform(l) +
      ", " +
      Hr.transform(o) +
      ", " +
      hl(gl.transform(u)) +
      ")",
  };
function mS(i) {
  let l = "",
    o = "",
    u = "",
    c = "";
  return (
    i.length > 5
      ? ((l = i.substring(1, 3)),
        (o = i.substring(3, 5)),
        (u = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((l = i.substring(1, 2)),
        (o = i.substring(2, 3)),
        (u = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (l += l),
        (o += o),
        (u += u),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(o, 16),
      blue: parseInt(u, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const tc = { test: Bc("#"), parse: mS, transform: gi.transform },
  Al = (i) => ({
    test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${i}`,
  }),
  Sn = Al("deg"),
  $e = Al("%"),
  J = Al("px"),
  yS = Al("vh"),
  pS = Al("vw"),
  my = { ...$e, parse: (i) => $e.parse(i) / 100, transform: (i) => $e.transform(i * 100) },
  sa = {
    test: Bc("hsl", "hue"),
    parse: Kp("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: l, lightness: o, alpha: u = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      $e.transform(hl(l)) +
      ", " +
      $e.transform(hl(o)) +
      ", " +
      hl(gl.transform(u)) +
      ")",
  },
  Kt = {
    test: (i) => gi.test(i) || tc.test(i) || sa.test(i),
    parse: (i) => (gi.test(i) ? gi.parse(i) : sa.test(i) ? sa.parse(i) : tc.parse(i)),
    transform: (i) =>
      typeof i == "string" ? i : i.hasOwnProperty("red") ? gi.transform(i) : sa.transform(i),
    getAnimatableNone: (i) => {
      const l = Kt.parse(i);
      return ((l.alpha = 0), Kt.transform(l));
    },
  },
  gS =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function vS(i) {
  var l, o;
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (((l = i.match(Uc)) == null ? void 0 : l.length) || 0) +
      (((o = i.match(gS)) == null ? void 0 : o.length) || 0) >
      0
  );
}
const Jp = "number",
  kp = "color",
  SS = "var",
  TS = "var(",
  yy = "${}",
  bS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ra(i) {
  const l = i.toString(),
    o = [],
    u = { color: [], number: [], var: [] },
    c = [];
  let d = 0;
  const m = l
    .replace(
      bS,
      (g) => (
        Kt.test(g)
          ? (u.color.push(d), c.push(kp), o.push(Kt.parse(g)))
          : g.startsWith(TS)
            ? (u.var.push(d), c.push(SS), o.push(g))
            : (u.number.push(d), c.push(Jp), o.push(parseFloat(g))),
        ++d,
        yy
      ),
    )
    .split(yy);
  return { values: o, split: m, indexes: u, types: c };
}
function AS(i) {
  return ra(i).values;
}
function Fp({ split: i, types: l }) {
  const o = i.length;
  return (u) => {
    let c = "";
    for (let d = 0; d < o; d++)
      if (((c += i[d]), u[d] !== void 0)) {
        const h = l[d];
        h === Jp ? (c += hl(u[d])) : h === kp ? (c += Kt.transform(u[d])) : (c += u[d]);
      }
    return c;
  };
}
function ES(i) {
  return Fp(ra(i));
}
const xS = (i) => (typeof i == "number" ? 0 : Kt.test(i) ? Kt.getAnimatableNone(i) : i),
  MS = (i, l) => (typeof i == "number" ? (l != null && l.trim().endsWith("/") ? i : 0) : xS(i));
function DS(i) {
  const l = ra(i);
  return Fp(l)(l.values.map((u, c) => MS(u, l.split[c])));
}
const Qe = { test: vS, parse: AS, createTransformer: ES, getAnimatableNone: DS };
function Yr(i, l, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i
  );
}
function CS({ hue: i, saturation: l, lightness: o, alpha: u }) {
  ((i /= 360), (l /= 100), (o /= 100));
  let c = 0,
    d = 0,
    h = 0;
  if (!l) c = d = h = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l,
      g = 2 * o - m;
    ((c = Yr(g, m, i + 1 / 3)), (d = Yr(g, m, i)), (h = Yr(g, m, i - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(h * 255),
    alpha: u,
  };
}
function tu(i, l) {
  return (o) => (o > 0 ? l : i);
}
const Rt = (i, l, o) => i + (l - i) * o,
  qr = (i, l, o) => {
    const u = i * i,
      c = o * (l * l - u) + u;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  zS = [tc, gi, sa],
  RS = (i) => zS.find((l) => l.test(i));
function py(i) {
  const l = RS(i);
  if (!l) return !1;
  let o = l.parse(i);
  return (l === sa && (o = CS(o)), o);
}
const gy = (i, l) => {
    const o = py(i),
      u = py(l);
    if (!o || !u) return tu(i, l);
    const c = { ...o };
    return (d) => (
      (c.red = qr(o.red, u.red, d)),
      (c.green = qr(o.green, u.green, d)),
      (c.blue = qr(o.blue, u.blue, d)),
      (c.alpha = Rt(o.alpha, u.alpha, d)),
      gi.transform(c)
    );
  },
  ec = new Set(["none", "hidden"]);
function OS(i, l) {
  return ec.has(i) ? (o) => (o <= 0 ? i : l) : (o) => (o >= 1 ? l : i);
}
function VS(i, l) {
  return (o) => Rt(i, l, o);
}
function Nc(i) {
  return typeof i == "number"
    ? VS
    : typeof i == "string"
      ? _c(i)
        ? tu
        : Kt.test(i)
          ? gy
          : BS
      : Array.isArray(i)
        ? Wp
        : typeof i == "object"
          ? Kt.test(i)
            ? gy
            : _S
          : tu;
}
function Wp(i, l) {
  const o = [...i],
    u = o.length,
    c = i.map((d, h) => Nc(d)(d, l[h]));
  return (d) => {
    for (let h = 0; h < u; h++) o[h] = c[h](d);
    return o;
  };
}
function _S(i, l) {
  const o = { ...i, ...l },
    u = {};
  for (const c in o) i[c] !== void 0 && l[c] !== void 0 && (u[c] = Nc(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in u) o[d] = u[d](c);
    return o;
  };
}
function US(i, l) {
  const o = [],
    u = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c],
      h = i.indexes[d][u[d]],
      m = i.values[h] ?? 0;
    ((o[c] = m), u[d]++);
  }
  return o;
}
const BS = (i, l) => {
  const o = Qe.createTransformer(l),
    u = ra(i),
    c = ra(l);
  return u.indexes.var.length === c.indexes.var.length &&
    u.indexes.color.length === c.indexes.color.length &&
    u.indexes.number.length >= c.indexes.number.length
    ? (ec.has(i) && !c.values.length) || (ec.has(l) && !u.values.length)
      ? OS(i, l)
      : Tl(Wp(US(u, c), c.values), o)
    : tu(i, l);
};
function Pp(i, l, o) {
  return typeof i == "number" && typeof l == "number" && typeof o == "number"
    ? Rt(i, l, o)
    : Nc(i)(i, l);
}
const NS = (i) => {
    const l = ({ timestamp: o }) => i(o);
    return {
      start: (o = !0) => Ot.update(l, o),
      stop: () => kn(l),
      now: () => (ne.isProcessing ? ne.timestamp : oe.now()),
    };
  },
  $p = (i, l, o = 10) => {
    let u = "";
    const c = Math.max(Math.round(l / o), 2);
    for (let d = 0; d < c; d++) u += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${u.substring(0, u.length - 2)})`;
  },
  eu = 2e4;
function wc(i) {
  let l = 0;
  const o = 50;
  let u = i.next(l);
  for (; !u.done && l < eu;) ((l += o), (u = i.next(l)));
  return l >= eu ? 1 / 0 : l;
}
function wS(i, l = 100, o) {
  const u = o({ ...i, keyframes: [0, l] }),
    c = Math.min(wc(u), eu);
  return { type: "keyframes", ease: (d) => u.next(c * d).value / l, duration: je(c) };
}
const wt = {
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
function nc(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const LS = 12;
function jS(i, l, o) {
  let u = o;
  for (let c = 1; c < LS; c++) u = u - i(u) / l(u);
  return u;
}
const Gr = 0.001;
function HS({
  duration: i = wt.duration,
  bounce: l = wt.bounce,
  velocity: o = wt.velocity,
  mass: u = wt.mass,
}) {
  let c,
    d,
    h = 1 - l;
  ((h = Ie(wt.minDamping, wt.maxDamping, h)),
    (i = Ie(wt.minDuration, wt.maxDuration, je(i))),
    h < 1
      ? ((c = (y) => {
          const v = y * h,
            S = v * i,
            b = v - o,
            C = nc(y, h),
            V = Math.exp(-S);
          return Gr - (b / C) * V;
        }),
        (d = (y) => {
          const S = y * h * i,
            b = S * o + o,
            C = Math.pow(h, 2) * Math.pow(y, 2) * i,
            V = Math.exp(-S),
            w = nc(Math.pow(y, 2), h);
          return ((-c(y) + Gr > 0 ? -1 : 1) * ((b - C) * V)) / w;
        }))
      : ((c = (y) => {
          const v = Math.exp(-y * i),
            S = (y - o) * i + 1;
          return -Gr + v * S;
        }),
        (d = (y) => {
          const v = Math.exp(-y * i),
            S = (o - y) * (i * i);
          return v * S;
        })));
  const m = 5 / i,
    g = jS(c, d, m);
  if (((i = Ce(i)), isNaN(g))) return { stiffness: wt.stiffness, damping: wt.damping, duration: i };
  {
    const y = Math.pow(g, 2) * u;
    return { stiffness: y, damping: h * 2 * Math.sqrt(u * y), duration: i };
  }
}
const YS = ["duration", "bounce"],
  qS = ["stiffness", "damping", "mass"];
function vy(i, l) {
  return l.some((o) => i[o] !== void 0);
}
function GS(i) {
  let l = {
    velocity: wt.velocity,
    stiffness: wt.stiffness,
    damping: wt.damping,
    mass: wt.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!vy(i, qS) && vy(i, YS))
    if (((l.velocity = 0), i.visualDuration)) {
      const o = i.visualDuration,
        u = (2 * Math.PI) / (o * 1.2),
        c = u * u,
        d = 2 * Ie(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: wt.mass, stiffness: c, damping: d };
    } else {
      const o = HS({ ...i, velocity: 0 });
      ((l = { ...l, ...o, mass: wt.mass }), (l.isResolvedFromDuration = !0));
    }
  return l;
}
function nu(i = wt.visualDuration, l = wt.bounce) {
  const o = typeof i != "object" ? { visualDuration: i, keyframes: [0, 1], bounce: l } : i;
  let { restSpeed: u, restDelta: c } = o;
  const d = o.keyframes[0],
    h = o.keyframes[o.keyframes.length - 1],
    m = { done: !1, value: d },
    {
      stiffness: g,
      damping: y,
      mass: v,
      duration: S,
      velocity: b,
      isResolvedFromDuration: C,
    } = GS({ ...o, velocity: -je(o.velocity || 0) }),
    V = b || 0,
    w = y / (2 * Math.sqrt(g * v)),
    L = h - d,
    j = je(Math.sqrt(g / v)),
    Y = Math.abs(L) < 5;
  (u || (u = Y ? wt.restSpeed.granular : wt.restSpeed.default),
    c || (c = Y ? wt.restDelta.granular : wt.restDelta.default));
  let H, X, $, ut, K, W;
  if (w < 1)
    (($ = nc(j, w)),
      (ut = (V + w * j * L) / $),
      (H = (et) => {
        const vt = Math.exp(-w * j * et);
        return h - vt * (ut * Math.sin($ * et) + L * Math.cos($ * et));
      }),
      (K = w * j * ut + L * $),
      (W = w * j * L - ut * $),
      (X = (et) => Math.exp(-w * j * et) * (K * Math.sin($ * et) + W * Math.cos($ * et))));
  else if (w === 1) {
    H = (vt) => h - Math.exp(-j * vt) * (L + (V + j * L) * vt);
    const et = V + j * L;
    X = (vt) => Math.exp(-j * vt) * (j * et * vt - V);
  } else {
    const et = j * Math.sqrt(w * w - 1);
    H = (qt) => {
      const Lt = Math.exp(-w * j * qt),
        O = Math.min(et * qt, 300);
      return h - (Lt * ((V + w * j * L) * Math.sinh(O) + et * L * Math.cosh(O))) / et;
    };
    const vt = (V + w * j * L) / et,
      bt = w * j * vt - L * et,
      le = w * j * L - vt * et;
    X = (qt) => {
      const Lt = Math.exp(-w * j * qt),
        O = Math.min(et * qt, 300);
      return Lt * (bt * Math.sinh(O) + le * Math.cosh(O));
    };
  }
  const xt = {
    calculatedDuration: (C && S) || null,
    velocity: (et) => Ce(X(et)),
    next: (et) => {
      if (!C && w < 1) {
        const bt = Math.exp(-w * j * et),
          le = Math.sin($ * et),
          qt = Math.cos($ * et),
          Lt = h - bt * (ut * le + L * qt),
          O = Ce(bt * (K * le + W * qt));
        return (
          (m.done = Math.abs(O) <= u && Math.abs(h - Lt) <= c),
          (m.value = m.done ? h : Lt),
          m
        );
      }
      const vt = H(et);
      if (C) m.done = et >= S;
      else {
        const bt = Ce(X(et));
        m.done = Math.abs(bt) <= u && Math.abs(h - vt) <= c;
      }
      return ((m.value = m.done ? h : vt), m);
    },
    toString: () => {
      const et = Math.min(wc(xt), eu),
        vt = $p((bt) => xt.next(et * bt).value, et, 30);
      return et + "ms " + vt;
    },
    toTransition: () => {},
  };
  return xt;
}
nu.applyToOptions = (i) => {
  const l = wS(i, 100, nu);
  return ((i.ease = l.ease), (i.duration = Ce(l.duration)), (i.type = "keyframes"), i);
};
const XS = 5;
function Ip(i, l, o) {
  const u = Math.max(l - XS, 0);
  return _p(o - i(u), l - u);
}
function ic({
  keyframes: i,
  velocity: l = 0,
  power: o = 0.8,
  timeConstant: u = 325,
  bounceDamping: c = 10,
  bounceStiffness: d = 500,
  modifyTarget: h,
  min: m,
  max: g,
  restDelta: y = 0.5,
  restSpeed: v,
}) {
  const S = i[0],
    b = { done: !1, value: S },
    C = (W) => (m !== void 0 && W < m) || (g !== void 0 && W > g),
    V = (W) => (m === void 0 ? g : g === void 0 || Math.abs(m - W) < Math.abs(g - W) ? m : g);
  let w = o * l;
  const L = S + w,
    j = h === void 0 ? L : h(L);
  j !== L && (w = j - S);
  const Y = (W) => -w * Math.exp(-W / u),
    H = (W) => j + Y(W),
    X = (W) => {
      const xt = Y(W),
        et = H(W);
      ((b.done = Math.abs(xt) <= y), (b.value = b.done ? j : et));
    };
  let $, ut;
  const K = (W) => {
    C(b.value) &&
      (($ = W),
      (ut = nu({
        keyframes: [b.value, V(b.value)],
        velocity: Ip(H, W, b.value),
        damping: c,
        stiffness: d,
        restDelta: y,
        restSpeed: v,
      })));
  };
  return (
    K(0),
    {
      calculatedDuration: null,
      next: (W) => {
        let xt = !1;
        return (
          !ut && $ === void 0 && ((xt = !0), X(W), K(W)),
          $ !== void 0 && W >= $ ? ut.next(W - $) : (!xt && X(W), b)
        );
      },
    }
  );
}
function ZS(i, l, o) {
  const u = [],
    c = o || Jn.mix || Pp,
    d = i.length - 1;
  for (let h = 0; h < d; h++) {
    let m = c(i[h], i[h + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[h] || He : l;
      m = Tl(g, m);
    }
    u.push(m);
  }
  return u;
}
function QS(i, l, { clamp: o = !0, ease: u, mixer: c } = {}) {
  const d = i.length;
  if ((zc(d === l.length), d === 1)) return () => l[0];
  if (d === 2 && l[0] === l[1]) return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[d - 1] && ((i = [...i].reverse()), (l = [...l].reverse()));
  const m = ZS(l, u, c),
    g = m.length,
    y = (v) => {
      if (h && v < i[0]) return l[0];
      let S = 0;
      if (g > 1) for (; S < i.length - 2 && !(v < i[S + 1]); S++);
      const b = pl(i[S], i[S + 1], v);
      return m[S](b);
    };
  return o ? (v) => y(Ie(i[0], i[d - 1], v)) : y;
}
function KS(i, l) {
  const o = i[i.length - 1];
  for (let u = 1; u <= l; u++) {
    const c = pl(0, l, u);
    i.push(Rt(o, 1, c));
  }
}
function JS(i) {
  const l = [0];
  return (KS(l, i.length - 1), l);
}
function kS(i, l) {
  return i.map((o) => o * l);
}
function FS(i, l) {
  return i.map(() => l || qp).splice(0, i.length - 1);
}
function dl({ duration: i = 300, keyframes: l, times: o, ease: u = "easeInOut" }) {
  const c = iS(u) ? u.map(hy) : hy(u),
    d = { done: !1, value: l[0] },
    h = kS(o && o.length === l.length ? o : JS(l), i),
    m = QS(h, l, { ease: Array.isArray(c) ? c : FS(l, c) });
  return { calculatedDuration: i, next: (g) => ((d.value = m(g)), (d.done = g >= i), d) };
}
const WS = (i) => i !== null;
function ru(i, { repeat: l, repeatType: o = "loop" }, u, c = 1) {
  const d = i.filter(WS),
    m = c < 0 || (l && o !== "loop" && l % 2 === 1) ? 0 : d.length - 1;
  return !m || u === void 0 ? d[m] : u;
}
const PS = { decay: ic, inertia: ic, tween: dl, keyframes: dl, spring: nu };
function tg(i) {
  typeof i.type == "string" && (i.type = PS[i.type]);
}
class Lc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const $S = (i) => i / 100;
class iu extends Lc {
  constructor(l) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var u, c;
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== oe.now() && this.tick(oe.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(), (c = (u = this.options).onStop) == null || c.call(u)));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: l } = this;
    tg(l);
    const { type: o = dl, repeat: u = 0, repeatDelay: c = 0, repeatType: d, velocity: h = 0 } = l;
    let { keyframes: m } = l;
    const g = o || dl;
    g !== dl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Tl($S, Pp(m[0], m[1]))), (m = [0, 100]));
    const y = g({ ...l, keyframes: m });
    (d === "mirror" &&
      (this.mirroredGenerator = g({ ...l, keyframes: [...m].reverse(), velocity: -h })),
      y.calculatedDuration === null && (y.calculatedDuration = wc(y)));
    const { calculatedDuration: v } = y;
    ((this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (u + 1) - c),
      (this.generator = y));
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = o);
  }
  tick(l, o = !1) {
    const {
      generator: u,
      totalDuration: c,
      mixKeyframes: d,
      mirroredGenerator: h,
      resolvedDuration: m,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return u.next(0);
    const {
      delay: y = 0,
      keyframes: v,
      repeat: S,
      repeatType: b,
      repeatDelay: C,
      type: V,
      onUpdate: w,
      finalKeyframe: L,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      o ? (this.currentTime = l) : this.updateTime(l));
    const j = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1),
      Y = this.playbackSpeed >= 0 ? j < 0 : j > c;
    ((this.currentTime = Math.max(j, 0)),
      this.state === "finished" && this.holdTime === null && (this.currentTime = c));
    let H = this.currentTime,
      X = u;
    if (S) {
      const W = Math.min(this.currentTime, c) / m;
      let xt = Math.floor(W),
        et = W % 1;
      (!et && W >= 1 && (et = 1),
        et === 1 && xt--,
        (xt = Math.min(xt, S + 1)),
        !!(xt % 2) &&
          (b === "reverse" ? ((et = 1 - et), C && (et -= C / m)) : b === "mirror" && (X = h)),
        (H = Ie(0, 1, et) * m));
    }
    let $;
    (Y ? ((this.delayState.value = v[0]), ($ = this.delayState)) : ($ = X.next(H)),
      d && !Y && ($.value = d($.value)));
    let { done: ut } = $;
    !Y &&
      g !== null &&
      (ut = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const K =
      this.holdTime === null && (this.state === "finished" || (this.state === "running" && ut));
    return (
      K && V !== ic && ($.value = ru(v, this.options, L, this.speed)),
      w && w($.value),
      K && this.finish(),
      $
    );
  }
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return je(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + je(l);
  }
  get time() {
    return je(this.currentTime);
  }
  set time(l) {
    ((l = Ce(l)),
      (this.currentTime = l),
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = l), this.tick(l)));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const o = this.generator.next(l).value;
    return Ip((u) => this.generator.next(u).value, l, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    (o && this.driver && this.updateTime(oe.now()),
      (this.playbackSpeed = l),
      o && this.driver && (this.time = je(this.currentTime)));
  }
  play() {
    var c, d;
    if (this.isStopped) return;
    const { driver: l = NS, startTime: o } = this.options;
    (this.driver || (this.driver = l((h) => this.tick(h))),
      (d = (c = this.options).onPlay) == null || d.call(c));
    const u = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = u))
      : this.holdTime !== null
        ? (this.startTime = u - this.holdTime)
        : this.startTime || (this.startTime = o ?? u),
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
    var l, o;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (o = (l = this.options).onComplete) == null || o.call(l));
  }
  cancel() {
    var l, o;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (o = (l = this.options).onCancel) == null || o.call(l));
  }
  teardown() {
    ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return ((this.startTime = 0), this.tick(l, !0));
  }
  attachTimeline(l) {
    var o;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
      (o = this.driver) == null || o.stop(),
      l.observe(this)
    );
  }
}
function IS(i) {
  for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1]);
}
const vi = (i) => (i * 180) / Math.PI,
  ac = (i) => {
    const l = vi(Math.atan2(i[1], i[0]));
    return lc(l);
  },
  tT = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: ac,
    rotateZ: ac,
    skewX: (i) => vi(Math.atan(i[1])),
    skewY: (i) => vi(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  lc = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  Sy = ac,
  Ty = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  by = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  eT = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ty,
    scaleY: by,
    scale: (i) => (Ty(i) + by(i)) / 2,
    rotateX: (i) => lc(vi(Math.atan2(i[6], i[5]))),
    rotateY: (i) => lc(vi(Math.atan2(-i[2], i[0]))),
    rotateZ: Sy,
    rotate: Sy,
    skewX: (i) => vi(Math.atan(i[4])),
    skewY: (i) => vi(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function sc(i) {
  return i.includes("scale") ? 1 : 0;
}
function uc(i, l) {
  if (!i || i === "none") return sc(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let u, c;
  if (o) ((u = eT), (c = o));
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((u = tT), (c = m));
  }
  if (!c) return sc(l);
  const d = u[l],
    h = c[1].split(",").map(iT);
  return typeof d == "function" ? d(h) : h[d];
}
const nT = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return uc(o, l);
};
function iT(i) {
  return parseFloat(i.trim());
}
const ha = [
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
  da = new Set([...ha, "pathRotation"]),
  Ay = (i) => i === fa || i === J,
  aT = new Set(["x", "y", "z"]),
  lT = ha.filter((i) => !aT.has(i));
function sT(i) {
  const l = [];
  return (
    lT.forEach((o) => {
      const u = i.getValue(o);
      u !== void 0 && (l.push([o, u.get()]), u.set(o.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Kn = {
  width: ({ x: i }, { paddingLeft: l = "0", paddingRight: o = "0", boxSizing: u }) => {
    const c = i.max - i.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  height: ({ y: i }, { paddingTop: l = "0", paddingBottom: o = "0", boxSizing: u }) => {
    const c = i.max - i.min;
    return u === "border-box" ? c : c - parseFloat(l) - parseFloat(o);
  },
  top: (i, { top: l }) => parseFloat(l),
  left: (i, { left: l }) => parseFloat(l),
  bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min),
  right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min),
  x: (i, { transform: l }) => uc(l, "x"),
  y: (i, { transform: l }) => uc(l, "y"),
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const Si = new Set();
let oc = !1,
  rc = !1,
  cc = !1;
function eg() {
  if (rc) {
    const i = Array.from(Si).filter((u) => u.needsMeasurement),
      l = new Set(i.map((u) => u.element)),
      o = new Map();
    (l.forEach((u) => {
      const c = sT(u);
      c.length && (o.set(u, c), u.render());
    }),
      i.forEach((u) => u.measureInitialState()),
      l.forEach((u) => {
        u.render();
        const c = o.get(u);
        c &&
          c.forEach(([d, h]) => {
            var m;
            (m = u.getValue(d)) == null || m.set(h);
          });
      }),
      i.forEach((u) => u.measureEndState()),
      i.forEach((u) => {
        u.suspendedScrollY !== void 0 && window.scrollTo(0, u.suspendedScrollY);
      }));
  }
  ((rc = !1), (oc = !1), Si.forEach((i) => i.complete(cc)), Si.clear());
}
function ng() {
  Si.forEach((i) => {
    (i.readKeyframes(), i.needsMeasurement && (rc = !0));
  });
}
function uT() {
  ((cc = !0), ng(), eg(), (cc = !1));
}
class jc {
  constructor(l, o, u, c, d, h = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = o),
      (this.name = u),
      (this.motionValue = c),
      (this.element = d),
      (this.isAsync = h));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Si.add(this), oc || ((oc = !0), Ot.read(ng), Ot.resolveKeyframes(eg)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: u, motionValue: c } = this;
    if (l[0] === null) {
      const d = c == null ? void 0 : c.get(),
        h = l[l.length - 1];
      if (d !== void 0) l[0] = d;
      else if (u && o) {
        const m = u.readValue(o, h);
        m != null && (l[0] = m);
      }
      (l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]));
    }
    IS(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      Si.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Si.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const oT = (i) => i.startsWith("--");
function ig(i, l, o) {
  oT(l) ? i.style.setProperty(l, o) : (i.style[l] = o);
}
const rT = {};
function ag(i, l) {
  const o = Vp(i);
  return () => rT[l] ?? o();
}
const cT = ag(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  lg = ag(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  fl = ([i, l, o, u]) => `cubic-bezier(${i}, ${l}, ${o}, ${u})`,
  Ey = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fl([0, 0.65, 0.55, 1]),
    circOut: fl([0.55, 0, 1, 0.45]),
    backIn: fl([0.31, 0.01, 0.66, -0.59]),
    backOut: fl([0.33, 1.53, 0.69, 0.99]),
  };
function sg(i, l) {
  if (i)
    return typeof i == "function"
      ? lg()
        ? $p(i, l)
        : "ease-out"
      : Gp(i)
        ? fl(i)
        : Array.isArray(i)
          ? i.map((o) => sg(o, l) || Ey.easeOut)
          : Ey[i];
}
function fT(
  i,
  l,
  o,
  {
    delay: u = 0,
    duration: c = 300,
    repeat: d = 0,
    repeatType: h = "loop",
    ease: m = "easeOut",
    times: g,
  } = {},
  y = void 0,
) {
  const v = { [l]: o };
  g && (v.offset = g);
  const S = sg(m, c);
  Array.isArray(S) && (v.easing = S);
  const b = {
    delay: u,
    duration: c,
    easing: Array.isArray(S) ? "linear" : S,
    fill: "both",
    iterations: d + 1,
    direction: h === "reverse" ? "alternate" : "normal",
  };
  return (y && (b.pseudoElement = y), i.animate(v, b));
}
function ug(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function hT({ type: i, ...l }) {
  return ug(i) && lg()
    ? i.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class og extends Lc {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: o,
      name: u,
      keyframes: c,
      pseudoElement: d,
      allowFlatten: h = !1,
      finalKeyframe: m,
      onComplete: g,
    } = l;
    ((this.isPseudoElement = !!d),
      (this.allowFlatten = h),
      (this.options = l),
      zc(typeof l.type != "string"));
    const y = hT(l);
    ((this.animation = fT(o, u, c, y, d)),
      y.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !d)) {
          const v = ru(c, this.options, m, this.speed);
          (this.updateMotionValue && this.updateMotionValue(v),
            ig(o, u, v),
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
    var l, o;
    (o = (l = this.animation).finish) == null || o.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var o, u, c;
    const l = (o = this.options) == null ? void 0 : o.element;
    !this.isPseudoElement &&
      l != null &&
      l.isConnected &&
      ((c = (u = this.animation).commitStyles) == null || c.call(u));
  }
  get duration() {
    var o, u;
    const l =
      ((u = (o = this.animation.effect) == null ? void 0 : o.getComputedTiming) == null
        ? void 0
        : u.call(o).duration) || 0;
    return je(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + je(l);
  }
  get time() {
    return je(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Ce(l)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    (l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: o, rangeEnd: u, observe: c }) {
    var d;
    return (
      this.allowFlatten &&
        ((d = this.animation.effect) == null || d.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && cT()
        ? ((this.animation.timeline = l),
          o && (this.animation.rangeStart = o),
          u && (this.animation.rangeEnd = u),
          He)
        : c(this)
    );
  }
}
const rg = { anticipate: jp, backInOut: Lp, circInOut: Yp };
function dT(i) {
  return i in rg;
}
function mT(i) {
  typeof i.ease == "string" && dT(i.ease) && (i.ease = rg[i.ease]);
}
const Xr = 10;
class yT extends og {
  constructor(l) {
    (mT(l),
      tg(l),
      super(l),
      l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime),
      (this.options = l));
  }
  updateMotionValue(l) {
    const { motionValue: o, onUpdate: u, onComplete: c, element: d, ...h } = this.options;
    if (!o) return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const m = new iu({ ...h, autoplay: !1 }),
      g = Math.max(Xr, oe.now() - this.startTime),
      y = Ie(0, Xr, g - Xr),
      v = m.sample(g).value,
      { name: S } = this.options;
    (d && S && ig(d, S, v), o.setWithVelocity(m.sample(Math.max(0, g - y)).value, v, y), m.stop());
  }
}
const xy = (i, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" && (Qe.test(i) || i === "0") && !i.startsWith("url("))
      );
function pT(i) {
  const l = i[0];
  if (i.length === 1) return !0;
  for (let o = 0; o < i.length; o++) if (i[o] !== l) return !0;
}
function gT(i, l, o, u) {
  const c = i[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const d = i[i.length - 1],
    h = xy(c, l),
    m = xy(d, l);
  return !h || !m ? !1 : pT(i) || ((o === "spring" || ug(o)) && u);
}
function fc(i) {
  ((i.duration = 0), (i.type = "keyframes"));
}
const cg = new Set(["opacity", "clipPath", "filter", "transform"]),
  vT = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ST(i) {
  for (let l = 0; l < i.length; l++) if (typeof i[l] == "string" && vT.test(i[l])) return !0;
  return !1;
}
const TT = new Set([
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
  bT = Vp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function AT(i) {
  var S;
  const {
    motionValue: l,
    name: o,
    repeatDelay: u,
    repeatType: c,
    damping: d,
    type: h,
    keyframes: m,
  } = i;
  if (!(((S = l == null ? void 0 : l.owner) == null ? void 0 : S.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: y, transformTemplate: v } = l.owner.getProps();
  return (
    bT() &&
    o &&
    (cg.has(o) || (TT.has(o) && ST(m))) &&
    (o !== "transform" || !v) &&
    !y &&
    !u &&
    c !== "mirror" &&
    d !== 0 &&
    h !== "inertia"
  );
}
const ET = 40;
class xT extends Lc {
  constructor({
    autoplay: l = !0,
    delay: o = 0,
    type: u = "keyframes",
    repeat: c = 0,
    repeatDelay: d = 0,
    repeatType: h = "loop",
    keyframes: m,
    name: g,
    motionValue: y,
    element: v,
    ...S
  }) {
    var V;
    (super(),
      (this.stop = () => {
        var w, L;
        (this._animation &&
          (this._animation.stop(), (w = this.stopTimeline) == null || w.call(this)),
          (L = this.keyframeResolver) == null || L.cancel());
      }),
      (this.createdAt = oe.now()));
    const b = {
        autoplay: l,
        delay: o,
        type: u,
        repeat: c,
        repeatDelay: d,
        repeatType: h,
        name: g,
        motionValue: y,
        element: v,
        ...S,
      },
      C = (v == null ? void 0 : v.KeyframeResolver) || jc;
    ((this.keyframeResolver = new C(
      m,
      (w, L, j) => this.onKeyframesResolved(w, L, b, !j),
      g,
      y,
      v,
    )),
      (V = this.keyframeResolver) == null || V.scheduleResolve());
  }
  onKeyframesResolved(l, o, u, c) {
    var j, Y;
    this.keyframeResolver = void 0;
    const { name: d, type: h, velocity: m, delay: g, isHandoff: y, onUpdate: v } = u;
    this.resolvedAt = oe.now();
    let S = !0;
    gT(l, d, h, m) ||
      ((S = !1),
      (Jn.instantAnimations || !g) && (v == null || v(ru(l, u, o))),
      (l[0] = l[l.length - 1]),
      fc(u),
      (u.repeat = 0));
    const C = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > ET
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...u,
        keyframes: l,
      },
      V = S && !y && AT(C),
      w = (Y = (j = C.motionValue) == null ? void 0 : j.owner) == null ? void 0 : Y.current;
    let L;
    if (V)
      try {
        L = new yT({ ...C, element: w });
      } catch {
        L = new iu(C);
      }
    else L = new iu(C);
    (L.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(He),
      this.pendingTimeline &&
        ((this.stopTimeline = L.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = L));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation || ((l = this.keyframeResolver) == null || l.resume(), uT()),
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
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
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
    var l;
    (this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel());
  }
}
function fg(i, l, o, u = 0, c = 1) {
  const d = Array.from(i)
      .sort((y, v) => y.sortNodePosition(v))
      .indexOf(l),
    h = i.size,
    m = (h - 1) * u;
  return typeof o == "function" ? o(d, h) : c === 1 ? d * u : m - d * u;
}
const My = 30,
  MT = (i) => !isNaN(parseFloat(i));
class DT {
  constructor(l, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (u) => {
        var d;
        const c = oe.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(u),
          this.current !== this.prev &&
            ((d = this.events.change) == null || d.notify(this.current), this.dependents))
        )
          for (const h of this.dependents) h.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = o.owner));
  }
  setCurrent(l) {
    ((this.current = l),
      (this.updatedAt = oe.now()),
      this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = MT(this.current)));
  }
  setPrevFrameValue(l = this.current) {
    ((this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    this.events[l] || (this.events[l] = new Rc());
    const u = this.events[l].add(o);
    return l === "change"
      ? () => {
          (u(),
            Ot.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : u;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, o) {
    ((this.passiveEffect = l), (this.stopPassiveEffect = o));
  }
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, u) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - u));
  }
  jump(l, o = !0) {
    (this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(l));
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = oe.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > My)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, My);
    return _p(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = l(o)),
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
    var l, o;
    ((l = this.dependents) == null || l.clear(),
      (o = this.events.destroy) == null || o.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ca(i, l) {
  return new DT(i, l);
}
function hg(i, l) {
  if (i != null && i.inherit && l) {
    const { inherit: o, ...u } = i;
    return { ...l, ...u };
  }
  return i;
}
function Hc(i, l) {
  const o = (i == null ? void 0 : i[l]) ?? (i == null ? void 0 : i.default) ?? i;
  return o !== i ? hg(o, i) : o;
}
const CT = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  zT = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  RT = { type: "keyframes", duration: 0.8 },
  OT = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  VT = (i, { keyframes: l }) =>
    l.length > 2 ? RT : da.has(i) ? (i.startsWith("scale") ? zT(l[1]) : CT) : OT,
  _T = new Set([
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
function UT(i) {
  for (const l in i) if (!_T.has(l)) return !0;
  return !1;
}
const Yc =
    (i, l, o, u = {}, c, d) =>
    (h) => {
      const m = Hc(u, i) || {},
        g = m.delay || u.delay || 0;
      let { elapsed: y = 0 } = u;
      y = y - Ce(g);
      const v = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...m,
        delay: -y,
        onUpdate: (b) => {
          (l.set(b), m.onUpdate && m.onUpdate(b));
        },
        onComplete: () => {
          (h(), m.onComplete && m.onComplete());
        },
        name: i,
        motionValue: l,
        element: d ? void 0 : c,
      };
      (UT(m) || Object.assign(v, VT(i, v)),
        v.duration && (v.duration = Ce(v.duration)),
        v.repeatDelay && (v.repeatDelay = Ce(v.repeatDelay)),
        v.from !== void 0 && (v.keyframes[0] = v.from));
      let S = !1;
      if (
        ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
          (fc(v), v.delay === 0 && (S = !0)),
        (Jn.instantAnimations ||
          Jn.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          m.skipAnimations) &&
          ((S = !0), fc(v), (v.delay = 0)),
        (v.allowFlatten = !m.type && !m.ease),
        S && !d && l.get() !== void 0)
      ) {
        const b = ru(v.keyframes, m);
        if (b !== void 0) {
          Ot.update(() => {
            (v.onUpdate(b), v.onComplete());
          });
          return;
        }
      }
      return m.isSync ? new iu(v) : new xT(v);
    },
  BT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function NT(i) {
  const l = BT.exec(i);
  if (!l) return [,];
  const [, o, u, c] = l;
  return [`--${o ?? u}`, c];
}
function dg(i, l, o = 1) {
  const [u, c] = NT(i);
  if (!u) return;
  const d = window.getComputedStyle(l).getPropertyValue(u);
  if (d) {
    const h = d.trim();
    return zp(h) ? parseFloat(h) : h;
  }
  return _c(c) ? dg(c, l, o + 1) : c;
}
function Dy(i) {
  const l = [{}, {}];
  return (
    i == null ||
      i.values.forEach((o, u) => {
        ((l[0][u] = o.get()), (l[1][u] = o.getVelocity()));
      }),
    l
  );
}
function qc(i, l, o, u) {
  if (typeof l == "function") {
    const [c, d] = Dy(u);
    l = l(o !== void 0 ? o : i.custom, c, d);
  }
  if ((typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function")) {
    const [c, d] = Dy(u);
    l = l(o !== void 0 ? o : i.custom, c, d);
  }
  return l;
}
function Ti(i, l, o) {
  const u = i.getProps();
  return qc(u, l, o !== void 0 ? o : u.custom, i);
}
const mg = new Set(["width", "height", "top", "left", "right", "bottom", ...ha]),
  hc = (i) => Array.isArray(i);
function wT(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, ca(o));
}
function LT(i) {
  return hc(i) ? i[i.length - 1] || 0 : i;
}
function jT(i, l) {
  const o = Ti(i, l);
  let { transitionEnd: u = {}, transition: c = {}, ...d } = o || {};
  d = { ...d, ...u };
  for (const h in d) {
    const m = LT(d[h]);
    wT(i, h, m);
  }
}
const ie = (i) => !!(i && i.getVelocity);
function HT(i) {
  return !!(ie(i) && i.add);
}
function dc(i, l) {
  const o = i.getValue("willChange");
  if (HT(o)) return o.add(l);
  if (!o && Jn.WillChange) {
    const u = new Jn.WillChange("auto");
    (i.addValue("willChange", u), u.add(l));
  }
}
function Gc(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const YT = "framerAppearId",
  yg = "data-" + Gc(YT);
function pg(i) {
  return i.props[yg];
}
function qT({ protectedKeys: i, needsAnimating: l }, o) {
  const u = i.hasOwnProperty(o) && l[o] !== !0;
  return ((l[o] = !1), u);
}
function gg(i, l, { delay: o = 0, transitionOverride: u, type: c } = {}) {
  let { transition: d, transitionEnd: h, ...m } = l;
  const g = i.getDefaultTransition();
  d = d ? hg(d, g) : g;
  const y = d == null ? void 0 : d.reduceMotion,
    v = d == null ? void 0 : d.skipAnimations;
  u && (d = u);
  const S = [],
    b = c && i.animationState && i.animationState.getState()[c],
    C = d == null ? void 0 : d.path;
  C && C.animateVisualElement(i, m, d, o, S);
  for (const V in m) {
    const w = i.getValue(V, i.latestValues[V] ?? null),
      L = m[V];
    if (L === void 0 || (b && qT(b, V))) continue;
    const j = { delay: o, ...Hc(d || {}, V) };
    v && (j.skipAnimations = !0);
    const Y = w.get();
    if (Y !== void 0 && !w.isAnimating() && !Array.isArray(L) && L === Y && !j.velocity) {
      Ot.update(() => w.set(L));
      continue;
    }
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const ut = pg(i);
      if (ut) {
        const K = window.MotionHandoffAnimation(ut, V, Ot);
        K !== null && ((j.startTime = K), (H = !0));
      }
    }
    dc(i, V);
    const X = y ?? i.shouldReduceMotion;
    w.start(Yc(V, w, L, X && mg.has(V) ? { type: !1 } : j, i, H));
    const $ = w.animation;
    $ && S.push($);
  }
  if (h) {
    const V = () =>
      Ot.update(() => {
        h && jT(i, h);
      });
    S.length ? Promise.all(S).then(V) : V();
  }
  return S;
}
function mc(i, l, o = {}) {
  var g;
  const u = Ti(
    i,
    l,
    o.type === "exit" ? ((g = i.presenceContext) == null ? void 0 : g.custom) : void 0,
  );
  let { transition: c = i.getDefaultTransition() || {} } = u || {};
  o.transitionOverride && (c = o.transitionOverride);
  const d = u ? () => Promise.all(gg(i, u, o)) : () => Promise.resolve(),
    h =
      i.variantChildren && i.variantChildren.size
        ? (y = 0) => {
            const { delayChildren: v = 0, staggerChildren: S, staggerDirection: b } = c;
            return GT(i, l, y, v, S, b, o);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [y, v] = m === "beforeChildren" ? [d, h] : [h, d];
    return y().then(() => v());
  } else return Promise.all([d(), h(o.delay)]);
}
function GT(i, l, o = 0, u = 0, c = 0, d = 1, h) {
  const m = [];
  for (const g of i.variantChildren)
    (g.notify("AnimationStart", l),
      m.push(
        mc(g, l, {
          ...h,
          delay: o + (typeof u == "function" ? 0 : u) + fg(i.variantChildren, g, u, c, d),
        }).then(() => g.notify("AnimationComplete", l)),
      ));
  return Promise.all(m);
}
function XT(i, l, o = {}) {
  i.notify("AnimationStart", l);
  let u;
  if (Array.isArray(l)) {
    const c = l.map((d) => mc(i, d, o));
    u = Promise.all(c);
  } else if (typeof l == "string") u = mc(i, l, o);
  else {
    const c = typeof l == "function" ? Ti(i, l, o.custom) : l;
    u = Promise.all(gg(i, c, o));
  }
  return u.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const ZT = { test: (i) => i === "auto", parse: (i) => i },
  vg = (i) => (l) => l.test(i),
  Sg = [fa, J, $e, Sn, pS, yS, ZT],
  Cy = (i) => Sg.find(vg(i));
function QT(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Op(i) : !0;
}
const KT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function JT(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [u] = o.match(Uc) || [];
  if (!u) return i;
  const c = o.replace(u, "");
  let d = KT.has(l) ? 1 : 0;
  return (u !== o && (d *= 100), l + "(" + d + c + ")");
}
const kT = /\b([a-z-]*)\(.*?\)/gu,
  yc = {
    ...Qe,
    getAnimatableNone: (i) => {
      const l = i.match(kT);
      return l ? l.map(JT).join(" ") : i;
    },
  },
  pc = {
    ...Qe,
    getAnimatableNone: (i) => {
      const l = Qe.parse(i);
      return Qe.createTransformer(i)(
        l.map((u) => (typeof u == "number" ? 0 : typeof u == "object" ? { ...u, alpha: 1 } : u)),
      );
    },
  },
  zy = { ...fa, transform: Math.round },
  FT = {
    rotate: Sn,
    pathRotation: Sn,
    rotateX: Sn,
    rotateY: Sn,
    rotateZ: Sn,
    scale: Xs,
    scaleX: Xs,
    scaleY: Xs,
    scaleZ: Xs,
    skew: Sn,
    skewX: Sn,
    skewY: Sn,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: gl,
    originX: my,
    originY: my,
    originZ: J,
  },
  au = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    inset: J,
    insetBlock: J,
    insetBlockStart: J,
    insetBlockEnd: J,
    insetInline: J,
    insetInlineStart: J,
    insetInlineEnd: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    paddingBlock: J,
    paddingBlockStart: J,
    paddingBlockEnd: J,
    paddingInline: J,
    paddingInlineStart: J,
    paddingInlineEnd: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    marginBlock: J,
    marginBlockStart: J,
    marginBlockEnd: J,
    marginInline: J,
    marginInlineStart: J,
    marginInlineEnd: J,
    fontSize: J,
    backgroundPositionX: J,
    backgroundPositionY: J,
    ...FT,
    zIndex: zy,
    fillOpacity: gl,
    strokeOpacity: gl,
    numOctaves: zy,
  },
  WT = {
    ...au,
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
    filter: yc,
    WebkitFilter: yc,
    mask: pc,
    WebkitMask: pc,
  },
  Tg = (i) => WT[i],
  PT = new Set([yc, pc]);
function bg(i, l) {
  let o = Tg(i);
  return (PT.has(o) || (o = Qe), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0);
}
const $T = new Set(["auto", "none", "0"]);
function IT(i, l, o) {
  let u = 0,
    c;
  for (; u < i.length && !c;) {
    const d = i[u];
    (typeof d == "string" && !$T.has(d) && ra(d).values.length && (c = i[u]), u++);
  }
  if (c && o) for (const d of l) i[d] = bg(o, c);
}
class tb extends jc {
  constructor(l, o, u, c, d) {
    super(l, o, u, c, d, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: u } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let S = l[v];
      if (typeof S == "string" && ((S = S.trim()), _c(S))) {
        const b = dg(S, o.current);
        (b !== void 0 && (l[v] = b), v === l.length - 1 && (this.finalKeyframe = S));
      }
    }
    if ((this.resolveNoneKeyframes(), !mg.has(u) || l.length !== 2)) return;
    const [c, d] = l,
      h = Cy(c),
      m = Cy(d),
      g = dy(c),
      y = dy(d);
    if (g !== y && Kn[u]) {
      this.needsMeasurement = !0;
      return;
    }
    if (h !== m)
      if (Ay(h) && Ay(m))
        for (let v = 0; v < l.length; v++) {
          const S = l[v];
          typeof S == "string" && (l[v] = parseFloat(S));
        }
      else Kn[u] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this,
      u = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || QT(l[c])) && u.push(c);
    u.length && IT(l, u, o);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: u } = this;
    if (!l || !l.current) return;
    (u === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Kn[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      (o[0] = this.measuredOrigin));
    const c = o[o.length - 1];
    c !== void 0 && l.getValue(u, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: o, unresolvedKeyframes: u } = this;
    if (!l || !l.current) return;
    const c = l.getValue(o);
    c && c.jump(this.measuredOrigin, !1);
    const d = u.length - 1,
      h = u[d];
    ((u[d] = Kn[o](l.measureViewportBox(), window.getComputedStyle(l.current))),
      h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([g, y]) => {
          l.getValue(g).set(y);
        }),
      this.resolveNoneKeyframes());
  }
}
function Ag(i, l, o) {
  if (i == null) return [];
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    let u = document;
    const c = (o == null ? void 0 : o[i]) ?? u.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((u) => u != null);
}
const gc = (i, l) => (l && typeof i == "number" ? l.transform(i) : i);
function eb(i) {
  return Rp(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: Xc } = Xp(queueMicrotask, !1),
  Ze = { x: !1, y: !1 };
function Eg() {
  return Ze.x || Ze.y;
}
function nb(i) {
  return i === "x" || i === "y"
    ? Ze[i]
      ? null
      : ((Ze[i] = !0),
        () => {
          Ze[i] = !1;
        })
    : Ze.x || Ze.y
      ? null
      : ((Ze.x = Ze.y = !0),
        () => {
          Ze.x = Ze.y = !1;
        });
}
function xg(i, l) {
  const o = Ag(i),
    u = new AbortController(),
    c = { passive: !0, ...l, signal: u.signal };
  return [o, c, () => u.abort()];
}
function ib(i) {
  return !(i.pointerType === "touch" || Eg());
}
function ab(i, l, o = {}) {
  const [u, c, d] = xg(i, o);
  return (
    u.forEach((h) => {
      let m = !1,
        g = !1,
        y;
      const v = () => {
          h.removeEventListener("pointerleave", V);
        },
        S = (L) => {
          (y && (y(L), (y = void 0)), v());
        },
        b = (L) => {
          ((m = !1),
            window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", b),
            g && ((g = !1), S(L)));
        },
        C = () => {
          ((m = !0),
            window.addEventListener("pointerup", b, c),
            window.addEventListener("pointercancel", b, c));
        },
        V = (L) => {
          if (L.pointerType !== "touch") {
            if (m) {
              g = !0;
              return;
            }
            S(L);
          }
        },
        w = (L) => {
          if (!ib(L)) return;
          g = !1;
          const j = l(h, L);
          typeof j == "function" && ((y = j), h.addEventListener("pointerleave", V, c));
        };
      (h.addEventListener("pointerenter", w, c), h.addEventListener("pointerdown", C, c));
    }),
    d
  );
}
const Mg = (i, l) => (l ? (i === l ? !0 : Mg(i, l.parentElement)) : !1),
  Zc = (i) =>
    i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1,
  lb = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function sb(i) {
  return lb.has(i.tagName) || i.isContentEditable === !0;
}
const ub = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function ob(i) {
  return ub.has(i.tagName) || i.isContentEditable === !0;
}
const Js = new WeakSet();
function Ry(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Zr(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const rb = (i, l) => {
  const o = i.currentTarget;
  if (!o) return;
  const u = Ry(() => {
    if (Js.has(o)) return;
    Zr(o, "down");
    const c = Ry(() => {
        Zr(o, "up");
      }),
      d = () => Zr(o, "cancel");
    (o.addEventListener("keyup", c, l), o.addEventListener("blur", d, l));
  });
  (o.addEventListener("keydown", u, l),
    o.addEventListener("blur", () => o.removeEventListener("keydown", u), l));
};
function Oy(i) {
  return Zc(i) && !Eg();
}
const Vy = new WeakSet();
function cb(i, l, o = {}) {
  const [u, c, d] = xg(i, o),
    h = (m) => {
      const g = m.currentTarget;
      if (!Oy(m) || Vy.has(m)) return;
      (Js.add(g), o.stopPropagation && Vy.add(m));
      const y = l(g, m),
        v = (C, V) => {
          (window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", b),
            Js.has(g) && Js.delete(g),
            Oy(C) && typeof y == "function" && y(C, { success: V }));
        },
        S = (C) => {
          v(C, g === window || g === document || o.useGlobalTarget || Mg(g, C.target));
        },
        b = (C) => {
          v(C, !1);
        };
      (window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", b, c));
    };
  return (
    u.forEach((m) => {
      ((o.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c),
        eb(m) &&
          (m.addEventListener("focus", (y) => rb(y, c)),
          !sb(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
    }),
    d
  );
}
function Qc(i) {
  return Rp(i) && "ownerSVGElement" in i;
}
const ks = new WeakMap();
let Qn;
const Dg = (i, l, o) => (u, c) =>
    c && c[0] ? c[0][i + "Size"] : Qc(u) && "getBBox" in u ? u.getBBox()[l] : u[o],
  fb = Dg("inline", "width", "offsetWidth"),
  hb = Dg("block", "height", "offsetHeight");
function db({ target: i, borderBoxSize: l }) {
  var o;
  (o = ks.get(i)) == null ||
    o.forEach((u) => {
      u(i, {
        get width() {
          return fb(i, l);
        },
        get height() {
          return hb(i, l);
        },
      });
    });
}
function mb(i) {
  i.forEach(db);
}
function yb() {
  typeof ResizeObserver > "u" || (Qn = new ResizeObserver(mb));
}
function pb(i, l) {
  Qn || yb();
  const o = Ag(i);
  return (
    o.forEach((u) => {
      let c = ks.get(u);
      (c || ((c = new Set()), ks.set(u, c)), c.add(l), Qn == null || Qn.observe(u));
    }),
    () => {
      o.forEach((u) => {
        const c = ks.get(u);
        (c == null || c.delete(l), (c != null && c.size) || Qn == null || Qn.unobserve(u));
      });
    }
  );
}
const Fs = new Set();
let ua;
function gb() {
  ((ua = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Fs.forEach((l) => l(i));
  }),
    window.addEventListener("resize", ua));
}
function vb(i) {
  return (
    Fs.add(i),
    ua || gb(),
    () => {
      (Fs.delete(i),
        !Fs.size &&
          typeof ua == "function" &&
          (window.removeEventListener("resize", ua), (ua = void 0)));
    }
  );
}
function _y(i, l) {
  return typeof i == "function" ? vb(i) : pb(i, l);
}
function Sb(i) {
  return Qc(i) && i.tagName === "svg";
}
const Tb = [...Sg, Kt, Qe],
  bb = (i) => Tb.find(vg(i)),
  Uy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  oa = () => ({ x: Uy(), y: Uy() }),
  By = () => ({ min: 0, max: 0 }),
  kt = () => ({ x: By(), y: By() }),
  Ab = new WeakMap();
function cu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function vl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Kc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
  Jc = ["initial", ...Kc];
function fu(i) {
  return cu(i.animate) || Jc.some((l) => vl(i[l]));
}
function Cg(i) {
  return !!(fu(i) || i.variants);
}
function Eb(i, l, o) {
  for (const u in l) {
    const c = l[u],
      d = o[u];
    if (ie(c)) i.addValue(u, c);
    else if (ie(d)) i.addValue(u, ca(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(u)) {
        const h = i.getValue(u);
        h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c);
      } else {
        const h = i.getStaticValue(u);
        i.addValue(u, ca(h !== void 0 ? h : c, { owner: i }));
      }
  }
  for (const u in o) l[u] === void 0 && i.removeValue(u);
  return l;
}
const vc = { current: null },
  zg = { current: !1 },
  xb = typeof window < "u";
function Mb() {
  if (((zg.current = !0), !!xb))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (vc.current = i.matches);
      (i.addEventListener("change", l), l());
    } else vc.current = !1;
}
const Ny = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let lu = {};
function Rg(i) {
  lu = i;
}
function Db() {
  return lu;
}
class Cb {
  scrapeMotionValuesFromProps(l, o, u) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: o,
      presenceContext: u,
      reducedMotionConfig: c,
      skipAnimations: d,
      blockInitialAnimation: h,
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
      (this.KeyframeResolver = jc),
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
        const C = oe.now();
        this.renderScheduledAt < C &&
          ((this.renderScheduledAt = C), Ot.render(this.render, !1, !0));
      }));
    const { latestValues: y, renderState: v } = m;
    ((this.latestValues = y),
      (this.baseTarget = { ...y }),
      (this.initialValues = o.initial ? { ...y } : {}),
      (this.renderState = v),
      (this.parent = l),
      (this.props = o),
      (this.presenceContext = u),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = d),
      (this.options = g),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = fu(o)),
      (this.isVariantNode = Cg(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current)));
    const { willChange: S, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const C in b) {
      const V = b[C];
      y[C] !== void 0 && ie(V) && V.set(y[C]);
    }
  }
  mount(l) {
    var o, u;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((o = this.values.get(c)) == null || o.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = l),
      Ab.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, d) => this.bindToMotionValue(d, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (zg.current || Mb(), (this.shouldReduceMotion = vc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (u = this.parent) == null || u.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var l;
    (this.projection && this.projection.unmount(),
      kn(this.notifyUpdate),
      kn(this.render),
      this.valueSubscriptions.forEach((o) => o()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (l = this.parent) == null || l.removeChild(this));
    for (const o in this.events) this.events[o].clear();
    for (const o in this.features) {
      const u = this.features[o];
      u && (u.unmount(), (u.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    (this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l));
  }
  removeChild(l) {
    (this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l));
  }
  bindToMotionValue(l, o) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      o.accelerate && cg.has(l) && this.current instanceof HTMLElement)
    ) {
      const { factory: h, keyframes: m, times: g, ease: y, duration: v } = o.accelerate,
        S = new og({
          element: this.current,
          name: l,
          keyframes: m,
          times: g,
          ease: y,
          duration: Ce(v),
        }),
        b = h(S);
      this.valueSubscriptions.set(l, () => {
        (b(), S.cancel());
      });
      return;
    }
    const u = da.has(l);
    u && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (h) => {
      ((this.latestValues[l] = h),
        this.props.onUpdate && Ot.preRender(this.notifyUpdate),
        u && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let d;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (d = window.MotionCheckAppearSync(this, l, o)),
      this.valueSubscriptions.set(l, () => {
        (c(), d && d());
      }));
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in lu) {
      const o = lu[l];
      if (!o) continue;
      const { isEnabled: u, Feature: c } = o;
      if (
        (!this.features[l] && c && u(this.props) && (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), (d.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : kt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  update(l, o) {
    ((l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let u = 0; u < Ny.length; u++) {
      const c = Ny[u];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]);
      const d = "on" + c,
        h = l[d];
      h && (this.propEventSubscriptions[c] = this.on(c, h));
    }
    ((this.prevMotionValues = Eb(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
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
  addVariantChild(l) {
    const o = this.getClosestVariantNode();
    if (o)
      return (o.variantChildren && o.variantChildren.add(l), () => o.variantChildren.delete(l));
  }
  addValue(l, o) {
    const u = this.values.get(l);
    o !== u &&
      (u && this.removeValue(l),
      this.bindToMotionValue(l, o),
      this.values.set(l, o),
      (this.latestValues[l] = o.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    (o && (o(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState));
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let u = this.values.get(l);
    return (
      u === void 0 &&
        o !== void 0 &&
        ((u = ca(o === null ? void 0 : o, { owner: this })), this.addValue(l, u)),
      u
    );
  }
  readValue(l, o) {
    let u =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : (this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options));
    return (
      u != null &&
        (typeof u == "string" && (zp(u) || Op(u))
          ? (u = parseFloat(u))
          : !bb(u) && Qe.test(o) && (u = bg(l, o)),
        this.setBaseTarget(l, ie(u) ? u.get() : u)),
      ie(u) ? u.get() : u
    );
  }
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  getBaseTarget(l) {
    var d;
    const { initial: o } = this.props;
    let u;
    if (typeof o == "string" || typeof o == "object") {
      const h = qc(this.props, o, (d = this.presenceContext) == null ? void 0 : d.custom);
      h && (u = h[l]);
    }
    if (o && u !== void 0) return u;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !ie(c)
      ? c
      : this.initialValues[l] !== void 0 && u === void 0
        ? void 0
        : this.baseTarget[l];
  }
  on(l, o) {
    return (this.events[l] || (this.events[l] = new Rc()), this.events[l].add(o));
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    Xc.render(this.render);
  }
}
class Og extends Cb {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = tb));
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const u = l.style;
    return u ? u[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: u }) {
    (delete o[l], delete u[l]);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ie(l) &&
      (this.childSubscription = l.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class Fn {
  constructor(l) {
    ((this.isMounted = !1), (this.node = l));
  }
  update() {}
}
function Vg({ top: i, left: l, right: o, bottom: u }) {
  return { x: { min: l, max: o }, y: { min: i, max: u } };
}
function zb({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function Rb(i, l) {
  if (!l) return i;
  const o = l({ x: i.left, y: i.top }),
    u = l({ x: i.right, y: i.bottom });
  return { top: o.y, left: o.x, bottom: u.y, right: u.x };
}
function Qr(i) {
  return i === void 0 || i === 1;
}
function Sc({ scale: i, scaleX: l, scaleY: o }) {
  return !Qr(i) || !Qr(l) || !Qr(o);
}
function pi(i) {
  return Sc(i) || _g(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function _g(i) {
  return wy(i.x) || wy(i.y);
}
function wy(i) {
  return i && i !== "0%";
}
function su(i, l, o) {
  const u = i - o,
    c = l * u;
  return o + c;
}
function Ly(i, l, o, u, c) {
  return (c !== void 0 && (i = su(i, c, u)), su(i, o, u) + l);
}
function Tc(i, l = 0, o = 1, u, c) {
  ((i.min = Ly(i.min, l, o, u, c)), (i.max = Ly(i.max, l, o, u, c)));
}
function Ug(i, { x: l, y: o }) {
  (Tc(i.x, l.translate, l.scale, l.originPoint), Tc(i.y, o.translate, o.scale, o.originPoint));
}
const jy = 0.999999999999,
  Hy = 1.0000000000001;
function Ob(i, l, o, u = !1) {
  var m;
  const c = o.length;
  if (!c) return;
  l.x = l.y = 1;
  let d, h;
  for (let g = 0; g < c; g++) {
    ((d = o[g]), (h = d.projectionDelta));
    const { visualElement: y } = d.options;
    (y && y.props.style && y.props.style.display === "contents") ||
      (u &&
        d.options.layoutScroll &&
        d.scroll &&
        d !== d.root &&
        (Pe(i.x, -d.scroll.offset.x), Pe(i.y, -d.scroll.offset.y)),
      h && ((l.x *= h.x.scale), (l.y *= h.y.scale), Ug(i, h)),
      u &&
        pi(d.latestValues) &&
        Ws(i, d.latestValues, (m = d.layout) == null ? void 0 : m.layoutBox));
  }
  (l.x < Hy && l.x > jy && (l.x = 1), l.y < Hy && l.y > jy && (l.y = 1));
}
function Pe(i, l) {
  ((i.min += l), (i.max += l));
}
function Yy(i, l, o, u, c = 0.5) {
  const d = Rt(i.min, i.max, c);
  Tc(i, l, o, d, u);
}
function qy(i, l) {
  return typeof i == "string" ? (parseFloat(i) / 100) * (l.max - l.min) : i;
}
function Ws(i, l, o) {
  const u = o ?? i;
  (Yy(i.x, qy(l.x, u.x), l.scaleX, l.scale, l.originX),
    Yy(i.y, qy(l.y, u.y), l.scaleY, l.scale, l.originY));
}
function Bg(i, l) {
  return Vg(Rb(i.getBoundingClientRect(), l));
}
function Vb(i, l, o) {
  const u = Bg(i, o),
    { scroll: c } = l;
  return (c && (Pe(u.x, c.offset.x), Pe(u.y, c.offset.y)), u);
}
const _b = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Ub = ha.length;
function Bb(i, l, o) {
  let u = "",
    c = !0;
  for (let h = 0; h < Ub; h++) {
    const m = ha[h],
      g = i[m];
    if (g === void 0) continue;
    let y = !0;
    if (typeof g == "number") y = g === (m.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(g);
      y = m.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!y || o) {
      const v = gc(g, au[m]);
      if (!y) {
        c = !1;
        const S = _b[m] || m;
        u += `${S}(${v}) `;
      }
      o && (l[m] = v);
    }
  }
  const d = i.pathRotation;
  return (
    d && ((c = !1), (u += `rotate(${gc(d, au.pathRotation)}) `)),
    (u = u.trim()),
    o ? (u = o(l, c ? "" : u)) : c && (u = "none"),
    u
  );
}
function kc(i, l, o) {
  const { style: u, vars: c, transformOrigin: d } = i;
  let h = !1,
    m = !1;
  for (const g in l) {
    const y = l[g];
    if (da.has(g)) {
      h = !0;
      continue;
    } else if (Qp(g)) {
      c[g] = y;
      continue;
    } else {
      const v = gc(y, au[g]);
      g.startsWith("origin") ? ((m = !0), (d[g] = v)) : (u[g] = v);
    }
  }
  if (
    (l.transform ||
      (h || o ? (u.transform = Bb(l, i.transform, o)) : u.transform && (u.transform = "none")),
    m)
  ) {
    const { originX: g = "50%", originY: y = "50%", originZ: v = 0 } = d;
    u.transformOrigin = `${g} ${y} ${v}`;
  }
}
function Ng(i, { style: l, vars: o }, u, c) {
  const d = i.style;
  let h;
  for (h in l) d[h] = l[h];
  c == null || c.applyProjectionStyles(d, u);
  for (h in o) d.setProperty(h, o[h]);
}
function Gy(i, l) {
  return l.max === l.min ? 0 : (i / (l.max - l.min)) * 100;
}
const rl = {
    correct: (i, l) => {
      if (!l.target) return i;
      if (typeof i == "string")
        if (J.test(i)) i = parseFloat(i);
        else return i;
      const o = Gy(i, l.target.x),
        u = Gy(i, l.target.y);
      return `${o}% ${u}%`;
    },
  },
  Nb = {
    correct: (i, { treeScale: l, projectionDelta: o }) => {
      const u = i,
        c = Qe.parse(i);
      if (c.length > 5) return u;
      const d = Qe.createTransformer(i),
        h = typeof c[0] != "number" ? 1 : 0,
        m = o.x.scale * l.x,
        g = o.y.scale * l.y;
      ((c[0 + h] /= m), (c[1 + h] /= g));
      const y = Rt(m, g, 0.5);
      return (
        typeof c[2 + h] == "number" && (c[2 + h] /= y),
        typeof c[3 + h] == "number" && (c[3 + h] /= y),
        d(c)
      );
    },
  },
  bc = {
    borderRadius: {
      ...rl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: rl,
    borderTopRightRadius: rl,
    borderBottomLeftRadius: rl,
    borderBottomRightRadius: rl,
    boxShadow: Nb,
  };
function wg(i, { layout: l, layoutId: o }) {
  return (
    da.has(i) || i.startsWith("origin") || ((l || o !== void 0) && (!!bc[i] || i === "opacity"))
  );
}
function Fc(i, l, o) {
  var h;
  const u = i.style,
    c = l == null ? void 0 : l.style,
    d = {};
  if (!u) return d;
  for (const m in u)
    (ie(u[m]) ||
      (c && ie(c[m])) ||
      wg(m, i) ||
      ((h = o == null ? void 0 : o.getValue(m)) == null ? void 0 : h.liveStyle) !== void 0) &&
      (d[m] = u[m]);
  return d;
}
function wb(i) {
  return window.getComputedStyle(i);
}
class Lb extends Og {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Ng));
  }
  readValueFromInstance(l, o) {
    var u;
    if (da.has(o)) return (u = this.projection) != null && u.isProjecting ? sc(o) : nT(l, o);
    {
      const c = wb(l),
        d = (Qp(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return Bg(l, o);
  }
  build(l, o, u) {
    kc(l, o, u.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, u) {
    return Fc(l, o, u);
  }
}
const jb = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Hb = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Yb(i, l, o = 1, u = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? jb : Hb;
  ((i[d.offset] = `${-u}`), (i[d.array] = `${l} ${o}`));
}
const qb = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Lg(
  i,
  { attrX: l, attrY: o, attrScale: u, pathLength: c, pathSpacing: d = 1, pathOffset: h = 0, ...m },
  g,
  y,
  v,
) {
  if ((kc(i, m, y), g)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  ((i.attrs = i.style), (i.style = {}));
  const { attrs: S, style: b } = i;
  (S.transform && ((b.transform = S.transform), delete S.transform),
    (b.transform || S.transformOrigin) &&
      ((b.transformOrigin = S.transformOrigin ?? "50% 50%"), delete S.transformOrigin),
    b.transform &&
      ((b.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete S.transformBox));
  for (const C of qb) S[C] !== void 0 && ((b[C] = S[C]), delete S[C]);
  (l !== void 0 && (S.x = l),
    o !== void 0 && (S.y = o),
    u !== void 0 && (S.scale = u),
    c !== void 0 && Yb(S, c, d, h, !1));
}
const jg = new Set([
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
  Hg = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function Gb(i, l, o, u) {
  Ng(i, l, void 0, u);
  for (const c in l.attrs) i.setAttribute(jg.has(c) ? c : Gc(c), l.attrs[c]);
}
function Yg(i, l, o) {
  const u = Fc(i, l, o);
  for (const c in i)
    if (ie(i[c]) || ie(l[c])) {
      const d = ha.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      u[d] = i[c];
    }
  return u;
}
class Xb extends Og {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = kt));
  }
  getBaseTargetFromProps(l, o) {
    return l[o];
  }
  readValueFromInstance(l, o) {
    if (da.has(o)) {
      const u = Tg(o);
      return (u && u.default) || 0;
    }
    return ((o = jg.has(o) ? o : Gc(o)), l.getAttribute(o));
  }
  scrapeMotionValuesFromProps(l, o, u) {
    return Yg(l, o, u);
  }
  build(l, o, u) {
    Lg(l, o, this.isSVGTag, u.transformTemplate, u.style);
  }
  renderInstance(l, o, u, c) {
    Gb(l, o, u, c);
  }
  mount(l) {
    ((this.isSVGTag = Hg(l.tagName)), super.mount(l));
  }
}
const Zb = Jc.length;
function qg(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const o = i.parent ? qg(i.parent) || {} : {};
    return (i.props.initial !== void 0 && (o.initial = i.props.initial), o);
  }
  const l = {};
  for (let o = 0; o < Zb; o++) {
    const u = Jc[o],
      c = i.props[u];
    (vl(c) || c === !1) && (l[u] = c);
  }
  return l;
}
function Gg(i, l) {
  if (!Array.isArray(l)) return !1;
  const o = l.length;
  if (o !== i.length) return !1;
  for (let u = 0; u < o; u++) if (l[u] !== i[u]) return !1;
  return !0;
}
const Qb = [...Kc].reverse(),
  Kb = Kc.length;
function Jb(i) {
  return (l) => Promise.all(l.map(({ animation: o, options: u }) => XT(i, o, u)));
}
function kb(i) {
  let l = Jb(i),
    o = Xy(),
    u = !0,
    c = !1;
  const d = (y) => (v, S) => {
    var C;
    const b = Ti(
      i,
      S,
      y === "exit" ? ((C = i.presenceContext) == null ? void 0 : C.custom) : void 0,
    );
    if (b) {
      const { transition: V, transitionEnd: w, ...L } = b;
      v = { ...v, ...L, ...w };
    }
    return v;
  };
  function h(y) {
    l = y(i);
  }
  function m(y) {
    const { props: v } = i,
      S = qg(i.parent) || {},
      b = [],
      C = new Set();
    let V = {},
      w = 1 / 0;
    for (let j = 0; j < Kb; j++) {
      const Y = Qb[j],
        H = o[Y],
        X = v[Y] !== void 0 ? v[Y] : S[Y],
        $ = vl(X),
        ut = Y === y ? H.isActive : null;
      ut === !1 && (w = j);
      let K = X === S[Y] && X !== v[Y] && $;
      if (
        (K && (u || c) && i.manuallyAnimateOnMount && (K = !1),
        (H.protectedKeys = { ...V }),
        (!H.isActive && ut === null) || (!X && !H.prevProp) || cu(X) || typeof X == "boolean")
      )
        continue;
      if (Y === "exit" && H.isActive && ut !== !0) {
        H.prevResolvedValues && (V = { ...V, ...H.prevResolvedValues });
        continue;
      }
      const W = Fb(H.prevProp, X);
      let xt = W || (Y === y && H.isActive && !K && $) || (j > w && $),
        et = !1;
      const vt = Array.isArray(X) ? X : [X];
      let bt = vt.reduce(d(Y), {});
      ut === !1 && (bt = {});
      const { prevResolvedValues: le = {} } = H,
        qt = { ...le, ...bt },
        Lt = (Z) => {
          ((xt = !0), C.has(Z) && ((et = !0), C.delete(Z)), (H.needsAnimating[Z] = !0));
          const lt = i.getValue(Z);
          lt && (lt.liveStyle = !1);
        };
      for (const Z in qt) {
        const lt = bt[Z],
          dt = le[Z];
        if (V.hasOwnProperty(Z)) continue;
        let E = !1;
        (hc(lt) && hc(dt) ? (E = !Gg(lt, dt) || W) : (E = lt !== dt),
          E
            ? lt != null
              ? Lt(Z)
              : C.add(Z)
            : lt !== void 0 && C.has(Z)
              ? Lt(Z)
              : (H.protectedKeys[Z] = !0));
      }
      ((H.prevProp = X),
        (H.prevResolvedValues = bt),
        H.isActive && (V = { ...V, ...bt }),
        (u || c) && i.blockInitialAnimation && (xt = !1));
      const O = K && W;
      xt &&
        (!O || et) &&
        b.push(
          ...vt.map((Z) => {
            const lt = { type: Y };
            if (typeof Z == "string" && (u || c) && !O && i.manuallyAnimateOnMount && i.parent) {
              const { parent: dt } = i,
                E = Ti(dt, Z);
              if (dt.enteringChildren && E) {
                const { delayChildren: N } = E.transition || {};
                lt.delay = fg(dt.enteringChildren, i, N);
              }
            }
            return { animation: Z, options: lt };
          }),
        );
    }
    if (C.size) {
      const j = {};
      if (typeof v.initial != "boolean") {
        const Y = Ti(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        Y && Y.transition && (j.transition = Y.transition);
      }
      (C.forEach((Y) => {
        const H = i.getBaseTarget(Y),
          X = i.getValue(Y);
        (X && (X.liveStyle = !0), (j[Y] = H ?? null));
      }),
        b.push({ animation: j }));
    }
    let L = !!b.length;
    return (
      u && (v.initial === !1 || v.initial === v.animate) && !i.manuallyAnimateOnMount && (L = !1),
      (u = !1),
      (c = !1),
      L ? l(b) : Promise.resolve()
    );
  }
  function g(y, v) {
    var b;
    if (o[y].isActive === v) return Promise.resolve();
    ((b = i.variantChildren) == null ||
      b.forEach((C) => {
        var V;
        return (V = C.animationState) == null ? void 0 : V.setActive(y, v);
      }),
      (o[y].isActive = v));
    const S = m(y);
    for (const C in o) o[C].protectedKeys = {};
    return S;
  }
  return {
    animateChanges: m,
    setActive: g,
    setAnimateFunction: h,
    getState: () => o,
    reset: () => {
      ((o = Xy()), (c = !0));
    },
  };
}
function Fb(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !Gg(l, i) : !1;
}
function yi(i = !1) {
  return { isActive: i, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Xy() {
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
function Ac(i, l) {
  ((i.min = l.min), (i.max = l.max));
}
function Xe(i, l) {
  (Ac(i.x, l.x), Ac(i.y, l.y));
}
function Zy(i, l) {
  ((i.translate = l.translate),
    (i.scale = l.scale),
    (i.originPoint = l.originPoint),
    (i.origin = l.origin));
}
const Xg = 1e-4,
  Wb = 1 - Xg,
  Pb = 1 + Xg,
  Zg = 0.01,
  $b = 0 - Zg,
  Ib = 0 + Zg;
function re(i) {
  return i.max - i.min;
}
function tA(i, l, o) {
  return Math.abs(i - l) <= o;
}
function Qy(i, l, o, u = 0.5) {
  ((i.origin = u),
    (i.originPoint = Rt(l.min, l.max, i.origin)),
    (i.scale = re(o) / re(l)),
    (i.translate = Rt(o.min, o.max, i.origin) - i.originPoint),
    ((i.scale >= Wb && i.scale <= Pb) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= $b && i.translate <= Ib) || isNaN(i.translate)) && (i.translate = 0));
}
function ml(i, l, o, u) {
  (Qy(i.x, l.x, o.x, u ? u.originX : void 0), Qy(i.y, l.y, o.y, u ? u.originY : void 0));
}
function Ky(i, l, o, u = 0) {
  const c = u ? Rt(o.min, o.max, u) : o.min;
  ((i.min = c + l.min), (i.max = i.min + re(l)));
}
function eA(i, l, o, u) {
  (Ky(i.x, l.x, o.x, u == null ? void 0 : u.x), Ky(i.y, l.y, o.y, u == null ? void 0 : u.y));
}
function Jy(i, l, o, u = 0) {
  const c = u ? Rt(o.min, o.max, u) : o.min;
  ((i.min = l.min - c), (i.max = i.min + re(l)));
}
function uu(i, l, o, u) {
  (Jy(i.x, l.x, o.x, u == null ? void 0 : u.x), Jy(i.y, l.y, o.y, u == null ? void 0 : u.y));
}
function ky(i, l, o, u, c) {
  return ((i -= l), (i = su(i, 1 / o, u)), c !== void 0 && (i = su(i, 1 / c, u)), i);
}
function nA(i, l = 0, o = 1, u = 0.5, c, d = i, h = i) {
  if (
    ($e.test(l) && ((l = parseFloat(l)), (l = Rt(h.min, h.max, l / 100) - h.min)),
    typeof l != "number")
  )
    return;
  let m = Rt(d.min, d.max, u);
  (i === d && (m -= l), (i.min = ky(i.min, l, o, m, c)), (i.max = ky(i.max, l, o, m, c)));
}
function Fy(i, l, [o, u, c], d, h) {
  nA(i, l[o], l[u], l[c], l.scale, d, h);
}
const iA = ["x", "scaleX", "originX"],
  aA = ["y", "scaleY", "originY"];
function Wy(i, l, o, u) {
  (Fy(i.x, l, iA, o ? o.x : void 0, u ? u.x : void 0),
    Fy(i.y, l, aA, o ? o.y : void 0, u ? u.y : void 0));
}
function Py(i) {
  return i.translate === 0 && i.scale === 1;
}
function Qg(i) {
  return Py(i.x) && Py(i.y);
}
function $y(i, l) {
  return i.min === l.min && i.max === l.max;
}
function lA(i, l) {
  return $y(i.x, l.x) && $y(i.y, l.y);
}
function Iy(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function Kg(i, l) {
  return Iy(i.x, l.x) && Iy(i.y, l.y);
}
function tp(i) {
  return re(i.x) / re(i.y);
}
function ep(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function We(i) {
  return [i("x"), i("y")];
}
function sA(i, l, o) {
  let u = "";
  const c = i.x.translate / l.x,
    d = i.y.translate / l.y,
    h = (o == null ? void 0 : o.z) || 0;
  if (
    ((c || d || h) && (u = `translate3d(${c}px, ${d}px, ${h}px) `),
    (l.x !== 1 || l.y !== 1) && (u += `scale(${1 / l.x}, ${1 / l.y}) `),
    o)
  ) {
    const {
      transformPerspective: y,
      rotate: v,
      pathRotation: S,
      rotateX: b,
      rotateY: C,
      skewX: V,
      skewY: w,
    } = o;
    (y && (u = `perspective(${y}px) ${u}`),
      v && (u += `rotate(${v}deg) `),
      S && (u += `rotate(${S}deg) `),
      b && (u += `rotateX(${b}deg) `),
      C && (u += `rotateY(${C}deg) `),
      V && (u += `skewX(${V}deg) `),
      w && (u += `skewY(${w}deg) `));
  }
  const m = i.x.scale * l.x,
    g = i.y.scale * l.y;
  return ((m !== 1 || g !== 1) && (u += `scale(${m}, ${g})`), u || "none");
}
const Jg = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  uA = Jg.length,
  np = (i) => (typeof i == "string" ? parseFloat(i) : i),
  ip = (i) => typeof i == "number" || J.test(i);
function oA(i, l, o, u, c, d) {
  c
    ? ((i.opacity = Rt(0, o.opacity ?? 1, rA(u))), (i.opacityExit = Rt(l.opacity ?? 1, 0, cA(u))))
    : d && (i.opacity = Rt(l.opacity ?? 1, o.opacity ?? 1, u));
  for (let h = 0; h < uA; h++) {
    const m = Jg[h];
    let g = ap(l, m),
      y = ap(o, m);
    if (g === void 0 && y === void 0) continue;
    (g || (g = 0),
      y || (y = 0),
      g === 0 || y === 0 || ip(g) === ip(y)
        ? ((i[m] = Math.max(Rt(np(g), np(y), u), 0)), ($e.test(y) || $e.test(g)) && (i[m] += "%"))
        : (i[m] = y));
  }
  (l.rotate || o.rotate) && (i.rotate = Rt(l.rotate || 0, o.rotate || 0, u));
}
function ap(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const rA = kg(0, 0.5, Hp),
  cA = kg(0.5, 0.95, He);
function kg(i, l, o) {
  return (u) => (u < i ? 0 : u > l ? 1 : o(pl(i, l, u)));
}
function fA(i, l, o) {
  const u = ie(i) ? i : ca(i);
  return (u.start(Yc("", u, l, o)), u.animation);
}
function Sl(i, l, o, u = { passive: !0 }) {
  return (i.addEventListener(l, o, u), () => i.removeEventListener(l, o));
}
const hA = (i, l) => i.depth - l.depth;
class dA {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(l) {
    (Cc(this.children, l), (this.isDirty = !0));
  }
  remove(l) {
    (Is(this.children, l), (this.isDirty = !0));
  }
  forEach(l) {
    (this.isDirty && this.children.sort(hA), (this.isDirty = !1), this.children.forEach(l));
  }
}
function mA(i, l) {
  const o = oe.now(),
    u = ({ timestamp: c }) => {
      const d = c - o;
      d >= l && (kn(u), i(d - l));
    };
  return (Ot.setup(u, !0), () => kn(u));
}
function Ps(i) {
  return ie(i) ? i.get() : i;
}
class yA {
  constructor() {
    this.members = [];
  }
  add(l) {
    Cc(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const u = this.members[o];
      if (u === l || u === this.lead || u === this.prevLead) continue;
      const c = u.instance;
      (!c || c.isConnected === !1) && !u.snapshot && (Is(this.members, u), u.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if ((Is(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead)) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    var o;
    for (let u = this.members.indexOf(l) - 1; u >= 0; u--) {
      const c = this.members[u];
      if (c.isPresent !== !1 && ((o = c.instance) == null ? void 0 : o.isConnected) !== !1)
        return (this.promote(c), !0);
    }
    return !1;
  }
  promote(l, o) {
    var c;
    const u = this.lead;
    if (l !== u && ((this.prevLead = u), (this.lead = l), l.show(), u)) {
      (u.updateSnapshot(), l.scheduleRender());
      const { layoutDependency: d } = u.options,
        { layoutDependency: h } = l.options;
      ((d === void 0 || d !== h) &&
        ((l.resumeFrom = u),
        o && (u.preserveOpacity = !0),
        u.snapshot &&
          ((l.snapshot = u.snapshot),
          (l.snapshot.latestValues = u.animationValues || u.latestValues)),
        (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && u.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var o, u, c, d, h;
      ((u = (o = l.options).onExitComplete) == null || u.call(o),
        (h = (c = l.resumingFrom) == null ? void 0 : (d = c.options).onExitComplete) == null ||
          h.call(d));
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Kr = ["", "X", "Y", "Z"],
  pA = 1e3;
let gA = 0;
function Jr(i, l, o, u) {
  const { latestValues: c } = l;
  c[i] && ((o[i] = c[i]), l.setStaticValue(i, 0), u && (u[i] = 0));
}
function Fg(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: l } = i.options;
  if (!l) return;
  const o = pg(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", Ot, !(c || d));
  }
  const { parent: u } = i;
  u && !u.hasCheckedOptimisedAppear && Fg(u);
}
function Wg({
  attachResizeListener: i,
  defaultParent: l,
  measureScroll: o,
  checkIsScrollRoot: u,
  resetTransform: c,
}) {
  return class {
    constructor(h = {}, m = l == null ? void 0 : l()) {
      ((this.id = gA++),
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
            this.nodes.forEach(TA),
            this.nodes.forEach(DA),
            this.nodes.forEach(CA),
            this.nodes.forEach(bA));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = h),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0));
      for (let g = 0; g < this.path.length; g++) this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new dA());
    }
    addEventListener(h, m) {
      return (
        this.eventHandlers.has(h) || this.eventHandlers.set(h, new Rc()),
        this.eventHandlers.get(h).add(m)
      );
    }
    notifyListeners(h, ...m) {
      const g = this.eventHandlers.get(h);
      g && g.notify(...m);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h) {
      if (this.instance) return;
      ((this.isSVG = Qc(h) && !Sb(h)), (this.instance = h));
      const { layoutId: m, layout: g, visualElement: y } = this.options;
      if (
        (y && !y.current && y.mount(h),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0),
        i)
      ) {
        let v,
          S = 0;
        const b = () => (this.root.updateBlockedByResize = !1);
        (Ot.read(() => {
          S = window.innerWidth;
        }),
          i(h, () => {
            const C = window.innerWidth;
            C !== S &&
              ((S = C),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = mA(b, 250)),
              $s.hasAnimatedSinceResize &&
                (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(up)));
          }));
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          y &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({ delta: v, hasLayoutChanged: S, hasRelativeLayoutChanged: b, layout: C }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const V = this.options.transition || y.getDefaultTransition() || _A,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: L } = y.getProps(),
                j = !this.targetLayout || !Kg(this.targetLayout, C),
                Y = !S && b;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                Y ||
                (S && (j || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const H = { ...Hc(V, "layout"), onPlay: w, onComplete: L };
                ((y.shouldReduceMotion || this.options.layoutRoot) &&
                  ((H.delay = 0), (H.type = !1)),
                  this.startAnimation(H),
                  this.setAnimationOrigin(v, Y, H.path));
              } else
                (S || up(this),
                  this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
              this.targetLayout = C;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
      const h = this.getStack();
      (h && h.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        kn(this.updateProjection));
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
        ((this.isUpdating = !0), this.nodes && this.nodes.forEach(zA), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Fg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        ((S.shouldResetTransform = !0),
          (typeof S.latestValues.x == "string" || typeof S.latestValues.y == "string") &&
            (S.isLayoutDirty = !0),
          S.updateScroll("snapshot"),
          S.options.layoutRoot && S.willUpdate(!1));
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g) return;
      const y = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        h && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const g = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          g && this.nodes.forEach(EA),
          this.nodes.forEach(lp));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(sp);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(xA),
            this.nodes.forEach(MA),
            this.nodes.forEach(vA),
            this.nodes.forEach(SA))
          : this.nodes.forEach(sp),
        this.clearAllSnapshots());
      const m = oe.now();
      ((ne.delta = Ie(0, 1e3 / 60, m - ne.timestamp)),
        (ne.timestamp = m),
        (ne.isProcessing = !0),
        jr.update.process(ne),
        jr.preRender.process(ne),
        jr.render.process(ne),
        (ne.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled || ((this.updateScheduled = !0), Xc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(AA), this.sharedNodes.forEach(RA));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0), Ot.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ot.postRender(() => {
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
      const h = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = kt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === h &&
          (m = !1),
        m && this.instance)
      ) {
        const g = u(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: h,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Qg(this.projectionDelta),
        g = this.getTransformTemplate(),
        y = g ? g(this.latestValues, "") : void 0,
        v = y !== this.prevTransformTemplateValue;
      h &&
        this.instance &&
        (m || pi(this.latestValues) || v) &&
        (c(this.instance, y), (this.shouldResetTransform = !1), this.scheduleRender());
    }
    measure(h = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return (
        h && (g = this.removeTransform(g)),
        UA(g),
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
      var y;
      const { visualElement: h } = this.options;
      if (!h) return kt();
      const m = h.measureViewportBox();
      if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(BA))) {
        const { scroll: v } = this.root;
        v && (Pe(m.x, v.offset.x), Pe(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(h) {
      var g;
      const m = kt();
      if ((Xe(m, h), (g = this.scroll) != null && g.wasRoot)) return m;
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y],
          { scroll: S, options: b } = v;
        v !== this.root &&
          S &&
          b.layoutScroll &&
          (S.wasRoot && Xe(m, h), Pe(m.x, S.offset.x), Pe(m.y, S.offset.y));
      }
      return m;
    }
    applyTransform(h, m = !1, g) {
      var v, S;
      const y = g || kt();
      Xe(y, h);
      for (let b = 0; b < this.path.length; b++) {
        const C = this.path[b];
        (!m &&
          C.options.layoutScroll &&
          C.scroll &&
          C !== C.root &&
          (Pe(y.x, -C.scroll.offset.x), Pe(y.y, -C.scroll.offset.y)),
          pi(C.latestValues) &&
            Ws(y, C.latestValues, (v = C.layout) == null ? void 0 : v.layoutBox));
      }
      return (
        pi(this.latestValues) &&
          Ws(y, this.latestValues, (S = this.layout) == null ? void 0 : S.layoutBox),
        y
      );
    }
    removeTransform(h) {
      var g;
      const m = kt();
      Xe(m, h);
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        if (!pi(v.latestValues)) continue;
        let S;
        (v.instance &&
          (Sc(v.latestValues) && v.updateSnapshot(), (S = kt()), Xe(S, v.measurePageBox())),
          Wy(m, v.latestValues, (g = v.snapshot) == null ? void 0 : g.layoutBox, S));
      }
      return (pi(this.latestValues) && Wy(m, this.latestValues), m);
    }
    setTargetDelta(h) {
      ((this.targetDelta = h), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
    }
    setOptions(h) {
      this.options = {
        ...this.options,
        ...h,
        crossfade: h.crossfade !== void 0 ? h.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(h = !1) {
      var C;
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const g = !!this.resumingFrom || this !== m;
      if (!(
        h ||
        (g && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        ((C = this.parent) != null && C.isProjectionDirty) ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: v, layoutId: S } = this.options;
      if (!this.layout || !(v || S)) return;
      this.resolvedRelativeTargetAt = ne.timestamp;
      const b = this.getClosestProjectingParent();
      (b &&
        this.linkedParentVersion !== b.layoutVersion &&
        !b.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && b && b.layout
            ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox)
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target || ((this.target = kt()), (this.targetWithTransforms = kt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              eA(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Xe(this.target, this.layout.layoutBox),
                Ug(this.target, this.targetDelta))
              : Xe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            b &&
            !!b.resumingFrom == !!this.resumingFrom &&
            !b.options.layoutScroll &&
            b.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(b, this.target, b.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Sc(this.parent.latestValues) || _g(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(h, m, g) {
      ((this.relativeParent = h),
        (this.linkedParentVersion = h.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = kt()),
        (this.relativeTargetOrigin = kt()),
        uu(this.relativeTargetOrigin, m, g, this.options.layoutAnchor || void 0),
        Xe(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var V;
      const h = this.getLead(),
        m = !!this.resumingFrom || this !== h;
      let g = !0;
      if (
        ((this.isProjectionDirty || ((V = this.parent) != null && V.isProjectionDirty)) && (g = !1),
        m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1),
        this.resolvedRelativeTargetAt === ne.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: y, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(y || v))
      )
        return;
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x,
        b = this.treeScale.y;
      (Ob(this.layoutCorrected, this.treeScale, this.path, m),
        h.layout &&
          !h.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((h.target = h.layout.layoutBox), (h.targetWithTransforms = kt())));
      const { target: C } = h;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Zy(this.prevProjectionDelta.x, this.projectionDelta.x),
          Zy(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ml(this.projectionDelta, this.layoutCorrected, C, this.latestValues),
        (this.treeScale.x !== S ||
          this.treeScale.y !== b ||
          !ep(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ep(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", C)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(h = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), h)) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = oa()),
        (this.projectionDelta = oa()),
        (this.projectionDeltaWithTransform = oa()));
    }
    setAnimationOrigin(h, m = !1, g) {
      const y = this.snapshot,
        v = y ? y.latestValues : {},
        S = { ...this.latestValues },
        b = oa();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m));
      const C = kt(),
        V = y ? y.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        L = V !== w,
        j = this.getStack(),
        Y = !j || j.members.length <= 1,
        H = !!(L && !Y && this.options.crossfade === !0 && !this.path.some(VA));
      this.animationProgress = 0;
      let X;
      const $ = g == null ? void 0 : g.interpolateProjection(h);
      ((this.mixTargetDelta = (ut) => {
        const K = ut / 1e3,
          W = $ == null ? void 0 : $(K);
        (W
          ? ((b.x.translate = W.x),
            (b.x.scale = Rt(h.x.scale, 1, K)),
            (b.x.origin = h.x.origin),
            (b.x.originPoint = h.x.originPoint),
            (b.y.translate = W.y),
            (b.y.scale = Rt(h.y.scale, 1, K)),
            (b.y.origin = h.y.origin),
            (b.y.originPoint = h.y.originPoint))
          : (op(b.x, h.x, K), op(b.y, h.y, K)),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (uu(
              C,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            OA(this.relativeTarget, this.relativeTargetOrigin, C, K),
            X && lA(this.relativeTarget, X) && (this.isProjectionDirty = !1),
            X || (X = kt()),
            Xe(X, this.relativeTarget)),
          L && ((this.animationValues = S), oA(S, v, this.latestValues, K, H, Y)),
          W &&
            W.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = S),
            (this.animationValues.pathRotation = W.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = K));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(h) {
      var m, g, y;
      (this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (y = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || y.stop(),
        this.pendingAnimation && (kn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ot.update(() => {
          (($s.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ca(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = fA(this.motionValue, [0, 1e3], {
              ...h,
              velocity: 0,
              isSync: !0,
              onUpdate: (v) => {
                (this.mixTargetDelta(v), h.onUpdate && h.onUpdate(v));
              },
              onStop: () => {},
              onComplete: () => {
                (h.onComplete && h.onComplete(), this.completeAnimation());
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
      const h = this.getStack();
      (h && h.exitAnimationComplete(),
        (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(pA), this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: m, target: g, layout: y, latestValues: v } = h;
      if (!(!m || !g || !y)) {
        if (
          this !== h &&
          this.layout &&
          y &&
          Pg(this.options.animationType, this.layout.layoutBox, y.layoutBox)
        ) {
          g = this.target || kt();
          const S = re(this.layout.layoutBox.x);
          ((g.x.min = h.target.x.min), (g.x.max = g.x.min + S));
          const b = re(this.layout.layoutBox.y);
          ((g.y.min = h.target.y.min), (g.y.max = g.y.min + b));
        }
        (Xe(m, g), Ws(m, v), ml(this.projectionDeltaWithTransform, this.layoutCorrected, m, v));
      }
    }
    registerSharedNode(h, m) {
      (this.sharedNodes.has(h) || this.sharedNodes.set(h, new yA()),
        this.sharedNodes.get(h).add(m));
      const y = m.options.initialPromotionConfig;
      m.promote({
        transition: y ? y.transition : void 0,
        preserveFollowOpacity:
          y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(m) : void 0,
      });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: h } = this.options;
      return h ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: h } = this.options;
      return h ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: m, preserveFollowOpacity: g } = {}) {
      const y = this.getStack();
      (y && y.promote(this, g),
        h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m }));
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let m = !1;
      const { latestValues: g } = h;
      if (
        ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (m = !0),
        !m)
      )
        return;
      const y = {};
      g.z && Jr("z", h, y, this.animationValues);
      for (let v = 0; v < Kr.length; v++)
        (Jr(`rotate${Kr[v]}`, h, y, this.animationValues),
          Jr(`skew${Kr[v]}`, h, y, this.animationValues));
      h.render();
      for (const v in y)
        (h.setStaticValue(v, y[v]), this.animationValues && (this.animationValues[v] = y[v]));
      h.scheduleRender();
    }
    applyProjectionStyles(h, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (h.visibility = ""),
          (h.opacity = ""),
          (h.pointerEvents = Ps(m == null ? void 0 : m.pointerEvents) || ""),
          (h.transform = g ? g(this.latestValues, "") : "none"));
        return;
      }
      const y = this.getLead();
      if (!this.projectionDelta || !this.layout || !y.target) {
        (this.options.layoutId &&
          ((h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
          (h.pointerEvents = Ps(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !pi(this.latestValues) &&
            ((h.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      h.visibility = "";
      const v = y.animationValues || y.latestValues;
      this.applyTransformsToTarget();
      let S = sA(this.projectionDeltaWithTransform, this.treeScale, v);
      (g && (S = g(v, S)), (h.transform = S));
      const { x: b, y: C } = this.projectionDelta;
      ((h.transformOrigin = `${b.origin * 100}% ${C.origin * 100}% 0`),
        y.animationValues
          ? (h.opacity =
              y === this
                ? (v.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (h.opacity =
              y === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0));
      for (const V in bc) {
        if (v[V] === void 0) continue;
        const { correct: w, applyTo: L, isCSSVariable: j } = bc[V],
          Y = S === "none" ? v[V] : w(v[V], y);
        if (L) {
          const H = L.length;
          for (let X = 0; X < H; X++) h[L[X]] = Y;
        } else j ? (this.options.visualElement.renderState.vars[V] = Y) : (h[V] = Y);
      }
      this.options.layoutId &&
        (h.pointerEvents = y === this ? Ps(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((h) => {
        var m;
        return (m = h.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(lp),
        this.root.sharedNodes.clear());
    }
  };
}
function vA(i) {
  i.updateLayout();
}
function SA(i) {
  var o;
  const l = ((o = i.resumeFrom) == null ? void 0 : o.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: u, measuredBox: c } = i.layout,
      { animationType: d } = i.options,
      h = l.source !== i.layout.source;
    if (d === "size")
      We((S) => {
        const b = h ? l.measuredBox[S] : l.layoutBox[S],
          C = re(b);
        ((b.min = u[S].min), (b.max = b.min + C));
      });
    else if (d === "x" || d === "y") {
      const S = d === "x" ? "y" : "x";
      Ac(h ? l.measuredBox[S] : l.layoutBox[S], u[S]);
    } else
      Pg(d, l.layoutBox, u) &&
        We((S) => {
          const b = h ? l.measuredBox[S] : l.layoutBox[S],
            C = re(u[S]);
          ((b.max = b.min + C),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[S].max = i.relativeTarget[S].min + C)));
        });
    const m = oa();
    ml(m, u, l.layoutBox);
    const g = oa();
    h ? ml(g, i.applyTransform(c, !0), l.measuredBox) : ml(g, u, l.layoutBox);
    const y = !Qg(m);
    let v = !1;
    if (!i.resumeFrom) {
      const S = i.getClosestProjectingParent();
      if (S && !S.resumeFrom) {
        const { snapshot: b, layout: C } = S;
        if (b && C) {
          const V = i.options.layoutAnchor || void 0,
            w = kt();
          uu(w, l.layoutBox, b.layoutBox, V);
          const L = kt();
          (uu(L, u, C.layoutBox, V),
            Kg(w, L) || (v = !0),
            S.options.layoutRoot &&
              ((i.relativeTarget = L), (i.relativeTargetOrigin = w), (i.relativeParent = S)));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: u,
      snapshot: l,
      delta: g,
      layoutDelta: m,
      hasLayoutChanged: y,
      hasRelativeLayoutChanged: v,
    });
  } else if (i.isLead()) {
    const { onExitComplete: u } = i.options;
    u && u();
  }
  i.options.transition = void 0;
}
function TA(i) {
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
function bA(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function AA(i) {
  i.clearSnapshot();
}
function lp(i) {
  i.clearMeasurements();
}
function EA(i) {
  ((i.isLayoutDirty = !0), i.updateLayout());
}
function sp(i) {
  i.isLayoutDirty = !1;
}
function xA(i) {
  i.isAnimationBlocked &&
    i.layout &&
    !i.isLayoutDirty &&
    ((i.snapshot = i.layout), (i.isLayoutDirty = !0));
}
function MA(i) {
  const { visualElement: l } = i.options;
  (l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform());
}
function up(i) {
  (i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0));
}
function DA(i) {
  i.resolveTargetDelta();
}
function CA(i) {
  i.calcProjection();
}
function zA(i) {
  i.resetSkewAndRotation();
}
function RA(i) {
  i.removeLeadSnapshot();
}
function op(i, l, o) {
  ((i.translate = Rt(l.translate, 0, o)),
    (i.scale = Rt(l.scale, 1, o)),
    (i.origin = l.origin),
    (i.originPoint = l.originPoint));
}
function rp(i, l, o, u) {
  ((i.min = Rt(l.min, o.min, u)), (i.max = Rt(l.max, o.max, u)));
}
function OA(i, l, o, u) {
  (rp(i.x, l.x, o.x, u), rp(i.y, l.y, o.y, u));
}
function VA(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const _A = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  cp = (i) =>
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i),
  fp = cp("applewebkit/") && !cp("chrome/") ? Math.round : He;
function hp(i) {
  ((i.min = fp(i.min)), (i.max = fp(i.max)));
}
function UA(i) {
  (hp(i.x), hp(i.y));
}
function Pg(i, l, o) {
  return i === "position" || (i === "preserve-aspect" && !tA(tp(l), tp(o), 0.2));
}
function BA(i) {
  var l;
  return i !== i.root && ((l = i.scroll) == null ? void 0 : l.wasRoot);
}
const NA = Wg({
    attachResizeListener: (i, l) => Sl(i, "resize", l),
    measureScroll: () => {
      var i, l;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((i = document.body) == null ? void 0 : i.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((l = document.body) == null ? void 0 : l.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  kr = { current: void 0 },
  $g = Wg({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!kr.current) {
        const i = new NA({});
        (i.mount(window), i.setOptions({ layoutScroll: !0 }), (kr.current = i));
      }
      return kr.current;
    },
    resetTransform: (i, l) => {
      i.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  Ig = I.createContext({ transformPagePoint: (i) => i, isStatic: !1, reducedMotion: "never" });
function wA(i = !0) {
  const l = I.useContext(Dc);
  if (l === null) return [!0, null];
  const { isPresent: o, onExitComplete: u, register: c } = l,
    d = I.useId();
  I.useEffect(() => {
    if (i) return c(d);
  }, [i]);
  const h = I.useCallback(() => i && u && u(d), [d, u, i]);
  return !o && u ? [!1, h] : [!0];
}
const t0 = I.createContext({ strict: !1 }),
  dp = {
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
let mp = !1;
function LA() {
  if (mp) return;
  const i = {};
  for (const l in dp) i[l] = { isEnabled: (o) => dp[l].some((u) => !!o[u]) };
  (Rg(i), (mp = !0));
}
function e0() {
  return (LA(), Db());
}
function jA(i) {
  const l = e0();
  for (const o in i) l[o] = { ...l[o], ...i[o] };
  Rg(l);
}
const HA = new Set([
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
function ou(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    HA.has(i)
  );
}
let n0 = (i) => !ou(i);
function YA(i) {
  typeof i == "function" && (n0 = (l) => (l.startsWith("on") ? !ou(l) : i(l)));
}
try {
  YA(require("@emotion/is-prop-valid").default);
} catch {}
function qA(i, l, o) {
  const u = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      ie(i[c]) ||
      ((n0(c) ||
        (o === !0 && ou(c)) ||
        (!l && !ou(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (u[c] = i[c]));
  return u;
}
const hu = I.createContext({});
function GA(i, l) {
  if (fu(i)) {
    const { initial: o, animate: u } = i;
    return { initial: o === !1 || vl(o) ? o : void 0, animate: vl(u) ? u : void 0 };
  }
  return i.inherit !== !1 ? l : {};
}
function XA(i) {
  const { initial: l, animate: o } = GA(i, I.useContext(hu));
  return I.useMemo(() => ({ initial: l, animate: o }), [yp(l), yp(o)]);
}
function yp(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Wc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function i0(i, l, o) {
  for (const u in l) !ie(l[u]) && !wg(u, o) && (i[u] = l[u]);
}
function ZA({ transformTemplate: i }, l) {
  return I.useMemo(() => {
    const o = Wc();
    return (kc(o, l, i), Object.assign({}, o.vars, o.style));
  }, [l]);
}
function QA(i, l) {
  const o = i.style || {},
    u = {};
  return (i0(u, o, i), Object.assign(u, ZA(i, l)), u);
}
function KA(i, l) {
  const o = {},
    u = QA(i, l);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((o.draggable = !1),
      (u.userSelect = u.WebkitUserSelect = u.WebkitTouchCallout = "none"),
      (u.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0),
    (o.style = u),
    o
  );
}
const a0 = () => ({ ...Wc(), attrs: {} });
function JA(i, l, o, u) {
  const c = I.useMemo(() => {
    const d = a0();
    return (Lg(d, l, Hg(u), i.transformTemplate, i.style), { ...d.attrs, style: { ...d.style } });
  }, [l]);
  if (i.style) {
    const d = {};
    (i0(d, i.style, i), (c.style = { ...d, ...c.style }));
  }
  return c;
}
const kA = [
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
function Pc(i) {
  return typeof i != "string" || i.includes("-") ? !1 : !!(kA.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function FA(i, l, o, { latestValues: u }, c, d = !1, h) {
  const g = ((h ?? Pc(i)) ? JA : KA)(l, u, c, i),
    y = qA(l, typeof i == "string", d),
    v = i !== I.Fragment ? { ...y, ...g, ref: o } : {},
    { children: S } = l,
    b = I.useMemo(() => (ie(S) ? S.get() : S), [S]);
  return I.createElement(i, { ...v, children: b });
}
function WA({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, u, c) {
  return { latestValues: PA(o, u, c, i), renderState: l() };
}
function PA(i, l, o, u) {
  const c = {},
    d = u(i, {});
  for (const b in d) c[b] = Ps(d[b]);
  let { initial: h, animate: m } = i;
  const g = fu(i),
    y = Cg(i);
  l &&
    y &&
    !g &&
    i.inherit !== !1 &&
    (h === void 0 && (h = l.initial), m === void 0 && (m = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || h === !1;
  const S = v ? m : h;
  if (S && typeof S != "boolean" && !cu(S)) {
    const b = Array.isArray(S) ? S : [S];
    for (let C = 0; C < b.length; C++) {
      const V = qc(i, b[C]);
      if (V) {
        const { transitionEnd: w, transition: L, ...j } = V;
        for (const Y in j) {
          let H = j[Y];
          if (Array.isArray(H)) {
            const X = v ? H.length - 1 : 0;
            H = H[X];
          }
          H !== null && (c[Y] = H);
        }
        for (const Y in w) c[Y] = w[Y];
      }
    }
  }
  return c;
}
const l0 = (i) => (l, o) => {
    const u = I.useContext(hu),
      c = I.useContext(Dc),
      d = () => WA(i, l, u, c);
    return o ? d() : F1(d);
  },
  $A = l0({ scrapeMotionValuesFromProps: Fc, createRenderState: Wc }),
  IA = l0({ scrapeMotionValuesFromProps: Yg, createRenderState: a0 }),
  t2 = Symbol.for("motionComponentSymbol");
function e2(i, l, o) {
  const u = I.useRef(o);
  I.useInsertionEffect(() => {
    u.current = o;
  });
  const c = I.useRef(null);
  return I.useCallback(
    (d) => {
      var m;
      (d && ((m = i.onMount) == null || m.call(i, d)), l && (d ? l.mount(d) : l.unmount()));
      const h = u.current;
      if (typeof h == "function")
        if (d) {
          const g = h(d);
          typeof g == "function" && (c.current = g);
        } else c.current ? (c.current(), (c.current = null)) : h(d);
      else h && (h.current = d);
    },
    [l],
  );
}
const s0 = I.createContext({});
function la(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function n2(i, l, o, u, c, d) {
  var H, X;
  const { visualElement: h } = I.useContext(hu),
    m = I.useContext(t0),
    g = I.useContext(Dc),
    y = I.useContext(Ig),
    v = y.reducedMotion,
    S = y.skipAnimations,
    b = I.useRef(null),
    C = I.useRef(!1);
  ((u = u || m.renderer),
    !b.current &&
      u &&
      ((b.current = u(i, {
        visualState: l,
        parent: h,
        props: o,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: S,
        isSVG: d,
      })),
      C.current && b.current && (b.current.manuallyAnimateOnMount = !0)));
  const V = b.current,
    w = I.useContext(s0);
  V && !V.projection && c && (V.type === "html" || V.type === "svg") && i2(b.current, o, c, w);
  const L = I.useRef(!1);
  I.useInsertionEffect(() => {
    V && L.current && V.update(o, g);
  });
  const j = o[yg],
    Y = I.useRef(
      !!j &&
        typeof window < "u" &&
        !((H = window.MotionHandoffIsComplete) != null && H.call(window, j)) &&
        ((X = window.MotionHasOptimisedAnimation) == null ? void 0 : X.call(window, j)),
    );
  return (
    P1(() => {
      ((C.current = !0),
        V &&
          ((L.current = !0),
          (window.MotionIsMounted = !0),
          V.updateFeatures(),
          V.scheduleRenderMicrotask(),
          Y.current && V.animationState && V.animationState.animateChanges()));
    }),
    I.useEffect(() => {
      V &&
        (!Y.current && V.animationState && V.animationState.animateChanges(),
        Y.current &&
          (queueMicrotask(() => {
            var $;
            ($ = window.MotionHandoffMarkAsComplete) == null || $.call(window, j);
          }),
          (Y.current = !1)),
        (V.enteringChildren = void 0));
    }),
    V
  );
}
function i2(i, l, o, u) {
  const {
    layoutId: c,
    layout: d,
    drag: h,
    dragConstraints: m,
    layoutScroll: g,
    layoutRoot: y,
    layoutAnchor: v,
    layoutCrossfade: S,
  } = l;
  ((i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : u0(i.parent))),
    i.projection.setOptions({
      layoutId: c,
      layout: d,
      alwaysMeasureLayout: !!h || (m && la(m)),
      visualElement: i,
      animationType: typeof d == "string" ? d : "both",
      initialPromotionConfig: u,
      crossfade: S,
      layoutScroll: g,
      layoutRoot: y,
      layoutAnchor: v,
    }));
}
function u0(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : u0(i.parent);
}
function Fr(i, { forwardMotionProps: l = !1, type: o } = {}, u, c) {
  u && jA(u);
  const d = o ? o === "svg" : Pc(i),
    h = d ? IA : $A;
  function m(y, v) {
    let S;
    const b = { ...I.useContext(Ig), ...y, layoutId: a2(y) },
      { isStatic: C } = b,
      V = XA(y),
      w = h(y, C);
    if (!C && typeof window < "u") {
      l2();
      const L = s2(b);
      ((S = L.MeasureLayout), (V.visualElement = n2(i, w, b, c, L.ProjectionNode, d)));
    }
    return yt.jsxs(hu.Provider, {
      value: V,
      children: [
        S && V.visualElement ? yt.jsx(S, { visualElement: V.visualElement, ...b }) : null,
        FA(i, y, e2(w, V.visualElement, v), w, C, l, d),
      ],
    });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = I.forwardRef(m);
  return ((g[t2] = i), g);
}
function a2({ layoutId: i }) {
  const l = I.useContext(Cp).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function l2(i, l) {
  I.useContext(t0).strict;
}
function s2(i) {
  const l = e0(),
    { drag: o, layout: u } = l;
  if (!o && !u) return {};
  const c = { ...o, ...u };
  return {
    MeasureLayout:
      (o != null && o.isEnabled(i)) || (u != null && u.isEnabled(i)) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function u2(i, l) {
  if (typeof Proxy > "u") return Fr;
  const o = new Map(),
    u = (d, h) => Fr(d, h, i, l),
    c = (d, h) => u(d, h);
  return new Proxy(c, {
    get: (d, h) => (h === "create" ? u : (o.has(h) || o.set(h, Fr(h, void 0, i, l)), o.get(h))),
  });
}
const o2 = (i, l) =>
  (l.isSVG ?? Pc(i)) ? new Xb(l) : new Lb(l, { allowProjection: i !== I.Fragment });
class r2 extends Fn {
  constructor(l) {
    (super(l), l.animationState || (l.animationState = kb(l)));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    cu(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    (this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this));
  }
}
let c2 = 0;
class f2 extends Fn {
  constructor() {
    (super(...arguments), (this.id = c2++), (this.isExitComplete = !1));
  }
  update() {
    var d;
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: o } = this.node.presenceContext,
      { isPresent: u } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === u) return;
    if (l && u === !1) {
      if (this.isExitComplete) {
        const { initial: h, custom: m } = this.node.getProps();
        if (typeof h == "string" || (typeof h == "object" && h !== null && !Array.isArray(h))) {
          const g = Ti(this.node, h, m);
          if (g) {
            const { transition: y, transitionEnd: v, ...S } = g;
            for (const b in S) (d = this.node.getValue(b)) == null || d.jump(S[b]);
          }
        }
        (this.node.animationState.reset(), this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    o &&
      !l &&
      c.then(() => {
        ((this.isExitComplete = !0), o(this.id));
      });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), l && (this.unmount = l(this.id)));
  }
  unmount() {}
}
const h2 = { animation: { Feature: r2 }, exit: { Feature: f2 } };
function El(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const d2 = (i) => (l) => Zc(l) && i(l, El(l));
function yl(i, l, o, u) {
  return Sl(i, l, d2(o), u);
}
const o0 = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  pp = (i, l) => Math.abs(i - l);
function m2(i, l) {
  const o = pp(i.x, l.x),
    u = pp(i.y, l.y);
  return Math.sqrt(o ** 2 + u ** 2);
}
const gp = new Set(["auto", "scroll"]);
class r0 {
  constructor(
    l,
    o,
    {
      transformPagePoint: u,
      contextWindow: c = window,
      dragSnapToOrigin: d = !1,
      distanceThreshold: h = 3,
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
      (this.onElementScroll = (C) => {
        this.handleScroll(C.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Zs(this.lastRawMoveEventInfo, this.transformPagePoint));
        const C = Wr(this.lastMoveEventInfo, this.history),
          V = this.startEvent !== null,
          w = m2(C.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!V && !w) return;
        const { point: L } = C,
          { timestamp: j } = ne;
        this.history.push({ ...L, timestamp: j });
        const { onStart: Y, onMove: H } = this.handlers;
        (V || (Y && Y(this.lastMoveEvent, C), (this.startEvent = this.lastMoveEvent)),
          H && H(this.lastMoveEvent, C));
      }),
      (this.handlePointerMove = (C, V) => {
        ((this.lastMoveEvent = C),
          (this.lastRawMoveEventInfo = V),
          (this.lastMoveEventInfo = Zs(V, this.transformPagePoint)),
          Ot.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (C, V) => {
        this.end();
        const { onEnd: w, onSessionEnd: L, resumeAnimation: j } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && j && j(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const Y = Wr(
          C.type === "pointercancel" ? this.lastMoveEventInfo : Zs(V, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && w && w(C, Y), L && L(C, Y));
      }),
      !Zc(l))
    )
      return;
    ((this.dragSnapToOrigin = d),
      (this.handlers = o),
      (this.transformPagePoint = u),
      (this.distanceThreshold = h),
      (this.contextWindow = c || window));
    const g = El(l),
      y = Zs(g, this.transformPagePoint),
      { point: v } = y,
      { timestamp: S } = ne;
    this.history = [{ ...v, timestamp: S }];
    const { onSessionStart: b } = o;
    (b && b(l, Wr(y, this.history)),
      (this.removeListeners = Tl(
        yl(this.contextWindow, "pointermove", this.handlePointerMove),
        yl(this.contextWindow, "pointerup", this.handlePointerUp),
        yl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      m && this.startScrollTracking(m));
  }
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o;) {
      const u = getComputedStyle(o);
      ((gp.has(u.overflowX) || gp.has(u.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o) return;
    const u = l === window,
      c = u ? { x: window.scrollX, y: window.scrollY } : { x: l.scrollLeft, y: l.scrollTop },
      d = { x: c.x - o.x, y: c.y - o.y };
    (d.x === 0 && d.y === 0) ||
      (u
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += d.x), (this.lastMoveEventInfo.point.y += d.y))
        : this.history.length > 0 && ((this.history[0].x -= d.x), (this.history[0].y -= d.y)),
      this.scrollPositions.set(l, c),
      Ot.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      kn(this.updatePoint));
  }
}
function Zs(i, l) {
  return l ? { point: l(i.point) } : i;
}
function vp(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Wr({ point: i }, l) {
  return { point: i, delta: vp(i, c0(l)), offset: vp(i, y2(l)), velocity: p2(l, 0.1) };
}
function y2(i) {
  return i[0];
}
function c0(i) {
  return i[i.length - 1];
}
function p2(i, l) {
  if (i.length < 2) return { x: 0, y: 0 };
  let o = i.length - 1,
    u = null;
  const c = c0(i);
  for (; o >= 0 && ((u = i[o]), !(c.timestamp - u.timestamp > Ce(l)));) o--;
  if (!u) return { x: 0, y: 0 };
  u === i[0] && i.length > 2 && c.timestamp - u.timestamp > Ce(l) * 2 && (u = i[1]);
  const d = je(c.timestamp - u.timestamp);
  if (d === 0) return { x: 0, y: 0 };
  const h = { x: (c.x - u.x) / d, y: (c.y - u.y) / d };
  return (h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h);
}
function g2(i, { min: l, max: o }, u) {
  return (
    l !== void 0 && i < l
      ? (i = u ? Rt(l, i, u.min) : Math.max(i, l))
      : o !== void 0 && i > o && (i = u ? Rt(o, i, u.max) : Math.min(i, o)),
    i
  );
}
function Sp(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0,
  };
}
function v2(i, { top: l, left: o, bottom: u, right: c }) {
  return { x: Sp(i.x, o, c), y: Sp(i.y, l, u) };
}
function Tp(i, l) {
  let o = l.min - i.min,
    u = l.max - i.max;
  return (l.max - l.min < i.max - i.min && ([o, u] = [u, o]), { min: o, max: u });
}
function S2(i, l) {
  return { x: Tp(i.x, l.x), y: Tp(i.y, l.y) };
}
function T2(i, l) {
  let o = 0.5;
  const u = re(i),
    c = re(l);
  return (
    c > u ? (o = pl(l.min, l.max - u, i.min)) : u > c && (o = pl(i.min, i.max - c, l.min)),
    Ie(0, 1, o)
  );
}
function b2(i, l) {
  const o = {};
  return (
    l.min !== void 0 && (o.min = l.min - i.min),
    l.max !== void 0 && (o.max = l.max - i.min),
    o
  );
}
const Ec = 0.35;
function A2(i = Ec) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = Ec),
    { x: bp(i, "left", "right"), y: bp(i, "top", "bottom") }
  );
}
function bp(i, l, o) {
  return { min: Ap(i, l), max: Ap(i, o) };
}
function Ap(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const E2 = new WeakMap();
class x2 {
  constructor(l) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = kt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l));
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: u } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const d = (S) => {
        (o && this.snapToCursor(El(S).point), this.stopAnimation());
      },
      h = (S, b) => {
        const { drag: C, dragPropagation: V, onDragStart: w } = this.getProps();
        if (
          C &&
          !V &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = nb(C)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = S),
          (this.latestPanInfo = b),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          We((j) => {
            let Y = this.getAxisMotionValue(j).get() || 0;
            if ($e.test(Y)) {
              const { projection: H } = this.visualElement;
              if (H && H.layout) {
                const X = H.layout.layoutBox[j];
                X && (Y = re(X) * (parseFloat(Y) / 100));
              }
            }
            this.originPoint[j] = Y;
          }),
          w && Ot.update(() => w(S, b), !1, !0),
          dc(this.visualElement, "transform"));
        const { animationState: L } = this.visualElement;
        L && L.setActive("whileDrag", !0);
      },
      m = (S, b) => {
        ((this.latestPointerEvent = S), (this.latestPanInfo = b));
        const {
          dragPropagation: C,
          dragDirectionLock: V,
          onDirectionLock: w,
          onDrag: L,
        } = this.getProps();
        if (!C && !this.openDragLock) return;
        const { offset: j } = b;
        if (V && this.currentDirection === null) {
          ((this.currentDirection = D2(j)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", b.point, j),
          this.updateAxis("y", b.point, j),
          this.visualElement.render(),
          L && Ot.update(() => L(S, b), !1, !0));
      },
      g = (S, b) => {
        ((this.latestPointerEvent = S),
          (this.latestPanInfo = b),
          this.stop(S, b),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      y = () => {
        const { dragSnapToOrigin: S } = this.getProps();
        (S || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new r0(
      l,
      { onSessionStart: d, onStart: h, onMove: m, onSessionEnd: g, resumeAnimation: y },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: u,
        contextWindow: o0(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(l, o) {
    const u = l || this.latestPointerEvent,
      c = o || this.latestPanInfo,
      d = this.isDragging;
    if ((this.cancel(), !d || !c || !u)) return;
    const { velocity: h } = c;
    this.startAnimation(h);
    const { onDragEnd: m } = this.getProps();
    m && Ot.postRender(() => m(u, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    (l && (l.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: u } = this.getProps();
    (!u && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(l, o, u) {
    const { drag: c } = this.getProps();
    if (!u || !Qs(l, c, this.currentDirection)) return;
    const d = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + u[l];
    (this.constraints && this.constraints[l] && (h = g2(h, this.constraints[l], this.elastic[l])),
      d.set(h));
  }
  resolveConstraints() {
    var d;
    const { dragConstraints: l, dragElastic: o } = this.getProps(),
      u =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (d = this.visualElement.projection) == null
            ? void 0
            : d.layout,
      c = this.constraints;
    (l && la(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && u
        ? (this.constraints = v2(u.layoutBox, l))
        : (this.constraints = !1),
      (this.elastic = A2(o)),
      c !== this.constraints &&
        !la(l) &&
        u &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        We((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = b2(u.layoutBox[h], this.constraints[h]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !la(l)) return !1;
    const u = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const d = Vb(u, c.root, this.visualElement.getTransformPagePoint());
    let h = S2(c.layout.layoutBox, d);
    if (o) {
      const m = o(zb(h));
      ((this.hasMutatedConstraints = !!m), m && (h = Vg(m)));
    }
    return h;
  }
  startAnimation(l) {
    const {
        drag: o,
        dragMomentum: u,
        dragElastic: c,
        dragTransition: d,
        dragSnapToOrigin: h,
        onDragTransitionEnd: m,
      } = this.getProps(),
      g = this.constraints || {},
      y = We((v) => {
        if (!Qs(v, o, this.currentDirection)) return;
        let S = (g && g[v]) || {};
        (h === !0 || h === v) && (S = { min: 0, max: 0 });
        const b = c ? 200 : 1e6,
          C = c ? 40 : 1e7,
          V = {
            type: "inertia",
            velocity: u ? l[v] : 0,
            bounceStiffness: b,
            bounceDamping: C,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...d,
            ...S,
          };
        return this.startAxisValueAnimation(v, V);
      });
    return Promise.all(y).then(m);
  }
  startAxisValueAnimation(l, o) {
    const u = this.getAxisMotionValue(l);
    return (dc(this.visualElement, l), u.start(Yc(l, u, 0, o, this.visualElement, !1)));
  }
  stopAnimation() {
    We((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`,
      c = this.visualElement.getProps()[o];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  snapToCursor(l) {
    We((o) => {
      const { drag: u } = this.getProps();
      if (!Qs(o, u, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        d = this.getAxisMotionValue(o);
      if (c && c.layout) {
        const { min: h, max: m } = c.layout.layoutBox[o],
          g = d.get() || 0;
        d.set(l[o] - Rt(h, m, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: o } = this.getProps(),
      { projection: u } = this.visualElement;
    if (!la(o) || !u || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    We((h) => {
      const m = this.getAxisMotionValue(h);
      if (m && this.constraints !== !1) {
        const g = m.get();
        c[h] = T2({ min: g, max: g }, this.constraints[h]);
      }
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = d ? d({}, "") : "none"),
      u.root && u.root.updateScroll(),
      u.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      We((h) => {
        if (!Qs(h, l, null)) return;
        const m = this.getAxisMotionValue(h),
          { min: g, max: y } = this.constraints[h];
        m.set(Rt(g, y, c[h]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    E2.set(this.visualElement, this);
    const l = this.visualElement.current,
      o = yl(l, "pointerdown", (y) => {
        const { drag: v, dragListener: S = !0 } = this.getProps(),
          b = y.target,
          C = b !== l && ob(b);
        v && S && !C && this.start(y);
      });
    let u;
    const c = () => {
        const { dragConstraints: y } = this.getProps();
        la(y) &&
          y.current &&
          ((this.constraints = this.resolveRefConstraints()),
          u || (u = M2(l, y.current, () => this.scalePositionWithinConstraints())));
      },
      { projection: d } = this.visualElement,
      h = d.addEventListener("measure", c);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Ot.read(c));
    const m = Sl(window, "resize", () => this.scalePositionWithinConstraints()),
      g = d.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: v }) => {
        this.isDragging &&
          v &&
          (We((S) => {
            const b = this.getAxisMotionValue(S);
            b && ((this.originPoint[S] += y[S].translate), b.set(b.get() + y[S].translate));
          }),
          this.visualElement.render());
      });
    return () => {
      (m(), o(), h(), g && g(), u && u());
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: u = !1,
        dragPropagation: c = !1,
        dragConstraints: d = !1,
        dragElastic: h = Ec,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: u,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: h,
      dragMomentum: m,
    };
  }
}
function Ep(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function M2(i, l, o) {
  const u = _y(i, Ep(o)),
    c = _y(l, Ep(o));
  return () => {
    (u(), c());
  };
}
function Qs(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function D2(i, l = 10) {
  let o = null;
  return (Math.abs(i.y) > l ? (o = "y") : Math.abs(i.x) > l && (o = "x"), o);
}
class C2 extends Fn {
  constructor(l) {
    (super(l),
      (this.removeGroupControls = He),
      (this.removeListeners = He),
      (this.controls = new x2(l)));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    (l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || He));
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    l !== o &&
      (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Pr = (i) => (l, o) => {
  i && Ot.update(() => i(l, o), !1, !0);
};
class z2 extends Fn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = He));
  }
  onPointerDown(l) {
    this.session = new r0(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: o0(this.node),
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: u, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Pr(l),
      onStart: Pr(o),
      onMove: Pr(u),
      onEnd: (d, h) => {
        (delete this.session, c && Ot.postRender(() => c(d, h)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = yl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let $r = !1;
class R2 extends I.Component {
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: u, layoutId: c } = this.props,
      { projection: d } = l;
    (d &&
      (o.group && o.group.add(d),
      u && u.register && c && u.register(d),
      $r && d.root.didUpdate(),
      d.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      d.setOptions({
        ...d.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      ($s.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: u, drag: c, isPresent: d } = this.props,
      { projection: h } = u;
    return (
      h &&
        ((h.isPresent = d),
        l.layoutDependency !== o && h.setOptions({ ...h.options, layoutDependency: o }),
        ($r = !0),
        c || l.layoutDependency !== o || o === void 0 || l.isPresent !== d
          ? h.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== d &&
          (d
            ? h.promote()
            : h.relegate() ||
              Ot.postRender(() => {
                const m = h.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props,
      { projection: u } = l;
    u &&
      ((u.options.layoutAnchor = o),
      u.root.didUpdate(),
      Xc.postRender(() => {
        !u.currentAnimation && u.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: u } = this.props,
      { projection: c } = l;
    (($r = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(c),
        u && u.deregister && u.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function f0(i) {
  const [l, o] = wA(),
    u = I.useContext(Cp);
  return yt.jsx(R2, {
    ...i,
    layoutGroup: u,
    switchLayoutGroup: I.useContext(s0),
    isPresent: l,
    safeToRemove: o,
  });
}
const O2 = { pan: { Feature: z2 }, drag: { Feature: C2, ProjectionNode: $g, MeasureLayout: f0 } };
function xp(i, l, o) {
  const { props: u } = i;
  i.animationState && u.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o,
    d = u[c];
  d && Ot.postRender(() => d(l, El(l)));
}
class V2 extends Fn {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = ab(l, (o, u) => (xp(this.node, u, "Start"), (c) => xp(this.node, c, "End"))));
  }
  unmount() {}
}
class _2 extends Fn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
  }
  mount() {
    this.unmount = Tl(
      Sl(this.node.current, "focus", () => this.onFocus()),
      Sl(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Mp(i, l, o) {
  const { props: u } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState && u.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o),
    d = u[c];
  d && Ot.postRender(() => d(l, El(l)));
}
class U2 extends Fn {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: o, propagate: u } = this.node.props;
    this.unmount = cb(
      l,
      (c, d) => (
        Mp(this.node, d, "Start"),
        (h, { success: m }) => Mp(this.node, h, m ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: (u == null ? void 0 : u.tap) === !1 },
    );
  }
  unmount() {}
}
const xc = new WeakMap(),
  Ir = new WeakMap(),
  B2 = (i) => {
    const l = xc.get(i.target);
    l && l(i);
  },
  N2 = (i) => {
    i.forEach(B2);
  };
function w2({ root: i, ...l }) {
  const o = i || document;
  Ir.has(o) || Ir.set(o, {});
  const u = Ir.get(o),
    c = JSON.stringify(l);
  return (u[c] || (u[c] = new IntersectionObserver(N2, { root: i, ...l })), u[c]);
}
function L2(i, l, o) {
  const u = w2(l);
  return (
    xc.set(i, o),
    u.observe(i),
    () => {
      (xc.delete(i), u.unobserve(i));
    }
  );
}
const j2 = { some: 0, all: 1 };
class H2 extends Fn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var g;
    (g = this.stopObserver) == null || g.call(this);
    const { viewport: l = {} } = this.node.getProps(),
      { root: o, margin: u, amount: c = "some", once: d } = l,
      h = {
        root: o ? o.current : void 0,
        rootMargin: u,
        threshold: typeof c == "number" ? c : j2[c],
      },
      m = (y) => {
        const { isIntersecting: v } = y;
        if (this.isInView === v || ((this.isInView = v), d && !v && this.hasEnteredView)) return;
        (v && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", v));
        const { onViewportEnter: S, onViewportLeave: b } = this.node.getProps(),
          C = v ? S : b;
        C && C(y);
      };
    this.stopObserver = L2(this.node.current, h, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(Y2(l, o)) && this.startObserver();
  }
  unmount() {
    var l;
    ((l = this.stopObserver) == null || l.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function Y2({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const q2 = {
    inView: { Feature: H2 },
    tap: { Feature: U2 },
    focus: { Feature: _2 },
    hover: { Feature: V2 },
  },
  G2 = { layout: { ProjectionNode: $g, MeasureLayout: f0 } },
  X2 = { ...h2, ...q2, ...O2, ...G2 },
  cl = u2(X2, o2);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z2 = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Q2 = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, o, u) => (u ? u.toUpperCase() : o.toLowerCase())),
  Dp = (i) => {
    const l = Q2(i);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  h0 = (...i) =>
    i
      .filter((l, o, u) => !!l && l.trim() !== "" && u.indexOf(l) === o)
      .join(" ")
      .trim(),
  K2 = (i) => {
    for (const l in i) if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var J2 = {
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
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k2 = I.forwardRef(
  (
    {
      color: i = "currentColor",
      size: l = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: u,
      className: c = "",
      children: d,
      iconNode: h,
      ...m
    },
    g,
  ) =>
    I.createElement(
      "svg",
      {
        ref: g,
        ...J2,
        width: l,
        height: l,
        stroke: i,
        strokeWidth: u ? (Number(o) * 24) / Number(l) : o,
        className: h0("lucide", c),
        ...(!d && !K2(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [...h.map(([y, v]) => I.createElement(y, v)), ...(Array.isArray(d) ? d : [d])],
    ),
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $c = (i, l) => {
  const o = I.forwardRef(({ className: u, ...c }, d) =>
    I.createElement(k2, {
      ref: d,
      iconNode: l,
      className: h0(`lucide-${Z2(Dp(i))}`, `lucide-${i}`, u),
      ...c,
    }),
  );
  return ((o.displayName = Dp(i)), o);
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F2 = [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
  ],
  W2 = $c("maximize", F2);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P2 = [
    ["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }],
    ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }],
    ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }],
    ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }],
    ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }],
    ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }],
    ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }],
    ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }],
    ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }],
    ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }],
    ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }],
    ["path", { d: "m7 3 3 6h4", key: "1otusx" }],
  ],
  $2 = $c("snowflake", P2);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I2 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  tE = $c("zap", I2),
  eE = I.lazy(() => k1(() => import("./react-spline-BQ4JRBpM.js").then((i) => i.r), [])),
  nE = "https://prod.spline.design/PIgTjpRFA03yfLyK/scene.splinecode",
  iE = [
    { label: "Stack", value: "React + Node + SQL" },
    { label: "Logic", value: "V8 - Runtime Logic" },
    { label: "Uptime", value: "99.9% High-Avail" },
    { label: "Scale", value: "Responsive Modern Layout" },
  ],
  aE = [$2, W2, tE];
function lE() {
  return yt.jsxs("div", {
    className:
      "min-h-screen bg-black text-white overflow-x-hidden relative selection:bg-white selection:text-black",
    children: [
      yt.jsx("div", {
        className: "absolute inset-0 z-0",
        style: { transform: "translateX(15%)" },
        children: yt.jsx(I.Suspense, {
          fallback: yt.jsx("div", { className: "absolute inset-0 bg-black" }),
          children: yt.jsx(eE, { scene: nE, className: "h-full w-full" }),
        }),
      }),
      yt.jsxs("div", {
        className:
          "mx-auto px-4 md:px-6 pt-6 md:pt-10 min-h-screen md:h-screen flex flex-col justify-between pb-6 relative z-10 pointer-events-none",
        children: [
          yt.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-12",
            children: yt.jsxs("div", {
              className: "col-span-12 space-y-6 md:space-y-8",
              children: [
                yt.jsx(cl.div, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  children: yt.jsxs("h1", {
                    className:
                      "font-display text-[40px] sm:text-[56px] md:text-[72px] leading-[1] md:leading-[0.9] font-extralight tracking-tight uppercase max-w-xl bg-gradient-to-r from-white/20 via-white/70 to-white bg-clip-text text-transparent",
                    children: ["Automation", yt.jsx("br", {}), "Machines •"],
                  }),
                }),
                yt.jsx(cl.p, {
                  className: "text-sm text-white max-w-md leading-relaxed font-light",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.2 },
                  children:
                    "Developed with high-end skills and a pixel-perfect frame for those who don't just browse the web—they build it. Code your dreams....",
                }),
                yt.jsx(cl.div, {
                  className: "flex gap-4",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: 0.4 },
                  children: aE.map((i) =>
                    yt.jsx(
                      "button",
                      {
                        type: "button",
                        className:
                          "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors cursor-pointer pointer-events-auto",
                        "aria-label": i.displayName ?? i.name,
                        children: yt.jsx(i, { size: 16, className: "text-white/80" }),
                      },
                      i.displayName ?? i.name,
                    ),
                  ),
                }),
              ],
            }),
          }),
          yt.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 mt-16 md:mt-0",
            children: [
              yt.jsxs(cl.div, {
                className: "p-6 md:p-8 w-full md:max-w-md pointer-events-auto",
                initial: { opacity: 0, y: 40 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.8 },
                children: [
                  yt.jsx("p", {
                    className:
                      "text-[10px] font-mono tracking-[0.3em] uppercase text-white/60 mb-5",
                    children: "Technical Specs",
                  }),
                  yt.jsx("div", {
                    className: "space-y-4",
                    children: iE.map((i) =>
                      yt.jsxs(
                        "div",
                        {
                          className:
                            "flex justify-between items-end border-b border-white/10 pb-3 group cursor-default",
                          children: [
                            yt.jsx("span", {
                              className:
                                "text-xs text-white/70 group-hover:text-white transition-colors",
                              children: i.label,
                            }),
                            yt.jsx("span", {
                              className: "text-xs font-mono tracking-tight text-white",
                              children: i.value,
                            }),
                          ],
                        },
                        i.label,
                      ),
                    ),
                  }),
                ],
              }),
              yt.jsx(cl.div, {
                className: "flex items-center w-full md:w-auto",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1, delay: 1 },
                children: yt.jsxs("div", {
                  className:
                    "flex flex-wrap gap-2 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full p-2 border border-white/5 w-full md:w-auto pointer-events-auto",
                  children: [
                    yt.jsx("span", {
                      className:
                        "px-4 py-2 text-[10px] font-mono tracking-widest bg-white text-black rounded-full",
                      children: "TS/JS",
                    }),
                    yt.jsx("span", {
                      className:
                        "px-3 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full",
                      children: "V1",
                    }),
                    yt.jsx("span", {
                      className:
                        "px-4 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full",
                      children: "Full-Stack",
                    }),
                    yt.jsx("span", {
                      className:
                        "px-4 py-2 text-[10px] font-mono tracking-widest border border-white/20 rounded-full",
                      children: "Cloud-Ready",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
Q1.createRoot(document.getElementById("root")).render(
  yt.jsx(I.StrictMode, { children: yt.jsx(lE, {}) }),
);
export { k1 as _, yt as j, I as r };
