import { Queue } from './Queue';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  })

  describe('enqueue method', () => {
    it('should properly add new Node to the empty Queue', () => {
      queue.enqueue('one');
      expect(queue.size).toEqual(1);
      expect(queue.first.value).toEqual('one');
      expect(queue.last.value).toEqual('one');
    });

    it('should properly add new Node to the Queue with Nodes', () => {
      queue.enqueue('one');
      queue.enqueue('two');
      expect(queue.size).toEqual(2);
      expect(queue.last.value).toEqual('two');
      expect(queue.first.value).toEqual('one');
      expect(queue.first.next.value).toEqual('two');
      queue.enqueue('three');
      expect(queue.size).toEqual(3);
      expect(queue.last.value).toEqual('three');
      expect(queue.first.next.value).toEqual('two');
      expect(queue.first.value).toEqual('one');
    });
  });

  describe('dequeue method', () => {
    it('should correctly remove last Node from the Queue', () => {
      queue.enqueue('one');
      const removedNodeValue = queue.dequeue();
      expect(removedNodeValue).toEqual('one');
      expect(queue.first).toEqual(null);
      expect(queue.last).toEqual(null);
      expect(queue.size).toEqual(0);
    });

    it('should correctly remove first element from the Head of the Queue', () => {
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      const removedNodeValue = queue.dequeue();
      expect(removedNodeValue).toEqual('one');
      expect(queue.size).toEqual(2)
      expect(queue.first.value).toEqual('two');
      expect(queue.last.value).toEqual('three');
    });
  });
});