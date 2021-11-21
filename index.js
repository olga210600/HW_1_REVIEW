
const addBtn = document.querySelector('.btn-add');
const removeBtn = document.querySelector('.btn-remove');
const inputValue = document.querySelector('.input-values');
const resultWrapper = document.querySelector('.result-wrapper');


function Node(value, next = null) {
    this.value = value;
    this.next = next;
}
const list = new LinkedList;

function LinkedList() {
    this.head = null;
    this.size = 0;

    this.Head = () => {
        return this.head;
    };

    this.add = (item) => {
        this.head = new Node(item, this.head);
        this.size++;
    };

    this.remove = () => {
        if (!this.head) return;
        this.head = this.head.next;
        this.size--;
    };

    this.length = () => {
        return this.size;
    };

    this.addstart = (data) => {
        const node = new Node(data, this.head)

        this.head = node

        if (!this.tail){
            this.tail = node
        }
    }

    this.addend = (data) => {
        const node = new NewNode(data)

        if(this.tail){
            this.tail.next = node
        }

        if (!this.head){
            this.head = node
        }

        this.tail = node
    }

        this.find = (data) => {
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
    this.indexOf = (data) => {
        let count = 0;
        let current = this.head;

        while (current != null) {

            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }

        return -1;
    }
}


function checkValue() {

    if (this.textContent === 'Add') {
        list.add(inputValue.value);
        addList(list);
    }
    if (this.textContent === 'Remove') {
        removePrintList(list);
        list.remove();
    }
}

function addList(item) {

    const main = item.Head();
    const article = document.createElement('article');
    resultWrapper.prepend(article);

    for (const key of Object.values(main)) {
        const div = document.createElement('div');
        div.className = 'linked-items';
        if (typeof key === 'object' && key !== null) {
            for (const item of Object.values(key)) {
                const div = document.createElement('div');

                div.className = 'linked-items';
                article.append(div);
                div.append(item);
                return;
            }

        }

        article.append(div);

        div.append(key);

    }
}

function removePrintList() {

    for (let i = 0; i <= document.getElementsByClassName('linked-items').length; i++) {

        if (i === document.getElementsByClassName('linked-items').length - 1) {

            document.getElementsByClassName('linked-items')[i].remove();
            document.getElementsByClassName('linked-items')[i - 1].remove();
            if (document.getElementsByClassName('linked-items')[i - 2] === undefined) return;

            document.getElementsByClassName('linked-items')[i - 2].textContent = 'null';
        }
    }
    for (let i = 0; i <= document.getElementsByTagName('article').length; i++) {
        if (i === document.getElementsByTagName('article').length - 1) {
            document.getElementsByTagName('article')[i].remove();
        }
    }
    return;
}

addBtn.addEventListener('click', checkValue);
removeBtn.addEventListener('click', checkValue);