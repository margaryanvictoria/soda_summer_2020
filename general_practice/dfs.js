class OldQueue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        if(this.length() == 0) return console.error('Queue is empty');
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item
    }

    peek() {
        return this.items[this.headIndex];
    }

    get length() {
        return this.tailIndex - this.headIndex;
    }

    log() {
        let currentNode = this.items[this.headIndex];
        let i=0;
        while (currentNode) {
            console.log(i, currentNode);
            i++;
            currentNode = this.items[this.headIndex + i]
        }
    }
}

/**
 * Created by Kate Morley - http://code.iamkate.com/ - and released under the terms
 * of the CC0 1.0 Universal legal code
 */

class Queue {
    constructor() {
        this.queue  = [];
        this.offset = 0;
    }

    get length() {
        return (this.queue.length - this.offset);
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.queue.length == 0) return undefined;
        let item = this.queue[offset];

        if (++ offset * 2 >= this.queue.length){
            this.queue  = this.queue.slice(offset);
            offset = 0;
        }

        return item;
    }

    peek() {
        return (this.queue.length > 0 ? this.queue[offset] : undefined);
    }
}


class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBFS() {
        // no root, return false
        if(!this.root) {
            return false;
        }

        const queue = new Queue()
    }
}

/* const queue = new Queue();

queue.log()
console.log()

queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(4);

queue.log()
console.log()

queue.dequeue(); // => 7

console.log(queue.peek());    // => 2

queue.length;    // => 3

queue.log(); */