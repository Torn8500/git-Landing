(function () {
    var _id = "bc42c395e68954114aae52166fee43e1";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:240px;height:65px;'></div>");
    var _t = document.createElement("script");
    _t.src = "js/timer.min.js";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [0, 1, 1, 1],
            "type": {
                "currentType": "3",
                "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1],
                    "usertime": true,
                    "time": "00:00",
                    "tz": -180,
                    "hours": "24",
                    "minutes": "0"
                }
            },
            "design": {
                "type": "plate",
                "params": {
                    "round": "0",
                    "background": "gradient",
                    "background-color": ["#000000", "#ababab"],
                    "effect": "flipchart",
                    "space": "3",
                    "separator-margin": "6",
                    "number-font-family": {
                        "family": "Roboto",
                        "link": "<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "22",
                    "number-font-color": "#ffffff",
                    "padding": "11",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Roboto",
                        "link": "<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "19",
                    "text-font-color": "#000000"
                }
            },
            "designId": 3,
            "theme": "white",
            "width": 240,
            "height": 65
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);