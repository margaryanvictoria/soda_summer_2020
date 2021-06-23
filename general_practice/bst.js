// Binary Search Tree
class BinarySearchTree {
    //create an empty binary search tree
    constructor() {
        //set the root node to null
        this.root = null;
    }

    add(value) {
        if (this.root == null) {
            //is the tree empty? if so, make a root node
            this.root = new TreeNode(value);
        } else {
            //else create a child node
            this._add(this.root, value);
        }
    }

    /**
     * 
     * @param {TreeNode} node 
     * @param {int} value 
     * @returns 
     */
    //"auxiliary" method, private in java, should only be used in this class 
    _add(node, value) {
        //console.log(node, value)
        //base case, if the node doesn't exist, exit
        if (node == null) {
            node = new TreeNode(value);
            // console.log(tree)
            return node;
        }

        if(value < node.value) {
            node.left = this._add(node.left, value);
        } else {
            node.right = this._add(node.right, value);
        }

        return node;
    }

    toArray() {
        const arr = [];

        if(this.root === null) {
            return arr;
        } else {
            this._toArray(arr, this.root);
        }

        return arr;
    }

    _toArray(arr, node) {
        if(node === null) return;

        this._toArray(arr, node.left);
        arr.push(node.value);
        this._toArray(arr, node.right);
    }

    print() {
        console.log(this.toArray().toString());
    }
}

// Node of a BST, contains a value and two children max
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

const numTree = [-15, 3, 4, 10, 6, 20, 14, -4, -6, 11, 0, 1];

const people = [
    {
        fName: "Evelina",
        lInitial: "B"
    },
    {
        fName: "Kevin",
        lInitial: "P"
    },
    {
        fName: "Mike",
        lInitial: "L"
    },
    {
        fName: "Roman",
        lInitial: "Y"
    },
    {
        fName: "Dat",
        lInitial: "H"
    },
    {
        fName: "Austin",
        lInitial: "W"
    }    
];

const tree = new BinarySearchTree();
for(let i=0; i<numTree.length; i++) {
    tree.add(numTree[i]);
}
tree.print();

// children(N[i]) = N[2i+1], N[2i+2]
// literal tree is less efficient than an already-sorted array + binary search?