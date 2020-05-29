// Test //
// Initialize tree
const new_tree1 = new Tree('root');
const new_tree2 = new Tree;

// Initialize branch
const new_branch1 = new Branch;
const new_branch2 = new Branch('branch');
const new_branch3 = new Branch('branch', 'value');
const new_branch4 = new Branch('branch', []);

// Initialize leaf
const new_leaf1 = new Leaf;
const new_leaf2 = new Leaf('leaf');
const new_leaf3 = new Leaf('leaf', 'leaf');
const new_leaf4 = new Leaf('leaf', []);

// Add branch on tree
// new_tree1.addBranch(new_branch1); // return error
// new_tree1.addBranch(new_leaf1); // return error
// new_tree1.addBranch('root'); // return error
// new_tree1.addBranch('wrong_key'); // return error
new_tree1.addBranch('root', new_branch1); // good
// new_tree1.addBranch('wrong_key', new_branch1); // return error
// new_tree1.addBranch('root', new_leaf1);
new_tree1.addBranch('root', new_branch2); // good

// Add leaf on tree
// new_tree1.addLeaf(new_branch1); // return error
// new_tree1.addLeaf(new_leaf1); // return error
// new_tree1.addLeaf('root'); // return error
// new_tree1.addLeaf('wrong_key'); // return error
// new_tree1.addLeaf('root', new_branch1); // return error
// new_tree1.addLeaf('wrong_key', new_branch1); // return error
// new_tree1.addLeaf('root', new_leaf1); // good
// new_tree1.addLeaf('root', new_branch2); // return error
// new_tree1.addLeaf('root', new_leaf2); // good

// Update branch - rename
// new_branch1.renameBranch('new_name'); // good
// new_branch1.renameBranch(); // return but do show error
// new_branch1.renameBranch(new_branch1); // return but do show error

// Update branch - addLeaf
// new_branch1.addLeaf(new_leaf1); // good
// new_branch1.addLeaf(); // return but do show error
// new_branch1.addLeaf(new_branch1); // return but do show error
// new_branch1.addLeaf(new_leaf2); // good

// Update branch - addLeaves
// new_branch1.addLeaves(new_leaf1, new_leaf2); // good
// new_branch1.addLeaves(); // return but do show error
// new_branch1.addLeaves(new_branch1); // return but do show error
// new_branch1.addLeaves(new_leaf3, new_branch1); // good

// Update branch - addBranches
// new_branch1.addBranch(new_branch1); // return error
// new_branch1.addBranch(); // good do nothing
// new_branch1.addBranch(new_leaf1); // good do nothing
// new_branch1.addBranch(new_branch2); // good
// new_branch1.addBranches(new_branch1, new_branch2); // return error
new_branch1.addBranches(new_branch2, new_branch3); // good

console.log('new_branch1: ', new_branch1);
console.log('new_tree1: ', new_tree1);




// Tree to show
// Initialize tree
const new_tree = new Tree('root');

// Initialize branch
const b1 = new Branch('branch1');
const b2 = new Branch('branch2');
const b3 = new Branch('branch3');
const b4 = new Branch('branch4');

// Initialize leaf
const l1 = new Leaf('leaf1', 'value 1');
const l2 = new Leaf('leaf2', 'value 2');
const l3 = new Leaf('leaf3', 'value 3');
const l4 = new Leaf('leaf4', 'value 4');
const l5 = new Leaf('leaf5', 'value 5');
const l6 = new Leaf('leaf6', 'value 6');

b1.addLeaf(l1);
b2.addLeaf(l2);
b3.addLeaves(l3, l4);
b3.addBranch(b4);
b4.addLeaves(l5, l6);

new_tree.addBranch('root', b1);
new_tree.addBranch('root', b2);
new_tree.addBranch('root', b3);

const new_node = translateTreeIntoJson(new_tree.tree);