import { DashboardLayout } from '../../src/dashboard-layout/dashboard-layout';
import {Calendar} from '@syncfusion/ej2-calendars';
let calendars: Calendar = new Calendar();
let calendar1: Calendar = new Calendar();
var portlet = new DashboardLayout({
    columns:20,        
    allowDragging: true,
    showGridLines: true,
    allowFloating: false,    
    panels: [{ "sizeX": 3, "sizeY": 3, "row": 0, "col": 0, content: "<div>1</div>" },
    { "sizeX": 2, "sizeY": 3, "col": 3, content: "<div>2</div>" },
    { "sizeY": 3, "col": 5, content: "<div>3</div>" },
    { "sizeX": 3, "sizeY": 3, "row": 1, "col": 3, content: "<div>4</div>" },
    { "sizeX": 2, "sizeY": 3, "row": 4, "col": 3, content: "<div>5</div>" },
    { "sizeX": 2, "sizeY": 2, "row": 6, "col": 3, content: "<div>6</div>" },
    { "sizeX": 3, "sizeY": 3, "row": 6, "col": 0, content: "<div>7</div>" },
    ]
});
portlet.appendTo('#portlet_default');
calendars.appendTo("#calendar");
calendar1.appendTo("#calendar1");