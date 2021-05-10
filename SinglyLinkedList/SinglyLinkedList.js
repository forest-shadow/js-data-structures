export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds new Node to the end of the list
   * @param {*} value — new Node's value
   * @return {SinglyLinkedList}
   */
  push(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes last list's element
   * @return {*} — popped out Node's value
   */
  pop() {
    if(this.length === 0) return null;

    let currentNode = this.head;
    let newTail = this.head;

    // traversing list until pre-`tail` node
    while(currentNode.next) {
      newTail = currentNode;
      // old `tail`
      currentNode = currentNode.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;

    if(!this.length) {
      this.head = null;
      this.tail = null;
    }

    return currentNode.value;
  }

  /**
   * Removes Node from the beginning of the list
   * @return {*} — removed Node's value
   */
  shift() {
    if(!this.length) return null;
    const shiftedElement = this.head;
    this.head = this.head.next;
    this.length--;

    if(!this.length) {
      this.tail = null;
    }

    return shiftedElement.value;
  }

  /**
   * Adds new Node to the beginning of the list
   * @param {*} value
   * @return {SinglyLinkedList}
   */
  unshift(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Get element by provided index
   * @param {null} index — desired Node's index
   * @return {Node|null}
   */
  get(index) {
    if(index < 0 || index >= this.length || !this.length) return null;
    let currentNode = this.head;
    while(index) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  /**
   * Set desired Node's value
   * @param {number} index
   * @param {*} value
   * @return {boolean|null} — returns true if values was set
   */
  set(index, value) {
    if(index < 0 || index >= this.length || !this.length) return null;
    this.get(index).value = value;
    return true;
  }

  /**
   * Insert new Node into desired `index` position
   * @param {number} index
   * @param {*} value
   * @return {boolean}
   */
  insert(index, value) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      const newNode = new Node(value);
      const previousNode = this.get(index - 1);
      const existingNode = previousNode.next;

      previousNode.next = newNode;
      newNode.next = existingNode;
    }
    this.length++;
    return true;
  }

  /**
   * Remove Node by `index` position
   * @param {number} index
   * @return {null|*}
   */
  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();

    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;

    this.length--;
    return removedNode.value;
  }

  /**
   * Reverse SinglyLinkedList's elements order
   * @return {SinglyLinkedList}
   */
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = null;
    let prevNode = null;

    for(let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }

  /**
   * Stringify `SinglyLinkedList`
   * @return {string}
   */
  toString() {
    return JSON.stringify(this, null, 2);
  }
}
