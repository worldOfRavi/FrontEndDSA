// // /*
// // What is a Linked List?
// // A Linked List is a linear data structure made up of nodes. Each node contains two main parts:

// // Data - stores the value or content.
// // Next Pointer - holds a reference (pointer) to the next node in the sequence.
// // In contrast to arrays, linked lists:

// // Are not stored in contiguous memory locations.
// // Allow for dynamic size adjustments (easy to add/remove elements).
// // Are better for insertion and deletion (compared to arrays) but slower for random access, as we have to traverse the list to reach a particular node.
// // */ 

// // // Defining Node class that represent each item in the list

// // class Node {
// //     constructor(data){
// //         this.data = data;
// //         this.next = null;
// //     }
// // }

// // // Defining the linked list - create a linkedList class to manage the nodes

// // class LinkedList{
// //     constructor(){
// //         this.head = null; // first node of the list
// //         this.size = 0 // size of the list
// //     }

// //     // add node at the end of the list
// //     append(data){
// //         const newNode = new Node(data);
// //         if(this.head === null){
// //             this.head = newNode
// //         }else{
// //            let current = this.head;
// //             while(current.next !== null){
// //                 current = current.next;
// //             }
// //             current.next = newNode;
// //         }
// //         this.size++;
// //     }
// // }

// // const list = new LinkedList();
// // list.append(50);
// // list.append(100);
// // // list.append(150)
// // console.log(list);


// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     // addpend method to add an item at the end of the list
//     append(data){
//         const newNode = new Node(data)
//         if(this.head === null ){
//             this.head = newNode
//         }
//         else{
//             let current = this.head;
//             while(current.next !== null){
//                 current = current.next
//             }
//             current.next = newNode;
//         }
//         this.size++;
//     }

//     // prepend - add data at the beginning of the list
//     prepend(data){
//         const newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//         this.size++;
//     }
//     // insertAtAnyIndex() // this function insert element at any given index
//     insetAtGivenIndex(index, data){
//         // if the given index is smaller than 0 or larger than total size of the list
//         if(index < 0 || index > this.size) return "Invalid index";

//         // if the index is 0, add element at first position for that call prepend() function
//         if(index === 0){
//             this.prepend(value);
//             return
//         }
        
//         // else find the index one smaller then the given index and add the given element at that index as in LinkedList there is no option to come back

//         const newNode = new Node(data);
//         let current = this.head;
//         for(let i = 0 ;i<index-1;i++){
//             current = current.next;
//         }
//         newNode.next = current.next;
//         current.next = newNode;
//         this.size++;
//     }

//     // display method - to display all the nodes
//     display(){
//         let current = this.head;
//         let result = "";
//         while(current){
//             result += `${current.data} ->`;
//             current = current.next;
//         }
//         console.log(result + "null");
        
//     }
//     remove(value){
//         // if(the list is empty)
//         if(this.head === null) return "List is already empty";

//         // if the deletion value is the head data of the list
//         if(this.head.data === value){
//             this.head = this.head.next;
//             this.size--;
//         }
//         // while deleting any other value
//         let current = this.head;
//         while(current.next && current.next.data !== value){
//             current = current.next;
//         }
//         if(current.next){
//             current.next = current.next.next;
//             this.size--
//         }
//     }
//     removeAtHead(){
//         if(this.isEmpty()){
//              console.log("List is empty");
//              return;
             
//         }
//         this.head = this.head.next;
//         this.size--;
//     }
//     // removeElement() function to remove specific element
//     removeElement(value){
//         if(this.isEmpty()) return "List is empty";

//         if(this.head.data === value){
//             this.removeAtHead();
//             return;
//         }
//         let current = this.head;
//         while(value !== current.next.data){
//             current = current.next;
//         }
//         current.next = current.next.next;
//         this.size--;
//     }
//     // removeAtGivenIndex function to remove element at given index
//     removeAtGivenIndex(index){
//         if(this.isEmpty()) return "List is empty";

//         let current = this.head;
//         for(let i = 0;i<index-1;i++){
//             current = current.next;
//         }
//         current.next = current.next.next;
//         this.size--;
        
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     search(data){
//         let current = this.head;
//         let index = 0;
//         while(current){
//             if(current.data === data){
//                 return index
//             }
//             index++;
//             current = current.next;
//         }
//         return -1
//     }
//     middleElement(){
//         // first approach
//     //     const middleIndex = Math.floor(this.size/2);
//     //     let current = this.head;
//     //     for(let i = 0;i<middleIndex;i++){
//     //         current = current.next;
//     //     }
//     //     console.log(current.data);

//     // 2nd approach
//     let slow = this.head, fast = this.head;
//     while(fast && fast.next){
//         console.log(slow.data, fast.data);
        
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     console.log(slow.data);
    
//     }
    
// }
// const list = new LinkedList();
// list.append(50)
// list.append(60)
// list.append(70)
// list.append(80)
// list.append(90)
// list.prepend(40)
// // list.display();
// // list.remove(40);
// // console.log(list.insetAtAnyIndex(0,4));
// list.insetAtGivenIndex(3,100)
// list.removeAtHead();
// // list.removeAtHead()
// // list.removeAtHead()
// // list.removeAtHead()
// // list.removeAtHead()
// // list.removeElement(60);
// // list.removeAtGivenIndex(2)
// // console.log(list.search(90));

// list.display();
// list.middleElement();

// // console.log(list);


// Middle of the singly Linked List.
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.size++;
            return
        }

        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
        this.size++;
    }
    display(){
        let result = "";
        let current = this.head;
        let visitedNode = new Set();
        while(current){
            if(visitedNode.has(current.data)){
                result += `${current.data} ---- (cycle detected)`;
                break;
            }
                visitedNode.add(current.data)
                result += `${current.data} ->`;
                current = current.next;
            
        }
        console.log(result);
        
    }
    // Method to find the middle element of the LinkedList.
    // using Floyd's Tortoise and Hare algorithm
    middleElement(){
        let slow = this.head, fast = this.head; // both the slow and fast points to the head
        while(fast && fast.next){ // while fast and fast.next are true
            slow = slow.next; // move slow by one step
            fast = fast.next.next; // move fast by two steps
        }
        console.log(slow.data); // at the end of the loop, slow.data will be the middle element.
        
    }
    createCycle(pos){
        if(!this.head) {
            console.log("No cycle is possible");
            return
        }
        // find the cycleNode
        let cycleNode = this.head;
        for(let i = 0;i<pos;i++){
            if(cycleNode.next){
                cycleNode = cycleNode.next;
            }else{
                console.log("cycle is not possible at this index");
                
                return
            }
        }
        // find the last node;
        // Traverse the list to find the node at the given position
        let lastNode = this.head;
        while(lastNode.next){
            lastNode = lastNode.next;
        }

        // create a cycle by pointing the lastNode next to the cycleNode.
        lastNode.next = cycleNode;
    }
    // check cycle in linkedList return true if it has or else return false
    checkCycle(){
        if(!this.head || !this.head.next) return false;

        let slow = this.head, fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }
}

const list = new LinkedList();
list.append(40);
list.append(50);
list.append(60);
list.append(70);
list.append(80);
list.append(90);
list.createCycle(1)
list.display();
console.log(list.checkCycle());

// list.middleElement();
// console.log(list);


// // Cycle in linked List;

// // Reverse Linked List;

