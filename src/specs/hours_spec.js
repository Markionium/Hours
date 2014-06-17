'use strict';

describe('Hours', function () {

    var hours;

    beforeEach(function () {
        hours = Hours();
    });

    it('Should add a task to the list', function () {
        hours.addTask('MyTask');

        expect(hours.getTasks()).toEqual([ {"name": "MyTask"} ]);
    });

    it('Should get a task by name and return object with that task', function () {
        hours.addTask('MyTask');

        expect(hours.getTask('MyTask')).toEqual( {"name": "MyTask"} );
    });
});