// ### Problem 4: Family Tree Representation (Tree)

// **Description:**  
// Design a system to represent a family tree. The family tree should show relationships from the oldest ancestor (root) down to the youngest generations (leaves).

// **Instructions:**  
// - Describe how you would structure the family tree using a tree data structure.
// - Outline the steps to add a new family member as a node in the appropriate position.
// - Explain how you might traverse the tree to display family relationships.

// **Hint:**  
// Imagine the family tree as an actual tree, with the oldest member at the top and each generation branching out. Think about how you can use hierarchical relationships to navigate through the tree.

//thought process initiate
//declare a constructor using class called familyMember
//properties would be name.
//add another nested constructor and properties would be child which is pushed in previously declared empty array

//fill up the family tree by utilizing the array
//set parent child relationship

//traverse the tree using bfs

//print the tree

class familyMember {
    constructor(givenName){
        this.name = givenName;
        this.children = [];
    }

    addChild(child){
        this.children.push(child);
    }
}

const grandParent = new familyMember("odin");

const parent1 = new familyMember("thor");
const parent2 = new familyMember("loki");

const child1 = new familyMember("frenrir");
const child2 = new familyMember("magni");
const child3 = new familyMember("modi");

grandParent.addChild(parent1);
grandParent.addChild(parent2);

parent1.addChild(child2);
parent1.addChild(child3);
parent2.addChild(child1);

bfsTraversal = (root) => {
    const queue = [root]; //start with the root node

    while(queue.length > 0){
        const current = queue.shift(); //dequeue the first node
        console.log(current.name); //visit the current node

        //enqueue all children of the current node
        current.children.forEach(child => queue.push(child));
    }
}

bfsTraversal(grandParent);

