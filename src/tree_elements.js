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
        this.setBranch = {key: key, value: value};
    }

    get getBranch() {
        return this.getNode;
    }

    set setBranch(new_branch) {
        this.setKey =new_branch.key || "MyBranch";
        if(Array.isArray(new_branch.value)) {
            this.setValue = new_branch.value;
        } else {
            this.setValue = [];
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
