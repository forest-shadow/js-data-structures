class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adds Node to the head of the Stack
   * @param {*} value
   * @return {*}
   */
  push(value) {
    const newNode = new Node(value);
    if (this.size) {
      const prevFirstNode = this.first;
      this.first = newNode;
      this.first.next = prevFirstNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }
    this.size++;
    return newNode.value;
  }

  /**
   * Removes Node from the head of the Stack
   * @return {null|*}
   */
  pop() {
    if (!this.size) return null;
    const poppedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return poppedNode.value;
  }
}