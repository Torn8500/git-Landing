! function(j) { "object" == typeof exports && "undefined" != typeof module ? module.exports = j() : "function" == typeof define && define.amd ? define([], j) : ("undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? this : self : global : window).Parallax = j() }(function() {
    return function j(D, G, H) {
        function J(Q, U) {
            if (!G[Q]) {
                if (!D[Q]) { var V = "function" == typeof require && require; if (!U && V) return V(Q, !0); if (K) return K(Q, !0); var W = new Error("Cannot find module '" + Q + "'"); throw W.code = "MODULE_NOT_FOUND", W }
                var X = G[Q] = { exports: {} };
                D[Q][0].call(X.exports, function(Y) { var Z = D[Q][1][Y]; return J(Z || Y) }, X, X.exports, j, D, G, H)
            }
            return G[Q].exports
        }
        for (var K = "function" == typeof require && require, P = 0; P < H.length; P++) J(H[P]);
        return J
    }({
        1: [function(j, D) {
            "use strict";

            function H(Q) { if (null === Q || void 0 === Q) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(Q) }
            var J = Object.getOwnPropertySymbols,
                K = Object.prototype.hasOwnProperty,
                P = Object.prototype.propertyIsEnumerable;
            D.exports = function() { try { if (!Object.assign) return !1; var Q = new String("abc"); if (Q[5] = "de", "5" === Object.getOwnPropertyNames(Q)[0]) return !1; for (var U = {}, V = 0; 10 > V; V++) U["_" + String.fromCharCode(V)] = V; if ("0123456789" !== Object.getOwnPropertyNames(U).map(function(X) { return U[X] }).join("")) return !1; var W = {}; return "abcdefghijklmnopqrst".split("").forEach(function(X) { W[X] = X }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, W)).join("") } catch (X) { return !1 } }() ? Object.assign : function(Q) { for (var V, W, X = H(Q), Y = 1; Y < arguments.length; Y++) { for (var Z in V = Object(arguments[Y]), V) K.call(V, Z) && (X[Z] = V[Z]); if (J) { W = J(V); for (var _ = 0; _ < W.length; _++) P.call(V, W[_]) && (X[W[_]] = V[W[_]]) } } return X }
        }, {}],
        2: [function(j, D) {
            (function(H) {
                (function() { var J, K, P, Q, U, V; "undefined" != typeof performance && null !== performance && performance.now ? D.exports = function() { return performance.now() } : void 0 !== H && null !== H && H.hrtime ? (D.exports = function() { return (J() - U) / 1e6 }, K = H.hrtime, Q = (J = function() { var W; return 1e9 * (W = K())[0] + W[1] })(), V = 1e9 * H.uptime(), U = Q - V) : Date.now ? (D.exports = function() { return Date.now() - P }, P = Date.now()) : (D.exports = function() { return new Date().getTime() - P }, P = new Date().getTime()) }).call(this)
            }).call(this, j("_process"))
        }, { _process: 3 }],
        3: [function(j, D) {
            function H() { throw new Error("setTimeout has not been defined") }

            function J() { throw new Error("clearTimeout has not been defined") }

            function K(da) { if (X === setTimeout) return setTimeout(da, 0); if ((X === H || !X) && setTimeout) return X = setTimeout, setTimeout(da, 0); try { return X(da, 0) } catch (ea) { try { return X.call(null, da, 0) } catch (fa) { return X.call(this, da, 0) } } }

            function P(da) { if (Y === clearTimeout) return clearTimeout(da); if ((Y === J || !Y) && clearTimeout) return Y = clearTimeout, clearTimeout(da); try { return Y(da) } catch (ea) { try { return Y.call(null, da) } catch (fa) { return Y.call(this, da) } } }

            function Q() { ba && _ && (ba = !1, _.length ? aa = _.concat(aa) : ca = -1, aa.length && U()) }

            function U() {
                if (!ba) {
                    var da = K(Q);
                    ba = !0;
                    for (var ea = aa.length; ea;) {
                        for (_ = aa, aa = []; ++ca < ea;) _ && _[ca].run();
                        ca = -1, ea = aa.length
                    }
                    _ = null, ba = !1, P(da)
                }
            }

            function V(da, ea) { this.fun = da, this.array = ea }

            function W() {}
            var X, Y, Z = D.exports = {};
            ! function() { try { X = "function" == typeof setTimeout ? setTimeout : H } catch (da) { X = H } try { Y = "function" == typeof clearTimeout ? clearTimeout : J } catch (da) { Y = J } }();
            var _, aa = [],
                ba = !1,
                ca = -1;
            Z.nextTick = function(da) {
                var ea = Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var fa = 1; fa < arguments.length; fa++) ea[fa - 1] = arguments[fa];
                aa.push(new V(da, ea)), 1 !== aa.length || ba || K(U)
            }, V.prototype.run = function() { this.fun.apply(null, this.array) }, Z.title = "browser", Z.browser = !0, Z.env = {}, Z.argv = [], Z.version = "", Z.versions = {}, Z.on = W, Z.addListener = W, Z.once = W, Z.off = W, Z.removeListener = W, Z.removeAllListeners = W, Z.emit = W, Z.prependListener = W, Z.prependOnceListener = W, Z.listeners = function() { return [] }, Z.binding = function() { throw new Error("process.binding is not supported") }, Z.cwd = function() { return "/" }, Z.chdir = function() { throw new Error("process.chdir is not supported") }, Z.umask = function() { return 0 }
        }, {}],
        4: [function(j, D) {
            (function(H) {
                for (var J = j("performance-now"), K = "undefined" == typeof window ? H : window, P = ["moz", "webkit"], Q = "AnimationFrame", U = K["request" + Q], V = K["cancel" + Q] || K["cancelRequest" + Q], W = 0; !U && W < P.length; W++) U = K[P[W] + "Request" + Q], V = K[P[W] + "Cancel" + Q] || K[P[W] + "CancelRequest" + Q];
                if (!U || !V) {
                    var X = 0,
                        Y = 0,
                        Z = [];
                    U = function(_) {
                        if (0 === Z.length) {
                            var aa = J(),
                                ba = Math.max(0, 1e3 / 60 - (aa - X));
                            X = ba + aa, setTimeout(function() {
                                var ca = Z.slice(0);
                                Z.length = 0;
                                for (var da = 0; da < ca.length; da++)
                                    if (!ca[da].cancelled) try { ca[da].callback(X) } catch (ea) { setTimeout(function() { throw ea }, 0) }
                            }, Math.round(ba))
                        }
                        return Z.push({ handle: ++Y, callback: _, cancelled: !1 }), Y
                    }, V = function(_) { for (var aa = 0; aa < Z.length; aa++) Z[aa].handle === _ && (Z[aa].cancelled = !0) }
                }
                D.exports = function(_) { return U.call(K, _) }, D.exports.cancel = function() { V.apply(K, arguments) }, D.exports.polyfill = function() { K.requestAnimationFrame = U, K.cancelAnimationFrame = V }
            }).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global)
        }, { "performance-now": 2 }],
        5: [function(j, D) {
            "use strict";

            function H(W, X) { if (!(W instanceof X)) throw new TypeError("Cannot call a class as a function") }
            var J = function() {
                    function W(X, Y) { for (var _, Z = 0; Z < Y.length; Z++) _ = Y[Z], _.enumerable = _.enumerable || !1, _.configurable = !0, "value" in _ && (_.writable = !0), Object.defineProperty(X, _.key, _) }
                    return function(X, Y, Z) { return Y && W(X.prototype, Y), Z && W(X, Z), X }
                }(),
                K = j("raf"),
                P = j("object-assign"),
                Q = {
                    propertyCache: {},
                    vendors: [null, ["-webkit-", "webkit"],
                        ["-moz-", "Moz"],
                        ["-o-", "O"],
                        ["-ms-", "ms"]
                    ],
                    clamp: function(W, X, Y) { return X < Y ? W < X ? X : W > Y ? Y : W : W < Y ? Y : W > X ? X : W },
                    data: function(W, X) { return Q.deserialize(W.getAttribute("data-" + X)) },
                    deserialize: function(W) { return "true" === W || "false" !== W && ("null" === W ? null : !isNaN(parseFloat(W)) && isFinite(W) ? parseFloat(W) : W) },
                    camelCase: function(W) { return W.replace(/-+(.)?/g, function(X, Y) { return Y ? Y.toUpperCase() : "" }) },
                    accelerate: function(W) { Q.css(W, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), Q.css(W, "transform-style", "preserve-3d"), Q.css(W, "backface-visibility", "hidden") },
                    transformSupport: function(W) {
                        for (var X = document.createElement("div"), Y = !1, Z = null, _ = !1, aa = null, ba = null, ca = 0, da = Q.vendors.length; ca < da; ca++)
                            if (null === Q.vendors[ca] ? (aa = "transform", ba = "transform") : (aa = Q.vendors[ca][0] + "transform", ba = Q.vendors[ca][1] + "Transform"), void 0 !== X.style[ba]) { Y = !0; break }
                        switch (W) {
                            case "2D":
                                _ = Y;
                                break;
                            case "3D":
                                if (Y) {
                                    var ea = document.body || document.createElement("body"),
                                        fa = document.documentElement,
                                        ga = fa.style.overflow,
                                        ha = !1;
                                    document.body || (ha = !0, fa.style.overflow = "hidden", fa.appendChild(ea), ea.style.overflow = "hidden", ea.style.background = ""), ea.appendChild(X), X.style[ba] = "translate3d(1px,1px,1px)", _ = void 0 !== (Z = window.getComputedStyle(X).getPropertyValue(aa)) && 0 < Z.length && "none" !== Z, fa.style.overflow = ga, ea.removeChild(X), ha && (ea.removeAttribute("style"), ea.parentNode.removeChild(ea))
                                }
                        }
                        return _
                    },
                    css: function(W, X, Y) {
                        var Z = Q.propertyCache[X];
                        if (!Z)
                            for (var _ = 0, aa = Q.vendors.length; _ < aa; _++)
                                if (Z = null === Q.vendors[_] ? X : Q.camelCase(Q.vendors[_][1] + "-" + X), void 0 !== W.style[Z]) { Q.propertyCache[X] = Z; break }
                        W.style[Z] = Y
                    }
                },
                U = { relativeInput: !1, clipRelativeInput: !1, inputElement: null, hoverOnly: !1, calibrationThreshold: 100, calibrationDelay: 500, supportDelay: 500, calibrateX: !1, calibrateY: !0, invertX: !0, invertY: !0, limitX: !1, limitY: !1, scalarX: 10, scalarY: 10, frictionX: .1, frictionY: .1, originX: .5, originY: .5, pointerEvents: !1, precision: 1, onReady: null, selector: null },
                V = function() {
                    function W(X, Y) {
                        H(this, W), this.element = X;
                        var Z = { calibrateX: Q.data(this.element, "calibrate-x"), calibrateY: Q.data(this.element, "calibrate-y"), invertX: Q.data(this.element, "invert-x"), invertY: Q.data(this.element, "invert-y"), limitX: Q.data(this.element, "limit-x"), limitY: Q.data(this.element, "limit-y"), scalarX: Q.data(this.element, "scalar-x"), scalarY: Q.data(this.element, "scalar-y"), frictionX: Q.data(this.element, "friction-x"), frictionY: Q.data(this.element, "friction-y"), originX: Q.data(this.element, "origin-x"), originY: Q.data(this.element, "origin-y"), pointerEvents: Q.data(this.element, "pointer-events"), precision: Q.data(this.element, "precision"), relativeInput: Q.data(this.element, "relative-input"), clipRelativeInput: Q.data(this.element, "clip-relative-input"), hoverOnly: Q.data(this.element, "hover-only"), inputElement: document.querySelector(Q.data(this.element, "input-element")), selector: Q.data(this.element, "selector") };
                        for (var _ in Z) null === Z[_] && delete Z[_];
                        P(this, U, Z, Y), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                    }
                    return J(W, [{ key: "initialise", value: function() { void 0 === this.transform2DSupport && (this.transform2DSupport = Q.transformSupport("2D"), this.transform3DSupport = Q.transformSupport("3D")), this.transform3DSupport && Q.accelerate(this.element), "static" === window.getComputedStyle(this.element).getPropertyValue("position") && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay) } }, { key: "doReadyCallback", value: function() { this.onReady && this.onReady() } }, {
                        key: "updateLayers",
                        value: function() {
                            this.layers = this.selector ? this.element.querySelectorAll(this.selector) : this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                            for (var Y, X = 0; X < this.layers.length; X++) {
                                Y = this.layers[X], this.transform3DSupport && Q.accelerate(Y), Y.style.position = X ? "absolute" : "relative", Y.style.display = "block", Y.style.left = 0, Y.style.top = 0;
                                var Z = Q.data(Y, "depth") || 0;
                                this.depthsX.push(Q.data(Y, "depth-x") || Z), this.depthsY.push(Q.data(Y, "depth-y") || Z)
                            }
                        }
                    }, { key: "updateDimensions", value: function() { this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY) } }, { key: "updateBounds", value: function() { this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY) } }, { key: "queueCalibration", value: function(X) { clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, X) } }, { key: "enable", value: function() { this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = K(this.onAnimationFrame)) } }, { key: "disable", value: function() { this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), K.cancel(this.raf)) } }, { key: "calibrate", value: function(X, Y) { this.calibrateX = void 0 === X ? this.calibrateX : X, this.calibrateY = void 0 === Y ? this.calibrateY : Y } }, { key: "invert", value: function(X, Y) { this.invertX = void 0 === X ? this.invertX : X, this.invertY = void 0 === Y ? this.invertY : Y } }, { key: "friction", value: function(X, Y) { this.frictionX = void 0 === X ? this.frictionX : X, this.frictionY = void 0 === Y ? this.frictionY : Y } }, { key: "scalar", value: function(X, Y) { this.scalarX = void 0 === X ? this.scalarX : X, this.scalarY = void 0 === Y ? this.scalarY : Y } }, { key: "limit", value: function(X, Y) { this.limitX = void 0 === X ? this.limitX : X, this.limitY = void 0 === Y ? this.limitY : Y } }, { key: "origin", value: function(X, Y) { this.originX = void 0 === X ? this.originX : X, this.originY = void 0 === Y ? this.originY : Y } }, { key: "setInputElement", value: function(X) { this.inputElement = X, this.updateDimensions() } }, { key: "setPosition", value: function(X, Y, Z) { Y = Y.toFixed(this.precision) + "px", Z = Z.toFixed(this.precision) + "px", this.transform3DSupport ? Q.css(X, "transform", "translate3d(" + Y + "," + Z + ",0)") : this.transform2DSupport ? Q.css(X, "transform", "translate(" + Y + "," + Z + ")") : (X.style.left = Y, X.style.top = Z) } }, { key: "onOrientationTimer", value: function() { this.orientationSupport && 0 === this.orientationStatus ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback() } }, { key: "onMotionTimer", value: function() { this.motionSupport && 0 === this.motionStatus ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback() } }, { key: "onCalibrationTimer", value: function() { this.calibrationFlag = !0 } }, { key: "onWindowResize", value: function() { this.updateDimensions() } }, {
                        key: "onAnimationFrame",
                        value: function() {
                            this.updateBounds();
                            var X = this.inputX - this.calibrationX,
                                Y = this.inputY - this.calibrationY;
                            (Math.abs(X) > this.calibrationThreshold || Math.abs(Y) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? Y : this.inputY, this.motionY = this.calibrateY ? X : this.inputX) : (this.motionX = this.calibrateX ? X : this.inputX, this.motionY = this.calibrateY ? Y : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = Q.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = Q.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                            for (var Z = 0; Z < this.layers.length; Z++) {
                                var _ = this.layers[Z],
                                    aa = this.depthsX[Z],
                                    ba = this.depthsY[Z],
                                    ca = this.velocityX * (aa * (this.invertX ? -1 : 1)),
                                    da = this.velocityY * (ba * (this.invertY ? -1 : 1));
                                this.setPosition(_, ca, da)
                            }
                            this.raf = K(this.onAnimationFrame)
                        }
                    }, {
                        key: "rotate",
                        value: function(X, Y) {
                            var Z = (X || 0) / 30,
                                _ = (Y || 0) / 30,
                                aa = this.windowHeight > this.windowWidth;
                            this.portrait !== aa && (this.portrait = aa, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = Z, this.calibrationY = _), this.inputX = Z, this.inputY = _
                        }
                    }, {
                        key: "onDeviceOrientation",
                        value: function(X) {
                            var Y = X.beta,
                                Z = X.gamma;
                            null !== Y && null !== Z && (this.orientationStatus = 1, this.rotate(Y, Z))
                        }
                    }, {
                        key: "onDeviceMotion",
                        value: function(X) {
                            var Y = X.rotationRate.beta,
                                Z = X.rotationRate.gamma;
                            null !== Y && null !== Z && (this.motionStatus = 1, this.rotate(Y, Z))
                        }
                    }, {
                        key: "onMouseMove",
                        value: function(X) {
                            var Y = X.clientX,
                                Z = X.clientY;
                            return this.hoverOnly && (Y < this.elementPositionX || Y > this.elementPositionX + this.elementWidth || Z < this.elementPositionY || Z > this.elementPositionY + this.elementHeight) ? (this.inputX = 0, void(this.inputY = 0)) : void(this.relativeInput ? (this.clipRelativeInput && (Y = Math.max(Y, this.elementPositionX), Y = Math.min(Y, this.elementPositionX + this.elementWidth), Z = Math.max(Z, this.elementPositionY), Z = Math.min(Z, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (Y - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (Z - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (Y - this.windowCenterX) / this.windowRadiusX, this.inputY = (Z - this.windowCenterY) / this.windowRadiusY))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                            for (var X = 0; X < this.layers.length; X++) this.layers[X].removeAttribute("style");
                            delete this.element, delete this.layers
                        }
                    }, { key: "version", value: function() { return "3.1.0" } }]), W
                }();
            D.exports = V
        }, { "object-assign": 1, raf: 4 }]
    }, {}, [5])(5)
}),
function(j, D) { "function" == typeof define && define.amd ? define([], D) : "object" == typeof module && module.exports ? module.exports = D() : j.Rellax = D() }(this, function() {
    var j = function(D, G) {
        var H = Object.create(j.prototype),
            J = 0,
            K = 0,
            P = 0,
            Q = 0,
            U = [],
            V = !0,
            W = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(da) { setTimeout(da, 1E3 / 60) },
            X = window.transformProp || function() {
                var da = document.createElement("div");
                if (null === da.style.transform) {
                    var fa, ea = ["Webkit", "Moz", "ms"];
                    for (fa in ea)
                        if (void 0 !== da.style[ea[fa] + "Transform"]) return ea[fa] + "Transform"
                }
                return "transform"
            }();
        H.options = { speed: -2, center: !1, wrapper: null, round: !0, vertical: !0, horizontal: !1, callback: function() {} }, G && Object.keys(G).forEach(function(da) { H.options[da] = G[da] }), D || (D = ".rellax");
        var Y = "string" == typeof D ? document.querySelectorAll(D) : [D];
        if (0 < Y.length) H.elems = Y;
        else throw Error("The elements you're trying to select don't exist.");
        if (H.options.wrapper && !H.options.wrapper.nodeType)
            if (Y = document.querySelector(H.options.wrapper)) H.options.wrapper = Y;
            else throw Error("The wrapper you're trying to use don't exist.");
        var Z = function() {
                for (var da = 0; da < U.length; da++) H.elems[da].style.cssText = U[da].style;
                for (U = [], K = window.innerHeight, Q = window.innerWidth, _(), da = 0; da < H.elems.length; da++) {
                    var ea = H.elems[da],
                        fa = ea.getAttribute("data-rellax-percentage"),
                        ga = ea.getAttribute("data-rellax-speed"),
                        ha = ea.getAttribute("data-rellax-zindex") || 0,
                        ia = H.options.wrapper ? H.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                        ja = H.options.vertical ? fa || H.options.center ? ia : 0 : 0,
                        ka = H.options.horizontal ? fa || H.options.center ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
                    ia = ja + ea.getBoundingClientRect().top;
                    var la = ea.clientHeight || ea.offsetHeight || ea.scrollHeight,
                        ma = ka + ea.getBoundingClientRect().left,
                        na = ea.clientWidth || ea.offsetWidth || ea.scrollWidth;
                    ja = fa ? fa : (ja - ia + K) / (la + K), fa = fa ? fa : (ka - ma + Q) / (na + Q), H.options.center && (ja = fa = .5), ga = ga ? ga : H.options.speed, fa = aa(fa, ja, ga), ea = ea.style.cssText, ja = "", 0 <= ea.indexOf("transform") && (ja = ea.indexOf("transform"), ja = ea.slice(ja), ja = (ka = ja.indexOf(";")) ? " " + ja.slice(11, ka).replace(/\s/g, "") : " " + ja.slice(11).replace(/\s/g, "")), U.push({ baseX: fa.x, baseY: fa.y, top: ia, left: ma, height: la, width: na, speed: ga, style: ea, transform: ja, zindex: ha })
                }
                V && (window.addEventListener("resize", Z), V = !1), ca()
            },
            _ = function() {
                var da = J,
                    ea = P;
                return J = H.options.wrapper ? H.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, P = H.options.wrapper ? H.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, da != J && H.options.vertical || ea != P && H.options.horizontal
            },
            aa = function(da, ea, fa) { var ga = {}; return da = 100 * fa * (1 - da), ea = 100 * fa * (1 - ea), ga.x = H.options.round ? Math.round(da) : Math.round(100 * da) / 100, ga.y = H.options.round ? Math.round(ea) : Math.round(100 * ea) / 100, ga },
            ba = function() { _() && !1 == V && ca(), W(ba) },
            ca = function() {
                for (var da, ea = 0; ea < H.elems.length; ea++) {
                    da = aa((P - U[ea].left + Q) / (U[ea].width + Q), (J - U[ea].top + K) / (U[ea].height + K), U[ea].speed);
                    var fa = da.y - U[ea].baseY,
                        ga = da.x - U[ea].baseX;
                    H.elems[ea].style[X] = "translate3d(" + (H.options.horizontal ? ga : "0") + "px," + (H.options.vertical ? fa : "0") + "px," + U[ea].zindex + "px) " + U[ea].transform
                }
                H.options.callback(da)
            };
        return H.destroy = function() {
            for (var da = 0; da < H.elems.length; da++) H.elems[da].style.cssText = U[da].style;
            V || (window.removeEventListener("resize", Z), V = !0)
        }, Z(), ba(), H.refresh = Z, H
    };
    return j
});

