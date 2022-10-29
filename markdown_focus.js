/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

var content_holder = document.getElementById("blob-content-holder");
var blob_viewer = content_holder.getElementsByClassName("blob-viewer")[0];
var layout_pages = document.getElementsByClassName("layout-page");

var cur = blob_viewer;
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

for (const i in layout_pages) {
    layout_pages[i].style.setProperty('padding-left', '0');
}