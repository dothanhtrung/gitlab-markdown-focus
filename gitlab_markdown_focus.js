/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

if (nodes.length <= 0) {
    let content_holder = document.getElementById("blob-content-holder");
    let blob_viewers = content_holder.getElementsByClassName("blob-viewer");
    let cur;

    for (const blob_viewer of blob_viewers) {
        if (blob_viewer.getAttribute("data-type") === "rich") {
            cur = blob_viewer;
            break;
        }
    }

    nodes = findOtherNodes(cur);
}

hideNodes(nodes);

if (typeof layout_pages === "undefined") {
    layout_pages = document.getElementsByClassName("layout-page");
}
for (const layout_page of layout_pages) {
    layout_page.style.setProperty('padding-left', '0');
}