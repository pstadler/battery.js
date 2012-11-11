# Battery.js

A tiny JavaScript wrapper for the [HTML5 Battery Status API](http://www.w3.org/TR/battery-status/).

## Usage

```JavaScript
if(Battery.isSupported()) {
	// Get the battery status
	var status = Battery.getStatus();
	console.log('Level: ' + Math.floor(status.level * 100) + '%'); // 30%
	console.log('Charging: ' + status.charging);                   // true
	console.log('Time until charged: ' + status.chargingTime);     // 3600 (seconds) or Infinity
	console.log('Battery time left: ' + status.dischargingTime);   // 3600 (seconds) or Infinity

	// Register a handler to get notified when battery status changes
	Battery.onUpdate = function(status) {
		console.log(status); // {level, charging, chargingTime, dischargingTime}
	};
}
```

## Demo

[koeniglich.ch/battery.js](http://koeniglich.ch/battery.js)

*As of November 2012 the Battery Status API is only supported by [Firefox Aurora](http://www.mozilla.org/en-US/firefox/aurora/).*