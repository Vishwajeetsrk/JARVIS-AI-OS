var Hn = (be, wt) => () => (wt || be((wt = { exports: {} }).exports, wt), wt.exports),
  Un = Hn((be, wt) => {
    var Oe = (() => {
      var We =
        typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
      return function ($e = {}) {
        var v = $e,
          Ve,
          Qt;
        ((v.ready = new Promise((t, e) => {
          ((Ve = t), (Qt = e));
        })),
          (function (t) {
            ((t.Id = t.Id || []),
              t.Id.push(function () {
                ((t.MakeSWCanvasSurface = function (e) {
                  var r = e,
                    a = typeof OffscreenCanvas < "u" && r instanceof OffscreenCanvas;
                  if (!(
                    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
                    a ||
                    ((r = document.getElementById(e)), r)
                  ))
                    throw "Canvas with id " + e + " was not found";
                  return ((e = t.MakeSurface(r.width, r.height)) && (e.ie = r), e);
                }),
                  t.MakeCanvasSurface || (t.MakeCanvasSurface = t.MakeSWCanvasSurface),
                  (t.MakeSurface = function (e, r) {
                    var a = {
                        width: e,
                        height: r,
                        colorType: t.ColorType.RGBA_8888,
                        alphaType: t.AlphaType.Unpremul,
                        colorSpace: t.ColorSpace.SRGB,
                      },
                      o = e * r * 4,
                      f = t._malloc(o);
                    return (
                      (a = t.Surface._makeRasterDirect(a, f, 4 * e)) &&
                        ((a.ie = null),
                        (a.Pe = e),
                        (a.Me = r),
                        (a.Ne = o),
                        (a.re = f),
                        a.getCanvas().clear(t.TRANSPARENT)),
                      a
                    );
                  }),
                  (t.MakeRasterDirectSurface = function (e, r, a) {
                    return t.Surface._makeRasterDirect(e, r.byteOffset, a);
                  }),
                  (t.Surface.prototype.flush = function (e) {
                    if ((t.Fd(this.Ed), this._flush(), this.ie)) {
                      var r = new Uint8ClampedArray(t.HEAPU8.buffer, this.re, this.Ne);
                      ((r = new ImageData(r, this.Pe, this.Me)),
                        e
                          ? this.ie
                              .getContext("2d")
                              .putImageData(r, 0, 0, e[0], e[1], e[2] - e[0], e[3] - e[1])
                          : this.ie.getContext("2d").putImageData(r, 0, 0));
                    }
                  }),
                  (t.Surface.prototype.dispose = function () {
                    (this.re && t._free(this.re), this.delete());
                  }),
                  (t.Fd = t.Fd || function () {}),
                  (t.je =
                    t.je ||
                    function () {
                      return null;
                    }));
              }));
          })(v),
          (function (t) {
            ((t.Id = t.Id || []),
              t.Id.push(function () {
                function e(s, h, _) {
                  return s && s.hasOwnProperty(h) ? s[h] : _;
                }
                function r(s) {
                  var h = Bt(et);
                  return ((et[h] = s), h);
                }
                function a(s) {
                  return s.naturalHeight || s.videoHeight || s.displayHeight || s.height;
                }
                function o(s) {
                  return s.naturalWidth || s.videoWidth || s.displayWidth || s.width;
                }
                function f(s, h, _, b) {
                  return (
                    s.bindTexture(s.TEXTURE_2D, h),
                    b ||
                      _.alphaType !== t.AlphaType.Premul ||
                      s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                    h
                  );
                }
                function l(s, h, _) {
                  (_ ||
                    h.alphaType !== t.AlphaType.Premul ||
                    s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
                    s.bindTexture(s.TEXTURE_2D, null));
                }
                ((t.GetWebGLContext = function (s, h) {
                  if (!s) throw "null canvas passed into makeWebGLContext";
                  var _ = {
                    alpha: e(h, "alpha", 1),
                    depth: e(h, "depth", 1),
                    stencil: e(h, "stencil", 8),
                    antialias: e(h, "antialias", 0),
                    premultipliedAlpha: e(h, "premultipliedAlpha", 1),
                    preserveDrawingBuffer: e(h, "preserveDrawingBuffer", 0),
                    preferLowPowerToHighPerformance: e(h, "preferLowPowerToHighPerformance", 0),
                    failIfMajorPerformanceCaveat: e(h, "failIfMajorPerformanceCaveat", 0),
                    enableExtensionsByDefault: e(h, "enableExtensionsByDefault", 1),
                    explicitSwapControl: e(h, "explicitSwapControl", 0),
                    renderViaOffscreenBackBuffer: e(h, "renderViaOffscreenBackBuffer", 0),
                  };
                  if (
                    ((_.majorVersion =
                      h && h.majorVersion
                        ? h.majorVersion
                        : typeof WebGL2RenderingContext < "u"
                          ? 2
                          : 1),
                    _.explicitSwapControl)
                  )
                    throw "explicitSwapControl is not supported";
                  return (
                    (s = gn(s, _)),
                    s ? (Er(s), R.Qd.getExtension("WEBGL_debug_renderer_info"), s) : 0
                  );
                }),
                  (t.deleteContext = function (s) {
                    (R === yt[s] && (R = null),
                      typeof JSEvents == "object" && JSEvents.tf(yt[s].Qd.canvas),
                      yt[s] && yt[s].Qd.canvas && (yt[s].Qd.canvas.Ke = void 0),
                      (yt[s] = null));
                  }),
                  t._setTextureCleanup({
                    deleteTexture: function (s, h) {
                      var _ = et[h];
                      (_ && yt[s].Qd.deleteTexture(_), (et[h] = null));
                    },
                  }),
                  (t.MakeWebGLContext = function (s) {
                    if (!this.Fd(s)) return null;
                    var h = this._MakeGrContext();
                    if (!h) return null;
                    h.Ed = s;
                    var _ = h.delete.bind(h);
                    return (
                      (h.delete = function () {
                        (t.Fd(this.Ed), _());
                      }.bind(h)),
                      (R.te = h)
                    );
                  }),
                  (t.MakeGrContext = t.MakeWebGLContext),
                  (t.GrDirectContext.prototype.getResourceCacheLimitBytes = function () {
                    (t.Fd(this.Ed), this._getResourceCacheLimitBytes());
                  }),
                  (t.GrDirectContext.prototype.getResourceCacheUsageBytes = function () {
                    (t.Fd(this.Ed), this._getResourceCacheUsageBytes());
                  }),
                  (t.GrDirectContext.prototype.releaseResourcesAndAbandonContext = function () {
                    (t.Fd(this.Ed), this._releaseResourcesAndAbandonContext());
                  }),
                  (t.GrDirectContext.prototype.setResourceCacheLimitBytes = function (s) {
                    (t.Fd(this.Ed), this._setResourceCacheLimitBytes(s));
                  }),
                  (t.MakeOnScreenGLSurface = function (s, h, _, b, E, w) {
                    return !this.Fd(s.Ed) ||
                      ((h =
                        E === void 0 || w === void 0
                          ? this._MakeOnScreenGLSurface(s, h, _, b)
                          : this._MakeOnScreenGLSurface(s, h, _, b, E, w)),
                      !h)
                      ? null
                      : ((h.Ed = s.Ed), h);
                  }),
                  (t.MakeRenderTarget = function () {
                    var s = arguments[0];
                    if (!this.Fd(s.Ed)) return null;
                    if (arguments.length === 3) {
                      var h = this._MakeRenderTargetWH(s, arguments[1], arguments[2]);
                      if (!h) return null;
                    } else if (arguments.length === 2) {
                      if (((h = this._MakeRenderTargetII(s, arguments[1])), !h)) return null;
                    } else return null;
                    return ((h.Ed = s.Ed), h);
                  }),
                  (t.MakeWebGLCanvasSurface = function (s, h, _) {
                    h = h || null;
                    var b = s,
                      E = typeof OffscreenCanvas < "u" && b instanceof OffscreenCanvas;
                    if (!(
                      (typeof HTMLCanvasElement < "u" && b instanceof HTMLCanvasElement) ||
                      E ||
                      ((b = document.getElementById(s)), b)
                    ))
                      throw "Canvas with id " + s + " was not found";
                    if (((s = this.GetWebGLContext(b, _)), !s || 0 > s))
                      throw "failed to create webgl context: err " + s;
                    return (
                      (s = this.MakeWebGLContext(s)),
                      (h = this.MakeOnScreenGLSurface(s, b.width, b.height, h)),
                      h ||
                        ((h = b.cloneNode(!0)),
                        b.parentNode.replaceChild(h, b),
                        h.classList.add("ck-replaced"),
                        t.MakeSWCanvasSurface(h))
                    );
                  }),
                  (t.MakeCanvasSurface = t.MakeWebGLCanvasSurface),
                  (t.Surface.prototype.makeImageFromTexture = function (s, h) {
                    return (
                      t.Fd(this.Ed),
                      (s = r(s)),
                      (h = this._makeImageFromTexture(this.Ed, s, h)) && (h.de = s),
                      h
                    );
                  }),
                  (t.Surface.prototype.makeImageFromTextureSource = function (s, h, _) {
                    (h ||
                      (h = {
                        height: a(s),
                        width: o(s),
                        colorType: t.ColorType.RGBA_8888,
                        alphaType: _ ? t.AlphaType.Premul : t.AlphaType.Unpremul,
                      }),
                      h.colorSpace || (h.colorSpace = t.ColorSpace.SRGB),
                      t.Fd(this.Ed));
                    var b = R.Qd;
                    return (
                      (_ = f(b, b.createTexture(), h, _)),
                      R.version === 2
                        ? b.texImage2D(
                            b.TEXTURE_2D,
                            0,
                            b.RGBA,
                            h.width,
                            h.height,
                            0,
                            b.RGBA,
                            b.UNSIGNED_BYTE,
                            s,
                          )
                        : b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, s),
                      l(b, h),
                      this._resetContext(),
                      this.makeImageFromTexture(_, h)
                    );
                  }),
                  (t.Surface.prototype.updateTextureFromSource = function (s, h, _) {
                    if (s.de) {
                      t.Fd(this.Ed);
                      var b = s.getImageInfo(),
                        E = R.Qd,
                        w = f(E, et[s.de], b, _);
                      (R.version === 2
                        ? E.texImage2D(
                            E.TEXTURE_2D,
                            0,
                            E.RGBA,
                            o(h),
                            a(h),
                            0,
                            E.RGBA,
                            E.UNSIGNED_BYTE,
                            h,
                          )
                        : E.texImage2D(E.TEXTURE_2D, 0, E.RGBA, E.RGBA, E.UNSIGNED_BYTE, h),
                        l(E, b, _),
                        this._resetContext(),
                        (et[s.de] = null),
                        (s.de = r(w)),
                        (b.colorSpace = s.getColorSpace()),
                        (h = this._makeImageFromTexture(this.Ed, s.de, b)),
                        (_ = s.Dd.Hd),
                        (E = s.Dd.Ld),
                        (s.Dd.Hd = h.Dd.Hd),
                        (s.Dd.Ld = h.Dd.Ld),
                        (h.Dd.Hd = _),
                        (h.Dd.Ld = E),
                        h.delete(),
                        b.colorSpace.delete());
                    }
                  }),
                  (t.MakeLazyImageFromTextureSource = function (s, h, _) {
                    (h ||
                      (h = {
                        height: a(s),
                        width: o(s),
                        colorType: t.ColorType.RGBA_8888,
                        alphaType: _ ? t.AlphaType.Premul : t.AlphaType.Unpremul,
                      }),
                      h.colorSpace || (h.colorSpace = t.ColorSpace.SRGB));
                    var b = {
                      makeTexture: function () {
                        var E = R,
                          w = E.Qd,
                          m = f(w, w.createTexture(), h, _);
                        return (
                          E.version === 2
                            ? w.texImage2D(
                                w.TEXTURE_2D,
                                0,
                                w.RGBA,
                                h.width,
                                h.height,
                                0,
                                w.RGBA,
                                w.UNSIGNED_BYTE,
                                s,
                              )
                            : w.texImage2D(w.TEXTURE_2D, 0, w.RGBA, w.RGBA, w.UNSIGNED_BYTE, s),
                          l(w, h, _),
                          r(m)
                        );
                      },
                      freeSrc: function () {},
                    };
                    return (
                      s.constructor.name === "VideoFrame" &&
                        (b.freeSrc = function () {
                          s.close();
                        }),
                      t.Image._makeFromGenerator(h, b)
                    );
                  }),
                  (t.Fd = function (s) {
                    return s ? Er(s) : !1;
                  }),
                  (t.je = function () {
                    return R && R.te && !R.te.isDeleted() ? R.te : null;
                  }));
              }));
          })(v),
          (function (t) {
            function e(i) {
              return (
                ((o(255 * i[3]) << 24) |
                  (o(255 * i[0]) << 16) |
                  (o(255 * i[1]) << 8) |
                  (o(255 * i[2]) << 0)) >>>
                0
              );
            }
            function r(i) {
              if (i && i._ck) return i;
              if (i instanceof Float32Array) {
                for (var n = Math.floor(i.length / 4), u = new Uint32Array(n), c = 0; c < n; c++)
                  u[c] = e(i.slice(4 * c, 4 * (c + 1)));
                return u;
              }
              if (i instanceof Uint32Array) return i;
              if (i instanceof Array && i[0] instanceof Float32Array) return i.map(e);
            }
            function a(i) {
              if (i === void 0) return 1;
              var n = parseFloat(i);
              return i && i.indexOf("%") !== -1 ? n / 100 : n;
            }
            function o(i) {
              return Math.round(Math.max(0, Math.min(i || 0, 255)));
            }
            function f(i, n) {
              (n && n._ck) || t._free(i);
            }
            function l(i, n, u) {
              if (!i || !i.length) return D;
              if (i && i._ck) return i.byteOffset;
              var c = t[n].BYTES_PER_ELEMENT;
              return (u || (u = t._malloc(i.length * c)), t[n].set(i, u / c), u);
            }
            function s(i) {
              var n = { Nd: D, count: i.length, colorType: t.ColorType.RGBA_F32 };
              if (i instanceof Float32Array) ((n.Nd = l(i, "HEAPF32")), (n.count = i.length / 4));
              else if (i instanceof Uint32Array)
                ((n.Nd = l(i, "HEAPU32")), (n.colorType = t.ColorType.RGBA_8888));
              else if (i instanceof Array) {
                if (i && i.length) {
                  for (var u = t._malloc(16 * i.length), c = 0, y = u / 4, g = 0; g < i.length; g++)
                    for (var P = 0; 4 > P; P++) ((t.HEAPF32[y + c] = i[g][P]), c++);
                  i = u;
                } else i = D;
                n.Nd = i;
              } else
                throw "Invalid argument to copyFlexibleColorArray, Not a color array " + typeof i;
              return n;
            }
            function h(i) {
              if (!i) return D;
              var n = O.toTypedArray();
              if (i.length) {
                if (i.length === 6 || i.length === 9)
                  return (l(i, "HEAPF32", k), i.length === 6 && t.HEAPF32.set(Ln, 6 + k / 4), k);
                if (i.length === 16)
                  return (
                    (n[0] = i[0]),
                    (n[1] = i[1]),
                    (n[2] = i[3]),
                    (n[3] = i[4]),
                    (n[4] = i[5]),
                    (n[5] = i[7]),
                    (n[6] = i[12]),
                    (n[7] = i[13]),
                    (n[8] = i[15]),
                    k
                  );
                throw "invalid matrix size";
              }
              if (i.m11 === void 0) throw "invalid matrix argument";
              return (
                (n[0] = i.m11),
                (n[1] = i.m21),
                (n[2] = i.m41),
                (n[3] = i.m12),
                (n[4] = i.m22),
                (n[5] = i.m42),
                (n[6] = i.m14),
                (n[7] = i.m24),
                (n[8] = i.m44),
                k
              );
            }
            function _(i) {
              if (!i) return D;
              var n = Y.toTypedArray();
              if (i.length) {
                if (i.length !== 16 && i.length !== 6 && i.length !== 9)
                  throw "invalid matrix size";
                return i.length === 16
                  ? l(i, "HEAPF32", K)
                  : (n.fill(0),
                    (n[0] = i[0]),
                    (n[1] = i[1]),
                    (n[3] = i[2]),
                    (n[4] = i[3]),
                    (n[5] = i[4]),
                    (n[7] = i[5]),
                    (n[10] = 1),
                    (n[12] = i[6]),
                    (n[13] = i[7]),
                    (n[15] = i[8]),
                    i.length === 6 && ((n[12] = 0), (n[13] = 0), (n[15] = 1)),
                    K);
              }
              if (i.m11 === void 0) throw "invalid matrix argument";
              return (
                (n[0] = i.m11),
                (n[1] = i.m21),
                (n[2] = i.m31),
                (n[3] = i.m41),
                (n[4] = i.m12),
                (n[5] = i.m22),
                (n[6] = i.m32),
                (n[7] = i.m42),
                (n[8] = i.m13),
                (n[9] = i.m23),
                (n[10] = i.m33),
                (n[11] = i.m43),
                (n[12] = i.m14),
                (n[13] = i.m24),
                (n[14] = i.m34),
                (n[15] = i.m44),
                K
              );
            }
            function b(i, n) {
              return l(i, "HEAPF32", n || mt);
            }
            function E(i, n, u, c) {
              var y = Lt.toTypedArray();
              return ((y[0] = i), (y[1] = n), (y[2] = u), (y[3] = c), mt);
            }
            function w(i) {
              for (var n = new Float32Array(4), u = 0; 4 > u; u++) n[u] = t.HEAPF32[i / 4 + u];
              return n;
            }
            function m(i, n) {
              return l(i, "HEAPF32", n || N);
            }
            function T(i, n) {
              return l(i, "HEAPF32", n || He);
            }
            ((t.Color = function (i, n, u, c) {
              return (c === void 0 && (c = 1), t.Color4f(o(i) / 255, o(n) / 255, o(u) / 255, c));
            }),
              (t.ColorAsInt = function (i, n, u, c) {
                return (
                  c === void 0 && (c = 255),
                  ((o(c) << 24) | (o(i) << 16) | (o(n) << 8) | ((o(u) << 0) & 268435455)) >>> 0
                );
              }),
              (t.Color4f = function (i, n, u, c) {
                return (c === void 0 && (c = 1), Float32Array.of(i, n, u, c));
              }),
              Object.defineProperty(t, "TRANSPARENT", {
                get: function () {
                  return t.Color4f(0, 0, 0, 0);
                },
              }),
              Object.defineProperty(t, "BLACK", {
                get: function () {
                  return t.Color4f(0, 0, 0, 1);
                },
              }),
              Object.defineProperty(t, "WHITE", {
                get: function () {
                  return t.Color4f(1, 1, 1, 1);
                },
              }),
              Object.defineProperty(t, "RED", {
                get: function () {
                  return t.Color4f(1, 0, 0, 1);
                },
              }),
              Object.defineProperty(t, "GREEN", {
                get: function () {
                  return t.Color4f(0, 1, 0, 1);
                },
              }),
              Object.defineProperty(t, "BLUE", {
                get: function () {
                  return t.Color4f(0, 0, 1, 1);
                },
              }),
              Object.defineProperty(t, "YELLOW", {
                get: function () {
                  return t.Color4f(1, 1, 0, 1);
                },
              }),
              Object.defineProperty(t, "CYAN", {
                get: function () {
                  return t.Color4f(0, 1, 1, 1);
                },
              }),
              Object.defineProperty(t, "MAGENTA", {
                get: function () {
                  return t.Color4f(1, 0, 1, 1);
                },
              }),
              (t.getColorComponents = function (i) {
                return [
                  Math.floor(255 * i[0]),
                  Math.floor(255 * i[1]),
                  Math.floor(255 * i[2]),
                  i[3],
                ];
              }),
              (t.parseColorString = function (i, n) {
                if (((i = i.toLowerCase()), i.startsWith("#"))) {
                  switch (((n = 255), i.length)) {
                    case 9:
                      n = parseInt(i.slice(7, 9), 16);
                    case 7:
                      var u = parseInt(i.slice(1, 3), 16),
                        c = parseInt(i.slice(3, 5), 16),
                        y = parseInt(i.slice(5, 7), 16);
                      break;
                    case 5:
                      n = 17 * parseInt(i.slice(4, 5), 16);
                    case 4:
                      ((u = 17 * parseInt(i.slice(1, 2), 16)),
                        (c = 17 * parseInt(i.slice(2, 3), 16)),
                        (y = 17 * parseInt(i.slice(3, 4), 16)));
                  }
                  return t.Color(u, c, y, n / 255);
                }
                return i.startsWith("rgba")
                  ? ((i = i.slice(5, -1)),
                    (i = i.split(",")),
                    t.Color(+i[0], +i[1], +i[2], a(i[3])))
                  : i.startsWith("rgb")
                    ? ((i = i.slice(4, -1)),
                      (i = i.split(",")),
                      t.Color(+i[0], +i[1], +i[2], a(i[3])))
                    : i.startsWith("gray(") ||
                        i.startsWith("hsl") ||
                        !n ||
                        ((i = n[i]), i === void 0)
                      ? t.BLACK
                      : i;
              }),
              (t.multiplyByAlpha = function (i, n) {
                return ((i = i.slice()), (i[3] = Math.max(0, Math.min(i[3] * n, 1))), i);
              }),
              (t.Malloc = function (i, n) {
                var u = t._malloc(n * i.BYTES_PER_ELEMENT);
                return {
                  _ck: !0,
                  length: n,
                  byteOffset: u,
                  Xd: null,
                  subarray: function (c, y) {
                    return ((c = this.toTypedArray().subarray(c, y)), (c._ck = !0), c);
                  },
                  toTypedArray: function () {
                    return this.Xd && this.Xd.length
                      ? this.Xd
                      : ((this.Xd = new i(t.HEAPU8.buffer, u, n)), (this.Xd._ck = !0), this.Xd);
                  },
                };
              }),
              (t.Free = function (i) {
                (t._free(i.byteOffset), (i.byteOffset = D), (i.toTypedArray = null), (i.Xd = null));
              }));
            var k = D,
              O,
              K = D,
              Y,
              mt = D,
              Lt,
              st,
              N = D,
              Gr,
              Ct = D,
              Lr,
              Ge = D,
              Hr,
              Le = D,
              _e,
              Xt = D,
              Ur,
              He = D,
              jr,
              Or = D,
              Ln = Float32Array.of(0, 0, 1),
              D = 0;
            ((t.onRuntimeInitialized = function () {
              function i(n, u, c, y, g, P, S) {
                P ||
                  ((P = 4 * y.width),
                  y.colorType === t.ColorType.RGBA_F16
                    ? (P *= 2)
                    : y.colorType === t.ColorType.RGBA_F32 && (P *= 4));
                var M = P * y.height,
                  x = g ? g.byteOffset : t._malloc(M);
                if (S ? !n._readPixels(y, x, P, u, c, S) : !n._readPixels(y, x, P, u, c))
                  return (g || t._free(x), null);
                if (g) return g.toTypedArray();
                switch (y.colorType) {
                  case t.ColorType.RGBA_8888:
                  case t.ColorType.RGBA_F16:
                    n = new Uint8Array(t.HEAPU8.buffer, x, M).slice();
                    break;
                  case t.ColorType.RGBA_F32:
                    n = new Float32Array(t.HEAPU8.buffer, x, M).slice();
                    break;
                  default:
                    return null;
                }
                return (t._free(x), n);
              }
              ((Lt = t.Malloc(Float32Array, 4)),
                (mt = Lt.byteOffset),
                (Y = t.Malloc(Float32Array, 16)),
                (K = Y.byteOffset),
                (O = t.Malloc(Float32Array, 9)),
                (k = O.byteOffset),
                (Ur = t.Malloc(Float32Array, 12)),
                (He = Ur.byteOffset),
                (jr = t.Malloc(Float32Array, 12)),
                (Or = jr.byteOffset),
                (st = t.Malloc(Float32Array, 4)),
                (N = st.byteOffset),
                (Gr = t.Malloc(Float32Array, 4)),
                (Ct = Gr.byteOffset),
                (Lr = t.Malloc(Float32Array, 3)),
                (Ge = Lr.byteOffset),
                (Hr = t.Malloc(Float32Array, 3)),
                (Le = Hr.byteOffset),
                (_e = t.Malloc(Int32Array, 4)),
                (Xt = _e.byteOffset),
                (t.ColorSpace.SRGB = t.ColorSpace._MakeSRGB()),
                (t.ColorSpace.DISPLAY_P3 = t.ColorSpace._MakeDisplayP3()),
                (t.ColorSpace.ADOBE_RGB = t.ColorSpace._MakeAdobeRGB()),
                (t.GlyphRunFlags = { IsWhiteSpace: t._GlyphRunFlags_isWhiteSpace }),
                (t.Path.MakeFromCmds = function (n) {
                  var u = l(n, "HEAPF32"),
                    c = t.Path._MakeFromCmds(u, n.length);
                  return (f(u, n), c);
                }),
                (t.Path.MakeFromVerbsPointsWeights = function (n, u, c) {
                  var y = l(n, "HEAPU8"),
                    g = l(u, "HEAPF32"),
                    P = l(c, "HEAPF32"),
                    S = t.Path._MakeFromVerbsPointsWeights(
                      y,
                      n.length,
                      g,
                      u.length,
                      P,
                      (c && c.length) || 0,
                    );
                  return (f(y, n), f(g, u), f(P, c), S);
                }),
                (t.Path.prototype.addArc = function (n, u, c) {
                  return ((n = m(n)), this._addArc(n, u, c), this);
                }),
                (t.Path.prototype.addCircle = function (n, u, c, y) {
                  return (this._addCircle(n, u, c, !!y), this);
                }),
                (t.Path.prototype.addOval = function (n, u, c) {
                  return (c === void 0 && (c = 1), (n = m(n)), this._addOval(n, !!u, c), this);
                }),
                (t.Path.prototype.addPath = function () {
                  var n = Array.prototype.slice.call(arguments),
                    u = n[0],
                    c = !1;
                  if ((typeof n[n.length - 1] == "boolean" && (c = n.pop()), n.length === 1))
                    this._addPath(u, 1, 0, 0, 0, 1, 0, 0, 0, 1, c);
                  else if (n.length === 2)
                    ((n = n[1]),
                      this._addPath(
                        u,
                        n[0],
                        n[1],
                        n[2],
                        n[3],
                        n[4],
                        n[5],
                        n[6] || 0,
                        n[7] || 0,
                        n[8] || 1,
                        c,
                      ));
                  else if (n.length === 7 || n.length === 10)
                    this._addPath(
                      u,
                      n[1],
                      n[2],
                      n[3],
                      n[4],
                      n[5],
                      n[6],
                      n[7] || 0,
                      n[8] || 0,
                      n[9] || 1,
                      c,
                    );
                  else return null;
                  return this;
                }),
                (t.Path.prototype.addPoly = function (n, u) {
                  var c = l(n, "HEAPF32");
                  return (this._addPoly(c, n.length / 2, u), f(c, n), this);
                }),
                (t.Path.prototype.addRect = function (n, u) {
                  return ((n = m(n)), this._addRect(n, !!u), this);
                }),
                (t.Path.prototype.addRRect = function (n, u) {
                  return ((n = T(n)), this._addRRect(n, !!u), this);
                }),
                (t.Path.prototype.addVerbsPointsWeights = function (n, u, c) {
                  var y = l(n, "HEAPU8"),
                    g = l(u, "HEAPF32"),
                    P = l(c, "HEAPF32");
                  (this._addVerbsPointsWeights(y, n.length, g, u.length, P, (c && c.length) || 0),
                    f(y, n),
                    f(g, u),
                    f(P, c));
                }),
                (t.Path.prototype.arc = function (n, u, c, y, g, P) {
                  return (
                    (n = t.LTRBRect(n - c, u - c, n + c, u + c)),
                    (g = ((g - y) / Math.PI) * 180 - 360 * !!P),
                    (P = new t.Path()),
                    P.addArc(n, (y / Math.PI) * 180, g),
                    this.addPath(P, !0),
                    P.delete(),
                    this
                  );
                }),
                (t.Path.prototype.arcToOval = function (n, u, c, y) {
                  return ((n = m(n)), this._arcToOval(n, u, c, y), this);
                }),
                (t.Path.prototype.arcToRotated = function (n, u, c, y, g, P, S) {
                  return (this._arcToRotated(n, u, c, !!y, !!g, P, S), this);
                }),
                (t.Path.prototype.arcToTangent = function (n, u, c, y, g) {
                  return (this._arcToTangent(n, u, c, y, g), this);
                }),
                (t.Path.prototype.close = function () {
                  return (this._close(), this);
                }),
                (t.Path.prototype.conicTo = function (n, u, c, y, g) {
                  return (this._conicTo(n, u, c, y, g), this);
                }),
                (t.Path.prototype.computeTightBounds = function (n) {
                  this._computeTightBounds(N);
                  var u = st.toTypedArray();
                  return n ? (n.set(u), n) : u.slice();
                }),
                (t.Path.prototype.cubicTo = function (n, u, c, y, g, P) {
                  return (this._cubicTo(n, u, c, y, g, P), this);
                }),
                (t.Path.prototype.dash = function (n, u, c) {
                  return this._dash(n, u, c) ? this : null;
                }),
                (t.Path.prototype.getBounds = function (n) {
                  this._getBounds(N);
                  var u = st.toTypedArray();
                  return n ? (n.set(u), n) : u.slice();
                }),
                (t.Path.prototype.lineTo = function (n, u) {
                  return (this._lineTo(n, u), this);
                }),
                (t.Path.prototype.moveTo = function (n, u) {
                  return (this._moveTo(n, u), this);
                }),
                (t.Path.prototype.offset = function (n, u) {
                  return (this._transform(1, 0, n, 0, 1, u, 0, 0, 1), this);
                }),
                (t.Path.prototype.quadTo = function (n, u, c, y) {
                  return (this._quadTo(n, u, c, y), this);
                }),
                (t.Path.prototype.rArcTo = function (n, u, c, y, g, P, S) {
                  return (this._rArcTo(n, u, c, y, g, P, S), this);
                }),
                (t.Path.prototype.rConicTo = function (n, u, c, y, g) {
                  return (this._rConicTo(n, u, c, y, g), this);
                }),
                (t.Path.prototype.rCubicTo = function (n, u, c, y, g, P) {
                  return (this._rCubicTo(n, u, c, y, g, P), this);
                }),
                (t.Path.prototype.rLineTo = function (n, u) {
                  return (this._rLineTo(n, u), this);
                }),
                (t.Path.prototype.rMoveTo = function (n, u) {
                  return (this._rMoveTo(n, u), this);
                }),
                (t.Path.prototype.rQuadTo = function (n, u, c, y) {
                  return (this._rQuadTo(n, u, c, y), this);
                }),
                (t.Path.prototype.stroke = function (n) {
                  return (
                    (n = n || {}),
                    (n.width = n.width || 1),
                    (n.miter_limit = n.miter_limit || 4),
                    (n.cap = n.cap || t.StrokeCap.Butt),
                    (n.join = n.join || t.StrokeJoin.Miter),
                    (n.precision = n.precision || 1),
                    this._stroke(n) ? this : null
                  );
                }),
                (t.Path.prototype.transform = function () {
                  if (arguments.length === 1) {
                    var n = arguments[0];
                    this._transform(
                      n[0],
                      n[1],
                      n[2],
                      n[3],
                      n[4],
                      n[5],
                      n[6] || 0,
                      n[7] || 0,
                      n[8] || 1,
                    );
                  } else if (arguments.length === 6 || arguments.length === 9)
                    ((n = arguments),
                      this._transform(
                        n[0],
                        n[1],
                        n[2],
                        n[3],
                        n[4],
                        n[5],
                        n[6] || 0,
                        n[7] || 0,
                        n[8] || 1,
                      ));
                  else throw "transform expected to take 1 or 9 arguments. Got " + arguments.length;
                  return this;
                }),
                (t.Path.prototype.trim = function (n, u, c) {
                  return this._trim(n, u, !!c) ? this : null;
                }),
                (t.Image.prototype.encodeToBytes = function (n, u) {
                  var c = t.je();
                  return (
                    (n = n || t.ImageFormat.PNG),
                    (u = u || 100),
                    c ? this._encodeToBytes(n, u, c) : this._encodeToBytes(n, u)
                  );
                }),
                (t.Image.prototype.makeShaderCubic = function (n, u, c, y, g) {
                  return ((g = h(g)), this._makeShaderCubic(n, u, c, y, g));
                }),
                (t.Image.prototype.makeShaderOptions = function (n, u, c, y, g) {
                  return ((g = h(g)), this._makeShaderOptions(n, u, c, y, g));
                }),
                (t.Image.prototype.readPixels = function (n, u, c, y, g) {
                  var P = t.je();
                  return i(this, n, u, c, y, g, P);
                }),
                (t.Canvas.prototype.clear = function (n) {
                  (t.Fd(this.Ed), (n = b(n)), this._clear(n));
                }),
                (t.Canvas.prototype.clipRRect = function (n, u, c) {
                  (t.Fd(this.Ed), (n = T(n)), this._clipRRect(n, u, c));
                }),
                (t.Canvas.prototype.clipRect = function (n, u, c) {
                  (t.Fd(this.Ed), (n = m(n)), this._clipRect(n, u, c));
                }),
                (t.Canvas.prototype.concat = function (n) {
                  (t.Fd(this.Ed), (n = _(n)), this._concat(n));
                }),
                (t.Canvas.prototype.drawArc = function (n, u, c, y, g) {
                  (t.Fd(this.Ed), (n = m(n)), this._drawArc(n, u, c, y, g));
                }),
                (t.Canvas.prototype.drawAtlas = function (n, u, c, y, g, P, S) {
                  if (n && y && u && c && u.length === c.length) {
                    (t.Fd(this.Ed), g || (g = t.BlendMode.SrcOver));
                    var M = l(u, "HEAPF32"),
                      x = l(c, "HEAPF32"),
                      W = c.length / 4,
                      V = l(r(P), "HEAPU32");
                    if (S && "B" in S && "C" in S)
                      this._drawAtlasCubic(n, x, M, V, W, g, S.B, S.C, y);
                    else {
                      let d = t.FilterMode.Linear,
                        A = t.MipmapMode.None;
                      (S && ((d = S.filter), "mipmap" in S && (A = S.mipmap)),
                        this._drawAtlasOptions(n, x, M, V, W, g, d, A, y));
                    }
                    (f(M, u), f(x, c), f(V, P));
                  }
                }),
                (t.Canvas.prototype.drawCircle = function (n, u, c, y) {
                  (t.Fd(this.Ed), this._drawCircle(n, u, c, y));
                }),
                (t.Canvas.prototype.drawColor = function (n, u) {
                  (t.Fd(this.Ed),
                    (n = b(n)),
                    u !== void 0 ? this._drawColor(n, u) : this._drawColor(n));
                }),
                (t.Canvas.prototype.drawColorInt = function (n, u) {
                  (t.Fd(this.Ed), this._drawColorInt(n, u || t.BlendMode.SrcOver));
                }),
                (t.Canvas.prototype.drawColorComponents = function (n, u, c, y, g) {
                  (t.Fd(this.Ed),
                    (n = E(n, u, c, y)),
                    g !== void 0 ? this._drawColor(n, g) : this._drawColor(n));
                }),
                (t.Canvas.prototype.drawDRRect = function (n, u, c) {
                  (t.Fd(this.Ed), (n = T(n, He)), (u = T(u, Or)), this._drawDRRect(n, u, c));
                }),
                (t.Canvas.prototype.drawImage = function (n, u, c, y) {
                  (t.Fd(this.Ed), this._drawImage(n, u, c, y || null));
                }),
                (t.Canvas.prototype.drawImageCubic = function (n, u, c, y, g, P) {
                  (t.Fd(this.Ed), this._drawImageCubic(n, u, c, y, g, P || null));
                }),
                (t.Canvas.prototype.drawImageOptions = function (n, u, c, y, g, P) {
                  (t.Fd(this.Ed), this._drawImageOptions(n, u, c, y, g, P || null));
                }),
                (t.Canvas.prototype.drawImageNine = function (n, u, c, y, g) {
                  (t.Fd(this.Ed),
                    (u = l(u, "HEAP32", Xt)),
                    (c = m(c)),
                    this._drawImageNine(n, u, c, y, g || null));
                }),
                (t.Canvas.prototype.drawImageRect = function (n, u, c, y, g) {
                  (t.Fd(this.Ed), m(u, N), m(c, Ct), this._drawImageRect(n, N, Ct, y, !!g));
                }),
                (t.Canvas.prototype.drawImageRectCubic = function (n, u, c, y, g, P) {
                  (t.Fd(this.Ed),
                    m(u, N),
                    m(c, Ct),
                    this._drawImageRectCubic(n, N, Ct, y, g, P || null));
                }),
                (t.Canvas.prototype.drawImageRectOptions = function (n, u, c, y, g, P) {
                  (t.Fd(this.Ed),
                    m(u, N),
                    m(c, Ct),
                    this._drawImageRectOptions(n, N, Ct, y, g, P || null));
                }),
                (t.Canvas.prototype.drawLine = function (n, u, c, y, g) {
                  (t.Fd(this.Ed), this._drawLine(n, u, c, y, g));
                }),
                (t.Canvas.prototype.drawOval = function (n, u) {
                  (t.Fd(this.Ed), (n = m(n)), this._drawOval(n, u));
                }),
                (t.Canvas.prototype.drawPaint = function (n) {
                  (t.Fd(this.Ed), this._drawPaint(n));
                }),
                (t.Canvas.prototype.drawParagraph = function (n, u, c) {
                  (t.Fd(this.Ed), this._drawParagraph(n, u, c));
                }),
                (t.Canvas.prototype.drawPatch = function (n, u, c, y, g) {
                  if (24 > n.length) throw "Need 12 cubic points";
                  if (u && 4 > u.length) throw "Need 4 colors";
                  if (c && 8 > c.length) throw "Need 4 shader coordinates";
                  t.Fd(this.Ed);
                  let P = l(n, "HEAPF32"),
                    S = u ? l(r(u), "HEAPU32") : D,
                    M = c ? l(c, "HEAPF32") : D;
                  (y || (y = t.BlendMode.Modulate),
                    this._drawPatch(P, S, M, y, g),
                    f(M, c),
                    f(S, u),
                    f(P, n));
                }),
                (t.Canvas.prototype.drawPath = function (n, u) {
                  (t.Fd(this.Ed), this._drawPath(n, u));
                }),
                (t.Canvas.prototype.drawPicture = function (n) {
                  (t.Fd(this.Ed), this._drawPicture(n));
                }),
                (t.Canvas.prototype.drawPoints = function (n, u, c) {
                  t.Fd(this.Ed);
                  var y = l(u, "HEAPF32");
                  (this._drawPoints(n, y, u.length / 2, c), f(y, u));
                }),
                (t.Canvas.prototype.drawRRect = function (n, u) {
                  (t.Fd(this.Ed), (n = T(n)), this._drawRRect(n, u));
                }),
                (t.Canvas.prototype.drawRect = function (n, u) {
                  (t.Fd(this.Ed), (n = m(n)), this._drawRect(n, u));
                }),
                (t.Canvas.prototype.drawRect4f = function (n, u, c, y, g) {
                  (t.Fd(this.Ed), this._drawRect4f(n, u, c, y, g));
                }),
                (t.Canvas.prototype.drawShadow = function (n, u, c, y, g, P, S) {
                  t.Fd(this.Ed);
                  var M = l(g, "HEAPF32"),
                    x = l(P, "HEAPF32");
                  ((u = l(u, "HEAPF32", Ge)),
                    (c = l(c, "HEAPF32", Le)),
                    this._drawShadow(n, u, c, y, M, x, S),
                    f(M, g),
                    f(x, P));
                }),
                (t.getShadowLocalBounds = function (n, u, c, y, g, P, S) {
                  return (
                    (n = h(n)),
                    (c = l(c, "HEAPF32", Ge)),
                    (y = l(y, "HEAPF32", Le)),
                    this._getShadowLocalBounds(n, u, c, y, g, P, N)
                      ? ((u = st.toTypedArray()), S ? (S.set(u), S) : u.slice())
                      : null
                  );
                }),
                (t.Canvas.prototype.drawTextBlob = function (n, u, c, y) {
                  (t.Fd(this.Ed), this._drawTextBlob(n, u, c, y));
                }),
                (t.Canvas.prototype.drawVertices = function (n, u, c) {
                  (t.Fd(this.Ed), this._drawVertices(n, u, c));
                }),
                (t.Canvas.prototype.getDeviceClipBounds = function (n) {
                  this._getDeviceClipBounds(Xt);
                  var u = _e.toTypedArray();
                  return (n ? n.set(u) : (n = u.slice()), n);
                }),
                (t.Canvas.prototype.getLocalToDevice = function () {
                  this._getLocalToDevice(K);
                  for (var n = K, u = Array(16), c = 0; 16 > c; c++) u[c] = t.HEAPF32[n / 4 + c];
                  return u;
                }),
                (t.Canvas.prototype.getTotalMatrix = function () {
                  this._getTotalMatrix(k);
                  for (var n = Array(9), u = 0; 9 > u; u++) n[u] = t.HEAPF32[k / 4 + u];
                  return n;
                }),
                (t.Canvas.prototype.makeSurface = function (n) {
                  return ((n = this._makeSurface(n)), (n.Ed = this.Ed), n);
                }),
                (t.Canvas.prototype.readPixels = function (n, u, c, y, g) {
                  return (t.Fd(this.Ed), i(this, n, u, c, y, g));
                }),
                (t.Canvas.prototype.saveLayer = function (n, u, c, y) {
                  return ((u = m(u)), this._saveLayer(n || null, u, c || null, y || 0));
                }),
                (t.Canvas.prototype.writePixels = function (n, u, c, y, g, P, S, M) {
                  if (n.byteLength % (u * c))
                    throw "pixels length must be a multiple of the srcWidth * srcHeight";
                  t.Fd(this.Ed);
                  var x = n.byteLength / (u * c);
                  ((P = P || t.AlphaType.Unpremul),
                    (S = S || t.ColorType.RGBA_8888),
                    (M = M || t.ColorSpace.SRGB));
                  var W = x * u;
                  return (
                    (x = l(n, "HEAPU8")),
                    (u = this._writePixels(
                      { width: u, height: c, colorType: S, alphaType: P, colorSpace: M },
                      x,
                      W,
                      y,
                      g,
                    )),
                    f(x, n),
                    u
                  );
                }),
                (t.ColorFilter.MakeBlend = function (n, u, c) {
                  return (
                    (n = b(n)),
                    (c = c || t.ColorSpace.SRGB),
                    t.ColorFilter._MakeBlend(n, u, c)
                  );
                }),
                (t.ColorFilter.MakeMatrix = function (n) {
                  if (!n || n.length !== 20) throw "invalid color matrix";
                  var u = l(n, "HEAPF32"),
                    c = t.ColorFilter._makeMatrix(u);
                  return (f(u, n), c);
                }),
                (t.ContourMeasure.prototype.getPosTan = function (n, u) {
                  return (
                    this._getPosTan(n, N),
                    (n = st.toTypedArray()),
                    u ? (u.set(n), u) : n.slice()
                  );
                }),
                (t.ImageFilter.prototype.getOutputBounds = function (n, u, c) {
                  return (
                    (n = m(n, N)),
                    (u = h(u)),
                    this._getOutputBounds(n, u, Xt),
                    (u = _e.toTypedArray()),
                    c ? (c.set(u), c) : u.slice()
                  );
                }),
                (t.ImageFilter.MakeDropShadow = function (n, u, c, y, g, P) {
                  return ((g = b(g, mt)), t.ImageFilter._MakeDropShadow(n, u, c, y, g, P));
                }),
                (t.ImageFilter.MakeDropShadowOnly = function (n, u, c, y, g, P) {
                  return ((g = b(g, mt)), t.ImageFilter._MakeDropShadowOnly(n, u, c, y, g, P));
                }),
                (t.ImageFilter.MakeImage = function (n, u, c, y) {
                  if (((c = m(c, N)), (y = m(y, Ct)), "B" in u && "C" in u))
                    return t.ImageFilter._MakeImageCubic(n, u.B, u.C, c, y);
                  let g = u.filter,
                    P = t.MipmapMode.None;
                  return (
                    "mipmap" in u && (P = u.mipmap),
                    t.ImageFilter._MakeImageOptions(n, g, P, c, y)
                  );
                }),
                (t.ImageFilter.MakeMatrixTransform = function (n, u, c) {
                  if (((n = h(n)), "B" in u && "C" in u))
                    return t.ImageFilter._MakeMatrixTransformCubic(n, u.B, u.C, c);
                  let y = u.filter,
                    g = t.MipmapMode.None;
                  return (
                    "mipmap" in u && (g = u.mipmap),
                    t.ImageFilter._MakeMatrixTransformOptions(n, y, g, c)
                  );
                }),
                (t.Paint.prototype.getColor = function () {
                  return (this._getColor(mt), w(mt));
                }),
                (t.Paint.prototype.setColor = function (n, u) {
                  ((u = u || null), (n = b(n)), this._setColor(n, u));
                }),
                (t.Paint.prototype.setColorComponents = function (n, u, c, y, g) {
                  ((g = g || null), (n = E(n, u, c, y)), this._setColor(n, g));
                }),
                (t.Path.prototype.getPoint = function (n, u) {
                  return (
                    this._getPoint(n, N),
                    (n = st.toTypedArray()),
                    u ? ((u[0] = n[0]), (u[1] = n[1]), u) : n.slice(0, 2)
                  );
                }),
                (t.Picture.prototype.makeShader = function (n, u, c, y, g) {
                  return ((y = h(y)), (g = m(g)), this._makeShader(n, u, c, y, g));
                }),
                (t.Picture.prototype.cullRect = function (n) {
                  this._cullRect(N);
                  var u = st.toTypedArray();
                  return n ? (n.set(u), n) : u.slice();
                }),
                (t.PictureRecorder.prototype.beginRecording = function (n, u) {
                  return ((n = m(n)), this._beginRecording(n, !!u));
                }),
                (t.Surface.prototype.getCanvas = function () {
                  var n = this._getCanvas();
                  return ((n.Ed = this.Ed), n);
                }),
                (t.Surface.prototype.makeImageSnapshot = function (n) {
                  return (t.Fd(this.Ed), (n = l(n, "HEAP32", Xt)), this._makeImageSnapshot(n));
                }),
                (t.Surface.prototype.makeSurface = function (n) {
                  return (t.Fd(this.Ed), (n = this._makeSurface(n)), (n.Ed = this.Ed), n);
                }),
                (t.Surface.prototype.Oe = function (n, u) {
                  return (
                    this.ce || (this.ce = this.getCanvas()),
                    requestAnimationFrame(
                      function () {
                        (t.Fd(this.Ed), n(this.ce), this.flush(u));
                      }.bind(this),
                    )
                  );
                }),
                t.Surface.prototype.requestAnimationFrame ||
                  (t.Surface.prototype.requestAnimationFrame = t.Surface.prototype.Oe),
                (t.Surface.prototype.Le = function (n, u) {
                  (this.ce || (this.ce = this.getCanvas()),
                    requestAnimationFrame(
                      function () {
                        (t.Fd(this.Ed), n(this.ce), this.flush(u), this.dispose());
                      }.bind(this),
                    ));
                }),
                t.Surface.prototype.drawOnce ||
                  (t.Surface.prototype.drawOnce = t.Surface.prototype.Le),
                (t.PathEffect.MakeDash = function (n, u) {
                  if ((u || (u = 0), !n.length || n.length % 2 === 1))
                    throw "Intervals array must have even length";
                  var c = l(n, "HEAPF32");
                  return ((u = t.PathEffect._MakeDash(c, n.length, u)), f(c, n), u);
                }),
                (t.PathEffect.MakeLine2D = function (n, u) {
                  return ((u = h(u)), t.PathEffect._MakeLine2D(n, u));
                }),
                (t.PathEffect.MakePath2D = function (n, u) {
                  return ((n = h(n)), t.PathEffect._MakePath2D(n, u));
                }),
                (t.Shader.MakeColor = function (n, u) {
                  return ((u = u || null), (n = b(n)), t.Shader._MakeColor(n, u));
                }),
                (t.Shader.Blend = t.Shader.MakeBlend),
                (t.Shader.Color = t.Shader.MakeColor),
                (t.Shader.MakeLinearGradient = function (n, u, c, y, g, P, S, M) {
                  M = M || null;
                  var x = s(c),
                    W = l(y, "HEAPF32");
                  ((S = S || 0), (P = h(P)));
                  var V = st.toTypedArray();
                  return (
                    V.set(n),
                    V.set(u, 2),
                    (n = t.Shader._MakeLinearGradient(
                      N,
                      x.Nd,
                      x.colorType,
                      W,
                      x.count,
                      g,
                      S,
                      P,
                      M,
                    )),
                    f(x.Nd, c),
                    y && f(W, y),
                    n
                  );
                }),
                (t.Shader.MakeRadialGradient = function (n, u, c, y, g, P, S, M) {
                  M = M || null;
                  var x = s(c),
                    W = l(y, "HEAPF32");
                  return (
                    (S = S || 0),
                    (P = h(P)),
                    (n = t.Shader._MakeRadialGradient(
                      n[0],
                      n[1],
                      u,
                      x.Nd,
                      x.colorType,
                      W,
                      x.count,
                      g,
                      S,
                      P,
                      M,
                    )),
                    f(x.Nd, c),
                    y && f(W, y),
                    n
                  );
                }),
                (t.Shader.MakeSweepGradient = function (n, u, c, y, g, P, S, M, x, W) {
                  W = W || null;
                  var V = s(c),
                    d = l(y, "HEAPF32");
                  return (
                    (S = S || 0),
                    (M = M || 0),
                    (x = x || 360),
                    (P = h(P)),
                    (n = t.Shader._MakeSweepGradient(
                      n,
                      u,
                      V.Nd,
                      V.colorType,
                      d,
                      V.count,
                      g,
                      M,
                      x,
                      S,
                      P,
                      W,
                    )),
                    f(V.Nd, c),
                    y && f(d, y),
                    n
                  );
                }),
                (t.Shader.MakeTwoPointConicalGradient = function (n, u, c, y, g, P, S, M, x, W) {
                  W = W || null;
                  var V = s(g),
                    d = l(P, "HEAPF32");
                  ((x = x || 0), (M = h(M)));
                  var A = st.toTypedArray();
                  return (
                    A.set(n),
                    A.set(c, 2),
                    (n = t.Shader._MakeTwoPointConicalGradient(
                      N,
                      u,
                      y,
                      V.Nd,
                      V.colorType,
                      d,
                      V.count,
                      S,
                      x,
                      M,
                      W,
                    )),
                    f(V.Nd, g),
                    P && f(d, P),
                    n
                  );
                }),
                (t.Vertices.prototype.bounds = function (n) {
                  this._bounds(N);
                  var u = st.toTypedArray();
                  return n ? (n.set(u), n) : u.slice();
                }),
                t.Id &&
                  t.Id.forEach(function (n) {
                    n();
                  }));
            }),
              (t.computeTonalColors = function (i) {
                var n = l(i.ambient, "HEAPF32"),
                  u = l(i.spot, "HEAPF32");
                this._computeTonalColors(n, u);
                var c = { ambient: w(n), spot: w(u) };
                return (f(n, i.ambient), f(u, i.spot), c);
              }),
              (t.LTRBRect = function (i, n, u, c) {
                return Float32Array.of(i, n, u, c);
              }),
              (t.XYWHRect = function (i, n, u, c) {
                return Float32Array.of(i, n, i + u, n + c);
              }),
              (t.LTRBiRect = function (i, n, u, c) {
                return Int32Array.of(i, n, u, c);
              }),
              (t.XYWHiRect = function (i, n, u, c) {
                return Int32Array.of(i, n, i + u, n + c);
              }),
              (t.RRectXY = function (i, n, u) {
                return Float32Array.of(i[0], i[1], i[2], i[3], n, u, n, u, n, u, n, u);
              }),
              (t.MakeAnimatedImageFromEncoded = function (i) {
                i = new Uint8Array(i);
                var n = t._malloc(i.byteLength);
                return (
                  t.HEAPU8.set(i, n),
                  (i = t._decodeAnimatedImage(n, i.byteLength)) ? i : null
                );
              }),
              (t.MakeImageFromEncoded = function (i) {
                i = new Uint8Array(i);
                var n = t._malloc(i.byteLength);
                return (t.HEAPU8.set(i, n), (i = t._decodeImage(n, i.byteLength)) ? i : null);
              }));
            var qt = null;
            ((t.MakeImageFromCanvasImageSource = function (i) {
              var n = i.width,
                u = i.height;
              (qt || (qt = document.createElement("canvas")), (qt.width = n), (qt.height = u));
              var c = qt.getContext("2d", { willReadFrequently: !0 });
              return (
                c.drawImage(i, 0, 0),
                (i = c.getImageData(0, 0, n, u)),
                t.MakeImage(
                  {
                    width: n,
                    height: u,
                    alphaType: t.AlphaType.Unpremul,
                    colorType: t.ColorType.RGBA_8888,
                    colorSpace: t.ColorSpace.SRGB,
                  },
                  i.data,
                  4 * n,
                )
              );
            }),
              (t.MakeImage = function (i, n, u) {
                var c = t._malloc(n.length);
                return (t.HEAPU8.set(n, c), t._MakeImage(i, c, n.length, u));
              }),
              (t.MakeVertices = function (i, n, u, c, y, g) {
                var P = (y && y.length) || 0,
                  S = 0;
                return (
                  u && u.length && (S |= 1),
                  c && c.length && (S |= 2),
                  g === void 0 || g || (S |= 4),
                  (i = new t._VerticesBuilder(i, n.length / 2, P, S)),
                  l(n, "HEAPF32", i.positions()),
                  i.texCoords() && l(u, "HEAPF32", i.texCoords()),
                  i.colors() && l(r(c), "HEAPU32", i.colors()),
                  i.indices() && l(y, "HEAPU16", i.indices()),
                  i.detach()
                );
              }),
              (function (i) {
                ((i.Id = i.Id || []),
                  i.Id.push(function () {
                    function n(d) {
                      return (
                        d && (d.dir = d.dir === 0 ? i.TextDirection.RTL : i.TextDirection.LTR),
                        d
                      );
                    }
                    function u(d) {
                      if (!d || !d.length) return [];
                      for (var A = [], H = 0; H < d.length; H += 5) {
                        var z = i.LTRBRect(d[H], d[H + 1], d[H + 2], d[H + 3]),
                          _t = i.TextDirection.LTR;
                        (d[H + 4] === 0 && (_t = i.TextDirection.RTL),
                          A.push({ rect: z, dir: _t }));
                      }
                      return (i._free(d.byteOffset), A);
                    }
                    function c(d) {
                      return (
                        (d = d || {}),
                        d.weight === void 0 && (d.weight = i.FontWeight.Normal),
                        (d.width = d.width || i.FontWidth.Normal),
                        (d.slant = d.slant || i.FontSlant.Upright),
                        d
                      );
                    }
                    function y(d) {
                      if (!d || !d.length) return D;
                      for (var A = [], H = 0; H < d.length; H++) {
                        var z = g(d[H]);
                        A.push(z);
                      }
                      return l(A, "HEAPU32");
                    }
                    function g(d) {
                      if (M[d]) return M[d];
                      var A = ut(d) + 1,
                        H = i._malloc(A);
                      return (it(d, I, H, A), (M[d] = H));
                    }
                    function P(d) {
                      if (
                        ((d._colorPtr = b(d.color)),
                        (d._foregroundColorPtr = D),
                        (d._backgroundColorPtr = D),
                        (d._decorationColorPtr = D),
                        d.foregroundColor && (d._foregroundColorPtr = b(d.foregroundColor, x)),
                        d.backgroundColor && (d._backgroundColorPtr = b(d.backgroundColor, W)),
                        d.decorationColor && (d._decorationColorPtr = b(d.decorationColor, V)),
                        Array.isArray(d.fontFamilies) && d.fontFamilies.length
                          ? ((d._fontFamiliesPtr = y(d.fontFamilies)),
                            (d._fontFamiliesLen = d.fontFamilies.length))
                          : ((d._fontFamiliesPtr = D), (d._fontFamiliesLen = 0)),
                        d.locale)
                      ) {
                        var A = d.locale;
                        ((d._localePtr = g(A)), (d._localeLen = ut(A) + 1));
                      } else ((d._localePtr = D), (d._localeLen = 0));
                      if (Array.isArray(d.shadows) && d.shadows.length) {
                        A = d.shadows;
                        var H = A.map(function (ct) {
                            return ct.color || i.BLACK;
                          }),
                          z = A.map(function (ct) {
                            return ct.blurRadius || 0;
                          });
                        d._shadowLen = A.length;
                        for (
                          var _t = i._malloc(8 * A.length), Ue = _t / 4, je = 0;
                          je < A.length;
                          je++
                        ) {
                          var Wr = A[je].offset || [0, 0];
                          ((i.HEAPF32[Ue] = Wr[0]), (i.HEAPF32[Ue + 1] = Wr[1]), (Ue += 2));
                        }
                        ((d._shadowColorsPtr = s(H).Nd),
                          (d._shadowOffsetsPtr = _t),
                          (d._shadowBlurRadiiPtr = l(z, "HEAPF32")));
                      } else
                        ((d._shadowLen = 0),
                          (d._shadowColorsPtr = D),
                          (d._shadowOffsetsPtr = D),
                          (d._shadowBlurRadiiPtr = D));
                      (Array.isArray(d.fontFeatures) && d.fontFeatures.length
                        ? ((A = d.fontFeatures),
                          (H = A.map(function (ct) {
                            return ct.name;
                          })),
                          (z = A.map(function (ct) {
                            return ct.value;
                          })),
                          (d._fontFeatureLen = A.length),
                          (d._fontFeatureNamesPtr = y(H)),
                          (d._fontFeatureValuesPtr = l(z, "HEAPU32")))
                        : ((d._fontFeatureLen = 0),
                          (d._fontFeatureNamesPtr = D),
                          (d._fontFeatureValuesPtr = D)),
                        Array.isArray(d.fontVariations) && d.fontVariations.length
                          ? ((A = d.fontVariations),
                            (H = A.map(function (ct) {
                              return ct.axis;
                            })),
                            (z = A.map(function (ct) {
                              return ct.value;
                            })),
                            (d._fontVariationLen = A.length),
                            (d._fontVariationAxesPtr = y(H)),
                            (d._fontVariationValuesPtr = l(z, "HEAPF32")))
                          : ((d._fontVariationLen = 0),
                            (d._fontVariationAxesPtr = D),
                            (d._fontVariationValuesPtr = D)));
                    }
                    function S(d) {
                      (i._free(d._fontFamiliesPtr),
                        i._free(d._shadowColorsPtr),
                        i._free(d._shadowOffsetsPtr),
                        i._free(d._shadowBlurRadiiPtr),
                        i._free(d._fontFeatureNamesPtr),
                        i._free(d._fontFeatureValuesPtr),
                        i._free(d._fontVariationAxesPtr),
                        i._free(d._fontVariationValuesPtr));
                    }
                    ((i.Paragraph.prototype.getRectsForRange = function (d, A, H, z) {
                      return ((d = this._getRectsForRange(d, A, H, z)), u(d));
                    }),
                      (i.Paragraph.prototype.getRectsForPlaceholders = function () {
                        var d = this._getRectsForPlaceholders();
                        return u(d);
                      }),
                      (i.Paragraph.prototype.getGlyphInfoAt = function (d) {
                        return n(this._getGlyphInfoAt(d));
                      }),
                      (i.Paragraph.prototype.getClosestGlyphInfoAtCoordinate = function (d, A) {
                        return n(this._getClosestGlyphInfoAtCoordinate(d, A));
                      }),
                      (i.TypefaceFontProvider.prototype.registerFont = function (d, A) {
                        if (((d = i.Typeface.MakeFreeTypeFaceFromData(d)), !d)) return null;
                        ((A = g(A)), this._registerFont(d, A));
                      }),
                      (i.ParagraphStyle = function (d) {
                        if (((d.disableHinting = d.disableHinting || !1), d.ellipsis)) {
                          var A = d.ellipsis;
                          ((d._ellipsisPtr = g(A)), (d._ellipsisLen = ut(A) + 1));
                        } else ((d._ellipsisPtr = D), (d._ellipsisLen = 0));
                        return (
                          d.heightMultiplier == null && (d.heightMultiplier = -1),
                          (d.maxLines = d.maxLines || 0),
                          (d.replaceTabCharacters = d.replaceTabCharacters || !1),
                          (A = (A = d.strutStyle) || {}),
                          (A.strutEnabled = A.strutEnabled || !1),
                          A.strutEnabled && Array.isArray(A.fontFamilies) && A.fontFamilies.length
                            ? ((A._fontFamiliesPtr = y(A.fontFamilies)),
                              (A._fontFamiliesLen = A.fontFamilies.length))
                            : ((A._fontFamiliesPtr = D), (A._fontFamiliesLen = 0)),
                          (A.fontStyle = c(A.fontStyle)),
                          A.fontSize == null && (A.fontSize = -1),
                          A.heightMultiplier == null && (A.heightMultiplier = -1),
                          (A.halfLeading = A.halfLeading || !1),
                          (A.leading = A.leading || 0),
                          (A.forceStrutHeight = A.forceStrutHeight || !1),
                          (d.strutStyle = A),
                          (d.textAlign = d.textAlign || i.TextAlign.Start),
                          (d.textDirection = d.textDirection || i.TextDirection.LTR),
                          (d.textHeightBehavior = d.textHeightBehavior || i.TextHeightBehavior.All),
                          (d.textStyle = i.TextStyle(d.textStyle)),
                          (d.applyRoundingHack = d.applyRoundingHack !== !1),
                          d
                        );
                      }),
                      (i.TextStyle = function (d) {
                        return (
                          d.color || (d.color = i.BLACK),
                          (d.decoration = d.decoration || 0),
                          (d.decorationThickness = d.decorationThickness || 0),
                          (d.decorationStyle = d.decorationStyle || i.DecorationStyle.Solid),
                          (d.textBaseline = d.textBaseline || i.TextBaseline.Alphabetic),
                          d.fontSize == null && (d.fontSize = -1),
                          (d.letterSpacing = d.letterSpacing || 0),
                          (d.wordSpacing = d.wordSpacing || 0),
                          d.heightMultiplier == null && (d.heightMultiplier = -1),
                          (d.halfLeading = d.halfLeading || !1),
                          (d.fontStyle = c(d.fontStyle)),
                          d
                        );
                      }));
                    var M = {},
                      x = i._malloc(16),
                      W = i._malloc(16),
                      V = i._malloc(16);
                    ((i.ParagraphBuilder.Make = function (d, A) {
                      return (
                        P(d.textStyle),
                        (A = i.ParagraphBuilder._Make(d, A)),
                        S(d.textStyle),
                        A
                      );
                    }),
                      (i.ParagraphBuilder.MakeFromFontProvider = function (d, A) {
                        return (
                          P(d.textStyle),
                          (A = i.ParagraphBuilder._MakeFromFontProvider(d, A)),
                          S(d.textStyle),
                          A
                        );
                      }),
                      (i.ParagraphBuilder.MakeFromFontCollection = function (d, A) {
                        return (
                          P(d.textStyle),
                          (A = i.ParagraphBuilder._MakeFromFontCollection(d, A)),
                          S(d.textStyle),
                          A
                        );
                      }),
                      (i.ParagraphBuilder.ShapeText = function (d, A, H) {
                        let z = 0;
                        for (let _t of A) z += _t.length;
                        if (z !== d.length)
                          throw "Accumulated block lengths must equal text.length";
                        return i.ParagraphBuilder._ShapeText(d, A, H);
                      }),
                      (i.ParagraphBuilder.prototype.pushStyle = function (d) {
                        (P(d), this._pushStyle(d), S(d));
                      }),
                      (i.ParagraphBuilder.prototype.pushPaintStyle = function (d, A, H) {
                        (P(d), this._pushPaintStyle(d, A, H), S(d));
                      }),
                      (i.ParagraphBuilder.prototype.addPlaceholder = function (d, A, H, z, _t) {
                        ((H = H || i.PlaceholderAlignment.Baseline),
                          (z = z || i.TextBaseline.Alphabetic),
                          this._addPlaceholder(d || 0, A || 0, H, z, _t || 0));
                      }),
                      (i.ParagraphBuilder.prototype.setWordsUtf8 = function (d) {
                        var A = l(d, "HEAPU32");
                        (this._setWordsUtf8(A, (d && d.length) || 0), f(A, d));
                      }),
                      (i.ParagraphBuilder.prototype.setWordsUtf16 = function (d) {
                        var A = l(d, "HEAPU32");
                        (this._setWordsUtf16(A, (d && d.length) || 0), f(A, d));
                      }),
                      (i.ParagraphBuilder.prototype.setGraphemeBreaksUtf8 = function (d) {
                        var A = l(d, "HEAPU32");
                        (this._setGraphemeBreaksUtf8(A, (d && d.length) || 0), f(A, d));
                      }),
                      (i.ParagraphBuilder.prototype.setGraphemeBreaksUtf16 = function (d) {
                        var A = l(d, "HEAPU32");
                        (this._setGraphemeBreaksUtf16(A, (d && d.length) || 0), f(A, d));
                      }),
                      (i.ParagraphBuilder.prototype.setLineBreaksUtf8 = function (d) {
                        var A = l(d, "HEAPU32");
                        (this._setLineBreaksUtf8(A, (d && d.length) || 0), f(A, d));
                      }),
                      (i.ParagraphBuilder.prototype.setLineBreaksUtf16 = function (d) {
                        var A = l(d, "HEAPU32");
                        (this._setLineBreaksUtf16(A, (d && d.length) || 0), f(A, d));
                      }));
                  }));
              })(v),
              (t.Id = t.Id || []),
              t.Id.push(function () {
                ((t.Path.prototype.op = function (i, n) {
                  return this._op(i, n) ? this : null;
                }),
                  (t.Path.prototype.simplify = function () {
                    return this._simplify() ? this : null;
                  }));
              }),
              (t.Id = t.Id || []),
              t.Id.push(function () {
                ((t.Canvas.prototype.drawText = function (i, n, u, c, y) {
                  var g = ut(i),
                    P = t._malloc(g + 1);
                  (it(i, I, P, g + 1), this._drawSimpleText(P, g, n, u, y, c), t._free(P));
                }),
                  (t.Canvas.prototype.drawGlyphs = function (i, n, u, c, y, g) {
                    if (!(2 * i.length <= n.length))
                      throw "Not enough positions for the array of gyphs";
                    t.Fd(this.Ed);
                    let P = l(i, "HEAPU16"),
                      S = l(n, "HEAPF32");
                    (this._drawGlyphs(i.length, P, S, u, c, y, g), f(S, n), f(P, i));
                  }),
                  (t.Font.prototype.getGlyphBounds = function (i, n, u) {
                    var c = l(i, "HEAPU16"),
                      y = t._malloc(16 * i.length);
                    return (
                      this._getGlyphWidthBounds(c, i.length, D, y, n || null),
                      (n = new Float32Array(t.HEAPU8.buffer, y, 4 * i.length)),
                      f(c, i),
                      u ? (u.set(n), t._free(y), u) : ((i = Float32Array.from(n)), t._free(y), i)
                    );
                  }),
                  (t.Font.prototype.getGlyphIDs = function (i, n, u) {
                    n || (n = i.length);
                    var c = ut(i) + 1,
                      y = t._malloc(c);
                    return (
                      it(i, I, y, c),
                      (i = t._malloc(2 * n)),
                      (n = this._getGlyphIDs(y, c - 1, n, i)),
                      t._free(y),
                      0 > n
                        ? (t._free(i), null)
                        : ((y = new Uint16Array(t.HEAPU8.buffer, i, n)),
                          u
                            ? (u.set(y), t._free(i), u)
                            : ((u = Uint16Array.from(y)), t._free(i), u))
                    );
                  }),
                  (t.Font.prototype.getGlyphIntercepts = function (i, n, u, c) {
                    var y = l(i, "HEAPU16"),
                      g = l(n, "HEAPF32");
                    return this._getGlyphIntercepts(
                      y,
                      i.length,
                      !(i && i._ck),
                      g,
                      n.length,
                      !(n && n._ck),
                      u,
                      c,
                    );
                  }),
                  (t.Font.prototype.getGlyphWidths = function (i, n, u) {
                    var c = l(i, "HEAPU16"),
                      y = t._malloc(4 * i.length);
                    return (
                      this._getGlyphWidthBounds(c, i.length, y, D, n || null),
                      (n = new Float32Array(t.HEAPU8.buffer, y, i.length)),
                      f(c, i),
                      u ? (u.set(n), t._free(y), u) : ((i = Float32Array.from(n)), t._free(y), i)
                    );
                  }),
                  (t.FontMgr.FromData = function () {
                    if (!arguments.length) return null;
                    var i = arguments;
                    if ((i.length === 1 && Array.isArray(i[0]) && (i = arguments[0]), !i.length))
                      return null;
                    for (var n = [], u = [], c = 0; c < i.length; c++) {
                      var y = new Uint8Array(i[c]),
                        g = l(y, "HEAPU8");
                      (n.push(g), u.push(y.byteLength));
                    }
                    return (
                      (n = l(n, "HEAPU32")),
                      (u = l(u, "HEAPU32")),
                      (i = t.FontMgr._fromData(n, u, i.length)),
                      t._free(n),
                      t._free(u),
                      i
                    );
                  }),
                  (t.Typeface.MakeFreeTypeFaceFromData = function (i) {
                    i = new Uint8Array(i);
                    var n = l(i, "HEAPU8");
                    return (i = t.Typeface._MakeFreeTypeFaceFromData(n, i.byteLength)) ? i : null;
                  }),
                  (t.Typeface.prototype.getGlyphIDs = function (i, n, u) {
                    n || (n = i.length);
                    var c = ut(i) + 1,
                      y = t._malloc(c);
                    return (
                      it(i, I, y, c),
                      (i = t._malloc(2 * n)),
                      (n = this._getGlyphIDs(y, c - 1, n, i)),
                      t._free(y),
                      0 > n
                        ? (t._free(i), null)
                        : ((y = new Uint16Array(t.HEAPU8.buffer, i, n)),
                          u
                            ? (u.set(y), t._free(i), u)
                            : ((u = Uint16Array.from(y)), t._free(i), u))
                    );
                  }),
                  (t.TextBlob.MakeOnPath = function (i, n, u, c) {
                    if (i && i.length && n && n.countPoints()) {
                      if (n.countPoints() === 1) return this.MakeFromText(i, u);
                      c || (c = 0);
                      var y = u.getGlyphIDs(i);
                      y = u.getGlyphWidths(y);
                      var g = [];
                      n = new t.ContourMeasureIter(n, !1, 1);
                      for (
                        var P = n.next(), S = new Float32Array(4), M = 0;
                        M < i.length && P;
                        M++
                      ) {
                        var x = y[M];
                        if (((c += x / 2), c > P.length())) {
                          if ((P.delete(), (P = n.next()), !P)) {
                            i = i.substring(0, M);
                            break;
                          }
                          c = x / 2;
                        }
                        P.getPosTan(c, S);
                        var W = S[2],
                          V = S[3];
                        (g.push(W, V, S[0] - (x / 2) * W, S[1] - (x / 2) * V), (c += x / 2));
                      }
                      return ((i = this.MakeFromRSXform(i, g, u)), P && P.delete(), n.delete(), i);
                    }
                  }),
                  (t.TextBlob.MakeFromRSXform = function (i, n, u) {
                    var c = ut(i) + 1,
                      y = t._malloc(c);
                    return (
                      it(i, I, y, c),
                      (i = l(n, "HEAPF32")),
                      (u = t.TextBlob._MakeFromRSXform(y, c - 1, i, u)),
                      t._free(y),
                      u || null
                    );
                  }),
                  (t.TextBlob.MakeFromRSXformGlyphs = function (i, n, u) {
                    var c = l(i, "HEAPU16");
                    return (
                      (n = l(n, "HEAPF32")),
                      (u = t.TextBlob._MakeFromRSXformGlyphs(c, 2 * i.length, n, u)),
                      f(c, i),
                      u || null
                    );
                  }),
                  (t.TextBlob.MakeFromGlyphs = function (i, n) {
                    var u = l(i, "HEAPU16");
                    return (
                      (n = t.TextBlob._MakeFromGlyphs(u, 2 * i.length, n)),
                      f(u, i),
                      n || null
                    );
                  }),
                  (t.TextBlob.MakeFromText = function (i, n) {
                    var u = ut(i) + 1,
                      c = t._malloc(u);
                    return (
                      it(i, I, c, u),
                      (i = t.TextBlob._MakeFromText(c, u - 1, n)),
                      t._free(c),
                      i || null
                    );
                  }),
                  (t.MallocGlyphIDs = function (i) {
                    return t.Malloc(Uint16Array, i);
                  }));
              }),
              (t.Id = t.Id || []),
              t.Id.push(function () {
                t.MakePicture = function (i) {
                  i = new Uint8Array(i);
                  var n = t._malloc(i.byteLength);
                  return (t.HEAPU8.set(i, n), (i = t._MakePicture(n, i.byteLength)) ? i : null);
                };
              }),
              (t.Id = t.Id || []),
              t.Id.push(function () {
                ((t.RuntimeEffect.Make = function (i, n) {
                  return t.RuntimeEffect._Make(i, {
                    onError:
                      n ||
                      function (u) {
                        console.log("RuntimeEffect error", u);
                      },
                  });
                }),
                  (t.RuntimeEffect.MakeForBlender = function (i, n) {
                    return t.RuntimeEffect._MakeForBlender(i, {
                      onError:
                        n ||
                        function (u) {
                          console.log("RuntimeEffect error", u);
                        },
                    });
                  }),
                  (t.RuntimeEffect.prototype.makeShader = function (i, n) {
                    var u = !i._ck,
                      c = l(i, "HEAPF32");
                    return ((n = h(n)), this._makeShader(c, 4 * i.length, u, n));
                  }),
                  (t.RuntimeEffect.prototype.makeShaderWithChildren = function (i, n, u) {
                    var c = !i._ck,
                      y = l(i, "HEAPF32");
                    u = h(u);
                    for (var g = [], P = 0; P < n.length; P++) g.push(n[P].Dd.Hd);
                    return (
                      (n = l(g, "HEAPU32")),
                      this._makeShaderWithChildren(y, 4 * i.length, c, n, g.length, u)
                    );
                  }),
                  (t.RuntimeEffect.prototype.makeBlender = function (i) {
                    var n = !i._ck,
                      u = l(i, "HEAPF32");
                    return this._makeBlender(u, 4 * i.length, n);
                  }));
              }));
          })(v));
        var Ne = Object.assign({}, v),
          Ye = "./this.program",
          gt = "";
        (typeof document < "u" && document.currentScript && (gt = document.currentScript.src),
          We && (gt = We),
          gt.indexOf("blob:") !== 0
            ? (gt = gt.substr(0, gt.replace(/[?#].*/, "").lastIndexOf("/") + 1))
            : (gt = ""));
        var $r = v.print || console.log.bind(console),
          bt = v.printErr || console.error.bind(console);
        (Object.assign(v, Ne), (Ne = null), v.thisProgram && (Ye = v.thisProgram));
        var Ht;
        (v.wasmBinary && (Ht = v.wasmBinary),
          v.noExitRuntime,
          typeof WebAssembly != "object" && Pe("no native wasm support detected"));
        var Zt,
          B,
          ze = !1,
          dt,
          I,
          Pt,
          Mt,
          C,
          U,
          F,
          Je;
        function Ke() {
          var t = Zt.buffer;
          ((v.HEAP8 = dt = new Int8Array(t)),
            (v.HEAP16 = Pt = new Int16Array(t)),
            (v.HEAP32 = C = new Int32Array(t)),
            (v.HEAPU8 = I = new Uint8Array(t)),
            (v.HEAPU16 = Mt = new Uint16Array(t)),
            (v.HEAPU32 = U = new Uint32Array(t)),
            (v.HEAPF32 = F = new Float32Array(t)),
            (v.HEAPF64 = Je = new Float64Array(t)));
        }
        var X,
          Xe = [],
          qe = [],
          Qe = [];
        function Vr() {
          var t = v.preRun.shift();
          Xe.unshift(t);
        }
        var St = 0,
          Ut = null;
        function Pe(t) {
          throw (
            v.onAbort && v.onAbort(t),
            (t = "Aborted(" + t + ")"),
            bt(t),
            (ze = !0),
            (t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info.")),
            Qt(t),
            t
          );
        }
        function Ze(t) {
          return t.startsWith("data:application/octet-stream;base64,");
        }
        var Rt;
        if (((Rt = "canvaskit.wasm"), !Ze(Rt))) {
          var tr = Rt;
          Rt = v.locateFile ? v.locateFile(tr, gt) : gt + tr;
        }
        function er(t) {
          if (t == Rt && Ht) return new Uint8Array(Ht);
          throw "both async and sync fetching of the wasm failed";
        }
        function Nr(t) {
          return Ht || typeof fetch != "function"
            ? Promise.resolve().then(() => er(t))
            : fetch(t, { credentials: "same-origin" })
                .then((e) => {
                  if (!e.ok) throw "failed to load wasm binary file at '" + t + "'";
                  return e.arrayBuffer();
                })
                .catch(() => er(t));
        }
        function rr(t, e, r) {
          return Nr(t)
            .then((a) => WebAssembly.instantiate(a, e))
            .then((a) => a)
            .then(r, (a) => {
              (bt("failed to asynchronously prepare wasm: " + a), Pe(a));
            });
        }
        function Yr(t, e) {
          var r = Rt;
          return Ht ||
            typeof WebAssembly.instantiateStreaming != "function" ||
            Ze(r) ||
            typeof fetch != "function"
            ? rr(r, t, e)
            : fetch(r, { credentials: "same-origin" }).then((a) =>
                WebAssembly.instantiateStreaming(a, t).then(e, function (o) {
                  return (
                    bt("wasm streaming compile failed: " + o),
                    bt("falling back to ArrayBuffer instantiation"),
                    rr(r, t, e)
                  );
                }),
              );
        }
        var Ae = (t) => {
            for (; 0 < t.length;) t.shift()(v);
          },
          nr = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0,
          Tt = (t, e, r) => {
            var a = e + r;
            for (r = e; t[r] && !(r >= a);) ++r;
            if (16 < r - e && t.buffer && nr) return nr.decode(t.subarray(e, r));
            for (a = ""; e < r;) {
              var o = t[e++];
              if (o & 128) {
                var f = t[e++] & 63;
                if ((o & 224) == 192) a += String.fromCharCode(((o & 31) << 6) | f);
                else {
                  var l = t[e++] & 63;
                  ((o =
                    (o & 240) == 224
                      ? ((o & 15) << 12) | (f << 6) | l
                      : ((o & 7) << 18) | (f << 12) | (l << 6) | (t[e++] & 63)),
                    65536 > o
                      ? (a += String.fromCharCode(o))
                      : ((o -= 65536),
                        (a += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023)))));
                }
              } else a += String.fromCharCode(o);
            }
            return a;
          },
          te = {};
        function Ee(t) {
          for (; t.length;) {
            var e = t.pop();
            t.pop()(e);
          }
        }
        function jt(t) {
          return this.fromWireType(C[t >> 2]);
        }
        var It = {},
          Ft = {},
          ee = {},
          ar = void 0;
        function re(t) {
          throw new ar(t);
        }
        function ot(t, e, r) {
          function a(s) {
            ((s = r(s)), s.length !== t.length && re("Mismatched type converter count"));
            for (var h = 0; h < t.length; ++h) ht(t[h], s[h]);
          }
          t.forEach(function (s) {
            ee[s] = e;
          });
          var o = Array(e.length),
            f = [],
            l = 0;
          (e.forEach((s, h) => {
            Ft.hasOwnProperty(s)
              ? (o[h] = Ft[s])
              : (f.push(s),
                It.hasOwnProperty(s) || (It[s] = []),
                It[s].push(() => {
                  ((o[h] = Ft[s]), ++l, l === f.length && a(o));
                }));
          }),
            f.length === 0 && a(o));
        }
        function ne(t) {
          switch (t) {
            case 1:
              return 0;
            case 2:
              return 1;
            case 4:
              return 2;
            case 8:
              return 3;
            default:
              throw new TypeError(`Unknown type size: ${t}`);
          }
        }
        var or = void 0;
        function $(t) {
          for (var e = ""; I[t];) e += or[I[t++]];
          return e;
        }
        var Dt = void 0;
        function G(t) {
          throw new Dt(t);
        }
        function zr(t, e, r = {}) {
          var a = e.name;
          if (
            (t || G(`type "${a}" must have a positive integer typeid pointer`),
            Ft.hasOwnProperty(t))
          ) {
            if (r.af) return;
            G(`Cannot register type '${a}' twice`);
          }
          ((Ft[t] = e),
            delete ee[t],
            It.hasOwnProperty(t) && ((e = It[t]), delete It[t], e.forEach((o) => o())));
        }
        function ht(t, e, r = {}) {
          if (!("argPackAdvance" in e))
            throw new TypeError("registerType registeredInstance requires argPackAdvance");
          zr(t, e, r);
        }
        function Ce(t) {
          G(t.Dd.Jd.Gd.name + " instance already deleted");
        }
        var we = !1;
        function ir() {}
        function ur(t) {
          (--t.count.value, t.count.value === 0 && (t.Ld ? t.Pd.Td(t.Ld) : t.Jd.Gd.Td(t.Hd)));
        }
        function fr(t, e, r) {
          return e === r
            ? t
            : r.Md === void 0
              ? null
              : ((t = fr(t, e, r.Md)), t === null ? null : r.Te(t));
        }
        var lr = {},
          Ot = [];
        function Se() {
          for (; Ot.length;) {
            var t = Ot.pop();
            ((t.Dd.$d = !1), t.delete());
          }
        }
        var Wt = void 0,
          $t = {};
        function Jr(t, e) {
          for (e === void 0 && G("ptr should not be undefined"); t.Md;) ((e = t.ge(e)), (t = t.Md));
          return $t[e];
        }
        function ae(t, e) {
          return (
            (e.Jd && e.Hd) || re("makeClassHandle requires ptr and ptrType"),
            !!e.Pd != !!e.Ld && re("Both smartPtrType and smartPtr must be specified"),
            (e.count = { value: 1 }),
            Vt(Object.create(t, { Dd: { value: e } }))
          );
        }
        function Vt(t) {
          return typeof FinalizationRegistry > "u"
            ? ((Vt = (e) => e), t)
            : ((we = new FinalizationRegistry((e) => {
                ur(e.Dd);
              })),
              (Vt = (e) => {
                var r = e.Dd;
                return (r.Ld && we.register(e, { Dd: r }, e), e);
              }),
              (ir = (e) => {
                we.unregister(e);
              }),
              Vt(t));
        }
        function At() {}
        function sr(t) {
          if (t === void 0) return "_unknown";
          t = t.replace(/[^a-zA-Z0-9_]/g, "$");
          var e = t.charCodeAt(0);
          return 48 <= e && 57 >= e ? `_${t}` : t;
        }
        function Te(t, e) {
          return (
            (t = sr(t)),
            {
              [t]: function () {
                return e.apply(this, arguments);
              },
            }[t]
          );
        }
        function Fe(t, e, r) {
          if (t[e].Kd === void 0) {
            var a = t[e];
            ((t[e] = function () {
              return (
                t[e].Kd.hasOwnProperty(arguments.length) ||
                  G(
                    `Function '${r}' called with an invalid number of arguments (${arguments.length}) - expects one of (${t[e].Kd})!`,
                  ),
                t[e].Kd[arguments.length].apply(this, arguments)
              );
            }),
              (t[e].Kd = []),
              (t[e].Kd[a.Yd] = a));
          }
        }
        function ke(t, e, r) {
          v.hasOwnProperty(t)
            ? ((r === void 0 || (v[t].Kd !== void 0 && v[t].Kd[r] !== void 0)) &&
                G(`Cannot register public name '${t}' twice`),
              Fe(v, t, t),
              v.hasOwnProperty(r) &&
                G(
                  `Cannot register multiple overloads of a function with the same number of arguments (${r})!`,
                ),
              (v[t].Kd[r] = e))
            : ((v[t] = e), r !== void 0 && (v[t].sf = r));
        }
        function Kr(t, e, r, a, o, f, l, s) {
          ((this.name = t),
            (this.constructor = e),
            (this.ae = r),
            (this.Td = a),
            (this.Md = o),
            (this.We = f),
            (this.ge = l),
            (this.Te = s),
            (this.ef = []));
        }
        function xe(t, e, r) {
          for (; e !== r;)
            (e.ge || G(`Expected null or instance of ${r.name}, got an instance of ${e.name}`),
              (t = e.ge(t)),
              (e = e.Md));
          return t;
        }
        function Xr(t, e) {
          return e === null
            ? (this.ue && G(`null is not a valid ${this.name}`), 0)
            : (e.Dd || G(`Cannot pass "${Re(e)}" as a ${this.name}`),
              e.Dd.Hd || G(`Cannot pass deleted object as a pointer of type ${this.name}`),
              xe(e.Dd.Hd, e.Dd.Jd.Gd, this.Gd));
        }
        function qr(t, e) {
          if (e === null) {
            if ((this.ue && G(`null is not a valid ${this.name}`), this.le)) {
              var r = this.ve();
              return (t !== null && t.push(this.Td, r), r);
            }
            return 0;
          }
          if (
            (e.Dd || G(`Cannot pass "${Re(e)}" as a ${this.name}`),
            e.Dd.Hd || G(`Cannot pass deleted object as a pointer of type ${this.name}`),
            !this.ke &&
              e.Dd.Jd.ke &&
              G(
                `Cannot convert argument of type ${e.Dd.Pd ? e.Dd.Pd.name : e.Dd.Jd.name} to parameter type ${this.name}`,
              ),
            (r = xe(e.Dd.Hd, e.Dd.Jd.Gd, this.Gd)),
            this.le)
          )
            switch (
              (e.Dd.Ld === void 0 && G("Passing raw pointer to smart pointer is illegal"), this.kf)
            ) {
              case 0:
                e.Dd.Pd === this
                  ? (r = e.Dd.Ld)
                  : G(
                      `Cannot convert argument of type ${e.Dd.Pd ? e.Dd.Pd.name : e.Dd.Jd.name} to parameter type ${this.name}`,
                    );
                break;
              case 1:
                r = e.Dd.Ld;
                break;
              case 2:
                if (e.Dd.Pd === this) r = e.Dd.Ld;
                else {
                  var a = e.clone();
                  ((r = this.ff(
                    r,
                    tt(function () {
                      a.delete();
                    }),
                  )),
                    t !== null && t.push(this.Td, r));
                }
                break;
              default:
                G("Unsupporting sharing policy");
            }
          return r;
        }
        function Qr(t, e) {
          return e === null
            ? (this.ue && G(`null is not a valid ${this.name}`), 0)
            : (e.Dd || G(`Cannot pass "${Re(e)}" as a ${this.name}`),
              e.Dd.Hd || G(`Cannot pass deleted object as a pointer of type ${this.name}`),
              e.Dd.Jd.ke &&
                G(`Cannot convert argument of type ${e.Dd.Jd.name} to parameter type ${this.name}`),
              xe(e.Dd.Hd, e.Dd.Jd.Gd, this.Gd));
        }
        function pt(t, e, r, a, o, f, l, s, h, _, b) {
          ((this.name = t),
            (this.Gd = e),
            (this.ue = r),
            (this.ke = a),
            (this.le = o),
            (this.df = f),
            (this.kf = l),
            (this.Ee = s),
            (this.ve = h),
            (this.ff = _),
            (this.Td = b),
            o || e.Md !== void 0
              ? (this.toWireType = qr)
              : ((this.toWireType = a ? Xr : Qr), (this.Od = null)));
        }
        function cr(t, e, r) {
          (v.hasOwnProperty(t) || re("Replacing nonexistant public symbol"),
            v[t].Kd !== void 0 && r !== void 0 ? (v[t].Kd[r] = e) : ((v[t] = e), (v[t].Yd = r)));
        }
        var Zr = (t, e) => {
          var r = [];
          return function () {
            if (((r.length = 0), Object.assign(r, arguments), t.includes("j"))) {
              var a = v["dynCall_" + t];
              a = r && r.length ? a.apply(null, [e].concat(r)) : a.call(null, e);
            } else a = X.get(e).apply(null, r);
            return a;
          };
        };
        function J(t, e) {
          t = $(t);
          var r = t.includes("j") ? Zr(t, e) : X.get(e);
          return (
            typeof r != "function" && G(`unknown function pointer with signature ${t}: ${e}`),
            r
          );
        }
        var dr = void 0;
        function hr(t) {
          t = Dr(t);
          var e = $(t);
          return (vt(t), e);
        }
        function Nt(t, e) {
          function r(f) {
            o[f] || Ft[f] || (ee[f] ? ee[f].forEach(r) : (a.push(f), (o[f] = !0)));
          }
          var a = [],
            o = {};
          throw (e.forEach(r), new dr(`${t}: ` + a.map(hr).join([", "])));
        }
        function oe(t, e, r, a, o) {
          var f = e.length;
          2 > f &&
            G("argTypes array size mismatch! Must at least get return value and 'this' types!");
          var l = e[1] !== null && r !== null,
            s = !1;
          for (r = 1; r < e.length; ++r)
            if (e[r] !== null && e[r].Od === void 0) {
              s = !0;
              break;
            }
          var h = e[0].name !== "void",
            _ = f - 2,
            b = Array(_),
            E = [],
            w = [];
          return function () {
            if (
              (arguments.length !== _ &&
                G(`function ${t} called with ${arguments.length} arguments, expected ${_} args!`),
              (w.length = 0),
              (E.length = l ? 2 : 1),
              (E[0] = o),
              l)
            ) {
              var m = e[1].toWireType(w, this);
              E[1] = m;
            }
            for (var T = 0; T < _; ++T)
              ((b[T] = e[T + 2].toWireType(w, arguments[T])), E.push(b[T]));
            if (((T = a.apply(null, E)), s)) Ee(w);
            else
              for (var k = l ? 1 : 2; k < e.length; k++) {
                var O = k === 1 ? m : b[k - 2];
                e[k].Od !== null && e[k].Od(O);
              }
            return ((m = h ? e[0].fromWireType(T) : void 0), m);
          };
        }
        function ie(t, e) {
          for (var r = [], a = 0; a < t; a++) r.push(U[(e + 4 * a) >> 2]);
          return r;
        }
        function pr() {
          ((this.Sd = [void 0]), (this.Ce = []));
        }
        var Q = new pr();
        function Me(t) {
          t >= Q.be && --Q.get(t).Fe === 0 && Q.Je(t);
        }
        var Z = (t) => (t || G("Cannot use deleted val. handle = " + t), Q.get(t).value),
          tt = (t) => {
            switch (t) {
              case void 0:
                return 1;
              case null:
                return 2;
              case !0:
                return 3;
              case !1:
                return 4;
              default:
                return Q.Ie({ Fe: 1, value: t });
            }
          };
        function tn(t, e, r) {
          switch (e) {
            case 0:
              return function (a) {
                return this.fromWireType((r ? dt : I)[a]);
              };
            case 1:
              return function (a) {
                return this.fromWireType((r ? Pt : Mt)[a >> 1]);
              };
            case 2:
              return function (a) {
                return this.fromWireType((r ? C : U)[a >> 2]);
              };
            default:
              throw new TypeError("Unknown integer type: " + t);
          }
        }
        function Yt(t, e) {
          var r = Ft[t];
          return (r === void 0 && G(e + " has unknown type " + hr(t)), r);
        }
        function Re(t) {
          if (t === null) return "null";
          var e = typeof t;
          return e === "object" || e === "array" || e === "function" ? t.toString() : "" + t;
        }
        function en(t, e) {
          switch (e) {
            case 2:
              return function (r) {
                return this.fromWireType(F[r >> 2]);
              };
            case 3:
              return function (r) {
                return this.fromWireType(Je[r >> 3]);
              };
            default:
              throw new TypeError("Unknown float type: " + t);
          }
        }
        function rn(t, e, r) {
          switch (e) {
            case 0:
              return r
                ? function (a) {
                    return dt[a];
                  }
                : function (a) {
                    return I[a];
                  };
            case 1:
              return r
                ? function (a) {
                    return Pt[a >> 1];
                  }
                : function (a) {
                    return Mt[a >> 1];
                  };
            case 2:
              return r
                ? function (a) {
                    return C[a >> 2];
                  }
                : function (a) {
                    return U[a >> 2];
                  };
            default:
              throw new TypeError("Unknown integer type: " + t);
          }
        }
        var it = (t, e, r, a) => {
            if (!(0 < a)) return 0;
            var o = r;
            a = r + a - 1;
            for (var f = 0; f < t.length; ++f) {
              var l = t.charCodeAt(f);
              if (55296 <= l && 57343 >= l) {
                var s = t.charCodeAt(++f);
                l = (65536 + ((l & 1023) << 10)) | (s & 1023);
              }
              if (127 >= l) {
                if (r >= a) break;
                e[r++] = l;
              } else {
                if (2047 >= l) {
                  if (r + 1 >= a) break;
                  e[r++] = 192 | (l >> 6);
                } else {
                  if (65535 >= l) {
                    if (r + 2 >= a) break;
                    e[r++] = 224 | (l >> 12);
                  } else {
                    if (r + 3 >= a) break;
                    ((e[r++] = 240 | (l >> 18)), (e[r++] = 128 | ((l >> 12) & 63)));
                  }
                  e[r++] = 128 | ((l >> 6) & 63);
                }
                e[r++] = 128 | (l & 63);
              }
            }
            return ((e[r] = 0), r - o);
          },
          ut = (t) => {
            for (var e = 0, r = 0; r < t.length; ++r) {
              var a = t.charCodeAt(r);
              127 >= a
                ? e++
                : 2047 >= a
                  ? (e += 2)
                  : 55296 <= a && 57343 >= a
                    ? ((e += 4), ++r)
                    : (e += 3);
            }
            return e;
          },
          yr = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0,
          nn = (t, e) => {
            for (var r = t >> 1, a = r + e / 2; !(r >= a) && Mt[r];) ++r;
            if (((r <<= 1), 32 < r - t && yr)) return yr.decode(I.subarray(t, r));
            for (r = "", a = 0; !(a >= e / 2); ++a) {
              var o = Pt[(t + 2 * a) >> 1];
              if (o == 0) break;
              r += String.fromCharCode(o);
            }
            return r;
          },
          an = (t, e, r) => {
            if ((r === void 0 && (r = 2147483647), 2 > r)) return 0;
            r -= 2;
            var a = e;
            r = r < 2 * t.length ? r / 2 : t.length;
            for (var o = 0; o < r; ++o) ((Pt[e >> 1] = t.charCodeAt(o)), (e += 2));
            return ((Pt[e >> 1] = 0), e - a);
          },
          on = (t) => 2 * t.length,
          un = (t, e) => {
            for (var r = 0, a = ""; !(r >= e / 4);) {
              var o = C[(t + 4 * r) >> 2];
              if (o == 0) break;
              (++r,
                65536 <= o
                  ? ((o -= 65536),
                    (a += String.fromCharCode(55296 | (o >> 10), 56320 | (o & 1023))))
                  : (a += String.fromCharCode(o)));
            }
            return a;
          },
          fn = (t, e, r) => {
            if ((r === void 0 && (r = 2147483647), 4 > r)) return 0;
            var a = e;
            r = a + r - 4;
            for (var o = 0; o < t.length; ++o) {
              var f = t.charCodeAt(o);
              if (55296 <= f && 57343 >= f) {
                var l = t.charCodeAt(++o);
                f = (65536 + ((f & 1023) << 10)) | (l & 1023);
              }
              if (((C[e >> 2] = f), (e += 4), e + 4 > r)) break;
            }
            return ((C[e >> 2] = 0), e - a);
          },
          ln = (t) => {
            for (var e = 0, r = 0; r < t.length; ++r) {
              var a = t.charCodeAt(r);
              (55296 <= a && 57343 >= a && ++r, (e += 4));
            }
            return e;
          },
          sn = {};
        function ue(t) {
          var e = sn[t];
          return e === void 0 ? $(t) : e;
        }
        var fe = [];
        function mr() {
          function t(e) {
            e.$$$embind_global$$$ = e;
            var r = typeof $$$embind_global$$$ == "object" && e.$$$embind_global$$$ == e;
            return (r || delete e.$$$embind_global$$$, r);
          }
          if (typeof globalThis == "object") return globalThis;
          if (
            typeof $$$embind_global$$$ == "object" ||
            (typeof global == "object" && t(global)
              ? ($$$embind_global$$$ = global)
              : typeof self == "object" && t(self) && ($$$embind_global$$$ = self),
            typeof $$$embind_global$$$ == "object")
          )
            return $$$embind_global$$$;
          throw Error("unable to get global object.");
        }
        function cn(t) {
          var e = fe.length;
          return (fe.push(t), e);
        }
        function dn(t, e) {
          for (var r = Array(t), a = 0; a < t; ++a)
            r[a] = Yt(U[(e + 4 * a) >> 2], "parameter " + a);
          return r;
        }
        var gr = [];
        function hn(t) {
          var e = Array(t + 1);
          return function (r, a, o) {
            e[0] = r;
            for (var f = 0; f < t; ++f) {
              var l = Yt(U[(a + 4 * f) >> 2], "parameter " + f);
              ((e[f + 1] = l.readValueFromPointer(o)), (o += l.argPackAdvance));
            }
            return ((r = new (r.bind.apply(r, e))()), tt(r));
          };
        }
        var vr = {};
        function pn(t) {
          var e = t.getExtension("ANGLE_instanced_arrays");
          e &&
            ((t.vertexAttribDivisor = function (r, a) {
              e.vertexAttribDivisorANGLE(r, a);
            }),
            (t.drawArraysInstanced = function (r, a, o, f) {
              e.drawArraysInstancedANGLE(r, a, o, f);
            }),
            (t.drawElementsInstanced = function (r, a, o, f, l) {
              e.drawElementsInstancedANGLE(r, a, o, f, l);
            }));
        }
        function yn(t) {
          var e = t.getExtension("OES_vertex_array_object");
          e &&
            ((t.createVertexArray = function () {
              return e.createVertexArrayOES();
            }),
            (t.deleteVertexArray = function (r) {
              e.deleteVertexArrayOES(r);
            }),
            (t.bindVertexArray = function (r) {
              e.bindVertexArrayOES(r);
            }),
            (t.isVertexArray = function (r) {
              return e.isVertexArrayOES(r);
            }));
        }
        function mn(t) {
          var e = t.getExtension("WEBGL_draw_buffers");
          e &&
            (t.drawBuffers = function (r, a) {
              e.drawBuffersWEBGL(r, a);
            });
        }
        var _r = 1,
          le = [],
          ft = [],
          se = [],
          zt = [],
          et = [],
          lt = [],
          ce = [],
          yt = [],
          kt = [],
          xt = [],
          br = {},
          Pr = {},
          Ar = 4;
        function j(t) {
          de || (de = t);
        }
        function Bt(t) {
          for (var e = _r++, r = t.length; r < e; r++) t[r] = null;
          return e;
        }
        function gn(t, e) {
          t.be ||
            ((t.be = t.getContext),
            (t.getContext = function (a, o) {
              return (
                (o = t.be(a, o)),
                (a == "webgl") == o instanceof WebGLRenderingContext ? o : null
              );
            }));
          var r = 1 < e.majorVersion ? t.getContext("webgl2", e) : t.getContext("webgl", e);
          return r ? vn(r, e) : 0;
        }
        function vn(t, e) {
          var r = Bt(yt),
            a = { handle: r, attributes: e, version: e.majorVersion, Qd: t };
          return (
            t.canvas && (t.canvas.Ke = a),
            (yt[r] = a),
            (typeof e.Ue > "u" || e.Ue) && _n(a),
            r
          );
        }
        function Er(t) {
          return ((R = yt[t]), (v.qf = p = R && R.Qd), !(t && !p));
        }
        function _n(t) {
          if ((t || (t = R), !t.bf)) {
            t.bf = !0;
            var e = t.Qd;
            (pn(e),
              yn(e),
              mn(e),
              (e.ze = e.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")),
              (e.De = e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")),
              2 <= t.version && (e.Ae = e.getExtension("EXT_disjoint_timer_query_webgl2")),
              (2 > t.version || !e.Ae) && (e.Ae = e.getExtension("EXT_disjoint_timer_query")),
              (e.rf = e.getExtension("WEBGL_multi_draw")),
              (e.getSupportedExtensions() || []).forEach(function (r) {
                r.includes("lose_context") || r.includes("debug") || e.getExtension(r);
              }));
          }
        }
        var R,
          de,
          Ie = {},
          Cr = () => {
            if (!De) {
              var t = {
                  USER: "web_user",
                  LOGNAME: "web_user",
                  PATH: "/",
                  PWD: "/",
                  HOME: "/home/web_user",
                  LANG:
                    (
                      (typeof navigator == "object" &&
                        navigator.languages &&
                        navigator.languages[0]) ||
                      "C"
                    ).replace("-", "_") + ".UTF-8",
                  _: Ye || "./this.program",
                },
                e;
              for (e in Ie) Ie[e] === void 0 ? delete t[e] : (t[e] = Ie[e]);
              var r = [];
              for (e in t) r.push(`${e}=${t[e]}`);
              De = r;
            }
            return De;
          },
          De,
          bn = [null, [], []];
        function wr(t) {
          p.bindVertexArray(ce[t]);
        }
        function Sr(t, e) {
          for (var r = 0; r < t; r++) {
            var a = C[(e + 4 * r) >> 2];
            (p.deleteVertexArray(ce[a]), (ce[a] = null));
          }
        }
        var he = [];
        function Tr(t, e, r, a) {
          p.drawElements(t, e, r, a);
        }
        function Gt(t, e, r, a) {
          for (var o = 0; o < t; o++) {
            var f = p[r](),
              l = f && Bt(a);
            (f ? ((f.name = l), (a[l] = f)) : j(1282), (C[(e + 4 * o) >> 2] = l));
          }
        }
        function Fr(t, e) {
          Gt(t, e, "createVertexArray", ce);
        }
        function kr(t, e, r) {
          if (e) {
            var a = void 0;
            switch (t) {
              case 36346:
                a = 1;
                break;
              case 36344:
                r != 0 && r != 1 && j(1280);
                return;
              case 34814:
              case 36345:
                a = 0;
                break;
              case 34466:
                var o = p.getParameter(34467);
                a = o ? o.length : 0;
                break;
              case 33309:
                if (2 > R.version) {
                  j(1282);
                  return;
                }
                a = 2 * (p.getSupportedExtensions() || []).length;
                break;
              case 33307:
              case 33308:
                if (2 > R.version) {
                  j(1280);
                  return;
                }
                a = t == 33307 ? 3 : 0;
            }
            if (a === void 0)
              switch (((o = p.getParameter(t)), typeof o)) {
                case "number":
                  a = o;
                  break;
                case "boolean":
                  a = o ? 1 : 0;
                  break;
                case "string":
                  j(1280);
                  return;
                case "object":
                  if (o === null)
                    switch (t) {
                      case 34964:
                      case 35725:
                      case 34965:
                      case 36006:
                      case 36007:
                      case 32873:
                      case 34229:
                      case 36662:
                      case 36663:
                      case 35053:
                      case 35055:
                      case 36010:
                      case 35097:
                      case 35869:
                      case 32874:
                      case 36389:
                      case 35983:
                      case 35368:
                      case 34068:
                        a = 0;
                        break;
                      default:
                        j(1280);
                        return;
                    }
                  else {
                    if (
                      o instanceof Float32Array ||
                      o instanceof Uint32Array ||
                      o instanceof Int32Array ||
                      o instanceof Array
                    ) {
                      for (t = 0; t < o.length; ++t)
                        switch (r) {
                          case 0:
                            C[(e + 4 * t) >> 2] = o[t];
                            break;
                          case 2:
                            F[(e + 4 * t) >> 2] = o[t];
                            break;
                          case 4:
                            dt[(e + t) >> 0] = o[t] ? 1 : 0;
                        }
                      return;
                    }
                    try {
                      a = o.name | 0;
                    } catch (f) {
                      (j(1280),
                        bt(
                          "GL_INVALID_ENUM in glGet" +
                            r +
                            "v: Unknown object returned from WebGL getParameter(" +
                            t +
                            ")! (error: " +
                            f +
                            ")",
                        ));
                      return;
                    }
                  }
                  break;
                default:
                  (j(1280),
                    bt(
                      "GL_INVALID_ENUM in glGet" +
                        r +
                        "v: Native code calling glGet" +
                        r +
                        "v(" +
                        t +
                        ") and it returns " +
                        o +
                        " of type " +
                        typeof o +
                        "!",
                    ));
                  return;
              }
            switch (r) {
              case 1:
                ((r = a), (U[e >> 2] = r), (U[(e + 4) >> 2] = (r - U[e >> 2]) / 4294967296));
                break;
              case 0:
                C[e >> 2] = a;
                break;
              case 2:
                F[e >> 2] = a;
                break;
              case 4:
                dt[e >> 0] = a ? 1 : 0;
            }
          } else j(1281);
        }
        var Jt = (t) => {
          var e = ut(t) + 1,
            r = ge(e);
          return (r && it(t, I, r, e), r);
        };
        function xr(t) {
          return t.slice(-1) == "]" && t.lastIndexOf("[");
        }
        function pe(t) {
          return (
            (t -= 5120),
            t == 0
              ? dt
              : t == 1
                ? I
                : t == 2
                  ? Pt
                  : t == 4
                    ? C
                    : t == 6
                      ? F
                      : t == 5 || t == 28922 || t == 28520 || t == 30779 || t == 30782
                        ? U
                        : Mt
          );
        }
        function Be(t, e, r, a, o) {
          t = pe(t);
          var f = 31 - Math.clz32(t.BYTES_PER_ELEMENT),
            l = Ar;
          return t.subarray(
            o >> f,
            (o +
              a *
                ((r *
                  ({ 5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4 }[
                    e - 6402
                  ] || 1) *
                  (1 << f) +
                  l -
                  1) &
                  -l)) >>
              f,
          );
        }
        function L(t) {
          var e = p.Re;
          if (e) {
            var r = e.fe[t];
            return (
              typeof r == "number" &&
                (e.fe[t] = r = p.getUniformLocation(e, e.Ge[t] + (0 < r ? "[" + r + "]" : ""))),
              r
            );
          }
          j(1282);
        }
        var Et = [],
          Kt = [],
          ye = (t) => t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0),
          Mr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          Rr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        function Pn(t) {
          var e = Array(ut(t) + 1);
          return (it(t, e, 0, e.length), e);
        }
        var An = (t, e, r, a) => {
          function o(m, T, k) {
            for (m = typeof m == "number" ? m.toString() : m || ""; m.length < T;) m = k[0] + m;
            return m;
          }
          function f(m, T) {
            return o(m, T, "0");
          }
          function l(m, T) {
            function k(K) {
              return 0 > K ? -1 : 0 < K ? 1 : 0;
            }
            var O;
            return (
              (O = k(m.getFullYear() - T.getFullYear())) === 0 &&
                (O = k(m.getMonth() - T.getMonth())) === 0 &&
                (O = k(m.getDate() - T.getDate())),
              O
            );
          }
          function s(m) {
            switch (m.getDay()) {
              case 0:
                return new Date(m.getFullYear() - 1, 11, 29);
              case 1:
                return m;
              case 2:
                return new Date(m.getFullYear(), 0, 3);
              case 3:
                return new Date(m.getFullYear(), 0, 2);
              case 4:
                return new Date(m.getFullYear(), 0, 1);
              case 5:
                return new Date(m.getFullYear() - 1, 11, 31);
              case 6:
                return new Date(m.getFullYear() - 1, 11, 30);
            }
          }
          function h(m) {
            var T = m.Vd;
            for (m = new Date(new Date(m.Wd + 1900, 0, 1).getTime()); 0 < T;) {
              var k = m.getMonth(),
                O = (ye(m.getFullYear()) ? Mr : Rr)[k];
              if (T > O - m.getDate())
                ((T -= O - m.getDate() + 1),
                  m.setDate(1),
                  11 > k ? m.setMonth(k + 1) : (m.setMonth(0), m.setFullYear(m.getFullYear() + 1)));
              else {
                m.setDate(m.getDate() + T);
                break;
              }
            }
            return (
              (k = new Date(m.getFullYear() + 1, 0, 4)),
              (T = s(new Date(m.getFullYear(), 0, 4))),
              (k = s(k)),
              0 >= l(T, m)
                ? 0 >= l(k, m)
                  ? m.getFullYear() + 1
                  : m.getFullYear()
                : m.getFullYear() - 1
            );
          }
          var _ = C[(a + 40) >> 2];
          ((a = {
            nf: C[a >> 2],
            mf: C[(a + 4) >> 2],
            pe: C[(a + 8) >> 2],
            we: C[(a + 12) >> 2],
            qe: C[(a + 16) >> 2],
            Wd: C[(a + 20) >> 2],
            Rd: C[(a + 24) >> 2],
            Vd: C[(a + 28) >> 2],
            uf: C[(a + 32) >> 2],
            lf: C[(a + 36) >> 2],
            pf: _ && _ ? Tt(I, _) : "",
          }),
            (r = r ? Tt(I, r) : ""),
            (_ = {
              "%c": "%a %b %d %H:%M:%S %Y",
              "%D": "%m/%d/%y",
              "%F": "%Y-%m-%d",
              "%h": "%b",
              "%r": "%I:%M:%S %p",
              "%R": "%H:%M",
              "%T": "%H:%M:%S",
              "%x": "%m/%d/%y",
              "%X": "%H:%M:%S",
              "%Ec": "%c",
              "%EC": "%C",
              "%Ex": "%m/%d/%y",
              "%EX": "%H:%M:%S",
              "%Ey": "%y",
              "%EY": "%Y",
              "%Od": "%d",
              "%Oe": "%e",
              "%OH": "%H",
              "%OI": "%I",
              "%Om": "%m",
              "%OM": "%M",
              "%OS": "%S",
              "%Ou": "%u",
              "%OU": "%U",
              "%OV": "%V",
              "%Ow": "%w",
              "%OW": "%W",
              "%Oy": "%y",
            }));
          for (var b in _) r = r.replace(new RegExp(b, "g"), _[b]);
          var E = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            w =
              "January February March April May June July August September October November December".split(
                " ",
              );
          ((_ = {
            "%a": (m) => E[m.Rd].substring(0, 3),
            "%A": (m) => E[m.Rd],
            "%b": (m) => w[m.qe].substring(0, 3),
            "%B": (m) => w[m.qe],
            "%C": (m) => f(((m.Wd + 1900) / 100) | 0, 2),
            "%d": (m) => f(m.we, 2),
            "%e": (m) => o(m.we, 2, " "),
            "%g": (m) => h(m).toString().substring(2),
            "%G": (m) => h(m),
            "%H": (m) => f(m.pe, 2),
            "%I": (m) => ((m = m.pe), m == 0 ? (m = 12) : 12 < m && (m -= 12), f(m, 2)),
            "%j": (m) => {
              for (var T = 0, k = 0; k <= m.qe - 1; T += (ye(m.Wd + 1900) ? Mr : Rr)[k++]);
              return f(m.we + T, 3);
            },
            "%m": (m) => f(m.qe + 1, 2),
            "%M": (m) => f(m.mf, 2),
            "%n": () => `
`,
            "%p": (m) => (0 <= m.pe && 12 > m.pe ? "AM" : "PM"),
            "%S": (m) => f(m.nf, 2),
            "%t": () => "	",
            "%u": (m) => m.Rd || 7,
            "%U": (m) => f(Math.floor((m.Vd + 7 - m.Rd) / 7), 2),
            "%V": (m) => {
              var T = Math.floor((m.Vd + 7 - ((m.Rd + 6) % 7)) / 7);
              if ((2 >= (m.Rd + 371 - m.Vd - 2) % 7 && T++, T))
                T == 53 &&
                  ((k = (m.Rd + 371 - m.Vd) % 7), k == 4 || (k == 3 && ye(m.Wd)) || (T = 1));
              else {
                T = 52;
                var k = (m.Rd + 7 - m.Vd - 1) % 7;
                (k == 4 || (k == 5 && ye((m.Wd % 400) - 1))) && T++;
              }
              return f(T, 2);
            },
            "%w": (m) => m.Rd,
            "%W": (m) => f(Math.floor((m.Vd + 7 - ((m.Rd + 6) % 7)) / 7), 2),
            "%y": (m) => (m.Wd + 1900).toString().substring(2),
            "%Y": (m) => m.Wd + 1900,
            "%z": (m) => {
              m = m.lf;
              var T = 0 <= m;
              return (
                (m = Math.abs(m) / 60),
                (T ? "+" : "-") + ("0000" + ((m / 60) * 100 + (m % 60))).slice(-4)
              );
            },
            "%Z": (m) => m.pf,
            "%%": () => "%",
          }),
            (r = r.replace(/%%/g, "\0\0")));
          for (b in _) r.includes(b) && (r = r.replace(new RegExp(b, "g"), _[b](a)));
          return (
            (r = r.replace(/\0\0/g, "%")),
            (b = Pn(r)),
            b.length > e ? 0 : (dt.set(b, t), b.length - 1)
          );
        };
        ar = v.InternalError = class extends Error {
          constructor(t) {
            (super(t), (this.name = "InternalError"));
          }
        };
        for (var Ir = Array(256), me = 0; 256 > me; ++me) Ir[me] = String.fromCharCode(me);
        ((or = Ir),
          (Dt = v.BindingError =
            class extends Error {
              constructor(t) {
                (super(t), (this.name = "BindingError"));
              }
            }),
          (At.prototype.isAliasOf = function (t) {
            if (!(this instanceof At && t instanceof At)) return !1;
            var e = this.Dd.Jd.Gd,
              r = this.Dd.Hd,
              a = t.Dd.Jd.Gd;
            for (t = t.Dd.Hd; e.Md;) ((r = e.ge(r)), (e = e.Md));
            for (; a.Md;) ((t = a.ge(t)), (a = a.Md));
            return e === a && r === t;
          }),
          (At.prototype.clone = function () {
            if ((this.Dd.Hd || Ce(this), this.Dd.ee)) return ((this.Dd.count.value += 1), this);
            var t = Vt,
              e = Object,
              r = e.create,
              a = Object.getPrototypeOf(this),
              o = this.Dd;
            return (
              (t = t(
                r.call(e, a, {
                  Dd: {
                    value: {
                      count: o.count,
                      $d: o.$d,
                      ee: o.ee,
                      Hd: o.Hd,
                      Jd: o.Jd,
                      Ld: o.Ld,
                      Pd: o.Pd,
                    },
                  },
                }),
              )),
              (t.Dd.count.value += 1),
              (t.Dd.$d = !1),
              t
            );
          }),
          (At.prototype.delete = function () {
            (this.Dd.Hd || Ce(this),
              this.Dd.$d && !this.Dd.ee && G("Object already scheduled for deletion"),
              ir(this),
              ur(this.Dd),
              this.Dd.ee || ((this.Dd.Ld = void 0), (this.Dd.Hd = void 0)));
          }),
          (At.prototype.isDeleted = function () {
            return !this.Dd.Hd;
          }),
          (At.prototype.deleteLater = function () {
            return (
              this.Dd.Hd || Ce(this),
              this.Dd.$d && !this.Dd.ee && G("Object already scheduled for deletion"),
              Ot.push(this),
              Ot.length === 1 && Wt && Wt(Se),
              (this.Dd.$d = !0),
              this
            );
          }),
          (v.getInheritedInstanceCount = function () {
            return Object.keys($t).length;
          }),
          (v.getLiveInheritedInstances = function () {
            var t = [],
              e;
            for (e in $t) $t.hasOwnProperty(e) && t.push($t[e]);
            return t;
          }),
          (v.flushPendingDeletes = Se),
          (v.setDelayFunction = function (t) {
            ((Wt = t), Ot.length && Wt && Wt(Se));
          }),
          (pt.prototype.Xe = function (t) {
            return (this.Ee && (t = this.Ee(t)), t);
          }),
          (pt.prototype.ye = function (t) {
            this.Td && this.Td(t);
          }),
          (pt.prototype.argPackAdvance = 8),
          (pt.prototype.readValueFromPointer = jt),
          (pt.prototype.deleteObject = function (t) {
            t !== null && t.delete();
          }),
          (pt.prototype.fromWireType = function (t) {
            function e() {
              return this.le
                ? ae(this.Gd.ae, { Jd: this.df, Hd: r, Pd: this, Ld: t })
                : ae(this.Gd.ae, { Jd: this, Hd: t });
            }
            var r = this.Xe(t);
            if (!r) return (this.ye(t), null);
            var a = Jr(this.Gd, r);
            if (a !== void 0)
              return a.Dd.count.value === 0
                ? ((a.Dd.Hd = r), (a.Dd.Ld = t), a.clone())
                : ((a = a.clone()), this.ye(t), a);
            if (((a = this.Gd.We(r)), (a = lr[a]), !a)) return e.call(this);
            a = this.ke ? a.Qe : a.pointerType;
            var o = fr(r, this.Gd, a.Gd);
            return o === null
              ? e.call(this)
              : this.le
                ? ae(a.Gd.ae, { Jd: a, Hd: o, Pd: this, Ld: t })
                : ae(a.Gd.ae, { Jd: a, Hd: o });
          }),
          (dr = v.UnboundTypeError =
            (function (t, e) {
              var r = Te(e, function (a) {
                ((this.name = e),
                  (this.message = a),
                  (a = Error(a).stack),
                  a !== void 0 &&
                    (this.stack =
                      this.toString() +
                      `
` +
                      a.replace(/^Error(:[^\n]*)?\n/, "")));
              });
              return (
                (r.prototype = Object.create(t.prototype)),
                (r.prototype.constructor = r),
                (r.prototype.toString = function () {
                  return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
                }),
                r
              );
            })(Error, "UnboundTypeError")),
          Object.assign(pr.prototype, {
            get(t) {
              return this.Sd[t];
            },
            has(t) {
              return this.Sd[t] !== void 0;
            },
            Ie(t) {
              var e = this.Ce.pop() || this.Sd.length;
              return ((this.Sd[e] = t), e);
            },
            Je(t) {
              ((this.Sd[t] = void 0), this.Ce.push(t));
            },
          }),
          Q.Sd.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }),
          (Q.be = Q.Sd.length),
          (v.count_emval_handles = function () {
            for (var t = 0, e = Q.be; e < Q.Sd.length; ++e) Q.Sd[e] !== void 0 && ++t;
            return t;
          }));
        for (var p, q = 0; 32 > q; ++q) he.push(Array(q));
        var En = new Float32Array(288);
        for (q = 0; 288 > q; ++q) Et[q] = En.subarray(0, q + 1);
        var Cn = new Int32Array(288);
        for (q = 0; 288 > q; ++q) Kt[q] = Cn.subarray(0, q + 1);
        var wn = {
          Q: function () {
            return 0;
          },
          Ab: () => {},
          Cb: function () {
            return 0;
          },
          xb: () => {},
          yb: () => {},
          R: function () {},
          zb: () => {},
          v: function (t) {
            var e = te[t];
            delete te[t];
            var r = e.ve,
              a = e.Td,
              o = e.Be,
              f = o.map((l) => l.$e).concat(o.map((l) => l.hf));
            ot([t], f, (l) => {
              var s = {};
              return (
                o.forEach((h, _) => {
                  var b = l[_],
                    E = h.Ye,
                    w = h.Ze,
                    m = l[_ + o.length],
                    T = h.gf,
                    k = h.jf;
                  s[h.Ve] = {
                    read: (O) => b.fromWireType(E(w, O)),
                    write: (O, K) => {
                      var Y = [];
                      (T(k, O, m.toWireType(Y, K)), Ee(Y));
                    },
                  };
                }),
                [
                  {
                    name: e.name,
                    fromWireType: function (h) {
                      var _ = {},
                        b;
                      for (b in s) _[b] = s[b].read(h);
                      return (a(h), _);
                    },
                    toWireType: function (h, _) {
                      for (var b in s) if (!(b in _)) throw new TypeError(`Missing field: "${b}"`);
                      var E = r();
                      for (b in s) s[b].write(E, _[b]);
                      return (h !== null && h.push(a, E), E);
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: jt,
                    Od: a,
                  },
                ]
              );
            });
          },
          pb: function () {},
          Gb: function (t, e, r, a, o) {
            var f = ne(r);
            ((e = $(e)),
              ht(t, {
                name: e,
                fromWireType: function (l) {
                  return !!l;
                },
                toWireType: function (l, s) {
                  return s ? a : o;
                },
                argPackAdvance: 8,
                readValueFromPointer: function (l) {
                  if (r === 1) var s = dt;
                  else if (r === 2) s = Pt;
                  else if (r === 4) s = C;
                  else throw new TypeError("Unknown boolean type size: " + e);
                  return this.fromWireType(s[l >> f]);
                },
                Od: null,
              }));
          },
          k: function (t, e, r, a, o, f, l, s, h, _, b, E, w) {
            ((b = $(b)), (f = J(o, f)), s && (s = J(l, s)), _ && (_ = J(h, _)), (w = J(E, w)));
            var m = sr(b);
            (ke(m, function () {
              Nt(`Cannot construct ${b} due to unbound types`, [a]);
            }),
              ot([t, e, r], a ? [a] : [], function (T) {
                if (((T = T[0]), a))
                  var k = T.Gd,
                    O = k.ae;
                else O = At.prototype;
                T = Te(m, function () {
                  if (Object.getPrototypeOf(this) !== K)
                    throw new Dt("Use 'new' to construct " + b);
                  if (Y.Ud === void 0) throw new Dt(b + " has no accessible constructor");
                  var Lt = Y.Ud[arguments.length];
                  if (Lt === void 0)
                    throw new Dt(
                      `Tried to invoke ctor of ${b} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Y.Ud).toString()}) parameters instead!`,
                    );
                  return Lt.apply(this, arguments);
                });
                var K = Object.create(O, { constructor: { value: T } });
                T.prototype = K;
                var Y = new Kr(b, T, K, w, k, f, s, _);
                (Y.Md && (Y.Md.he === void 0 && (Y.Md.he = []), Y.Md.he.push(Y)),
                  (k = new pt(b, Y, !0, !1, !1)),
                  (O = new pt(b + "*", Y, !1, !1, !1)));
                var mt = new pt(b + " const*", Y, !1, !0, !1);
                return ((lr[t] = { pointerType: O, Qe: mt }), cr(m, T), [k, O, mt]);
              }));
          },
          f: function (t, e, r, a, o, f, l) {
            var s = ie(r, a);
            ((e = $(e)),
              (f = J(o, f)),
              ot([], [t], function (h) {
                function _() {
                  Nt(`Cannot call ${b} due to unbound types`, s);
                }
                h = h[0];
                var b = `${h.name}.${e}`;
                e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                var E = h.Gd.constructor;
                return (
                  E[e] === void 0
                    ? ((_.Yd = r - 1), (E[e] = _))
                    : (Fe(E, e, b), (E[e].Kd[r - 1] = _)),
                  ot([], s, function (w) {
                    if (
                      ((w = [w[0], null].concat(w.slice(1))),
                      (w = oe(b, w, null, f, l)),
                      E[e].Kd === void 0 ? ((w.Yd = r - 1), (E[e] = w)) : (E[e].Kd[r - 1] = w),
                      h.Gd.he)
                    )
                      for (let m of h.Gd.he)
                        m.constructor.hasOwnProperty(e) || (m.constructor[e] = w);
                    return [];
                  }),
                  []
                );
              }));
          },
          t: function (t, e, r, a, o, f) {
            var l = ie(e, r);
            ((o = J(a, o)),
              ot([], [t], function (s) {
                s = s[0];
                var h = `constructor ${s.name}`;
                if ((s.Gd.Ud === void 0 && (s.Gd.Ud = []), s.Gd.Ud[e - 1] !== void 0))
                  throw new Dt(
                    `Cannot register multiple constructors with identical number of parameters (${e - 1}) for class '${s.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                  );
                return (
                  (s.Gd.Ud[e - 1] = () => {
                    Nt(`Cannot construct ${s.name} due to unbound types`, l);
                  }),
                  ot([], l, function (_) {
                    return (_.splice(1, 0, null), (s.Gd.Ud[e - 1] = oe(h, _, null, o, f)), []);
                  }),
                  []
                );
              }));
          },
          b: function (t, e, r, a, o, f, l, s) {
            var h = ie(r, a);
            ((e = $(e)),
              (f = J(o, f)),
              ot([], [t], function (_) {
                function b() {
                  Nt(`Cannot call ${E} due to unbound types`, h);
                }
                _ = _[0];
                var E = `${_.name}.${e}`;
                (e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && _.Gd.ef.push(e));
                var w = _.Gd.ae,
                  m = w[e];
                return (
                  m === void 0 || (m.Kd === void 0 && m.className !== _.name && m.Yd === r - 2)
                    ? ((b.Yd = r - 2), (b.className = _.name), (w[e] = b))
                    : (Fe(w, e, E), (w[e].Kd[r - 2] = b)),
                  ot([], h, function (T) {
                    return (
                      (T = oe(E, T, _, f, l)),
                      w[e].Kd === void 0 ? ((T.Yd = r - 2), (w[e] = T)) : (w[e].Kd[r - 2] = T),
                      []
                    );
                  }),
                  []
                );
              }));
          },
          o: function (t, e, r) {
            ((t = $(t)),
              ot([], [e], function (a) {
                return ((a = a[0]), (v[t] = a.fromWireType(r)), []);
              }));
          },
          Fb: function (t, e) {
            ((e = $(e)),
              ht(t, {
                name: e,
                fromWireType: function (r) {
                  var a = Z(r);
                  return (Me(r), a);
                },
                toWireType: function (r, a) {
                  return tt(a);
                },
                argPackAdvance: 8,
                readValueFromPointer: jt,
                Od: null,
              }));
          },
          j: function (t, e, r, a) {
            function o() {}
            ((r = ne(r)),
              (e = $(e)),
              (o.values = {}),
              ht(t, {
                name: e,
                constructor: o,
                fromWireType: function (f) {
                  return this.constructor.values[f];
                },
                toWireType: function (f, l) {
                  return l.value;
                },
                argPackAdvance: 8,
                readValueFromPointer: tn(e, r, a),
                Od: null,
              }),
              ke(e, o));
          },
          c: function (t, e, r) {
            var a = Yt(t, "enum");
            ((e = $(e)),
              (t = a.constructor),
              (a = Object.create(a.constructor.prototype, {
                value: { value: r },
                constructor: { value: Te(`${a.name}_${e}`, function () {}) },
              })),
              (t.values[r] = a),
              (t[e] = a));
          },
          T: function (t, e, r) {
            ((r = ne(r)),
              (e = $(e)),
              ht(t, {
                name: e,
                fromWireType: function (a) {
                  return a;
                },
                toWireType: function (a, o) {
                  return o;
                },
                argPackAdvance: 8,
                readValueFromPointer: en(e, r),
                Od: null,
              }));
          },
          r: function (t, e, r, a, o, f) {
            var l = ie(e, r);
            ((t = $(t)),
              (o = J(a, o)),
              ke(
                t,
                function () {
                  Nt(`Cannot call ${t} due to unbound types`, l);
                },
                e - 1,
              ),
              ot([], l, function (s) {
                return (
                  (s = [s[0], null].concat(s.slice(1))),
                  cr(t, oe(t, s, null, o, f), e - 1),
                  []
                );
              }));
          },
          x: function (t, e, r, a, o) {
            ((e = $(e)), o === -1 && (o = 4294967295), (o = ne(r)));
            var f = (s) => s;
            if (a === 0) {
              var l = 32 - 8 * r;
              f = (s) => (s << l) >>> l;
            }
            ((r = e.includes("unsigned")
              ? function (s, h) {
                  return h >>> 0;
                }
              : function (s, h) {
                  return h;
                }),
              ht(t, {
                name: e,
                fromWireType: f,
                toWireType: r,
                argPackAdvance: 8,
                readValueFromPointer: rn(e, o, a !== 0),
                Od: null,
              }));
          },
          n: function (t, e, r) {
            function a(f) {
              f >>= 2;
              var l = U;
              return new o(l.buffer, l[f + 1], l[f]);
            }
            var o = [
              Int8Array,
              Uint8Array,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array,
            ][e];
            ((r = $(r)),
              ht(
                t,
                { name: r, fromWireType: a, argPackAdvance: 8, readValueFromPointer: a },
                { af: !0 },
              ));
          },
          m: function (t, e, r, a, o, f, l, s, h, _, b, E) {
            ((r = $(r)),
              (f = J(o, f)),
              (s = J(l, s)),
              (_ = J(h, _)),
              (E = J(b, E)),
              ot([t], [e], function (w) {
                return ((w = w[0]), [new pt(r, w.Gd, !1, !1, !0, w, a, f, s, _, E)]);
              }));
          },
          S: function (t, e) {
            e = $(e);
            var r = e === "std::string";
            ht(t, {
              name: e,
              fromWireType: function (a) {
                var o = U[a >> 2],
                  f = a + 4;
                if (r)
                  for (var l = f, s = 0; s <= o; ++s) {
                    var h = f + s;
                    if (s == o || I[h] == 0) {
                      if (((l = l ? Tt(I, l, h - l) : ""), _ === void 0)) var _ = l;
                      else ((_ += "\0"), (_ += l));
                      l = h + 1;
                    }
                  }
                else {
                  for (_ = Array(o), s = 0; s < o; ++s) _[s] = String.fromCharCode(I[f + s]);
                  _ = _.join("");
                }
                return (vt(a), _);
              },
              toWireType: function (a, o) {
                o instanceof ArrayBuffer && (o = new Uint8Array(o));
                var f = typeof o == "string";
                f ||
                  o instanceof Uint8Array ||
                  o instanceof Uint8ClampedArray ||
                  o instanceof Int8Array ||
                  G("Cannot pass non-string to std::string");
                var l = r && f ? ut(o) : o.length,
                  s = ge(4 + l + 1),
                  h = s + 4;
                if (((U[s >> 2] = l), r && f)) it(o, I, h, l + 1);
                else if (f)
                  for (f = 0; f < l; ++f) {
                    var _ = o.charCodeAt(f);
                    (255 < _ &&
                      (vt(h), G("String has UTF-16 code units that do not fit in 8 bits")),
                      (I[h + f] = _));
                  }
                else for (f = 0; f < l; ++f) I[h + f] = o[f];
                return (a !== null && a.push(vt, s), s);
              },
              argPackAdvance: 8,
              readValueFromPointer: jt,
              Od: function (a) {
                vt(a);
              },
            });
          },
          K: function (t, e, r) {
            if (((r = $(r)), e === 2))
              var a = nn,
                o = an,
                f = on,
                l = () => Mt,
                s = 1;
            else e === 4 && ((a = un), (o = fn), (f = ln), (l = () => U), (s = 2));
            ht(t, {
              name: r,
              fromWireType: function (h) {
                for (var _ = U[h >> 2], b = l(), E, w = h + 4, m = 0; m <= _; ++m) {
                  var T = h + 4 + m * e;
                  (m == _ || b[T >> s] == 0) &&
                    ((w = a(w, T - w)),
                    E === void 0 ? (E = w) : ((E += "\0"), (E += w)),
                    (w = T + e));
                }
                return (vt(h), E);
              },
              toWireType: function (h, _) {
                typeof _ != "string" && G(`Cannot pass non-string to C++ string type ${r}`);
                var b = f(_),
                  E = ge(4 + b + e);
                return ((U[E >> 2] = b >> s), o(_, E + 4, b + e), h !== null && h.push(vt, E), E);
              },
              argPackAdvance: 8,
              readValueFromPointer: jt,
              Od: function (h) {
                vt(h);
              },
            });
          },
          w: function (t, e, r, a, o, f) {
            te[t] = { name: $(e), ve: J(r, a), Td: J(o, f), Be: [] };
          },
          e: function (t, e, r, a, o, f, l, s, h, _) {
            te[t].Be.push({ Ve: $(e), $e: r, Ye: J(a, o), Ze: f, hf: l, gf: J(s, h), jf: _ });
          },
          Hb: function (t, e) {
            ((e = $(e)),
              ht(t, {
                cf: !0,
                name: e,
                argPackAdvance: 0,
                fromWireType: function () {},
                toWireType: function () {},
              }));
          },
          Eb: () => !0,
          tb: () => {
            throw 1 / 0;
          },
          y: function (t, e, r) {
            ((t = Z(t)), (e = Yt(e, "emval::as")));
            var a = [],
              o = tt(a);
            return ((U[r >> 2] = o), e.toWireType(a, t));
          },
          Y: function (t, e, r, a, o) {
            ((t = fe[t]), (e = Z(e)), (r = ue(r)));
            var f = [];
            return ((U[a >> 2] = tt(f)), t(e, r, f, o));
          },
          q: function (t, e, r, a) {
            ((t = fe[t]), (e = Z(e)), (r = ue(r)), t(e, r, null, a));
          },
          d: Me,
          H: function (t) {
            return t === 0 ? tt(mr()) : ((t = ue(t)), tt(mr()[t]));
          },
          p: function (t, e) {
            var r = dn(t, e),
              a = r[0];
            e =
              a.name +
              "_$" +
              r
                .slice(1)
                .map(function (l) {
                  return l.name;
                })
                .join("_") +
              "$";
            var o = gr[e];
            if (o !== void 0) return o;
            var f = Array(t - 1);
            return (
              (o = cn((l, s, h, _) => {
                for (var b = 0, E = 0; E < t - 1; ++E)
                  ((f[E] = r[E + 1].readValueFromPointer(_ + b)), (b += r[E + 1].argPackAdvance));
                for (l = l[s].apply(l, f), E = 0; E < t - 1; ++E) r[E + 1].Se && r[E + 1].Se(f[E]);
                if (!a.cf) return a.toWireType(h, l);
              })),
              (gr[e] = o)
            );
          },
          s: function (t, e) {
            return ((t = Z(t)), (e = Z(e)), tt(t[e]));
          },
          l: function (t) {
            4 < t && (Q.get(t).Fe += 1);
          },
          G: function (t, e, r, a) {
            t = Z(t);
            var o = vr[e];
            return (o || ((o = hn(e)), (vr[e] = o)), o(t, r, a));
          },
          C: function () {
            return tt([]);
          },
          g: function (t) {
            return tt(ue(t));
          },
          z: function () {
            return tt({});
          },
          jb: function (t) {
            return ((t = Z(t)), !t);
          },
          u: function (t) {
            var e = Z(t);
            (Ee(e), Me(t));
          },
          i: function (t, e, r) {
            ((t = Z(t)), (e = Z(e)), (r = Z(r)), (t[e] = r));
          },
          h: function (t, e) {
            return ((t = Yt(t, "_emval_take_value")), (t = t.readValueFromPointer(e)), tt(t));
          },
          mb: function () {
            return -52;
          },
          nb: function () {},
          a: () => {
            Pe("");
          },
          Db: () => performance.now(),
          ub: (t) => {
            var e = I.length;
            if (((t >>>= 0), 2147483648 < t)) return !1;
            for (var r = 1; 4 >= r; r *= 2) {
              var a = e * (1 + 0.2 / r);
              a = Math.min(a, t + 100663296);
              var o = Math;
              a = Math.max(t, a);
              t: {
                o =
                  (o.min.call(o, 2147483648, a + ((65536 - (a % 65536)) % 65536)) -
                    Zt.buffer.byteLength +
                    65535) >>>
                  16;
                try {
                  (Zt.grow(o), Ke());
                  var f = 1;
                  break t;
                } catch {}
                f = void 0;
              }
              if (f) return !0;
            }
            return !1;
          },
          kb: function () {
            return R ? R.handle : 0;
          },
          vb: (t, e) => {
            var r = 0;
            return (
              Cr().forEach(function (a, o) {
                var f = e + r;
                for (o = U[(t + 4 * o) >> 2] = f, f = 0; f < a.length; ++f)
                  dt[o++ >> 0] = a.charCodeAt(f);
                ((dt[o >> 0] = 0), (r += a.length + 1));
              }),
              0
            );
          },
          wb: (t, e) => {
            var r = Cr();
            U[t >> 2] = r.length;
            var a = 0;
            return (
              r.forEach(function (o) {
                a += o.length + 1;
              }),
              (U[e >> 2] = a),
              0
            );
          },
          J: () => 52,
          lb: function () {
            return 52;
          },
          Bb: () => 52,
          ob: function () {
            return 70;
          },
          P: (t, e, r, a) => {
            for (var o = 0, f = 0; f < r; f++) {
              var l = U[e >> 2],
                s = U[(e + 4) >> 2];
              e += 8;
              for (var h = 0; h < s; h++) {
                var _ = I[l + h],
                  b = bn[t];
                _ === 0 || _ === 10 ? ((t === 1 ? $r : bt)(Tt(b, 0)), (b.length = 0)) : b.push(_);
              }
              o += s;
            }
            return ((U[a >> 2] = o), 0);
          },
          $: function (t) {
            p.activeTexture(t);
          },
          aa: function (t, e) {
            p.attachShader(ft[t], lt[e]);
          },
          ba: function (t, e, r) {
            p.bindAttribLocation(ft[t], e, r ? Tt(I, r) : "");
          },
          ca: function (t, e) {
            (t == 35051 ? (p.se = e) : t == 35052 && (p.Zd = e), p.bindBuffer(t, le[e]));
          },
          _: function (t, e) {
            p.bindFramebuffer(t, se[e]);
          },
          ac: function (t, e) {
            p.bindRenderbuffer(t, zt[e]);
          },
          Mb: function (t, e) {
            p.bindSampler(t, kt[e]);
          },
          da: function (t, e) {
            p.bindTexture(t, et[e]);
          },
          uc: wr,
          xc: wr,
          ea: function (t, e, r, a) {
            p.blendColor(t, e, r, a);
          },
          fa: function (t) {
            p.blendEquation(t);
          },
          ga: function (t, e) {
            p.blendFunc(t, e);
          },
          Wb: function (t, e, r, a, o, f, l, s, h, _) {
            p.blitFramebuffer(t, e, r, a, o, f, l, s, h, _);
          },
          ha: function (t, e, r, a) {
            2 <= R.version
              ? r && e
                ? p.bufferData(t, I, a, r, e)
                : p.bufferData(t, e, a)
              : p.bufferData(t, r ? I.subarray(r, r + e) : e, a);
          },
          ia: function (t, e, r, a) {
            2 <= R.version
              ? r && p.bufferSubData(t, e, I, a, r)
              : p.bufferSubData(t, e, I.subarray(a, a + r));
          },
          bc: function (t) {
            return p.checkFramebufferStatus(t);
          },
          N: function (t) {
            p.clear(t);
          },
          Z: function (t, e, r, a) {
            p.clearColor(t, e, r, a);
          },
          O: function (t) {
            p.clearStencil(t);
          },
          rb: function (t, e, r, a) {
            return p.clientWaitSync(xt[t], e, (r >>> 0) + 4294967296 * a);
          },
          ja: function (t, e, r, a) {
            p.colorMask(!!t, !!e, !!r, !!a);
          },
          ka: function (t) {
            p.compileShader(lt[t]);
          },
          la: function (t, e, r, a, o, f, l, s) {
            2 <= R.version
              ? p.Zd || !l
                ? p.compressedTexImage2D(t, e, r, a, o, f, l, s)
                : p.compressedTexImage2D(t, e, r, a, o, f, I, s, l)
              : p.compressedTexImage2D(t, e, r, a, o, f, s ? I.subarray(s, s + l) : null);
          },
          ma: function (t, e, r, a, o, f, l, s, h) {
            2 <= R.version
              ? p.Zd || !s
                ? p.compressedTexSubImage2D(t, e, r, a, o, f, l, s, h)
                : p.compressedTexSubImage2D(t, e, r, a, o, f, l, I, h, s)
              : p.compressedTexSubImage2D(t, e, r, a, o, f, l, h ? I.subarray(h, h + s) : null);
          },
          Ub: function (t, e, r, a, o) {
            p.copyBufferSubData(t, e, r, a, o);
          },
          na: function (t, e, r, a, o, f, l, s) {
            p.copyTexSubImage2D(t, e, r, a, o, f, l, s);
          },
          oa: function () {
            var t = Bt(ft),
              e = p.createProgram();
            return ((e.name = t), (e.oe = e.me = e.ne = 0), (e.xe = 1), (ft[t] = e), t);
          },
          pa: function (t) {
            var e = Bt(lt);
            return ((lt[e] = p.createShader(t)), e);
          },
          qa: function (t) {
            p.cullFace(t);
          },
          ra: function (t, e) {
            for (var r = 0; r < t; r++) {
              var a = C[(e + 4 * r) >> 2],
                o = le[a];
              o &&
                (p.deleteBuffer(o),
                (o.name = 0),
                (le[a] = null),
                a == p.se && (p.se = 0),
                a == p.Zd && (p.Zd = 0));
            }
          },
          cc: function (t, e) {
            for (var r = 0; r < t; ++r) {
              var a = C[(e + 4 * r) >> 2],
                o = se[a];
              o && (p.deleteFramebuffer(o), (o.name = 0), (se[a] = null));
            }
          },
          sa: function (t) {
            if (t) {
              var e = ft[t];
              e ? (p.deleteProgram(e), (e.name = 0), (ft[t] = null)) : j(1281);
            }
          },
          dc: function (t, e) {
            for (var r = 0; r < t; r++) {
              var a = C[(e + 4 * r) >> 2],
                o = zt[a];
              o && (p.deleteRenderbuffer(o), (o.name = 0), (zt[a] = null));
            }
          },
          Nb: function (t, e) {
            for (var r = 0; r < t; r++) {
              var a = C[(e + 4 * r) >> 2],
                o = kt[a];
              o && (p.deleteSampler(o), (o.name = 0), (kt[a] = null));
            }
          },
          ta: function (t) {
            if (t) {
              var e = lt[t];
              e ? (p.deleteShader(e), (lt[t] = null)) : j(1281);
            }
          },
          Vb: function (t) {
            if (t) {
              var e = xt[t];
              e ? (p.deleteSync(e), (e.name = 0), (xt[t] = null)) : j(1281);
            }
          },
          ua: function (t, e) {
            for (var r = 0; r < t; r++) {
              var a = C[(e + 4 * r) >> 2],
                o = et[a];
              o && (p.deleteTexture(o), (o.name = 0), (et[a] = null));
            }
          },
          vc: Sr,
          yc: Sr,
          va: function (t) {
            p.depthMask(!!t);
          },
          wa: function (t) {
            p.disable(t);
          },
          xa: function (t) {
            p.disableVertexAttribArray(t);
          },
          ya: function (t, e, r) {
            p.drawArrays(t, e, r);
          },
          sc: function (t, e, r, a) {
            p.drawArraysInstanced(t, e, r, a);
          },
          qc: function (t, e, r, a, o) {
            p.ze.drawArraysInstancedBaseInstanceWEBGL(t, e, r, a, o);
          },
          oc: function (t, e) {
            for (var r = he[t], a = 0; a < t; a++) r[a] = C[(e + 4 * a) >> 2];
            p.drawBuffers(r);
          },
          za: Tr,
          tc: function (t, e, r, a, o) {
            p.drawElementsInstanced(t, e, r, a, o);
          },
          rc: function (t, e, r, a, o, f, l) {
            p.ze.drawElementsInstancedBaseVertexBaseInstanceWEBGL(t, e, r, a, o, f, l);
          },
          ic: function (t, e, r, a, o, f) {
            Tr(t, a, o, f);
          },
          Aa: function (t) {
            p.enable(t);
          },
          Ba: function (t) {
            p.enableVertexAttribArray(t);
          },
          Sb: function (t, e) {
            return (t = p.fenceSync(t, e)) ? ((e = Bt(xt)), (t.name = e), (xt[e] = t), e) : 0;
          },
          Ca: function () {
            p.finish();
          },
          Da: function () {
            p.flush();
          },
          ec: function (t, e, r, a) {
            p.framebufferRenderbuffer(t, e, r, zt[a]);
          },
          fc: function (t, e, r, a, o) {
            p.framebufferTexture2D(t, e, r, et[a], o);
          },
          Ea: function (t) {
            p.frontFace(t);
          },
          Fa: function (t, e) {
            Gt(t, e, "createBuffer", le);
          },
          gc: function (t, e) {
            Gt(t, e, "createFramebuffer", se);
          },
          hc: function (t, e) {
            Gt(t, e, "createRenderbuffer", zt);
          },
          Ob: function (t, e) {
            Gt(t, e, "createSampler", kt);
          },
          Ga: function (t, e) {
            Gt(t, e, "createTexture", et);
          },
          wc: Fr,
          zc: Fr,
          Yb: function (t) {
            p.generateMipmap(t);
          },
          Ha: function (t, e, r) {
            r ? (C[r >> 2] = p.getBufferParameter(t, e)) : j(1281);
          },
          Ia: function () {
            var t = p.getError() || de;
            return ((de = 0), t);
          },
          Ja: function (t, e) {
            kr(t, e, 2);
          },
          Zb: function (t, e, r, a) {
            ((t = p.getFramebufferAttachmentParameter(t, e, r)),
              (t instanceof WebGLRenderbuffer || t instanceof WebGLTexture) && (t = t.name | 0),
              (C[a >> 2] = t));
          },
          I: function (t, e) {
            kr(t, e, 0);
          },
          Ka: function (t, e, r, a) {
            ((t = p.getProgramInfoLog(ft[t])),
              t === null && (t = "(unknown error)"),
              (e = 0 < e && a ? it(t, I, a, e) : 0),
              r && (C[r >> 2] = e));
          },
          La: function (t, e, r) {
            if (r)
              if (t >= _r) j(1281);
              else if (((t = ft[t]), e == 35716))
                ((t = p.getProgramInfoLog(t)),
                  t === null && (t = "(unknown error)"),
                  (C[r >> 2] = t.length + 1));
              else if (e == 35719) {
                if (!t.oe)
                  for (e = 0; e < p.getProgramParameter(t, 35718); ++e)
                    t.oe = Math.max(t.oe, p.getActiveUniform(t, e).name.length + 1);
                C[r >> 2] = t.oe;
              } else if (e == 35722) {
                if (!t.me)
                  for (e = 0; e < p.getProgramParameter(t, 35721); ++e)
                    t.me = Math.max(t.me, p.getActiveAttrib(t, e).name.length + 1);
                C[r >> 2] = t.me;
              } else if (e == 35381) {
                if (!t.ne)
                  for (e = 0; e < p.getProgramParameter(t, 35382); ++e)
                    t.ne = Math.max(t.ne, p.getActiveUniformBlockName(t, e).length + 1);
                C[r >> 2] = t.ne;
              } else C[r >> 2] = p.getProgramParameter(t, e);
            else j(1281);
          },
          _b: function (t, e, r) {
            r ? (C[r >> 2] = p.getRenderbufferParameter(t, e)) : j(1281);
          },
          Ma: function (t, e, r, a) {
            ((t = p.getShaderInfoLog(lt[t])),
              t === null && (t = "(unknown error)"),
              (e = 0 < e && a ? it(t, I, a, e) : 0),
              r && (C[r >> 2] = e));
          },
          Jb: function (t, e, r, a) {
            ((t = p.getShaderPrecisionFormat(t, e)),
              (C[r >> 2] = t.rangeMin),
              (C[(r + 4) >> 2] = t.rangeMax),
              (C[a >> 2] = t.precision));
          },
          Na: function (t, e, r) {
            r
              ? e == 35716
                ? ((t = p.getShaderInfoLog(lt[t])),
                  t === null && (t = "(unknown error)"),
                  (C[r >> 2] = t ? t.length + 1 : 0))
                : e == 35720
                  ? ((t = p.getShaderSource(lt[t])), (C[r >> 2] = t ? t.length + 1 : 0))
                  : (C[r >> 2] = p.getShaderParameter(lt[t], e))
              : j(1281);
          },
          M: function (t) {
            var e = br[t];
            if (!e) {
              switch (t) {
                case 7939:
                  ((e = p.getSupportedExtensions() || []),
                    (e = e.concat(
                      e.map(function (a) {
                        return "GL_" + a;
                      }),
                    )),
                    (e = Jt(e.join(" "))));
                  break;
                case 7936:
                case 7937:
                case 37445:
                case 37446:
                  ((e = p.getParameter(t)) || j(1280), (e = e && Jt(e)));
                  break;
                case 7938:
                  ((e = p.getParameter(7938)),
                    (e =
                      2 <= R.version ? "OpenGL ES 3.0 (" + e + ")" : "OpenGL ES 2.0 (" + e + ")"),
                    (e = Jt(e)));
                  break;
                case 35724:
                  e = p.getParameter(35724);
                  var r = e.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                  (r !== null &&
                    (r[1].length == 3 && (r[1] += "0"),
                    (e = "OpenGL ES GLSL ES " + r[1] + " (" + e + ")")),
                    (e = Jt(e)));
                  break;
                default:
                  j(1280);
              }
              br[t] = e;
            }
            return e;
          },
          ib: function (t, e) {
            if (2 > R.version) return (j(1282), 0);
            var r = Pr[t];
            if (r) return 0 > e || e >= r.length ? (j(1281), 0) : r[e];
            switch (t) {
              case 7939:
                return (
                  (r = p.getSupportedExtensions() || []),
                  (r = r.concat(
                    r.map(function (a) {
                      return "GL_" + a;
                    }),
                  )),
                  (r = r.map(function (a) {
                    return Jt(a);
                  })),
                  (r = Pr[t] = r),
                  0 > e || e >= r.length ? (j(1281), 0) : r[e]
                );
              default:
                return (j(1280), 0);
            }
          },
          Oa: function (t, e) {
            if (((e = e ? Tt(I, e) : ""), (t = ft[t]))) {
              var r = t,
                a = r.fe,
                o = r.He,
                f;
              if (!a)
                for (r.fe = a = {}, r.Ge = {}, f = 0; f < p.getProgramParameter(r, 35718); ++f) {
                  var l = p.getActiveUniform(r, f),
                    s = l.name;
                  l = l.size;
                  var h = xr(s);
                  h = 0 < h ? s.slice(0, h) : s;
                  var _ = r.xe;
                  for (r.xe += l, o[h] = [l, _], s = 0; s < l; ++s) ((a[_] = s), (r.Ge[_++] = h));
                }
              if (
                ((r = t.fe),
                (a = 0),
                (o = e),
                (f = xr(e)),
                0 < f && ((a = parseInt(e.slice(f + 1)) >>> 0), (o = e.slice(0, f))),
                (o = t.He[o]) &&
                  a < o[0] &&
                  ((a += o[1]), (r[a] = r[a] || p.getUniformLocation(t, e))))
              )
                return a;
            } else j(1281);
            return -1;
          },
          Kb: function (t, e, r) {
            for (var a = he[e], o = 0; o < e; o++) a[o] = C[(r + 4 * o) >> 2];
            p.invalidateFramebuffer(t, a);
          },
          Lb: function (t, e, r, a, o, f, l) {
            for (var s = he[e], h = 0; h < e; h++) s[h] = C[(r + 4 * h) >> 2];
            p.invalidateSubFramebuffer(t, s, a, o, f, l);
          },
          Tb: function (t) {
            return p.isSync(xt[t]);
          },
          Pa: function (t) {
            return (t = et[t]) ? p.isTexture(t) : 0;
          },
          Qa: function (t) {
            p.lineWidth(t);
          },
          Ra: function (t) {
            ((t = ft[t]), p.linkProgram(t), (t.fe = 0), (t.He = {}));
          },
          mc: function (t, e, r, a, o, f) {
            p.De.multiDrawArraysInstancedBaseInstanceWEBGL(
              t,
              C,
              e >> 2,
              C,
              r >> 2,
              C,
              a >> 2,
              U,
              o >> 2,
              f,
            );
          },
          nc: function (t, e, r, a, o, f, l, s) {
            p.De.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(
              t,
              C,
              e >> 2,
              r,
              C,
              a >> 2,
              C,
              o >> 2,
              C,
              f >> 2,
              U,
              l >> 2,
              s,
            );
          },
          Sa: function (t, e) {
            (t == 3317 && (Ar = e), p.pixelStorei(t, e));
          },
          pc: function (t) {
            p.readBuffer(t);
          },
          Ta: function (t, e, r, a, o, f, l) {
            if (2 <= R.version)
              if (p.se) p.readPixels(t, e, r, a, o, f, l);
              else {
                var s = pe(f);
                p.readPixels(t, e, r, a, o, f, s, l >> (31 - Math.clz32(s.BYTES_PER_ELEMENT)));
              }
            else (l = Be(f, o, r, a, l)) ? p.readPixels(t, e, r, a, o, f, l) : j(1280);
          },
          $b: function (t, e, r, a) {
            p.renderbufferStorage(t, e, r, a);
          },
          Xb: function (t, e, r, a, o) {
            p.renderbufferStorageMultisample(t, e, r, a, o);
          },
          Pb: function (t, e, r) {
            p.samplerParameterf(kt[t], e, r);
          },
          Qb: function (t, e, r) {
            p.samplerParameteri(kt[t], e, r);
          },
          Rb: function (t, e, r) {
            p.samplerParameteri(kt[t], e, C[r >> 2]);
          },
          Ua: function (t, e, r, a) {
            p.scissor(t, e, r, a);
          },
          Va: function (t, e, r, a) {
            for (var o = "", f = 0; f < e; ++f) {
              var l = a ? C[(a + 4 * f) >> 2] : -1,
                s = C[(r + 4 * f) >> 2];
              ((l = s ? Tt(I, s, 0 > l ? void 0 : l) : ""), (o += l));
            }
            p.shaderSource(lt[t], o);
          },
          Wa: function (t, e, r) {
            p.stencilFunc(t, e, r);
          },
          Xa: function (t, e, r, a) {
            p.stencilFuncSeparate(t, e, r, a);
          },
          Ya: function (t) {
            p.stencilMask(t);
          },
          Za: function (t, e) {
            p.stencilMaskSeparate(t, e);
          },
          _a: function (t, e, r) {
            p.stencilOp(t, e, r);
          },
          $a: function (t, e, r, a) {
            p.stencilOpSeparate(t, e, r, a);
          },
          ab: function (t, e, r, a, o, f, l, s, h) {
            if (2 <= R.version)
              if (p.Zd) p.texImage2D(t, e, r, a, o, f, l, s, h);
              else if (h) {
                var _ = pe(s);
                p.texImage2D(
                  t,
                  e,
                  r,
                  a,
                  o,
                  f,
                  l,
                  s,
                  _,
                  h >> (31 - Math.clz32(_.BYTES_PER_ELEMENT)),
                );
              } else p.texImage2D(t, e, r, a, o, f, l, s, null);
            else p.texImage2D(t, e, r, a, o, f, l, s, h ? Be(s, l, a, o, h) : null);
          },
          bb: function (t, e, r) {
            p.texParameterf(t, e, r);
          },
          cb: function (t, e, r) {
            p.texParameterf(t, e, F[r >> 2]);
          },
          db: function (t, e, r) {
            p.texParameteri(t, e, r);
          },
          eb: function (t, e, r) {
            p.texParameteri(t, e, C[r >> 2]);
          },
          jc: function (t, e, r, a, o) {
            p.texStorage2D(t, e, r, a, o);
          },
          fb: function (t, e, r, a, o, f, l, s, h) {
            if (2 <= R.version)
              if (p.Zd) p.texSubImage2D(t, e, r, a, o, f, l, s, h);
              else if (h) {
                var _ = pe(s);
                p.texSubImage2D(
                  t,
                  e,
                  r,
                  a,
                  o,
                  f,
                  l,
                  s,
                  _,
                  h >> (31 - Math.clz32(_.BYTES_PER_ELEMENT)),
                );
              } else p.texSubImage2D(t, e, r, a, o, f, l, s, null);
            else
              ((_ = null),
                h && (_ = Be(s, l, o, f, h)),
                p.texSubImage2D(t, e, r, a, o, f, l, s, _));
          },
          gb: function (t, e) {
            p.uniform1f(L(t), e);
          },
          hb: function (t, e, r) {
            if (2 <= R.version) e && p.uniform1fv(L(t), F, r >> 2, e);
            else {
              if (288 >= e) for (var a = Et[e - 1], o = 0; o < e; ++o) a[o] = F[(r + 4 * o) >> 2];
              else a = F.subarray(r >> 2, (r + 4 * e) >> 2);
              p.uniform1fv(L(t), a);
            }
          },
          Uc: function (t, e) {
            p.uniform1i(L(t), e);
          },
          Vc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform1iv(L(t), C, r >> 2, e);
            else {
              if (288 >= e) for (var a = Kt[e - 1], o = 0; o < e; ++o) a[o] = C[(r + 4 * o) >> 2];
              else a = C.subarray(r >> 2, (r + 4 * e) >> 2);
              p.uniform1iv(L(t), a);
            }
          },
          Wc: function (t, e, r) {
            p.uniform2f(L(t), e, r);
          },
          Xc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform2fv(L(t), F, r >> 2, 2 * e);
            else {
              if (144 >= e)
                for (var a = Et[2 * e - 1], o = 0; o < 2 * e; o += 2)
                  ((a[o] = F[(r + 4 * o) >> 2]), (a[o + 1] = F[(r + (4 * o + 4)) >> 2]));
              else a = F.subarray(r >> 2, (r + 8 * e) >> 2);
              p.uniform2fv(L(t), a);
            }
          },
          Tc: function (t, e, r) {
            p.uniform2i(L(t), e, r);
          },
          Sc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform2iv(L(t), C, r >> 2, 2 * e);
            else {
              if (144 >= e)
                for (var a = Kt[2 * e - 1], o = 0; o < 2 * e; o += 2)
                  ((a[o] = C[(r + 4 * o) >> 2]), (a[o + 1] = C[(r + (4 * o + 4)) >> 2]));
              else a = C.subarray(r >> 2, (r + 8 * e) >> 2);
              p.uniform2iv(L(t), a);
            }
          },
          Rc: function (t, e, r, a) {
            p.uniform3f(L(t), e, r, a);
          },
          Qc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform3fv(L(t), F, r >> 2, 3 * e);
            else {
              if (96 >= e)
                for (var a = Et[3 * e - 1], o = 0; o < 3 * e; o += 3)
                  ((a[o] = F[(r + 4 * o) >> 2]),
                    (a[o + 1] = F[(r + (4 * o + 4)) >> 2]),
                    (a[o + 2] = F[(r + (4 * o + 8)) >> 2]));
              else a = F.subarray(r >> 2, (r + 12 * e) >> 2);
              p.uniform3fv(L(t), a);
            }
          },
          Pc: function (t, e, r, a) {
            p.uniform3i(L(t), e, r, a);
          },
          Oc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform3iv(L(t), C, r >> 2, 3 * e);
            else {
              if (96 >= e)
                for (var a = Kt[3 * e - 1], o = 0; o < 3 * e; o += 3)
                  ((a[o] = C[(r + 4 * o) >> 2]),
                    (a[o + 1] = C[(r + (4 * o + 4)) >> 2]),
                    (a[o + 2] = C[(r + (4 * o + 8)) >> 2]));
              else a = C.subarray(r >> 2, (r + 12 * e) >> 2);
              p.uniform3iv(L(t), a);
            }
          },
          Nc: function (t, e, r, a, o) {
            p.uniform4f(L(t), e, r, a, o);
          },
          Mc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform4fv(L(t), F, r >> 2, 4 * e);
            else {
              if (72 >= e) {
                var a = Et[4 * e - 1],
                  o = F;
                r >>= 2;
                for (var f = 0; f < 4 * e; f += 4) {
                  var l = r + f;
                  ((a[f] = o[l]),
                    (a[f + 1] = o[l + 1]),
                    (a[f + 2] = o[l + 2]),
                    (a[f + 3] = o[l + 3]));
                }
              } else a = F.subarray(r >> 2, (r + 16 * e) >> 2);
              p.uniform4fv(L(t), a);
            }
          },
          Ac: function (t, e, r, a, o) {
            p.uniform4i(L(t), e, r, a, o);
          },
          Bc: function (t, e, r) {
            if (2 <= R.version) e && p.uniform4iv(L(t), C, r >> 2, 4 * e);
            else {
              if (72 >= e)
                for (var a = Kt[4 * e - 1], o = 0; o < 4 * e; o += 4)
                  ((a[o] = C[(r + 4 * o) >> 2]),
                    (a[o + 1] = C[(r + (4 * o + 4)) >> 2]),
                    (a[o + 2] = C[(r + (4 * o + 8)) >> 2]),
                    (a[o + 3] = C[(r + (4 * o + 12)) >> 2]));
              else a = C.subarray(r >> 2, (r + 16 * e) >> 2);
              p.uniform4iv(L(t), a);
            }
          },
          Cc: function (t, e, r, a) {
            if (2 <= R.version) e && p.uniformMatrix2fv(L(t), !!r, F, a >> 2, 4 * e);
            else {
              if (72 >= e)
                for (var o = Et[4 * e - 1], f = 0; f < 4 * e; f += 4)
                  ((o[f] = F[(a + 4 * f) >> 2]),
                    (o[f + 1] = F[(a + (4 * f + 4)) >> 2]),
                    (o[f + 2] = F[(a + (4 * f + 8)) >> 2]),
                    (o[f + 3] = F[(a + (4 * f + 12)) >> 2]));
              else o = F.subarray(a >> 2, (a + 16 * e) >> 2);
              p.uniformMatrix2fv(L(t), !!r, o);
            }
          },
          Dc: function (t, e, r, a) {
            if (2 <= R.version) e && p.uniformMatrix3fv(L(t), !!r, F, a >> 2, 9 * e);
            else {
              if (32 >= e)
                for (var o = Et[9 * e - 1], f = 0; f < 9 * e; f += 9)
                  ((o[f] = F[(a + 4 * f) >> 2]),
                    (o[f + 1] = F[(a + (4 * f + 4)) >> 2]),
                    (o[f + 2] = F[(a + (4 * f + 8)) >> 2]),
                    (o[f + 3] = F[(a + (4 * f + 12)) >> 2]),
                    (o[f + 4] = F[(a + (4 * f + 16)) >> 2]),
                    (o[f + 5] = F[(a + (4 * f + 20)) >> 2]),
                    (o[f + 6] = F[(a + (4 * f + 24)) >> 2]),
                    (o[f + 7] = F[(a + (4 * f + 28)) >> 2]),
                    (o[f + 8] = F[(a + (4 * f + 32)) >> 2]));
              else o = F.subarray(a >> 2, (a + 36 * e) >> 2);
              p.uniformMatrix3fv(L(t), !!r, o);
            }
          },
          Ec: function (t, e, r, a) {
            if (2 <= R.version) e && p.uniformMatrix4fv(L(t), !!r, F, a >> 2, 16 * e);
            else {
              if (18 >= e) {
                var o = Et[16 * e - 1],
                  f = F;
                a >>= 2;
                for (var l = 0; l < 16 * e; l += 16) {
                  var s = a + l;
                  ((o[l] = f[s]),
                    (o[l + 1] = f[s + 1]),
                    (o[l + 2] = f[s + 2]),
                    (o[l + 3] = f[s + 3]),
                    (o[l + 4] = f[s + 4]),
                    (o[l + 5] = f[s + 5]),
                    (o[l + 6] = f[s + 6]),
                    (o[l + 7] = f[s + 7]),
                    (o[l + 8] = f[s + 8]),
                    (o[l + 9] = f[s + 9]),
                    (o[l + 10] = f[s + 10]),
                    (o[l + 11] = f[s + 11]),
                    (o[l + 12] = f[s + 12]),
                    (o[l + 13] = f[s + 13]),
                    (o[l + 14] = f[s + 14]),
                    (o[l + 15] = f[s + 15]));
                }
              } else o = F.subarray(a >> 2, (a + 64 * e) >> 2);
              p.uniformMatrix4fv(L(t), !!r, o);
            }
          },
          Fc: function (t) {
            ((t = ft[t]), p.useProgram(t), (p.Re = t));
          },
          Gc: function (t, e) {
            p.vertexAttrib1f(t, e);
          },
          Hc: function (t, e) {
            p.vertexAttrib2f(t, F[e >> 2], F[(e + 4) >> 2]);
          },
          Ic: function (t, e) {
            p.vertexAttrib3f(t, F[e >> 2], F[(e + 4) >> 2], F[(e + 8) >> 2]);
          },
          Jc: function (t, e) {
            p.vertexAttrib4f(t, F[e >> 2], F[(e + 4) >> 2], F[(e + 8) >> 2], F[(e + 12) >> 2]);
          },
          kc: function (t, e) {
            p.vertexAttribDivisor(t, e);
          },
          lc: function (t, e, r, a, o) {
            p.vertexAttribIPointer(t, e, r, a, o);
          },
          Kc: function (t, e, r, a, o, f) {
            p.vertexAttribPointer(t, e, r, !!a, o, f);
          },
          Lc: function (t, e, r, a) {
            p.viewport(t, e, r, a);
          },
          qb: function (t, e, r, a) {
            p.waitSync(xt[t], e, (r >>> 0) + 4294967296 * a);
          },
          W: xn,
          F: Tn,
          E: Mn,
          X: Fn,
          Ib: Bn,
          V: In,
          U: Gn,
          A: Dn,
          B: Rn,
          D: kn,
          L: Sn,
          sb: (t, e, r, a) => An(t, e, r, a),
        };
        (function () {
          function t(r) {
            if (
              ((B = r = r.exports),
              (Zt = B.Yc),
              Ke(),
              (X = B._c),
              qe.unshift(B.Zc),
              St--,
              v.monitorRunDependencies && v.monitorRunDependencies(St),
              St == 0 && Ut)
            ) {
              var a = Ut;
              ((Ut = null), a());
            }
            return r;
          }
          var e = { a: wn };
          if ((St++, v.monitorRunDependencies && v.monitorRunDependencies(St), v.instantiateWasm))
            try {
              return v.instantiateWasm(e, t);
            } catch (r) {
              (bt("Module.instantiateWasm callback failed with error: " + r), Qt(r));
            }
          return (
            Yr(e, function (r) {
              t(r.instance);
            }).catch(Qt),
            {}
          );
        })();
        var vt = (v._free = (t) => (vt = v._free = B.$c)(t)),
          ge = (v._malloc = (t) => (ge = v._malloc = B.ad)(t)),
          Dr = (t) => (Dr = B.bd)(t);
        v.__embind_initialize_bindings = () => (v.__embind_initialize_bindings = B.cd)();
        var rt = (t, e) => (rt = B.dd)(t, e),
          nt = () => (nt = B.ed)(),
          at = (t) => (at = B.fd)(t);
        ((v.dynCall_viji = (t, e, r, a, o) => (v.dynCall_viji = B.gd)(t, e, r, a, o)),
          (v.dynCall_vijiii = (t, e, r, a, o, f, l) =>
            (v.dynCall_vijiii = B.hd)(t, e, r, a, o, f, l)),
          (v.dynCall_viiiiij = (t, e, r, a, o, f, l, s) =>
            (v.dynCall_viiiiij = B.id)(t, e, r, a, o, f, l, s)),
          (v.dynCall_jii = (t, e, r) => (v.dynCall_jii = B.jd)(t, e, r)),
          (v.dynCall_vij = (t, e, r, a) => (v.dynCall_vij = B.kd)(t, e, r, a)),
          (v.dynCall_iiij = (t, e, r, a, o) => (v.dynCall_iiij = B.ld)(t, e, r, a, o)),
          (v.dynCall_iiiij = (t, e, r, a, o, f) => (v.dynCall_iiiij = B.md)(t, e, r, a, o, f)),
          (v.dynCall_viij = (t, e, r, a, o) => (v.dynCall_viij = B.nd)(t, e, r, a, o)),
          (v.dynCall_viiij = (t, e, r, a, o, f) => (v.dynCall_viiij = B.od)(t, e, r, a, o, f)),
          (v.dynCall_ji = (t, e) => (v.dynCall_ji = B.pd)(t, e)),
          (v.dynCall_iij = (t, e, r, a) => (v.dynCall_iij = B.qd)(t, e, r, a)),
          (v.dynCall_jiiiiii = (t, e, r, a, o, f, l) =>
            (v.dynCall_jiiiiii = B.rd)(t, e, r, a, o, f, l)),
          (v.dynCall_jiiiiji = (t, e, r, a, o, f, l, s) =>
            (v.dynCall_jiiiiji = B.sd)(t, e, r, a, o, f, l, s)),
          (v.dynCall_iijj = (t, e, r, a, o, f) => (v.dynCall_iijj = B.td)(t, e, r, a, o, f)),
          (v.dynCall_iiiji = (t, e, r, a, o, f) => (v.dynCall_iiiji = B.ud)(t, e, r, a, o, f)),
          (v.dynCall_iiji = (t, e, r, a, o) => (v.dynCall_iiji = B.vd)(t, e, r, a, o)),
          (v.dynCall_iijjiii = (t, e, r, a, o, f, l, s, h) =>
            (v.dynCall_iijjiii = B.wd)(t, e, r, a, o, f, l, s, h)),
          (v.dynCall_vijjjii = (t, e, r, a, o, f, l, s, h, _) =>
            (v.dynCall_vijjjii = B.xd)(t, e, r, a, o, f, l, s, h, _)),
          (v.dynCall_jiji = (t, e, r, a, o) => (v.dynCall_jiji = B.yd)(t, e, r, a, o)),
          (v.dynCall_viijii = (t, e, r, a, o, f, l) =>
            (v.dynCall_viijii = B.zd)(t, e, r, a, o, f, l)),
          (v.dynCall_iiiiij = (t, e, r, a, o, f, l) =>
            (v.dynCall_iiiiij = B.Ad)(t, e, r, a, o, f, l)),
          (v.dynCall_iiiiijj = (t, e, r, a, o, f, l, s, h) =>
            (v.dynCall_iiiiijj = B.Bd)(t, e, r, a, o, f, l, s, h)),
          (v.dynCall_iiiiiijj = (t, e, r, a, o, f, l, s, h, _) =>
            (v.dynCall_iiiiiijj = B.Cd)(t, e, r, a, o, f, l, s, h, _)));
        function Sn(t, e, r, a, o) {
          var f = nt();
          try {
            X.get(t)(e, r, a, o);
          } catch (l) {
            if ((at(f), l !== l + 0)) throw l;
            rt(1, 0);
          }
        }
        function Tn(t, e, r) {
          var a = nt();
          try {
            return X.get(t)(e, r);
          } catch (o) {
            if ((at(a), o !== o + 0)) throw o;
            rt(1, 0);
          }
        }
        function Fn(t, e, r, a, o) {
          var f = nt();
          try {
            return X.get(t)(e, r, a, o);
          } catch (l) {
            if ((at(f), l !== l + 0)) throw l;
            rt(1, 0);
          }
        }
        function kn(t, e, r, a) {
          var o = nt();
          try {
            X.get(t)(e, r, a);
          } catch (f) {
            if ((at(o), f !== f + 0)) throw f;
            rt(1, 0);
          }
        }
        function xn(t, e) {
          var r = nt();
          try {
            return X.get(t)(e);
          } catch (a) {
            if ((at(r), a !== a + 0)) throw a;
            rt(1, 0);
          }
        }
        function Mn(t, e, r, a) {
          var o = nt();
          try {
            return X.get(t)(e, r, a);
          } catch (f) {
            if ((at(o), f !== f + 0)) throw f;
            rt(1, 0);
          }
        }
        function Rn(t, e, r) {
          var a = nt();
          try {
            X.get(t)(e, r);
          } catch (o) {
            if ((at(a), o !== o + 0)) throw o;
            rt(1, 0);
          }
        }
        function In(t, e, r, a, o, f, l, s, h, _) {
          var b = nt();
          try {
            return X.get(t)(e, r, a, o, f, l, s, h, _);
          } catch (E) {
            if ((at(b), E !== E + 0)) throw E;
            rt(1, 0);
          }
        }
        function Dn(t, e) {
          var r = nt();
          try {
            X.get(t)(e);
          } catch (a) {
            if ((at(r), a !== a + 0)) throw a;
            rt(1, 0);
          }
        }
        function Bn(t, e, r, a, o, f, l) {
          var s = nt();
          try {
            return X.get(t)(e, r, a, o, f, l);
          } catch (h) {
            if ((at(s), h !== h + 0)) throw h;
            rt(1, 0);
          }
        }
        function Gn(t) {
          var e = nt();
          try {
            X.get(t)();
          } catch (r) {
            if ((at(e), r !== r + 0)) throw r;
            rt(1, 0);
          }
        }
        var ve;
        Ut = function t() {
          (ve || Br(), ve || (Ut = t));
        };
        function Br() {
          function t() {
            if (!ve && ((ve = !0), (v.calledRun = !0), !ze)) {
              if ((Ae(qe), Ve(v), v.onRuntimeInitialized && v.onRuntimeInitialized(), v.postRun))
                for (
                  typeof v.postRun == "function" && (v.postRun = [v.postRun]);
                  v.postRun.length;
                ) {
                  var e = v.postRun.shift();
                  Qe.unshift(e);
                }
              Ae(Qe);
            }
          }
          if (!(0 < St)) {
            if (v.preRun)
              for (typeof v.preRun == "function" && (v.preRun = [v.preRun]); v.preRun.length;) Vr();
            (Ae(Xe),
              0 < St ||
                (v.setStatus
                  ? (v.setStatus("Running..."),
                    setTimeout(function () {
                      (setTimeout(function () {
                        v.setStatus("");
                      }, 1),
                        t());
                    }, 1))
                  : t()));
          }
        }
        if (v.preInit)
          for (typeof v.preInit == "function" && (v.preInit = [v.preInit]); 0 < v.preInit.length;)
            v.preInit.pop()();
        return (Br(), $e.ready);
      };
    })();
    typeof be == "object" && typeof wt == "object"
      ? (wt.exports = Oe)
      : typeof define == "function" && define.amd && define([], () => Oe);
  });
const jn = Un();
export { jn as default };
