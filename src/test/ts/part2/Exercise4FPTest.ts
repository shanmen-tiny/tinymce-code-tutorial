import { describe, it } from '@ephox/bedrock-client';
import { Optional } from '@ephox/katamari';
import { assert } from 'chai';
import * as Ex from '../../../main/ts/Part2Ex4FP';

describe('Exercise4FPTest', () => {
    it('get or else 2', () => {
        assert.deepEqual(Ex.getOrElse2(Optional.from('Shane'), 'hi'), 'Shane');
        assert.deepEqual(Ex.getOrElse2(Optional.none(), 'test2'), 'test2');
    });

    it('get or else 3', () => {
        assert.deepEqual(Ex.getOrElse3(Optional.some('Test1'), 'Test2'), 'Test1');
        assert.deepEqual(Ex.getOrElse3(Optional.none(), 'Test2'), 'Test2');
    });

    it('get or else 4', () => {
        assert.deepEqual(Ex.getOrElse4(Optional.some('Test1'), 'Test2'), 'Test1');
        assert.deepEqual(Ex.getOrElse4(Optional.none(), 'Test2'), 'Test2');
    });

    it('replace numbers with 9', () => {
        assert.deepEqual(Ex.replaceWith9([1, 2, 3, 4, 5]), [9, 9, 9, 9, 9]);
        assert.deepEqual(Ex.replaceWith9([3]), [9]);
    });

    it('double twice', () => {
        assert.deepEqual(Ex.doubleTwice(3), 12);
        assert.deepEqual(Ex.doubleTwice(9), 36);
    });

    it('double then converts to string', () => {
        assert.deepEqual(Ex.dblOs(Optional.from(3)).getOrDie(), '6');
        assert.deepEqual(Ex.dblOs(Optional.from(9)).getOrDie(), '18');
    });
});