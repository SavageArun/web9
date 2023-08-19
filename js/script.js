/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var u = (e, t) => () => (t || e((t = {
		exports: {}
	}).exports, t), t.exports);
	var Xi = u(() => {
		window.tram = function(e) {
			function t(l, y) {
				var b = new v.Bare;
				return b.init(l, y)
			}

			function r(l) {
				return l.replace(/[A-Z]/g, function(y) {
					return "-" + y.toLowerCase()
				})
			}

			function n(l) {
				var y = parseInt(l.slice(1), 16),
					b = y >> 16 & 255,
					w = y >> 8 & 255,
					T = 255 & y;
				return [b, w, T]
			}

			function o(l, y, b) {
				return "#" + (1 << 24 | l << 16 | y << 8 | b).toString(16).slice(1)
			}

			function i() {}

			function a(l, y) {
				d("Type warning: Expected: [" + l + "] Got: [" + typeof y + "] " + y)
			}

			function s(l, y, b) {
				d("Units do not match [" + l + "]: " + y + ", " + b)
			}

			function c(l, y, b) {
				if (y !== void 0 && (b = y), l === void 0) return b;
				var w = b;
				return Ye.test(l) || !Ve.test(l) ? w = parseInt(l, 10) : Ve.test(l) && (w = 1e3 * parseFloat(l)), 0 > w && (w = 0), w === w ? w : b
			}

			function d(l) {
				fe.debug && window && window.console.warn(l)
			}

			function E(l) {
				for (var y = -1, b = l ? l.length : 0, w = []; ++y < b;) {
					var T = l[y];
					T && w.push(T)
				}
				return w
			}
			var f = function(l, y, b) {
					function w(ae) {
						return typeof ae == "object"
					}

					function T(ae) {
						return typeof ae == "function"
					}

					function C() {}

					function Z(ae, _e) {
						function H() {
							var Me = new le;
							return T(Me.init) && Me.init.apply(Me, arguments), Me
						}

						function le() {}
						_e === b && (_e = ae, ae = Object), H.Bare = le;
						var de, Se = C[l] = ae[l],
							st = le[l] = H[l] = new C;
						return st.constructor = H, H.mixin = function(Me) {
							return le[l] = H[l] = Z(H, Me)[l], H
						}, H.open = function(Me) {
							if (de = {}, T(Me) ? de = Me.call(H, st, Se, H, ae) : w(Me) && (de = Me), w(de))
								for (var Or in de) y.call(de, Or) && (st[Or] = de[Or]);
							return T(st.init) || (st.init = ae), H
						}, H.open(_e)
					}
					return Z
				}("prototype", {}.hasOwnProperty),
				_ = {
					ease: ["ease", function(l, y, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return y + b * (-2.75 * C * T + 11 * T * T + -15.5 * C + 8 * T + .25 * l)
					}],
					"ease-in": ["ease-in", function(l, y, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return y + b * (-1 * C * T + 3 * T * T + -3 * C + 2 * T)
					}],
					"ease-out": ["ease-out", function(l, y, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return y + b * (.3 * C * T + -1.6 * T * T + 2.2 * C + -1.8 * T + 1.9 * l)
					}],
					"ease-in-out": ["ease-in-out", function(l, y, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return y + b * (2 * C * T + -5 * T * T + 2 * C + 2 * T)
					}],
					linear: ["linear", function(l, y, b, w) {
						return b * l / w + y
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, y, b, w) {
						return b * (l /= w) * l + y
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, y, b, w) {
						return -b * (l /= w) * (l - 2) + y
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, y, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l + y : -b / 2 * (--l * (l - 2) - 1) + y
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, y, b, w) {
						return b * (l /= w) * l * l + y
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, y, b, w) {
						return b * ((l = l / w - 1) * l * l + 1) + y
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, y, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l * l + y : b / 2 * ((l -= 2) * l * l + 2) + y
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, y, b, w) {
						return b * (l /= w) * l * l * l + y
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, y, b, w) {
						return -b * ((l = l / w - 1) * l * l * l - 1) + y
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, y, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l * l * l + y : -b / 2 * ((l -= 2) * l * l * l - 2) + y
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, y, b, w) {
						return b * (l /= w) * l * l * l * l + y
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, y, b, w) {
						return b * ((l = l / w - 1) * l * l * l * l + 1) + y
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, y, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l * l * l * l + y : b / 2 * ((l -= 2) * l * l * l * l + 2) + y
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, y, b, w) {
						return -b * Math.cos(l / w * (Math.PI / 2)) + b + y
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, y, b, w) {
						return b * Math.sin(l / w * (Math.PI / 2)) + y
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, y, b, w) {
						return -b / 2 * (Math.cos(Math.PI * l / w) - 1) + y
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, y, b, w) {
						return l === 0 ? y : b * Math.pow(2, 10 * (l / w - 1)) + y
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, y, b, w) {
						return l === w ? y + b : b * (-Math.pow(2, -10 * l / w) + 1) + y
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, y, b, w) {
						return l === 0 ? y : l === w ? y + b : (l /= w / 2) < 1 ? b / 2 * Math.pow(2, 10 * (l - 1)) + y : b / 2 * (-Math.pow(2, -10 * --l) + 2) + y
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, y, b, w) {
						return -b * (Math.sqrt(1 - (l /= w) * l) - 1) + y
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, y, b, w) {
						return b * Math.sqrt(1 - (l = l / w - 1) * l) + y
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, y, b, w) {
						return (l /= w / 2) < 1 ? -b / 2 * (Math.sqrt(1 - l * l) - 1) + y : b / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + y
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, y, b, w, T) {
						return T === void 0 && (T = 1.70158), b * (l /= w) * l * ((T + 1) * l - T) + y
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, y, b, w, T) {
						return T === void 0 && (T = 1.70158), b * ((l = l / w - 1) * l * ((T + 1) * l + T) + 1) + y
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, y, b, w, T) {
						return T === void 0 && (T = 1.70158), (l /= w / 2) < 1 ? b / 2 * l * l * (((T *= 1.525) + 1) * l - T) + y : b / 2 * ((l -= 2) * l * (((T *= 1.525) + 1) * l + T) + 2) + y
					}]
				},
				p = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				g = document,
				O = window,
				R = "bkwld-tram",
				A = /[\-\.0-9]/g,
				x = /[A-Z]/,
				S = "number",
				L = /^(rgb|#)/,
				q = /(em|cm|mm|in|pt|pc|px)$/,
				P = /(em|cm|mm|in|pt|pc|px|%)$/,
				V = /(deg|rad|turn)$/,
				k = "unitless",
				Q = /(all|none) 0s ease 0s/,
				oe = /^(width|height)$/,
				re = " ",
				X = g.createElement("a"),
				I = ["Webkit", "Moz", "O", "ms"],
				D = ["-webkit-", "-moz-", "-o-", "-ms-"],
				F = function(l) {
					if (l in X.style) return {
						dom: l,
						css: l
					};
					var y, b, w = "",
						T = l.split("-");
					for (y = 0; y < T.length; y++) w += T[y].charAt(0).toUpperCase() + T[y].slice(1);
					for (y = 0; y < I.length; y++)
						if (b = I[y] + w, b in X.style) return {
							dom: b,
							css: D[y] + l
						}
				},
				G = t.support = {
					bind: Function.prototype.bind,
					transform: F("transform"),
					transition: F("transition"),
					backface: F("backface-visibility"),
					timing: F("transition-timing-function")
				};
			if (G.transition) {
				var $ = G.timing.dom;
				if (X.style[$] = _["ease-in-back"][0], !X.style[$])
					for (var ne in p) _[ne][0] = p[ne]
			}
			var M = t.frame = function() {
					var l = O.requestAnimationFrame || O.webkitRequestAnimationFrame || O.mozRequestAnimationFrame || O.oRequestAnimationFrame || O.msRequestAnimationFrame;
					return l && G.bind ? l.bind(O) : function(y) {
						O.setTimeout(y, 16)
					}
				}(),
				U = t.now = function() {
					var l = O.performance,
						y = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
					return y && G.bind ? y.bind(l) : Date.now || function() {
						return +new Date
					}
				}(),
				K = f(function(l) {
					function y(te, pe) {
						var Ie = E(("" + te).split(re)),
							he = Ie[0];
						pe = pe || {};
						var Fe = j[he];
						if (!Fe) return d("Unsupported property: " + he);
						if (!pe.weak || !this.props[he]) {
							var $e = Fe[0],
								We = this.props[he];
							return We || (We = this.props[he] = new $e.Bare), We.init(this.$el, Ie, Fe, pe), We
						}
					}

					function b(te, pe, Ie) {
						if (te) {
							var he = typeof te;
							if (pe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), he == "number" && pe) return this.timer = new J({
								duration: te,
								context: this,
								complete: C
							}), void(this.active = !0);
							if (he == "string" && pe) {
								switch (te) {
									case "hide":
										H.call(this);
										break;
									case "stop":
										Z.call(this);
										break;
									case "redraw":
										le.call(this);
										break;
									default:
										y.call(this, te, Ie && Ie[1])
								}
								return C.call(this)
							}
							if (he == "function") return void te.call(this, this);
							if (he == "object") {
								var Fe = 0;
								st.call(this, te, function(Ae, Tm) {
									Ae.span > Fe && (Fe = Ae.span), Ae.stop(), Ae.animate(Tm)
								}, function(Ae) {
									"wait" in Ae && (Fe = c(Ae.wait, 0))
								}), Se.call(this), Fe > 0 && (this.timer = new J({
									duration: Fe,
									context: this
								}), this.active = !0, pe && (this.timer.complete = C));
								var $e = this,
									We = !1,
									un = {};
								M(function() {
									st.call($e, te, function(Ae) {
										Ae.active && (We = !0, un[Ae.name] = Ae.nextStyle)
									}), We && $e.$el.css(un)
								})
							}
						}
					}

					function w(te) {
						te = c(te, 0), this.active ? this.queue.push({
							options: te
						}) : (this.timer = new J({
							duration: te,
							context: this,
							complete: C
						}), this.active = !0)
					}

					function T(te) {
						return this.active ? (this.queue.push({
							options: te,
							args: arguments
						}), void(this.timer.complete = C)) : d("No active transition timer. Use start() or wait() before then().")
					}

					function C() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var te = this.queue.shift();
							b.call(this, te.options, !0, te.args)
						}
					}

					function Z(te) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var pe;
						typeof te == "string" ? (pe = {}, pe[te] = 1) : pe = typeof te == "object" && te != null ? te : this.props, st.call(this, pe, Me), Se.call(this)
					}

					function ae(te) {
						Z.call(this, te), st.call(this, te, Or, mm)
					}

					function _e(te) {
						typeof te != "string" && (te = "block"), this.el.style.display = te
					}

					function H() {
						Z.call(this), this.el.style.display = "none"
					}

					function le() {
						this.el.offsetHeight
					}

					function de() {
						Z.call(this), e.removeData(this.el, R), this.$el = this.el = null
					}

					function Se() {
						var te, pe, Ie = [];
						this.upstream && Ie.push(this.upstream);
						for (te in this.props) pe = this.props[te], pe.active && Ie.push(pe.string);
						Ie = Ie.join(","), this.style !== Ie && (this.style = Ie, this.el.style[G.transition.dom] = Ie)
					}

					function st(te, pe, Ie) {
						var he, Fe, $e, We, un = pe !== Me,
							Ae = {};
						for (he in te) $e = te[he], he in ve ? (Ae.transform || (Ae.transform = {}), Ae.transform[he] = $e) : (x.test(he) && (he = r(he)), he in j ? Ae[he] = $e : (We || (We = {}), We[he] = $e));
						for (he in Ae) {
							if ($e = Ae[he], Fe = this.props[he], !Fe) {
								if (!un) continue;
								Fe = y.call(this, he)
							}
							pe.call(this, Fe, $e)
						}
						Ie && We && Ie.call(this, We)
					}

					function Me(te) {
						te.stop()
					}

					function Or(te, pe) {
						te.set(pe)
					}

					function mm(te) {
						this.$el.css(te)
					}

					function Qe(te, pe) {
						l[te] = function() {
							return this.children ? Im.call(this, pe, arguments) : (this.el && pe.apply(this, arguments), this)
						}
					}

					function Im(te, pe) {
						var Ie, he = this.children.length;
						for (Ie = 0; he > Ie; Ie++) te.apply(this.children[Ie], pe);
						return this
					}
					l.init = function(te) {
						if (this.$el = e(te), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, fe.keepInherited && !fe.fallback) {
							var pe = W(this.el, "transition");
							pe && !Q.test(pe) && (this.upstream = pe)
						}
						G.backface && fe.hideBackface && h(this.el, G.backface.css, "hidden")
					}, Qe("add", y), Qe("start", b), Qe("wait", w), Qe("then", T), Qe("next", C), Qe("stop", Z), Qe("set", ae), Qe("show", _e), Qe("hide", H), Qe("redraw", le), Qe("destroy", de)
				}),
				v = f(K, function(l) {
					function y(b, w) {
						var T = e.data(b, R) || e.data(b, R, new K.Bare);
						return T.el || T.init(b), w ? T.start(w) : T
					}
					l.init = function(b, w) {
						var T = e(b);
						if (!T.length) return this;
						if (T.length === 1) return y(T[0], w);
						var C = [];
						return T.each(function(Z, ae) {
							C.push(y(ae, w))
						}), this.children = C, this
					}
				}),
				m = f(function(l) {
					function y() {
						var C = this.get();
						this.update("auto");
						var Z = this.get();
						return this.update(C), Z
					}

					function b(C, Z, ae) {
						return Z !== void 0 && (ae = Z), C in _ ? C : ae
					}

					function w(C) {
						var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
						return (Z ? o(Z[1], Z[2], Z[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var T = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					l.init = function(C, Z, ae, _e) {
						this.$el = C, this.el = C[0];
						var H = Z[0];
						ae[2] && (H = ae[2]), z[H] && (H = z[H]), this.name = H, this.type = ae[1], this.duration = c(Z[1], this.duration, T.duration), this.ease = b(Z[2], this.ease, T.ease), this.delay = c(Z[3], this.delay, T.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = oe.test(this.name), this.unit = _e.unit || this.unit || fe.defaultUnit, this.angle = _e.angle || this.angle || fe.defaultAngle, fe.fallback || _e.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + _[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
					}, l.set = function(C) {
						C = this.convert(C, this.type), this.update(C), this.redraw()
					}, l.transition = function(C) {
						this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = y.call(this))), this.nextStyle = C
					}, l.fallback = function(C) {
						var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
						C = this.convert(C, this.type), this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)), C == "auto" && (C = y.call(this))), this.tween = new Y({
							from: Z,
							to: C,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.get = function() {
						return W(this.el, this.name)
					}, l.update = function(C) {
						h(this.el, this.name, C)
					}, l.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, h(this.el, this.name, this.get()));
						var C = this.tween;
						C && C.context && C.destroy()
					}, l.convert = function(C, Z) {
						if (C == "auto" && this.auto) return C;
						var ae, _e = typeof C == "number",
							H = typeof C == "string";
						switch (Z) {
							case S:
								if (_e) return C;
								if (H && C.replace(A, "") === "") return +C;
								ae = "number(unitless)";
								break;
							case L:
								if (H) {
									if (C === "" && this.original) return this.original;
									if (Z.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : w(C)
								}
								ae = "hex or rgb string";
								break;
							case q:
								if (_e) return C + this.unit;
								if (H && Z.test(C)) return C;
								ae = "number(px) or string(unit)";
								break;
							case P:
								if (_e) return C + this.unit;
								if (H && Z.test(C)) return C;
								ae = "number(px) or string(unit or %)";
								break;
							case V:
								if (_e) return C + this.angle;
								if (H && Z.test(C)) return C;
								ae = "number(deg) or string(angle)";
								break;
							case k:
								if (_e || H && P.test(C)) return C;
								ae = "number(unitless) or string(unit or %)"
						}
						return a(ae, C), C
					}, l.redraw = function() {
						this.el.offsetHeight
					}
				}),
				B = f(m, function(l, y) {
					l.init = function() {
						y.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), L))
					}
				}),
				ee = f(m, function(l, y) {
					l.init = function() {
						y.init.apply(this, arguments), this.animate = this.fallback
					}, l.get = function() {
						return this.$el[this.name]()
					}, l.update = function(b) {
						this.$el[this.name](b)
					}
				}),
				ie = f(m, function(l, y) {
					function b(w, T) {
						var C, Z, ae, _e, H;
						for (C in w) _e = ve[C], ae = _e[0], Z = _e[1] || C, H = this.convert(w[C], ae), T.call(this, Z, H, ae)
					}
					l.init = function() {
						y.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && fe.perspective && (this.current.perspective = fe.perspective, h(this.el, this.name, this.style(this.current)), this.redraw()))
					}, l.set = function(w) {
						b.call(this, w, function(T, C) {
							this.current[T] = C
						}), h(this.el, this.name, this.style(this.current)), this.redraw()
					}, l.transition = function(w) {
						var T = this.values(w);
						this.tween = new Oe({
							current: this.current,
							values: T,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var C, Z = {};
						for (C in this.current) Z[C] = C in T ? T[C] : this.current[C];
						this.active = !0, this.nextStyle = this.style(Z)
					}, l.fallback = function(w) {
						var T = this.values(w);
						this.tween = new Oe({
							current: this.current,
							values: T,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.update = function() {
						h(this.el, this.name, this.style(this.current))
					}, l.style = function(w) {
						var T, C = "";
						for (T in w) C += T + "(" + w[T] + ") ";
						return C
					}, l.values = function(w) {
						var T, C = {};
						return b.call(this, w, function(Z, ae, _e) {
							C[Z] = ae, this.current[Z] === void 0 && (T = 0, ~Z.indexOf("scale") && (T = 1), this.current[Z] = this.convert(T, _e))
						}), C
					}
				}),
				Y = f(function(l) {
					function y(H) {
						ae.push(H) === 1 && M(b)
					}

					function b() {
						var H, le, de, Se = ae.length;
						if (Se)
							for (M(b), le = U(), H = Se; H--;) de = ae[H], de && de.render(le)
					}

					function w(H) {
						var le, de = e.inArray(H, ae);
						de >= 0 && (le = ae.slice(de + 1), ae.length = de, le.length && (ae = ae.concat(le)))
					}

					function T(H) {
						return Math.round(H * _e) / _e
					}

					function C(H, le, de) {
						return o(H[0] + de * (le[0] - H[0]), H[1] + de * (le[1] - H[1]), H[2] + de * (le[2] - H[2]))
					}
					var Z = {
						ease: _.ease[1],
						from: 0,
						to: 1
					};
					l.init = function(H) {
						this.duration = H.duration || 0, this.delay = H.delay || 0;
						var le = H.ease || Z.ease;
						_[le] && (le = _[le][1]), typeof le != "function" && (le = Z.ease), this.ease = le, this.update = H.update || i, this.complete = H.complete || i, this.context = H.context || this, this.name = H.name;
						var de = H.from,
							Se = H.to;
						de === void 0 && (de = Z.from), Se === void 0 && (Se = Z.to), this.unit = H.unit || "", typeof de == "number" && typeof Se == "number" ? (this.begin = de, this.change = Se - de) : this.format(Se, de), this.value = this.begin + this.unit, this.start = U(), H.autoplay !== !1 && this.play()
					}, l.play = function() {
						this.active || (this.start || (this.start = U()), this.active = !0, y(this))
					}, l.stop = function() {
						this.active && (this.active = !1, w(this))
					}, l.render = function(H) {
						var le, de = H - this.start;
						if (this.delay) {
							if (de <= this.delay) return;
							de -= this.delay
						}
						if (de < this.duration) {
							var Se = this.ease(de, 0, 1, this.duration);
							return le = this.startRGB ? C(this.startRGB, this.endRGB, Se) : T(this.begin + Se * this.change), this.value = le + this.unit, void this.update.call(this.context, this.value)
						}
						le = this.endHex || this.begin + this.change, this.value = le + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, l.format = function(H, le) {
						if (le += "", H += "", H.charAt(0) == "#") return this.startRGB = n(le), this.endRGB = n(H), this.endHex = H, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var de = le.replace(A, ""),
								Se = H.replace(A, "");
							de !== Se && s("tween", le, H), this.unit = de
						}
						le = parseFloat(le), H = parseFloat(H), this.begin = this.value = le, this.change = H - le
					}, l.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = i
					};
					var ae = [],
						_e = 1e3
				}),
				J = f(Y, function(l) {
					l.init = function(y) {
						this.duration = y.duration || 0, this.complete = y.complete || i, this.context = y.context, this.play()
					}, l.render = function(y) {
						var b = y - this.start;
						b < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				Oe = f(Y, function(l, y) {
					l.init = function(b) {
						this.context = b.context, this.update = b.update, this.tweens = [], this.current = b.current;
						var w, T;
						for (w in b.values) T = b.values[w], this.current[w] !== T && this.tweens.push(new Y({
							name: w,
							from: this.current[w],
							to: T,
							duration: b.duration,
							delay: b.delay,
							ease: b.ease,
							autoplay: !1
						}));
						this.play()
					}, l.render = function(b) {
						var w, T, C = this.tweens.length,
							Z = !1;
						for (w = C; w--;) T = this.tweens[w], T.context && (T.render(b), this.current[T.name] = T.value, Z = !0);
						return Z ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, l.destroy = function() {
						if (y.destroy.call(this), this.tweens) {
							var b, w = this.tweens.length;
							for (b = w; b--;) this.tweens[b].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				fe = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !G.transition,
					agentTests: []
				};
			t.fallback = function(l) {
				if (!G.transition) return fe.fallback = !0;
				fe.agentTests.push("(" + l + ")");
				var y = new RegExp(fe.agentTests.join("|"), "i");
				fe.fallback = y.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
				return new Y(l)
			}, t.delay = function(l, y, b) {
				return new J({
					complete: y,
					duration: l,
					context: b
				})
			}, e.fn.tram = function(l) {
				return t.call(null, this, l)
			};
			var h = e.style,
				W = e.css,
				z = {
					transform: G.transform && G.transform.css
				},
				j = {
					color: [B, L],
					background: [B, L, "background-color"],
					"outline-color": [B, L],
					"border-color": [B, L],
					"border-top-color": [B, L],
					"border-right-color": [B, L],
					"border-bottom-color": [B, L],
					"border-left-color": [B, L],
					"border-width": [m, q],
					"border-top-width": [m, q],
					"border-right-width": [m, q],
					"border-bottom-width": [m, q],
					"border-left-width": [m, q],
					"border-spacing": [m, q],
					"letter-spacing": [m, q],
					margin: [m, q],
					"margin-top": [m, q],
					"margin-right": [m, q],
					"margin-bottom": [m, q],
					"margin-left": [m, q],
					padding: [m, q],
					"padding-top": [m, q],
					"padding-right": [m, q],
					"padding-bottom": [m, q],
					"padding-left": [m, q],
					"outline-width": [m, q],
					opacity: [m, S],
					top: [m, P],
					right: [m, P],
					bottom: [m, P],
					left: [m, P],
					"font-size": [m, P],
					"text-indent": [m, P],
					"word-spacing": [m, P],
					width: [m, P],
					"min-width": [m, P],
					"max-width": [m, P],
					height: [m, P],
					"min-height": [m, P],
					"max-height": [m, P],
					"line-height": [m, k],
					"scroll-top": [ee, S, "scrollTop"],
					"scroll-left": [ee, S, "scrollLeft"]
				},
				ve = {};
			G.transform && (j.transform = [ie], ve = {
				x: [P, "translateX"],
				y: [P, "translateY"],
				rotate: [V],
				rotateX: [V],
				rotateY: [V],
				scale: [S],
				scaleX: [S],
				scaleY: [S],
				skew: [V],
				skewX: [V],
				skewY: [V]
			}), G.transform && G.backface && (ve.z = [P, "translateZ"], ve.rotateZ = [V], ve.scaleZ = [S], ve.perspective = [q]);
			var Ye = /ms/,
				Ve = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var ws = u((FW, As) => {
		var Om = window.$,
			bm = Xi() && Om.tram;
		As.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				o = Function.prototype,
				i = r.push,
				a = r.slice,
				s = r.concat,
				c = n.toString,
				d = n.hasOwnProperty,
				E = r.forEach,
				f = r.map,
				_ = r.reduce,
				p = r.reduceRight,
				g = r.filter,
				O = r.every,
				R = r.some,
				A = r.indexOf,
				x = r.lastIndexOf,
				S = Array.isArray,
				L = Object.keys,
				q = o.bind,
				P = e.each = e.forEach = function(I, D, F) {
					if (I == null) return I;
					if (E && I.forEach === E) I.forEach(D, F);
					else if (I.length === +I.length) {
						for (var G = 0, $ = I.length; G < $; G++)
							if (D.call(F, I[G], G, I) === t) return
					} else
						for (var ne = e.keys(I), G = 0, $ = ne.length; G < $; G++)
							if (D.call(F, I[ne[G]], ne[G], I) === t) return;
					return I
				};
			e.map = e.collect = function(I, D, F) {
				var G = [];
				return I == null ? G : f && I.map === f ? I.map(D, F) : (P(I, function($, ne, M) {
					G.push(D.call(F, $, ne, M))
				}), G)
			}, e.find = e.detect = function(I, D, F) {
				var G;
				return V(I, function($, ne, M) {
					if (D.call(F, $, ne, M)) return G = $, !0
				}), G
			}, e.filter = e.select = function(I, D, F) {
				var G = [];
				return I == null ? G : g && I.filter === g ? I.filter(D, F) : (P(I, function($, ne, M) {
					D.call(F, $, ne, M) && G.push($)
				}), G)
			};
			var V = e.some = e.any = function(I, D, F) {
				D || (D = e.identity);
				var G = !1;
				return I == null ? G : R && I.some === R ? I.some(D, F) : (P(I, function($, ne, M) {
					if (G || (G = D.call(F, $, ne, M))) return t
				}), !!G)
			};
			e.contains = e.include = function(I, D) {
				return I == null ? !1 : A && I.indexOf === A ? I.indexOf(D) != -1 : V(I, function(F) {
					return F === D
				})
			}, e.delay = function(I, D) {
				var F = a.call(arguments, 2);
				return setTimeout(function() {
					return I.apply(null, F)
				}, D)
			}, e.defer = function(I) {
				return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)))
			}, e.throttle = function(I) {
				var D, F, G;
				return function() {
					D || (D = !0, F = arguments, G = this, bm.frame(function() {
						D = !1, I.apply(G, F)
					}))
				}
			}, e.debounce = function(I, D, F) {
				var G, $, ne, M, U, K = function() {
					var v = e.now() - M;
					v < D ? G = setTimeout(K, D - v) : (G = null, F || (U = I.apply(ne, $), ne = $ = null))
				};
				return function() {
					ne = this, $ = arguments, M = e.now();
					var v = F && !G;
					return G || (G = setTimeout(K, D)), v && (U = I.apply(ne, $), ne = $ = null), U
				}
			}, e.defaults = function(I) {
				if (!e.isObject(I)) return I;
				for (var D = 1, F = arguments.length; D < F; D++) {
					var G = arguments[D];
					for (var $ in G) I[$] === void 0 && (I[$] = G[$])
				}
				return I
			}, e.keys = function(I) {
				if (!e.isObject(I)) return [];
				if (L) return L(I);
				var D = [];
				for (var F in I) e.has(I, F) && D.push(F);
				return D
			}, e.has = function(I, D) {
				return d.call(I, D)
			}, e.isObject = function(I) {
				return I === Object(I)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var k = /(.)^/,
				Q = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				oe = /\\|'|\r|\n|\u2028|\u2029/g,
				re = function(I) {
					return "\\" + Q[I]
				},
				X = /^\s*(\w|\$)+\s*$/;
			return e.template = function(I, D, F) {
				!D && F && (D = F), D = e.defaults({}, D, e.templateSettings);
				var G = RegExp([(D.escape || k).source, (D.interpolate || k).source, (D.evaluate || k).source].join("|") + "|$", "g"),
					$ = 0,
					ne = "__p+='";
				I.replace(G, function(v, m, B, ee, ie) {
					return ne += I.slice($, ie).replace(oe, re), $ = ie + v.length, m ? ne += `'+
((__t=(` + m + `))==null?'':_.escape(__t))+
'` : B ? ne += `'+
((__t=(` + B + `))==null?'':__t)+
'` : ee && (ne += `';
` + ee + `
__p+='`), v
				}), ne += `';
`;
				var M = D.variable;
				if (M) {
					if (!X.test(M)) throw new Error("variable is not a bare identifier: " + M)
				} else ne = `with(obj||{}){
` + ne + `}
`, M = "obj";
				ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
				var U;
				try {
					U = new Function(D.variable || "obj", "_", ne)
				} catch (v) {
					throw v.source = ne, v
				}
				var K = function(v) {
					return U.call(this, v, e)
				};
				return K.source = "function(" + M + `){
` + ne + "}", K
			}, e
		}()
	});
	var ke = u((GW, Ds) => {
		var ge = {},
			kt = {},
			Kt = [],
			Vi = window.Webflow || [],
			Tt = window.jQuery,
			Je = Tt(window),
			Sm = Tt(document),
			ut = Tt.isFunction,
			Ze = ge._ = ws(),
			Cs = ge.tram = Xi() && Tt.tram,
			ln = !1,
			Wi = !1;
		Cs.config.hideBackface = !1;
		Cs.config.keepInherited = !0;
		ge.define = function(e, t, r) {
			kt[e] && Ns(kt[e]);
			var n = kt[e] = t(Tt, Ze, r) || {};
			return xs(n), n
		};
		ge.require = function(e) {
			return kt[e]
		};

		function xs(e) {
			ge.env() && (ut(e.design) && Je.on("__wf_design", e.design), ut(e.preview) && Je.on("__wf_preview", e.preview)), ut(e.destroy) && Je.on("__wf_destroy", e.destroy), e.ready && ut(e.ready) && Am(e)
		}

		function Am(e) {
			if (ln) {
				e.ready();
				return
			}
			Ze.contains(Kt, e.ready) || Kt.push(e.ready)
		}

		function Ns(e) {
			ut(e.design) && Je.off("__wf_design", e.design), ut(e.preview) && Je.off("__wf_preview", e.preview), ut(e.destroy) && Je.off("__wf_destroy", e.destroy), e.ready && ut(e.ready) && wm(e)
		}

		function wm(e) {
			Kt = Ze.filter(Kt, function(t) {
				return t !== e.ready
			})
		}
		ge.push = function(e) {
			if (ln) {
				ut(e) && e();
				return
			}
			Vi.push(e)
		};
		ge.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var cn = navigator.userAgent.toLowerCase(),
			qs = ge.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			Rm = ge.env.chrome = /chrome/.test(cn) && /Google/.test(navigator.vendor) && parseInt(cn.match(/chrome\/(\d+)\./)[1], 10),
			Cm = ge.env.ios = /(ipod|iphone|ipad)/.test(cn);
		ge.env.safari = /safari/.test(cn) && !Rm && !Cm;
		var Ui;
		qs && Sm.on("touchstart mousedown", function(e) {
			Ui = e.target
		});
		ge.validClick = qs ? function(e) {
			return e === Ui || Tt.contains(e, Ui)
		} : function() {
			return !0
		};
		var Ls = "resize.webflow orientationchange.webflow load.webflow",
			xm = "scroll.webflow " + Ls;
		ge.resize = Bi(Je, Ls);
		ge.scroll = Bi(Je, xm);
		ge.redraw = Bi();

		function Bi(e, t) {
			var r = [],
				n = {};
			return n.up = Ze.throttle(function(o) {
				Ze.each(r, function(i) {
					i(o)
				})
			}), e && t && e.on(t, n.up), n.on = function(o) {
				typeof o == "function" && (Ze.contains(r, o) || r.push(o))
			}, n.off = function(o) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = Ze.filter(r, function(i) {
					return i !== o
				})
			}, n
		}
		ge.location = function(e) {
			window.location = e
		};
		ge.env() && (ge.location = function() {});
		ge.ready = function() {
			ln = !0, Wi ? Nm() : Ze.each(Kt, Rs), Ze.each(Vi, Rs), ge.resize.up()
		};

		function Rs(e) {
			ut(e) && e()
		}

		function Nm() {
			Wi = !1, Ze.each(kt, xs)
		}
		var Lt;
		ge.load = function(e) {
			Lt.then(e)
		};

		function Ps() {
			Lt && (Lt.reject(), Je.off("load", Lt.resolve)), Lt = new Tt.Deferred, Je.on("load", Lt.resolve)
		}
		ge.destroy = function(e) {
			e = e || {}, Wi = !0, Je.triggerHandler("__wf_destroy"), e.domready != null && (ln = e.domready), Ze.each(kt, Ns), ge.resize.off(), ge.scroll.off(), ge.redraw.off(), Kt = [], Vi = [], Lt.state() === "pending" && Ps()
		};
		Tt(ge.ready);
		Ps();
		Ds.exports = window.Webflow = ge
	});
	var Gs = u((XW, Fs) => {
		var Ms = ke();
		Ms.define("brand", Fs.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				o = e("body"),
				i = ".w-webflow-badge",
				a = window.location,
				s = /PhantomJS/i.test(navigator.userAgent),
				c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				d;
			t.ready = function() {
				var p = n.attr("data-wf-status"),
					g = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(g) && a.hostname !== g && (p = !0), p && !s && (d = d || f(), _(), setTimeout(_, 500), e(r).off(c, E).on(c, E))
			};

			function E() {
				var p = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(d).attr("style", p ? "display: none !important;" : "")
			}

function h() {
				var I = e('<a class="w-webflow-badge"></a>').attr("href", "https://savagearun.github.io/arun"),
					A = e("<img>").attr("src", "favicon-16x16.png").attr("alt", "").css({
						marginRight: "0px",
						width: "0px"
					}),
					w = e("<img>").attr("src", "favicon-16x16.png").attr("alt", "Made by Arun");
				return I.append(A, w), I[0]
			}

			function _() {
				var p = o.children(i),
					g = p.length && p.get(0) === d,
					O = Ms.env("editor");
				if (g) {
					O && p.remove();
					return
				}
				p.length && p.remove(), O || o.append(d)
			}
			return t
		})
	});
	var Us = u((UW, Xs) => {
		var Hi = ke();
		Hi.define("edit", Xs.exports = function(e, t, r) {
			if (r = r || {}, (Hi.env("test") || Hi.env("frame")) && !r.fixture && !qm()) return {
				exit: 1
			};
			var n = {},
				o = e(window),
				i = e(document.documentElement),
				a = document.location,
				s = "hashchange",
				c, d = r.load || _,
				E = !1;
			try {
				E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			E ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : o.on(s, f).triggerHandler(s);

			function f() {
				c || /\?edit/.test(a.hash) && d()
			}

			function _() {
				c = !0, window.WebflowEditor = !0, o.off(s, f), x(function(L) {
					e.ajax({
						url: A("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: i.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: p(L)
					})
				})
			}

			function p(L) {
				return function(q) {
					if (!q) {
						console.error("Could not load editor data");
						return
					}
					q.thirdPartyCookiesSupported = L, g(R(q.bugReporterScriptPath), function() {
						g(R(q.scriptPath), function() {
							window.WebflowEditor(q)
						})
					})
				}
			}

			function g(L, q) {
				e.ajax({
					type: "GET",
					url: L,
					dataType: "script",
					cache: !0
				}).then(q, O)
			}

			function O(L, q, P) {
				throw console.error("Could not load editor script: " + q), P
			}

			function R(L) {
				return L.indexOf("//") >= 0 ? L : A("https://editor-api.webflow.com" + L)
			}

			function A(L) {
				return L.replace(/([^:])\/\//g, "$1/")
			}

			function x(L) {
				var q = window.document.createElement("iframe");
				q.src = "https://webflow.com/site/third-party-cookie-check.html", q.style.display = "none", q.sandbox = "allow-scripts allow-same-origin";
				var P = function(V) {
					V.data === "WF_third_party_cookies_unsupported" ? (S(q, P), L(!1)) : V.data === "WF_third_party_cookies_supported" && (S(q, P), L(!0))
				};
				q.onerror = function() {
					S(q, P), L(!1)
				}, window.addEventListener("message", P, !1), window.document.body.appendChild(q)
			}

			function S(L, q) {
				window.removeEventListener("message", q, !1), L.remove()
			}
			return n
		});

		function qm() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var Ws = u((VW, Vs) => {
		var Lm = ke();
		Lm.define("focus-visible", Vs.exports = function() {
			function e(r) {
				var n = !0,
					o = !1,
					i = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function s(S) {
					return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList" in S && "contains" in S.classList)
				}

				function c(S) {
					var L = S.type,
						q = S.tagName;
					return !!(q === "INPUT" && a[L] && !S.readOnly || q === "TEXTAREA" && !S.readOnly || S.isContentEditable)
				}

				function d(S) {
					S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true")
				}

				function E(S) {
					S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible")
				}

				function f(S) {
					S.metaKey || S.altKey || S.ctrlKey || (s(r.activeElement) && d(r.activeElement), n = !0)
				}

				function _() {
					n = !1
				}

				function p(S) {
					s(S.target) && (n || c(S.target)) && d(S.target)
				}

				function g(S) {
					s(S.target) && S.target.hasAttribute("data-wf-focus-visible") && (o = !0, window.clearTimeout(i), i = window.setTimeout(function() {
						o = !1
					}, 100), E(S.target))
				}

				function O() {
					document.visibilityState === "hidden" && (o && (n = !0), R())
				}

				function R() {
					document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
				}

				function A() {
					document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
				}

				function x(S) {
					S.target.nodeName && S.target.nodeName.toLowerCase() === "html" || (n = !1, A())
				}
				document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("visibilitychange", O, !0), R(), r.addEventListener("focus", p, !0), r.addEventListener("blur", g, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var js = u((WW, Hs) => {
		var Bs = ke();
		Bs.define("focus", Hs.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var s = a.target,
					c = s.tagName;
				return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
			}

			function o(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var s = e.pop();
						s.target.dispatchEvent(new MouseEvent(s.type, s))
					}
				}, 0))
			}

			function i() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Bs.env.safari && (document.addEventListener("mousedown", o, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: i
			}
		})
	});
	var zs = u((BW, Ks) => {
		"use strict";
		var ji = window.jQuery,
			ct = {},
			fn = [],
			ks = ".w-ix",
			dn = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, ji(t).triggerHandler(ct.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, ji(t).triggerHandler(ct.types.OUTRO))
				}
			};
		ct.triggers = {};
		ct.types = {
			INTRO: "w-ix-intro" + ks,
			OUTRO: "w-ix-outro" + ks
		};
		ct.init = function() {
			for (var e = fn.length, t = 0; t < e; t++) {
				var r = fn[t];
				r[0](0, r[1])
			}
			fn = [], ji.extend(ct.triggers, dn)
		};
		ct.async = function() {
			for (var e in dn) {
				var t = dn[e];
				dn.hasOwnProperty(e) && (ct.triggers[e] = function(r, n) {
					fn.push([t, n])
				})
			}
		};
		ct.async();
		Ks.exports = ct
	});
	var Ki = u((HW, $s) => {
		"use strict";
		var ki = zs();

		function Ys(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var Pm = window.jQuery,
			pn = {},
			Qs = ".w-ix",
			Dm = {
				reset: function(e, t) {
					ki.triggers.reset(e, t)
				},
				intro: function(e, t) {
					ki.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					ki.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE")
				}
			};
		pn.triggers = {};
		pn.types = {
			INTRO: "w-ix-intro" + Qs,
			OUTRO: "w-ix-outro" + Qs
		};
		Pm.extend(pn.triggers, Dm);
		$s.exports = pn
	});
	var Zs = u((jW, Et) => {
		function zi(e) {
			return Et.exports = zi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, Et.exports.__esModule = !0, Et.exports.default = Et.exports, zi(e)
		}
		Et.exports = zi, Et.exports.__esModule = !0, Et.exports.default = Et.exports
	});
	var Pt = u((kW, br) => {
		var Mm = Zs().default;

		function Js(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (Js = function(o) {
				return o ? r : t
			})(e)
		}

		function Fm(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || Mm(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var r = Js(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				o = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
					var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
				} return n.default = e, r && r.set(e, n), n
		}
		br.exports = Fm, br.exports.__esModule = !0, br.exports.default = br.exports
	});
	var et = u((KW, Sr) => {
		function Gm(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Sr.exports = Gm, Sr.exports.__esModule = !0, Sr.exports.default = Sr.exports
	});
	var me = u((zW, eu) => {
		var vn = function(e) {
			return e && e.Math == Math && e
		};
		eu.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var zt = u((YW, tu) => {
		tu.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Dt = u((QW, ru) => {
		var Xm = zt();
		ru.exports = !Xm(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var hn = u(($W, nu) => {
		var Ar = Function.prototype.call;
		nu.exports = Ar.bind ? Ar.bind(Ar) : function() {
			return Ar.apply(Ar, arguments)
		}
	});
	var su = u(au => {
		"use strict";
		var iu = {}.propertyIsEnumerable,
			ou = Object.getOwnPropertyDescriptor,
			Um = ou && !iu.call({
				1: 2
			}, 1);
		au.f = Um ? function(t) {
			var r = ou(this, t);
			return !!r && r.enumerable
		} : iu
	});
	var Yi = u((JW, uu) => {
		uu.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var tt = u((eB, lu) => {
		var cu = Function.prototype,
			Qi = cu.bind,
			$i = cu.call,
			Vm = Qi && Qi.bind($i);
		lu.exports = Qi ? function(e) {
			return e && Vm($i, e)
		} : function(e) {
			return e && function() {
				return $i.apply(e, arguments)
			}
		}
	});
	var pu = u((tB, du) => {
		var fu = tt(),
			Wm = fu({}.toString),
			Bm = fu("".slice);
		du.exports = function(e) {
			return Bm(Wm(e), 8, -1)
		}
	});
	var hu = u((rB, vu) => {
		var Hm = me(),
			jm = tt(),
			km = zt(),
			Km = pu(),
			Zi = Hm.Object,
			zm = jm("".split);
		vu.exports = km(function() {
			return !Zi("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return Km(e) == "String" ? zm(e, "") : Zi(e)
		} : Zi
	});
	var Ji = u((nB, gu) => {
		var Ym = me(),
			Qm = Ym.TypeError;
		gu.exports = function(e) {
			if (e == null) throw Qm("Can't call method on " + e);
			return e
		}
	});
	var wr = u((iB, Eu) => {
		var $m = hu(),
			Zm = Ji();
		Eu.exports = function(e) {
			return $m(Zm(e))
		}
	});
	var lt = u((oB, _u) => {
		_u.exports = function(e) {
			return typeof e == "function"
		}
	});
	var Yt = u((aB, yu) => {
		var Jm = lt();
		yu.exports = function(e) {
			return typeof e == "object" ? e !== null : Jm(e)
		}
	});
	var Rr = u((sB, mu) => {
		var eo = me(),
			eI = lt(),
			tI = function(e) {
				return eI(e) ? e : void 0
			};
		mu.exports = function(e, t) {
			return arguments.length < 2 ? tI(eo[e]) : eo[e] && eo[e][t]
		}
	});
	var Tu = u((uB, Iu) => {
		var rI = tt();
		Iu.exports = rI({}.isPrototypeOf)
	});
	var bu = u((cB, Ou) => {
		var nI = Rr();
		Ou.exports = nI("navigator", "userAgent") || ""
	});
	var Nu = u((lB, xu) => {
		var Cu = me(),
			to = bu(),
			Su = Cu.process,
			Au = Cu.Deno,
			wu = Su && Su.versions || Au && Au.version,
			Ru = wu && wu.v8,
			rt, gn;
		Ru && (rt = Ru.split("."), gn = rt[0] > 0 && rt[0] < 4 ? 1 : +(rt[0] + rt[1]));
		!gn && to && (rt = to.match(/Edge\/(\d+)/), (!rt || rt[1] >= 74) && (rt = to.match(/Chrome\/(\d+)/), rt && (gn = +rt[1])));
		xu.exports = gn
	});
	var ro = u((fB, Lu) => {
		var qu = Nu(),
			iI = zt();
		Lu.exports = !!Object.getOwnPropertySymbols && !iI(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && qu && qu < 41
		})
	});
	var no = u((dB, Pu) => {
		var oI = ro();
		Pu.exports = oI && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var io = u((pB, Du) => {
		var aI = me(),
			sI = Rr(),
			uI = lt(),
			cI = Tu(),
			lI = no(),
			fI = aI.Object;
		Du.exports = lI ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = sI("Symbol");
			return uI(t) && cI(t.prototype, fI(e))
		}
	});
	var Fu = u((vB, Mu) => {
		var dI = me(),
			pI = dI.String;
		Mu.exports = function(e) {
			try {
				return pI(e)
			} catch {
				return "Object"
			}
		}
	});
	var Xu = u((hB, Gu) => {
		var vI = me(),
			hI = lt(),
			gI = Fu(),
			EI = vI.TypeError;
		Gu.exports = function(e) {
			if (hI(e)) return e;
			throw EI(gI(e) + " is not a function")
		}
	});
	var Vu = u((gB, Uu) => {
		var _I = Xu();
		Uu.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : _I(r)
		}
	});
	var Bu = u((EB, Wu) => {
		var yI = me(),
			oo = hn(),
			ao = lt(),
			so = Yt(),
			mI = yI.TypeError;
		Wu.exports = function(e, t) {
			var r, n;
			if (t === "string" && ao(r = e.toString) && !so(n = oo(r, e)) || ao(r = e.valueOf) && !so(n = oo(r, e)) || t !== "string" && ao(r = e.toString) && !so(n = oo(r, e))) return n;
			throw mI("Can't convert object to primitive value")
		}
	});
	var ju = u((_B, Hu) => {
		Hu.exports = !1
	});
	var En = u((yB, Ku) => {
		var ku = me(),
			II = Object.defineProperty;
		Ku.exports = function(e, t) {
			try {
				II(ku, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				ku[e] = t
			}
			return t
		}
	});
	var _n = u((mB, Yu) => {
		var TI = me(),
			OI = En(),
			zu = "__core-js_shared__",
			bI = TI[zu] || OI(zu, {});
		Yu.exports = bI
	});
	var uo = u((IB, $u) => {
		var SI = ju(),
			Qu = _n();
		($u.exports = function(e, t) {
			return Qu[e] || (Qu[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: SI ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var Ju = u((TB, Zu) => {
		var AI = me(),
			wI = Ji(),
			RI = AI.Object;
		Zu.exports = function(e) {
			return RI(wI(e))
		}
	});
	var Ot = u((OB, ec) => {
		var CI = tt(),
			xI = Ju(),
			NI = CI({}.hasOwnProperty);
		ec.exports = Object.hasOwn || function(t, r) {
			return NI(xI(t), r)
		}
	});
	var co = u((bB, tc) => {
		var qI = tt(),
			LI = 0,
			PI = Math.random(),
			DI = qI(1 .toString);
		tc.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + DI(++LI + PI, 36)
		}
	});
	var lo = u((SB, ac) => {
		var MI = me(),
			FI = uo(),
			rc = Ot(),
			GI = co(),
			nc = ro(),
			oc = no(),
			Qt = FI("wks"),
			Mt = MI.Symbol,
			ic = Mt && Mt.for,
			XI = oc ? Mt : Mt && Mt.withoutSetter || GI;
		ac.exports = function(e) {
			if (!rc(Qt, e) || !(nc || typeof Qt[e] == "string")) {
				var t = "Symbol." + e;
				nc && rc(Mt, e) ? Qt[e] = Mt[e] : oc && ic ? Qt[e] = ic(t) : Qt[e] = XI(t)
			}
			return Qt[e]
		}
	});
	var lc = u((AB, cc) => {
		var UI = me(),
			VI = hn(),
			sc = Yt(),
			uc = io(),
			WI = Vu(),
			BI = Bu(),
			HI = lo(),
			jI = UI.TypeError,
			kI = HI("toPrimitive");
		cc.exports = function(e, t) {
			if (!sc(e) || uc(e)) return e;
			var r = WI(e, kI),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = VI(r, e, t), !sc(n) || uc(n)) return n;
				throw jI("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), BI(e, t)
		}
	});
	var fo = u((wB, fc) => {
		var KI = lc(),
			zI = io();
		fc.exports = function(e) {
			var t = KI(e, "string");
			return zI(t) ? t : t + ""
		}
	});
	var vo = u((RB, pc) => {
		var YI = me(),
			dc = Yt(),
			po = YI.document,
			QI = dc(po) && dc(po.createElement);
		pc.exports = function(e) {
			return QI ? po.createElement(e) : {}
		}
	});
	var ho = u((CB, vc) => {
		var $I = Dt(),
			ZI = zt(),
			JI = vo();
		vc.exports = !$I && !ZI(function() {
			return Object.defineProperty(JI("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var go = u(gc => {
		var eT = Dt(),
			tT = hn(),
			rT = su(),
			nT = Yi(),
			iT = wr(),
			oT = fo(),
			aT = Ot(),
			sT = ho(),
			hc = Object.getOwnPropertyDescriptor;
		gc.f = eT ? hc : function(t, r) {
			if (t = iT(t), r = oT(r), sT) try {
				return hc(t, r)
			} catch {}
			if (aT(t, r)) return nT(!tT(rT.f, t, r), t[r])
		}
	});
	var Cr = u((NB, _c) => {
		var Ec = me(),
			uT = Yt(),
			cT = Ec.String,
			lT = Ec.TypeError;
		_c.exports = function(e) {
			if (uT(e)) return e;
			throw lT(cT(e) + " is not an object")
		}
	});
	var xr = u(Ic => {
		var fT = me(),
			dT = Dt(),
			pT = ho(),
			yc = Cr(),
			vT = fo(),
			hT = fT.TypeError,
			mc = Object.defineProperty;
		Ic.f = dT ? mc : function(t, r, n) {
			if (yc(t), r = vT(r), yc(n), pT) try {
				return mc(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw hT("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var yn = u((LB, Tc) => {
		var gT = Dt(),
			ET = xr(),
			_T = Yi();
		Tc.exports = gT ? function(e, t, r) {
			return ET.f(e, t, _T(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var _o = u((PB, Oc) => {
		var yT = tt(),
			mT = lt(),
			Eo = _n(),
			IT = yT(Function.toString);
		mT(Eo.inspectSource) || (Eo.inspectSource = function(e) {
			return IT(e)
		});
		Oc.exports = Eo.inspectSource
	});
	var Ac = u((DB, Sc) => {
		var TT = me(),
			OT = lt(),
			bT = _o(),
			bc = TT.WeakMap;
		Sc.exports = OT(bc) && /native code/.test(bT(bc))
	});
	var yo = u((MB, Rc) => {
		var ST = uo(),
			AT = co(),
			wc = ST("keys");
		Rc.exports = function(e) {
			return wc[e] || (wc[e] = AT(e))
		}
	});
	var mn = u((FB, Cc) => {
		Cc.exports = {}
	});
	var Dc = u((GB, Pc) => {
		var wT = Ac(),
			Lc = me(),
			mo = tt(),
			RT = Yt(),
			CT = yn(),
			Io = Ot(),
			To = _n(),
			xT = yo(),
			NT = mn(),
			xc = "Object already initialized",
			bo = Lc.TypeError,
			qT = Lc.WeakMap,
			In, Nr, Tn, LT = function(e) {
				return Tn(e) ? Nr(e) : In(e, {})
			},
			PT = function(e) {
				return function(t) {
					var r;
					if (!RT(t) || (r = Nr(t)).type !== e) throw bo("Incompatible receiver, " + e + " required");
					return r
				}
			};
		wT || To.state ? (bt = To.state || (To.state = new qT), Nc = mo(bt.get), Oo = mo(bt.has), qc = mo(bt.set), In = function(e, t) {
			if (Oo(bt, e)) throw new bo(xc);
			return t.facade = e, qc(bt, e, t), t
		}, Nr = function(e) {
			return Nc(bt, e) || {}
		}, Tn = function(e) {
			return Oo(bt, e)
		}) : (Ft = xT("state"), NT[Ft] = !0, In = function(e, t) {
			if (Io(e, Ft)) throw new bo(xc);
			return t.facade = e, CT(e, Ft, t), t
		}, Nr = function(e) {
			return Io(e, Ft) ? e[Ft] : {}
		}, Tn = function(e) {
			return Io(e, Ft)
		});
		var bt, Nc, Oo, qc, Ft;
		Pc.exports = {
			set: In,
			get: Nr,
			has: Tn,
			enforce: LT,
			getterFor: PT
		}
	});
	var Gc = u((XB, Fc) => {
		var So = Dt(),
			DT = Ot(),
			Mc = Function.prototype,
			MT = So && Object.getOwnPropertyDescriptor,
			Ao = DT(Mc, "name"),
			FT = Ao && function() {}.name === "something",
			GT = Ao && (!So || So && MT(Mc, "name").configurable);
		Fc.exports = {
			EXISTS: Ao,
			PROPER: FT,
			CONFIGURABLE: GT
		}
	});
	var Bc = u((UB, Wc) => {
		var XT = me(),
			Xc = lt(),
			UT = Ot(),
			Uc = yn(),
			VT = En(),
			WT = _o(),
			Vc = Dc(),
			BT = Gc().CONFIGURABLE,
			HT = Vc.get,
			jT = Vc.enforce,
			kT = String(String).split("String");
		(Wc.exports = function(e, t, r, n) {
			var o = n ? !!n.unsafe : !1,
				i = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				c;
			if (Xc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!UT(r, "name") || BT && r.name !== s) && Uc(r, "name", s), c = jT(r), c.source || (c.source = kT.join(typeof s == "string" ? s : ""))), e === XT) {
				i ? e[t] = r : VT(t, r);
				return
			} else o ? !a && e[t] && (i = !0) : delete e[t];
			i ? e[t] = r : Uc(e, t, r)
		})(Function.prototype, "toString", function() {
			return Xc(this) && HT(this).source || WT(this)
		})
	});
	var wo = u((VB, Hc) => {
		var KT = Math.ceil,
			zT = Math.floor;
		Hc.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? zT : KT)(t)
		}
	});
	var kc = u((WB, jc) => {
		var YT = wo(),
			QT = Math.max,
			$T = Math.min;
		jc.exports = function(e, t) {
			var r = YT(e);
			return r < 0 ? QT(r + t, 0) : $T(r, t)
		}
	});
	var zc = u((BB, Kc) => {
		var ZT = wo(),
			JT = Math.min;
		Kc.exports = function(e) {
			return e > 0 ? JT(ZT(e), 9007199254740991) : 0
		}
	});
	var Qc = u((HB, Yc) => {
		var eO = zc();
		Yc.exports = function(e) {
			return eO(e.length)
		}
	});
	var Ro = u((jB, Zc) => {
		var tO = wr(),
			rO = kc(),
			nO = Qc(),
			$c = function(e) {
				return function(t, r, n) {
					var o = tO(t),
						i = nO(o),
						a = rO(n, i),
						s;
					if (e && r != r) {
						for (; i > a;)
							if (s = o[a++], s != s) return !0
					} else
						for (; i > a; a++)
							if ((e || a in o) && o[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		Zc.exports = {
			includes: $c(!0),
			indexOf: $c(!1)
		}
	});
	var xo = u((kB, el) => {
		var iO = tt(),
			Co = Ot(),
			oO = wr(),
			aO = Ro().indexOf,
			sO = mn(),
			Jc = iO([].push);
		el.exports = function(e, t) {
			var r = oO(e),
				n = 0,
				o = [],
				i;
			for (i in r) !Co(sO, i) && Co(r, i) && Jc(o, i);
			for (; t.length > n;) Co(r, i = t[n++]) && (~aO(o, i) || Jc(o, i));
			return o
		}
	});
	var On = u((KB, tl) => {
		tl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var nl = u(rl => {
		var uO = xo(),
			cO = On(),
			lO = cO.concat("length", "prototype");
		rl.f = Object.getOwnPropertyNames || function(t) {
			return uO(t, lO)
		}
	});
	var ol = u(il => {
		il.f = Object.getOwnPropertySymbols
	});
	var sl = u((QB, al) => {
		var fO = Rr(),
			dO = tt(),
			pO = nl(),
			vO = ol(),
			hO = Cr(),
			gO = dO([].concat);
		al.exports = fO("Reflect", "ownKeys") || function(t) {
			var r = pO.f(hO(t)),
				n = vO.f;
			return n ? gO(r, n(t)) : r
		}
	});
	var cl = u(($B, ul) => {
		var EO = Ot(),
			_O = sl(),
			yO = go(),
			mO = xr();
		ul.exports = function(e, t) {
			for (var r = _O(t), n = mO.f, o = yO.f, i = 0; i < r.length; i++) {
				var a = r[i];
				EO(e, a) || n(e, a, o(t, a))
			}
		}
	});
	var fl = u((ZB, ll) => {
		var IO = zt(),
			TO = lt(),
			OO = /#|\.prototype\./,
			qr = function(e, t) {
				var r = SO[bO(e)];
				return r == wO ? !0 : r == AO ? !1 : TO(t) ? IO(t) : !!t
			},
			bO = qr.normalize = function(e) {
				return String(e).replace(OO, ".").toLowerCase()
			},
			SO = qr.data = {},
			AO = qr.NATIVE = "N",
			wO = qr.POLYFILL = "P";
		ll.exports = qr
	});
	var pl = u((JB, dl) => {
		var No = me(),
			RO = go().f,
			CO = yn(),
			xO = Bc(),
			NO = En(),
			qO = cl(),
			LO = fl();
		dl.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				o = e.stat,
				i, a, s, c, d, E;
			if (n ? a = No : o ? a = No[r] || NO(r, {}) : a = (No[r] || {}).prototype, a)
				for (s in t) {
					if (d = t[s], e.noTargetGet ? (E = RO(a, s), c = E && E.value) : c = a[s], i = LO(n ? s : r + (o ? "." : "#") + s, e.forced), !i && c !== void 0) {
						if (typeof d == typeof c) continue;
						qO(d, c)
					}(e.sham || c && c.sham) && CO(d, "sham", !0), xO(a, s, d, e)
				}
		}
	});
	var hl = u((eH, vl) => {
		var PO = xo(),
			DO = On();
		vl.exports = Object.keys || function(t) {
			return PO(t, DO)
		}
	});
	var El = u((tH, gl) => {
		var MO = Dt(),
			FO = xr(),
			GO = Cr(),
			XO = wr(),
			UO = hl();
		gl.exports = MO ? Object.defineProperties : function(t, r) {
			GO(t);
			for (var n = XO(r), o = UO(r), i = o.length, a = 0, s; i > a;) FO.f(t, s = o[a++], n[s]);
			return t
		}
	});
	var yl = u((rH, _l) => {
		var VO = Rr();
		_l.exports = VO("document", "documentElement")
	});
	var wl = u((nH, Al) => {
		var WO = Cr(),
			BO = El(),
			ml = On(),
			HO = mn(),
			jO = yl(),
			kO = vo(),
			KO = yo(),
			Il = ">",
			Tl = "<",
			Lo = "prototype",
			Po = "script",
			bl = KO("IE_PROTO"),
			qo = function() {},
			Sl = function(e) {
				return Tl + Po + Il + e + Tl + "/" + Po + Il
			},
			Ol = function(e) {
				e.write(Sl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			zO = function() {
				var e = kO("iframe"),
					t = "java" + Po + ":",
					r;
				return e.style.display = "none", jO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Sl("document.F=Object")), r.close(), r.F
			},
			bn, Sn = function() {
				try {
					bn = new ActiveXObject("htmlfile")
				} catch {}
				Sn = typeof document < "u" ? document.domain && bn ? Ol(bn) : zO() : Ol(bn);
				for (var e = ml.length; e--;) delete Sn[Lo][ml[e]];
				return Sn()
			};
		HO[bl] = !0;
		Al.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (qo[Lo] = WO(t), n = new qo, qo[Lo] = null, n[bl] = t) : n = Sn(), r === void 0 ? n : BO(n, r)
		}
	});
	var Cl = u((iH, Rl) => {
		var YO = lo(),
			QO = wl(),
			$O = xr(),
			Do = YO("unscopables"),
			Mo = Array.prototype;
		Mo[Do] == null && $O.f(Mo, Do, {
			configurable: !0,
			value: QO(null)
		});
		Rl.exports = function(e) {
			Mo[Do][e] = !0
		}
	});
	var xl = u(() => {
		"use strict";
		var ZO = pl(),
			JO = Ro().includes,
			eb = Cl();
		ZO({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return JO(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		eb("includes")
	});
	var ql = u((sH, Nl) => {
		var tb = me(),
			rb = tt();
		Nl.exports = function(e, t) {
			return rb(tb[e].prototype[t])
		}
	});
	var Pl = u((uH, Ll) => {
		xl();
		var nb = ql();
		Ll.exports = nb("Array", "includes")
	});
	var Ml = u((cH, Dl) => {
		var ib = Pl();
		Dl.exports = ib
	});
	var Gl = u((lH, Fl) => {
		var ob = Ml();
		Fl.exports = ob
	});
	var Fo = u((fH, Xl) => {
		var ab = typeof global == "object" && global && global.Object === Object && global;
		Xl.exports = ab
	});
	var nt = u((dH, Ul) => {
		var sb = Fo(),
			ub = typeof self == "object" && self && self.Object === Object && self,
			cb = sb || ub || Function("return this")();
		Ul.exports = cb
	});
	var $t = u((pH, Vl) => {
		var lb = nt(),
			fb = lb.Symbol;
		Vl.exports = fb
	});
	var jl = u((vH, Hl) => {
		var Wl = $t(),
			Bl = Object.prototype,
			db = Bl.hasOwnProperty,
			pb = Bl.toString,
			Lr = Wl ? Wl.toStringTag : void 0;

		function vb(e) {
			var t = db.call(e, Lr),
				r = e[Lr];
			try {
				e[Lr] = void 0;
				var n = !0
			} catch {}
			var o = pb.call(e);
			return n && (t ? e[Lr] = r : delete e[Lr]), o
		}
		Hl.exports = vb
	});
	var Kl = u((hH, kl) => {
		var hb = Object.prototype,
			gb = hb.toString;

		function Eb(e) {
			return gb.call(e)
		}
		kl.exports = Eb
	});
	var St = u((gH, Ql) => {
		var zl = $t(),
			_b = jl(),
			yb = Kl(),
			mb = "[object Null]",
			Ib = "[object Undefined]",
			Yl = zl ? zl.toStringTag : void 0;

		function Tb(e) {
			return e == null ? e === void 0 ? Ib : mb : Yl && Yl in Object(e) ? _b(e) : yb(e)
		}
		Ql.exports = Tb
	});
	var Go = u((EH, $l) => {
		function Ob(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		$l.exports = Ob
	});
	var Xo = u((_H, Zl) => {
		var bb = Go(),
			Sb = bb(Object.getPrototypeOf, Object);
		Zl.exports = Sb
	});
	var _t = u((yH, Jl) => {
		function Ab(e) {
			return e != null && typeof e == "object"
		}
		Jl.exports = Ab
	});
	var Uo = u((mH, tf) => {
		var wb = St(),
			Rb = Xo(),
			Cb = _t(),
			xb = "[object Object]",
			Nb = Function.prototype,
			qb = Object.prototype,
			ef = Nb.toString,
			Lb = qb.hasOwnProperty,
			Pb = ef.call(Object);

		function Db(e) {
			if (!Cb(e) || wb(e) != xb) return !1;
			var t = Rb(e);
			if (t === null) return !0;
			var r = Lb.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && ef.call(r) == Pb
		}
		tf.exports = Db
	});
	var rf = u(Vo => {
		"use strict";
		Object.defineProperty(Vo, "__esModule", {
			value: !0
		});
		Vo.default = Mb;

		function Mb(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var nf = u((Bo, Wo) => {
		"use strict";
		Object.defineProperty(Bo, "__esModule", {
			value: !0
		});
		var Fb = rf(),
			Gb = Xb(Fb);

		function Xb(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Zt;
		typeof self < "u" ? Zt = self : typeof window < "u" ? Zt = window : typeof global < "u" ? Zt = global : typeof Wo < "u" ? Zt = Wo : Zt = Function("return this")();
		var Ub = (0, Gb.default)(Zt);
		Bo.default = Ub
	});
	var Ho = u(Pr => {
		"use strict";
		Pr.__esModule = !0;
		Pr.ActionTypes = void 0;
		Pr.default = uf;
		var Vb = Uo(),
			Wb = sf(Vb),
			Bb = nf(),
			of = sf(Bb);

		function sf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var af = Pr.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function uf(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(uf)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var o = e,
				i = t,
				a = [],
				s = a,
				c = !1;

			function d() {
				s === a && (s = a.slice())
			}

			function E() {
				return i
			}

			function f(O) {
				if (typeof O != "function") throw new Error("Expected listener to be a function.");
				var R = !0;
				return d(), s.push(O),
					function() {
						if (R) {
							R = !1, d();
							var x = s.indexOf(O);
							s.splice(x, 1)
						}
					}
			}

			function _(O) {
				if (!(0, Wb.default)(O)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof O.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (c) throw new Error("Reducers may not dispatch actions.");
				try {
					c = !0, i = o(i, O)
				} finally {
					c = !1
				}
				for (var R = a = s, A = 0; A < R.length; A++) R[A]();
				return O
			}

			function p(O) {
				if (typeof O != "function") throw new Error("Expected the nextReducer to be a function.");
				o = O, _({
					type: af.INIT
				})
			}

			function g() {
				var O, R = f;
				return O = {
					subscribe: function(x) {
						if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");

						function S() {
							x.next && x.next(E())
						}
						S();
						var L = R(S);
						return {
							unsubscribe: L
						}
					}
				}, O[of.default] = function() {
					return this
				}, O
			}
			return _({
				type: af.INIT
			}), n = {
				dispatch: _,
				subscribe: f,
				getState: E,
				replaceReducer: p
			}, n[of.default] = g, n
		}
	});
	var ko = u(jo => {
		"use strict";
		jo.__esModule = !0;
		jo.default = Hb;

		function Hb(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var ff = u(Ko => {
		"use strict";
		Ko.__esModule = !0;
		Ko.default = Yb;
		var cf = Ho(),
			jb = Uo(),
			bH = lf(jb),
			kb = ko(),
			SH = lf(kb);

		function lf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function Kb(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function zb(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: cf.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: o
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + cf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function Yb(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var o = t[n];
				typeof e[o] == "function" && (r[o] = e[o])
			}
			var i = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				zb(r)
			} catch (c) {
				s = c
			}
			return function() {
				var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					E = arguments[1];
				if (s) throw s;
				if (!1) var f;
				for (var _ = !1, p = {}, g = 0; g < i.length; g++) {
					var O = i[g],
						R = r[O],
						A = d[O],
						x = R(A, E);
					if (typeof x > "u") {
						var S = Kb(O, E);
						throw new Error(S)
					}
					p[O] = x, _ = _ || x !== A
				}
				return _ ? p : d
			}
		}
	});
	var pf = u(zo => {
		"use strict";
		zo.__esModule = !0;
		zo.default = Qb;

		function df(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function Qb(e, t) {
			if (typeof e == "function") return df(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
				var i = r[o],
					a = e[i];
				typeof a == "function" && (n[i] = df(a, t))
			}
			return n
		}
	});
	var Qo = u(Yo => {
		"use strict";
		Yo.__esModule = !0;
		Yo.default = $b;

		function $b() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(i) {
				return i
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				o = t.slice(0, -1);
			return function() {
				return o.reduceRight(function(i, a) {
					return a(i)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var vf = u($o => {
		"use strict";
		$o.__esModule = !0;
		var Zb = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		$o.default = rS;
		var Jb = Qo(),
			eS = tS(Jb);

		function tS(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function rS() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(o, i, a) {
					var s = n(o, i, a),
						c = s.dispatch,
						d = [],
						E = {
							getState: s.getState,
							dispatch: function(_) {
								return c(_)
							}
						};
					return d = t.map(function(f) {
						return f(E)
					}), c = eS.default.apply(void 0, d)(s.dispatch), Zb({}, s, {
						dispatch: c
					})
				}
			}
		}
	});
	var Zo = u(Ke => {
		"use strict";
		Ke.__esModule = !0;
		Ke.compose = Ke.applyMiddleware = Ke.bindActionCreators = Ke.combineReducers = Ke.createStore = void 0;
		var nS = Ho(),
			iS = Jt(nS),
			oS = ff(),
			aS = Jt(oS),
			sS = pf(),
			uS = Jt(sS),
			cS = vf(),
			lS = Jt(cS),
			fS = Qo(),
			dS = Jt(fS),
			pS = ko(),
			xH = Jt(pS);

		function Jt(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Ke.createStore = iS.default;
		Ke.combineReducers = aS.default;
		Ke.bindActionCreators = uS.default;
		Ke.applyMiddleware = lS.default;
		Ke.compose = dS.default
	});
	var hf = u(xe => {
		"use strict";
		Object.defineProperty(xe, "__esModule", {
			value: !0
		});
		xe.QuickEffectIds = xe.QuickEffectDirectionConsts = xe.EventTypeConsts = xe.EventLimitAffectedElements = xe.EventContinuousMouseAxes = xe.EventBasedOn = xe.EventAppliesTo = void 0;
		var vS = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		};
		xe.EventTypeConsts = vS;
		var hS = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		};
		xe.EventAppliesTo = hS;
		var gS = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		};
		xe.EventBasedOn = gS;
		var ES = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		};
		xe.EventContinuousMouseAxes = ES;
		var _S = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		};
		xe.EventLimitAffectedElements = _S;
		var yS = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		};
		xe.QuickEffectIds = yS;
		var mS = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		};
		xe.QuickEffectDirectionConsts = mS
	});
	var Jo = u(er => {
		"use strict";
		Object.defineProperty(er, "__esModule", {
			value: !0
		});
		er.ActionTypeConsts = er.ActionAppliesTo = void 0;
		var IS = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			OBJECT_VALUE: "OBJECT_VALUE",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			PLUGIN_SPLINE: "PLUGIN_SPLINE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		};
		er.ActionTypeConsts = IS;
		var TS = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		};
		er.ActionAppliesTo = TS
	});
	var gf = u(An => {
		"use strict";
		Object.defineProperty(An, "__esModule", {
			value: !0
		});
		An.InteractionTypeConsts = void 0;
		var OS = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		};
		An.InteractionTypeConsts = OS
	});
	var Ef = u(wn => {
		"use strict";
		Object.defineProperty(wn, "__esModule", {
			value: !0
		});
		wn.ReducedMotionTypes = void 0;
		var bS = Jo(),
			{
				TRANSFORM_MOVE: SS,
				TRANSFORM_SCALE: AS,
				TRANSFORM_ROTATE: wS,
				TRANSFORM_SKEW: RS,
				STYLE_SIZE: CS,
				STYLE_FILTER: xS,
				STYLE_FONT_VARIATION: NS
			} = bS.ActionTypeConsts,
			qS = {
				[SS]: !0,
				[AS]: !0,
				[wS]: !0,
				[RS]: !0,
				[CS]: !0,
				[xS]: !0,
				[NS]: !0
			};
		wn.ReducedMotionTypes = qS
	});
	var _f = u(ue => {
		"use strict";
		Object.defineProperty(ue, "__esModule", {
			value: !0
		});
		ue.IX2_VIEWPORT_WIDTH_CHANGED = ue.IX2_TEST_FRAME_RENDERED = ue.IX2_STOP_REQUESTED = ue.IX2_SESSION_STOPPED = ue.IX2_SESSION_STARTED = ue.IX2_SESSION_INITIALIZED = ue.IX2_RAW_DATA_IMPORTED = ue.IX2_PREVIEW_REQUESTED = ue.IX2_PLAYBACK_REQUESTED = ue.IX2_PARAMETER_CHANGED = ue.IX2_MEDIA_QUERIES_DEFINED = ue.IX2_INSTANCE_STARTED = ue.IX2_INSTANCE_REMOVED = ue.IX2_INSTANCE_ADDED = ue.IX2_EVENT_STATE_CHANGED = ue.IX2_EVENT_LISTENER_ADDED = ue.IX2_ELEMENT_STATE_CHANGED = ue.IX2_CLEAR_REQUESTED = ue.IX2_ANIMATION_FRAME_CHANGED = ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
		var LS = "IX2_RAW_DATA_IMPORTED";
		ue.IX2_RAW_DATA_IMPORTED = LS;
		var PS = "IX2_SESSION_INITIALIZED";
		ue.IX2_SESSION_INITIALIZED = PS;
		var DS = "IX2_SESSION_STARTED";
		ue.IX2_SESSION_STARTED = DS;
		var MS = "IX2_SESSION_STOPPED";
		ue.IX2_SESSION_STOPPED = MS;
		var FS = "IX2_PREVIEW_REQUESTED";
		ue.IX2_PREVIEW_REQUESTED = FS;
		var GS = "IX2_PLAYBACK_REQUESTED";
		ue.IX2_PLAYBACK_REQUESTED = GS;
		var XS = "IX2_STOP_REQUESTED";
		ue.IX2_STOP_REQUESTED = XS;
		var US = "IX2_CLEAR_REQUESTED";
		ue.IX2_CLEAR_REQUESTED = US;
		var VS = "IX2_EVENT_LISTENER_ADDED";
		ue.IX2_EVENT_LISTENER_ADDED = VS;
		var WS = "IX2_EVENT_STATE_CHANGED";
		ue.IX2_EVENT_STATE_CHANGED = WS;
		var BS = "IX2_ANIMATION_FRAME_CHANGED";
		ue.IX2_ANIMATION_FRAME_CHANGED = BS;
		var HS = "IX2_PARAMETER_CHANGED";
		ue.IX2_PARAMETER_CHANGED = HS;
		var jS = "IX2_INSTANCE_ADDED";
		ue.IX2_INSTANCE_ADDED = jS;
		var kS = "IX2_INSTANCE_STARTED";
		ue.IX2_INSTANCE_STARTED = kS;
		var KS = "IX2_INSTANCE_REMOVED";
		ue.IX2_INSTANCE_REMOVED = KS;
		var zS = "IX2_ELEMENT_STATE_CHANGED";
		ue.IX2_ELEMENT_STATE_CHANGED = zS;
		var YS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
		ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = YS;
		var QS = "IX2_VIEWPORT_WIDTH_CHANGED";
		ue.IX2_VIEWPORT_WIDTH_CHANGED = QS;
		var $S = "IX2_MEDIA_QUERIES_DEFINED";
		ue.IX2_MEDIA_QUERIES_DEFINED = $S;
		var ZS = "IX2_TEST_FRAME_RENDERED";
		ue.IX2_TEST_FRAME_RENDERED = ZS
	});
	var yf = u(N => {
		"use strict";
		Object.defineProperty(N, "__esModule", {
			value: !0
		});
		N.W_MOD_JS = N.W_MOD_IX = N.WILL_CHANGE = N.WIDTH = N.WF_PAGE = N.TRANSLATE_Z = N.TRANSLATE_Y = N.TRANSLATE_X = N.TRANSLATE_3D = N.TRANSFORM = N.SKEW_Y = N.SKEW_X = N.SKEW = N.SIBLINGS = N.SCALE_Z = N.SCALE_Y = N.SCALE_X = N.SCALE_3D = N.ROTATE_Z = N.ROTATE_Y = N.ROTATE_X = N.RENDER_TRANSFORM = N.RENDER_STYLE = N.RENDER_PLUGIN = N.RENDER_GENERAL = N.PRESERVE_3D = N.PLAIN_OBJECT = N.PARENT = N.OPACITY = N.IX2_ID_DELIMITER = N.IMMEDIATE_CHILDREN = N.HTML_ELEMENT = N.HEIGHT = N.FONT_VARIATION_SETTINGS = N.FLEX = N.FILTER = N.DISPLAY = N.CONFIG_Z_VALUE = N.CONFIG_Z_UNIT = N.CONFIG_Y_VALUE = N.CONFIG_Y_UNIT = N.CONFIG_X_VALUE = N.CONFIG_X_UNIT = N.CONFIG_VALUE = N.CONFIG_UNIT = N.COMMA_DELIMITER = N.COLOR = N.COLON_DELIMITER = N.CHILDREN = N.BOUNDARY_SELECTOR = N.BORDER_COLOR = N.BAR_DELIMITER = N.BACKGROUND_COLOR = N.BACKGROUND = N.AUTO = N.ABSTRACT_NODE = void 0;
		var JS = "|";
		N.IX2_ID_DELIMITER = JS;
		var eA = "data-wf-page";
		N.WF_PAGE = eA;
		var tA = "w-mod-js";
		N.W_MOD_JS = tA;
		var rA = "w-mod-ix";
		N.W_MOD_IX = rA;
		var nA = ".w-dyn-item";
		N.BOUNDARY_SELECTOR = nA;
		var iA = "xValue";
		N.CONFIG_X_VALUE = iA;
		var oA = "yValue";
		N.CONFIG_Y_VALUE = oA;
		var aA = "zValue";
		N.CONFIG_Z_VALUE = aA;
		var sA = "value";
		N.CONFIG_VALUE = sA;
		var uA = "xUnit";
		N.CONFIG_X_UNIT = uA;
		var cA = "yUnit";
		N.CONFIG_Y_UNIT = cA;
		var lA = "zUnit";
		N.CONFIG_Z_UNIT = lA;
		var fA = "unit";
		N.CONFIG_UNIT = fA;
		var dA = "transform";
		N.TRANSFORM = dA;
		var pA = "translateX";
		N.TRANSLATE_X = pA;
		var vA = "translateY";
		N.TRANSLATE_Y = vA;
		var hA = "translateZ";
		N.TRANSLATE_Z = hA;
		var gA = "translate3d";
		N.TRANSLATE_3D = gA;
		var EA = "scaleX";
		N.SCALE_X = EA;
		var _A = "scaleY";
		N.SCALE_Y = _A;
		var yA = "scaleZ";
		N.SCALE_Z = yA;
		var mA = "scale3d";
		N.SCALE_3D = mA;
		var IA = "rotateX";
		N.ROTATE_X = IA;
		var TA = "rotateY";
		N.ROTATE_Y = TA;
		var OA = "rotateZ";
		N.ROTATE_Z = OA;
		var bA = "skew";
		N.SKEW = bA;
		var SA = "skewX";
		N.SKEW_X = SA;
		var AA = "skewY";
		N.SKEW_Y = AA;
		var wA = "opacity";
		N.OPACITY = wA;
		var RA = "filter";
		N.FILTER = RA;
		var CA = "font-variation-settings";
		N.FONT_VARIATION_SETTINGS = CA;
		var xA = "width";
		N.WIDTH = xA;
		var NA = "height";
		N.HEIGHT = NA;
		var qA = "backgroundColor";
		N.BACKGROUND_COLOR = qA;
		var LA = "background";
		N.BACKGROUND = LA;
		var PA = "borderColor";
		N.BORDER_COLOR = PA;
		var DA = "color";
		N.COLOR = DA;
		var MA = "display";
		N.DISPLAY = MA;
		var FA = "flex";
		N.FLEX = FA;
		var GA = "willChange";
		N.WILL_CHANGE = GA;
		var XA = "AUTO";
		N.AUTO = XA;
		var UA = ",";
		N.COMMA_DELIMITER = UA;
		var VA = ":";
		N.COLON_DELIMITER = VA;
		var WA = "|";
		N.BAR_DELIMITER = WA;
		var BA = "CHILDREN";
		N.CHILDREN = BA;
		var HA = "IMMEDIATE_CHILDREN";
		N.IMMEDIATE_CHILDREN = HA;
		var jA = "SIBLINGS";
		N.SIBLINGS = jA;
		var kA = "PARENT";
		N.PARENT = kA;
		var KA = "preserve-3d";
		N.PRESERVE_3D = KA;
		var zA = "HTML_ELEMENT";
		N.HTML_ELEMENT = zA;
		var YA = "PLAIN_OBJECT";
		N.PLAIN_OBJECT = YA;
		var QA = "ABSTRACT_NODE";
		N.ABSTRACT_NODE = QA;
		var $A = "RENDER_TRANSFORM";
		N.RENDER_TRANSFORM = $A;
		var ZA = "RENDER_GENERAL";
		N.RENDER_GENERAL = ZA;
		var JA = "RENDER_STYLE";
		N.RENDER_STYLE = JA;
		var ew = "RENDER_PLUGIN";
		N.RENDER_PLUGIN = ew
	});
	var Be = u(we => {
		"use strict";
		var mf = Pt().default;
		Object.defineProperty(we, "__esModule", {
			value: !0
		});
		var Rn = {
			IX2EngineActionTypes: !0,
			IX2EngineConstants: !0
		};
		we.IX2EngineConstants = we.IX2EngineActionTypes = void 0;
		var ea = hf();
		Object.keys(ea).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === ea[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return ea[e]
				}
			})
		});
		var ta = Jo();
		Object.keys(ta).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === ta[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return ta[e]
				}
			})
		});
		var ra = gf();
		Object.keys(ra).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === ra[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return ra[e]
				}
			})
		});
		var na = Ef();
		Object.keys(na).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === na[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return na[e]
				}
			})
		});
		var tw = mf(_f());
		we.IX2EngineActionTypes = tw;
		var rw = mf(yf());
		we.IX2EngineConstants = rw
	});
	var If = u(Cn => {
		"use strict";
		Object.defineProperty(Cn, "__esModule", {
			value: !0
		});
		Cn.ixData = void 0;
		var nw = Be(),
			{
				IX2_RAW_DATA_IMPORTED: iw
			} = nw.IX2EngineActionTypes,
			ow = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case iw:
						return t.payload.ixData || Object.freeze({});
					default:
						return e
				}
			};
		Cn.ixData = ow
	});
	var tr = u((UH, yt) => {
		function ia() {
			return yt.exports = ia = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}, yt.exports.__esModule = !0, yt.exports.default = yt.exports, ia.apply(this, arguments)
		}
		yt.exports = ia, yt.exports.__esModule = !0, yt.exports.default = yt.exports
	});
	var rr = u(Te => {
		"use strict";
		Object.defineProperty(Te, "__esModule", {
			value: !0
		});
		var aw = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		Te.clone = Nn;
		Te.addLast = bf;
		Te.addFirst = Sf;
		Te.removeLast = Af;
		Te.removeFirst = wf;
		Te.insert = Rf;
		Te.removeAt = Cf;
		Te.replaceAt = xf;
		Te.getIn = qn;
		Te.set = Ln;
		Te.setIn = Pn;
		Te.update = qf;
		Te.updateIn = Lf;
		Te.merge = Pf;
		Te.mergeDeep = Df;
		Te.mergeIn = Mf;
		Te.omit = Ff;
		Te.addDefaults = Gf;
		var Tf = "INVALID_ARGS";

		function Of(e) {
			throw new Error(e)
		}

		function oa(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var sw = {}.hasOwnProperty;

		function Nn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = oa(e), r = {}, n = 0; n < t.length; n++) {
				var o = t[n];
				r[o] = e[o]
			}
			return r
		}

		function He(e, t, r) {
			var n = r;
			n == null && Of(Tf);
			for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
			for (var c = 0; c < a.length; c++) {
				var d = a[c];
				if (d != null) {
					var E = oa(d);
					if (E.length)
						for (var f = 0; f <= E.length; f++) {
							var _ = E[f];
							if (!(e && n[_] !== void 0)) {
								var p = d[_];
								t && xn(n[_]) && xn(p) && (p = He(e, t, n[_], p)), !(p === void 0 || p === n[_]) && (o || (o = !0, n = Nn(n)), n[_] = p)
							}
						}
				}
			}
			return n
		}

		function xn(e) {
			var t = typeof e > "u" ? "undefined" : aw(e);
			return e != null && (t === "object" || t === "function")
		}

		function bf(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function Sf(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function Af(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function wf(e) {
			return e.length ? e.slice(1) : e
		}

		function Rf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function Cf(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function xf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
			return o[t] = r, o
		}

		function qn(e, t) {
			if (!Array.isArray(t) && Of(Tf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var o = t[n];
					if (r = r?.[o], r === void 0) return r
				}
				return r
			}
		}

		function Ln(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				o = e ?? n;
			if (o[t] === r) return o;
			var i = Nn(o);
			return i[t] = r, i
		}

		function Nf(e, t, r, n) {
			var o = void 0,
				i = t[n];
			if (n === t.length - 1) o = r;
			else {
				var a = xn(e) && xn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
				o = Nf(a, t, r, n + 1)
			}
			return Ln(e, i, o)
		}

		function Pn(e, t, r) {
			return t.length ? Nf(e, t, r, 0) : r
		}

		function qf(e, t, r) {
			var n = e?.[t],
				o = r(n);
			return Ln(e, t, o)
		}

		function Lf(e, t, r) {
			var n = qn(e, t),
				o = r(n);
			return Pn(e, t, o)
		}

		function Pf(e, t, r, n, o, i) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? He.call.apply(He, [null, !1, !1, e, t, r, n, o, i].concat(s)) : He(!1, !1, e, t, r, n, o, i)
		}

		function Df(e, t, r, n, o, i) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? He.call.apply(He, [null, !1, !0, e, t, r, n, o, i].concat(s)) : He(!1, !0, e, t, r, n, o, i)
		}

		function Mf(e, t, r, n, o, i, a) {
			var s = qn(e, t);
			s == null && (s = {});
			for (var c = void 0, d = arguments.length, E = Array(d > 7 ? d - 7 : 0), f = 7; f < d; f++) E[f - 7] = arguments[f];
			return E.length ? c = He.call.apply(He, [null, !1, !1, s, r, n, o, i, a].concat(E)) : c = He(!1, !1, s, r, n, o, i, a), Pn(e, t, c)
		}

		function Ff(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
				if (sw.call(e, r[o])) {
					n = !0;
					break
				} if (!n) return e;
			for (var i = {}, a = oa(e), s = 0; s < a.length; s++) {
				var c = a[s];
				r.indexOf(c) >= 0 || (i[c] = e[c])
			}
			return i
		}

		function Gf(e, t, r, n, o, i) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? He.call.apply(He, [null, !0, !1, e, t, r, n, o, i].concat(s)) : He(!0, !1, e, t, r, n, o, i)
		}
		var uw = {
			clone: Nn,
			addLast: bf,
			addFirst: Sf,
			removeLast: Af,
			removeFirst: wf,
			insert: Rf,
			removeAt: Cf,
			replaceAt: xf,
			getIn: qn,
			set: Ln,
			setIn: Pn,
			update: qf,
			updateIn: Lf,
			merge: Pf,
			mergeDeep: Df,
			mergeIn: Mf,
			omit: Ff,
			addDefaults: Gf
		};
		Te.default = uw
	});
	var Uf = u(Dn => {
		"use strict";
		var cw = et().default;
		Object.defineProperty(Dn, "__esModule", {
			value: !0
		});
		Dn.ixRequest = void 0;
		var lw = cw(tr()),
			fw = Be(),
			dw = rr(),
			{
				IX2_PREVIEW_REQUESTED: pw,
				IX2_PLAYBACK_REQUESTED: vw,
				IX2_STOP_REQUESTED: hw,
				IX2_CLEAR_REQUESTED: gw
			} = fw.IX2EngineActionTypes,
			Ew = {
				preview: {},
				playback: {},
				stop: {},
				clear: {}
			},
			Xf = Object.create(null, {
				[pw]: {
					value: "preview"
				},
				[vw]: {
					value: "playback"
				},
				[hw]: {
					value: "stop"
				},
				[gw]: {
					value: "clear"
				}
			}),
			_w = (e = Ew, t) => {
				if (t.type in Xf) {
					let r = [Xf[t.type]];
					return (0, dw.setIn)(e, [r], (0, lw.default)({}, t.payload))
				}
				return e
			};
		Dn.ixRequest = _w
	});
	var Wf = u(Mn => {
		"use strict";
		Object.defineProperty(Mn, "__esModule", {
			value: !0
		});
		Mn.ixSession = void 0;
		var yw = Be(),
			ft = rr(),
			{
				IX2_SESSION_INITIALIZED: mw,
				IX2_SESSION_STARTED: Iw,
				IX2_TEST_FRAME_RENDERED: Tw,
				IX2_SESSION_STOPPED: Ow,
				IX2_EVENT_LISTENER_ADDED: bw,
				IX2_EVENT_STATE_CHANGED: Sw,
				IX2_ANIMATION_FRAME_CHANGED: Aw,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: ww,
				IX2_VIEWPORT_WIDTH_CHANGED: Rw,
				IX2_MEDIA_QUERIES_DEFINED: Cw
			} = yw.IX2EngineActionTypes,
			Vf = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1
			},
			xw = 20,
			Nw = (e = Vf, t) => {
				switch (t.type) {
					case mw: {
						let {
							hasBoundaryNodes: r,
							reducedMotion: n
						} = t.payload;
						return (0, ft.merge)(e, {
							hasBoundaryNodes: r,
							reducedMotion: n
						})
					}
					case Iw:
						return (0, ft.set)(e, "active", !0);
					case Tw: {
						let {
							payload: {
								step: r = xw
							}
						} = t;
						return (0, ft.set)(e, "tick", e.tick + r)
					}
					case Ow:
						return Vf;
					case Aw: {
						let {
							payload: {
								now: r
							}
						} = t;
						return (0, ft.set)(e, "tick", r)
					}
					case bw: {
						let r = (0, ft.addLast)(e.eventListeners, t.payload);
						return (0, ft.set)(e, "eventListeners", r)
					}
					case Sw: {
						let {
							stateKey: r,
							newState: n
						} = t.payload;
						return (0, ft.setIn)(e, ["eventState", r], n)
					}
					case ww: {
						let {
							actionListId: r,
							isPlaying: n
						} = t.payload;
						return (0, ft.setIn)(e, ["playbackState", r], n)
					}
					case Rw: {
						let {
							width: r,
							mediaQueries: n
						} = t.payload, o = n.length, i = null;
						for (let a = 0; a < o; a++) {
							let {
								key: s,
								min: c,
								max: d
							} = n[a];
							if (r >= c && r <= d) {
								i = s;
								break
							}
						}
						return (0, ft.merge)(e, {
							viewportWidth: r,
							mediaQueryKey: i
						})
					}
					case Cw:
						return (0, ft.set)(e, "hasDefinedMediaQueries", !0);
					default:
						return e
				}
			};
		Mn.ixSession = Nw
	});
	var Hf = u((HH, Bf) => {
		function qw() {
			this.__data__ = [], this.size = 0
		}
		Bf.exports = qw
	});
	var Fn = u((jH, jf) => {
		function Lw(e, t) {
			return e === t || e !== e && t !== t
		}
		jf.exports = Lw
	});
	var Dr = u((kH, kf) => {
		var Pw = Fn();

		function Dw(e, t) {
			for (var r = e.length; r--;)
				if (Pw(e[r][0], t)) return r;
			return -1
		}
		kf.exports = Dw
	});
	var zf = u((KH, Kf) => {
		var Mw = Dr(),
			Fw = Array.prototype,
			Gw = Fw.splice;

		function Xw(e) {
			var t = this.__data__,
				r = Mw(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : Gw.call(t, r, 1), --this.size, !0
		}
		Kf.exports = Xw
	});
	var Qf = u((zH, Yf) => {
		var Uw = Dr();

		function Vw(e) {
			var t = this.__data__,
				r = Uw(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		Yf.exports = Vw
	});
	var Zf = u((YH, $f) => {
		var Ww = Dr();

		function Bw(e) {
			return Ww(this.__data__, e) > -1
		}
		$f.exports = Bw
	});
	var ed = u((QH, Jf) => {
		var Hw = Dr();

		function jw(e, t) {
			var r = this.__data__,
				n = Hw(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		Jf.exports = jw
	});
	var Mr = u(($H, td) => {
		var kw = Hf(),
			Kw = zf(),
			zw = Qf(),
			Yw = Zf(),
			Qw = ed();

		function nr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		nr.prototype.clear = kw;
		nr.prototype.delete = Kw;
		nr.prototype.get = zw;
		nr.prototype.has = Yw;
		nr.prototype.set = Qw;
		td.exports = nr
	});
	var nd = u((ZH, rd) => {
		var $w = Mr();

		function Zw() {
			this.__data__ = new $w, this.size = 0
		}
		rd.exports = Zw
	});
	var od = u((JH, id) => {
		function Jw(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		id.exports = Jw
	});
	var sd = u((ej, ad) => {
		function e0(e) {
			return this.__data__.get(e)
		}
		ad.exports = e0
	});
	var cd = u((tj, ud) => {
		function t0(e) {
			return this.__data__.has(e)
		}
		ud.exports = t0
	});
	var dt = u((rj, ld) => {
		function r0(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		ld.exports = r0
	});
	var aa = u((nj, fd) => {
		var n0 = St(),
			i0 = dt(),
			o0 = "[object AsyncFunction]",
			a0 = "[object Function]",
			s0 = "[object GeneratorFunction]",
			u0 = "[object Proxy]";

		function c0(e) {
			if (!i0(e)) return !1;
			var t = n0(e);
			return t == a0 || t == s0 || t == o0 || t == u0
		}
		fd.exports = c0
	});
	var pd = u((ij, dd) => {
		var l0 = nt(),
			f0 = l0["__core-js_shared__"];
		dd.exports = f0
	});
	var gd = u((oj, hd) => {
		var sa = pd(),
			vd = function() {
				var e = /[^.]+$/.exec(sa && sa.keys && sa.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function d0(e) {
			return !!vd && vd in e
		}
		hd.exports = d0
	});
	var ua = u((aj, Ed) => {
		var p0 = Function.prototype,
			v0 = p0.toString;

		function h0(e) {
			if (e != null) {
				try {
					return v0.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		Ed.exports = h0
	});
	var yd = u((sj, _d) => {
		var g0 = aa(),
			E0 = gd(),
			_0 = dt(),
			y0 = ua(),
			m0 = /[\\^$.*+?()[\]{}|]/g,
			I0 = /^\[object .+?Constructor\]$/,
			T0 = Function.prototype,
			O0 = Object.prototype,
			b0 = T0.toString,
			S0 = O0.hasOwnProperty,
			A0 = RegExp("^" + b0.call(S0).replace(m0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function w0(e) {
			if (!_0(e) || E0(e)) return !1;
			var t = g0(e) ? A0 : I0;
			return t.test(y0(e))
		}
		_d.exports = w0
	});
	var Id = u((uj, md) => {
		function R0(e, t) {
			return e?.[t]
		}
		md.exports = R0
	});
	var At = u((cj, Td) => {
		var C0 = yd(),
			x0 = Id();

		function N0(e, t) {
			var r = x0(e, t);
			return C0(r) ? r : void 0
		}
		Td.exports = N0
	});
	var Gn = u((lj, Od) => {
		var q0 = At(),
			L0 = nt(),
			P0 = q0(L0, "Map");
		Od.exports = P0
	});
	var Fr = u((fj, bd) => {
		var D0 = At(),
			M0 = D0(Object, "create");
		bd.exports = M0
	});
	var wd = u((dj, Ad) => {
		var Sd = Fr();

		function F0() {
			this.__data__ = Sd ? Sd(null) : {}, this.size = 0
		}
		Ad.exports = F0
	});
	var Cd = u((pj, Rd) => {
		function G0(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		Rd.exports = G0
	});
	var Nd = u((vj, xd) => {
		var X0 = Fr(),
			U0 = "__lodash_hash_undefined__",
			V0 = Object.prototype,
			W0 = V0.hasOwnProperty;

		function B0(e) {
			var t = this.__data__;
			if (X0) {
				var r = t[e];
				return r === U0 ? void 0 : r
			}
			return W0.call(t, e) ? t[e] : void 0
		}
		xd.exports = B0
	});
	var Ld = u((hj, qd) => {
		var H0 = Fr(),
			j0 = Object.prototype,
			k0 = j0.hasOwnProperty;

		function K0(e) {
			var t = this.__data__;
			return H0 ? t[e] !== void 0 : k0.call(t, e)
		}
		qd.exports = K0
	});
	var Dd = u((gj, Pd) => {
		var z0 = Fr(),
			Y0 = "__lodash_hash_undefined__";

		function Q0(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = z0 && t === void 0 ? Y0 : t, this
		}
		Pd.exports = Q0
	});
	var Fd = u((Ej, Md) => {
		var $0 = wd(),
			Z0 = Cd(),
			J0 = Nd(),
			eR = Ld(),
			tR = Dd();

		function ir(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		ir.prototype.clear = $0;
		ir.prototype.delete = Z0;
		ir.prototype.get = J0;
		ir.prototype.has = eR;
		ir.prototype.set = tR;
		Md.exports = ir
	});
	var Ud = u((_j, Xd) => {
		var Gd = Fd(),
			rR = Mr(),
			nR = Gn();

		function iR() {
			this.size = 0, this.__data__ = {
				hash: new Gd,
				map: new(nR || rR),
				string: new Gd
			}
		}
		Xd.exports = iR
	});
	var Wd = u((yj, Vd) => {
		function oR(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		Vd.exports = oR
	});
	var Gr = u((mj, Bd) => {
		var aR = Wd();

		function sR(e, t) {
			var r = e.__data__;
			return aR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		Bd.exports = sR
	});
	var jd = u((Ij, Hd) => {
		var uR = Gr();

		function cR(e) {
			var t = uR(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		Hd.exports = cR
	});
	var Kd = u((Tj, kd) => {
		var lR = Gr();

		function fR(e) {
			return lR(this, e).get(e)
		}
		kd.exports = fR
	});
	var Yd = u((Oj, zd) => {
		var dR = Gr();

		function pR(e) {
			return dR(this, e).has(e)
		}
		zd.exports = pR
	});
	var $d = u((bj, Qd) => {
		var vR = Gr();

		function hR(e, t) {
			var r = vR(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		Qd.exports = hR
	});
	var Xn = u((Sj, Zd) => {
		var gR = Ud(),
			ER = jd(),
			_R = Kd(),
			yR = Yd(),
			mR = $d();

		function or(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		or.prototype.clear = gR;
		or.prototype.delete = ER;
		or.prototype.get = _R;
		or.prototype.has = yR;
		or.prototype.set = mR;
		Zd.exports = or
	});
	var ep = u((Aj, Jd) => {
		var IR = Mr(),
			TR = Gn(),
			OR = Xn(),
			bR = 200;

		function SR(e, t) {
			var r = this.__data__;
			if (r instanceof IR) {
				var n = r.__data__;
				if (!TR || n.length < bR - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new OR(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		Jd.exports = SR
	});
	var ca = u((wj, tp) => {
		var AR = Mr(),
			wR = nd(),
			RR = od(),
			CR = sd(),
			xR = cd(),
			NR = ep();

		function ar(e) {
			var t = this.__data__ = new AR(e);
			this.size = t.size
		}
		ar.prototype.clear = wR;
		ar.prototype.delete = RR;
		ar.prototype.get = CR;
		ar.prototype.has = xR;
		ar.prototype.set = NR;
		tp.exports = ar
	});
	var np = u((Rj, rp) => {
		var qR = "__lodash_hash_undefined__";

		function LR(e) {
			return this.__data__.set(e, qR), this
		}
		rp.exports = LR
	});
	var op = u((Cj, ip) => {
		function PR(e) {
			return this.__data__.has(e)
		}
		ip.exports = PR
	});
	var sp = u((xj, ap) => {
		var DR = Xn(),
			MR = np(),
			FR = op();

		function Un(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new DR; ++t < r;) this.add(e[t])
		}
		Un.prototype.add = Un.prototype.push = MR;
		Un.prototype.has = FR;
		ap.exports = Un
	});
	var cp = u((Nj, up) => {
		function GR(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		up.exports = GR
	});
	var fp = u((qj, lp) => {
		function XR(e, t) {
			return e.has(t)
		}
		lp.exports = XR
	});
	var la = u((Lj, dp) => {
		var UR = sp(),
			VR = cp(),
			WR = fp(),
			BR = 1,
			HR = 2;

		function jR(e, t, r, n, o, i) {
			var a = r & BR,
				s = e.length,
				c = t.length;
			if (s != c && !(a && c > s)) return !1;
			var d = i.get(e),
				E = i.get(t);
			if (d && E) return d == t && E == e;
			var f = -1,
				_ = !0,
				p = r & HR ? new UR : void 0;
			for (i.set(e, t), i.set(t, e); ++f < s;) {
				var g = e[f],
					O = t[f];
				if (n) var R = a ? n(O, g, f, t, e, i) : n(g, O, f, e, t, i);
				if (R !== void 0) {
					if (R) continue;
					_ = !1;
					break
				}
				if (p) {
					if (!VR(t, function(A, x) {
							if (!WR(p, x) && (g === A || o(g, A, r, n, i))) return p.push(x)
						})) {
						_ = !1;
						break
					}
				} else if (!(g === O || o(g, O, r, n, i))) {
					_ = !1;
					break
				}
			}
			return i.delete(e), i.delete(t), _
		}
		dp.exports = jR
	});
	var vp = u((Pj, pp) => {
		var kR = nt(),
			KR = kR.Uint8Array;
		pp.exports = KR
	});
	var gp = u((Dj, hp) => {
		function zR(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, o) {
				r[++t] = [o, n]
			}), r
		}
		hp.exports = zR
	});
	var _p = u((Mj, Ep) => {
		function YR(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		Ep.exports = YR
	});
	var Op = u((Fj, Tp) => {
		var yp = $t(),
			mp = vp(),
			QR = Fn(),
			$R = la(),
			ZR = gp(),
			JR = _p(),
			eC = 1,
			tC = 2,
			rC = "[object Boolean]",
			nC = "[object Date]",
			iC = "[object Error]",
			oC = "[object Map]",
			aC = "[object Number]",
			sC = "[object RegExp]",
			uC = "[object Set]",
			cC = "[object String]",
			lC = "[object Symbol]",
			fC = "[object ArrayBuffer]",
			dC = "[object DataView]",
			Ip = yp ? yp.prototype : void 0,
			fa = Ip ? Ip.valueOf : void 0;

		function pC(e, t, r, n, o, i, a) {
			switch (r) {
				case dC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case fC:
					return !(e.byteLength != t.byteLength || !i(new mp(e), new mp(t)));
				case rC:
				case nC:
				case aC:
					return QR(+e, +t);
				case iC:
					return e.name == t.name && e.message == t.message;
				case sC:
				case cC:
					return e == t + "";
				case oC:
					var s = ZR;
				case uC:
					var c = n & eC;
					if (s || (s = JR), e.size != t.size && !c) return !1;
					var d = a.get(e);
					if (d) return d == t;
					n |= tC, a.set(e, t);
					var E = $R(s(e), s(t), n, o, i, a);
					return a.delete(e), E;
				case lC:
					if (fa) return fa.call(e) == fa.call(t)
			}
			return !1
		}
		Tp.exports = pC
	});
	var Vn = u((Gj, bp) => {
		function vC(e, t) {
			for (var r = -1, n = t.length, o = e.length; ++r < n;) e[o + r] = t[r];
			return e
		}
		bp.exports = vC
	});
	var Ne = u((Xj, Sp) => {
		var hC = Array.isArray;
		Sp.exports = hC
	});
	var da = u((Uj, Ap) => {
		var gC = Vn(),
			EC = Ne();

		function _C(e, t, r) {
			var n = t(e);
			return EC(e) ? n : gC(n, r(e))
		}
		Ap.exports = _C
	});
	var Rp = u((Vj, wp) => {
		function yC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (i[o++] = a)
			}
			return i
		}
		wp.exports = yC
	});
	var pa = u((Wj, Cp) => {
		function mC() {
			return []
		}
		Cp.exports = mC
	});
	var va = u((Bj, Np) => {
		var IC = Rp(),
			TC = pa(),
			OC = Object.prototype,
			bC = OC.propertyIsEnumerable,
			xp = Object.getOwnPropertySymbols,
			SC = xp ? function(e) {
				return e == null ? [] : (e = Object(e), IC(xp(e), function(t) {
					return bC.call(e, t)
				}))
			} : TC;
		Np.exports = SC
	});
	var Lp = u((Hj, qp) => {
		function AC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		qp.exports = AC
	});
	var Dp = u((jj, Pp) => {
		var wC = St(),
			RC = _t(),
			CC = "[object Arguments]";

		function xC(e) {
			return RC(e) && wC(e) == CC
		}
		Pp.exports = xC
	});
	var Xr = u((kj, Gp) => {
		var Mp = Dp(),
			NC = _t(),
			Fp = Object.prototype,
			qC = Fp.hasOwnProperty,
			LC = Fp.propertyIsEnumerable,
			PC = Mp(function() {
				return arguments
			}()) ? Mp : function(e) {
				return NC(e) && qC.call(e, "callee") && !LC.call(e, "callee")
			};
		Gp.exports = PC
	});
	var Up = u((Kj, Xp) => {
		function DC() {
			return !1
		}
		Xp.exports = DC
	});
	var Wn = u((Ur, sr) => {
		var MC = nt(),
			FC = Up(),
			Bp = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
			Vp = Bp && typeof sr == "object" && sr && !sr.nodeType && sr,
			GC = Vp && Vp.exports === Bp,
			Wp = GC ? MC.Buffer : void 0,
			XC = Wp ? Wp.isBuffer : void 0,
			UC = XC || FC;
		sr.exports = UC
	});
	var Bn = u((zj, Hp) => {
		var VC = 9007199254740991,
			WC = /^(?:0|[1-9]\d*)$/;

		function BC(e, t) {
			var r = typeof e;
			return t = t ?? VC, !!t && (r == "number" || r != "symbol" && WC.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		Hp.exports = BC
	});
	var Hn = u((Yj, jp) => {
		var HC = 9007199254740991;

		function jC(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= HC
		}
		jp.exports = jC
	});
	var Kp = u((Qj, kp) => {
		var kC = St(),
			KC = Hn(),
			zC = _t(),
			YC = "[object Arguments]",
			QC = "[object Array]",
			$C = "[object Boolean]",
			ZC = "[object Date]",
			JC = "[object Error]",
			ex = "[object Function]",
			tx = "[object Map]",
			rx = "[object Number]",
			nx = "[object Object]",
			ix = "[object RegExp]",
			ox = "[object Set]",
			ax = "[object String]",
			sx = "[object WeakMap]",
			ux = "[object ArrayBuffer]",
			cx = "[object DataView]",
			lx = "[object Float32Array]",
			fx = "[object Float64Array]",
			dx = "[object Int8Array]",
			px = "[object Int16Array]",
			vx = "[object Int32Array]",
			hx = "[object Uint8Array]",
			gx = "[object Uint8ClampedArray]",
			Ex = "[object Uint16Array]",
			_x = "[object Uint32Array]",
			ye = {};
		ye[lx] = ye[fx] = ye[dx] = ye[px] = ye[vx] = ye[hx] = ye[gx] = ye[Ex] = ye[_x] = !0;
		ye[YC] = ye[QC] = ye[ux] = ye[$C] = ye[cx] = ye[ZC] = ye[JC] = ye[ex] = ye[tx] = ye[rx] = ye[nx] = ye[ix] = ye[ox] = ye[ax] = ye[sx] = !1;

		function yx(e) {
			return zC(e) && KC(e.length) && !!ye[kC(e)]
		}
		kp.exports = yx
	});
	var Yp = u(($j, zp) => {
		function mx(e) {
			return function(t) {
				return e(t)
			}
		}
		zp.exports = mx
	});
	var $p = u((Vr, ur) => {
		var Ix = Fo(),
			Qp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
			Wr = Qp && typeof ur == "object" && ur && !ur.nodeType && ur,
			Tx = Wr && Wr.exports === Qp,
			ha = Tx && Ix.process,
			Ox = function() {
				try {
					var e = Wr && Wr.require && Wr.require("util").types;
					return e || ha && ha.binding && ha.binding("util")
				} catch {}
			}();
		ur.exports = Ox
	});
	var jn = u((Zj, ev) => {
		var bx = Kp(),
			Sx = Yp(),
			Zp = $p(),
			Jp = Zp && Zp.isTypedArray,
			Ax = Jp ? Sx(Jp) : bx;
		ev.exports = Ax
	});
	var ga = u((Jj, tv) => {
		var wx = Lp(),
			Rx = Xr(),
			Cx = Ne(),
			xx = Wn(),
			Nx = Bn(),
			qx = jn(),
			Lx = Object.prototype,
			Px = Lx.hasOwnProperty;

		function Dx(e, t) {
			var r = Cx(e),
				n = !r && Rx(e),
				o = !r && !n && xx(e),
				i = !r && !n && !o && qx(e),
				a = r || n || o || i,
				s = a ? wx(e.length, String) : [],
				c = s.length;
			for (var d in e)(t || Px.call(e, d)) && !(a && (d == "length" || o && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || Nx(d, c))) && s.push(d);
			return s
		}
		tv.exports = Dx
	});
	var kn = u((ek, rv) => {
		var Mx = Object.prototype;

		function Fx(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || Mx;
			return e === r
		}
		rv.exports = Fx
	});
	var iv = u((tk, nv) => {
		var Gx = Go(),
			Xx = Gx(Object.keys, Object);
		nv.exports = Xx
	});
	var Kn = u((rk, ov) => {
		var Ux = kn(),
			Vx = iv(),
			Wx = Object.prototype,
			Bx = Wx.hasOwnProperty;

		function Hx(e) {
			if (!Ux(e)) return Vx(e);
			var t = [];
			for (var r in Object(e)) Bx.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		ov.exports = Hx
	});
	var Gt = u((nk, av) => {
		var jx = aa(),
			kx = Hn();

		function Kx(e) {
			return e != null && kx(e.length) && !jx(e)
		}
		av.exports = Kx
	});
	var Br = u((ik, sv) => {
		var zx = ga(),
			Yx = Kn(),
			Qx = Gt();

		function $x(e) {
			return Qx(e) ? zx(e) : Yx(e)
		}
		sv.exports = $x
	});
	var cv = u((ok, uv) => {
		var Zx = da(),
			Jx = va(),
			eN = Br();

		function tN(e) {
			return Zx(e, eN, Jx)
		}
		uv.exports = tN
	});
	var dv = u((ak, fv) => {
		var lv = cv(),
			rN = 1,
			nN = Object.prototype,
			iN = nN.hasOwnProperty;

		function oN(e, t, r, n, o, i) {
			var a = r & rN,
				s = lv(e),
				c = s.length,
				d = lv(t),
				E = d.length;
			if (c != E && !a) return !1;
			for (var f = c; f--;) {
				var _ = s[f];
				if (!(a ? _ in t : iN.call(t, _))) return !1
			}
			var p = i.get(e),
				g = i.get(t);
			if (p && g) return p == t && g == e;
			var O = !0;
			i.set(e, t), i.set(t, e);
			for (var R = a; ++f < c;) {
				_ = s[f];
				var A = e[_],
					x = t[_];
				if (n) var S = a ? n(x, A, _, t, e, i) : n(A, x, _, e, t, i);
				if (!(S === void 0 ? A === x || o(A, x, r, n, i) : S)) {
					O = !1;
					break
				}
				R || (R = _ == "constructor")
			}
			if (O && !R) {
				var L = e.constructor,
					q = t.constructor;
				L != q && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof q == "function" && q instanceof q) && (O = !1)
			}
			return i.delete(e), i.delete(t), O
		}
		fv.exports = oN
	});
	var vv = u((sk, pv) => {
		var aN = At(),
			sN = nt(),
			uN = aN(sN, "DataView");
		pv.exports = uN
	});
	var gv = u((uk, hv) => {
		var cN = At(),
			lN = nt(),
			fN = cN(lN, "Promise");
		hv.exports = fN
	});
	var _v = u((ck, Ev) => {
		var dN = At(),
			pN = nt(),
			vN = dN(pN, "Set");
		Ev.exports = vN
	});
	var Ea = u((lk, yv) => {
		var hN = At(),
			gN = nt(),
			EN = hN(gN, "WeakMap");
		yv.exports = EN
	});
	var zn = u((fk, Av) => {
		var _a = vv(),
			ya = Gn(),
			ma = gv(),
			Ia = _v(),
			Ta = Ea(),
			Sv = St(),
			cr = ua(),
			mv = "[object Map]",
			_N = "[object Object]",
			Iv = "[object Promise]",
			Tv = "[object Set]",
			Ov = "[object WeakMap]",
			bv = "[object DataView]",
			yN = cr(_a),
			mN = cr(ya),
			IN = cr(ma),
			TN = cr(Ia),
			ON = cr(Ta),
			Xt = Sv;
		(_a && Xt(new _a(new ArrayBuffer(1))) != bv || ya && Xt(new ya) != mv || ma && Xt(ma.resolve()) != Iv || Ia && Xt(new Ia) != Tv || Ta && Xt(new Ta) != Ov) && (Xt = function(e) {
			var t = Sv(e),
				r = t == _N ? e.constructor : void 0,
				n = r ? cr(r) : "";
			if (n) switch (n) {
				case yN:
					return bv;
				case mN:
					return mv;
				case IN:
					return Iv;
				case TN:
					return Tv;
				case ON:
					return Ov
			}
			return t
		});
		Av.exports = Xt
	});
	var Pv = u((dk, Lv) => {
		var Oa = ca(),
			bN = la(),
			SN = Op(),
			AN = dv(),
			wv = zn(),
			Rv = Ne(),
			Cv = Wn(),
			wN = jn(),
			RN = 1,
			xv = "[object Arguments]",
			Nv = "[object Array]",
			Yn = "[object Object]",
			CN = Object.prototype,
			qv = CN.hasOwnProperty;

		function xN(e, t, r, n, o, i) {
			var a = Rv(e),
				s = Rv(t),
				c = a ? Nv : wv(e),
				d = s ? Nv : wv(t);
			c = c == xv ? Yn : c, d = d == xv ? Yn : d;
			var E = c == Yn,
				f = d == Yn,
				_ = c == d;
			if (_ && Cv(e)) {
				if (!Cv(t)) return !1;
				a = !0, E = !1
			}
			if (_ && !E) return i || (i = new Oa), a || wN(e) ? bN(e, t, r, n, o, i) : SN(e, t, c, r, n, o, i);
			if (!(r & RN)) {
				var p = E && qv.call(e, "__wrapped__"),
					g = f && qv.call(t, "__wrapped__");
				if (p || g) {
					var O = p ? e.value() : e,
						R = g ? t.value() : t;
					return i || (i = new Oa), o(O, R, r, n, i)
				}
			}
			return _ ? (i || (i = new Oa), AN(e, t, r, n, o, i)) : !1
		}
		Lv.exports = xN
	});
	var ba = u((pk, Fv) => {
		var NN = Pv(),
			Dv = _t();

		function Mv(e, t, r, n, o) {
			return e === t ? !0 : e == null || t == null || !Dv(e) && !Dv(t) ? e !== e && t !== t : NN(e, t, r, n, Mv, o)
		}
		Fv.exports = Mv
	});
	var Xv = u((vk, Gv) => {
		var qN = ca(),
			LN = ba(),
			PN = 1,
			DN = 2;

		function MN(e, t, r, n) {
			var o = r.length,
				i = o,
				a = !n;
			if (e == null) return !i;
			for (e = Object(e); o--;) {
				var s = r[o];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++o < i;) {
				s = r[o];
				var c = s[0],
					d = e[c],
					E = s[1];
				if (a && s[2]) {
					if (d === void 0 && !(c in e)) return !1
				} else {
					var f = new qN;
					if (n) var _ = n(d, E, c, e, t, f);
					if (!(_ === void 0 ? LN(E, d, PN | DN, n, f) : _)) return !1
				}
			}
			return !0
		}
		Gv.exports = MN
	});
	var Sa = u((hk, Uv) => {
		var FN = dt();

		function GN(e) {
			return e === e && !FN(e)
		}
		Uv.exports = GN
	});
	var Wv = u((gk, Vv) => {
		var XN = Sa(),
			UN = Br();

		function VN(e) {
			for (var t = UN(e), r = t.length; r--;) {
				var n = t[r],
					o = e[n];
				t[r] = [n, o, XN(o)]
			}
			return t
		}
		Vv.exports = VN
	});
	var Aa = u((Ek, Bv) => {
		function WN(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		Bv.exports = WN
	});
	var jv = u((_k, Hv) => {
		var BN = Xv(),
			HN = Wv(),
			jN = Aa();

		function kN(e) {
			var t = HN(e);
			return t.length == 1 && t[0][2] ? jN(t[0][0], t[0][1]) : function(r) {
				return r === e || BN(r, e, t)
			}
		}
		Hv.exports = kN
	});
	var Hr = u((yk, kv) => {
		var KN = St(),
			zN = _t(),
			YN = "[object Symbol]";

		function QN(e) {
			return typeof e == "symbol" || zN(e) && KN(e) == YN
		}
		kv.exports = QN
	});
	var Qn = u((mk, Kv) => {
		var $N = Ne(),
			ZN = Hr(),
			JN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			eq = /^\w*$/;

		function tq(e, t) {
			if ($N(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || ZN(e) ? !0 : eq.test(e) || !JN.test(e) || t != null && e in Object(t)
		}
		Kv.exports = tq
	});
	var Qv = u((Ik, Yv) => {
		var zv = Xn(),
			rq = "Expected a function";

		function wa(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(rq);
			var r = function() {
				var n = arguments,
					o = t ? t.apply(this, n) : n[0],
					i = r.cache;
				if (i.has(o)) return i.get(o);
				var a = e.apply(this, n);
				return r.cache = i.set(o, a) || i, a
			};
			return r.cache = new(wa.Cache || zv), r
		}
		wa.Cache = zv;
		Yv.exports = wa
	});
	var Zv = u((Tk, $v) => {
		var nq = Qv(),
			iq = 500;

		function oq(e) {
			var t = nq(e, function(n) {
					return r.size === iq && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		$v.exports = oq
	});
	var eh = u((Ok, Jv) => {
		var aq = Zv(),
			sq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			uq = /\\(\\)?/g,
			cq = aq(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(sq, function(r, n, o, i) {
					t.push(o ? i.replace(uq, "$1") : n || r)
				}), t
			});
		Jv.exports = cq
	});
	var Ra = u((bk, th) => {
		function lq(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
			return o
		}
		th.exports = lq
	});
	var sh = u((Sk, ah) => {
		var rh = $t(),
			fq = Ra(),
			dq = Ne(),
			pq = Hr(),
			vq = 1 / 0,
			nh = rh ? rh.prototype : void 0,
			ih = nh ? nh.toString : void 0;

		function oh(e) {
			if (typeof e == "string") return e;
			if (dq(e)) return fq(e, oh) + "";
			if (pq(e)) return ih ? ih.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -vq ? "-0" : t
		}
		ah.exports = oh
	});
	var ch = u((Ak, uh) => {
		var hq = sh();

		function gq(e) {
			return e == null ? "" : hq(e)
		}
		uh.exports = gq
	});
	var jr = u((wk, lh) => {
		var Eq = Ne(),
			_q = Qn(),
			yq = eh(),
			mq = ch();

		function Iq(e, t) {
			return Eq(e) ? e : _q(e, t) ? [e] : yq(mq(e))
		}
		lh.exports = Iq
	});
	var lr = u((Rk, fh) => {
		var Tq = Hr(),
			Oq = 1 / 0;

		function bq(e) {
			if (typeof e == "string" || Tq(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -Oq ? "-0" : t
		}
		fh.exports = bq
	});
	var $n = u((Ck, dh) => {
		var Sq = jr(),
			Aq = lr();

		function wq(e, t) {
			t = Sq(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[Aq(t[r++])];
			return r && r == n ? e : void 0
		}
		dh.exports = wq
	});
	var Zn = u((xk, ph) => {
		var Rq = $n();

		function Cq(e, t, r) {
			var n = e == null ? void 0 : Rq(e, t);
			return n === void 0 ? r : n
		}
		ph.exports = Cq
	});
	var hh = u((Nk, vh) => {
		function xq(e, t) {
			return e != null && t in Object(e)
		}
		vh.exports = xq
	});
	var Eh = u((qk, gh) => {
		var Nq = jr(),
			qq = Xr(),
			Lq = Ne(),
			Pq = Bn(),
			Dq = Hn(),
			Mq = lr();

		function Fq(e, t, r) {
			t = Nq(t, e);
			for (var n = -1, o = t.length, i = !1; ++n < o;) {
				var a = Mq(t[n]);
				if (!(i = e != null && r(e, a))) break;
				e = e[a]
			}
			return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && Dq(o) && Pq(a, o) && (Lq(e) || qq(e)))
		}
		gh.exports = Fq
	});
	var yh = u((Lk, _h) => {
		var Gq = hh(),
			Xq = Eh();

		function Uq(e, t) {
			return e != null && Xq(e, t, Gq)
		}
		_h.exports = Uq
	});
	var Ih = u((Pk, mh) => {
		var Vq = ba(),
			Wq = Zn(),
			Bq = yh(),
			Hq = Qn(),
			jq = Sa(),
			kq = Aa(),
			Kq = lr(),
			zq = 1,
			Yq = 2;

		function Qq(e, t) {
			return Hq(e) && jq(t) ? kq(Kq(e), t) : function(r) {
				var n = Wq(r, e);
				return n === void 0 && n === t ? Bq(r, e) : Vq(t, n, zq | Yq)
			}
		}
		mh.exports = Qq
	});
	var Jn = u((Dk, Th) => {
		function $q(e) {
			return e
		}
		Th.exports = $q
	});
	var Ca = u((Mk, Oh) => {
		function Zq(e) {
			return function(t) {
				return t?.[e]
			}
		}
		Oh.exports = Zq
	});
	var Sh = u((Fk, bh) => {
		var Jq = $n();

		function eL(e) {
			return function(t) {
				return Jq(t, e)
			}
		}
		bh.exports = eL
	});
	var wh = u((Gk, Ah) => {
		var tL = Ca(),
			rL = Sh(),
			nL = Qn(),
			iL = lr();

		function oL(e) {
			return nL(e) ? tL(iL(e)) : rL(e)
		}
		Ah.exports = oL
	});
	var wt = u((Xk, Rh) => {
		var aL = jv(),
			sL = Ih(),
			uL = Jn(),
			cL = Ne(),
			lL = wh();

		function fL(e) {
			return typeof e == "function" ? e : e == null ? uL : typeof e == "object" ? cL(e) ? sL(e[0], e[1]) : aL(e) : lL(e)
		}
		Rh.exports = fL
	});
	var xa = u((Uk, Ch) => {
		var dL = wt(),
			pL = Gt(),
			vL = Br();

		function hL(e) {
			return function(t, r, n) {
				var o = Object(t);
				if (!pL(t)) {
					var i = dL(r, 3);
					t = vL(t), r = function(s) {
						return i(o[s], s, o)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? o[i ? t[a] : a] : void 0
			}
		}
		Ch.exports = hL
	});
	var Na = u((Vk, xh) => {
		function gL(e, t, r, n) {
			for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
				if (t(e[i], i, e)) return i;
			return -1
		}
		xh.exports = gL
	});
	var qh = u((Wk, Nh) => {
		var EL = /\s/;

		function _L(e) {
			for (var t = e.length; t-- && EL.test(e.charAt(t)););
			return t
		}
		Nh.exports = _L
	});
	var Ph = u((Bk, Lh) => {
		var yL = qh(),
			mL = /^\s+/;

		function IL(e) {
			return e && e.slice(0, yL(e) + 1).replace(mL, "")
		}
		Lh.exports = IL
	});
	var ei = u((Hk, Fh) => {
		var TL = Ph(),
			Dh = dt(),
			OL = Hr(),
			Mh = 0 / 0,
			bL = /^[-+]0x[0-9a-f]+$/i,
			SL = /^0b[01]+$/i,
			AL = /^0o[0-7]+$/i,
			wL = parseInt;

		function RL(e) {
			if (typeof e == "number") return e;
			if (OL(e)) return Mh;
			if (Dh(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = Dh(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = TL(e);
			var r = SL.test(e);
			return r || AL.test(e) ? wL(e.slice(2), r ? 2 : 8) : bL.test(e) ? Mh : +e
		}
		Fh.exports = RL
	});
	var Uh = u((jk, Xh) => {
		var CL = ei(),
			Gh = 1 / 0,
			xL = 17976931348623157e292;

		function NL(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = CL(e), e === Gh || e === -Gh) {
				var t = e < 0 ? -1 : 1;
				return t * xL
			}
			return e === e ? e : 0
		}
		Xh.exports = NL
	});
	var qa = u((kk, Vh) => {
		var qL = Uh();

		function LL(e) {
			var t = qL(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		Vh.exports = LL
	});
	var Bh = u((Kk, Wh) => {
		var PL = Na(),
			DL = wt(),
			ML = qa(),
			FL = Math.max;

		function GL(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var o = r == null ? 0 : ML(r);
			return o < 0 && (o = FL(n + o, 0)), PL(e, DL(t, 3), o)
		}
		Wh.exports = GL
	});
	var La = u((zk, Hh) => {
		var XL = xa(),
			UL = Bh(),
			VL = XL(UL);
		Hh.exports = VL
	});
	var ri = u(Ge => {
		"use strict";
		var WL = et().default;
		Object.defineProperty(Ge, "__esModule", {
			value: !0
		});
		Ge.withBrowser = Ge.TRANSFORM_STYLE_PREFIXED = Ge.TRANSFORM_PREFIXED = Ge.IS_BROWSER_ENV = Ge.FLEX_PREFIXED = Ge.ELEMENT_MATCHES = void 0;
		var BL = WL(La()),
			kh = typeof window < "u";
		Ge.IS_BROWSER_ENV = kh;
		var ti = (e, t) => kh ? e() : t;
		Ge.withBrowser = ti;
		var HL = ti(() => (0, BL.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
		Ge.ELEMENT_MATCHES = HL;
		var jL = ti(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let o = 0; o < n; o++) {
					let i = t[o];
					if (e.style.display = i, e.style.display === i) return i
				}
				return r
			} catch {
				return r
			}
		}, "flex");
		Ge.FLEX_PREFIXED = jL;
		var Kh = ti(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let o = 0; o < n; o++) {
					let i = t[o] + r;
					if (e.style[i] !== void 0) return i
				}
			}
			return "transform"
		}, "transform");
		Ge.TRANSFORM_PREFIXED = Kh;
		var jh = Kh.split("transform")[0],
			kL = jh ? jh + "TransformStyle" : "transformStyle";
		Ge.TRANSFORM_STYLE_PREFIXED = kL
	});
	var Pa = u((Qk, Zh) => {
		var KL = 4,
			zL = .001,
			YL = 1e-7,
			QL = 10,
			kr = 11,
			ni = 1 / (kr - 1),
			$L = typeof Float32Array == "function";

		function zh(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function Yh(e, t) {
			return 3 * t - 6 * e
		}

		function Qh(e) {
			return 3 * e
		}

		function ii(e, t, r) {
			return ((zh(t, r) * e + Yh(t, r)) * e + Qh(t)) * e
		}

		function $h(e, t, r) {
			return 3 * zh(t, r) * e * e + 2 * Yh(t, r) * e + Qh(t)
		}

		function ZL(e, t, r, n, o) {
			var i, a, s = 0;
			do a = t + (r - t) / 2, i = ii(a, n, o) - e, i > 0 ? r = a : t = a; while (Math.abs(i) > YL && ++s < QL);
			return a
		}

		function JL(e, t, r, n) {
			for (var o = 0; o < KL; ++o) {
				var i = $h(t, r, n);
				if (i === 0) return t;
				var a = ii(t, r, n) - e;
				t -= a / i
			}
			return t
		}
		Zh.exports = function(t, r, n, o) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var i = $L ? new Float32Array(kr) : new Array(kr);
			if (t !== r || n !== o)
				for (var a = 0; a < kr; ++a) i[a] = ii(a * ni, t, n);

			function s(c) {
				for (var d = 0, E = 1, f = kr - 1; E !== f && i[E] <= c; ++E) d += ni;
				--E;
				var _ = (c - i[E]) / (i[E + 1] - i[E]),
					p = d + _ * ni,
					g = $h(p, t, n);
				return g >= zL ? JL(c, p, t, n) : g === 0 ? p : ZL(c, d, d + ni, t, n)
			}
			return function(d) {
				return t === r && n === o ? d : d === 0 ? 0 : d === 1 ? 1 : ii(s(d), r, o)
			}
		}
	});
	var Da = u(se => {
		"use strict";
		var eP = et().default;
		Object.defineProperty(se, "__esModule", {
			value: !0
		});
		se.bounce = MP;
		se.bouncePast = FP;
		se.easeOut = se.easeInOut = se.easeIn = se.ease = void 0;
		se.inBack = wP;
		se.inCirc = OP;
		se.inCubic = uP;
		se.inElastic = xP;
		se.inExpo = mP;
		se.inOutBack = CP;
		se.inOutCirc = SP;
		se.inOutCubic = lP;
		se.inOutElastic = qP;
		se.inOutExpo = TP;
		se.inOutQuad = sP;
		se.inOutQuart = pP;
		se.inOutQuint = gP;
		se.inOutSine = yP;
		se.inQuad = oP;
		se.inQuart = fP;
		se.inQuint = vP;
		se.inSine = EP;
		se.outBack = RP;
		se.outBounce = AP;
		se.outCirc = bP;
		se.outCubic = cP;
		se.outElastic = NP;
		se.outExpo = IP;
		se.outQuad = aP;
		se.outQuart = dP;
		se.outQuint = hP;
		se.outSine = _P;
		se.swingFrom = PP;
		se.swingFromTo = LP;
		se.swingTo = DP;
		var oi = eP(Pa()),
			mt = 1.70158,
			tP = (0, oi.default)(.25, .1, .25, 1);
		se.ease = tP;
		var rP = (0, oi.default)(.42, 0, 1, 1);
		se.easeIn = rP;
		var nP = (0, oi.default)(0, 0, .58, 1);
		se.easeOut = nP;
		var iP = (0, oi.default)(.42, 0, .58, 1);
		se.easeInOut = iP;

		function oP(e) {
			return Math.pow(e, 2)
		}

		function aP(e) {
			return -(Math.pow(e - 1, 2) - 1)
		}

		function sP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
		}

		function uP(e) {
			return Math.pow(e, 3)
		}

		function cP(e) {
			return Math.pow(e - 1, 3) + 1
		}

		function lP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
		}

		function fP(e) {
			return Math.pow(e, 4)
		}

		function dP(e) {
			return -(Math.pow(e - 1, 4) - 1)
		}

		function pP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
		}

		function vP(e) {
			return Math.pow(e, 5)
		}

		function hP(e) {
			return Math.pow(e - 1, 5) + 1
		}

		function gP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
		}

		function EP(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1
		}

		function _P(e) {
			return Math.sin(e * (Math.PI / 2))
		}

		function yP(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1)
		}

		function mP(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
		}

		function IP(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
		}

		function TP(e) {
			return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
		}

		function OP(e) {
			return -(Math.sqrt(1 - e * e) - 1)
		}

		function bP(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2))
		}

		function SP(e) {
			return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		}

		function AP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function wP(e) {
			let t = mt;
			return e * e * ((t + 1) * e - t)
		}

		function RP(e) {
			let t = mt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function CP(e) {
			let t = mt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function xP(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
		}

		function NP(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
		}

		function qP(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
		}

		function LP(e) {
			let t = mt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function PP(e) {
			let t = mt;
			return e * e * ((t + 1) * e - t)
		}

		function DP(e) {
			let t = mt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function MP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function FP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
		}
	});
	var Fa = u(Kr => {
		"use strict";
		var GP = et().default,
			XP = Pt().default;
		Object.defineProperty(Kr, "__esModule", {
			value: !0
		});
		Kr.applyEasing = WP;
		Kr.createBezierEasing = VP;
		Kr.optimizeFloat = Ma;
		var Jh = XP(Da()),
			UP = GP(Pa());

		function Ma(e, t = 5, r = 10) {
			let n = Math.pow(r, t),
				o = Number(Math.round(e * n) / n);
			return Math.abs(o) > 1e-4 ? o : 0
		}

		function VP(e) {
			return (0, UP.default)(...e)
		}

		function WP(e, t, r) {
			return t === 0 ? 0 : t === 1 ? 1 : Ma(r ? t > 0 ? r(t) : t : t > 0 && e && Jh[e] ? Jh[e](t) : t)
		}
	});
	var ng = u(fr => {
		"use strict";
		Object.defineProperty(fr, "__esModule", {
			value: !0
		});
		fr.createElementState = rg;
		fr.ixElements = void 0;
		fr.mergeActionState = Ga;
		var ai = rr(),
			tg = Be(),
			{
				HTML_ELEMENT: Jk,
				PLAIN_OBJECT: BP,
				ABSTRACT_NODE: e5,
				CONFIG_X_VALUE: HP,
				CONFIG_Y_VALUE: jP,
				CONFIG_Z_VALUE: kP,
				CONFIG_VALUE: KP,
				CONFIG_X_UNIT: zP,
				CONFIG_Y_UNIT: YP,
				CONFIG_Z_UNIT: QP,
				CONFIG_UNIT: $P
			} = tg.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: ZP,
				IX2_INSTANCE_ADDED: JP,
				IX2_ELEMENT_STATE_CHANGED: eD
			} = tg.IX2EngineActionTypes,
			eg = {},
			tD = "refState",
			rD = (e = eg, t = {}) => {
				switch (t.type) {
					case ZP:
						return eg;
					case JP: {
						let {
							elementId: r,
							element: n,
							origin: o,
							actionItem: i,
							refType: a
						} = t.payload, {
							actionTypeId: s
						} = i, c = e;
						return (0, ai.getIn)(c, [r, n]) !== n && (c = rg(c, n, a, r, i)), Ga(c, r, s, o, i)
					}
					case eD: {
						let {
							elementId: r,
							actionTypeId: n,
							current: o,
							actionItem: i
						} = t.payload;
						return Ga(e, r, n, o, i)
					}
					default:
						return e
				}
			};
		fr.ixElements = rD;

		function rg(e, t, r, n, o) {
			let i = r === BP ? (0, ai.getIn)(o, ["config", "target", "objectId"]) : null;
			return (0, ai.mergeIn)(e, [n], {
				id: n,
				ref: t,
				refId: i,
				refType: r
			})
		}

		function Ga(e, t, r, n, o) {
			let i = iD(o),
				a = [t, tD, r];
			return (0, ai.mergeIn)(e, a, n, i)
		}
		var nD = [
			[HP, zP],
			[jP, YP],
			[kP, QP],
			[KP, $P]
		];

		function iD(e) {
			let {
				config: t
			} = e;
			return nD.reduce((r, n) => {
				let o = n[0],
					i = n[1],
					a = t[o],
					s = t[i];
				return a != null && s != null && (r[i] = s), r
			}, {})
		}
	});
	var ig = u(qe => {
		"use strict";
		Object.defineProperty(qe, "__esModule", {
			value: !0
		});
		qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
		var oD = e => e.value;
		qe.getPluginConfig = oD;
		var aD = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		qe.getPluginDuration = aD;
		var sD = e => e || {
			value: 0
		};
		qe.getPluginOrigin = sD;
		var uD = e => ({
			value: e.value
		});
		qe.getPluginDestination = uD;
		var cD = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		qe.createPluginInstance = cD;
		var lD = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		qe.renderPlugin = lD;
		var fD = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		qe.clearPlugin = fD
	});
	var ag = u(Le => {
		"use strict";
		Object.defineProperty(Le, "__esModule", {
			value: !0
		});
		Le.renderPlugin = Le.getPluginOrigin = Le.getPluginDuration = Le.getPluginDestination = Le.getPluginConfig = Le.createPluginInstance = Le.clearPlugin = void 0;
		var dD = e => document.querySelector(`[data-w-id="${e}"]`),
			pD = () => window.Webflow.require("spline"),
			vD = (e, t) => e.filter(r => !t.includes(r)),
			hD = (e, t) => e.value[t];
		Le.getPluginConfig = hD;
		var gD = () => null;
		Le.getPluginDuration = gD;
		var og = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			ED = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let i = Object.keys(e),
						a = vD(n, i);
					return a.length ? a.reduce((c, d) => (c[d] = og[d], c), e) : e
				}
				return n.reduce((i, a) => (i[a] = og[a], i), {})
			};
		Le.getPluginOrigin = ED;
		var _D = e => e.value;
		Le.getPluginDestination = _D;
		var yD = (e, t) => {
			var r, n;
			let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
			return o ? dD(o) : null
		};
		Le.createPluginInstance = yD;
		var mD = (e, t, r) => {
			let n = pD().getInstance(e),
				o = r.config.target.objectId;
			if (!n || !o) return;
			let i = n.spline.findObjectById(o);
			if (!i) return;
			let {
				PLUGIN_SPLINE: a
			} = t;
			a.positionX != null && (i.position.x = a.positionX), a.positionY != null && (i.position.y = a.positionY), a.positionZ != null && (i.position.z = a.positionZ), a.rotationX != null && (i.rotation.x = a.rotationX), a.rotationY != null && (i.rotation.y = a.rotationY), a.rotationZ != null && (i.rotation.z = a.rotationZ), a.scaleX != null && (i.scale.x = a.scaleX), a.scaleY != null && (i.scale.y = a.scaleY), a.scaleZ != null && (i.scale.z = a.scaleZ)
		};
		Le.renderPlugin = mD;
		var ID = () => null;
		Le.clearPlugin = ID
	});
	var lg = u(si => {
		"use strict";
		var cg = Pt().default,
			TD = et().default;
		Object.defineProperty(si, "__esModule", {
			value: !0
		});
		si.pluginMethodMap = void 0;
		var sg = TD(tr()),
			ug = Be(),
			OD = cg(ig()),
			bD = cg(ag()),
			SD = new Map([
				[ug.ActionTypeConsts.PLUGIN_LOTTIE, (0, sg.default)({}, OD)],
				[ug.ActionTypeConsts.PLUGIN_SPLINE, (0, sg.default)({}, bD)]
			]);
		si.pluginMethodMap = SD
	});
	var Xa = u(Ce => {
		"use strict";
		Object.defineProperty(Ce, "__esModule", {
			value: !0
		});
		Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
		Ce.isPluginType = wD;
		Ce.renderPlugin = void 0;
		var AD = ri(),
			fg = lg();

		function wD(e) {
			return fg.pluginMethodMap.has(e)
		}
		var Ut = e => t => {
				if (!AD.IS_BROWSER_ENV) return () => null;
				let r = fg.pluginMethodMap.get(t);
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n
			},
			RD = Ut("getPluginConfig");
		Ce.getPluginConfig = RD;
		var CD = Ut("getPluginOrigin");
		Ce.getPluginOrigin = CD;
		var xD = Ut("getPluginDuration");
		Ce.getPluginDuration = xD;
		var ND = Ut("getPluginDestination");
		Ce.getPluginDestination = ND;
		var qD = Ut("createPluginInstance");
		Ce.createPluginInstance = qD;
		var LD = Ut("renderPlugin");
		Ce.renderPlugin = LD;
		var PD = Ut("clearPlugin");
		Ce.clearPlugin = PD
	});
	var pg = u((a5, dg) => {
		function DD(e, t) {
			return e == null || e !== e ? t : e
		}
		dg.exports = DD
	});
	var hg = u((s5, vg) => {
		function MD(e, t, r, n) {
			var o = -1,
				i = e == null ? 0 : e.length;
			for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
			return r
		}
		vg.exports = MD
	});
	var Eg = u((u5, gg) => {
		function FD(e) {
			return function(t, r, n) {
				for (var o = -1, i = Object(t), a = n(t), s = a.length; s--;) {
					var c = a[e ? s : ++o];
					if (r(i[c], c, i) === !1) break
				}
				return t
			}
		}
		gg.exports = FD
	});
	var yg = u((c5, _g) => {
		var GD = Eg(),
			XD = GD();
		_g.exports = XD
	});
	var Ua = u((l5, mg) => {
		var UD = yg(),
			VD = Br();

		function WD(e, t) {
			return e && UD(e, t, VD)
		}
		mg.exports = WD
	});
	var Tg = u((f5, Ig) => {
		var BD = Gt();

		function HD(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!BD(r)) return e(r, n);
				for (var o = r.length, i = t ? o : -1, a = Object(r);
					(t ? i-- : ++i < o) && n(a[i], i, a) !== !1;);
				return r
			}
		}
		Ig.exports = HD
	});
	var Va = u((d5, Og) => {
		var jD = Ua(),
			kD = Tg(),
			KD = kD(jD);
		Og.exports = KD
	});
	var Sg = u((p5, bg) => {
		function zD(e, t, r, n, o) {
			return o(e, function(i, a, s) {
				r = n ? (n = !1, i) : t(r, i, a, s)
			}), r
		}
		bg.exports = zD
	});
	var wg = u((v5, Ag) => {
		var YD = hg(),
			QD = Va(),
			$D = wt(),
			ZD = Sg(),
			JD = Ne();

		function eM(e, t, r) {
			var n = JD(e) ? YD : ZD,
				o = arguments.length < 3;
			return n(e, $D(t, 4), r, o, QD)
		}
		Ag.exports = eM
	});
	var Cg = u((h5, Rg) => {
		var tM = Na(),
			rM = wt(),
			nM = qa(),
			iM = Math.max,
			oM = Math.min;

		function aM(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var o = n - 1;
			return r !== void 0 && (o = nM(r), o = r < 0 ? iM(n + o, 0) : oM(o, n - 1)), tM(e, rM(t, 3), o, !0)
		}
		Rg.exports = aM
	});
	var Ng = u((g5, xg) => {
		var sM = xa(),
			uM = Cg(),
			cM = sM(uM);
		xg.exports = cM
	});
	var Lg = u(ui => {
		"use strict";
		Object.defineProperty(ui, "__esModule", {
			value: !0
		});
		ui.default = void 0;
		var lM = Object.prototype.hasOwnProperty;

		function qg(e, t) {
			return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
		}

		function fM(e, t) {
			if (qg(e, t)) return !0;
			if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
			let r = Object.keys(e),
				n = Object.keys(t);
			if (r.length !== n.length) return !1;
			for (let o = 0; o < r.length; o++)
				if (!lM.call(t, r[o]) || !qg(e[r[o]], t[r[o]])) return !1;
			return !0
		}
		var dM = fM;
		ui.default = dM
	});
	var Zg = u(Ee => {
		"use strict";
		var di = et().default;
		Object.defineProperty(Ee, "__esModule", {
			value: !0
		});
		Ee.cleanupHTMLElement = l1;
		Ee.clearAllStyles = c1;
		Ee.clearObjectCache = xM;
		Ee.getActionListProgress = d1;
		Ee.getAffectedElements = za;
		Ee.getComputedStyle = GM;
		Ee.getDestinationValues = jM;
		Ee.getElementId = PM;
		Ee.getInstanceId = qM;
		Ee.getInstanceOrigin = VM;
		Ee.getItemConfigByKey = void 0;
		Ee.getMaxDurationItemIndex = $g;
		Ee.getNamespacedParameterId = h1;
		Ee.getRenderType = zg;
		Ee.getStyleProp = kM;
		Ee.mediaQueriesEqual = E1;
		Ee.observeStore = FM;
		Ee.reduceListToGroup = p1;
		Ee.reifyState = DM;
		Ee.renderHTMLElement = KM;
		Object.defineProperty(Ee, "shallowEqual", {
			enumerable: !0,
			get: function() {
				return Vg.default
			}
		});
		Ee.shouldAllowMediaQuery = g1;
		Ee.shouldNamespaceEventParameter = v1;
		Ee.stringifyTarget = _1;
		var Rt = di(pg()),
			Ha = di(wg()),
			Ba = di(Ng()),
			Pg = rr(),
			Vt = Be(),
			Vg = di(Lg()),
			pM = Fa(),
			ht = Xa(),
			Xe = ri(),
			{
				BACKGROUND: vM,
				TRANSFORM: hM,
				TRANSLATE_3D: gM,
				SCALE_3D: EM,
				ROTATE_X: _M,
				ROTATE_Y: yM,
				ROTATE_Z: mM,
				SKEW: IM,
				PRESERVE_3D: TM,
				FLEX: OM,
				OPACITY: li,
				FILTER: zr,
				FONT_VARIATION_SETTINGS: Yr,
				WIDTH: pt,
				HEIGHT: vt,
				BACKGROUND_COLOR: Wg,
				BORDER_COLOR: bM,
				COLOR: SM,
				CHILDREN: Dg,
				IMMEDIATE_CHILDREN: AM,
				SIBLINGS: Mg,
				PARENT: wM,
				DISPLAY: fi,
				WILL_CHANGE: dr,
				AUTO: Ct,
				COMMA_DELIMITER: Qr,
				COLON_DELIMITER: RM,
				BAR_DELIMITER: Wa,
				RENDER_TRANSFORM: Bg,
				RENDER_GENERAL: ja,
				RENDER_STYLE: ka,
				RENDER_PLUGIN: Hg
			} = Vt.IX2EngineConstants,
			{
				TRANSFORM_MOVE: pr,
				TRANSFORM_SCALE: vr,
				TRANSFORM_ROTATE: hr,
				TRANSFORM_SKEW: $r,
				STYLE_OPACITY: jg,
				STYLE_FILTER: Zr,
				STYLE_FONT_VARIATION: Jr,
				STYLE_SIZE: gr,
				STYLE_BACKGROUND_COLOR: Er,
				STYLE_BORDER: _r,
				STYLE_TEXT_COLOR: yr,
				GENERAL_DISPLAY: pi,
				OBJECT_VALUE: CM
			} = Vt.ActionTypeConsts,
			kg = e => e.trim(),
			Ka = Object.freeze({
				[Er]: Wg,
				[_r]: bM,
				[yr]: SM
			}),
			Kg = Object.freeze({
				[Xe.TRANSFORM_PREFIXED]: hM,
				[Wg]: vM,
				[li]: li,
				[zr]: zr,
				[pt]: pt,
				[vt]: vt,
				[Yr]: Yr
			}),
			ci = new Map;

		function xM() {
			ci.clear()
		}
		var NM = 1;

		function qM() {
			return "i" + NM++
		}
		var LM = 1;

		function PM(e, t) {
			for (let r in e) {
				let n = e[r];
				if (n && n.ref === t) return n.id
			}
			return "e" + LM++
		}

		function DM({
			events: e,
			actionLists: t,
			site: r
		} = {}) {
			let n = (0, Ha.default)(e, (a, s) => {
					let {
						eventTypeId: c
					} = s;
					return a[c] || (a[c] = {}), a[c][s.id] = s, a
				}, {}),
				o = r && r.mediaQueries,
				i = [];
			return o ? i = o.map(a => a.key) : (o = [], console.warn("IX2 missing mediaQueries in site data")), {
				ixData: {
					events: e,
					actionLists: t,
					eventTypeMap: n,
					mediaQueries: o,
					mediaQueryKeys: i
				}
			}
		}
		var MM = (e, t) => e === t;

		function FM({
			store: e,
			select: t,
			onChange: r,
			comparator: n = MM
		}) {
			let {
				getState: o,
				subscribe: i
			} = e, a = i(c), s = t(o());

			function c() {
				let d = t(o());
				if (d == null) {
					a();
					return
				}
				n(d, s) || (s = d, r(s, e))
			}
			return a
		}

		function Fg(e) {
			let t = typeof e;
			if (t === "string") return {
				id: e
			};
			if (e != null && t === "object") {
				let {
					id: r,
					objectId: n,
					selector: o,
					selectorGuids: i,
					appliesTo: a,
					useEventTarget: s
				} = e;
				return {
					id: r,
					objectId: n,
					selector: o,
					selectorGuids: i,
					appliesTo: a,
					useEventTarget: s
				}
			}
			return {}
		}

		function za({
			config: e,
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: o
		}) {
			var i, a, s;
			if (!o) throw new Error("IX2 missing elementApi");
			let {
				targets: c
			} = e;
			if (Array.isArray(c) && c.length > 0) return c.reduce((F, G) => F.concat(za({
				config: {
					target: G
				},
				event: t,
				eventTarget: r,
				elementRoot: n,
				elementApi: o
			})), []);
			let {
				getValidDocument: d,
				getQuerySelector: E,
				queryDocument: f,
				getChildElements: _,
				getSiblingElements: p,
				matchSelector: g,
				elementContains: O,
				isSiblingNode: R
			} = o, {
				target: A
			} = e;
			if (!A) return [];
			let {
				id: x,
				objectId: S,
				selector: L,
				selectorGuids: q,
				appliesTo: P,
				useEventTarget: V
			} = Fg(A);
			if (S) return [ci.has(S) ? ci.get(S) : ci.set(S, {}).get(S)];
			if (P === Vt.EventAppliesTo.PAGE) {
				let F = d(x);
				return F ? [F] : []
			}
			let Q = ((i = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && i !== void 0 ? i : {})[x || L] || {},
				oe = !!(Q.id || Q.selector),
				re, X, I, D = t && E(Fg(t.target));
			if (oe ? (re = Q.limitAffectedElements, X = D, I = E(Q)) : X = I = E({
					id: x,
					selector: L,
					selectorGuids: q
				}), t && V) {
				let F = r && (I || V === !0) ? [r] : f(D);
				if (I) {
					if (V === wM) return f(I).filter(G => F.some($ => O(G, $)));
					if (V === Dg) return f(I).filter(G => F.some($ => O($, G)));
					if (V === Mg) return f(I).filter(G => F.some($ => R($, G)))
				}
				return F
			}
			return X == null || I == null ? [] : Xe.IS_BROWSER_ENV && n ? f(I).filter(F => n.contains(F)) : re === Dg ? f(X, I) : re === AM ? _(f(X)).filter(g(I)) : re === Mg ? p(f(X)).filter(g(I)) : f(I)
		}

		function GM({
			element: e,
			actionItem: t
		}) {
			if (!Xe.IS_BROWSER_ENV) return {};
			let {
				actionTypeId: r
			} = t;
			switch (r) {
				case gr:
				case Er:
				case _r:
				case yr:
				case pi:
					return window.getComputedStyle(e);
				default:
					return {}
			}
		}
		var Gg = /px/,
			XM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = zM[n.type]), r), e || {}),
			UM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = YM[n.type] || n.defaultValue || 0), r), e || {});

		function VM(e, t = {}, r = {}, n, o) {
			let {
				getStyle: i
			} = o, {
				actionTypeId: a
			} = n;
			if ((0, ht.isPluginType)(a)) return (0, ht.getPluginOrigin)(a)(t[a], n);
			switch (n.actionTypeId) {
				case pr:
				case vr:
				case hr:
				case $r:
					return t[n.actionTypeId] || Ya[n.actionTypeId];
				case Zr:
					return XM(t[n.actionTypeId], n.config.filters);
				case Jr:
					return UM(t[n.actionTypeId], n.config.fontVariations);
				case jg:
					return {
						value: (0, Rt.default)(parseFloat(i(e, li)), 1)
					};
				case gr: {
					let s = i(e, pt),
						c = i(e, vt),
						d, E;
					return n.config.widthUnit === Ct ? d = Gg.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0, Rt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === Ct ? E = Gg.test(c) ? parseFloat(c) : parseFloat(r.height) : E = (0, Rt.default)(parseFloat(c), parseFloat(r.height)), {
						widthValue: d,
						heightValue: E
					}
				}
				case Er:
				case _r:
				case yr:
					return a1({
						element: e,
						actionTypeId: n.actionTypeId,
						computedStyle: r,
						getStyle: i
					});
				case pi:
					return {
						value: (0, Rt.default)(i(e, fi), r.display)
					};
				case CM:
					return t[n.actionTypeId] || {
						value: 0
					};
				default:
					return
			}
		}
		var WM = (e, t) => (t && (e[t.type] = t.value || 0), e),
			BM = (e, t) => (t && (e[t.type] = t.value || 0), e),
			HM = (e, t, r) => {
				if ((0, ht.isPluginType)(e)) return (0, ht.getPluginConfig)(e)(r, t);
				switch (e) {
					case Zr: {
						let n = (0, Ba.default)(r.filters, ({
							type: o
						}) => o === t);
						return n ? n.value : 0
					}
					case Jr: {
						let n = (0, Ba.default)(r.fontVariations, ({
							type: o
						}) => o === t);
						return n ? n.value : 0
					}
					default:
						return r[t]
				}
			};
		Ee.getItemConfigByKey = HM;

		function jM({
			element: e,
			actionItem: t,
			elementApi: r
		}) {
			if ((0, ht.isPluginType)(t.actionTypeId)) return (0, ht.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case pr:
				case vr:
				case hr:
				case $r: {
					let {
						xValue: n,
						yValue: o,
						zValue: i
					} = t.config;
					return {
						xValue: n,
						yValue: o,
						zValue: i
					}
				}
				case gr: {
					let {
						getStyle: n,
						setStyle: o,
						getProperty: i
					} = r, {
						widthUnit: a,
						heightUnit: s
					} = t.config, {
						widthValue: c,
						heightValue: d
					} = t.config;
					if (!Xe.IS_BROWSER_ENV) return {
						widthValue: c,
						heightValue: d
					};
					if (a === Ct) {
						let E = n(e, pt);
						o(e, pt, ""), c = i(e, "offsetWidth"), o(e, pt, E)
					}
					if (s === Ct) {
						let E = n(e, vt);
						o(e, vt, ""), d = i(e, "offsetHeight"), o(e, vt, E)
					}
					return {
						widthValue: c,
						heightValue: d
					}
				}
				case Er:
				case _r:
				case yr: {
					let {
						rValue: n,
						gValue: o,
						bValue: i,
						aValue: a
					} = t.config;
					return {
						rValue: n,
						gValue: o,
						bValue: i,
						aValue: a
					}
				}
				case Zr:
					return t.config.filters.reduce(WM, {});
				case Jr:
					return t.config.fontVariations.reduce(BM, {});
				default: {
					let {
						value: n
					} = t.config;
					return {
						value: n
					}
				}
			}
		}

		function zg(e) {
			if (/^TRANSFORM_/.test(e)) return Bg;
			if (/^STYLE_/.test(e)) return ka;
			if (/^GENERAL_/.test(e)) return ja;
			if (/^PLUGIN_/.test(e)) return Hg
		}

		function kM(e, t) {
			return e === ka ? t.replace("STYLE_", "").toLowerCase() : null
		}

		function KM(e, t, r, n, o, i, a, s, c) {
			switch (s) {
				case Bg:
					return ZM(e, t, r, o, a);
				case ka:
					return s1(e, t, r, o, i, a);
				case ja:
					return u1(e, o, a);
				case Hg: {
					let {
						actionTypeId: d
					} = o;
					if ((0, ht.isPluginType)(d)) return (0, ht.renderPlugin)(d)(c, t, o)
				}
			}
		}
		var Ya = {
				[pr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[vr]: Object.freeze({
					xValue: 1,
					yValue: 1,
					zValue: 1
				}),
				[hr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[$r]: Object.freeze({
					xValue: 0,
					yValue: 0
				})
			},
			zM = Object.freeze({
				blur: 0,
				"hue-rotate": 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100
			}),
			YM = Object.freeze({
				wght: 0,
				opsz: 0,
				wdth: 0,
				slnt: 0
			}),
			QM = (e, t) => {
				let r = (0, Ba.default)(t.filters, ({
					type: n
				}) => n === e);
				if (r && r.unit) return r.unit;
				switch (e) {
					case "blur":
						return "px";
					case "hue-rotate":
						return "deg";
					default:
						return "%"
				}
			},
			$M = Object.keys(Ya);

		function ZM(e, t, r, n, o) {
			let i = $M.map(s => {
					let c = Ya[s],
						{
							xValue: d = c.xValue,
							yValue: E = c.yValue,
							zValue: f = c.zValue,
							xUnit: _ = "",
							yUnit: p = "",
							zUnit: g = ""
						} = t[s] || {};
					switch (s) {
						case pr:
							return `${gM}(${d}${_}, ${E}${p}, ${f}${g})`;
						case vr:
							return `${EM}(${d}${_}, ${E}${p}, ${f}${g})`;
						case hr:
							return `${_M}(${d}${_}) ${yM}(${E}${p}) ${mM}(${f}${g})`;
						case $r:
							return `${IM}(${d}${_}, ${E}${p})`;
						default:
							return ""
					}
				}).join(" "),
				{
					setStyle: a
				} = o;
			Wt(e, Xe.TRANSFORM_PREFIXED, o), a(e, Xe.TRANSFORM_PREFIXED, i), t1(n, r) && a(e, Xe.TRANSFORM_STYLE_PREFIXED, TM)
		}

		function JM(e, t, r, n) {
			let o = (0, Ha.default)(t, (a, s, c) => `${a} ${c}(${s}${QM(c,r)})`, ""),
				{
					setStyle: i
				} = n;
			Wt(e, zr, n), i(e, zr, o)
		}

		function e1(e, t, r, n) {
			let o = (0, Ha.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
				{
					setStyle: i
				} = n;
			Wt(e, Yr, n), i(e, Yr, o)
		}

		function t1({
			actionTypeId: e
		}, {
			xValue: t,
			yValue: r,
			zValue: n
		}) {
			return e === pr && n !== void 0 || e === vr && n !== void 0 || e === hr && (t !== void 0 || r !== void 0)
		}
		var r1 = "\\(([^)]+)\\)",
			n1 = /^rgb/,
			i1 = RegExp(`rgba?${r1}`);

		function o1(e, t) {
			let r = e.exec(t);
			return r ? r[1] : ""
		}

		function a1({
			element: e,
			actionTypeId: t,
			computedStyle: r,
			getStyle: n
		}) {
			let o = Ka[t],
				i = n(e, o),
				a = n1.test(i) ? i : r[o],
				s = o1(i1, a).split(Qr);
			return {
				rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
				gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
				bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
				aValue: (0, Rt.default)(parseFloat(s[3]), 1)
			}
		}

		function s1(e, t, r, n, o, i) {
			let {
				setStyle: a
			} = i;
			switch (n.actionTypeId) {
				case gr: {
					let {
						widthUnit: s = "",
						heightUnit: c = ""
					} = n.config, {
						widthValue: d,
						heightValue: E
					} = r;
					d !== void 0 && (s === Ct && (s = "px"), Wt(e, pt, i), a(e, pt, d + s)), E !== void 0 && (c === Ct && (c = "px"), Wt(e, vt, i), a(e, vt, E + c));
					break
				}
				case Zr: {
					JM(e, r, n.config, i);
					break
				}
				case Jr: {
					e1(e, r, n.config, i);
					break
				}
				case Er:
				case _r:
				case yr: {
					let s = Ka[n.actionTypeId],
						c = Math.round(r.rValue),
						d = Math.round(r.gValue),
						E = Math.round(r.bValue),
						f = r.aValue;
					Wt(e, s, i), a(e, s, f >= 1 ? `rgb(${c},${d},${E})` : `rgba(${c},${d},${E},${f})`);
					break
				}
				default: {
					let {
						unit: s = ""
					} = n.config;
					Wt(e, o, i), a(e, o, r.value + s);
					break
				}
			}
		}

		function u1(e, t, r) {
			let {
				setStyle: n
			} = r;
			switch (t.actionTypeId) {
				case pi: {
					let {
						value: o
					} = t.config;
					o === OM && Xe.IS_BROWSER_ENV ? n(e, fi, Xe.FLEX_PREFIXED) : n(e, fi, o);
					return
				}
			}
		}

		function Wt(e, t, r) {
			if (!Xe.IS_BROWSER_ENV) return;
			let n = Kg[t];
			if (!n) return;
			let {
				getStyle: o,
				setStyle: i
			} = r, a = o(e, dr);
			if (!a) {
				i(e, dr, n);
				return
			}
			let s = a.split(Qr).map(kg);
			s.indexOf(n) === -1 && i(e, dr, s.concat(n).join(Qr))
		}

		function Yg(e, t, r) {
			if (!Xe.IS_BROWSER_ENV) return;
			let n = Kg[t];
			if (!n) return;
			let {
				getStyle: o,
				setStyle: i
			} = r, a = o(e, dr);
			!a || a.indexOf(n) === -1 || i(e, dr, a.split(Qr).map(kg).filter(s => s !== n).join(Qr))
		}

		function c1({
			store: e,
			elementApi: t
		}) {
			let {
				ixData: r
			} = e.getState(), {
				events: n = {},
				actionLists: o = {}
			} = r;
			Object.keys(n).forEach(i => {
				let a = n[i],
					{
						config: s
					} = a.action,
					{
						actionListId: c
					} = s,
					d = o[c];
				d && Xg({
					actionList: d,
					event: a,
					elementApi: t
				})
			}), Object.keys(o).forEach(i => {
				Xg({
					actionList: o[i],
					elementApi: t
				})
			})
		}

		function Xg({
			actionList: e = {},
			event: t,
			elementApi: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: o
			} = e;
			n && n.forEach(i => {
				Ug({
					actionGroup: i,
					event: t,
					elementApi: r
				})
			}), o && o.forEach(i => {
				let {
					continuousActionGroups: a
				} = i;
				a.forEach(s => {
					Ug({
						actionGroup: s,
						event: t,
						elementApi: r
					})
				})
			})
		}

		function Ug({
			actionGroup: e,
			event: t,
			elementApi: r
		}) {
			let {
				actionItems: n
			} = e;
			n.forEach(({
				actionTypeId: o,
				config: i
			}) => {
				let a;
				(0, ht.isPluginType)(o) ? a = (0, ht.clearPlugin)(o): a = Qg({
					effect: f1,
					actionTypeId: o,
					elementApi: r
				}), za({
					config: i,
					event: t,
					elementApi: r
				}).forEach(a)
			})
		}

		function l1(e, t, r) {
			let {
				setStyle: n,
				getStyle: o
			} = r, {
				actionTypeId: i
			} = t;
			if (i === gr) {
				let {
					config: a
				} = t;
				a.widthUnit === Ct && n(e, pt, ""), a.heightUnit === Ct && n(e, vt, "")
			}
			o(e, dr) && Qg({
				effect: Yg,
				actionTypeId: i,
				elementApi: r
			})(e)
		}
		var Qg = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case pr:
				case vr:
				case hr:
				case $r:
					e(n, Xe.TRANSFORM_PREFIXED, r);
					break;
				case Zr:
					e(n, zr, r);
					break;
				case Jr:
					e(n, Yr, r);
					break;
				case jg:
					e(n, li, r);
					break;
				case gr:
					e(n, pt, r), e(n, vt, r);
					break;
				case Er:
				case _r:
				case yr:
					e(n, Ka[t], r);
					break;
				case pi:
					e(n, fi, r);
					break
			}
		};

		function f1(e, t, r) {
			let {
				setStyle: n
			} = r;
			Yg(e, t, r), n(e, t, ""), t === Xe.TRANSFORM_PREFIXED && n(e, Xe.TRANSFORM_STYLE_PREFIXED, "")
		}

		function $g(e) {
			let t = 0,
				r = 0;
			return e.forEach((n, o) => {
				let {
					config: i
				} = n, a = i.delay + i.duration;
				a >= t && (t = a, r = o)
			}), r
		}

		function d1(e, t) {
			let {
				actionItemGroups: r,
				useFirstGroupAsInitialState: n
			} = e, {
				actionItem: o,
				verboseTimeElapsed: i = 0
			} = t, a = 0, s = 0;
			return r.forEach((c, d) => {
				if (n && d === 0) return;
				let {
					actionItems: E
				} = c, f = E[$g(E)], {
					config: _,
					actionTypeId: p
				} = f;
				o.id === f.id && (s = a + i);
				let g = zg(p) === ja ? 0 : _.duration;
				a += _.delay + g
			}), a > 0 ? (0, pM.optimizeFloat)(s / a) : 0
		}

		function p1({
			actionList: e,
			actionItemId: t,
			rawData: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: o
			} = e, i = [], a = s => (i.push((0, Pg.mergeIn)(s, ["config"], {
				delay: 0,
				duration: 0
			})), s.id === t);
			return n && n.some(({
				actionItems: s
			}) => s.some(a)), o && o.some(s => {
				let {
					continuousActionGroups: c
				} = s;
				return c.some(({
					actionItems: d
				}) => d.some(a))
			}), (0, Pg.setIn)(r, ["actionLists"], {
				[e.id]: {
					id: e.id,
					actionItemGroups: [{
						actionItems: i
					}]
				}
			})
		}

		function v1(e, {
			basedOn: t
		}) {
			return e === Vt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Vt.EventBasedOn.ELEMENT || t == null) || e === Vt.EventTypeConsts.MOUSE_MOVE && t === Vt.EventBasedOn.ELEMENT
		}

		function h1(e, t) {
			return e + RM + t
		}

		function g1(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1
		}

		function E1(e, t) {
			return (0, Vg.default)(e && e.sort(), t && t.sort())
		}

		function _1(e) {
			if (typeof e == "string") return e;
			if (e.pluginElement && e.objectId) return e.pluginElement + Wa + e.objectId;
			let {
				id: t = "",
				selector: r = "",
				useEventTarget: n = ""
			} = e;
			return t + Wa + r + Wa + n
		}
	});
	var Bt = u(Ue => {
		"use strict";
		var mr = Pt().default;
		Object.defineProperty(Ue, "__esModule", {
			value: !0
		});
		Ue.IX2VanillaUtils = Ue.IX2VanillaPlugins = Ue.IX2ElementsReducer = Ue.IX2Easings = Ue.IX2EasingUtils = Ue.IX2BrowserSupport = void 0;
		var y1 = mr(ri());
		Ue.IX2BrowserSupport = y1;
		var m1 = mr(Da());
		Ue.IX2Easings = m1;
		var I1 = mr(Fa());
		Ue.IX2EasingUtils = I1;
		var T1 = mr(ng());
		Ue.IX2ElementsReducer = T1;
		var O1 = mr(Xa());
		Ue.IX2VanillaPlugins = O1;
		var b1 = mr(Zg());
		Ue.IX2VanillaUtils = b1
	});
	var rE = u(hi => {
		"use strict";
		Object.defineProperty(hi, "__esModule", {
			value: !0
		});
		hi.ixInstances = void 0;
		var Jg = Be(),
			eE = Bt(),
			Ir = rr(),
			{
				IX2_RAW_DATA_IMPORTED: S1,
				IX2_SESSION_STOPPED: A1,
				IX2_INSTANCE_ADDED: w1,
				IX2_INSTANCE_STARTED: R1,
				IX2_INSTANCE_REMOVED: C1,
				IX2_ANIMATION_FRAME_CHANGED: x1
			} = Jg.IX2EngineActionTypes,
			{
				optimizeFloat: vi,
				applyEasing: tE,
				createBezierEasing: N1
			} = eE.IX2EasingUtils,
			{
				RENDER_GENERAL: q1
			} = Jg.IX2EngineConstants,
			{
				getItemConfigByKey: Qa,
				getRenderType: L1,
				getStyleProp: P1
			} = eE.IX2VanillaUtils,
			D1 = (e, t) => {
				let {
					position: r,
					parameterId: n,
					actionGroups: o,
					destinationKeys: i,
					smoothing: a,
					restingValue: s,
					actionTypeId: c,
					customEasingFn: d,
					skipMotion: E,
					skipToValue: f
				} = e, {
					parameters: _
				} = t.payload, p = Math.max(1 - a, .01), g = _[n];
				g == null && (p = 1, g = s);
				let O = Math.max(g, 0) || 0,
					R = vi(O - r),
					A = E ? f : vi(r + R * p),
					x = A * 100;
				if (A === r && e.current) return e;
				let S, L, q, P;
				for (let k = 0, {
						length: Q
					} = o; k < Q; k++) {
					let {
						keyframe: oe,
						actionItems: re
					} = o[k];
					if (k === 0 && (S = re[0]), x >= oe) {
						S = re[0];
						let X = o[k + 1],
							I = X && x !== oe;
						L = I ? X.actionItems[0] : null, I && (q = oe / 100, P = (X.keyframe - oe) / 100)
					}
				}
				let V = {};
				if (S && !L)
					for (let k = 0, {
							length: Q
						} = i; k < Q; k++) {
						let oe = i[k];
						V[oe] = Qa(c, oe, S.config)
					} else if (S && L && q !== void 0 && P !== void 0) {
						let k = (A - q) / P,
							Q = S.config.easing,
							oe = tE(Q, k, d);
						for (let re = 0, {
								length: X
							} = i; re < X; re++) {
							let I = i[re],
								D = Qa(c, I, S.config),
								$ = (Qa(c, I, L.config) - D) * oe + D;
							V[I] = $
						}
					} return (0, Ir.merge)(e, {
					position: A,
					current: V
				})
			},
			M1 = (e, t) => {
				let {
					active: r,
					origin: n,
					start: o,
					immediate: i,
					renderType: a,
					verbose: s,
					actionItem: c,
					destination: d,
					destinationKeys: E,
					pluginDuration: f,
					instanceDelay: _,
					customEasingFn: p,
					skipMotion: g
				} = e, O = c.config.easing, {
					duration: R,
					delay: A
				} = c.config;
				f != null && (R = f), A = _ ?? A, a === q1 ? R = 0 : (i || g) && (R = A = 0);
				let {
					now: x
				} = t.payload;
				if (r && n) {
					let S = x - (o + A);
					if (s) {
						let k = x - o,
							Q = R + A,
							oe = vi(Math.min(Math.max(0, k / Q), 1));
						e = (0, Ir.set)(e, "verboseTimeElapsed", Q * oe)
					}
					if (S < 0) return e;
					let L = vi(Math.min(Math.max(0, S / R), 1)),
						q = tE(O, L, p),
						P = {},
						V = null;
					return E.length && (V = E.reduce((k, Q) => {
						let oe = d[Q],
							re = parseFloat(n[Q]) || 0,
							I = (parseFloat(oe) - re) * q + re;
						return k[Q] = I, k
					}, {})), P.current = V, P.position = L, L === 1 && (P.active = !1, P.complete = !0), (0, Ir.merge)(e, P)
				}
				return e
			},
			F1 = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case S1:
						return t.payload.ixInstances || Object.freeze({});
					case A1:
						return Object.freeze({});
					case w1: {
						let {
							instanceId: r,
							elementId: n,
							actionItem: o,
							eventId: i,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: d,
							isCarrier: E,
							origin: f,
							destination: _,
							immediate: p,
							verbose: g,
							continuous: O,
							parameterId: R,
							actionGroups: A,
							smoothing: x,
							restingValue: S,
							pluginInstance: L,
							pluginDuration: q,
							instanceDelay: P,
							skipMotion: V,
							skipToValue: k
						} = t.payload, {
							actionTypeId: Q
						} = o, oe = L1(Q), re = P1(oe, Q), X = Object.keys(_).filter(D => _[D] != null), {
							easing: I
						} = o.config;
						return (0, Ir.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: f,
							destination: _,
							destinationKeys: X,
							immediate: p,
							verbose: g,
							current: null,
							actionItem: o,
							actionTypeId: Q,
							eventId: i,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: d,
							renderType: oe,
							isCarrier: E,
							styleProp: re,
							continuous: O,
							parameterId: R,
							actionGroups: A,
							smoothing: x,
							restingValue: S,
							pluginInstance: L,
							pluginDuration: q,
							instanceDelay: P,
							skipMotion: V,
							skipToValue: k,
							customEasingFn: Array.isArray(I) && I.length === 4 ? N1(I) : void 0
						})
					}
					case R1: {
						let {
							instanceId: r,
							time: n
						} = t.payload;
						return (0, Ir.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n
						})
					}
					case C1: {
						let {
							instanceId: r
						} = t.payload;
						if (!e[r]) return e;
						let n = {},
							o = Object.keys(e),
							{
								length: i
							} = o;
						for (let a = 0; a < i; a++) {
							let s = o[a];
							s !== r && (n[s] = e[s])
						}
						return n
					}
					case x1: {
						let r = e,
							n = Object.keys(e),
							{
								length: o
							} = n;
						for (let i = 0; i < o; i++) {
							let a = n[i],
								s = e[a],
								c = s.continuous ? D1 : M1;
							r = (0, Ir.set)(r, a, c(s, t))
						}
						return r
					}
					default:
						return e
				}
			};
		hi.ixInstances = F1
	});
	var nE = u(gi => {
		"use strict";
		Object.defineProperty(gi, "__esModule", {
			value: !0
		});
		gi.ixParameters = void 0;
		var G1 = Be(),
			{
				IX2_RAW_DATA_IMPORTED: X1,
				IX2_SESSION_STOPPED: U1,
				IX2_PARAMETER_CHANGED: V1
			} = G1.IX2EngineActionTypes,
			W1 = (e = {}, t) => {
				switch (t.type) {
					case X1:
						return t.payload.ixParameters || {};
					case U1:
						return {};
					case V1: {
						let {
							key: r,
							value: n
						} = t.payload;
						return e[r] = n, e
					}
					default:
						return e
				}
			};
		gi.ixParameters = W1
	});
	var iE = u(Ei => {
		"use strict";
		Object.defineProperty(Ei, "__esModule", {
			value: !0
		});
		Ei.default = void 0;
		var B1 = Zo(),
			H1 = If(),
			j1 = Uf(),
			k1 = Wf(),
			K1 = Bt(),
			z1 = rE(),
			Y1 = nE(),
			{
				ixElements: Q1
			} = K1.IX2ElementsReducer,
			$1 = (0, B1.combineReducers)({
				ixData: H1.ixData,
				ixRequest: j1.ixRequest,
				ixSession: k1.ixSession,
				ixElements: Q1,
				ixInstances: z1.ixInstances,
				ixParameters: Y1.ixParameters
			});
		Ei.default = $1
	});
	var oE = u((O5, en) => {
		function Z1(e, t) {
			if (e == null) return {};
			var r = {},
				n = Object.keys(e),
				o, i;
			for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
			return r
		}
		en.exports = Z1, en.exports.__esModule = !0, en.exports.default = en.exports
	});
	var sE = u((b5, aE) => {
		var J1 = St(),
			eF = Ne(),
			tF = _t(),
			rF = "[object String]";

		function nF(e) {
			return typeof e == "string" || !eF(e) && tF(e) && J1(e) == rF
		}
		aE.exports = nF
	});
	var cE = u((S5, uE) => {
		var iF = Ca(),
			oF = iF("length");
		uE.exports = oF
	});
	var fE = u((A5, lE) => {
		var aF = "\\ud800-\\udfff",
			sF = "\\u0300-\\u036f",
			uF = "\\ufe20-\\ufe2f",
			cF = "\\u20d0-\\u20ff",
			lF = sF + uF + cF,
			fF = "\\ufe0e\\ufe0f",
			dF = "\\u200d",
			pF = RegExp("[" + dF + aF + lF + fF + "]");

		function vF(e) {
			return pF.test(e)
		}
		lE.exports = vF
	});
	var mE = u((w5, yE) => {
		var pE = "\\ud800-\\udfff",
			hF = "\\u0300-\\u036f",
			gF = "\\ufe20-\\ufe2f",
			EF = "\\u20d0-\\u20ff",
			_F = hF + gF + EF,
			yF = "\\ufe0e\\ufe0f",
			mF = "[" + pE + "]",
			$a = "[" + _F + "]",
			Za = "\\ud83c[\\udffb-\\udfff]",
			IF = "(?:" + $a + "|" + Za + ")",
			vE = "[^" + pE + "]",
			hE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			gE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			TF = "\\u200d",
			EE = IF + "?",
			_E = "[" + yF + "]?",
			OF = "(?:" + TF + "(?:" + [vE, hE, gE].join("|") + ")" + _E + EE + ")*",
			bF = _E + EE + OF,
			SF = "(?:" + [vE + $a + "?", $a, hE, gE, mF].join("|") + ")",
			dE = RegExp(Za + "(?=" + Za + ")|" + SF + bF, "g");

		function AF(e) {
			for (var t = dE.lastIndex = 0; dE.test(e);) ++t;
			return t
		}
		yE.exports = AF
	});
	var TE = u((R5, IE) => {
		var wF = cE(),
			RF = fE(),
			CF = mE();

		function xF(e) {
			return RF(e) ? CF(e) : wF(e)
		}
		IE.exports = xF
	});
	var bE = u((C5, OE) => {
		var NF = Kn(),
			qF = zn(),
			LF = Gt(),
			PF = sE(),
			DF = TE(),
			MF = "[object Map]",
			FF = "[object Set]";

		function GF(e) {
			if (e == null) return 0;
			if (LF(e)) return PF(e) ? DF(e) : e.length;
			var t = qF(e);
			return t == MF || t == FF ? e.size : NF(e).length
		}
		OE.exports = GF
	});
	var AE = u((x5, SE) => {
		var XF = "Expected a function";

		function UF(e) {
			if (typeof e != "function") throw new TypeError(XF);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		SE.exports = UF
	});
	var Ja = u((N5, wE) => {
		var VF = At(),
			WF = function() {
				try {
					var e = VF(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		wE.exports = WF
	});
	var es = u((q5, CE) => {
		var RE = Ja();

		function BF(e, t, r) {
			t == "__proto__" && RE ? RE(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		CE.exports = BF
	});
	var NE = u((L5, xE) => {
		var HF = es(),
			jF = Fn(),
			kF = Object.prototype,
			KF = kF.hasOwnProperty;

		function zF(e, t, r) {
			var n = e[t];
			(!(KF.call(e, t) && jF(n, r)) || r === void 0 && !(t in e)) && HF(e, t, r)
		}
		xE.exports = zF
	});
	var PE = u((P5, LE) => {
		var YF = NE(),
			QF = jr(),
			$F = Bn(),
			qE = dt(),
			ZF = lr();

		function JF(e, t, r, n) {
			if (!qE(e)) return e;
			t = QF(t, e);
			for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i;) {
				var c = ZF(t[o]),
					d = r;
				if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
				if (o != a) {
					var E = s[c];
					d = n ? n(E, c, s) : void 0, d === void 0 && (d = qE(E) ? E : $F(t[o + 1]) ? [] : {})
				}
				YF(s, c, d), s = s[c]
			}
			return e
		}
		LE.exports = JF
	});
	var ME = u((D5, DE) => {
		var e2 = $n(),
			t2 = PE(),
			r2 = jr();

		function n2(e, t, r) {
			for (var n = -1, o = t.length, i = {}; ++n < o;) {
				var a = t[n],
					s = e2(e, a);
				r(s, a) && t2(i, r2(a, e), s)
			}
			return i
		}
		DE.exports = n2
	});
	var GE = u((M5, FE) => {
		var i2 = Vn(),
			o2 = Xo(),
			a2 = va(),
			s2 = pa(),
			u2 = Object.getOwnPropertySymbols,
			c2 = u2 ? function(e) {
				for (var t = []; e;) i2(t, a2(e)), e = o2(e);
				return t
			} : s2;
		FE.exports = c2
	});
	var UE = u((F5, XE) => {
		function l2(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		XE.exports = l2
	});
	var WE = u((G5, VE) => {
		var f2 = dt(),
			d2 = kn(),
			p2 = UE(),
			v2 = Object.prototype,
			h2 = v2.hasOwnProperty;

		function g2(e) {
			if (!f2(e)) return p2(e);
			var t = d2(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !h2.call(e, n)) || r.push(n);
			return r
		}
		VE.exports = g2
	});
	var HE = u((X5, BE) => {
		var E2 = ga(),
			_2 = WE(),
			y2 = Gt();

		function m2(e) {
			return y2(e) ? E2(e, !0) : _2(e)
		}
		BE.exports = m2
	});
	var kE = u((U5, jE) => {
		var I2 = da(),
			T2 = GE(),
			O2 = HE();

		function b2(e) {
			return I2(e, O2, T2)
		}
		jE.exports = b2
	});
	var zE = u((V5, KE) => {
		var S2 = Ra(),
			A2 = wt(),
			w2 = ME(),
			R2 = kE();

		function C2(e, t) {
			if (e == null) return {};
			var r = S2(R2(e), function(n) {
				return [n]
			});
			return t = A2(t), w2(e, r, function(n, o) {
				return t(n, o[0])
			})
		}
		KE.exports = C2
	});
	var QE = u((W5, YE) => {
		var x2 = wt(),
			N2 = AE(),
			q2 = zE();

		function L2(e, t) {
			return q2(e, N2(x2(t)))
		}
		YE.exports = L2
	});
	var ZE = u((B5, $E) => {
		var P2 = Kn(),
			D2 = zn(),
			M2 = Xr(),
			F2 = Ne(),
			G2 = Gt(),
			X2 = Wn(),
			U2 = kn(),
			V2 = jn(),
			W2 = "[object Map]",
			B2 = "[object Set]",
			H2 = Object.prototype,
			j2 = H2.hasOwnProperty;

		function k2(e) {
			if (e == null) return !0;
			if (G2(e) && (F2(e) || typeof e == "string" || typeof e.splice == "function" || X2(e) || V2(e) || M2(e))) return !e.length;
			var t = D2(e);
			if (t == W2 || t == B2) return !e.size;
			if (U2(e)) return !P2(e).length;
			for (var r in e)
				if (j2.call(e, r)) return !1;
			return !0
		}
		$E.exports = k2
	});
	var e_ = u((H5, JE) => {
		var K2 = es(),
			z2 = Ua(),
			Y2 = wt();

		function Q2(e, t) {
			var r = {};
			return t = Y2(t, 3), z2(e, function(n, o, i) {
				K2(r, o, t(n, o, i))
			}), r
		}
		JE.exports = Q2
	});
	var r_ = u((j5, t_) => {
		function $2(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		t_.exports = $2
	});
	var i_ = u((k5, n_) => {
		var Z2 = Jn();

		function J2(e) {
			return typeof e == "function" ? e : Z2
		}
		n_.exports = J2
	});
	var a_ = u((K5, o_) => {
		var eG = r_(),
			tG = Va(),
			rG = i_(),
			nG = Ne();

		function iG(e, t) {
			var r = nG(e) ? eG : tG;
			return r(e, rG(t))
		}
		o_.exports = iG
	});
	var u_ = u((z5, s_) => {
		var oG = nt(),
			aG = function() {
				return oG.Date.now()
			};
		s_.exports = aG
	});
	var f_ = u((Y5, l_) => {
		var sG = dt(),
			ts = u_(),
			c_ = ei(),
			uG = "Expected a function",
			cG = Math.max,
			lG = Math.min;

		function fG(e, t, r) {
			var n, o, i, a, s, c, d = 0,
				E = !1,
				f = !1,
				_ = !0;
			if (typeof e != "function") throw new TypeError(uG);
			t = c_(t) || 0, sG(r) && (E = !!r.leading, f = "maxWait" in r, i = f ? cG(c_(r.maxWait) || 0, t) : i, _ = "trailing" in r ? !!r.trailing : _);

			function p(P) {
				var V = n,
					k = o;
				return n = o = void 0, d = P, a = e.apply(k, V), a
			}

			function g(P) {
				return d = P, s = setTimeout(A, t), E ? p(P) : a
			}

			function O(P) {
				var V = P - c,
					k = P - d,
					Q = t - V;
				return f ? lG(Q, i - k) : Q
			}

			function R(P) {
				var V = P - c,
					k = P - d;
				return c === void 0 || V >= t || V < 0 || f && k >= i
			}

			function A() {
				var P = ts();
				if (R(P)) return x(P);
				s = setTimeout(A, O(P))
			}

			function x(P) {
				return s = void 0, _ && n ? p(P) : (n = o = void 0, a)
			}

			function S() {
				s !== void 0 && clearTimeout(s), d = 0, n = c = o = s = void 0
			}

			function L() {
				return s === void 0 ? a : x(ts())
			}

			function q() {
				var P = ts(),
					V = R(P);
				if (n = arguments, o = this, c = P, V) {
					if (s === void 0) return g(c);
					if (f) return clearTimeout(s), s = setTimeout(A, t), p(c)
				}
				return s === void 0 && (s = setTimeout(A, t)), a
			}
			return q.cancel = S, q.flush = L, q
		}
		l_.exports = fG
	});
	var p_ = u((Q5, d_) => {
		var dG = f_(),
			pG = dt(),
			vG = "Expected a function";

		function hG(e, t, r) {
			var n = !0,
				o = !0;
			if (typeof e != "function") throw new TypeError(vG);
			return pG(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), dG(e, t, {
				leading: n,
				maxWait: t,
				trailing: o
			})
		}
		d_.exports = hG
	});
	var _i = u(ce => {
		"use strict";
		var gG = et().default;
		Object.defineProperty(ce, "__esModule", {
			value: !0
		});
		ce.viewportWidthChanged = ce.testFrameRendered = ce.stopRequested = ce.sessionStopped = ce.sessionStarted = ce.sessionInitialized = ce.rawDataImported = ce.previewRequested = ce.playbackRequested = ce.parameterChanged = ce.mediaQueriesDefined = ce.instanceStarted = ce.instanceRemoved = ce.instanceAdded = ce.eventStateChanged = ce.eventListenerAdded = ce.elementStateChanged = ce.clearRequested = ce.animationFrameChanged = ce.actionListPlaybackChanged = void 0;
		var v_ = gG(tr()),
			h_ = Be(),
			EG = Bt(),
			{
				IX2_RAW_DATA_IMPORTED: _G,
				IX2_SESSION_INITIALIZED: yG,
				IX2_SESSION_STARTED: mG,
				IX2_SESSION_STOPPED: IG,
				IX2_PREVIEW_REQUESTED: TG,
				IX2_PLAYBACK_REQUESTED: OG,
				IX2_STOP_REQUESTED: bG,
				IX2_CLEAR_REQUESTED: SG,
				IX2_EVENT_LISTENER_ADDED: AG,
				IX2_TEST_FRAME_RENDERED: wG,
				IX2_EVENT_STATE_CHANGED: RG,
				IX2_ANIMATION_FRAME_CHANGED: CG,
				IX2_PARAMETER_CHANGED: xG,
				IX2_INSTANCE_ADDED: NG,
				IX2_INSTANCE_STARTED: qG,
				IX2_INSTANCE_REMOVED: LG,
				IX2_ELEMENT_STATE_CHANGED: PG,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: DG,
				IX2_VIEWPORT_WIDTH_CHANGED: MG,
				IX2_MEDIA_QUERIES_DEFINED: FG
			} = h_.IX2EngineActionTypes,
			{
				reifyState: GG
			} = EG.IX2VanillaUtils,
			XG = e => ({
				type: _G,
				payload: (0, v_.default)({}, GG(e))
			});
		ce.rawDataImported = XG;
		var UG = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: yG,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		});
		ce.sessionInitialized = UG;
		var VG = () => ({
			type: mG
		});
		ce.sessionStarted = VG;
		var WG = () => ({
			type: IG
		});
		ce.sessionStopped = WG;
		var BG = ({
			rawData: e,
			defer: t
		}) => ({
			type: TG,
			payload: {
				defer: t,
				rawData: e
			}
		});
		ce.previewRequested = BG;
		var HG = ({
			actionTypeId: e = h_.ActionTypeConsts.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: o,
			immediate: i,
			testManual: a,
			verbose: s,
			rawData: c
		}) => ({
			type: OG,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: o,
				immediate: i,
				verbose: s,
				rawData: c
			}
		});
		ce.playbackRequested = HG;
		var jG = e => ({
			type: bG,
			payload: {
				actionListId: e
			}
		});
		ce.stopRequested = jG;
		var kG = () => ({
			type: SG
		});
		ce.clearRequested = kG;
		var KG = (e, t) => ({
			type: AG,
			payload: {
				target: e,
				listenerParams: t
			}
		});
		ce.eventListenerAdded = KG;
		var zG = (e = 1) => ({
			type: wG,
			payload: {
				step: e
			}
		});
		ce.testFrameRendered = zG;
		var YG = (e, t) => ({
			type: RG,
			payload: {
				stateKey: e,
				newState: t
			}
		});
		ce.eventStateChanged = YG;
		var QG = (e, t) => ({
			type: CG,
			payload: {
				now: e,
				parameters: t
			}
		});
		ce.animationFrameChanged = QG;
		var $G = (e, t) => ({
			type: xG,
			payload: {
				key: e,
				value: t
			}
		});
		ce.parameterChanged = $G;
		var ZG = e => ({
			type: NG,
			payload: (0, v_.default)({}, e)
		});
		ce.instanceAdded = ZG;
		var JG = (e, t) => ({
			type: qG,
			payload: {
				instanceId: e,
				time: t
			}
		});
		ce.instanceStarted = JG;
		var eX = e => ({
			type: LG,
			payload: {
				instanceId: e
			}
		});
		ce.instanceRemoved = eX;
		var tX = (e, t, r, n) => ({
			type: PG,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		});
		ce.elementStateChanged = tX;
		var rX = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: DG,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		});
		ce.actionListPlaybackChanged = rX;
		var nX = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: MG,
			payload: {
				width: e,
				mediaQueries: t
			}
		});
		ce.viewportWidthChanged = nX;
		var iX = () => ({
			type: FG
		});
		ce.mediaQueriesDefined = iX
	});
	var __ = u(Pe => {
		"use strict";
		Object.defineProperty(Pe, "__esModule", {
			value: !0
		});
		Pe.elementContains = gX;
		Pe.getChildElements = _X;
		Pe.getClosestElement = void 0;
		Pe.getProperty = fX;
		Pe.getQuerySelector = pX;
		Pe.getRefType = IX;
		Pe.getSiblingElements = yX;
		Pe.getStyle = lX;
		Pe.getValidDocument = vX;
		Pe.isSiblingNode = EX;
		Pe.matchSelector = dX;
		Pe.queryDocument = hX;
		Pe.setStyle = cX;
		var oX = Bt(),
			aX = Be(),
			{
				ELEMENT_MATCHES: rs
			} = oX.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: g_,
				HTML_ELEMENT: sX,
				PLAIN_OBJECT: uX,
				WF_PAGE: E_
			} = aX.IX2EngineConstants;

		function cX(e, t, r) {
			e.style[t] = r
		}

		function lX(e, t) {
			return e.style[t]
		}

		function fX(e, t) {
			return e[t]
		}

		function dX(e) {
			return t => t[rs](e)
		}

		function pX({
			id: e,
			selector: t
		}) {
			if (e) {
				let r = e;
				if (e.indexOf(g_) !== -1) {
					let n = e.split(g_),
						o = n[0];
					if (r = n[1], o !== document.documentElement.getAttribute(E_)) return null
				}
				return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
			}
			return t
		}

		function vX(e) {
			return e == null || e === document.documentElement.getAttribute(E_) ? document : null
		}

		function hX(e, t) {
			return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
		}

		function gX(e, t) {
			return e.contains(t)
		}

		function EX(e, t) {
			return e !== t && e.parentNode === t.parentNode
		}

		function _X(e) {
			let t = [];
			for (let r = 0, {
					length: n
				} = e || []; r < n; r++) {
				let {
					children: o
				} = e[r], {
					length: i
				} = o;
				if (i)
					for (let a = 0; a < i; a++) t.push(o[a])
			}
			return t
		}

		function yX(e = []) {
			let t = [],
				r = [];
			for (let n = 0, {
					length: o
				} = e; n < o; n++) {
				let {
					parentNode: i
				} = e[n];
				if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1) continue;
				r.push(i);
				let a = i.firstElementChild;
				for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
			}
			return t
		}
		var mX = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[rs] && r[rs](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		};
		Pe.getClosestElement = mX;

		function IX(e) {
			return e != null && typeof e == "object" ? e instanceof Element ? sX : uX : null
		}
	});
	var ns = u((J5, m_) => {
		var TX = dt(),
			y_ = Object.create,
			OX = function() {
				function e() {}
				return function(t) {
					if (!TX(t)) return {};
					if (y_) return y_(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		m_.exports = OX
	});
	var yi = u((eK, I_) => {
		function bX() {}
		I_.exports = bX
	});
	var Ii = u((tK, T_) => {
		var SX = ns(),
			AX = yi();

		function mi(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		mi.prototype = SX(AX.prototype);
		mi.prototype.constructor = mi;
		T_.exports = mi
	});
	var A_ = u((rK, S_) => {
		var O_ = $t(),
			wX = Xr(),
			RX = Ne(),
			b_ = O_ ? O_.isConcatSpreadable : void 0;

		function CX(e) {
			return RX(e) || wX(e) || !!(b_ && e && e[b_])
		}
		S_.exports = CX
	});
	var C_ = u((nK, R_) => {
		var xX = Vn(),
			NX = A_();

		function w_(e, t, r, n, o) {
			var i = -1,
				a = e.length;
			for (r || (r = NX), o || (o = []); ++i < a;) {
				var s = e[i];
				t > 0 && r(s) ? t > 1 ? w_(s, t - 1, r, n, o) : xX(o, s) : n || (o[o.length] = s)
			}
			return o
		}
		R_.exports = w_
	});
	var N_ = u((iK, x_) => {
		var qX = C_();

		function LX(e) {
			var t = e == null ? 0 : e.length;
			return t ? qX(e, 1) : []
		}
		x_.exports = LX
	});
	var L_ = u((oK, q_) => {
		function PX(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		q_.exports = PX
	});
	var M_ = u((aK, D_) => {
		var DX = L_(),
			P_ = Math.max;

		function MX(e, t, r) {
			return t = P_(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, o = -1, i = P_(n.length - t, 0), a = Array(i); ++o < i;) a[o] = n[t + o];
					o = -1;
					for (var s = Array(t + 1); ++o < t;) s[o] = n[o];
					return s[t] = r(a), DX(e, this, s)
				}
		}
		D_.exports = MX
	});
	var G_ = u((sK, F_) => {
		function FX(e) {
			return function() {
				return e
			}
		}
		F_.exports = FX
	});
	var V_ = u((uK, U_) => {
		var GX = G_(),
			X_ = Ja(),
			XX = Jn(),
			UX = X_ ? function(e, t) {
				return X_(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: GX(t),
					writable: !0
				})
			} : XX;
		U_.exports = UX
	});
	var B_ = u((cK, W_) => {
		var VX = 800,
			WX = 16,
			BX = Date.now;

		function HX(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = BX(),
					o = WX - (n - r);
				if (r = n, o > 0) {
					if (++t >= VX) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		W_.exports = HX
	});
	var j_ = u((lK, H_) => {
		var jX = V_(),
			kX = B_(),
			KX = kX(jX);
		H_.exports = KX
	});
	var K_ = u((fK, k_) => {
		var zX = N_(),
			YX = M_(),
			QX = j_();

		function $X(e) {
			return QX(YX(e, void 0, zX), e + "")
		}
		k_.exports = $X
	});
	var Q_ = u((dK, Y_) => {
		var z_ = Ea(),
			ZX = z_ && new z_;
		Y_.exports = ZX
	});
	var Z_ = u((pK, $_) => {
		function JX() {}
		$_.exports = JX
	});
	var is = u((vK, ey) => {
		var J_ = Q_(),
			eU = Z_(),
			tU = J_ ? function(e) {
				return J_.get(e)
			} : eU;
		ey.exports = tU
	});
	var ry = u((hK, ty) => {
		var rU = {};
		ty.exports = rU
	});
	var os = u((gK, iy) => {
		var ny = ry(),
			nU = Object.prototype,
			iU = nU.hasOwnProperty;

		function oU(e) {
			for (var t = e.name + "", r = ny[t], n = iU.call(ny, t) ? r.length : 0; n--;) {
				var o = r[n],
					i = o.func;
				if (i == null || i == e) return o.name
			}
			return t
		}
		iy.exports = oU
	});
	var Oi = u((EK, oy) => {
		var aU = ns(),
			sU = yi(),
			uU = 4294967295;

		function Ti(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = uU, this.__views__ = []
		}
		Ti.prototype = aU(sU.prototype);
		Ti.prototype.constructor = Ti;
		oy.exports = Ti
	});
	var sy = u((_K, ay) => {
		function cU(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		ay.exports = cU
	});
	var cy = u((yK, uy) => {
		var lU = Oi(),
			fU = Ii(),
			dU = sy();

		function pU(e) {
			if (e instanceof lU) return e.clone();
			var t = new fU(e.__wrapped__, e.__chain__);
			return t.__actions__ = dU(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		uy.exports = pU
	});
	var dy = u((mK, fy) => {
		var vU = Oi(),
			ly = Ii(),
			hU = yi(),
			gU = Ne(),
			EU = _t(),
			_U = cy(),
			yU = Object.prototype,
			mU = yU.hasOwnProperty;

		function bi(e) {
			if (EU(e) && !gU(e) && !(e instanceof vU)) {
				if (e instanceof ly) return e;
				if (mU.call(e, "__wrapped__")) return _U(e)
			}
			return new ly(e)
		}
		bi.prototype = hU.prototype;
		bi.prototype.constructor = bi;
		fy.exports = bi
	});
	var vy = u((IK, py) => {
		var IU = Oi(),
			TU = is(),
			OU = os(),
			bU = dy();

		function SU(e) {
			var t = OU(e),
				r = bU[t];
			if (typeof r != "function" || !(t in IU.prototype)) return !1;
			if (e === r) return !0;
			var n = TU(r);
			return !!n && e === n[0]
		}
		py.exports = SU
	});
	var _y = u((TK, Ey) => {
		var hy = Ii(),
			AU = K_(),
			wU = is(),
			as = os(),
			RU = Ne(),
			gy = vy(),
			CU = "Expected a function",
			xU = 8,
			NU = 32,
			qU = 128,
			LU = 256;

		function PU(e) {
			return AU(function(t) {
				var r = t.length,
					n = r,
					o = hy.prototype.thru;
				for (e && t.reverse(); n--;) {
					var i = t[n];
					if (typeof i != "function") throw new TypeError(CU);
					if (o && !a && as(i) == "wrapper") var a = new hy([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					i = t[n];
					var s = as(i),
						c = s == "wrapper" ? wU(i) : void 0;
					c && gy(c[0]) && c[1] == (qU | xU | NU | LU) && !c[4].length && c[9] == 1 ? a = a[as(c[0])].apply(a, c[3]) : a = i.length == 1 && gy(i) ? a[s]() : a.thru(i)
				}
				return function() {
					var d = arguments,
						E = d[0];
					if (a && d.length == 1 && RU(E)) return a.plant(E).value();
					for (var f = 0, _ = r ? t[f].apply(this, d) : E; ++f < r;) _ = t[f].call(this, _);
					return _
				}
			})
		}
		Ey.exports = PU
	});
	var my = u((OK, yy) => {
		var DU = _y(),
			MU = DU();
		yy.exports = MU
	});
	var Ty = u((bK, Iy) => {
		function FU(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		Iy.exports = FU
	});
	var by = u((SK, Oy) => {
		var GU = Ty(),
			ss = ei();

		function XU(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ss(r), r = r === r ? r : 0), t !== void 0 && (t = ss(t), t = t === t ? t : 0), GU(ss(e), t, r)
		}
		Oy.exports = XU
	});
	var Wy = u(Ci => {
		"use strict";
		var Ri = et().default;
		Object.defineProperty(Ci, "__esModule", {
			value: !0
		});
		Ci.default = void 0;
		var ze = Ri(tr()),
			UU = Ri(my()),
			VU = Ri(Zn()),
			WU = Ri(by()),
			Ht = Be(),
			us = ds(),
			Si = _i(),
			BU = Bt(),
			{
				MOUSE_CLICK: HU,
				MOUSE_SECOND_CLICK: jU,
				MOUSE_DOWN: kU,
				MOUSE_UP: KU,
				MOUSE_OVER: zU,
				MOUSE_OUT: YU,
				DROPDOWN_CLOSE: QU,
				DROPDOWN_OPEN: $U,
				SLIDER_ACTIVE: ZU,
				SLIDER_INACTIVE: JU,
				TAB_ACTIVE: eV,
				TAB_INACTIVE: tV,
				NAVBAR_CLOSE: rV,
				NAVBAR_OPEN: nV,
				MOUSE_MOVE: iV,
				PAGE_SCROLL_DOWN: Ly,
				SCROLL_INTO_VIEW: Py,
				SCROLL_OUT_OF_VIEW: oV,
				PAGE_SCROLL_UP: aV,
				SCROLLING_IN_VIEW: sV,
				PAGE_FINISH: Dy,
				ECOMMERCE_CART_CLOSE: uV,
				ECOMMERCE_CART_OPEN: cV,
				PAGE_START: My,
				PAGE_SCROLL: lV
			} = Ht.EventTypeConsts,
			cs = "COMPONENT_ACTIVE",
			Fy = "COMPONENT_INACTIVE",
			{
				COLON_DELIMITER: Sy
			} = Ht.IX2EngineConstants,
			{
				getNamespacedParameterId: Ay
			} = BU.IX2VanillaUtils,
			Gy = e => t => typeof t == "object" && e(t) ? !0 : t,
			rn = Gy(({
				element: e,
				nativeEvent: t
			}) => e === t.target),
			fV = Gy(({
				element: e,
				nativeEvent: t
			}) => e.contains(t.target)),
			gt = (0, UU.default)([rn, fV]),
			Xy = (e, t) => {
				if (t) {
					let {
						ixData: r
					} = e.getState(), {
						events: n
					} = r, o = n[t];
					if (o && !pV[o.eventTypeId]) return o
				}
				return null
			},
			dV = ({
				store: e,
				event: t
			}) => {
				let {
					action: r
				} = t, {
					autoStopEventId: n
				} = r.config;
				return !!Xy(e, n)
			},
			je = ({
				store: e,
				event: t,
				element: r,
				eventStateKey: n
			}, o) => {
				let {
					action: i,
					id: a
				} = t, {
					actionListId: s,
					autoStopEventId: c
				} = i.config, d = Xy(e, c);
				return d && (0, us.stopActionGroup)({
					store: e,
					eventId: c,
					eventTarget: r,
					eventStateKey: c + Sy + n.split(Sy)[1],
					actionListId: (0, VU.default)(d, "action.config.actionListId")
				}), (0, us.stopActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: s
				}), (0, us.startActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: s
				}), o
			},
			it = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
			nn = {
				handler: it(gt, je)
			},
			Uy = (0, ze.default)({}, nn, {
				types: [cs, Fy].join(" ")
			}),
			ls = [{
				target: window,
				types: "resize orientationchange",
				throttle: !0
			}, {
				target: document,
				types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
				throttle: !0
			}],
			wy = "mouseover mouseout",
			fs = {
				types: ls
			},
			pV = {
				PAGE_START: My,
				PAGE_FINISH: Dy
			},
			tn = (() => {
				let e = window.pageXOffset !== void 0,
					r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : r.scrollLeft,
					scrollTop: e ? window.pageYOffset : r.scrollTop,
					stiffScrollTop: (0, WU.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
					scrollWidth: r.scrollWidth,
					scrollHeight: r.scrollHeight,
					clientWidth: r.clientWidth,
					clientHeight: r.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				})
			})(),
			vV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
			hV = ({
				element: e,
				nativeEvent: t
			}) => {
				let {
					type: r,
					target: n,
					relatedTarget: o
				} = t, i = e.contains(n);
				if (r === "mouseover" && i) return !0;
				let a = e.contains(o);
				return !!(r === "mouseout" && i && a)
			},
			gV = e => {
				let {
					element: t,
					event: {
						config: r
					}
				} = e, {
					clientWidth: n,
					clientHeight: o
				} = tn(), i = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
				return vV(t.getBoundingClientRect(), {
					left: 0,
					top: c,
					right: n,
					bottom: o - c
				})
			},
			Vy = e => (t, r) => {
				let {
					type: n
				} = t.nativeEvent, o = [cs, Fy].indexOf(n) !== -1 ? n === cs : r.isActive, i = (0, ze.default)({}, r, {
					isActive: o
				});
				return (!r || i.isActive !== r.isActive) && e(t, i) || i
			},
			Ry = e => (t, r) => {
				let n = {
					elementHovered: hV(t)
				};
				return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
			},
			EV = e => (t, r) => {
				let n = (0, ze.default)({}, r, {
					elementVisible: gV(t)
				});
				return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
			},
			Cy = e => (t, r = {}) => {
				let {
					stiffScrollTop: n,
					scrollHeight: o,
					innerHeight: i
				} = tn(), {
					event: {
						config: a,
						eventTypeId: s
					}
				} = t, {
					scrollOffsetValue: c,
					scrollOffsetUnit: d
				} = a, E = d === "PX", f = o - i, _ = Number((n / f).toFixed(2));
				if (r && r.percentTop === _) return r;
				let p = (E ? c : i * (c || 0) / 100) / f,
					g, O, R = 0;
				r && (g = _ > r.percentTop, O = r.scrollingDown !== g, R = O ? _ : r.anchorTop);
				let A = s === Ly ? _ >= R + p : _ <= R - p,
					x = (0, ze.default)({}, r, {
						percentTop: _,
						inBounds: A,
						anchorTop: R,
						scrollingDown: g
					});
				return r && A && (O || x.inBounds !== r.inBounds) && e(t, x) || x
			},
			_V = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
			yV = e => (t, r) => {
				let n = {
					finished: document.readyState === "complete"
				};
				return n.finished && !(r && r.finshed) && e(t), n
			},
			mV = e => (t, r) => {
				let n = {
					started: !0
				};
				return r || e(t), n
			},
			xy = e => (t, r = {
				clickCount: 0
			}) => {
				let n = {
					clickCount: r.clickCount % 2 + 1
				};
				return n.clickCount !== r.clickCount && e(t, n) || n
			},
			Ai = (e = !0) => (0, ze.default)({}, Uy, {
				handler: it(e ? gt : rn, Vy((t, r) => r.isActive ? nn.handler(t, r) : r))
			}),
			wi = (e = !0) => (0, ze.default)({}, Uy, {
				handler: it(e ? gt : rn, Vy((t, r) => r.isActive ? r : nn.handler(t, r)))
			}),
			Ny = (0, ze.default)({}, fs, {
				handler: EV((e, t) => {
					let {
						elementVisible: r
					} = t, {
						event: n,
						store: o
					} = e, {
						ixData: i
					} = o.getState(), {
						events: a
					} = i;
					return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Py === r ? (je(e), (0, ze.default)({}, t, {
						triggered: !0
					})) : t
				})
			}),
			qy = .05,
			IV = {
				[ZU]: Ai(),
				[JU]: wi(),
				[$U]: Ai(),
				[QU]: wi(),
				[nV]: Ai(!1),
				[rV]: wi(!1),
				[eV]: Ai(),
				[tV]: wi(),
				[cV]: {
					types: "ecommerce-cart-open",
					handler: it(gt, je)
				},
				[uV]: {
					types: "ecommerce-cart-close",
					handler: it(gt, je)
				},
				[HU]: {
					types: "click",
					handler: it(gt, xy((e, {
						clickCount: t
					}) => {
						dV(e) ? t === 1 && je(e) : je(e)
					}))
				},
				[jU]: {
					types: "click",
					handler: it(gt, xy((e, {
						clickCount: t
					}) => {
						t === 2 && je(e)
					}))
				},
				[kU]: (0, ze.default)({}, nn, {
					types: "mousedown"
				}),
				[KU]: (0, ze.default)({}, nn, {
					types: "mouseup"
				}),
				[zU]: {
					types: wy,
					handler: it(gt, Ry((e, t) => {
						t.elementHovered && je(e)
					}))
				},
				[YU]: {
					types: wy,
					handler: it(gt, Ry((e, t) => {
						t.elementHovered || je(e)
					}))
				},
				[iV]: {
					types: "mousemove mouseout scroll",
					handler: ({
						store: e,
						element: t,
						eventConfig: r,
						nativeEvent: n,
						eventStateKey: o
					}, i = {
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0
					}) => {
						let {
							basedOn: a,
							selectedAxis: s,
							continuousParameterGroupId: c,
							reverse: d,
							restingState: E = 0
						} = r, {
							clientX: f = i.clientX,
							clientY: _ = i.clientY,
							pageX: p = i.pageX,
							pageY: g = i.pageY
						} = n, O = s === "X_AXIS", R = n.type === "mouseout", A = E / 100, x = c, S = !1;
						switch (a) {
							case Ht.EventBasedOn.VIEWPORT: {
								A = O ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
								break
							}
							case Ht.EventBasedOn.PAGE: {
								let {
									scrollLeft: L,
									scrollTop: q,
									scrollWidth: P,
									scrollHeight: V
								} = tn();
								A = O ? Math.min(L + p, P) / P : Math.min(q + g, V) / V;
								break
							}
							case Ht.EventBasedOn.ELEMENT:
							default: {
								x = Ay(o, c);
								let L = n.type.indexOf("mouse") === 0;
								if (L && gt({
										element: t,
										nativeEvent: n
									}) !== !0) break;
								let q = t.getBoundingClientRect(),
									{
										left: P,
										top: V,
										width: k,
										height: Q
									} = q;
								if (!L && !_V({
										left: f,
										top: _
									}, q)) break;
								S = !0, A = O ? (f - P) / k : (_ - V) / Q;
								break
							}
						}
						return R && (A > 1 - qy || A < qy) && (A = Math.round(A)), (a !== Ht.EventBasedOn.ELEMENT || S || S !== i.elementHovered) && (A = d ? 1 - A : A, e.dispatch((0, Si.parameterChanged)(x, A))), {
							elementHovered: S,
							clientX: f,
							clientY: _,
							pageX: p,
							pageY: g
						}
					}
				},
				[lV]: {
					types: ls,
					handler: ({
						store: e,
						eventConfig: t
					}) => {
						let {
							continuousParameterGroupId: r,
							reverse: n
						} = t, {
							scrollTop: o,
							scrollHeight: i,
							clientHeight: a
						} = tn(), s = o / (i - a);
						s = n ? 1 - s : s, e.dispatch((0, Si.parameterChanged)(r, s))
					}
				},
				[sV]: {
					types: ls,
					handler: ({
						element: e,
						store: t,
						eventConfig: r,
						eventStateKey: n
					}, o = {
						scrollPercent: 0
					}) => {
						let {
							scrollLeft: i,
							scrollTop: a,
							scrollWidth: s,
							scrollHeight: c,
							clientHeight: d
						} = tn(), {
							basedOn: E,
							selectedAxis: f,
							continuousParameterGroupId: _,
							startsEntering: p,
							startsExiting: g,
							addEndOffset: O,
							addStartOffset: R,
							addOffsetValue: A = 0,
							endOffsetValue: x = 0
						} = r, S = f === "X_AXIS";
						if (E === Ht.EventBasedOn.VIEWPORT) {
							let L = S ? i / s : a / c;
							return L !== o.scrollPercent && t.dispatch((0, Si.parameterChanged)(_, L)), {
								scrollPercent: L
							}
						} else {
							let L = Ay(n, _),
								q = e.getBoundingClientRect(),
								P = (R ? A : 0) / 100,
								V = (O ? x : 0) / 100;
							P = p ? P : 1 - P, V = g ? V : 1 - V;
							let k = q.top + Math.min(q.height * P, d),
								oe = q.top + q.height * V - k,
								re = Math.min(d + oe, c),
								I = Math.min(Math.max(0, d - k), re) / re;
							return I !== o.scrollPercent && t.dispatch((0, Si.parameterChanged)(L, I)), {
								scrollPercent: I
							}
						}
					}
				},
				[Py]: Ny,
				[oV]: Ny,
				[Ly]: (0, ze.default)({}, fs, {
					handler: Cy((e, t) => {
						t.scrollingDown && je(e)
					})
				}),
				[aV]: (0, ze.default)({}, fs, {
					handler: Cy((e, t) => {
						t.scrollingDown || je(e)
					})
				}),
				[Dy]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: it(rn, yV(je))
				},
				[My]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: it(rn, mV(je))
				}
			};
		Ci.default = IV
	});
	var ds = u(Nt => {
		"use strict";
		var at = et().default,
			TV = Pt().default;
		Object.defineProperty(Nt, "__esModule", {
			value: !0
		});
		Nt.observeRequests = ZV;
		Nt.startActionGroup = _s;
		Nt.startEngine = Pi;
		Nt.stopActionGroup = Es;
		Nt.stopAllActionGroups = $y;
		Nt.stopEngine = Di;
		var OV = at(tr()),
			bV = at(oE()),
			SV = at(La()),
			xt = at(Zn()),
			AV = at(bE()),
			wV = at(QE()),
			RV = at(ZE()),
			CV = at(e_()),
			on = at(a_()),
			xV = at(p_()),
			ot = Be(),
			jy = Bt(),
			be = _i(),
			Re = TV(__()),
			NV = at(Wy()),
			qV = ["store", "computedStyle"],
			LV = Object.keys(ot.QuickEffectIds),
			ps = e => LV.includes(e),
			{
				COLON_DELIMITER: vs,
				BOUNDARY_SELECTOR: xi,
				HTML_ELEMENT: ky,
				RENDER_GENERAL: PV,
				W_MOD_IX: By
			} = ot.IX2EngineConstants,
			{
				getAffectedElements: Ni,
				getElementId: DV,
				getDestinationValues: hs,
				observeStore: jt,
				getInstanceId: MV,
				renderHTMLElement: FV,
				clearAllStyles: Ky,
				getMaxDurationItemIndex: GV,
				getComputedStyle: XV,
				getInstanceOrigin: UV,
				reduceListToGroup: VV,
				shouldNamespaceEventParameter: WV,
				getNamespacedParameterId: BV,
				shouldAllowMediaQuery: qi,
				cleanupHTMLElement: HV,
				clearObjectCache: jV,
				stringifyTarget: kV,
				mediaQueriesEqual: KV,
				shallowEqual: zV
			} = jy.IX2VanillaUtils,
			{
				isPluginType: Li,
				createPluginInstance: gs,
				getPluginDuration: YV
			} = jy.IX2VanillaPlugins,
			Hy = navigator.userAgent,
			QV = Hy.match(/iPad/i) || Hy.match(/iPhone/),
			$V = 12;

		function ZV(e) {
			jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.preview,
				onChange: tW
			}), jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.playback,
				onChange: rW
			}), jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.stop,
				onChange: nW
			}), jt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.clear,
				onChange: iW
			})
		}

		function JV(e) {
			jt({
				store: e,
				select: ({
					ixSession: t
				}) => t.mediaQueryKey,
				onChange: () => {
					Di(e), Ky({
						store: e,
						elementApi: Re
					}), Pi({
						store: e,
						allowEvents: !0
					}), zy()
				}
			})
		}

		function eW(e, t) {
			let r = jt({
				store: e,
				select: ({
					ixSession: n
				}) => n.tick,
				onChange: n => {
					t(n), r()
				}
			})
		}

		function tW({
			rawData: e,
			defer: t
		}, r) {
			let n = () => {
				Pi({
					store: r,
					rawData: e,
					allowEvents: !0
				}), zy()
			};
			t ? setTimeout(n, 0) : n()
		}

		function zy() {
			document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
		}

		function rW(e, t) {
			let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: o,
				eventId: i,
				allowEvents: a,
				immediate: s,
				testManual: c,
				verbose: d = !0
			} = e, {
				rawData: E
			} = e;
			if (n && o && E && s) {
				let f = E.actionLists[n];
				f && (E = VV({
					actionList: f,
					actionItemId: o,
					rawData: E
				}))
			}
			if (Pi({
					store: t,
					rawData: E,
					allowEvents: a,
					testManual: c
				}), n && r === ot.ActionTypeConsts.GENERAL_START_ACTION || ps(r)) {
				Es({
					store: t,
					actionListId: n
				}), Qy({
					store: t,
					actionListId: n,
					eventId: i
				});
				let f = _s({
					store: t,
					eventId: i,
					actionListId: n,
					immediate: s,
					verbose: d
				});
				d && f && t.dispatch((0, be.actionListPlaybackChanged)({
					actionListId: n,
					isPlaying: !s
				}))
			}
		}

		function nW({
			actionListId: e
		}, t) {
			e ? Es({
				store: t,
				actionListId: e
			}) : $y({
				store: t
			}), Di(t)
		}

		function iW(e, t) {
			Di(t), Ky({
				store: t,
				elementApi: Re
			})
		}

		function Pi({
			store: e,
			rawData: t,
			allowEvents: r,
			testManual: n
		}) {
			let {
				ixSession: o
			} = e.getState();
			t && e.dispatch((0, be.rawDataImported)(t)), o.active || (e.dispatch((0, be.sessionInitialized)({
				hasBoundaryNodes: !!document.querySelector(xi),
				reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
			})), r && (lW(e), oW(), e.getState().ixSession.hasDefinedMediaQueries && JV(e)), e.dispatch((0, be.sessionStarted)()), aW(e, n))
		}

		function oW() {
			let {
				documentElement: e
			} = document;
			e.className.indexOf(By) === -1 && (e.className += ` ${By}`)
		}

		function aW(e, t) {
			let r = n => {
				let {
					ixSession: o,
					ixParameters: i
				} = e.getState();
				o.active && (e.dispatch((0, be.animationFrameChanged)(n, i)), t ? eW(e, r) : requestAnimationFrame(r))
			};
			r(window.performance.now())
		}

		function Di(e) {
			let {
				ixSession: t
			} = e.getState();
			if (t.active) {
				let {
					eventListeners: r
				} = t;
				r.forEach(sW), jV(), e.dispatch((0, be.sessionStopped)())
			}
		}

		function sW({
			target: e,
			listenerParams: t
		}) {
			e.removeEventListener.apply(e, t)
		}

		function uW({
			store: e,
			eventStateKey: t,
			eventTarget: r,
			eventId: n,
			eventConfig: o,
			actionListId: i,
			parameterGroup: a,
			smoothing: s,
			restingValue: c
		}) {
			let {
				ixData: d,
				ixSession: E
			} = e.getState(), {
				events: f
			} = d, _ = f[n], {
				eventTypeId: p
			} = _, g = {}, O = {}, R = [], {
				continuousActionGroups: A
			} = a, {
				id: x
			} = a;
			WV(p, o) && (x = BV(t, x));
			let S = E.hasBoundaryNodes && r ? Re.getClosestElement(r, xi) : null;
			A.forEach(L => {
				let {
					keyframe: q,
					actionItems: P
				} = L;
				P.forEach(V => {
					let {
						actionTypeId: k
					} = V, {
						target: Q
					} = V.config;
					if (!Q) return;
					let oe = Q.boundaryMode ? S : null,
						re = kV(Q) + vs + k;
					if (O[re] = cW(O[re], q, V), !g[re]) {
						g[re] = !0;
						let {
							config: X
						} = V;
						Ni({
							config: X,
							event: _,
							eventTarget: r,
							elementRoot: oe,
							elementApi: Re
						}).forEach(I => {
							R.push({
								element: I,
								key: re
							})
						})
					}
				})
			}), R.forEach(({
				element: L,
				key: q
			}) => {
				let P = O[q],
					V = (0, xt.default)(P, "[0].actionItems[0]", {}),
					{
						actionTypeId: k
					} = V,
					Q = Li(k) ? gs(k)(L, V) : null,
					oe = hs({
						element: L,
						actionItem: V,
						elementApi: Re
					}, Q);
				ys({
					store: e,
					element: L,
					eventId: n,
					actionListId: i,
					actionItem: V,
					destination: oe,
					continuous: !0,
					parameterId: x,
					actionGroups: P,
					smoothing: s,
					restingValue: c,
					pluginInstance: Q
				})
			})
		}

		function cW(e = [], t, r) {
			let n = [...e],
				o;
			return n.some((i, a) => i.keyframe === t ? (o = a, !0) : !1), o == null && (o = n.length, n.push({
				keyframe: t,
				actionItems: []
			})), n[o].actionItems.push(r), n
		}

		function lW(e) {
			let {
				ixData: t
			} = e.getState(), {
				eventTypeMap: r
			} = t;
			Yy(e), (0, on.default)(r, (o, i) => {
				let a = NV.default[i];
				if (!a) {
					console.warn(`IX2 event type not configured: ${i}`);
					return
				}
				gW({
					logic: a,
					store: e,
					events: o
				})
			});
			let {
				ixSession: n
			} = e.getState();
			n.eventListeners.length && dW(e)
		}
		var fW = ["resize", "orientationchange"];

		function dW(e) {
			let t = () => {
				Yy(e)
			};
			fW.forEach(r => {
				window.addEventListener(r, t), e.dispatch((0, be.eventListenerAdded)(window, [r, t]))
			}), t()
		}

		function Yy(e) {
			let {
				ixSession: t,
				ixData: r
			} = e.getState(), n = window.innerWidth;
			if (n !== t.viewportWidth) {
				let {
					mediaQueries: o
				} = r;
				e.dispatch((0, be.viewportWidthChanged)({
					width: n,
					mediaQueries: o
				}))
			}
		}
		var pW = (e, t) => (0, wV.default)((0, CV.default)(e, t), RV.default),
			vW = (e, t) => {
				(0, on.default)(e, (r, n) => {
					r.forEach((o, i) => {
						let a = n + vs + i;
						t(o, n, a)
					})
				})
			},
			hW = e => {
				let t = {
					target: e.target,
					targets: e.targets
				};
				return Ni({
					config: t,
					elementApi: Re
				})
			};

		function gW({
			logic: e,
			store: t,
			events: r
		}) {
			EW(r);
			let {
				types: n,
				handler: o
			} = e, {
				ixData: i
			} = t.getState(), {
				actionLists: a
			} = i, s = pW(r, hW);
			if (!(0, AV.default)(s)) return;
			(0, on.default)(s, (f, _) => {
				let p = r[_],
					{
						action: g,
						id: O,
						mediaQueries: R = i.mediaQueryKeys
					} = p,
					{
						actionListId: A
					} = g.config;
				KV(R, i.mediaQueryKeys) || t.dispatch((0, be.mediaQueriesDefined)()), g.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(p.config) ? p.config : [p.config]).forEach(S => {
					let {
						continuousParameterGroupId: L
					} = S, q = (0, xt.default)(a, `${A}.continuousParameterGroups`, []), P = (0, SV.default)(q, ({
						id: Q
					}) => Q === L), V = (S.smoothing || 0) / 100, k = (S.restingState || 0) / 100;
					P && f.forEach((Q, oe) => {
						let re = O + vs + oe;
						uW({
							store: t,
							eventStateKey: re,
							eventTarget: Q,
							eventId: O,
							eventConfig: S,
							actionListId: A,
							parameterGroup: P,
							smoothing: V,
							restingValue: k
						})
					})
				}), (g.actionTypeId === ot.ActionTypeConsts.GENERAL_START_ACTION || ps(g.actionTypeId)) && Qy({
					store: t,
					actionListId: A,
					eventId: O
				})
			});
			let c = f => {
					let {
						ixSession: _
					} = t.getState();
					vW(s, (p, g, O) => {
						let R = r[g],
							A = _.eventState[O],
							{
								action: x,
								mediaQueries: S = i.mediaQueryKeys
							} = R;
						if (!qi(S, _.mediaQueryKey)) return;
						let L = (q = {}) => {
							let P = o({
								store: t,
								element: p,
								event: R,
								eventConfig: q,
								nativeEvent: f,
								eventStateKey: O
							}, A);
							zV(P, A) || t.dispatch((0, be.eventStateChanged)(O, P))
						};
						x.actionTypeId === ot.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(L) : L()
					})
				},
				d = (0, xV.default)(c, $V),
				E = ({
					target: f = document,
					types: _,
					throttle: p
				}) => {
					_.split(" ").filter(Boolean).forEach(g => {
						let O = p ? d : c;
						f.addEventListener(g, O), t.dispatch((0, be.eventListenerAdded)(f, [g, O]))
					})
				};
			Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
		}

		function EW(e) {
			if (!QV) return;
			let t = {},
				r = "";
			for (let n in e) {
				let {
					eventTypeId: o,
					target: i
				} = e[n], a = Re.getQuerySelector(i);
				t[a] || (o === ot.EventTypeConsts.MOUSE_CLICK || o === ot.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
			}
			if (r) {
				let n = document.createElement("style");
				n.textContent = r, document.body.appendChild(n)
			}
		}

		function Qy({
			store: e,
			actionListId: t,
			eventId: r
		}) {
			let {
				ixData: n,
				ixSession: o
			} = e.getState(), {
				actionLists: i,
				events: a
			} = n, s = a[r], c = i[t];
			if (c && c.useFirstGroupAsInitialState) {
				let d = (0, xt.default)(c, "actionItemGroups[0].actionItems", []),
					E = (0, xt.default)(s, "mediaQueries", n.mediaQueryKeys);
				if (!qi(E, o.mediaQueryKey)) return;
				d.forEach(f => {
					var _;
					let {
						config: p,
						actionTypeId: g
					} = f, O = (p == null || (_ = p.target) === null || _ === void 0 ? void 0 : _.useEventTarget) === !0 ? {
						target: s.target,
						targets: s.targets
					} : p, R = Ni({
						config: O,
						event: s,
						elementApi: Re
					}), A = Li(g);
					R.forEach(x => {
						let S = A ? gs(g)(x, f) : null;
						ys({
							destination: hs({
								element: x,
								actionItem: f,
								elementApi: Re
							}, S),
							immediate: !0,
							store: e,
							element: x,
							eventId: r,
							actionItem: f,
							actionListId: t,
							pluginInstance: S
						})
					})
				})
			}
		}

		function $y({
			store: e
		}) {
			let {
				ixInstances: t
			} = e.getState();
			(0, on.default)(t, r => {
				if (!r.continuous) {
					let {
						actionListId: n,
						verbose: o
					} = r;
					ms(r, e), o && e.dispatch((0, be.actionListPlaybackChanged)({
						actionListId: n,
						isPlaying: !1
					}))
				}
			})
		}

		function Es({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: o
		}) {
			let {
				ixInstances: i,
				ixSession: a
			} = e.getState(), s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, xi) : null;
			(0, on.default)(i, c => {
				let d = (0, xt.default)(c, "actionItem.config.target.boundaryMode"),
					E = n ? c.eventStateKey === n : !0;
				if (c.actionListId === o && c.eventId === t && E) {
					if (s && d && !Re.elementContains(s, c.element)) return;
					ms(c, e), c.verbose && e.dispatch((0, be.actionListPlaybackChanged)({
						actionListId: o,
						isPlaying: !1
					}))
				}
			})
		}

		function _s({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: o,
			groupIndex: i = 0,
			immediate: a,
			verbose: s
		}) {
			var c;
			let {
				ixData: d,
				ixSession: E
			} = e.getState(), {
				events: f
			} = d, _ = f[t] || {}, {
				mediaQueries: p = d.mediaQueryKeys
			} = _, g = (0, xt.default)(d, `actionLists.${o}`, {}), {
				actionItemGroups: O,
				useFirstGroupAsInitialState: R
			} = g;
			if (!O || !O.length) return !1;
			i >= O.length && (0, xt.default)(_, "config.loop") && (i = 0), i === 0 && R && i++;
			let x = (i === 0 || i === 1 && R) && ps((c = _.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? _.config.delay : void 0,
				S = (0, xt.default)(O, [i, "actionItems"], []);
			if (!S.length || !qi(p, E.mediaQueryKey)) return !1;
			let L = E.hasBoundaryNodes && r ? Re.getClosestElement(r, xi) : null,
				q = GV(S),
				P = !1;
			return S.forEach((V, k) => {
				let {
					config: Q,
					actionTypeId: oe
				} = V, re = Li(oe), {
					target: X
				} = Q;
				if (!X) return;
				let I = X.boundaryMode ? L : null;
				Ni({
					config: Q,
					event: _,
					eventTarget: r,
					elementRoot: I,
					elementApi: Re
				}).forEach((F, G) => {
					let $ = re ? gs(oe)(F, V) : null,
						ne = re ? YV(oe)(F, V) : null;
					P = !0;
					let M = q === k && G === 0,
						U = XV({
							element: F,
							actionItem: V
						}),
						K = hs({
							element: F,
							actionItem: V,
							elementApi: Re
						}, $);
					ys({
						store: e,
						element: F,
						actionItem: V,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: o,
						groupIndex: i,
						isCarrier: M,
						computedStyle: U,
						destination: K,
						immediate: a,
						verbose: s,
						pluginInstance: $,
						pluginDuration: ne,
						instanceDelay: x
					})
				})
			}), P
		}

		function ys(e) {
			var t;
			let {
				store: r,
				computedStyle: n
			} = e, o = (0, bV.default)(e, qV), {
				element: i,
				actionItem: a,
				immediate: s,
				pluginInstance: c,
				continuous: d,
				restingValue: E,
				eventId: f
			} = o, _ = !d, p = MV(), {
				ixElements: g,
				ixSession: O,
				ixData: R
			} = r.getState(), A = DV(g, i), {
				refState: x
			} = g[A] || {}, S = Re.getRefType(i), L = O.reducedMotion && ot.ReducedMotionTypes[a.actionTypeId], q;
			if (L && d) switch ((t = R.events[f]) === null || t === void 0 ? void 0 : t.eventTypeId) {
				case ot.EventTypeConsts.MOUSE_MOVE:
				case ot.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
					q = E;
					break;
				default:
					q = .5;
					break
			}
			let P = UV(i, x, n, a, Re, c);
			if (r.dispatch((0, be.instanceAdded)((0, OV.default)({
					instanceId: p,
					elementId: A,
					origin: P,
					refType: S,
					skipMotion: L,
					skipToValue: q
				}, o))), Zy(document.body, "ix2-animation-started", p), s) {
				_W(r, p);
				return
			}
			jt({
				store: r,
				select: ({
					ixInstances: V
				}) => V[p],
				onChange: Jy
			}), _ && r.dispatch((0, be.instanceStarted)(p, O.tick))
		}

		function ms(e, t) {
			Zy(document.body, "ix2-animation-stopping", {
				instanceId: e.id,
				state: t.getState()
			});
			let {
				elementId: r,
				actionItem: n
			} = e, {
				ixElements: o
			} = t.getState(), {
				ref: i,
				refType: a
			} = o[r] || {};
			a === ky && HV(i, n, Re), t.dispatch((0, be.instanceRemoved)(e.id))
		}

		function Zy(e, t, r) {
			let n = document.createEvent("CustomEvent");
			n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
		}

		function _W(e, t) {
			let {
				ixParameters: r
			} = e.getState();
			e.dispatch((0, be.instanceStarted)(t, 0)), e.dispatch((0, be.animationFrameChanged)(performance.now(), r));
			let {
				ixInstances: n
			} = e.getState();
			Jy(n[t], e)
		}

		function Jy(e, t) {
			let {
				active: r,
				continuous: n,
				complete: o,
				elementId: i,
				actionItem: a,
				actionTypeId: s,
				renderType: c,
				current: d,
				groupIndex: E,
				eventId: f,
				eventTarget: _,
				eventStateKey: p,
				actionListId: g,
				isCarrier: O,
				styleProp: R,
				verbose: A,
				pluginInstance: x
			} = e, {
				ixData: S,
				ixSession: L
			} = t.getState(), {
				events: q
			} = S, P = q[f] || {}, {
				mediaQueries: V = S.mediaQueryKeys
			} = P;
			if (qi(V, L.mediaQueryKey) && (n || r || o)) {
				if (d || c === PV && o) {
					t.dispatch((0, be.elementStateChanged)(i, s, d, a));
					let {
						ixElements: k
					} = t.getState(), {
						ref: Q,
						refType: oe,
						refState: re
					} = k[i] || {}, X = re && re[s];
					(oe === ky || Li(s)) && FV(Q, re, X, f, a, R, Re, c, x)
				}
				if (o) {
					if (O) {
						let k = _s({
							store: t,
							eventId: f,
							eventTarget: _,
							eventStateKey: p,
							actionListId: g,
							groupIndex: E + 1,
							verbose: A
						});
						A && !k && t.dispatch((0, be.actionListPlaybackChanged)({
							actionListId: g,
							isPlaying: !1
						}))
					}
					ms(e, t)
				}
			}
		}
	});
	var tm = u(It => {
		"use strict";
		var yW = Pt().default,
			mW = et().default;
		Object.defineProperty(It, "__esModule", {
			value: !0
		});
		It.actions = void 0;
		It.destroy = em;
		It.init = SW;
		It.setEnv = bW;
		It.store = void 0;
		Gl();
		var IW = Zo(),
			TW = mW(iE()),
			Is = ds(),
			OW = yW(_i());
		It.actions = OW;
		var Mi = (0, IW.createStore)(TW.default);
		It.store = Mi;

		function bW(e) {
			e() && (0, Is.observeRequests)(Mi)
		}

		function SW(e) {
			em(), (0, Is.startEngine)({
				store: Mi,
				rawData: e,
				allowEvents: !0
			})
		}

		function em() {
			(0, Is.stopEngine)(Mi)
		}
	});
	var om = u((CK, im) => {
		var rm = ke(),
			nm = tm();
		nm.setEnv(rm.env);
		rm.define("ix2", im.exports = function() {
			return nm
		})
	});
	var sm = u((xK, am) => {
		var Tr = ke();
		Tr.define("links", am.exports = function(e, t) {
			var r = {},
				n = e(window),
				o, i = Tr.env(),
				a = window.location,
				s = document.createElement("a"),
				c = "w--current",
				d = /index\.(html|php)$/,
				E = /\/$/,
				f, _;
			r.ready = r.design = r.preview = p;

			function p() {
				o = i && Tr.env("design"), _ = Tr.env("slug") || a.pathname || "", Tr.scroll.off(O), f = [];
				for (var A = document.links, x = 0; x < A.length; ++x) g(A[x]);
				f.length && (Tr.scroll.on(O), O())
			}

			function g(A) {
				var x = o && A.getAttribute("href-disabled") || A.getAttribute("href");
				if (s.href = x, !(x.indexOf(":") >= 0)) {
					var S = e(A);
					if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
						if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
						var L = e(s.hash);
						L.length && f.push({
							link: S,
							sec: L,
							active: !1
						});
						return
					}
					if (!(x === "#" || x === "")) {
						var q = s.href === a.href || x === _ || d.test(x) && E.test(_);
						R(S, c, q)
					}
				}
			}

			function O() {
				var A = n.scrollTop(),
					x = n.height();
				t.each(f, function(S) {
					var L = S.link,
						q = S.sec,
						P = q.offset().top,
						V = q.outerHeight(),
						k = x * .5,
						Q = q.is(":visible") && P + V - k >= A && P + k <= A + x;
					S.active !== Q && (S.active = Q, R(L, c, Q))
				})
			}

			function R(A, x, S) {
				var L = A.hasClass(x);
				S && L || !S && !L || (S ? A.addClass(x) : A.removeClass(x))
			}
			return r
		})
	});
	var cm = u((NK, um) => {
		var Fi = ke();
		Fi.define("scroll", um.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = g() ? null : window.history,
				o = e(window),
				i = e(document),
				a = e(document.body),
				s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(X) {
					window.setTimeout(X, 15)
				},
				c = Fi.env("editor") ? ".w-editor-body" : "body",
				d = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
				E = 'a[href="#"]',
				f = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
				_ = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				p = document.createElement("style");
			p.appendChild(document.createTextNode(_));

			function g() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var O = /^#[a-zA-Z0-9][\w:.-]*$/;

			function R(X) {
				return O.test(X.hash) && X.host + X.pathname === r.host + r.pathname
			}
			let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function x() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
			}

			function S(X, I) {
				var D;
				switch (I) {
					case "add":
						D = X.attr("tabindex"), D ? X.attr("data-wf-tabindex-swap", D) : X.attr("tabindex", "-1");
						break;
					case "remove":
						D = X.attr("data-wf-tabindex-swap"), D ? (X.attr("tabindex", D), X.removeAttr("data-wf-tabindex-swap")) : X.removeAttr("tabindex");
						break
				}
				X.toggleClass("wf-force-outline-none", I === "add")
			}

			function L(X) {
				var I = X.currentTarget;
				if (!(Fi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))) {
					var D = R(I) ? I.hash : "";
					if (D !== "") {
						var F = e(D);
						F.length && (X && (X.preventDefault(), X.stopPropagation()), q(D, X), window.setTimeout(function() {
							P(F, function() {
								S(F, "add"), F.get(0).focus({
									preventScroll: !0
								}), S(F, "remove")
							})
						}, X ? 0 : 300))
					}
				}
			}

			function q(X) {
				if (r.hash !== X && n && n.pushState && !(Fi.env.chrome && r.protocol === "file:")) {
					var I = n.state && n.state.hash;
					I !== X && n.pushState({
						hash: X
					}, "", X)
				}
			}

			function P(X, I) {
				var D = o.scrollTop(),
					F = V(X);
				if (D !== F) {
					var G = k(X, D, F),
						$ = Date.now(),
						ne = function() {
							var M = Date.now() - $;
							window.scroll(0, Q(D, F, M, G)), M <= G ? s(ne) : typeof I == "function" && I()
						};
					s(ne)
				}
			}

			function V(X) {
				var I = e(d),
					D = I.css("position") === "fixed" ? I.outerHeight() : 0,
					F = X.offset().top - D;
				if (X.data("scroll") === "mid") {
					var G = o.height() - D,
						$ = X.outerHeight();
					$ < G && (F -= Math.round((G - $) / 2))
				}
				return F
			}

			function k(X, I, D) {
				if (x()) return 0;
				var F = 1;
				return a.add(X).each(function(G, $) {
					var ne = parseFloat($.getAttribute("data-scroll-time"));
					!isNaN(ne) && ne >= 0 && (F = ne)
				}), (472.143 * Math.log(Math.abs(I - D) + 125) - 2e3) * F
			}

			function Q(X, I, D, F) {
				return D > F ? I : X + (I - X) * oe(D / F)
			}

			function oe(X) {
				return X < .5 ? 4 * X * X * X : (X - 1) * (2 * X - 2) * (2 * X - 2) + 1
			}

			function re() {
				var {
					WF_CLICK_EMPTY: X,
					WF_CLICK_SCROLL: I
				} = t;
				i.on(I, f, L), i.on(X, E, function(D) {
					D.preventDefault()
				}), document.head.insertBefore(p, document.head.firstChild)
			}
			return {
				ready: re
			}
		})
	});
	var fm = u((qK, lm) => {
		var AW = ke();
		AW.define("touch", lm.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(i) {
				return i = typeof i == "string" ? e(i).get(0) : i, i ? new n(i) : null
			};

			function n(i) {
				var a = !1,
					s = !1,
					c = Math.min(Math.round(window.innerWidth * .04), 40),
					d, E;
				i.addEventListener("touchstart", f, !1), i.addEventListener("touchmove", _, !1), i.addEventListener("touchend", p, !1), i.addEventListener("touchcancel", g, !1), i.addEventListener("mousedown", f, !1), i.addEventListener("mousemove", _, !1), i.addEventListener("mouseup", p, !1), i.addEventListener("mouseout", g, !1);

				function f(R) {
					var A = R.touches;
					A && A.length > 1 || (a = !0, A ? (s = !0, d = A[0].clientX) : d = R.clientX, E = d)
				}

				function _(R) {
					if (a) {
						if (s && R.type === "mousemove") {
							R.preventDefault(), R.stopPropagation();
							return
						}
						var A = R.touches,
							x = A ? A[0].clientX : R.clientX,
							S = x - E;
						E = x, Math.abs(S) > c && r && String(r()) === "" && (o("swipe", R, {
							direction: S > 0 ? "right" : "left"
						}), g())
					}
				}

				function p(R) {
					if (a && (a = !1, s && R.type === "mouseup")) {
						R.preventDefault(), R.stopPropagation(), s = !1;
						return
					}
				}

				function g() {
					a = !1
				}

				function O() {
					i.removeEventListener("touchstart", f, !1), i.removeEventListener("touchmove", _, !1), i.removeEventListener("touchend", p, !1), i.removeEventListener("touchcancel", g, !1), i.removeEventListener("mousedown", f, !1), i.removeEventListener("mousemove", _, !1), i.removeEventListener("mouseup", p, !1), i.removeEventListener("mouseout", g, !1), i = null
				}
				this.destroy = O
			}

			function o(i, a, s) {
				var c = e.Event(i, {
					originalEvent: a
				});
				e(a.target).trigger(c, s)
			}
			return t.instance = t.init(document), t
		})
	});
	var dm = u(Ts => {
		"use strict";
		Object.defineProperty(Ts, "__esModule", {
			value: !0
		});
		Ts.default = wW;

		function wW(e, t, r, n, o, i, a, s, c, d, E, f, _) {
			return function(p) {
				e(p);
				var g = p.form,
					O = {
						name: g.attr("data-name") || g.attr("name") || "Untitled Form",
						pageId: g.attr("data-wf-page-id") || "",
						elementId: g.attr("data-wf-element-id") || "",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(g.html()),
						trackingCookies: n()
					};
				let R = g.attr("data-wf-flow");
				R && (O.wfFlow = R), o(p);
				var A = i(g, O.fields);
				if (A) return a(A);
				if (O.fileUploads = s(g), c(p), !d) {
					E(p);
					return
				}
				f.ajax({
					url: _,
					type: "POST",
					data: O,
					dataType: "json",
					crossDomain: !0
				}).done(function(x) {
					x && x.code === 200 && (p.success = !0), E(p)
				}).fail(function() {
					E(p)
				})
			}
		}
	});
	var vm = u((PK, pm) => {
		var Gi = ke();
		Gi.define("forms", pm.exports = function(e, t) {
			var r = {},
				n = e(document),
				o, i = window.location,
				a = window.XDomainRequest && !window.atob,
				s = ".w-form",
				c, d = /e(-)?mail/i,
				E = /^\S+@\S+$/,
				f = window.alert,
				_ = Gi.env(),
				p, g, O, R = /list-manage[1-9]?.com/i,
				A = t.debounce(function() {
					f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				x(), !_ && !p && L()
			};

			function x() {
				c = e("html").attr("data-wf-site"), g = "https://webflow.com/api/v1/form/" + c, a && g.indexOf("https://webflow.com") >= 0 && (g = g.replace("https://webflow.com", "https://formdata.webflow.com")), O = `${g}/signFile`, o = e(s + " form"), o.length && o.each(S)
			}

			function S(M, U) {
				var K = e(U),
					v = e.data(U, s);
				v || (v = e.data(U, s, {
					form: K
				})), q(v);
				var m = K.closest("div.w-form");
				v.done = m.find("> .w-form-done"), v.fail = m.find("> .w-form-fail"), v.fileUploads = m.find(".w-file-upload"), v.fileUploads.each(function(ie) {
					G(ie, v)
				});
				var B = v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
				v.done.attr("aria-label") || v.form.attr("aria-label", B), v.done.attr("tabindex", "-1"), v.done.attr("role", "region"), v.done.attr("aria-label") || v.done.attr("aria-label", B + " success"), v.fail.attr("tabindex", "-1"), v.fail.attr("role", "region"), v.fail.attr("aria-label") || v.fail.attr("aria-label", B + " failure");
				var ee = v.action = K.attr("action");
				if (v.handler = null, v.redirect = K.attr("data-redirect"), R.test(ee)) {
					v.handler = I;
					return
				}
				if (!ee) {
					if (c) {
						v.handler = (() => {
							let ie = dm().default;
							return ie(q, i, Gi, oe, F, V, f, k, P, c, D, e, g)
						})();
						return
					}
					A()
				}
			}

			function L() {
				p = !0, n.on("submit", s + " form", function(ie) {
					var Y = e.data(this, s);
					Y.handler && (Y.evt = ie, Y.handler(Y))
				});
				let M = ".w-checkbox-input",
					U = ".w-radio-input",
					K = "w--redirected-checked",
					v = "w--redirected-focus",
					m = "w--redirected-focus-visible",
					B = ":focus-visible, [data-wf-focus-visible]",
					ee = [
						["checkbox", M],
						["radio", U]
					];
				n.on("change", s + ' form input[type="checkbox"]:not(' + M + ")", ie => {
					e(ie.target).siblings(M).toggleClass(K)
				}), n.on("change", s + ' form input[type="radio"]', ie => {
					e(`input[name="${ie.target.name}"]:not(${M})`).map((J, Oe) => e(Oe).siblings(U).removeClass(K));
					let Y = e(ie.target);
					Y.hasClass("w-radio-input") || Y.siblings(U).addClass(K)
				}), ee.forEach(([ie, Y]) => {
					n.on("focus", s + ` form input[type="${ie}"]:not(` + Y + ")", J => {
						e(J.target).siblings(Y).addClass(v), e(J.target).filter(B).siblings(Y).addClass(m)
					}), n.on("blur", s + ` form input[type="${ie}"]:not(` + Y + ")", J => {
						e(J.target).siblings(Y).removeClass(`${v} ${m}`)
					})
				})
			}

			function q(M) {
				var U = M.btn = M.form.find(':input[type="submit"]');
				M.wait = M.btn.attr("data-wait") || null, M.success = !1, U.prop("disabled", !1), M.label && U.val(M.label)
			}

			function P(M) {
				var U = M.btn,
					K = M.wait;
				U.prop("disabled", !0), K && (M.label = U.val(), U.val(K))
			}

			function V(M, U) {
				var K = null;
				return U = U || {}, M.find(':input:not([type="submit"]):not([type="file"])').each(function(v, m) {
					var B = e(m),
						ee = B.attr("type"),
						ie = B.attr("data-name") || B.attr("name") || "Field " + (v + 1),
						Y = B.val();
					if (ee === "checkbox") Y = B.is(":checked");
					else if (ee === "radio") {
						if (U[ie] === null || typeof U[ie] == "string") return;
						Y = M.find('input[name="' + B.attr("name") + '"]:checked').val() || null
					}
					typeof Y == "string" && (Y = e.trim(Y)), U[ie] = Y, K = K || re(B, ee, ie, Y)
				}), K
			}

			function k(M) {
				var U = {};
				return M.find(':input[type="file"]').each(function(K, v) {
					var m = e(v),
						B = m.attr("data-name") || m.attr("name") || "File " + (K + 1),
						ee = m.attr("data-value");
					typeof ee == "string" && (ee = e.trim(ee)), U[B] = ee
				}), U
			}
			let Q = {
				_mkto_trk: "marketo"
			};

			function oe() {
				return document.cookie.split("; ").reduce(function(U, K) {
					let v = K.split("="),
						m = v[0];
					if (m in Q) {
						let B = Q[m],
							ee = v.slice(1).join("=");
						U[B] = ee
					}
					return U
				}, {})
			}

			function re(M, U, K, v) {
				var m = null;
				return U === "password" ? m = "Passwords cannot be submitted." : M.attr("required") ? v ? d.test(M.attr("type")) && (E.test(v) || (m = "Please enter a valid email address for: " + K)) : m = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !v && (m = "Please confirm you\u2019re not a robot."), m
			}

			function X(M) {
				F(M), D(M)
			}

			function I(M) {
				q(M);
				var U = M.form,
					K = {};
				if (/^https/.test(i.href) && !/^https/.test(M.action)) {
					U.attr("method", "post");
					return
				}
				F(M);
				var v = V(U, K);
				if (v) return f(v);
				P(M);
				var m;
				t.each(K, function(Y, J) {
					d.test(J) && (K.EMAIL = Y), /^((full[ _-]?)?name)$/i.test(J) && (m = Y), /^(first[ _-]?name)$/i.test(J) && (K.FNAME = Y), /^(last[ _-]?name)$/i.test(J) && (K.LNAME = Y)
				}), m && !K.FNAME && (m = m.split(" "), K.FNAME = m[0], K.LNAME = K.LNAME || m[1]);
				var B = M.action.replace("/post?", "/post-json?") + "&c=?",
					ee = B.indexOf("u=") + 2;
				ee = B.substring(ee, B.indexOf("&", ee));
				var ie = B.indexOf("id=") + 3;
				ie = B.substring(ie, B.indexOf("&", ie)), K["b_" + ee + "_" + ie] = "", e.ajax({
					url: B,
					data: K,
					dataType: "jsonp"
				}).done(function(Y) {
					M.success = Y.result === "success" || /already/.test(Y.msg), M.success || console.info("MailChimp error: " + Y.msg), D(M)
				}).fail(function() {
					D(M)
				})
			}

			function D(M) {
				var U = M.form,
					K = M.redirect,
					v = M.success;
				if (v && K) {
					Gi.location(K);
					return
				}
				M.done.toggle(v), M.fail.toggle(!v), v ? M.done.focus() : M.fail.focus(), U.toggle(!v), q(M)
			}

			function F(M) {
				M.evt && M.evt.preventDefault(), M.evt = null
			}

			function G(M, U) {
				if (!U.fileUploads || !U.fileUploads[M]) return;
				var K, v = e(U.fileUploads[M]),
					m = v.find("> .w-file-upload-default"),
					B = v.find("> .w-file-upload-uploading"),
					ee = v.find("> .w-file-upload-success"),
					ie = v.find("> .w-file-upload-error"),
					Y = m.find(".w-file-upload-input"),
					J = m.find(".w-file-upload-label"),
					Oe = J.children(),
					fe = ie.find(".w-file-upload-error-msg"),
					h = ee.find(".w-file-upload-file"),
					W = ee.find(".w-file-remove-link"),
					z = h.find(".w-file-upload-file-name"),
					j = fe.attr("data-w-size-error"),
					ve = fe.attr("data-w-type-error"),
					Ye = fe.attr("data-w-generic-error");
				if (_ || J.on("click keydown", function(T) {
						T.type === "keydown" && T.which !== 13 && T.which !== 32 || (T.preventDefault(), Y.click())
					}), J.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), _) Y.on("click", function(T) {
					T.preventDefault()
				}), J.on("click", function(T) {
					T.preventDefault()
				}), Oe.on("click", function(T) {
					T.preventDefault()
				});
				else {
					W.on("click keydown", function(T) {
						if (T.type === "keydown") {
							if (T.which !== 13 && T.which !== 32) return;
							T.preventDefault()
						}
						Y.removeAttr("data-value"), Y.val(""), z.html(""), m.toggle(!0), ee.toggle(!1), J.focus()
					}), Y.on("change", function(T) {
						K = T.target && T.target.files && T.target.files[0], K && (m.toggle(!1), ie.toggle(!1), B.toggle(!0), B.focus(), z.text(K.name), w() || P(U), U.fileUploads[M].uploading = !0, $(K, y))
					});
					var Ve = J.outerHeight();
					Y.height(Ve), Y.width(1)
				}

				function l(T) {
					var C = T.responseJSON && T.responseJSON.msg,
						Z = Ye;
					typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0 ? Z = ve : typeof C == "string" && C.indexOf("MaxFileSizeError") === 0 && (Z = j), fe.text(Z), Y.removeAttr("data-value"), Y.val(""), B.toggle(!1), m.toggle(!0), ie.toggle(!0), ie.focus(), U.fileUploads[M].uploading = !1, w() || q(U)
				}

				function y(T, C) {
					if (T) return l(T);
					var Z = C.fileName,
						ae = C.postData,
						_e = C.fileId,
						H = C.s3Url;
					Y.attr("data-value", _e), ne(H, ae, K, Z, b)
				}

				function b(T) {
					if (T) return l(T);
					B.toggle(!1), ee.css("display", "inline-block"), ee.focus(), U.fileUploads[M].uploading = !1, w() || q(U)
				}

				function w() {
					var T = U.fileUploads && U.fileUploads.toArray() || [];
					return T.some(function(C) {
						return C.uploading
					})
				}
			}

			function $(M, U) {
				var K = new URLSearchParams({
					name: M.name,
					size: M.size
				});
				e.ajax({
					type: "GET",
					url: `${O}?${K}`,
					crossDomain: !0
				}).done(function(v) {
					U(null, v)
				}).fail(function(v) {
					U(v)
				})
			}

			function ne(M, U, K, v, m) {
				var B = new FormData;
				for (var ee in U) B.append(ee, U[ee]);
				B.append("file", K, v), e.ajax({
					type: "POST",
					url: M,
					data: B,
					processData: !1,
					contentType: !1
				}).done(function() {
					m(null)
				}).fail(function(ie) {
					m(ie)
				})
			}
			return r
		})
	});
	var Em = u((DK, gm) => {
		var Os = ke(),
			hm = "w-condition-invisible",
			RW = "." + hm;

		function CW(e) {
			return e.filter(function(t) {
				return !sn(t)
			})
		}

		function sn(e) {
			return !!(e.$el && e.$el.closest(RW).length)
		}

		function bs(e, t) {
			for (var r = e; r >= 0; r--)
				if (!sn(t[r])) return r;
			return -1
		}

		function Ss(e, t) {
			for (var r = e; r <= t.length - 1; r++)
				if (!sn(t[r])) return r;
			return -1
		}

		function xW(e, t) {
			return bs(e - 1, t) === -1
		}

		function NW(e, t) {
			return Ss(e + 1, t) === -1
		}

		function an(e, t) {
			e.attr("aria-label") || e.attr("aria-label", t)
		}

		function qW(e, t, r, n) {
			var o = r.tram,
				i = Array.isArray,
				a = "w-lightbox",
				s = a + "-",
				c = /(^|\s+)/g,
				d = [],
				E, f, _, p = [];

			function g(v, m) {
				return d = i(v) ? v : [v], f || g.build(), CW(d).length > 1 && (f.items = f.empty, d.forEach(function(B, ee) {
					var ie = U("thumbnail"),
						Y = U("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(ie);
					an(Y, `show item ${ee+1} of ${d.length}`), sn(B) && Y.addClass(hm), f.items = f.items.add(Y), oe(B.thumbnailUrl || B.url, function(J) {
						J.prop("width") > J.prop("height") ? G(J, "wide") : G(J, "tall"), ie.append(G(J, "thumbnail-image"))
					})
				}), f.strip.empty().append(f.items), G(f.content, "group")), o($(f.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
					opacity: 1
				}), G(f.html, "noscroll"), g.show(m || 0)
			}
			g.build = function() {
				return g.destroy(), f = {
					html: r(t.documentElement),
					empty: r()
				}, f.arrowLeft = U("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.arrowRight = U("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.close = U("control close").attr("role", "button"), an(f.arrowLeft, "previous image"), an(f.arrowRight, "next image"), an(f.close, "close lightbox"), f.spinner = U("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), f.strip = U("strip").attr("role", "tablist"), _ = new I(f.spinner, D("hide")), f.content = U("content").append(f.spinner, f.arrowLeft, f.arrowRight, f.close), f.container = U("container").append(f.content, f.strip), f.lightbox = U("backdrop hide").append(f.container), f.strip.on("click", F("item"), S), f.content.on("swipe", L).on("click", F("left"), R).on("click", F("right"), A).on("click", F("close"), x).on("click", F("image, caption"), A), f.container.on("click", F("view"), x).on("dragstart", F("img"), P), f.lightbox.on("keydown", V).on("focusin", q), r(n).append(f.lightbox), g
			}, g.destroy = function() {
				f && ($(f.html, "noscroll"), f.lightbox.remove(), f = void 0)
			}, g.show = function(v) {
				if (v !== E) {
					var m = d[v];
					if (!m) return g.hide();
					if (sn(m)) {
						if (v < E) {
							var B = bs(v - 1, d);
							v = B > -1 ? B : v
						} else {
							var ee = Ss(v + 1, d);
							v = ee > -1 ? ee : v
						}
						m = d[v]
					}
					var ie = E;
					E = v, f.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), _.show();
					var Y = m.html && K(m.width, m.height) || m.url;
					return oe(Y, function(J) {
						if (v !== E) return;
						var Oe = U("figure", "figure").append(G(J, "image")),
							fe = U("frame").append(Oe),
							h = U("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(fe),
							W, z;
						m.html && (W = r(m.html), z = W.is("iframe"), z && W.on("load", j), Oe.append(G(W, "embed"))), m.caption && Oe.append(U("caption", "figcaption").text(m.caption)), f.spinner.before(h), z || j();

						function j() {
							if (f.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), _.hide(), v !== E) {
								h.remove();
								return
							}
							let ve = xW(v, d);
							ne(f.arrowLeft, "inactive", ve), M(f.arrowLeft, ve), ve && f.arrowLeft.is(":focus") && f.arrowRight.focus();
							let Ye = NW(v, d);
							if (ne(f.arrowRight, "inactive", Ye), M(f.arrowRight, Ye), Ye && f.arrowRight.is(":focus") && f.arrowLeft.focus(), f.view ? (o(f.view).add("opacity .3s").start({
									opacity: 0
								}).then(re(f.view)), o(h).add("opacity .3s").add("transform .3s").set({
									x: v > ie ? "80px" : "-80px"
								}).start({
									opacity: 1,
									x: 0
								})) : h.css("opacity", 1), f.view = h, f.view.prop("tabIndex", 0), f.items) {
								$(f.items, "active"), f.items.removeAttr("aria-selected");
								var Ve = f.items.eq(v);
								G(Ve, "active"), Ve.attr("aria-selected", !0), X(Ve)
							}
						}
					}), f.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), p.length === 0 && (r("body").children().each(function() {
						r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (p.push({
							node: r(this),
							hidden: r(this).attr("aria-hidden"),
							tabIndex: r(this).attr("tabIndex")
						}), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
					}), f.close.focus()), g
				}
			}, g.hide = function() {
				return o(f.lightbox).add("opacity .3s").start({
					opacity: 0
				}).then(Q), g
			}, g.prev = function() {
				var v = bs(E - 1, d);
				v > -1 && g.show(v)
			}, g.next = function() {
				var v = Ss(E + 1, d);
				v > -1 && g.show(v)
			};

			function O(v) {
				return function(m) {
					this === m.target && (m.stopPropagation(), m.preventDefault(), v())
				}
			}
			var R = O(g.prev),
				A = O(g.next),
				x = O(g.hide),
				S = function(v) {
					var m = r(this).index();
					v.preventDefault(), g.show(m)
				},
				L = function(v, m) {
					v.preventDefault(), m.direction === "left" ? g.next() : m.direction === "right" && g.prev()
				},
				q = function() {
					this.focus()
				};

			function P(v) {
				v.preventDefault()
			}

			function V(v) {
				var m = v.keyCode;
				m === 27 || k(m, "close") ? g.hide() : m === 37 || k(m, "left") ? g.prev() : m === 39 || k(m, "right") ? g.next() : k(m, "item") && r(":focus").click()
			}

			function k(v, m) {
				if (v !== 13 && v !== 32) return !1;
				var B = r(":focus").attr("class"),
					ee = D(m).trim();
				return B.includes(ee)
			}

			function Q() {
				f && (f.strip.scrollLeft(0).empty(), $(f.html, "noscroll"), G(f.lightbox, "hide"), f.view && f.view.remove(), $(f.content, "group"), G(f.arrowLeft, "inactive"), G(f.arrowRight, "inactive"), E = f.view = void 0, p.forEach(function(v) {
					var m = v.node;
					m && (v.hidden ? m.attr("aria-hidden", v.hidden) : m.removeAttr("aria-hidden"), v.tabIndex ? m.attr("tabIndex", v.tabIndex) : m.removeAttr("tabIndex"))
				}), p = [], r(".active-lightbox").removeClass("active-lightbox").focus())
			}

			function oe(v, m) {
				var B = U("img", "img");
				return B.one("load", function() {
					m(B)
				}), B.attr("src", v), B
			}

			function re(v) {
				return function() {
					v.remove()
				}
			}

			function X(v) {
				var m = v.get(0),
					B = f.strip.get(0),
					ee = m.offsetLeft,
					ie = m.clientWidth,
					Y = B.scrollLeft,
					J = B.clientWidth,
					Oe = B.scrollWidth - J,
					fe;
				ee < Y ? fe = Math.max(0, ee + ie - J) : ee + ie > J + Y && (fe = Math.min(ee, Oe)), fe != null && o(f.strip).add("scroll-left 500ms").start({
					"scroll-left": fe
				})
			}

			function I(v, m, B) {
				this.$element = v, this.className = m, this.delay = B || 200, this.hide()
			}
			I.prototype.show = function() {
				var v = this;
				v.timeoutId || (v.timeoutId = setTimeout(function() {
					v.$element.removeClass(v.className), delete v.timeoutId
				}, v.delay))
			}, I.prototype.hide = function() {
				var v = this;
				if (v.timeoutId) {
					clearTimeout(v.timeoutId), delete v.timeoutId;
					return
				}
				v.$element.addClass(v.className)
			};

			function D(v, m) {
				return v.replace(c, (m ? " ." : " ") + s)
			}

			function F(v) {
				return D(v, !0)
			}

			function G(v, m) {
				return v.addClass(D(m))
			}

			function $(v, m) {
				return v.removeClass(D(m))
			}

			function ne(v, m, B) {
				return v.toggleClass(D(m), B)
			}

			function M(v, m) {
				return v.attr("aria-hidden", m).attr("tabIndex", m ? -1 : 0)
			}

			function U(v, m) {
				return G(r(t.createElement(m || "div")), v)
			}

			function K(v, m) {
				var B = '<svg xmlns="http://www.w3.org/2000/svg" width="' + v + '" height="' + m + '"/>';
				return "data:image/svg+xml;charset=utf-8," + encodeURI(B)
			}
			return function() {
				var v = e.navigator.userAgent,
					m = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
					B = v.match(m),
					ee = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
				if (!ee && (!B || B[2] > 7)) return;
				var ie = t.createElement("style");
				t.head.appendChild(ie), e.addEventListener("resize", Y, !0);

				function Y() {
					var J = e.innerHeight,
						Oe = e.innerWidth,
						fe = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + J + "px}.w-lightbox-view {width:" + Oe + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * J + "px}.w-lightbox-image {max-width:" + Oe + "px;max-height:" + J + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * J + "px}.w-lightbox-strip {padding: 0 " + .01 * J + "px}.w-lightbox-item {width:" + .1 * J + "px;padding:" + .02 * J + "px " + .01 * J + "px}.w-lightbox-thumbnail {height:" + .1 * J + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * J + "px}.w-lightbox-content {margin-top:" + .02 * J + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * J + "px}.w-lightbox-image {max-width:" + .96 * Oe + "px;max-height:" + .96 * J + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * Oe + "px;max-height:" + .84 * J + "px}}";
					ie.textContent = fe
				}
				Y()
			}(), g
		}
		Os.define("lightbox", gm.exports = function(e) {
			var t = {},
				r = Os.env(),
				n = qW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
				o = e(document),
				i, a, s = ".w-lightbox",
				c;
			t.ready = t.design = t.preview = d;

			function d() {
				a = r && Os.env("design"), n.destroy(), c = {}, i = o.find(s), i.webflowLightBox(), i.each(function() {
					an(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
				})
			}
			jQuery.fn.extend({
				webflowLightBox: function() {
					var p = this;
					e.each(p, function(g, O) {
						var R = e.data(O, s);
						R || (R = e.data(O, s, {
							el: e(O),
							mode: "images",
							images: [],
							embed: ""
						})), R.el.off(s), E(R), a ? R.el.on("setting" + s, E.bind(null, R)) : R.el.on("click" + s, f(R)).on("click" + s, function(A) {
							A.preventDefault()
						})
					})
				}
			});

			function E(p) {
				var g = p.el.children(".w-json").html(),
					O, R;
				if (!g) {
					p.items = [];
					return
				}
				try {
					g = JSON.parse(g)
				} catch (A) {
					console.error("Malformed lightbox JSON configuration.", A)
				}
				_(g), g.items.forEach(function(A) {
					A.$el = p.el
				}), O = g.group, O ? (R = c[O], R || (R = c[O] = []), p.items = R, g.items.length && (p.index = R.length, R.push.apply(R, g.items))) : (p.items = g.items, p.index = 0)
			}

			function f(p) {
				return function() {
					p.items.length && n(p.items, p.index || 0)
				}
			}

			function _(p) {
				p.images && (p.images.forEach(function(g) {
					g.type = "image"
				}), p.items = p.images), p.embed && (p.embed.type = "video", p.items = [p.embed]), p.groupId && (p.group = p.groupId)
			}
			return t
		})
	});
	var ym = u((MK, _m) => {
		var qt = ke(),
			LW = Ki(),
			De = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		qt.define("navbar", _m.exports = function(e, t) {
			var r = {},
				n = e.tram,
				o = e(window),
				i = e(document),
				a = t.debounce,
				s, c, d, E, f = qt.env(),
				_ = '<div class="w-nav-overlay" data-wf-ignore />',
				p = ".w-nav",
				g = "w--open",
				O = "w--nav-dropdown-open",
				R = "w--nav-dropdown-toggle-open",
				A = "w--nav-dropdown-list-open",
				x = "w--nav-link-open",
				S = LW.triggers,
				L = e();
			r.ready = r.design = r.preview = q, r.destroy = function() {
				L = e(), P(), c && c.length && c.each(oe)
			};

			function q() {
				d = f && qt.env("design"), E = qt.env("editor"), s = e(document.body), c = i.find(p), c.length && (c.each(Q), P(), V())
			}

			function P() {
				qt.resize.off(k)
			}

			function V() {
				qt.resize.on(k)
			}

			function k() {
				c.each(m)
			}

			function Q(h, W) {
				var z = e(W),
					j = e.data(W, p);
				j || (j = e.data(W, p, {
					open: !1,
					el: z,
					config: {},
					selectedIdx: -1
				})), j.menu = z.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = z.find(".w-nav-button"), j.container = z.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + h, j.outside = K(j);
				var ve = z.find(".w-nav-brand");
				ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(p), j.button.off(p), j.menu.off(p), I(j), d ? (re(j), j.el.on("setting" + p, D(j))) : (X(j), j.button.on("click" + p, M(j)), j.menu.on("click" + p, "a", U(j)), j.button.on("keydown" + p, F(j)), j.el.on("keydown" + p, G(j))), m(h, W)
			}

			function oe(h, W) {
				var z = e.data(W, p);
				z && (re(z), e.removeData(W, p))
			}

			function re(h) {
				h.overlay && (fe(h, !0), h.overlay.remove(), h.overlay = null)
			}

			function X(h) {
				h.overlay || (h.overlay = e(_).appendTo(h.el), h.overlay.attr("id", h.overlayContainerId), h.parent = h.menu.parent(), fe(h, !0))
			}

			function I(h) {
				var W = {},
					z = h.config || {},
					j = W.animation = h.el.attr("data-animation") || "default";
				W.animOver = /^over/.test(j), W.animDirect = /left$/.test(j) ? -1 : 1, z.animation !== j && h.open && t.defer(ne, h), W.easing = h.el.attr("data-easing") || "ease", W.easing2 = h.el.attr("data-easing2") || "ease";
				var ve = h.el.attr("data-duration");
				W.duration = ve != null ? Number(ve) : 400, W.docHeight = h.el.attr("data-doc-height"), h.config = W
			}

			function D(h) {
				return function(W, z) {
					z = z || {};
					var j = o.width();
					I(h), z.open === !0 && J(h, !0), z.open === !1 && fe(h, !0), h.open && t.defer(function() {
						j !== o.width() && ne(h)
					})
				}
			}

			function F(h) {
				return function(W) {
					switch (W.keyCode) {
						case De.SPACE:
						case De.ENTER:
							return M(h)(), W.preventDefault(), W.stopPropagation();
						case De.ESCAPE:
							return fe(h), W.preventDefault(), W.stopPropagation();
						case De.ARROW_RIGHT:
						case De.ARROW_DOWN:
						case De.HOME:
						case De.END:
							return h.open ? (W.keyCode === De.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, $(h), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation())
					}
				}
			}

			function G(h) {
				return function(W) {
					if (h.open) switch (h.selectedIdx = h.links.index(document.activeElement), W.keyCode) {
						case De.HOME:
						case De.END:
							return W.keyCode === De.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, $(h), W.preventDefault(), W.stopPropagation();
						case De.ESCAPE:
							return fe(h), h.button.focus(), W.preventDefault(), W.stopPropagation();
						case De.ARROW_LEFT:
						case De.ARROW_UP:
							return h.selectedIdx = Math.max(-1, h.selectedIdx - 1), $(h), W.preventDefault(), W.stopPropagation();
						case De.ARROW_RIGHT:
						case De.ARROW_DOWN:
							return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1), $(h), W.preventDefault(), W.stopPropagation()
					}
				}
			}

			function $(h) {
				if (h.links[h.selectedIdx]) {
					var W = h.links[h.selectedIdx];
					W.focus(), U(W)
				}
			}

			function ne(h) {
				h.open && (fe(h, !0), J(h, !0))
			}

			function M(h) {
				return a(function() {
					h.open ? fe(h) : J(h)
				})
			}

			function U(h) {
				return function(W) {
					var z = e(this),
						j = z.attr("href");
					if (!qt.validClick(W.currentTarget)) {
						W.preventDefault();
						return
					}
					j && j.indexOf("#") === 0 && h.open && fe(h)
				}
			}

			function K(h) {
				return h.outside && i.off("click" + p, h.outside),
					function(W) {
						var z = e(W.target);
						E && z.closest(".w-editor-bem-EditorOverlay").length || v(h, z)
					}
			}
			var v = a(function(h, W) {
				if (h.open) {
					var z = W.closest(".w-nav-menu");
					h.menu.is(z) || fe(h)
				}
			});

			function m(h, W) {
				var z = e.data(W, p),
					j = z.collapsed = z.button.css("display") !== "none";
				if (z.open && !j && !d && fe(z, !0), z.container.length) {
					var ve = ee(z);
					z.links.each(ve), z.dropdowns.each(ve)
				}
				z.open && Oe(z)
			}
			var B = "max-width";

			function ee(h) {
				var W = h.container.css(B);
				return W === "none" && (W = ""),
					function(z, j) {
						j = e(j), j.css(B, ""), j.css(B) === "none" && j.css(B, W)
					}
			}

			function ie(h, W) {
				W.setAttribute("data-nav-menu-open", "")
			}

			function Y(h, W) {
				W.removeAttribute("data-nav-menu-open")
			}

			function J(h, W) {
				if (h.open) return;
				h.open = !0, h.menu.each(ie), h.links.addClass(x), h.dropdowns.addClass(O), h.dropdownToggle.addClass(R), h.dropdownList.addClass(A), h.button.addClass(g);
				var z = h.config,
					j = z.animation;
				(j === "none" || !n.support.transform || z.duration <= 0) && (W = !0);
				var ve = Oe(h),
					Ye = h.menu.outerHeight(!0),
					Ve = h.menu.outerWidth(!0),
					l = h.el.height(),
					y = h.el[0];
				if (m(0, y), S.intro(0, y), qt.redraw.up(), d || i.on("click" + p, h.outside), W) {
					T();
					return
				}
				var b = "transform " + z.duration + "ms " + z.easing;
				if (h.overlay && (L = h.menu.prev(), h.overlay.show().append(h.menu)), z.animOver) {
					n(h.menu).add(b).set({
						x: z.animDirect * Ve,
						height: ve
					}).start({
						x: 0
					}).then(T), h.overlay && h.overlay.width(Ve);
					return
				}
				var w = l + Ye;
				n(h.menu).add(b).set({
					y: -w
				}).start({
					y: 0
				}).then(T);

				function T() {
					h.button.attr("aria-expanded", "true")
				}
			}

			function Oe(h) {
				var W = h.config,
					z = W.docHeight ? i.height() : s.height();
				return W.animOver ? h.menu.height(z) : h.el.css("position") !== "fixed" && (z -= h.el.outerHeight(!0)), h.overlay && h.overlay.height(z), z
			}

			function fe(h, W) {
				if (!h.open) return;
				h.open = !1, h.button.removeClass(g);
				var z = h.config;
				if ((z.animation === "none" || !n.support.transform || z.duration <= 0) && (W = !0), S.outro(0, h.el[0]), i.off("click" + p, h.outside), W) {
					n(h.menu).stop(), y();
					return
				}
				var j = "transform " + z.duration + "ms " + z.easing2,
					ve = h.menu.outerHeight(!0),
					Ye = h.menu.outerWidth(!0),
					Ve = h.el.height();
				if (z.animOver) {
					n(h.menu).add(j).start({
						x: Ye * z.animDirect
					}).then(y);
					return
				}
				var l = Ve + ve;
				n(h.menu).add(j).start({
					y: -l
				}).then(y);

				function y() {
					h.menu.height(""), n(h.menu).set({
						x: 0,
						y: 0
					}), h.menu.each(Y), h.links.removeClass(x), h.dropdowns.removeClass(O), h.dropdownToggle.removeClass(R), h.dropdownList.removeClass(A), h.overlay && h.overlay.children().length && (L.length ? h.menu.insertAfter(L) : h.menu.prependTo(h.parent), h.overlay.attr("style", "").hide()), h.el.triggerHandler("w-close"), h.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	Gs();
	Us();
	Ws();
	js();
	Ki();
	om();
	sm();
	cm();
	fm();
	vm();
	Em();
	ym();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e": {
			"id": "e",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-2"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".fade-in-on-scroll",
				"originalId": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".fade-in-on-scroll",
				"originalId": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1659003967481
		},
		"e-3": {
			"id": "e-3",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-4"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64b54d013e0854114a63f209",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64b54d013e0854114a63f209",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675625338673
		},
		"e-4": {
			"id": "e-4",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-3"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64b54d013e0854114a63f209",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64b54d013e0854114a63f209",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675625338674
		},
		"e-12": {
			"id": "e-12",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-13"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".featured-logo-wrapper",
				"originalId": "64b54d013e0854114a63f209|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".featured-logo-wrapper",
				"originalId": "64b54d013e0854114a63f209|54cfcadb-e8d1-3fdf-1592-7c88d740b00e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681124152
		},
		"e-14": {
			"id": "e-14",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-15"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".title-container",
				"originalId": "64b54d013e0854114a63f209|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".title-container",
				"originalId": "64b54d013e0854114a63f209|1c29725b-cf9e-a49d-7d7c-ccc70a12802d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681132576
		},
		"e-16": {
			"id": "e-16",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-17"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".paragraph-holder",
				"originalId": "64b54d013e0854114a63f209|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".paragraph-holder",
				"originalId": "64b54d013e0854114a63f209|3bb9b8e4-b80e-0d2a-22f1-52ccfe3b118d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681138517
		},
		"e-18": {
			"id": "e-18",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-71"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-tag-holder",
				"originalId": "64b54d013e0854114a63f209|ede77518-7561-2248-c811-452853b87491",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-tag-holder",
				"originalId": "64b54d013e0854114a63f209|ede77518-7561-2248-c811-452853b87491",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681172353
		},
		"e-20": {
			"id": "e-20",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-74"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-title-holder",
				"originalId": "64b54d013e0854114a63f209|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-title-holder",
				"originalId": "64b54d013e0854114a63f209|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681177413
		},
		"e-22": {
			"id": "e-22",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-23"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-paraghaph-holder",
				"originalId": "64b54d013e0854114a63f209|4c9c4307-106c-be6d-738d-d09730864a25",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-paraghaph-holder",
				"originalId": "64b54d013e0854114a63f209|4c9c4307-106c-be6d-738d-d09730864a25",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681183879
		},
		"e-24": {
			"id": "e-24",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-25"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-button-holder",
				"originalId": "64b54d013e0854114a63f209|2fd1adc7-a016-60a8-e041-af5290c334ea",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-button-holder",
				"originalId": "64b54d013e0854114a63f209|2fd1adc7-a016-60a8-e041-af5290c334ea",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681189281
		},
		"e-26": {
			"id": "e-26",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-27"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-card",
				"originalId": "64b54d013e0854114a63f209|833516a5-bfbd-1c0e-23af-a37ca5005d88",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-card",
				"originalId": "64b54d013e0854114a63f209|833516a5-bfbd-1c0e-23af-a37ca5005d88",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 26,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681443120
		},
		"e-38": {
			"id": "e-38",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-39"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-card-container",
				"originalId": "64b54d013e0854114a63f209|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-card-container",
				"originalId": "64b54d013e0854114a63f209|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682286578
		},
		"e-39": {
			"id": "e-39",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-38"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-card-container",
				"originalId": "64b54d013e0854114a63f209|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-card-container",
				"originalId": "64b54d013e0854114a63f209|6da3ade3-b649-801b-3fbf-daf0c9d43575",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682286579
		},
		"e-40": {
			"id": "e-40",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-41"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-heading",
				"originalId": "64b54d013e0854114a63f209|93d70ad6-7625-200b-5dfd-bd850990f3fd",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-heading",
				"originalId": "64b54d013e0854114a63f209|93d70ad6-7625-200b-5dfd-bd850990f3fd",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682408849
		},
		"e-42": {
			"id": "e-42",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-43"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".power-feature-paragraph",
				"originalId": "64b54d013e0854114a63f209|44c6d9db-29c3-2396-72c1-32492179481b",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".power-feature-paragraph",
				"originalId": "64b54d013e0854114a63f209|44c6d9db-29c3-2396-72c1-32492179481b",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 7,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675682414336
		},
		"e-44": {
			"id": "e-44",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SLIDER_ACTIVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-45"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".testimonial-slide",
				"originalId": "64b54d013e0854114a63f209|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".testimonial-slide",
				"originalId": "64b54d013e0854114a63f209|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693241987
		},
		"e-45": {
			"id": "e-45",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SLIDER_INACTIVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-11",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-44"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".testimonial-slide",
				"originalId": "64b54d013e0854114a63f209|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".testimonial-slide",
				"originalId": "64b54d013e0854114a63f209|9caa43ce-857a-0efc-d0a2-dd4cbaeb7bae",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693241987
		},
		"e-46": {
			"id": "e-46",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-47"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".checked-list-holder",
				"originalId": "64b54d013e0854114a63f209|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".checked-list-holder",
				"originalId": "64b54d013e0854114a63f209|4b914be7-8f9c-d8a1-d12c-9672f1ebf313",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693928036
		},
		"e-48": {
			"id": "e-48",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-49"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-footer-holder",
				"originalId": "64b54d013e0854114a63f209|4fbcff52-53ec-c681-6c72-16023f59cb28",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-footer-holder",
				"originalId": "64b54d013e0854114a63f209|4fbcff52-53ec-c681-6c72-16023f59cb28",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693935174
		},
		"e-50": {
			"id": "e-50",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-51"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-list-holder",
				"originalId": "64b54d013e0854114a63f209|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-list-holder",
				"originalId": "64b54d013e0854114a63f209|be005dbd-a7e9-0a25-7511-6cc26b3985cb",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693940977
		},
		"e-52": {
			"id": "e-52",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-53"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-header",
				"originalId": "64b54d013e0854114a63f209|e304e7a6-8278-db59-7b91-6f2a88c134da",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-header",
				"originalId": "64b54d013e0854114a63f209|e304e7a6-8278-db59-7b91-6f2a88c134da",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693947082
		},
		"e-54": {
			"id": "e-54",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-55"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".pricing-tag",
				"originalId": "64b54d013e0854114a63f209|e24521b3-dd2e-36c7-294f-c709844f83f2",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".pricing-tag",
				"originalId": "64b54d013e0854114a63f209|e24521b3-dd2e-36c7-294f-c709844f83f2",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675693951690
		},
		"e-59": {
			"id": "e-59",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-2",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-60"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".headings-container",
				"originalId": "64b54d013e0854114a63f209|825aa981-34a0-ca9b-1f22-f91bdb954e15",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".headings-container",
				"originalId": "64b54d013e0854114a63f209|825aa981-34a0-ca9b-1f22-f91bdb954e15",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678042978669
		},
		"e-61": {
			"id": "e-61",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-62"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".card-holder",
				"originalId": "64b54d013e0854114a63f209|9ae44d69-f489-1c4d-93b3-89a31dc8ae9d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".card-holder",
				"originalId": "64b54d013e0854114a63f209|9ae44d69-f489-1c4d-93b3-89a31dc8ae9d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678043035769
		},
		"e-63": {
			"id": "e-63",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-64"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".title-paragraph-holder",
				"originalId": "64b54d013e0854114a63f209|ddac020f-7680-6d01-4636-de17c3594ea9",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".title-paragraph-holder",
				"originalId": "64b54d013e0854114a63f209|ddac020f-7680-6d01-4636-de17c3594ea9",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678043043969
		},
		"e-67": {
			"id": "e-67",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-68"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".app-feature-holder",
				"originalId": "64b54d013e0854114a63f209|996178db-a972-cebb-ccbc-5db4aa674120",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".app-feature-holder",
				"originalId": "64b54d013e0854114a63f209|996178db-a972-cebb-ccbc-5db4aa674120",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678043106450
		},
		"e-69": {
			"id": "e-69",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-70"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".tabs",
				"originalId": "64b54d013e0854114a63f209|ce534a5b-8197-48d6-a2d7-61f12f7d922d",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".tabs",
				"originalId": "64b54d013e0854114a63f209|ce534a5b-8197-48d6-a2d7-61f12f7d922d",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1678051214559
		},
		"e-72": {
			"id": "e-72",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-71"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-tag-holder-2",
				"originalId": "646f9ec45231f3f815e8517d|ede77518-7561-2248-c811-452853b87491",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-tag-holder-2",
				"originalId": "646f9ec45231f3f815e8517d|ede77518-7561-2248-c811-452853b87491",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681172353
		},
		"e-73": {
			"id": "e-73",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-74"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".early-access-title",
				"originalId": "646f9ec45231f3f815e8517d|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".early-access-title",
				"originalId": "646f9ec45231f3f815e8517d|d9bdf272-db6d-e0cc-f5ce-12a3addc546c",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1675681177413
		},
		"e-75": {
			"id": "e-75",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-14",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64b54d013e0854114a63f209|0499f7db-fe78-413e-139f-8c12335cb944",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64b54d013e0854114a63f209|0499f7db-fe78-413e-139f-8c12335cb944",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-14-p",
				"smoothing": 83,
				"startsEntering": false,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1689761417165
		},
		"e-76": {
			"id": "e-76",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-77"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".super-feature-wrapper",
				"originalId": "64b54d013e0854114a63f209|c121971d-20ba-6a7b-1fdc-e2c5622b3d95",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".super-feature-wrapper",
				"originalId": "64b54d013e0854114a63f209|c121971d-20ba-6a7b-1fdc-e2c5622b3d95",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689761528946
		},
		"e-77": {
			"id": "e-77",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-76"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".super-feature-wrapper",
				"originalId": "64b54d013e0854114a63f209|c121971d-20ba-6a7b-1fdc-e2c5622b3d95",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".super-feature-wrapper",
				"originalId": "64b54d013e0854114a63f209|c121971d-20ba-6a7b-1fdc-e2c5622b3d95",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689761528947
		},
		"e-78": {
			"id": "e-78",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-79"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".super-feature-icon-holder",
				"originalId": "64b54d013e0854114a63f209|480a47fa-ad9c-c31b-cb53-83b6d7fd844e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".super-feature-icon-holder",
				"originalId": "64b54d013e0854114a63f209|480a47fa-ad9c-c31b-cb53-83b6d7fd844e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689761737074
		},
		"e-80": {
			"id": "e-80",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-17",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "64b54d013e0854114a63f209|8cb58504-6a72-ba35-38b9-18bd58ad65b3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "64b54d013e0854114a63f209|8cb58504-6a72-ba35-38b9-18bd58ad65b3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-17-p",
				"smoothing": 93,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1689761884566
		},
		"e-81": {
			"id": "e-81",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-18",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".experience-cards",
				"originalId": "64b54d013e0854114a63f209|7fc0a55f-081a-f761-f561-d9772a88188f",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".experience-cards",
				"originalId": "64b54d013e0854114a63f209|7fc0a55f-081a-f761-f561-d9772a88188f",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-18-p",
				"smoothing": 93,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1689762170678
		},
		"e-82": {
			"id": "e-82",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-83"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".icon-bullet-points-container",
				"originalId": "64b54d013e0854114a63f209|d734aa2a-7fe7-cc02-9971-999861921e61",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".icon-bullet-points-container",
				"originalId": "64b54d013e0854114a63f209|d734aa2a-7fe7-cc02-9971-999861921e61",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689762452867
		},
		"e-84": {
			"id": "e-84",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-85"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".blog-grid-item",
				"originalId": "64b54d013e0854114a63f209|e616907c-1973-1f8c-69fb-596bd239a532",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".blog-grid-item",
				"originalId": "64b54d013e0854114a63f209|e616907c-1973-1f8c-69fb-596bd239a532",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689764770870
		},
		"e-86": {
			"id": "e-86",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-87"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".blog-item",
				"originalId": "64b54d013e0854114a63f209|3ebf3ee9-a5ed-2ca7-8e3e-baa52f5c3887",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".blog-item",
				"originalId": "64b54d013e0854114a63f209|3ebf3ee9-a5ed-2ca7-8e3e-baa52f5c3887",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689764789175
		},
		"e-87": {
			"id": "e-87",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-86"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".blog-item",
				"originalId": "64b54d013e0854114a63f209|3ebf3ee9-a5ed-2ca7-8e3e-baa52f5c3887",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".blog-item",
				"originalId": "64b54d013e0854114a63f209|3ebf3ee9-a5ed-2ca7-8e3e-baa52f5c3887",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689764789204
		},
		"e-88": {
			"id": "e-88",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "NAVBAR_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-89"
				}
			},
			"mediaQueries": ["small", "tiny"],
			"target": {
				"selector": ".navbar",
				"originalId": "5b8980e8-1aac-0fb9-007a-88b6bbb23628",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".navbar",
				"originalId": "5b8980e8-1aac-0fb9-007a-88b6bbb23628",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689769914100
		},
		"e-89": {
			"id": "e-89",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "NAVBAR_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-22",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-88"
				}
			},
			"mediaQueries": ["small", "tiny"],
			"target": {
				"selector": ".navbar",
				"originalId": "5b8980e8-1aac-0fb9-007a-88b6bbb23628",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".navbar",
				"originalId": "5b8980e8-1aac-0fb9-007a-88b6bbb23628",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1689769914101
		}
	},
	"actionLists": {
		"a": {
			"id": "a",
			"title": "👁 Fade In On Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"yValue": 20,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 800,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 800,
						"target": {
							"useEventTarget": true,
							"id": "628f30d838105f7cb3ae8e71|454f8225-bb8a-57f8-70b9-84f4d3b4544e"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1659003970898
		},
		"a-2": {
			"id": "a-2",
			"title": "⏰Animate On Load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-2-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-01",
							"selectorGuids": ["6c9fb41e-8973-0267-9ade-b00e598db1a7"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-51",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-text-wrapper",
							"selectorGuids": ["21a38968-fe89-85e9-3c99-9ad1f10ee888"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-2-n-50",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-text-wrapper",
							"selectorGuids": ["21a38968-fe89-85e9-3c99-9ad1f10ee888"]
						},
						"yValue": 32,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-40",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".blur-image",
							"selectorGuids": ["0812b3c6-3b8b-bf73-a735-c13d504af138"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-39",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".blur-image",
							"selectorGuids": ["0812b3c6-3b8b-bf73-a735-c13d504af138"]
						},
						"xValue": 1.1,
						"yValue": 1.1,
						"locked": true
					}
				}, {
					"id": "a-2-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-01",
							"selectorGuids": ["6c9fb41e-8973-0267-9ade-b00e598db1a7"]
						},
						"xValue": -88,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-01",
							"selectorGuids": ["6c9fb41e-8973-0267-9ade-b00e598db1a7"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-02",
							"selectorGuids": ["7b2396f6-f859-f488-e011-6eb164a60f63"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-02",
							"selectorGuids": ["7b2396f6-f859-f488-e011-6eb164a60f63"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-5",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-02",
							"selectorGuids": ["7b2396f6-f859-f488-e011-6eb164a60f63"]
						},
						"xValue": -88,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-03",
							"selectorGuids": ["dc5f360f-646e-2e5e-b25d-c02db7c0cfaf"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-9",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-03",
							"selectorGuids": ["dc5f360f-646e-2e5e-b25d-c02db7c0cfaf"]
						},
						"xValue": -88,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-03",
							"selectorGuids": ["dc5f360f-646e-2e5e-b25d-c02db7c0cfaf"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-04",
							"selectorGuids": ["0beda69c-633b-3cd9-e272-4590526d00ca"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-04",
							"selectorGuids": ["0beda69c-633b-3cd9-e272-4590526d00ca"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-11",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-04",
							"selectorGuids": ["0beda69c-633b-3cd9-e272-4590526d00ca"]
						},
						"xValue": -88,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-05",
							"selectorGuids": ["cd9af58b-cd2e-8c5d-d9ac-6741979a7bf4"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-15",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-05",
							"selectorGuids": ["cd9af58b-cd2e-8c5d-d9ac-6741979a7bf4"]
						},
						"xValue": -88,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".text-animate-05",
							"selectorGuids": ["cd9af58b-cd2e-8c5d-d9ac-6741979a7bf4"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-31",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-paragraph-holder",
							"selectorGuids": ["c9afccf9-7f76-c49f-a9ce-f5e55f7e4794"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-33",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-paragraph-holder",
							"selectorGuids": ["c9afccf9-7f76-c49f-a9ce-f5e55f7e4794"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-34",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-buttons-holder",
							"selectorGuids": ["71c6729c-0b77-21e3-0f8d-07ad98985eab"]
						},
						"yValue": 36,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-35",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-buttons-holder",
							"selectorGuids": ["71c6729c-0b77-21e3-0f8d-07ad98985eab"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-36",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-app-container",
							"selectorGuids": ["eaa89df6-116a-c547-d628-6a3fd32124f9"]
						},
						"yValue": 300,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-37",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-app-container",
							"selectorGuids": ["eaa89df6-116a-c547-d628-6a3fd32124f9"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-2-n-38",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".news-section-holder",
							"selectorGuids": ["e4e3055f-8167-4cb2-1f72-86efcc3fc461"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-2-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-01",
							"selectorGuids": ["6c9fb41e-8973-0267-9ade-b00e598db1a7"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-18",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-01",
							"selectorGuids": ["6c9fb41e-8973-0267-9ade-b00e598db1a7"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-17",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-01",
							"selectorGuids": ["6c9fb41e-8973-0267-9ade-b00e598db1a7"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-47",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {
							"selector": ".blur-image",
							"selectorGuids": ["0812b3c6-3b8b-bf73-a735-c13d504af138"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-48",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {
							"selector": ".blur-image",
							"selectorGuids": ["0812b3c6-3b8b-bf73-a735-c13d504af138"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-2-n-52",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"selector": ".hero-text-wrapper",
							"selectorGuids": ["21a38968-fe89-85e9-3c99-9ad1f10ee888"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-2-n-53",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {
							"selector": ".hero-text-wrapper",
							"selectorGuids": ["21a38968-fe89-85e9-3c99-9ad1f10ee888"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-19",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-02",
							"selectorGuids": ["7b2396f6-f859-f488-e011-6eb164a60f63"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-21",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-02",
							"selectorGuids": ["7b2396f6-f859-f488-e011-6eb164a60f63"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-20",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 100,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-02",
							"selectorGuids": ["7b2396f6-f859-f488-e011-6eb164a60f63"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-23",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 200,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-03",
							"selectorGuids": ["dc5f360f-646e-2e5e-b25d-c02db7c0cfaf"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-22",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 200,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-03",
							"selectorGuids": ["dc5f360f-646e-2e5e-b25d-c02db7c0cfaf"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-24",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 200,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-03",
							"selectorGuids": ["dc5f360f-646e-2e5e-b25d-c02db7c0cfaf"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-25",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-04",
							"selectorGuids": ["0beda69c-633b-3cd9-e272-4590526d00ca"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-27",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 300,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-04",
							"selectorGuids": ["0beda69c-633b-3cd9-e272-4590526d00ca"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-26",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-04",
							"selectorGuids": ["0beda69c-633b-3cd9-e272-4590526d00ca"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-28",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 400,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-05",
							"selectorGuids": ["cd9af58b-cd2e-8c5d-d9ac-6741979a7bf4"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-30",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-05",
							"selectorGuids": ["cd9af58b-cd2e-8c5d-d9ac-6741979a7bf4"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-29",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 400,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".text-animate-05",
							"selectorGuids": ["cd9af58b-cd2e-8c5d-d9ac-6741979a7bf4"]
						},
						"xValue": 0,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-2-n-41",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".hero-paragraph-holder",
							"selectorGuids": ["c9afccf9-7f76-c49f-a9ce-f5e55f7e4794"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-42",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 500,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".hero-paragraph-holder",
							"selectorGuids": ["c9afccf9-7f76-c49f-a9ce-f5e55f7e4794"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-43",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 600,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".hero-buttons-holder",
							"selectorGuids": ["71c6729c-0b77-21e3-0f8d-07ad98985eab"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-44",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 600,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".hero-buttons-holder",
							"selectorGuids": ["71c6729c-0b77-21e3-0f8d-07ad98985eab"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-46",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 700,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".hero-app-container",
							"selectorGuids": ["eaa89df6-116a-c547-d628-6a3fd32124f9"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-2-n-45",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 700,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"selector": ".hero-app-container",
							"selectorGuids": ["eaa89df6-116a-c547-d628-6a3fd32124f9"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-2-n-49",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 700,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".news-section-holder",
							"selectorGuids": ["e4e3055f-8167-4cb2-1f72-86efcc3fc461"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675625341467
		},
		"a-13": {
			"id": "a-13",
			"title": "Infinite Icons Loop",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-13-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".infinite-icons-container",
							"selectorGuids": ["3b89ac22-18e8-21fc-6c8e-c6ed6d160209"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-13-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 30000,
						"target": {
							"selector": ".infinite-icons-container",
							"selectorGuids": ["3b89ac22-18e8-21fc-6c8e-c6ed6d160209"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-13-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".infinite-icons-container",
							"selectorGuids": ["3b89ac22-18e8-21fc-6c8e-c6ed6d160209"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1678041273876
		},
		"a-8": {
			"id": "a-8",
			"title": "Power Feature -> Hover On",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675682291672
		},
		"a-9": {
			"id": "a-9",
			"title": "Power Feature -> Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1675682291672
		},
		"a-10": {
			"id": "a-10",
			"title": "Slider In View",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-10-n-6",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-10-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675693243917
		},
		"a-11": {
			"id": "a-11",
			"title": "Slider Out of view",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-11-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0.5,
						"unit": ""
					}
				}, {
					"id": "a-11-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0.5,
						"unit": ""
					}
				}, {
					"id": "a-11-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1675693243917
		},
		"a-14": {
			"id": "a-14",
			"title": "Hero Animation",
			"continuousParameterGroups": [{
				"id": "a-14-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-14-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".hero-section-heading-holder",
								"selectorGuids": ["658765b1-0206-b879-33a7-15d14800a073"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".hero-app-holder",
								"selectorGuids": ["d606f4d9-9d8d-83f0-1112-b79f3890ce6c"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-14-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".hero-section-heading-holder",
								"selectorGuids": ["658765b1-0206-b879-33a7-15d14800a073"]
							},
							"yValue": -250,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-14-n-5",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".hero-app-holder",
								"selectorGuids": ["d606f4d9-9d8d-83f0-1112-b79f3890ce6c"]
							},
							"yValue": -250,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1689761428397
		},
		"a-15": {
			"id": "a-15",
			"title": "Super Feature -> On Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-15-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-cut-holder",
							"selectorGuids": ["cff89a51-9aa9-bce4-91d4-0eebffa48a90"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-9",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-15-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-15-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-cut-holder",
							"selectorGuids": ["cff89a51-9aa9-bce4-91d4-0eebffa48a90"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-15-n-8",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-cut-holder",
							"selectorGuids": ["cff89a51-9aa9-bce4-91d4-0eebffa48a90"]
						},
						"xValue": 0.8,
						"yValue": 0.8,
						"locked": true
					}
				}, {
					"id": "a-15-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-cut-holder",
							"selectorGuids": ["cff89a51-9aa9-bce4-91d4-0eebffa48a90"]
						},
						"yValue": -324,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-6",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"xValue": 0.8,
						"yValue": 0.8,
						"locked": true
					}
				}, {
					"id": "a-15-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"yValue": 68,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-15-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"value": 0.5,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1689761531483
		},
		"a-16": {
			"id": "a-16",
			"title": "Super Feature -> On Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-16-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-cut-holder",
							"selectorGuids": ["cff89a51-9aa9-bce4-91d4-0eebffa48a90"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-16-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-16-n-3",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-16-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-paddings.smaller",
							"selectorGuids": ["01080592-ea77-be69-e43a-754bb75f7a40", "8e3fab3a-f3cc-bf0b-b422-1ce73399a4b9"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-16-n-5",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".super-feature-cut-holder",
							"selectorGuids": ["cff89a51-9aa9-bce4-91d4-0eebffa48a90"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1689761531483
		},
		"a-17": {
			"id": "a-17",
			"title": "Paralax Browsers -> While Scrolling",
			"continuousParameterGroups": [{
				"id": "a-17-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-17-n-3",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.left",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "3715a48f-abbd-fd3a-5dcb-6a1f87d29304"]
							},
							"xValue": 0.7,
							"yValue": 0.7,
							"locked": true
						}
					}, {
						"id": "a-17-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.left",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "3715a48f-abbd-fd3a-5dcb-6a1f87d29304"]
							},
							"xValue": 100,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-6",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.right",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "9c58c44d-fe46-e936-cb2d-3b88303d53de"]
							},
							"xValue": 0.7,
							"yValue": 0.7,
							"locked": true
						}
					}, {
						"id": "a-17-n-7",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.right",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "9c58c44d-fe46-e936-cb2d-3b88303d53de"]
							},
							"xValue": -100,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-10",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".slide-holder",
								"selectorGuids": ["47373d99-b1fe-dca8-5259-20310d38c76c"]
							},
							"xValue": 0.9,
							"yValue": 0.9,
							"locked": true
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-17-n-4",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.left",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "3715a48f-abbd-fd3a-5dcb-6a1f87d29304"]
							},
							"xValue": 0.7,
							"yValue": 0.7,
							"locked": true
						}
					}, {
						"id": "a-17-n-5",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.left",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "3715a48f-abbd-fd3a-5dcb-6a1f87d29304"]
							},
							"xValue": -40,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-8",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.right",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "9c58c44d-fe46-e936-cb2d-3b88303d53de"]
							},
							"xValue": 0.7,
							"yValue": 0.7,
							"locked": true
						}
					}, {
						"id": "a-17-n-9",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".slide-container.right",
								"selectorGuids": ["b190291e-cc6a-ade2-abf8-b39387a6fcb0", "9c58c44d-fe46-e936-cb2d-3b88303d53de"]
							},
							"xValue": 40,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-17-n-11",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".slide-holder",
								"selectorGuids": ["47373d99-b1fe-dca8-5259-20310d38c76c"]
							},
							"xValue": 1,
							"yValue": 1,
							"locked": true
						}
					}]
				}]
			}],
			"createdOn": 1689761889065
		},
		"a-18": {
			"id": "a-18",
			"title": "Experience Cards -> Fade In",
			"continuousParameterGroups": [{
				"id": "a-18-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 20,
					"actionItems": [{
						"id": "a-18-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"yValue": 7,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-3",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-18-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"yValue": 30,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-5",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-18-n-7",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-title",
								"selectorGuids": ["7afadfcf-6a4c-d750-b08f-8b952d9f6854"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-18-n-8",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-parageraph",
								"selectorGuids": ["9d48296d-f21d-66ef-47cf-fc17adfbe383"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 40,
					"actionItems": [{
						"id": "a-18-n-9",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-10",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-18-n-11",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-12",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-18-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-title",
								"selectorGuids": ["7afadfcf-6a4c-d750-b08f-8b952d9f6854"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-18-n-14",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-parageraph",
								"selectorGuids": ["9d48296d-f21d-66ef-47cf-fc17adfbe383"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 60,
					"actionItems": [{
						"id": "a-18-n-15",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-16",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-18-n-17",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"yValue": -20,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-18",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-18-n-19",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-title",
								"selectorGuids": ["7afadfcf-6a4c-d750-b08f-8b952d9f6854"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-18-n-20",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-parageraph",
								"selectorGuids": ["9d48296d-f21d-66ef-47cf-fc17adfbe383"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 80,
					"actionItems": [{
						"id": "a-18-n-21",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"yValue": -7,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-22",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image-holder",
								"selectorGuids": ["4cec16dd-2913-daa5-e040-eef3bfd2da78"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-18-n-23",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"yValue": -30,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-18-n-24",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-image",
								"selectorGuids": ["387ed718-36a7-abb8-0944-d61fa3c1e3d2"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-18-n-25",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-title",
								"selectorGuids": ["7afadfcf-6a4c-d750-b08f-8b952d9f6854"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-18-n-26",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".experience-parageraph",
								"selectorGuids": ["9d48296d-f21d-66ef-47cf-fc17adfbe383"]
							},
							"value": 0,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1689762174532
		},
		"a-19": {
			"id": "a-19",
			"title": "Blog Item -> Hover On",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-19-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-thumbnail",
							"selectorGuids": ["76cbed20-6a8a-594e-805a-8c1ee48ce556"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-19-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow-holder",
							"selectorGuids": ["589750f0-af82-543c-23cd-b72eeefbf22c"]
						},
						"xValue": 100,
						"yValue": 100,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow",
							"selectorGuids": ["43464061-4984-9a92-f4b5-122461a23bc6"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-19-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow-holder",
							"selectorGuids": ["589750f0-af82-543c-23cd-b72eeefbf22c"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-19-n-5",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-thumbnail",
							"selectorGuids": ["76cbed20-6a8a-594e-805a-8c1ee48ce556"]
						},
						"xValue": 1.05,
						"yValue": 1.05,
						"locked": true
					}
				}, {
					"id": "a-19-n-8",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow-holder",
							"selectorGuids": ["589750f0-af82-543c-23cd-b72eeefbf22c"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-19-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow-holder",
							"selectorGuids": ["589750f0-af82-543c-23cd-b72eeefbf22c"]
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-19-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 200,
						"easing": "outExpo",
						"duration": 1300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow",
							"selectorGuids": ["43464061-4984-9a92-f4b5-122461a23bc6"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1689764797783
		},
		"a-20": {
			"id": "a-20",
			"title": "Blog Item -> Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-20-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-thumbnail",
							"selectorGuids": ["76cbed20-6a8a-594e-805a-8c1ee48ce556"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-20-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow-holder",
							"selectorGuids": ["589750f0-af82-543c-23cd-b72eeefbf22c"]
						},
						"xValue": 100,
						"yValue": 100,
						"xUnit": "%",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-20-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow",
							"selectorGuids": ["43464061-4984-9a92-f4b5-122461a23bc6"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-20-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "outExpo",
						"duration": 800,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".blog-arrow-holder",
							"selectorGuids": ["589750f0-af82-543c-23cd-b72eeefbf22c"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1689764797783
		},
		"a-21": {
			"id": "a-21",
			"title": "Menu Open",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-21-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}, {
					"id": "a-21-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-21-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"value": "none"
					}
				}, {
					"id": "a-21-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-21-n-8",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}, {
					"id": "a-21-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-21-n-10",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"value": "flex"
					}
				}, {
					"id": "a-21-n-9",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1689769930109
		},
		"a-22": {
			"id": "a-22",
			"title": "Menu Close",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-22-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}, {
					"id": "a-22-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-22-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-22-n-3",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 520,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nav-menu",
							"selectorGuids": ["a8fbb4a1-339f-e40e-d9b4-c42bc6732425"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1689769930109
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});