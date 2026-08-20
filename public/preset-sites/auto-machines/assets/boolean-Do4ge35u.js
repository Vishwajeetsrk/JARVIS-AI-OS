var tn = Object.defineProperty;
var nn = (I, R, f) =>
  R in I ? tn(I, R, { enumerable: !0, configurable: !0, writable: !0, value: f }) : (I[R] = f);
var M = (I, R, f) => nn(I, typeof R != "symbol" ? R + "" : R, f);
async function ln(I = {}) {
  var R,
    f = I,
    Sr = "./this.program",
    Dr = (r, e) => {
      throw e;
    },
    or = "",
    pr = "";
  function me(r) {
    return f.locateFile ? f.locateFile(r, pr) : pr + r;
  }
  var wr, he;
  (typeof document < "u" && document.currentScript && (or = document.currentScript.src),
    or.indexOf("blob:") !== 0 && (pr = or.substr(0, or.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
    (wr = async (r) => {
      var e = await fetch(r, { credentials: "same-origin" });
      if (e.ok) return e.arrayBuffer();
      throw new Error(e.status + " : " + e.url);
    }));
  var ir = console.log.bind(console),
    U = console.error.bind(console),
    Y,
    ar = !1,
    sr,
    lr,
    ur,
    Cr = !1;
  function Rr() {
    var r = hr.buffer;
    ((f.HEAP8 = A = new Int8Array(r)),
      (f.HEAP16 = J = new Int16Array(r)),
      (f.HEAPU8 = N = new Uint8Array(r)),
      (f.HEAPU16 = V = new Uint16Array(r)),
      (f.HEAP32 = W = new Int32Array(r)),
      (f.HEAPU32 = w = new Uint32Array(r)),
      (f.HEAPF32 = Mr = new Float32Array(r)),
      (f.HEAPF64 = Nr = new Float64Array(r)),
      (S = new BigInt64Array(r)),
      (Ur = new BigUint64Array(r)));
  }
  function pe() {
    if (f.preRun)
      for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length;)
        Pe(f.preRun.shift());
    Wr(xr);
  }
  function we() {
    ((Cr = !0), !f.noFSInit && !o.initialized && o.init(), nr.D(), (o.ignorePermissions = !1));
  }
  function ge() {
    if (f.postRun)
      for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length;)
        Ae(f.postRun.shift());
    Wr(zr);
  }
  function C(r) {
    var t;
    ((t = f.onAbort) == null || t.call(f, r),
      (r = `Aborted(${r})`),
      U(r),
      (ar = !0),
      (r += ". Build with -sASSERTIONS for more info."));
    var e = new WebAssembly.RuntimeError(r);
    throw (ur == null || ur(e), e);
  }
  var gr;
  function ye() {
    return me("boolean.wasm");
  }
  function _e(r) {
    if (r == gr && Y) return new Uint8Array(Y);
    throw "both async and sync fetching of the wasm failed";
  }
  async function Ee(r) {
    if (!Y)
      try {
        var e = await wr(r);
        return new Uint8Array(e);
      } catch {}
    return _e(r);
  }
  async function ke(r, e) {
    try {
      var t = await Ee(r),
        n = await WebAssembly.instantiate(t, e);
      return n;
    } catch (i) {
      (U(`failed to asynchronously prepare wasm: ${i}`), C(i));
    }
  }
  async function be(r, e, t) {
    if (!r)
      try {
        var n = fetch(e, { credentials: "same-origin" }),
          i = await WebAssembly.instantiateStreaming(n, t);
        return i;
      } catch (a) {
        (U(`wasm streaming compile failed: ${a}`), U("falling back to ArrayBuffer instantiation"));
      }
    return ke(e, t);
  }
  function Te() {
    var r = { a: en };
    return r;
  }
  async function Fe() {
    function r(a, s) {
      return ((nr = a.exports), rn(nr), Rr(), nr);
    }
    function e(a) {
      return r(a.instance);
    }
    var t = Te();
    if (f.instantiateWasm)
      return new Promise((a, s) => {
        f.instantiateWasm(t, (l, u) => {
          a(r(l));
        });
      });
    gr ?? (gr = ye());
    var n = await be(Y, gr, t),
      i = e(n);
    return i;
  }
  class Br {
    constructor(e) {
      M(this, "name", "ExitStatus");
      ((this.message = `Program terminated with exit(${e})`), (this.status = e));
    }
  }
  var J,
    W,
    S,
    A,
    Mr,
    Nr,
    V,
    w,
    Ur,
    N,
    Wr = (r) => {
      for (; r.length > 0;) r.shift()(f);
    },
    zr = [],
    Ae = (r) => zr.push(r),
    xr = [],
    Pe = (r) => xr.push(r),
    yr = !0,
    Se = (r) => fe(r),
    De = () => ve();
  class Ce {
    constructor(e) {
      ((this.excPtr = e), (this.ptr = e - 24));
    }
    set_type(e) {
      w[(this.ptr + 4) >> 2] = e;
    }
    get_type() {
      return w[(this.ptr + 4) >> 2];
    }
    set_destructor(e) {
      w[(this.ptr + 8) >> 2] = e;
    }
    get_destructor() {
      return w[(this.ptr + 8) >> 2];
    }
    set_caught(e) {
      ((e = e ? 1 : 0), (A[this.ptr + 12] = e));
    }
    get_caught() {
      return A[this.ptr + 12] != 0;
    }
    set_rethrown(e) {
      ((e = e ? 1 : 0), (A[this.ptr + 13] = e));
    }
    get_rethrown() {
      return A[this.ptr + 13] != 0;
    }
    init(e, t) {
      (this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t));
    }
    set_adjusted_ptr(e) {
      w[(this.ptr + 16) >> 2] = e;
    }
    get_adjusted_ptr() {
      return w[(this.ptr + 16) >> 2];
    }
  }
  var Re = (r, e, t) => {
      var n = new Ce(r);
      (n.init(e, t), C());
    },
    Be = () => C(""),
    fr = {},
    Ir = (r) => {
      for (; r.length;) {
        var e = r.pop(),
          t = r.pop();
        t(e);
      }
    };
  function dr(r) {
    return this.fromWireType(w[r >> 2]);
  }
  var q = {},
    O = {},
    vr = {},
    Me = class extends Error {
      constructor(e) {
        (super(e), (this.name = "InternalError"));
      }
    },
    Or = (r) => {
      throw new Me(r);
    },
    $r = (r, e, t) => {
      r.forEach((l) => (vr[l] = e));
      function n(l) {
        var u = t(l);
        u.length !== r.length && Or("Mismatched type converter count");
        for (var d = 0; d < r.length; ++d) D(r[d], u[d]);
      }
      var i = new Array(e.length),
        a = [],
        s = 0;
      for (let [l, u] of e.entries())
        O.hasOwnProperty(u)
          ? (i[l] = O[u])
          : (a.push(u),
            q.hasOwnProperty(u) || (q[u] = []),
            q[u].push(() => {
              ((i[l] = O[u]), ++s, s === a.length && n(i));
            }));
      a.length === 0 && n(i);
    },
    Ne = (r) => {
      var e = fr[r];
      delete fr[r];
      var t = e.elements,
        n = t.length,
        i = t.map((l) => l.getterReturnType).concat(t.map((l) => l.setterArgumentType)),
        a = e.rawConstructor,
        s = e.rawDestructor;
      $r([r], i, (l) => {
        for (const [u, d] of t.entries()) {
          const v = l[u],
            h = d.getter,
            p = d.getterContext,
            m = l[u + n],
            g = d.setter,
            _ = d.setterContext;
          ((d.read = (E) => v.fromWireType(h(p, E))),
            (d.write = (E, k) => {
              var F = [];
              (g(_, E, m.toWireType(F, k)), Ir(F));
            }));
        }
        return [
          {
            name: e.name,
            fromWireType: (u) => {
              for (var d = new Array(n), v = 0; v < n; ++v) d[v] = t[v].read(u);
              return (s(u), d);
            },
            toWireType: (u, d) => {
              if (n !== d.length)
                throw new TypeError(
                  `Incorrect number of tuple elements for ${e.name}: expected=${n}, actual=${d.length}`,
                );
              for (var v = a(), h = 0; h < n; ++h) t[h].write(v, d[h]);
              return (u !== null && u.push(s, v), v);
            },
            readValueFromPointer: dr,
            destructorFunction: s,
          },
        ];
      });
    },
    P = (r) => {
      for (var e = ""; ;) {
        var t = N[r++];
        if (!t) return e;
        e += String.fromCharCode(t);
      }
    },
    Ue = class extends Error {
      constructor(e) {
        (super(e), (this.name = "BindingError"));
      }
    },
    B = (r) => {
      throw new Ue(r);
    };
  function We(r, e, t = {}) {
    var n = e.name;
    if ((r || B(`type "${n}" must have a positive integer typeid pointer`), O.hasOwnProperty(r))) {
      if (t.ignoreDuplicateRegistrations) return;
      B(`Cannot register type '${n}' twice`);
    }
    if (((O[r] = e), delete vr[r], q.hasOwnProperty(r))) {
      var i = q[r];
      (delete q[r], i.forEach((a) => a()));
    }
  }
  function D(r, e, t = {}) {
    return We(r, e, t);
  }
  var jr = (r, e, t) => {
      switch (e) {
        case 1:
          return t ? (n) => A[n] : (n) => N[n];
        case 2:
          return t ? (n) => J[n >> 1] : (n) => V[n >> 1];
        case 4:
          return t ? (n) => W[n >> 2] : (n) => w[n >> 2];
        case 8:
          return t ? (n) => S[n >> 3] : (n) => Ur[n >> 3];
        default:
          throw new TypeError(`invalid integer width (${e}): ${r}`);
      }
    },
    ze = (r, e, t, n, i) => {
      e = P(e);
      const a = n === 0n;
      let s = (l) => l;
      if (a) {
        const l = t * 8;
        ((s = (u) => BigInt.asUintN(l, u)), (i = s(i)));
      }
      D(r, {
        name: e,
        fromWireType: s,
        toWireType: (l, u) => (typeof u == "number" && (u = BigInt(u)), u),
        readValueFromPointer: jr(e, t, !a),
        destructorFunction: null,
      });
    },
    xe = (r, e, t, n) => {
      ((e = P(e)),
        D(r, {
          name: e,
          fromWireType: function (i) {
            return !!i;
          },
          toWireType: function (i, a) {
            return a ? t : n;
          },
          readValueFromPointer: function (i) {
            return this.fromWireType(N[i]);
          },
          destructorFunction: null,
        }));
    },
    Hr = [],
    X = [0, 1, , 1, null, 1, !0, 1, !1, 1],
    Ie = (r) => {
      r > 9 && --X[r + 1] === 0 && ((X[r] = void 0), Hr.push(r));
    },
    Lr = {
      toValue: (r) => (r || B(`Cannot use deleted val. handle = ${r}`), X[r]),
      toHandle: (r) => {
        switch (r) {
          case void 0:
            return 2;
          case null:
            return 4;
          case !0:
            return 6;
          case !1:
            return 8;
          default: {
            const e = Hr.pop() || X.length;
            return ((X[e] = r), (X[e + 1] = 1), e);
          }
        }
      },
    },
    Oe = {
      name: "emscripten::val",
      fromWireType: (r) => {
        var e = Lr.toValue(r);
        return (Ie(r), e);
      },
      toWireType: (r, e) => Lr.toHandle(e),
      readValueFromPointer: dr,
      destructorFunction: null,
    },
    $e = (r) => D(r, Oe),
    je = (r, e, t) => {
      if (r[e].overloadTable === void 0) {
        var n = r[e];
        ((r[e] = function (...i) {
          return (
            r[e].overloadTable.hasOwnProperty(i.length) ||
              B(
                `Function '${t}' called with an invalid number of arguments (${i.length}) - expects one of (${r[e].overloadTable})!`,
              ),
            r[e].overloadTable[i.length].apply(this, i)
          );
        }),
          (r[e].overloadTable = []),
          (r[e].overloadTable[n.argCount] = n));
      }
    },
    cr = (r, e, t) => {
      f.hasOwnProperty(r)
        ? ((t === void 0 || (f[r].overloadTable !== void 0 && f[r].overloadTable[t] !== void 0)) &&
            B(`Cannot register public name '${r}' twice`),
          je(f, r, r),
          f[r].overloadTable.hasOwnProperty(t) &&
            B(
              `Cannot register multiple overloads of a function with the same number of arguments (${t})!`,
            ),
          (f[r].overloadTable[t] = e))
        : ((f[r] = e), (f[r].argCount = t));
    },
    _r = (r, e, t) => {
      switch (e) {
        case 1:
          return t
            ? function (n) {
                return this.fromWireType(A[n]);
              }
            : function (n) {
                return this.fromWireType(N[n]);
              };
        case 2:
          return t
            ? function (n) {
                return this.fromWireType(J[n >> 1]);
              }
            : function (n) {
                return this.fromWireType(V[n >> 1]);
              };
        case 4:
          return t
            ? function (n) {
                return this.fromWireType(W[n >> 2]);
              }
            : function (n) {
                return this.fromWireType(w[n >> 2]);
              };
        default:
          throw new TypeError(`invalid integer width (${e}): ${r}`);
      }
    };
  function He(r) {
    return r === 0 ? "object" : r === 1 ? "number" : "string";
  }
  var Le = (r, e, t, n, i) => {
      e = P(e);
      const a = He(i);
      switch (a) {
        case "object": {
          let d = function () {};
          ((d.values = {}),
            D(r, {
              name: e,
              constructor: d,
              valueType: a,
              fromWireType: function (v) {
                return this.constructor.values[v];
              },
              toWireType: (v, h) => h.value,
              readValueFromPointer: _r(e, t, n),
              destructorFunction: null,
            }),
            cr(e, d));
          break;
        }
        case "number": {
          var s = {};
          (D(r, {
            name: e,
            keysMap: s,
            valueType: a,
            fromWireType: (d) => d,
            toWireType: (d, v) => v,
            readValueFromPointer: _r(e, t, n),
            destructorFunction: null,
          }),
            cr(e, s),
            delete f[e].argCount);
          break;
        }
        case "string": {
          var l = {},
            u = {},
            s = {};
          (D(r, {
            name: e,
            valuesMap: l,
            reverseMap: u,
            keysMap: s,
            valueType: a,
            fromWireType: function (v) {
              return this.reverseMap[v];
            },
            toWireType: function (v, h) {
              return this.valuesMap[h];
            },
            readValueFromPointer: _r(e, t, n),
            destructorFunction: null,
          }),
            cr(e, s),
            delete f[e].argCount);
          break;
        }
      }
    },
    Vr = (r, e) => Object.defineProperty(e, "name", { value: r }),
    qr = (r) => {
      var e = le(r),
        t = P(e);
      return (z(e), t);
    },
    Ve = (r, e) => {
      var t = O[r];
      return (t === void 0 && B(`${e} has unknown type ${qr(r)}`), t);
    },
    qe = (r, e, t) => {
      var n = Ve(r, "enum");
      switch (((e = P(e)), n.valueType)) {
        case "object": {
          var i = n.constructor,
            a = Object.create(n.constructor.prototype, {
              value: { value: t },
              constructor: { value: Vr(`${n.name}_${e}`, function () {}) },
            });
          ((i.values[t] = a), (i[e] = a));
          break;
        }
        case "number": {
          n.keysMap[e] = t;
          break;
        }
        case "string": {
          ((n.valuesMap[e] = t), (n.reverseMap[t] = e), (n.keysMap[e] = e));
          break;
        }
      }
    },
    Xe = (r, e) => {
      switch (e) {
        case 4:
          return function (t) {
            return this.fromWireType(Mr[t >> 2]);
          };
        case 8:
          return function (t) {
            return this.fromWireType(Nr[t >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e}): ${r}`);
      }
    },
    Ge = (r, e, t) => {
      ((e = P(e)),
        D(r, {
          name: e,
          fromWireType: (n) => n,
          toWireType: (n, i) => i,
          readValueFromPointer: Xe(e, t),
          destructorFunction: null,
        }));
    };
  function Ke(r) {
    for (var e = 1; e < r.length; ++e)
      if (r[e] !== null && r[e].destructorFunction === void 0) return !0;
    return !1;
  }
  function Ye(r, e, t, n, i, a) {
    var s = e.length;
    (s < 2 && B("argTypes array size mismatch! Must at least get return value and 'this' types!"),
      e[1]);
    var l = Ke(e),
      u = !e[0].isVoid,
      d = s - 2,
      v = new Array(d),
      h = [],
      p = [],
      m = function (...g) {
        p.length = 0;
        var _;
        ((h.length = 1), (h[0] = i));
        for (var E = 0; E < d; ++E) ((v[E] = e[E + 2].toWireType(p, g[E])), h.push(v[E]));
        var k = n(...h);
        function F(L) {
          if (l) Ir(p);
          else
            for (var b = 2; b < e.length; b++) {
              var x = b === 1 ? _ : v[b - 2];
              e[b].destructorFunction !== null && e[b].destructorFunction(x);
            }
          if (u) return e[0].fromWireType(L);
        }
        return F(k);
      };
    return Vr(r, m);
  }
  var Je = (r, e) => {
      for (var t = [], n = 0; n < r; n++) t.push(w[(e + n * 4) >> 2]);
      return t;
    },
    Ze = (r, e, t) => {
      (f.hasOwnProperty(r) || Or("Replacing nonexistent public symbol"),
        f[r].overloadTable !== void 0 && t !== void 0
          ? (f[r].overloadTable[t] = e)
          : ((f[r] = e), (f[r].argCount = t)));
    },
    Xr = [],
    Qe = (r) => {
      var e = Xr[r];
      return (e || (Xr[r] = e = ce.get(r)), e);
    },
    Z = (r, e, t = !1) => {
      r = P(r);
      function n() {
        var a = Qe(e);
        return a;
      }
      var i = n();
      return (typeof i != "function" && B(`unknown function pointer with signature ${r}: ${e}`), i);
    };
  class rt extends Error {}
  var et = (r, e) => {
      var t = [],
        n = {};
      function i(a) {
        if (!n[a] && !O[a]) {
          if (vr[a]) {
            vr[a].forEach(i);
            return;
          }
          (t.push(a), (n[a] = !0));
        }
      }
      throw (e.forEach(i), new rt(`${r}: ` + t.map(qr).join([", "])));
    },
    tt = (r) => {
      r = r.trim();
      const e = r.indexOf("(");
      return e === -1 ? r : r.slice(0, e);
    },
    nt = (r, e, t, n, i, a, s, l) => {
      var u = Je(e, t);
      ((r = P(r)),
        (r = tt(r)),
        (i = Z(n, i, s)),
        cr(
          r,
          function () {
            et(`Cannot call ${r} due to unbound types`, u);
          },
          e - 1,
        ),
        $r([], u, (d) => {
          var v = [d[0], null].concat(d.slice(1));
          return (Ze(r, Ye(r, v, null, i, a), e - 1), []);
        }));
    },
    ot = (r, e, t, n, i) => {
      e = P(e);
      const a = n === 0;
      let s = (u) => u;
      if (a) {
        var l = 32 - 8 * t;
        ((s = (u) => (u << l) >>> l), (i = s(i)));
      }
      D(r, {
        name: e,
        fromWireType: s,
        toWireType: (u, d) => d,
        readValueFromPointer: jr(e, t, n !== 0),
        destructorFunction: null,
      });
    },
    it = (r, e, t) => {
      var n = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          BigInt64Array,
          BigUint64Array,
        ],
        i = n[e];
      function a(s) {
        var l = w[s >> 2],
          u = w[(s + 4) >> 2];
        return new i(A.buffer, u, l);
      }
      ((t = P(t)),
        D(
          r,
          { name: t, fromWireType: a, readValueFromPointer: a },
          { ignoreDuplicateRegistrations: !0 },
        ));
    },
    Gr = (r, e, t, n) => {
      if (!(n > 0)) return 0;
      for (var i = t, a = t + n - 1, s = 0; s < r.length; ++s) {
        var l = r.codePointAt(s);
        if (l <= 127) {
          if (t >= a) break;
          e[t++] = l;
        } else if (l <= 2047) {
          if (t + 1 >= a) break;
          ((e[t++] = 192 | (l >> 6)), (e[t++] = 128 | (l & 63)));
        } else if (l <= 65535) {
          if (t + 2 >= a) break;
          ((e[t++] = 224 | (l >> 12)), (e[t++] = 128 | ((l >> 6) & 63)), (e[t++] = 128 | (l & 63)));
        } else {
          if (t + 3 >= a) break;
          ((e[t++] = 240 | (l >> 18)),
            (e[t++] = 128 | ((l >> 12) & 63)),
            (e[t++] = 128 | ((l >> 6) & 63)),
            (e[t++] = 128 | (l & 63)),
            s++);
        }
      }
      return ((e[t] = 0), t - i);
    },
    $ = (r, e, t) => Gr(r, N, e, t),
    mr = (r) => {
      for (var e = 0, t = 0; t < r.length; ++t) {
        var n = r.charCodeAt(t);
        n <= 127
          ? e++
          : n <= 2047
            ? (e += 2)
            : n >= 55296 && n <= 57343
              ? ((e += 4), ++t)
              : (e += 3);
      }
      return e;
    },
    Kr = globalThis.TextDecoder && new TextDecoder(),
    Yr = (r, e, t, n) => {
      var i = e + t;
      if (n) return i;
      for (; r[e] && !(e >= i);) ++e;
      return e;
    },
    G = (r, e = 0, t, n) => {
      var i = Yr(r, e, t, n);
      if (i - e > 16 && r.buffer && Kr) return Kr.decode(r.subarray(e, i));
      for (var a = ""; e < i;) {
        var s = r[e++];
        if (!(s & 128)) {
          a += String.fromCharCode(s);
          continue;
        }
        var l = r[e++] & 63;
        if ((s & 224) == 192) {
          a += String.fromCharCode(((s & 31) << 6) | l);
          continue;
        }
        var u = r[e++] & 63;
        if (
          ((s & 240) == 224
            ? (s = ((s & 15) << 12) | (l << 6) | u)
            : (s = ((s & 7) << 18) | (l << 12) | (u << 6) | (r[e++] & 63)),
          s < 65536)
        )
          a += String.fromCharCode(s);
        else {
          var d = s - 65536;
          a += String.fromCharCode(55296 | (d >> 10), 56320 | (d & 1023));
        }
      }
      return a;
    },
    Er = (r, e, t) => (r ? G(N, r, e, t) : ""),
    at = (r, e) => {
      ((e = P(e)),
        D(r, {
          name: e,
          fromWireType(t) {
            var n = w[t >> 2],
              i = t + 4,
              a;
            return ((a = Er(i, n, !0)), z(t), a);
          },
          toWireType(t, n) {
            n instanceof ArrayBuffer && (n = new Uint8Array(n));
            var i,
              a = typeof n == "string";
            (a ||
              (ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1) ||
              B("Cannot pass non-string to std::string"),
              a ? (i = mr(n)) : (i = n.length));
            var s = Ar(4 + i + 1),
              l = s + 4;
            return (
              (w[s >> 2] = i),
              a ? $(n, l, i + 1) : N.set(n, l),
              t !== null && t.push(z, s),
              s
            );
          },
          readValueFromPointer: dr,
          destructorFunction(t) {
            z(t);
          },
        }));
    },
    Jr = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0,
    st = (r, e, t) => {
      var n = r >> 1,
        i = Yr(V, n, e / 2, t);
      if (i - n > 16 && Jr) return Jr.decode(V.subarray(n, i));
      for (var a = "", s = n; s < i; ++s) {
        var l = V[s];
        a += String.fromCharCode(l);
      }
      return a;
    },
    lt = (r, e, t) => {
      if ((t ?? (t = 2147483647), t < 2)) return 0;
      t -= 2;
      for (var n = e, i = t < r.length * 2 ? t / 2 : r.length, a = 0; a < i; ++a) {
        var s = r.charCodeAt(a);
        ((J[e >> 1] = s), (e += 2));
      }
      return ((J[e >> 1] = 0), e - n);
    },
    ut = (r) => r.length * 2,
    ft = (r, e, t) => {
      for (var n = "", i = r >> 2, a = 0; !(a >= e / 4); a++) {
        var s = w[i + a];
        if (!s && !t) break;
        n += String.fromCodePoint(s);
      }
      return n;
    },
    dt = (r, e, t) => {
      if ((t ?? (t = 2147483647), t < 4)) return 0;
      for (var n = e, i = n + t - 4, a = 0; a < r.length; ++a) {
        var s = r.codePointAt(a);
        if ((s > 65535 && a++, (W[e >> 2] = s), (e += 4), e + 4 > i)) break;
      }
      return ((W[e >> 2] = 0), e - n);
    },
    vt = (r) => {
      for (var e = 0, t = 0; t < r.length; ++t) {
        var n = r.codePointAt(t);
        (n > 65535 && t++, (e += 4));
      }
      return e;
    },
    ct = (r, e, t) => {
      t = P(t);
      var n, i, a;
      (e === 2 ? ((n = st), (i = lt), (a = ut)) : ((n = ft), (i = dt), (a = vt)),
        D(r, {
          name: t,
          fromWireType: (s) => {
            var l = w[s >> 2],
              u = n(s + 4, l * e, !0);
            return (z(s), u);
          },
          toWireType: (s, l) => {
            typeof l != "string" && B(`Cannot pass non-string to C++ string type ${t}`);
            var u = a(l),
              d = Ar(4 + u + e);
            return ((w[d >> 2] = u / e), i(l, d + 4, u + e), s !== null && s.push(z, d), d);
          },
          readValueFromPointer: dr,
          destructorFunction(s) {
            z(s);
          },
        }));
    },
    mt = (r, e, t, n, i, a) => {
      fr[r] = { name: P(e), rawConstructor: Z(t, n), rawDestructor: Z(i, a), elements: [] };
    },
    ht = (r, e, t, n, i, a, s, l, u) => {
      fr[r].elements.push({
        getterReturnType: e,
        getter: Z(t, n),
        getterContext: i,
        setterArgumentType: a,
        setter: Z(s, l),
        setterContext: u,
      });
    },
    pt = (r, e) => {
      ((e = P(e)), D(r, { isVoid: !0, name: e, fromWireType: () => {}, toWireType: (t, n) => {} }));
    },
    Zr = 0,
    wt = () => {
      ((yr = !1), (Zr = 0));
    },
    Q = {},
    Qr = (r) => {
      if (r instanceof Br || r == "unwind") return sr;
      Dr(1, r);
    },
    re = () => yr || Zr > 0,
    ee = (r) => {
      var e;
      ((sr = r), re() || ((e = f.onExit) == null || e.call(f, r), (ar = !0)), Dr(r, new Br(r)));
    },
    gt = (r, e) => {
      ((sr = r), ee(r));
    },
    yt = gt,
    _t = () => {
      if (!re())
        try {
          yt(sr);
        } catch (r) {
          Qr(r);
        }
    },
    Et = (r) => {
      if (!ar)
        try {
          return r();
        } catch (e) {
          Qr(e);
        } finally {
          _t();
        }
    },
    kt = () => performance.now(),
    bt = (r, e) => {
      if ((Q[r] && (clearTimeout(Q[r].id), delete Q[r]), !e)) return 0;
      var t = setTimeout(() => {
        (delete Q[r], Et(() => ue(r, kt())));
      }, e);
      return ((Q[r] = { id: t, timeout_ms: e }), 0);
    },
    Tt = (r, e, t, n) => {
      var i = new Date().getFullYear(),
        a = new Date(i, 0, 1),
        s = new Date(i, 6, 1),
        l = a.getTimezoneOffset(),
        u = s.getTimezoneOffset(),
        d = Math.max(l, u);
      ((w[r >> 2] = d * 60), (W[e >> 2] = +(l != u)));
      var v = (m) => {
          var g = m >= 0 ? "-" : "+",
            _ = Math.abs(m),
            E = String(Math.floor(_ / 60)).padStart(2, "0"),
            k = String(_ % 60).padStart(2, "0");
          return `UTC${g}${E}${k}`;
        },
        h = v(l),
        p = v(u);
      u < l ? ($(h, t, 17), $(p, n, 17)) : ($(h, n, 17), $(p, t, 17));
    },
    Ft = () => 2147483648,
    At = (r, e) => Math.ceil(r / e) * e,
    Pt = (r) => {
      var e = hr.buffer.byteLength,
        t = ((r - e + 65535) / 65536) | 0;
      try {
        return (hr.grow(t), Rr(), 1);
      } catch {}
    },
    St = (r) => {
      var e = N.length;
      r >>>= 0;
      var t = Ft();
      if (r > t) return !1;
      for (var n = 1; n <= 4; n *= 2) {
        var i = e * (1 + 0.2 / n);
        i = Math.min(i, r + 100663296);
        var a = Math.min(t, At(Math.max(r, i), 65536)),
          s = Pt(a);
        if (s) return !0;
      }
      return !1;
    },
    kr = {},
    Dt = () => Sr || "./this.program",
    rr = () => {
      var i;
      if (!rr.strings) {
        var r =
            (((i = globalThis.navigator) == null ? void 0 : i.language) ?? "C").replace("-", "_") +
            ".UTF-8",
          e = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG: r,
            _: Dt(),
          };
        for (var t in kr) kr[t] === void 0 ? delete e[t] : (e[t] = kr[t]);
        var n = [];
        for (var t in e) n.push(`${t}=${e[t]}`);
        rr.strings = n;
      }
      return rr.strings;
    },
    Ct = (r, e) => {
      var t = 0,
        n = 0;
      for (var i of rr()) {
        var a = e + t;
        ((w[(r + n) >> 2] = a), (t += $(i, a, 1 / 0) + 1), (n += 4));
      }
      return 0;
    },
    Rt = (r, e) => {
      var t = rr();
      w[r >> 2] = t.length;
      var n = 0;
      for (var i of t) n += mr(i) + 1;
      return ((w[e >> 2] = n), 0);
    },
    y = {
      isAbs: (r) => r.charAt(0) === "/",
      splitPath: (r) => {
        var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return e.exec(r).slice(1);
      },
      normalizeArray: (r, e) => {
        for (var t = 0, n = r.length - 1; n >= 0; n--) {
          var i = r[n];
          i === "."
            ? r.splice(n, 1)
            : i === ".."
              ? (r.splice(n, 1), t++)
              : t && (r.splice(n, 1), t--);
        }
        if (e) for (; t; t--) r.unshift("..");
        return r;
      },
      normalize: (r) => {
        var e = y.isAbs(r),
          t = r.slice(-1) === "/";
        return (
          (r = y
            .normalizeArray(
              r.split("/").filter((n) => !!n),
              !e,
            )
            .join("/")),
          !r && !e && (r = "."),
          r && t && (r += "/"),
          (e ? "/" : "") + r
        );
      },
      dirname: (r) => {
        var e = y.splitPath(r),
          t = e[0],
          n = e[1];
        return !t && !n ? "." : (n && (n = n.slice(0, -1)), t + n);
      },
      basename: (r) => r && r.match(/([^\/]+|\/)\/*$/)[1],
      join: (...r) => y.normalize(r.join("/")),
      join2: (r, e) => y.normalize(r + "/" + e),
    },
    Bt = () => (r) => (crypto.getRandomValues(r), 0),
    te = (r) => (te = Bt())(r),
    K = {
      resolve: (...r) => {
        for (var e = "", t = !1, n = r.length - 1; n >= -1 && !t; n--) {
          var i = n >= 0 ? r[n] : o.cwd();
          if (typeof i != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!i) return "";
          ((e = i + "/" + e), (t = y.isAbs(i)));
        }
        return (
          (e = y
            .normalizeArray(
              e.split("/").filter((a) => !!a),
              !t,
            )
            .join("/")),
          (t ? "/" : "") + e || "."
        );
      },
      relative: (r, e) => {
        ((r = K.resolve(r).slice(1)), (e = K.resolve(e).slice(1)));
        function t(d) {
          for (var v = 0; v < d.length && d[v] === ""; v++);
          for (var h = d.length - 1; h >= 0 && d[h] === ""; h--);
          return v > h ? [] : d.slice(v, h - v + 1);
        }
        for (
          var n = t(r.split("/")),
            i = t(e.split("/")),
            a = Math.min(n.length, i.length),
            s = a,
            l = 0;
          l < a;
          l++
        )
          if (n[l] !== i[l]) {
            s = l;
            break;
          }
        for (var u = [], l = s; l < n.length; l++) u.push("..");
        return ((u = u.concat(i.slice(s))), u.join("/"));
      },
    },
    br = [],
    Tr = (r, e, t) => {
      var n = mr(r) + 1,
        i = new Array(n),
        a = Gr(r, i, 0, i.length);
      return ((i.length = a), i);
    },
    Mt = () => {
      var e;
      if (!br.length) {
        var r = null;
        if (
          ((e = globalThis.window) != null &&
            e.prompt &&
            ((r = window.prompt("Input: ")),
            r !== null &&
              (r += `
`)),
          !r)
        )
          return null;
        br = Tr(r);
      }
      return br.shift();
    },
    j = {
      ttys: [],
      init() {},
      shutdown() {},
      register(r, e) {
        ((j.ttys[r] = { input: [], output: [], ops: e }), o.registerDevice(r, j.stream_ops));
      },
      stream_ops: {
        open(r) {
          var e = j.ttys[r.node.rdev];
          if (!e) throw new o.ErrnoError(43);
          ((r.tty = e), (r.seekable = !1));
        },
        close(r) {
          r.tty.ops.fsync(r.tty);
        },
        fsync(r) {
          r.tty.ops.fsync(r.tty);
        },
        read(r, e, t, n, i) {
          if (!r.tty || !r.tty.ops.get_char) throw new o.ErrnoError(60);
          for (var a = 0, s = 0; s < n; s++) {
            var l;
            try {
              l = r.tty.ops.get_char(r.tty);
            } catch {
              throw new o.ErrnoError(29);
            }
            if (l === void 0 && a === 0) throw new o.ErrnoError(6);
            if (l == null) break;
            (a++, (e[t + s] = l));
          }
          return (a && (r.node.atime = Date.now()), a);
        },
        write(r, e, t, n, i) {
          if (!r.tty || !r.tty.ops.put_char) throw new o.ErrnoError(60);
          try {
            for (var a = 0; a < n; a++) r.tty.ops.put_char(r.tty, e[t + a]);
          } catch {
            throw new o.ErrnoError(29);
          }
          return (n && (r.node.mtime = r.node.ctime = Date.now()), a);
        },
      },
      default_tty_ops: {
        get_char(r) {
          return Mt();
        },
        put_char(r, e) {
          e === null || e === 10 ? (ir(G(r.output)), (r.output = [])) : e != 0 && r.output.push(e);
        },
        fsync(r) {
          var e;
          ((e = r.output) == null ? void 0 : e.length) > 0 && (ir(G(r.output)), (r.output = []));
        },
        ioctl_tcgets(r) {
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0,
            ],
          };
        },
        ioctl_tcsets(r, e, t) {
          return 0;
        },
        ioctl_tiocgwinsz(r) {
          return [24, 80];
        },
      },
      default_tty1_ops: {
        put_char(r, e) {
          e === null || e === 10 ? (U(G(r.output)), (r.output = [])) : e != 0 && r.output.push(e);
        },
        fsync(r) {
          var e;
          ((e = r.output) == null ? void 0 : e.length) > 0 && (U(G(r.output)), (r.output = []));
        },
      },
    },
    ne = (r) => {
      C();
    },
    c = {
      ops_table: null,
      mount(r) {
        return c.createNode(null, "/", 16895, 0);
      },
      createNode(r, e, t, n) {
        if (o.isBlkdev(t) || o.isFIFO(t)) throw new o.ErrnoError(63);
        c.ops_table ||
          (c.ops_table = {
            dir: {
              node: {
                getattr: c.node_ops.getattr,
                setattr: c.node_ops.setattr,
                lookup: c.node_ops.lookup,
                mknod: c.node_ops.mknod,
                rename: c.node_ops.rename,
                unlink: c.node_ops.unlink,
                rmdir: c.node_ops.rmdir,
                readdir: c.node_ops.readdir,
                symlink: c.node_ops.symlink,
              },
              stream: { llseek: c.stream_ops.llseek },
            },
            file: {
              node: { getattr: c.node_ops.getattr, setattr: c.node_ops.setattr },
              stream: {
                llseek: c.stream_ops.llseek,
                read: c.stream_ops.read,
                write: c.stream_ops.write,
                mmap: c.stream_ops.mmap,
                msync: c.stream_ops.msync,
              },
            },
            link: {
              node: {
                getattr: c.node_ops.getattr,
                setattr: c.node_ops.setattr,
                readlink: c.node_ops.readlink,
              },
              stream: {},
            },
            chrdev: {
              node: { getattr: c.node_ops.getattr, setattr: c.node_ops.setattr },
              stream: o.chrdev_stream_ops,
            },
          });
        var i = o.createNode(r, e, t, n);
        return (
          o.isDir(i.mode)
            ? ((i.node_ops = c.ops_table.dir.node),
              (i.stream_ops = c.ops_table.dir.stream),
              (i.contents = {}))
            : o.isFile(i.mode)
              ? ((i.node_ops = c.ops_table.file.node),
                (i.stream_ops = c.ops_table.file.stream),
                (i.usedBytes = 0),
                (i.contents = c.emptyFileContents ?? (c.emptyFileContents = new Uint8Array(0))))
              : o.isLink(i.mode)
                ? ((i.node_ops = c.ops_table.link.node), (i.stream_ops = c.ops_table.link.stream))
                : o.isChrdev(i.mode) &&
                  ((i.node_ops = c.ops_table.chrdev.node),
                  (i.stream_ops = c.ops_table.chrdev.stream)),
          (i.atime = i.mtime = i.ctime = Date.now()),
          r && ((r.contents[e] = i), (r.atime = r.mtime = r.ctime = i.atime)),
          i
        );
      },
      getFileDataAsTypedArray(r) {
        return r.contents.subarray(0, r.usedBytes);
      },
      expandFileStorage(r, e) {
        var t = r.contents.length;
        if (!(t >= e)) {
          var n = 1024 * 1024;
          ((e = Math.max(e, (t * (t < n ? 2 : 1.125)) >>> 0)), t && (e = Math.max(e, 256)));
          var i = c.getFileDataAsTypedArray(r);
          ((r.contents = new Uint8Array(e)), r.contents.set(i));
        }
      },
      resizeFileStorage(r, e) {
        if (r.usedBytes != e) {
          var t = r.contents;
          ((r.contents = new Uint8Array(e)),
            r.contents.set(t.subarray(0, Math.min(e, r.usedBytes))),
            (r.usedBytes = e));
        }
      },
      node_ops: {
        getattr(r) {
          var e = {};
          return (
            (e.dev = o.isChrdev(r.mode) ? r.id : 1),
            (e.ino = r.id),
            (e.mode = r.mode),
            (e.nlink = 1),
            (e.uid = 0),
            (e.gid = 0),
            (e.rdev = r.rdev),
            o.isDir(r.mode)
              ? (e.size = 4096)
              : o.isFile(r.mode)
                ? (e.size = r.usedBytes)
                : o.isLink(r.mode)
                  ? (e.size = r.link.length)
                  : (e.size = 0),
            (e.atime = new Date(r.atime)),
            (e.mtime = new Date(r.mtime)),
            (e.ctime = new Date(r.ctime)),
            (e.blksize = 4096),
            (e.blocks = Math.ceil(e.size / e.blksize)),
            e
          );
        },
        setattr(r, e) {
          for (const t of ["mode", "atime", "mtime", "ctime"]) e[t] != null && (r[t] = e[t]);
          e.size !== void 0 && c.resizeFileStorage(r, e.size);
        },
        lookup(r, e) {
          throw (
            c.doesNotExistError ||
              ((c.doesNotExistError = new o.ErrnoError(44)),
              (c.doesNotExistError.stack = "<generic error, no stack>")),
            c.doesNotExistError
          );
        },
        mknod(r, e, t, n) {
          return c.createNode(r, e, t, n);
        },
        rename(r, e, t) {
          var n;
          try {
            n = o.lookupNode(e, t);
          } catch {}
          if (n) {
            if (o.isDir(r.mode)) for (var i in n.contents) throw new o.ErrnoError(55);
            o.hashRemoveNode(n);
          }
          (delete r.parent.contents[r.name],
            (e.contents[t] = r),
            (r.name = t),
            (e.ctime = e.mtime = r.parent.ctime = r.parent.mtime = Date.now()));
        },
        unlink(r, e) {
          (delete r.contents[e], (r.ctime = r.mtime = Date.now()));
        },
        rmdir(r, e) {
          var t = o.lookupNode(r, e);
          for (var n in t.contents) throw new o.ErrnoError(55);
          (delete r.contents[e], (r.ctime = r.mtime = Date.now()));
        },
        readdir(r) {
          return [".", "..", ...Object.keys(r.contents)];
        },
        symlink(r, e, t) {
          var n = c.createNode(r, e, 41471, 0);
          return ((n.link = t), n);
        },
        readlink(r) {
          if (!o.isLink(r.mode)) throw new o.ErrnoError(28);
          return r.link;
        },
      },
      stream_ops: {
        read(r, e, t, n, i) {
          var a = r.node.contents;
          if (i >= r.node.usedBytes) return 0;
          var s = Math.min(r.node.usedBytes - i, n);
          return (e.set(a.subarray(i, i + s), t), s);
        },
        write(r, e, t, n, i, a) {
          if ((e.buffer === A.buffer && (a = !1), !n)) return 0;
          var s = r.node;
          return (
            (s.mtime = s.ctime = Date.now()),
            a
              ? ((s.contents = e.subarray(t, t + n)), (s.usedBytes = n))
              : s.usedBytes === 0 && i === 0
                ? ((s.contents = e.slice(t, t + n)), (s.usedBytes = n))
                : (c.expandFileStorage(s, i + n),
                  s.contents.set(e.subarray(t, t + n), i),
                  (s.usedBytes = Math.max(s.usedBytes, i + n))),
            n
          );
        },
        llseek(r, e, t) {
          var n = e;
          if (
            (t === 1
              ? (n += r.position)
              : t === 2 && o.isFile(r.node.mode) && (n += r.node.usedBytes),
            n < 0)
          )
            throw new o.ErrnoError(28);
          return n;
        },
        mmap(r, e, t, n, i) {
          if (!o.isFile(r.node.mode)) throw new o.ErrnoError(43);
          var a,
            s,
            l = r.node.contents;
          if (!(i & 2) && l.buffer === A.buffer) ((s = !1), (a = l.byteOffset));
          else {
            if (((s = !0), (a = ne()), !a)) throw new o.ErrnoError(48);
            l &&
              ((t > 0 || t + e < l.length) &&
                (l.subarray
                  ? (l = l.subarray(t, t + e))
                  : (l = Array.prototype.slice.call(l, t, t + e))),
              A.set(l, a));
          }
          return { ptr: a, allocated: s };
        },
        msync(r, e, t, n, i) {
          return (c.stream_ops.write(r, e, 0, n, t, !1), 0);
        },
      },
    },
    Nt = (r) => {
      if (typeof r != "string") return r;
      var e = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
        t = e[r];
      if (typeof t > "u") throw new Error(`Unknown file open mode: ${r}`);
      return t;
    },
    oe = (r) => (typeof r == "string" && (r = Tr(r)), r.subarray || (r = new Uint8Array(r)), r),
    Fr = (r, e) => {
      var t = 0;
      return (r && (t |= 365), e && (t |= 146), t);
    },
    Ut = async (r) => {
      var e = await wr(r);
      return new Uint8Array(e);
    },
    Wt = (...r) => o.createDataFile(...r),
    H = 0,
    er = null,
    zt = (r) => {
      var t;
      if ((H--, (t = f.monitorRunDependencies) == null || t.call(f, H), H == 0 && er)) {
        var e = er;
        ((er = null), e());
      }
    },
    xt = (r) => {
      var e;
      (H++, (e = f.monitorRunDependencies) == null || e.call(f, H));
    },
    ie = [],
    It = async (r, e) => {
      typeof Browser < "u" && Browser.init();
      for (var t of ie) if (t.canHandle(e)) return t.handle(r, e);
      return r;
    },
    ae = async (r, e, t, n, i, a, s, l) => {
      var u = e ? K.resolve(y.join2(r, e)) : r;
      xt();
      try {
        var d = t;
        (typeof t == "string" && (d = await Ut(t)),
          (d = await It(d, u)),
          l == null || l(),
          a || Wt(r, e, d, n, i, s));
      } finally {
        zt();
      }
    },
    Ot = (r, e, t, n, i, a, s, l, u, d) => {
      ae(r, e, t, n, i, l, u, d).then(a).catch(s);
    },
    o = {
      root: null,
      mounts: [],
      devices: {},
      streams: [],
      nextInode: 1,
      nameTable: null,
      currentPath: "/",
      initialized: !1,
      ignorePermissions: !0,
      filesystems: null,
      syncFSRequests: 0,
      ErrnoError: class {
        constructor(r) {
          M(this, "name", "ErrnoError");
          this.errno = r;
        }
      },
      FSStream: class {
        constructor() {
          M(this, "shared", {});
        }
        get object() {
          return this.node;
        }
        set object(r) {
          this.node = r;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return this.flags & 1024;
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(r) {
          this.shared.flags = r;
        }
        get position() {
          return this.shared.position;
        }
        set position(r) {
          this.shared.position = r;
        }
      },
      FSNode: class {
        constructor(r, e, t, n) {
          M(this, "node_ops", {});
          M(this, "stream_ops", {});
          M(this, "readMode", 365);
          M(this, "writeMode", 146);
          M(this, "mounted", null);
          (r || (r = this),
            (this.parent = r),
            (this.mount = r.mount),
            (this.id = o.nextInode++),
            (this.name = e),
            (this.mode = t),
            (this.rdev = n),
            (this.atime = this.mtime = this.ctime = Date.now()));
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(r) {
          r ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(r) {
          r ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
        }
        get isFolder() {
          return o.isDir(this.mode);
        }
        get isDevice() {
          return o.isChrdev(this.mode);
        }
      },
      lookupPath(r, e = {}) {
        if (!r) throw new o.ErrnoError(44);
        (e.follow_mount ?? (e.follow_mount = !0), y.isAbs(r) || (r = o.cwd() + "/" + r));
        r: for (var t = 0; t < 40; t++) {
          for (
            var n = r.split("/").filter((d) => !!d), i = o.root, a = "/", s = 0;
            s < n.length;
            s++
          ) {
            var l = s === n.length - 1;
            if (l && e.parent) break;
            if (n[s] !== ".") {
              if (n[s] === "..") {
                if (((a = y.dirname(a)), o.isRoot(i))) {
                  ((r = a + "/" + n.slice(s + 1).join("/")), t--);
                  continue r;
                } else i = i.parent;
                continue;
              }
              a = y.join2(a, n[s]);
              try {
                i = o.lookupNode(i, n[s]);
              } catch (d) {
                if ((d == null ? void 0 : d.errno) === 44 && l && e.noent_okay) return { path: a };
                throw d;
              }
              if (
                (o.isMountpoint(i) && (!l || e.follow_mount) && (i = i.mounted.root),
                o.isLink(i.mode) && (!l || e.follow))
              ) {
                if (!i.node_ops.readlink) throw new o.ErrnoError(52);
                var u = i.node_ops.readlink(i);
                (y.isAbs(u) || (u = y.dirname(a) + "/" + u),
                  (r = u + "/" + n.slice(s + 1).join("/")));
                continue r;
              }
            }
          }
          return { path: a, node: i };
        }
        throw new o.ErrnoError(32);
      },
      getPath(r) {
        for (var e; ;) {
          if (o.isRoot(r)) {
            var t = r.mount.mountpoint;
            return e ? (t[t.length - 1] !== "/" ? `${t}/${e}` : t + e) : t;
          }
          ((e = e ? `${r.name}/${e}` : r.name), (r = r.parent));
        }
      },
      hashName(r, e) {
        for (var t = 0, n = 0; n < e.length; n++) t = ((t << 5) - t + e.charCodeAt(n)) | 0;
        return ((r + t) >>> 0) % o.nameTable.length;
      },
      hashAddNode(r) {
        var e = o.hashName(r.parent.id, r.name);
        ((r.name_next = o.nameTable[e]), (o.nameTable[e] = r));
      },
      hashRemoveNode(r) {
        var e = o.hashName(r.parent.id, r.name);
        if (o.nameTable[e] === r) o.nameTable[e] = r.name_next;
        else
          for (var t = o.nameTable[e]; t;) {
            if (t.name_next === r) {
              t.name_next = r.name_next;
              break;
            }
            t = t.name_next;
          }
      },
      lookupNode(r, e) {
        var t = o.mayLookup(r);
        if (t) throw new o.ErrnoError(t);
        for (var n = o.hashName(r.id, e), i = o.nameTable[n]; i; i = i.name_next) {
          var a = i.name;
          if (i.parent.id === r.id && a === e) return i;
        }
        return o.lookup(r, e);
      },
      createNode(r, e, t, n) {
        var i = new o.FSNode(r, e, t, n);
        return (o.hashAddNode(i), i);
      },
      destroyNode(r) {
        o.hashRemoveNode(r);
      },
      isRoot(r) {
        return r === r.parent;
      },
      isMountpoint(r) {
        return !!r.mounted;
      },
      isFile(r) {
        return (r & 61440) === 32768;
      },
      isDir(r) {
        return (r & 61440) === 16384;
      },
      isLink(r) {
        return (r & 61440) === 40960;
      },
      isChrdev(r) {
        return (r & 61440) === 8192;
      },
      isBlkdev(r) {
        return (r & 61440) === 24576;
      },
      isFIFO(r) {
        return (r & 61440) === 4096;
      },
      isSocket(r) {
        return (r & 49152) === 49152;
      },
      flagsToPermissionString(r) {
        var e = ["r", "w", "rw"][r & 3];
        return (r & 512 && (e += "w"), e);
      },
      nodePermissions(r, e) {
        return o.ignorePermissions
          ? 0
          : (e.includes("r") && !(r.mode & 292)) ||
              (e.includes("w") && !(r.mode & 146)) ||
              (e.includes("x") && !(r.mode & 73))
            ? 2
            : 0;
      },
      mayLookup(r) {
        if (!o.isDir(r.mode)) return 54;
        var e = o.nodePermissions(r, "x");
        return e || (r.node_ops.lookup ? 0 : 2);
      },
      mayCreate(r, e) {
        if (!o.isDir(r.mode)) return 54;
        try {
          var t = o.lookupNode(r, e);
          return 20;
        } catch {}
        return o.nodePermissions(r, "wx");
      },
      mayDelete(r, e, t) {
        var n;
        try {
          n = o.lookupNode(r, e);
        } catch (a) {
          return a.errno;
        }
        var i = o.nodePermissions(r, "wx");
        if (i) return i;
        if (t) {
          if (!o.isDir(n.mode)) return 54;
          if (o.isRoot(n) || o.getPath(n) === o.cwd()) return 10;
        } else if (o.isDir(n.mode)) return 31;
        return 0;
      },
      mayOpen(r, e) {
        if (!r) return 44;
        if (o.isLink(r.mode)) return 32;
        var t = o.flagsToPermissionString(e);
        return o.isDir(r.mode) && (t !== "r" || e & 576) ? 31 : o.nodePermissions(r, t);
      },
      checkOpExists(r, e) {
        if (!r) throw new o.ErrnoError(e);
        return r;
      },
      MAX_OPEN_FDS: 4096,
      nextfd() {
        for (var r = 0; r <= o.MAX_OPEN_FDS; r++) if (!o.streams[r]) return r;
        throw new o.ErrnoError(33);
      },
      getStreamChecked(r) {
        var e = o.getStream(r);
        if (!e) throw new o.ErrnoError(8);
        return e;
      },
      getStream: (r) => o.streams[r],
      createStream(r, e = -1) {
        return (
          (r = Object.assign(new o.FSStream(), r)),
          e == -1 && (e = o.nextfd()),
          (r.fd = e),
          (o.streams[e] = r),
          r
        );
      },
      closeStream(r) {
        o.streams[r] = null;
      },
      dupStream(r, e = -1) {
        var n, i;
        var t = o.createStream(r, e);
        return ((i = (n = t.stream_ops) == null ? void 0 : n.dup) == null || i.call(n, t), t);
      },
      doSetAttr(r, e, t) {
        var n = r == null ? void 0 : r.stream_ops.setattr,
          i = n ? r : e;
        (n ?? (n = e.node_ops.setattr), o.checkOpExists(n, 63), n(i, t));
      },
      chrdev_stream_ops: {
        open(r) {
          var t, n;
          var e = o.getDevice(r.node.rdev);
          ((r.stream_ops = e.stream_ops), (n = (t = r.stream_ops).open) == null || n.call(t, r));
        },
        llseek() {
          throw new o.ErrnoError(70);
        },
      },
      major: (r) => r >> 8,
      minor: (r) => r & 255,
      makedev: (r, e) => (r << 8) | e,
      registerDevice(r, e) {
        o.devices[r] = { stream_ops: e };
      },
      getDevice: (r) => o.devices[r],
      getMounts(r) {
        for (var e = [], t = [r]; t.length;) {
          var n = t.pop();
          (e.push(n), t.push(...n.mounts));
        }
        return e;
      },
      syncfs(r, e) {
        (typeof r == "function" && ((e = r), (r = !1)),
          o.syncFSRequests++,
          o.syncFSRequests > 1 &&
            U(
              `warning: ${o.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`,
            ));
        var t = o.getMounts(o.root.mount),
          n = 0;
        function i(l) {
          return (o.syncFSRequests--, e(l));
        }
        function a(l) {
          if (l) return a.errored ? void 0 : ((a.errored = !0), i(l));
          ++n >= t.length && i(null);
        }
        for (var s of t) s.type.syncfs ? s.type.syncfs(s, r, a) : a(null);
      },
      mount(r, e, t) {
        var n = t === "/",
          i = !t,
          a;
        if (n && o.root) throw new o.ErrnoError(10);
        if (!n && !i) {
          var s = o.lookupPath(t, { follow_mount: !1 });
          if (((t = s.path), (a = s.node), o.isMountpoint(a))) throw new o.ErrnoError(10);
          if (!o.isDir(a.mode)) throw new o.ErrnoError(54);
        }
        var l = { type: r, opts: e, mountpoint: t, mounts: [] },
          u = r.mount(l);
        return (
          (u.mount = l),
          (l.root = u),
          n ? (o.root = u) : a && ((a.mounted = l), a.mount && a.mount.mounts.push(l)),
          u
        );
      },
      unmount(r) {
        var e = o.lookupPath(r, { follow_mount: !1 });
        if (!o.isMountpoint(e.node)) throw new o.ErrnoError(28);
        var t = e.node,
          n = t.mounted,
          i = o.getMounts(n);
        for (var [a, s] of Object.entries(o.nameTable))
          for (; s;) {
            var l = s.name_next;
            (i.includes(s.mount) && o.destroyNode(s), (s = l));
          }
        t.mounted = null;
        var u = t.mount.mounts.indexOf(n);
        t.mount.mounts.splice(u, 1);
      },
      lookup(r, e) {
        return r.node_ops.lookup(r, e);
      },
      mknod(r, e, t) {
        var n = o.lookupPath(r, { parent: !0 }),
          i = n.node,
          a = y.basename(r);
        if (!a) throw new o.ErrnoError(28);
        if (a === "." || a === "..") throw new o.ErrnoError(20);
        var s = o.mayCreate(i, a);
        if (s) throw new o.ErrnoError(s);
        if (!i.node_ops.mknod) throw new o.ErrnoError(63);
        return i.node_ops.mknod(i, a, e, t);
      },
      statfs(r) {
        return o.statfsNode(o.lookupPath(r, { follow: !0 }).node);
      },
      statfsStream(r) {
        return o.statfsNode(r.node);
      },
      statfsNode(r) {
        var e = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: o.nextInode,
          ffree: o.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255,
        };
        return (r.node_ops.statfs && Object.assign(e, r.node_ops.statfs(r.mount.opts.root)), e);
      },
      create(r, e = 438) {
        return ((e &= 4095), (e |= 32768), o.mknod(r, e, 0));
      },
      mkdir(r, e = 511) {
        return ((e &= 1023), (e |= 16384), o.mknod(r, e, 0));
      },
      mkdirTree(r, e) {
        var t = r.split("/"),
          n = "";
        for (var i of t)
          if (i) {
            ((n || y.isAbs(r)) && (n += "/"), (n += i));
            try {
              o.mkdir(n, e);
            } catch (a) {
              if (a.errno != 20) throw a;
            }
          }
      },
      mkdev(r, e, t) {
        return (typeof t > "u" && ((t = e), (e = 438)), (e |= 8192), o.mknod(r, e, t));
      },
      symlink(r, e) {
        if (!K.resolve(r)) throw new o.ErrnoError(44);
        var t = o.lookupPath(e, { parent: !0 }),
          n = t.node;
        if (!n) throw new o.ErrnoError(44);
        var i = y.basename(e),
          a = o.mayCreate(n, i);
        if (a) throw new o.ErrnoError(a);
        if (!n.node_ops.symlink) throw new o.ErrnoError(63);
        return n.node_ops.symlink(n, i, r);
      },
      rename(r, e) {
        var t = y.dirname(r),
          n = y.dirname(e),
          i = y.basename(r),
          a = y.basename(e),
          s,
          l,
          u;
        if (
          ((s = o.lookupPath(r, { parent: !0 })),
          (l = s.node),
          (s = o.lookupPath(e, { parent: !0 })),
          (u = s.node),
          !l || !u)
        )
          throw new o.ErrnoError(44);
        if (l.mount !== u.mount) throw new o.ErrnoError(75);
        var d = o.lookupNode(l, i),
          v = K.relative(r, n);
        if (v.charAt(0) !== ".") throw new o.ErrnoError(28);
        if (((v = K.relative(e, t)), v.charAt(0) !== ".")) throw new o.ErrnoError(55);
        var h;
        try {
          h = o.lookupNode(u, a);
        } catch {}
        if (d !== h) {
          var p = o.isDir(d.mode),
            m = o.mayDelete(l, i, p);
          if (m) throw new o.ErrnoError(m);
          if (((m = h ? o.mayDelete(u, a, p) : o.mayCreate(u, a)), m)) throw new o.ErrnoError(m);
          if (!l.node_ops.rename) throw new o.ErrnoError(63);
          if (o.isMountpoint(d) || (h && o.isMountpoint(h))) throw new o.ErrnoError(10);
          if (u !== l && ((m = o.nodePermissions(l, "w")), m)) throw new o.ErrnoError(m);
          o.hashRemoveNode(d);
          try {
            (l.node_ops.rename(d, u, a), (d.parent = u));
          } catch (g) {
            throw g;
          } finally {
            o.hashAddNode(d);
          }
        }
      },
      rmdir(r) {
        var e = o.lookupPath(r, { parent: !0 }),
          t = e.node,
          n = y.basename(r),
          i = o.lookupNode(t, n),
          a = o.mayDelete(t, n, !0);
        if (a) throw new o.ErrnoError(a);
        if (!t.node_ops.rmdir) throw new o.ErrnoError(63);
        if (o.isMountpoint(i)) throw new o.ErrnoError(10);
        (t.node_ops.rmdir(t, n), o.destroyNode(i));
      },
      readdir(r) {
        var e = o.lookupPath(r, { follow: !0 }),
          t = e.node,
          n = o.checkOpExists(t.node_ops.readdir, 54);
        return n(t);
      },
      unlink(r) {
        var e = o.lookupPath(r, { parent: !0 }),
          t = e.node;
        if (!t) throw new o.ErrnoError(44);
        var n = y.basename(r),
          i = o.lookupNode(t, n),
          a = o.mayDelete(t, n, !1);
        if (a) throw new o.ErrnoError(a);
        if (!t.node_ops.unlink) throw new o.ErrnoError(63);
        if (o.isMountpoint(i)) throw new o.ErrnoError(10);
        (t.node_ops.unlink(t, n), o.destroyNode(i));
      },
      readlink(r) {
        var e = o.lookupPath(r),
          t = e.node;
        if (!t) throw new o.ErrnoError(44);
        if (!t.node_ops.readlink) throw new o.ErrnoError(28);
        return t.node_ops.readlink(t);
      },
      stat(r, e) {
        var t = o.lookupPath(r, { follow: !e }),
          n = t.node,
          i = o.checkOpExists(n.node_ops.getattr, 63);
        return i(n);
      },
      fstat(r) {
        var e = o.getStreamChecked(r),
          t = e.node,
          n = e.stream_ops.getattr,
          i = n ? e : t;
        return (n ?? (n = t.node_ops.getattr), o.checkOpExists(n, 63), n(i));
      },
      lstat(r) {
        return o.stat(r, !0);
      },
      doChmod(r, e, t, n) {
        o.doSetAttr(r, e, {
          mode: (t & 4095) | (e.mode & -4096),
          ctime: Date.now(),
          dontFollow: n,
        });
      },
      chmod(r, e, t) {
        var n;
        if (typeof r == "string") {
          var i = o.lookupPath(r, { follow: !t });
          n = i.node;
        } else n = r;
        o.doChmod(null, n, e, t);
      },
      lchmod(r, e) {
        o.chmod(r, e, !0);
      },
      fchmod(r, e) {
        var t = o.getStreamChecked(r);
        o.doChmod(t, t.node, e, !1);
      },
      doChown(r, e, t) {
        o.doSetAttr(r, e, { timestamp: Date.now(), dontFollow: t });
      },
      chown(r, e, t, n) {
        var i;
        if (typeof r == "string") {
          var a = o.lookupPath(r, { follow: !n });
          i = a.node;
        } else i = r;
        o.doChown(null, i, n);
      },
      lchown(r, e, t) {
        o.chown(r, e, t, !0);
      },
      fchown(r, e, t) {
        var n = o.getStreamChecked(r);
        o.doChown(n, n.node, !1);
      },
      doTruncate(r, e, t) {
        if (o.isDir(e.mode)) throw new o.ErrnoError(31);
        if (!o.isFile(e.mode)) throw new o.ErrnoError(28);
        var n = o.nodePermissions(e, "w");
        if (n) throw new o.ErrnoError(n);
        o.doSetAttr(r, e, { size: t, timestamp: Date.now() });
      },
      truncate(r, e) {
        if (e < 0) throw new o.ErrnoError(28);
        var t;
        if (typeof r == "string") {
          var n = o.lookupPath(r, { follow: !0 });
          t = n.node;
        } else t = r;
        o.doTruncate(null, t, e);
      },
      ftruncate(r, e) {
        var t = o.getStreamChecked(r);
        if (e < 0 || (t.flags & 2097155) === 0) throw new o.ErrnoError(28);
        o.doTruncate(t, t.node, e);
      },
      utime(r, e, t) {
        var n = o.lookupPath(r, { follow: !0 }),
          i = n.node,
          a = o.checkOpExists(i.node_ops.setattr, 63);
        a(i, { atime: e, mtime: t });
      },
      open(r, e, t = 438) {
        if (r === "") throw new o.ErrnoError(44);
        ((e = Nt(e)), e & 64 ? (t = (t & 4095) | 32768) : (t = 0));
        var n, i;
        if (typeof r == "object") n = r;
        else {
          i = r.endsWith("/");
          var a = o.lookupPath(r, { follow: !(e & 131072), noent_okay: !0 });
          ((n = a.node), (r = a.path));
        }
        var s = !1;
        if (e & 64)
          if (n) {
            if (e & 128) throw new o.ErrnoError(20);
          } else {
            if (i) throw new o.ErrnoError(31);
            ((n = o.mknod(r, t | 511, 0)), (s = !0));
          }
        if (!n) throw new o.ErrnoError(44);
        if ((o.isChrdev(n.mode) && (e &= -513), e & 65536 && !o.isDir(n.mode)))
          throw new o.ErrnoError(54);
        if (!s) {
          var l = o.mayOpen(n, e);
          if (l) throw new o.ErrnoError(l);
        }
        (e & 512 && !s && o.truncate(n, 0), (e &= -131713));
        var u = o.createStream({
          node: n,
          path: o.getPath(n),
          flags: e,
          seekable: !0,
          position: 0,
          stream_ops: n.stream_ops,
          ungotten: [],
          error: !1,
        });
        return (u.stream_ops.open && u.stream_ops.open(u), s && o.chmod(n, t & 511), u);
      },
      close(r) {
        if (o.isClosed(r)) throw new o.ErrnoError(8);
        r.getdents && (r.getdents = null);
        try {
          r.stream_ops.close && r.stream_ops.close(r);
        } catch (e) {
          throw e;
        } finally {
          o.closeStream(r.fd);
        }
        r.fd = null;
      },
      isClosed(r) {
        return r.fd === null;
      },
      llseek(r, e, t) {
        if (o.isClosed(r)) throw new o.ErrnoError(8);
        if (!r.seekable || !r.stream_ops.llseek) throw new o.ErrnoError(70);
        if (t != 0 && t != 1 && t != 2) throw new o.ErrnoError(28);
        return ((r.position = r.stream_ops.llseek(r, e, t)), (r.ungotten = []), r.position);
      },
      read(r, e, t, n, i) {
        if (n < 0 || i < 0) throw new o.ErrnoError(28);
        if (o.isClosed(r)) throw new o.ErrnoError(8);
        if ((r.flags & 2097155) === 1) throw new o.ErrnoError(8);
        if (o.isDir(r.node.mode)) throw new o.ErrnoError(31);
        if (!r.stream_ops.read) throw new o.ErrnoError(28);
        var a = typeof i < "u";
        if (!a) i = r.position;
        else if (!r.seekable) throw new o.ErrnoError(70);
        var s = r.stream_ops.read(r, e, t, n, i);
        return (a || (r.position += s), s);
      },
      write(r, e, t, n, i, a) {
        if (n < 0 || i < 0) throw new o.ErrnoError(28);
        if (o.isClosed(r)) throw new o.ErrnoError(8);
        if ((r.flags & 2097155) === 0) throw new o.ErrnoError(8);
        if (o.isDir(r.node.mode)) throw new o.ErrnoError(31);
        if (!r.stream_ops.write) throw new o.ErrnoError(28);
        r.seekable && r.flags & 1024 && o.llseek(r, 0, 2);
        var s = typeof i < "u";
        if (!s) i = r.position;
        else if (!r.seekable) throw new o.ErrnoError(70);
        var l = r.stream_ops.write(r, e, t, n, i, a);
        return (s || (r.position += l), l);
      },
      mmap(r, e, t, n, i) {
        if ((n & 2) !== 0 && (i & 2) === 0 && (r.flags & 2097155) !== 2) throw new o.ErrnoError(2);
        if ((r.flags & 2097155) === 1) throw new o.ErrnoError(2);
        if (!r.stream_ops.mmap) throw new o.ErrnoError(43);
        if (!e) throw new o.ErrnoError(28);
        return r.stream_ops.mmap(r, e, t, n, i);
      },
      msync(r, e, t, n, i) {
        return r.stream_ops.msync ? r.stream_ops.msync(r, e, t, n, i) : 0;
      },
      ioctl(r, e, t) {
        if (!r.stream_ops.ioctl) throw new o.ErrnoError(59);
        return r.stream_ops.ioctl(r, e, t);
      },
      readFile(r, e = {}) {
        ((e.flags = e.flags || 0),
          (e.encoding = e.encoding || "binary"),
          e.encoding !== "utf8" &&
            e.encoding !== "binary" &&
            C(`Invalid encoding type "${e.encoding}"`));
        var t = o.open(r, e.flags),
          n = o.stat(r),
          i = n.size,
          a = new Uint8Array(i);
        return (o.read(t, a, 0, i, 0), e.encoding === "utf8" && (a = G(a)), o.close(t), a);
      },
      writeFile(r, e, t = {}) {
        t.flags = t.flags || 577;
        var n = o.open(r, t.flags, t.mode);
        ((e = oe(e)), o.write(n, e, 0, e.byteLength, void 0, t.canOwn), o.close(n));
      },
      cwd: () => o.currentPath,
      chdir(r) {
        var e = o.lookupPath(r, { follow: !0 });
        if (e.node === null) throw new o.ErrnoError(44);
        if (!o.isDir(e.node.mode)) throw new o.ErrnoError(54);
        var t = o.nodePermissions(e.node, "x");
        if (t) throw new o.ErrnoError(t);
        o.currentPath = e.path;
      },
      createDefaultDirectories() {
        (o.mkdir("/tmp"), o.mkdir("/home"), o.mkdir("/home/web_user"));
      },
      createDefaultDevices() {
        (o.mkdir("/dev"),
          o.registerDevice(o.makedev(1, 3), {
            read: () => 0,
            write: (n, i, a, s, l) => s,
            llseek: () => 0,
          }),
          o.mkdev("/dev/null", o.makedev(1, 3)),
          j.register(o.makedev(5, 0), j.default_tty_ops),
          j.register(o.makedev(6, 0), j.default_tty1_ops),
          o.mkdev("/dev/tty", o.makedev(5, 0)),
          o.mkdev("/dev/tty1", o.makedev(6, 0)));
        var r = new Uint8Array(1024),
          e = 0,
          t = () => (e === 0 && (te(r), (e = r.byteLength)), r[--e]);
        (o.createDevice("/dev", "random", t),
          o.createDevice("/dev", "urandom", t),
          o.mkdir("/dev/shm"),
          o.mkdir("/dev/shm/tmp"));
      },
      createSpecialDirectories() {
        o.mkdir("/proc");
        var r = o.mkdir("/proc/self");
        (o.mkdir("/proc/self/fd"),
          o.mount(
            {
              mount() {
                var e = o.createNode(r, "fd", 16895, 73);
                return (
                  (e.stream_ops = { llseek: c.stream_ops.llseek }),
                  (e.node_ops = {
                    lookup(t, n) {
                      var i = +n,
                        a = o.getStreamChecked(i),
                        s = {
                          parent: null,
                          mount: { mountpoint: "fake" },
                          node_ops: { readlink: () => a.path },
                          id: i + 1,
                        };
                      return ((s.parent = s), s);
                    },
                    readdir() {
                      return Array.from(o.streams.entries())
                        .filter(([t, n]) => n)
                        .map(([t, n]) => t.toString());
                    },
                  }),
                  e
                );
              },
            },
            {},
            "/proc/self/fd",
          ));
      },
      createStandardStreams(r, e, t) {
        (r ? o.createDevice("/dev", "stdin", r) : o.symlink("/dev/tty", "/dev/stdin"),
          e ? o.createDevice("/dev", "stdout", null, e) : o.symlink("/dev/tty", "/dev/stdout"),
          t ? o.createDevice("/dev", "stderr", null, t) : o.symlink("/dev/tty1", "/dev/stderr"),
          o.open("/dev/stdin", 0),
          o.open("/dev/stdout", 1),
          o.open("/dev/stderr", 1));
      },
      staticInit() {
        ((o.nameTable = new Array(4096)),
          o.mount(c, {}, "/"),
          o.createDefaultDirectories(),
          o.createDefaultDevices(),
          o.createSpecialDirectories(),
          (o.filesystems = { MEMFS: c }));
      },
      init(r, e, t) {
        ((o.initialized = !0),
          r ?? (r = f.stdin),
          e ?? (e = f.stdout),
          t ?? (t = f.stderr),
          o.createStandardStreams(r, e, t));
      },
      quit() {
        o.initialized = !1;
        for (var r of o.streams) r && o.close(r);
      },
      findObject(r, e) {
        var t = o.analyzePath(r, e);
        return t.exists ? t.object : null;
      },
      analyzePath(r, e) {
        try {
          var t = o.lookupPath(r, { follow: !e });
          r = t.path;
        } catch {}
        var n = {
          isRoot: !1,
          exists: !1,
          error: 0,
          name: null,
          path: null,
          object: null,
          parentExists: !1,
          parentPath: null,
          parentObject: null,
        };
        try {
          var t = o.lookupPath(r, { parent: !0 });
          ((n.parentExists = !0),
            (n.parentPath = t.path),
            (n.parentObject = t.node),
            (n.name = y.basename(r)),
            (t = o.lookupPath(r, { follow: !e })),
            (n.exists = !0),
            (n.path = t.path),
            (n.object = t.node),
            (n.name = t.node.name),
            (n.isRoot = t.path === "/"));
        } catch (i) {
          n.error = i.errno;
        }
        return n;
      },
      createPath(r, e, t, n) {
        r = typeof r == "string" ? r : o.getPath(r);
        for (var i = e.split("/").reverse(); i.length;) {
          var a = i.pop();
          if (a) {
            var s = y.join2(r, a);
            try {
              o.mkdir(s);
            } catch (l) {
              if (l.errno != 20) throw l;
            }
            r = s;
          }
        }
        return s;
      },
      createFile(r, e, t, n, i) {
        var a = y.join2(typeof r == "string" ? r : o.getPath(r), e),
          s = Fr(n, i);
        return o.create(a, s);
      },
      createDataFile(r, e, t, n, i, a) {
        var s = e;
        r && ((r = typeof r == "string" ? r : o.getPath(r)), (s = e ? y.join2(r, e) : r));
        var l = Fr(n, i),
          u = o.create(s, l);
        if (t) {
          ((t = oe(t)), o.chmod(u, l | 146));
          var d = o.open(u, 577);
          (o.write(d, t, 0, t.length, 0, a), o.close(d), o.chmod(u, l));
        }
      },
      createDevice(r, e, t, n) {
        var l;
        var i = y.join2(typeof r == "string" ? r : o.getPath(r), e),
          a = Fr(!!t, !!n);
        (l = o.createDevice).major ?? (l.major = 64);
        var s = o.makedev(o.createDevice.major++, 0);
        return (
          o.registerDevice(s, {
            open(u) {
              u.seekable = !1;
            },
            close(u) {
              var d;
              (d = n == null ? void 0 : n.buffer) != null && d.length && n(10);
            },
            read(u, d, v, h, p) {
              for (var m = 0, g = 0; g < h; g++) {
                var _;
                try {
                  _ = t();
                } catch {
                  throw new o.ErrnoError(29);
                }
                if (_ === void 0 && m === 0) throw new o.ErrnoError(6);
                if (_ == null) break;
                (m++, (d[v + g] = _));
              }
              return (m && (u.node.atime = Date.now()), m);
            },
            write(u, d, v, h, p) {
              for (var m = 0; m < h; m++)
                try {
                  n(d[v + m]);
                } catch {
                  throw new o.ErrnoError(29);
                }
              return (h && (u.node.mtime = u.node.ctime = Date.now()), m);
            },
          }),
          o.mkdev(i, a, s)
        );
      },
      forceLoadFile(r) {
        if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
        if (globalThis.XMLHttpRequest)
          C(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
          );
        else
          try {
            r.contents = he(r.url);
          } catch {
            throw new o.ErrnoError(29);
          }
      },
      createLazyFile(r, e, t, n, i) {
        class a {
          constructor() {
            M(this, "lengthKnown", !1);
            M(this, "chunks", []);
          }
          get(p) {
            if (!(p > this.length - 1 || p < 0)) {
              var m = p % this.chunkSize,
                g = (p / this.chunkSize) | 0;
              return this.getter(g)[m];
            }
          }
          setDataGetter(p) {
            this.getter = p;
          }
          cacheLength() {
            var p = new XMLHttpRequest();
            (p.open("HEAD", t, !1),
              p.send(null),
              (p.status >= 200 && p.status < 300) ||
                p.status === 304 ||
                C("Couldn't load " + t + ". Status: " + p.status));
            var m = Number(p.getResponseHeader("Content-length")),
              g,
              _ = (g = p.getResponseHeader("Accept-Ranges")) && g === "bytes",
              E = (g = p.getResponseHeader("Content-Encoding")) && g === "gzip",
              k = 1024 * 1024;
            _ || (k = m);
            var F = (b, x) => {
                (b > x && C("invalid range (" + b + ", " + x + ") or no bytes requested!"),
                  x > m - 1 && C("only " + m + " bytes available! programmer error!"));
                var T = new XMLHttpRequest();
                return (
                  T.open("GET", t, !1),
                  m !== k && T.setRequestHeader("Range", "bytes=" + b + "-" + x),
                  (T.responseType = "arraybuffer"),
                  T.overrideMimeType && T.overrideMimeType("text/plain; charset=x-user-defined"),
                  T.send(null),
                  (T.status >= 200 && T.status < 300) ||
                    T.status === 304 ||
                    C("Couldn't load " + t + ". Status: " + T.status),
                  T.response !== void 0
                    ? new Uint8Array(T.response || [])
                    : Tr(T.responseText || "")
                );
              },
              L = this;
            (L.setDataGetter((b) => {
              var x = b * k,
                T = (b + 1) * k - 1;
              return (
                (T = Math.min(T, m - 1)),
                typeof L.chunks[b] > "u" && (L.chunks[b] = F(x, T)),
                typeof L.chunks[b] > "u" && C("doXHR failed!"),
                L.chunks[b]
              );
            }),
              (E || !m) &&
                ((k = m = 1),
                (m = this.getter(0).length),
                (k = m),
                ir("LazyFiles on gzip forces download of the whole file when length is accessed")),
              (this._length = m),
              (this._chunkSize = k),
              (this.lengthKnown = !0));
          }
          get length() {
            return (this.lengthKnown || this.cacheLength(), this._length);
          }
          get chunkSize() {
            return (this.lengthKnown || this.cacheLength(), this._chunkSize);
          }
        }
        if (globalThis.XMLHttpRequest) {
          C(
            "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc",
          );
          var s = new a(),
            l = { isDevice: !1, contents: s };
        } else var l = { isDevice: !1, url: t };
        var u = o.createFile(r, e, l, n, i);
        (l.contents ? (u.contents = l.contents) : l.url && ((u.contents = null), (u.url = l.url)),
          Object.defineProperties(u, {
            usedBytes: {
              get: function () {
                return this.contents.length;
              },
            },
          }));
        var d = {};
        for (const [h, p] of Object.entries(u.stream_ops))
          d[h] = (...m) => (o.forceLoadFile(u), p(...m));
        function v(h, p, m, g, _) {
          var E = h.node.contents;
          if (_ >= E.length) return 0;
          var k = Math.min(E.length - _, g);
          if (E.slice) for (var F = 0; F < k; F++) p[m + F] = E[_ + F];
          else for (var F = 0; F < k; F++) p[m + F] = E.get(_ + F);
          return k;
        }
        return (
          (d.read = (h, p, m, g, _) => (o.forceLoadFile(u), v(h, p, m, g, _))),
          (d.mmap = (h, p, m, g, _) => {
            o.forceLoadFile(u);
            var E = ne();
            if (!E) throw new o.ErrnoError(48);
            return (v(h, A, E, p, m), { ptr: E, allocated: !0 });
          }),
          (u.stream_ops = d),
          u
        );
      },
    },
    tr = {
      calculateAt(r, e, t) {
        if (y.isAbs(e)) return e;
        var n;
        if (r === -100) n = o.cwd();
        else {
          var i = tr.getStreamFromFD(r);
          n = i.path;
        }
        if (e.length == 0) {
          if (!t) throw new o.ErrnoError(44);
          return n;
        }
        return n + "/" + e;
      },
      writeStat(r, e) {
        ((w[r >> 2] = e.dev),
          (w[(r + 4) >> 2] = e.mode),
          (w[(r + 8) >> 2] = e.nlink),
          (w[(r + 12) >> 2] = e.uid),
          (w[(r + 16) >> 2] = e.gid),
          (w[(r + 20) >> 2] = e.rdev),
          (S[(r + 24) >> 3] = BigInt(e.size)),
          (W[(r + 32) >> 2] = 4096),
          (W[(r + 36) >> 2] = e.blocks));
        var t = e.atime.getTime(),
          n = e.mtime.getTime(),
          i = e.ctime.getTime();
        return (
          (S[(r + 40) >> 3] = BigInt(Math.floor(t / 1e3))),
          (w[(r + 48) >> 2] = (t % 1e3) * 1e3 * 1e3),
          (S[(r + 56) >> 3] = BigInt(Math.floor(n / 1e3))),
          (w[(r + 64) >> 2] = (n % 1e3) * 1e3 * 1e3),
          (S[(r + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
          (w[(r + 80) >> 2] = (i % 1e3) * 1e3 * 1e3),
          (S[(r + 88) >> 3] = BigInt(e.ino)),
          0
        );
      },
      writeStatFs(r, e) {
        ((w[(r + 4) >> 2] = e.bsize),
          (w[(r + 60) >> 2] = e.bsize),
          (S[(r + 8) >> 3] = BigInt(e.blocks)),
          (S[(r + 16) >> 3] = BigInt(e.bfree)),
          (S[(r + 24) >> 3] = BigInt(e.bavail)),
          (S[(r + 32) >> 3] = BigInt(e.files)),
          (S[(r + 40) >> 3] = BigInt(e.ffree)),
          (w[(r + 48) >> 2] = e.fsid),
          (w[(r + 64) >> 2] = e.flags),
          (w[(r + 56) >> 2] = e.namelen));
      },
      doMsync(r, e, t, n, i) {
        if (!o.isFile(e.node.mode)) throw new o.ErrnoError(43);
        if (n & 2) return 0;
        var a = N.slice(r, r + t);
        o.msync(e, a, i, t, n);
      },
      getStreamFromFD(r) {
        var e = o.getStreamChecked(r);
        return e;
      },
      varargs: void 0,
      getStr(r) {
        var e = Er(r);
        return e;
      },
    };
  function $t(r) {
    try {
      var e = tr.getStreamFromFD(r);
      return (o.close(e), 0);
    } catch (t) {
      if (typeof o > "u" || t.name !== "ErrnoError") throw t;
      return t.errno;
    }
  }
  var jt = (r, e, t, n) => {
    for (var i = 0, a = 0; a < t; a++) {
      var s = w[e >> 2],
        l = w[(e + 4) >> 2];
      e += 8;
      var u = o.read(r, A, s, l, n);
      if (u < 0) return -1;
      if (((i += u), u < l)) break;
    }
    return i;
  };
  function Ht(r, e, t, n) {
    try {
      var i = tr.getStreamFromFD(r),
        a = jt(i, e, t);
      return ((w[n >> 2] = a), 0);
    } catch (s) {
      if (typeof o > "u" || s.name !== "ErrnoError") throw s;
      return s.errno;
    }
  }
  var Lt = 9007199254740992,
    Vt = -9007199254740992,
    qt = (r) => (r < Vt || r > Lt ? NaN : Number(r));
  function Xt(r, e, t, n) {
    e = qt(e);
    try {
      if (isNaN(e)) return 61;
      var i = tr.getStreamFromFD(r);
      return (
        o.llseek(i, e, t),
        (S[n >> 3] = BigInt(i.position)),
        i.getdents && e === 0 && t === 0 && (i.getdents = null),
        0
      );
    } catch (a) {
      if (typeof o > "u" || a.name !== "ErrnoError") throw a;
      return a.errno;
    }
  }
  var Gt = (r, e, t, n) => {
    for (var i = 0, a = 0; a < t; a++) {
      var s = w[e >> 2],
        l = w[(e + 4) >> 2];
      e += 8;
      var u = o.write(r, A, s, l, n);
      if (u < 0) return -1;
      if (((i += u), u < l)) break;
    }
    return i;
  };
  function Kt(r, e, t, n) {
    try {
      var i = tr.getStreamFromFD(r),
        a = Gt(i, e, t);
      return ((w[n >> 2] = a), 0);
    } catch (s) {
      if (typeof o > "u" || s.name !== "ErrnoError") throw s;
      return s.errno;
    }
  }
  var Yt = (r) => {
      var e = f["_" + r];
      return e;
    },
    Jt = (r, e) => {
      A.set(r, e);
    },
    se = (r) => de(r),
    Zt = (r) => {
      var e = mr(r) + 1,
        t = se(e);
      return ($(r, t, e), t);
    },
    Qt = (r, e, t, n, i) => {
      var a = {
        string: (g) => {
          var _ = 0;
          return (g != null && g !== 0 && (_ = Zt(g)), _);
        },
        array: (g) => {
          var _ = se(g.length);
          return (Jt(g, _), _);
        },
      };
      function s(g) {
        return e === "string" ? Er(g) : e === "boolean" ? !!g : g;
      }
      var l = Yt(r),
        u = [],
        d = 0;
      if (n)
        for (var v = 0; v < n.length; v++) {
          var h = a[t[v]];
          h ? (d === 0 && (d = De()), (u[v] = h(n[v]))) : (u[v] = n[v]);
        }
      var p = l(...u);
      function m(g) {
        return (d !== 0 && Se(d), s(g));
      }
      return ((p = m(p)), p);
    };
  if (
    ((o.createPreloadedFile = Ot),
    (o.preloadFile = ae),
    o.staticInit(),
    f.noExitRuntime && (yr = f.noExitRuntime),
    f.preloadPlugins && (ie = f.preloadPlugins),
    f.print && (ir = f.print),
    f.printErr && (U = f.printErr),
    f.wasmBinary && (Y = f.wasmBinary),
    f.arguments && f.arguments,
    f.thisProgram && (Sr = f.thisProgram),
    f.preInit)
  )
    for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0;)
      f.preInit.shift()();
  f.ccall = Qt;
  var le, ue, Ar, z, fe, de, ve, hr, ce;
  function rn(r) {
    ((le = r.E),
      (ue = r.G),
      (Ar = f._malloc = r.H),
      (z = f._free = r.I),
      (fe = r.J),
      (de = r.K),
      (ve = r.L),
      (hr = r.C),
      (ce = r.F));
  }
  var en = {
    a: Re,
    v: Be,
    m: Ne,
    i: ze,
    k: xe,
    A: $e,
    B: Le,
    f: qe,
    h: Ge,
    d: nt,
    e: ot,
    b: it,
    j: at,
    g: ct,
    n: mt,
    c: ht,
    l: pt,
    p: wt,
    q: bt,
    r: Tt,
    w: St,
    s: Ct,
    t: Rt,
    z: $t,
    u: Ht,
    x: Xt,
    y: Kt,
    o: ee,
  };
  function Pr() {
    if (H > 0) {
      er = Pr;
      return;
    }
    if ((pe(), H > 0)) {
      er = Pr;
      return;
    }
    function r() {
      var e;
      ((f.calledRun = !0),
        !ar &&
          (we(), lr == null || lr(f), (e = f.onRuntimeInitialized) == null || e.call(f), ge()));
    }
    f.setStatus
      ? (f.setStatus("Running..."),
        setTimeout(() => {
          (setTimeout(() => f.setStatus(""), 1), r());
        }, 1))
      : r();
  }
  var nr;
  return (
    (nr = await Fe()),
    Pr(),
    Cr
      ? (R = f)
      : (R = new Promise((r, e) => {
          ((lr = r), (ur = e));
        })),
    R
  );
}
export { ln as default };
