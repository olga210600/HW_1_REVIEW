const addBtn = document.querySelector('.btn-add');
const removeBtn = document.querySelector('.btn-remove');
const inputValue = document.querySelector('.input-values');
const resultWrapper = document.querySelector('.result-wrapper');

function createNode(value) {
    return {
        value: value,
        next: null,
    };
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        this.length++;
        let node = createNode(value); // or use new Node(value);

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            return node;
        }

        this.head = this.tail = node;
        return node;
    }

    find(value) {
        if (!this.head) {
            return
        }

        let current = this.head
        while (current) {
            if (current.value === value) {
                return current
            }
            current = current.next
        }
    }

    indexOf(value) {
        let count = 0;
        let current = this.head;

        while (current != null) {

            if (current.value === value)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }


    insertHead(value) {
        this.length++;
        let node = createNode(value);

        if (this.head) {
            node.next = this.head;
            this.head = node;
            return node;
        }

        this.head = this.tail = node;
        return node;
    }

    removeHead() {
        if (this.head) {
            this.length--;
            const removedNode = this.head;
            this.head = this.head.next;
            return removedNode;
        }
        return undefined;
    }

    remove() {
        if (this.tail) {
            this.length--;

            const tailNode = this.tail;

            // search for the node before tail
            let currentNode = this.head;

            while (currentNode.next !== tailNode) {
                currentNode = currentNode.next;
            }
            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;
        }
        return undefined;
    }


    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }

        return output.length;
    }


    removeIndex(index) {
        if (index >= this.length) {
            throw new Error("Remove index out of bounds");
        }

        if (index === 0) {
            return this.removeHead();
        }

        this.length--;
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
        return currentNode;
    }
}

const list = new LinkedList;

// list.insert('77')
// list.insert('78')
// list.insert('8')
// console.log(list.find('8'))
// console.log(list.toArray())
// console.log(list.removeIndex(0))
// console.log(list.indexOf('8'))
// console.log(list)

const fillHtmlList = (linkedList, nextBlock) => {
    if (linkedList.length) {
        if (!nextBlock) {
            resultWrapper.innerHTML = "";
            resultWrapper.innerHTML += createBlock(list.head.value);

            list.head.next && fillHtmlList(linkedList, list.head.next)
        }

        if (!!nextBlock && nextBlock.next !== null) {
            resultWrapper.innerHTML += createBlock(nextBlock.value);

            fillHtmlList(linkedList, nextBlock.next)
        } else if (nextBlock && nextBlock.value) {
            resultWrapper.innerHTML += createBlock(nextBlock.value);
        }
    }
}

fillHtmlList(list, null);

function createBlock(blockValue) {
    return `
    <div class="wrapper">
    <div class="head-wrapper">${blockValue}</div>
    </div>
    `
}

addBtn.addEventListener('click', () => {
    list.insert(inputValue.value)
    inputValue.value = ''
    fillHtmlList(list, null)
})

removeBtn.addEventListener('click', () => {
    list.remove()
    fillHtmlList(list, null)
})