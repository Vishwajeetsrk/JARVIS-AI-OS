var Ht = Object.create,
  it = Object.defineProperty,
  Wt = Object.getOwnPropertyDescriptor,
  Yt = Object.getOwnPropertyNames,
  Qt = Object.getPrototypeOf,
  Zt = Object.prototype.hasOwnProperty,
  Xt = (t, a, s) =>
    a in t ? it(t, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (t[a] = s),
  H = (t, a) => () => (a || t((a = { exports: {} }).exports, a), a.exports),
  dt = (t, a) => {
    for (var s in a) it(t, s, { get: a[s], enumerable: !0 });
  },
  Jt = (t, a, s, n) => {
    if ((a && typeof a == "object") || typeof a == "function")
      for (let i of Yt(a))
        !Zt.call(t, i) &&
          i !== s &&
          it(t, i, { get: () => a[i], enumerable: !(n = Wt(a, i)) || n.enumerable });
    return t;
  },
  T = (t, a, s) => (
    (s = t != null ? Ht(Qt(t)) : {}),
    Jt(it(s, "default", { value: t, enumerable: !0 }), t)
  ),
  P = (t, a, s) => (Xt(t, typeof a != "symbol" ? a + "" : a, s), s),
  Kt = H((t, a) => {
    function s(n) {
      for (var i = new Array(n), e = 0; e < n; ++e) i[e] = e;
      return i;
    }
    a.exports = s;
  }),
  ta = H((t, a) => {
    a.exports = function (i) {
      return i != null && (s(i) || n(i) || !!i._isBuffer);
    };
    function s(i) {
      return (
        !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i)
      );
    }
    function n(i) {
      return typeof i.readFloatLE == "function" && typeof i.slice == "function" && s(i.slice(0, 0));
    }
  }),
  tt = H((t, a) => {
    var s = Kt(),
      n = ta(),
      i = typeof Float64Array < "u";
    function e(d, l) {
      return d[0] - l[0];
    }
    function o() {
      var d = this.stride,
        l = new Array(d.length),
        c;
      for (c = 0; c < l.length; ++c) l[c] = [Math.abs(d[c]), c];
      l.sort(e);
      var p = new Array(l.length);
      for (c = 0; c < p.length; ++c) p[c] = l[c][1];
      return p;
    }
    function r(d, l) {
      var c = ["View", l, "d", d].join("");
      l < 0 && (c = "View_Nil" + d);
      var p = d === "generic";
      if (l === -1) {
        var g =
            "function " +
            c +
            "(a){this.data=a;};var proto=" +
            c +
            ".prototype;proto.dtype='" +
            d +
            "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " +
            c +
            "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" +
            c +
            "(a){return new " +
            c +
            "(a);}",
          z = new Function(g);
        return z();
      } else if (l === 0) {
        var g =
            "function " +
            c +
            "(a,d) {this.data = a;this.offset = d};var proto=" +
            c +
            ".prototype;proto.dtype='" +
            d +
            "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " +
            c +
            "_copy() {return new " +
            c +
            "(this.data,this.offset)};proto.pick=function " +
            c +
            "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " +
            c +
            "_get(){return " +
            (p ? "this.data.get(this.offset)" : "this.data[this.offset]") +
            "};proto.set=function " +
            c +
            "_set(v){return " +
            (p ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") +
            "};return function construct_" +
            c +
            "(a,b,c,d){return new " +
            c +
            "(a,d)}",
          z = new Function("TrivialArray", g);
        return z(u[d][0]);
      }
      var g = ["'use strict'"],
        y = s(l),
        m = y.map(function (k) {
          return "i" + k;
        }),
        _ =
          "this.offset+" +
          y
            .map(function (k) {
              return "this.stride[" + k + "]*i" + k;
            })
            .join("+"),
        b = y
          .map(function (k) {
            return "b" + k;
          })
          .join(","),
        M = y
          .map(function (k) {
            return "c" + k;
          })
          .join(",");
      (g.push(
        "function " + c + "(a," + b + "," + M + ",d){this.data=a",
        "this.shape=[" + b + "]",
        "this.stride=[" + M + "]",
        "this.offset=d|0}",
        "var proto=" + c + ".prototype",
        "proto.dtype='" + d + "'",
        "proto.dimension=" + l,
      ),
        g.push(
          "Object.defineProperty(proto,'size',{get:function " +
            c +
            "_size(){return " +
            y
              .map(function (k) {
                return "this.shape[" + k + "]";
              })
              .join("*"),
          "}})",
        ),
        l === 1
          ? g.push("proto.order=[0]")
          : (g.push("Object.defineProperty(proto,'order',{get:"),
            l < 4
              ? (g.push("function " + c + "_order(){"),
                l === 2
                  ? g.push(
                      "return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})",
                    )
                  : l === 3 &&
                    g.push(
                      "var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})",
                    ))
              : g.push("ORDER})")),
        g.push("proto.set=function " + c + "_set(" + m.join(",") + ",v){"),
        p ? g.push("return this.data.set(" + _ + ",v)}") : g.push("return this.data[" + _ + "]=v}"),
        g.push("proto.get=function " + c + "_get(" + m.join(",") + "){"),
        p ? g.push("return this.data.get(" + _ + ")}") : g.push("return this.data[" + _ + "]}"),
        g.push("proto.index=function " + c + "_index(", m.join(), "){return " + _ + "}"),
        g.push(
          "proto.hi=function " +
            c +
            "_hi(" +
            m.join(",") +
            "){return new " +
            c +
            "(this.data," +
            y
              .map(function (k) {
                return [
                  "(typeof i",
                  k,
                  "!=='number'||i",
                  k,
                  "<0)?this.shape[",
                  k,
                  "]:i",
                  k,
                  "|0",
                ].join("");
              })
              .join(",") +
            "," +
            y
              .map(function (k) {
                return "this.stride[" + k + "]";
              })
              .join(",") +
            ",this.offset)}",
        ));
      var x = y.map(function (k) {
          return "a" + k + "=this.shape[" + k + "]";
        }),
        w = y.map(function (k) {
          return "c" + k + "=this.stride[" + k + "]";
        });
      g.push(
        "proto.lo=function " +
          c +
          "_lo(" +
          m.join(",") +
          "){var b=this.offset,d=0," +
          x.join(",") +
          "," +
          w.join(","),
      );
      for (var v = 0; v < l; ++v)
        g.push(
          "if(typeof i" +
            v +
            "==='number'&&i" +
            v +
            ">=0){d=i" +
            v +
            "|0;b+=c" +
            v +
            "*d;a" +
            v +
            "-=d}",
        );
      (g.push(
        "return new " +
          c +
          "(this.data," +
          y
            .map(function (k) {
              return "a" + k;
            })
            .join(",") +
          "," +
          y
            .map(function (k) {
              return "c" + k;
            })
            .join(",") +
          ",b)}",
      ),
        g.push(
          "proto.step=function " +
            c +
            "_step(" +
            m.join(",") +
            "){var " +
            y
              .map(function (k) {
                return "a" + k + "=this.shape[" + k + "]";
              })
              .join(",") +
            "," +
            y
              .map(function (k) {
                return "b" + k + "=this.stride[" + k + "]";
              })
              .join(",") +
            ",c=this.offset,d=0,ceil=Math.ceil",
        ));
      for (var v = 0; v < l; ++v)
        g.push(
          "if(typeof i" +
            v +
            "==='number'){d=i" +
            v +
            "|0;if(d<0){c+=b" +
            v +
            "*(a" +
            v +
            "-1);a" +
            v +
            "=ceil(-a" +
            v +
            "/d)}else{a" +
            v +
            "=ceil(a" +
            v +
            "/d)}b" +
            v +
            "*=d}",
        );
      g.push(
        "return new " +
          c +
          "(this.data," +
          y
            .map(function (k) {
              return "a" + k;
            })
            .join(",") +
          "," +
          y
            .map(function (k) {
              return "b" + k;
            })
            .join(",") +
          ",c)}",
      );
      for (var A = new Array(l), S = new Array(l), v = 0; v < l; ++v)
        ((A[v] = "a[i" + v + "]"), (S[v] = "b[i" + v + "]"));
      (g.push(
        "proto.transpose=function " +
          c +
          "_transpose(" +
          m +
          "){" +
          m
            .map(function (k, F) {
              return k + "=(" + k + "===undefined?" + F + ":" + k + "|0)";
            })
            .join(";"),
        "var a=this.shape,b=this.stride;return new " +
          c +
          "(this.data," +
          A.join(",") +
          "," +
          S.join(",") +
          ",this.offset)}",
      ),
        g.push("proto.pick=function " + c + "_pick(" + m + "){var a=[],b=[],c=this.offset"));
      for (var v = 0; v < l; ++v)
        g.push(
          "if(typeof i" +
            v +
            "==='number'&&i" +
            v +
            ">=0){c=(c+this.stride[" +
            v +
            "]*i" +
            v +
            ")|0}else{a.push(this.shape[" +
            v +
            "]);b.push(this.stride[" +
            v +
            "])}",
        );
      (g.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),
        g.push(
          "return function construct_" +
            c +
            "(data,shape,stride,offset){return new " +
            c +
            "(data," +
            y
              .map(function (k) {
                return "shape[" + k + "]";
              })
              .join(",") +
            "," +
            y
              .map(function (k) {
                return "stride[" + k + "]";
              })
              .join(",") +
            ",offset)}",
        ));
      var z = new Function(
        "CTOR_LIST",
        "ORDER",
        g.join(`
`),
      );
      return z(u[d], o);
    }
    function h(d) {
      if (n(d)) return "buffer";
      if (i)
        switch (Object.prototype.toString.call(d)) {
          case "[object Float64Array]":
            return "float64";
          case "[object Float32Array]":
            return "float32";
          case "[object Int8Array]":
            return "int8";
          case "[object Int16Array]":
            return "int16";
          case "[object Int32Array]":
            return "int32";
          case "[object Uint8Array]":
            return "uint8";
          case "[object Uint16Array]":
            return "uint16";
          case "[object Uint32Array]":
            return "uint32";
          case "[object Uint8ClampedArray]":
            return "uint8_clamped";
          case "[object BigInt64Array]":
            return "bigint64";
          case "[object BigUint64Array]":
            return "biguint64";
        }
      return Array.isArray(d) ? "array" : "generic";
    }
    var u = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      bigint64: [],
      biguint64: [],
      buffer: [],
      generic: [],
    };
    function f(d, l, c, p) {
      if (d === void 0) {
        var M = u.array[0];
        return M([]);
      } else typeof d == "number" && (d = [d]);
      l === void 0 && (l = [d.length]);
      var g = l.length;
      if (c === void 0) {
        c = new Array(g);
        for (var y = g - 1, m = 1; y >= 0; --y) ((c[y] = m), (m *= l[y]));
      }
      if (p === void 0) {
        p = 0;
        for (var y = 0; y < g; ++y) c[y] < 0 && (p -= (l[y] - 1) * c[y]);
      }
      for (var _ = h(d), b = u[_]; b.length <= g + 1;) b.push(r(_, b.length - 1));
      var M = b[g + 1];
      return M(d, l, c, p);
    }
    a.exports = f;
  }),
  aa = H((t, a) => {
    function s(e, o) {
      for (var r = 1, h = e.length, u = e[0], f = e[0], d = 1; d < h; ++d)
        if (((f = u), (u = e[d]), o(u, f))) {
          if (d === r) {
            r++;
            continue;
          }
          e[r++] = u;
        }
      return ((e.length = r), e);
    }
    function n(e) {
      for (var o = 1, r = e.length, h = e[0], u = e[0], f = 1; f < r; ++f, u = h)
        if (((u = h), (h = e[f]), h !== u)) {
          if (f === o) {
            o++;
            continue;
          }
          e[o++] = h;
        }
      return ((e.length = o), e);
    }
    function i(e, o, r) {
      return e.length === 0 ? e : o ? (r || e.sort(o), s(e, o)) : (r || e.sort(), n(e));
    }
    a.exports = i;
  }),
  sa = H((t, a) => {
    var s = aa();
    function n(u, f, d) {
      var l = u.length,
        c = f.arrayArgs.length,
        p = f.indexArgs.length > 0,
        g = [],
        y = [],
        m = 0,
        _ = 0,
        b,
        M;
      for (b = 0; b < l; ++b) y.push(["i", b, "=0"].join(""));
      for (M = 0; M < c; ++M)
        for (b = 0; b < l; ++b)
          ((_ = m),
            (m = u[b]),
            b === 0
              ? y.push(["d", M, "s", b, "=t", M, "p", m].join(""))
              : y.push(["d", M, "s", b, "=(t", M, "p", m, "-s", _, "*t", M, "p", _, ")"].join("")));
      for (y.length > 0 && g.push("var " + y.join(",")), b = l - 1; b >= 0; --b)
        ((m = u[b]), g.push(["for(i", b, "=0;i", b, "<s", m, ";++i", b, "){"].join("")));
      for (g.push(d), b = 0; b < l; ++b) {
        for (_ = m, m = u[b], M = 0; M < c; ++M) g.push(["p", M, "+=d", M, "s", b].join(""));
        (p &&
          (b > 0 && g.push(["index[", _, "]-=s", _].join("")),
          g.push(["++index[", m, "]"].join(""))),
          g.push("}"));
      }
      return g.join(`
`);
    }
    function i(u, f, d, l) {
      for (
        var c = f.length,
          p = d.arrayArgs.length,
          g = d.blockSize,
          y = d.indexArgs.length > 0,
          m = [],
          _ = 0;
        _ < p;
        ++_
      )
        m.push(["var offset", _, "=p", _].join(""));
      for (var _ = u; _ < c; ++_)
        (m.push(["for(var j" + _ + "=SS[", f[_], "]|0;j", _, ">0;){"].join("")),
          m.push(["if(j", _, "<", g, "){"].join("")),
          m.push(["s", f[_], "=j", _].join("")),
          m.push(["j", _, "=0"].join("")),
          m.push(["}else{s", f[_], "=", g].join("")),
          m.push(["j", _, "-=", g, "}"].join("")),
          y && m.push(["index[", f[_], "]=j", _].join("")));
      for (var _ = 0; _ < p; ++_) {
        for (var b = ["offset" + _], M = u; M < c; ++M)
          b.push(["j", M, "*t", _, "p", f[M]].join(""));
        m.push(["p", _, "=(", b.join("+"), ")"].join(""));
      }
      m.push(n(f, d, l));
      for (var _ = u; _ < c; ++_) m.push("}");
      return m.join(`
`);
    }
    function e(u) {
      for (var f = 0, d = u[0].length; f < d;) {
        for (var l = 1; l < u.length; ++l) if (u[l][f] !== u[0][f]) return f;
        ++f;
      }
      return f;
    }
    function o(u, f, d) {
      for (var l = u.body, c = [], p = [], g = 0; g < u.args.length; ++g) {
        var y = u.args[g];
        if (!(y.count <= 0)) {
          var m = new RegExp(y.name, "g"),
            _ = "",
            b = f.arrayArgs.indexOf(g);
          switch (f.argTypes[g]) {
            case "offset":
              var M = f.offsetArgIndex.indexOf(g),
                x = f.offsetArgs[M];
              ((b = x.array), (_ = "+q" + M));
            case "array":
              _ = "p" + b + _;
              var w = "l" + g,
                v = "a" + b;
              if (f.arrayBlockIndices[b] === 0)
                y.count === 1
                  ? d[b] === "generic"
                    ? y.lvalue
                      ? (c.push(["var ", w, "=", v, ".get(", _, ")"].join("")),
                        (l = l.replace(m, w)),
                        p.push([v, ".set(", _, ",", w, ")"].join("")))
                      : (l = l.replace(m, [v, ".get(", _, ")"].join("")))
                    : (l = l.replace(m, [v, "[", _, "]"].join("")))
                  : d[b] === "generic"
                    ? (c.push(["var ", w, "=", v, ".get(", _, ")"].join("")),
                      (l = l.replace(m, w)),
                      y.lvalue && p.push([v, ".set(", _, ",", w, ")"].join("")))
                    : (c.push(["var ", w, "=", v, "[", _, "]"].join("")),
                      (l = l.replace(m, w)),
                      y.lvalue && p.push([v, "[", _, "]=", w].join("")));
              else {
                for (var A = [y.name], S = [_], z = 0; z < Math.abs(f.arrayBlockIndices[b]); z++)
                  (A.push("\\s*\\[([^\\]]+)\\]"), S.push("$" + (z + 1) + "*t" + b + "b" + z));
                if (((m = new RegExp(A.join(""), "g")), (_ = S.join("+")), d[b] === "generic"))
                  throw new Error(
                    "cwise: Generic arrays not supported in combination with blocks!",
                  );
                l = l.replace(m, [v, "[", _, "]"].join(""));
              }
              break;
            case "scalar":
              l = l.replace(m, "Y" + f.scalarArgs.indexOf(g));
              break;
            case "index":
              l = l.replace(m, "index");
              break;
            case "shape":
              l = l.replace(m, "shape");
              break;
          }
        }
      }
      return [
        c.join(`
`),
        l,
        p.join(`
`),
      ]
        .join(
          `
`,
        )
        .trim();
    }
    function r(u) {
      for (var f = new Array(u.length), d = !0, l = 0; l < u.length; ++l) {
        var c = u[l],
          p = c.match(/\d+/);
        (p ? (p = p[0]) : (p = ""),
          c.charAt(0) === 0 ? (f[l] = "u" + c.charAt(1) + p) : (f[l] = c.charAt(0) + p),
          l > 0 && (d = d && f[l] === f[l - 1]));
      }
      return d ? f[0] : f.join("");
    }
    function h(u, f) {
      for (
        var d = (f[1].length - Math.abs(u.arrayBlockIndices[0])) | 0,
          l = new Array(u.arrayArgs.length),
          c = new Array(u.arrayArgs.length),
          p = 0;
        p < u.arrayArgs.length;
        ++p
      )
        ((c[p] = f[2 * p]), (l[p] = f[2 * p + 1]));
      for (var g = [], y = [], m = [], _ = [], b = [], p = 0; p < u.arrayArgs.length; ++p) {
        u.arrayBlockIndices[p] < 0
          ? (m.push(0), _.push(d), g.push(d), y.push(d + u.arrayBlockIndices[p]))
          : (m.push(u.arrayBlockIndices[p]),
            _.push(u.arrayBlockIndices[p] + d),
            g.push(0),
            y.push(u.arrayBlockIndices[p]));
        for (var M = [], x = 0; x < l[p].length; x++)
          m[p] <= l[p][x] && l[p][x] < _[p] && M.push(l[p][x] - m[p]);
        b.push(M);
      }
      for (var w = ["SS"], v = ["'use strict'"], A = [], x = 0; x < d; ++x)
        A.push(["s", x, "=SS[", x, "]"].join(""));
      for (var p = 0; p < u.arrayArgs.length; ++p) {
        (w.push("a" + p), w.push("t" + p), w.push("p" + p));
        for (var x = 0; x < d; ++x) A.push(["t", p, "p", x, "=t", p, "[", m[p] + x, "]"].join(""));
        for (var x = 0; x < Math.abs(u.arrayBlockIndices[p]); ++x)
          A.push(["t", p, "b", x, "=t", p, "[", g[p] + x, "]"].join(""));
      }
      for (var p = 0; p < u.scalarArgs.length; ++p) w.push("Y" + p);
      if ((u.shapeArgs.length > 0 && A.push("shape=SS.slice(0)"), u.indexArgs.length > 0)) {
        for (var S = new Array(d), p = 0; p < d; ++p) S[p] = "0";
        A.push(["index=[", S.join(","), "]"].join(""));
      }
      for (var p = 0; p < u.offsetArgs.length; ++p) {
        for (var z = u.offsetArgs[p], k = [], x = 0; x < z.offset.length; ++x)
          z.offset[x] !== 0 &&
            (z.offset[x] === 1
              ? k.push(["t", z.array, "p", x].join(""))
              : k.push([z.offset[x], "*t", z.array, "p", x].join("")));
        k.length === 0 ? A.push("q" + p + "=0") : A.push(["q", p, "=", k.join("+")].join(""));
      }
      var F = s([].concat(u.pre.thisVars).concat(u.body.thisVars).concat(u.post.thisVars));
      ((A = A.concat(F)), A.length > 0 && v.push("var " + A.join(",")));
      for (var p = 0; p < u.arrayArgs.length; ++p) v.push("p" + p + "|=0");
      u.pre.body.length > 3 && v.push(o(u.pre, u, c));
      var N = o(u.body, u, c),
        q = e(b);
      (q < d ? v.push(i(q, b[0], u, N)) : v.push(n(b[0], u, N)),
        u.post.body.length > 3 && v.push(o(u.post, u, c)),
        u.debug &&
          console.log(
            "-----Generated cwise routine for ",
            f,
            `:
` +
              v.join(`
`) +
              `
----------`,
          ));
      var E = [u.funcName || "unnamed", "_cwise_loop_", l[0].join("s"), "m", q, r(c)].join(""),
        W = new Function(
          [
            "function ",
            E,
            "(",
            w.join(","),
            "){",
            v.join(`
`),
            "} return ",
            E,
          ].join(""),
        );
      return W();
    }
    a.exports = h;
  }),
  na = H((t, a) => {
    var s = sa();
    function n(i) {
      var e = ["'use strict'", "var CACHED={}"],
        o = [],
        r = i.funcName + "_cwise_thunk";
      e.push(["return function ", r, "(", i.shimArgs.join(","), "){"].join(""));
      for (
        var h = [],
          u = [],
          f = [
            [
              "array",
              i.arrayArgs[0],
              ".shape.slice(",
              Math.max(0, i.arrayBlockIndices[0]),
              i.arrayBlockIndices[0] < 0 ? "," + i.arrayBlockIndices[0] + ")" : ")",
            ].join(""),
          ],
          d = [],
          l = [],
          c = 0;
        c < i.arrayArgs.length;
        ++c
      ) {
        var p = i.arrayArgs[c];
        (o.push(["t", p, "=array", p, ".dtype,", "r", p, "=array", p, ".order"].join("")),
          h.push("t" + p),
          h.push("r" + p),
          u.push("t" + p),
          u.push("r" + p + ".join()"),
          f.push("array" + p + ".data"),
          f.push("array" + p + ".stride"),
          f.push("array" + p + ".offset|0"),
          c > 0 &&
            (d.push(
              "array" +
                i.arrayArgs[0] +
                ".shape.length===array" +
                p +
                ".shape.length+" +
                (Math.abs(i.arrayBlockIndices[0]) - Math.abs(i.arrayBlockIndices[c])),
            ),
            l.push(
              "array" +
                i.arrayArgs[0] +
                ".shape[shapeIndex+" +
                Math.max(0, i.arrayBlockIndices[0]) +
                "]===array" +
                p +
                ".shape[shapeIndex+" +
                Math.max(0, i.arrayBlockIndices[c]) +
                "]",
            )));
      }
      i.arrayArgs.length > 1 &&
        (e.push(
          "if (!(" +
            d.join(" && ") +
            ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')",
        ),
        e.push(
          "for(var shapeIndex=array" +
            i.arrayArgs[0] +
            ".shape.length-" +
            Math.abs(i.arrayBlockIndices[0]) +
            "; shapeIndex-->0;) {",
        ),
        e.push(
          "if (!(" +
            l.join(" && ") +
            ")) throw new Error('cwise: Arrays do not all have the same shape!')",
        ),
        e.push("}"));
      for (var c = 0; c < i.scalarArgs.length; ++c) f.push("scalar" + i.scalarArgs[c]);
      (o.push(["type=[", u.join(","), "].join()"].join("")),
        o.push("proc=CACHED[type]"),
        e.push("var " + o.join(",")),
        e.push(
          [
            "if(!proc){",
            "CACHED[type]=proc=compile([",
            h.join(","),
            "])}",
            "return proc(",
            f.join(","),
            ")}",
          ].join(""),
        ),
        i.debug &&
          console.log(
            `-----Generated thunk:
` +
              e.join(`
`) +
              `
----------`,
          ));
      var g = new Function(
        "compile",
        e.join(`
`),
      );
      return g(s.bind(void 0, i));
    }
    a.exports = n;
  }),
  ia = H((t, a) => {
    var s = na();
    function n() {
      ((this.argTypes = []),
        (this.shimArgs = []),
        (this.arrayArgs = []),
        (this.arrayBlockIndices = []),
        (this.scalarArgs = []),
        (this.offsetArgs = []),
        (this.offsetArgIndex = []),
        (this.indexArgs = []),
        (this.shapeArgs = []),
        (this.funcName = ""),
        (this.pre = null),
        (this.body = null),
        (this.post = null),
        (this.debug = !1));
    }
    function i(e) {
      var o = new n();
      ((o.pre = e.pre), (o.body = e.body), (o.post = e.post));
      var r = e.args.slice(0);
      o.argTypes = r;
      for (var h = 0; h < r.length; ++h) {
        var u = r[h];
        if (u === "array" || (typeof u == "object" && u.blockIndices)) {
          if (
            ((o.argTypes[h] = "array"),
            o.arrayArgs.push(h),
            o.arrayBlockIndices.push(u.blockIndices ? u.blockIndices : 0),
            o.shimArgs.push("array" + h),
            h < o.pre.args.length && o.pre.args[h].count > 0)
          )
            throw new Error("cwise: pre() block may not reference array args");
          if (h < o.post.args.length && o.post.args[h].count > 0)
            throw new Error("cwise: post() block may not reference array args");
        } else if (u === "scalar") (o.scalarArgs.push(h), o.shimArgs.push("scalar" + h));
        else if (u === "index") {
          if ((o.indexArgs.push(h), h < o.pre.args.length && o.pre.args[h].count > 0))
            throw new Error("cwise: pre() block may not reference array index");
          if (h < o.body.args.length && o.body.args[h].lvalue)
            throw new Error("cwise: body() block may not write to array index");
          if (h < o.post.args.length && o.post.args[h].count > 0)
            throw new Error("cwise: post() block may not reference array index");
        } else if (u === "shape") {
          if ((o.shapeArgs.push(h), h < o.pre.args.length && o.pre.args[h].lvalue))
            throw new Error("cwise: pre() block may not write to array shape");
          if (h < o.body.args.length && o.body.args[h].lvalue)
            throw new Error("cwise: body() block may not write to array shape");
          if (h < o.post.args.length && o.post.args[h].lvalue)
            throw new Error("cwise: post() block may not write to array shape");
        } else if (typeof u == "object" && u.offset)
          ((o.argTypes[h] = "offset"),
            o.offsetArgs.push({ array: u.array, offset: u.offset }),
            o.offsetArgIndex.push(h));
        else throw new Error("cwise: Unknown argument type " + r[h]);
      }
      if (o.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
      if (o.pre.args.length > r.length) throw new Error("cwise: Too many arguments in pre() block");
      if (o.body.args.length > r.length)
        throw new Error("cwise: Too many arguments in body() block");
      if (o.post.args.length > r.length)
        throw new Error("cwise: Too many arguments in post() block");
      return (
        (o.debug = !!e.printCode || !!e.debug),
        (o.funcName = e.funcName || "cwise"),
        (o.blockSize = e.blockSize || 64),
        s(o)
      );
    }
    a.exports = i;
  }),
  at = H((t) => {
    var a = ia(),
      s = { body: "", args: [], thisVars: [], localVars: [] };
    function n(l) {
      if (!l) return s;
      for (var c = 0; c < l.args.length; ++c) {
        var p = l.args[c];
        c === 0
          ? (l.args[c] = { name: p, lvalue: !0, rvalue: !!l.rvalue, count: l.count || 1 })
          : (l.args[c] = { name: p, lvalue: !1, rvalue: !0, count: 1 });
      }
      return (l.thisVars || (l.thisVars = []), l.localVars || (l.localVars = []), l);
    }
    function i(l) {
      return a({
        args: l.args,
        pre: n(l.pre),
        body: n(l.body),
        post: n(l.proc),
        funcName: l.funcName,
      });
    }
    function e(l) {
      for (var c = [], p = 0; p < l.args.length; ++p) c.push("a" + p);
      var g = new Function(
        "P",
        [
          "return function ",
          l.funcName,
          "_ndarrayops(",
          c.join(","),
          ") {P(",
          c.join(","),
          ");return a0}",
        ].join(""),
      );
      return g(i(l));
    }
    var o = {
      add: "+",
      sub: "-",
      mul: "*",
      div: "/",
      mod: "%",
      band: "&",
      bor: "|",
      bxor: "^",
      lshift: "<<",
      rshift: ">>",
      rrshift: ">>>",
    };
    (function () {
      for (var l in o) {
        var c = o[l];
        ((t[l] = e({
          args: ["array", "array", "array"],
          body: { args: ["a", "b", "c"], body: "a=b" + c + "c" },
          funcName: l,
        })),
          (t[l + "eq"] = e({
            args: ["array", "array"],
            body: { args: ["a", "b"], body: "a" + c + "=b" },
            funcName: l + "eq",
          })),
          (t[l + "s"] = e({
            args: ["array", "array", "scalar"],
            body: { args: ["a", "b", "s"], body: "a=b" + c + "s" },
            funcName: l + "s",
          })),
          (t[l + "seq"] = e({
            args: ["array", "scalar"],
            body: { args: ["a", "s"], body: "a" + c + "=s" },
            funcName: l + "seq",
          })));
      }
    })();
    var r = { not: "!", bnot: "~", neg: "-", recip: "1.0/" };
    (function () {
      for (var l in r) {
        var c = r[l];
        ((t[l] = e({
          args: ["array", "array"],
          body: { args: ["a", "b"], body: "a=" + c + "b" },
          funcName: l,
        })),
          (t[l + "eq"] = e({
            args: ["array"],
            body: { args: ["a"], body: "a=" + c + "a" },
            funcName: l + "eq",
          })));
      }
    })();
    var h = { and: "&&", or: "||", eq: "===", neq: "!==", lt: "<", gt: ">", leq: "<=", geq: ">=" };
    (function () {
      for (var l in h) {
        var c = h[l];
        ((t[l] = e({
          args: ["array", "array", "array"],
          body: { args: ["a", "b", "c"], body: "a=b" + c + "c" },
          funcName: l,
        })),
          (t[l + "s"] = e({
            args: ["array", "array", "scalar"],
            body: { args: ["a", "b", "s"], body: "a=b" + c + "s" },
            funcName: l + "s",
          })),
          (t[l + "eq"] = e({
            args: ["array", "array"],
            body: { args: ["a", "b"], body: "a=a" + c + "b" },
            funcName: l + "eq",
          })),
          (t[l + "seq"] = e({
            args: ["array", "scalar"],
            body: { args: ["a", "s"], body: "a=a" + c + "s" },
            funcName: l + "seq",
          })));
      }
    })();
    var u = [
      "abs",
      "acos",
      "asin",
      "atan",
      "ceil",
      "cos",
      "exp",
      "floor",
      "log",
      "round",
      "sin",
      "sqrt",
      "tan",
    ];
    (function () {
      for (var l = 0; l < u.length; ++l) {
        var c = u[l];
        ((t[c] = e({
          args: ["array", "array"],
          pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
          body: { args: ["a", "b"], body: "a=this_f(b)", thisVars: ["this_f"] },
          funcName: c,
        })),
          (t[c + "eq"] = e({
            args: ["array"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a"], body: "a=this_f(a)", thisVars: ["this_f"] },
            funcName: c + "eq",
          })));
      }
    })();
    var f = ["max", "min", "atan2", "pow"];
    (function () {
      for (var l = 0; l < f.length; ++l) {
        var c = f[l];
        ((t[c] = e({
          args: ["array", "array", "array"],
          pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
          body: { args: ["a", "b", "c"], body: "a=this_f(b,c)", thisVars: ["this_f"] },
          funcName: c,
        })),
          (t[c + "s"] = e({
            args: ["array", "array", "scalar"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a", "b", "c"], body: "a=this_f(b,c)", thisVars: ["this_f"] },
            funcName: c + "s",
          })),
          (t[c + "eq"] = e({
            args: ["array", "array"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a", "b"], body: "a=this_f(a,b)", thisVars: ["this_f"] },
            funcName: c + "eq",
          })),
          (t[c + "seq"] = e({
            args: ["array", "scalar"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a", "b"], body: "a=this_f(a,b)", thisVars: ["this_f"] },
            funcName: c + "seq",
          })));
      }
    })();
    var d = ["atan2", "pow"];
    ((function () {
      for (var l = 0; l < d.length; ++l) {
        var c = d[l];
        ((t[c + "op"] = e({
          args: ["array", "array", "array"],
          pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
          body: { args: ["a", "b", "c"], body: "a=this_f(c,b)", thisVars: ["this_f"] },
          funcName: c + "op",
        })),
          (t[c + "ops"] = e({
            args: ["array", "array", "scalar"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a", "b", "c"], body: "a=this_f(c,b)", thisVars: ["this_f"] },
            funcName: c + "ops",
          })),
          (t[c + "opeq"] = e({
            args: ["array", "array"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a", "b"], body: "a=this_f(b,a)", thisVars: ["this_f"] },
            funcName: c + "opeq",
          })),
          (t[c + "opseq"] = e({
            args: ["array", "scalar"],
            pre: { args: [], body: "this_f=Math." + c, thisVars: ["this_f"] },
            body: { args: ["a", "b"], body: "a=this_f(b,a)", thisVars: ["this_f"] },
            funcName: c + "opseq",
          })));
      }
    })(),
      (t.any = a({
        args: ["array"],
        pre: s,
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 1 }],
          body: "if(a){return true}",
          localVars: [],
          thisVars: [],
        },
        post: { args: [], localVars: [], thisVars: [], body: "return false" },
        funcName: "any",
      })),
      (t.all = a({
        args: ["array"],
        pre: s,
        body: {
          args: [{ name: "x", lvalue: !1, rvalue: !0, count: 1 }],
          body: "if(!x){return false}",
          localVars: [],
          thisVars: [],
        },
        post: { args: [], localVars: [], thisVars: [], body: "return true" },
        funcName: "all",
      })),
      (t.sum = a({
        args: ["array"],
        pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 1 }],
          body: "this_s+=a",
          localVars: [],
          thisVars: ["this_s"],
        },
        post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" },
        funcName: "sum",
      })),
      (t.prod = a({
        args: ["array"],
        pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=1" },
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 1 }],
          body: "this_s*=a",
          localVars: [],
          thisVars: ["this_s"],
        },
        post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" },
        funcName: "prod",
      })),
      (t.norm2squared = a({
        args: ["array"],
        pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 2 }],
          body: "this_s+=a*a",
          localVars: [],
          thisVars: ["this_s"],
        },
        post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" },
        funcName: "norm2squared",
      })),
      (t.norm2 = a({
        args: ["array"],
        pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 2 }],
          body: "this_s+=a*a",
          localVars: [],
          thisVars: ["this_s"],
        },
        post: { args: [], localVars: [], thisVars: ["this_s"], body: "return Math.sqrt(this_s)" },
        funcName: "norm2",
      })),
      (t.norminf = a({
        args: ["array"],
        pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 4 }],
          body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
          localVars: [],
          thisVars: ["this_s"],
        },
        post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" },
        funcName: "norminf",
      })),
      (t.norm1 = a({
        args: ["array"],
        pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
        body: {
          args: [{ name: "a", lvalue: !1, rvalue: !0, count: 3 }],
          body: "this_s+=a<0?-a:a",
          localVars: [],
          thisVars: ["this_s"],
        },
        post: { args: [], localVars: [], thisVars: ["this_s"], body: "return this_s" },
        funcName: "norm1",
      })),
      (t.sup = a({
        args: ["array"],
        pre: { body: "this_h=-Infinity", args: [], thisVars: ["this_h"], localVars: [] },
        body: {
          body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
          args: [{ name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 }],
          thisVars: ["this_h"],
          localVars: [],
        },
        post: { body: "return this_h", args: [], thisVars: ["this_h"], localVars: [] },
      })),
      (t.inf = a({
        args: ["array"],
        pre: { body: "this_h=Infinity", args: [], thisVars: ["this_h"], localVars: [] },
        body: {
          body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
          args: [{ name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 }],
          thisVars: ["this_h"],
          localVars: [],
        },
        post: { body: "return this_h", args: [], thisVars: ["this_h"], localVars: [] },
      })),
      (t.argmin = a({
        args: ["index", "array", "shape"],
        pre: {
          body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
          args: [
            { name: "_inline_0_arg0_", lvalue: !1, rvalue: !1, count: 0 },
            { name: "_inline_0_arg1_", lvalue: !1, rvalue: !1, count: 0 },
            { name: "_inline_0_arg2_", lvalue: !1, rvalue: !0, count: 1 },
          ],
          thisVars: ["this_i", "this_v"],
          localVars: [],
        },
        body: {
          body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
          args: [
            { name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 },
            { name: "_inline_1_arg1_", lvalue: !1, rvalue: !0, count: 2 },
          ],
          thisVars: ["this_i", "this_v"],
          localVars: ["_inline_1_k"],
        },
        post: { body: "{return this_i}", args: [], thisVars: ["this_i"], localVars: [] },
      })),
      (t.argmax = a({
        args: ["index", "array", "shape"],
        pre: {
          body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
          args: [
            { name: "_inline_0_arg0_", lvalue: !1, rvalue: !1, count: 0 },
            { name: "_inline_0_arg1_", lvalue: !1, rvalue: !1, count: 0 },
            { name: "_inline_0_arg2_", lvalue: !1, rvalue: !0, count: 1 },
          ],
          thisVars: ["this_i", "this_v"],
          localVars: [],
        },
        body: {
          body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
          args: [
            { name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 },
            { name: "_inline_1_arg1_", lvalue: !1, rvalue: !0, count: 2 },
          ],
          thisVars: ["this_i", "this_v"],
          localVars: ["_inline_1_k"],
        },
        post: { body: "{return this_i}", args: [], thisVars: ["this_i"], localVars: [] },
      })),
      (t.random = e({
        args: ["array"],
        pre: { args: [], body: "this_f=Math.random", thisVars: ["this_f"] },
        body: { args: ["a"], body: "a=this_f()", thisVars: ["this_f"] },
        funcName: "random",
      })),
      (t.assign = e({
        args: ["array", "array"],
        body: { args: ["a", "b"], body: "a=b" },
        funcName: "assign",
      })),
      (t.assigns = e({
        args: ["array", "scalar"],
        body: { args: ["a", "b"], body: "a=b" },
        funcName: "assigns",
      })),
      (t.equals = a({
        args: ["array", "array"],
        pre: s,
        body: {
          args: [
            { name: "x", lvalue: !1, rvalue: !0, count: 1 },
            { name: "y", lvalue: !1, rvalue: !0, count: 1 },
          ],
          body: "if(x!==y){return false}",
          localVars: [],
          thisVars: [],
        },
        post: { args: [], localVars: [], thisVars: [], body: "return true" },
        funcName: "equals",
      })));
  }),
  $ = T(tt()),
  R = T(at()),
  U = T(tt()),
  j = T(at()),
  nt = class {
    constructor(t, a, s) {
      ((this._dataNormalized = t), (this._minD = a), (this._maxD = s));
    }
    static createFromUnnormalized(t) {
      let a = j.sup(t),
        s = j.inf(t),
        n = (0, U.default)(new Float32Array(t.size), t.shape),
        i = a - s;
      return (i < 1e-4 ? j.assigns(n, 0) : (j.subs(n, t, s), j.divs(n, n, i)), new nt(n, s, a));
    }
    get data() {
      return this._dataNormalized;
    }
    get minD() {
      return this._minD;
    }
    get maxD() {
      return this._maxD;
    }
    denormalize() {
      let t = (0, U.default)(
        new Float32Array(this._dataNormalized.size),
        this._dataNormalized.shape,
      );
      return (
        j.muls(t, this._dataNormalized, this._maxD - this._minD),
        j.adds(t, t, this._minD),
        t
      );
    }
  },
  B = class {
    constructor(t, a) {
      ((this._quantized = t), (this._method = a));
    }
    get quantized() {
      return this._quantized;
    }
    static maxIntBits(t) {
      return 2 ** t - 1;
    }
    static fromNormalized(t, a) {
      let s = t.data,
        n;
      if (a === "norm8x") {
        let i = B.maxIntBits(8),
          e = (0, U.default)(new Float32Array(s.size), s.shape);
        (j.muls(e, s, i), j.roundeq(e), (n = (0, U.default)(new Uint8Array(e.data), s.shape)));
      } else if (a === "norm565") {
        let i = (0, U.default)(new Float32Array(s.size), s.shape);
        (j.assign(i, s),
          j.mulseq(i.pick(null, 0), B.maxIntBits(5)),
          j.mulseq(i.pick(null, 1), B.maxIntBits(6)),
          j.mulseq(i.pick(null, 2), B.maxIntBits(5)),
          j.roundeq(i));
        let e = (0, U.default)(new Uint16Array(i.data), s.shape),
          o = (0, U.default)(new Uint16Array(s.shape[0]), [s.shape[0]]),
          r = (0, U.default)(new Uint16Array(s.shape[0]), [s.shape[0]]);
        (j.lshifts(o, e.pick(null, 0), 11),
          j.lshifts(r, e.pick(null, 1), 5),
          j.boreq(o, r),
          j.boreq(o, e.pick(null, 2)),
          (n = o));
      } else {
        let i = (0, U.default)(new Float32Array(s.size), s.shape);
        (j.assign(i, s),
          j.mulseq(i.pick(null, 0), B.maxIntBits(11)),
          j.mulseq(i.pick(null, 1), B.maxIntBits(10)),
          j.mulseq(i.pick(null, 2), B.maxIntBits(11)),
          j.roundeq(i));
        let e = (0, U.default)(new Uint32Array(i.data), s.shape),
          o = (0, U.default)(new Uint32Array(s.shape[0]), [s.shape[0]]),
          r = (0, U.default)(new Uint32Array(s.shape[0]), [s.shape[0]]);
        (j.lshifts(o, e.pick(null, 0), 21),
          j.lshifts(r, e.pick(null, 1), 11),
          j.boreq(o, r),
          j.boreq(o, e.pick(null, 2)),
          (n = o));
      }
      return new B(n, a);
    }
    dequantize(t, a) {
      let s = this._method,
        n,
        i = this._quantized;
      if (s === "norm8x") {
        let e = B.maxIntBits(8);
        ((n = (0, U.default)(new Float32Array(i.size), i.shape)), j.muls(n, i, 1 / e));
      } else if (s === "norm565") {
        let e = (0, U.default)(new Uint8Array(i.shape[0]), [i.shape[0]]),
          o = (0, U.default)(new Uint8Array(i.shape[0]), [i.shape[0]]),
          r = (0, U.default)(new Uint8Array(i.shape[0]), [i.shape[0]]);
        (j.rrshifts(e, i, 11),
          j.rrshifts(o, i, 5),
          j.bandseq(o, B.maxIntBits(6)),
          j.bands(r, i, B.maxIntBits(5)),
          (n = (0, U.default)(new Float32Array(i.shape[0] * 3), [i.shape[0], 3])),
          j.muls(n.pick(null, 0), e, 1 / B.maxIntBits(5)),
          j.muls(n.pick(null, 1), o, 1 / B.maxIntBits(6)),
          j.muls(n.pick(null, 2), r, 1 / B.maxIntBits(5)));
      } else {
        let e = (0, U.default)(new Uint16Array(i.shape[0]), [i.shape[0]]),
          o = (0, U.default)(new Uint16Array(i.shape[0]), [i.shape[0]]),
          r = (0, U.default)(new Uint16Array(i.shape[0]), [i.shape[0]]);
        (j.rrshifts(e, i, 21),
          j.rrshifts(o, i, 11),
          j.bandseq(o, B.maxIntBits(10)),
          j.bands(r, i, B.maxIntBits(11)),
          (n = (0, U.default)(new Float32Array(i.shape[0] * 3), [i.shape[0], 3])),
          j.muls(n.pick(null, 0), e, 1 / B.maxIntBits(11)),
          j.muls(n.pick(null, 1), o, 1 / B.maxIntBits(10)),
          j.muls(n.pick(null, 2), r, 1 / B.maxIntBits(11)));
      }
      return new nt(n, t, a);
    }
  },
  L = class {
    constructor(t, a, s, n, i, e = !1) {
      ((this._quantized = t),
        (this._minMaxMatrix = a),
        (this._chunkSize = s),
        (this._quantizationMethod = n),
        (this._variableChunkSize = i),
        (this._isDynamicChunks = e));
    }
    get length() {
      return this._quantized.shape[0];
    }
    get nchunks() {
      return this._minMaxMatrix.shape[0];
    }
    get quantized() {
      return this._quantized;
    }
    get method() {
      return this._quantizationMethod;
    }
    get minmaxMatrix() {
      return this._minMaxMatrix;
    }
    _createPrunedMinMax(t) {
      let a = t.length,
        s = this.minmaxMatrix.shape[0] - a,
        n = (0, $.default)(new Float32Array(s * 2), [s, 2]),
        i = 0,
        e = s,
        o = 0,
        r = this.minmaxMatrix.shape[0];
      for (let h = 0; h < t.length; h++)
        ((r = t[h]),
          (e = r - o + i),
          e > i && R.assign(n.hi(e, 2).lo(i, 0), this.minmaxMatrix.hi(r, 2).lo(o, 0)),
          (i = e),
          (o = r + 1));
      return (i < s && R.assign(n.lo(i, 0), this.minmaxMatrix.lo(o, 0)), n);
    }
    _createPrunedQuantized(t) {
      let a = t.length,
        s = this.quantized.shape[0] - a,
        n = this._quantizationMethod,
        i,
        e;
      if (n === "norm8x") {
        e = this._quantized.shape[1];
        let f = e ? s * e : s;
        i = (0, $.default)(new Uint8Array(f), e ? [s, e] : [s, 1]);
      } else
        n === "norm565"
          ? (i = (0, $.default)(new Uint16Array(s), [s]))
          : (i = (0, $.default)(new Uint32Array(s), [s]));
      let o = 0,
        r = s,
        h = 0,
        u = i.shape[0];
      for (let f = 0; f < t.length; f++)
        ((u = t[f]),
          (r = u - h + o),
          r > o &&
            (e
              ? R.assign(i.hi(r, e).lo(o, 0), this._quantized.hi(u, e).lo(h, 0))
              : R.assign(i.hi(r).lo(o), this._quantized.hi(u).lo(h))),
          (o = r),
          (h = u + 1));
      return (
        o < s &&
          (e
            ? R.assign(i.lo(o, 0), this._quantized.lo(h, 0))
            : R.assign(i.lo(o), this._quantized.lo(h))),
        i
      );
    }
    pruneFeature(t, a, s) {
      let n = this._createPrunedQuantized(t),
        i = this._createPrunedMinMax(a);
      return new L(n, i, this._chunkSize, this._quantizationMethod, s, !0);
    }
    static getRequiredNChunks(t, a) {
      return Math.floor(t / a);
    }
    static fromArray(t, a, s) {
      let n = t.shape[0],
        i = Math.floor(n / s),
        e = (0, $.default)(new Float32Array(i * 2), [i, 2], [2, 1]),
        o;
      a === "norm8x"
        ? (o = (0, $.default)(new Uint8Array(t.size), t.shape))
        : a === "norm565"
          ? (o = (0, $.default)(new Uint16Array(t.shape[0]), [t.shape[0]]))
          : (o = (0, $.default)(new Uint32Array(t.shape[0]), [t.shape[0]]));
      for (let r = 0; r < i; r++) {
        let h = r * s,
          u = r + 1 < i ? (r + 1) * s : n,
          f;
        (t.shape.length > 1
          ? (f = nt.createFromUnnormalized(t.hi(u, t.shape[1]).lo(h, 0)))
          : (f = nt.createFromUnnormalized(t.hi(u).lo(h))),
          e.set(r, 0, f.minD),
          e.set(r, 1, f.maxD),
          o.shape.length > 1
            ? R.assign(o.hi(u, o.shape[1]).lo(h, 0), B.fromNormalized(f, a).quantized)
            : R.assign(o.hi(u).lo(h), B.fromNormalized(f, a).quantized));
      }
      return new L(o, e, s, a);
    }
    denormDequant() {
      let t = this._minMaxMatrix.shape[0],
        a = this._quantized,
        s = a.shape[0],
        n = this._quantizationMethod,
        i = this._chunkSize,
        e;
      if (this._isDynamicChunks) {
        if (!this._variableChunkSize)
          throw new Error("variable chunk must exists if chunkSize isDynamic");
        e = this._variableChunkSize;
      }
      let o;
      n === "norm8x"
        ? (o = (0, $.default)(new Float32Array(a.size), a.shape))
        : (o = (0, $.default)(new Float32Array(s * 3), [s, 3]));
      let r = 0,
        h = i;
      for (let u = 0; u < t; u++) {
        let [f, d] = [this._minMaxMatrix.get(u, 0), this._minMaxMatrix.get(u, 1)];
        this._isDynamicChunks && (h = e[u]);
        let l = u + 1 < t ? r + h : s,
          c;
        (a.shape.length > 1
          ? (c = new B(a.hi(l, a.shape[1]).lo(r, 0), n))
          : (c = new B(a.hi(l).lo(r), n)),
          R.assign(o.hi(l, o.shape[1]).lo(r, 0), c.dequantize(f, d).denormalize()),
          (r = l));
      }
      return o;
    }
    static async fetchArrayBuffer(t) {
      return await (await fetch(t, { mode: "cors" })).arrayBuffer();
    }
  },
  G = T(tt()),
  V = T(at()),
  ea = "http://127.0.0.1:8000",
  J = T(tt()),
  C = T(at()),
  bt = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];
