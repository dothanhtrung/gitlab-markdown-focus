var content_holder = document.getElementById("blob-content-holder");
var blob_viewer = content_holder.getElementsByClassName("blob-viewer")[0];

var body = document.body;
while (body.firstChild) {
    body.removeChild(body.firstChild);
}
body.appendChild(blob_viewer);
