window.onload = function() {
    init();
    bindEvents();
}

function init() {
    createTable();
}

function bindEvents() {

}

function createTable() {
    let grid = $("#grid");
    for (let i = 0; i < 40; i++) {
        grid.append($("<tr>", { id: "row" + i }));
        let row = $("#row" + i);
        for (let j = 0; j < 80; j++) {
            row.append($("<td>", { id: String(i) + "_" + String(j), onmouseover: "mouseOv(this);" }));
        }
    }
}

function getid(obj) {
    alert(obj.id);
}

function mouseOv(obj) {
    console.log(obj.id);
    $("#" + obj.id).css("background-color", "yellow");
}