import chai from 'chai';

const {expect} = chai;
import {Person, NAME} from "./person";

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person();
  });

  xit('should create interface with name', () => {
    const testName = "Sveta";
    expect(new Person(testName).name).to.equal(testName);
  });

  xit('should create instance with default name', () => {
    expect(person).to.have.own.property('name');
    expect(person.name).to.exist;
  });

  xit('should create instance with default name NAME', () => {
    expect(person.name).to.equal(NAME);
  });

  xit('should create date field "creation"', () => {
    expect(person.creation).to.be.an.instanceOf(Date);
  x});

  xit('should create date', () => {
    expect(person.creation).to.be.an.instanceOf(Date);
  });

  xit('should get us a name on getName', () => {
    expect(person.getName()).to.equal(person.name);
  });

  xit('should get us a name on setName', () => {
    const testName = 'test';
    person.setName(testName);
    expect(person.getName()).to.equal(testName);
  });

  xit('should show "day Child" on getCreation()', () => {
    const tests = [
      {hours: 23,text: 'night child'},
      {hours: 7, text: 'morning child'},
      {hours: 12, text: 'day child'},
      {hours: 20, text: 'evening child'}
    ];
    tests.forEach(({hours, text}) => {
      person.creation.setHours(hours);
      expect(person.getCreation()).to.equal(text);
    });
  });

});

