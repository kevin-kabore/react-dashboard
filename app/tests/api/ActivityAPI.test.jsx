var expect = require('expect');

var ActivityAPI = require('ActivityAPI');

describe('ActivityAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('activities');
  });

  it('should exist', () => {
    expect(ActivityAPI).toExist();
  })

  describe('setActivities', () => {
    it('should set valid activities array', () => {
      var activities = [{
        id: 1,
        title: 'Test title',
        date: 10,
        startTime: 5,
        endTime: 6
      }]
      ActivityAPI.setActivities(activities);

      var actualActivities = JSON.parse(localStorage.getItem('activities'));

      expect(actualActivities).toEqual(activities);
    })

    it('should not set invalid activities array', () => {
      var badActivities = {a: 'b'};
      ActivityAPI.setActivities(badActivities);

      expect(localStorage.getItem('activities')).toBe(null)
    })
  });

  describe('getActivities', () => {
    it('should return an empty array for bad localStorage data', () => {
      var actualActivities = ActivityAPI.getActivities();
      expect(actualActivities).toEqual([]);
    })

    it('should return activities if valid array in localStorage', () => {
      var activities = [{
        id: 1,
        title: 'Test title',
        date: 10,
        startTime: 5,
        endTime: 6
      }];

      localStorage.setItem('activities', JSON.stringify(activities));
      var actualActivities = ActivityAPI.getActivities();

      expect(actualActivities).toEqual(activities);

    })
  })
})
