import { SinglyLinkedList } from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {
  let linkedList = null;

  describe('`push` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should add new `Node` as `head` and `tail` if there are no items in `SinglyLinkedList`', () => {
      expect(linkedList.push('test').head.value).toBe('test');
      expect(linkedList.tail.value).toBe('test');
      expect(linkedList.length).toBe(1);
    });

    it('should add new `Node` as `tail` if there are existing items in `SinglyLinkedList`', () => {
      linkedList.push('one');
      linkedList.push('two');
      expect(linkedList.head.value).toBe('one');
      expect(linkedList.head.next.value).toBe('two');
      expect(linkedList.tail.value).toBe('two');
      expect(linkedList.length).toBe(2);
    });
  });

  describe('`pop` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should return `null` of there are no `Node`s in list', () => {
      expect(linkedList.pop()).toBe(null);
    });

    it('should return `value` of last popped out element', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');
      expect(linkedList.pop()).toBe('three');
      expect(linkedList.length).toBe(2);
    });

    it('should set `head` and `tail` to `null` if there are no elements remaining', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.pop();
      linkedList.pop();
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });
  });

  describe('`shift` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should return `null` if there are no `Node`s in list', () => {
      expect(linkedList.shift()).toBe(null);
    });

    it('should return removed head `Node`s `value', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');
      expect(linkedList.shift()).toBe('one');
      expect(linkedList.head.value).toBe('two');
      expect(linkedList.length).toBe(2);
    });

    it('should set lists `head` & `tail` to `null` if there are no `Node`s remainig in list', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.pop();
      linkedList.pop();
      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    });
  });

  describe('`unshift` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should add new `Node` as `tail` & `head` if there are no items in list', () => {
      linkedList.unshift('one');
      expect(linkedList.head.value).toBe('one');
      expect(linkedList.tail.value).toBe('one');
    });

    it('should add new `Node` as current `head` its `next` must point to previous `head` element', () => {
      linkedList.push('two');
      linkedList.unshift('one');
      expect(linkedList.head.value).toBe('one');
      expect(linkedList.head.next.value).toBe('two');
      expect(linkedList.length).toBe(2);
    });
  });

  describe('`get` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should return `null` if passed-in `index` is less than `0` or >= than `length`', () => {
      expect(linkedList.get(0)).toBe(null);
      linkedList.push('one');
      linkedList.push('two');
      expect(linkedList.get(-1)).toBe(null);
      expect(linkedList.get(2)).toBe(null);
    });

    it('should return `Node` on given `index`', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');
      expect(linkedList.get(0).value).toBe('one');
      expect(linkedList.get(2).value).toBe('three');
    });
  });

  describe('`set` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should return `false` if there are no `Node`s in list or provided `index` is higher that list `length`', () => {
      expect(linkedList.set(0, 'test')).toBe(false);
      expect(linkedList.set(1, 'test')).toBe(false);
      linkedList.push('one');
      expect(linkedList.set(1, 'test')).toBe(false);
    });

    it('should change elements `value` by provided `id`', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');
      expect(linkedList.set(1, 'test-two')).toBe(true);
      expect(linkedList.get(1).value).toBe('test-two');
      expect(linkedList.set(2, 'test-three')).toBe(true);
      expect(linkedList.get(2).value).toBe('test-three');
    });
  });

  describe('`insert` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should return `false` if provided `index` is less than `0` or higher that list `length`', () => {
      expect(linkedList.insert(-1, 'test')).toBe(false);
      linkedList.push('one');
      linkedList.push('two');
      expect(linkedList.insert(3, 'test')).toBe(false);
    });

    it('should `push` new `Node` if provided `index` equals `length`', () => {
      linkedList.push('one');
      expect(linkedList.insert(1, 'test')).toBe(true);
      expect(linkedList.tail.value).toBe('test');
      expect(linkedList.get(1).value).toBe('test');
    });

    it('should `unshift` new `Node` if provided `index` equals `0`', () => {
      linkedList.push('one');
      expect(linkedList.insert(0, 'test')).toBe(true);
      expect(linkedList.head.value).toBe('test');
      expect(linkedList.get(0).value).toBe('test');
      expect(linkedList.tail.value).toBe('one');
    });

    it('should `insert` new `Node` into provided list `index` position', () => {
      let insertIndex = 1;
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');
      expect(linkedList.insert(insertIndex, 'test')).toBe(true);
      expect(linkedList.get(insertIndex - 1).next.value).toBe('test');
      expect(linkedList.get(insertIndex).next.value).toBe('two');
      linkedList.insert(2, 'test2');
      expect(linkedList.get(2).value).toBe('test2');
    });
  });

  describe('`remove` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should return `null` if provided `index` is less than `0` or higher that list `length`', () => {
      expect(linkedList.remove(0)).toBe(null);
      linkedList.push('one');
      expect(linkedList.remove(-1)).toBe(null);
      linkedList.push('two');
      expect(linkedList.remove(2)).toBe(null);
    });

    it('should `pop` last element if `index` equals to `length - 1`', () => {
      linkedList.push('one');
      linkedList.push('two');
      expect(linkedList.remove(1)).toBe('two');
      expect(linkedList.length).toBe(1);
      expect(linkedList.tail.value).toBe('one');
    });

    it('should `shift` first element if `index` equals to `0`', () => {
      linkedList.push('one');
      linkedList.push('two');
      expect(linkedList.remove(0)).toBe('one');
      expect(linkedList.length).toBe(1);
      expect(linkedList.head.value).toBe('two');
    });

    it('should remove element by provided `index`', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');

      expect(linkedList.remove(1)).toBe('two');
      expect(linkedList.head.next.value).toBe('three');
      expect(linkedList.length).toBe(2);
    });
  });

  describe('`reverse` method', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
    });

    it('should reverse order of list', () => {
      linkedList.push('one');
      linkedList.push('two');
      linkedList.push('three');
      linkedList.push('four');

      linkedList.reverse();
      expect(linkedList.head.value).toBe('four');
      expect(linkedList.tail.value).toBe('one');
      expect(linkedList.get(1).value).toBe('three');
    });
  });
});
