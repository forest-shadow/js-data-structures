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
    });
  });
});