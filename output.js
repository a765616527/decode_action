//Sun Mar 22 2026 07:52:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const {
    createApp: _0xfb706c,
    ref: _0x5dfd72,
    reactive: _0x231c07,
    computed: _0x1b5e18,
    onBeforeMount: _0x13ee15,
    onMounted: _0x599c3f,
    toRefs: _0x435c8b,
    watch: _0x168f73
  } = Vue,
  _0x3ac061 = _0xfb706c({
    "setup"() {
      const _0x36fb19 = _0x5dfd72(0),
        _0x1c5f50 = async () => {
          const {
            data: _0x41d6e1
          } = await axios.post("/LearnExp/ycyyd/api.php?act=GetPrice");
          _0x36fb19.value = +_0x41d6e1.price;
        },
        _0x1874cb = _0x1b7867 => {
          const _0x5a7981 = Math.floor(_0x1b7867 / 60),
            _0x3323cd = _0x1b7867 % 60;
          return _0x5a7981.toString().padStart(2, "0") + ":" + _0x3323cd.toString().padStart(2, "0");
        },
        _0x102f6e = _0x141aeb => _0x1874cb(_0x141aeb),
        _0x2b3546 = window.YYD_ALLOWED_SCHOOLS || [],
        _0x1b28ea = [{
          "value": "1",
          "label": "周一"
        }, {
          "value": "2",
          "label": "周二"
        }, {
          "value": "3",
          "label": "周三"
        }, {
          "value": "4",
          "label": "周四"
        }, {
          "value": "5",
          "label": "周五"
        }, {
          "value": "6",
          "label": "周六"
        }, {
          "value": "7",
          "label": "周日"
        }],
        _0x37f2f3 = _0x5dfd72({
          "speed_range": [5, 8],
          "norun_week_day": [],
          "run_week_times": 4,
          "startTimeRange": "",
          "startdate": dayjs().format("YYYY-MM-DD"),
          "sport_num": 1,
          "remark": ""
        }),
        _0xff2839 = _0x5dfd72({
          "startValue": 510,
          "endValue": 1260,
          get "start"() {
            return _0x102f6e(this.startValue);
          },
          get "end"() {
            return _0x102f6e(this.endValue);
          }
        }),
        _0x4e3f49 = 420,
        _0x52b992 = 1320,
        _0x5519ba = _0x5dfd72([9 * 60, 14 * 60]),
        _0x439bda = _0x3e103c => {
          const _0x260922 = Math.floor(_0x3e103c / 60),
            _0x58213b = _0x3e103c % 60;
          return _0x260922.toString().padStart(2, "0") + ":" + _0x58213b.toString().padStart(2, "0");
        };
      _0x168f73(_0x5519ba, _0x38b2a8 => {
        _0xff2839.value.startValue = _0x38b2a8[0];
        _0xff2839.value.endValue = _0x38b2a8[1];
      }, {
        "immediate": true
      });
      const _0x1048b4 = _0x5dfd72(""),
        _0x397a13 = _0x5dfd72([]);
      _0x168f73(_0x1048b4, _0x16d0b3 => {
        if (!_0x16d0b3.trim()) {
          _0x397a13.value = [];
          return;
        }
        const _0x532c97 = _0x16d0b3.split(/[\r\n]+/),
          _0x5545fd = [];
        _0x532c97.forEach(_0x4fa529 => {
          const _0x365661 = _0x4fa529.trim().split(/\s+/);
          if (_0x365661.length >= 3 && _0x365661[0] && _0x365661[1] && _0x365661[2]) {
            const _0xf5f736 = _0x365661[0],
              _0x51cb4a = _0x2b3546.includes(_0xf5f736);
            _0x5545fd.push({
              "school": _0xf5f736,
              "user": _0x365661[1],
              "pass": _0x365661[2],
              "valid": _0x51cb4a
            });
          }
        });
        _0x397a13.value = _0x5545fd;
      });
      const _0x5ecf65 = _0x5c8f38 => {
          const _0x12d017 = _0x1048b4.value.split(/[\r\n]+/).filter(_0x50d3c3 => {
            const _0x12b7f1 = _0x50d3c3.trim().split(/\s+/);
            return _0x12b7f1.length >= 3 && _0x12b7f1[0] && _0x12b7f1[1] && _0x12b7f1[2];
          });
          _0x12d017.splice(_0x5c8f38, 1);
          _0x1048b4.value = _0x12d017.join("\n");
        },
        _0x12a810 = _0x5dfd72([]),
        _0x11ce03 = _0x5dfd72(false),
        _0x17b21e = _0x5dfd72(0),
        _0x3b1d59 = _0x5dfd72(0),
        _0x2585a7 = _0x5dfd72(0),
        _0x23611e = _0x5dfd72("0"),
        _0x54f5d3 = async () => {
          if (_0x397a13.value.length === 0) return toastr.error("请输入下单信息");
          const _0x3b32b0 = _0x397a13.value.filter(_0x5b31db => _0x5b31db.valid === false);
          if (_0x3b32b0.length > 0) return toastr.error("存在 " + _0x3b32b0.length + " 个不支持的学校账号，请检查红色标记的条目");
          const _0x289ec5 = _0x37f2f3.value;
          if (!_0x289ec5.sport_num || _0x289ec5.sport_num < 1) return toastr.error("跑步次数不能为空");
          if (!_0x289ec5.run_week_times || _0x289ec5.run_week_times < 1) return toastr.error("周次数至少为1");
          blockUI.block();
          _0x11ce03.value = true;
          _0x17b21e.value = 50;
          _0x3b1d59.value = 0;
          _0x2585a7.value = 0;
          _0x23611e.value = "0";
          _0x12a810.value = [];
          $("#modal_submit_result").modal("hide");
          const _0xe2d2ea = _0x397a13.value.map(_0x2f24bd => ({
              "school": _0x2f24bd.school,
              "user": _0x2f24bd.user,
              "pass": _0x2f24bd.pass
            })),
            _0x39824a = {
              ..._0x37f2f3.value,
              "startTimeRange": _0xff2839.value.start + "~" + _0xff2839.value.end
            };
          try {
            const _0xe342ae = await axios.post("/LearnExp/ycyyd/api.php?act=AddOrderBatch", {
              "orders": _0xe2d2ea,
              "config": _0x39824a
            });
            _0x17b21e.value = 100;
            if (_0xe342ae.code === 1) {
              _0x3b1d59.value = _0xe342ae.data.success_count;
              _0x23611e.value = _0xe342ae.data.total_money;
              _0xe2d2ea.forEach(_0x390008 => _0x12a810.value.push({
                ..._0x390008,
                "msg": "下单成功",
                "status": "success"
              }));
              toastr.success("批量下单成功！共" + _0xe342ae.data.success_count + "个订单，总扣费￥" + _0xe342ae.data.total_money);
              $("#modal_submit_result").modal("show");
            } else toastr.error(_0xe342ae.msg || "提交失败");
          } catch (_0x1c40a0) {
            toastr.error(_0x1c40a0.response?.["data"]?.["msg"] || _0x1c40a0.message || "提交失败");
          }
          blockUI.release();
          _0x11ce03.value = false;
        },
        _0x18f098 = () => {
          _0x37f2f3.value = {
            "speed_range": [5, 8],
            "norun_week_day": [],
            "run_week_times": 4,
            "startTimeRange": "",
            "startdate": dayjs().format("YYYY-MM-DD"),
            "sport_num": 1,
            "remark": ""
          };
          _0x5519ba.value = [9 * 60, 14 * 60];
          _0x1048b4.value = "";
          _0x397a13.value = [];
          _0x12a810.value = [];
          _0x3b1d59.value = 0;
          _0x2585a7.value = 0;
          toastr.info("表单已重置");
        },
        _0xa33495 = _0x1b5e18(() => (_0x37f2f3.value.sport_num * _0x36fb19.value).toFixed(4)),
        _0x274027 = _0x1b5e18(() => _0x397a13.value.filter(_0x1f9ee8 => _0x1f9ee8.valid !== false).length),
        _0x52106c = _0x1b5e18(() => (_0x37f2f3.value.sport_num * _0x36fb19.value * _0x274027.value).toFixed(4));
      return _0x13ee15(() => {
        _0x1c5f50();
      }), _0x599c3f(() => {
        closeLoader();
      }), {
        "price": _0x36fb19,
        "addUserInfo": _0x1048b4,
        "userList": _0x397a13,
        "removeUser": _0x5ecf65,
        "runWeekOptions": _0x1b28ea,
        "addForm": _0x37f2f3,
        "customTime": _0xff2839,
        "submitResult": _0x12a810,
        "handleSubmit": _0x54f5d3,
        "resetAddForm": _0x18f098,
        "total": _0xa33495,
        "formatTime": _0x1874cb,
        "submitting": _0x11ce03,
        "submitProgress": _0x17b21e,
        "submitSuccess": _0x3b1d59,
        "submitFailed": _0x2585a7,
        "submitMoney": _0x23611e,
        "validUserCount": _0x274027,
        "totalOrderPrice": _0x52106c,
        "timeRange": _0x5519ba,
        "formatTimeValue": _0x439bda,
        "minTimeValue": _0x4e3f49,
        "maxTimeValue": _0x52b992
      };
    }
  });
_0x3ac061.use(ElementPlus, {
  "locale": ElementPlusLocaleZhCn
});
_0x3ac061.directive("select2", useSelect2Directive());
_0x3ac061.component("xCount", components.xCount);
_0x3ac061.component("xDatePicker", components.xDatePicker);
_0x3ac061.component("xTimePicker", components.xTimePicker);
_0x3ac061.component("xPagination", components.xPagination);
_0x3ac061.component("xTableLoading", components.xTableLoading);
_0x3ac061.mount("#app");