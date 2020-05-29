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

    // SHOW //
    showElementByKey(key) {
        return getNodeByKey([this.getTree], key);
    }

    showElementByNode(node) {
        return getNodeByNode([this.getTree], node);
    }

    // CREATE //
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

    // createElement(parent, new_node) {
    //     const new_tree = addNode([this.getTree], parent, new_node);
    //
    //     if (new_tree[0] != null) {
    //         this.setTree = new_tree[0];
    //     }
    // };

    // UPDATE //
    updateElement(parent, element_to_update) {
        let node_to_update;
        // Need to refacto this
        const element_constructor = element_to_update.constructor.name;
        if (element_constructor === 'Leaf' || element_constructor === 'Branch') {
            node_to_update = this.showElementByNode(element_to_update);
            if (node_to_update == null) {
                return new Error("Le parametre element_to_update est invalid.");
            }
        } else {
            return new Error("Le parametre element_to_update est invalid.");
        }

        if (!this.showElementByKey(parent)) {
            return new Error("Le parametre parent est invalid.");
        }

        const new_tree = updateNode([this.getTree], parent, node_to_update.key, node_to_update.value);

        if (new_tree[0] != null) {
            this.setTree = new_tree[0];
        }
    }

    // TODO: Create this function
    // updateBranch(branch_updated, parent = null) {
    //     // Need to check if branch_updated is a branch
    //     if (!isABranch(branch_updated)) {
    //         throw Error(`The branch to add is not of type branch.`);
    //     }
    //     // Need to verify if branch is unique ?
    //     if (!parent && !branchIsUnique()) {
    //         throw Error(`The branch is not unique and need a parent name.`);
    //     }
    //
    //     // If yes no need parent => find the existing branch and update it
    //     // else verify if parent exist if yes => find the existing branch with specific parent and update it
    //
    //     let node_to_update;
    //     // Need to refacto this
    //     const element_constructor = element_to_update.constructor.name;
    //     if (element_constructor === 'Leaf' || element_constructor === 'Branch') {
    //         node_to_update = this.showElementByNode(element_to_update);
    //         if (node_to_update == null) {
    //             return new Error("Le parametre element_to_update est invalid.");
    //         }
    //     } else {
    //         return new Error("Le parametre element_to_update est invalid.");
    //     }
    //
    //     if (!this.showElementByKey(parent)) {
    //         return new Error("Le parametre parent est invalid.");
    //     }
    //
    //     const new_tree = updateNode([this.getTree], parent, node_to_update.key, node_to_update.value);
    //
    //     if (new_tree[0] != null) {
    //         this.setTree = new_tree[0];
    //     }
    // }

    // DELETE //
    // Need to check 
    deleteElement(key_to_remove, sibling_condition = null) {
        let node_to_remove;

        // Need to refacto this
        if ((typeof key_to_remove) === 'string') {
            node_to_remove = this.showElementByKey(key_to_remove);
            if (node_to_remove == null) {
                return new Error("Le parametre key_to_remove est introuvable dans l'arbre.");
            }
        } else {
            return new Error("Le parametre key_to_remove est invalid.");
        }

        let new_tree;
        if (sibling_condition == null) {
            new_tree = removeNode([this.getTree], node_to_remove);
        } else {
            new_tree = removeNodeWithSiblingCondition([this.getTree], node_to_remove, sibling_condition);
        }
        if (new_tree[0] != null) {
            this.setTree = new_tree[0];
        }
    }
}
