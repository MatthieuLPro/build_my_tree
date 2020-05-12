// 3 objects : Root, Branch & Leaf
// 6 methods per object : get[OBJECT_TYPE], set[OBJECT_TYPE], getKey, setKey, getValue, setValue

class Root extends TreeNode {
    constructor(key) {
        super(key);
        this.setRoot = {key: key, value: []};
    }

    get getRoot() {
        return this.getNode;
    }

    set setRoot(new_root) {
        this.setKey = new_root.key || "MyRoot";
        if(Array.isArray(new_root.value)) {
            this.setValue = new_root.value;
        } else {
            this.setValue = [];
        }

    }
}

class Branch extends TreeNode {
    // value should be null ?
    // Need to finish branch constructor
    constructor(key, value) {
        super(key, value);
        this.setKey     = arguments[0];
        this.setValue   = [];
    }

    get getBranch() {
        return this.getNode;
    }

    renameBranch(new_name) {
        this.setKey = new_name;
    }

    addLeaf(leaf) {
        const new_leaf = leaf.constructor.name;
        if (new_leaf === 'Leaf') {
            addNode([this], this.key, leaf)
        }
    }

    addLeaves() {
        if(arguments.length <= 0) {
            return
        }

        const length = arguments.length;
        for(let i = 0; i < length; i++) {
            this.addLeaf(arguments[i]);
        }
    }
}

class Leaf extends TreeNode {
    constructor(key, value) {
        super(key, value);
        this.setLeaf = {key: key, value: value};
    }

    get getLeaf() {
        return this.getNode;
    }

    set setLeaf(new_leaf) {
        this.setKey = new_leaf.key || "MyLeaf";
        if((typeof new_leaf.value) === 'string') {
            this.setValue = new_leaf.value;
        } else {
            this.setValue = '';
        }
    }
}
