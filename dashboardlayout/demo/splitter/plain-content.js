define(["require", "exports", "../../src/splitter/splitter"], function (require, exports, splitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var splitObj = new splitter_1.Splitter({
        height: '250px',
        paneSettings: [
            { size: '30%', content: "<div class='content'>Left pane</div>" },
            { size: '40%', content: "<div class='content'>Middle pane</div>" },
            { size: '30%', content: "<div class='content'>Right pane</div>" }
        ],
        width: '100%'
    });
    splitObj.appendTo('#splitter');
});