function _t(t) {
  return t < 1e5
    ? t < 100
      ? t < 10
        ? 0
        : 1
      : t < 1e4
        ? t < 1e3
          ? 2
          : 3
        : 4
    : t < 1e7
      ? t < 1e6
        ? 5
        : 6
      : t < 1e9
        ? t < 1e8
          ? 7
          : 8
        : 9;
}
function vt(t, a) {
  if (t === a) return 0;
  if (~~t === t && ~~a === a) {
    if (t === 0 || a === 0) return t < a ? -1 : 1;
    if (t < 0 || a < 0) {
      if (a >= 0) return -1;
      if (t >= 0) return 1;
      ((t = -t), (a = -a));
    }
    let i = _t(t),
      e = _t(a),
      o = 0;
    return (
      i < e
        ? ((t *= bt[e - i - 1]), (a /= 10), (o = -1))
        : i > e && ((a *= bt[i - e - 1]), (t /= 10), (o = 1)),
      t === a ? o : t < a ? -1 : 1
    );
  }
  let s = String(t),
    n = String(a);
  return s === n ? 0 : s < n ? -1 : 1;
}
function oa(t) {
  let a = 0;
  for (; t >= 32;) ((a |= t & 1), (t >>= 1));
  return t + a;
}
function Mt(t, a, s, n) {
  let i = a + 1;
  if (i === s) return 1;
  if (n(t[i++], t[a]) < 0) {
    for (; i < s && n(t[i], t[i - 1]) < 0;) i++;
    ra(t, a, i);
  } else for (; i < s && n(t[i], t[i - 1]) >= 0;) i++;
  return i - a;
}
function ra(t, a, s) {
  for (s--; a < s;) {
    let n = t[a];
    ((t[a++] = t[s]), (t[s--] = n));
  }
}
function xt(t, a, s, n, i) {
  for (n === a && n++; n < s; n++) {
    let e = t[n],
      o = a,
      r = n;
    for (; o < r;) {
      let u = (o + r) >>> 1;
      i(e, t[u]) < 0 ? (r = u) : (o = u + 1);
    }
    let h = n - o;
    switch (h) {
      case 3:
        t[o + 3] = t[o + 2];
      case 2:
        t[o + 2] = t[o + 1];
      case 1:
        t[o + 1] = t[o];
        break;
      default:
        for (; h > 0;) ((t[o + h] = t[o + h - 1]), h--);
    }
    t[o] = e;
  }
}
function et(t, a, s, n, i, e) {
  let o = 0,
    r = 0,
    h = 1;
  if (e(t, a[s + i]) > 0) {
    for (r = n - i; h < r && e(t, a[s + i + h]) > 0;)
      ((o = h), (h = (h << 1) + 1), h <= 0 && (h = r));
    (h > r && (h = r), (o += i), (h += i));
  } else {
    for (r = i + 1; h < r && e(t, a[s + i - h]) <= 0;)
      ((o = h), (h = (h << 1) + 1), h <= 0 && (h = r));
    h > r && (h = r);
    let u = o;
    ((o = i - h), (h = i - u));
  }
  for (o++; o < h;) {
    let u = o + ((h - o) >>> 1);
    e(t, a[s + u]) > 0 ? (o = u + 1) : (h = u);
  }
  return h;
}
function ot(t, a, s, n, i, e) {
  let o = 0,
    r = 0,
    h = 1;
  if (e(t, a[s + i]) < 0) {
    for (r = i + 1; h < r && e(t, a[s + i - h]) < 0;)
      ((o = h), (h = (h << 1) + 1), h <= 0 && (h = r));
    h > r && (h = r);
    let u = o;
    ((o = i - h), (h = i - u));
  } else {
    for (r = n - i; h < r && e(t, a[s + i + h]) >= 0;)
      ((o = h), (h = (h << 1) + 1), h <= 0 && (h = r));
    (h > r && (h = r), (o += i), (h += i));
  }
  for (o++; o < h;) {
    let u = o + ((h - o) >>> 1);
    e(t, a[s + u]) < 0 ? (h = u) : (o = u + 1);
  }
  return h;
}
var ha = class {
  constructor(t, a) {
    (P(this, "array", null),
      P(this, "compare", null),
      P(this, "minGallop", 7),
      P(this, "length", 0),
      P(this, "tmpStorageLength", 256),
      P(this, "stackLength", 0),
      P(this, "runStart", null),
      P(this, "runLength", null),
      P(this, "stackSize", 0),
      (this.array = t),
      (this.compare = a),
      (this.length = t.length),
      this.length < 2 * 256 && (this.tmpStorageLength = this.length >>> 1),
      (this.tmp = new Array(this.tmpStorageLength)),
      (this.stackLength =
        this.length < 120 ? 5 : this.length < 1542 ? 10 : this.length < 119151 ? 19 : 40),
      (this.runStart = new Array(this.stackLength)),
      (this.runLength = new Array(this.stackLength)));
  }
  pushRun(t, a) {
    ((this.runStart[this.stackSize] = t),
      (this.runLength[this.stackSize] = a),
      (this.stackSize += 1));
  }
  mergeRuns() {
    for (; this.stackSize > 1;) {
      let t = this.stackSize - 2;
      if (
        (t >= 1 && this.runLength[t - 1] <= this.runLength[t] + this.runLength[t + 1]) ||
        (t >= 2 && this.runLength[t - 2] <= this.runLength[t] + this.runLength[t - 1])
      )
        this.runLength[t - 1] < this.runLength[t + 1] && t--;
      else if (this.runLength[t] > this.runLength[t + 1]) break;
      this.mergeAt(t);
    }
  }
  forceMergeRuns() {
    for (; this.stackSize > 1;) {
      let t = this.stackSize - 2;
      (t > 0 && this.runLength[t - 1] < this.runLength[t + 1] && t--, this.mergeAt(t));
    }
  }
  mergeAt(t) {
    let a = this.compare,
      s = this.array,
      n = this.runStart[t],
      i = this.runLength[t],
      e = this.runStart[t + 1],
      o = this.runLength[t + 1];
    ((this.runLength[t] = i + o),
      t === this.stackSize - 3 &&
        ((this.runStart[t + 1] = this.runStart[t + 2]),
        (this.runLength[t + 1] = this.runLength[t + 2])),
      this.stackSize--);
    let r = ot(s[e], s, n, i, 0, a);
    ((n += r),
      (i -= r),
      i !== 0 &&
        ((o = et(s[n + i - 1], s, e, o, o - 1, a)),
        o !== 0 && (i <= o ? this.mergeLow(n, i, e, o) : this.mergeHigh(n, i, e, o))));
  }
  mergeLow(t, a, s, n) {
    let i = this.compare,
      e = this.array,
      o = this.tmp,
      r = 0;
    for (r = 0; r < a; r++) o[r] = e[t + r];
    let h = 0,
      u = s,
      f = t;
    if (((e[f++] = e[u++]), --n === 0)) {
      for (r = 0; r < a; r++) e[f + r] = o[h + r];
      return;
    }
    if (a === 1) {
      for (r = 0; r < n; r++) e[f + r] = e[u + r];
      e[f + n] = o[h];
      return;
    }
    let d = this.minGallop;
    for (;;) {
      let l = 0,
        c = 0,
        p = !1;
      do
        if (i(e[u], o[h]) < 0) {
          if (((e[f++] = e[u++]), c++, (l = 0), --n === 0)) {
            p = !0;
            break;
          }
        } else if (((e[f++] = o[h++]), l++, (c = 0), --a === 1)) {
          p = !0;
          break;
        }
      while ((l | c) < d);
      if (p) break;
      do {
        if (((l = ot(e[u], o, h, a, 0, i)), l !== 0)) {
          for (r = 0; r < l; r++) e[f + r] = o[h + r];
          if (((f += l), (h += l), (a -= l), a <= 1)) {
            p = !0;
            break;
          }
        }
        if (((e[f++] = e[u++]), --n === 0)) {
          p = !0;
          break;
        }
        if (((c = et(o[h], e, u, n, 0, i)), c !== 0)) {
          for (r = 0; r < c; r++) e[f + r] = e[u + r];
          if (((f += c), (u += c), (n -= c), n === 0)) {
            p = !0;
            break;
          }
        }
        if (((e[f++] = o[h++]), --a === 1)) {
          p = !0;
          break;
        }
        d--;
      } while (l >= 7 || c >= 7);
      if (p) break;
      (d < 0 && (d = 0), (d += 2));
    }
    if (((this.minGallop = d), d < 1 && (this.minGallop = 1), a === 1)) {
      for (r = 0; r < n; r++) e[f + r] = e[u + r];
      e[f + n] = o[h];
    } else {
      if (a === 0) throw new Error("mergeLow preconditions were not respected");
      for (r = 0; r < a; r++) e[f + r] = o[h + r];
    }
  }
  mergeHigh(t, a, s, n) {
    let i = this.compare,
      e = this.array,
      o = this.tmp,
      r = 0;
    for (r = 0; r < n; r++) o[r] = e[s + r];
    let h = t + a - 1,
      u = n - 1,
      f = s + n - 1,
      d = 0,
      l = 0;
    if (((e[f--] = e[h--]), --a === 0)) {
      for (d = f - (n - 1), r = 0; r < n; r++) e[d + r] = o[r];
      return;
    }
    if (n === 1) {
      for (f -= a, h -= a, l = f + 1, d = h + 1, r = a - 1; r >= 0; r--) e[l + r] = e[d + r];
      e[f] = o[u];
      return;
    }
    let c = this.minGallop;
    for (;;) {
      let p = 0,
        g = 0,
        y = !1;
      do
        if (i(o[u], e[h]) < 0) {
          if (((e[f--] = e[h--]), p++, (g = 0), --a === 0)) {
            y = !0;
            break;
          }
        } else if (((e[f--] = o[u--]), g++, (p = 0), --n === 1)) {
          y = !0;
          break;
        }
      while ((p | g) < c);
      if (y) break;
      do {
        if (((p = a - ot(o[u], e, t, a, a - 1, i)), p !== 0)) {
          for (f -= p, h -= p, a -= p, l = f + 1, d = h + 1, r = p - 1; r >= 0; r--)
            e[l + r] = e[d + r];
          if (a === 0) {
            y = !0;
            break;
          }
        }
        if (((e[f--] = o[u--]), --n === 1)) {
          y = !0;
          break;
        }
        if (((g = n - et(e[h], o, 0, n, n - 1, i)), g !== 0)) {
          for (f -= g, u -= g, n -= g, l = f + 1, d = u + 1, r = 0; r < g; r++) e[l + r] = o[d + r];
          if (n <= 1) {
            y = !0;
            break;
          }
        }
        if (((e[f--] = e[h--]), --a === 0)) {
          y = !0;
          break;
        }
        c--;
      } while (p >= 7 || g >= 7);
      if (y) break;
      (c < 0 && (c = 0), (c += 2));
    }
    if (((this.minGallop = c), c < 1 && (this.minGallop = 1), n === 1)) {
      for (f -= a, h -= a, l = f + 1, d = h + 1, r = a - 1; r >= 0; r--) e[l + r] = e[d + r];
      e[f] = o[u];
    } else {
      if (n === 0) throw new Error("mergeHigh preconditions were not respected");
      for (d = f - (n - 1), r = 0; r < n; r++) e[d + r] = o[r];
    }
  }
};
function ua(t, a, s, n) {
  if (!Array.isArray(t)) throw new TypeError("Can only sort arrays");
  (a ? typeof a != "function" && ((n = s), (s = a), (a = vt)) : (a = vt),
    s || (s = 0),
    n || (n = t.length));
  let i = n - s;
  if (i < 2) return;
  let e = 0;
  if (i < 32) {
    ((e = Mt(t, s, n, a)), xt(t, s, n, s + e, a));
    return;
  }
  let o = new ha(t, a),
    r = oa(i);
  do {
    if (((e = Mt(t, s, n, a)), e < r)) {
      let h = i;
      (h > r && (h = r), xt(t, s, s + h, s + e, a), (e = h));
    }
    (o.pushRun(s, e), o.mergeRuns(), (i -= e), (s += e));
  } while (i !== 0);
  o.forceMergeRuns();
}
function rt(t) {
  let a = (0, J.default)(new Int32Array(t.shape[0]), [t.shape[0]]),
    s = (0, J.default)(new Int32Array(t.shape[0]), [t.shape[0]]);
  return (
    C.bands(a, t, 1023),
    C.lshifts(s, a, 16),
    C.bxoreq(a, s),
    C.bandseq(a, 4278190335),
    C.lshifts(s, a, 8),
    C.bxoreq(a, s),
    C.bandseq(a, 50393103),
    C.lshifts(s, a, 4),
    C.bxoreq(a, s),
    C.bandseq(a, 51130563),
    C.lshifts(s, a, 2),
    C.bxoreq(a, s),
    C.bandseq(a, 153391689),
    a
  );
}
function la(t) {
  let a = rt(t.pick(null, 0)),
    s = rt(t.pick(null, 1));
  C.lshiftseq(s, 1);
  let n = rt(t.pick(null, 2));
  return (C.lshiftseq(n, 2), C.boreq(a, s), C.boreq(a, n), a);
}
function Z(t, a) {
  if (t.shape[0] !== a.shape[0]) throw new Error("wrong length");
  let s = (0, J.default)(new Float32Array(t.size), t.shape, t.stride, t.offset);
  for (let n = 0; n < a.shape[0]; n++) {
    let i = a.get(n);
    if (t.shape.length > 1) for (let e = 0; e < t.shape[1]; e++) s.set(n, e, t.get(i, e));
    else s.set(n, t.get(i));
  }
  return s;
}
function ca(t) {
  let a = C.sup(t),
    s = C.inf(t),
    n = 1e3 / Math.min(1e3, a - s),
    i = (0, J.default)(new Float32Array(t.data), t.shape);
  C.mulseq(i, n);
  let e = (0, J.default)(new Int32Array(i.data), t.shape),
    o = la(e),
    r = Array.from(o.data).map((u, f) => [u, f]);
  ua(r, (u, f) => u[0] - f[0]);
  let h = r.map(([u, f]) => f);
  return (0, J.default)(Uint32Array.from(h));
}
var Y = class {
    constructor(t, a, s, n, i, e, o, r, h, u) {
      ((this.propertyDescs = t),
        (this.format = a),
        (this.nsplats = s),
        (this.xyz = n),
        (this.colors = i),
        (this.harmonics = e),
        (this.opacity = o),
        (this.scaling = r),
        (this.rotation = h),
        (this.maxSHDegree = u));
    }
    getPlyBinary() {
      let t = Y._generateHeaderString(this.propertyDescs, this.format, this.nsplats),
        a = new TextEncoder().encode(t),
        s = Object.keys(this.propertyDescs).length,
        n = (0, G.default)(new Float32Array(this.nsplats * s), [this.nsplats, s]);
      if (
        (V.assign(n.pick(null, this.propertyDescs.x.index), this.xyz.pick(null, 0)),
        V.assign(n.pick(null, this.propertyDescs.y.index), this.xyz.pick(null, 1)),
        V.assign(n.pick(null, this.propertyDescs.z.index), this.xyz.pick(null, 2)),
        V.assign(n.pick(null, this.propertyDescs.f_dc_0.index), this.colors.pick(null, 0)),
        V.assign(n.pick(null, this.propertyDescs.f_dc_1.index), this.colors.pick(null, 1)),
        V.assign(n.pick(null, this.propertyDescs.f_dc_2.index), this.colors.pick(null, 2)),
        V.assign(n.pick(null, this.propertyDescs.opacity.index), this.opacity.pick(null, 0)),
        V.assign(n.pick(null, this.propertyDescs.scale_0.index), this.scaling.pick(null, 0)),
        V.assign(n.pick(null, this.propertyDescs.scale_1.index), this.scaling.pick(null, 1)),
        V.assign(n.pick(null, this.propertyDescs.scale_2.index), this.scaling.pick(null, 2)),
        V.assign(n.pick(null, this.propertyDescs.rot_0.index), this.rotation.pick(null, 0)),
        V.assign(n.pick(null, this.propertyDescs.rot_1.index), this.rotation.pick(null, 1)),
        V.assign(n.pick(null, this.propertyDescs.rot_2.index), this.rotation.pick(null, 2)),
        V.assign(n.pick(null, this.propertyDescs.rot_3.index), this.rotation.pick(null, 3)),
        this.harmonics && this.harmonics.length > 0)
      )
        for (let o = 0; o < this.harmonics.length; o++) {
          let r = o * 3;
          (V.assign(
            n.pick(null, this.propertyDescs[`f_rest_${r}`].index),
            this.harmonics[o].pick(null, 0),
          ),
            V.assign(
              n.pick(null, this.propertyDescs[`f_rest_${r + 1}`].index),
              this.harmonics[o].pick(null, 1),
            ),
            V.assign(
              n.pick(null, this.propertyDescs[`f_rest_${r + 2}`].index),
              this.harmonics[o].pick(null, 2),
            ));
        }
      let i = new Uint8Array(n.data.buffer),
        e = new Uint8Array(i.length + a.length);
      return (e.set(a), e.set(i, a.length), e.buffer);
    }
    save(t, a) {
      let s = this.getPlyBinary(),
        n = new Blob([s], { type: "application/octet-stream" }),
        i = new File([n], t),
        e = new FormData();
      (e.append("file", i),
        e.append("filename", t),
        e.append("basedir", a),
        fetch(`${ea}/push_file`, { method: "POST", body: e }));
    }
    static async loadFile(t) {
      return await (await fetch(t)).arrayBuffer();
    }
    mortonPositionSplatsSort() {
      let t = ca(this.xyz),
        a = Z(this.xyz, t),
        s = Z(this.colors, t),
        n = Z(this.opacity, t),
        i = Z(this.scaling, t),
        e = Z(this.rotation, t),
        o = [];
      for (let r = 0; r < this.harmonics.length; r++) o.push(Z(this.harmonics[r], t));
      return new Y(
        this.propertyDescs,
        this.format,
        this.nsplats,
        a,
        s,
        o,
        n,
        i,
        e,
        this.maxSHDegree,
      );
    }
    static _generateHeaderString(t, a, s) {
      let n = `ply
format ${a.format} ${a.version}
element vertex ${s}`,
        i = Object.keys(t).length,
        e = Array(i);
      for (let o in t) {
        let r = t[o];
        e[r.index] = { name: o, dtype: r.dtype };
      }
      for (let o = 0; o < e.length; o++)
        n = `${n}
property ${e[o].dtype} ${e[o].name}`;
      return `${n}
end_header
`;
    }
    static fromArrayBuffer(t, a = 3) {
      let { splatCount: s, vertexData: n, propertiesDesc: i, format: e } = Y.decodeHeader(t),
        o = n.buffer.slice(n.byteOffset),
        r = Object.keys(i).length,
        h = (0, G.default)(new Float32Array(o), [s, r]),
        u = 0,
        f = {},
        d = { double: 8, int: 4, uint: 4, float: 4, short: 2, ushort: 2, uchar: 1, char: 1 };
      for (let b in i)
        if (i.hasOwnProperty(b)) {
          let M = i[b].dtype;
          ((f[b] = u), (u += d[M]));
        }
      let l = (0, G.default)(new Float32Array(s * 3), [s, 3]);
      (V.assign(l.pick(null, 0), h.pick(null, f.x / 4)),
        V.assign(l.pick(null, 1), h.pick(null, f.y / 4)),
        V.assign(l.pick(null, 2), h.pick(null, f.z / 4)));
      let c = (0, G.default)(new Float32Array(s * 3), [s, 3]);
      (V.assign(c.pick(null, 0), h.pick(null, f.scale_0 / 4)),
        V.assign(c.pick(null, 1), h.pick(null, f.scale_1 / 4)),
        V.assign(c.pick(null, 2), h.pick(null, f.scale_2 / 4)));
      let p = (0, G.default)(new Float32Array(s * 3), [s, 3]);
      (V.assign(p.pick(null, 0), h.pick(null, f.f_dc_0 / 4)),
        V.assign(p.pick(null, 1), h.pick(null, f.f_dc_1 / 4)),
        V.assign(p.pick(null, 2), h.pick(null, f.f_dc_2 / 4)));
      let g = (0, G.default)(new Float32Array(s * 4), [s, 4]);
      (V.assign(g.pick(null, 0), h.pick(null, f.rot_1 / 4)),
        V.assign(g.pick(null, 1), h.pick(null, f.rot_2 / 4)),
        V.assign(g.pick(null, 2), h.pick(null, f.rot_3 / 4)),
        V.assign(g.pick(null, 3), h.pick(null, f.rot_0 / 4)));
      for (let b = 0; b < s; b++) {
        let M = g.pick(b, null),
          x = Math.sqrt(M.get(0) ** 2 + M.get(1) ** 2 + M.get(2) ** 2 + M.get(3) ** 2);
        V.divseq(M, x);
      }
      let y = (0, G.default)(new Float32Array(s * 1), [s, 1]);
      (V.assign(y.pick(null, 0), h.pick(null, f.opacity / 4)),
        V.negeq(y),
        V.expeq(y),
        V.addseq(y, 1),
        V.recipeq(y),
        V.mulseq(y, 255));
      let m = (Math.min(Math.max(a, 0), 3) + 1) ** 2 - 1,
        _ = [];
      for (let b = 0; b < m; b++) {
        let M = (0, G.default)(new Float32Array(s * 3), [s, 3]),
          x = b * 3;
        (V.assign(M.pick(null, 0), h.pick(null, f[`f_rest_${x}`] / 4)),
          V.assign(M.pick(null, 1), h.pick(null, f[`f_rest_${x + 1}`] / 4)),
          V.assign(M.pick(null, 2), h.pick(null, f[`f_rest_${x + 2}`] / 4)),
          _.push(M));
      }
      return new Y(i, e, s, l, p, _, y, c, g, a);
    }
    static async fromPLYFile(t, a = 3) {
      let s = await Y.loadFile(t);
      return Y.fromArrayBuffer(s, a);
    }
    static decodeHeader(t) {
      let a = new TextDecoder(),
        s = 0,
        n = "",
        i = 100;
      for (;;) {
        if (s + i >= t.byteLength)
          throw new Error("End of file reached while searching for end of header");
        let l = new Uint8Array(t, s, i);
        ((n += a.decode(l)), (s += i));
        let c = s - i * 2,
          p = new Uint8Array(t, Math.max(0, c), c > 0 ? i * 2 : i);
        if (a.decode(p).includes("end_header")) break;
      }
      let e = n.split(`
`),
        o = 0,
        r = {},
        h = 0,
        u;
      for (let l = 0; l < e.length; l++) {
        let c = e[l].trim();
        if (c.startsWith("element vertex")) {
          let p = c.match(/\d+/);
          p && (o = parseInt(p[0]));
        } else if (c.startsWith("property")) {
          let p = c.match(/(\w+)\s+(\w+)\s+(\w+)/);
          if (p) {
            let g = p[2],
              y = p[3];
            ((r[y] = { dtype: g, index: h }), h++);
          }
        } else if (c.startsWith("format")) {
          let p = c.match(/(\w+)\s+(\w+)\s+(\d+\.?\d*)/);
          p && (u = { format: p[2], version: p[3] });
        } else if (c === "end_header") break;
      }
      let f = n.indexOf("end_header") + 10 + 1,
        d = new DataView(t, f);
      return { splatCount: o, vertexData: d, headerOffset: s, propertiesDesc: r, format: u };
    }
  },
  lt = class {
    constructor(t, a, s, n, i, e, o, r) {
      ((this.config = t),
        (this.xyz = a),
        (this.scaling = s),
        (this.color = n),
        (this.opacity = i),
        (this.harmonics = o),
        (this.quaternion = e),
        (this.variableChunkSize = r));
    }
    get isDynamicChunks() {
      return this.variableChunkSize && this.variableChunkSize.length > 0;
    }
    get nchunks() {
      return this.xyz.nchunks;
    }
    get nsplats() {
      return this.xyz.length;
    }
    get chunkSize() {
      return this.config.chunkSize;
    }
    static compressFromGaussianData(t, a) {
      let s = L.fromArray(t.xyz, a.xyz, a.chunkSize),
        n = L.fromArray(t.scaling, a.scaling, a.chunkSize),
        i = L.fromArray(t.colors, a.color, a.chunkSize),
        e = L.fromArray(t.opacity, a.opacity, a.chunkSize),
        o = L.fromArray(t.rotation, a.quaternion, a.chunkSize),
        r = t.harmonics,
        h = [];
      if (a.harmonics)
        for (let u = 0; u < r.length; u++) {
          let f = L.fromArray(r[u], a.harmonics, a.chunkSize);
          h.push(f);
        }
      return new lt(a, s, n, i, e, o, h);
    }
    _countIndexesInChunks(t) {
      let a = [],
        s = this.nchunks,
        n = this.chunkSize,
        i = this.nsplats,
        e = L.getRequiredNChunks(i, n);
      if (s === e)
        for (let o = 0; o < t.length; o++) {
          let r = t[o],
            h = Math.floor(r / this.chunkSize);
          h in a ? a[h].push(r) : (a[h] = [r]);
        }
      else {
        let o = this.variableChunkSize,
          r = {},
          h = 0;
        for (let u = 0; u < s; u++) ((r[u] = h), (h += o[u]));
        for (let u = 0; u < t.length; u++) {
          let f = t[u],
            d = Math.min(Math.floor(f / n), s - 1);
          for (; f >= r[d] + o[d];) d++;
          d in a ? a[d].push(f) : (a[d] = [f]);
        }
      }
      return a;
    }
    pruneSplats(t) {
      let a = this._countIndexesInChunks(t),
        s,
        n = [];
      return (
        a.length > 0 &&
          ((s = this.variableChunkSize
            ? [...this.variableChunkSize]
            : Array(this.nchunks).fill(this.chunkSize)),
          a.forEach((i, e) => {
            ((s[e] -= i.length), s[e] <= 0 && n.push(e));
          }),
          (s = s.filter((i) => i > 0))),
        new lt(
          this.config,
          this.xyz.pruneFeature(t, n, s),
          this.scaling.pruneFeature(t, n, s),
          this.color.pruneFeature(t, n, s),
          this.opacity.pruneFeature(t, n, s),
          this.quaternion.pruneFeature(t, n, s),
          this.harmonics
            ? this.harmonics.map((i) => i.pruneFeature(t, n, this.variableChunkSize))
            : void 0,
          s,
        )
      );
    }
    static async loadConfig(t) {
      return await (
        await fetch(t, { method: "GET", mode: "cors", headers: { Accept: "application/json" } })
      ).json();
    }
    toGaussians() {
      var i;
      let t = { format: "binary_little_endian", version: "1.0" },
        a = {},
        s = 0;
      if (
        ((a.x = { dtype: "float", index: s }),
        s++,
        (a.y = { dtype: "float", index: s }),
        s++,
        (a.z = { dtype: "float", index: s }),
        s++,
        (a.f_dc_0 = { dtype: "float", index: s }),
        s++,
        (a.f_dc_1 = { dtype: "float", index: s }),
        s++,
        (a.f_dc_2 = { dtype: "float", index: s }),
        s++,
        this.harmonics && this.harmonics.length > 0)
      )
        for (let e = 0; e < this.harmonics.length; e++)
          ((a[`f_rest_${e}`] = { dtype: "float", index: s }),
            s++,
            (a[`f_rest_${e + 1}`] = { dtype: "float", index: s }),
            s++,
            (a[`f_rest_${e + 2}`] = { dtype: "float", index: s }),
            s++);
      ((a.opacity = { dtype: "float", index: s }),
        s++,
        (a.scale_0 = { dtype: "float", index: s }),
        s++,
        (a.scale_1 = { dtype: "float", index: s }),
        s++,
        (a.scale_2 = { dtype: "float", index: s }),
        s++,
        (a.rot_0 = { dtype: "float", index: s }),
        s++,
        (a.rot_1 = { dtype: "float", index: s }),
        s++,
        (a.rot_2 = { dtype: "float", index: s }),
        s++,
        (a.rot_3 = { dtype: "float", index: s }),
        s++);
      let n = (i = this.harmonics) == null ? void 0 : i.map((e) => e.denormDequant());
      return new Y(
        a,
        t,
        this.xyz.length,
        this.xyz.denormDequant(),
        this.color.denormDequant(),
        n || [],
        this.opacity.denormDequant(),
        this.scaling.denormDequant(),
        this.quaternion.denormDequant(),
        3,
      );
    }
  },
  X = T(tt()),
  O = T(at()),
  D = 1e-6,
  I = typeof Float32Array < "u" ? Float32Array : Array,
  ht = Math.random;
