import fn from '../src';
/*
freeCodeCamp is an awesome resource
freeCodeCamp.is.an.awesome.resource
freeCodeCamp_is_an_awesome_resource
freeCodeCamp-is-an-awesome-resource
*/

describe('api.basic', () => {
  test('should return a string', () => {
    expect(typeof fn('freeCodeCamp')).toBe('string');
  });

  test('freeCodeCamp is an awesome resource', () => {
    expect(fn('freeCodeCamp is an awesome resource')).toBe('FreeCodeCamp Is An Awesome Resource');
  });

  test('freeCodeCamp.is.an.awesome.resource', () => {
    expect(fn('freeCodeCamp.is.an.awesome.resource')).toBe('FreeCodeCamp Is An Awesome Resource');
  });

  test('freeCodeCamp_is_an_awesome_resource', () => {
    expect(fn('freeCodeCamp_is_an_awesome_resource')).toBe('FreeCodeCamp Is An Awesome Resource');
  });

  test('freeCodeCamp-is-an-awesome-resource', () => {
    expect(fn('freeCodeCamp-is-an-awesome-resource')).toBe('FreeCodeCamp Is An Awesome Resource');
  });
});
