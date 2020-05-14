// Initialize tree
const new_tree = new Tree('root');

// Create leaves -> Value of a leaf is a string
let leaf1 = new Leaf('leaf1', 'my value 1');
let leaf2 = new Leaf('leaf2', 'my value 2');
let leaf3 = new Leaf('leaf3', 'my value 3');
let leaf4 = new Leaf('leaf4', 'my value 4');

// Create branches -> Value of a branch is array of leaves
let branch1     = new Branch('branch1', [leaf1, leaf2]);
let branch2     = new Branch('branch2', [leaf3]);
let branch3     = new Branch('branch3', [leaf4]);

// Add branches
new_tree.addBranch('root', branch1);
new_tree.addBranch('branch1', branch2);
new_tree.addBranch('branch2', branch3);
new_tree.addLeaf('branch2', leaf4);
new_tree.addLeaf('root', leaf2);
new_tree.addLeaf('branch1', leaf4);

