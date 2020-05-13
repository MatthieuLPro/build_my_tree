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
    constructor(key, value) {
        super(key, value);
        this.setKey     = arguments[0];
        this.setValue   = this.setBranchValues(value);
    }

    get getBranch() {
        return this.getNode;
    }

    setBranchValues(values) {
        if (isBranchValueType(values)) {
            return values;
        } else {
            return [];
        }
    }

    renameBranch(new_name) {
        this.setKey = new_name;
    }

    addLeaf(leaf) {
        if (isALeaf(leaf)) {
            addNode([this], this.key, leaf)
        }
    }

    addLeaves() {
        if (isBranchValueType(arguments)) {
            const length = arguments.length;
            for(let i = 0; i < length; i++) {
                this.addLeaf(arguments[i]);
            }
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
        if(isLeafValueType(this.getValue)) {
            this.setValue = new_leaf.value;
        } else {
            this.setValue = '';
        }
    }
}
