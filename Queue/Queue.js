class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adds new Node to the Tail of the Queue
   * @param {*} value
   * @return {*}
   */
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
    this.size++;
    return newNode.value;
  }

  /**
   * Delete Node from the Head of Queue
   * @return {null|*}
   */
  dequeue() {
    if (!this.size) return null;
    const removedNode = this.first;
    if (this.last === this.first) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return removedNode.value;
  }
}