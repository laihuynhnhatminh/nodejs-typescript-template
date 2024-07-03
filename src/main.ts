class Node<T> {
  data: T;
  next: Node<T> ;

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

  getIndexOf(data: T): number {
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.data === data) {
        return count;
      }
      current = current.next;
      count++;
    }

    return -1;
  }

  // Clone method

  // Work but will mutate original head and inputHead
  zipperList(inputHead: Node<T>): LinkedList<T> {
    let tail = this.head;
    let current1 = this.head.next;
    let current2 = inputHead;
    let count = 0;

    while(current1 !== null && current2 !== null) {
      if (count % 2 === 0) {
        tail.next = current2;
        current2 = current2.next;
      } else {
        tail.next = current1;
        current1 = current1.next;
      }

      tail = tail.next;
      count++;
    }

    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;

    return new LinkedList(this.head, count);
  }

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

  // Return a new reversed linked list, does not mutate the original list
  reverseList(): LinkedList<T> {
    let previous: Node<T> = null;
    let current = this.head;

    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return new LinkedList(previous, this.size);
  }

  toArray(): T[] {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  clearList(): void {
    this.head = null;
    this.size = 0;
  }

  printListData(): void {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedListExample = new LinkedList<number>();
const linkedListExample2 = new LinkedList<number>();
const size = 3;

for (let i = 0; i < size; i++) {
  linkedListExample.insertLast((i + 1) * 100);
  linkedListExample2.insertLast((i + 1) * 500);
}

console.log(linkedListExample, linkedListExample2);
