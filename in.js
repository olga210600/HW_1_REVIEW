class AList {
    constructor(store) {
        this.store = store;
        if(store === undefined) {
            return [];
        }
    }


    push() {
        for(let i = 0; i < arguments.length; i++) {
            this.store[this.store.length] = arguments[i];
        }
        return this.store.length;
    }



    pop() {
        let returned = this.store[this.store.length - 1];
        if (this.store.length === 0) {
            return undefined;
        }

        this.store.length = this.store.length -1
        return returned;

    }


    shift() {
        let returned = this.store[0];
        if(this.store.length === 0) {
            return undefined;
        }

        for(let i = 0; i < this.store.length; i++) {
            this.store[i] = this.store[i + 1];
        }
        this.store.length = this.store.length - 1;
        return returned;
    }


    unshift() {
        this.store = [...arguments, ...this.store];
        return this.store.length;
    }


    toString() {
        let str = '';

        this.store.forEach((item, index) => {
            if(index < this.store.length -1) {
                str += [item] + ', ';
            } else {
                str += this.store[index];
            }
        });
        return str;
    }




    sortExp(a, b) {

        if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
        } else {
            if (a < b) {
                return 1;
            }

            if (a > b) {
                return -1;
            }

            if (a === b) {
                return 0;
            }
        }

    }

    sort(func = this.sortExp) {


        let value = this.store.length;

        let i = 0;
        let exp = func(this.store[i], this.store[i + 1]);
        if(exp > 0) {

            for(;i < value; i++) {

                let value = this.store[i];
                let temp = i - 1;

                while(temp >= 0 && this.store[temp] > value) {
                    this.store[temp + 1] = this.store[temp];
                    temp--;
                    this.store[temp + 1] = value;
                }
            }
        }
        else {
            for(;i < value; i++) {

                let value = this.store[i];
                let temp = i - 1;

                while(temp >= 0 && this.store[temp] < value) {
                    this.store[temp + 1] = this.store[temp];
                    temp--;
                    this.store[temp + 1] = value;
                }
            }
        }

        return this.store;
    }
}
