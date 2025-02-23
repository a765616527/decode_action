//Sun Feb 23 2025 13:47:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
Vue.use(vant);
new Vue({
  "el": "#app",
  "data": {
    "active": 3,
    "isLogin": false,
    "userInfo": null,
    "loading": true,
    "showRechargeDialog": false,
    "rechargeAmount": "",
    "out_trade_no": "",
    "showPayDialog": false
  },
  "created"() {
    this.checkLogin();
  },
  "methods": {
    "checkLogin"() {
      this.loading = true;
      axios.post("./api.php?act=checkLogin").then(_0x1e2052 => {
        if (_0x1e2052.data.code === 1) this.isLogin = true, this.userInfo = _0x1e2052.data.data;else {
          this.isLogin = false;
          this.userInfo = null;
        }
      }).catch(_0x21c2e0 => {
        console.error("Error:", _0x21c2e0);
        this.isLogin = false;
        this.userInfo = null;
      }).finally(() => {
        this.loading = false;
      });
    },
    "onRegister"() {
      this.$toast.loading({
        "message": "注册中...",
        "forbidClick": true
      });
      var _0x118b2d = "-----BEGIN PUBLIC KEY-----\n                    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq+HpTsb0sjtjpFIEZ3YLQ52Spb8JIJ/Rfwl3RD4aBYUKTE4/X7qc7aImeo+VbGt/o+Th+sgvMsXHj9aF122byd8KDX0z3qC3F16iRHX+Lc05HlxDYfpK87bmQ7a7SxcztxntiGVI4AjOR1B1HEq23mvsyzLq9GyOer8H4eMIzvpMsKM9lzVz8tlME2SADh2BYBQiMzydsMJx4YV3D4KARv4wTCnZZ0BtumZd8nC9kGzXCMfkRh9IUYZ/FUiCCYJUkJxbo7X+j/dnJvv4lQzeTjebLHFLvb+em5+Jx24YZzNo3SJfPEBEF2RHet8MHOAkwWfvwvXa6R2RZYIlgECE3QIDAQAB\n                    -----END PUBLIC KEY-----";
      const _0xae927 = new JSEncrypt();
      _0xae927.setPublicKey(_0x118b2d);
      const _0x13570a = Math.random().toString(36).substring(2),
        _0x102844 = new Date().getTime(),
        _0x578671 = _0xae927.encrypt(JSON.stringify({
          "random": _0x13570a,
          "timestamp": _0x102844,
          "tongxing": "sbsbsb1212"
        }));
      axios.post("./api.php?act=register", {
        "data": _0x578671
      }).then(_0x102a24 => {
        _0x102a24.data.code === 1 ? (this.$toast.success("注册成功"), setTimeout(() => {
          window.location.reload();
        }, 1000)) : this.$toast.fail(_0x102a24.data.msg || "注册失败");
      });
    },
    "goToPage"(_0x3075d6) {
      window.location.href = _0x3075d6;
    },
    "showRecharge"() {
      this.userInfo.zfb === "1" || this.userInfo.wx === "1" || this.userInfo.qq === "1" ? this.showRechargeDialog = true : this.$toast("请联系客服充值！");
    },
    "onRecharge"() {
      if (!this.rechargeAmount || this.rechargeAmount <= 0) {
        this.$toast("请输入正确的充值金额");
        return;
      }
      axios.post("./api.php?act=cz", {
        "money": this.rechargeAmount
      }).then(_0x473f09 => {
        _0x473f09.data.code === 1 ? (this.out_trade_no = _0x473f09.data.out_trade_no, this.showPayDialog = true) : this.$toast(_0x473f09.data.msg || "充值失败");
      }).catch(_0x10a5d7 => {
        console.error("Error:", _0x10a5d7);
        this.$toast("系统错误，请稍后再试");
      });
    }
  }
});