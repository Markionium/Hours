'use strict';

var Logger = function () {
    var logger = {};

    var hours = 0;

    logger.log = function (additionalHours) {
        hours += additionalHours;
    }

    logger.getHours = function () {
        return hours;
    }

    function Logger() {}
    Logger.prototype = logger;
    return new Logger()
}