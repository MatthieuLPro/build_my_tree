const translateTreeIntoJson = (tree) => {
    let new_json;
    console.log('tree: ', tree);
    let node_to_add = getNodeByKey([tree], 'root');

    let new_node = new JsonNode(node_to_add);

    //new_json[node_to_add.key] = node_to_add.value;
    return new_node;
};
