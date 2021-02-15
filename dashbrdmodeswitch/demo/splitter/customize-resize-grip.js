define(["require", "exports", "../../src/splitter/splitter"], function (require, exports, splitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var splitObj = new splitter_1.Splitter({
        height: '250px',
        paneSettings: [
            { size: '30%', min: '20%', max: '60%' },
            { size: '40%', min: '20%', max: '90%' },
            { size: '30%', min: '20%', max: '70%' }
        ],
        width: '100%'
    });
    splitObj.appendTo('#splitter');
});
