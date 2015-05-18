class Element {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.totalNodes = 0;
    this.start = null;
  }

  push(value) {
    if (this.start) {
      this.addNode(value, this.start.prev);
    } else {
      this.addNode(value);
    }
  }

  addNode(value, location) {

    let node = new Element(value);

    if (!location) {
      this.start = node.prev = node.next = node;
    } else {
      node.next = this.start;
      node.prev = this.start.prev;

      location.next = node;
      location = node;
      //this doesn't work
      //'this'
    }

    this.totalNodes++;
  }

  unshift(value) {
    if (this.start) {
      this.addNode(value, this.start);
    } else {
      this.addNode(value);
    }
  }

  pop() {
    if (!this.start) return undefined;

    let el = this.start.prev;
    this.start.prev.prev.next = this.start;
    this.start.prev = this.start.prev.prev;
    this.totalNodes--;
    return el.value;
  }

  shift() {
    if (!this.start) return undefined;

    let el = this.start;
    this.start.prev.next = this.start.next;
    this.start.next.prev = this.start.prev;
    this.start = this.start.next;
    this.totalNodes++;
    return el.value;
  }

  count() {
    return this.totalNodes;
  }

  delete(value, node) {
    node = node || this.start;
    if (node.value === value) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.totalNodes--;
    } else if  (node.next === this.start) {
      return false;
    } else {
      return this.delete(value, node.next);
    }
  }
}

export default LinkedList;
