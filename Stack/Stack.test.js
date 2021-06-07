import { Stack } from './Stack';

describe('Stack', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('push method', () => {
    it('should correctly add new Node to empty stack', () => {
      stack.push('one');
      expect(stack.size).toEqual(1);
      expect(stack.first.value).toEqual('one');
      expect(stack.last.value).toEqual('one');
      expect(stack.first.next).toEqual(null);
    });

    it('should correctly add new Node to the head of stack for non-empty stack', () => {
      stack.push('one');
      stack.push('two');
      expect(stack.size).toEqual(2);
      stack.push('three');
      expect(stack.size).toEqual(3);
      expect(stack.first.value).toEqual('three');
      expect(stack.first.next.value).toEqual('two');
    });
  });

  describe('pop method', () => {
    it('should correctly remove last element from the stack', () => {
      stack.push('one');
      const poppedNodeValue = stack.pop();
      expect(poppedNodeValue).toEqual('one');
      expect(stack.size).toEqual(0);
      expect(stack.first).toEqual(null);
      expect(stack.last).toEqual(null);
    });

    it('should correctly removes element from the head of the non-empty stack', () => {
      stack.push('one');
      stack.push('two');
      stack.push('three');
      const poppedNodeValue = stack.pop();
      expect(poppedNodeValue).toEqual('three');
      expect(stack.size).toEqual(2);
      expect(stack.first.value).toEqual('two');
      expect(stack.first.next.value).toEqual('one');
    });
  });
});