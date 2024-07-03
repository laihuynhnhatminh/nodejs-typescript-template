class Node<T> {
  data: T;
  next: Node<T>;

  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Node<T>;
  size: number;

  constructor(head: Node<T> = null, size = 0) {
    this.head = head;
    this.size = size;
  }

  // Insert first node
  insertFirst(data: T): void {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data: T): void {
    const node = new Node(data);
    let current: Node<T>;

    if(!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  // Insert at index
  insertAt(data: T, index: number): void {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index === this.size) {
      this.insertLast(data);
      return;
    }

    const node = new Node(data);
    let current = this.head;
    let previous = null;

    while (index > 0 && index < this.size) {
      previous = current;
      index--;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index
  getAt(index: number): T {
    let current = this.head;

    if (index >= this.size || index < 0) {
      return null;
    }

    while (index > 0) {
      current = current.next;
      index--;
    }

    return current.data;
  }

  // Remove at index
  removeAt(index: number): void {
    let current = this.head;
    let previous: Node<T> = null;

    if (index >= this.size || index < 0) {
      return;
    }

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return;
    }

    while (index > 0) {
      previous = current;
      current = current.next;
      index--;
    }

    previous.next = current.next;
    this.size--;
  }

  // Clear list
  clearList(): void {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData(): void {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

type ValueIndex = {
  index: number;
  value: number;
}

const ll = new LinkedList<ValueIndex>();

const index = 2000;
const size = 10000;

for (let i = 0; i < size; i++) {
  ll.insertLast({index: i, value: Math.random()});
}

const t1 = performance.now();
const result = ll.getAt(index);
const t2 = performance.now();

console.log(`Take ${t2-t1} to get item at index ${index}`, result);
