import { describe, it } from "@ephox/bedrock-client";
import { Fun, Optional } from "@ephox/katamari";
import { assert } from "chai";
import * as Ex from "../../../main/ts/Part2Ex3Optional";

describe('Exercise3OptionTest', () => {
  it('getProtocol', () => {
    assert.equal(Ex.getProtocol('https://frog.com').getOrDie(), 'https');
    assert.equal(Ex.getProtocol('http://frog.com').getOrDie(), 'http');
    assert.isTrue(Ex.getProtocol('frog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('://frog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('3ttp://frog.com').isNone(), 'malformed protocol should not be registered');
    assert.isTrue(Ex.getProtocol('httpsfrog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('httpfrog.com').isNone(), 'no protocol should be found');
    assert.isTrue(Ex.getProtocol('').isNone(), 'no protocol should be found');
  });

  it("toPositiveInteger", () => {
    // TODO: write a few test cases
    assert.equal(Ex.toPositiveInteger(1).getOrDie(), 1, "positive number");
    assert.isTrue(Ex.toPositiveInteger(-1).isNone(), "negative number cannot be converted to postive integer");
  });

  it("nonEmptyString", () => {
    assert.equal(Ex.nonEmptyString("hello").getOrDie(), "hello");
    assert.isTrue(Ex.nonEmptyString("").isNone(), "Non empty string");
  });

  it("double an optional number", () => {
    assert.equal(Ex.double(Optional.from(4)), 8, "doubling a number");
    assert.equal(Ex.double(Optional.none()), 0);
  });

  it("true if some, false if it's none ", () => {
    assert.isTrue(Ex.trueIfSome(Optional.from(4)), "true");
    assert.isFalse(Ex.trueIfSome(Optional.none()), "false");
  });

  it("get age or default to 0", () => {
    assert.deepEqual(Ex.getAge(Optional.from({ age: 99 })), { age: 99 });
    assert.deepEqual(Ex.getAge(Optional.none()), { age: 0 });
  });

  it("get age or default to 0 with fold", () => {
    assert.deepEqual(Ex.getAgeFold(Optional.from({ age: 99 })), { age: 99 });
    assert.deepEqual(Ex.getAgeFold(Optional.none()), { age: 0 });
  });

  it("get optional to array", () => {
    assert.deepEqual(Ex.convertOptionalToArray(Optional.from(0)), [0]);
    assert.deepEqual(Ex.convertOptionalToArray(Optional.none()), []);
    assert.deepEqual(Ex.convertOptionalToArray(Optional.from("Hello there")), ["Hello there"]);
  });

  it("convert array to optional", () => {
    assert.deepEqual(Ex.convertArrayToOptional([99, 1, 3]).getOrDie(), 99, "multiple elements in the array");
    assert.deepEqual(Ex.convertArrayToOptional([98]).getOrDie(), 98, "one element array");
    assert.isTrue(Ex.convertArrayToOptional([]).isNone(), "empty array");
    assert.deepEqual(Ex.convertArrayToOptional([undefined, undefined, undefined]).getOrDie(), undefined, "Array with 'undefined'");
    assert.deepEqual(Ex.convertArrayToOptional([null, null, null]).getOrDie(), null, "Array with 'null'");
  });

  it("add 3", () => {
    assert.deepEqual(Ex.add3(Optional.from(3)).getOrDie(), 6);
    assert.isTrue(Ex.add3(Optional.none()).isNone());
    assert.deepEqual(Ex.add3(Optional.from(88)).getOrDie(), 91);
  });

  it("prefix string with 'hello'", () => {
    assert.deepEqual(Ex.helloPrefixer(Optional.from(" Shane")).getOrDie(), "hello Shane");
    assert.isTrue(Ex.helloPrefixer(Optional.none()).isNone());
  });
});

// TODO: Now that you have finished all the test files in this directory,
// try running all tests in the "part2" folder all using the `-d` argument in bedrock and specifying the parent directory.
