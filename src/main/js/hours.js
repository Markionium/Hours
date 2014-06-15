'use strict';

var Hours = function () {
    var hours = {},
        logger = Logger();

    hours.log = logger.log;
    hours.getHours = logger.getHours;

    function Hours () {};
    Hours.prototype = hours;

    return new Hours();
}
