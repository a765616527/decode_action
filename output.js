//Mon Jul 29 2024 05:35:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const dockVm = new Vue({
  "el": "#dock",
  "data": {
    "hId": "",
    "keywords": "",
    "interfaceType": 1,
    "activeCateId": "",
    "dockCate": [],
    "dockClassList": [],
    "showClass": [],
    "cateId": "",
    "addMode": 1,
    "addCode": "",
    "multipleSelection": []
  },
  "methods": {
    async "getClassAndCate"() {
      this.dockCate = [];
      this.dockClassList = [];
      this.showClass = [];
      const _0xc140c5 = this.$loading({
        "lock": true,
        "text": "Loading",
        "spinner": "el-icon-loading",
        "background": "rgba(0, 0, 0, 0.7)"
      });
      try {
        if (this.interfaceType == 1) {
          const {
            data: _0x5e183b
          } = await this.$http.post("./api?act=getcate", {}, {
            "timeout": 3000
          });
          this.dockCate = Object.freeze(_0x5e183b.data);
        }
        const {
          data: _0x25ac56
        } = await this.$http.post("./api?act=getclass", {
          "type": this.interfaceType
        }, {
          "timeout": 10000,
          "emulateJSON": true
        });
        this.dockClassList = Object.freeze(_0x25ac56.data);
        this.showClass = _0x25ac56.data;
      } catch (_0x1b4d37) {
        this.$message.error("接口请求失败");
      } finally {
        _0xc140c5.close();
      }
    },
    "initCheck"() {
      this.$nextTick(() => {
        this.showClass.forEach((_0x11a4a7, _0x4b89e0) => {
          _0x11a4a7.has && this.$refs.tableRef.toggleRowSelection(_0x11a4a7, true);
        });
      });
    },
    "selectable"(_0x504207, _0x50f700) {
      if (_0x504207.has) {
        return false;
      } else return true;
    },
    "handleCateChange"() {
      const _0x354ce5 = this.activeCateId;
      !_0x354ce5 ? this.showClass = this.dockClassList : this.showClass = this.dockClassList.filter(_0x5729ad => _0x5729ad.fenlei == _0x354ce5);
    },
    "clickRow"(_0x4d3d11) {
      if (_0x4d3d11.has) return;
      const _0x469f25 = this.multipleSelection.some(_0x8ea410 => _0x8ea410.cid === _0x4d3d11.cid);
      !_0x469f25 ? this.$refs.tableRef.toggleRowSelection(_0x4d3d11, true) : this.$refs.tableRef.toggleRowSelection(_0x4d3d11, false);
    },
    "handleAdd": function () {
      const _0x3723b8 = this.$loading({
          "lock": true,
          "text": "Loading",
          "spinner": "el-icon-loading",
          "background": "rgba(0, 0, 0, 0.7)"
        }),
        _0x36e69a = this.multipleSelection.filter(_0x20894c => !_0x20894c.has);
      _0x36e69a.map(_0x4dcad2 => {
        const _0x126eb5 = +dockVm.addCode,
          _0x28bba4 = +_0x4dcad2.price;
        dockVm.addMode == 1 ? _0x4dcad2.realPrice = (_0x28bba4 + _0x126eb5).toFixed(2) : _0x4dcad2.realPrice = (_0x28bba4 * _0x126eb5).toFixed(2);
      });
      this.$http.post("./api?act=add", {
        "cateId": this.cateId,
        "data": _0x36e69a
      }, {
        "emulateJSON": true
      }).then(function (_0x1a56a9) {
        _0x3723b8.close();
        if (_0x1a56a9.data.code == 1) {
          _0x36e69a.forEach(_0x58f87f => {
            const _0x55d39a = dockVm.dockClassList.find(_0x5e6401 => _0x5e6401.cid === _0x58f87f.cid);
            if (_0x55d39a) {
              _0x55d39a.has = true;
            }
          });
          dockVm.handleCateChange();
          this.$message({
            "message": _0x1a56a9.data.msg,
            "type": "success"
          });
        } else this.$message({
          "message": _0x1a56a9.data.msg,
          "type": "error"
        });
      });
    },
    "handleUpdatePrice"() {
      const _0x53844f = this.$loading({
          "lock": true,
          "text": "Loading",
          "spinner": "el-icon-loading",
          "background": "rgba(0, 0, 0, 0.7)"
        }),
        _0x2c6433 = this.multipleSelection.filter(_0x17ba54 => _0x17ba54.has == true);
      _0x2c6433.map(_0x2834c8 => {
        const _0x1bd3e8 = +dockVm.addCode,
          _0x230eb4 = +_0x2834c8.price;
        if (dockVm.addMode == 1) {
          _0x2834c8.realPrice = (_0x230eb4 + _0x1bd3e8).toFixed(2);
        } else {
          _0x2834c8.realPrice = (_0x230eb4 * _0x1bd3e8).toFixed(2);
        }
      });
      this.$http.post("./api?act=updatePrice", {
        "data": _0x2c6433
      }, {
        "emulateJSON": true
      }).then(function (_0x514558) {
        _0x53844f.close();
        _0x514558.data.code == 1 && (this.$message({
          "message": _0x514558.data.msg,
          "type": "success"
        }), setTimeout(() => {
          location.reload();
        }, 500));
      });
    },
    "handleSelectionChange"(_0x16eea9) {
      this.multipleSelection = _0x16eea9;
    },
    "changeRes"() {
      const _0x11d97d = this.$loading({
        "lock": true,
        "text": "Loading",
        "spinner": "el-icon-loading",
        "background": "rgba(0, 0, 0, 0.7)"
      });
      this.$http.post("./api?act=changeresource", {
        "hid": this.hId
      }, {
        "emulateJSON": true
      }).then(function (_0x1215ae) {
        _0x11d97d.close();
        _0x1215ae.data.code == 1 ? (this.$message({
          "message": _0x1215ae.data.msg,
          "type": "success"
        }), location.reload()) : this.$message({
          "message": _0x1215ae.data.msg,
          "type": "error"
        });
      });
    },
    "search"() {
      this.keywords ? this.showClass = this.dockClassList.filter(_0x3c478e => {
        return _0x3c478e.name.includes(this.keywords);
      }) : this.showClass = this.dockClassList;
    }
  },
  "watch": {
    "keywords": function () {
      this.search();
    },
    "showClass": function () {
      this.initCheck();
    },
    "activeCateId": function () {
      this.handleCateChange();
    },
    "interfaceType": function () {
      this.getClassAndCate();
    }
  },
  "filters": {
    "filterPrice": function (_0x211640) {
      const _0xfc22d1 = +_0x211640,
        _0x3a7e70 = +dockVm.addCode;
      if (dockVm.addMode == 1) {
        return (_0xfc22d1 + _0x3a7e70).toFixed(2);
      } else {
        return (_0xfc22d1 * _0x3a7e70).toFixed(2);
      }
    }
  },
  "created"() {
    this.getClassAndCate();
    this.hId = window.hid;
  }
});