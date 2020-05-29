# Build my tree
   
An easy way to create tree data structure.

    {
        "tree": {
            "key": "root",
            "value": [
                {
                    "key": "branch1",
                    "value": [
                        {
                            "key": "leaf1",
                            "value": "value 1"
                        }
                    ]
                },
                {
                    "key": "branch2",
                    "value": [
                        {
                            "key": "leaf2",
                            "value": "value 2"
                        }
                    ]
                },
                {
                    "key": "branch3",
                    "value": [
                        {
                            "key": "leaf3",
                            "value": "value 3"
                        },
                        {
                            "key": "leaf4",
                            "value": "value 4"
                        },
                        {
                            "key": "branch4",
                            "value": [
                                {
                                    "key": "leaf5",
                                    "value": "value 5"
                                },
                                {
                                    "key": "leaf6",
                                    "value": "value 6"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }


## Tree elements :

### Node element

All object in the structure has the following component : Key / Value.

### Tree

Key default : 'MyRoot'  
The entry-point of the tree. The first node of the tree.

### Branch

Key default : 'MyBranch'  
Value type : Array of node / Default : []

### Leaf

Key default : 'MyLeaf'  
Value type : String / Default : ' '

## Methods :

addBranch(string parent_node_name, branch branch_to_add): Add a branch in a tree.  
Examples :

    my_tree.addBranch('root', new_branch);
OR
    
    my_branch.addBranch(new_branch);
    my_branch.addBranches(new_branch1, new_branch2, ...);
    
addLeaf(string parent_node_name, leaf leaf_to_add): Add a leaf in a tree / branch.  
Examples :

    my_tree.addLeaf('root', new_leaf);
OR

    my_branch.addLeaf(new_leaf);
    my_branch.addLeaves(new_leaf1, new_leaf2, ...);

renameBranch(string branch_new_name) : Modify branch key

## To do list :
- branchIsUnique? method
- updateBranch
- updateLeaf
- removeBranch
- removeLeaf

## Note :
Prochaine fois tester update / remove methods tree ...