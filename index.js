class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    addend(data){
        const node = new Node(data)

        if(this.tail){
            this.tail.next = node
        }

        if (!this.head){
            this.head = node
        }

        this.tail = node
    }

    addstart(data){
        const node = new Node(data, this.head)

        this.head = node

        if (!this.tail){
            this.tail = node
        }
    }

    find(data) {
        if (!this.head) {
            return
        }

        let current = this.head
        while (current){
            if (current.data === data) {
                return current
            }
            current = current.next
        }
    }

    toArray() {
        const output = []
        let current = this.head

        while (current){
            output.push(current)
            current = current.next
        }
        return output
    }

    remove(data){
        if (!this.head){
            return
        }

        while (this.head && this.head.data === data){
            this.head = this.head.next
        }

        let current = this.head
        while (current.next){
            if (current.next.data === data){
                current.next = current.next.next
            }else {
                current = current.next
            }
        }

        if (this.tail.data === data) {
            this.tail = current
        }
    }
}



function removeLastNode(head) {
    if (head == null)
        return null;

    if (head.next == null) {
        return null;
    }

    let second_last = head;
    while (second_last.next.next != null)
        second_last = second_last.next;

    second_last.next = null;

    return head;
}
//
// function findElement(index) {
//     let currentNode = this.head;
//     let count = 0;
//
//     while (currentNode) {
//         if (count === index) {  // found the element
//             return currentNode;
//         }
//
//         count++;  // increment counter
//         currentNode = currentNode.next;  // move to next node
//     }
//
//     return -1;
// }
//  function getIndexOf(value) {
//     let current = this.head; // current is a head of our list
//     let index = 0; // index which will be returned
//
//     while(current) {
//         if (current.value === value) {
//             return index;
//         }
//
//         current = current.next;
//         index++;
//     }
//
//     return -1;
// }




const list = new LinkedList();
list.addend('hi');
list.addend('my');
list.addend('name');
list.addend('Sergey');
list.addend(55);

list.addstart('Maya')


console.log(list)
list.remove('hi')

console.log(list.find('name'))
removeLastNode()

console.log(list.toArray())
console.log(list.toArray().length)
console.log(list.toArray()[1])
console.log(list.toArray().indexOf('name'))
// console.log(findElement('name'))
// console.log(getIndexOf(1))
// console.log(list.getAt('1'))

// console.log("Count of nodes is " + getCount());
