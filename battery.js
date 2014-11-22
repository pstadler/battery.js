/** Class: Battery
 * Battery.js - a tiny little wrapper for the HTML5 Battery Status API.
 *
 * Author:
 * - Patrick Stadler <patrick.stadler@gmail.com>
 *
 * Copyright:
 * (c) 2014 Patrick Stadler. All rights reserved.
 */
var Battery = (function() {
  var _events = 'chargingchange chargingtimechange dischargingtimechange levelchange'
    , _battery = navigator.battery || navigator.mozBattery || navigator.getBattery
    , _status = null
    , _statusCallback = function() {}
    , _updateCallback = function() {};

  /** Function: getStatus
   * Register callback function to retrieve status
   *
   * Parameters:
   * (Function) fn(status, error) - callback function
   */
  self.getStatus = function(fn) {
    if(_status === 'not supported') {
      fn(null, _status);
    } else if(_status) {
      fn(_status);
    } else {
      _statusCallback = fn;
    }
  };

  /* Function: onUpdate
   * Register callback function when battery status changes
   *
   * Parameters:
   * (Function) fn(status) - callback function
   */
  self.onUpdate = function(fn) {
    _updateCallback = fn;
  };

  function eventHandler(status) {
    _status = status;
    _updateCallback(_status);
  }

  function registerEventHandler(battery) {
    for(var evt in _events.split(' ')) {
      battery.addEventListener(evt, eventHandler);
    }
  }

  if(_battery instanceof Function) {
    _battery.call(navigator)
      .then(function(status) {
        _status = status;
        _statusCallback(_status);
        registerEventHandler(_status);
      }, function() {
        _status = 'not supported';
      });
  } else if(_battery) {
    _status = _battery;
    registerEventHandler(_battery);
  } else {
    _status = 'not supported';
  }

  return self;
})(Battery || {});