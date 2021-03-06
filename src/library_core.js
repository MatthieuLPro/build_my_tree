/** JSON TREE FUNCTIONS **/
// branch => Array / leaf => object
// CREATE //

const createNode = (key, value) => {
    return { key: key, value: value };
};

// ADD //
// OK, keep this
const addNode = (tree_level, parent_key, new_node) => {
    let temp        = tree_level;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (keysAreEquivalent(temp[i].key, parent_key)) {
            temp[i].value.push(new_node);
            return temp;
        } else {
            if (!isALeaf(temp[i])) {
                temp[i].value = addNode(temp[i].value, parent_key, new_node);
            }
        }
    }
    return temp;
};

// Need to check -> create 2 same branches name & test
const addNodeWithSiblingCondition = (tree_level, parent_key, new_node, condition) => {
    let temp        = tree_level;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (keysAreEquivalent(temp[i].key, parent_key)) {
            if (siblingsRespectCondition(temp, condition)) {
                temp[i].value.push(new_node);
                return temp;
            }
        } else {
            if (!isALeaf(temp[i])) {
                temp[i].value = addNodeWithSiblingCondition(temp[i].value, parent_key, new_node, condition);
            }
        }
    }
    return temp;
};

// REMOVE //
// OK, keep this
const removeNode = (tree_level, node) => {
    let temp        = tree_level;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (nodesAreEquivalent(temp[i], node)) {
            temp.splice(i, 1);
            return temp;
        } else {
            if (!isALeaf(temp[i])) {
                if (isABranchOrRoot(temp[i])) {
                    temp[i].value = removeNode(temp[i].value, node);
                }
            }
        }
    }
    return temp;
};

// Need to check -> create 2 same branches name & test
const removeNodeWithSiblingCondition = (tree_level, node, condition) => {
    let temp        = tree_level;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (nodesAreEquivalent(temp[i], node)) {
            if (siblingsRespectCondition(temp, condition)) {
                temp.splice(i, 1);
                return temp;
            }
        } else {
            if (!isALeaf(temp[i])) {
                temp[i].value = removeNodeWithSiblingCondition(temp[i].value, node);
            }
        }
    }
    return temp;
};

// UPDATE //
const updateNode = (tree, parent, node_key, node_value) => {
    let new_tree       = tree;
    const new_node     = createNode(node_key, node_value);
    const old_node     = getNodeByKey(new_tree, node_key);

    if (old_node) {
        new_tree = removeNode(new_tree, old_node);
    }
    new_tree = addNode(new_tree, parent, new_node);
    return new_tree;
};

// GET //
const getNodeByNode = (tree_level, node) => {
    let temp        = tree_level;
    let result      = null;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (nodesAreEquivalent(temp[i], node)) {
            return temp[i];
        } else {
            if (!isALeaf(temp[i])) {
                result = getNodeByNode(temp[i].value, node);
                if (result != null) {
                    return result;
                }
            }
        }
    }
};

const getNodeByKey = (tree_level, key) => {
    let temp        = tree_level;
    let result      = null;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (keysAreEquivalent(temp[i].key, key)) {
            return temp[i];
        } else {
            if (!isALeaf(temp[i])) {
                if (isABranchOrRoot(temp[i])) {
                    result = getNodeByKey(temp[i].value, key);
                    if (result != null) {
                        return result;
                    }
                }
            }
        }
    }
};

const getNodeByKeyWithSiblingCondition = (tree_level, key, condition) => {
    let temp        = tree_level;
    let result      = null;
    const length    = temp.length;

    for (let i = 0; i < length; i++) {
        if (keysAreEquivalent(temp[i].key, key)) {
            if (siblingsRespectCondition(temp, condition)) {
                return temp[i];
            }
        } else {
            if (!isALeaf(temp[i])) {
                result = getNodeByKeyWithSiblingCondition(temp[i].value, key, condition);
                if (result != null) {
                    return result;
                }
            }
        }
    }
};

const getNodeByKeyWithParentCondition = (tree_level, key, condition) => {
    return (getNodeByKey(getNodeByKey(tree_level, condition), key));
};

// PREDICAT //
const isLeafValueType = (leaf_value) => {
    return ((typeof leaf_value) === 'string');
};

const isALeaf = (leaf) => {
    try {
        return ((leaf.constructor.name) === 'Leaf');
    } catch(e) {
        return false;
    }
};

const isBranchValueType = (branch_value) => {
    return (Array.isArray(branch_value) && branch_value.length > 0)
};

const isABranch = (branch) => {
    try {
        return ((branch.constructor.name) === 'Branch');
    } catch(e) {
        return false;
    }
};

const isARoot = (root) => {
    return ((root.constructor.name) === 'Root');
};

const isABranchOrRoot = (object) => {
    return ((isARoot(object) || isABranch(object)))
};


const areLeaves = (tree_node_value) => {
    if (Array.isArray(tree_node_value)) {
        return isALeaf(tree_node_value[0]);
    }
    return false;
};

const nodesAreEquivalent = (node1, node2) => {
    if(node1.key !== node2.key) {
        return false;
    }
    else if (node1.value !== node2.value) {
        return false;
    }
    return true;
};

const keysAreEquivalent = (key1, key2) => {
    return (key1 === key2);
};

const valuesAreEquivalent = (value1, value2) => {
    return (value1 === value2);
};

const siblingsRespectCondition = (branch, value_condition) => {
    const temp      = branch;
    const length    = branch.length;

    for(let i = 0; i < length; i++) {
        if (valuesAreEquivalent(temp[i].value, value_condition)) {
            return true;
        }
    }
    return false;
};

// TODO: Create this function
// const branchIsUnique = (branch) => {
//
// }


