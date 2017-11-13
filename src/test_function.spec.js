import chai from 'chai';

const { expect } = chai;

import { getDay } from './test_function';
import { getAdultUsers } from './test_function';
import { getRandomUsers } from './test_function';

describe('function getDay()', function () {
  it('should return day', () => {
    const dayNow = new Date().getDay();
    expect(getDay()).to.equal(dayNow);
  });
});

describe('function getAdultUsers()', function () {
  it('should return empty array', () => {
    expect(getAdultUsers()).to.be.an('array').that.is.empty;
  });
  it('should return filtered array', () => {
    const users = [{age: 10, name: 'Alex'}, {age: 19, name: 'Vasya'}];
    expect(getAdultUsers(users)).to.have.lengthOf(1);
  });
});


describe('function getRandomUsers() ', function () {

  it('should return false', () => {
    expect(getRandomUsers()).to.be.false;
  });

  const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}];
  const originalMathRandom = Math.random;
  const mockMath = Object.create(global.Math);

  it('should return first part of array', () => {
    const randomNumberValue = 0.6;
    mockMath.random = () => randomNumberValue;
    global.Math = mockMath;
    expect(getRandomUsers(users)).to.deep.equal(users.slice(0, users.length / 2));
  });

  it('should return second part of array', () => {
    const randomNumberValue = 0.3;
    mockMath.random = () => randomNumberValue;
    global.Math = mockMath;
    expect(getRandomUsers(users)).to.deep.equal(users.slice(users.length / 2), users.length);
  });

  global.Math.random = originalMathRandom;
});