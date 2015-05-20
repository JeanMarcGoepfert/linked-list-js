class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || this;
    this.next = next || this;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.total = 0;
  }

  push(value) {
    this.add(value);
  }

  unshift(value) {
    this.head = this.add(value);
  }

  pop() {
    if (!this.head) return undefined;
    return this.remove(this.head.prev);
  }

  shift() {
    if (!this.head) return undefined;
    return this.remove(this.head);
  }

  delete(value, node) {
    node = node || this.head;

    if (node.value === value) {
      return this.remove(node)
    } else if (node.next === this.head) {
      return undefined;
    }

    return this.delete(value, node.next);
  }

  count() {
    return this.total;
  }

  add(value) {
    let node = new Node(value);

    if (this.head) {
      [node.prev, node.next] = [this.head.prev, this.head];
      this.head.prev.next = this.head.prev = node;
    } else {
      this.head = node;
    }

    this.total++;
    return node;
  }

  remove(node) {
    if (node === node.next) {
      this.head = null;
    } else {
      node.next.prev = node.prev;
      node.prev.next = node.next;

      if (node === this.head) this.head = node.next;
    }

    this.total--;
    return node.value;
  }
}

export default LinkedList;
