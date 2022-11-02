! function() {
	"use strict";
	var e = {
			qs: function(e) {
				return document.querySelectorAll(e)
			},
			trigger: function(e, t) {
				if (!document.createEvent) {
					var n = document.createEventObject();
					return t.fireEvent("on" + e, n)
				}
				var r = document.createEvent("HTMLEvents");
				r.initEvent(e, !0, !1), t.dispatchEvent(r)
			},
			domReady: function(e) {
				if (document.addEventListener) document.addEventListener("DOMContentLoaded", e);
				else var t = setInterval(function() {
					"complete" === document.readyState && (clearInterval(t), e())
				}, 5)
			},
			each: function(e, t) {
				for (var n = 0, r = e.length; r > n; n++) t(e[n], n)
			}
		},
		t = function() {
			this.userCountryCode = this.getCurrentCountry(), this.nginxCountryCode = this.getCurrentCountry(), this.defaultCountry = null, this.params = {
				countrySelector: ".country_select",
				mainPriceSelector: ".price_main",
				oldPriceSelector: ".price_old",
				phoneHelperSelector: ".phone_helper",
				nameHelperSelector: ".name_helper"
			}, this.countries = window.countryList, "object" == typeof this.countries && (this.prepareCountries(), this.initEvents(), this.fillCountrySelect(), this.setActiveCountrySelect())
		};
	t.prototype.prepareCountries = function() {
		for (var e in this.countries)
			if (this.countries[e].isDefault === !0) {
				this.defaultCountry = e;
				break
			}
	}, t.prototype.getCurrentCountry = function() {
		var e = window.location.search;
		if ("" === e) return this.defaultCountry;
		var t = e.match(/c\=([a-z]{2})/i) ? e.match(/c\=([a-z]{2})/i)[1] : this.defaultCountry;
		return t
	}, t.prototype.initEvents = function() {
		var t = this,
			n = e.qs(this.params.countrySelector);
		if (n.length > 0)
			for (var r = 0, i = n.length; i > r; r++) n[r].onchange = function(e) {
				t.changeSelectCountry.call(t, e)
			}
	}, t.prototype.changeSelectCountry = function(t) {
		t = t || window.event;
		var n = t.currentTarget || t.srcElement,
			r = n.value,
			i = this.countries[r];
		this.userCountryCode = r, e.each(e.qs(this.params.mainPriceSelector), function(e, t) {
e.innerHTML = '<span class="price_main_currency">' + i.labelPrice + '<span class="price_main_value">' + i.price + "</span>"
		}), e.each(e.qs(this.params.oldPriceSelector), function(e, t) {
e.innerHTML = '<span class="price_main_currency">' + i.labelPrice + '<span class="price_main_value">' + i.oldPrice +  "</span>"
		}), i.phoneHelper && e.each(e.qs(this.params.phoneHelperSelector), function(e, t) {
			e.innerHTML = i.phoneHelper
		}), i.nameHelper && e.each(e.qs(this.params.nameHelperSelector), function(e, t) {
			e.innerHTML = i.nameHelper
		})
	}, t.prototype.fillCountrySelect = function() {
		var t, n = function(e) {
				var t = document.createElement("OPTION");
				return t.value = e.code, t.text = e.name, t
			},
			r = e.qs(this.params.countrySelector);
		if (r.length > 0)
			for (var i = 0, o = r.length; o > i; i++)
				if ("SELECT" === r[i].nodeName)
					for (var c in this.countries) t = this.countries[c], r[i].options.add(n(t))
	}, t.prototype.setActiveCountrySelect = function() {
		var t = e.qs(this.params.countrySelector),
			n = this.nginxCountryCode || this.defaultCountry;
		if ("undefined" == typeof this.countries[this.nginxCountryCode] && (n = this.defaultCountry), t.length > 0)
			for (var r = 0, i = t.length; i > r; r++) t[r].value = n, e.trigger("change", t[r])
	}, e.domReady(function() {
		window.lCountries = new t
	})
}();