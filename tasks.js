// class NewNode {
//     constructor(data, next = null) {
//         this.data = data
//         this.next = next
//     }
// }
//
// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }
//
//
//     addend(data){
//         const node = new NewNode(data)
//
//         if(this.tail){
//             this.tail.next = node
//         }
//
//         if (!this.head){
//             this.head = node
//         }
//
//         this.tail = node
//     }
//
//     addstart(data){
//         const node = new Node(data, this.head)
//
//         this.head = node
//
//         if (!this.tail){
//             this.tail = node
//         }
//     }
//
//     find(data) {
//         if (!this.head) {
//             return
//         }
//
//         let current = this.head
//         while (current){
//             if (current.data === data) {
//                 return current
//             }
//             current = current.next
//         }
//     }
//
//     toArray() {
//         const output = []
//         let current = this.head
//
//         while (current){
//             output.push(current)
//             current = current.next
//         }
//         return output
//     }
//
//     indexOf(data) {
//         let count = 0;
//         let current = this.head;
//
//         while (current != null) {
//
//             if (current.data === data)
//                 return count;
//             count++;
//             current = current.next;
//         }
//
//         return -1;
//     }
//
//     remove(data){
//         if (!this.head){
//             return
//         }
//
//         while (this.head && this.head.data === data){
//             this.head = this.head.next
//         }
//
//         let current = this.head
//         while (current.next){
//             if (current.next.data === data){
//                 current.next = current.next.next
//             }else {
//                 current = current.next
//             }
//         }
//
//         if (this.tail.data === data) {
//             this.tail = current
//         }
//     }
// }
//
//
//
// const list = new LinkedList();
// list.addend('Hi');
// list.addend('my');
// list.addend('name');
// list.addend('Olga');
// list.addstart('Hello')
//
// list.remove('Hi')
//
// console.log(list.toArray().length)
// console.log(list.toArray()[2])
// console.log(list.indexOf('name'))
//
// console.log(list)