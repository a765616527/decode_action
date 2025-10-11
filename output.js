//Sat Oct 11 2025 15:50:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4e8a = () => {
    try {
      const _0x1a16e3 = document.createElement("canvas"),
        _0x4b7f1f = _0x1a16e3.getContext("webgl") || _0x1a16e3.getContext("experimental-webgl");
      if (!_0x4b7f1f) {
        return null;
      }
      const _0x15162f = _0x4b7f1f.getExtension("WEBGL_debug_renderer_info");
      if (!_0x15162f) {
        return null;
      }
      const _0x5ee5bc = _0x4b7f1f.getParameter(_0x15162f.UNMASKED_VENDOR_WEBGL),
        _0x47b096 = _0x4b7f1f.getParameter(_0x15162f.UNMASKED_RENDERER_WEBGL);
      return (_0x5ee5bc + "~" + _0x47b096).substring(0, 32);
    } catch (_0x2a5040) {
      return null;
    }
  },
  _0x7b2c = () => {
    try {
      const _0x19d432 = document.createElement("canvas");
      _0x19d432.width = 200;
      _0x19d432.height = 50;
      const _0x497f8a = _0x19d432.getContext("2d");
      _0x497f8a.textBaseline = "top";
      _0x497f8a.font = "14px Arial";
      _0x497f8a.textBaseline = "alphabetic";
      _0x497f8a.fillStyle = "#f60";
      _0x497f8a.fillRect(125, 1, 62, 20);
      _0x497f8a.fillStyle = "#069";
      _0x497f8a.fillText("Browser<Fp>", 2, 15);
      _0x497f8a.fillStyle = "rgba(102, 204, 0, 0.7)";
      _0x497f8a.fillText("Security Check", 4, 17);
      return _0x19d432.toDataURL().substring(0, 50);
    } catch (_0x488401) {
      return null;
    }
  };
function _0x2f75f5(_0x4213a0) {
  const _0x45eb42 = [1139959136, 3526905761, 1826807588, 1782757914, 236587704],
    _0x1d26f2 = [1136336257, 131233393, 2378760236, 1638843670];
  let _0x1dcdd9 = new TextEncoder().encode(_0x4213a0),
    _0x55d095 = _0x1dcdd9.length * 8;
  _0x1dcdd9 = [..._0x1dcdd9, 128];
  while (_0x1dcdd9.length * 8 % 512 !== 448) {
    _0x1dcdd9.push(0);
  }
  const _0x3c4200 = new ArrayBuffer(8);
  new DataView(_0x3c4200).setBigUint64(0, BigInt(_0x55d095));
  _0x1dcdd9.push(...new Uint8Array(_0x3c4200));
  for (let _0x53ca04 = 0; _0x53ca04 < _0x1dcdd9.length; _0x53ca04 += 64) {
    const _0x19e726 = _0x1dcdd9.slice(_0x53ca04, _0x53ca04 + 64),
      _0x4c818d = new Array(80);
    for (let _0x1f0ebb = 0; _0x1f0ebb < 16; _0x1f0ebb++) {
      _0x4c818d[_0x1f0ebb] = _0x19e726[_0x1f0ebb * 4] << 24 | _0x19e726[_0x1f0ebb * 4 + 1] << 16 | _0x19e726[_0x1f0ebb * 4 + 2] << 8 | _0x19e726[_0x1f0ebb * 4 + 3];
    }
    for (let _0x3363ed = 16; _0x3363ed < 80; _0x3363ed++) {
      _0x4c818d[_0x3363ed] = _0x2e1b36(_0x4c818d[_0x3363ed - 3] ^ _0x4c818d[_0x3363ed - 8] ^ _0x4c818d[_0x3363ed - 14] ^ _0x4c818d[_0x3363ed - 16], 1);
    }
    let [_0x34b6c1, _0x370729, _0x28c6f6, _0x2e9d28, _0x5c1ec7] = _0x45eb42;
    for (let _0x50a6ed = 0; _0x50a6ed < 80; _0x50a6ed++) {
      let _0x345bb1, _0x5a8e5f;
      if (_0x50a6ed < 20) {
        _0x345bb1 = _0x370729 & _0x28c6f6 | ~_0x370729 & _0x2e9d28;
        _0x5a8e5f = _0x1d26f2[0];
      } else {
        if (_0x50a6ed < 40) {
          _0x345bb1 = _0x370729 ^ _0x28c6f6 ^ _0x2e9d28;
          _0x5a8e5f = _0x1d26f2[1];
        } else {
          if (_0x50a6ed < 60) {
            _0x345bb1 = _0x370729 & _0x28c6f6 | _0x370729 & _0x2e9d28 | _0x28c6f6 & _0x2e9d28;
            _0x5a8e5f = _0x1d26f2[2];
          } else {
            _0x345bb1 = _0x370729 ^ _0x28c6f6 ^ _0x2e9d28;
            _0x5a8e5f = _0x1d26f2[3];
          }
        }
      }
      const _0x4a7612 = _0x2e1b36(_0x34b6c1, 5) + _0x345bb1 + _0x5c1ec7 + _0x5a8e5f + _0x4c818d[_0x50a6ed] >>> 0;
      _0x5c1ec7 = _0x2e9d28;
      _0x2e9d28 = _0x28c6f6;
      _0x28c6f6 = _0x2e1b36(_0x370729, 30);
      _0x370729 = _0x34b6c1;
      _0x34b6c1 = _0x4a7612;
    }
    _0x45eb42[0] = _0x45eb42[0] + _0x34b6c1 >>> 0;
    _0x45eb42[1] = _0x45eb42[1] + _0x370729 >>> 0;
    _0x45eb42[2] = _0x45eb42[2] + _0x28c6f6 >>> 0;
    _0x45eb42[3] = _0x45eb42[3] + _0x2e9d28 >>> 0;
    _0x45eb42[4] = _0x45eb42[4] + _0x5c1ec7 >>> 0;
  }
  return _0x45eb42.map(_0x456c8d => _0x456c8d.toString(16).padStart(8, "0")).join("");
  function _0x2e1b36(_0x2ab447, _0x3d8d44) {
    return _0x2ab447 << _0x3d8d44 | _0x2ab447 >>> 32 - _0x3d8d44;
  }
}