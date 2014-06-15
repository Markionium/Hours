'use strict';

describe('Hours Logging', function () {

    var hours;

    beforeEach(function () {
        hours = Hours();
    });

    it('should returned the increased logged hours after logging an hour', function () {
        hours.log(1);

        expect(hours.getHours()).toBe(1);
    });

    it('should substract an hour on a negative integer', function () {
        hours.log(-1);

        expect(hours.getHours()).toBe(-1);
    });

});
