define(["require", "exports", "../../src/splitter/splitter"], function (require, exports, splitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var splitObj = new splitter_1.Splitter({
        height: '300px',
        paneSettings: [
            { size: '50%' },
            { size: '50%' }
        ],
        orientation: 'Vertical'
    });
    splitObj.appendTo('#outterSplitter');
    var splitObj1 = new splitter_1.Splitter({
        height: '250px',
        paneSettings: [
            { size: '30%' },
            { size: '40%' },
            { size: '30%' }
        ],
        width: '100%'
    });
    splitObj1.appendTo('#splitter');
});
