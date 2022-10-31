/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

var content_holder = document.getElementById("blob-content-holder");
var blob_viewers = content_holder.getElementsByClassName("blob-viewer");
var layout_pages = document.getElementsByClassName("layout-page");

var cur;
var nodes = [];

for (const blob_viewer of blob_viewers) {
    if (blob_viewer.getAttribute("data-type") === "rich") {
        cur = blob_viewer;
        break;
    }
}

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