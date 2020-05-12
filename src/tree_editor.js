// Initialize tree
const new_tree = new Tree('my_root');

// Create leaves
const leaf1 = new Leaf('myleaf1', "value 1");
const leaf2 = new Leaf('myleaf2', "value 2");
const leaf3 = new Leaf('myleaf3', "value 3");
const leaf4 = new Leaf('myleaf4', "value 4");
const leaf5 = new Leaf('myleaf5', "value 5");

// Create branches -> Values of a branch are leaves
let branch1     = new Branch('myBranch');
const branch2   = new Branch('myBranch', leaf4, leaf5);

branch1.addLeaves(leaf1, leaf2, "jack");
branch1.renameBranch("jack");

// Add branches
new_tree.createElement('my_root', branch1);
new_tree.createElement('my_root', branch2);

