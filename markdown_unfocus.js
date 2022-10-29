/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

nodes.forEach(function (node) {
    node.style.removeProperty('display');
});

for (const i in layout_pages) {
    layout_pages[i].style.removeProperty('padding-left');
}