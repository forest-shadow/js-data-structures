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

  pop() {
    if (!this.length) return null;

    let currentElement = this.head;
    let newTail = this.head;

    // traversing list until pre-`tail` node
    while (currentElement.next) {
      newTail = currentElement;
      // oldTail
      currentElement = currentElement.next;
    }

    this.tail = newTail;
    newTail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return currentElement.value;
  }

  shift() {
    if (!this.length) return null;
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return oldHead.value;
  }

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

  get(index) {
    if (index < 0 || index >= this.length || !this.length) return null;

    let currentElement = this.head;
    while (index) {
      currentElement = currentElement.next;
      index--;
    }

    return currentElement;
  }

  set(index, value) {
    if (!this.length || index >= this.length || index < 0) return false;
    this.get(index).value = value;
    return true;
  }

  insert(index, value) {
    if (!this.length || index > this.length || index < 0) return false;
    if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      let tempNode = prevNode.next;

      prevNode.next = newNode;
      newNode.next = tempNode;
    }

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length || !this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;

    return removedNode.value;
  }

  reverse() {
    let currentNode = this.head;

    this.head = this.tail;
    this.tail = currentNode;

    let nextNode = null;
    let prevNode = null;

    for (let i = 0; i < this.length; i++) {
      // get old `next` el reference
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return this;
  }
}
