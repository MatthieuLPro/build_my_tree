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
    ShowElementByKey(key) {
        return getNodeByKey([this.getTree], key);
    }

    ShowElementByNode(node) {
        return getNodeByNode([this.getTree], node);
    }

    // CREATE //
    createElement(parent, new_node) {
        const new_tree = addNode([this.getTree], parent, new_node);

        if (new_tree[0] != null) {
            this.setTree = new_tree[0];
        }
    };

    // UPDATE //
    updateElement(parent, element_to_update) {
        let node_to_update;
        // Need to refacto this
        const element_constructor = element_to_update.constructor.name;
        if (element_constructor === 'Leaf' || element_constructor === 'Branch') {
            node_to_update = this.ShowElementByNode(element_to_update);
            if (node_to_update == null) {
                return new Error("Le parametre element_to_update est invalid.");
            }
        } else {
            return new Error("Le parametre element_to_update est invalid.");
        }

        if (!this.ShowElementByKey(parent)) {
            return new Error("Le parametre parent est invalid.");
        }

        const new_tree = updateNode([this.getTree], parent, node_to_update.key, node_to_update.value);

        if (new_tree[0] != null) {
            this.setTree = new_tree[0];
        }
    }

    // DELETE //
    // Need to check 
    deleteElement(key_to_remove, sibling_condition = null) {
        let node_to_remove;

        // Need to refacto this
        if ((typeof key_to_remove) === 'string') {
            node_to_remove = this.ShowElementByKey(key_to_remove);
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
