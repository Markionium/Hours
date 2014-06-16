'use strict';

var Logger = function (already_logged_hours) {
    var logger = {};

    var loggedHours = 0;

    function translateTimeStringToNumber(timeString) {
        var timeParts, hours, minutes, isNegative;

        if (typeof timeString === 'number')
            return timeString;

        if (timeString[0] === "-") {
            isNegative = true;
            timeString = timeString.substr(1);
        }

        timeParts = timeString.split(':');
        hours = parseInt(timeParts[0] || 0, 10);
        minutes = parseFloat((timeParts[1] || 0) / 60);

        return isNegative ? -1 * (hours + minutes) : hours + minutes;
    }

    logger.log = function (additionalHours) {

        if ( ! additionalHours) {
            return this;
        }

        additionalHours = translateTimeStringToNumber(additionalHours);
        loggedHours += additionalHours;

        if (loggedHours < 0) {
            loggedHours = 0;
        }

        return this;
    }

    logger.get = function () {
        return loggedHours;
    }

    //Use a constructor / prototype pattern to create the right object Type
    function Logger(hours) {
        this.log(hours);
    }
    Logger.prototype = logger;
    return new Logger(already_logged_hours)
}
