define(["require", "exports", "../../src/dashboard-layout/dashboard-layout"], function (require, exports, dashboard_layout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var portlet = new dashboard_layout_1.DashboardLayout({
        columns: 7,
        cellSpacing: [5, 5],
        allowDragging: true,
        enableRtl: true,
    });
    portlet.appendTo('#portlet_default');
});
