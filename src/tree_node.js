// Smaller element of a tree

// Methods list :
// Getter & Setter
// Node, key, value, type

// Type => to see constructor type (debug mode)

class TreeNode {
    constructor(key, value, type = true) {
        this.setKey     = key;
        this.setValue   = value;
        if (type) {
            this.setType = this.constructor.name;
        }
    }

    get getNode() {
        return { key: this.getKey, value: this.getValue }
    }
    set setNode(new_node) {
        this.setKey     = new_node.key;
        this.setValue   = new_node.value;
    }

    get getKey() {
        return this.key;
    }
    set setKey(new_key) {
        this.key = new_key;
    }

    get getValue() {
        return this.value;
    }
    set setValue(new_value) {
        this.value = new_value;
    }

    get getType() {
        return this.type;
    }
    set setType(new_type) {
        this.type = new_type;
    }
}
