'use strict';

var Logger = function (already_logged_hours) {
    var logger = {};

    var logged_hours = 0;

    function translateTimeStringToNumber(timeString) {
        var timeParts, hours, minutes;

        if (typeof timeString === 'number')
            return timeString;

        timeParts = timeString.split(':');
        hours = parseInt(timeParts[0] || 0, 10);
        minutes = parseFloat((timeParts[1] || 0) / 60);

        return hours + minutes;
    }

    logger.log = function (additionalHours) {

        if ( ! additionalHours) {
            return this;
        }

        additionalHours = translateTimeStringToNumber(additionalHours);
        logged_hours += additionalHours;

        if (logged_hours < 0) {
            logged_hours = 0;
        }

        return this;
    }

    logger.get = function () {
        return logged_hours;
    }

    //Use a contructor / prototype pattern to create the right object Type
    function Logger(hours) {
        this.log(hours);
    }
    Logger.prototype = logger;
    return new Logger(already_logged_hours)
}
