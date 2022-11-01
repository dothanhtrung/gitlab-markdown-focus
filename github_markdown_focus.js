/* Copyright (C) 2022 Trung Do <dothanhtrung@pm.me> */

if (nodes.length <= 0) {
    let cur = document.getElementById("readme");
    nodes = findOtherNodes(cur);
}

hideNodes(nodes);