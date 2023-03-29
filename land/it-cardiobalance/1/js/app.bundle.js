/*! For license information please see app.bundle.js.LICENSE.txt */
(() => {
  var e = {
      313: (e, t, n) => {
        var i, r, o;
        !(function (s) {
          "use strict";
          (r = [n(638)]),
            void 0 ===
              (o =
                "function" ==
                typeof (i = function (e) {
                  var t = [],
                    n = [],
                    i = { precision: 100, elapse: !1, defer: !1 };
                  n.push(/^[0-9]*$/.source),
                    n.push(
                      /([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/
                        .source
                    ),
                    n.push(
                      /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/
                        .source
                    ),
                    (n = new RegExp(n.join("|")));
                  var r = {
                    Y: "years",
                    m: "months",
                    n: "daysToMonth",
                    d: "daysToWeek",
                    w: "weeks",
                    W: "weeksToMonth",
                    H: "hours",
                    M: "minutes",
                    S: "seconds",
                    D: "totalDays",
                    I: "totalHours",
                    N: "totalMinutes",
                    T: "totalSeconds",
                  };
                  function o(e, t) {
                    var n = "s",
                      i = "";
                    return (
                      e &&
                        (1 ===
                        (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length
                          ? (n = e[0])
                          : ((i = e[0]), (n = e[1]))),
                      Math.abs(t) > 1 ? n : i
                    );
                  }
                  var s = function (n, r, o) {
                    (this.el = n),
                      (this.$el = e(n)),
                      (this.interval = null),
                      (this.offset = {}),
                      (this.options = e.extend({}, i)),
                      (this.instanceNumber = t.length),
                      t.push(this),
                      this.$el.data("countdown-instance", this.instanceNumber),
                      o &&
                        ("function" == typeof o
                          ? (this.$el.on("update.countdown", o),
                            this.$el.on("stoped.countdown", o),
                            this.$el.on("finish.countdown", o))
                          : (this.options = e.extend({}, i, o))),
                      this.setFinalDate(r),
                      !1 === this.options.defer && this.start();
                  };
                  e.extend(s.prototype, {
                    start: function () {
                      null !== this.interval && clearInterval(this.interval);
                      var e = this;
                      this.update(),
                        (this.interval = setInterval(function () {
                          e.update.call(e);
                        }, this.options.precision));
                    },
                    stop: function () {
                      clearInterval(this.interval),
                        (this.interval = null),
                        this.dispatchEvent("stoped");
                    },
                    toggle: function () {
                      this.interval ? this.stop() : this.start();
                    },
                    pause: function () {
                      this.stop();
                    },
                    resume: function () {
                      this.start();
                    },
                    remove: function () {
                      this.stop.call(this),
                        (t[this.instanceNumber] = null),
                        delete this.$el.data().countdownInstance;
                    },
                    setFinalDate: function (e) {
                      this.finalDate = (function (e) {
                        if (e instanceof Date) return e;
                        if (String(e).match(n))
                          return (
                            String(e).match(/^[0-9]*$/) && (e = Number(e)),
                            String(e).match(/\-/) &&
                              (e = String(e).replace(/\-/g, "/")),
                            new Date(e)
                          );
                        throw new Error(
                          "Couldn't cast `" + e + "` to a date object."
                        );
                      })(e);
                    },
                    update: function () {
                      if (0 !== this.$el.closest("html").length) {
                        var t,
                          n = void 0 !== e._data(this.el, "events"),
                          i = new Date();
                        (t = this.finalDate.getTime() - i.getTime()),
                          (t = Math.ceil(t / 1e3)),
                          (t = !this.options.elapse && t < 0 ? 0 : Math.abs(t)),
                          this.totalSecsLeft !== t &&
                            n &&
                            ((this.totalSecsLeft = t),
                            (this.elapsed = i >= this.finalDate),
                            (this.offset = {
                              seconds: this.totalSecsLeft % 60,
                              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                              hours:
                                Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                              days:
                                Math.floor(this.totalSecsLeft / 60 / 60 / 24) %
                                7,
                              daysToWeek:
                                Math.floor(this.totalSecsLeft / 60 / 60 / 24) %
                                7,
                              daysToMonth: Math.floor(
                                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
                              ),
                              weeks: Math.floor(
                                this.totalSecsLeft / 60 / 60 / 24 / 7
                              ),
                              weeksToMonth:
                                Math.floor(
                                  this.totalSecsLeft / 60 / 60 / 24 / 7
                                ) % 4,
                              months: Math.floor(
                                this.totalSecsLeft / 60 / 60 / 24 / 30.4368
                              ),
                              years: Math.abs(
                                this.finalDate.getFullYear() - i.getFullYear()
                              ),
                              totalDays: Math.floor(
                                this.totalSecsLeft / 60 / 60 / 24
                              ),
                              totalHours: Math.floor(
                                this.totalSecsLeft / 60 / 60
                              ),
                              totalMinutes: Math.floor(this.totalSecsLeft / 60),
                              totalSeconds: this.totalSecsLeft,
                            }),
                            this.options.elapse || 0 !== this.totalSecsLeft
                              ? this.dispatchEvent("update")
                              : (this.stop(), this.dispatchEvent("finish")));
                      } else this.remove();
                    },
                    dispatchEvent: function (t) {
                      var n,
                        i = e.Event(t + ".countdown");
                      (i.finalDate = this.finalDate),
                        (i.elapsed = this.elapsed),
                        (i.offset = e.extend({}, this.offset)),
                        (i.strftime =
                          ((n = this.offset),
                          function (e) {
                            var t,
                              i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                            if (i)
                              for (var s = 0, a = i.length; s < a; ++s) {
                                var l = i[s].match(
                                    /%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/
                                  ),
                                  c =
                                    ((t = void 0),
                                    (t = l[0]
                                      .toString()
                                      .replace(
                                        /([.?*+^$[\]\\(){}|-])/g,
                                        "\\$1"
                                      )),
                                    new RegExp(t)),
                                  u = l[1] || "",
                                  h = l[3] || "",
                                  p = null;
                                (l = l[2]),
                                  r.hasOwnProperty(l) &&
                                    ((p = r[l]), (p = Number(n[p]))),
                                  null !== p &&
                                    ("!" === u && (p = o(h, p)),
                                    "" === u &&
                                      p < 10 &&
                                      (p = "0" + p.toString()),
                                    (e = e.replace(c, p.toString())));
                              }
                            return e.replace(/%%/, "%");
                          })),
                        this.$el.trigger(i);
                    },
                  }),
                    (e.fn.countdown = function () {
                      var n = Array.prototype.slice.call(arguments, 0);
                      return this.each(function () {
                        var i = e(this).data("countdown-instance");
                        if (void 0 !== i) {
                          var r = t[i],
                            o = n[0];
                          s.prototype.hasOwnProperty(o)
                            ? r[o].apply(r, n.slice(1))
                            : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                            ? (r.setFinalDate.call(r, o), r.start())
                            : e.error(
                                "Method %s does not exist on jQuery.countdown".replace(
                                  /\%s/gi,
                                  o
                                )
                              );
                        } else new s(this, n[0], n[1]);
                      });
                    });
                })
                  ? i.apply(t, r)
                  : i) || (e.exports = o);
        })();
      },
      638: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            c = o.push,
            u = o.indexOf,
            h = {},
            p = h.toString,
            d = h.hasOwnProperty,
            f = d.toString,
            g = f.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            x = i.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function b(e, t, n) {
            var i,
              r,
              o = (n = n || x).createElement("script");
            if (((o.text = e), t))
              for (i in w)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function _(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? h[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = _(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: C,
              constructor: T,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (c &&
                          i &&
                          (T.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = s[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || T.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (s[t] = T.extend(c, o, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            T.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = s(e)) &&
                    ("function" !=
                      typeof (n = d.call(t, "constructor") && t.constructor) ||
                      f.call(n) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (E(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                  !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  s = [];
                if (E(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return l(s);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = o[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                h["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var S = (function (e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              h,
              p,
              d,
              f,
              g,
              m,
              v,
              y,
              x,
              w = "sizzle" + 1 * new Date(),
              b = e.document,
              _ = 0,
              C = 0,
              T = le(),
              E = le(),
              S = le(),
              k = le(),
              D = function (e, t) {
                return e === t && (h = !0), 0;
              },
              A = {}.hasOwnProperty,
              j = [],
              I = j.pop,
              L = j.push,
              N = j.push,
              P = j.slice,
              $ = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              z =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              O = "[\\x20\\t\\r\\n\\f]",
              M =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                M +
                ")(?:" +
                O +
                "*([*^$|!~]?=)" +
                O +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                M +
                "))|)" +
                O +
                "*\\]",
              q =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              B = new RegExp(O + "+", "g"),
              R = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              U = new RegExp(O + "|>"),
              X = new RegExp(q),
              V = new RegExp("^" + M + "$"),
              Z = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Q = /HTML$/i,
              Y = /^(?:input|select|textarea|button)$/i,
              G = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                p();
              },
              se = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              N.apply((j = P.call(b.childNodes)), b.childNodes),
                j[b.childNodes.length].nodeType;
            } catch (e) {
              N = {
                apply: j.length
                  ? function (e, t) {
                      L.apply(e, P.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              var o,
                a,
                c,
                u,
                h,
                f,
                v,
                y = t && t.ownerDocument,
                b = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))
              )
                return i;
              if (!r && (p(t), (t = t || d), g)) {
                if (11 !== b && (h = J.exec(e)))
                  if ((o = h[1])) {
                    if (9 === b) {
                      if (!(c = t.getElementById(o))) return i;
                      if (c.id === o) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(o)) &&
                      x(t, c) &&
                      c.id === o
                    )
                      return i.push(c), i;
                  } else {
                    if (h[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (o = h[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return N.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (
                  n.qsa &&
                  !k[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== b || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === b && (U.test(e) || F.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(ie, re))
                          : t.setAttribute("id", (u = w))),
                        a = (f = s(e)).length;
                      a--;

                    )
                      f[a] = (u ? "#" + u : ":scope") + " " + xe(f[a]);
                    v = f.join(",");
                  }
                  try {
                    return N.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    k(e, !0);
                  } finally {
                    u === w && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(R, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[w] = !0), e;
            }
            function ue(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function he(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function fe(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && se(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                      n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (o = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !Q.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  r,
                  s = e ? e.ownerDocument || e : b;
                return s != d && 9 === s.nodeType && s.documentElement
                  ? ((f = (d = s).documentElement),
                    (g = !o(d)),
                    b != d &&
                      (r = d.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", oe, !1)
                        : r.attachEvent && r.attachEvent("onunload", oe)),
                    (n.scope = ue(function (e) {
                      return (
                        f.appendChild(e).appendChild(d.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(d.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = K.test(
                      d.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (f.appendChild(e).id = w),
                        !d.getElementsByName || !d.getElementsByName(w).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              i,
                              r,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (o = r[i++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return o;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = K.test(d.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (f.appendChild(e).innerHTML =
                          "<a id='" +
                          w +
                          "'></a><select id='" +
                          w +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + z + ")"
                            ),
                          e.querySelectorAll("[id~=" + w + "-]").length ||
                            m.push("~="),
                          (t = d.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + w + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = d.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (f.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = K.test(
                      (y =
                        f.matches ||
                        f.webkitMatchesSelector ||
                        f.mozMatchesSelector ||
                        f.oMatchesSelector ||
                        f.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", q);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = K.test(f.compareDocumentPosition)),
                    (x =
                      t || K.test(f.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (D = t
                      ? function (e, t) {
                          if (e === t) return (h = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == d || (e.ownerDocument == b && x(b, e))
                                ? -1
                                : t == d || (t.ownerDocument == b && x(b, t))
                                ? 1
                                : u
                                ? $(u, e) - $(u, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (h = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!r || !o)
                            return e == d
                              ? -1
                              : t == d
                              ? 1
                              : r
                              ? -1
                              : o
                              ? 1
                              : u
                              ? $(u, e) - $(u, t)
                              : 0;
                          if (r === o) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[i] === a[i]; ) i++;
                          return i
                            ? pe(s[i], a[i])
                            : s[i] == b
                            ? -1
                            : a[i] == b
                            ? 1
                            : 0;
                        }),
                    d)
                  : d;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !k[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  k(t, !0);
                }
              return ae(t, d, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), x(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                o =
                  r && A.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !g)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                o = 0;
              if (
                ((h = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(D),
                h)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (u = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            ((i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Z,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Z.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            X.test(n) &&
                            (t = s(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = T[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + O + "|$)"
                      )) &&
                        T(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = ae.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            h,
                            p,
                            d,
                            f,
                            g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            x = !1;
                          if (m) {
                            if (o) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                f = g = "only" === e && !f && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((f = [s ? m.firstChild : m.lastChild]), s && y)
                            ) {
                              for (
                                x =
                                  (d =
                                    (c =
                                      (u =
                                        (h = (p = m)[w] || (p[w] = {}))[
                                          p.uniqueID
                                        ] || (h[p.uniqueID] = {}))[e] ||
                                      [])[0] === _ && c[1]) && c[2],
                                  p = d && m.childNodes[d];
                                (p =
                                  (++d && p && p[g]) || (x = d = 0) || f.pop());

                              )
                                if (1 === p.nodeType && ++x && p === t) {
                                  u[e] = [_, d, x];
                                  break;
                                }
                            } else if (
                              (y &&
                                (x = d =
                                  (c =
                                    (u =
                                      (h = (p = t)[w] || (p[w] = {}))[
                                        p.uniqueID
                                      ] || (h[p.uniqueID] = {}))[e] ||
                                    [])[0] === _ && c[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (p =
                                  (++d && p && p[g]) ||
                                  (x = d = 0) ||
                                  f.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++x ||
                                  (y &&
                                    ((u =
                                      (h = p[w] || (p[w] = {}))[p.uniqueID] ||
                                      (h[p.uniqueID] = {}))[e] = [_, x]),
                                  p !== t));

                              );
                            return (x -= r) === i || (x % i == 0 && x / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return r[w]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, o = r(e, t), s = o.length; s--; )
                                e[(i = $(e, o[s]))] = !(n[i] = o[s]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(R, "$1"));
                    return i[w]
                      ? ce(function (e, t, n, r) {
                          for (
                            var o, s = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (o = s[a]) && (e[a] = !(t[a] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      V.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === f;
                  },
                  focus: function (e) {
                    return (
                      e === d.activeElement &&
                      (!d.hasFocus || d.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return G.test(e.nodeName);
                  },
                  input: function (e) {
                    return Y.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }).pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = de(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
            function ye() {}
            function xe(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function we(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = C++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      h,
                      p = [_, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((u =
                              (h = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (h[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = u[o]) && c[0] === _ && c[1] === a)
                              return (p[2] = c[2]);
                            if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function be(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function _e(e, t, n, i, r) {
              for (
                var o, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
              return s;
            }
            function Ce(e, t, n, i, r, o) {
              return (
                i && !i[w] && (i = Ce(i)),
                r && !r[w] && (r = Ce(r, o)),
                ce(function (o, s, a, l) {
                  var c,
                    u,
                    h,
                    p = [],
                    d = [],
                    f = s.length,
                    g =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!o && t) ? g : _e(g, p, e, a, l),
                    v = n ? (r || (o ? e : f || i) ? [] : s) : m;
                  if ((n && n(m, v, a, l), i))
                    for (c = _e(v, d), i(c, [], a, l), u = c.length; u--; )
                      (h = c[u]) && (v[d[u]] = !(m[d[u]] = h));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (c = [], u = v.length; u--; )
                          (h = v[u]) && c.push((m[u] = h));
                        r(null, (v = []), c, l);
                      }
                      for (u = v.length; u--; )
                        (h = v[u]) &&
                          (c = r ? $(o, h) : p[u]) > -1 &&
                          (o[c] = !(s[c] = h));
                    }
                  } else (v = _e(v === s ? v.splice(f, v.length) : v)), r ? r(null, s, v, l) : N.apply(s, v);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  s = i.relative[e[0].type],
                  a = s || i.relative[" "],
                  l = s ? 1 : 0,
                  u = we(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  h = we(
                    function (e) {
                      return $(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!s && (i || n !== c)) ||
                        ((t = n).nodeType ? u(e, n, i) : h(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [we(be(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                    return Ce(
                      l > 1 && be(p),
                      l > 1 &&
                        xe(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(R, "$1"),
                      n,
                      l < r && Te(e.slice(l, r)),
                      r < o && Te((e = e.slice(r))),
                      r < o && xe(e)
                    );
                  }
                  p.push(n);
                }
              return be(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (s = ae.tokenize =
                function (e, t) {
                  var n,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = E[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (s in ((n && !(r = W.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                    (n = !1),
                    (r = F.exec(a)) &&
                      ((n = r.shift()),
                      o.push({ value: n, type: r[0].replace(R, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = Z[s].exec(a)) ||
                        (c[s] && !(r = c[s](r))) ||
                        ((n = r.shift()),
                        o.push({ value: n, type: s, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    r = [],
                    o = [],
                    a = S[e + " "];
                  if (!a) {
                    for (t || (t = s(e)), n = t.length; n--; )
                      (a = Te(t[n]))[w] ? r.push(a) : o.push(a);
                    (a = S(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          o = function (o, s, a, l, u) {
                            var h,
                              f,
                              m,
                              v = 0,
                              y = "0",
                              x = o && [],
                              w = [],
                              b = c,
                              C = o || (r && i.find.TAG("*", u)),
                              T = (_ += null == b ? 1 : Math.random() || 0.1),
                              E = C.length;
                            for (
                              u && (c = s == d || s || u);
                              y !== E && null != (h = C[y]);
                              y++
                            ) {
                              if (r && h) {
                                for (
                                  f = 0,
                                    s ||
                                      h.ownerDocument == d ||
                                      (p(h), (a = !g));
                                  (m = e[f++]);

                                )
                                  if (m(h, s || d, a)) {
                                    l.push(h);
                                    break;
                                  }
                                u && (_ = T);
                              }
                              n && ((h = !m && h) && v--, o && x.push(h));
                            }
                            if (((v += y), n && y !== v)) {
                              for (f = 0; (m = t[f++]); ) m(x, w, s, a);
                              if (o) {
                                if (v > 0)
                                  for (; y--; )
                                    x[y] || w[y] || (w[y] = I.call(l));
                                w = _e(w);
                              }
                              N.apply(l, w),
                                u &&
                                  !o &&
                                  w.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return u && ((_ = T), (c = b)), x;
                          };
                        return n ? ce(o) : o;
                      })(o, r)
                    )).selector = e;
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, r) {
                  var o,
                    l,
                    c,
                    u,
                    h,
                    p = "function" == typeof e && e,
                    d = !r && s((e = p.selector || e));
                  if (((n = n || []), 1 === d.length)) {
                    if (
                      (l = d[0] = d[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = Z.needsContext.test(e) ? 0 : l.length;
                      o-- && ((c = l[o]), !i.relative[(u = c.type)]);

                    )
                      if (
                        (h = i.find[u]) &&
                        (r = h(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = r.length && xe(l))))
                          return N.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, d))(
                      r,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = w.split("").sort(D).join("") === w),
              (n.detectDuplicates = !!h),
              p(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                he("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                he("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                he(z, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (T.find = S),
            (T.expr = S.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = S.uniqueSort),
            (T.text = S.getText),
            (T.isXMLDoc = S.isXML),
            (T.contains = S.contains),
            (T.escapeSelector = S.escape);
          var k = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && T(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            D = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            A = T.expr.match.needsContext;
          function j(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var I =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return v(t)
              ? T.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? T.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (T.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  T.find(e, r[t], n);
                return i > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && A.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var N,
            P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || N), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : P.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  I.test(i[1]) && T.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = x.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (N = T(x));
          var $ = /^(?:parents|prev(?:Until|All))/,
            z = { children: !0, contents: !0, next: !0, prev: !0 };
          function O(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
              if (!A.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(T(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return k(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return k(e, "parentNode", n);
                },
                next: function (e) {
                  return O(e, "nextSibling");
                },
                prev: function (e) {
                  return O(e, "previousSibling");
                },
                nextAll: function (e) {
                  return k(e, "nextSibling");
                },
                prevAll: function (e) {
                  return k(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return k(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return k(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return D((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return D(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (j(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, i) {
                  var r = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = T.filter(i, r)),
                    this.length > 1 &&
                      (z[e] || T.uniqueSort(r), $.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var M = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function q(e) {
            throw e;
          }
          function B(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(M) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        T.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || o.push(i)
                            : i && i.length && "string" !== _(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function s(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < o)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, s(o, t, H, r), s(o, t, q, r))
                                      : (o++,
                                        c.call(
                                          i,
                                          s(o, t, H, r),
                                          s(o, t, q, r),
                                          s(o, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(i, u.stackTrace),
                                      e + 1 >= o &&
                                        (n !== q && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (T.Deferred.getStackHook &&
                                (u.stackTrace = T.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return T.Deferred(function (i) {
                        t[0][3].add(s(0, i, v(r) ? r : H, i.notifyWith)),
                          t[1][3].add(s(0, i, v(e) ? e : H)),
                          t[2][3].add(s(0, i, v(n) ? n : q));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  T.each(t, function (e, i) {
                    var s = i[2],
                      a = i[5];
                    (r[i[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      s.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = s.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  o = T.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || v(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) B(r[n], s(n), o.reject);
                return o.promise();
              },
            });
          var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              R.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = T.Deferred();
          function F() {
            x.removeEventListener("DOMContentLoaded", F),
              i.removeEventListener("load", F),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              W.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || W.resolveWith(x, [T]));
              },
            }),
            (T.ready.then = W.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? i.setTimeout(T.ready)
              : (x.addEventListener("DOMContentLoaded", F),
                i.addEventListener("load", F));
          var U = function (e, t, n, i, r, o, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === _(n))
                for (a in ((r = !0), n)) U(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(T(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
            },
            X = /^-ms-/,
            V = /-([a-z])/g;
          function Z(e, t) {
            return t.toUpperCase();
          }
          function Q(e) {
            return e.replace(X, "ms-").replace(V, Z);
          }
          var Y = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function G() {
            this.expando = T.expando + G.uid++;
          }
          (G.uid = 1),
            (G.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Y(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[Q(t)] = n;
                else for (i in t) r[Q(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Q(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(Q)
                      : (t = Q(t)) in i
                      ? [t]
                      : t.match(M) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var K = new G(),
            J = new G(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return J.hasData(e) || K.hasData(e);
            },
            data: function (e, t, n) {
              return J.access(e, t, n);
            },
            removeData: function (e, t) {
              J.remove(e, t);
            },
            _data: function (e, t, n) {
              return K.access(e, t, n);
            },
            _removeData: function (e, t) {
              K.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = J.get(o)),
                    1 === o.nodeType && !K.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (i = s[n].name).indexOf("data-") &&
                        ((i = Q(i.slice(5))), ne(o, i, r[i]));
                    K.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      J.set(this, e);
                    })
                  : U(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = J.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          J.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  J.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = K.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = K.access(e, t, T.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = T._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  K.get(e, n) ||
                  K.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      K.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = T.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = K.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            se = x.documentElement,
            ae = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === T.css(e, "display"))
            );
          };
          function ue(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(T.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                T.style(e, t, u + c),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= o);
              (u *= 2), T.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var he = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = he[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (he[i] = r),
              r)
            );
          }
          function de(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = K.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[o] = pe(i)))
                  : "none" !== n && ((r[o] = "none"), K.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var fe,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (fe = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ge = x.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            fe.appendChild(ge),
            (m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (fe.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue),
            (fe.innerHTML = "<option></option>"),
            (m.option = !!fe.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function we(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && j(e, t)) ? T.merge([e], n) : n
            );
          }
          function be(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            m.option ||
              (xe.optgroup = xe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var _e = /<|&#?\w+;/;
          function Ce(e, t, n, i, r) {
            for (
              var o,
                s,
                a,
                l,
                c,
                u,
                h = t.createDocumentFragment(),
                p = [],
                d = 0,
                f = e.length;
              d < f;
              d++
            )
              if ((o = e[d]) || 0 === o)
                if ("object" === _(o)) T.merge(p, o.nodeType ? [o] : o);
                else if (_e.test(o)) {
                  for (
                    s = s || h.appendChild(t.createElement("div")),
                      a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                      l = xe[a] || xe._default,
                      s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                      u = l[0];
                    u--;

                  )
                    s = s.lastChild;
                  T.merge(p, s.childNodes),
                    ((s = h.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (h.textContent = "", d = 0; (o = p[d++]); )
              if (i && T.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((c = ae(o)),
                (s = we(h.appendChild(o), "script")),
                c && be(s),
                n)
              )
                for (u = 0; (o = s[u++]); ) ye.test(o.type || "") && n.push(o);
            return h;
          }
          var Te = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function Se() {
            return !1;
          }
          function ke(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function De(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                De(e, a, n, i, t[a], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Se;
            else if (!r) return e;
            return (
              1 === o &&
                ((s = r),
                ((r = function (e) {
                  return T().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, r, i, n);
              })
            );
          }
          function Ae(e, t, n) {
            n
              ? (K.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      o = K.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = a.call(arguments)),
                        K.set(this, t, o),
                        (i = n(this, t)),
                        this[t](),
                        o !== (r = K.get(this, t)) || i
                          ? K.set(this, t, !1)
                          : (r = {}),
                        o !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      o.length &&
                        (K.set(this, t, {
                          value: T.event.trigger(
                            T.extend(o[0], T.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === K.get(e, t) && T.event.add(e, t, Ee);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                h,
                p,
                d,
                f,
                g,
                m = K.get(e);
              if (Y(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && T.find.matchesSelector(se, r),
                    n.guid || (n.guid = T.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (s = m.handle) ||
                      (s = m.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(M) || [""]).length;
                  c--;

                )
                  (d = g = (a = Te.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    d &&
                      ((h = T.event.special[d] || {}),
                      (d = (r ? h.delegateType : h.bindType) || d),
                      (h = T.event.special[d] || {}),
                      (u = T.extend(
                        {
                          type: d,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && T.expr.match.needsContext.test(r),
                          namespace: f.join("."),
                        },
                        o
                      )),
                      (p = l[d]) ||
                        (((p = l[d] = []).delegateCount = 0),
                        (h.setup && !1 !== h.setup.call(e, i, f, s)) ||
                          (e.addEventListener && e.addEventListener(d, s))),
                      h.add &&
                        (h.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (T.event.global[d] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                h,
                p,
                d,
                f,
                g,
                m = K.hasData(e) && K.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--; )
                  if (
                    ((d = g = (a = Te.exec(t[c]) || [])[1]),
                    (f = (a[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      h = T.event.special[d] || {},
                        p =
                          l[(d = (i ? h.delegateType : h.bindType) || d)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = p.length;
                      o--;

                    )
                      (u = p[o]),
                        (!r && g !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(o, 1),
                          u.selector && p.delegateCount--,
                          h.remove && h.remove.call(e, u));
                    s &&
                      !p.length &&
                      ((h.teardown && !1 !== h.teardown.call(e, f, m.handle)) ||
                        T.removeEvent(e, d, m.handle),
                      delete l[d]);
                  } else for (d in l) T.event.remove(e, d + t[c], n, i, !0);
                T.isEmptyObject(l) && K.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = new Array(arguments.length),
                l = T.event.fix(e),
                c =
                  (K.get(this, "events") || Object.create(null))[l.type] || [],
                u = T.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  s = T.event.handlers.call(this, l, c), t = 0;
                  (r = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (T.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext
                          ? T(r, this).index(c) > -1
                          : T.find(r, this, null, [c]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Ae(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      Ae(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      j(t, "input") &&
                      K.get(t, "click")) ||
                    j(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : Se),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Se,
              isPropagationStopped: Se,
              isImmediatePropagationStopped: Se,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Ae(this, e, ke), !1;
                },
                trigger: function () {
                  return Ae(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      o = e.handleObj;
                    return (
                      (r && (r === i || T.contains(i, r))) ||
                        ((e.type = o.origType),
                        (n = o.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, i) {
                return De(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return De(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    T(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Se),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var je = /<script|<style|<link/i,
            Ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Ne(e, t) {
            return (
              (j(e, "table") &&
                j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Pe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function $e(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function ze(e, t) {
            var n, i, r, o, s, a;
            if (1 === t.nodeType) {
              if (K.hasData(e) && (a = K.get(e).events))
                for (r in (K.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    T.event.add(t, r, a[r][n]);
              J.hasData(e) &&
                ((o = J.access(e)), (s = T.extend({}, o)), J.set(t, s));
            }
          }
          function Oe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Me(e, t, n, i) {
            t = l(t);
            var r,
              o,
              s,
              a,
              c,
              u,
              h = 0,
              p = e.length,
              d = p - 1,
              f = t[0],
              g = v(f);
            if (
              g ||
              (p > 1 && "string" == typeof f && !m.checkClone && Ie.test(f))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                g && (t[0] = f.call(this, r, o.html())), Me(o, t, n, i);
              });
            if (
              p &&
              ((o = (r = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (a = (s = T.map(we(r, "script"), Pe)).length; h < p; h++)
                (c = r),
                  h !== d &&
                    ((c = T.clone(c, !0, !0)),
                    a && T.merge(s, we(c, "script"))),
                  n.call(e[h], c, h);
              if (a)
                for (
                  u = s[s.length - 1].ownerDocument, T.map(s, $e), h = 0;
                  h < a;
                  h++
                )
                  (c = s[h]),
                    ye.test(c.type || "") &&
                      !K.access(c, "globalEval") &&
                      T.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !c.noModule &&
                          T._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : b(c.textContent.replace(Le, ""), c, u));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var i, r = t ? T.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || T.cleanData(we(i)),
                i.parentNode &&
                  (n && ae(i) && be(we(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                s,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (s = we(a), i = 0, r = (o = we(e)).length; i < r; i++)
                  Oe(o[i], s[i]);
              if (t)
                if (n)
                  for (
                    o = o || we(e), s = s || we(a), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    ze(o[i], s[i]);
                else ze(e, a);
              return (
                (s = we(a, "script")).length > 0 &&
                  be(s, !l && we(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = T.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Y(n)) {
                  if ((t = n[K.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? T.event.remove(n, i)
                          : T.removeEvent(n, i, t.handle);
                    n[K.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return U(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Me(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Ne(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Me(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return U(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !je.test(e) &&
                      !xe[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Me(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, i = [], r = T(e), o = r.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      T(r[s])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var qe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Re = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            We = new RegExp(oe.join("|"), "i");
          function Fe(e, t, n) {
            var i,
              r,
              o,
              s,
              a = e.style;
            return (
              (n = n || Be(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (s = T.style(e, t)),
                !m.pixelBoxStyles() &&
                  qe.test(s) &&
                  We.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (o = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function Ue(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(c).appendChild(u);
                var e = i.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (o = 12 === t(u.offsetWidth / 3)),
                  se.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              s,
              a,
              l,
              c = x.createElement("div"),
              u = x.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
              T.extend(m, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Xe = ["Webkit", "Moz", "ms"],
            Ve = x.createElement("div").style,
            Ze = {};
          function Qe(e) {
            return (
              T.cssProps[e] ||
              Ze[e] ||
              (e in Ve
                ? e
                : (Ze[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                        n--;

                      )
                        if ((e = Xe[n] + t) in Ve) return e;
                    })(e) || e))
            );
          }
          var Ye = /^(none|table(?!-c[ea]).+)/,
            Ge = /^--/,
            Ke = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Je = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += T.css(e, n + oe[s], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= T.css(e, "padding" + oe[s], !0, r)),
                    "margin" !== n &&
                      (l -= T.css(e, "border" + oe[s] + "Width", !0, r)))
                  : ((l += T.css(e, "padding" + oe[s], !0, r)),
                    "padding" !== n
                      ? (l += T.css(e, "border" + oe[s] + "Width", !0, r))
                      : (a += T.css(e, "border" + oe[s] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = Be(e),
              r =
                (!m.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, i),
              o = r,
              s = Fe(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (qe.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!m.boxSizingReliable() && r) ||
                (!m.reliableTrDimensions() && j(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                tt(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Fe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  s,
                  a = Q(t),
                  l = Ge.test(t),
                  c = e.style;
                if (
                  (l || (t = Qe(a)),
                  (s = T.cssHooks[t] || T.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                    ? r
                    : c[t];
                "string" == (o = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ue(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                s,
                a = Q(t);
              return (
                Ge.test(t) || (t = Qe(a)),
                (s = T.cssHooks[t] || T.cssHooks[a]) &&
                  "get" in s &&
                  (r = s.get(e, !0, n)),
                void 0 === r && (r = Fe(e, t, i)),
                "normal" === r && t in Je && (r = Je[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Ye.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Re(e, Ke, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Be(e),
                    s = !m.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || i) && "border-box" === T.css(e, "boxSizing", !1, o),
                    l = i ? tt(e, t, i, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          tt(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = Ue(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Re(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = et);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return U(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Be(e), r = t.length; s < r; s++)
                        o[t[s]] = T.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = it.prototype.init),
            (T.fx.step = {});
          var rt,
            ot,
            st = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            ot &&
              (!1 === x.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, T.fx.interval),
              T.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = oe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function ht(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                o = 0,
                s = r.length;
              o < s;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              o = 0,
              s = pt.prefilters.length,
              a = T.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    o = 0,
                    s = c.tweens.length;
                  o < s;
                  o++
                )
                  c.tweens[o].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = T.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              (function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = Q(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = T.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = pt.prefilters[o].call(c, e, u, c.opts)))
                return (
                  v(i.stop) &&
                    (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              T.map(u, ht, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              T.fx.timer(
                T.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (T.Animation = T.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  h = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  f = e.style,
                  g = e.nodeType && ce(e),
                  m = K.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = T._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), st.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !m || void 0 === m[i]) continue;
                      g = !0;
                    }
                    d[i] = (m && m[i]) || T.style(e, i);
                  }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
                  for (i in (h &&
                    1 === e.nodeType &&
                    ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                    null == (c = m && m.display) && (c = K.get(e, "display")),
                    "none" === (u = T.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (de([e], !0),
                          (c = e.style.display || c),
                          (u = T.css(e, "display")),
                          de([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === T.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          f.display = c;
                        }),
                        null == c &&
                          ((u = f.display), (c = "none" === u ? "" : u))),
                      (f.display = "inline-block"))),
                  n.overflow &&
                    ((f.overflow = "hidden"),
                    p.always(function () {
                      (f.overflow = n.overflow[0]),
                        (f.overflowX = n.overflow[1]),
                        (f.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  d))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = K.access(e, "fxshow", { display: c })),
                      o && (m.hidden = !g),
                      g && de([e], !0),
                      p.done(function () {
                        for (i in (g || de([e]), K.remove(e, "fxshow"), d))
                          T.style(e, i, d[i]);
                      })),
                      (l = ht(g ? m[i] : 0, i, p)),
                      i in m ||
                        ((m[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                T.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in T.fx.speeds
                      ? (i.duration = T.fx.speeds[i.duration])
                      : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && T.dequeue(this, i.queue);
                }),
                i
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = T.isEmptyObject(e),
                  o = T.speed(t, n, i),
                  s = function () {
                    var t = pt(this, T.extend({}, e), o);
                    (r || K.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = T.timers,
                      s = K.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                      for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = K.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = T.timers,
                      s = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            T.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (rt = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ot || ((ot = !0), lt());
            }),
            (T.fx.stop = function () {
              ot = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var dt,
            ft = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return U(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === o && T.isXMLDoc(e)) ||
                        (r =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? dt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = T.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && j(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(M);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (dt = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ft[t] || T.find.attr;
              ft[t] = function (e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return (
                  i ||
                    ((o = ft[s]),
                    (ft[s] = r),
                    (r = null != n(e, t, i) ? s : null),
                    (ft[s] = o)),
                  r
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(M) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(M)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return U(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        for (; i.indexOf(" " + o + " ") > -1; )
                          i = i.replace(" " + o + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, o, s;
                      if (i)
                        for (r = 0, o = T(this), s = xt(e); (t = s[r++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && K.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : K.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var wt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, T(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = T.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    T.valHooks[r.type] ||
                    T.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(wt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : vt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = T.makeArray(t), s = r.length;
                      s--;

                    )
                      ((i = r[s]).selected =
                        T.inArray(T.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in i);
          var bt = /^(?:focusinfocus|focusoutblur)$/,
            _t = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                h,
                p,
                f = [n || x],
                g = d.call(e, "type") ? e.type : e,
                m = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = p = a = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !bt.test(g + T.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(g, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (h = T.event.special[g] || {}),
                  r || !h.trigger || !1 !== h.trigger.apply(n, t)))
              ) {
                if (!r && !h.noBubble && !y(n)) {
                  for (
                    l = h.delegateType || g,
                      bt.test(l + g) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    f.push(s), (a = s);
                  a === (n.ownerDocument || x) &&
                    f.push(a.defaultView || a.parentWindow || i);
                }
                for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
                  (p = s),
                    (e.type = o > 1 ? l : h.bindType || g),
                    (u =
                      (K.get(s, "events") || Object.create(null))[e.type] &&
                      K.get(s, "handle")) && u.apply(s, t),
                    (u = c && s[c]) &&
                      u.apply &&
                      Y(s) &&
                      ((e.result = u.apply(s, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  r ||
                    e.isDefaultPrevented() ||
                    (h._default && !1 !== h._default.apply(f.pop(), t)) ||
                    !Y(n) ||
                    (c &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (T.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, _t),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, _t),
                      (T.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(i, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = K.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      K.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = K.access(i, t) - 1;
                    r
                      ? K.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), K.remove(i, t));
                  },
                };
              });
          var Ct = i.location,
            Tt = { guid: Date.now() },
            Et = /\?/;
          T.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                T.error(
                  "Invalid XML: " +
                    (n
                      ? T.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var St = /\[\]$/,
            kt = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            At = /^(?:input|select|textarea|keygen)/i;
          function jt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              T.each(t, function (t, r) {
                n || St.test(e)
                  ? i(e, r)
                  : jt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== _(t)) i(e, t);
            else for (r in t) jt(e + "[" + r + "]", t[r], n, i);
          }
          (T.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) jt(n, e[n], t, r);
            return i.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      At.test(this.nodeName) &&
                      !Dt.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(kt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(kt, "\r\n") };
                  })
                  .get();
              },
            });
          var It = /%20/g,
            Lt = /#.*$/,
            Nt = /([?&])_=[^&]*/,
            Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            zt = /^\/\//,
            Ot = {},
            Mt = {},
            Ht = "*/".concat("*"),
            qt = x.createElement("a");
          function Bt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(M) || [];
              if (v(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Rt(e, t, n, i) {
            var r = {},
              o = e === Mt;
            function s(a) {
              var l;
              return (
                (r[a] = !0),
                T.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || o || r[c]
                    ? o
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Wt(e, t) {
            var n,
              i,
              r = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && T.extend(!0, e, i), e;
          }
          (qt.href = Ct.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, T.ajaxSettings), t) : Wt(T.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(Ot),
              ajaxTransport: Bt(Mt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  h,
                  p,
                  d = T.ajaxSetup({}, t),
                  f = d.context || d,
                  g = d.context && (f.nodeType || f.jquery) ? T(f) : T.event,
                  m = T.Deferred(),
                  v = T.Callbacks("once memory"),
                  y = d.statusCode || {},
                  w = {},
                  b = {},
                  _ = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!s)
                          for (s = {}; (t = Pt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e),
                          (w[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || _;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (m.promise(C),
                  (d.url = ((e || d.url || Ct.href) + "").replace(
                    zt,
                    Ct.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  l = x.createElement("a");
                  try {
                    (l.href = d.url),
                      (l.href = l.href),
                      (d.crossDomain =
                        qt.protocol + "//" + qt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = T.param(d.data, d.traditional)),
                  Rt(Ot, d, t, C),
                  c)
                )
                  return C;
                for (h in ((u = T.event && d.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !$t.test(d.type)),
                (r = d.url.replace(Lt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(It, "+"))
                  : ((p = d.url.slice(r.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((r += (Et.test(r) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((r = r.replace(Nt, "$1")),
                      (p = (Et.test(r) ? "&" : "?") + "_=" + Tt.guid++ + p)),
                    (d.url = r + p)),
                d.ifModified &&
                  (T.lastModified[r] &&
                    C.setRequestHeader("If-Modified-Since", T.lastModified[r]),
                  T.etag[r] && C.setRequestHeader("If-None-Match", T.etag[r])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  C.setRequestHeader(h, d.headers[h]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, C, d) || c))
                  return C.abort();
                if (
                  ((_ = "abort"),
                  v.add(d.complete),
                  C.done(d.success),
                  C.fail(d.error),
                  (n = Rt(Mt, d, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), u && g.trigger("ajaxSend", [C, d]), c)
                  )
                    return C;
                  d.async &&
                    d.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      C.abort("timeout");
                    }, d.timeout));
                  try {
                    (c = !1), n.send(w, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, s, l) {
                  var h,
                    p,
                    x,
                    w,
                    b,
                    _ = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (o = l || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (h = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (w = (function (e, t, n) {
                        for (
                          var i, r, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(d, C, s)),
                    !h &&
                      T.inArray("script", d.dataTypes) > -1 &&
                      T.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (w = (function (e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (o = u.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = u.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === o &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[r])
                                    : !0 !== c[r] &&
                                      ((o = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, w, C, h)),
                    h
                      ? (d.ifModified &&
                          ((b = C.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[r] = b),
                          (b = C.getResponseHeader("etag")) && (T.etag[r] = b)),
                        204 === e || "HEAD" === d.type
                          ? (_ = "nocontent")
                          : 304 === e
                          ? (_ = "notmodified")
                          : ((_ = w.state), (p = w.data), (h = !(x = w.error))))
                      : ((x = _),
                        (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || _) + ""),
                    h
                      ? m.resolveWith(f, [p, _, C])
                      : m.rejectWith(f, [C, _, x]),
                    C.statusCode(y),
                    (y = void 0),
                    u &&
                      g.trigger(h ? "ajaxSuccess" : "ajaxError", [
                        C,
                        d,
                        h ? p : x,
                      ]),
                    v.fireWith(f, [C, _]),
                    u &&
                      (g.trigger("ajaxComplete", [C, d]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Ft = { 0: 200, 1223: 204 },
            Ut = T.ajaxSettings.xhr();
          (m.cors = !!Ut && "withCredentials" in Ut),
            (m.ajax = Ut = !!Ut),
            T.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Ut && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(s, r[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Ft[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Xt,
            Vt = [],
            Zt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Vt.pop() || T.expando + "_" + Tt.guid++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Zt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Zt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Zt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return s || T.error(r + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? T(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(r)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Xt = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Xt.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((i = (t =
                          x.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(i))
                      : (t = x)),
                  (o = !n && []),
                  (r = I.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Ce([e], t, o)),
                      o && o.length && T(o).remove(),
                      T.merge([], r.childNodes)));
              var i, r, o;
            }),
            (T.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                s.length > 0 &&
                  T.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          i ? T("<div>").append(T.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = T.css(e, "position"),
                  u = T(e),
                  h = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (o = T.css(e, "top")),
                  (l = T.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (i = u.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, T.extend({}, a))),
                  null != t.top && (h.top = t.top - a.top + s),
                  null != t.left && (h.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, h) : u.css(h);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === T.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (i) {
                  return U(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = Ue(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Fe(e, t)), qe.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  T.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return U(
                      this,
                      function (t, n, r) {
                        var o;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? T.css(t, n, a)
                          : T.style(t, n, r, a);
                      },
                      t,
                      s ? r : void 0,
                      s
                    );
                  };
                }
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                ((r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }).guid = e.guid =
                  e.guid || T.guid++),
                r
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = j),
            (T.isFunction = v),
            (T.isWindow = y),
            (T.camelCase = Q),
            (T.type = _),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(Qt, "");
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var Yt = i.jQuery,
            Gt = i.$;
          return (
            (T.noConflict = function (e) {
              return (
                i.$ === T && (i.$ = Gt),
                e && i.jQuery === T && (i.jQuery = Yt),
                T
              );
            }),
            void 0 === r && (i.jQuery = i.$ = T),
            T
          );
        });
      },
      874: (e, t, n) => {
        var i, r, o;
        (r = [n(638)]),
          void 0 ===
            (o =
              "function" ==
              typeof (i = function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a = "Close",
                  l = "BeforeClose",
                  c = "MarkupParse",
                  u = "Open",
                  h = "Change",
                  p = "mfp",
                  d = ".mfp",
                  f = "mfp-ready",
                  g = "mfp-removing",
                  m = "mfp-prevent-close",
                  v = function () {},
                  y = !!window.jQuery,
                  x = e(window),
                  w = function (e, n) {
                    t.ev.on(p + e + d, n);
                  },
                  b = function (t, n, i, r) {
                    var o = document.createElement("div");
                    return (
                      (o.className = "mfp-" + t),
                      i && (o.innerHTML = i),
                      r
                        ? n && n.appendChild(o)
                        : ((o = e(o)), n && o.appendTo(n)),
                      o
                    );
                  },
                  _ = function (n, i) {
                    t.ev.triggerHandler(p + n, i),
                      t.st.callbacks &&
                        ((n = n.charAt(0).toLowerCase() + n.slice(1)),
                        t.st.callbacks[n] &&
                          t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
                  },
                  C = function (n) {
                    return (
                      (n === s && t.currTemplate.closeBtn) ||
                        ((t.currTemplate.closeBtn = e(
                          t.st.closeMarkup.replace("%title%", t.st.tClose)
                        )),
                        (s = n)),
                      t.currTemplate.closeBtn
                    );
                  },
                  T = function () {
                    e.magnificPopup.instance ||
                      ((t = new v()).init(), (e.magnificPopup.instance = t));
                  };
                (v.prototype = {
                  constructor: v,
                  init: function () {
                    var n = navigator.appVersion;
                    (t.isLowIE = t.isIE8 =
                      document.all && !document.addEventListener),
                      (t.isAndroid = /android/gi.test(n)),
                      (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
                      (t.supportsTransition = (function () {
                        var e = document.createElement("p").style,
                          t = ["ms", "O", "Moz", "Webkit"];
                        if (void 0 !== e.transition) return !0;
                        for (; t.length; )
                          if (t.pop() + "Transition" in e) return !0;
                        return !1;
                      })()),
                      (t.probablyMobile =
                        t.isAndroid ||
                        t.isIOS ||
                        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                          navigator.userAgent
                        )),
                      (i = e(document)),
                      (t.popupsCache = {});
                  },
                  open: function (n) {
                    var r;
                    if (!1 === n.isObj) {
                      (t.items = n.items.toArray()), (t.index = 0);
                      var s,
                        a = n.items;
                      for (r = 0; r < a.length; r++)
                        if (
                          ((s = a[r]).parsed && (s = s.el[0]), s === n.el[0])
                        ) {
                          t.index = r;
                          break;
                        }
                    } else
                      (t.items = e.isArray(n.items) ? n.items : [n.items]),
                        (t.index = n.index || 0);
                    if (!t.isOpen) {
                      (t.types = []),
                        (o = ""),
                        n.mainEl && n.mainEl.length
                          ? (t.ev = n.mainEl.eq(0))
                          : (t.ev = i),
                        n.key
                          ? (t.popupsCache[n.key] ||
                              (t.popupsCache[n.key] = {}),
                            (t.currTemplate = t.popupsCache[n.key]))
                          : (t.currTemplate = {}),
                        (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
                        (t.fixedContentPos =
                          "auto" === t.st.fixedContentPos
                            ? !t.probablyMobile
                            : t.st.fixedContentPos),
                        t.st.modal &&
                          ((t.st.closeOnContentClick = !1),
                          (t.st.closeOnBgClick = !1),
                          (t.st.showCloseBtn = !1),
                          (t.st.enableEscapeKey = !1)),
                        t.bgOverlay ||
                          ((t.bgOverlay = b("bg").on("click.mfp", function () {
                            t.close();
                          })),
                          (t.wrap = b("wrap")
                            .attr("tabindex", -1)
                            .on("click.mfp", function (e) {
                              t._checkIfClose(e.target) && t.close();
                            })),
                          (t.container = b("container", t.wrap))),
                        (t.contentContainer = b("content")),
                        t.st.preloader &&
                          (t.preloader = b(
                            "preloader",
                            t.container,
                            t.st.tLoading
                          ));
                      var l = e.magnificPopup.modules;
                      for (r = 0; r < l.length; r++) {
                        var h = l[r];
                        (h = h.charAt(0).toUpperCase() + h.slice(1)),
                          t["init" + h].call(t);
                      }
                      _("BeforeOpen"),
                        t.st.showCloseBtn &&
                          (t.st.closeBtnInside
                            ? (w(c, function (e, t, n, i) {
                                n.close_replaceWith = C(i.type);
                              }),
                              (o += " mfp-close-btn-in"))
                            : t.wrap.append(C())),
                        t.st.alignTop && (o += " mfp-align-top"),
                        t.fixedContentPos
                          ? t.wrap.css({
                              overflow: t.st.overflowY,
                              overflowX: "hidden",
                              overflowY: t.st.overflowY,
                            })
                          : t.wrap.css({
                              top: x.scrollTop(),
                              position: "absolute",
                            }),
                        (!1 === t.st.fixedBgPos ||
                          ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
                          t.bgOverlay.css({
                            height: i.height(),
                            position: "absolute",
                          }),
                        t.st.enableEscapeKey &&
                          i.on("keyup.mfp", function (e) {
                            27 === e.keyCode && t.close();
                          }),
                        x.on("resize.mfp", function () {
                          t.updateSize();
                        }),
                        t.st.closeOnContentClick || (o += " mfp-auto-cursor"),
                        o && t.wrap.addClass(o);
                      var p = (t.wH = x.height()),
                        d = {};
                      if (t.fixedContentPos && t._hasScrollBar(p)) {
                        var g = t._getScrollbarSize();
                        g && (d.marginRight = g);
                      }
                      t.fixedContentPos &&
                        (t.isIE7
                          ? e("body, html").css("overflow", "hidden")
                          : (d.overflow = "hidden"));
                      var m = t.st.mainClass;
                      return (
                        t.isIE7 && (m += " mfp-ie7"),
                        m && t._addClassToMFP(m),
                        t.updateItemHTML(),
                        _("BuildControls"),
                        e("html").css(d),
                        t.bgOverlay
                          .add(t.wrap)
                          .prependTo(t.st.prependTo || e(document.body)),
                        (t._lastFocusedEl = document.activeElement),
                        setTimeout(function () {
                          t.content
                            ? (t._addClassToMFP(f), t._setFocus())
                            : t.bgOverlay.addClass(f),
                            i.on("focusin.mfp", t._onFocusIn);
                        }, 16),
                        (t.isOpen = !0),
                        t.updateSize(p),
                        _(u),
                        n
                      );
                    }
                    t.updateItemHTML();
                  },
                  close: function () {
                    t.isOpen &&
                      (_(l),
                      (t.isOpen = !1),
                      t.st.removalDelay && !t.isLowIE && t.supportsTransition
                        ? (t._addClassToMFP(g),
                          setTimeout(function () {
                            t._close();
                          }, t.st.removalDelay))
                        : t._close());
                  },
                  _close: function () {
                    _(a);
                    var n = "mfp-removing mfp-ready ";
                    if (
                      (t.bgOverlay.detach(),
                      t.wrap.detach(),
                      t.container.empty(),
                      t.st.mainClass && (n += t.st.mainClass + " "),
                      t._removeClassFromMFP(n),
                      t.fixedContentPos)
                    ) {
                      var r = { marginRight: "" };
                      t.isIE7
                        ? e("body, html").css("overflow", "")
                        : (r.overflow = ""),
                        e("html").css(r);
                    }
                    i.off("keyup.mfp focusin.mfp"),
                      t.ev.off(d),
                      t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                      t.bgOverlay.attr("class", "mfp-bg"),
                      t.container.attr("class", "mfp-container"),
                      !t.st.showCloseBtn ||
                        (t.st.closeBtnInside &&
                          !0 !== t.currTemplate[t.currItem.type]) ||
                        (t.currTemplate.closeBtn &&
                          t.currTemplate.closeBtn.detach()),
                      t.st.autoFocusLast &&
                        t._lastFocusedEl &&
                        e(t._lastFocusedEl).focus(),
                      (t.currItem = null),
                      (t.content = null),
                      (t.currTemplate = null),
                      (t.prevHeight = 0),
                      _("AfterClose");
                  },
                  updateSize: function (e) {
                    if (t.isIOS) {
                      var n =
                          document.documentElement.clientWidth /
                          window.innerWidth,
                        i = window.innerHeight * n;
                      t.wrap.css("height", i), (t.wH = i);
                    } else t.wH = e || x.height();
                    t.fixedContentPos || t.wrap.css("height", t.wH),
                      _("Resize");
                  },
                  updateItemHTML: function () {
                    var n = t.items[t.index];
                    t.contentContainer.detach(),
                      t.content && t.content.detach(),
                      n.parsed || (n = t.parseEl(t.index));
                    var i = n.type;
                    if (
                      (_("BeforeChange", [
                        t.currItem ? t.currItem.type : "",
                        i,
                      ]),
                      (t.currItem = n),
                      !t.currTemplate[i])
                    ) {
                      var o = !!t.st[i] && t.st[i].markup;
                      _("FirstMarkupParse", o),
                        (t.currTemplate[i] = !o || e(o));
                    }
                    r &&
                      r !== n.type &&
                      t.container.removeClass("mfp-" + r + "-holder");
                    var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
                      n,
                      t.currTemplate[i]
                    );
                    t.appendContent(s, i),
                      (n.preloaded = !0),
                      _(h, n),
                      (r = n.type),
                      t.container.prepend(t.contentContainer),
                      _("AfterChange");
                  },
                  appendContent: function (e, n) {
                    (t.content = e),
                      e
                        ? t.st.showCloseBtn &&
                          t.st.closeBtnInside &&
                          !0 === t.currTemplate[n]
                          ? t.content.find(".mfp-close").length ||
                            t.content.append(C())
                          : (t.content = e)
                        : (t.content = ""),
                      _("BeforeAppend"),
                      t.container.addClass("mfp-" + n + "-holder"),
                      t.contentContainer.append(t.content);
                  },
                  parseEl: function (n) {
                    var i,
                      r = t.items[n];
                    if (
                      (r.tagName
                        ? (r = { el: e(r) })
                        : ((i = r.type), (r = { data: r, src: r.src })),
                      r.el)
                    ) {
                      for (var o = t.types, s = 0; s < o.length; s++)
                        if (r.el.hasClass("mfp-" + o[s])) {
                          i = o[s];
                          break;
                        }
                      (r.src = r.el.attr("data-mfp-src")),
                        r.src || (r.src = r.el.attr("href"));
                    }
                    return (
                      (r.type = i || t.st.type || "inline"),
                      (r.index = n),
                      (r.parsed = !0),
                      (t.items[n] = r),
                      _("ElementParse", r),
                      t.items[n]
                    );
                  },
                  addGroup: function (e, n) {
                    var i = function (i) {
                      (i.mfpEl = this), t._openClick(i, e, n);
                    };
                    n || (n = {});
                    var r = "click.magnificPopup";
                    (n.mainEl = e),
                      n.items
                        ? ((n.isObj = !0), e.off(r).on(r, i))
                        : ((n.isObj = !1),
                          n.delegate
                            ? e.off(r).on(r, n.delegate, i)
                            : ((n.items = e), e.off(r).on(r, i)));
                  },
                  _openClick: function (n, i, r) {
                    if (
                      (void 0 !== r.midClick
                        ? r.midClick
                        : e.magnificPopup.defaults.midClick) ||
                      !(
                        2 === n.which ||
                        n.ctrlKey ||
                        n.metaKey ||
                        n.altKey ||
                        n.shiftKey
                      )
                    ) {
                      var o =
                        void 0 !== r.disableOn
                          ? r.disableOn
                          : e.magnificPopup.defaults.disableOn;
                      if (o)
                        if (e.isFunction(o)) {
                          if (!o.call(t)) return !0;
                        } else if (x.width() < o) return !0;
                      n.type &&
                        (n.preventDefault(), t.isOpen && n.stopPropagation()),
                        (r.el = e(n.mfpEl)),
                        r.delegate && (r.items = i.find(r.delegate)),
                        t.open(r);
                    }
                  },
                  updateStatus: function (e, i) {
                    if (t.preloader) {
                      n !== e && t.container.removeClass("mfp-s-" + n),
                        i || "loading" !== e || (i = t.st.tLoading);
                      var r = { status: e, text: i };
                      _("UpdateStatus", r),
                        (e = r.status),
                        (i = r.text),
                        t.preloader.html(i),
                        t.preloader.find("a").on("click", function (e) {
                          e.stopImmediatePropagation();
                        }),
                        t.container.addClass("mfp-s-" + e),
                        (n = e);
                    }
                  },
                  _checkIfClose: function (n) {
                    if (!e(n).hasClass(m)) {
                      var i = t.st.closeOnContentClick,
                        r = t.st.closeOnBgClick;
                      if (i && r) return !0;
                      if (
                        !t.content ||
                        e(n).hasClass("mfp-close") ||
                        (t.preloader && n === t.preloader[0])
                      )
                        return !0;
                      if (n === t.content[0] || e.contains(t.content[0], n)) {
                        if (i) return !0;
                      } else if (r && e.contains(document, n)) return !0;
                      return !1;
                    }
                  },
                  _addClassToMFP: function (e) {
                    t.bgOverlay.addClass(e), t.wrap.addClass(e);
                  },
                  _removeClassFromMFP: function (e) {
                    this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
                  },
                  _hasScrollBar: function (e) {
                    return (
                      (t.isIE7 ? i.height() : document.body.scrollHeight) >
                      (e || x.height())
                    );
                  },
                  _setFocus: function () {
                    (t.st.focus
                      ? t.content.find(t.st.focus).eq(0)
                      : t.wrap
                    ).focus();
                  },
                  _onFocusIn: function (n) {
                    if (
                      n.target !== t.wrap[0] &&
                      !e.contains(t.wrap[0], n.target)
                    )
                      return t._setFocus(), !1;
                  },
                  _parseMarkup: function (t, n, i) {
                    var r;
                    i.data && (n = e.extend(i.data, n)),
                      _(c, [t, n, i]),
                      e.each(n, function (n, i) {
                        if (void 0 === i || !1 === i) return !0;
                        if ((r = n.split("_")).length > 1) {
                          var o = t.find(".mfp-" + r[0]);
                          if (o.length > 0) {
                            var s = r[1];
                            "replaceWith" === s
                              ? o[0] !== i[0] && o.replaceWith(i)
                              : "img" === s
                              ? o.is("img")
                                ? o.attr("src", i)
                                : o.replaceWith(
                                    e("<img>")
                                      .attr("src", i)
                                      .attr("class", o.attr("class"))
                                  )
                              : o.attr(r[1], i);
                          }
                        } else t.find(".mfp-" + n).html(i);
                      });
                  },
                  _getScrollbarSize: function () {
                    if (void 0 === t.scrollbarSize) {
                      var e = document.createElement("div");
                      (e.style.cssText =
                        "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                        document.body.appendChild(e),
                        (t.scrollbarSize = e.offsetWidth - e.clientWidth),
                        document.body.removeChild(e);
                    }
                    return t.scrollbarSize;
                  },
                }),
                  (e.magnificPopup = {
                    instance: null,
                    proto: v.prototype,
                    modules: [],
                    open: function (t, n) {
                      return (
                        T(),
                        ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
                        (t.index = n || 0),
                        this.instance.open(t)
                      );
                    },
                    close: function () {
                      return (
                        e.magnificPopup.instance &&
                        e.magnificPopup.instance.close()
                      );
                    },
                    registerModule: function (t, n) {
                      n.options && (e.magnificPopup.defaults[t] = n.options),
                        e.extend(this.proto, n.proto),
                        this.modules.push(t);
                    },
                    defaults: {
                      disableOn: 0,
                      key: null,
                      midClick: !1,
                      mainClass: "",
                      preloader: !0,
                      focus: "",
                      closeOnContentClick: !1,
                      closeOnBgClick: !0,
                      closeBtnInside: !0,
                      showCloseBtn: !0,
                      enableEscapeKey: !0,
                      modal: !1,
                      alignTop: !1,
                      removalDelay: 0,
                      prependTo: null,
                      fixedContentPos: "auto",
                      fixedBgPos: "auto",
                      overflowY: "auto",
                      closeMarkup:
                        '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                      tClose: "Close (Esc)",
                      tLoading: "Loading...",
                      autoFocusLast: !0,
                    },
                  }),
                  (e.fn.magnificPopup = function (n) {
                    T();
                    var i = e(this);
                    if ("string" == typeof n)
                      if ("open" === n) {
                        var r,
                          o = y ? i.data("magnificPopup") : i[0].magnificPopup,
                          s = parseInt(arguments[1], 10) || 0;
                        o.items
                          ? (r = o.items[s])
                          : ((r = i),
                            o.delegate && (r = r.find(o.delegate)),
                            (r = r.eq(s))),
                          t._openClick({ mfpEl: r }, i, o);
                      } else
                        t.isOpen &&
                          t[n].apply(
                            t,
                            Array.prototype.slice.call(arguments, 1)
                          );
                    else
                      (n = e.extend(!0, {}, n)),
                        y
                          ? i.data("magnificPopup", n)
                          : (i[0].magnificPopup = n),
                        t.addGroup(i, n);
                    return i;
                  });
                var E,
                  S,
                  k,
                  D = "inline",
                  A = function () {
                    k && (S.after(k.addClass(E)).detach(), (k = null));
                  };
                e.magnificPopup.registerModule(D, {
                  options: {
                    hiddenClass: "hide",
                    markup: "",
                    tNotFound: "Content not found",
                  },
                  proto: {
                    initInline: function () {
                      t.types.push(D),
                        w("Close.inline", function () {
                          A();
                        });
                    },
                    getInline: function (n, i) {
                      if ((A(), n.src)) {
                        var r = t.st.inline,
                          o = e(n.src);
                        if (o.length) {
                          var s = o[0].parentNode;
                          s &&
                            s.tagName &&
                            (S ||
                              ((E = r.hiddenClass),
                              (S = b(E)),
                              (E = "mfp-" + E)),
                            (k = o.after(S).detach().removeClass(E))),
                            t.updateStatus("ready");
                        } else
                          t.updateStatus("error", r.tNotFound),
                            (o = e("<div>"));
                        return (n.inlineElement = o), o;
                      }
                      return (
                        t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
                      );
                    },
                  },
                });
                var j,
                  I = "ajax",
                  L = function () {
                    j && e(document.body).removeClass(j);
                  },
                  N = function () {
                    L(), t.req && t.req.abort();
                  };
                e.magnificPopup.registerModule(I, {
                  options: {
                    settings: null,
                    cursor: "mfp-ajax-cur",
                    tError:
                      '<a href="%url%">The content</a> could not be loaded.',
                  },
                  proto: {
                    initAjax: function () {
                      t.types.push(I),
                        (j = t.st.ajax.cursor),
                        w("Close.ajax", N),
                        w("BeforeChange.ajax", N);
                    },
                    getAjax: function (n) {
                      j && e(document.body).addClass(j),
                        t.updateStatus("loading");
                      var i = e.extend(
                        {
                          url: n.src,
                          success: function (i, r, o) {
                            var s = { data: i, xhr: o };
                            _("ParseAjax", s),
                              t.appendContent(e(s.data), I),
                              (n.finished = !0),
                              L(),
                              t._setFocus(),
                              setTimeout(function () {
                                t.wrap.addClass(f);
                              }, 16),
                              t.updateStatus("ready"),
                              _("AjaxContentAdded");
                          },
                          error: function () {
                            L(),
                              (n.finished = n.loadError = !0),
                              t.updateStatus(
                                "error",
                                t.st.ajax.tError.replace("%url%", n.src)
                              );
                          },
                        },
                        t.st.ajax.settings
                      );
                      return (t.req = e.ajax(i)), "";
                    },
                  },
                });
                var P,
                  $ = function (n) {
                    if (n.data && void 0 !== n.data.title) return n.data.title;
                    var i = t.st.image.titleSrc;
                    if (i) {
                      if (e.isFunction(i)) return i.call(t, n);
                      if (n.el) return n.el.attr(i) || "";
                    }
                    return "";
                  };
                e.magnificPopup.registerModule("image", {
                  options: {
                    markup:
                      '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                    cursor: "mfp-zoom-out-cur",
                    titleSrc: "title",
                    verticalFit: !0,
                    tError:
                      '<a href="%url%">The image</a> could not be loaded.',
                  },
                  proto: {
                    initImage: function () {
                      var n = t.st.image,
                        i = ".image";
                      t.types.push("image"),
                        w("Open.image", function () {
                          "image" === t.currItem.type &&
                            n.cursor &&
                            e(document.body).addClass(n.cursor);
                        }),
                        w("Close.image", function () {
                          n.cursor && e(document.body).removeClass(n.cursor),
                            x.off("resize.mfp");
                        }),
                        w("Resize" + i, t.resizeImage),
                        t.isLowIE && w("AfterChange", t.resizeImage);
                    },
                    resizeImage: function () {
                      var e = t.currItem;
                      if (e && e.img && t.st.image.verticalFit) {
                        var n = 0;
                        t.isLowIE &&
                          (n =
                            parseInt(e.img.css("padding-top"), 10) +
                            parseInt(e.img.css("padding-bottom"), 10)),
                          e.img.css("max-height", t.wH - n);
                      }
                    },
                    _onImageHasSize: function (e) {
                      e.img &&
                        ((e.hasSize = !0),
                        P && clearInterval(P),
                        (e.isCheckingImgSize = !1),
                        _("ImageHasSize", e),
                        e.imgHidden &&
                          (t.content && t.content.removeClass("mfp-loading"),
                          (e.imgHidden = !1)));
                    },
                    findImageSize: function (e) {
                      var n = 0,
                        i = e.img[0],
                        r = function (o) {
                          P && clearInterval(P),
                            (P = setInterval(function () {
                              i.naturalWidth > 0
                                ? t._onImageHasSize(e)
                                : (n > 200 && clearInterval(P),
                                  3 == ++n
                                    ? r(10)
                                    : 40 === n
                                    ? r(50)
                                    : 100 === n && r(500));
                            }, o));
                        };
                      r(1);
                    },
                    getImage: function (n, i) {
                      var r = 0,
                        o = function () {
                          n &&
                            (n.img[0].complete
                              ? (n.img.off(".mfploader"),
                                n === t.currItem &&
                                  (t._onImageHasSize(n),
                                  t.updateStatus("ready")),
                                (n.hasSize = !0),
                                (n.loaded = !0),
                                _("ImageLoadComplete"))
                              : ++r < 200
                              ? setTimeout(o, 100)
                              : s());
                        },
                        s = function () {
                          n &&
                            (n.img.off(".mfploader"),
                            n === t.currItem &&
                              (t._onImageHasSize(n),
                              t.updateStatus(
                                "error",
                                a.tError.replace("%url%", n.src)
                              )),
                            (n.hasSize = !0),
                            (n.loaded = !0),
                            (n.loadError = !0));
                        },
                        a = t.st.image,
                        l = i.find(".mfp-img");
                      if (l.length) {
                        var c = document.createElement("img");
                        (c.className = "mfp-img"),
                          n.el &&
                            n.el.find("img").length &&
                            (c.alt = n.el.find("img").attr("alt")),
                          (n.img = e(c)
                            .on("load.mfploader", o)
                            .on("error.mfploader", s)),
                          (c.src = n.src),
                          l.is("img") && (n.img = n.img.clone()),
                          (c = n.img[0]).naturalWidth > 0
                            ? (n.hasSize = !0)
                            : c.width || (n.hasSize = !1);
                      }
                      return (
                        t._parseMarkup(
                          i,
                          { title: $(n), img_replaceWith: n.img },
                          n
                        ),
                        t.resizeImage(),
                        n.hasSize
                          ? (P && clearInterval(P),
                            n.loadError
                              ? (i.addClass("mfp-loading"),
                                t.updateStatus(
                                  "error",
                                  a.tError.replace("%url%", n.src)
                                ))
                              : (i.removeClass("mfp-loading"),
                                t.updateStatus("ready")),
                            i)
                          : (t.updateStatus("loading"),
                            (n.loading = !0),
                            n.hasSize ||
                              ((n.imgHidden = !0),
                              i.addClass("mfp-loading"),
                              t.findImageSize(n)),
                            i)
                      );
                    },
                  },
                });
                var z;
                e.magnificPopup.registerModule("zoom", {
                  options: {
                    enabled: !1,
                    easing: "ease-in-out",
                    duration: 300,
                    opener: function (e) {
                      return e.is("img") ? e : e.find("img");
                    },
                  },
                  proto: {
                    initZoom: function () {
                      var e,
                        n = t.st.zoom,
                        i = ".zoom";
                      if (n.enabled && t.supportsTransition) {
                        var r,
                          o,
                          s = n.duration,
                          a = function (e) {
                            var t = e
                                .clone()
                                .removeAttr("style")
                                .removeAttr("class")
                                .addClass("mfp-animated-image"),
                              i = "all " + n.duration / 1e3 + "s " + n.easing,
                              r = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden",
                              },
                              o = "transition";
                            return (
                              (r["-webkit-" + o] =
                                r["-moz-" + o] =
                                r["-o-" + o] =
                                r[o] =
                                  i),
                              t.css(r),
                              t
                            );
                          },
                          l = function () {
                            t.content.css("visibility", "visible");
                          };
                        w("BuildControls" + i, function () {
                          if (t._allowZoom()) {
                            if (
                              (clearTimeout(r),
                              t.content.css("visibility", "hidden"),
                              !(e = t._getItemToZoom()))
                            )
                              return void l();
                            (o = a(e)).css(t._getOffset()),
                              t.wrap.append(o),
                              (r = setTimeout(function () {
                                o.css(t._getOffset(!0)),
                                  (r = setTimeout(function () {
                                    l(),
                                      setTimeout(function () {
                                        o.remove(),
                                          (e = o = null),
                                          _("ZoomAnimationEnded");
                                      }, 16);
                                  }, s));
                              }, 16));
                          }
                        }),
                          w("BeforeClose.zoom", function () {
                            if (t._allowZoom()) {
                              if (
                                (clearTimeout(r), (t.st.removalDelay = s), !e)
                              ) {
                                if (!(e = t._getItemToZoom())) return;
                                o = a(e);
                              }
                              o.css(t._getOffset(!0)),
                                t.wrap.append(o),
                                t.content.css("visibility", "hidden"),
                                setTimeout(function () {
                                  o.css(t._getOffset());
                                }, 16);
                            }
                          }),
                          w("Close.zoom", function () {
                            t._allowZoom() &&
                              (l(), o && o.remove(), (e = null));
                          });
                      }
                    },
                    _allowZoom: function () {
                      return "image" === t.currItem.type;
                    },
                    _getItemToZoom: function () {
                      return !!t.currItem.hasSize && t.currItem.img;
                    },
                    _getOffset: function (n) {
                      var i,
                        r = (i = n
                          ? t.currItem.img
                          : t.st.zoom.opener(
                              t.currItem.el || t.currItem
                            )).offset(),
                        o = parseInt(i.css("padding-top"), 10),
                        s = parseInt(i.css("padding-bottom"), 10);
                      r.top -= e(window).scrollTop() - o;
                      var a = {
                        width: i.width(),
                        height:
                          (y ? i.innerHeight() : i[0].offsetHeight) - s - o,
                      };
                      return (
                        void 0 === z &&
                          (z =
                            void 0 !==
                            document.createElement("p").style.MozTransform),
                        z
                          ? (a["-moz-transform"] = a.transform =
                              "translate(" + r.left + "px," + r.top + "px)")
                          : ((a.left = r.left), (a.top = r.top)),
                        a
                      );
                    },
                  },
                });
                var O = "iframe",
                  M = function (e) {
                    if (t.currTemplate.iframe) {
                      var n = t.currTemplate.iframe.find("iframe");
                      n.length &&
                        (e || (n[0].src = "//about:blank"),
                        t.isIE8 && n.css("display", e ? "block" : "none"));
                    }
                  };
                e.magnificPopup.registerModule(O, {
                  options: {
                    markup:
                      '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                    srcAction: "iframe_src",
                    patterns: {
                      youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1",
                      },
                      vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1",
                      },
                      gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed",
                      },
                    },
                  },
                  proto: {
                    initIframe: function () {
                      t.types.push(O),
                        w("BeforeChange", function (e, t, n) {
                          t !== n && (t === O ? M() : n === O && M(!0));
                        }),
                        w("Close.iframe", function () {
                          M();
                        });
                    },
                    getIframe: function (n, i) {
                      var r = n.src,
                        o = t.st.iframe;
                      e.each(o.patterns, function () {
                        if (r.indexOf(this.index) > -1)
                          return (
                            this.id &&
                              (r =
                                "string" == typeof this.id
                                  ? r.substr(
                                      r.lastIndexOf(this.id) + this.id.length,
                                      r.length
                                    )
                                  : this.id.call(this, r)),
                            (r = this.src.replace("%id%", r)),
                            !1
                          );
                      });
                      var s = {};
                      return (
                        o.srcAction && (s[o.srcAction] = r),
                        t._parseMarkup(i, s, n),
                        t.updateStatus("ready"),
                        i
                      );
                    },
                  },
                });
                var H = function (e) {
                    var n = t.items.length;
                    return e > n - 1 ? e - n : e < 0 ? n + e : e;
                  },
                  q = function (e, t, n) {
                    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
                  };
                e.magnificPopup.registerModule("gallery", {
                  options: {
                    enabled: !1,
                    arrowMarkup:
                      '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    preload: [0, 2],
                    navigateByImgClick: !0,
                    arrows: !0,
                    tPrev: "Previous (Left arrow key)",
                    tNext: "Next (Right arrow key)",
                    tCounter: "%curr% of %total%",
                  },
                  proto: {
                    initGallery: function () {
                      var n = t.st.gallery,
                        r = ".mfp-gallery";
                      if (((t.direction = !0), !n || !n.enabled)) return !1;
                      (o += " mfp-gallery"),
                        w(u + r, function () {
                          n.navigateByImgClick &&
                            t.wrap.on("click" + r, ".mfp-img", function () {
                              if (t.items.length > 1) return t.next(), !1;
                            }),
                            i.on("keydown" + r, function (e) {
                              37 === e.keyCode
                                ? t.prev()
                                : 39 === e.keyCode && t.next();
                            });
                        }),
                        w("UpdateStatus" + r, function (e, n) {
                          n.text &&
                            (n.text = q(
                              n.text,
                              t.currItem.index,
                              t.items.length
                            ));
                        }),
                        w(c + r, function (e, i, r, o) {
                          var s = t.items.length;
                          r.counter = s > 1 ? q(n.tCounter, o.index, s) : "";
                        }),
                        w("BuildControls" + r, function () {
                          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var i = n.arrowMarkup,
                              r = (t.arrowLeft = e(
                                i
                                  .replace(/%title%/gi, n.tPrev)
                                  .replace(/%dir%/gi, "left")
                              ).addClass(m)),
                              o = (t.arrowRight = e(
                                i
                                  .replace(/%title%/gi, n.tNext)
                                  .replace(/%dir%/gi, "right")
                              ).addClass(m));
                            r.click(function () {
                              t.prev();
                            }),
                              o.click(function () {
                                t.next();
                              }),
                              t.container.append(r.add(o));
                          }
                        }),
                        w(h + r, function () {
                          t._preloadTimeout && clearTimeout(t._preloadTimeout),
                            (t._preloadTimeout = setTimeout(function () {
                              t.preloadNearbyImages(),
                                (t._preloadTimeout = null);
                            }, 16));
                        }),
                        w(a + r, function () {
                          i.off(r),
                            t.wrap.off("click" + r),
                            (t.arrowRight = t.arrowLeft = null);
                        });
                    },
                    next: function () {
                      (t.direction = !0),
                        (t.index = H(t.index + 1)),
                        t.updateItemHTML();
                    },
                    prev: function () {
                      (t.direction = !1),
                        (t.index = H(t.index - 1)),
                        t.updateItemHTML();
                    },
                    goTo: function (e) {
                      (t.direction = e >= t.index),
                        (t.index = e),
                        t.updateItemHTML();
                    },
                    preloadNearbyImages: function () {
                      var e,
                        n = t.st.gallery.preload,
                        i = Math.min(n[0], t.items.length),
                        r = Math.min(n[1], t.items.length);
                      for (e = 1; e <= (t.direction ? r : i); e++)
                        t._preloadItem(t.index + e);
                      for (e = 1; e <= (t.direction ? i : r); e++)
                        t._preloadItem(t.index - e);
                    },
                    _preloadItem: function (n) {
                      if (((n = H(n)), !t.items[n].preloaded)) {
                        var i = t.items[n];
                        i.parsed || (i = t.parseEl(n)),
                          _("LazyLoad", i),
                          "image" === i.type &&
                            (i.img = e('<img class="mfp-img" />')
                              .on("load.mfploader", function () {
                                i.hasSize = !0;
                              })
                              .on("error.mfploader", function () {
                                (i.hasSize = !0),
                                  (i.loadError = !0),
                                  _("LazyLoadError", i);
                              })
                              .attr("src", i.src)),
                          (i.preloaded = !0);
                      }
                    },
                  },
                });
                var B = "retina";
                e.magnificPopup.registerModule(B, {
                  options: {
                    replaceSrc: function (e) {
                      return e.src.replace(/\.\w+$/, function (e) {
                        return "@2x" + e;
                      });
                    },
                    ratio: 1,
                  },
                  proto: {
                    initRetina: function () {
                      if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                          n = e.ratio;
                        (n = isNaN(n) ? n() : n) > 1 &&
                          (w("ImageHasSize.retina", function (e, t) {
                            t.img.css({
                              "max-width": t.img[0].naturalWidth / n,
                              width: "100%",
                            });
                          }),
                          w("ElementParse.retina", function (t, i) {
                            i.src = e.replaceSrc(i, n);
                          }));
                      }
                    },
                  },
                }),
                  T();
              })
                ? i.apply(t, r)
                : i) || (e.exports = o);
      },
      982: () => {
        !(function (e, t, n, i) {
          function r(t, n) {
            (this.settings = null),
              (this.options = e.extend({}, r.Defaults, n)),
              (this.$element = e(t)),
              (this._handlers = {}),
              (this._plugins = {}),
              (this._supress = {}),
              (this._current = null),
              (this._speed = null),
              (this._coordinates = []),
              (this._breakpoint = null),
              (this._width = null),
              (this._items = []),
              (this._clones = []),
              (this._mergers = []),
              (this._widths = []),
              (this._invalidated = {}),
              (this._pipe = []),
              (this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: { start: null, current: null },
                direction: null,
              }),
              (this._states = {
                current: {},
                tags: {
                  initializing: ["busy"],
                  animating: ["busy"],
                  dragging: ["interacting"],
                },
              }),
              e.each(
                ["onResize", "onThrottledResize"],
                e.proxy(function (t, n) {
                  this._handlers[n] = e.proxy(this[n], this);
                }, this)
              ),
              e.each(
                r.Plugins,
                e.proxy(function (e, t) {
                  this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(
                    this
                  );
                }, this)
              ),
              e.each(
                r.Workers,
                e.proxy(function (t, n) {
                  this._pipe.push({
                    filter: n.filter,
                    run: e.proxy(n.run, this),
                  });
                }, this)
              ),
              this.setup(),
              this.initialize();
          }
          (r.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            checkVisibility: !0,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: t,
            fallbackEasing: "swing",
            slideTransition: "",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab",
          }),
            (r.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
            (r.Type = { Event: "event", State: "state" }),
            (r.Plugins = {}),
            (r.Workers = [
              {
                filter: ["width", "settings"],
                run: function () {
                  this._width = this.$element.width();
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  e.current =
                    this._items && this._items[this.relative(this._current)];
                },
              },
              {
                filter: ["items", "settings"],
                run: function () {
                  this.$stage.children(".cloned").remove();
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  var t = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    r = {
                      width: "auto",
                      "margin-left": i ? t : "",
                      "margin-right": i ? "" : t,
                    };
                  !n && this.$stage.children().css(r), (e.css = r);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  var t =
                      (this.width() / this.settings.items).toFixed(3) -
                      this.settings.margin,
                    n = null,
                    i = this._items.length,
                    r = !this.settings.autoWidth,
                    o = [];
                  for (e.items = { merge: !1, width: t }; i--; )
                    (n = this._mergers[i]),
                      (n =
                        (this.settings.mergeFit &&
                          Math.min(n, this.settings.items)) ||
                        n),
                      (e.items.merge = n > 1 || e.items.merge),
                      (o[i] = r ? t * n : this._items[i].width());
                  this._widths = o;
                },
              },
              {
                filter: ["items", "settings"],
                run: function () {
                  var t = [],
                    n = this._items,
                    i = this.settings,
                    r = Math.max(2 * i.items, 4),
                    o = 2 * Math.ceil(n.length / 2),
                    s =
                      i.loop && n.length ? (i.rewind ? r : Math.max(r, o)) : 0,
                    a = "",
                    l = "";
                  for (s /= 2; s > 0; )
                    t.push(this.normalize(t.length / 2, !0)),
                      (a += n[t[t.length - 1]][0].outerHTML),
                      t.push(
                        this.normalize(n.length - 1 - (t.length - 1) / 2, !0)
                      ),
                      (l = n[t[t.length - 1]][0].outerHTML + l),
                      (s -= 1);
                  (this._clones = t),
                    e(a).addClass("cloned").appendTo(this.$stage),
                    e(l).addClass("cloned").prependTo(this.$stage);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function () {
                  for (
                    var e = this.settings.rtl ? 1 : -1,
                      t = this._clones.length + this._items.length,
                      n = -1,
                      i = 0,
                      r = 0,
                      o = [];
                    ++n < t;

                  )
                    (i = o[n - 1] || 0),
                      (r =
                        this._widths[this.relative(n)] + this.settings.margin),
                      o.push(i + r * e);
                  this._coordinates = o;
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function () {
                  var e = this.settings.stagePadding,
                    t = this._coordinates,
                    n = {
                      width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                      "padding-left": e || "",
                      "padding-right": e || "",
                    };
                  this.$stage.css(n);
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  var t = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children();
                  if (n && e.items.merge)
                    for (; t--; )
                      (e.css.width = this._widths[this.relative(t)]),
                        i.eq(t).css(e.css);
                  else n && ((e.css.width = e.items.width), i.css(e.css));
                },
              },
              {
                filter: ["items"],
                run: function () {
                  this._coordinates.length < 1 &&
                    this.$stage.removeAttr("style");
                },
              },
              {
                filter: ["width", "items", "settings"],
                run: function (e) {
                  (e.current = e.current
                    ? this.$stage.children().index(e.current)
                    : 0),
                    (e.current = Math.max(
                      this.minimum(),
                      Math.min(this.maximum(), e.current)
                    )),
                    this.reset(e.current);
                },
              },
              {
                filter: ["position"],
                run: function () {
                  this.animate(this.coordinates(this._current));
                },
              },
              {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                  var e,
                    t,
                    n,
                    i,
                    r = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    a = s + this.width() * r,
                    l = [];
                  for (n = 0, i = this._coordinates.length; n < i; n++)
                    (e = this._coordinates[n - 1] || 0),
                      (t = Math.abs(this._coordinates[n]) + o * r),
                      ((this.op(e, "<=", s) && this.op(e, ">", a)) ||
                        (this.op(t, "<", s) && this.op(t, ">", a))) &&
                        l.push(n);
                  this.$stage.children(".active").removeClass("active"),
                    this.$stage
                      .children(":eq(" + l.join("), :eq(") + ")")
                      .addClass("active"),
                    this.$stage.children(".center").removeClass("center"),
                    this.settings.center &&
                      this.$stage
                        .children()
                        .eq(this.current())
                        .addClass("center");
                },
              },
            ]),
            (r.prototype.initializeStage = function () {
              (this.$stage = this.$element.find(
                "." + this.settings.stageClass
              )),
                this.$stage.length ||
                  (this.$element.addClass(this.options.loadingClass),
                  (this.$stage = e("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass,
                  }).wrap(
                    e("<div/>", { class: this.settings.stageOuterClass })
                  )),
                  this.$element.append(this.$stage.parent()));
            }),
            (r.prototype.initializeItems = function () {
              var t = this.$element.find(".owl-item");
              if (t.length)
                return (
                  (this._items = t.get().map(function (t) {
                    return e(t);
                  })),
                  (this._mergers = this._items.map(function () {
                    return 1;
                  })),
                  void this.refresh()
                );
              this.replace(this.$element.children().not(this.$stage.parent())),
                this.isVisible() ? this.refresh() : this.invalidate("width"),
                this.$element
                  .removeClass(this.options.loadingClass)
                  .addClass(this.options.loadedClass);
            }),
            (r.prototype.initialize = function () {
              var e, t, n;
              this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(
                  this.settings.rtlClass,
                  this.settings.rtl
                ),
                this.settings.autoWidth &&
                  !this.is("pre-loading") &&
                  ((e = this.$element.find("img")),
                  (t = this.settings.nestedItemSelector
                    ? "." + this.settings.nestedItemSelector
                    : i),
                  (n = this.$element.children(t).width()),
                  e.length && n <= 0 && this.preloadAutoWidthImages(e)),
                this.initializeStage(),
                this.initializeItems(),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
            }),
            (r.prototype.isVisible = function () {
              return (
                !this.settings.checkVisibility || this.$element.is(":visible")
              );
            }),
            (r.prototype.setup = function () {
              var t = this.viewport(),
                n = this.options.responsive,
                i = -1,
                r = null;
              n
                ? (e.each(n, function (e) {
                    e <= t && e > i && (i = Number(e));
                  }),
                  "function" ==
                    typeof (r = e.extend({}, this.options, n[i]))
                      .stagePadding && (r.stagePadding = r.stagePadding()),
                  delete r.responsive,
                  r.responsiveClass &&
                    this.$element.attr(
                      "class",
                      this.$element
                        .attr("class")
                        .replace(
                          new RegExp(
                            "(" + this.options.responsiveClass + "-)\\S+\\s",
                            "g"
                          ),
                          "$1" + i
                        )
                    ))
                : (r = e.extend({}, this.options)),
                this.trigger("change", {
                  property: { name: "settings", value: r },
                }),
                (this._breakpoint = i),
                (this.settings = r),
                this.invalidate("settings"),
                this.trigger("changed", {
                  property: { name: "settings", value: this.settings },
                });
            }),
            (r.prototype.optionsLogic = function () {
              this.settings.autoWidth &&
                ((this.settings.stagePadding = !1), (this.settings.merge = !1));
            }),
            (r.prototype.prepare = function (t) {
              var n = this.trigger("prepare", { content: t });
              return (
                n.data ||
                  (n.data = e("<" + this.settings.itemElement + "/>")
                    .addClass(this.options.itemClass)
                    .append(t)),
                this.trigger("prepared", { content: n.data }),
                n.data
              );
            }),
            (r.prototype.update = function () {
              for (
                var t = 0,
                  n = this._pipe.length,
                  i = e.proxy(function (e) {
                    return this[e];
                  }, this._invalidated),
                  r = {};
                t < n;

              )
                (this._invalidated.all ||
                  e.grep(this._pipe[t].filter, i).length > 0) &&
                  this._pipe[t].run(r),
                  t++;
              (this._invalidated = {}),
                !this.is("valid") && this.enter("valid");
            }),
            (r.prototype.width = function (e) {
              switch ((e = e || r.Width.Default)) {
                case r.Width.Inner:
                case r.Width.Outer:
                  return this._width;
                default:
                  return (
                    this._width -
                    2 * this.settings.stagePadding +
                    this.settings.margin
                  );
              }
            }),
            (r.prototype.refresh = function () {
              this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
            }),
            (r.prototype.onThrottledResize = function () {
              t.clearTimeout(this.resizeTimer),
                (this.resizeTimer = t.setTimeout(
                  this._handlers.onResize,
                  this.settings.responsiveRefreshRate
                ));
            }),
            (r.prototype.onResize = function () {
              return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.isVisible() &&
                (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented()
                  ? (this.leave("resizing"), !1)
                  : (this.invalidate("width"),
                    this.refresh(),
                    this.leave("resizing"),
                    void this.trigger("resized")))
              );
            }),
            (r.prototype.registerEventHandlers = function () {
              e.support.transition &&
                this.$stage.on(
                  e.support.transition.end + ".owl.core",
                  e.proxy(this.onTransitionEnd, this)
                ),
                !1 !== this.settings.responsive &&
                  this.on(t, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                  (this.$element.addClass(this.options.dragClass),
                  this.$stage.on(
                    "mousedown.owl.core",
                    e.proxy(this.onDragStart, this)
                  ),
                  this.$stage.on(
                    "dragstart.owl.core selectstart.owl.core",
                    function () {
                      return !1;
                    }
                  )),
                this.settings.touchDrag &&
                  (this.$stage.on(
                    "touchstart.owl.core",
                    e.proxy(this.onDragStart, this)
                  ),
                  this.$stage.on(
                    "touchcancel.owl.core",
                    e.proxy(this.onDragEnd, this)
                  ));
            }),
            (r.prototype.onDragStart = function (t) {
              var i = null;
              3 !== t.which &&
                (e.support.transform
                  ? (i = {
                      x: (i = this.$stage
                        .css("transform")
                        .replace(/.*\(|\)| /g, "")
                        .split(","))[16 === i.length ? 12 : 4],
                      y: i[16 === i.length ? 13 : 5],
                    })
                  : ((i = this.$stage.position()),
                    (i = {
                      x: this.settings.rtl
                        ? i.left +
                          this.$stage.width() -
                          this.width() +
                          this.settings.margin
                        : i.left,
                      y: i.top,
                    })),
                this.is("animating") &&
                  (e.support.transform ? this.animate(i.x) : this.$stage.stop(),
                  this.invalidate("position")),
                this.$element.toggleClass(
                  this.options.grabClass,
                  "mousedown" === t.type
                ),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = e(t.target)),
                (this._drag.stage.start = i),
                (this._drag.stage.current = i),
                (this._drag.pointer = this.pointer(t)),
                e(n).on(
                  "mouseup.owl.core touchend.owl.core",
                  e.proxy(this.onDragEnd, this)
                ),
                e(n).one(
                  "mousemove.owl.core touchmove.owl.core",
                  e.proxy(function (t) {
                    var i = this.difference(
                      this._drag.pointer,
                      this.pointer(t)
                    );
                    e(n).on(
                      "mousemove.owl.core touchmove.owl.core",
                      e.proxy(this.onDragMove, this)
                    ),
                      (Math.abs(i.x) < Math.abs(i.y) && this.is("valid")) ||
                        (t.preventDefault(),
                        this.enter("dragging"),
                        this.trigger("drag"));
                  }, this)
                ));
            }),
            (r.prototype.onDragMove = function (e) {
              var t = null,
                n = null,
                i = null,
                r = this.difference(this._drag.pointer, this.pointer(e)),
                o = this.difference(this._drag.stage.start, r);
              this.is("dragging") &&
                (e.preventDefault(),
                this.settings.loop
                  ? ((t = this.coordinates(this.minimum())),
                    (n = this.coordinates(this.maximum() + 1) - t),
                    (o.x = ((((o.x - t) % n) + n) % n) + t))
                  : ((t = this.settings.rtl
                      ? this.coordinates(this.maximum())
                      : this.coordinates(this.minimum())),
                    (n = this.settings.rtl
                      ? this.coordinates(this.minimum())
                      : this.coordinates(this.maximum())),
                    (i = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
                    (o.x = Math.max(Math.min(o.x, t + i), n + i))),
                (this._drag.stage.current = o),
                this.animate(o.x));
            }),
            (r.prototype.onDragEnd = function (t) {
              var i = this.difference(this._drag.pointer, this.pointer(t)),
                r = this._drag.stage.current,
                o = (i.x > 0) ^ this.settings.rtl ? "left" : "right";
              e(n).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== i.x && this.is("dragging")) || !this.is("valid")) &&
                  (this.speed(
                    this.settings.dragEndSpeed || this.settings.smartSpeed
                  ),
                  this.current(
                    this.closest(r.x, 0 !== i.x ? o : this._drag.direction)
                  ),
                  this.invalidate("position"),
                  this.update(),
                  (this._drag.direction = o),
                  (Math.abs(i.x) > 3 ||
                    new Date().getTime() - this._drag.time > 300) &&
                    this._drag.target.one("click.owl.core", function () {
                      return !1;
                    })),
                this.is("dragging") &&
                  (this.leave("dragging"), this.trigger("dragged"));
            }),
            (r.prototype.closest = function (t, n) {
              var r = -1,
                o = this.width(),
                s = this.coordinates();
              return (
                this.settings.freeDrag ||
                  e.each(
                    s,
                    e.proxy(function (e, a) {
                      return (
                        "left" === n && t > a - 30 && t < a + 30
                          ? (r = e)
                          : "right" === n && t > a - o - 30 && t < a - o + 30
                          ? (r = e + 1)
                          : this.op(t, "<", a) &&
                            this.op(
                              t,
                              ">",
                              s[e + 1] !== i ? s[e + 1] : a - o
                            ) &&
                            (r = "left" === n ? e + 1 : e),
                        -1 === r
                      );
                    }, this)
                  ),
                this.settings.loop ||
                  (this.op(t, ">", s[this.minimum()])
                    ? (r = t = this.minimum())
                    : this.op(t, "<", s[this.maximum()]) &&
                      (r = t = this.maximum())),
                r
              );
            }),
            (r.prototype.animate = function (t) {
              var n = this.speed() > 0;
              this.is("animating") && this.onTransitionEnd(),
                n && (this.enter("animating"), this.trigger("translate")),
                e.support.transform3d && e.support.transition
                  ? this.$stage.css({
                      transform: "translate3d(" + t + "px,0px,0px)",
                      transition:
                        this.speed() / 1e3 +
                        "s" +
                        (this.settings.slideTransition
                          ? " " + this.settings.slideTransition
                          : ""),
                    })
                  : n
                  ? this.$stage.animate(
                      { left: t + "px" },
                      this.speed(),
                      this.settings.fallbackEasing,
                      e.proxy(this.onTransitionEnd, this)
                    )
                  : this.$stage.css({ left: t + "px" });
            }),
            (r.prototype.is = function (e) {
              return this._states.current[e] && this._states.current[e] > 0;
            }),
            (r.prototype.current = function (e) {
              if (e === i) return this._current;
              if (0 === this._items.length) return i;
              if (((e = this.normalize(e)), this._current !== e)) {
                var t = this.trigger("change", {
                  property: { name: "position", value: e },
                });
                t.data !== i && (e = this.normalize(t.data)),
                  (this._current = e),
                  this.invalidate("position"),
                  this.trigger("changed", {
                    property: { name: "position", value: this._current },
                  });
              }
              return this._current;
            }),
            (r.prototype.invalidate = function (t) {
              return (
                "string" === e.type(t) &&
                  ((this._invalidated[t] = !0),
                  this.is("valid") && this.leave("valid")),
                e.map(this._invalidated, function (e, t) {
                  return t;
                })
              );
            }),
            (r.prototype.reset = function (e) {
              (e = this.normalize(e)) !== i &&
                ((this._speed = 0),
                (this._current = e),
                this.suppress(["translate", "translated"]),
                this.animate(this.coordinates(e)),
                this.release(["translate", "translated"]));
            }),
            (r.prototype.normalize = function (e, t) {
              var n = this._items.length,
                r = t ? 0 : this._clones.length;
              return (
                !this.isNumeric(e) || n < 1
                  ? (e = i)
                  : (e < 0 || e >= n + r) &&
                    (e = ((((e - r / 2) % n) + n) % n) + r / 2),
                e
              );
            }),
            (r.prototype.relative = function (e) {
              return (e -= this._clones.length / 2), this.normalize(e, !0);
            }),
            (r.prototype.maximum = function (e) {
              var t,
                n,
                i,
                r = this.settings,
                o = this._coordinates.length;
              if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
              else if (r.autoWidth || r.merge) {
                if ((t = this._items.length))
                  for (
                    n = this._items[--t].width(), i = this.$element.width();
                    t-- &&
                    !((n += this._items[t].width() + this.settings.margin) > i);

                  );
                o = t + 1;
              } else
                o = r.center
                  ? this._items.length - 1
                  : this._items.length - r.items;
              return e && (o -= this._clones.length / 2), Math.max(o, 0);
            }),
            (r.prototype.minimum = function (e) {
              return e ? 0 : this._clones.length / 2;
            }),
            (r.prototype.items = function (e) {
              return e === i
                ? this._items.slice()
                : ((e = this.normalize(e, !0)), this._items[e]);
            }),
            (r.prototype.mergers = function (e) {
              return e === i
                ? this._mergers.slice()
                : ((e = this.normalize(e, !0)), this._mergers[e]);
            }),
            (r.prototype.clones = function (t) {
              var n = this._clones.length / 2,
                r = n + this._items.length,
                o = function (e) {
                  return e % 2 == 0 ? r + e / 2 : n - (e + 1) / 2;
                };
              return t === i
                ? e.map(this._clones, function (e, t) {
                    return o(t);
                  })
                : e.map(this._clones, function (e, n) {
                    return e === t ? o(n) : null;
                  });
            }),
            (r.prototype.speed = function (e) {
              return e !== i && (this._speed = e), this._speed;
            }),
            (r.prototype.coordinates = function (t) {
              var n,
                r = 1,
                o = t - 1;
              return t === i
                ? e.map(
                    this._coordinates,
                    e.proxy(function (e, t) {
                      return this.coordinates(t);
                    }, this)
                  )
                : (this.settings.center
                    ? (this.settings.rtl && ((r = -1), (o = t + 1)),
                      (n = this._coordinates[t]),
                      (n +=
                        ((this.width() - n + (this._coordinates[o] || 0)) / 2) *
                        r))
                    : (n = this._coordinates[o] || 0),
                  (n = Math.ceil(n)));
            }),
            (r.prototype.duration = function (e, t, n) {
              return 0 === n
                ? 0
                : Math.min(Math.max(Math.abs(t - e), 1), 6) *
                    Math.abs(n || this.settings.smartSpeed);
            }),
            (r.prototype.to = function (e, t) {
              var n = this.current(),
                i = null,
                r = e - this.relative(n),
                o = (r > 0) - (r < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
              this.settings.loop
                ? (!this.settings.rewind &&
                    Math.abs(r) > s / 2 &&
                    (r += -1 * o * s),
                  (i = (((((e = n + r) - a) % s) + s) % s) + a) !== e &&
                    i - r <= l &&
                    i - r > 0 &&
                    ((n = i - r), (e = i), this.reset(n)))
                : (e = this.settings.rewind
                    ? ((e % (l += 1)) + l) % l
                    : Math.max(a, Math.min(l, e))),
                this.speed(this.duration(n, e, t)),
                this.current(e),
                this.isVisible() && this.update();
            }),
            (r.prototype.next = function (e) {
              (e = e || !1), this.to(this.relative(this.current()) + 1, e);
            }),
            (r.prototype.prev = function (e) {
              (e = e || !1), this.to(this.relative(this.current()) - 1, e);
            }),
            (r.prototype.onTransitionEnd = function (e) {
              if (
                e !== i &&
                (e.stopPropagation(),
                (e.target || e.srcElement || e.originalTarget) !==
                  this.$stage.get(0))
              )
                return !1;
              this.leave("animating"), this.trigger("translated");
            }),
            (r.prototype.viewport = function () {
              var i;
              return (
                this.options.responsiveBaseElement !== t
                  ? (i = e(this.options.responsiveBaseElement).width())
                  : t.innerWidth
                  ? (i = t.innerWidth)
                  : n.documentElement && n.documentElement.clientWidth
                  ? (i = n.documentElement.clientWidth)
                  : console.warn("Can not detect viewport width."),
                i
              );
            }),
            (r.prototype.replace = function (t) {
              this.$stage.empty(),
                (this._items = []),
                t && (t = t instanceof jQuery ? t : e(t)),
                this.settings.nestedItemSelector &&
                  (t = t.find("." + this.settings.nestedItemSelector)),
                t
                  .filter(function () {
                    return 1 === this.nodeType;
                  })
                  .each(
                    e.proxy(function (e, t) {
                      (t = this.prepare(t)),
                        this.$stage.append(t),
                        this._items.push(t),
                        this._mergers.push(
                          1 *
                            t
                              .find("[data-merge]")
                              .addBack("[data-merge]")
                              .attr("data-merge") || 1
                        );
                    }, this)
                  ),
                this.reset(
                  this.isNumeric(this.settings.startPosition)
                    ? this.settings.startPosition
                    : 0
                ),
                this.invalidate("items");
            }),
            (r.prototype.add = function (t, n) {
              var r = this.relative(this._current);
              (n = n === i ? this._items.length : this.normalize(n, !0)),
                (t = t instanceof jQuery ? t : e(t)),
                this.trigger("add", { content: t, position: n }),
                (t = this.prepare(t)),
                0 === this._items.length || n === this._items.length
                  ? (0 === this._items.length && this.$stage.append(t),
                    0 !== this._items.length && this._items[n - 1].after(t),
                    this._items.push(t),
                    this._mergers.push(
                      1 *
                        t
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    ))
                  : (this._items[n].before(t),
                    this._items.splice(n, 0, t),
                    this._mergers.splice(
                      n,
                      0,
                      1 *
                        t
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    )),
                this._items[r] && this.reset(this._items[r].index()),
                this.invalidate("items"),
                this.trigger("added", { content: t, position: n });
            }),
            (r.prototype.remove = function (e) {
              (e = this.normalize(e, !0)) !== i &&
                (this.trigger("remove", {
                  content: this._items[e],
                  position: e,
                }),
                this._items[e].remove(),
                this._items.splice(e, 1),
                this._mergers.splice(e, 1),
                this.invalidate("items"),
                this.trigger("removed", { content: null, position: e }));
            }),
            (r.prototype.preloadAutoWidthImages = function (t) {
              t.each(
                e.proxy(function (t, n) {
                  this.enter("pre-loading"),
                    (n = e(n)),
                    e(new Image())
                      .one(
                        "load",
                        e.proxy(function (e) {
                          n.attr("src", e.target.src),
                            n.css("opacity", 1),
                            this.leave("pre-loading"),
                            !this.is("pre-loading") &&
                              !this.is("initializing") &&
                              this.refresh();
                        }, this)
                      )
                      .attr(
                        "src",
                        n.attr("src") ||
                          n.attr("data-src") ||
                          n.attr("data-src-retina")
                      );
                }, this)
              );
            }),
            (r.prototype.destroy = function () {
              for (var i in (this.$element.off(".owl.core"),
              this.$stage.off(".owl.core"),
              e(n).off(".owl.core"),
              !1 !== this.settings.responsive &&
                (t.clearTimeout(this.resizeTimer),
                this.off(t, "resize", this._handlers.onThrottledResize)),
              this._plugins))
                this._plugins[i].destroy();
              this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$stage.remove(),
                this.$element
                  .removeClass(this.options.refreshClass)
                  .removeClass(this.options.loadingClass)
                  .removeClass(this.options.loadedClass)
                  .removeClass(this.options.rtlClass)
                  .removeClass(this.options.dragClass)
                  .removeClass(this.options.grabClass)
                  .attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          this.options.responsiveClass + "-\\S+\\s",
                          "g"
                        ),
                        ""
                      )
                  )
                  .removeData("owl.carousel");
            }),
            (r.prototype.op = function (e, t, n) {
              var i = this.settings.rtl;
              switch (t) {
                case "<":
                  return i ? e > n : e < n;
                case ">":
                  return i ? e < n : e > n;
                case ">=":
                  return i ? e <= n : e >= n;
                case "<=":
                  return i ? e >= n : e <= n;
              }
            }),
            (r.prototype.on = function (e, t, n, i) {
              e.addEventListener
                ? e.addEventListener(t, n, i)
                : e.attachEvent && e.attachEvent("on" + t, n);
            }),
            (r.prototype.off = function (e, t, n, i) {
              e.removeEventListener
                ? e.removeEventListener(t, n, i)
                : e.detachEvent && e.detachEvent("on" + t, n);
            }),
            (r.prototype.trigger = function (t, n, i, o, s) {
              var a = {
                  item: { count: this._items.length, index: this.current() },
                },
                l = e.camelCase(
                  e
                    .grep(["on", t, i], function (e) {
                      return e;
                    })
                    .join("-")
                    .toLowerCase()
                ),
                c = e.Event(
                  [t, "owl", i || "carousel"].join(".").toLowerCase(),
                  e.extend({ relatedTarget: this }, a, n)
                );
              return (
                this._supress[t] ||
                  (e.each(this._plugins, function (e, t) {
                    t.onTrigger && t.onTrigger(c);
                  }),
                  this.register({ type: r.Type.Event, name: t }),
                  this.$element.trigger(c),
                  this.settings &&
                    "function" == typeof this.settings[l] &&
                    this.settings[l].call(this, c)),
                c
              );
            }),
            (r.prototype.enter = function (t) {
              e.each(
                [t].concat(this._states.tags[t] || []),
                e.proxy(function (e, t) {
                  this._states.current[t] === i &&
                    (this._states.current[t] = 0),
                    this._states.current[t]++;
                }, this)
              );
            }),
            (r.prototype.leave = function (t) {
              e.each(
                [t].concat(this._states.tags[t] || []),
                e.proxy(function (e, t) {
                  this._states.current[t]--;
                }, this)
              );
            }),
            (r.prototype.register = function (t) {
              if (t.type === r.Type.Event) {
                if (
                  (e.event.special[t.name] || (e.event.special[t.name] = {}),
                  !e.event.special[t.name].owl)
                ) {
                  var n = e.event.special[t.name]._default;
                  (e.event.special[t.name]._default = function (e) {
                    return !n ||
                      !n.apply ||
                      (e.namespace && -1 !== e.namespace.indexOf("owl"))
                      ? e.namespace && e.namespace.indexOf("owl") > -1
                      : n.apply(this, arguments);
                  }),
                    (e.event.special[t.name].owl = !0);
                }
              } else
                t.type === r.Type.State &&
                  (this._states.tags[t.name]
                    ? (this._states.tags[t.name] = this._states.tags[
                        t.name
                      ].concat(t.tags))
                    : (this._states.tags[t.name] = t.tags),
                  (this._states.tags[t.name] = e.grep(
                    this._states.tags[t.name],
                    e.proxy(function (n, i) {
                      return e.inArray(n, this._states.tags[t.name]) === i;
                    }, this)
                  )));
            }),
            (r.prototype.suppress = function (t) {
              e.each(
                t,
                e.proxy(function (e, t) {
                  this._supress[t] = !0;
                }, this)
              );
            }),
            (r.prototype.release = function (t) {
              e.each(
                t,
                e.proxy(function (e, t) {
                  delete this._supress[t];
                }, this)
              );
            }),
            (r.prototype.pointer = function (e) {
              var n = { x: null, y: null };
              return (
                (e =
                  (e = e.originalEvent || e || t.event).touches &&
                  e.touches.length
                    ? e.touches[0]
                    : e.changedTouches && e.changedTouches.length
                    ? e.changedTouches[0]
                    : e).pageX
                  ? ((n.x = e.pageX), (n.y = e.pageY))
                  : ((n.x = e.clientX), (n.y = e.clientY)),
                n
              );
            }),
            (r.prototype.isNumeric = function (e) {
              return !isNaN(parseFloat(e));
            }),
            (r.prototype.difference = function (e, t) {
              return { x: e.x - t.x, y: e.y - t.y };
            }),
            (e.fn.owlCarousel = function (t) {
              var n = Array.prototype.slice.call(arguments, 1);
              return this.each(function () {
                var i = e(this),
                  o = i.data("owl.carousel");
                o ||
                  ((o = new r(this, "object" == typeof t && t)),
                  i.data("owl.carousel", o),
                  e.each(
                    [
                      "next",
                      "prev",
                      "to",
                      "destroy",
                      "refresh",
                      "replace",
                      "add",
                      "remove",
                    ],
                    function (t, n) {
                      o.register({ type: r.Type.Event, name: n }),
                        o.$element.on(
                          n + ".owl.carousel.core",
                          e.proxy(function (e) {
                            e.namespace &&
                              e.relatedTarget !== this &&
                              (this.suppress([n]),
                              o[n].apply(this, [].slice.call(arguments, 1)),
                              this.release([n]));
                          }, o)
                        );
                    }
                  )),
                  "string" == typeof t &&
                    "_" !== t.charAt(0) &&
                    o[t].apply(o, n);
              });
            }),
            (e.fn.owlCarousel.Constructor = r);
        })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = function (t) {
              (this._core = t),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.autoRefresh &&
                      this.watch();
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers);
            };
            (r.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
              (r.prototype.watch = function () {
                this._interval ||
                  ((this._visible = this._core.isVisible()),
                  (this._interval = t.setInterval(
                    e.proxy(this.refresh, this),
                    this._core.settings.autoRefreshInterval
                  )));
              }),
              (r.prototype.refresh = function () {
                this._core.isVisible() !== this._visible &&
                  ((this._visible = !this._visible),
                  this._core.$element.toggleClass("owl-hidden", !this._visible),
                  this._visible &&
                    this._core.invalidate("width") &&
                    this._core.refresh());
              }),
              (r.prototype.destroy = function () {
                var e, n;
                for (e in (t.clearInterval(this._interval), this._handlers))
                  this._core.$element.off(e, this._handlers[e]);
                for (n in Object.getOwnPropertyNames(this))
                  "function" != typeof this[n] && (this[n] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = function (t) {
              (this._core = t),
                (this._loaded = []),
                (this._handlers = {
                  "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                    e.proxy(function (t) {
                      if (
                        t.namespace &&
                        this._core.settings &&
                        this._core.settings.lazyLoad &&
                        ((t.property && "position" == t.property.name) ||
                          "initialized" == t.type)
                      ) {
                        var n = this._core.settings,
                          i = (n.center && Math.ceil(n.items / 2)) || n.items,
                          r = (n.center && -1 * i) || 0,
                          o =
                            (t.property && void 0 !== t.property.value
                              ? t.property.value
                              : this._core.current()) + r,
                          s = this._core.clones().length,
                          a = e.proxy(function (e, t) {
                            this.load(t);
                          }, this);
                        for (
                          n.lazyLoadEager > 0 &&
                          ((i += n.lazyLoadEager),
                          n.loop && ((o -= n.lazyLoadEager), i++));
                          r++ < i;

                        )
                          this.load(s / 2 + this._core.relative(o)),
                            s &&
                              e.each(
                                this._core.clones(this._core.relative(o)),
                                a
                              ),
                            o++;
                      }
                    }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers);
            };
            (r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
              (r.prototype.load = function (n) {
                var i = this._core.$stage.children().eq(n),
                  r = i && i.find(".owl-lazy");
                !r ||
                  e.inArray(i.get(0), this._loaded) > -1 ||
                  (r.each(
                    e.proxy(function (n, i) {
                      var r,
                        o = e(i),
                        s =
                          (t.devicePixelRatio > 1 &&
                            o.attr("data-src-retina")) ||
                          o.attr("data-src") ||
                          o.attr("data-srcset");
                      this._core.trigger(
                        "load",
                        { element: o, url: s },
                        "lazy"
                      ),
                        o.is("img")
                          ? o
                              .one(
                                "load.owl.lazy",
                                e.proxy(function () {
                                  o.css("opacity", 1),
                                    this._core.trigger(
                                      "loaded",
                                      { element: o, url: s },
                                      "lazy"
                                    );
                                }, this)
                              )
                              .attr("src", s)
                          : o.is("source")
                          ? o
                              .one(
                                "load.owl.lazy",
                                e.proxy(function () {
                                  this._core.trigger(
                                    "loaded",
                                    { element: o, url: s },
                                    "lazy"
                                  );
                                }, this)
                              )
                              .attr("srcset", s)
                          : (((r = new Image()).onload = e.proxy(function () {
                              o.css({
                                "background-image": 'url("' + s + '")',
                                opacity: "1",
                              }),
                                this._core.trigger(
                                  "loaded",
                                  { element: o, url: s },
                                  "lazy"
                                );
                            }, this)),
                            (r.src = s));
                    }, this)
                  ),
                  this._loaded.push(i.get(0)));
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in this.handlers)
                  this._core.$element.off(e, this.handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Lazy = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = function (n) {
              (this._core = n),
                (this._previousHeight = null),
                (this._handlers = {
                  "initialized.owl.carousel refreshed.owl.carousel": e.proxy(
                    function (e) {
                      e.namespace &&
                        this._core.settings.autoHeight &&
                        this.update();
                    },
                    this
                  ),
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.autoHeight &&
                      "position" === e.property.name &&
                      this.update();
                  }, this),
                  "loaded.owl.lazy": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.autoHeight &&
                      e.element
                        .closest("." + this._core.settings.itemClass)
                        .index() === this._core.current() &&
                      this.update();
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers),
                (this._intervalId = null);
              var i = this;
              e(t).on("load", function () {
                i._core.settings.autoHeight && i.update();
              }),
                e(t).resize(function () {
                  i._core.settings.autoHeight &&
                    (null != i._intervalId && clearTimeout(i._intervalId),
                    (i._intervalId = setTimeout(function () {
                      i.update();
                    }, 250)));
                });
            };
            (r.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
              (r.prototype.update = function () {
                var t = this._core._current,
                  n = t + this._core.settings.items,
                  i = this._core.settings.lazyLoad,
                  r = this._core.$stage.children().toArray().slice(t, n),
                  o = [],
                  s = 0;
                e.each(r, function (t, n) {
                  o.push(e(n).height());
                }),
                  (s = Math.max.apply(null, o)) <= 1 &&
                    i &&
                    this._previousHeight &&
                    (s = this._previousHeight),
                  (this._previousHeight = s),
                  this._core.$stage
                    .parent()
                    .height(s)
                    .addClass(this._core.settings.autoHeightClass);
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in this._handlers)
                  this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = function (t) {
              (this._core = t),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"],
                      });
                  }, this),
                  "resize.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.video &&
                      this.isInFullScreen() &&
                      e.preventDefault();
                  }, this),
                  "refreshed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.is("resizing") &&
                      this._core.$stage
                        .find(".cloned .owl-video-frame")
                        .remove();
                  }, this),
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      "position" === e.property.name &&
                      this._playing &&
                      this.stop();
                  }, this),
                  "prepared.owl.carousel": e.proxy(function (t) {
                    if (t.namespace) {
                      var n = e(t.content).find(".owl-video");
                      n.length &&
                        (n.css("display", "none"), this.fetch(n, e(t.content)));
                    }
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                )),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                  "click.owl.video",
                  ".owl-video-play-icon",
                  e.proxy(function (e) {
                    this.play(e);
                  }, this)
                );
            };
            (r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
              (r.prototype.fetch = function (e, t) {
                var n = e.attr("data-vimeo-id")
                    ? "vimeo"
                    : e.attr("data-vzaar-id")
                    ? "vzaar"
                    : "youtube",
                  i =
                    e.attr("data-vimeo-id") ||
                    e.attr("data-youtube-id") ||
                    e.attr("data-vzaar-id"),
                  r = e.attr("data-width") || this._core.settings.videoWidth,
                  o = e.attr("data-height") || this._core.settings.videoHeight,
                  s = e.attr("href");
                if (!s) throw new Error("Missing video URL.");
                if (
                  (i = s.match(
                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                  ))[3].indexOf("youtu") > -1
                )
                  n = "youtube";
                else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                else {
                  if (!(i[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                  n = "vzaar";
                }
                (i = i[6]),
                  (this._videos[s] = { type: n, id: i, width: r, height: o }),
                  t.attr("data-video", s),
                  this.thumbnail(e, this._videos[s]);
              }),
              (r.prototype.thumbnail = function (t, n) {
                var i,
                  r,
                  o =
                    n.width && n.height
                      ? "width:" + n.width + "px;height:" + n.height + "px;"
                      : "",
                  s = t.find("img"),
                  a = "src",
                  l = "",
                  c = this._core.settings,
                  u = function (n) {
                    (i = c.lazyLoad
                      ? e("<div/>", { class: "owl-video-tn " + l, srcType: n })
                      : e("<div/>", {
                          class: "owl-video-tn",
                          style: "opacity:1;background-image:url(" + n + ")",
                        })),
                      t.after(i),
                      t.after('<div class="owl-video-play-icon"></div>');
                  };
                if (
                  (t.wrap(
                    e("<div/>", { class: "owl-video-wrapper", style: o })
                  ),
                  this._core.settings.lazyLoad &&
                    ((a = "data-src"), (l = "owl-lazy")),
                  s.length)
                )
                  return u(s.attr(a)), s.remove(), !1;
                "youtube" === n.type
                  ? ((r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"),
                    u(r))
                  : "vimeo" === n.type
                  ? e.ajax({
                      type: "GET",
                      url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                      jsonp: "callback",
                      dataType: "jsonp",
                      success: function (e) {
                        (r = e[0].thumbnail_large), u(r);
                      },
                    })
                  : "vzaar" === n.type &&
                    e.ajax({
                      type: "GET",
                      url: "//vzaar.com/api/videos/" + n.id + ".json",
                      jsonp: "callback",
                      dataType: "jsonp",
                      success: function (e) {
                        (r = e.framegrab_url), u(r);
                      },
                    });
              }),
              (r.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                  this._playing.find(".owl-video-frame").remove(),
                  this._playing.removeClass("owl-video-playing"),
                  (this._playing = null),
                  this._core.leave("playing"),
                  this._core.trigger("stopped", null, "video");
              }),
              (r.prototype.play = function (t) {
                var n,
                  i = e(t.target).closest("." + this._core.settings.itemClass),
                  r = this._videos[i.attr("data-video")],
                  o = r.width || "100%",
                  s = r.height || this._core.$stage.height();
                this._playing ||
                  (this._core.enter("playing"),
                  this._core.trigger("play", null, "video"),
                  (i = this._core.items(this._core.relative(i.index()))),
                  this._core.reset(i.index()),
                  (n = e(
                    '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                  )).attr("height", s),
                  n.attr("width", o),
                  "youtube" === r.type
                    ? n.attr(
                        "src",
                        "//www.youtube.com/embed/" +
                          r.id +
                          "?autoplay=1&rel=0&v=" +
                          r.id
                      )
                    : "vimeo" === r.type
                    ? n.attr(
                        "src",
                        "//player.vimeo.com/video/" + r.id + "?autoplay=1"
                      )
                    : "vzaar" === r.type &&
                      n.attr(
                        "src",
                        "//view.vzaar.com/" + r.id + "/player?autoplay=true"
                      ),
                  e(n)
                    .wrap('<div class="owl-video-frame" />')
                    .insertAfter(i.find(".owl-video")),
                  (this._playing = i.addClass("owl-video-playing")));
              }),
              (r.prototype.isInFullScreen = function () {
                var t =
                  n.fullscreenElement ||
                  n.mozFullScreenElement ||
                  n.webkitFullscreenElement;
                return t && e(t).parent().hasClass("owl-video-frame");
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in (this._core.$element.off("click.owl.video"),
                this._handlers))
                  this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Video = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = function (t) {
              (this.core = t),
                (this.core.options = e.extend(
                  {},
                  r.Defaults,
                  this.core.options
                )),
                (this.swapping = !0),
                (this.previous = i),
                (this.next = i),
                (this.handlers = {
                  "change.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      "position" == e.property.name &&
                      ((this.previous = this.core.current()),
                      (this.next = e.property.value));
                  }, this),
                  "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                    e.proxy(function (e) {
                      e.namespace && (this.swapping = "translated" == e.type);
                    }, this),
                  "translate.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this.swapping &&
                      (this.core.options.animateOut ||
                        this.core.options.animateIn) &&
                      this.swap();
                  }, this),
                }),
                this.core.$element.on(this.handlers);
            };
            (r.Defaults = { animateOut: !1, animateIn: !1 }),
              (r.prototype.swap = function () {
                if (
                  1 === this.core.settings.items &&
                  e.support.animation &&
                  e.support.transition
                ) {
                  this.core.speed(0);
                  var t,
                    n = e.proxy(this.clear, this),
                    i = this.core.$stage.children().eq(this.previous),
                    r = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                  this.core.current() !== this.previous &&
                    (s &&
                      ((t =
                        this.core.coordinates(this.previous) -
                        this.core.coordinates(this.next)),
                      i
                        .one(e.support.animation.end, n)
                        .css({ left: t + "px" })
                        .addClass("animated owl-animated-out")
                        .addClass(s)),
                    o &&
                      r
                        .one(e.support.animation.end, n)
                        .addClass("animated owl-animated-in")
                        .addClass(o));
                }
              }),
              (r.prototype.clear = function (t) {
                e(t.target)
                  .css({ left: "" })
                  .removeClass("animated owl-animated-out owl-animated-in")
                  .removeClass(this.core.settings.animateIn)
                  .removeClass(this.core.settings.animateOut),
                  this.core.onTransitionEnd();
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in this.handlers)
                  this.core.$element.off(e, this.handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Animate = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = function (t) {
              (this._core = t),
                (this._call = null),
                (this._time = 0),
                (this._timeout = 0),
                (this._paused = !0),
                (this._handlers = {
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace && "settings" === e.property.name
                      ? this._core.settings.autoplay
                        ? this.play()
                        : this.stop()
                      : e.namespace &&
                        "position" === e.property.name &&
                        this._paused &&
                        (this._time = 0);
                  }, this),
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace && this._core.settings.autoplay && this.play();
                  }, this),
                  "play.owl.autoplay": e.proxy(function (e, t, n) {
                    e.namespace && this.play(t, n);
                  }, this),
                  "stop.owl.autoplay": e.proxy(function (e) {
                    e.namespace && this.stop();
                  }, this),
                  "mouseover.owl.autoplay": e.proxy(function () {
                    this._core.settings.autoplayHoverPause &&
                      this._core.is("rotating") &&
                      this.pause();
                  }, this),
                  "mouseleave.owl.autoplay": e.proxy(function () {
                    this._core.settings.autoplayHoverPause &&
                      this._core.is("rotating") &&
                      this.play();
                  }, this),
                  "touchstart.owl.core": e.proxy(function () {
                    this._core.settings.autoplayHoverPause &&
                      this._core.is("rotating") &&
                      this.pause();
                  }, this),
                  "touchend.owl.core": e.proxy(function () {
                    this._core.settings.autoplayHoverPause && this.play();
                  }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                ));
            };
            (r.Defaults = {
              autoplay: !1,
              autoplayTimeout: 5e3,
              autoplayHoverPause: !1,
              autoplaySpeed: !1,
            }),
              (r.prototype._next = function (i) {
                (this._call = t.setTimeout(
                  e.proxy(this._next, this, i),
                  this._timeout *
                    (Math.round(this.read() / this._timeout) + 1) -
                    this.read()
                )),
                  this._core.is("interacting") ||
                    n.hidden ||
                    this._core.next(i || this._core.settings.autoplaySpeed);
              }),
              (r.prototype.read = function () {
                return new Date().getTime() - this._time;
              }),
              (r.prototype.play = function (n, i) {
                var r;
                this._core.is("rotating") || this._core.enter("rotating"),
                  (n = n || this._core.settings.autoplayTimeout),
                  (r = Math.min(this._time % (this._timeout || n), n)),
                  this._paused
                    ? ((this._time = this.read()), (this._paused = !1))
                    : t.clearTimeout(this._call),
                  (this._time += (this.read() % n) - r),
                  (this._timeout = n),
                  (this._call = t.setTimeout(
                    e.proxy(this._next, this, i),
                    n - r
                  ));
              }),
              (r.prototype.stop = function () {
                this._core.is("rotating") &&
                  ((this._time = 0),
                  (this._paused = !0),
                  t.clearTimeout(this._call),
                  this._core.leave("rotating"));
              }),
              (r.prototype.pause = function () {
                this._core.is("rotating") &&
                  !this._paused &&
                  ((this._time = this.read()),
                  (this._paused = !0),
                  t.clearTimeout(this._call));
              }),
              (r.prototype.destroy = function () {
                var e, t;
                for (e in (this.stop(), this._handlers))
                  this._core.$element.off(e, this._handlers[e]);
                for (t in Object.getOwnPropertyNames(this))
                  "function" != typeof this[t] && (this[t] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.autoplay = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            "use strict";
            var r = function (t) {
              (this._core = t),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = {
                  next: this._core.next,
                  prev: this._core.prev,
                  to: this._core.to,
                }),
                (this._handlers = {
                  "prepared.owl.carousel": e.proxy(function (t) {
                    t.namespace &&
                      this._core.settings.dotsData &&
                      this._templates.push(
                        '<div class="' +
                          this._core.settings.dotClass +
                          '">' +
                          e(t.content)
                            .find("[data-dot]")
                            .addBack("[data-dot]")
                            .attr("data-dot") +
                          "</div>"
                      );
                  }, this),
                  "added.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.dotsData &&
                      this._templates.splice(
                        e.position,
                        0,
                        this._templates.pop()
                      );
                  }, this),
                  "remove.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._core.settings.dotsData &&
                      this._templates.splice(e.position, 1);
                  }, this),
                  "changed.owl.carousel": e.proxy(function (e) {
                    e.namespace && "position" == e.property.name && this.draw();
                  }, this),
                  "initialized.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      !this._initialized &&
                      (this._core.trigger("initialize", null, "navigation"),
                      this.initialize(),
                      this.update(),
                      this.draw(),
                      (this._initialized = !0),
                      this._core.trigger("initialized", null, "navigation"));
                  }, this),
                  "refreshed.owl.carousel": e.proxy(function (e) {
                    e.namespace &&
                      this._initialized &&
                      (this._core.trigger("refresh", null, "navigation"),
                      this.update(),
                      this.draw(),
                      this._core.trigger("refreshed", null, "navigation"));
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                )),
                this.$element.on(this._handlers);
            };
            (r.Defaults = {
              nav: !1,
              navText: [
                '<span aria-label="Previous">&#x2039;</span>',
                '<span aria-label="Next">&#x203a;</span>',
              ],
              navSpeed: !1,
              navElement: 'button type="button" role="presentation"',
              navContainer: !1,
              navContainerClass: "owl-nav",
              navClass: ["owl-prev", "owl-next"],
              slideBy: 1,
              dotClass: "owl-dot",
              dotsClass: "owl-dots",
              dots: !0,
              dotsEach: !1,
              dotsData: !1,
              dotsSpeed: !1,
              dotsContainer: !1,
            }),
              (r.prototype.initialize = function () {
                var t,
                  n = this._core.settings;
                for (t in ((this._controls.$relative = (
                  n.navContainer
                    ? e(n.navContainer)
                    : e("<div>")
                        .addClass(n.navContainerClass)
                        .appendTo(this.$element)
                ).addClass("disabled")),
                (this._controls.$previous = e("<" + n.navElement + ">")
                  .addClass(n.navClass[0])
                  .html(n.navText[0])
                  .prependTo(this._controls.$relative)
                  .on(
                    "click",
                    e.proxy(function (e) {
                      this.prev(n.navSpeed);
                    }, this)
                  )),
                (this._controls.$next = e("<" + n.navElement + ">")
                  .addClass(n.navClass[1])
                  .html(n.navText[1])
                  .appendTo(this._controls.$relative)
                  .on(
                    "click",
                    e.proxy(function (e) {
                      this.next(n.navSpeed);
                    }, this)
                  )),
                n.dotsData ||
                  (this._templates = [
                    e('<button role="button">')
                      .addClass(n.dotClass)
                      .append(e("<span>"))
                      .prop("outerHTML"),
                  ]),
                (this._controls.$absolute = (
                  n.dotsContainer
                    ? e(n.dotsContainer)
                    : e("<div>").addClass(n.dotsClass).appendTo(this.$element)
                ).addClass("disabled")),
                this._controls.$absolute.on(
                  "click",
                  "button",
                  e.proxy(function (t) {
                    var i = e(t.target).parent().is(this._controls.$absolute)
                      ? e(t.target).index()
                      : e(t.target).parent().index();
                    t.preventDefault(), this.to(i, n.dotsSpeed);
                  }, this)
                ),
                this._overrides))
                  this._core[t] = e.proxy(this[t], this);
              }),
              (r.prototype.destroy = function () {
                var e, t, n, i, r;
                for (e in ((r = this._core.settings), this._handlers))
                  this.$element.off(e, this._handlers[e]);
                for (t in this._controls)
                  "$relative" === t && r.navContainer
                    ? this._controls[t].html("")
                    : this._controls[t].remove();
                for (i in this.overides) this._core[i] = this._overrides[i];
                for (n in Object.getOwnPropertyNames(this))
                  "function" != typeof this[n] && (this[n] = null);
              }),
              (r.prototype.update = function () {
                var e,
                  t,
                  n = this._core.clones().length / 2,
                  i = n + this._core.items().length,
                  r = this._core.maximum(!0),
                  o = this._core.settings,
                  s =
                    o.center || o.autoWidth || o.dotsData
                      ? 1
                      : o.dotsEach || o.items;
                if (
                  ("page" !== o.slideBy &&
                    (o.slideBy = Math.min(o.slideBy, o.items)),
                  o.dots || "page" == o.slideBy)
                )
                  for (this._pages = [], e = n, t = 0; e < i; e++) {
                    if (t >= s || 0 === t) {
                      if (
                        (this._pages.push({
                          start: Math.min(r, e - n),
                          end: e - n + s - 1,
                        }),
                        Math.min(r, e - n) === r)
                      )
                        break;
                      t = 0;
                    }
                    t += this._core.mergers(this._core.relative(e));
                  }
              }),
              (r.prototype.draw = function () {
                var t,
                  n = this._core.settings,
                  i = this._core.items().length <= n.items,
                  r = this._core.relative(this._core.current()),
                  o = n.loop || n.rewind;
                this._controls.$relative.toggleClass("disabled", !n.nav || i),
                  n.nav &&
                    (this._controls.$previous.toggleClass(
                      "disabled",
                      !o && r <= this._core.minimum(!0)
                    ),
                    this._controls.$next.toggleClass(
                      "disabled",
                      !o && r >= this._core.maximum(!0)
                    )),
                  this._controls.$absolute.toggleClass(
                    "disabled",
                    !n.dots || i
                  ),
                  n.dots &&
                    ((t =
                      this._pages.length -
                      this._controls.$absolute.children().length),
                    n.dotsData && 0 !== t
                      ? this._controls.$absolute.html(this._templates.join(""))
                      : t > 0
                      ? this._controls.$absolute.append(
                          new Array(t + 1).join(this._templates[0])
                        )
                      : t < 0 &&
                        this._controls.$absolute.children().slice(t).remove(),
                    this._controls.$absolute
                      .find(".active")
                      .removeClass("active"),
                    this._controls.$absolute
                      .children()
                      .eq(e.inArray(this.current(), this._pages))
                      .addClass("active"));
              }),
              (r.prototype.onTrigger = function (t) {
                var n = this._core.settings;
                t.page = {
                  index: e.inArray(this.current(), this._pages),
                  count: this._pages.length,
                  size:
                    n &&
                    (n.center || n.autoWidth || n.dotsData
                      ? 1
                      : n.dotsEach || n.items),
                };
              }),
              (r.prototype.current = function () {
                var t = this._core.relative(this._core.current());
                return e
                  .grep(
                    this._pages,
                    e.proxy(function (e, n) {
                      return e.start <= t && e.end >= t;
                    }, this)
                  )
                  .pop();
              }),
              (r.prototype.getPosition = function (t) {
                var n,
                  i,
                  r = this._core.settings;
                return (
                  "page" == r.slideBy
                    ? ((n = e.inArray(this.current(), this._pages)),
                      (i = this._pages.length),
                      t ? ++n : --n,
                      (n = this._pages[((n % i) + i) % i].start))
                    : ((n = this._core.relative(this._core.current())),
                      (i = this._core.items().length),
                      t ? (n += r.slideBy) : (n -= r.slideBy)),
                  n
                );
              }),
              (r.prototype.next = function (t) {
                e.proxy(this._overrides.to, this._core)(
                  this.getPosition(!0),
                  t
                );
              }),
              (r.prototype.prev = function (t) {
                e.proxy(this._overrides.to, this._core)(
                  this.getPosition(!1),
                  t
                );
              }),
              (r.prototype.to = function (t, n, i) {
                var r;
                !i && this._pages.length
                  ? ((r = this._pages.length),
                    e.proxy(this._overrides.to, this._core)(
                      this._pages[((t % r) + r) % r].start,
                      n
                    ))
                  : e.proxy(this._overrides.to, this._core)(t, n);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Navigation = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            "use strict";
            var r = function (n) {
              (this._core = n),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                  "initialized.owl.carousel": e.proxy(function (n) {
                    n.namespace &&
                      "URLHash" === this._core.settings.startPosition &&
                      e(t).trigger("hashchange.owl.navigation");
                  }, this),
                  "prepared.owl.carousel": e.proxy(function (t) {
                    if (t.namespace) {
                      var n = e(t.content)
                        .find("[data-hash]")
                        .addBack("[data-hash]")
                        .attr("data-hash");
                      if (!n) return;
                      this._hashes[n] = t.content;
                    }
                  }, this),
                  "changed.owl.carousel": e.proxy(function (n) {
                    if (n.namespace && "position" === n.property.name) {
                      var i = this._core.items(
                          this._core.relative(this._core.current())
                        ),
                        r = e
                          .map(this._hashes, function (e, t) {
                            return e === i ? t : null;
                          })
                          .join();
                      if (!r || t.location.hash.slice(1) === r) return;
                      t.location.hash = r;
                    }
                  }, this),
                }),
                (this._core.options = e.extend(
                  {},
                  r.Defaults,
                  this._core.options
                )),
                this.$element.on(this._handlers),
                e(t).on(
                  "hashchange.owl.navigation",
                  e.proxy(function (e) {
                    var n = t.location.hash.substring(1),
                      i = this._core.$stage.children(),
                      r = this._hashes[n] && i.index(this._hashes[n]);
                    void 0 !== r &&
                      r !== this._core.current() &&
                      this._core.to(this._core.relative(r), !1, !0);
                  }, this)
                );
            };
            (r.Defaults = { URLhashListener: !1 }),
              (r.prototype.destroy = function () {
                var n, i;
                for (n in (e(t).off("hashchange.owl.navigation"),
                this._handlers))
                  this._core.$element.off(n, this._handlers[n]);
                for (i in Object.getOwnPropertyNames(this))
                  "function" != typeof this[i] && (this[i] = null);
              }),
              (e.fn.owlCarousel.Constructor.Plugins.Hash = r);
          })(window.Zepto || window.jQuery, window, document),
          (function (e, t, n, i) {
            var r = e("<support>").get(0).style,
              o = "Webkit Moz O ms".split(" "),
              s = {
                transition: {
                  end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend",
                  },
                },
                animation: {
                  end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend",
                  },
                },
              };
            function a(t, n) {
              var i = !1,
                s = t.charAt(0).toUpperCase() + t.slice(1);
              return (
                e.each(
                  (t + " " + o.join(s + " ") + s).split(" "),
                  function (e, t) {
                    if (void 0 !== r[t]) return (i = !n || t), !1;
                  }
                ),
                i
              );
            }
            function l(e) {
              return a(e, !0);
            }
            !!a("transition") &&
              ((e.support.transition = new String(l("transition"))),
              (e.support.transition.end =
                s.transition.end[e.support.transition])),
              !!a("animation") &&
                ((e.support.animation = new String(l("animation"))),
                (e.support.animation.end =
                  s.animation.end[e.support.animation])),
              a("transform") &&
                ((e.support.transform = new String(l("transform"))),
                (e.support.transform3d = !!a("perspective")));
          })(window.Zepto || window.jQuery, window, document);
      },
    },
    t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(638),
        t = n.n(e);
      (n.g.jQuery = n.g.$ = t()),
        n(982),
        n(874),
        n(313),
        t()(function () {
          setTimeout(function e() {
            document.getElementById("comebacker").classList.contains("active")
              ? setTimeout(e, 6e4)
              : t().magnificPopup.open({
                  items: { src: "#modalOrder" },
                  type: "inline",
                  fixedContentPos: !1,
                  fixedBgPos: !0,
                  overflowY: "auto",
                  closeBtnInside: !0,
                  showCloseBtn: !1,
                  preloader: !1,
                  midClick: !0,
                  removalDelay: 300,
                  mainClass: "my-mfp-zoom-in",
                });
          }, 12e4);
          var e = t()(".header__hamburger"),
            n = t()(".header__menu");
          e.on("click", function () {
            t()(this).toggleClass("header__hamburger--active"),
              n.toggleClass("header__menu--active"),
              t()("body").toggleClass("body--overlay");
          }),
            new IntersectionObserver(
              function (e, n) {
                e[0].isIntersecting &&
                  t().magnificPopup.open({
                    items: { src: "#modalOrder" },
                    type: "inline",
                    fixedContentPos: !1,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !0,
                    showCloseBtn: !1,
                    preloader: !1,
                    midClick: !0,
                    mainClass: "my-mfp-zoom-in",
                  });
              },
              { threshold: 0.5 }
            ).observe(document.querySelector(".sixth-section"));
          var i = t()(".seventh-section__slider");
          i.owlCarousel({
            nav: !1,
            loop: !0,
            dots: !1,
            rewind: !0,
            responsive: {
              1200: { items: 4, margin: 30, mouseDrag: !1 },
              576: { items: 3, margin: 20 },
              0: { items: 2, margin: 10, mouseDrag: !0 },
            },
          }),
            t()(".seventh-section__slider-button-nav--prev").click(function () {
              i.trigger("prev.owl.carousel");
            }),
            t()(".seventh-section__slider-button-nav--next").click(function () {
              i.trigger("next.owl.carousel");
            });
          var r = t()(".fourth-section__tab"),
            o = t()(".fourth-section__tab-content"),
            s = t()(".fourth-section__tab-content-heading");
          r.on("click", function () {
            t()(this)
              .addClass("fourth-section__tab--active")
              .siblings()
              .removeClass("fourth-section__tab--active"),
              o
                .eq(t()(this).index())
                .addClass("fourth-section__tab-content--active")
                .siblings()
                .removeClass("fourth-section__tab-content--active"),
              t()(window).innerWidth() < 1200 &&
                s
                  .eq(t()(this).index())
                  .addClass("fourth-section__tab-content-heading--active")
                  .siblings()
                  .removeClass("fourth-section__tab-content-heading--active");
          }),
            document
              .querySelectorAll("#order form input")
              .forEach(function (e) {
                e.addEventListener("change", function () {
                  t().magnificPopup.close();
                });
              }),
            t()('[data-link="scroll"]').on("click", function () {
              e.removeClass("header__hamburger--active"),
                n.removeClass("header__menu--active"),
                t()("body").removeClass("body--overlay");
              var i = t()(this).attr("href"),
                r = t()("".concat(i)).offset().top - 50;
              t()("html").animate({ scrollTop: r }, 1e3);
            }),
            (document.querySelector(".footer__year").textContent =
              new Date().getFullYear());
        });
    })();
})();
