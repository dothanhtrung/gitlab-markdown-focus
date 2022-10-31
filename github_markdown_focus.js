/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

var cur = document.getElementById("readme");
var nodes = [];

do {
    let parent = cur.parentNode;

    for (let i = 0; i < parent.childNodes.length; i++) {
        let node = parent.childNodes[i];
        if (node.nodeType === 1 && node !== cur) {
            nodes.push(node);
        }
    }

    cur = parent;

} while (cur.tagName.toLowerCase() !== 'body');

// Hide the collected nodes
nodes.forEach(function (node) {
    // node.style.display = 'none';
    node.style.setProperty('display', 'none', 'important');
});