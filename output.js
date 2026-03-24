//Tue Mar 24 2026 12:24:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  "use strict";
  let _0x44220b = false;
  var _0x468e2f = "",
    _0x5a341f = false,
    _0x2a975f = false;
  const _0x3faaad = {
      "appCodeName": "Mozilla",
      "appName": "Netscape",
      "vendor": "Google Inc.",
      "product": "Gecko",
      "productSub": "20030107",
      "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
      "platform": "Win32",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
      "userAgentData": null,
      "language": "en-US",
      "languages": ["en-US"],
      "deviceMemory": 8,
      "hardwareConcurrency": 16
    },
    _0x3e1c97 = {
      "appCodeName": "Mozilla",
      "appName": "Netscape",
      "vendor": "Google Inc.",
      "product": "Gecko",
      "productSub": "20030107",
      "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
      "platform": "iPhone",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
      "userAgentData": null,
      "language": "en-US",
      "languages": ["en-US"],
      "deviceMemory": 8,
      "hardwareConcurrency": 16
    };
  function _0x25da32() {
    try {
      "serviceWorker" in navigator && (navigator.serviceWorker.getRegistrations().then(_0x2ca4a8 => {
        for (let _0x1b75fb of _0x2ca4a8) {
          _0x1b75fb.unregister();
        }
      }), delete Navigator.prototype.serviceWorker);
    } catch (_0x167c3b) {
      console.error("Failed to disable service worker:", _0x167c3b);
    }
  }
  function _0x4fc39b() {
    function _0x47124f(_0x4bf836) {
      ctx.fpChanged = true;
      for (let _0x34857a in _0x4bf836) {
        let _0x229677 = Object.getOwnPropertyDescriptor(Navigator.prototype, _0x34857a);
        if (!_0x229677?.["get"]) continue;
        let _0x426a49 = _0x4bf836[_0x34857a];
        if (_0x426a49 === null) {
          delete Navigator.prototype[_0x34857a];
          continue;
        }
        let _0x157d98 = () => _0x426a49;
        _0x157d98.toString = _0x229677.get.toString.bind(_0x229677.get);
        Object.defineProperty(Navigator.prototype, _0x34857a, {
          "set": undefined,
          "enumerable": true,
          "configurable": true,
          "get": _0x157d98
        });
      }
    }
    function _0x1cc1d2(_0x2f4659, _0x3a2ed5) {
      ctx.fpChanged = true;
      if (Intl?.["DateTimeFormat"]?.["prototype"]?.["resolvedOptions"]) {
        let _0x177831 = Intl.DateTimeFormat.prototype.resolvedOptions;
        Intl.DateTimeFormat.prototype.resolvedOptions = function () {
          return {
            ..._0x177831.call(this),
            "locale": _0x2f4659,
            "timeZone": _0x3a2ed5
          };
        };
      }
      let _0x1018c1 = Date.prototype,
        _0x43ce48 = _0x581e4b(_0x3a2ed5);
      _0x1018c1.getTimezoneOffset = () => _0x43ce48;
      _0x1018c1.getTimezoneOffset.toString = () => "function getTimezoneOffset() { [native code] }";
      _0x1018c1.toString = function () {
        return _0x477a16(this);
      };
      _0x1018c1.toString.toString = () => "function toString() { [native code] }";
    }
    function _0x581e4b(_0x175799 = "UTC", _0x361e65 = new Date()) {
      let _0x30274a = new Date(_0x361e65.toLocaleString("en-US", {
          "timeZone": "UTC"
        })),
        _0x29351b = new Date(_0x361e65.toLocaleString("en-US", {
          "timeZone": _0x175799
        }));
      return (_0x29351b.getTime() - _0x30274a.getTime()) / -60000;
    }
    function _0x477a16(_0x33d97a) {
      if (Number.isNaN(_0x33d97a.valueOf())) return "Invalid Date";
      try {
        let _0x3a0e5e = new Intl.DateTimeFormat("en-US", {
            "weekday": "short",
            "month": "short",
            "year": "numeric",
            "day": "2-digit",
            "hour": "2-digit",
            "minute": "2-digit",
            "second": "2-digit",
            "timeZoneName": "long",
            "timeZone": "America/Los_Angeles",
            "hour12": false
          }).format(_0x33d97a).replace(" at ", ", "),
          [_0x3e3446, _0x1bef60, _0x29804d, _0x3e6bce] = _0x3a0e5e.split(", "),
          _0x553737 = _0x3e6bce.slice(0, 8),
          _0x3a268c = _0x3e6bce.slice(9);
        return [_0x3e3446, _0x1bef60, _0x29804d, _0x553737, "GMT-0700", "(" + _0x3a268c + ")"].join(" ");
      } catch (_0x315e33) {
        throw new Error("getUSDateString failed: " + _0x315e33.message, {
          "cause": _0x315e33
        });
      }
    }
    function _0x16af9c(_0x230a13) {
      ctx.fpChanged = true;
      if (window.performance) {
        _0x16fe8d(window.performance, _0x230a13);
      } else {
        window.performance = _0x230a13;
      }
    }
    function _0x5bae35(_0x5d22ce) {
      ctx.fpChanged = true;
      _0x16fe8d(window.screen, _0x5d22ce);
    }
    function _0x5b805a(_0x254472) {
      ctx.fpChanged = true;
      if (_0x254472.userAgent) {
        let _0xd24b1f = _0x254472.userAgent.split("/");
        _0x254472.appVersion = _0xd24b1f.slice(1).join("/");
        _0x254472.appCodeName = _0xd24b1f[0];
      }
      let _0x530d51 = {
        "userAgentData": () => ({
          ..._0x254472.userAgentData,
          "toJSON": () => _0x254472.userAgentData,
          "getHighEntropyValues": async () => _0x254472.userAgentData
        })
      };
      _0x16fe8d(window.navigator, _0x254472, _0x530d51);
    }
    function _0x16fe8d(_0x532ff9, _0x2e9cb3, _0x5a3f48 = {}) {
      let _0x2eed04 = Object.getPrototypeOf(_0x532ff9);
      for (let [_0x2a027f, _0x4f6b21] of Object.entries(_0x2e9cb3)) {
        let _0x42e6a9 = _0x5a3f48[_0x2a027f] || (() => _0x4f6b21);
        _0x42e6a9.toString = () => "function get " + _0x2a027f + "() { [native code] }";
        Object.defineProperty(_0x2eed04, _0x2a027f, {
          "get": _0x42e6a9,
          "set": undefined,
          "enumerable": true,
          "configurable": true
        });
      }
    }
    let _0x287bc9 = {
      "replacePerformance": _0x16af9c,
      "replaceScreen": _0x5bae35,
      "replaceNavigator": _0x5b805a,
      "replaceTimezone": _0x1cc1d2,
      "getUSDateString": _0x477a16,
      "replaceSimple": _0x47124f.bind(null, _0x3faaad),
      "replaceSimpleIphone": _0x47124f.bind(null, _0x3e1c97)
    };
    return _0x287bc9;
  }
  function _0x212979() {
    _0x25da32();
    _0x4fc39b();
    function _0x5dbfef() {
      const _0x2ca6a3 = new URL("https://gemini.google.com/app");
      if ("getEntriesByType" in Performance.prototype) {
        const _0x30a3ae = Performance.prototype.getEntriesByType;
        Performance.prototype.getEntriesByType = function (_0x39154a) {
          return _0x30a3ae.apply(this, [_0x39154a]).map(_0x2b426d => {
            return Object.defineProperty(_0x2b426d, "name", {
              "value": _0x2ca6a3.href,
              "configurable": true,
              "enumerable": true
            }), _0x2b426d;
          });
        };
      }
      let _0x2a28c3 = {
          ...window.location,
          "host": _0x2ca6a3.host,
          "origin": _0x2ca6a3.origin,
          "href": _0x2ca6a3.href,
          get "pathname"() {
            return _0x2ca6a3.pathname;
          },
          get "hostname"() {
            return _0x2ca6a3.hostname;
          },
          "toString": () => _0x2ca6a3.toString(),
          "valueOf": () => _0x2a28c3
        },
        _0x813443 = new WeakMap(),
        _0x5de407 = new Proxy(document, {
          "get"(_0x3f7b65, _0xb000b5) {
            let _0x57d37a = String(_0xb000b5);
            if (_0x57d37a === "location") return _0x2a28c3;
            if (_0x57d37a === "URL") return _0x2ca6a3.href;
            let _0x403298 = Reflect.get(_0x3f7b65, _0xb000b5);
            if (typeof _0x403298 == "function") {
              return !_0x813443.has(_0x403298) && _0x813443.set(_0x403298, _0x403298.bind(_0x3f7b65)), _0x813443.get(_0x403298);
            }
            return _0x403298;
          },
          "set"(_0x558781, _0x54eca5, _0xac7d8f) {
            return Reflect.set(_0x558781, _0x54eca5, _0xac7d8f);
          }
        }),
        _0x7c627e = new WeakMap(),
        _0x3f7d43 = new Proxy(window, {
          "get"(_0x528abe, _0x1f3117) {
            let _0x5ec07f = String(_0x1f3117);
            if (_0x5ec07f === "location") return _0x2a28c3;
            if (_0x5ec07f === "document") return _0x5de407;
            let _0x3b852e = Reflect.get(_0x528abe, _0x1f3117);
            if (typeof _0x3b852e == "function") {
              if (!_0x7c627e.has(_0x3b852e)) {
                _0x7c627e.set(_0x3b852e, _0x3b852e.bind(_0x528abe));
              }
              return _0x7c627e.get(_0x3b852e);
            }
            return _0x3b852e;
          },
          "set"(_0x50ad41, _0x4cb76d, _0x30c42d) {
            return Reflect.set(_0x50ad41, _0x4cb76d, _0x30c42d);
          }
        }),
        _0x2ff22b = new WeakMap();
      function _0x532bde(_0x31ba04) {
        return new Proxy(_0x31ba04, {
          "get"(_0x4b9c61, _0x2b467b) {
            let _0x38ca78 = String(_0x2b467b);
            if (_0x38ca78 === "self" || _0x38ca78 === "window") return _0x3f7d43;
            if (_0x38ca78 === "parent" || _0x38ca78 === "top") return _0x3f7d43;
            let _0x2cb5cb = Reflect.get(_0x4b9c61, _0x2b467b);
            if (typeof _0x2cb5cb == "function") {
              return !_0x2ff22b.has(_0x2cb5cb) && _0x2ff22b.set(_0x2cb5cb, _0x2cb5cb.bind(_0x4b9c61)), _0x2ff22b.get(_0x2cb5cb);
            }
            return Reflect.get(_0x4b9c61, _0x2b467b);
          },
          "set"(_0x10a743, _0x42e781, _0x4a82d5) {
            return Reflect.set(_0x10a743, _0x42e781, _0x4a82d5);
          }
        });
      }
      window._fiw = _0x532bde;
    }
    _0x5dbfef();
    setInterval(() => {
      for (let _0x31ffa9 of ["button[data-test-id=\"export-to-docs-button\"] span", "[aria-label=\"导出到 Google 文档\"] span"]) {
        let _0x361d9b = document.querySelector(_0x31ffa9);
        _0x361d9b && (_0x361d9b.textContent = "导出");
      }
    }, 600);
  }
  function _0xcc8eed() {
    return navigator.language.includes("zh");
  }
  function _0x228392() {
    const _0x58bc3a = ["BardFrontendService/StreamGenerate", "batchexecute"],
      _0x1f89ed = {
        "request_error": _0x2ee67f => {
          layer.msg(_0x2ee67f, {
            "time": 3000,
            "icon": 2
          });
        },
        "need_login": _0x2e09c => {
          layer.msg(_0x2e09c, {
            "time": 3000,
            "icon": 2
          });
          setTimeout(() => {
            location.href = _0x468e2f;
          }, 2000);
        },
        "need_reload": () => {
          let _0x137ef1 = "This conversation comes from other server, reloading the page";
          _0xcc8eed() && (_0x137ef1 = "此对话来自其他车队，即将刷新页面...");
          layer.msg(_0x137ef1, {
            "icon": 0,
            "time": 3000
          });
          location.reload();
        },
        "default": _0x29466b => {
          _0x29466b && layer.msg(_0x29466b, {
            "time": 5000,
            "icon": 2
          });
        }
      },
      _0x25aa62 = ["/gemini/log", "/_/BardChatUi/jserror"],
      _0x9450f9 = XMLHttpRequest.prototype.open,
      _0x5a4db0 = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open = function (_0x10766b, _0xb72a82, ..._0x5a00b1) {
      return this._url = _0xb72a82, _0x9450f9.apply(this, [_0x10766b, _0xb72a82, ..._0x5a00b1]);
    };
    XMLHttpRequest.prototype.send = function (..._0x187fe7) {
      const _0x11a7a6 = (() => {
          try {
            return new URL(this._url, location.origin).pathname;
          } catch {
            return this._url;
          }
        })(),
        _0x5c42ee = _0x25aa62.some(_0x5dc9b0 => _0x11a7a6 === _0x5dc9b0);
      if (_0x5c42ee) return;
      const _0x580890 = _0x58bc3a.some(_0x109200 => this._url?.["includes"](_0x109200));
      if (_0x580890) {
        const _0x791491 = () => {
          if (this.readyState === 4 && this.status >= 200) {
            const _0x581373 = this.responseText;
            if (_0x581373 && _0x581373.trim().startsWith("{\"error\"")) try {
              const _0x4b03ca = JSON.parse(_0x581373),
                _0x1e6843 = _0x4b03ca.error,
                _0x40bc9d = _0x4b03ca.message;
              _0x1e6843 && _0x1f89ed[_0x1e6843] ? _0x1f89ed[_0x1e6843](_0x40bc9d) : _0x1f89ed.default(_0x40bc9d || _0x1e6843);
            } catch (_0x1201cb) {
              console.error("Error parsing XHR response:", _0x1201cb);
            }
          }
        };
        this.addEventListener("readystatechange", _0x791491);
        this.addEventListener("load", _0x791491);
      }
      return _0x5a4db0.apply(this, _0x187fe7);
    };
    const _0x20f12c = window.fetch;
    window.fetch = function (_0x41d20b, _0x112609) {
      const _0x36da7d = typeof _0x41d20b === "string" ? _0x41d20b : _0x41d20b?.["url"] || "",
        _0x4a29c8 = (() => {
          try {
            return new URL(_0x36da7d, location.origin).pathname;
          } catch {
            return _0x36da7d;
          }
        })(),
        _0x78a5ac = _0x25aa62.some(_0xb27b64 => _0x4a29c8 === _0xb27b64);
      if (_0x78a5ac) {
        return Promise.resolve(new Response("{}", {
          "status": 200
        }));
      }
      return _0x20f12c.apply(this, arguments);
    };
    const _0x291d0a = navigator.sendBeacon;
    navigator.sendBeacon = function (_0x328862, _0x73907f) {
      const _0x4d0073 = (() => {
          try {
            return new URL(_0x328862, location.origin).pathname;
          } catch {
            return _0x328862;
          }
        })(),
        _0x52ecd1 = _0x25aa62.some(_0x44b8e4 => _0x4d0073 === _0x44b8e4);
      if (_0x52ecd1) {
        return true;
      }
      return _0x291d0a.apply(this, arguments);
    };
  }
  function _0x345322() {
    const _0x2189a4 = "Bard-Color-Theme",
      _0x2ac691 = localStorage.getItem(_0x2189a4) || "";
    document.body.classList.remove("light-theme", "dark-theme");
    if (_0x2ac691 === "Bard-Light-Theme") {
      document.body.classList.add("light-theme");
    } else document.body.classList.add("dark-theme");
  }
  function _0x47056c() {
    const _0x146321 = "Bard-Color-Theme",
      _0x7fbd9d = localStorage.getItem(_0x146321) || "";
    let _0x4cbc2b, _0x5247d8;
    _0x7fbd9d === "Bard-Dark-Theme" || _0x7fbd9d === "" ? (_0x4cbc2b = "Bard-Light-Theme", _0x5247d8 = "light-theme") : (_0x4cbc2b = "Bard-Dark-Theme", _0x5247d8 = "dark-theme");
    localStorage.setItem(_0x146321, _0x4cbc2b);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(_0x5247d8);
    layer.msg(_0x5247d8 === "light-theme" ? "已切换到浅色主题｜Switched to Light Theme" : "已切换到深色主题｜Switched to Dark Theme");
  }
  function _0x3535f9() {
    !document.querySelector(".radial-menu-container") && _0x2e0d16();
  }
  _0x38a5ab();
  _0x345322();
  _0x212979();
  _0x228392();
  setInterval(() => {
    _0x94e7ea();
    _0x3535f9();
  }, 100);
  function _0x38a5ab() {
    const _0x13f6b1 = "/frontend-api/getConfig";
    fetch(_0x13f6b1).then(_0x4b24b3 => _0x4b24b3.json()).then(({
      code: _0x322574,
      data: _0x490526
    }) => {
      if (_0x322574 === 1) {
        _0x468e2f = _0x490526.theme + "#/gemini-carlist";
        _0x5a341f = !!_0x490526.isEnabledChatBuySub && _0x490526.theme.indexOf("pastel") > -1;
        _0x2a975f = !!_0x490526.isBuyCrossGeminiChat;
        _0x44220b = !!_0x490526.isGeminiAdvanceExport;
        const _0x4de8cc = document.querySelector(".radial-menu-container");
        _0x4de8cc && _0x4de8cc.remove();
        _0x2e0d16();
        _0x44220b && _0x44a5ac();
      } else window.location.href = _0x468e2f;
    }).catch(_0x491d5e => {});
  }
  function _0x138f69() {
    convId = window.location.pathname.split("/chat/")[1];
    if (!convId) {
      layer.msg("当前未进行任何会话｜No conversation");
      return;
    }
    const _0x38eae7 = "/frontend-api/setClaudeCrossChat?convId=" + convId;
    fetch(_0x38eae7).then(_0x2e41aa => _0x2e41aa.json()).then(({
      code: _0x442c5d,
      msg: _0x596b69
    }) => {
      _0x442c5d === 1 ? _0x535b21("/") : layer.msg(_0x596b69);
    });
  }
  function _0x535b21() {
    const _0x477dcb = setLoading("正在获取最空闲的车｜Getting Idle Car..."),
      _0x42d6d7 = "/frontend-api/getIdleGeminiCar";
    fetch(_0x42d6d7).then(_0xd0c3ca => _0xd0c3ca.json()).then(({
      code: _0x1f30e0,
      msg: _0x11bbec
    }) => {
      console.log(_0x1f30e0, _0x11bbec);
      if (_0x1f30e0 === 1) {
        window.location.href = "/app";
      } else {
        if (_0x1f30e0 === -1) {
          window.location.href = _0x468e2f;
        } else {
          alert(_0x11bbec);
        }
      }
      layer.close(_0x477dcb);
    }).catch(_0x1924de => {
      layer.close(_0x477dcb);
    });
  }
  const _0x94e7ea = () => {
    const _0x1c1284 = document.querySelector("div.my-stuff-container.ng-star-inserted");
    _0x1c1284 && (_0x1c1284.style.display = "none");
    const _0x4d7096 = document.querySelector("mat-action-list.mat-mdc-action-list.mat-mdc-list-base.mdc-list.desktop-controls.ng-star-inserted");
    _0x4d7096 && (_0x4d7096.style.display = "none");
    const _0x5b9bc3 = document.querySelector("div.xap-count-badge-container");
    _0x5b9bc3 && (_0x5b9bc3.style.display = "none");
    const _0x382a24 = document.querySelector("div.gb_2d.gb_wb.gb_Sd");
    _0x382a24 && (_0x382a24.style.display = "none");
    const _0x2e3af1 = document.querySelector("div.buttons-container.adv-upsell.ng-star-inserted");
    if (_0x2e3af1) {
      _0x2e3af1.style.display = "none";
    }
    const _0x4d8096 = document.querySelector("div.condensed-tos-disclaimer.ng-star-inserted");
    _0x4d8096 && (_0x4d8096.style.display = "none");
    const _0x2ef936 = document.querySelector("div.side-nav-entry-container.ng-star-inserted");
    if (_0x2ef936) {
      _0x2ef936.style.display = "none";
    }
    const _0x4d6ebf = document.querySelector("div.buttons-container.referral.ng-star-inserted");
    _0x4d6ebf && (_0x4d6ebf.style.display = "none");
    const _0x180bac = document.querySelector("div.mobile-controls.ng-star-inserted");
    _0x180bac && (_0x180bac.style.display = "none");
    const _0x14a792 = document.querySelector("search-nav-bar.ng-star-inserted");
    _0x14a792 && (_0x14a792.style.display = "none");
    const _0x5e78aa = document.querySelector("search-nav-button");
    _0x5e78aa && (_0x5e78aa.style.display = "none");
    const _0x5f3015 = document.querySelector("mat-snack-bar-container");
    _0x5f3015 && (_0x5f3015.style.display = "none");
    const _0x152c5d = document.querySelector("div.enterprise-ogb-wrapper.ng-star-inserted");
    _0x152c5d && (_0x152c5d.style.display = "none");
    const _0x109a6e = document.querySelector("mat-action-list > notebooks-import");
    _0x109a6e && (_0x109a6e.style.display = "none");
    const _0xd5afdb = document.querySelector("mat-action-list > drive-uploader");
    _0xd5afdb && (_0xd5afdb.style.display = "none");
  };
  function _0x1a08ba() {
    if (!_0x44220b) return _0x215128();
    const _0x150546 = _0x351bd1();
    if (!_0x150546 || !_0x150546.convId) {
      return layer.msg("当前未在对话页面｜Not conversation page"), null;
    }
    layer.open({
      "type": 1,
      "title": false,
      "content": "\n      <div style=\"padding: 32px 40px; background: #fff; border-radius: 16px;\">\n        <div style=\"text-align: center; margin-bottom: 28px;\">\n          <p style=\"font-size: 18px; color: #1a1a1a; margin: 0; font-weight: 600;\">选择导出格式</p>\n          <p style=\"font-size: 13px; color: #888; margin-top: 8px;\">选择适合您需求的格式下载对话内容</p>\n        </div>\n        <div style=\"display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; max-width: 340px; margin: 0 auto;\">\n          <div style=\"text-align: center; flex: 0 0 calc(50% - 8px);\">\n            <button class=\"layui-btn layui-btn-lg\" style=\"width: 100%; height: 90px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: none; background: #f5f7fa; color: #333; border-radius: 12px; box-shadow: none; transition: all 0.2s ease;\"\n                    onmouseover=\"this.style.background='#e8f4ff'; this.style.transform='translateY(-2px)';\"\n                    onmouseout=\"this.style.background='#f5f7fa'; this.style.transform='translateY(0)';\"\n                    onclick=\"downloadConversation('md')\">\n              <i class=\"layui-icon layui-icon-file-b\" style=\"font-size: 32px; color: #1890ff; margin-top: 4px; margin-bottom: -6px;\"></i>\n              <span style=\"font-size: 13px; font-weight: 500;\">Markdown</span>\n            </button>\n            <p style=\"font-size: 11px; color: #999; margin-top: 8px;\">原始格式，支持再次编辑</p>\n          </div>\n          <div style=\"text-align: center; flex: 0 0 calc(50% - 8px);\">\n            <button class=\"layui-btn layui-btn-lg\" style=\"width: 100%; height: 90px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: none; background: #f5f7fa; color: #333; border-radius: 12px; box-shadow: none; transition: all 0.2s ease;\"\n                    onmouseover=\"this.style.background='#fff5f2'; this.style.transform='translateY(-2px)';\"\n                    onmouseout=\"this.style.background='#f5f7fa'; this.style.transform='translateY(0)';\"\n                    onclick=\"downloadConversation('pdf')\">\n              <i class=\"layui-icon layui-icon-file\" style=\"font-size: 32px; color: #ff5722; margin-top: 4px; margin-bottom: -6px;\"></i>\n              <span style=\"font-size: 13px; font-weight: 500;\">PDF</span>\n            </button>\n            <p style=\"font-size: 11px; color: #999; margin-top: 8px;\">便于分享和打印阅读</p>\n          </div>\n          <div style=\"text-align: center; flex: 0 0 calc(50% - 8px);\">\n            <button class=\"layui-btn layui-btn-lg\" style=\"width: 100%; height: 90px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: none; background: #f5f7fa; color: #333; border-radius: 12px; box-shadow: none; transition: all 0.2s ease;\"\n                    onmouseover=\"this.style.background='#f0fff4'; this.style.transform='translateY(-2px)';\"\n                    onmouseout=\"this.style.background='#f5f7fa'; this.style.transform='translateY(0)';\"\n                    onclick=\"downloadConversation('png')\">\n              <i class=\"layui-icon layui-icon-picture\" style=\"font-size: 32px; color: #5FB878; margin-top: 4px; margin-bottom: -6px;\"></i>\n              <span style=\"font-size: 13px; font-weight: 500;\">图片</span>\n            </button>\n            <p style=\"font-size: 11px; color: #999; margin-top: 8px;\">适合社交媒体分享</p>\n          </div>\n          <div style=\"text-align: center; flex: 0 0 calc(50% - 8px);\">\n            <button class=\"layui-btn layui-btn-lg\" style=\"width: 100%; height: 90px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: none; background: #f5f7fa; color: #333; border-radius: 12px; box-shadow: none; transition: all 0.2s ease;\"\n                    onmouseover=\"this.style.background='#f0f4ff'; this.style.transform='translateY(-2px)';\"\n                    onmouseout=\"this.style.background='#f5f7fa'; this.style.transform='translateY(0)';\"\n                    onclick=\"downloadConversation('docx')\">\n              <i class=\"layui-icon layui-icon-template-1\" style=\"font-size: 32px; color: #2b579a; margin-top: 4px; margin-bottom: -6px;\"></i>\n              <span style=\"font-size: 13px; font-weight: 500;\">Word</span>\n            </button>\n            <p style=\"font-size: 11px; color: #999; margin-top: 8px;\">Office文档便于编辑</p>\n          </div>\n        </div>\n      </div>\n    ",
      "area": ["600px", "auto"],
      "shade": 0.4,
      "shadeClose": true,
      "closeBtn": 1,
      "anim": 0,
      "skin": "layer-export-dialog-flat"
    });
  }
  function _0x2df94f() {
    fetch("/frontend-api/releaseGeminiFleetQuota").then(_0xd540aa => _0xd540aa.json()).then(() => {
      window.location.href = _0x468e2f;
    }).catch(() => {
      window.location.href = _0x468e2f;
    });
  }
  function _0x2e0d16() {
    const _0x437793 = document.createElement("style");
    _0x437793.id = "radial-menu-styles";
    _0x437793.textContent = "\n    .radial-menu-container {\n      position: fixed;\n      right: 20px;\n      bottom: 100px;\n      z-index: 1000;\n      user-select: none;\n    }\n\n    .radial-menu-trigger {\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      border: none;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n      transition: transform 0.3s ease, box-shadow 0.3s ease;\n      position: relative;\n      z-index: 10;\n    }\n\n    .radial-menu-trigger:hover {\n      transform: scale(1.1);\n      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);\n    }\n\n    .radial-menu-trigger.open {\n      transform: rotate(45deg);\n    }\n\n    .radial-menu-trigger svg {\n      width: 24px;\n      height: 24px;\n      stroke: white;\n      stroke-width: 2;\n      fill: none;\n      transition: transform 0.3s ease;\n    }\n\n    .radial-menu-items {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      pointer-events: none;\n      z-index: 1001;\n    }\n\n    .radial-menu-items.open {\n      pointer-events: auto;\n    }\n\n    .radial-menu-item {\n      position: absolute;\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background: #393939;\n      border: 2px solid transparent;\n      cursor: pointer;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0);\n      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n                  opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n                  background 0.15s ease-out,\n                  box-shadow 0.15s ease-out,\n                  border-color 0.15s ease-out;\n    }\n\n    .radial-menu-items.open .radial-menu-item {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n      transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n                  opacity 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55),\n                  background 0.15s ease-out,\n                  box-shadow 0.15s ease-out;\n    }\n\n    .radial-menu-items.open .radial-menu-item:hover {\n      transform: translate(-50%, -50%) scale(1.12);\n      transition: transform 0.15s ease-out,\n                  background 0.15s ease-out,\n                  box-shadow 0.15s ease-out;\n    }\n\n    .radial-menu-item:hover {\n      background: #4a4a4a;\n      border-color:rgba(102, 126, 234, 0.41);\n      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);\n    }\n\n    .radial-menu-item svg {\n      width: 18px;\n      height: 18px;\n      stroke: #c9c6be;\n      stroke-width: 2;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      fill: none;\n      transition: stroke 0.15s ease-out;\n    }\n\n    .radial-menu-item:hover svg {\n      stroke: #fff;\n    }\n\n    .radial-menu-tooltip {\n      position: absolute;\n      right: calc(100% + 10px);\n      top: 50%;\n      transform: translateY(-50%);\n      background: rgba(0, 0, 0, 0.9);\n      color: white;\n      padding: 6px 12px;\n      border-radius: 4px;\n      font-size: 12px;\n      white-space: nowrap;\n      pointer-events: none;\n      opacity: 0;\n      transition: opacity 0.12s ease-out;\n      z-index: 1002;\n    }\n\n    .radial-menu-item:hover .radial-menu-tooltip {\n      opacity: 1;\n    }\n\n    .radial-menu-trigger-tooltip {\n      position: absolute;\n      right: calc(100% + 10px);\n      top: 50%;\n      transform: translateY(-50%);\n      background: rgba(0, 0, 0, 0.9);\n      color: white;\n      padding: 6px 12px;\n      border-radius: 4px;\n      font-size: 12px;\n      white-space: nowrap;\n      pointer-events: none;\n      opacity: 0;\n      transition: opacity 0.2s ease;\n      z-index: 1002;\n    }\n\n    .radial-menu-trigger:hover .radial-menu-trigger-tooltip {\n      opacity: 1;\n    }\n\n    .radial-menu-trigger.open .radial-menu-trigger-tooltip {\n      opacity: 0;\n    }\n\n    .radial-menu-backdrop {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 999;\n      display: none;\n    }\n\n    .radial-menu-backdrop.open {\n      display: block;\n    }\n  ";
    document.head.appendChild(_0x437793);
    const _0x1cb850 = document.createElement("div");
    _0x1cb850.className = "radial-menu-container";
    const _0x447897 = document.createElement("div");
    _0x447897.className = "radial-menu-backdrop";
    _0x1cb850.appendChild(_0x447897);
    const _0x33630f = document.createElement("div");
    _0x33630f.className = "radial-menu-items";
    _0x1cb850.appendChild(_0x33630f);
    const _0x323f10 = document.createElement("button");
    _0x323f10.className = "radial-menu-trigger";
    _0x323f10.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <circle cx=\"12\" cy=\"12\" r=\"3\"/>\n      <path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/>\n    </svg>";
    const _0xbf18eb = document.createElement("span");
    _0xbf18eb.className = "radial-menu-trigger-tooltip";
    _0xbf18eb.textContent = "快捷菜单｜Quick Menu";
    _0x323f10.appendChild(_0xbf18eb);
    _0x1cb850.appendChild(_0x323f10);
    let _0x50ce33 = false;
    function _0x176015() {
      _0x50ce33 = !_0x50ce33;
      _0x323f10.classList.toggle("open", _0x50ce33);
      _0x33630f.classList.toggle("open", _0x50ce33);
      _0x447897.classList.toggle("open", _0x50ce33);
    }
    _0x323f10.addEventListener("click", _0x2eff8b => {
      _0x2eff8b.stopPropagation();
      _0x176015();
    });
    let _0x225de = false;
    _0x323f10.addEventListener("touchstart", _0x5094a2 => {
      _0x225de = true;
      _0x5094a2.stopPropagation();
    }, {
      "passive": true
    });
    _0x323f10.addEventListener("touchend", _0x3a7ed8 => {
      _0x225de && (_0x225de = false, _0x3a7ed8.stopPropagation(), _0x3a7ed8.preventDefault(), _0x176015());
    }, {
      "passive": false
    });
    _0x447897.addEventListener("click", () => {
      if (_0x50ce33) _0x176015();
    });
    _0x447897.addEventListener("touchend", _0x17031a => {
      _0x50ce33 && (_0x17031a.preventDefault(), _0x176015());
    }, {
      "passive": false
    });
    const _0x91c1f6 = [{
        "icon": "<svg viewBox=\"0 0 24 24\">\n        <path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>\n        <polyline points=\"9 22 9 12 15 12 15 22\"/>\n      </svg>",
        "tooltip": "回到首页｜Back Home",
        "onClick": () => _0x2df94f()
      }, {
        "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n  <path\n    d=\"M20.5 12c0 4.7-3.8 8.5-8.5 8.5-4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5 2.3 0 4.4 0.9 6 2.5l2-2\"\n    fill=\"none\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n  />\n  <path d=\"M21 6.5v-5h-5\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>",
        "tooltip": "一键换车｜Change Server",
        "onClick": () => _0x535b21()
      }, {
        "icon": "<svg viewBox=\"0 0 24 24\">\n        <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/>\n        <polyline points=\"7 10 12 15 17 10\"/>\n        <line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/>\n      </svg>",
        "tooltip": "导出对话｜Export Conversation",
        "onClick": () => _0x1a08ba()
      }, {
        "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <circle cx=\"12\" cy=\"12\" r=\"5\"/>\n        <line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/>\n        <line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/>\n        <line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/>\n        <line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/>\n        <line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/>\n        <line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/>\n        <line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/>\n        <line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/>\n      </svg>",
        "tooltip": "切换主题｜Toggle Theme",
        "onClick": () => _0x47056c()
      }, {
        "icon": "<svg viewBox=\"0 0 24 24\">\n        <path d=\"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12z\"/>\n        <path d=\"M19 4h-3.5l-1-1h-5l-1 1H5v2h14z\"/>\n      </svg>",
        "tooltip": "删除对话｜Delete Conversation",
        "onClick": () => _0x3cfc8a()
      }],
      _0x2d145a = {
        "icon": "<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n  <path\n    d=\"M20.5 12c0 4.7-3.8 8.5-8.5 8.5-4.7 0-8.5-3.8-8.5-8.5 0-4.7 3.8-8.5 8.5-8.5 2.3 0 4.4 0.9 6 2.5l2-2\"\n    fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\"\n  />\n  <path d=\"M21 6.5v-5h-5\" fill=\"none\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <circle cx=\"12\" cy=\"12\" r=\"4\" fill=\"none\" stroke-width=\"2\" />\n</svg>",
        "tooltip": "换车继续聊｜Change Car and Continue Chat",
        "onClick": () => _0x138f69()
      },
      _0x2ffb58 = {
        "icon": "<svg viewBox=\"0 0 24 24\">\n        <circle cx=\"9\" cy=\"21\" r=\"1\"/>\n        <circle cx=\"20\" cy=\"21\" r=\"1\"/>\n        <path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/>\n      </svg>",
        "tooltip": "站内购买｜In-Site Purchase",
        "onClick": () => showIframeDialog("站内购买", "/pastel#/subscribe", 710, 1125, 2)
      };
    _0x5a341f && _0x91c1f6.push(_0x2ffb58);
    _0x2a975f && _0x91c1f6.push(_0x2d145a);
    const _0x5cc839 = 70,
      _0x5aa08a = -90,
      _0x4090a0 = 180;
    _0x91c1f6.forEach((_0x29e7f1, _0x332635) => {
      const _0x493874 = document.createElement("button");
      _0x493874.className = "radial-menu-item";
      _0x493874.innerHTML = _0x29e7f1.icon;
      const _0x29bde8 = _0x91c1f6.length > 1 ? _0x4090a0 / (_0x91c1f6.length - 1) : 0,
        _0x4ff381 = _0x5aa08a - _0x332635 * _0x29bde8,
        _0x757878 = _0x4ff381 * Math.PI / 180,
        _0xe8a888 = Math.cos(_0x757878) * _0x5cc839,
        _0x446fb5 = Math.sin(_0x757878) * _0x5cc839;
      _0x493874.style.left = _0xe8a888 + "px";
      _0x493874.style.top = _0x446fb5 + "px";
      _0x493874.style.transitionDelay = _0x332635 * 0.03 + "s";
      const _0x589193 = document.createElement("span");
      _0x589193.className = "radial-menu-tooltip";
      _0x589193.textContent = _0x29e7f1.tooltip;
      _0x493874.appendChild(_0x589193);
      const _0x3f5bb2 = _0xbfb260 => {
        _0xbfb260.stopPropagation();
        _0xbfb260.preventDefault();
        _0x29e7f1.onClick();
        _0x176015();
      };
      _0x493874.addEventListener("click", _0x3f5bb2);
      let _0x439949 = false;
      _0x493874.addEventListener("touchstart", _0x57ed70 => {
        _0x439949 = true;
        _0x57ed70.stopPropagation();
      }, {
        "passive": true
      });
      _0x493874.addEventListener("touchend", _0x85935f => {
        if (_0x439949) {
          _0x439949 = false;
          _0x85935f.stopPropagation();
          _0x85935f.preventDefault();
          _0x29e7f1.onClick();
          _0x176015();
        }
      }, {
        "passive": false
      });
      _0x33630f.appendChild(_0x493874);
    });
    _0x5f28ea(_0x1cb850, _0x323f10);
    document.body.appendChild(_0x1cb850);
  }
  function _0x5f28ea(_0xae6e52, _0x1c8f9d) {
    let _0xd8f92c = false,
      _0x3bc432,
      _0x1bbec5,
      _0x116821,
      _0x1bfaa7,
      _0x3e8257 = false;
    function _0x3cc23c(_0x488105) {
      if (_0x488105.target !== _0x1c8f9d && !_0x1c8f9d.contains(_0x488105.target)) return;
      _0xd8f92c = true;
      _0x3e8257 = false;
      const _0x24d5d0 = _0x488105.touches ? _0x488105.touches[0] : _0x488105;
      _0x3bc432 = _0x24d5d0.clientX;
      _0x1bbec5 = _0x24d5d0.clientY;
      const _0x135956 = _0xae6e52.getBoundingClientRect();
      _0x116821 = window.innerWidth - _0x135956.right;
      _0x1bfaa7 = window.innerHeight - _0x135956.bottom;
    }
    function _0x439e21(_0x5aeac5) {
      if (!_0xd8f92c) return;
      const _0xbbace = _0x5aeac5.touches ? _0x5aeac5.touches[0] : _0x5aeac5,
        _0x3c3aed = _0x3bc432 - _0xbbace.clientX,
        _0xa1d878 = _0x1bbec5 - _0xbbace.clientY;
      if (Math.abs(_0x3c3aed) > 5 || Math.abs(_0xa1d878) > 5) {
        _0x3e8257 = true;
        _0x5aeac5.preventDefault();
      }
      if (!_0x3e8257) return;
      let _0x3585db = _0x116821 + _0x3c3aed,
        _0x302c9b = _0x1bfaa7 + _0xa1d878;
      _0x3585db = Math.max(10, Math.min(_0x3585db, window.innerWidth - 60));
      _0x302c9b = Math.max(10, Math.min(_0x302c9b, window.innerHeight - 60));
      _0xae6e52.style.right = _0x3585db + "px";
      _0xae6e52.style.bottom = _0x302c9b + "px";
    }
    function _0x3475d5(_0x421eca) {
      if (!_0xd8f92c) return;
      _0x3e8257 && _0x421eca.cancelable && _0x421eca.preventDefault();
      _0xd8f92c = false;
      _0x3e8257 && localStorage.setItem("radial-menu-position", JSON.stringify({
        "right": parseInt(_0xae6e52.style.right),
        "bottom": parseInt(_0xae6e52.style.bottom)
      }));
    }
    _0x1c8f9d.addEventListener("mousedown", _0x3cc23c);
    document.addEventListener("mousemove", _0x439e21);
    document.addEventListener("mouseup", _0x3475d5);
    _0x1c8f9d.addEventListener("touchstart", _0x3cc23c, {
      "passive": true
    });
    document.addEventListener("touchmove", _0x439e21, {
      "passive": false
    });
    document.addEventListener("touchend", _0x3475d5, {
      "passive": false
    });
    const _0x3c9f45 = localStorage.getItem("radial-menu-position");
    if (_0x3c9f45) try {
      const _0x67f522 = JSON.parse(_0x3c9f45);
      _0xae6e52.style.right = _0x67f522.right + "px";
      _0xae6e52.style.bottom = _0x67f522.bottom + "px";
    } catch (_0x4429ae) {}
  }
  function _0x3e8aa4(_0x38449b) {
    return _0x38449b;
  }
  function _0x529ace(_0x19ca4a, _0x27d719) {
    try {
      if (!window.jspdf || !window.html2canvas) {
        layer.msg("PDF 转换库未加载，请确保已引入 jsPDF 和 html2canvas 库");
        return;
      }
      const _0x4fe033 = layer.load(2, {
          "shade": [0.3, "#000"]
        }),
        _0x1517fe = _0x3e8aa4(_0x19ca4a),
        _0x2f7799 = document.createElement("div");
      _0x2f7799.style.cssText = "\n      position: absolute;\n      left: -9999px;\n      top: 0;\n      width: 794px;\n      padding: 40px;\n      background: white;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Microsoft YaHei\", \"微软雅黑\", sans-serif;\n      font-size: 14px;\n      line-height: 1.8;\n      color: #333;\n    ";
      _0x2f7799.innerHTML = "\n      <style>\n        * { box-sizing: border-box; }\n        h1, h2, h3, h4, h5, h6 { \n          margin-top: 24px; \n          margin-bottom: 16px; \n          font-weight: 600; \n          line-height: 1.25; \n          color: #24292e;\n        }\n        h1 { font-size: 28px; }\n        h2 { font-size: 22px; }\n        h3 { font-size: 18px; }\n        p { margin-bottom: 16px; }\n        code { \n          background: #f6f8fa; \n          padding: 2px 4px; \n          border-radius: 3px; \n          font-family: Consolas, Monaco, monospace;\n          font-size: 13px;\n          color: #e01e5a;\n        }\n        pre { \n          background: #f6f8fa; \n          padding: 16px; \n          border-radius: 6px; \n          overflow: auto; \n          margin-bottom: 16px;\n          border: 1px solid #e1e4e8;\n        }\n        pre code {\n          background: none;\n          padding: 0;\n          color: #333 !important;\n          font-size: 13px;\n          line-height: 1.5;\n        }\n        blockquote { \n          border-left: 4px solid #0366d6; \n          padding-left: 16px; \n          margin: 0 0 16px 0; \n          color: #6a737d; \n        }\n        ul, ol { margin-bottom: 16px; padding-left: 32px; }\n        li { margin-bottom: 8px; }\n        table { \n          border-collapse: collapse; \n          margin-bottom: 16px; \n          width: 100%; \n        }\n        th, td { \n          border: 1px solid #dfe2e5; \n          padding: 8px 12px; \n        }\n        th { \n          background: #f6f8fa; \n          font-weight: 600; \n        }\n      </style>\n    ";
      if (window.markdownit) {
        const _0x155e07 = window.markdownit({
            "html": false,
            "breaks": true,
            "linkify": true
          }),
          _0x584266 = "\n        <div style=\"text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #e1e4e8;\">\n          <h1 style=\"font-size: 32px; margin: 0 0 10px 0;\">" + _0x27d719.replace(".pdf", "").split("_")[0] + "</h1>\n          <p style=\"color: #666; font-size: 14px; margin: 0;\">导出时间：" + new Date().toLocaleString("zh-CN") + "</p>\n        </div>\n      ";
        _0x2f7799.innerHTML += _0x584266 + _0x155e07.render(_0x1517fe);
      } else {
        _0x2f7799.innerHTML += _0x1517fe.replace(/\n/g, "<br>").replace(/### (.*)/g, "<h3>$1</h3>").replace(/## (.*)/g, "<h2>$1</h2>").replace(/# (.*)/g, "<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>").replace(/`([^`]+)`/g, "<code>$1</code>");
      }
      document.body.appendChild(_0x2f7799);
      html2canvas(_0x2f7799, {
        "scale": 2,
        "useCORS": true,
        "logging": false,
        "backgroundColor": "#ffffff",
        "windowWidth": 874,
        "windowHeight": _0x2f7799.scrollHeight
      }).then(_0x16be10 => {
        document.body.removeChild(_0x2f7799);
        const {
            jsPDF: _0x515882
          } = window.jspdf,
          _0x5d4567 = _0x16be10.toDataURL("image/png"),
          _0x3fb01b = 210,
          _0x54543e = 297,
          _0x320b9a = _0x3fb01b - 20,
          _0x267466 = _0x16be10.height * _0x320b9a / _0x16be10.width,
          _0x5176c5 = new _0x515882({
            "orientation": "portrait",
            "unit": "mm",
            "format": "a4"
          });
        let _0x16b8ea = _0x267466,
          _0x5540ba = 10;
        _0x5176c5.addImage(_0x5d4567, "PNG", 10, _0x5540ba, _0x320b9a, _0x267466);
        _0x16b8ea -= _0x54543e - 20;
        while (_0x16b8ea > 0) {
          _0x5540ba = _0x16b8ea - _0x267466;
          _0x5176c5.addPage();
          _0x5176c5.addImage(_0x5d4567, "PNG", 10, _0x5540ba, _0x320b9a, _0x267466);
          _0x16b8ea -= _0x54543e - 20;
        }
        _0x5176c5.save(_0x27d719);
        layer.close(_0x4fe033);
        layer.msg("PDF 导出成功！");
      }).catch(_0x2cdeee => {
        document.body.contains(_0x2f7799) && document.body.removeChild(_0x2f7799);
        layer.close(_0x4fe033);
        console.error("PDF conversion error:", _0x2cdeee);
        layer.msg("PDF 转换失败: " + _0x2cdeee.message);
      });
    } catch (_0x23e70b) {
      if (loadIndex) layer.close(loadIndex);
      console.error("PDF conversion error:", _0x23e70b);
      layer.msg("PDF 转换失败: " + _0x23e70b.message);
    }
  }
  function _0x2ecf41(_0x55e2a4, _0x3c9cfc) {
    try {
      if (!window.markdownit || !window.html2canvas) {
        layer.msg("图片转换库未加载，请确保已引入 html2canvas 和 markdown-it 库");
        return;
      }
      const _0x27af25 = layer.load(2, {
          "shade": [0.3, "#000"]
        }),
        _0x42d2f1 = window.markdownit({
          "html": false,
          "breaks": true,
          "linkify": true,
          "typographer": true,
          "xhtmlOut": false
        }),
        _0xab17c6 = _0x3e8aa4(_0x55e2a4),
        _0x3ebbac = document.createElement("div");
      _0x3ebbac.style.cssText = "\n      position: absolute;\n      left: -9999px;\n      top: 0;\n      width: 1200px;\n      padding: 60px;\n      background: white;\n      font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans CJK SC\", \"Microsoft YaHei\", sans-serif;\n      font-size: 16px;\n      line-height: 1.8;\n      color: #333;\n      letter-spacing: 0.5px;\n      word-spacing: 1px;\n    ";
      _0x3ebbac.innerHTML = "\n      <style>\n        h1, h2, h3, h4, h5, h6 { \n          margin-top: 32px; \n          margin-bottom: 20px; \n          font-weight: 600; \n          line-height: 1.25; \n          color: #24292e;\n        }\n        h1 { font-size: 36px; }\n        h2 { font-size: 28px; }\n        h3 { font-size: 24px; }\n        p { margin-bottom: 20px; }\n        code { \n          background: #f6f8fa; \n          padding: 3px 6px; \n          border-radius: 3px; \n          font-family: Consolas, Monaco, monospace;\n          font-size: 14px;\n          color: #e01e5a;\n        }\n        pre { \n          background: #f6f8fa; \n          padding: 20px; \n          border-radius: 8px; \n          overflow: auto; \n          margin-bottom: 20px;\n          border: 1px solid #e1e4e8;\n        }\n        pre code {\n          background: none;\n          padding: 0;\n          color: #333 !important;\n          font-size: 13px;\n          line-height: 1.5;\n        }\n        blockquote { \n          border-left: 4px solid #0366d6; \n          padding-left: 20px; \n          margin: 0 0 20px 0; \n          color: #6a737d; \n          font-style: italic;\n        }\n        ul, ol { margin-bottom: 20px; padding-left: 40px; }\n        li { margin-bottom: 10px; }\n        a { color: #0366d6; text-decoration: none; }\n        a:hover { text-decoration: underline; }\n        table { \n          border-collapse: collapse; \n          margin-bottom: 20px; \n          width: 100%; \n        }\n        th, td { \n          border: 1px solid #dfe2e5; \n          padding: 12px 16px; \n        }\n        th { \n          background: #f6f8fa; \n          font-weight: 600; \n        }\n        hr { \n          border: none; \n          border-top: 2px solid #e1e4e8; \n          margin: 32px 0; \n        }\n        img {\n          max-width: 100%;\n          height: auto;\n        }\n      </style>\n      <div style=\"margin-bottom: 50px; padding-bottom: 30px; border-bottom: 2px solid #e1e4e8;\">\n        <h1 style=\"font-size: 42px; color: #24292e; margin: 0 0 10px 0;\">\n          " + _0x3c9cfc.replace(".png", "").split("_")[0] + "\n        </h1>\n        <p style=\"color: #586069; font-size: 14px; margin: 0;\">\n          <span style=\"margin-right: 20px;\">📅 导出时间：" + new Date().toLocaleString("zh-CN") + "</span>\n          <span>📄 格式：PNG 图片</span>\n        </p>\n      </div>\n      <div style=\"padding-bottom: 40px;\">\n        " + (_0x42d2f1 ? _0x42d2f1.render(_0xab17c6) : _0xab17c6.replace(/\n/g, "<br>")) + "\n      </div>\n      <div style=\"margin-top: 50px; padding-top: 30px; border-top: 2px solid #e1e4e8; text-align: center; color: #586069; font-size: 14px;\">\n        <p>由 Claude Share 导出 • " + window.location.origin + "</p>\n      </div>\n    ";
      document.body.appendChild(_0x3ebbac);
      html2canvas(_0x3ebbac, {
        "scale": 2,
        "useCORS": true,
        "logging": false,
        "backgroundColor": "#ffffff",
        "windowWidth": 1320,
        "windowHeight": _0x3ebbac.scrollHeight
      }).then(_0x1d5ac9 => {
        document.body.removeChild(_0x3ebbac);
        _0x1d5ac9.toBlob(_0x4680e3 => {
          const _0x25de31 = URL.createObjectURL(_0x4680e3),
            _0x5dbc5d = document.createElement("a");
          _0x5dbc5d.href = _0x25de31;
          _0x5dbc5d.download = _0x3c9cfc;
          document.body.appendChild(_0x5dbc5d);
          _0x5dbc5d.click();
          document.body.removeChild(_0x5dbc5d);
          URL.revokeObjectURL(_0x25de31);
          layer.close(_0x27af25);
          layer.msg("图片导出成功！");
        }, "image/png");
      }).catch(_0x36f875 => {
        document.body.contains(_0x3ebbac) && document.body.removeChild(_0x3ebbac);
        layer.close(_0x27af25);
        console.error("Image conversion error:", _0x36f875);
        layer.msg("图片转换失败: " + _0x36f875.message);
      });
    } catch (_0x1eb76c) {
      if (loadIndex) layer.close(loadIndex);
      console.error("Image conversion error:", _0x1eb76c);
      layer.msg("图片转换失败: " + _0x1eb76c.message);
    }
  }
  async function _0x216229(_0x52f87f) {
    layer.closeAll();
    const _0x2b0e04 = setLoading("正在获取对话数据｜Getting Conversation Data..."),
      _0x4bdd8f = new Date().Format("yyyy-MM-dd HH:mm:ss");
    if (_0x52f87f === "docx") return _0x3f8beb(_0x4bdd8f, _0x2b0e04);
    const _0x274434 = await _0x15eae6(),
      _0x233612 = _0x274434.content,
      _0x5c2be9 = "gemini-export-" + _0x274434.title;
    console.log(_0x5c2be9, _0x274434);
    if (_0x52f87f === "md") downloadTextAsFile(_0x233612, _0x5c2be9 + "_" + _0x4bdd8f + ".md"), layer.close(_0x2b0e04);else {
      if (_0x52f87f === "pdf") _0x529ace(_0x233612, _0x5c2be9 + "_" + _0x4bdd8f + ".pdf"), layer.close(_0x2b0e04);else {
        if (_0x52f87f === "png") _0x2ecf41(_0x233612, _0x5c2be9 + "_" + _0x4bdd8f + ".png"), layer.close(_0x2b0e04);else _0x52f87f === "docx" && _0x3f8beb(convId, _0x5c2be9, _0x4bdd8f, _0x2b0e04);
      }
    }
  }
  function _0x3f8beb(_0x5ba16b, _0x1edb82) {
    const _0xb585b9 = _0x351bd1();
    if (!_0xb585b9 || !_0xb585b9.convId) return layer.msg("当前未在对话页面｜Not conversation page"), null;
    const _0x402601 = "/frontend-api/getGeminiConvContent?convId=" + _0xb585b9.convId + "&type=docx";
    fetch(_0x402601).then(_0x25b9bf => {
      if (!_0x25b9bf.ok) throw new Error("下载失败");
      return _0x25b9bf.blob();
    }).then(_0x43b4e1 => {
      const _0xc8f665 = document.createElement("a");
      _0xc8f665.href = URL.createObjectURL(_0x43b4e1);
      _0xc8f665.download = _0x5ba16b + ".docx";
      _0xc8f665.click();
      URL.revokeObjectURL(_0xc8f665.href);
      layer.close(_0x1edb82);
      layer.msg("Word 文档导出成功！");
    }).catch(_0x1c0fd6 => {
      layer.close(_0x1edb82);
      layer.msg("Word 导出失败: " + _0x1c0fd6.message);
    });
  }
  function _0x3cfc8a() {
    const _0x106e41 = window.location.pathname.split("app/")[1];
    if (!_0x106e41) {
      layer.msg("当前未进行任何会话｜No conversation");
      return;
    }
    layer.confirm("确定删除该对话吗？｜Are you sure to delete this conversation?", {
      "btn": ["确定｜Confirm", "取消｜Cancel"]
    }, function () {
      const _0x54e93a = setLoading("正在删除对话｜Deleting Conversation..."),
        _0xf3a5c1 = "/frontend-api/deleteGeminiConv?convId=" + _0x106e41;
      fetch(_0xf3a5c1).then(_0x4510e1 => _0x4510e1.json()).then(({
        code: _0x46cda8,
        msg: _0x36c32c
      }) => {
        layer.close(_0x54e93a);
        _0x46cda8 === 1 ? (layer.msg("删除成功｜Deleted Successfully"), setTimeout(() => {
          window.location.href = "/app";
        }, 1000)) : layer.msg(_0x36c32c || "删除失败｜Delete Failed");
      }).catch(_0x23ce34 => {
        layer.close(_0x54e93a);
        layer.msg("删除失败｜Delete Failed");
      });
    });
  }
  function _0x351bd1() {
    const _0xc72464 = location.pathname.replace(/\/+$/, ""),
      _0x4cae85 = _0xc72464.split("/").filter(Boolean);
    if (_0x4cae85.length === 0) return null;
    let _0x5dbf4f = "",
      _0x1479a2 = null,
      _0x2216a3 = 0;
    _0x4cae85[0] === "u" && /^\d+$/.test(_0x4cae85[1] || "") && (_0x1479a2 = _0x4cae85[1], _0x5dbf4f = "/u/" + _0x1479a2, _0x2216a3 = 2);
    if (_0x4cae85[_0x2216a3] === "app" && _0x4cae85[_0x2216a3 + 1]) {
      const _0x452112 = _0x4cae85[_0x2216a3 + 1];
      return {
        "kind": "app",
        "convId": _0x452112,
        "userIndex": _0x1479a2,
        "basePrefix": _0x5dbf4f,
        "sourcePath": _0x5dbf4f + "/app/" + _0x452112
      };
    }
    if (_0x4cae85[_0x2216a3] === "gem" && _0x4cae85[_0x2216a3 + 1] && _0x4cae85[_0x2216a3 + 2]) {
      const _0x2787e2 = _0x4cae85[_0x2216a3 + 1],
        _0x7b54f8 = _0x4cae85[_0x2216a3 + 2];
      return {
        "kind": "gem",
        "gemId": _0x2787e2,
        "convId": _0x7b54f8,
        "userIndex": _0x1479a2,
        "basePrefix": _0x5dbf4f,
        "sourcePath": _0x5dbf4f + "/gem/" + _0x2787e2 + "/" + _0x7b54f8
      };
    }
    return null;
  }
  async function _0x15eae6() {
    const _0x3a1177 = _0x351bd1();
    if (!_0x3a1177 || !_0x3a1177.convId) return layer.msg("当前未在对话页面｜Not conversation page"), null;
    const _0x4d3337 = setLoading("正在获取对话内容｜Getting Conversation Content..."),
      _0x668167 = "/frontend-api/getGeminiConvContent?convId=" + _0x3a1177.convId,
      _0x13b813 = await fetch(_0x668167),
      _0x1b6f37 = await _0x13b813.json();
    if (_0x1b6f37.code !== 1) return layer.msg(_0x1b6f37.msg || "获取对话内容失败｜Failed to get conversation content"), null;
    return layer.close(_0x4d3337), _0x1b6f37.data;
  }
  async function _0x215128() {
    const _0x9ccbce = _0x351bd1();
    if (!_0x9ccbce || !_0x9ccbce.convId) return layer.msg("当前未在对话页面｜Not conversation page"), null;
    const _0x572a18 = await _0x15eae6();
    if (!_0x572a18) return;
    const _0x23b112 = _0x572a18.title + "_" + new Date().Format("yyyy-MM-dd HH:mm:ss") + ".md";
    downloadTextAsFile(_0x572a18.content, _0x23b112, "text/markdown");
  }
  window.downloadConversation = _0x216229;
  function _0x5de87f() {
    if (document.getElementById("gemini-timeline-styles")) return;
    const _0x3d4e95 = document.createElement("style");
    _0x3d4e95.id = "gemini-timeline-styles";
    _0x3d4e95.textContent = "\n      .gemini-timeline-bar {\n        position: fixed;\n        right: 18px;\n        top: 80px;\n        width: 20px;\n        height: calc(100vh - 160px);\n        max-height: 600px;\n        min-height: 200px;\n        background: rgba(248, 250, 252, 0.85);\n        border-radius: 10px;\n        z-index: 999;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        backdrop-filter: blur(4px);\n        transition: opacity 0.2s, background-color 0.3s;\n        opacity: 0.85;\n      }\n      /* 暗色主题 */\n      html.dark .gemini-timeline-bar,\n      [data-theme=\"dark\"] .gemini-timeline-bar,\n      .theme-host.dark-theme .gemini-timeline-bar {\n        background: rgba(2, 6, 23, 0.72);\n      }\n      .gemini-timeline-bar:hover {\n        opacity: 1;\n      }\n      .gemini-timeline-bar.hidden {\n        display: none;\n      }\n      .timeline-track {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n      }\n      .timeline-track-content {\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n      .timeline-dot {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 10px;\n        height: 10px;\n        background: #888;\n        border-radius: 50%;\n        cursor: pointer;\n        transition: all 0.15s ease;\n        border: none;\n        padding: 0;\n      }\n      .timeline-dot:hover {\n        background: #fff;\n        transform: translateX(-50%) scale(1.4);\n        box-shadow: 0 0 8px rgba(255,255,255,0.5);\n      }\n      .timeline-dot.active {\n        background: #60a5fa;\n        transform: translateX(-50%) scale(1.2);\n        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.4), 0 0 12px rgba(59, 130, 246, 0.5);\n      }\n      .timeline-tooltip {\n        position: fixed;\n        right: 36px;\n        background: rgba(40, 40, 40, 0.95);\n        color: #e8e8e8;\n        padding: 8px 12px;\n        border-radius: 6px;\n        font-size: 13px;\n        max-width: 280px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        pointer-events: none;\n        z-index: 1001;\n        opacity: 0;\n        transition: opacity 0.15s;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n      }\n      .timeline-tooltip.visible {\n        opacity: 1;\n      }\n      .timeline-runner {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 10px;\n        height: 10px;\n        border: 2px solid #8ab4f8;\n        border-radius: 50%;\n        pointer-events: none;\n        opacity: 0;\n      }\n      .timeline-runner.animating {\n        opacity: 1;\n      }\n    ";
    document.head.appendChild(_0x3d4e95);
  }
  class _0x52ec22 {
    constructor() {
      this.scrollContainer = null;
      this.conversationContainer = null;
      this.markers = [];
      this.activeTurnId = null;
      this.ui = {
        "timelineBar": null,
        "tooltip": null,
        "track": null,
        "trackContent": null
      };
      this.mutationObserver = null;
      this.resizeObserver = null;
      this.scrollMode = "flow";
      this.flowDuration = 650;
      this.scrollRafId = null;
      this.recalcTimer = null;
      this.recalcDelay = 200;
      this.tooltipHideTimer = null;
      this.userTurnSelector = "";
      this.onScroll = null;
      this.onTimelineClick = null;
      this.onTimelineOver = null;
      this.onTimelineOut = null;
      this.runnerEl = null;
      this.flowAnimating = false;
      this.isScrolling = false;
    }
    async ["init"]() {
      const _0x449775 = await this.findCriticalElements();
      if (!_0x449775) {
        console.log("[Timeline] 未找到关键元素，跳过初始化");
        return;
      }
      this.injectUI();
      this.setupEventListeners();
      this.setupObservers();
      this.recalculateMarkers();
      console.log("[Timeline] 初始化完成");
    }
    async ["findCriticalElements"]() {
      const _0x5e8a63 = [".user-query-bubble-with-background", ".user-query-bubble-container", ".user-query-container", "div[aria-label=\"User message\"]"];
      let _0x38554e = null,
        _0x48ce27 = "";
      for (let _0x4d574b = 0; _0x4d574b < 40; _0x4d574b++) {
        for (const _0xb3f0d3 of _0x5e8a63) {
          const _0x4a2b80 = document.querySelector(_0xb3f0d3);
          if (_0x4a2b80) {
            _0x38554e = _0x4a2b80;
            _0x48ce27 = _0xb3f0d3;
            break;
          }
        }
        if (_0x38554e) break;
        await new Promise(_0x3b03a9 => setTimeout(_0x3b03a9, 100));
      }
      if (!_0x38554e) {
        this.conversationContainer = document.querySelector("main") || document.body;
        this.userTurnSelector = _0x5e8a63.join(",");
      } else this.conversationContainer = document.querySelector("main") || document.body, this.userTurnSelector = _0x48ce27;
      let _0x1594ac = _0x38554e || this.conversationContainer;
      while (_0x1594ac && _0x1594ac !== document.body) {
        const _0x34cbd0 = getComputedStyle(_0x1594ac);
        if (_0x34cbd0.overflowY === "auto" || _0x34cbd0.overflowY === "scroll") {
          this.scrollContainer = _0x1594ac;
          break;
        }
        _0x1594ac = _0x1594ac.parentElement;
      }
      return !this.scrollContainer && (this.scrollContainer = document.scrollingElement || document.documentElement || document.body), true;
    }
    ["injectUI"]() {
      let _0x56a6a1 = document.querySelector(".gemini-timeline-bar");
      if (!_0x56a6a1) {
        _0x56a6a1 = document.createElement("div");
        _0x56a6a1.className = "gemini-timeline-bar";
        document.body.appendChild(_0x56a6a1);
      }
      this.ui.timelineBar = _0x56a6a1;
      let _0x2e5162 = _0x56a6a1.querySelector(".timeline-track");
      !_0x2e5162 && (_0x2e5162 = document.createElement("div"), _0x2e5162.className = "timeline-track", _0x56a6a1.appendChild(_0x2e5162));
      let _0x5a7f49 = _0x2e5162.querySelector(".timeline-track-content");
      !_0x5a7f49 && (_0x5a7f49 = document.createElement("div"), _0x5a7f49.className = "timeline-track-content", _0x2e5162.appendChild(_0x5a7f49));
      this.ui.track = _0x2e5162;
      this.ui.trackContent = _0x5a7f49;
      if (!this.ui.tooltip) {
        const _0x20a9c1 = document.createElement("div");
        _0x20a9c1.className = "timeline-tooltip";
        _0x20a9c1.id = "gemini-timeline-tooltip";
        document.body.appendChild(_0x20a9c1);
        this.ui.tooltip = _0x20a9c1;
      }
      if (!this.runnerEl) {
        const _0x4b0790 = document.createElement("div");
        _0x4b0790.className = "timeline-runner";
        _0x5a7f49.appendChild(_0x4b0790);
        this.runnerEl = _0x4b0790;
      }
    }
    ["setupEventListeners"]() {
      this.onTimelineClick = _0x339766 => {
        const _0x1a68ea = _0x339766.target.closest(".timeline-dot");
        if (!_0x1a68ea) return;
        const _0xb1bd63 = parseInt(_0x1a68ea.dataset.markerIndex, 10),
          _0x30ad22 = this.markers[_0xb1bd63];
        _0x30ad22 && _0x30ad22.element && this.smoothScrollTo(_0x30ad22.element, _0xb1bd63);
      };
      this.ui.timelineBar.addEventListener("click", this.onTimelineClick);
      this.onTimelineOver = _0x5bec77 => {
        const _0x1a1faa = _0x5bec77.target.closest(".timeline-dot");
        if (_0x1a1faa) this.showTooltip(_0x1a1faa);
      };
      this.onTimelineOut = _0x24573a => {
        const _0x4a0fa2 = _0x24573a.target.closest(".timeline-dot"),
          _0x2b4c75 = _0x24573a.relatedTarget?.["closest"]?.(".timeline-dot");
        if (_0x4a0fa2 && !_0x2b4c75) this.hideTooltip();
      };
      this.ui.timelineBar.addEventListener("mouseover", this.onTimelineOver);
      this.ui.timelineBar.addEventListener("mouseout", this.onTimelineOut);
      this.onScroll = () => this.scheduleScrollSync();
      this.scrollContainer.addEventListener("scroll", this.onScroll, {
        "passive": true
      });
    }
    ["setupObservers"]() {
      this.mutationObserver = new MutationObserver(() => this.debouncedRecalc());
      if (this.conversationContainer) {
        this.mutationObserver.observe(this.conversationContainer, {
          "childList": true,
          "subtree": true
        });
      }
      this.resizeObserver = new ResizeObserver(() => this.recalculateMarkers());
      this.ui.timelineBar && this.resizeObserver.observe(this.ui.timelineBar);
    }
    ["debouncedRecalc"]() {
      if (this.recalcTimer) clearTimeout(this.recalcTimer);
      this.recalcTimer = setTimeout(() => this.recalculateMarkers(), this.recalcDelay);
    }
    ["recalculateMarkers"]() {
      if (!this.conversationContainer || !this.userTurnSelector) return;
      const _0x7163ad = this.conversationContainer.querySelectorAll(this.userTurnSelector),
        _0x122b36 = this.filterTopLevel(Array.from(_0x7163ad));
      if (_0x122b36.length === 0) {
        this.ui.timelineBar?.["classList"]["add"]("hidden");
        return;
      }
      this.ui.timelineBar?.["classList"]["remove"]("hidden");
      this.markers = _0x122b36.map((_0x529951, _0x25ab49) => ({
        "id": "turn-" + _0x25ab49,
        "element": _0x529951,
        "summary": this.extractSummary(_0x529951),
        "n": _0x25ab49 + 1
      }));
      this.renderMarkers();
      !this.activeTurnId && this.markers.length > 0 && (this.activeTurnId = this.markers[this.markers.length - 1].id);
      this.updateActiveDot(this.getActiveIndex());
      this.scheduleScrollSync();
    }
    ["filterTopLevel"](_0x5f50d7) {
      if (_0x5f50d7.length === 0) return [];
      const _0x325b92 = [];
      for (const _0x36bcd5 of _0x5f50d7) {
        let _0x1b74f6 = false;
        for (const _0x30bd01 of _0x5f50d7) {
          if (_0x30bd01 !== _0x36bcd5 && _0x30bd01.contains(_0x36bcd5)) {
            _0x1b74f6 = true;
            break;
          }
        }
        if (!_0x1b74f6) _0x325b92.push(_0x36bcd5);
      }
      return _0x325b92;
    }
    ["extractSummary"](_0x22d4da) {
      const _0x4ccfc7 = (_0x22d4da.textContent || "").replace(/\s+/g, " ").trim();
      return _0x4ccfc7.length > 50 ? _0x4ccfc7.slice(0, 50) + "..." : _0x4ccfc7;
    }
    ["renderMarkers"]() {
      if (!this.ui.trackContent) return;
      const _0x2a7158 = this.ui.trackContent.querySelectorAll(".timeline-dot");
      _0x2a7158.forEach(_0x3b59f6 => _0x3b59f6.remove());
      if (this.markers.length === 0) return;
      this.markers.forEach((_0x2b7e18, _0x11694d) => {
        const _0x31c3e3 = document.createElement("button");
        _0x31c3e3.className = "timeline-dot";
        _0x31c3e3.dataset.markerIndex = String(_0x11694d);
        _0x31c3e3.dataset.targetTurnId = _0x2b7e18.id;
        const _0x668009 = this.markers.length === 1 ? 50 : _0x11694d / (this.markers.length - 1) * 100;
        _0x31c3e3.style.top = _0x668009 + "%";
        this.ui.trackContent.appendChild(_0x31c3e3);
        _0x2b7e18.dotElement = _0x31c3e3;
      });
    }
    ["scheduleScrollSync"]() {
      if (this.scrollRafId) return;
      this.scrollRafId = requestAnimationFrame(() => {
        this.scrollRafId = null;
        this.syncActiveMarker();
      });
    }
    ["syncActiveMarker"]() {
      if (!this.scrollContainer || this.markers.length === 0) return;
      if (this.isScrolling) return;
      const _0x3a040d = this.scrollContainer.getBoundingClientRect(),
        _0x234fe8 = _0x3a040d.top + _0x3a040d.height * 0.4;
      let _0x440ee6 = 0,
        _0x476850 = Infinity;
      this.markers.forEach((_0x24f564, _0x317091) => {
        const _0x39e566 = _0x24f564.element.getBoundingClientRect(),
          _0x5281a9 = Math.abs(_0x39e566.top - _0x234fe8);
        _0x5281a9 < _0x476850 && (_0x476850 = _0x5281a9, _0x440ee6 = _0x317091);
      });
      const _0x3c731b = this.markers[_0x440ee6]?.["id"];
      _0x3c731b !== this.activeTurnId && (this.activeTurnId = _0x3c731b, this.updateActiveDot(_0x440ee6));
    }
    ["updateActiveDot"](_0x371818) {
      this.markers.forEach((_0x435d39, _0x280f5b) => {
        _0x435d39.dotElement && _0x435d39.dotElement.classList.toggle("active", _0x280f5b === _0x371818);
      });
    }
    ["showTooltip"](_0x51656d) {
      if (this.tooltipHideTimer) {
        clearTimeout(this.tooltipHideTimer);
        this.tooltipHideTimer = null;
      }
      const _0x40852d = parseInt(_0x51656d.dataset.markerIndex, 10),
        _0x58ced1 = this.markers[_0x40852d];
      if (!_0x58ced1 || !this.ui.tooltip) return;
      this.ui.tooltip.textContent = "#" + _0x58ced1.n + ": " + _0x58ced1.summary;
      const _0x9c91ad = _0x51656d.getBoundingClientRect();
      this.ui.tooltip.style.top = _0x9c91ad.top + _0x9c91ad.height / 2 - 16 + "px";
      this.ui.tooltip.classList.add("visible");
    }
    ["hideTooltip"]() {
      this.tooltipHideTimer = setTimeout(() => {
        this.ui.tooltip?.["classList"]["remove"]("visible");
      }, 100);
    }
    ["smoothScrollTo"](_0x3d3f00, _0x1d80c2) {
      if (!_0x3d3f00 || !this.scrollContainer) return;
      const _0x14a0ca = this.getActiveIndex();
      this.scrollMode === "flow" && _0x14a0ca >= 0 && _0x1d80c2 >= 0 && _0x14a0ca !== _0x1d80c2 && this.startRunner(_0x14a0ca, _0x1d80c2);
      this.activeTurnId = this.markers[_0x1d80c2]?.["id"];
      this.updateActiveDot(_0x1d80c2);
      this.isScrolling = true;
      _0x3d3f00.scrollIntoView({
        "behavior": "smooth",
        "block": "center"
      });
      if (this._scrollEndTimer) clearTimeout(this._scrollEndTimer);
      const _0x30e182 = () => {
        this.isScrolling = false;
        this._scrollEndHandler && (this.scrollContainer.removeEventListener("scrollend", this._scrollEndHandler), this._scrollEndHandler = null);
        this._scrollEndTimer && (clearTimeout(this._scrollEndTimer), this._scrollEndTimer = null);
      };
      this._scrollEndHandler = () => _0x30e182();
      this.scrollContainer.addEventListener("scrollend", this._scrollEndHandler, {
        "once": true
      });
      this._scrollEndTimer = setTimeout(() => _0x30e182(), 1000);
    }
    ["getActiveIndex"]() {
      return this.markers.findIndex(_0x4f6843 => _0x4f6843.id === this.activeTurnId);
    }
    ["startRunner"](_0x1755ac, _0x3710db) {
      if (!this.runnerEl || this.flowAnimating) return;
      const _0x1b690a = this.markers[_0x1755ac]?.["dotElement"],
        _0x13ac74 = this.markers[_0x3710db]?.["dotElement"];
      if (!_0x1b690a || !_0x13ac74) return;
      const _0x2909a5 = parseFloat(_0x1b690a.style.top) || 0,
        _0x154ed1 = parseFloat(_0x13ac74.style.top) || 0;
      this.flowAnimating = true;
      this.runnerEl.style.top = _0x2909a5 + "%";
      this.runnerEl.classList.add("animating");
      const _0x368fd2 = performance.now(),
        _0x2d1078 = this.flowDuration,
        _0x342f2c = _0x577e99 => {
          const _0x16d377 = _0x577e99 - _0x368fd2,
            _0x377882 = Math.min(_0x16d377 / _0x2d1078, 1),
            _0x3e03ef = this.easeOutCubic(_0x377882),
            _0x3aebac = _0x2909a5 + (_0x154ed1 - _0x2909a5) * _0x3e03ef;
          this.runnerEl.style.top = _0x3aebac + "%";
          _0x377882 < 1 ? requestAnimationFrame(_0x342f2c) : (this.runnerEl.classList.remove("animating"), this.flowAnimating = false);
        };
      requestAnimationFrame(_0x342f2c);
    }
    ["easeOutCubic"](_0x1072ce) {
      return 1 - Math.pow(1 - _0x1072ce, 3);
    }
    ["destroy"]() {
      this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null);
      this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
      this.scrollContainer && this.onScroll && this.scrollContainer.removeEventListener("scroll", this.onScroll);
      if (this.ui.timelineBar) {
        if (this.onTimelineClick) this.ui.timelineBar.removeEventListener("click", this.onTimelineClick);
        if (this.onTimelineOver) this.ui.timelineBar.removeEventListener("mouseover", this.onTimelineOver);
        if (this.onTimelineOut) this.ui.timelineBar.removeEventListener("mouseout", this.onTimelineOut);
        this.ui.timelineBar.remove();
      }
      this.ui.tooltip && this.ui.tooltip.remove();
      this.markers = [];
    }
  }
  let _0x4e9407 = null,
    _0x531971 = location.href;
  function _0x55cd1b() {
    return /^\/(?:u\/\d+\/)?(app|gem)(\/|$)/.test(location.pathname);
  }
  function _0x14660d() {
    if (_0x4e9407) {
      try {
        _0x4e9407.destroy();
      } catch (_0x210e21) {}
      _0x4e9407 = null;
    }
    document.querySelector(".gemini-timeline-bar")?.["remove"]();
    document.getElementById("gemini-timeline-tooltip")?.["remove"]();
    _0x4e9407 = new _0x52ec22();
    _0x4e9407.init().catch(_0x10de57 => {
      console.error("[Timeline] 初始化失败:", _0x10de57);
    });
  }
  function _0x5440e7() {
    if (location.href === _0x531971) return;
    _0x531971 = location.href;
    if (_0x55cd1b()) {
      setTimeout(_0x14660d, 500);
    } else {
      if (_0x4e9407) {
        try {
          _0x4e9407.destroy();
        } catch (_0x30b542) {}
        _0x4e9407 = null;
      }
    }
  }
  function _0x44a5ac() {
    _0x5de87f();
    const _0x2482d8 = history.pushState,
      _0x340d7c = history.replaceState;
    history.pushState = function (..._0x3e7709) {
      _0x2482d8.apply(history, _0x3e7709);
      _0x5440e7();
    };
    history.replaceState = function (..._0x5594cf) {
      _0x340d7c.apply(history, _0x5594cf);
      _0x5440e7();
    };
    window.addEventListener("popstate", _0x5440e7);
    _0x55cd1b() && setTimeout(_0x14660d, 1000);
  }
})();