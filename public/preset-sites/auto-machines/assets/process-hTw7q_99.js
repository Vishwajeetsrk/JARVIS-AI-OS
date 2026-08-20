var eo = Object.defineProperty;
var to = (N, B, d) =>
  B in N ? eo(N, B, { enumerable: !0, configurable: !0, writable: !0, value: d }) : (N[B] = d);
var x = (N, B, d) => to(N, typeof B != "symbol" ? B + "" : B, d);
async function ao(N = {}) {
  var B,
    d = N,
    Gr = "./this.program",
    Kr = (r, e) => {
      throw e;
    },
    cr = "",
    Sr = "";
  function He(r) {
    return d.locateFile ? d.locateFile(r, Sr) : Sr + r;
  }
  var Ar, Ne;
  (typeof document < "u" && document.currentScript && (cr = document.currentScript.src),
    cr.indexOf("blob:") !== 0 && (Sr = cr.substr(0, cr.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
    (Ar = async (r) => {
      var e = await fetch(r, { credentials: "same-origin" });
      if (e.ok) return e.arrayBuffer();
      throw new Error(e.status + " : " + e.url);
    }));
  var vr = console.log.bind(console),
    z = console.error.bind(console),
    er,
    hr = !1,
    mr,
    pr,
    gr,
    Yr = !1;
  function Jr() {
    var r = Fr.buffer;
    ((d.HEAP8 = A = new Int8Array(r)),
      (d.HEAP16 = tr = new Int16Array(r)),
      (d.HEAPU8 = M = new Uint8Array(r)),
      (d.HEAPU16 = G = new Uint16Array(r)),
      (d.HEAP32 = U = new Int32Array(r)),
      (d.HEAPU32 = w = new Uint32Array(r)),
      (d.HEAPF32 = Qr = new Float32Array(r)),
      (d.HEAPF64 = re = new Float64Array(r)),
      (O = new BigInt64Array(r)),
      (ee = new BigUint64Array(r)));
  }
  function Le() {
    if (d.preRun)
      for (typeof d.preRun == "function" && (d.preRun = [d.preRun]); d.preRun.length;)
        et(d.preRun.shift());
    te(oe);
  }
  function Ve() {
    ((Yr = !0), !d.noFSInit && !o.initialized && o.init(), dr.P(), (o.ignorePermissions = !1));
  }
  function qe() {
    if (d.postRun)
      for (typeof d.postRun == "function" && (d.postRun = [d.postRun]); d.postRun.length;)
        rt(d.postRun.shift());
    te(ne);
  }
  function W(r) {
    var t;
    ((t = d.onAbort) == null || t.call(d, r),
      (r = `Aborted(${r})`),
      z(r),
      (hr = !0),
      (r += ". Build with -sASSERTIONS for more info."));
    var e = new WebAssembly.RuntimeError(r);
    throw (gr == null || gr(e), e);
  }
  var Dr;
  function Xe() {
    return He("process.wasm");
  }
  function Ge(r) {
    if (r == Dr && er) return new Uint8Array(er);
    throw "both async and sync fetching of the wasm failed";
  }
  async function Ke(r) {
    if (!er)
      try {
        var e = await Ar(r);
        return new Uint8Array(e);
      } catch {}
    return Ge(r);
  }
  async function Ye(r, e) {
    try {
      var t = await Ke(r),
        n = await WebAssembly.instantiate(t, e);
      return n;
    } catch (i) {
      (z(`failed to asynchronously prepare wasm: ${i}`), W(i));
    }
  }
  async function Je(r, e, t) {
    if (!r)
      try {
        var n = fetch(e, { credentials: "same-origin" }),
          i = await WebAssembly.instantiateStreaming(n, t);
        return i;
      } catch (a) {
        (z(`wasm streaming compile failed: ${a}`), z("falling back to ArrayBuffer instantiation"));
      }
    return Ye(e, t);
  }
  function Ze() {
    var r = { a: ro };
    return r;
  }
  async function Qe() {
    function r(a, s) {
      return ((dr = a.exports), Qn(dr), Jr(), dr);
    }
    function e(a) {
      return r(a.instance);
    }
    var t = Ze();
    if (d.instantiateWasm)
      return new Promise((a, s) => {
        d.instantiateWasm(t, (l, u) => {
          a(r(l));
        });
      });
    Dr ?? (Dr = Xe());
    var n = await Je(er, Dr, t),
      i = e(n);
    return i;
  }
  class Zr {
    constructor(e) {
      x(this, "name", "ExitStatus");
      ((this.message = `Program terminated with exit(${e})`), (this.status = e));
    }
  }
  var tr,
    U,
    O,
    A,
    Qr,
    re,
    G,
    w,
    ee,
    M,
    te = (r) => {
      for (; r.length > 0;) r.shift()(d);
    },
    ne = [],
    rt = (r) => ne.push(r),
    oe = [],
    et = (r) => oe.push(r),
    Rr = !0,
    tt = (r) => je(r),
    nt = () => Me();
  class ot {
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
  var it = (r, e, t) => {
      var n = new ot(r);
      (n.init(e, t), W());
    },
    at = () => W(""),
    yr = {},
    nr = (r) => {
      for (; r.length;) {
        var e = r.pop(),
          t = r.pop();
        t(e);
      }
    };
  function K(r) {
    return this.fromWireType(w[r >> 2]);
  }
  var Y = {},
    L = {},
    wr = {},
    st = class extends Error {
      constructor(e) {
        (super(e), (this.name = "InternalError"));
      }
    },
    _r = (r) => {
      throw new st(r);
    },
    j = (r, e, t) => {
      r.forEach((l) => (wr[l] = e));
      function n(l) {
        var u = t(l);
        u.length !== r.length && _r("Mismatched type converter count");
        for (var f = 0; f < r.length; ++f) D(r[f], u[f]);
      }
      var i = new Array(e.length),
        a = [],
        s = 0;
      for (let [l, u] of e.entries())
        L.hasOwnProperty(u)
          ? (i[l] = L[u])
          : (a.push(u),
            Y.hasOwnProperty(u) || (Y[u] = []),
            Y[u].push(() => {
              ((i[l] = L[u]), ++s, s === a.length && n(i));
            }));
      a.length === 0 && n(i);
    },
    lt = (r) => {
      var e = yr[r];
      delete yr[r];
      var t = e.elements,
        n = t.length,
        i = t.map((l) => l.getterReturnType).concat(t.map((l) => l.setterArgumentType)),
        a = e.rawConstructor,
        s = e.rawDestructor;
      j([r], i, (l) => {
        for (const [u, f] of t.entries()) {
          const c = l[u],
            v = f.getter,
            m = f.getterContext,
            h = l[u + n],
            p = f.setter,
            y = f.setterContext;
          ((f.read = (b) => c.fromWireType(v(m, b))),
            (f.write = (b, _) => {
              var P = [];
              (p(y, b, h.toWireType(P, _)), nr(P));
            }));
        }
        return [
          {
            name: e.name,
            fromWireType: (u) => {
              for (var f = new Array(n), c = 0; c < n; ++c) f[c] = t[c].read(u);
              return (s(u), f);
            },
            toWireType: (u, f) => {
              if (n !== f.length)
                throw new TypeError(
                  `Incorrect number of tuple elements for ${e.name}: expected=${n}, actual=${f.length}`,
                );
              for (var c = a(), v = 0; v < n; ++v) t[v].write(c, f[v]);
              return (u !== null && u.push(s, c), c);
            },
            readValueFromPointer: K,
            destructorFunction: s,
          },
        ];
      });
    },
    br = {},
    ut = (r) => {
      var e = br[r];
      delete br[r];
      var t = e.rawConstructor,
        n = e.rawDestructor,
        i = e.fields,
        a = i.map((s) => s.getterReturnType).concat(i.map((s) => s.setterArgumentType));
      j([r], a, (s) => {
        var l = {};
        for (var [u, f] of i.entries()) {
          const c = s[u],
            v = f.getter,
            m = f.getterContext,
            h = s[u + i.length],
            p = f.setter,
            y = f.setterContext;
          l[f.fieldName] = {
            read: (b) => c.fromWireType(v(m, b)),
            write: (b, _) => {
              var P = [];
              (p(y, b, h.toWireType(P, _)), nr(P));
            },
            optional: c.optional,
          };
        }
        return [
          {
            name: e.name,
            fromWireType: (c) => {
              var v = {};
              for (var m in l) v[m] = l[m].read(c);
              return (n(c), v);
            },
            toWireType: (c, v) => {
              for (var m in l)
                if (!(m in v) && !l[m].optional) throw new TypeError(`Missing field: "${m}"`);
              var h = t();
              for (m in l) l[m].write(h, v[m]);
              return (c !== null && c.push(n, h), h);
            },
            readValueFromPointer: K,
            destructorFunction: n,
          },
        ];
      });
    },
    $ = (r) => {
      for (var e = ""; ;) {
        var t = M[r++];
        if (!t) return e;
        e += String.fromCharCode(t);
      }
    },
    or = class extends Error {
      constructor(e) {
        (super(e), (this.name = "BindingError"));
      }
    },
    E = (r) => {
      throw new or(r);
    };
  function ft(r, e, t = {}) {
    var n = e.name;
    if ((r || E(`type "${n}" must have a positive integer typeid pointer`), L.hasOwnProperty(r))) {
      if (t.ignoreDuplicateRegistrations) return;
      E(`Cannot register type '${n}' twice`);
    }
    if (((L[r] = e), delete wr[r], Y.hasOwnProperty(r))) {
      var i = Y[r];
      (delete Y[r], i.forEach((a) => a()));
    }
  }
  function D(r, e, t = {}) {
    return ft(r, e, t);
  }
  var ie = (r, e, t) => {
      switch (e) {
        case 1:
          return t ? (n) => A[n] : (n) => M[n];
        case 2:
          return t ? (n) => tr[n >> 1] : (n) => G[n >> 1];
        case 4:
          return t ? (n) => U[n >> 2] : (n) => w[n >> 2];
        case 8:
          return t ? (n) => O[n >> 3] : (n) => ee[n >> 3];
        default:
          throw new TypeError(`invalid integer width (${e}): ${r}`);
      }
    },
    dt = (r, e, t, n, i) => {
      e = $(e);
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
        readValueFromPointer: ie(e, t, !a),
        destructorFunction: null,
      });
    },
    ct = (r, e, t, n) => {
      ((e = $(e)),
        D(r, {
          name: e,
          fromWireType: function (i) {
            return !!i;
          },
          toWireType: function (i, a) {
            return a ? t : n;
          },
          readValueFromPointer: function (i) {
            return this.fromWireType(M[i]);
          },
          destructorFunction: null,
        }));
    },
    vt = (r) => ({
      count: r.count,
      deleteScheduled: r.deleteScheduled,
      preservePointerOnDelete: r.preservePointerOnDelete,
      ptr: r.ptr,
      ptrType: r.ptrType,
      smartPtr: r.smartPtr,
      smartPtrType: r.smartPtrType,
    }),
    Or = (r) => {
      function e(t) {
        return t.$$.ptrType.registeredClass.name;
      }
      E(e(r) + " instance already deleted");
    },
    Wr = !1,
    ae = (r) => {},
    ht = (r) => {
      r.smartPtr
        ? r.smartPtrType.rawDestructor(r.smartPtr)
        : r.ptrType.registeredClass.rawDestructor(r.ptr);
    },
    se = (r) => {
      r.count.value -= 1;
      var e = r.count.value === 0;
      e && ht(r);
    },
    ir = (r) =>
      globalThis.FinalizationRegistry
        ? ((Wr = new FinalizationRegistry((e) => {
            se(e.$$);
          })),
          (ir = (e) => {
            var t = e.$$,
              n = !!t.smartPtr;
            if (n) {
              var i = { $$: t };
              Wr.register(e, i, e);
            }
            return e;
          }),
          (ae = (e) => Wr.unregister(e)),
          ir(r))
        : ((ir = (e) => e), r),
    mt = () => {
      let r = Er.prototype;
      Object.assign(r, {
        isAliasOf(t) {
          if (!(this instanceof Er) || !(t instanceof Er)) return !1;
          var n = this.$$.ptrType.registeredClass,
            i = this.$$.ptr;
          t.$$ = t.$$;
          for (var a = t.$$.ptrType.registeredClass, s = t.$$.ptr; n.baseClass;)
            ((i = n.upcast(i)), (n = n.baseClass));
          for (; a.baseClass;) ((s = a.upcast(s)), (a = a.baseClass));
          return n === a && i === s;
        },
        clone() {
          if ((this.$$.ptr || Or(this), this.$$.preservePointerOnDelete))
            return ((this.$$.count.value += 1), this);
          var t = ir(Object.create(Object.getPrototypeOf(this), { $$: { value: vt(this.$$) } }));
          return ((t.$$.count.value += 1), (t.$$.deleteScheduled = !1), t);
        },
        delete() {
          (this.$$.ptr || Or(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              E("Object already scheduled for deletion"),
            ae(this),
            se(this.$$),
            this.$$.preservePointerOnDelete ||
              ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0)));
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          return (
            this.$$.ptr || Or(this),
            this.$$.deleteScheduled &&
              !this.$$.preservePointerOnDelete &&
              E("Object already scheduled for deletion"),
            (this.$$.deleteScheduled = !0),
            this
          );
        },
      });
      const e = Symbol.dispose;
      e && (r[e] = r.delete);
    };
  function Er() {}
  var kr = (r, e) => Object.defineProperty(e, "name", { value: r }),
    le = {},
    ue = (r, e, t) => {
      if (r[e].overloadTable === void 0) {
        var n = r[e];
        ((r[e] = function (...i) {
          return (
            r[e].overloadTable.hasOwnProperty(i.length) ||
              E(
                `Function '${t}' called with an invalid number of arguments (${i.length}) - expects one of (${r[e].overloadTable})!`,
              ),
            r[e].overloadTable[i.length].apply(this, i)
          );
        }),
          (r[e].overloadTable = []),
          (r[e].overloadTable[n.argCount] = n));
      }
    },
    ar = (r, e, t) => {
      d.hasOwnProperty(r)
        ? ((t === void 0 || (d[r].overloadTable !== void 0 && d[r].overloadTable[t] !== void 0)) &&
            E(`Cannot register public name '${r}' twice`),
          ue(d, r, r),
          d[r].overloadTable.hasOwnProperty(t) &&
            E(
              `Cannot register multiple overloads of a function with the same number of arguments (${t})!`,
            ),
          (d[r].overloadTable[t] = e))
        : ((d[r] = e), (d[r].argCount = t));
    },
    pt = 48,
    gt = 57,
    yt = (r) => {
      r = r.replace(/[^a-zA-Z0-9_]/g, "$");
      var e = r.charCodeAt(0);
      return e >= pt && e <= gt ? `_${r}` : r;
    };
  function wt(r, e, t, n, i, a, s, l) {
    ((this.name = r),
      (this.constructor = e),
      (this.instancePrototype = t),
      (this.rawDestructor = n),
      (this.baseClass = i),
      (this.getActualType = a),
      (this.upcast = s),
      (this.downcast = l),
      (this.pureVirtualFunctions = []));
  }
  var Pr = (r, e, t) => {
      for (; e !== t;)
        (e.upcast || E(`Expected null or instance of ${t.name}, got an instance of ${e.name}`),
          (r = e.upcast(r)),
          (e = e.baseClass));
      return r;
    },
    Br = (r) => {
      if (r === null) return "null";
      var e = typeof r;
      return e === "object" || e === "array" || e === "function" ? r.toString() : "" + r;
    };
  function _t(r, e) {
    if (e === null) return (this.isReference && E(`null is not a valid ${this.name}`), 0);
    (e.$$ || E(`Cannot pass "${Br(e)}" as a ${this.name}`),
      e.$$.ptr || E(`Cannot pass deleted object as a pointer of type ${this.name}`));
    var t = e.$$.ptrType.registeredClass,
      n = Pr(e.$$.ptr, t, this.registeredClass);
    return n;
  }
  function bt(r, e) {
    var t;
    if (e === null)
      return (
        this.isReference && E(`null is not a valid ${this.name}`),
        this.isSmartPointer
          ? ((t = this.rawConstructor()), r !== null && r.push(this.rawDestructor, t), t)
          : 0
      );
    ((!e || !e.$$) && E(`Cannot pass "${Br(e)}" as a ${this.name}`),
      e.$$.ptr || E(`Cannot pass deleted object as a pointer of type ${this.name}`),
      !this.isConst &&
        e.$$.ptrType.isConst &&
        E(
          `Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`,
        ));
    var n = e.$$.ptrType.registeredClass;
    if (((t = Pr(e.$$.ptr, n, this.registeredClass)), this.isSmartPointer))
      switch (
        (e.$$.smartPtr === void 0 && E("Passing raw pointer to smart pointer is illegal"),
        this.sharingPolicy)
      ) {
        case 0:
          e.$$.smartPtrType === this
            ? (t = e.$$.smartPtr)
            : E(
                `Cannot convert argument of type ${e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name} to parameter type ${this.name}`,
              );
          break;
        case 1:
          t = e.$$.smartPtr;
          break;
        case 2:
          if (e.$$.smartPtrType === this) t = e.$$.smartPtr;
          else {
            var i = e.clone();
            ((t = this.rawShare(
              t,
              I.toHandle(() => i.delete()),
            )),
              r !== null && r.push(this.rawDestructor, t));
          }
          break;
        default:
          E("Unsupported sharing policy");
      }
    return t;
  }
  function Et(r, e) {
    if (e === null) return (this.isReference && E(`null is not a valid ${this.name}`), 0);
    (e.$$ || E(`Cannot pass "${Br(e)}" as a ${this.name}`),
      e.$$.ptr || E(`Cannot pass deleted object as a pointer of type ${this.name}`),
      e.$$.ptrType.isConst &&
        E(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`));
    var t = e.$$.ptrType.registeredClass,
      n = Pr(e.$$.ptr, t, this.registeredClass);
    return n;
  }
  var fe = (r, e, t) => {
      if (e === t) return r;
      if (t.baseClass === void 0) return null;
      var n = fe(r, e, t.baseClass);
      return n === null ? null : t.downcast(n);
    },
    kt = {},
    Pt = (r, e) => {
      for (e === void 0 && E("ptr should not be undefined"); r.baseClass;)
        ((e = r.upcast(e)), (r = r.baseClass));
      return e;
    },
    $t = (r, e) => ((e = Pt(r, e)), kt[e]),
    $r = (r, e) => {
      (!e.ptrType || !e.ptr) && _r("makeClassHandle requires ptr and ptrType");
      var t = !!e.smartPtrType,
        n = !!e.smartPtr;
      return (
        t !== n && _r("Both smartPtrType and smartPtr must be specified"),
        (e.count = { value: 1 }),
        ir(Object.create(r, { $$: { value: e, writable: !0 } }))
      );
    };
  function Tt(r) {
    var e = this.getPointee(r);
    if (!e) return (this.destructor(r), null);
    var t = $t(this.registeredClass, e);
    if (t !== void 0) {
      if (t.$$.count.value === 0) return ((t.$$.ptr = e), (t.$$.smartPtr = r), t.clone());
      var n = t.clone();
      return (this.destructor(r), n);
    }
    function i() {
      return this.isSmartPointer
        ? $r(this.registeredClass.instancePrototype, {
            ptrType: this.pointeeType,
            ptr: e,
            smartPtrType: this,
            smartPtr: r,
          })
        : $r(this.registeredClass.instancePrototype, { ptrType: this, ptr: r });
    }
    var a = this.registeredClass.getActualType(e),
      s = le[a];
    if (!s) return i.call(this);
    var l;
    this.isConst ? (l = s.constPointerType) : (l = s.pointerType);
    var u = fe(e, this.registeredClass, l.registeredClass);
    return u === null
      ? i.call(this)
      : this.isSmartPointer
        ? $r(l.registeredClass.instancePrototype, {
            ptrType: l,
            ptr: u,
            smartPtrType: this,
            smartPtr: r,
          })
        : $r(l.registeredClass.instancePrototype, { ptrType: l, ptr: u });
  }
  var Ct = () => {
    Object.assign(Tr.prototype, {
      getPointee(r) {
        return (this.rawGetPointee && (r = this.rawGetPointee(r)), r);
      },
      destructor(r) {
        var e;
        (e = this.rawDestructor) == null || e.call(this, r);
      },
      readValueFromPointer: K,
      fromWireType: Tt,
    });
  };
  function Tr(r, e, t, n, i, a, s, l, u, f, c) {
    ((this.name = r),
      (this.registeredClass = e),
      (this.isReference = t),
      (this.isConst = n),
      (this.isSmartPointer = i),
      (this.pointeeType = a),
      (this.sharingPolicy = s),
      (this.rawGetPointee = l),
      (this.rawConstructor = u),
      (this.rawShare = f),
      (this.rawDestructor = c),
      !i && e.baseClass === void 0
        ? n
          ? ((this.toWireType = _t), (this.destructorFunction = null))
          : ((this.toWireType = Et), (this.destructorFunction = null))
        : (this.toWireType = bt));
  }
  var de = (r, e, t) => {
      (d.hasOwnProperty(r) || _r("Replacing nonexistent public symbol"),
        d[r].overloadTable !== void 0 && t !== void 0
          ? (d[r].overloadTable[t] = e)
          : ((d[r] = e), (d[r].argCount = t)));
    },
    ce = [],
    Ft = (r) => {
      var e = ce[r];
      return (e || (ce[r] = e = ze.get(r)), e);
    },
    F = (r, e, t = !1) => {
      r = $(r);
      function n() {
        var a = Ft(e);
        return a;
      }
      var i = n();
      return (typeof i != "function" && E(`unknown function pointer with signature ${r}: ${e}`), i);
    };
  class St extends Error {}
  var ve = (r) => {
      var e = We(r),
        t = $(e);
      return (H(e), t);
    },
    J = (r, e) => {
      var t = [],
        n = {};
      function i(a) {
        if (!n[a] && !L[a]) {
          if (wr[a]) {
            wr[a].forEach(i);
            return;
          }
          (t.push(a), (n[a] = !0));
        }
      }
      throw (e.forEach(i), new St(`${r}: ` + t.map(ve).join([", "])));
    },
    At = (r, e, t, n, i, a, s, l, u, f, c, v, m) => {
      ((c = $(c)), (a = F(i, a)), l && (l = F(s, l)), f && (f = F(u, f)), (m = F(v, m)));
      var h = yt(c);
      (ar(h, function () {
        J(`Cannot construct ${c} due to unbound types`, [n]);
      }),
        j([r, e, t], n ? [n] : [], (p) => {
          var Ue;
          p = p[0];
          var y, b;
          n ? ((y = p.registeredClass), (b = y.instancePrototype)) : (b = Er.prototype);
          var _ = kr(c, function (...Xr) {
              if (Object.getPrototypeOf(this) !== P) throw new or(`Use 'new' to construct ${c}`);
              if (C.constructor_body === void 0) throw new or(`${c} has no accessible constructor`);
              var Ie = C.constructor_body[Xr.length];
              if (Ie === void 0)
                throw new or(
                  `Tried to invoke ctor of ${c} with invalid number of parameters (${Xr.length}) - expected (${Object.keys(C.constructor_body).toString()}) parameters instead!`,
                );
              return Ie.apply(this, Xr);
            }),
            P = Object.create(b, { constructor: { value: _ } });
          _.prototype = P;
          var C = new wt(c, _, P, m, y, a, l, f);
          C.baseClass &&
            ((Ue = C.baseClass).__derivedClasses ?? (Ue.__derivedClasses = []),
            C.baseClass.__derivedClasses.push(C));
          var R = new Tr(c, C, !0, !1, !1),
            S = new Tr(c + "*", C, !1, !1, !1),
            T = new Tr(c + " const*", C, !1, !0, !1);
          return ((le[r] = { pointerType: S, constPointerType: T }), de(h, _), [R, S, T]);
        }));
    },
    jr = (r, e) => {
      for (var t = [], n = 0; n < r; n++) t.push(w[(e + n * 4) >> 2]);
      return t;
    };
  function Dt(r) {
    for (var e = 1; e < r.length; ++e)
      if (r[e] !== null && r[e].destructorFunction === void 0) return !0;
    return !1;
  }
  function xr(r, e, t, n, i, a) {
    var s = e.length;
    s < 2 && E("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var l = e[1] !== null && t !== null,
      u = Dt(e),
      f = !e[0].isVoid,
      c = s - 2,
      v = new Array(c),
      m = [],
      h = [],
      p = function (...y) {
        h.length = 0;
        var b;
        ((m.length = l ? 2 : 1), (m[0] = i), l && ((b = e[1].toWireType(h, this)), (m[1] = b)));
        for (var _ = 0; _ < c; ++_) ((v[_] = e[_ + 2].toWireType(h, y[_])), m.push(v[_]));
        var P = n(...m);
        function C(R) {
          if (u) nr(h);
          else
            for (var S = l ? 1 : 2; S < e.length; S++) {
              var T = S === 1 ? b : v[S - 2];
              e[S].destructorFunction !== null && e[S].destructorFunction(T);
            }
          if (f) return e[0].fromWireType(R);
        }
        return C(P);
      };
    return kr(r, p);
  }
  var Rt = (r, e, t, n, i, a) => {
      var s = jr(e, t);
      ((i = F(n, i)),
        j([], [r], (l) => {
          l = l[0];
          var u = `constructor ${l.name}`;
          if (
            (l.registeredClass.constructor_body === void 0 &&
              (l.registeredClass.constructor_body = []),
            l.registeredClass.constructor_body[e - 1] !== void 0)
          )
            throw new or(
              `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${l.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
            );
          return (
            (l.registeredClass.constructor_body[e - 1] = () => {
              J(`Cannot construct ${l.name} due to unbound types`, s);
            }),
            j(
              [],
              s,
              (f) => (
                f.splice(1, 0, null),
                (l.registeredClass.constructor_body[e - 1] = xr(u, f, null, i, a)),
                []
              ),
            ),
            []
          );
        }));
    },
    he = (r) => {
      r = r.trim();
      const e = r.indexOf("(");
      return e === -1 ? r : r.slice(0, e);
    },
    Ot = (r, e, t, n, i, a, s, l, u, f) => {
      var c = jr(t, n);
      ((e = $(e)),
        (e = he(e)),
        (a = F(i, a, u)),
        j([], [r], (v) => {
          v = v[0];
          var m = `${v.name}.${e}`;
          (e.startsWith("@@") && (e = Symbol[e.substring(2)]),
            l && v.registeredClass.pureVirtualFunctions.push(e));
          function h() {
            J(`Cannot call ${m} due to unbound types`, c);
          }
          var p = v.registeredClass.instancePrototype,
            y = p[e];
          return (
            y === void 0 ||
            (y.overloadTable === void 0 && y.className !== v.name && y.argCount === t - 2)
              ? ((h.argCount = t - 2), (h.className = v.name), (p[e] = h))
              : (ue(p, e, m), (p[e].overloadTable[t - 2] = h)),
            j([], c, (b) => {
              var _ = xr(m, b, v, a, s);
              return (
                p[e].overloadTable === void 0
                  ? ((_.argCount = t - 2), (p[e] = _))
                  : (p[e].overloadTable[t - 2] = _),
                []
              );
            }),
            []
          );
        }));
    },
    me = (r, e, t) => (
      r instanceof Object || E(`${t} with invalid "this": ${r}`),
      r instanceof e.registeredClass.constructor ||
        E(`${t} incompatible with "this" of type ${r.constructor.name}`),
      r.$$.ptr || E(`cannot call emscripten binding method ${t} on deleted object`),
      Pr(r.$$.ptr, r.$$.ptrType.registeredClass, e.registeredClass)
    ),
    Wt = (r, e, t, n, i, a, s, l, u, f) => {
      ((e = $(e)),
        (i = F(n, i)),
        j([], [r], (c) => {
          c = c[0];
          var v = `${c.name}.${e}`,
            m = {
              get() {
                J(`Cannot access ${v} due to unbound types`, [t, s]);
              },
              enumerable: !0,
              configurable: !0,
            };
          return (
            u
              ? (m.set = () => J(`Cannot access ${v} due to unbound types`, [t, s]))
              : (m.set = (h) => E(v + " is a read-only property")),
            Object.defineProperty(c.registeredClass.instancePrototype, e, m),
            j([], u ? [t, s] : [t], (h) => {
              var p = h[0],
                y = {
                  get() {
                    var _ = me(this, c, v + " getter");
                    return p.fromWireType(i(a, _));
                  },
                  enumerable: !0,
                };
              if (u) {
                u = F(l, u);
                var b = h[1];
                y.set = function (_) {
                  var P = me(this, c, v + " setter"),
                    C = [];
                  (u(f, P, b.toWireType(C, _)), nr(C));
                };
              }
              return (Object.defineProperty(c.registeredClass.instancePrototype, e, y), []);
            }),
            []
          );
        }));
    },
    pe = [],
    Z = [0, 1, , 1, null, 1, !0, 1, !1, 1],
    ge = (r) => {
      r > 9 && --Z[r + 1] === 0 && ((Z[r] = void 0), pe.push(r));
    },
    I = {
      toValue: (r) => (r || E(`Cannot use deleted val. handle = ${r}`), Z[r]),
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
            const e = pe.pop() || Z.length;
            return ((Z[e] = r), (Z[e + 1] = 1), e);
          }
        }
      },
    },
    ye = {
      name: "emscripten::val",
      fromWireType: (r) => {
        var e = I.toValue(r);
        return (ge(r), e);
      },
      toWireType: (r, e) => I.toHandle(e),
      readValueFromPointer: K,
      destructorFunction: null,
    },
    Bt = (r) => D(r, ye),
    Mr = (r, e, t) => {
      switch (e) {
        case 1:
          return t
            ? function (n) {
                return this.fromWireType(A[n]);
              }
            : function (n) {
                return this.fromWireType(M[n]);
              };
        case 2:
          return t
            ? function (n) {
                return this.fromWireType(tr[n >> 1]);
              }
            : function (n) {
                return this.fromWireType(G[n >> 1]);
              };
        case 4:
          return t
            ? function (n) {
                return this.fromWireType(U[n >> 2]);
              }
            : function (n) {
                return this.fromWireType(w[n >> 2]);
              };
        default:
          throw new TypeError(`invalid integer width (${e}): ${r}`);
      }
    };
  function jt(r) {
    return r === 0 ? "object" : r === 1 ? "number" : "string";
  }
  var xt = (r, e, t, n, i) => {
      e = $(e);
      const a = jt(i);
      switch (a) {
        case "object": {
          let f = function () {};
          ((f.values = {}),
            D(r, {
              name: e,
              constructor: f,
              valueType: a,
              fromWireType: function (c) {
                return this.constructor.values[c];
              },
              toWireType: (c, v) => v.value,
              readValueFromPointer: Mr(e, t, n),
              destructorFunction: null,
            }),
            ar(e, f));
          break;
        }
        case "number": {
          var s = {};
          (D(r, {
            name: e,
            keysMap: s,
            valueType: a,
            fromWireType: (f) => f,
            toWireType: (f, c) => c,
            readValueFromPointer: Mr(e, t, n),
            destructorFunction: null,
          }),
            ar(e, s),
            delete d[e].argCount);
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
            fromWireType: function (c) {
              return this.reverseMap[c];
            },
            toWireType: function (c, v) {
              return this.valuesMap[v];
            },
            readValueFromPointer: Mr(e, t, n),
            destructorFunction: null,
          }),
            ar(e, s),
            delete d[e].argCount);
          break;
        }
      }
    },
    we = (r, e) => {
      var t = L[r];
      return (t === void 0 && E(`${e} has unknown type ${ve(r)}`), t);
    },
    Mt = (r, e, t) => {
      var n = we(r, "enum");
      switch (((e = $(e)), n.valueType)) {
        case "object": {
          var i = n.constructor,
            a = Object.create(n.constructor.prototype, {
              value: { value: t },
              constructor: { value: kr(`${n.name}_${e}`, function () {}) },
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
    zt = (r, e) => {
      switch (e) {
        case 4:
          return function (t) {
            return this.fromWireType(Qr[t >> 2]);
          };
        case 8:
          return function (t) {
            return this.fromWireType(re[t >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e}): ${r}`);
      }
    },
    Ut = (r, e, t) => {
      ((e = $(e)),
        D(r, {
          name: e,
          fromWireType: (n) => n,
          toWireType: (n, i) => i,
          readValueFromPointer: zt(e, t),
          destructorFunction: null,
        }));
    },
    It = (r, e, t, n, i, a, s, l) => {
      var u = jr(e, t);
      ((r = $(r)),
        (r = he(r)),
        (i = F(n, i, s)),
        ar(
          r,
          function () {
            J(`Cannot call ${r} due to unbound types`, u);
          },
          e - 1,
        ),
        j([], u, (f) => {
          var c = [f[0], null].concat(f.slice(1));
          return (de(r, xr(r, c, null, i, a), e - 1), []);
        }));
    },
    Ht = (r, e, t, n, i) => {
      e = $(e);
      const a = n === 0;
      let s = (u) => u;
      if (a) {
        var l = 32 - 8 * t;
        ((s = (u) => (u << l) >>> l), (i = s(i)));
      }
      D(r, {
        name: e,
        fromWireType: s,
        toWireType: (u, f) => f,
        readValueFromPointer: ie(e, t, n !== 0),
        destructorFunction: null,
      });
    },
    Nt = (r, e, t) => {
      const n = (i, a) => {
        let s = 0;
        return {
          next() {
            if (s >= i) return { done: !0 };
            const l = s;
            return (s++, { value: a(l), done: !1 });
          },
          [Symbol.iterator]() {
            return this;
          },
        };
      };
      r[Symbol.iterator] ||
        (r[Symbol.iterator] = function () {
          const i = this[e]();
          return n(i, (a) => this[t](a));
        });
    },
    Lt = (r, e, t, n) => {
      ((t = $(t)),
        (n = $(n)),
        j([], [r, e], (i) => {
          const a = i[0];
          return (Nt(a.registeredClass.instancePrototype, t, n), []);
        }));
    },
    Vt = (r, e, t) => {
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
      ((t = $(t)),
        D(
          r,
          { name: t, fromWireType: a, readValueFromPointer: a },
          { ignoreDuplicateRegistrations: !0 },
        ));
    },
    qt = Object.assign({ optional: !0 }, ye),
    Xt = (r, e) => {
      D(r, qt);
    },
    _e = (r, e, t, n) => {
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
    V = (r, e, t) => _e(r, M, e, t),
    Cr = (r) => {
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
    be = globalThis.TextDecoder && new TextDecoder(),
    Ee = (r, e, t, n) => {
      var i = e + t;
      if (n) return i;
      for (; r[e] && !(e >= i);) ++e;
      return e;
    },
    Q = (r, e = 0, t, n) => {
      var i = Ee(r, e, t, n);
      if (i - e > 16 && r.buffer && be) return be.decode(r.subarray(e, i));
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
          var f = s - 65536;
          a += String.fromCharCode(55296 | (f >> 10), 56320 | (f & 1023));
        }
      }
      return a;
    },
    zr = (r, e, t) => (r ? Q(M, r, e, t) : ""),
    Gt = (r, e) => {
      ((e = $(e)),
        D(r, {
          name: e,
          fromWireType(t) {
            var n = w[t >> 2],
              i = t + 4,
              a;
            return ((a = zr(i, n, !0)), H(t), a);
          },
          toWireType(t, n) {
            n instanceof ArrayBuffer && (n = new Uint8Array(n));
            var i,
              a = typeof n == "string";
            (a ||
              (ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1) ||
              E("Cannot pass non-string to std::string"),
              a ? (i = Cr(n)) : (i = n.length));
            var s = Vr(4 + i + 1),
              l = s + 4;
            return (
              (w[s >> 2] = i),
              a ? V(n, l, i + 1) : M.set(n, l),
              t !== null && t.push(H, s),
              s
            );
          },
          readValueFromPointer: K,
          destructorFunction(t) {
            H(t);
          },
        }));
    },
    ke = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0,
    Kt = (r, e, t) => {
      var n = r >> 1,
        i = Ee(G, n, e / 2, t);
      if (i - n > 16 && ke) return ke.decode(G.subarray(n, i));
      for (var a = "", s = n; s < i; ++s) {
        var l = G[s];
        a += String.fromCharCode(l);
      }
      return a;
    },
    Yt = (r, e, t) => {
      if ((t ?? (t = 2147483647), t < 2)) return 0;
      t -= 2;
      for (var n = e, i = t < r.length * 2 ? t / 2 : r.length, a = 0; a < i; ++a) {
        var s = r.charCodeAt(a);
        ((tr[e >> 1] = s), (e += 2));
      }
      return ((tr[e >> 1] = 0), e - n);
    },
    Jt = (r) => r.length * 2,
    Zt = (r, e, t) => {
      for (var n = "", i = r >> 2, a = 0; !(a >= e / 4); a++) {
        var s = w[i + a];
        if (!s && !t) break;
        n += String.fromCodePoint(s);
      }
      return n;
    },
    Qt = (r, e, t) => {
      if ((t ?? (t = 2147483647), t < 4)) return 0;
      for (var n = e, i = n + t - 4, a = 0; a < r.length; ++a) {
        var s = r.codePointAt(a);
        if ((s > 65535 && a++, (U[e >> 2] = s), (e += 4), e + 4 > i)) break;
      }
      return ((U[e >> 2] = 0), e - n);
    },
    rn = (r) => {
      for (var e = 0, t = 0; t < r.length; ++t) {
        var n = r.codePointAt(t);
        (n > 65535 && t++, (e += 4));
      }
      return e;
    },
    en = (r, e, t) => {
      t = $(t);
      var n, i, a;
      (e === 2 ? ((n = Kt), (i = Yt), (a = Jt)) : ((n = Zt), (i = Qt), (a = rn)),
        D(r, {
          name: t,
          fromWireType: (s) => {
            var l = w[s >> 2],
              u = n(s + 4, l * e, !0);
            return (H(s), u);
          },
          toWireType: (s, l) => {
            typeof l != "string" && E(`Cannot pass non-string to C++ string type ${t}`);
            var u = a(l),
              f = Vr(4 + u + e);
            return ((w[f >> 2] = u / e), i(l, f + 4, u + e), s !== null && s.push(H, f), f);
          },
          readValueFromPointer: K,
          destructorFunction(s) {
            H(s);
          },
        }));
    },
    tn = (r, e, t, n, i, a) => {
      yr[r] = { name: $(e), rawConstructor: F(t, n), rawDestructor: F(i, a), elements: [] };
    },
    nn = (r, e, t, n, i, a, s, l, u) => {
      yr[r].elements.push({
        getterReturnType: e,
        getter: F(t, n),
        getterContext: i,
        setterArgumentType: a,
        setter: F(s, l),
        setterContext: u,
      });
    },
    on = (r, e, t, n, i, a) => {
      br[r] = { name: $(e), rawConstructor: F(t, n), rawDestructor: F(i, a), fields: [] };
    },
    an = (r, e, t, n, i, a, s, l, u, f) => {
      br[r].fields.push({
        fieldName: $(e),
        getterReturnType: t,
        getter: F(n, i),
        getterContext: a,
        setterArgumentType: s,
        setter: F(l, u),
        setterContext: f,
      });
    },
    sn = (r, e) => {
      ((e = $(e)), D(r, { isVoid: !0, name: e, fromWireType: () => {}, toWireType: (t, n) => {} }));
    },
    Pe = 0,
    ln = () => {
      ((Rr = !1), (Pe = 0));
    },
    Ur = [],
    un = (r) => {
      var e = Ur.length;
      return (Ur.push(r), e);
    },
    fn = (r, e) => {
      for (var t = new Array(r), n = 0; n < r; ++n)
        t[n] = we(w[(e + n * 4) >> 2], `parameter ${n}`);
      return t;
    },
    dn = (r, e, t) => {
      var n = [],
        i = r(n, t);
      return (n.length && (w[e >> 2] = I.toHandle(n)), i);
    },
    cn = {},
    vn = (r) => {
      var e = cn[r];
      return e === void 0 ? $(r) : e;
    },
    hn = (r, e, t) => {
      var n = 8,
        [i, ...a] = fn(r, e),
        s = i.toWireType.bind(i),
        l = a.map((v) => v.readValueFromPointer.bind(v));
      r--;
      var u = new Array(r),
        f = (v, m, h, p) => {
          for (var y = 0, b = 0; b < r; ++b) ((u[b] = l[b](p + y)), (y += n));
          var _;
          switch (t) {
            case 0:
              _ = I.toValue(v).apply(null, u);
              break;
            case 2:
              _ = Reflect.construct(I.toValue(v), u);
              break;
            case 3:
              _ = u[0];
              break;
            case 1:
              _ = I.toValue(v)[vn(m)](...u);
              break;
          }
          return dn(s, h, _);
        },
        c = `methodCaller<(${a.map((v) => v.name)}) => ${i.name}>`;
      return un(kr(c, f));
    },
    mn = (r, e, t, n, i) => Ur[r](e, t, n, i),
    pn = (r) => {
      var e = I.toValue(r);
      (nr(e), ge(r));
    },
    sr = {},
    $e = (r) => {
      if (r instanceof Zr || r == "unwind") return mr;
      Kr(1, r);
    },
    Te = () => Rr || Pe > 0,
    Ce = (r) => {
      var e;
      ((mr = r), Te() || ((e = d.onExit) == null || e.call(d, r), (hr = !0)), Kr(r, new Zr(r)));
    },
    gn = (r, e) => {
      ((mr = r), Ce(r));
    },
    yn = gn,
    wn = () => {
      if (!Te())
        try {
          yn(mr);
        } catch (r) {
          $e(r);
        }
    },
    _n = (r) => {
      if (!hr)
        try {
          return r();
        } catch (e) {
          $e(e);
        } finally {
          wn();
        }
    },
    bn = () => performance.now(),
    En = (r, e) => {
      if ((sr[r] && (clearTimeout(sr[r].id), delete sr[r]), !e)) return 0;
      var t = setTimeout(() => {
        (delete sr[r], _n(() => Be(r, bn())));
      }, e);
      return ((sr[r] = { id: t, timeout_ms: e }), 0);
    },
    kn = (r, e, t, n) => {
      var i = new Date().getFullYear(),
        a = new Date(i, 0, 1),
        s = new Date(i, 6, 1),
        l = a.getTimezoneOffset(),
        u = s.getTimezoneOffset(),
        f = Math.max(l, u);
      ((w[r >> 2] = f * 60), (U[e >> 2] = +(l != u)));
      var c = (h) => {
          var p = h >= 0 ? "-" : "+",
            y = Math.abs(h),
            b = String(Math.floor(y / 60)).padStart(2, "0"),
            _ = String(y % 60).padStart(2, "0");
          return `UTC${p}${b}${_}`;
        },
        v = c(l),
        m = c(u);
      u < l ? (V(v, t, 17), V(m, n, 17)) : (V(v, n, 17), V(m, t, 17));
    },
    Pn = () => 2147483648,
    $n = (r, e) => Math.ceil(r / e) * e,
    Tn = (r) => {
      var e = Fr.buffer.byteLength,
        t = ((r - e + 65535) / 65536) | 0;
      try {
        return (Fr.grow(t), Jr(), 1);
      } catch {}
    },
    Cn = (r) => {
      var e = M.length;
      r >>>= 0;
      var t = Pn();
      if (r > t) return !1;
      for (var n = 1; n <= 4; n *= 2) {
        var i = e * (1 + 0.2 / n);
        i = Math.min(i, r + 100663296);
        var a = Math.min(t, $n(Math.max(r, i), 65536)),
          s = Tn(a);
        if (s) return !0;
      }
      return !1;
    },
    Ir = {},
    Fn = () => Gr || "./this.program",
    lr = () => {
      var i;
      if (!lr.strings) {
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
            _: Fn(),
          };
        for (var t in Ir) Ir[t] === void 0 ? delete e[t] : (e[t] = Ir[t]);
        var n = [];
        for (var t in e) n.push(`${t}=${e[t]}`);
        lr.strings = n;
      }
      return lr.strings;
    },
    Sn = (r, e) => {
      var t = 0,
        n = 0;
      for (var i of lr()) {
        var a = e + t;
        ((w[(r + n) >> 2] = a), (t += V(i, a, 1 / 0) + 1), (n += 4));
      }
      return 0;
    },
    An = (r, e) => {
      var t = lr();
      w[r >> 2] = t.length;
      var n = 0;
      for (var i of t) n += Cr(i) + 1;
      return ((w[e >> 2] = n), 0);
    },
    k = {
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
        var e = k.isAbs(r),
          t = r.slice(-1) === "/";
        return (
          (r = k
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
        var e = k.splitPath(r),
          t = e[0],
          n = e[1];
        return !t && !n ? "." : (n && (n = n.slice(0, -1)), t + n);
      },
      basename: (r) => r && r.match(/([^\/]+|\/)\/*$/)[1],
      join: (...r) => k.normalize(r.join("/")),
      join2: (r, e) => k.normalize(r + "/" + e),
    },
    Dn = () => (r) => (crypto.getRandomValues(r), 0),
    Fe = (r) => (Fe = Dn())(r),
    rr = {
      resolve: (...r) => {
        for (var e = "", t = !1, n = r.length - 1; n >= -1 && !t; n--) {
          var i = n >= 0 ? r[n] : o.cwd();
          if (typeof i != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          if (!i) return "";
          ((e = i + "/" + e), (t = k.isAbs(i)));
        }
        return (
          (e = k
            .normalizeArray(
              e.split("/").filter((a) => !!a),
              !t,
            )
            .join("/")),
          (t ? "/" : "") + e || "."
        );
      },
      relative: (r, e) => {
        ((r = rr.resolve(r).slice(1)), (e = rr.resolve(e).slice(1)));
        function t(f) {
          for (var c = 0; c < f.length && f[c] === ""; c++);
          for (var v = f.length - 1; v >= 0 && f[v] === ""; v--);
          return c > v ? [] : f.slice(c, v - c + 1);
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
    Hr = [],
    Nr = (r, e, t) => {
      var n = Cr(r) + 1,
        i = new Array(n),
        a = _e(r, i, 0, i.length);
      return ((i.length = a), i);
    },
    Rn = () => {
      var e;
      if (!Hr.length) {
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
        Hr = Nr(r);
      }
      return Hr.shift();
    },
    q = {
      ttys: [],
      init() {},
      shutdown() {},
      register(r, e) {
        ((q.ttys[r] = { input: [], output: [], ops: e }), o.registerDevice(r, q.stream_ops));
      },
      stream_ops: {
        open(r) {
          var e = q.ttys[r.node.rdev];
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
          return Rn();
        },
        put_char(r, e) {
          e === null || e === 10 ? (vr(Q(r.output)), (r.output = [])) : e != 0 && r.output.push(e);
        },
        fsync(r) {
          var e;
          ((e = r.output) == null ? void 0 : e.length) > 0 && (vr(Q(r.output)), (r.output = []));
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
          e === null || e === 10 ? (z(Q(r.output)), (r.output = [])) : e != 0 && r.output.push(e);
        },
        fsync(r) {
          var e;
          ((e = r.output) == null ? void 0 : e.length) > 0 && (z(Q(r.output)), (r.output = []));
        },
      },
    },
    Se = (r) => {
      W();
    },
    g = {
      ops_table: null,
      mount(r) {
        return g.createNode(null, "/", 16895, 0);
      },
      createNode(r, e, t, n) {
        if (o.isBlkdev(t) || o.isFIFO(t)) throw new o.ErrnoError(63);
        g.ops_table ||
          (g.ops_table = {
            dir: {
              node: {
                getattr: g.node_ops.getattr,
                setattr: g.node_ops.setattr,
                lookup: g.node_ops.lookup,
                mknod: g.node_ops.mknod,
                rename: g.node_ops.rename,
                unlink: g.node_ops.unlink,
                rmdir: g.node_ops.rmdir,
                readdir: g.node_ops.readdir,
                symlink: g.node_ops.symlink,
              },
              stream: { llseek: g.stream_ops.llseek },
            },
            file: {
              node: { getattr: g.node_ops.getattr, setattr: g.node_ops.setattr },
              stream: {
                llseek: g.stream_ops.llseek,
                read: g.stream_ops.read,
                write: g.stream_ops.write,
                mmap: g.stream_ops.mmap,
                msync: g.stream_ops.msync,
              },
            },
            link: {
              node: {
                getattr: g.node_ops.getattr,
                setattr: g.node_ops.setattr,
                readlink: g.node_ops.readlink,
              },
              stream: {},
            },
            chrdev: {
              node: { getattr: g.node_ops.getattr, setattr: g.node_ops.setattr },
              stream: o.chrdev_stream_ops,
            },
          });
        var i = o.createNode(r, e, t, n);
        return (
          o.isDir(i.mode)
            ? ((i.node_ops = g.ops_table.dir.node),
              (i.stream_ops = g.ops_table.dir.stream),
              (i.contents = {}))
            : o.isFile(i.mode)
              ? ((i.node_ops = g.ops_table.file.node),
                (i.stream_ops = g.ops_table.file.stream),
                (i.usedBytes = 0),
                (i.contents = g.emptyFileContents ?? (g.emptyFileContents = new Uint8Array(0))))
              : o.isLink(i.mode)
                ? ((i.node_ops = g.ops_table.link.node), (i.stream_ops = g.ops_table.link.stream))
                : o.isChrdev(i.mode) &&
                  ((i.node_ops = g.ops_table.chrdev.node),
                  (i.stream_ops = g.ops_table.chrdev.stream)),
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
          var i = g.getFileDataAsTypedArray(r);
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
          e.size !== void 0 && g.resizeFileStorage(r, e.size);
        },
        lookup(r, e) {
          throw (
            g.doesNotExistError ||
              ((g.doesNotExistError = new o.ErrnoError(44)),
              (g.doesNotExistError.stack = "<generic error, no stack>")),
            g.doesNotExistError
          );
        },
        mknod(r, e, t, n) {
          return g.createNode(r, e, t, n);
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
          var n = g.createNode(r, e, 41471, 0);
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
                : (g.expandFileStorage(s, i + n),
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
            if (((s = !0), (a = Se()), !a)) throw new o.ErrnoError(48);
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
          return (g.stream_ops.write(r, e, 0, n, t, !1), 0);
        },
      },
    },
    On = (r) => {
      if (typeof r != "string") return r;
      var e = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
        t = e[r];
      if (typeof t > "u") throw new Error(`Unknown file open mode: ${r}`);
      return t;
    },
    Ae = (r) => (typeof r == "string" && (r = Nr(r)), r.subarray || (r = new Uint8Array(r)), r),
    Lr = (r, e) => {
      var t = 0;
      return (r && (t |= 365), e && (t |= 146), t);
    },
    Wn = async (r) => {
      var e = await Ar(r);
      return new Uint8Array(e);
    },
    Bn = (...r) => o.createDataFile(...r),
    X = 0,
    ur = null,
    jn = (r) => {
      var t;
      if ((X--, (t = d.monitorRunDependencies) == null || t.call(d, X), X == 0 && ur)) {
        var e = ur;
        ((ur = null), e());
      }
    },
    xn = (r) => {
      var e;
      (X++, (e = d.monitorRunDependencies) == null || e.call(d, X));
    },
    De = [],
    Mn = async (r, e) => {
      typeof Browser < "u" && Browser.init();
      for (var t of De) if (t.canHandle(e)) return t.handle(r, e);
      return r;
    },
    Re = async (r, e, t, n, i, a, s, l) => {
      var u = e ? rr.resolve(k.join2(r, e)) : r;
      xn();
      try {
        var f = t;
        (typeof t == "string" && (f = await Wn(t)),
          (f = await Mn(f, u)),
          l == null || l(),
          a || Bn(r, e, f, n, i, s));
      } finally {
        jn();
      }
    },
    zn = (r, e, t, n, i, a, s, l, u, f) => {
      Re(r, e, t, n, i, l, u, f).then(a).catch(s);
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
          x(this, "name", "ErrnoError");
          this.errno = r;
        }
      },
      FSStream: class {
        constructor() {
          x(this, "shared", {});
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
          x(this, "node_ops", {});
          x(this, "stream_ops", {});
          x(this, "readMode", 365);
          x(this, "writeMode", 146);
          x(this, "mounted", null);
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
        (e.follow_mount ?? (e.follow_mount = !0), k.isAbs(r) || (r = o.cwd() + "/" + r));
        r: for (var t = 0; t < 40; t++) {
          for (
            var n = r.split("/").filter((f) => !!f), i = o.root, a = "/", s = 0;
            s < n.length;
            s++
          ) {
            var l = s === n.length - 1;
            if (l && e.parent) break;
            if (n[s] !== ".") {
              if (n[s] === "..") {
                if (((a = k.dirname(a)), o.isRoot(i))) {
                  ((r = a + "/" + n.slice(s + 1).join("/")), t--);
                  continue r;
                } else i = i.parent;
                continue;
              }
              a = k.join2(a, n[s]);
              try {
                i = o.lookupNode(i, n[s]);
              } catch (f) {
                if ((f == null ? void 0 : f.errno) === 44 && l && e.noent_okay) return { path: a };
                throw f;
              }
              if (
                (o.isMountpoint(i) && (!l || e.follow_mount) && (i = i.mounted.root),
                o.isLink(i.mode) && (!l || e.follow))
              ) {
                if (!i.node_ops.readlink) throw new o.ErrnoError(52);
                var u = i.node_ops.readlink(i);
                (k.isAbs(u) || (u = k.dirname(a) + "/" + u),
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
            z(
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
          a = k.basename(r);
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
            ((n || k.isAbs(r)) && (n += "/"), (n += i));
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
        if (!rr.resolve(r)) throw new o.ErrnoError(44);
        var t = o.lookupPath(e, { parent: !0 }),
          n = t.node;
        if (!n) throw new o.ErrnoError(44);
        var i = k.basename(e),
          a = o.mayCreate(n, i);
        if (a) throw new o.ErrnoError(a);
        if (!n.node_ops.symlink) throw new o.ErrnoError(63);
        return n.node_ops.symlink(n, i, r);
      },
      rename(r, e) {
        var t = k.dirname(r),
          n = k.dirname(e),
          i = k.basename(r),
          a = k.basename(e),
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
        var f = o.lookupNode(l, i),
          c = rr.relative(r, n);
        if (c.charAt(0) !== ".") throw new o.ErrnoError(28);
        if (((c = rr.relative(e, t)), c.charAt(0) !== ".")) throw new o.ErrnoError(55);
        var v;
        try {
          v = o.lookupNode(u, a);
        } catch {}
        if (f !== v) {
          var m = o.isDir(f.mode),
            h = o.mayDelete(l, i, m);
          if (h) throw new o.ErrnoError(h);
          if (((h = v ? o.mayDelete(u, a, m) : o.mayCreate(u, a)), h)) throw new o.ErrnoError(h);
          if (!l.node_ops.rename) throw new o.ErrnoError(63);
          if (o.isMountpoint(f) || (v && o.isMountpoint(v))) throw new o.ErrnoError(10);
          if (u !== l && ((h = o.nodePermissions(l, "w")), h)) throw new o.ErrnoError(h);
          o.hashRemoveNode(f);
          try {
            (l.node_ops.rename(f, u, a), (f.parent = u));
          } catch (p) {
            throw p;
          } finally {
            o.hashAddNode(f);
          }
        }
      },
      rmdir(r) {
        var e = o.lookupPath(r, { parent: !0 }),
          t = e.node,
          n = k.basename(r),
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
        var n = k.basename(r),
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
        ((e = On(e)), e & 64 ? (t = (t & 4095) | 32768) : (t = 0));
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
            W(`Invalid encoding type "${e.encoding}"`));
        var t = o.open(r, e.flags),
          n = o.stat(r),
          i = n.size,
          a = new Uint8Array(i);
        return (o.read(t, a, 0, i, 0), e.encoding === "utf8" && (a = Q(a)), o.close(t), a);
      },
      writeFile(r, e, t = {}) {
        t.flags = t.flags || 577;
        var n = o.open(r, t.flags, t.mode);
        ((e = Ae(e)), o.write(n, e, 0, e.byteLength, void 0, t.canOwn), o.close(n));
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
          q.register(o.makedev(5, 0), q.default_tty_ops),
          q.register(o.makedev(6, 0), q.default_tty1_ops),
          o.mkdev("/dev/tty", o.makedev(5, 0)),
          o.mkdev("/dev/tty1", o.makedev(6, 0)));
        var r = new Uint8Array(1024),
          e = 0,
          t = () => (e === 0 && (Fe(r), (e = r.byteLength)), r[--e]);
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
                  (e.stream_ops = { llseek: g.stream_ops.llseek }),
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
          o.mount(g, {}, "/"),
          o.createDefaultDirectories(),
          o.createDefaultDevices(),
          o.createSpecialDirectories(),
          (o.filesystems = { MEMFS: g }));
      },
      init(r, e, t) {
        ((o.initialized = !0),
          r ?? (r = d.stdin),
          e ?? (e = d.stdout),
          t ?? (t = d.stderr),
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
            (n.name = k.basename(r)),
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
            var s = k.join2(r, a);
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
        var a = k.join2(typeof r == "string" ? r : o.getPath(r), e),
          s = Lr(n, i);
        return o.create(a, s);
      },
      createDataFile(r, e, t, n, i, a) {
        var s = e;
        r && ((r = typeof r == "string" ? r : o.getPath(r)), (s = e ? k.join2(r, e) : r));
        var l = Lr(n, i),
          u = o.create(s, l);
        if (t) {
          ((t = Ae(t)), o.chmod(u, l | 146));
          var f = o.open(u, 577);
          (o.write(f, t, 0, t.length, 0, a), o.close(f), o.chmod(u, l));
        }
      },
      createDevice(r, e, t, n) {
        var l;
        var i = k.join2(typeof r == "string" ? r : o.getPath(r), e),
          a = Lr(!!t, !!n);
        (l = o.createDevice).major ?? (l.major = 64);
        var s = o.makedev(o.createDevice.major++, 0);
        return (
          o.registerDevice(s, {
            open(u) {
              u.seekable = !1;
            },
            close(u) {
              var f;
              (f = n == null ? void 0 : n.buffer) != null && f.length && n(10);
            },
            read(u, f, c, v, m) {
              for (var h = 0, p = 0; p < v; p++) {
                var y;
                try {
                  y = t();
                } catch {
                  throw new o.ErrnoError(29);
                }
                if (y === void 0 && h === 0) throw new o.ErrnoError(6);
                if (y == null) break;
                (h++, (f[c + p] = y));
              }
              return (h && (u.node.atime = Date.now()), h);
            },
            write(u, f, c, v, m) {
              for (var h = 0; h < v; h++)
                try {
                  n(f[c + h]);
                } catch {
                  throw new o.ErrnoError(29);
                }
              return (v && (u.node.mtime = u.node.ctime = Date.now()), h);
            },
          }),
          o.mkdev(i, a, s)
        );
      },
      forceLoadFile(r) {
        if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
        if (globalThis.XMLHttpRequest)
          W(
            "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
          );
        else
          try {
            r.contents = Ne(r.url);
          } catch {
            throw new o.ErrnoError(29);
          }
      },
      createLazyFile(r, e, t, n, i) {
        class a {
          constructor() {
            x(this, "lengthKnown", !1);
            x(this, "chunks", []);
          }
          get(m) {
            if (!(m > this.length - 1 || m < 0)) {
              var h = m % this.chunkSize,
                p = (m / this.chunkSize) | 0;
              return this.getter(p)[h];
            }
          }
          setDataGetter(m) {
            this.getter = m;
          }
          cacheLength() {
            var m = new XMLHttpRequest();
            (m.open("HEAD", t, !1),
              m.send(null),
              (m.status >= 200 && m.status < 300) ||
                m.status === 304 ||
                W("Couldn't load " + t + ". Status: " + m.status));
            var h = Number(m.getResponseHeader("Content-length")),
              p,
              y = (p = m.getResponseHeader("Accept-Ranges")) && p === "bytes",
              b = (p = m.getResponseHeader("Content-Encoding")) && p === "gzip",
              _ = 1024 * 1024;
            y || (_ = h);
            var P = (R, S) => {
                (R > S && W("invalid range (" + R + ", " + S + ") or no bytes requested!"),
                  S > h - 1 && W("only " + h + " bytes available! programmer error!"));
                var T = new XMLHttpRequest();
                return (
                  T.open("GET", t, !1),
                  h !== _ && T.setRequestHeader("Range", "bytes=" + R + "-" + S),
                  (T.responseType = "arraybuffer"),
                  T.overrideMimeType && T.overrideMimeType("text/plain; charset=x-user-defined"),
                  T.send(null),
                  (T.status >= 200 && T.status < 300) ||
                    T.status === 304 ||
                    W("Couldn't load " + t + ". Status: " + T.status),
                  T.response !== void 0
                    ? new Uint8Array(T.response || [])
                    : Nr(T.responseText || "")
                );
              },
              C = this;
            (C.setDataGetter((R) => {
              var S = R * _,
                T = (R + 1) * _ - 1;
              return (
                (T = Math.min(T, h - 1)),
                typeof C.chunks[R] > "u" && (C.chunks[R] = P(S, T)),
                typeof C.chunks[R] > "u" && W("doXHR failed!"),
                C.chunks[R]
              );
            }),
              (b || !h) &&
                ((_ = h = 1),
                (h = this.getter(0).length),
                (_ = h),
                vr("LazyFiles on gzip forces download of the whole file when length is accessed")),
              (this._length = h),
              (this._chunkSize = _),
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
          W(
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
        var f = {};
        for (const [v, m] of Object.entries(u.stream_ops))
          f[v] = (...h) => (o.forceLoadFile(u), m(...h));
        function c(v, m, h, p, y) {
          var b = v.node.contents;
          if (y >= b.length) return 0;
          var _ = Math.min(b.length - y, p);
          if (b.slice) for (var P = 0; P < _; P++) m[h + P] = b[y + P];
          else for (var P = 0; P < _; P++) m[h + P] = b.get(y + P);
          return _;
        }
        return (
          (f.read = (v, m, h, p, y) => (o.forceLoadFile(u), c(v, m, h, p, y))),
          (f.mmap = (v, m, h, p, y) => {
            o.forceLoadFile(u);
            var b = Se();
            if (!b) throw new o.ErrnoError(48);
            return (c(v, A, b, m, h), { ptr: b, allocated: !0 });
          }),
          (u.stream_ops = f),
          u
        );
      },
    },
    fr = {
      calculateAt(r, e, t) {
        if (k.isAbs(e)) return e;
        var n;
        if (r === -100) n = o.cwd();
        else {
          var i = fr.getStreamFromFD(r);
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
          (O[(r + 24) >> 3] = BigInt(e.size)),
          (U[(r + 32) >> 2] = 4096),
          (U[(r + 36) >> 2] = e.blocks));
        var t = e.atime.getTime(),
          n = e.mtime.getTime(),
          i = e.ctime.getTime();
        return (
          (O[(r + 40) >> 3] = BigInt(Math.floor(t / 1e3))),
          (w[(r + 48) >> 2] = (t % 1e3) * 1e3 * 1e3),
          (O[(r + 56) >> 3] = BigInt(Math.floor(n / 1e3))),
          (w[(r + 64) >> 2] = (n % 1e3) * 1e3 * 1e3),
          (O[(r + 72) >> 3] = BigInt(Math.floor(i / 1e3))),
          (w[(r + 80) >> 2] = (i % 1e3) * 1e3 * 1e3),
          (O[(r + 88) >> 3] = BigInt(e.ino)),
          0
        );
      },
      writeStatFs(r, e) {
        ((w[(r + 4) >> 2] = e.bsize),
          (w[(r + 60) >> 2] = e.bsize),
          (O[(r + 8) >> 3] = BigInt(e.blocks)),
          (O[(r + 16) >> 3] = BigInt(e.bfree)),
          (O[(r + 24) >> 3] = BigInt(e.bavail)),
          (O[(r + 32) >> 3] = BigInt(e.files)),
          (O[(r + 40) >> 3] = BigInt(e.ffree)),
          (w[(r + 48) >> 2] = e.fsid),
          (w[(r + 64) >> 2] = e.flags),
          (w[(r + 56) >> 2] = e.namelen));
      },
      doMsync(r, e, t, n, i) {
        if (!o.isFile(e.node.mode)) throw new o.ErrnoError(43);
        if (n & 2) return 0;
        var a = M.slice(r, r + t);
        o.msync(e, a, i, t, n);
      },
      getStreamFromFD(r) {
        var e = o.getStreamChecked(r);
        return e;
      },
      varargs: void 0,
      getStr(r) {
        var e = zr(r);
        return e;
      },
    };
  function Un(r) {
    try {
      var e = fr.getStreamFromFD(r);
      return (o.close(e), 0);
    } catch (t) {
      if (typeof o > "u" || t.name !== "ErrnoError") throw t;
      return t.errno;
    }
  }
  var In = (r, e, t, n) => {
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
  function Hn(r, e, t, n) {
    try {
      var i = fr.getStreamFromFD(r),
        a = In(i, e, t);
      return ((w[n >> 2] = a), 0);
    } catch (s) {
      if (typeof o > "u" || s.name !== "ErrnoError") throw s;
      return s.errno;
    }
  }
  var Nn = 9007199254740992,
    Ln = -9007199254740992,
    Vn = (r) => (r < Ln || r > Nn ? NaN : Number(r));
  function qn(r, e, t, n) {
    e = Vn(e);
    try {
      if (isNaN(e)) return 61;
      var i = fr.getStreamFromFD(r);
      return (
        o.llseek(i, e, t),
        (O[n >> 3] = BigInt(i.position)),
        i.getdents && e === 0 && t === 0 && (i.getdents = null),
        0
      );
    } catch (a) {
      if (typeof o > "u" || a.name !== "ErrnoError") throw a;
      return a.errno;
    }
  }
  var Xn = (r, e, t, n) => {
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
  function Gn(r, e, t, n) {
    try {
      var i = fr.getStreamFromFD(r),
        a = Xn(i, e, t);
      return ((w[n >> 2] = a), 0);
    } catch (s) {
      if (typeof o > "u" || s.name !== "ErrnoError") throw s;
      return s.errno;
    }
  }
  var Kn = (r) => {
      var e = d["_" + r];
      return e;
    },
    Yn = (r, e) => {
      A.set(r, e);
    },
    Oe = (r) => xe(r),
    Jn = (r) => {
      var e = Cr(r) + 1,
        t = Oe(e);
      return (V(r, t, e), t);
    },
    Zn = (r, e, t, n, i) => {
      var a = {
        string: (p) => {
          var y = 0;
          return (p != null && p !== 0 && (y = Jn(p)), y);
        },
        array: (p) => {
          var y = Oe(p.length);
          return (Yn(p, y), y);
        },
      };
      function s(p) {
        return e === "string" ? zr(p) : e === "boolean" ? !!p : p;
      }
      var l = Kn(r),
        u = [],
        f = 0;
      if (n)
        for (var c = 0; c < n.length; c++) {
          var v = a[t[c]];
          v ? (f === 0 && (f = nt()), (u[c] = v(n[c]))) : (u[c] = n[c]);
        }
      var m = l(...u);
      function h(p) {
        return (f !== 0 && tt(f), s(p));
      }
      return ((m = h(m)), m);
    };
  if (
    (mt(),
    Ct(),
    (o.createPreloadedFile = zn),
    (o.preloadFile = Re),
    o.staticInit(),
    d.noExitRuntime && (Rr = d.noExitRuntime),
    d.preloadPlugins && (De = d.preloadPlugins),
    d.print && (vr = d.print),
    d.printErr && (z = d.printErr),
    d.wasmBinary && (er = d.wasmBinary),
    d.arguments && d.arguments,
    d.thisProgram && (Gr = d.thisProgram),
    d.preInit)
  )
    for (typeof d.preInit == "function" && (d.preInit = [d.preInit]); d.preInit.length > 0;)
      d.preInit.shift()();
  d.ccall = Zn;
  var We, Vr, H, Be, je, xe, Me, Fr, ze;
  function Qn(r) {
    ((We = r.Q),
      (Vr = d._malloc = r.S),
      (H = d._free = r.T),
      (Be = r.U),
      (je = r.V),
      (xe = r.W),
      (Me = r.X),
      (Fr = r.O),
      (ze = r.R));
  }
  var ro = {
    d: it,
    C: at,
    r: lt,
    p: ut,
    x: dt,
    M: ct,
    h: At,
    g: Rt,
    c: Ot,
    u: Wt,
    K: Bt,
    t: xt,
    i: Mt,
    w: Ut,
    a: It,
    j: Ht,
    n: Lt,
    e: Vt,
    o: Xt,
    L: Gt,
    v: en,
    s: tn,
    b: nn,
    q: on,
    f: an,
    N: sn,
    z: ln,
    m: hn,
    l: mn,
    k: pn,
    A: En,
    B: kn,
    D: Cn,
    E: Sn,
    F: An,
    H: Un,
    J: Hn,
    G: qn,
    I: Gn,
    y: Ce,
  };
  function qr() {
    if (X > 0) {
      ur = qr;
      return;
    }
    if ((Le(), X > 0)) {
      ur = qr;
      return;
    }
    function r() {
      var e;
      ((d.calledRun = !0),
        !hr &&
          (Ve(), pr == null || pr(d), (e = d.onRuntimeInitialized) == null || e.call(d), qe()));
    }
    d.setStatus
      ? (d.setStatus("Running..."),
        setTimeout(() => {
          (setTimeout(() => d.setStatus(""), 1), r());
        }, 1))
      : r();
  }
  var dr;
  return (
    (dr = await Qe()),
    qr(),
    Yr
      ? (B = d)
      : (B = new Promise((r, e) => {
          ((pr = r), (gr = e));
        })),
    B
  );
}
export { ao as default };
