define(["require", "exports", "../../src/splitter/splitter", "@syncfusion/ej2-base"], function (require, exports, splitter_1, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var splitterObj = new splitter_1.Splitter({
        height: '250px',
        paneSettings: [
            { size: '30%' },
            { size: '70%' }
        ],
        width: '100%'
    });
    splitterObj.appendTo('#splitter');
    document.getElementById('addpane').onclick = function () {
        var paneDetails = {
            size: '190px',
            content: '<div class="content">New Pane</div>',
            min: '30px',
            max: '250px',
        };
        splitterObj.addPane(paneDetails, 1);
    };
    document.getElementById('removepane').onclick = function () {
        if (!ej2_base_1.isNullOrUndefined(document.querySelector('#splitter').querySelectorAll('.e-pane-horizontal')[1])) {
            splitterObj.removePane(1);
        }
    };
});
