import { describe, it } from '@ephox/bedrock-client';
import { assert } from 'chai';
import * as Ex from '../../../main/ts/Part2Ex2ArrayFunctions';

describe('Exercise2ArrayFunctionsTest', () => {
  it('runEach1', () => {
    Ex.runEach1();
  });

  it('frog names', () => {
    assert.deepEqual(Ex.frogNames(Ex.myFrogs), ['frog1', 'frog2', 'loudfrog', 'quietfrog'], 'frog names');
  });

  it('frog ages', () => {
    // TODO: write a test for your frog ages function
    assert.deepEqual(Ex.frogAges(Ex.myFrogs), [3, 4, 1, 10], 'frog ages');
  });

  it('ribbitting frogs', () => {
    assert.deepEqual(Ex.ribbitting(Ex.myFrogs), [
      { name: 'frog1', ribbits: true, age: 3 },
      { name: 'loudfrog', ribbits: true, age: 1 }
    ], 'ribbitting');
  });

  it('older frogs', () => {
    assert.deepEqual(Ex.olderFrogs(Ex.myFrogs), [
      { name: 'quietfrog', ribbits: false, age: 10 }
    ], 'older frogs');
  });

  it('has ribbitting frogs', () => {
    assert.isTrue(Ex.hasRibbitingFrog(Ex.myFrogs), 'has ribbitting frogs');
  });

  it('has negative number', () => {
    assert.isFalse(Ex.hasNegativeNumbers([0, 1, 2, 3]), 'has negative number');
    assert.isTrue(Ex.hasNegativeNumbers([0, -1, 2, 3]), 'has negative number 2');
  });

  it('csvs', () => {
    assert.deepEqual(Ex.splitCsvs([]), [], 'empty array');
    assert.deepEqual(Ex.splitCsvs(['a']), ['a'], 'single string');
    assert.deepEqual(Ex.splitCsvs(['a,b']), ['a', 'b'], 'single csv string');
    assert.deepEqual(Ex.splitCsvs(['a', 'b']), ['a', 'b'], 'several strings');
    assert.deepEqual(Ex.splitCsvs(['a', 'b,d,a']), ['a', 'b', 'd', 'a'], 'several csv strings');
  });
});