Math.hypot ||
  (Math.hypot = function () {
    for (var t = 0, a = arguments.length; a--;) t += arguments[a] * arguments[a];
    return Math.sqrt(t);
  });
var Q = {};
dt(Q, {
  add: () => Ba,
  adjoint: () => va,
  clone: () => pa,
  copy: () => da,
  create: () => qt,
  determinant: () => Ma,
  equals: () => Ia,
  exactEquals: () => Ca,
  frob: () => Na,
  fromMat2d: () => ja,
  fromMat4: () => fa,
  fromQuat: () => Va,
  fromRotation: () => qa,
  fromScaling: () => za,
  fromTranslation: () => Aa,
  fromValues: () => ya,
  identity: () => ma,
  invert: () => _a,
  mul: () => Ea,
  multiply: () => zt,
  multiplyScalar: () => La,
  multiplyScalarAndAdd: () => Ua,
  normalFromMat4: () => Sa,
  projection: () => Da,
  rotate: () => wa,
  scale: () => ka,
  set: () => ga,
  str: () => Fa,
  sub: () => Oa,
  subtract: () => jt,
  translate: () => xa,
  transpose: () => ba,
});
function qt() {
  var t = new I(9);
  return (
    I != Float32Array && ((t[1] = 0), (t[2] = 0), (t[3] = 0), (t[5] = 0), (t[6] = 0), (t[7] = 0)),
    (t[0] = 1),
    (t[4] = 1),
    (t[8] = 1),
    t
  );
}
function fa(t, a) {
  return (
    (t[0] = a[0]),
    (t[1] = a[1]),
    (t[2] = a[2]),
    (t[3] = a[4]),
    (t[4] = a[5]),
    (t[5] = a[6]),
    (t[6] = a[8]),
    (t[7] = a[9]),
    (t[8] = a[10]),
    t
  );
}
function pa(t) {
  var a = new I(9);
  return (
    (a[0] = t[0]),
    (a[1] = t[1]),
    (a[2] = t[2]),
    (a[3] = t[3]),
    (a[4] = t[4]),
    (a[5] = t[5]),
    (a[6] = t[6]),
    (a[7] = t[7]),
    (a[8] = t[8]),
    a
  );
}
function da(t, a) {
  return (
    (t[0] = a[0]),
    (t[1] = a[1]),
    (t[2] = a[2]),
    (t[3] = a[3]),
    (t[4] = a[4]),
    (t[5] = a[5]),
    (t[6] = a[6]),
    (t[7] = a[7]),
    (t[8] = a[8]),
    t
  );
}
function ya(t, a, s, n, i, e, o, r, h) {
  var u = new I(9);
  return (
    (u[0] = t),
    (u[1] = a),
    (u[2] = s),
    (u[3] = n),
    (u[4] = i),
    (u[5] = e),
    (u[6] = o),
    (u[7] = r),
    (u[8] = h),
    u
  );
}
function ga(t, a, s, n, i, e, o, r, h, u) {
  return (
    (t[0] = a),
    (t[1] = s),
    (t[2] = n),
    (t[3] = i),
    (t[4] = e),
    (t[5] = o),
    (t[6] = r),
    (t[7] = h),
    (t[8] = u),
    t
  );
}
function ma(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 1),
    (t[5] = 0),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 1),
    t
  );
}
function ba(t, a) {
  if (t === a) {
    var s = a[1],
      n = a[2],
      i = a[5];
    ((t[1] = a[3]), (t[2] = a[6]), (t[3] = s), (t[5] = a[7]), (t[6] = n), (t[7] = i));
  } else
    ((t[0] = a[0]),
      (t[1] = a[3]),
      (t[2] = a[6]),
      (t[3] = a[1]),
      (t[4] = a[4]),
      (t[5] = a[7]),
      (t[6] = a[2]),
      (t[7] = a[5]),
      (t[8] = a[8]));
  return t;
}
function _a(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = a[4],
    r = a[5],
    h = a[6],
    u = a[7],
    f = a[8],
    d = f * o - r * u,
    l = -f * e + r * h,
    c = u * e - o * h,
    p = s * d + n * l + i * c;
  return p
    ? ((p = 1 / p),
      (t[0] = d * p),
      (t[1] = (-f * n + i * u) * p),
      (t[2] = (r * n - i * o) * p),
      (t[3] = l * p),
      (t[4] = (f * s - i * h) * p),
      (t[5] = (-r * s + i * e) * p),
      (t[6] = c * p),
      (t[7] = (-u * s + n * h) * p),
      (t[8] = (o * s - n * e) * p),
      t)
    : null;
}
function va(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = a[4],
    r = a[5],
    h = a[6],
    u = a[7],
    f = a[8];
  return (
    (t[0] = o * f - r * u),
    (t[1] = i * u - n * f),
    (t[2] = n * r - i * o),
    (t[3] = r * h - e * f),
    (t[4] = s * f - i * h),
    (t[5] = i * e - s * r),
    (t[6] = e * u - o * h),
    (t[7] = n * h - s * u),
    (t[8] = s * o - n * e),
    t
  );
}
function Ma(t) {
  var a = t[0],
    s = t[1],
    n = t[2],
    i = t[3],
    e = t[4],
    o = t[5],
    r = t[6],
    h = t[7],
    u = t[8];
  return a * (u * e - o * h) + s * (-u * i + o * r) + n * (h * i - e * r);
}
function zt(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = a[4],
    h = a[5],
    u = a[6],
    f = a[7],
    d = a[8],
    l = s[0],
    c = s[1],
    p = s[2],
    g = s[3],
    y = s[4],
    m = s[5],
    _ = s[6],
    b = s[7],
    M = s[8];
  return (
    (t[0] = l * n + c * o + p * u),
    (t[1] = l * i + c * r + p * f),
    (t[2] = l * e + c * h + p * d),
    (t[3] = g * n + y * o + m * u),
    (t[4] = g * i + y * r + m * f),
    (t[5] = g * e + y * h + m * d),
    (t[6] = _ * n + b * o + M * u),
    (t[7] = _ * i + b * r + M * f),
    (t[8] = _ * e + b * h + M * d),
    t
  );
}
function xa(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = a[4],
    h = a[5],
    u = a[6],
    f = a[7],
    d = a[8],
    l = s[0],
    c = s[1];
  return (
    (t[0] = n),
    (t[1] = i),
    (t[2] = e),
    (t[3] = o),
    (t[4] = r),
    (t[5] = h),
    (t[6] = l * n + c * o + u),
    (t[7] = l * i + c * r + f),
    (t[8] = l * e + c * h + d),
    t
  );
}
function wa(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = a[4],
    h = a[5],
    u = a[6],
    f = a[7],
    d = a[8],
    l = Math.sin(s),
    c = Math.cos(s);
  return (
    (t[0] = c * n + l * o),
    (t[1] = c * i + l * r),
    (t[2] = c * e + l * h),
    (t[3] = c * o - l * n),
    (t[4] = c * r - l * i),
    (t[5] = c * h - l * e),
    (t[6] = u),
    (t[7] = f),
    (t[8] = d),
    t
  );
}
function ka(t, a, s) {
  var n = s[0],
    i = s[1];
  return (
    (t[0] = n * a[0]),
    (t[1] = n * a[1]),
    (t[2] = n * a[2]),
    (t[3] = i * a[3]),
    (t[4] = i * a[4]),
    (t[5] = i * a[5]),
    (t[6] = a[6]),
    (t[7] = a[7]),
    (t[8] = a[8]),
    t
  );
}
function Aa(t, a) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 1),
    (t[5] = 0),
    (t[6] = a[0]),
    (t[7] = a[1]),
    (t[8] = 1),
    t
  );
}
function qa(t, a) {
  var s = Math.sin(a),
    n = Math.cos(a);
  return (
    (t[0] = n),
    (t[1] = s),
    (t[2] = 0),
    (t[3] = -s),
    (t[4] = n),
    (t[5] = 0),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 1),
    t
  );
}
function za(t, a) {
  return (
    (t[0] = a[0]),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = a[1]),
    (t[5] = 0),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 1),
    t
  );
}
function ja(t, a) {
  return (
    (t[0] = a[0]),
    (t[1] = a[1]),
    (t[2] = 0),
    (t[3] = a[2]),
    (t[4] = a[3]),
    (t[5] = 0),
    (t[6] = a[4]),
    (t[7] = a[5]),
    (t[8] = 1),
    t
  );
}
function Va(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = s + s,
    r = n + n,
    h = i + i,
    u = s * o,
    f = n * o,
    d = n * r,
    l = i * o,
    c = i * r,
    p = i * h,
    g = e * o,
    y = e * r,
    m = e * h;
  return (
    (t[0] = 1 - d - p),
    (t[3] = f - m),
    (t[6] = l + y),
    (t[1] = f + m),
    (t[4] = 1 - u - p),
    (t[7] = c - g),
    (t[2] = l - y),
    (t[5] = c + g),
    (t[8] = 1 - u - d),
    t
  );
}
function Sa(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = a[4],
    r = a[5],
    h = a[6],
    u = a[7],
    f = a[8],
    d = a[9],
    l = a[10],
    c = a[11],
    p = a[12],
    g = a[13],
    y = a[14],
    m = a[15],
    _ = s * r - n * o,
    b = s * h - i * o,
    M = s * u - e * o,
    x = n * h - i * r,
    w = n * u - e * r,
    v = i * u - e * h,
    A = f * g - d * p,
    S = f * y - l * p,
    z = f * m - c * p,
    k = d * y - l * g,
    F = d * m - c * g,
    N = l * m - c * y,
    q = _ * N - b * F + M * k + x * z - w * S + v * A;
  return q
    ? ((q = 1 / q),
      (t[0] = (r * N - h * F + u * k) * q),
      (t[1] = (h * z - o * N - u * S) * q),
      (t[2] = (o * F - r * z + u * A) * q),
      (t[3] = (i * F - n * N - e * k) * q),
      (t[4] = (s * N - i * z + e * S) * q),
      (t[5] = (n * z - s * F - e * A) * q),
      (t[6] = (g * v - y * w + m * x) * q),
      (t[7] = (y * M - p * v - m * b) * q),
      (t[8] = (p * w - g * M + m * _) * q),
      t)
    : null;
}
function Da(t, a, s) {
  return (
    (t[0] = 2 / a),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = -2 / s),
    (t[5] = 0),
    (t[6] = -1),
    (t[7] = 1),
    (t[8] = 1),
    t
  );
}
function Fa(t) {
  return (
    "mat3(" +
    t[0] +
    ", " +
    t[1] +
    ", " +
    t[2] +
    ", " +
    t[3] +
    ", " +
    t[4] +
    ", " +
    t[5] +
    ", " +
    t[6] +
    ", " +
    t[7] +
    ", " +
    t[8] +
    ")"
  );
}
function Na(t) {
  return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
}
function Ba(t, a, s) {
  return (
    (t[0] = a[0] + s[0]),
    (t[1] = a[1] + s[1]),
    (t[2] = a[2] + s[2]),
    (t[3] = a[3] + s[3]),
    (t[4] = a[4] + s[4]),
    (t[5] = a[5] + s[5]),
    (t[6] = a[6] + s[6]),
    (t[7] = a[7] + s[7]),
    (t[8] = a[8] + s[8]),
    t
  );
}
function jt(t, a, s) {
  return (
    (t[0] = a[0] - s[0]),
    (t[1] = a[1] - s[1]),
    (t[2] = a[2] - s[2]),
    (t[3] = a[3] - s[3]),
    (t[4] = a[4] - s[4]),
    (t[5] = a[5] - s[5]),
    (t[6] = a[6] - s[6]),
    (t[7] = a[7] - s[7]),
    (t[8] = a[8] - s[8]),
    t
  );
}
function La(t, a, s) {
  return (
    (t[0] = a[0] * s),
    (t[1] = a[1] * s),
    (t[2] = a[2] * s),
    (t[3] = a[3] * s),
    (t[4] = a[4] * s),
    (t[5] = a[5] * s),
    (t[6] = a[6] * s),
    (t[7] = a[7] * s),
    (t[8] = a[8] * s),
    t
  );
}
function Ua(t, a, s, n) {
  return (
    (t[0] = a[0] + s[0] * n),
    (t[1] = a[1] + s[1] * n),
    (t[2] = a[2] + s[2] * n),
    (t[3] = a[3] + s[3] * n),
    (t[4] = a[4] + s[4] * n),
    (t[5] = a[5] + s[5] * n),
    (t[6] = a[6] + s[6] * n),
    (t[7] = a[7] + s[7] * n),
    (t[8] = a[8] + s[8] * n),
    t
  );
}
function Ca(t, a) {
  return (
    t[0] === a[0] &&
    t[1] === a[1] &&
    t[2] === a[2] &&
    t[3] === a[3] &&
    t[4] === a[4] &&
    t[5] === a[5] &&
    t[6] === a[6] &&
    t[7] === a[7] &&
    t[8] === a[8]
  );
}
function Ia(t, a) {
  var s = t[0],
    n = t[1],
    i = t[2],
    e = t[3],
    o = t[4],
    r = t[5],
    h = t[6],
    u = t[7],
    f = t[8],
    d = a[0],
    l = a[1],
    c = a[2],
    p = a[3],
    g = a[4],
    y = a[5],
    m = a[6],
    _ = a[7],
    b = a[8];
  return (
    Math.abs(s - d) <= D * Math.max(1, Math.abs(s), Math.abs(d)) &&
    Math.abs(n - l) <= D * Math.max(1, Math.abs(n), Math.abs(l)) &&
    Math.abs(i - c) <= D * Math.max(1, Math.abs(i), Math.abs(c)) &&
    Math.abs(e - p) <= D * Math.max(1, Math.abs(e), Math.abs(p)) &&
    Math.abs(o - g) <= D * Math.max(1, Math.abs(o), Math.abs(g)) &&
    Math.abs(r - y) <= D * Math.max(1, Math.abs(r), Math.abs(y)) &&
    Math.abs(h - m) <= D * Math.max(1, Math.abs(h), Math.abs(m)) &&
    Math.abs(u - _) <= D * Math.max(1, Math.abs(u), Math.abs(_)) &&
    Math.abs(f - b) <= D * Math.max(1, Math.abs(f), Math.abs(b))
  );
}
var Ea = zt,
  Oa = jt,
  ct = {};
