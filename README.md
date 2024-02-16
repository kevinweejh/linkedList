## LinkedList Implementation in JavaScript

### Purpose
This repository contains a simple implementation of a singly linked list in JavaScript. It provides a fundamental understanding of how linked lists function and includes basic operations that can be performed on a linked list.

### Key Features
- Simple Node-based Structure: Each element (node) of the list contains data and a reference (link) to the next node.
- Basic Linked List Operations: Includes methods to append, prepend, insert, remove, and access nodes.

### Methods
- `append(value)`: Adds a new node with the specified value to the end of the list.
- `prepend(value)`: Adds a new node with the specified value to the beginning of the list.
- `size()`: Returns the number of nodes in the list.
- `head()`: Returns the first node of the list.
- `tail()`: Returns the last node of the list.
- `at(index)`: Returns the node at the specified index.
- `pop()`: Removes the last node from the list and returns its value.
- `contains(value)`: Checks if a node with the specified value exists in the list.
- `find(value)`: Returns the index of the node with the specified value, or null if not found.
- `toString()`: Returns a string representation of the list's elements.
- `insertAt(value, index)`: Inserts a node with the given value at the specified index.
- `removeAt(index)`: Removes the node at the specified index and returns its value.

### Usage
To use the LinkedList class, first import it into your JavaScript file. Then, create instances of the list and use the provided methods to manipulate it.

```javascript
import { LinkedList } from './LinkedList';

const myList = new LinkedList();
myList.append(10);
myList.prepend(5);
console.log(myList.toString()); // ( 5 ) -> ( 10 ) -> null
```

## Contribution and Support

### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, replicate it as you will, and share your findings. 

If you have suggestions for improvements, feel free to submit a pull request.

### Support

For support or to report issues, contact me at [hello@codebykevin.dev](mailto:hello@codebykevin.dev). 
