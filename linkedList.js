import { Node } from './node';

export class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append = (value) => {  
        // Set LinkedList head to point to new Node if LinkedList empty
        if (this.head === null) {
            this.head = new Node(value);
            return;
        } 

        // Traverse LinkedList if not empty, set LinkedList tail to point to new Node
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    prepend = (value) => {
        // Assign new Node's pointer to the current LinkedList head
        const newNode = new Node(value);
        newNode.next = this.head;

        // Reassign the LinkedList head to point to the new Node
        this.head = newNode;
    }

    size = () => {
        let length = 0;
        let current = this.head;

        // Traverse LinkedList, increment length variable with each Node
        while (current !== null) {
            length++;
            current = current.next;
        }
        return length;
    }

    head = () => {
        return this.head;
    }

    tail = () => {
        let current = this.head;

        // Traverse LinkedList to the tail, and return it
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    at = (index) => {
        // Reject if index out of range
        if (index < 0 || index >= this.size()) {
            return Error('index out of range');
        }

        let current = this.head;

        // Traverse LinkedList to the `index` Node, and return it
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    pop = () => {
        let prev = null;
        let current = this.head;

        // Empty LinkedList has nothing to pop
        if (this.head === null) {
            return null;
        } 

        // Reset LinkedList head if only one Node exists, return poppedValue
        if (this.head.next === null) {
            const poppedValue = this.head.value;
            this.head = null;
            return poppedValue;
        }

        // Traverse LinkedList to the tail, track current and prev Nodes
        while (current.next !== null) {
            prev = current;
            current = current.next;
        }
        
        // Set prev pointer to `null`, return poppedValue
        const poppedValue = current.value;
        prev.next = null;
        return poppedValue;
    }

    contains = (value) => {
        let current = this.head; 

        // Traverse LinkedList, and return conditional against value
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false; 
    }

    find = (value) => {
        let index = 0;
        let current = this.head;

        // Traverse LinkedList while incrementing index
        while (current !== null) {
            
            if (current.value === value) {
                return index;
            }
            index++;
        }
        return null;
    }
}