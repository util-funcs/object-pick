import pick from './../src/index';

let bucket = {};

beforeEach(() => {
  bucket = {
    name: 'John',
    surname: 'Doe',
    age: 34,
    location: {
      city: 'Londra',
      country: 'UK',
    },
    point: 0,
    'social-media': '@doejohn',
    'phone.mobile': '3323-232-32',
    '#hobbies': ['travel', 'edm'],
  };
});

afterEach(() => {
  bucket = {};
});

it('pick`s function test.', () => {
  const object1 = pick(bucket, ['name', 'age', 'point']);
  expect(Object.keys(object1).length).toEqual(3);
  expect(Object.prototype.hasOwnProperty.call(object1, 'name')).toEqual(true);
  expect(Object.prototype.hasOwnProperty.call(object1, 'age')).toEqual(true);
  expect(Object.prototype.hasOwnProperty.call(object1, 'point')).toEqual(true);
  expect(Object.prototype.hasOwnProperty.call(object1, 'surname')).toEqual(false);

  const object2 = pick(bucket, ['social-media', 'phone.mobile', '#hobbies']);
  expect(Object.keys(object2).length).toEqual(3);
  expect(Object.prototype.hasOwnProperty.call(object2, 'social-media')).toEqual(true);
  expect(Object.prototype.hasOwnProperty.call(object2, 'phone.mobile')).toEqual(true);
  expect(Object.prototype.hasOwnProperty.call(object2, '#hobbies')).toEqual(true);
});

it('undefined value test', () => {
    const object1 = pick(bucket, ['name', 'surname', 'phone'], true);
    expect(Object.prototype.hasOwnProperty.call(bucket, 'phone')).toEqual(false);
    expect(Object.keys(object1).length).toEqual(3);
    expect(Object.prototype.hasOwnProperty.call(object1, 'phone')).toEqual(true);
    expect(object1['phone']).toBeNull();
});

it('undefined value test by handler function', () => {
    const handler = (key: string) => `${key} is undefined.`;
    const object1 = pick(bucket, ['name', 'surname', 'phone', 'email'], handler);
    expect(Object.keys(object1).length).toEqual(4);
    expect(object1['phone']).toEqual('phone is undefined.');
    expect(object1['email']).toEqual('email is undefined.');
});