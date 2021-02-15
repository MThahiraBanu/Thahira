define(["require", "exports", "../../src/dashboard-layout/dashboard-layout"], function (require, exports, dashboard_layout_1, ej2_calendars_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
   
    var portlet = new dashboard_layout_1.DashboardLayout({
        columns: 20,
        allowResizing: true,
        resizableHandles: [      
			"e-east",
			"e-south-east",
            "e-west",
            "e-north",
            "e-south"
          ],
        showGridLines: false,
        allowFloating: true,
        panels: [
            { "sizeX": 3, "sizeY": 3, "row": 0, "col": 0, content: "<div>1</div>" },
            { "sizeX": 2, "sizeY": 3,  "row": 1,"col": 3, content: "<div>2</div>" },
            { "sizeX": 2,"sizeY": 3, "col": 5,  "row": 2,content: "<div>3</div>" },
            // { "sizeX": 3, "sizeY": 3, "row": 1, "col": 3, content: "<div>4</div>" },
            { "sizeX": 2, "sizeY": 3, "row": 4, "col": 3, content: "<div>5</div>" },
            { "sizeX": 2, "sizeY": 2, "row": 6, "col": 3, content: "<div>6</div>" },
            { "sizeX": 3, "sizeY": 3, "row": 75, "col": 0, content: "<div>7</div>"},		
		    {"sizeX":4,"sizeY":2,"row":6,"col":2, content: "<div>8</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>9</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>10</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>11</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>12</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>13</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>14</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>15</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>16</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>17</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>18</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>19</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>20</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>21</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>22</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>23</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>24</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>25</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>26</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>27</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>28</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>29</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>31</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>32</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>33</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>34</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>35</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>36</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>37</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>38</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>39</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>40</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>41</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>42</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>43</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>44</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>45</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>46</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>47</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>48</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>49</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>50</div>"},
		     {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>51</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>52</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>53</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>54</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>55</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>56</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>57</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>58</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>59</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>60</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>61</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>62</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>63</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>64</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>65</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>66</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>67</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>68</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>69</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>70</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>71</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>72</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>73</div>"},
		 	{"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>74</div>"},
		 	{"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>75</div>"},
		 	{"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>76</div>"},
		 	{"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>77</div>"},
		 	 {"sizeX":4,"sizeY":2,"row":77,"col":2,content: "<div>hello</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4,content: "<div>30</div>"},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2,content: "<div>30</div>"},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4},
		 	// {"sizeX":4,"sizeY":2,"row":6,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":0,"col":0},
		 	// {"sizeX":4,"sizeY":2,"row":2,"col":2},
		 	// {"sizeX":2,"sizeY":2,"row":4,"col":4},
        ]
    });
    portlet.appendTo('#portlet_default');
   // calendars.appendTo("#calendar");
   // calendar1.appendTo("#calendar1");
});