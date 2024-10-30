#!/usr/bin/node

class HashMap {
    constructor() {
        this.array = []
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
        let newData = [key, value]
        let index = this.hash(key) % 16
        // check if key already exists
        if (this.array[index]) {
            this.array[index] = newData
        }
        this.array.splice(index, 0, newData)
    }

    get(key) {
        let index = this.hash(key) % 16
        if (this.array[index][0] === key) {
            return this.array[index][1]
        }
        return null
    }

    has(key) {
        let index = this.hash(key) % 16
        if (this.array[index][0] === key) {
            return true
        }
        return false
    }

    remove(key) {
        let index = this.hash(key) % 16
        if (this.array[index][0] === key) {
            this.array.splice[index, 1]
            return true
        }
        return false
    }

    length() {
        let total = 0
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i]) {
                total++
            }
        }
        return total
    }

    clear() {
        this.array = []
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
            }
        }
        return entryArray
    }
}

const test = new HashMap()

console.log(test.hash('apple') % 16)