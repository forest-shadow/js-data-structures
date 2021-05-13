# Doubly Linked list

---

> **Doubly Linked List** is almost identical to Singly Linked List, except every node has **another** pointer, to the **previous** Node. With Doubly Linked Lists we can work in both directions: from start or from end.

In compare to Singly Linked List, Doubly Linked Lists utilize more memory.

More memory === More Flexibility. It's **almost always** such tradeoff in programming.

## Doubly Linked List implementation details

### `push` method implementation

`push` — adding a Node to the end of the Doubly Linked List.

- Create a new Node with the `value` passed to the function
- If the `head` property is `null` set the `head` and `tail` to be newly created Node
- If not, set the `next` property on the `tail` to be that Node
- Set the previous property on the newly created Node to be the `tail`
- Set the `tail` to be the newly created Node
- Increment the `length`
- Return the Doubly Linked List

### `pop` method implementation

`pop` — removing and returning back a Node from the end of the Doubly Linked List.

- Of there is no `head`, return `undefined`
- Store the current `tail` in a variable to return later
- If the `length` is 1, set the `head` and `tail` to be `null`
- Update the `tail` to be the previous Node
- Set the newTail's `next` to `null`
- Decrement the `length`
- Return the `value` removed


### `shift` method implementation

`shift` — removing a Node from the beginning of the Doubly Linked List.

- If `length` is `0` , return `undefined`
- Store the current `head` property in a variable (we'll call it old head)
- If the `length` is one
    - set the `head` to be `null`
    - set the `tail` to be `null`
- Update the `head` to be the `next` of the old `head`
- Set the `head`'s `prev` property to `null`
- Set the old `head` 's next to `null`
- Decrement the `length`
- Return old `head`


### `unshift` method implementation

`unshift` — adding a Node to the beginning of the Doubly Linked List.

- Create a new Node with value passed to the fucntion
- If the `length` is `0`
    - Set the `head` to be the new Node
    - Set the `tail` to be new Node
- Otherwise
    - Set the `prev` property on the `head` of the list to be the new Node
    - Set the `next` property on the new Node to be the `head` property
    - Update the `head` to be the new Node
- Increment the `length`
- Return the list

## `get` method implementation

`get` — accessing a Node in a Doubly Linked List by its position

- If the `index` is less than `0` or greater or equal to the length, return `null`
- If the `index` is less than or equal to half of the `length` of the list
    - Loop through the list starting from the `head` and loop towards the middle
    - Return the Node once it is found
- If the `index` is greater than half the length of the list
    - Loop through the list starting from the tail and loop towards the middle
    - Return the node once it is found

### `set` method implementation

`set` — replace Node's value by given `index` in Doubly Linked List

- Create a variable which is the result of the `get` method at the `index` passed to the function
    - If the `get` method returns a valid Node, set the `value` of that Node to be the value passed to the function
    - Return `true`
- Otherwise, return `false`

### `insert` method implementation

`insert` — adding a Node in a Doubly Linked List by a certain position

- If the `index` is less than zero or greater that or equal to the `length` return `false`
- If the `index` is `0` , `unshift`
- If the `index` is the same as the `length` , `push`
- Use the `get` method to access the `index - 1`
- Set the `next` and `prev` properties on the correct Nodes to link everything together
- Increment the `length`
- Return `true`

### `remove` method implementation

`remove` — removing a Node in a Doubly Linked List by certain position

- If the `index` is less than zero or greater than or equal to the `length` return `undefined`
- If the `index` is `0` , shift
- If the `index` is equal `length - 1` , `pop`
- Use the `get` method to retrieve the item to be removed
- Update the `next` and `prev` properties to remove the found Node from the list
- Set `next` and `prev` to `null` on the found `Node`
- Decrement the `length`
- Return the removed Node

## Big O of Doubly Linked Lists

Insertion — `O(1)`

Removal — `O(1)` or `O(N/2)`

Searching — `O(N)`

Access — `O(N)`

Technically searching is `O(N/2)` , but that's still `O(N)`

Big O of Doubly Linked List is pretty similar to Singly Linked List with several exceptions. Removal is faster since with Doubly Linked List we got ability to go both in both direction: even from start or end of list.

- Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous Node
- Better than Singly Linked Lists for finding Nodes and can be done in half the time
- However, Doubly Linked Lists do take up more memory considering the extra pointer