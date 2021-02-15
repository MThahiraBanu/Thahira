define(["require", "exports", "../../src/dashboard-layout/dashboard-layout"], function (require, exports, dashboard_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var portlet = new dashboard_layout_1.DashboardLayout({
        cellSpacing: [7, 7],
        allowDragging: true,
        panels: [],
        columns: 6,
    });
    portlet.appendTo('#portlet_default');
    var headerCount = 1;
    document.getElementById('add').addEventListener('click', function (args) {
        var rowValue = parseInt(document.getElementById('row').value);
        var colValue = parseInt(document.getElementById('column').value);
        var sizeX = parseInt(document.getElementById('sizeX').value);
        var sizeY = parseInt(document.getElementById('sizeY').value);
        var headerText = 'Header' + headerCount.toString();
        var panelModelValue = {
            row: rowValue,
            col: colValue,
            sizeX: sizeX,
            sizeY: sizeY,
        };
        portlet.addPanel(panelModelValue);
        headerCount = headerCount + 1;
    });
    document.getElementById('RemoveAll').addEventListener('click', function (args) {
        portlet.removeAll();
    });
    document.getElementById('resize').addEventListener('click', function (args) {
        var id = document.getElementById('resizeId').value;
        var sizeX = parseInt(document.getElementById('resizeX').value, 10);
        var sizeY = parseInt(document.getElementById('resizeY').value, 10);
        portlet.resizePanel(id, sizeX, sizeY);
    });
    document.getElementById('move').addEventListener('click', function (args) {
        var id = document.getElementById('moveID').value;
        var sizeX = parseInt(document.getElementById('moveX').value, 10);
        var sizeY = parseInt(document.getElementById('moveY').value, 10);
        portlet.movePanel(id, sizeX, sizeY);
    });
});
