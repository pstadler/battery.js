/** Class: Battery
 * Battery.js - a tiny little wrapper for the HTML5 Battery Status API.
 *
 * Author:
 * - Patrick Stadler <patrick.stadler@gmail.com>
 *
 * Copyright:
 * (c) 2012 Patrick Stadler. All rights reserved.
 */
var Battery = (function(self) {
	var _events = 'chargingchange chargingtimechange dischargingtimechange levelchange',
		_battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

	/** Function: isSupported
	 * Check if Battery Status API is supported.
	 *
	 * Returns:
	 * (Boolean) - true if is supported
	 */
	self.isSupported = function() {
		return !!_battery;
	};

	/** Function: getStatus
	 * Get the current battery status.
	 *
	 * See:
	 * http://www.w3.org/TR/battery-status/#attributes-1
	 *
	 * Returns:
	 * (Object) _battery - {charging, chargingTime, dischargingTime, level}
	 */
	self.getStatus = function() {
		return _battery;
	};

	/** Function: onUpdate
	 * Callback function when battery status is updated.
	 * Overwrite this method with your handler.
	 *
	 * Parameters:
	 * (Object) status - {charging, chargingTime, dischargingTime, level}
	 */
	self.onUpdate = function(status) {};

	if(self.isSupported()) {
		var handler = function() {
			self.onUpdate(self.getStatus());
		};
		for(e in _events.split(' ')) {
			_battery.addEventListener(e, handler);
		}
	}

	return self;
})(Battery || {});