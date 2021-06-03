class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  /**
   * Add new Node to the end of the list
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Popped out last list's element if any of them are presented
   * @return {null|*} - return value of popped out element
   */
  pop() {
    if (!this.length) return null;
    const poppedNode = this.tail;

    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--

    return poppedNode.value;
  }

  /**
   * Remove first list element
   * @return {null|*} - return removed element's value
   */
  shift() {
    if (!this.length) return null;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode.value;
  }

  /**
   * Add new Node to the start of the list
   * @param {*} value
   * @return {*} - return new node's value
   */
  unshift(value) {
    const newHeadNode = new Node(value);
    if (this.length) {
      const oldHeadNode = this.head;
      oldHeadNode.prev = newHeadNode;
      newHeadNode.next = oldHeadNode;
      this.head = newHeadNode;
    } else {
      this.tail = newHeadNode;
      this.head = newHeadNode;
    }

    this.length++;
    return newHeadNode.value;
  }

  /**
   * Find node's value by index
   * @param {number} index
   * @return {Node|null}
   */
  get(index) {
    if (!this.length || index >= this.length) return null;
    let currentNode, currentIndex;
    if (this.length / 2 >= index) {
      currentNode = this.head;
      currentIndex = 0;
      while(currentIndex !== index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
    } else {
      currentNode = this.tail;
      currentIndex = this.length - 1;
      while(currentIndex !== index) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
    }

    return currentNode;
  }

  /**
   * Set value of Node by it's index
   * @param {number} index
   * @param {*} value
   * @return {boolean}
   */
  set(index, value) {
    if (!this.length || index >= this.length) return false;
    const foundedNode = this.get(index);
    foundedNode.value = value;
    return true;
  }

  /**
   * Stringify `DoublyLinkedList`
   * @return {string}
   */
  toString() {
    return JSON.stringify(this, null, 2);
  }
}

