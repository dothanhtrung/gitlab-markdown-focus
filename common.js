/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

let nodes = [];
let layout_pages;

function findOtherNodes(cur) {
    let nodes = [];
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
    return nodes
}

function hideNodes(nodes) {
    nodes.forEach(function (node) {
        node.style.setProperty('display', 'none', 'important');
    });
}

function showHiddenNodes(nodes) {
    nodes.forEach(function (node) {
        node.style.removeProperty('display');
    });
}