dt(ct, {
  add: () => ks,
  adjoint: () => Ya,
  clone: () => Ta,
  copy: () => Pa,
  create: () => $a,
  determinant: () => Qa,
  equals: () => js,
  exactEquals: () => zs,
  frob: () => ws,
  fromQuat: () => ps,
  fromQuat2: () => hs,
  fromRotation: () => is,
  fromRotationTranslation: () => Dt,
  fromRotationTranslationScale: () => cs,
  fromRotationTranslationScaleOrigin: () => fs,
  fromScaling: () => ns,
  fromTranslation: () => ss,
  fromValues: () => Ra,
  fromXRotation: () => es,
  fromYRotation: () => os,
  fromZRotation: () => rs,
  frustum: () => ds,
  getRotation: () => ls,
  getScaling: () => Ft,
  getTranslation: () => us,
  identity: () => Vt,
  invert: () => Wa,
  lookAt: () => vs,
  mul: () => Vs,
  multiply: () => St,
  multiplyScalar: () => As,
  multiplyScalarAndAdd: () => qs,
  ortho: () => bs,
  orthoNO: () => Bt,
  orthoZO: () => _s,
  perspective: () => ys,
  perspectiveFromFieldOfView: () => ms,
  perspectiveNO: () => Nt,
  perspectiveZO: () => gs,
  rotate: () => Ja,
  rotateX: () => Ka,
  rotateY: () => ts,
  rotateZ: () => as,
  scale: () => Xa,
  set: () => Ga,
  str: () => xs,
  sub: () => Ss,
  subtract: () => Lt,
  targetTo: () => Ms,
  translate: () => Za,
  transpose: () => Ha,
});
function $a() {
  var t = new I(16);
  return (
    I != Float32Array &&
      ((t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0)),
    (t[0] = 1),
    (t[5] = 1),
    (t[10] = 1),
    (t[15] = 1),
    t
  );
}
function Ta(t) {
  var a = new I(16);
  return (
    (a[0] = t[0]),
    (a[1] = t[1]),
    (a[2] = t[2]),
    (a[3] = t[3]),
    (a[4] = t[4]),
    (a[5] = t[5]),
    (a[6] = t[6]),
    (a[7] = t[7]),
    (a[8] = t[8]),
    (a[9] = t[9]),
    (a[10] = t[10]),
    (a[11] = t[11]),
    (a[12] = t[12]),
    (a[13] = t[13]),
    (a[14] = t[14]),
    (a[15] = t[15]),
    a
  );
}
function Pa(t, a) {
  return (
    (t[0] = a[0]),
    (t[1] = a[1]),
    (t[2] = a[2]),
    (t[3] = a[3]),
    (t[4] = a[4]),
    (t[5] = a[5]),
    (t[6] = a[6]),
    (t[7] = a[7]),
    (t[8] = a[8]),
    (t[9] = a[9]),
    (t[10] = a[10]),
    (t[11] = a[11]),
    (t[12] = a[12]),
    (t[13] = a[13]),
    (t[14] = a[14]),
    (t[15] = a[15]),
    t
  );
}
function Ra(t, a, s, n, i, e, o, r, h, u, f, d, l, c, p, g) {
  var y = new I(16);
  return (
    (y[0] = t),
    (y[1] = a),
    (y[2] = s),
    (y[3] = n),
    (y[4] = i),
    (y[5] = e),
    (y[6] = o),
    (y[7] = r),
    (y[8] = h),
    (y[9] = u),
    (y[10] = f),
    (y[11] = d),
    (y[12] = l),
    (y[13] = c),
    (y[14] = p),
    (y[15] = g),
    y
  );
}
function Ga(t, a, s, n, i, e, o, r, h, u, f, d, l, c, p, g, y) {
  return (
    (t[0] = a),
    (t[1] = s),
    (t[2] = n),
    (t[3] = i),
    (t[4] = e),
    (t[5] = o),
    (t[6] = r),
    (t[7] = h),
    (t[8] = u),
    (t[9] = f),
    (t[10] = d),
    (t[11] = l),
    (t[12] = c),
    (t[13] = p),
    (t[14] = g),
    (t[15] = y),
    t
  );
}
function Vt(t) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function Ha(t, a) {
  if (t === a) {
    var s = a[1],
      n = a[2],
      i = a[3],
      e = a[6],
      o = a[7],
      r = a[11];
    ((t[1] = a[4]),
      (t[2] = a[8]),
      (t[3] = a[12]),
      (t[4] = s),
      (t[6] = a[9]),
      (t[7] = a[13]),
      (t[8] = n),
      (t[9] = e),
      (t[11] = a[14]),
      (t[12] = i),
      (t[13] = o),
      (t[14] = r));
  } else
    ((t[0] = a[0]),
      (t[1] = a[4]),
      (t[2] = a[8]),
      (t[3] = a[12]),
      (t[4] = a[1]),
      (t[5] = a[5]),
      (t[6] = a[9]),
      (t[7] = a[13]),
      (t[8] = a[2]),
      (t[9] = a[6]),
      (t[10] = a[10]),
      (t[11] = a[14]),
      (t[12] = a[3]),
      (t[13] = a[7]),
      (t[14] = a[11]),
      (t[15] = a[15]));
  return t;
}
function Wa(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = a[4],
    r = a[5],
    h = a[6],
    u = a[7],
    f = a[8],
    d = a[9],
    l = a[10],
    c = a[11],
    p = a[12],
    g = a[13],
    y = a[14],
    m = a[15],
    _ = s * r - n * o,
    b = s * h - i * o,
    M = s * u - e * o,
    x = n * h - i * r,
    w = n * u - e * r,
    v = i * u - e * h,
    A = f * g - d * p,
    S = f * y - l * p,
    z = f * m - c * p,
    k = d * y - l * g,
    F = d * m - c * g,
    N = l * m - c * y,
    q = _ * N - b * F + M * k + x * z - w * S + v * A;
  return q
    ? ((q = 1 / q),
      (t[0] = (r * N - h * F + u * k) * q),
      (t[1] = (i * F - n * N - e * k) * q),
      (t[2] = (g * v - y * w + m * x) * q),
      (t[3] = (l * w - d * v - c * x) * q),
      (t[4] = (h * z - o * N - u * S) * q),
      (t[5] = (s * N - i * z + e * S) * q),
      (t[6] = (y * M - p * v - m * b) * q),
      (t[7] = (f * v - l * M + c * b) * q),
      (t[8] = (o * F - r * z + u * A) * q),
      (t[9] = (n * z - s * F - e * A) * q),
      (t[10] = (p * w - g * M + m * _) * q),
      (t[11] = (d * M - f * w - c * _) * q),
      (t[12] = (r * S - o * k - h * A) * q),
      (t[13] = (s * k - n * S + i * A) * q),
      (t[14] = (g * b - p * x - y * _) * q),
      (t[15] = (f * x - d * b + l * _) * q),
      t)
    : null;
}
function Ya(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = a[4],
    r = a[5],
    h = a[6],
    u = a[7],
    f = a[8],
    d = a[9],
    l = a[10],
    c = a[11],
    p = a[12],
    g = a[13],
    y = a[14],
    m = a[15];
  return (
    (t[0] = r * (l * m - c * y) - d * (h * m - u * y) + g * (h * c - u * l)),
    (t[1] = -(n * (l * m - c * y) - d * (i * m - e * y) + g * (i * c - e * l))),
    (t[2] = n * (h * m - u * y) - r * (i * m - e * y) + g * (i * u - e * h)),
    (t[3] = -(n * (h * c - u * l) - r * (i * c - e * l) + d * (i * u - e * h))),
    (t[4] = -(o * (l * m - c * y) - f * (h * m - u * y) + p * (h * c - u * l))),
    (t[5] = s * (l * m - c * y) - f * (i * m - e * y) + p * (i * c - e * l)),
    (t[6] = -(s * (h * m - u * y) - o * (i * m - e * y) + p * (i * u - e * h))),
    (t[7] = s * (h * c - u * l) - o * (i * c - e * l) + f * (i * u - e * h)),
    (t[8] = o * (d * m - c * g) - f * (r * m - u * g) + p * (r * c - u * d)),
    (t[9] = -(s * (d * m - c * g) - f * (n * m - e * g) + p * (n * c - e * d))),
    (t[10] = s * (r * m - u * g) - o * (n * m - e * g) + p * (n * u - e * r)),
    (t[11] = -(s * (r * c - u * d) - o * (n * c - e * d) + f * (n * u - e * r))),
    (t[12] = -(o * (d * y - l * g) - f * (r * y - h * g) + p * (r * l - h * d))),
    (t[13] = s * (d * y - l * g) - f * (n * y - i * g) + p * (n * l - i * d)),
    (t[14] = -(s * (r * y - h * g) - o * (n * y - i * g) + p * (n * h - i * r))),
    (t[15] = s * (r * l - h * d) - o * (n * l - i * d) + f * (n * h - i * r)),
    t
  );
}
function Qa(t) {
  var a = t[0],
    s = t[1],
    n = t[2],
    i = t[3],
    e = t[4],
    o = t[5],
    r = t[6],
    h = t[7],
    u = t[8],
    f = t[9],
    d = t[10],
    l = t[11],
    c = t[12],
    p = t[13],
    g = t[14],
    y = t[15],
    m = a * o - s * e,
    _ = a * r - n * e,
    b = a * h - i * e,
    M = s * r - n * o,
    x = s * h - i * o,
    w = n * h - i * r,
    v = u * p - f * c,
    A = u * g - d * c,
    S = u * y - l * c,
    z = f * g - d * p,
    k = f * y - l * p,
    F = d * y - l * g;
  return m * F - _ * k + b * z + M * S - x * A + w * v;
}
function St(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = a[4],
    h = a[5],
    u = a[6],
    f = a[7],
    d = a[8],
    l = a[9],
    c = a[10],
    p = a[11],
    g = a[12],
    y = a[13],
    m = a[14],
    _ = a[15],
    b = s[0],
    M = s[1],
    x = s[2],
    w = s[3];
  return (
    (t[0] = b * n + M * r + x * d + w * g),
    (t[1] = b * i + M * h + x * l + w * y),
    (t[2] = b * e + M * u + x * c + w * m),
    (t[3] = b * o + M * f + x * p + w * _),
    (b = s[4]),
    (M = s[5]),
    (x = s[6]),
    (w = s[7]),
    (t[4] = b * n + M * r + x * d + w * g),
    (t[5] = b * i + M * h + x * l + w * y),
    (t[6] = b * e + M * u + x * c + w * m),
    (t[7] = b * o + M * f + x * p + w * _),
    (b = s[8]),
    (M = s[9]),
    (x = s[10]),
    (w = s[11]),
    (t[8] = b * n + M * r + x * d + w * g),
    (t[9] = b * i + M * h + x * l + w * y),
    (t[10] = b * e + M * u + x * c + w * m),
    (t[11] = b * o + M * f + x * p + w * _),
    (b = s[12]),
    (M = s[13]),
    (x = s[14]),
    (w = s[15]),
    (t[12] = b * n + M * r + x * d + w * g),
    (t[13] = b * i + M * h + x * l + w * y),
    (t[14] = b * e + M * u + x * c + w * m),
    (t[15] = b * o + M * f + x * p + w * _),
    t
  );
}
function Za(t, a, s) {
  var n = s[0],
    i = s[1],
    e = s[2],
    o,
    r,
    h,
    u,
    f,
    d,
    l,
    c,
    p,
    g,
    y,
    m;
  return (
    a === t
      ? ((t[12] = a[0] * n + a[4] * i + a[8] * e + a[12]),
        (t[13] = a[1] * n + a[5] * i + a[9] * e + a[13]),
        (t[14] = a[2] * n + a[6] * i + a[10] * e + a[14]),
        (t[15] = a[3] * n + a[7] * i + a[11] * e + a[15]))
      : ((o = a[0]),
        (r = a[1]),
        (h = a[2]),
        (u = a[3]),
        (f = a[4]),
        (d = a[5]),
        (l = a[6]),
        (c = a[7]),
        (p = a[8]),
        (g = a[9]),
        (y = a[10]),
        (m = a[11]),
        (t[0] = o),
        (t[1] = r),
        (t[2] = h),
        (t[3] = u),
        (t[4] = f),
        (t[5] = d),
        (t[6] = l),
        (t[7] = c),
        (t[8] = p),
        (t[9] = g),
        (t[10] = y),
        (t[11] = m),
        (t[12] = o * n + f * i + p * e + a[12]),
        (t[13] = r * n + d * i + g * e + a[13]),
        (t[14] = h * n + l * i + y * e + a[14]),
        (t[15] = u * n + c * i + m * e + a[15])),
    t
  );
}
function Xa(t, a, s) {
  var n = s[0],
    i = s[1],
    e = s[2];
  return (
    (t[0] = a[0] * n),
    (t[1] = a[1] * n),
    (t[2] = a[2] * n),
    (t[3] = a[3] * n),
    (t[4] = a[4] * i),
    (t[5] = a[5] * i),
    (t[6] = a[6] * i),
    (t[7] = a[7] * i),
    (t[8] = a[8] * e),
    (t[9] = a[9] * e),
    (t[10] = a[10] * e),
    (t[11] = a[11] * e),
    (t[12] = a[12]),
    (t[13] = a[13]),
    (t[14] = a[14]),
    (t[15] = a[15]),
    t
  );
}
function Ja(t, a, s, n) {
  var i = n[0],
    e = n[1],
    o = n[2],
    r = Math.hypot(i, e, o),
    h,
    u,
    f,
    d,
    l,
    c,
    p,
    g,
    y,
    m,
    _,
    b,
    M,
    x,
    w,
    v,
    A,
    S,
    z,
    k,
    F,
    N,
    q,
    E;
  return r < D
    ? null
    : ((r = 1 / r),
      (i *= r),
      (e *= r),
      (o *= r),
      (h = Math.sin(s)),
      (u = Math.cos(s)),
      (f = 1 - u),
      (d = a[0]),
      (l = a[1]),
      (c = a[2]),
      (p = a[3]),
      (g = a[4]),
      (y = a[5]),
      (m = a[6]),
      (_ = a[7]),
      (b = a[8]),
      (M = a[9]),
      (x = a[10]),
      (w = a[11]),
      (v = i * i * f + u),
      (A = e * i * f + o * h),
      (S = o * i * f - e * h),
      (z = i * e * f - o * h),
      (k = e * e * f + u),
      (F = o * e * f + i * h),
      (N = i * o * f + e * h),
      (q = e * o * f - i * h),
      (E = o * o * f + u),
      (t[0] = d * v + g * A + b * S),
      (t[1] = l * v + y * A + M * S),
      (t[2] = c * v + m * A + x * S),
      (t[3] = p * v + _ * A + w * S),
      (t[4] = d * z + g * k + b * F),
      (t[5] = l * z + y * k + M * F),
      (t[6] = c * z + m * k + x * F),
      (t[7] = p * z + _ * k + w * F),
      (t[8] = d * N + g * q + b * E),
      (t[9] = l * N + y * q + M * E),
      (t[10] = c * N + m * q + x * E),
      (t[11] = p * N + _ * q + w * E),
      a !== t && ((t[12] = a[12]), (t[13] = a[13]), (t[14] = a[14]), (t[15] = a[15])),
      t);
}
function Ka(t, a, s) {
  var n = Math.sin(s),
    i = Math.cos(s),
    e = a[4],
    o = a[5],
    r = a[6],
    h = a[7],
    u = a[8],
    f = a[9],
    d = a[10],
    l = a[11];
  return (
    a !== t &&
      ((t[0] = a[0]),
      (t[1] = a[1]),
      (t[2] = a[2]),
      (t[3] = a[3]),
      (t[12] = a[12]),
      (t[13] = a[13]),
      (t[14] = a[14]),
      (t[15] = a[15])),
    (t[4] = e * i + u * n),
    (t[5] = o * i + f * n),
    (t[6] = r * i + d * n),
    (t[7] = h * i + l * n),
    (t[8] = u * i - e * n),
    (t[9] = f * i - o * n),
    (t[10] = d * i - r * n),
    (t[11] = l * i - h * n),
    t
  );
}
function ts(t, a, s) {
  var n = Math.sin(s),
    i = Math.cos(s),
    e = a[0],
    o = a[1],
    r = a[2],
    h = a[3],
    u = a[8],
    f = a[9],
    d = a[10],
    l = a[11];
  return (
    a !== t &&
      ((t[4] = a[4]),
      (t[5] = a[5]),
      (t[6] = a[6]),
      (t[7] = a[7]),
      (t[12] = a[12]),
      (t[13] = a[13]),
      (t[14] = a[14]),
      (t[15] = a[15])),
    (t[0] = e * i - u * n),
    (t[1] = o * i - f * n),
    (t[2] = r * i - d * n),
    (t[3] = h * i - l * n),
    (t[8] = e * n + u * i),
    (t[9] = o * n + f * i),
    (t[10] = r * n + d * i),
    (t[11] = h * n + l * i),
    t
  );
}
function as(t, a, s) {
  var n = Math.sin(s),
    i = Math.cos(s),
    e = a[0],
    o = a[1],
    r = a[2],
    h = a[3],
    u = a[4],
    f = a[5],
    d = a[6],
    l = a[7];
  return (
    a !== t &&
      ((t[8] = a[8]),
      (t[9] = a[9]),
      (t[10] = a[10]),
      (t[11] = a[11]),
      (t[12] = a[12]),
      (t[13] = a[13]),
      (t[14] = a[14]),
      (t[15] = a[15])),
    (t[0] = e * i + u * n),
    (t[1] = o * i + f * n),
    (t[2] = r * i + d * n),
    (t[3] = h * i + l * n),
    (t[4] = u * i - e * n),
    (t[5] = f * i - o * n),
    (t[6] = d * i - r * n),
    (t[7] = l * i - h * n),
    t
  );
}
function ss(t, a) {
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = a[0]),
    (t[13] = a[1]),
    (t[14] = a[2]),
    (t[15] = 1),
    t
  );
}
function ns(t, a) {
  return (
    (t[0] = a[0]),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = a[1]),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = a[2]),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function is(t, a, s) {
  var n = s[0],
    i = s[1],
    e = s[2],
    o = Math.hypot(n, i, e),
    r,
    h,
    u;
  return o < D
    ? null
    : ((o = 1 / o),
      (n *= o),
      (i *= o),
      (e *= o),
      (r = Math.sin(a)),
      (h = Math.cos(a)),
      (u = 1 - h),
      (t[0] = n * n * u + h),
      (t[1] = i * n * u + e * r),
      (t[2] = e * n * u - i * r),
      (t[3] = 0),
      (t[4] = n * i * u - e * r),
      (t[5] = i * i * u + h),
      (t[6] = e * i * u + n * r),
      (t[7] = 0),
      (t[8] = n * e * u + i * r),
      (t[9] = i * e * u - n * r),
      (t[10] = e * e * u + h),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t);
}
function es(t, a) {
  var s = Math.sin(a),
    n = Math.cos(a);
  return (
    (t[0] = 1),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = n),
    (t[6] = s),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = -s),
    (t[10] = n),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function os(t, a) {
  var s = Math.sin(a),
    n = Math.cos(a);
  return (
    (t[0] = n),
    (t[1] = 0),
    (t[2] = -s),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = 1),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = s),
    (t[9] = 0),
    (t[10] = n),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function rs(t, a) {
  var s = Math.sin(a),
    n = Math.cos(a);
  return (
    (t[0] = n),
    (t[1] = s),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = -s),
    (t[5] = n),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 1),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function Dt(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = n + n,
    h = i + i,
    u = e + e,
    f = n * r,
    d = n * h,
    l = n * u,
    c = i * h,
    p = i * u,
    g = e * u,
    y = o * r,
    m = o * h,
    _ = o * u;
  return (
    (t[0] = 1 - (c + g)),
    (t[1] = d + _),
    (t[2] = l - m),
    (t[3] = 0),
    (t[4] = d - _),
    (t[5] = 1 - (f + g)),
    (t[6] = p + y),
    (t[7] = 0),
    (t[8] = l + m),
    (t[9] = p - y),
    (t[10] = 1 - (f + c)),
    (t[11] = 0),
    (t[12] = s[0]),
    (t[13] = s[1]),
    (t[14] = s[2]),
    (t[15] = 1),
    t
  );
}
function hs(t, a) {
  var s = new I(3),
    n = -a[0],
    i = -a[1],
    e = -a[2],
    o = a[3],
    r = a[4],
    h = a[5],
    u = a[6],
    f = a[7],
    d = n * n + i * i + e * e + o * o;
  return (
    d > 0
      ? ((s[0] = ((r * o + f * n + h * e - u * i) * 2) / d),
        (s[1] = ((h * o + f * i + u * n - r * e) * 2) / d),
        (s[2] = ((u * o + f * e + r * i - h * n) * 2) / d))
      : ((s[0] = (r * o + f * n + h * e - u * i) * 2),
        (s[1] = (h * o + f * i + u * n - r * e) * 2),
        (s[2] = (u * o + f * e + r * i - h * n) * 2)),
    Dt(t, a, s),
    t
  );
}
function us(t, a) {
  return ((t[0] = a[12]), (t[1] = a[13]), (t[2] = a[14]), t);
}
function Ft(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[4],
    o = a[5],
    r = a[6],
    h = a[8],
    u = a[9],
    f = a[10];
  return (
    (t[0] = Math.hypot(s, n, i)),
    (t[1] = Math.hypot(e, o, r)),
    (t[2] = Math.hypot(h, u, f)),
    t
  );
}
function ls(t, a) {
  var s = new I(3);
  Ft(s, a);
  var n = 1 / s[0],
    i = 1 / s[1],
    e = 1 / s[2],
    o = a[0] * n,
    r = a[1] * i,
    h = a[2] * e,
    u = a[4] * n,
    f = a[5] * i,
    d = a[6] * e,
    l = a[8] * n,
    c = a[9] * i,
    p = a[10] * e,
    g = o + f + p,
    y = 0;
  return (
    g > 0
      ? ((y = Math.sqrt(g + 1) * 2),
        (t[3] = 0.25 * y),
        (t[0] = (d - c) / y),
        (t[1] = (l - h) / y),
        (t[2] = (r - u) / y))
      : o > f && o > p
        ? ((y = Math.sqrt(1 + o - f - p) * 2),
          (t[3] = (d - c) / y),
          (t[0] = 0.25 * y),
          (t[1] = (r + u) / y),
          (t[2] = (l + h) / y))
        : f > p
          ? ((y = Math.sqrt(1 + f - o - p) * 2),
            (t[3] = (l - h) / y),
            (t[0] = (r + u) / y),
            (t[1] = 0.25 * y),
            (t[2] = (d + c) / y))
          : ((y = Math.sqrt(1 + p - o - f) * 2),
            (t[3] = (r - u) / y),
            (t[0] = (l + h) / y),
            (t[1] = (d + c) / y),
            (t[2] = 0.25 * y)),
    t
  );
}
function cs(t, a, s, n) {
  var i = a[0],
    e = a[1],
    o = a[2],
    r = a[3],
    h = i + i,
    u = e + e,
    f = o + o,
    d = i * h,
    l = i * u,
    c = i * f,
    p = e * u,
    g = e * f,
    y = o * f,
    m = r * h,
    _ = r * u,
    b = r * f,
    M = n[0],
    x = n[1],
    w = n[2];
  return (
    (t[0] = (1 - (p + y)) * M),
    (t[1] = (l + b) * M),
    (t[2] = (c - _) * M),
    (t[3] = 0),
    (t[4] = (l - b) * x),
    (t[5] = (1 - (d + y)) * x),
    (t[6] = (g + m) * x),
    (t[7] = 0),
    (t[8] = (c + _) * w),
    (t[9] = (g - m) * w),
    (t[10] = (1 - (d + p)) * w),
    (t[11] = 0),
    (t[12] = s[0]),
    (t[13] = s[1]),
    (t[14] = s[2]),
    (t[15] = 1),
    t
  );
}
function fs(t, a, s, n, i) {
  var e = a[0],
    o = a[1],
    r = a[2],
    h = a[3],
    u = e + e,
    f = o + o,
    d = r + r,
    l = e * u,
    c = e * f,
    p = e * d,
    g = o * f,
    y = o * d,
    m = r * d,
    _ = h * u,
    b = h * f,
    M = h * d,
    x = n[0],
    w = n[1],
    v = n[2],
    A = i[0],
    S = i[1],
    z = i[2],
    k = (1 - (g + m)) * x,
    F = (c + M) * x,
    N = (p - b) * x,
    q = (c - M) * w,
    E = (1 - (l + m)) * w,
    W = (y + _) * w,
    K = (p + b) * v,
    gt = (y - _) * v,
    mt = (1 - (l + g)) * v;
  return (
    (t[0] = k),
    (t[1] = F),
    (t[2] = N),
    (t[3] = 0),
    (t[4] = q),
    (t[5] = E),
    (t[6] = W),
    (t[7] = 0),
    (t[8] = K),
    (t[9] = gt),
    (t[10] = mt),
    (t[11] = 0),
    (t[12] = s[0] + A - (k * A + q * S + K * z)),
    (t[13] = s[1] + S - (F * A + E * S + gt * z)),
    (t[14] = s[2] + z - (N * A + W * S + mt * z)),
    (t[15] = 1),
    t
  );
}
function ps(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = s + s,
    r = n + n,
    h = i + i,
    u = s * o,
    f = n * o,
    d = n * r,
    l = i * o,
    c = i * r,
    p = i * h,
    g = e * o,
    y = e * r,
    m = e * h;
  return (
    (t[0] = 1 - d - p),
    (t[1] = f + m),
    (t[2] = l - y),
    (t[3] = 0),
    (t[4] = f - m),
    (t[5] = 1 - u - p),
    (t[6] = c + g),
    (t[7] = 0),
    (t[8] = l + y),
    (t[9] = c - g),
    (t[10] = 1 - u - d),
    (t[11] = 0),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = 0),
    (t[15] = 1),
    t
  );
}
function ds(t, a, s, n, i, e, o) {
  var r = 1 / (s - a),
    h = 1 / (i - n),
    u = 1 / (e - o);
  return (
    (t[0] = e * 2 * r),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = e * 2 * h),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = (s + a) * r),
    (t[9] = (i + n) * h),
    (t[10] = (o + e) * u),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = o * e * 2 * u),
    (t[15] = 0),
    t
  );
}
function Nt(t, a, s, n, i) {
  var e = 1 / Math.tan(a / 2),
    o;
  return (
    (t[0] = e / s),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = e),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[15] = 0),
    i != null && i !== 1 / 0
      ? ((o = 1 / (n - i)), (t[10] = (i + n) * o), (t[14] = 2 * i * n * o))
      : ((t[10] = -1), (t[14] = -2 * n)),
    t
  );
}
var ys = Nt;
function gs(t, a, s, n, i) {
  var e = 1 / Math.tan(a / 2),
    o;
  return (
    (t[0] = e / s),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = e),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[15] = 0),
    i != null && i !== 1 / 0
      ? ((o = 1 / (n - i)), (t[10] = i * o), (t[14] = i * n * o))
      : ((t[10] = -1), (t[14] = -n)),
    t
  );
}
function ms(t, a, s, n) {
  var i = Math.tan((a.upDegrees * Math.PI) / 180),
    e = Math.tan((a.downDegrees * Math.PI) / 180),
    o = Math.tan((a.leftDegrees * Math.PI) / 180),
    r = Math.tan((a.rightDegrees * Math.PI) / 180),
    h = 2 / (o + r),
    u = 2 / (i + e);
  return (
    (t[0] = h),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = u),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = -((o - r) * h * 0.5)),
    (t[9] = (i - e) * u * 0.5),
    (t[10] = n / (s - n)),
    (t[11] = -1),
    (t[12] = 0),
    (t[13] = 0),
    (t[14] = (n * s) / (s - n)),
    (t[15] = 0),
    t
  );
}
function Bt(t, a, s, n, i, e, o) {
  var r = 1 / (a - s),
    h = 1 / (n - i),
    u = 1 / (e - o);
  return (
    (t[0] = -2 * r),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = -2 * h),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = 2 * u),
    (t[11] = 0),
    (t[12] = (a + s) * r),
    (t[13] = (i + n) * h),
    (t[14] = (o + e) * u),
    (t[15] = 1),
    t
  );
}
var bs = Bt;
function _s(t, a, s, n, i, e, o) {
  var r = 1 / (a - s),
    h = 1 / (n - i),
    u = 1 / (e - o);
  return (
    (t[0] = -2 * r),
    (t[1] = 0),
    (t[2] = 0),
    (t[3] = 0),
    (t[4] = 0),
    (t[5] = -2 * h),
    (t[6] = 0),
    (t[7] = 0),
    (t[8] = 0),
    (t[9] = 0),
    (t[10] = u),
    (t[11] = 0),
    (t[12] = (a + s) * r),
    (t[13] = (i + n) * h),
    (t[14] = e * u),
    (t[15] = 1),
    t
  );
}
function vs(t, a, s, n) {
  var i,
    e,
    o,
    r,
    h,
    u,
    f,
    d,
    l,
    c,
    p = a[0],
    g = a[1],
    y = a[2],
    m = n[0],
    _ = n[1],
    b = n[2],
    M = s[0],
    x = s[1],
    w = s[2];
  return Math.abs(p - M) < D && Math.abs(g - x) < D && Math.abs(y - w) < D
    ? Vt(t)
    : ((f = p - M),
      (d = g - x),
      (l = y - w),
      (c = 1 / Math.hypot(f, d, l)),
      (f *= c),
      (d *= c),
      (l *= c),
      (i = _ * l - b * d),
      (e = b * f - m * l),
      (o = m * d - _ * f),
      (c = Math.hypot(i, e, o)),
      c ? ((c = 1 / c), (i *= c), (e *= c), (o *= c)) : ((i = 0), (e = 0), (o = 0)),
      (r = d * o - l * e),
      (h = l * i - f * o),
      (u = f * e - d * i),
      (c = Math.hypot(r, h, u)),
      c ? ((c = 1 / c), (r *= c), (h *= c), (u *= c)) : ((r = 0), (h = 0), (u = 0)),
      (t[0] = i),
      (t[1] = r),
      (t[2] = f),
      (t[3] = 0),
      (t[4] = e),
      (t[5] = h),
      (t[6] = d),
      (t[7] = 0),
      (t[8] = o),
      (t[9] = u),
      (t[10] = l),
      (t[11] = 0),
      (t[12] = -(i * p + e * g + o * y)),
      (t[13] = -(r * p + h * g + u * y)),
      (t[14] = -(f * p + d * g + l * y)),
      (t[15] = 1),
      t);
}
function Ms(t, a, s, n) {
  var i = a[0],
    e = a[1],
    o = a[2],
    r = n[0],
    h = n[1],
    u = n[2],
    f = i - s[0],
    d = e - s[1],
    l = o - s[2],
    c = f * f + d * d + l * l;
  c > 0 && ((c = 1 / Math.sqrt(c)), (f *= c), (d *= c), (l *= c));
  var p = h * l - u * d,
    g = u * f - r * l,
    y = r * d - h * f;
  return (
    (c = p * p + g * g + y * y),
    c > 0 && ((c = 1 / Math.sqrt(c)), (p *= c), (g *= c), (y *= c)),
    (t[0] = p),
    (t[1] = g),
    (t[2] = y),
    (t[3] = 0),
    (t[4] = d * y - l * g),
    (t[5] = l * p - f * y),
    (t[6] = f * g - d * p),
    (t[7] = 0),
    (t[8] = f),
    (t[9] = d),
    (t[10] = l),
    (t[11] = 0),
    (t[12] = i),
    (t[13] = e),
    (t[14] = o),
    (t[15] = 1),
    t
  );
}
function xs(t) {
  return (
    "mat4(" +
    t[0] +
    ", " +
    t[1] +
    ", " +
    t[2] +
    ", " +
    t[3] +
    ", " +
    t[4] +
    ", " +
    t[5] +
    ", " +
    t[6] +
    ", " +
    t[7] +
    ", " +
    t[8] +
    ", " +
    t[9] +
    ", " +
    t[10] +
    ", " +
    t[11] +
    ", " +
    t[12] +
    ", " +
    t[13] +
    ", " +
    t[14] +
    ", " +
    t[15] +
    ")"
  );
}
function ws(t) {
  return Math.hypot(
    t[0],
    t[1],
    t[2],
    t[3],
    t[4],
    t[5],
    t[6],
    t[7],
    t[8],
    t[9],
    t[10],
    t[11],
    t[12],
    t[13],
    t[14],
    t[15],
  );
}
function ks(t, a, s) {
  return (
    (t[0] = a[0] + s[0]),
    (t[1] = a[1] + s[1]),
    (t[2] = a[2] + s[2]),
    (t[3] = a[3] + s[3]),
    (t[4] = a[4] + s[4]),
    (t[5] = a[5] + s[5]),
    (t[6] = a[6] + s[6]),
    (t[7] = a[7] + s[7]),
    (t[8] = a[8] + s[8]),
    (t[9] = a[9] + s[9]),
    (t[10] = a[10] + s[10]),
    (t[11] = a[11] + s[11]),
    (t[12] = a[12] + s[12]),
    (t[13] = a[13] + s[13]),
    (t[14] = a[14] + s[14]),
    (t[15] = a[15] + s[15]),
    t
  );
}
function Lt(t, a, s) {
  return (
    (t[0] = a[0] - s[0]),
    (t[1] = a[1] - s[1]),
    (t[2] = a[2] - s[2]),
    (t[3] = a[3] - s[3]),
    (t[4] = a[4] - s[4]),
    (t[5] = a[5] - s[5]),
    (t[6] = a[6] - s[6]),
    (t[7] = a[7] - s[7]),
    (t[8] = a[8] - s[8]),
    (t[9] = a[9] - s[9]),
    (t[10] = a[10] - s[10]),
    (t[11] = a[11] - s[11]),
    (t[12] = a[12] - s[12]),
    (t[13] = a[13] - s[13]),
    (t[14] = a[14] - s[14]),
    (t[15] = a[15] - s[15]),
    t
  );
}
function As(t, a, s) {
  return (
    (t[0] = a[0] * s),
    (t[1] = a[1] * s),
    (t[2] = a[2] * s),
    (t[3] = a[3] * s),
    (t[4] = a[4] * s),
    (t[5] = a[5] * s),
    (t[6] = a[6] * s),
    (t[7] = a[7] * s),
    (t[8] = a[8] * s),
    (t[9] = a[9] * s),
    (t[10] = a[10] * s),
    (t[11] = a[11] * s),
    (t[12] = a[12] * s),
    (t[13] = a[13] * s),
    (t[14] = a[14] * s),
    (t[15] = a[15] * s),
    t
  );
}
function qs(t, a, s, n) {
  return (
    (t[0] = a[0] + s[0] * n),
    (t[1] = a[1] + s[1] * n),
    (t[2] = a[2] + s[2] * n),
    (t[3] = a[3] + s[3] * n),
    (t[4] = a[4] + s[4] * n),
    (t[5] = a[5] + s[5] * n),
    (t[6] = a[6] + s[6] * n),
    (t[7] = a[7] + s[7] * n),
    (t[8] = a[8] + s[8] * n),
    (t[9] = a[9] + s[9] * n),
    (t[10] = a[10] + s[10] * n),
    (t[11] = a[11] + s[11] * n),
    (t[12] = a[12] + s[12] * n),
    (t[13] = a[13] + s[13] * n),
    (t[14] = a[14] + s[14] * n),
    (t[15] = a[15] + s[15] * n),
    t
  );
}
function zs(t, a) {
  return (
    t[0] === a[0] &&
    t[1] === a[1] &&
    t[2] === a[2] &&
    t[3] === a[3] &&
    t[4] === a[4] &&
    t[5] === a[5] &&
    t[6] === a[6] &&
    t[7] === a[7] &&
    t[8] === a[8] &&
    t[9] === a[9] &&
    t[10] === a[10] &&
    t[11] === a[11] &&
    t[12] === a[12] &&
    t[13] === a[13] &&
    t[14] === a[14] &&
    t[15] === a[15]
  );
}
function js(t, a) {
  var s = t[0],
    n = t[1],
    i = t[2],
    e = t[3],
    o = t[4],
    r = t[5],
    h = t[6],
    u = t[7],
    f = t[8],
    d = t[9],
    l = t[10],
    c = t[11],
    p = t[12],
    g = t[13],
    y = t[14],
    m = t[15],
    _ = a[0],
    b = a[1],
    M = a[2],
    x = a[3],
    w = a[4],
    v = a[5],
    A = a[6],
    S = a[7],
    z = a[8],
    k = a[9],
    F = a[10],
    N = a[11],
    q = a[12],
    E = a[13],
    W = a[14],
    K = a[15];
  return (
    Math.abs(s - _) <= D * Math.max(1, Math.abs(s), Math.abs(_)) &&
    Math.abs(n - b) <= D * Math.max(1, Math.abs(n), Math.abs(b)) &&
    Math.abs(i - M) <= D * Math.max(1, Math.abs(i), Math.abs(M)) &&
    Math.abs(e - x) <= D * Math.max(1, Math.abs(e), Math.abs(x)) &&
    Math.abs(o - w) <= D * Math.max(1, Math.abs(o), Math.abs(w)) &&
    Math.abs(r - v) <= D * Math.max(1, Math.abs(r), Math.abs(v)) &&
    Math.abs(h - A) <= D * Math.max(1, Math.abs(h), Math.abs(A)) &&
    Math.abs(u - S) <= D * Math.max(1, Math.abs(u), Math.abs(S)) &&
    Math.abs(f - z) <= D * Math.max(1, Math.abs(f), Math.abs(z)) &&
    Math.abs(d - k) <= D * Math.max(1, Math.abs(d), Math.abs(k)) &&
    Math.abs(l - F) <= D * Math.max(1, Math.abs(l), Math.abs(F)) &&
    Math.abs(c - N) <= D * Math.max(1, Math.abs(c), Math.abs(N)) &&
    Math.abs(p - q) <= D * Math.max(1, Math.abs(p), Math.abs(q)) &&
    Math.abs(g - E) <= D * Math.max(1, Math.abs(g), Math.abs(E)) &&
    Math.abs(y - W) <= D * Math.max(1, Math.abs(y), Math.abs(W)) &&
    Math.abs(m - K) <= D * Math.max(1, Math.abs(m), Math.abs(K))
  );
}
var Vs = St,
  Ss = Lt,
  ft = {};
