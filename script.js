#!/usr/bin/node

class HashMap {
    constructor() {
        this.array = new Array(16)
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        let next = null
        let newData = [key, value, next]
        let index = this.hash(key) % this.array.length
        if (index < 0 || index >= this.array.length) {
            throw new Error("Trying to access index out of bound");
        }

        // check if bucket is full
        if (this.array[index] && this.array[index][0] !== key) {
           // put it in linked list at end
           this.array[index][2] = newData
        }
        else {
            this.array.splice(index, 1, newData)
        }

        //load factor
        if (this.length() > this.array.length * .75) {
            let entriesArray = this.entries()
            this.clear()
            this.array.length *= 2
            //re input all values into new array
            for (let i = 0; i < entriesArray.length; i++) {
                this.set(entriesArray[i][0], entriesArray[i][1])

                let current = entriesArray[i];
                let previous = null;
                while (current[2]) {
                    previous = current;
                    current = current[2];
                    this.set(current[0], current[1])
                }
            }
        }
    }

    get(key) {
        let index = this.hash(key) % this.array.length
        if (this.array[index][0] === key) {
            return this.array[index][1]
        }
        return null
    }

    has(key) {
        let index = this.hash(key) % this.array.length
        if (this.array[index][0] === key) {
            return true
        }
        return false
    }

    remove(key) {
        let index = this.hash(key) % this.array.length
        if (this.array[index][0] === key) {
            this.array.splice[index, 1]
            return true
        }
        return false
    }

    length() {
        let total = 0
        for (let i = 0; i < this.array.length; i++) {
            //if theres something at the index go through the list
            if (this.array[i]) {
                total++
                //check full list
                let current = this.array[i];
                let previous = null;
                while (current[2]) {
                    total++
                    previous = current;
                    current = current[2];
                }
            }
        }
        return total
    }

    clear() {
        this.array = new Array(this.array.length)
    }

    keys() {
        let keyArray = []
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i]) {
                keyArray.push(this.array[i][0])
            }
        }
        return keyArray
    }

    vlaues() {
        let vlaueArray = []
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i]) {
                valueArray.push(this.array[i][1])
            }
        }
        return valueArray
    }

    entries() {
        let entryArray = []
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i]) {
                entryArray.push(this.array[i])
                let current = this.array[i];
                let previous = null;
                while (current[2]) {
                    previous = current;
                    current = current[2];
                    entryArray.push(current)
                }
            }
        }
        return entryArray
    }
}

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon', 'silver')
console.log(test.entries())
console.log(test.array.length)
console.log(test.array)