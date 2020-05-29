class Tree {
    constructor(root) {
        this.tree = new Root(root);
    }

    get getTree() {
        return this.tree;
    }
    set setTree(new_tree) {
        this.tree = new_tree;
    }

    // GET //
    showElementByKey(key) {
        return getNodeByKey([this.getTree], key);
    }

    showElementByNode(node) {
        return getNodeByNode([this.getTree], node);
    }

    // TODO: getBranch arg -> could be a string or node ?! (call showEltByKey || showEltByNode ?)
    getBranch(branch_name) {
        const branch = this.showElementByKey(branch_name);

        if (!branch) {
            throw Error(`The branch does not exist.`);
        }
        if (!isABranch(branch)) {
            throw Error(`The name is not referenced as a branch object.`);
        }
        return branch;
    }

    // TODO: getLeaf arg -> could be a string or node ?! (call showEltByKey || showEltByNode ?)
    getLeaf(leaf_name) {
        const leaf = this.showElementByKey(leaf_name);
        if (!leaf) {
            throw Error(`The leaf does not exist.`);
        }
        if (!isALeaf(leaf)) {
            throw Error(`The name is not referenced as a leaf object.`);
        }
        return leaf;
    }

    // CREATE //
    // TODO: Create common function ?
    // TODO: Update this method into -> addBranch to root ?
    addBranch(parent, new_branch) {
        const parent_node = getNodeByKey([this.tree], parent);
        if (!parent_node) {
            throw Error(`The parent: '${parent}' does not exist in the tree.`);
        }

        if (!isABranch(new_branch)) {
            throw Error(`The branch to add is not of type branch.`);
        }
        if (!isABranchOrRoot(parent_node)) {
            throw Error(`The parent: '${parent}' is not of type root or branch.`);
        }

        const new_tree = addNode([this.getTree], parent, new_branch);

        this.setTree = new_tree[0];
    }

    // TODO: Update this method into -> addLeaf to root ?
    addLeaf(parent, new_leaf) {
        const parent_node = getNodeByKey([this.tree], parent);
        if (!parent_node ) {
            throw Error(`The parent: '${parent}' does not exist in the tree.`);
        }

        if (!isALeaf(new_leaf)) {
            throw Error(`The object: '${new_leaf}' to add is not a leaf.`);
        }
        if (!isABranchOrRoot(parent_node)) {
            throw Error(`The parent: '${parent}' is not of type root or branch.`);
        }

        const new_tree = addNode([this.getTree], parent, new_leaf);

        this.setTree = new_tree[0];
    }

    // MODIFY TREE ELEMENT //
    addElementToBranch(branch_name, value_to_add) {
        const branch = this.getBranch(branch_name);
        if (isABranch(value_to_add)) {
            branch.addBranch(value_to_add);
        } else if (isALeaf(value_to_add)) {
            branch.addLeaf(value_to_add);
        }
    }

    modifyLeaf(leaf_name, new_value) {
        const leaf = this.getLeaf(leaf_name);
        if (isLeafValueType(new_value)) {
            leaf.updateValue(new_value);
        }
    }

    // REMOVE TREE ELEMENT //
    removeBranch(branch_name) {
        const branch = this.getBranch(branch_name);

        if (!branch) {
            throw Error(`The branch name does not exist in the tree.`);
        }
        if (!isABranch(branch)) {
            throw Error(`The element to remove is not of type branch.`);
        }

        removeNode([this.getTree], branch);
    }

    removeLeaf(leaf_name) {
        const leaf = this.getLeaf(leaf_name);

        if (!leaf) {
            throw Error(`The leaf name does not exist in the tree.`);
        }
        if (!isALeaf(leaf)) {
            throw Error(`The element to remove is not of type leaf.`);
        }

        removeNode([this.getTree], leaf);
    }
}