dt(ft, {
  add: () => pn,
  calculateW: () => an,
  clone: () => un,
  conjugate: () => on,
  copy: () => cn,
  create: () => pt,
  dot: () => Pt,
  equals: () => _n,
  exactEquals: () => bn,
  exp: () => Et,
  fromEuler: () => rn,
  fromMat3: () => $t,
  fromValues: () => ln,
  getAngle: () => Xs,
  getAxisAngle: () => Zs,
  identity: () => Qs,
  invert: () => en,
  len: () => gn,
  length: () => Rt,
  lerp: () => yn,
  ln: () => Ot,
  mul: () => dn,
  multiply: () => It,
  normalize: () => yt,
  pow: () => sn,
  random: () => nn,
  rotateX: () => Js,
  rotateY: () => Ks,
  rotateZ: () => tn,
  rotationTo: () => vn,
  scale: () => Tt,
  set: () => fn,
  setAxes: () => xn,
  setAxisAngle: () => Ct,
  slerp: () => st,
  sqlerp: () => Mn,
  sqrLen: () => mn,
  squaredLength: () => Gt,
  str: () => hn,
});
function Ut() {
  var t = new I(3);
  return (I != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t);
}
function Ds(t) {
  var a = t[0],
    s = t[1],
    n = t[2];
  return Math.hypot(a, s, n);
}
function wt(t, a, s) {
  var n = new I(3);
  return ((n[0] = t), (n[1] = a), (n[2] = s), n);
}
function Fs(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = s * s + n * n + i * i;
  return (
    e > 0 && (e = 1 / Math.sqrt(e)),
    (t[0] = a[0] * e),
    (t[1] = a[1] * e),
    (t[2] = a[2] * e),
    t
  );
}
function Ns(t, a) {
  return t[0] * a[0] + t[1] * a[1] + t[2] * a[2];
}
function ut(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = s[0],
    r = s[1],
    h = s[2];
  return ((t[0] = i * h - e * r), (t[1] = e * o - n * h), (t[2] = n * r - i * o), t);
}
var Bs = Ds;
(function () {
  var t = Ut();
  return function (a, s, n, i, e, o) {
    var r, h;
    for (
      s || (s = 3), n || (n = 0), i ? (h = Math.min(i * s + n, a.length)) : (h = a.length), r = n;
      r < h;
      r += s
    )
      ((t[0] = a[r]),
        (t[1] = a[r + 1]),
        (t[2] = a[r + 2]),
        e(t, t, o),
        (a[r] = t[0]),
        (a[r + 1] = t[1]),
        (a[r + 2] = t[2]));
    return a;
  };
})();
function Ls() {
  var t = new I(4);
  return (I != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0)), t);
}
function Us(t) {
  var a = new I(4);
  return ((a[0] = t[0]), (a[1] = t[1]), (a[2] = t[2]), (a[3] = t[3]), a);
}
function Cs(t, a, s, n) {
  var i = new I(4);
  return ((i[0] = t), (i[1] = a), (i[2] = s), (i[3] = n), i);
}
function Is(t, a) {
  return ((t[0] = a[0]), (t[1] = a[1]), (t[2] = a[2]), (t[3] = a[3]), t);
}
function Es(t, a, s, n, i) {
  return ((t[0] = a), (t[1] = s), (t[2] = n), (t[3] = i), t);
}
function Os(t, a, s) {
  return (
    (t[0] = a[0] + s[0]),
    (t[1] = a[1] + s[1]),
    (t[2] = a[2] + s[2]),
    (t[3] = a[3] + s[3]),
    t
  );
}
function $s(t, a, s) {
  return ((t[0] = a[0] * s), (t[1] = a[1] * s), (t[2] = a[2] * s), (t[3] = a[3] * s), t);
}
function Ts(t) {
  var a = t[0],
    s = t[1],
    n = t[2],
    i = t[3];
  return Math.hypot(a, s, n, i);
}
function Ps(t) {
  var a = t[0],
    s = t[1],
    n = t[2],
    i = t[3];
  return a * a + s * s + n * n + i * i;
}
function Rs(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = s * s + n * n + i * i + e * e;
  return (
    o > 0 && (o = 1 / Math.sqrt(o)),
    (t[0] = s * o),
    (t[1] = n * o),
    (t[2] = i * o),
    (t[3] = e * o),
    t
  );
}
function Gs(t, a) {
  return t[0] * a[0] + t[1] * a[1] + t[2] * a[2] + t[3] * a[3];
}
function Hs(t, a, s, n) {
  var i = a[0],
    e = a[1],
    o = a[2],
    r = a[3];
  return (
    (t[0] = i + n * (s[0] - i)),
    (t[1] = e + n * (s[1] - e)),
    (t[2] = o + n * (s[2] - o)),
    (t[3] = r + n * (s[3] - r)),
    t
  );
}
function Ws(t, a) {
  return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3];
}
function Ys(t, a) {
  var s = t[0],
    n = t[1],
    i = t[2],
    e = t[3],
    o = a[0],
    r = a[1],
    h = a[2],
    u = a[3];
  return (
    Math.abs(s - o) <= D * Math.max(1, Math.abs(s), Math.abs(o)) &&
    Math.abs(n - r) <= D * Math.max(1, Math.abs(n), Math.abs(r)) &&
    Math.abs(i - h) <= D * Math.max(1, Math.abs(i), Math.abs(h)) &&
    Math.abs(e - u) <= D * Math.max(1, Math.abs(e), Math.abs(u))
  );
}
(function () {
  var t = Ls();
  return function (a, s, n, i, e, o) {
    var r, h;
    for (
      s || (s = 4), n || (n = 0), i ? (h = Math.min(i * s + n, a.length)) : (h = a.length), r = n;
      r < h;
      r += s
    )
      ((t[0] = a[r]),
        (t[1] = a[r + 1]),
        (t[2] = a[r + 2]),
        (t[3] = a[r + 3]),
        e(t, t, o),
        (a[r] = t[0]),
        (a[r + 1] = t[1]),
        (a[r + 2] = t[2]),
        (a[r + 3] = t[3]));
    return a;
  };
})();
function pt() {
  var t = new I(4);
  return (I != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), (t[3] = 1), t);
}
function Qs(t) {
  return ((t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), t);
}
function Ct(t, a, s) {
  s = s * 0.5;
  var n = Math.sin(s);
  return ((t[0] = n * a[0]), (t[1] = n * a[1]), (t[2] = n * a[2]), (t[3] = Math.cos(s)), t);
}
function Zs(t, a) {
  var s = Math.acos(a[3]) * 2,
    n = Math.sin(s / 2);
  return (
    n > D
      ? ((t[0] = a[0] / n), (t[1] = a[1] / n), (t[2] = a[2] / n))
      : ((t[0] = 1), (t[1] = 0), (t[2] = 0)),
    s
  );
}
function Xs(t, a) {
  var s = Pt(t, a);
  return Math.acos(2 * s * s - 1);
}
function It(t, a, s) {
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = s[0],
    h = s[1],
    u = s[2],
    f = s[3];
  return (
    (t[0] = n * f + o * r + i * u - e * h),
    (t[1] = i * f + o * h + e * r - n * u),
    (t[2] = e * f + o * u + n * h - i * r),
    (t[3] = o * f - n * r - i * h - e * u),
    t
  );
}
function Js(t, a, s) {
  s *= 0.5;
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = Math.sin(s),
    h = Math.cos(s);
  return (
    (t[0] = n * h + o * r),
    (t[1] = i * h + e * r),
    (t[2] = e * h - i * r),
    (t[3] = o * h - n * r),
    t
  );
}
function Ks(t, a, s) {
  s *= 0.5;
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = Math.sin(s),
    h = Math.cos(s);
  return (
    (t[0] = n * h - e * r),
    (t[1] = i * h + o * r),
    (t[2] = e * h + n * r),
    (t[3] = o * h - i * r),
    t
  );
}
function tn(t, a, s) {
  s *= 0.5;
  var n = a[0],
    i = a[1],
    e = a[2],
    o = a[3],
    r = Math.sin(s),
    h = Math.cos(s);
  return (
    (t[0] = n * h + i * r),
    (t[1] = i * h - n * r),
    (t[2] = e * h + o * r),
    (t[3] = o * h - e * r),
    t
  );
}
function an(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2];
  return (
    (t[0] = s),
    (t[1] = n),
    (t[2] = i),
    (t[3] = Math.sqrt(Math.abs(1 - s * s - n * n - i * i))),
    t
  );
}
function Et(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = Math.sqrt(s * s + n * n + i * i),
    r = Math.exp(e),
    h = o > 0 ? (r * Math.sin(o)) / o : 0;
  return ((t[0] = s * h), (t[1] = n * h), (t[2] = i * h), (t[3] = r * Math.cos(o)), t);
}
function Ot(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = Math.sqrt(s * s + n * n + i * i),
    r = o > 0 ? Math.atan2(o, e) / o : 0;
  return (
    (t[0] = s * r),
    (t[1] = n * r),
    (t[2] = i * r),
    (t[3] = 0.5 * Math.log(s * s + n * n + i * i + e * e)),
    t
  );
}
function sn(t, a, s) {
  return (Ot(t, a), Tt(t, t, s), Et(t, t), t);
}
function st(t, a, s, n) {
  var i = a[0],
    e = a[1],
    o = a[2],
    r = a[3],
    h = s[0],
    u = s[1],
    f = s[2],
    d = s[3],
    l,
    c,
    p,
    g,
    y;
  return (
    (c = i * h + e * u + o * f + r * d),
    c < 0 && ((c = -c), (h = -h), (u = -u), (f = -f), (d = -d)),
    1 - c > D
      ? ((l = Math.acos(c)),
        (p = Math.sin(l)),
        (g = Math.sin((1 - n) * l) / p),
        (y = Math.sin(n * l) / p))
      : ((g = 1 - n), (y = n)),
    (t[0] = g * i + y * h),
    (t[1] = g * e + y * u),
    (t[2] = g * o + y * f),
    (t[3] = g * r + y * d),
    t
  );
}
function nn(t) {
  var a = ht(),
    s = ht(),
    n = ht(),
    i = Math.sqrt(1 - a),
    e = Math.sqrt(a);
  return (
    (t[0] = i * Math.sin(2 * Math.PI * s)),
    (t[1] = i * Math.cos(2 * Math.PI * s)),
    (t[2] = e * Math.sin(2 * Math.PI * n)),
    (t[3] = e * Math.cos(2 * Math.PI * n)),
    t
  );
}
function en(t, a) {
  var s = a[0],
    n = a[1],
    i = a[2],
    e = a[3],
    o = s * s + n * n + i * i + e * e,
    r = o ? 1 / o : 0;
  return ((t[0] = -s * r), (t[1] = -n * r), (t[2] = -i * r), (t[3] = e * r), t);
}
function on(t, a) {
  return ((t[0] = -a[0]), (t[1] = -a[1]), (t[2] = -a[2]), (t[3] = a[3]), t);
}
function $t(t, a) {
  var s = a[0] + a[4] + a[8],
    n;
  if (s > 0)
    ((n = Math.sqrt(s + 1)),
      (t[3] = 0.5 * n),
      (n = 0.5 / n),
      (t[0] = (a[5] - a[7]) * n),
      (t[1] = (a[6] - a[2]) * n),
      (t[2] = (a[1] - a[3]) * n));
  else {
    var i = 0;
    (a[4] > a[0] && (i = 1), a[8] > a[i * 3 + i] && (i = 2));
    var e = (i + 1) % 3,
      o = (i + 2) % 3;
    ((n = Math.sqrt(a[i * 3 + i] - a[e * 3 + e] - a[o * 3 + o] + 1)),
      (t[i] = 0.5 * n),
      (n = 0.5 / n),
      (t[3] = (a[e * 3 + o] - a[o * 3 + e]) * n),
      (t[e] = (a[e * 3 + i] + a[i * 3 + e]) * n),
      (t[o] = (a[o * 3 + i] + a[i * 3 + o]) * n));
  }
  return t;
}
function rn(t, a, s, n) {
  var i = (0.5 * Math.PI) / 180;
  ((a *= i), (s *= i), (n *= i));
  var e = Math.sin(a),
    o = Math.cos(a),
    r = Math.sin(s),
    h = Math.cos(s),
    u = Math.sin(n),
    f = Math.cos(n);
  return (
    (t[0] = e * h * f - o * r * u),
    (t[1] = o * r * f + e * h * u),
    (t[2] = o * h * u - e * r * f),
    (t[3] = o * h * f + e * r * u),
    t
  );
}
function hn(t) {
  return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
}
var un = Us,
  ln = Cs,
  cn = Is,
  fn = Es,
  pn = Os,
  dn = It,
  Tt = $s,
  Pt = Gs,
  yn = Hs,
  Rt = Ts,
  gn = Rt,
  Gt = Ps,
  mn = Gt,
  yt = Rs,
  bn = Ws,
  _n = Ys,
  vn = (function () {
    var t = Ut(),
      a = wt(1, 0, 0),
      s = wt(0, 1, 0);
    return function (n, i, e) {
      var o = Ns(i, e);
      return o < -0.999999
        ? (ut(t, a, i), Bs(t) < 1e-6 && ut(t, s, i), Fs(t, t), Ct(n, t, Math.PI), n)
        : o > 0.999999
          ? ((n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 1), n)
          : (ut(t, i, e), (n[0] = t[0]), (n[1] = t[1]), (n[2] = t[2]), (n[3] = 1 + o), yt(n, n));
    };
  })(),
  Mn = (function () {
    var t = pt(),
      a = pt();
    return function (s, n, i, e, o, r) {
      return (st(t, n, o, r), st(a, i, e, r), st(s, t, a, 2 * r * (1 - r)), s);
    };
  })(),
  xn = (function () {
    var t = qt();
    return function (a, s, n, i) {
      return (
        (t[0] = n[0]),
        (t[3] = n[1]),
        (t[6] = n[2]),
        (t[1] = i[0]),
        (t[4] = i[1]),
        (t[7] = i[2]),
        (t[2] = -s[0]),
        (t[5] = -s[1]),
        (t[8] = -s[2]),
        yt(a, $t(a, t))
      );
    };
  })(),
  kt = { xyz: 3, color: 3, opacity: 1, scaling: 3, quaternion: 4, harmonics: 3 },
  At = class {
    constructor(t) {
      ((this.version = ""), (this._buffer = t));
    }
    get buffer() {
      return this._buffer;
    }
    get decoded() {
      return (this._decoded || (this._decoded = this.decodeBuffer()), this._decoded);
    }
    get colorsA() {
      let t = 0.28209479177387814,
        a = this.decoded.color.denormDequant(),
        s = this.decoded.opacity.denormDequant(),
        n = (0, X.default)(new Float32Array(a.shape[0] * 4), [a.shape[0], 4]);
      return (
        O.mulseq(a, t),
        O.addseq(a, 0.5),
        O.mulseq(a, 255),
        O.maxseq(a, 0),
        O.minseq(a, 255),
        this.version === "" &&
          (O.negeq(s), O.expeq(s), O.addseq(s, 1), O.recipeq(s), O.mulseq(s, 255)),
        O.assign(n.hi(a.shape[0], 3).lo(0, 0), a),
        O.assign(n.hi(a.shape[0], 4).lo(0, 3), s),
        (0, X.default)(new Uint8Array(n.data), [a.shape[0], 4]).data
      );
    }
    get nsplats() {
      return this.decoded.nsplats;
    }
    getSplatCount() {
      return this.decoded.nsplats;
    }
    get precomputedCovarianceBufferData() {
      return this._precomputedCovarianceBufferData;
    }
    decodeBuffer() {
      let {
        splatCount: t,
        chunkCount: a,
        chunkSize: s,
        typeChunks: n,
        vertexData: i,
        propertiesDesc: e,
        version: o,
      } = this.decodeHeader();
      this.version = o;
      let r = {
        xyz: e.xyz.compressionMethod,
        color: e.color.compressionMethod,
        opacity: e.opacity.compressionMethod,
        scaling: e.scaling.compressionMethod,
        quaternion: e.quaternion.compressionMethod,
        chunkSize: s,
      };
      e.harmonics_0 && (r.harmonics = e.harmonics_0.compressionMethod);
      let h = i.byteOffset,
        u = Array(Object.keys(e).length);
      for (let m in e) u[e[m].index] = { name: m, method: e[m].compressionMethod };
      let f = a * 2 * 4,
        d = h,
        l = n === "dynamic" ? a * 2 : 0,
        c,
        p = !1;
      if (l > 0) {
        let m = new Uint16Array(i.buffer.slice(d, d + l));
        ((d += l), (c = Array.from(m)), (p = !0));
      }
      let g = {};
      for (let m of u) {
        let _ = 0,
          b = !0;
        if (m.method === "norm8x") _ = t * 1 * kt[m.name];
        else if (m.method === "norm11") _ = t * 4;
        else if (m.method === "norm565") _ = t * 2;
        else throw ((b = !1), new Error(`Not Implemented format: ${m.method}`));
        let M;
        if (b) {
          let v = i.buffer.slice(d, d + f);
          ((M = (0, X.default)(new Float32Array(v), [a, 2])), (d += f));
        } else throw new Error("loading chunk byt hasnot minmax!");
        let x = i.buffer.slice(d, d + _);
        d += _;
        let w;
        if (m.method === "norm8x") w = (0, X.default)(new Uint8Array(x), [t, kt[m.name]]);
        else if (m.method === "norm11") w = (0, X.default)(new Uint32Array(x));
        else if (m.method === "norm565") w = (0, X.default)(new Uint16Array(x));
        else throw new Error(`Not Implemented format: ${m.method}`);
        g[m.name] = new L(w, M, s, m.method, c, p);
      }
      let y = [];
      for (let m = 0; m < 15; m++) {
        let _ = g[`harmonics_${m}`];
        _ && (y.push(_), delete g[`harmonics_${m}`]);
      }
      return (
        y.length > 0 && (g.harmonics = y),
        new lt(r, g.xyz, g.scaling, g.color, g.opacity, g.quaternion, g.harmonics, c)
      );
    }
    buildPreComputedBuffers() {
      let t = this.decoded,
        a = t.nsplats,
        s = new ArrayBuffer(24 * a),
        n = new Float32Array(s),
        i = t.scaling.denormDequant(),
        e = t.quaternion.denormDequant(),
        o = ft.create(),
        r = Q.create(),
        h = Q.create(),
        u = Q.create(),
        f = ct.create();
      for (let d = 0; d < a; d++) {
        (ct.fromScaling(f, [Math.exp(i.get(d, 0)), Math.exp(i.get(d, 1)), Math.exp(i.get(d, 2))]),
          Q.fromMat4(h, f),
          ft.set(o, e.get(d, 0), e.get(d, 1), e.get(d, 2), e.get(d, 3)),
          Q.fromQuat(r, o),
          Q.multiply(u, r, h));
        let l = u;
        ((n[6 * d] = l[0] * l[0] + l[3] * l[3] + l[6] * l[6]),
          (n[6 * d + 1] = l[0] * l[1] + l[3] * l[4] + l[6] * l[7]),
          (n[6 * d + 2] = l[0] * l[2] + l[3] * l[5] + l[6] * l[8]),
          (n[6 * d + 3] = l[1] * l[1] + l[4] * l[4] + l[7] * l[7]),
          (n[6 * d + 4] = l[1] * l[2] + l[4] * l[5] + l[7] * l[8]),
          (n[6 * d + 5] = l[2] * l[2] + l[5] * l[5] + l[8] * l[8]));
      }
      this._precomputedCovarianceBufferData = s;
    }
    decodeHeader() {
      let t = this._buffer,
        a = new TextDecoder(),
        s = 0,
        n = "",
        i = 100;
      for (;;) {
        if (s + i >= t.byteLength)
          throw new Error("End of file reached while searching for end of header");
        let g = new Uint8Array(t, s, i);
        ((n += a.decode(g)), (s += i));
        let y = s - i * 2,
          m = new Uint8Array(t, Math.max(0, y), y >= 0 ? i * 2 : i);
        if (a.decode(m).includes("end_header")) break;
      }
      let e = n.split(`
`),
        o = 0,
        r = 0,
        h = 0,
        u = 0,
        f = "",
        d = "",
        l = {};
      for (let g = 0; g < e.length; g++) {
        let y = e[g].trim();
        if (y.startsWith("version")) d = y.split(" ")[1] ?? "";
        else if (y.startsWith("element vertex")) {
          let m = y.match(/\d+/);
          m && (o = parseInt(m[0]));
        } else if (y.startsWith("property")) {
          let m = y.match(/(\w+)\s+(\w+)\s+(\w+)/);
          if (m) {
            let _ = m[2],
              b = m[3];
            ((l[_] = { compressionMethod: b, index: u }), u++);
          }
        } else if (y.startsWith("element chunks")) {
          let m = y.match(/\d+/);
          m && (r = parseInt(m[0]));
        } else if (y.startsWith("element chunkSize")) {
          let m = y.match(/\d+/);
          m && (h = parseInt(m[0]));
        } else if (y.startsWith("element typeChunks")) {
          let m = y.match(/(\w+)\s+(\w+)\s+(\w+)/);
          m && (f = m[3]);
        } else if (y === "end_header") break;
      }
      let c = n.indexOf("end_header") + 10 + 1,
        p = new DataView(t, c);
      return {
        splatCount: o,
        chunkCount: r,
        chunkSize: h,
        typeChunks: f,
        vertexData: p,
        propertiesDesc: l,
        version: d,
      };
    }
    pruneSplats(t) {
      let a = this.decodeBuffer().pruneSplats(t);
      return At.fromCompressedGaussianSplats(a, this.version);
    }
    static fromCompressedGaussianSplats(t, a) {
      let s = t.xyz.length,
        n = t.xyz.nchunks,
        i = `gspline
version ${a}
element vertex ${s}
element chunks ${n}
element chunkSize ${t.chunkSize}
element typeChunks ${t.isDynamicChunks ? "dynamic" : "static"}
property xyz ${t.xyz.method}
property color ${t.color.method}
property opacity ${t.opacity.method}
property scaling ${t.scaling.method}
property quaternion ${t.quaternion.method}`;
      if (t.harmonics && t.harmonics.length > 0)
        for (let A = 0; A < t.harmonics.length; A++)
          i = `${i}
property harmonics_${A} ${t.harmonics[A].method}`;
      i = `${i}
end_header
`;
      let e = new TextEncoder().encode(i),
        o = n * 2 * 4,
        r = t.xyz.quantized.data.buffer.byteLength,
        h = t.xyz instanceof L ? o : 0,
        u = t.color.quantized.data.buffer.byteLength,
        f = t.color instanceof L ? o : 0,
        d = t.opacity.quantized.data.buffer.byteLength,
        l = t.opacity instanceof L ? o : 0,
        c = t.scaling.quantized.data.buffer.byteLength,
        p = t.scaling instanceof L ? o : 0,
        g = t.quaternion.quantized.data.buffer.byteLength,
        y = t.quaternion instanceof L ? o : 0,
        m = t.variableChunkSize ? Uint16Array.from(t.variableChunkSize) : void 0,
        _ = m ? m.byteLength : 0,
        b = e.byteLength + _ + r + h + u + f + d + l + c + p + g + y,
        M = 0,
        x = 0;
      if (t.harmonics && t.harmonics.length > 0)
        for (let A = 0; A < t.harmonics.length; A++)
          ((M += t.harmonics[A].quantized.data.buffer.byteLength),
            (x += t.harmonics[A] instanceof L ? o : 0));
      ((M = 0), (x = 0), (b += M + x));
      let w = new Uint8Array(b),
        v = 0;
      if (
        (w.set(e, v),
        (v += e.byteLength),
        _ > 0 && (w.set(new Uint8Array(m.buffer), v), (v += _)),
        t.xyz instanceof L && (w.set(new Uint8Array(t.xyz.minmaxMatrix.data.buffer), v), (v += o)),
        w.set(new Uint8Array(t.xyz.quantized.data.buffer), v),
        (v += r),
        t.color instanceof L &&
          (w.set(new Uint8Array(t.color.minmaxMatrix.data.buffer), v), (v += o)),
        w.set(new Uint8Array(t.color.quantized.data.buffer), v),
        (v += u),
        t.opacity instanceof L &&
          (w.set(new Uint8Array(t.opacity.minmaxMatrix.data.buffer), v), (v += o)),
        w.set(new Uint8Array(t.opacity.quantized.data.buffer), v),
        (v += d),
        t.scaling instanceof L &&
          (w.set(new Uint8Array(t.scaling.minmaxMatrix.data.buffer), v), (v += o)),
        w.set(new Uint8Array(t.scaling.quantized.data.buffer), v),
        (v += c),
        t.quaternion instanceof L &&
          (w.set(new Uint8Array(t.quaternion.minmaxMatrix.data.buffer), v), (v += o)),
        w.set(new Uint8Array(t.quaternion.quantized.data.buffer), v),
        (v += g),
        M > 0 && t.harmonics && t.harmonics.length > 0)
      )
        for (let A = 0; A < t.harmonics.length; A++) {
          let S = t.harmonics[A];
          (S instanceof L && (w.set(new Uint8Array(S.minmaxMatrix.data.buffer), v), (v += o)),
            w.set(new Uint8Array(S.quantized.data.buffer), v),
            (v += S.quantized.data.byteLength));
        }
      return new At(w.buffer);
    }
  };
export { lt as CompressedGaussianSplats, At as GSplineBuffer, Y as GaussianPLYData };
