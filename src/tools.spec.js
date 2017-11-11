import chai from 'chai';// chai = {assert, equel ...}
const {assert, expect} = chai;
import {sum} from './tools';

chai.should();

// describe('sum', function () {
//   it('should return 5 for sum(2, 3)', () => {
//     assert.equal(sum(2, 3), 5);
//   });
//
//   it('should return 2 for sum(2, 0)', () => {
//     assert.equal(sum(2, 0), 2);
//   });
//   it('should return 2 for sum(2, 0)', () => {
//     assert.strictEqual(sum(2, ''), '2');
//   });
// });

describe('sum', function () {

  xit('should return 5 for sum(2, 3)', () => {
    expect(sum(2, 3)).to.equal(5);
  });

  xit('should return 2 for sum(2, 0)', () => {
    expect(sum(2, 0)).to.equal(2);
  });

  xit('empty string to equal 0', () => {
    expect(sum()).to.equal(0);
  });

  xit('should return 6', () => {
    sum(3, 3).should.equal(6);
  });
  xit('should return 6', () => {
    sum(3, 3).should.not.equal(4);
  });
});