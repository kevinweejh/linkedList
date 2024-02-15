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

        // Traverse LinkedList if not empty, set LinekdList tail to point to new Node
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
    }
}