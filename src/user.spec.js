import chai from 'chai';
import sinon from 'sinon';

const {expect} = chai;

import {getUsers} from "./users";

describe('users', () => {
  const fakeData = {
    json() {
      Promise.resolve()
    }
  };
  const fakeFetch = () => Promise.resolve(fakeData);
  const callStub = () => stub.returns(fakeFetch());

  let stub;

  beforeEach(() => {
    stub = sinon.stub(window, 'fetch');
    callStub();
  });

  afterEach(() => {
    window.fetch.restore();
  });

  it('should call fetch() method', () => {
    getUsers();
    expect(stub.called).to.be.true;
  });

  it('should call console.log() on success response', (done) => {
    const consoleStub = sinon.stub(console, 'log');
    getUsers().then(() => {
      expect(consoleStub.called).to.be.true;
      done();
      consoleStub.restore();
    });
  });
});