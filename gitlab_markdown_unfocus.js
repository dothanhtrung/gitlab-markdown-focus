/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

showHiddenNodes(nodes);

// Restore padding-left of layout-page
for (const layout_page of layout_pages) {
    layout_page.style.removeProperty('padding-left');
}