function Timer() {
    function j(W) {
        var X = D(new Date(W).getHours()),
            Y = D(new Date(W).getMinutes()),
            Z = D(new Date(W).getSeconds());
        J.each(function() { $(this).find(".hours").text(X), $(this).find(".minutes").text(Y), $(this).find(".seconds").text(Z) })
    }

    function D(W) { return 10 <= W ? W : "0" + W }

    function G() { U == P ? clearInterval(V) : (U -= 1e3, j(U)) }
    var J = $(".timer"),
        K = new Date,
        P = 1e3 * (60 * K.getTimezoneOffset()),
        Q = new Date(new Date().getTime() + 86400000);
    Q.setHours(0), Q.setMinutes(0), Q.setSeconds(0);
    var U = Q - K + P;
    G(),
        function() { V = setInterval(G, 1e3) }();
    var V
}
Timer(), ! function(j, D) {
    function H(da, ea) { return typeof da === ea }

    function P() { return "function" == typeof D.createElement ? _ ? D.createElementNS.call(D, "http://www.w3.org/2000/svg", arguments[0]) : D.createElement.apply(D, arguments) : D.createElement(arguments[0]) }

    function Q() { var da = D.body; return da || (da = P(_ ? "svg" : "body"), da.fake = !0), da }
    var V = [],
        W = [],
        X = {
            _version: "3.6.0",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function(da, ea) {
                var fa = this;
                setTimeout(function() { ea(fa[da]) }, 0)
            },
            addTest: function(da, ea, fa) { W.push({ name: da, fn: ea, options: fa }) },
            addAsyncTest: function(da) { W.push({ name: null, fn: da }) }
        },
        Y = function() {};
    Y.prototype = X, Y = new Y;
    var Z = D.documentElement,
        _ = "svg" === Z.nodeName.toLowerCase(),
        aa = X._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    X._prefixes = aa;
    var ba = X.testStyles = function(da, ea, fa, ga) {
        var ha, ia, ja, ka, la = "modernizr",
            ma = P("div"),
            na = Q();
        if (parseInt(fa, 10))
            for (; fa--;) ja = P("div"), ja.id = ga ? ga[fa] : la + (fa + 1), ma.appendChild(ja);
        return ha = P("style"), ha.type = "text/css", ha.id = "s" + la, (na.fake ? na : ma).appendChild(ha), na.appendChild(ma), ha.styleSheet ? ha.styleSheet.cssText = da : ha.appendChild(D.createTextNode(da)), ma.id = la, na.fake && (na.style.background = "", na.style.overflow = "hidden", ka = Z.style.overflow, Z.style.overflow = "hidden", Z.appendChild(na)), ia = ea(ma, da), na.fake ? (na.parentNode.removeChild(na), Z.style.overflow = ka, Z.offsetHeight) : ma.parentNode.removeChild(ma), !!ia
    };
    Y.addTest("touchevents", function() {
            var da;
            if ("ontouchstart" in j || j.DocumentTouch && D instanceof DocumentTouch) da = !0;
            else {
                var ea = ["@media (", aa.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                ba(ea, function(fa) { da = 9 === fa.offsetTop })
            }
            return da
        }),
        function() {
            var da, ea, fa, ga, ha, ia, ja;
            for (var ka in W)
                if (W.hasOwnProperty(ka)) {
                    if (da = [], ea = W[ka], ea.name && (da.push(ea.name.toLowerCase()), ea.options && ea.options.aliases && ea.options.aliases.length))
                        for (fa = 0; fa < ea.options.aliases.length; fa++) da.push(ea.options.aliases[fa].toLowerCase());
                    for (ga = H(ea.fn, "function") ? ea.fn() : ea.fn, ha = 0; ha < da.length; ha++) ia = da[ha], ja = ia.split("."), 1 === ja.length ? Y[ja[0]] = ga : (!Y[ja[0]] || Y[ja[0]] instanceof Boolean || (Y[ja[0]] = new Boolean(Y[ja[0]])), Y[ja[0]][ja[1]] = ga), V.push((ga ? "" : "no-") + ja.join("-"))
                }
        }(),
        function(da) {
            var ea = Z.className,
                fa = Y._config.classPrefix || "";
            if (_ && (ea = ea.baseVal), Y._config.enableJSClass) {
                var ga = new RegExp("(^|\\s)" + fa + "no-js(\\s|$)");
                ea = ea.replace(ga, "$1" + fa + "js$2")
            }
            Y._config.enableClasses && (ea += " " + fa + da.join(" " + fa), _ ? Z.className.baseVal = ea : Z.className = ea)
        }(V), delete X.addTest, delete X.addAsyncTest;
    for (var ca = 0; ca < Y._q.length; ca++) Y._q[ca]();
    j.Modernizr = Y
}(window, document), $(document).ready(function() {
    "use strict";

    function j() {
        var Ra, Sa = parseInt(getComputedStyle(ha).paddingTop),
            Ta = document.documentElement.scrollTop || document.body.scrollTop,
            Ua = D(ia).top + ia.clientHeight,
            Va = D(ha).top - window.innerHeight + Sa,
            Wa = Va + .4 * window.innerHeight;
        return Ta < Ua ? (ma && (ga.setAttribute("style", ""), ma = !1), ia.appendChild(ga), la = !1, G(ka, "js-active"), G(ga, "js-fixed"), J(ga, "js-absolute"), "js-absolute") : Ta >= Ua && Ta < Va ? (document.body.appendChild(ga), ma = !0, la || J(ka, "js-active"), G(ga, "js-absolute"), "js-fixed") : (ma && (ga.setAttribute("style", ""), ma = !1), G(ka, "js-active"), G(ga, "js-fixed"), Ta > Wa) ? (ha.appendChild(ga), la = !1, Ra = H(ga, "js-absolute") ? 1 : 0, J(ga, "js-absolute"), 1 != Ra && (ga.style.opacity = "0", function(Xa) {
            var Ya = .1;
            Xa.style.display = "flex";
            var Za = setInterval(function() { .9 <= Ya && clearInterval(Za), Xa.style.opacity = Ya, Xa.style.filter = "alpha(opacity=" + 100 * Ya + ")", Ya += .25 * Ya }, 40)
        }(ga)), Ra = 1, "js-absolute") : void 0
    }

    function D(Ra) {
        var Sa = Ra.getBoundingClientRect(),
            Ta = window.pageXOffset || document.documentElement.scrollLeft,
            Ua = window.pageYOffset || document.documentElement.scrollTop;
        return { top: Sa.top + Ua, left: Sa.left + Ta }
    }

    function G(Ra, Sa) { H(Ra, Sa) && (Ra.className = Ra.className.replace(new RegExp("(\\s|^)" + Sa + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, "")) }

    function H(Ra, Sa) { return -1 != Ra.className.split(" ").indexOf(Sa) }

    function J(Ra, Sa) { var Ta = Ra.className.split(" "); - 1 == Ta.indexOf(Sa) && Ta.push(Sa), Ra.className = Ta.join(" ") }

    function G(Ra, Sa) { H(Ra, Sa) && (Ra.className = Ra.className.replace(new RegExp("(\\s|^)" + Sa + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, "")) }

    function K(Ra, Sa) { for (var Ta = Ra.toString(); Ta.length < Sa;) Ta = "0" + Ta; return Ta }

    function P() {
        for (; Ma;) {
            var Ra = La[Ma - 1].querySelectorAll(".js-count-digit"),
                Sa = Ra.length;
            if (0 === Sa) Oa = K(Na, 2), La[Ma - 1].innerText = Oa;
            else { Oa = K(Na, Sa); for (var Ta = 0; Ta < Sa; Ta++) Ra[Ta].innerText = Oa[Ta] }
            Ma--
        }
        U() && localStorage.setItem("lastNumber", Oa)
    }

    function Q(Ra, Sa) { return Math.floor(Math.random() * (Sa - Ra + 1)) + Ra }

    function U() { return void 0 !== window.localStorage }

    function V(Ra, Sa, Ta) { $("html, body").stop().animate({ scrollTop: Ra.offset().top - Ta + 1 }, Sa) }

    function W(Ra) { return 0 > Ra ? -Ra : Ra }

    function X(Ra, Sa) {
        var Ta = $(window).scrollTop();
        Ta + da / 2 > Sa.offset().top && Ta + da / 2 < Sa.offset().top + Sa.height() ? Ra.addClass("start-animation") : (Ta + da < Sa.offset().top || Ta > Sa.offset().top + Sa.height()) && Ra.removeClass("start-animation")
    }

    function Y() { Modernizr.touchevents && (na = "touchstart") }
    $("body");
    var Z, _, aa = $(".navbar"),
        ba = $("#fixed-nav").find("li"),
        ca = window.innerWidth,
        da = window.innerHeight,
        ea = $(".js-navbar-show"),
        fa = $("#order-form-bottom"),
        ga = document.getElementById("hurryUp"),
        ha = document.getElementById("footer"),
        ia = document.getElementById("header"),
        ja = document.querySelectorAll(".hurryUp__close"),
        ka = document.getElementById("js-red-btn"),
        la = !1,
        ma = !1,
        na = "click",
        oa = $(".egg"),
        pa = 0,
        qa = $(".problem"),
        ra = document.getElementById("scene-problem"),
        ta = document.getElementById("scene-reviews"),
        ua = document.getElementById("scene-possible"),
        va = new Parallax(ra),
        xa = new Parallax(ta),
        ya = new Parallax(ua),
        Ja = new Rellax(".rellax-item", { center: !0 });
    Y();
    for (var Ka = 0; Ka < ja.length; Ka++) ja[Ka].addEventListener("click", function(Ra) {
        var Sa, Ta, Ua;
        "js-fixed" == j() && J(ka, "js-active"), Sa = Ra.target.parentElement, Ta = Sa.style.opacity ? Sa.style.opacity : 1, Ua = setInterval(function() { .1 >= Ta && (clearInterval(Ua), Sa.style.display = "none"), Sa.style.opacity = 0, Sa.style.filter = "alpha(opacity=" + 100 * Ta + ")", Ta -= .25 * Ta }, 40), la = !1
    });
    window.addEventListener("scroll", (Z = j, function() {
        var Ra = this,
            Sa = arguments;
        clearTimeout(_), _ = setTimeout(function() { _ = null, Z.apply(Ra, Sa) }, 100)
    })), ka.addEventListener("click", function() {
        ga.setAttribute("style", "");
        var Ra = j();
        J(ga, Ra), G(this, "js-active"), la = !0
    });
    var La = document.getElementsByClassName("js-countdown");
    if (0 !== La.length) {
        var Ma = La.length,
            Na = 83,
            Oa = Na + "";
        if (!isNaN(parseInt(La[0].innerText)) && 5 < parseInt(La[0].innerText) && (Na = La[0].innerText.trim()), U()) {
            var Pa = parseInt(localStorage.getItem("lastNumber"));
            isNaN(Pa) || (Na = Pa)
        }
        P();
        var Qa = setInterval(function() { return (Ma = La.length, !(5 < Na)) ? (clearInterval(Qa), 5) : void(Na -= Q(1, 5), P()) }, Q(1e4, 5e4))
    } else console.warn("You have to add \"js-countdown\" class for any DOM element");
    $(window).on("resize", function() { Y(), ca = window.innerWidth, da = window.innerHeight, ea.offset().top, ea.innerHeight(), fa.offset().top }), $(window).on("scroll", function() {
        var Ra, Sa = $(window).scrollTop(),
            Ta = ea.offset().top + ea.innerHeight();
        Sa >= Ta ? aa.addClass("fixed") : aa.removeClass("fixed"), Ra = Sa, ba.each(function() {
            var Ua = $(this).find("a").attr("href"),
                Va = $(Ua).offset().top,
                Wa = Va + $(Ua).innerHeight();
            if (Ra >= Va - 50 && Ra <= Wa) return ba.removeClass("is-active"), void $(this).addClass("is-active")
        }), X($(".js-title"), qa)
    }), $(".js-scroll").on(na, function(Ra) {
        $(".navbar-menu").removeClass("navbar-menu-active");
        $(".burger-menu").removeClass("burger-menu-active");
        if (Ra.preventDefault(), $(this).hasClass("js-to-form")) {
            var Sa, Ta = $(".order:visible"),
                Ua = Ta.length,
                Va = $(Ta[0]),
                Wa = W($(window).scrollTop() - Va.offset().top);
            for (Sa = 1; Sa < Ua; Sa++) {
                var Xa = W($(window).scrollTop() - $(Ta[Sa]).offset().top);
                Xa < Wa && (Wa = Xa, Va = $(Ta[Sa]))
            }
            V(Va, 900, 60)
        } else {
            var Ya = $(this).attr("href");
            V($(Ya), 900, 60)
        }
    }), oa.on(na, function() { 9 > pa ? pa++ : ($("#reviews").addClass("fly"), console.log(pa)) })
});

$(".burger-menu").on("click", function() {
    $(".navbar-menu").toggleClass("navbar-menu-active");
    $(".burger-menu").toggleClass("burger-menu-active");
})

let slider = false

window.addEventListener("resize", checkSlick);
window.addEventListener("DOMContentLoaded", checkSlick);

function checkSlick() {
    if (window.innerWidth < 768 && !slider) {
        $('.reviews__content').slick();
        slider = true;
    }
    if (window.innerWidth >= 768 && slider) {
        $('.reviews__content').slick('unslick');
        slider = false;
    }
}