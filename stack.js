// Stack Data Structure. Stores data in Last In First Our Princle(LIFO).

/*
It has basically 3 operations
1. push() -  add item at the top of stack
2. pop() - delete the top item of the stack'
3. top() - returns the top item of the stack
*/ 

// Stack using an array.
// class Stack{
//     constructor(){
//         this.stack = []
//     }

//     push(item){
//         this.stack.push(item)
//     }

//     pop(){
//         if(this.isEmpty()) return null
//         return this.stack.pop();
//     }
//     peek(){
//         if(this.isEmpty()) return null
//         return this.stack[this.stack.length -1]
//     }

//     isEmpty(){
//         return this.stack.length === 0;
//     }
// }
// const stack = new Stack();
// stack.push(50);
// stack.push(40);
// stack.push(60);
// stack.push(90);
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack);


// 2. Stack using linked-List
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class StackLinkedList{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    // push() function add item at the top of the stack
    push(item){
        const newNode = new Node(item);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop(){
        if(this.isEmpty()) return null;
        const item = this.top;
        this.top = this.top.next;
        this.size--;
        return item.data;
    }

    peek(){
        if(this.isEmpty()) return null;

        return this.top.data;
    }

    isEmpty(){
        return this.size === 0;
    }
}

// const stack1 = new StackLinkedList();
// stack1.push(30);
// stack1.push(40);
// stack1.push(50);
// console.log(stack1.pop());
// console.log(stack1.peek());
// console.log(stack1);

