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
    const newHeadNode = this.head.next;
    newHeadNode.prev = null;
    this.head = newHeadNode;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return shiftedNode.value;
  }

  /**
   * Add new Node to the start of the list
   * @param {*} value
   * @return {*} - return new node's value
   */
  unshift(value) {
    const newHeadNode = new Node(value);
    if(!this.length) {
      this.tail = newHeadNode;
      this.head = newHeadNode;
    }
    if (this.length) {
      const oldHeadNode = this.head;
      oldHeadNode.prev = newHeadNode;
      newHeadNode.next = oldHeadNode;
      this.head = newHeadNode;
    }
    this.length++;
    return newHeadNode.value;
  }

  /**
   * Find node's value by index
   * @param {number} index
   * @return {null|*} - return value of node's founded by index if it can be founded
   */
  get(index) {
    if (!this.length || index >= this.length) return null;
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.value;
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

// const dLL = new DoublyLinkedList();
// dLL.push('one');
// dLL.push('two');
// dLL.push('three');
// dLL.push('four');
// dLL.unshift('111');
// console.log(dLL);
// console.log(dLL.get(0));

