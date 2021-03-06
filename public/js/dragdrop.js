$(document).ready(function () {
    var dropZone = document.getElementById('dragandrophandler');
    dropZone.addEventListener('drop', handleFileSelect, false);
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('dragleave', handleDragLeave, false);
});


function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        if (f) {
            var r = new FileReader();
            r.onload = function (e) {
                var contents = r.result;
                document.getElementById('INPUT').innerHTML =  contents;
            }
            r.readAsText(f);
            output.push(r);
        } else {
            alert("Failed to load file");
        }
    }

    evt.target.style.opacity = "";
    evt.target.style.height = "";
    evt.target.style.backgroundColor = "";
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.opacity = 0.8;
    evt.target.style.height = "125px";
    evt.target.style.backgroundColor = "rgb(32, 128, 32)";
}

function handleDragLeave(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.target.style.height = "";
    evt.target.style.backgroundColor = "rgb(128, 32, 32)";
}
