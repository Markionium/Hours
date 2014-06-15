'use strict';

describe('Logger', function () {

    var logger;

    beforeEach(function () {
        logger = Logger();
    });

    it('should returned the increased logged hours after logging an hour', function () {
        logger.log(1);

        expect(logger.get()).toBe(1);
    });

    it('should substract an hour on a negative integer', function () {
        var logger = Logger(4);
        logger.log(-1);

        expect(logger.get()).toBe(3);
    });

    it('should log minutes if a minute modifier is given', function () {
        logger.log(':15');

        expect(logger.get()).toBe(0.25);
    });

    it('should log hours and minutes if they are both passed', function () {
       logger.log('2:15');

        expect(logger.get()).toBe(2.25);
    });

    it('should never return a time count go below 0', function(){
        logger.log(-1);

        expect(logger.get()).toBe(0);
    });

    it('should not log anything when the to log value is undefined', function () {
        logger.log(undefined);
        logger.log(null);

        expect(logger.get()).toBe(0);
    });
});
