import { c as b, g as M } from "./react-spline-BQ4JRBpM.js";
function R(y, v) {
  for (var u = 0; u < v.length; u++) {
    const p = v[u];
    if (typeof p != "string" && !Array.isArray(p)) {
      for (const c in p)
        if (c !== "default" && !(c in y)) {
          const f = Object.getOwnPropertyDescriptor(p, c);
          f && Object.defineProperty(y, c, f.get ? f : { enumerable: !0, get: () => p[c] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }));
}
var x = {};
/*! howler.js v2.2.3 | (c) 2013-2020, James Simpson of GoldFire Studios | MIT License | howlerjs.com */ var B;
function H() {
  return (
    B ||
      ((B = 1),
      (function (y) {
        (function () {
          var v = function () {
            this.init();
          };
          v.prototype = {
            init: function () {
              var e = this || u;
              return (
                (e._counter = 1e3),
                (e._html5AudioPool = []),
                (e.html5PoolSize = 10),
                (e._codecs = {}),
                (e._howls = []),
                (e._muted = !1),
                (e._volume = 1),
                (e._canPlayEvent = "canplaythrough"),
                (e._navigator = typeof window < "u" && window.navigator ? window.navigator : null),
                (e.masterGain = null),
                (e.noAudio = !1),
                (e.usingWebAudio = !0),
                (e.autoSuspend = !0),
                (e.ctx = null),
                (e.autoUnlock = !0),
                e._setup(),
                e
              );
            },
            volume: function (e) {
              var n = this || u;
              if (((e = parseFloat(e)), n.ctx || A(), e !== void 0 && e >= 0 && e <= 1)) {
                if (((n._volume = e), n._muted)) return n;
                n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, u.ctx.currentTime);
                for (var t = 0; t < n._howls.length; t++)
                  if (!n._howls[t]._webAudio)
                    for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                      var d = n._howls[t]._soundById(o[r]);
                      d && d._node && (d._node.volume = d._volume * e);
                    }
                return n;
              }
              return n._volume;
            },
            mute: function (e) {
              var n = this || u;
              (n.ctx || A(),
                (n._muted = e),
                n.usingWebAudio &&
                  n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, u.ctx.currentTime));
              for (var t = 0; t < n._howls.length; t++)
                if (!n._howls[t]._webAudio)
                  for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                    var d = n._howls[t]._soundById(o[r]);
                    d && d._node && (d._node.muted = !!e || d._muted);
                  }
              return n;
            },
            stop: function () {
              for (var e = this || u, n = 0; n < e._howls.length; n++) e._howls[n].stop();
              return e;
            },
            unload: function () {
              for (var e = this || u, n = e._howls.length - 1; n >= 0; n--) e._howls[n].unload();
              return (
                e.usingWebAudio &&
                  e.ctx &&
                  e.ctx.close !== void 0 &&
                  (e.ctx.close(), (e.ctx = null), A()),
                e
              );
            },
            codecs: function (e) {
              return (this || u)._codecs[e.replace(/^x-/, "")];
            },
            _setup: function () {
              var e = this || u;
              if (
                ((e.state = (e.ctx && e.ctx.state) || "suspended"),
                e._autoSuspend(),
                !e.usingWebAudio)
              )
                if (typeof Audio < "u")
                  try {
                    var n = new Audio();
                    n.oncanplaythrough === void 0 && (e._canPlayEvent = "canplay");
                  } catch {
                    e.noAudio = !0;
                  }
                else e.noAudio = !0;
              try {
                var n = new Audio();
                n.muted && (e.noAudio = !0);
              } catch {}
              return (e.noAudio || e._setupCodecs(), e);
            },
            _setupCodecs: function () {
              var e = this || u,
                n = null;
              try {
                n = typeof Audio < "u" ? new Audio() : null;
              } catch {
                return e;
              }
              if (!n || typeof n.canPlayType != "function") return e;
              var t = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                o = e._navigator ? e._navigator.userAgent : "",
                r = o.match(/OPR\/([0-6].)/g),
                d = r && parseInt(r[0].split("/")[1], 10) < 33,
                a = o.indexOf("Safari") !== -1 && o.indexOf("Chrome") === -1,
                i = o.match(/Version\/(.*?) /),
                _ = a && i && parseInt(i[1], 10) < 15;
              return (
                (e._codecs = {
                  mp3: !(d || (!t && !n.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                  mpeg: !!t,
                  opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                  ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                  oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                  wav: !!(
                    n.canPlayType('audio/wav; codecs="1"') || n.canPlayType("audio/wav")
                  ).replace(/^no$/, ""),
                  aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
                  caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                  m4a: !!(
                    n.canPlayType("audio/x-m4a;") ||
                    n.canPlayType("audio/m4a;") ||
                    n.canPlayType("audio/aac;")
                  ).replace(/^no$/, ""),
                  m4b: !!(
                    n.canPlayType("audio/x-m4b;") ||
                    n.canPlayType("audio/m4b;") ||
                    n.canPlayType("audio/aac;")
                  ).replace(/^no$/, ""),
                  mp4: !!(
                    n.canPlayType("audio/x-mp4;") ||
                    n.canPlayType("audio/mp4;") ||
                    n.canPlayType("audio/aac;")
                  ).replace(/^no$/, ""),
                  weba: !(_ || !n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                  webm: !(_ || !n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                  dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                  flac: !!(n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")).replace(
                    /^no$/,
                    "",
                  ),
                }),
                e
              );
            },
            _unlockAudio: function () {
              var e = this || u;
              if (!e._audioUnlocked && e.ctx) {
                ((e._audioUnlocked = !1),
                  (e.autoUnlock = !1),
                  e._mobileUnloaded ||
                    e.ctx.sampleRate === 44100 ||
                    ((e._mobileUnloaded = !0), e.unload()),
                  (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050)));
                var n = function (t) {
                  for (; e._html5AudioPool.length < e.html5PoolSize;)
                    try {
                      var o = new Audio();
                      ((o._unlocked = !0), e._releaseHtml5Audio(o));
                    } catch {
                      e.noAudio = !0;
                      break;
                    }
                  for (var r = 0; r < e._howls.length; r++)
                    if (!e._howls[r]._webAudio)
                      for (var d = e._howls[r]._getSoundIds(), a = 0; a < d.length; a++) {
                        var i = e._howls[r]._soundById(d[a]);
                        i &&
                          i._node &&
                          !i._node._unlocked &&
                          ((i._node._unlocked = !0), i._node.load());
                      }
                  e._autoResume();
                  var _ = e.ctx.createBufferSource();
                  ((_.buffer = e._scratchBuffer),
                    _.connect(e.ctx.destination),
                    _.start === void 0 ? _.noteOn(0) : _.start(0),
                    typeof e.ctx.resume == "function" && e.ctx.resume(),
                    (_.onended = function () {
                      (_.disconnect(0),
                        (e._audioUnlocked = !0),
                        document.removeEventListener("touchstart", n, !0),
                        document.removeEventListener("touchend", n, !0),
                        document.removeEventListener("click", n, !0),
                        document.removeEventListener("keydown", n, !0));
                      for (var l = 0; l < e._howls.length; l++) e._howls[l]._emit("unlock");
                    }));
                };
                return (
                  document.addEventListener("touchstart", n, !0),
                  document.addEventListener("touchend", n, !0),
                  document.addEventListener("click", n, !0),
                  document.addEventListener("keydown", n, !0),
                  e
                );
              }
            },
            _obtainHtml5Audio: function () {
              var e = this || u;
              if (e._html5AudioPool.length) return e._html5AudioPool.pop();
              var n = new Audio().play();
              return (
                n &&
                  typeof Promise < "u" &&
                  (n instanceof Promise || typeof n.then == "function") &&
                  n.catch(function () {
                    console.warn(
                      "HTML5 Audio pool exhausted, returning potentially locked audio object.",
                    );
                  }),
                new Audio()
              );
            },
            _releaseHtml5Audio: function (e) {
              var n = this || u;
              return (e._unlocked && n._html5AudioPool.push(e), n);
            },
            _autoSuspend: function () {
              var e = this;
              if (e.autoSuspend && e.ctx && e.ctx.suspend !== void 0 && u.usingWebAudio) {
                for (var n = 0; n < e._howls.length; n++)
                  if (e._howls[n]._webAudio) {
                    for (var t = 0; t < e._howls[n]._sounds.length; t++)
                      if (!e._howls[n]._sounds[t]._paused) return e;
                  }
                return (
                  e._suspendTimer && clearTimeout(e._suspendTimer),
                  (e._suspendTimer = setTimeout(function () {
                    if (e.autoSuspend) {
                      ((e._suspendTimer = null), (e.state = "suspending"));
                      var o = function () {
                        ((e.state = "suspended"),
                          e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume()));
                      };
                      e.ctx.suspend().then(o, o);
                    }
                  }, 3e4)),
                  e
                );
              }
            },
            _autoResume: function () {
              var e = this;
              if (e.ctx && e.ctx.resume !== void 0 && u.usingWebAudio)
                return (
                  e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer
                    ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                    : e.state === "suspended" ||
                        (e.state === "running" && e.ctx.state === "interrupted")
                      ? (e.ctx.resume().then(function () {
                          e.state = "running";
                          for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume");
                        }),
                        e._suspendTimer &&
                          (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                      : e.state === "suspending" && (e._resumeAfterSuspend = !0),
                  e
                );
            },
          };
          var u = new v(),
            p = function (e) {
              var n = this;
              if (!e.src || e.src.length === 0)
                return void console.error(
                  "An array of source files must be passed with any new Howl.",
                );
              n.init(e);
            };
          p.prototype = {
            init: function (e) {
              var n = this;
              return (
                u.ctx || A(),
                (n._autoplay = e.autoplay || !1),
                (n._format = typeof e.format != "string" ? e.format : [e.format]),
                (n._html5 = e.html5 || !1),
                (n._muted = e.mute || !1),
                (n._loop = e.loop || !1),
                (n._pool = e.pool || 5),
                (n._preload =
                  (typeof e.preload != "boolean" && e.preload !== "metadata") || e.preload),
                (n._rate = e.rate || 1),
                (n._sprite = e.sprite || {}),
                (n._src = typeof e.src != "string" ? e.src : [e.src]),
                (n._volume = e.volume !== void 0 ? e.volume : 1),
                (n._xhr = {
                  method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                  headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                  withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
                }),
                (n._duration = 0),
                (n._state = "unloaded"),
                (n._sounds = []),
                (n._endTimers = {}),
                (n._queue = []),
                (n._playLock = !1),
                (n._onend = e.onend ? [{ fn: e.onend }] : []),
                (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
                (n._onload = e.onload ? [{ fn: e.onload }] : []),
                (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
                (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
                (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
                (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
                (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
                (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
                (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
                (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
                (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
                (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
                (n._onresume = []),
                (n._webAudio = u.usingWebAudio && !n._html5),
                u.ctx !== void 0 && u.ctx && u.autoUnlock && u._unlockAudio(),
                u._howls.push(n),
                n._autoplay &&
                  n._queue.push({
                    event: "play",
                    action: function () {
                      n.play();
                    },
                  }),
                n._preload && n._preload !== "none" && n.load(),
                n
              );
            },
            load: function () {
              var e = this,
                n = null;
              if (u.noAudio) return void e._emit("loaderror", null, "No audio support.");
              typeof e._src == "string" && (e._src = [e._src]);
              for (var t = 0; t < e._src.length; t++) {
                var o, r;
                if (e._format && e._format[t]) o = e._format[t];
                else {
                  if (typeof (r = e._src[t]) != "string") {
                    e._emit(
                      "loaderror",
                      null,
                      "Non-string found in selected audio sources - ignoring.",
                    );
                    continue;
                  }
                  ((o = /^data:audio\/([^;,]+);/i.exec(r)),
                    o || (o = /\.([^.]+)$/.exec(r.split("?", 1)[0])),
                    o && (o = o[1].toLowerCase()));
                }
                if (
                  (o ||
                    console.warn(
                      'No file extension was found. Consider using the "format" property or specify an extension.',
                    ),
                  o && u.codecs(o))
                ) {
                  n = e._src[t];
                  break;
                }
              }
              return n
                ? ((e._src = n),
                  (e._state = "loading"),
                  window.location.protocol === "https:" &&
                    n.slice(0, 5) === "http:" &&
                    ((e._html5 = !0), (e._webAudio = !1)),
                  new c(e),
                  e._webAudio && F(e),
                  e)
                : void e._emit("loaderror", null, "No codec support for selected audio sources.");
            },
            play: function (e, n) {
              var t = this,
                o = null;
              if (typeof e == "number") ((o = e), (e = null));
              else {
                if (typeof e == "string" && t._state === "loaded" && !t._sprite[e]) return null;
                if (e === void 0 && ((e = "__default"), !t._playLock)) {
                  for (var r = 0, d = 0; d < t._sounds.length; d++)
                    t._sounds[d]._paused && !t._sounds[d]._ended && (r++, (o = t._sounds[d]._id));
                  r === 1 ? (e = null) : (o = null);
                }
              }
              var a = o ? t._soundById(o) : t._inactiveSound();
              if (!a) return null;
              if ((o && !e && (e = a._sprite || "__default"), t._state !== "loaded")) {
                ((a._sprite = e), (a._ended = !1));
                var i = a._id;
                return (
                  t._queue.push({
                    event: "play",
                    action: function () {
                      t.play(i);
                    },
                  }),
                  i
                );
              }
              if (o && !a._paused) return (n || t._loadQueue("play"), a._id);
              t._webAudio && u._autoResume();
              var _ = Math.max(0, a._seek > 0 ? a._seek : t._sprite[e][0] / 1e3),
                l = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - _),
                m = (1e3 * l) / Math.abs(a._rate),
                h = t._sprite[e][0] / 1e3,
                w = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
              ((a._sprite = e), (a._ended = !1));
              var T = function () {
                ((a._paused = !1),
                  (a._seek = _),
                  (a._start = h),
                  (a._stop = w),
                  (a._loop = !(!a._loop && !t._sprite[e][2])));
              };
              if (_ >= w) return void t._ended(a);
              var s = a._node;
              if (t._webAudio) {
                var I = function () {
                  ((t._playLock = !1), T(), t._refreshBuffer(a));
                  var g = a._muted || t._muted ? 0 : a._volume;
                  (s.gain.setValueAtTime(g, u.ctx.currentTime),
                    (a._playStart = u.ctx.currentTime),
                    s.bufferSource.start === void 0
                      ? a._loop
                        ? s.bufferSource.noteGrainOn(0, _, 86400)
                        : s.bufferSource.noteGrainOn(0, _, l)
                      : a._loop
                        ? s.bufferSource.start(0, _, 86400)
                        : s.bufferSource.start(0, _, l),
                    m !== 1 / 0 && (t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), m)),
                    n ||
                      setTimeout(function () {
                        (t._emit("play", a._id), t._loadQueue());
                      }, 0));
                };
                u.state === "running" && u.ctx.state !== "interrupted"
                  ? I()
                  : ((t._playLock = !0), t.once("resume", I), t._clearTimer(a._id));
              } else {
                var P = function () {
                  ((s.currentTime = _),
                    (s.muted = a._muted || t._muted || u._muted || s.muted),
                    (s.volume = a._volume * u.volume()),
                    (s.playbackRate = a._rate));
                  try {
                    var g = s.play();
                    if (
                      (g &&
                      typeof Promise < "u" &&
                      (g instanceof Promise || typeof g.then == "function")
                        ? ((t._playLock = !0),
                          T(),
                          g
                            .then(function () {
                              ((t._playLock = !1),
                                (s._unlocked = !0),
                                n ? t._loadQueue() : t._emit("play", a._id));
                            })
                            .catch(function () {
                              ((t._playLock = !1),
                                t._emit(
                                  "playerror",
                                  a._id,
                                  "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                                ),
                                (a._ended = !0),
                                (a._paused = !0));
                            }))
                        : n || ((t._playLock = !1), T(), t._emit("play", a._id)),
                      (s.playbackRate = a._rate),
                      s.paused)
                    )
                      return void t._emit(
                        "playerror",
                        a._id,
                        "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.",
                      );
                    e !== "__default" || a._loop
                      ? (t._endTimers[a._id] = setTimeout(t._ended.bind(t, a), m))
                      : ((t._endTimers[a._id] = function () {
                          (t._ended(a), s.removeEventListener("ended", t._endTimers[a._id], !1));
                        }),
                        s.addEventListener("ended", t._endTimers[a._id], !1));
                  } catch (G) {
                    t._emit("playerror", a._id, G);
                  }
                };
                s.src ===
                  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" &&
                  ((s.src = t._src), s.load());
                var C = (window && window.ejecta) || (!s.readyState && u._navigator.isCocoonJS);
                if (s.readyState >= 3 || C) P();
                else {
                  ((t._playLock = !0), (t._state = "loading"));
                  var L = function () {
                    ((t._state = "loaded"), P(), s.removeEventListener(u._canPlayEvent, L, !1));
                  };
                  (s.addEventListener(u._canPlayEvent, L, !1), t._clearTimer(a._id));
                }
              }
              return a._id;
            },
            pause: function (e) {
              var n = this;
              if (n._state !== "loaded" || n._playLock)
                return (
                  n._queue.push({
                    event: "pause",
                    action: function () {
                      n.pause(e);
                    },
                  }),
                  n
                );
              for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
                n._clearTimer(t[o]);
                var r = n._soundById(t[o]);
                if (
                  r &&
                  !r._paused &&
                  ((r._seek = n.seek(t[o])),
                  (r._rateSeek = 0),
                  (r._paused = !0),
                  n._stopFade(t[o]),
                  r._node)
                )
                  if (n._webAudio) {
                    if (!r._node.bufferSource) continue;
                    (r._node.bufferSource.stop === void 0
                      ? r._node.bufferSource.noteOff(0)
                      : r._node.bufferSource.stop(0),
                      n._cleanBuffer(r._node));
                  } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause();
                arguments[1] || n._emit("pause", r ? r._id : null);
              }
              return n;
            },
            stop: function (e, n) {
              var t = this;
              if (t._state !== "loaded" || t._playLock)
                return (
                  t._queue.push({
                    event: "stop",
                    action: function () {
                      t.stop(e);
                    },
                  }),
                  t
                );
              for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
                t._clearTimer(o[r]);
                var d = t._soundById(o[r]);
                d &&
                  ((d._seek = d._start || 0),
                  (d._rateSeek = 0),
                  (d._paused = !0),
                  (d._ended = !0),
                  t._stopFade(o[r]),
                  d._node &&
                    (t._webAudio
                      ? d._node.bufferSource &&
                        (d._node.bufferSource.stop === void 0
                          ? d._node.bufferSource.noteOff(0)
                          : d._node.bufferSource.stop(0),
                        t._cleanBuffer(d._node))
                      : (isNaN(d._node.duration) && d._node.duration !== 1 / 0) ||
                        ((d._node.currentTime = d._start || 0),
                        d._node.pause(),
                        d._node.duration === 1 / 0 && t._clearSound(d._node))),
                  n || t._emit("stop", d._id));
              }
              return t;
            },
            mute: function (e, n) {
              var t = this;
              if (t._state !== "loaded" || t._playLock)
                return (
                  t._queue.push({
                    event: "mute",
                    action: function () {
                      t.mute(e, n);
                    },
                  }),
                  t
                );
              if (n === void 0) {
                if (typeof e != "boolean") return t._muted;
                t._muted = e;
              }
              for (var o = t._getSoundIds(n), r = 0; r < o.length; r++) {
                var d = t._soundById(o[r]);
                d &&
                  ((d._muted = e),
                  d._interval && t._stopFade(d._id),
                  t._webAudio && d._node
                    ? d._node.gain.setValueAtTime(e ? 0 : d._volume, u.ctx.currentTime)
                    : d._node && (d._node.muted = !!u._muted || e),
                  t._emit("mute", d._id));
              }
              return t;
            },
            volume: function () {
              var e,
                n,
                t = this,
                o = arguments;
              if (o.length === 0) return t._volume;
              o.length === 1 || (o.length === 2 && o[1] === void 0)
                ? t._getSoundIds().indexOf(o[0]) >= 0
                  ? (n = parseInt(o[0], 10))
                  : (e = parseFloat(o[0]))
                : o.length >= 2 && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
              var r;
              if (!(e !== void 0 && e >= 0 && e <= 1))
                return ((r = n ? t._soundById(n) : t._sounds[0]), r ? r._volume : 0);
              if (t._state !== "loaded" || t._playLock)
                return (
                  t._queue.push({
                    event: "volume",
                    action: function () {
                      t.volume.apply(t, o);
                    },
                  }),
                  t
                );
              (n === void 0 && (t._volume = e), (n = t._getSoundIds(n)));
              for (var d = 0; d < n.length; d++)
                (r = t._soundById(n[d])) &&
                  ((r._volume = e),
                  o[2] || t._stopFade(n[d]),
                  t._webAudio && r._node && !r._muted
                    ? r._node.gain.setValueAtTime(e, u.ctx.currentTime)
                    : r._node && !r._muted && (r._node.volume = e * u.volume()),
                  t._emit("volume", r._id));
              return t;
            },
            fade: function (e, n, t, o) {
              var r = this;
              if (r._state !== "loaded" || r._playLock)
                return (
                  r._queue.push({
                    event: "fade",
                    action: function () {
                      r.fade(e, n, t, o);
                    },
                  }),
                  r
                );
              ((e = Math.min(Math.max(0, parseFloat(e)), 1)),
                (n = Math.min(Math.max(0, parseFloat(n)), 1)),
                (t = parseFloat(t)),
                r.volume(e, o));
              for (var d = r._getSoundIds(o), a = 0; a < d.length; a++) {
                var i = r._soundById(d[a]);
                if (i) {
                  if ((o || r._stopFade(d[a]), r._webAudio && !i._muted)) {
                    var _ = u.ctx.currentTime,
                      l = _ + t / 1e3;
                    ((i._volume = e),
                      i._node.gain.setValueAtTime(e, _),
                      i._node.gain.linearRampToValueAtTime(n, l));
                  }
                  r._startFadeInterval(i, e, n, t, d[a], o === void 0);
                }
              }
              return r;
            },
            _startFadeInterval: function (e, n, t, o, r, d) {
              var a = this,
                i = n,
                _ = t - n,
                l = Math.abs(_ / 0.01),
                m = Math.max(4, l > 0 ? o / l : o),
                h = Date.now();
              ((e._fadeTo = t),
                (e._interval = setInterval(function () {
                  var w = (Date.now() - h) / o;
                  ((h = Date.now()),
                    (i += _ * w),
                    (i = Math.round(100 * i) / 100),
                    (i = _ < 0 ? Math.max(t, i) : Math.min(t, i)),
                    a._webAudio ? (e._volume = i) : a.volume(i, e._id, !0),
                    d && (a._volume = i),
                    ((t < n && i <= t) || (t > n && i >= t)) &&
                      (clearInterval(e._interval),
                      (e._interval = null),
                      (e._fadeTo = null),
                      a.volume(t, e._id),
                      a._emit("fade", e._id)));
                }, m)));
            },
            _stopFade: function (e) {
              var n = this,
                t = n._soundById(e);
              return (
                t &&
                  t._interval &&
                  (n._webAudio && t._node.gain.cancelScheduledValues(u.ctx.currentTime),
                  clearInterval(t._interval),
                  (t._interval = null),
                  n.volume(t._fadeTo, e),
                  (t._fadeTo = null),
                  n._emit("fade", e)),
                n
              );
            },
            loop: function () {
              var e,
                n,
                t,
                o = this,
                r = arguments;
              if (r.length === 0) return o._loop;
              if (r.length === 1) {
                if (typeof r[0] != "boolean")
                  return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
                ((e = r[0]), (o._loop = e));
              } else r.length === 2 && ((e = r[0]), (n = parseInt(r[1], 10)));
              for (var d = o._getSoundIds(n), a = 0; a < d.length; a++)
                (t = o._soundById(d[a])) &&
                  ((t._loop = e),
                  o._webAudio &&
                    t._node &&
                    t._node.bufferSource &&
                    ((t._node.bufferSource.loop = e),
                    e &&
                      ((t._node.bufferSource.loopStart = t._start || 0),
                      (t._node.bufferSource.loopEnd = t._stop),
                      o.playing(d[a]) && (o.pause(d[a], !0), o.play(d[a], !0)))));
              return o;
            },
            rate: function () {
              var e,
                n,
                t = this,
                o = arguments;
              if (o.length === 0) n = t._sounds[0]._id;
              else if (o.length === 1) {
                var r = t._getSoundIds(),
                  d = r.indexOf(o[0]);
                d >= 0 ? (n = parseInt(o[0], 10)) : (e = parseFloat(o[0]));
              } else o.length === 2 && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
              var a;
              if (typeof e != "number") return ((a = t._soundById(n)), a ? a._rate : t._rate);
              if (t._state !== "loaded" || t._playLock)
                return (
                  t._queue.push({
                    event: "rate",
                    action: function () {
                      t.rate.apply(t, o);
                    },
                  }),
                  t
                );
              (n === void 0 && (t._rate = e), (n = t._getSoundIds(n)));
              for (var i = 0; i < n.length; i++)
                if ((a = t._soundById(n[i]))) {
                  (t.playing(n[i]) &&
                    ((a._rateSeek = t.seek(n[i])),
                    (a._playStart = t._webAudio ? u.ctx.currentTime : a._playStart)),
                    (a._rate = e),
                    t._webAudio && a._node && a._node.bufferSource
                      ? a._node.bufferSource.playbackRate.setValueAtTime(e, u.ctx.currentTime)
                      : a._node && (a._node.playbackRate = e));
                  var _ = t.seek(n[i]),
                    l = (t._sprite[a._sprite][0] + t._sprite[a._sprite][1]) / 1e3 - _,
                    m = (1e3 * l) / Math.abs(a._rate);
                  ((!t._endTimers[n[i]] && a._paused) ||
                    (t._clearTimer(n[i]),
                    (t._endTimers[n[i]] = setTimeout(t._ended.bind(t, a), m))),
                    t._emit("rate", a._id));
                }
              return t;
            },
            seek: function () {
              var e,
                n,
                t = this,
                o = arguments;
              if (o.length === 0) t._sounds.length && (n = t._sounds[0]._id);
              else if (o.length === 1) {
                var r = t._getSoundIds(),
                  d = r.indexOf(o[0]);
                d >= 0
                  ? (n = parseInt(o[0], 10))
                  : t._sounds.length && ((n = t._sounds[0]._id), (e = parseFloat(o[0])));
              } else o.length === 2 && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
              if (n === void 0) return 0;
              if (typeof e == "number" && (t._state !== "loaded" || t._playLock))
                return (
                  t._queue.push({
                    event: "seek",
                    action: function () {
                      t.seek.apply(t, o);
                    },
                  }),
                  t
                );
              var a = t._soundById(n);
              if (a) {
                if (!(typeof e == "number" && e >= 0)) {
                  if (t._webAudio) {
                    var i = t.playing(n) ? u.ctx.currentTime - a._playStart : 0,
                      _ = a._rateSeek ? a._rateSeek - a._seek : 0;
                    return a._seek + (_ + i * Math.abs(a._rate));
                  }
                  return a._node.currentTime;
                }
                var l = t.playing(n);
                (l && t.pause(n, !0),
                  (a._seek = e),
                  (a._ended = !1),
                  t._clearTimer(n),
                  t._webAudio || !a._node || isNaN(a._node.duration) || (a._node.currentTime = e));
                var m = function () {
                  (l && t.play(n, !0), t._emit("seek", n));
                };
                if (l && !t._webAudio) {
                  var h = function () {
                    t._playLock ? setTimeout(h, 0) : m();
                  };
                  setTimeout(h, 0);
                } else m();
              }
              return t;
            },
            playing: function (e) {
              var n = this;
              if (typeof e == "number") {
                var t = n._soundById(e);
                return !!t && !t._paused;
              }
              for (var o = 0; o < n._sounds.length; o++) if (!n._sounds[o]._paused) return !0;
              return !1;
            },
            duration: function (e) {
              var n = this,
                t = n._duration,
                o = n._soundById(e);
              return (o && (t = n._sprite[o._sprite][1] / 1e3), t);
            },
            state: function () {
              return this._state;
            },
            unload: function () {
              for (var e = this, n = e._sounds, t = 0; t < n.length; t++)
                (n[t]._paused || e.stop(n[t]._id),
                  e._webAudio ||
                    (e._clearSound(n[t]._node),
                    n[t]._node.removeEventListener("error", n[t]._errorFn, !1),
                    n[t]._node.removeEventListener(u._canPlayEvent, n[t]._loadFn, !1),
                    n[t]._node.removeEventListener("ended", n[t]._endFn, !1),
                    u._releaseHtml5Audio(n[t]._node)),
                  delete n[t]._node,
                  e._clearTimer(n[t]._id));
              var o = u._howls.indexOf(e);
              o >= 0 && u._howls.splice(o, 1);
              var r = !0;
              for (t = 0; t < u._howls.length; t++)
                if (u._howls[t]._src === e._src || e._src.indexOf(u._howls[t]._src) >= 0) {
                  r = !1;
                  break;
                }
              return (
                f && r && delete f[e._src],
                (u.noAudio = !1),
                (e._state = "unloaded"),
                (e._sounds = []),
                (e = null),
                null
              );
            },
            on: function (e, n, t, o) {
              var r = this,
                d = r["_on" + e];
              return (
                typeof n == "function" && d.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }),
                r
              );
            },
            off: function (e, n, t) {
              var o = this,
                r = o["_on" + e],
                d = 0;
              if ((typeof n == "number" && ((t = n), (n = null)), n || t))
                for (d = 0; d < r.length; d++) {
                  var a = t === r[d].id;
                  if ((n === r[d].fn && a) || (!n && a)) {
                    r.splice(d, 1);
                    break;
                  }
                }
              else if (e) o["_on" + e] = [];
              else {
                var i = Object.keys(o);
                for (d = 0; d < i.length; d++)
                  i[d].indexOf("_on") === 0 && Array.isArray(o[i[d]]) && (o[i[d]] = []);
              }
              return o;
            },
            once: function (e, n, t) {
              var o = this;
              return (o.on(e, n, t, 1), o);
            },
            _emit: function (e, n, t) {
              for (var o = this, r = o["_on" + e], d = r.length - 1; d >= 0; d--)
                (r[d].id && r[d].id !== n && e !== "load") ||
                  (setTimeout(
                    function (a) {
                      a.call(this, n, t);
                    }.bind(o, r[d].fn),
                    0,
                  ),
                  r[d].once && o.off(e, r[d].fn, r[d].id));
              return (o._loadQueue(e), o);
            },
            _loadQueue: function (e) {
              var n = this;
              if (n._queue.length > 0) {
                var t = n._queue[0];
                (t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action());
              }
              return n;
            },
            _ended: function (e) {
              var n = this,
                t = e._sprite;
              if (
                !n._webAudio &&
                e._node &&
                !e._node.paused &&
                !e._node.ended &&
                e._node.currentTime < e._stop
              )
                return (setTimeout(n._ended.bind(n, e), 100), n);
              var o = !(!e._loop && !n._sprite[t][2]);
              if (
                (n._emit("end", e._id),
                !n._webAudio && o && n.stop(e._id, !0).play(e._id),
                n._webAudio && o)
              ) {
                (n._emit("play", e._id),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  (e._playStart = u.ctx.currentTime));
                var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
                n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), r);
              }
              return (
                n._webAudio &&
                  !o &&
                  ((e._paused = !0),
                  (e._ended = !0),
                  (e._seek = e._start || 0),
                  (e._rateSeek = 0),
                  n._clearTimer(e._id),
                  n._cleanBuffer(e._node),
                  u._autoSuspend()),
                n._webAudio || o || n.stop(e._id, !0),
                n
              );
            },
            _clearTimer: function (e) {
              var n = this;
              if (n._endTimers[e]) {
                if (typeof n._endTimers[e] != "function") clearTimeout(n._endTimers[e]);
                else {
                  var t = n._soundById(e);
                  t && t._node && t._node.removeEventListener("ended", n._endTimers[e], !1);
                }
                delete n._endTimers[e];
              }
              return n;
            },
            _soundById: function (e) {
              for (var n = this, t = 0; t < n._sounds.length; t++)
                if (e === n._sounds[t]._id) return n._sounds[t];
              return null;
            },
            _inactiveSound: function () {
              var e = this;
              e._drain();
              for (var n = 0; n < e._sounds.length; n++)
                if (e._sounds[n]._ended) return e._sounds[n].reset();
              return new c(e);
            },
            _drain: function () {
              var e = this,
                n = e._pool,
                t = 0,
                o = 0;
              if (!(e._sounds.length < n)) {
                for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
                for (o = e._sounds.length - 1; o >= 0; o--) {
                  if (t <= n) return;
                  e._sounds[o]._ended &&
                    (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0),
                    e._sounds.splice(o, 1),
                    t--);
                }
              }
            },
            _getSoundIds: function (e) {
              var n = this;
              if (e === void 0) {
                for (var t = [], o = 0; o < n._sounds.length; o++) t.push(n._sounds[o]._id);
                return t;
              }
              return [e];
            },
            _refreshBuffer: function (e) {
              var n = this;
              return (
                (e._node.bufferSource = u.ctx.createBufferSource()),
                (e._node.bufferSource.buffer = f[n._src]),
                e._panner
                  ? e._node.bufferSource.connect(e._panner)
                  : e._node.bufferSource.connect(e._node),
                (e._node.bufferSource.loop = e._loop),
                e._loop &&
                  ((e._node.bufferSource.loopStart = e._start || 0),
                  (e._node.bufferSource.loopEnd = e._stop || 0)),
                e._node.bufferSource.playbackRate.setValueAtTime(e._rate, u.ctx.currentTime),
                n
              );
            },
            _cleanBuffer: function (e) {
              var n = this,
                t = u._navigator && u._navigator.vendor.indexOf("Apple") >= 0;
              if (
                u._scratchBuffer &&
                e.bufferSource &&
                ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
              )
                try {
                  e.bufferSource.buffer = u._scratchBuffer;
                } catch {}
              return ((e.bufferSource = null), n);
            },
            _clearSound: function (e) {
              /MSIE |Trident\//.test(u._navigator && u._navigator.userAgent) ||
                (e.src =
                  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
            },
          };
          var c = function (e) {
            ((this._parent = e), this.init());
          };
          c.prototype = {
            init: function () {
              var e = this,
                n = e._parent;
              return (
                (e._muted = n._muted),
                (e._loop = n._loop),
                (e._volume = n._volume),
                (e._rate = n._rate),
                (e._seek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = "__default"),
                (e._id = ++u._counter),
                n._sounds.push(e),
                e.create(),
                e
              );
            },
            create: function () {
              var e = this,
                n = e._parent,
                t = u._muted || e._muted || e._parent._muted ? 0 : e._volume;
              return (
                n._webAudio
                  ? ((e._node =
                      u.ctx.createGain === void 0 ? u.ctx.createGainNode() : u.ctx.createGain()),
                    e._node.gain.setValueAtTime(t, u.ctx.currentTime),
                    (e._node.paused = !0),
                    e._node.connect(u.masterGain))
                  : u.noAudio ||
                    ((e._node = u._obtainHtml5Audio()),
                    (e._errorFn = e._errorListener.bind(e)),
                    e._node.addEventListener("error", e._errorFn, !1),
                    (e._loadFn = e._loadListener.bind(e)),
                    e._node.addEventListener(u._canPlayEvent, e._loadFn, !1),
                    (e._endFn = e._endListener.bind(e)),
                    e._node.addEventListener("ended", e._endFn, !1),
                    (e._node.src = n._src),
                    (e._node.preload = n._preload === !0 ? "auto" : n._preload),
                    (e._node.volume = t * u.volume()),
                    e._node.load()),
                e
              );
            },
            reset: function () {
              var e = this,
                n = e._parent;
              return (
                (e._muted = n._muted),
                (e._loop = n._loop),
                (e._volume = n._volume),
                (e._rate = n._rate),
                (e._seek = 0),
                (e._rateSeek = 0),
                (e._paused = !0),
                (e._ended = !0),
                (e._sprite = "__default"),
                (e._id = ++u._counter),
                e
              );
            },
            _errorListener: function () {
              var e = this;
              (e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0),
                e._node.removeEventListener("error", e._errorFn, !1));
            },
            _loadListener: function () {
              var e = this,
                n = e._parent;
              ((n._duration = Math.ceil(10 * e._node.duration) / 10),
                Object.keys(n._sprite).length === 0 &&
                  (n._sprite = { __default: [0, 1e3 * n._duration] }),
                n._state !== "loaded" && ((n._state = "loaded"), n._emit("load"), n._loadQueue()),
                e._node.removeEventListener(u._canPlayEvent, e._loadFn, !1));
            },
            _endListener: function () {
              var e = this,
                n = e._parent;
              (n._duration === 1 / 0 &&
                ((n._duration = Math.ceil(10 * e._node.duration) / 10),
                n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = 1e3 * n._duration),
                n._ended(e)),
                e._node.removeEventListener("ended", e._endFn, !1));
            },
          };
          var f = {},
            F = function (e) {
              var n = e._src;
              if (f[n]) return ((e._duration = f[n].duration), void S(e));
              if (/^data:[^;]+;base64,/.test(n)) {
                for (
                  var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), r = 0;
                  r < t.length;
                  ++r
                )
                  o[r] = t.charCodeAt(r);
                k(o.buffer, e);
              } else {
                var d = new XMLHttpRequest();
                (d.open(e._xhr.method, n, !0),
                  (d.withCredentials = e._xhr.withCredentials),
                  (d.responseType = "arraybuffer"),
                  e._xhr.headers &&
                    Object.keys(e._xhr.headers).forEach(function (a) {
                      d.setRequestHeader(a, e._xhr.headers[a]);
                    }),
                  (d.onload = function () {
                    var a = (d.status + "")[0];
                    if (a !== "0" && a !== "2" && a !== "3")
                      return void e._emit(
                        "loaderror",
                        null,
                        "Failed loading audio file with status: " + d.status + ".",
                      );
                    k(d.response, e);
                  }),
                  (d.onerror = function () {
                    e._webAudio &&
                      ((e._html5 = !0),
                      (e._webAudio = !1),
                      (e._sounds = []),
                      delete f[n],
                      e.load());
                  }),
                  O(d));
              }
            },
            O = function (e) {
              try {
                e.send();
              } catch {
                e.onerror();
              }
            },
            k = function (e, n) {
              var t = function () {
                  n._emit("loaderror", null, "Decoding audio data failed.");
                },
                o = function (r) {
                  r && n._sounds.length > 0 ? ((f[n._src] = r), S(n, r)) : t();
                };
              typeof Promise < "u" && u.ctx.decodeAudioData.length === 1
                ? u.ctx.decodeAudioData(e).then(o).catch(t)
                : u.ctx.decodeAudioData(e, o, t);
            },
            S = function (e, n) {
              (n && !e._duration && (e._duration = n.duration),
                Object.keys(e._sprite).length === 0 &&
                  (e._sprite = { __default: [0, 1e3 * e._duration] }),
                e._state !== "loaded" && ((e._state = "loaded"), e._emit("load"), e._loadQueue()));
            },
            A = function () {
              if (u.usingWebAudio) {
                try {
                  typeof AudioContext < "u"
                    ? (u.ctx = new AudioContext())
                    : typeof webkitAudioContext < "u"
                      ? (u.ctx = new webkitAudioContext())
                      : (u.usingWebAudio = !1);
                } catch {
                  u.usingWebAudio = !1;
                }
                u.ctx || (u.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(u._navigator && u._navigator.platform),
                  n = u._navigator && u._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                  t = n ? parseInt(n[1], 10) : null;
                if (e && t && t < 9) {
                  var o = /safari/.test(u._navigator && u._navigator.userAgent.toLowerCase());
                  u._navigator && !o && (u.usingWebAudio = !1);
                }
                (u.usingWebAudio &&
                  ((u.masterGain =
                    u.ctx.createGain === void 0 ? u.ctx.createGainNode() : u.ctx.createGain()),
                  u.masterGain.gain.setValueAtTime(u._muted ? 0 : u._volume, u.ctx.currentTime),
                  u.masterGain.connect(u.ctx.destination)),
                  u._setup());
              }
            };
          ((y.Howler = u),
            (y.Howl = p),
            typeof b < "u"
              ? ((b.HowlerGlobal = v), (b.Howler = u), (b.Howl = p), (b.Sound = c))
              : typeof window < "u" &&
                ((window.HowlerGlobal = v),
                (window.Howler = u),
                (window.Howl = p),
                (window.Sound = c)));
        })();
      })(x)),
    x
  );
}
var E = H();
const $ = M(E),
  V = R({ __proto__: null, default: $ }, [E]);
export { V as h };
