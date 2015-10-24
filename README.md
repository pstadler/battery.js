# Battery.js [![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url]


A tiny JavaScript wrapper for the [HTML5 Battery Status API](http://www.w3.org/TR/battery-status/).

As of October 2015 the Battery Status API is supported by Firefox, Chrome, Opera, Android Browser and Chrome for Android: http://caniuse.com/battery-status

## Usage

```JavaScript
var Battery = require('battery.js'); // or similar

function logBatteryStatus(status) {
  console.log('Level: ' + Math.floor(status.level * 100) + '%'); // 30%
  console.log('Charging: ' + status.charging);                   // true
  console.log('Time until charged: ' + status.chargingTime);     // 3600 (seconds) or Infinity
  console.log('Battery time left: ' + status.dischargingTime);   // 3600 (seconds) or Infinity
}

// Get battery status as soon as it's available
Battery.getStatus(function(status, error) {
  if(error) {
    console.error('Battery status is not supported');
    return;
  }

  logBatteryStatus(status);
});

// Register a handler to get notified when battery status changes
Battery.onUpdate(logBatteryStatus);
```

## Demo

[pstadler.sh/battery.js](http://pstadler.sh/battery.js)

[npm-url]: https://npmjs.com/package/battery.js
[npm-version-image]: https://img.shields.io/npm/v/battery.js.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/battery.js.svg?style=flat-square

[license-url]: https://github.com/pstadler/battery.js/blob/master/LICENSE
[license-image]: https://img.shields.io/npm/l/battery.js.svg?style=flat-square