// Initialize tree
const new_tree = new Tree('my_root');

// Create leaves -> Value of a leaf is a string
const leaf1 = new Leaf('myleaf1', "value 1");
const leaf2 = new Leaf('myleaf2', "value 2");
const leaf3 = new Leaf('myleaf3', "value 3");
const leaf4 = new Leaf('myleaf4', "value 4");
const leaf5 = new Leaf('myleaf5', "value 5");
const leaf6 = new Leaf('myleaf6', []);
const leaf7 = new Leaf('myleaf7', [leaf3]);
const leaf8 = new Leaf('myleaf8', true);
const leaf9 = new Leaf('myleaf9', 54);

// Create branches -> Value of a branch is array of leaves
let branch1     = new Branch('myBranch', []);
const branch2   = new Branch('myBranch', [leaf4, leaf5]);
const branch3   = new Branch('myBranch', [leaf6, leaf7, leaf8, leaf9]);
const branch4   = new Branch('myBranch', leaf4);
const branch5   = new Branch('myBranch', leaf4, leaf5);
const branch6   = new Branch('myBranch', [branch4, branch5]);

branch1.addLeaves(leaf1, leaf2, "jack");
branch1.renameBranch("jack");

// Add branches
new_tree.createElement('my_root', branch1);
new_tree.createElement('my_root', branch2);
new_tree.createElement('my_root', branch3);
new_tree.createElement('my_root', branch4);
new_tree.createElement('my_root', branch5);
new_tree.createElement('my_root', branch6);

