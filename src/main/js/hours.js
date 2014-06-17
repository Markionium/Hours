'use strict';

var Hours = function () {
    var hours = {},
        logger = Logger(),
        tasks = {};

    hours.log = logger.log;
    hours.getHours = logger.getHours;

    hours.addTask = function (name) {
        tasks[name] = { "name": name };
    }

    hours.getTask = function (name) {
        return tasks[name];
    }

    hours.getTasks = function () {
        var key,
            result = [];

        for (key in tasks) {
            result.push(tasks[key]);
        }
        return result;
    }

    function Hours () {};
    Hours.prototype = hours;

    return new Hours();
}
