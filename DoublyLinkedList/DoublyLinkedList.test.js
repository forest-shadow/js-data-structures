import { DoublyLinkedList } from './DoublyLinkedList';

describe('DoublyLinkedList', () => {
  let doublyLinkedList = null;

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList();
  });

  describe('push method', () => {
    it('should add node to empty list', () => {
      doublyLinkedList.push('one');
      expect(doublyLinkedList.head === doublyLinkedList.tail).toBeTruthy();
      expect(doublyLinkedList.head.value).toEqual('one');
      expect(doublyLinkedList.tail.value).toEqual('one');
      expect(doublyLinkedList.length).toEqual(1);
    });

    it('should add node to list with some nodes', () => {
      doublyLinkedList.push('one');
      doublyLinkedList.push('two');
      expect(doublyLinkedList.length).toEqual(2);
      expect(doublyLinkedList.head.value).toEqual('one');
      expect(doublyLinkedList.head.next.value).toEqual('two');
      expect(doublyLinkedList.tail.value).toEqual('two');
      expect(doublyLinkedList.tail.prev.value).toEqual('one');
      doublyLinkedList.push('three');
      expect(doublyLinkedList.length).toEqual(3);
      expect(doublyLinkedList.head.value).toEqual('one');
      expect(doublyLinkedList.head.next.value).toEqual('two');
      expect(doublyLinkedList.head.next.next.value).toEqual('three');
      expect(doublyLinkedList.tail.value).toEqual('three');
      expect(doublyLinkedList.tail.prev.value).toEqual('two');
      expect(doublyLinkedList.tail.prev.prev.value).toEqual('one');
    });
  });

  describe('pop method', () => {
    it('should correctly remove last node from the list with one node', () => {
      doublyLinkedList.push('one');
      const poppedValue = doublyLinkedList.pop();
      expect(poppedValue).toEqual('one');
      expect(doublyLinkedList.head).toEqual(null);
      expect(doublyLinkedList.tail).toEqual(null);
      expect(doublyLinkedList.length).toEqual(0);
    });

    it('should remove last node from the list', () => {
      doublyLinkedList.push('one');
      doublyLinkedList.push('two');
      doublyLinkedList.push('three');
      const poppedValue = doublyLinkedList.pop();
      expect(poppedValue).toEqual('three');
      expect(doublyLinkedList.tail.value).toEqual('two');
      expect(doublyLinkedList.head.next.next).toEqual(null);
      expect(doublyLinkedList.length).toEqual(2);
    });

    it('should return null if there are no nodes in the list', () => {
      expect(doublyLinkedList.pop()).toEqual(null);
    });
  });

  describe('shift method', () => {
    it('should return null if there are no nodes in the list', () => {
      expect(doublyLinkedList.shift()).toEqual(null);
    });

    it('should correctly remove first node of the list if there is only one node in the list', () => {
      doublyLinkedList.push('one');
      const shiftedNodeValue = doublyLinkedList.shift();
      expect(shiftedNodeValue).toEqual('one');
      expect(doublyLinkedList.head).toEqual(null);
      expect(doublyLinkedList.tail).toEqual(null);
      expect(doublyLinkedList.length).toEqual(0);
    });

    it('should correctly remove first node of the list', () => {
      doublyLinkedList.push('one');
      doublyLinkedList.push('two');
      doublyLinkedList.push('three');
      const shiftedNodeValue = doublyLinkedList.shift();
      expect(shiftedNodeValue).toEqual('one');
      expect(doublyLinkedList.head.value).toEqual('two');
      expect(doublyLinkedList.tail.value).toEqual('three');
      expect(doublyLinkedList.head.prev).toEqual(null);
      expect(doublyLinkedList.length).toEqual(2);
    });
  });

  describe('unshift method', () => {
    it('should add new Node to the empty list', () => {
      const addedNodeValue = doublyLinkedList.unshift('one');
      expect(addedNodeValue).toEqual('one');
      expect(doublyLinkedList.length).toEqual(1);
      expect(doublyLinkedList.head.value).toEqual('one');
      expect(doublyLinkedList.tail.value).toEqual('one');
    });

    it('should add new Node to the start of the list with existing nodes', () => {
      doublyLinkedList.push('one');
      doublyLinkedList.push('two');
      const addedNodeValue = doublyLinkedList.unshift('zero');
      expect(addedNodeValue).toEqual('zero');
      expect(doublyLinkedList.length).toEqual(3);
      expect(doublyLinkedList.head.value).toEqual('zero');
      expect(doublyLinkedList.head.prev).toEqual(null);
      expect(doublyLinkedList.head.next.prev.value).toEqual('zero');
    });
  });

  describe('get method', () => {
    it('should get element from the list', () => {
      doublyLinkedList.push('one');
      doublyLinkedList.push('two');
      doublyLinkedList.push('three');
      doublyLinkedList.push('four');
      doublyLinkedList.push('five');
      doublyLinkedList.push('six');
      expect(doublyLinkedList.get(2).value).toEqual('three');
      expect(doublyLinkedList.get(4).value).toEqual('five');
    });
  });

  describe('set method', () => {
    it('should set desired node\'s value by index', () => {
      doublyLinkedList.push('one');
      doublyLinkedList.push('two');
      doublyLinkedList.push('three');
      expect(doublyLinkedList.set(1, '2')).toBeTruthy();
      expect(doublyLinkedList.get(1).value).toEqual('2')
    });
  });
});