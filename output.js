//Wed Mar 12 2025 16:43:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
function _0x89a5a1(_0x1eda19) {
  const _0x2e7c50 = [1139959137, 3526905765, 1826807684, 1782758010, 236587702],
    _0x30e485 = [1136336261, 131233397, 2378760348, 1638843734];
  let _0x244489 = new TextEncoder().encode(_0x1eda19),
    _0x247935 = _0x244489.length * 8;
  _0x244489 = [..._0x244489, 128];
  while (_0x244489.length * 8 % 512 !== 448) {
    _0x244489.push(0);
  }
  const _0x40d3c4 = new ArrayBuffer(8);
  new DataView(_0x40d3c4).setBigUint64(0, BigInt(_0x247935));
  _0x244489.push(...new Uint8Array(_0x40d3c4));
  for (let _0x20cffe = 0; _0x20cffe < _0x244489.length; _0x20cffe += 64) {
    const _0x4b7f0a = _0x244489.slice(_0x20cffe, _0x20cffe + 64),
      _0x115730 = new Array(80);
    for (let _0x1d7688 = 0; _0x1d7688 < 16; _0x1d7688++) {
      _0x115730[_0x1d7688] = _0x4b7f0a[_0x1d7688 * 4] << 24 | _0x4b7f0a[_0x1d7688 * 4 + 1] << 16 | _0x4b7f0a[_0x1d7688 * 4 + 2] << 8 | _0x4b7f0a[_0x1d7688 * 4 + 3];
    }
    for (let _0x4a28c0 = 16; _0x4a28c0 < 80; _0x4a28c0++) {
      _0x115730[_0x4a28c0] = _0x309878(_0x115730[_0x4a28c0 - 3] ^ _0x115730[_0x4a28c0 - 8] ^ _0x115730[_0x4a28c0 - 14] ^ _0x115730[_0x4a28c0 - 16], 1);
    }
    let [_0x388ec5, _0xb3a218, _0x4de970, _0x1bef49, _0x2466f7] = _0x2e7c50;
    for (let _0x1c91f6 = 0; _0x1c91f6 < 80; _0x1c91f6++) {
      let _0xdab738, _0x4c98bf;
      if (_0x1c91f6 < 20) _0xdab738 = _0xb3a218 & _0x4de970 | ~_0xb3a218 & _0x1bef49, _0x4c98bf = _0x30e485[0];else {
        if (_0x1c91f6 < 40) _0xdab738 = _0xb3a218 ^ _0x4de970 ^ _0x1bef49, _0x4c98bf = _0x30e485[1];else {
          if (_0x1c91f6 < 60) {
            _0xdab738 = _0xb3a218 & _0x4de970 | _0xb3a218 & _0x1bef49 | _0x4de970 & _0x1bef49;
            _0x4c98bf = _0x30e485[2];
          } else _0xdab738 = _0xb3a218 ^ _0x4de970 ^ _0x1bef49, _0x4c98bf = _0x30e485[3];
        }
      }
      const _0x37d2b9 = _0x309878(_0x388ec5, 5) + _0xdab738 + _0x2466f7 + _0x4c98bf + _0x115730[_0x1c91f6] >>> 0;
      _0x2466f7 = _0x1bef49;
      _0x1bef49 = _0x4de970;
      _0x4de970 = _0x309878(_0xb3a218, 30);
      _0xb3a218 = _0x388ec5;
      _0x388ec5 = _0x37d2b9;
    }
    _0x2e7c50[0] = _0x2e7c50[0] + _0x388ec5 >>> 0;
    _0x2e7c50[1] = _0x2e7c50[1] + _0xb3a218 >>> 0;
    _0x2e7c50[2] = _0x2e7c50[2] + _0x4de970 >>> 0;
    _0x2e7c50[3] = _0x2e7c50[3] + _0x1bef49 >>> 0;
    _0x2e7c50[4] = _0x2e7c50[4] + _0x2466f7 >>> 0;
  }
  return _0x2e7c50.map(_0x53cd08 => _0x53cd08.toString(16).padStart(8, "0")).join("");
  function _0x309878(_0x424599, _0x31c85f) {
    return _0x424599 << _0x31c85f | _0x424599 >>> 32 - _0x31c85f;
  }
}