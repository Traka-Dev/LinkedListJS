// 0 --> 1 -- > 2 -- > 3-- > 4-- > 5 -- > 6 --> null
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null,
//         },
//       },
//     },
//   },
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;

        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }
    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    deleteIndex(index) {
        if (index >= this.length) {
            console.log("Invalid Index");
            return undefined;
        } else if (index == this.length) {
            const firstPointer = this.getTheIndex(this.length - 1);
            this.tail = firstPointer;
            this.length--;
            return this;
        } else if (index == 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        } else {
            const firstPointer = this.getTheIndex(index - 1);
            firstPointer.next = this.getTheIndex(index + 1);
            this.length--;
            return this;
        }
    }

}
