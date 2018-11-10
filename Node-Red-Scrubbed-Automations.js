[
    {
        "id": "68b0dc89.024a04",
        "type": "tab",
        "label": "Location Automations",
        "disabled": false,
        "info": ""
    },
    {
        "id": "bda28257.338be",
        "type": "tab",
        "label": "Weather Automations",
        "disabled": false,
        "info": ""
    },
    {
        "id": "b8d8bbe6.f85438",
        "type": "tab",
        "label": "Time automation",
        "disabled": false,
        "info": ""
    },
    {
        "id": "84ba8565.f3de58",
        "type": "tab",
        "label": "Device change automation",
        "disabled": false,
        "info": ""
    },
    {
        "id": "dc305684.5f06a8",
        "type": "tab",
        "label": "Hue Switch Automations",
        "disabled": false,
        "info": ""
    },
    {
        "id": "874e9039.5d2ab",
        "type": "tab",
        "label": "Multiple Automations",
        "disabled": false,
        "info": ""
    },
    {
        "id": "a0e9a375.8ab54",
        "type": "server",
        "z": "",
        "name": "Home Assistant"
    },
    {
        "id": "bba8a1ed.a7d47",
        "type": "hue-bridge",
        "z": "",
        "name": "Condo Hue Bridge",
        "bridge": "[Condo Hue Bridge IP Address]",
        "key": "[Hue API Key - push button]",
        "interval": "3000"
    },
    {
        "id": "850548ac.e0ac48",
        "type": "debug",
        "z": "b8d8bbe6.f85438",
        "name": "Did not lower shades due to weather",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 2010,
        "y": 120,
        "wires": []
    },
    {
        "id": "13cee83b.209768",
        "type": "time-range-switch",
        "z": "68b0dc89.024a04",
        "name": "After sunset before 11:30PM",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "startTime": "sunset",
        "endTime": "23:29",
        "startOffset": 0,
        "endOffset": 0,
        "x": 1260,
        "y": 680,
        "wires": [
            [
                "7352da78.5720b4"
            ],
            []
        ]
    },
    {
        "id": "36caccb5.38f2c4",
        "type": "comment",
        "z": "84ba8565.f3de58",
        "name": "Backdoor logic",
        "info": "If back door changed?\n - open... wait 3 minutes ... then turn off AC if still open\n - closed ... resume AC (works if it's a quick open and close and also if was left open for a while)",
        "x": 180,
        "y": 80,
        "wires": []
    },
    {
        "id": "728f78ce.70dc28",
        "type": "function",
        "z": "84ba8565.f3de58",
        "name": "Door status",
        "func": "var doorStatus = msg.payload\n\nif(doorStatus == 22) {\n    msg.payload = \"Open\"\n}\nif(doorStatus == 23) {\n    msg.payload = \"Closed\"\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 370,
        "y": 180,
        "wires": [
            [
                "4d3f3b1a.d06314"
            ]
        ]
    },
    {
        "id": "eb104675.0a4e78",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Did back door change?",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "sensor.hank_hkzwdws01_doorwindow_sensor_access_control_3",
        "entityidfiltertype": "exact",
        "haltifstate": "",
        "x": 120,
        "y": 180,
        "wires": [
            [
                "728f78ce.70dc28"
            ]
        ]
    },
    {
        "id": "4d3f3b1a.d06314",
        "type": "switch",
        "z": "84ba8565.f3de58",
        "name": "Did Door Open or Close?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Open",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Closed",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 590,
        "y": 180,
        "wires": [
            [
                "52cc3f8e.3ad01",
                "1da8e09c.2239ff"
            ],
            [
                "e6132f.ce573cd",
                "b7c9210a.534fa"
            ]
        ]
    },
    {
        "id": "e6132f.ce573cd",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Resume AC schedule",
        "server": "a0e9a375.8ab54",
        "service_domain": "climate",
        "service": "ecobee_resume_program",
        "data": "{  \"entity_id\": \"climate.condo\" }",
        "mergecontext": "",
        "x": 860,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "52cc3f8e.3ad01",
        "type": "stoptimer",
        "z": "84ba8565.f3de58",
        "duration": "3",
        "units": "Minute",
        "payloadtype": "num",
        "payloadval": "0",
        "name": "Wait 3 minutes...",
        "x": 850,
        "y": 140,
        "wires": [
            [
                "745e1de3.c6fd94"
            ],
            []
        ]
    },
    {
        "id": "2aebdf3f.5d7d",
        "type": "function",
        "z": "84ba8565.f3de58",
        "name": "Door status",
        "func": "var doorStatus = msg.payload\n\nif(doorStatus == 22) {\n    msg.payload = \"Open\"\n}\nif(doorStatus == 23) {\n    msg.payload = \"Closed\"\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1310,
        "y": 140,
        "wires": [
            [
                "f54d5834.fba3d8"
            ]
        ]
    },
    {
        "id": "745e1de3.c6fd94",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is backdoor still open?",
        "server": "a0e9a375.8ab54",
        "halt_if": "",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "sensor.hank_hkzwdws01_doorwindow_sensor_access_control_3",
        "x": 1100,
        "y": 140,
        "wires": [
            [
                "2aebdf3f.5d7d"
            ]
        ]
    },
    {
        "id": "3cfe71cb.01427e",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Set AC to away mode",
        "server": "a0e9a375.8ab54",
        "service_domain": "climate",
        "service": "set_hold_mode",
        "data": "{ \"entity_id\": \"climate.condo\", \"hold_mode\": \"away\" }",
        "mergecontext": "",
        "x": 1840,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "f54d5834.fba3d8",
        "type": "switch",
        "z": "84ba8565.f3de58",
        "name": "Is door Open or Closed?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Open",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Closed",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1570,
        "y": 140,
        "wires": [
            [
                "3cfe71cb.01427e"
            ],
            []
        ]
    },
    {
        "id": "b7c9210a.534fa",
        "type": "debug",
        "z": "84ba8565.f3de58",
        "name": "Resumed AC",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 830,
        "y": 300,
        "wires": []
    },
    {
        "id": "3789c73b.ce7338",
        "type": "trigger-state",
        "z": "68b0dc89.024a04",
        "name": "He is now away",
        "server": "a0e9a375.8ab54",
        "entityid": "[Device Tracker His Phone]",
        "debugenabled": true,
        "constraints": [
            {
                "id": "dv0qtkwvxgnx",
                "targetType": "this_entity",
                "targetValue": "",
                "propertyType": "previous_state",
                "propertyValue": "old_state.state",
                "comparatorType": "is",
                "comparatorValueDatatype": "str",
                "comparatorValue": "home"
            }
        ],
        "constraintsmustmatch": "all",
        "outputs": 3,
        "customoutputs": [
            {
                "outputId": "lizszkttrpqs",
                "messageType": "custom",
                "messageValue": "He is away",
                "comparatorPropertyType": "current_state",
                "comparatorPropertyValue": "new_state.state",
                "comparatorType": "is_not",
                "comparatorValue": "home"
            }
        ],
        "x": 180,
        "y": 120,
        "wires": [
            [],
            [],
            [
                "d3a98435.362f08",
                "b5f1ecd9.96665",
                "61e96a1f.281744"
            ]
        ],
        "inputLabels": [
            "test"
        ],
        "outputLabels": [
            "",
            "",
            "Activated Message"
        ]
    },
    {
        "id": "bf1f7075.9b1e2",
        "type": "bigtimer",
        "z": "b8d8bbe6.f85438",
        "outtopic": "",
        "outpayload1": "Lower blinds",
        "outpayload2": "",
        "name": "Is it blinding time?",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "starttime": "5004",
        "endtime": "5004",
        "startoff": "-180",
        "endoff": "-178",
        "offs": 0,
        "outtext1": "Lower blinds",
        "outtext2": "",
        "timeout": 1440,
        "sun": true,
        "mon": true,
        "tue": true,
        "wed": true,
        "thu": true,
        "fri": true,
        "sat": true,
        "jan": true,
        "feb": true,
        "mar": true,
        "apr": true,
        "may": true,
        "jun": true,
        "jul": true,
        "aug": true,
        "sep": true,
        "oct": true,
        "nov": true,
        "dec": true,
        "day1": 0,
        "month1": 0,
        "day2": 0,
        "month2": 0,
        "day3": 0,
        "month3": 0,
        "day4": 0,
        "month4": 0,
        "day5": 0,
        "month5": 0,
        "d1": 0,
        "w1": 0,
        "d2": 0,
        "w2": 0,
        "d3": 0,
        "w3": 0,
        "d4": 0,
        "w4": 0,
        "d5": 0,
        "w5": 0,
        "suspend": false,
        "random": false,
        "repeat": true,
        "atstart": true,
        "odd": false,
        "even": false,
        "x": 130,
        "y": 100,
        "wires": [
            [],
            [],
            [
                "868f881d.4de948"
            ]
        ]
    },
    {
        "id": "49f6cc3b.1533b4",
        "type": "api-call-service",
        "z": "b8d8bbe6.f85438",
        "name": "Lower all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_down_request\" }",
        "mergecontext": "",
        "x": 1940,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "1a822818.d967c8",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Weather Status",
        "server": "a0e9a375.8ab54",
        "halt_if": "",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "weather.openweathermap",
        "x": 1260,
        "y": 80,
        "wires": [
            [
                "368511c8.2323fe",
                "48237e0c.71eeb"
            ]
        ]
    },
    {
        "id": "368511c8.2323fe",
        "type": "function",
        "z": "b8d8bbe6.f85438",
        "name": "Is the weather bad?",
        "func": "var weatherStatus = msg.payload;\n\nif (weatherStatus == \"mostlycloudy\" || weatherStatus == \"cloudy\" || weatherStatus == \"overcast\" || weatherStatus.includes(\"rain\") || weatherStatus == \"drizzle\") {\n    msg.payload = \"Do not lower blinds\";\n} else {\n    msg.payload = \"Lower blinds\";\n}\n\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1500,
        "y": 80,
        "wires": [
            [
                "3b234948.6dc296"
            ]
        ]
    },
    {
        "id": "3b234948.6dc296",
        "type": "switch",
        "z": "b8d8bbe6.f85438",
        "name": "Lower blinds?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Lower blinds",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Do not lower blinds",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1720,
        "y": 80,
        "wires": [
            [
                "49f6cc3b.1533b4"
            ],
            [
                "850548ac.e0ac48"
            ]
        ]
    },
    {
        "id": "57614bb1.f5fe44",
        "type": "bigtimer",
        "z": "b8d8bbe6.f85438",
        "outtopic": "",
        "outpayload1": "Raise blinds",
        "outpayload2": "",
        "name": "Is it sunrise time?",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "starttime": "5003",
        "endtime": "5003",
        "startoff": "-20",
        "endoff": "-15",
        "offs": 0,
        "outtext1": "Raise Blinds",
        "outtext2": "",
        "timeout": 1440,
        "sun": true,
        "mon": true,
        "tue": true,
        "wed": true,
        "thu": true,
        "fri": true,
        "sat": true,
        "jan": true,
        "feb": true,
        "mar": true,
        "apr": true,
        "may": true,
        "jun": true,
        "jul": true,
        "aug": true,
        "sep": true,
        "oct": true,
        "nov": true,
        "dec": true,
        "day1": 0,
        "month1": 0,
        "day2": 0,
        "month2": 0,
        "day3": 0,
        "month3": 0,
        "day4": 0,
        "month4": 0,
        "day5": 0,
        "month5": 0,
        "d1": 0,
        "w1": 0,
        "d2": 0,
        "w2": 0,
        "d3": 0,
        "w3": 0,
        "d4": 0,
        "w4": 0,
        "d5": 0,
        "w5": 0,
        "suspend": false,
        "random": false,
        "repeat": true,
        "atstart": true,
        "odd": false,
        "even": false,
        "x": 130,
        "y": 360,
        "wires": [
            [
                "90631708.b18698"
            ],
            [],
            []
        ],
        "outputLabels": [
            "ON Text",
            "",
            ""
        ]
    },
    {
        "id": "4de6aef.d12505",
        "type": "trigger-state",
        "z": "68b0dc89.024a04",
        "name": "He is coming home",
        "server": "a0e9a375.8ab54",
        "entityid": "[Device tracker his phone]",
        "debugenabled": true,
        "constraints": [
            {
                "id": "g34vvqxo4xqn",
                "targetType": "this_entity",
                "targetValue": "",
                "propertyType": "previous_state",
                "propertyValue": "old_state.state",
                "comparatorType": "is_not",
                "comparatorValueDatatype": "str",
                "comparatorValue": "home"
            }
        ],
        "constraintsmustmatch": "all",
        "outputs": 3,
        "customoutputs": [
            {
                "outputId": "7xiuwc3i2pog",
                "messageType": "default",
                "messageValue": "",
                "comparatorPropertyType": "current_state",
                "comparatorPropertyValue": "new_state.state",
                "comparatorType": "is",
                "comparatorValue": "home"
            }
        ],
        "x": 170,
        "y": 1000,
        "wires": [
            [],
            [],
            [
                "c8367f49.2196c",
                "a0e777ca.4e1138",
                "bd90f254.c7357",
                "718bed57.9b3e24"
            ]
        ]
    },
    {
        "id": "6ce2bc14.c71154",
        "type": "switch",
        "z": "dc305684.5f06a8",
        "name": "",
        "property": "payload.button",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "1",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "2",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "3",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "4",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 4,
        "x": 410,
        "y": 280,
        "wires": [
            [
                "83e6168e.8fa398",
                "84c1e67.6b63918",
                "c2f8cd4a.cf477"
            ],
            [],
            [],
            []
        ]
    },
    {
        "id": "bdf5cfe8.c813f",
        "type": "comment",
        "z": "dc305684.5f06a8",
        "name": "Goodnight button (Big round button)",
        "info": "",
        "x": 680,
        "y": 60,
        "wires": []
    },
    {
        "id": "1be52a2d.a53e76",
        "type": "api-call-service",
        "z": "b8d8bbe6.f85438",
        "name": "Unlock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "unlock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 1240,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "6998cbad.9ee984",
        "type": "bigtimer",
        "z": "b8d8bbe6.f85438",
        "outtopic": "",
        "outpayload1": "Unlock Door",
        "outpayload2": "",
        "name": "Is it time to go to work?",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "starttime": "435",
        "endtime": "450",
        "startoff": "0",
        "endoff": "0",
        "offs": 0,
        "outtext1": "Unlock Door",
        "outtext2": "",
        "timeout": 1440,
        "sun": false,
        "mon": true,
        "tue": true,
        "wed": true,
        "thu": true,
        "fri": false,
        "sat": false,
        "jan": true,
        "feb": true,
        "mar": true,
        "apr": true,
        "may": true,
        "jun": true,
        "jul": true,
        "aug": true,
        "sep": true,
        "oct": true,
        "nov": true,
        "dec": false,
        "day1": 0,
        "month1": 0,
        "day2": 0,
        "month2": 0,
        "day3": 0,
        "month3": 0,
        "day4": 0,
        "month4": 0,
        "day5": 0,
        "month5": 0,
        "d1": 0,
        "w1": 0,
        "d2": 0,
        "w2": 0,
        "d3": 0,
        "w3": 0,
        "d4": 0,
        "w4": 0,
        "d5": 0,
        "w5": 0,
        "suspend": false,
        "random": false,
        "repeat": true,
        "atstart": true,
        "odd": false,
        "even": false,
        "x": 130,
        "y": 480,
        "wires": [
            [
                "367f95e7.5505ba"
            ],
            [],
            []
        ],
        "outputLabels": [
            "ON Text",
            "",
            ""
        ]
    },
    {
        "id": "90729987.1fd098",
        "type": "switch",
        "z": "dc305684.5f06a8",
        "name": "Which button pressed?",
        "property": "payload.button",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "4001",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "1001",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 440,
        "y": 480,
        "wires": [
            [
                "1359e2ba.f01d1d"
            ],
            [
                "9891fe7.0e38e"
            ]
        ]
    },
    {
        "id": "1359e2ba.f01d1d",
        "type": "api-call-service",
        "z": "dc305684.5f06a8",
        "name": "Lower all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_down_request\" }",
        "mergecontext": "",
        "x": 660,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "9891fe7.0e38e",
        "type": "api-call-service",
        "z": "dc305684.5f06a8",
        "name": "Raise all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_up_request\" }",
        "mergecontext": "",
        "x": 660,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "c8367f49.2196c",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Notify He home status",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Welcome Home 🏠\" }",
        "mergecontext": "",
        "x": 440,
        "y": 1120,
        "wires": [
            []
        ]
    },
    {
        "id": "d3a98435.362f08",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Notify He away status",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Goodbye... 🚶‍♂️\" }",
        "mergecontext": "",
        "x": 450,
        "y": 60,
        "wires": [
            []
        ]
    },
    {
        "id": "f021f177.b54aa",
        "type": "trigger-state",
        "z": "68b0dc89.024a04",
        "name": "Her is coming home",
        "server": "a0e9a375.8ab54",
        "entityid": "[Device tracker her phone]",
        "debugenabled": true,
        "constraints": [
            {
                "id": "r14sjwyo1ugn",
                "targetType": "this_entity",
                "targetValue": "",
                "propertyType": "previous_state",
                "propertyValue": "old_state.state",
                "comparatorType": "is_not",
                "comparatorValueDatatype": "str",
                "comparatorValue": "home"
            }
        ],
        "constraintsmustmatch": "all",
        "outputs": 3,
        "customoutputs": [
            {
                "outputId": "nlnft1vb8m6a",
                "messageType": "custom",
                "messageValue": "Her is coming home",
                "comparatorPropertyType": "current_state",
                "comparatorPropertyValue": "new_state.state",
                "comparatorType": "is",
                "comparatorValue": "home"
            }
        ],
        "x": 170,
        "y": 680,
        "wires": [
            [],
            [],
            [
                "e37a1623.a00f08",
                "e1ebab4a.f4c238",
                "50280075.eda2",
                "f27340fc.b1842",
                "8d8fae1a.0adaf"
            ]
        ]
    },
    {
        "id": "a0e777ca.4e1138",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Unlock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "unlock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 400,
        "y": 1060,
        "wires": [
            []
        ]
    },
    {
        "id": "8bad8031.410ff",
        "type": "switch",
        "z": "b8d8bbe6.f85438",
        "name": "Is it time to lower blinds?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Lower blinds",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 790,
        "y": 80,
        "wires": [
            [
                "331c97b7.156128"
            ]
        ]
    },
    {
        "id": "48237e0c.71eeb",
        "type": "debug",
        "z": "b8d8bbe6.f85438",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1470,
        "y": 140,
        "wires": []
    },
    {
        "id": "b05c2bdd.db9c68",
        "type": "trigger-state",
        "z": "68b0dc89.024a04",
        "name": "Her is now away",
        "server": "a0e9a375.8ab54",
        "entityid": "[Device tracker her phone]",
        "debugenabled": true,
        "constraints": [
            {
                "id": "i6xc3i4l71p",
                "targetType": "this_entity",
                "targetValue": "",
                "propertyType": "previous_state",
                "propertyValue": "old_state.state",
                "comparatorType": "is",
                "comparatorValueDatatype": "str",
                "comparatorValue": "home"
            }
        ],
        "constraintsmustmatch": "all",
        "outputs": 3,
        "customoutputs": [
            {
                "outputId": "w8mdf1tgkxr",
                "messageType": "custom",
                "messageValue": "",
                "comparatorPropertyType": "current_state",
                "comparatorPropertyValue": "new_state.state",
                "comparatorType": "is_not",
                "comparatorValue": "home"
            }
        ],
        "x": 190,
        "y": 400,
        "wires": [
            [],
            [],
            [
                "5a656c3e.815574",
                "7442b33a.38699c"
            ]
        ],
        "outputLabels": [
            "",
            "",
            "Activated Message"
        ]
    },
    {
        "id": "f27340fc.b1842",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Is He home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 750,
        "y": 680,
        "wires": [
            [
                "d5dd255c.6f56e8"
            ]
        ]
    },
    {
        "id": "d5dd255c.6f56e8",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 980,
        "y": 680,
        "wires": [
            [
                "13cee83b.209768",
                "f839c3fa.e6cd4",
                "5fa2d526.c9692c",
                "b6fdc7e9.9e5e48"
            ]
        ]
    },
    {
        "id": "50280075.eda2",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Notify Her home status",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[Her ios Device]",
        "data": "{ \"message\": \"Welcome 🏠, Door is Unlocked\" }",
        "mergecontext": "",
        "x": 450,
        "y": 520,
        "wires": [
            []
        ]
    },
    {
        "id": "e1ebab4a.f4c238",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Resume the AC",
        "server": "a0e9a375.8ab54",
        "service_domain": "climate",
        "service": "ecobee_resume_program",
        "data": "{ \"entity_id\": \"climate.condo\" }",
        "mergecontext": "",
        "x": 420,
        "y": 580,
        "wires": [
            []
        ]
    },
    {
        "id": "bd90f254.c7357",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Resume the AC",
        "server": "a0e9a375.8ab54",
        "service_domain": "climate",
        "service": "ecobee_resume_program",
        "data": "{ \"entity_id\": \"climate.condo\" }",
        "mergecontext": "",
        "x": 400,
        "y": 1180,
        "wires": [
            []
        ]
    },
    {
        "id": "b5f1ecd9.96665",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Lock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "lock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 420,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "5a656c3e.815574",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Lock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "lock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 420,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "1e8700d5.c9feff",
        "type": "bigtimer",
        "z": "b8d8bbe6.f85438",
        "outtopic": "",
        "outpayload1": "Raise blinds",
        "outpayload2": "",
        "name": "Is it sunset time?",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "starttime": "5004",
        "endtime": "5004",
        "startoff": "-20",
        "endoff": "0",
        "offs": 0,
        "outtext1": "Raise Blinds",
        "outtext2": "",
        "timeout": 1440,
        "sun": true,
        "mon": true,
        "tue": true,
        "wed": true,
        "thu": true,
        "fri": true,
        "sat": true,
        "jan": true,
        "feb": true,
        "mar": true,
        "apr": true,
        "may": true,
        "jun": true,
        "jul": true,
        "aug": true,
        "sep": true,
        "oct": true,
        "nov": true,
        "dec": true,
        "day1": 0,
        "month1": 0,
        "day2": 0,
        "month2": 0,
        "day3": 0,
        "month3": 0,
        "day4": 0,
        "month4": 0,
        "day5": 0,
        "month5": 0,
        "d1": 0,
        "w1": 0,
        "d2": 0,
        "w2": 0,
        "d3": 0,
        "w3": 0,
        "d4": 0,
        "w4": 0,
        "d5": 0,
        "w5": 0,
        "suspend": false,
        "random": false,
        "repeat": true,
        "atstart": true,
        "odd": false,
        "even": false,
        "x": 130,
        "y": 260,
        "wires": [
            [
                "b4f6a197.030cf"
            ],
            [],
            []
        ],
        "outputLabels": [
            "ON Text",
            "",
            ""
        ]
    },
    {
        "id": "8f9bb6f9.a5ace8",
        "type": "api-call-service",
        "z": "b8d8bbe6.f85438",
        "name": "Raise all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_up_request\" }",
        "mergecontext": "",
        "x": 1220,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "d6837e23.89db4",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Weather Status",
        "server": "a0e9a375.8ab54",
        "halt_if": "",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "weather.openweathermap",
        "x": 780,
        "y": 780,
        "wires": [
            [
                "1615ed4.c16a813"
            ]
        ]
    },
    {
        "id": "c28687e9.f6ea68",
        "type": "inject",
        "z": "b8d8bbe6.f85438",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 780,
        "y": 720,
        "wires": [
            [
                "d6837e23.89db4"
            ]
        ]
    },
    {
        "id": "1615ed4.c16a813",
        "type": "debug",
        "z": "b8d8bbe6.f85438",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 780,
        "y": 840,
        "wires": []
    },
    {
        "id": "24fdac03.1f15a4",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Lower all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_down_request\" }",
        "mergecontext": "",
        "x": 620,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "c50b9b7b.0c2e78",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn off Sonos Kitchen",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "media_pause",
        "data": "{ \"entity_id\": \"media_player.kitchen\" }",
        "mergecontext": "",
        "x": 320,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "316c51f.c78ffae",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn off Sonos Bathroom",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "media_pause",
        "data": "{ \"entity_id\": \"media_player.bathroom\" }",
        "mergecontext": "",
        "x": 330,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "c2f8cd4a.cf477",
        "type": "api-call-service",
        "z": "dc305684.5f06a8",
        "name": "Set AC to sleep mode",
        "server": "a0e9a375.8ab54",
        "service_domain": "script",
        "service": "set_ac_sleep",
        "data": "",
        "mergecontext": "",
        "x": 640,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "83e6168e.8fa398",
        "type": "link out",
        "z": "dc305684.5f06a8",
        "name": "Turn everything off",
        "links": [
            "e8577086.a404d"
        ],
        "x": 555,
        "y": 240,
        "wires": []
    },
    {
        "id": "84c1e67.6b63918",
        "type": "api-call-service",
        "z": "dc305684.5f06a8",
        "name": "Notify Him Goodnight",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Goodnight... 🛏️\" }",
        "mergecontext": "",
        "x": 650,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "d0be61c5.8fa2",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 530,
        "y": 780,
        "wires": [
            [
                "7588dcdd.993624"
            ]
        ]
    },
    {
        "id": "b27476d6.db1798",
        "type": "inject",
        "z": "b8d8bbe6.f85438",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 540,
        "y": 720,
        "wires": [
            [
                "d0be61c5.8fa2"
            ]
        ]
    },
    {
        "id": "7588dcdd.993624",
        "type": "debug",
        "z": "b8d8bbe6.f85438",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 510,
        "y": 840,
        "wires": []
    },
    {
        "id": "6652529b.dc336c",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 1010,
        "y": 240,
        "wires": [
            [
                "8f9bb6f9.a5ace8"
            ]
        ]
    },
    {
        "id": "1f4860c9.1cf70f",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 1010,
        "y": 340,
        "wires": [
            [
                "97536579.a7bd98"
            ]
        ]
    },
    {
        "id": "4b2f29e.7b9c6d8",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 1010,
        "y": 460,
        "wires": [
            [
                "1be52a2d.a53e76"
            ]
        ]
    },
    {
        "id": "38ca859d.d2c26a",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 390,
        "y": 140,
        "wires": [
            [
                "8bad8031.410ff"
            ]
        ]
    },
    {
        "id": "b4f6a197.030cf",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Are you on Vacation?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.vacation_mode",
        "x": 400,
        "y": 240,
        "wires": [
            [
                "c03e8ac8.ead978"
            ]
        ]
    },
    {
        "id": "90631708.b18698",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Are you on Vacation?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.vacation_mode",
        "x": 400,
        "y": 340,
        "wires": [
            [
                "9f26b04c.43ab3"
            ]
        ]
    },
    {
        "id": "367f95e7.5505ba",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Are you on Vacation?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.vacation_mode",
        "x": 400,
        "y": 460,
        "wires": [
            [
                "9ccdd995.3c20c8"
            ]
        ]
    },
    {
        "id": "c03e8ac8.ead978",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Blind Automation Turned Off?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.blind_override",
        "x": 710,
        "y": 240,
        "wires": [
            [
                "6652529b.dc336c"
            ]
        ]
    },
    {
        "id": "9f26b04c.43ab3",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Blind Automation Turned Off?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.blind_override",
        "x": 710,
        "y": 340,
        "wires": [
            [
                "1f4860c9.1cf70f"
            ]
        ]
    },
    {
        "id": "9ccdd995.3c20c8",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Blind Automation Turned Off?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.blind_override",
        "x": 710,
        "y": 460,
        "wires": [
            [
                "4b2f29e.7b9c6d8"
            ]
        ]
    },
    {
        "id": "868f881d.4de948",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Are you on Vacation?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.vacation_mode",
        "x": 400,
        "y": 20,
        "wires": [
            [
                "77ed6409.85873c"
            ]
        ]
    },
    {
        "id": "77ed6409.85873c",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is Blind Automation Turned Off?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.blind_override",
        "x": 430,
        "y": 80,
        "wires": [
            [
                "38ca859d.d2c26a"
            ]
        ]
    },
    {
        "id": "e0507154.0d7f9",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Pause Apple TV",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "media_pause",
        "data": "{ \"entity_id\": \"media_player.living_room_3\" }",
        "mergecontext": "",
        "x": 540,
        "y": 320,
        "wires": [
            []
        ]
    },
    {
        "id": "2b051dc0.723e62",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn off TV",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "turn_off",
        "data": "{ \"entity_id\": \"media_player.lg_webos_smart_tv\" }",
        "mergecontext": "",
        "x": 290,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "fa7cb654.bfc438",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn off PC",
        "server": "a0e9a375.8ab54",
        "service_domain": "switch",
        "service": "turn_off",
        "data": "{ \"entity_id\": \"switch.pc\" }",
        "mergecontext": "",
        "x": 290,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "9adf2ad3.34ef08",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Lock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "lock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 540,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "2835e21a.db314e",
        "type": "api-current-state",
        "z": "874e9039.5d2ab",
        "name": "Check lock status",
        "server": "a0e9a375.8ab54",
        "halt_if": "locked",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Lock Entity Id]",
        "x": 310,
        "y": 500,
        "wires": [
            [
                "9adf2ad3.34ef08"
            ]
        ]
    },
    {
        "id": "e8577086.a404d",
        "type": "link in",
        "z": "874e9039.5d2ab",
        "name": "Turn off everything",
        "links": [
            "83e6168e.8fa398",
            "8bfe3d88.92612",
            "e44273e5.60fd",
            "69e54872.67ab48",
            "5eec9b77.943c84",
            "c0680561.2243b8",
            "224f569c.e9d8fa"
        ],
        "x": 135,
        "y": 300,
        "wires": [
            [
                "316c51f.c78ffae",
                "c50b9b7b.0c2e78",
                "2b051dc0.723e62",
                "fa7cb654.bfc438",
                "2835e21a.db314e",
                "7676730f.3f600c",
                "3797941b.3d241c",
                "87eb95b4.2776f8"
            ]
        ]
    },
    {
        "id": "e702901e.3c5ac",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Did Blind Hub Go out?",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "binary_sensor.blind_hub",
        "entityidfiltertype": "exact",
        "haltifstate": "on",
        "x": 120,
        "y": 620,
        "wires": [
            [
                "40306c7c.e2f764"
            ]
        ]
    },
    {
        "id": "40306c7c.e2f764",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him Hub is offline",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Blind Hub is offline\" }",
        "mergecontext": "",
        "x": 420,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "718bed57.9b3e24",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Is Her home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker her phone]",
        "x": 750,
        "y": 1020,
        "wires": [
            [
                "ad9dcc05.5eb71"
            ]
        ]
    },
    {
        "id": "76669d37.67e814",
        "type": "time-range-switch",
        "z": "68b0dc89.024a04",
        "name": "After sunset before 11:30PM",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "startTime": "sunset",
        "endTime": "23:29",
        "startOffset": 0,
        "endOffset": 0,
        "x": 1280,
        "y": 1100,
        "wires": [
            [
                "3160e082.17183",
                "9882f8ad.010118",
                "139f15b0.a6d4aa"
            ],
            []
        ]
    },
    {
        "id": "3160e082.17183",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Turn on kitchen lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"group.kitchen\" }",
        "mergecontext": "",
        "x": 1560,
        "y": 1100,
        "wires": [
            []
        ]
    },
    {
        "id": "2e43b6b.e981a4a",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Play some tunes",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "media_play",
        "data": "{ \"entity_id\": \"media_player.kitchen\" }",
        "mergecontext": "",
        "x": 1540,
        "y": 980,
        "wires": [
            []
        ]
    },
    {
        "id": "18b78855.8ba928",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Set volume to 35%",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "volume_set",
        "data": "{ \"entity_id\": \"media_player.kitchen\", \"volume_level\": 0.35 }",
        "mergecontext": "",
        "x": 1550,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "10895aa.7cc4da5",
        "type": "time-range-switch",
        "z": "68b0dc89.024a04",
        "name": "Afternoon before 8:30PM",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "startTime": "13:00",
        "endTime": "20:30",
        "startOffset": 0,
        "endOffset": 0,
        "x": 1270,
        "y": 1020,
        "wires": [
            [
                "2e43b6b.e981a4a",
                "18b78855.8ba928"
            ],
            []
        ]
    },
    {
        "id": "ad9dcc05.5eb71",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 1000,
        "y": 1020,
        "wires": [
            [
                "76669d37.67e814",
                "10895aa.7cc4da5",
                "1414a9a3.d51546"
            ]
        ]
    },
    {
        "id": "7676730f.3f600c",
        "type": "api-current-state",
        "z": "874e9039.5d2ab",
        "name": "Is Blind Automation Turned Off?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.blind_override",
        "x": 350,
        "y": 140,
        "wires": [
            [
                "24fdac03.1f15a4"
            ]
        ]
    },
    {
        "id": "271a84e8.a6cafc",
        "type": "server-state-changed",
        "z": "dc305684.5f06a8",
        "name": "Home Assistant - Go To Sleep",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "input_boolean.go_to_sleep",
        "entityidfiltertype": "exact",
        "haltifstate": "off",
        "x": 220,
        "y": 160,
        "wires": [
            [
                "84c1e67.6b63918",
                "83e6168e.8fa398",
                "c2f8cd4a.cf477"
            ]
        ]
    },
    {
        "id": "3797941b.3d241c",
        "type": "api-current-state",
        "z": "874e9039.5d2ab",
        "name": "Is Apple TV playing",
        "server": "a0e9a375.8ab54",
        "halt_if": "idle",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "media_player.living_room",
        "x": 310,
        "y": 320,
        "wires": [
            [
                "e0507154.0d7f9"
            ]
        ]
    },
    {
        "id": "9a8bb259.b5249",
        "type": "hue-tap",
        "z": "dc305684.5f06a8",
        "name": "Master Switch",
        "bridge": "bba8a1ed.a7d47",
        "sensorid": "2",
        "x": 190,
        "y": 280,
        "wires": [
            [
                "6ce2bc14.c71154"
            ]
        ]
    },
    {
        "id": "544c6200.6f484",
        "type": "hue-switch",
        "z": "dc305684.5f06a8",
        "name": "Kitchen switch",
        "bridge": "bba8a1ed.a7d47",
        "sensorid": "17",
        "x": 170,
        "y": 480,
        "wires": [
            [
                "90729987.1fd098"
            ]
        ]
    },
    {
        "id": "4fb905d9.23a9fc",
        "type": "hue-switch",
        "z": "dc305684.5f06a8",
        "name": "Entry way switch",
        "bridge": "bba8a1ed.a7d47",
        "sensorid": "19",
        "x": 180,
        "y": 560,
        "wires": [
            [
                "90729987.1fd098"
            ]
        ]
    },
    {
        "id": "7442b33a.38699c",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Is He home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 430,
        "y": 380,
        "wires": [
            [
                "f46882db.e697c"
            ]
        ]
    },
    {
        "id": "61e96a1f.281744",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Is Her home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker her phone]",
        "x": 420,
        "y": 180,
        "wires": [
            [
                "45d35d13.c9ca94"
            ]
        ]
    },
    {
        "id": "f46882db.e697c",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Guest override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.guest_override",
        "x": 700,
        "y": 400,
        "wires": [
            [
                "5eec9b77.943c84",
                "f2537a5c.5cd628"
            ]
        ]
    },
    {
        "id": "5eec9b77.943c84",
        "type": "link out",
        "z": "68b0dc89.024a04",
        "name": "",
        "links": [
            "e8577086.a404d"
        ],
        "x": 895,
        "y": 340,
        "wires": []
    },
    {
        "id": "f2537a5c.5cd628",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Set AC to away mode",
        "server": "a0e9a375.8ab54",
        "service_domain": "climate",
        "service": "set_hold_mode",
        "data": "{ \"entity_id\": \"climate.condo\", \"hold_mode\": \"away\" }",
        "mergecontext": "",
        "x": 980,
        "y": 400,
        "wires": [
            []
        ]
    },
    {
        "id": "1c1f6251.f10fce",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Test Her Position",
        "server": "a0e9a375.8ab54",
        "halt_if": "",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker her phone]",
        "x": 180,
        "y": 1400,
        "wires": [
            [
                "b376526c.a8833"
            ]
        ]
    },
    {
        "id": "58c5227.bf3cadc",
        "type": "inject",
        "z": "68b0dc89.024a04",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 140,
        "y": 1360,
        "wires": [
            [
                "1c1f6251.f10fce"
            ]
        ]
    },
    {
        "id": "b376526c.a8833",
        "type": "debug",
        "z": "68b0dc89.024a04",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 150,
        "y": 1440,
        "wires": []
    },
    {
        "id": "82a3be31.1a8e1",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Test His Position",
        "server": "a0e9a375.8ab54",
        "halt_if": "",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 460,
        "y": 1400,
        "wires": [
            [
                "54b2d5a0.56549c"
            ]
        ]
    },
    {
        "id": "e62526e5.10b728",
        "type": "inject",
        "z": "68b0dc89.024a04",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 420,
        "y": 1360,
        "wires": [
            [
                "82a3be31.1a8e1"
            ]
        ]
    },
    {
        "id": "54b2d5a0.56549c",
        "type": "debug",
        "z": "68b0dc89.024a04",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 430,
        "y": 1440,
        "wires": []
    },
    {
        "id": "97536579.a7bd98",
        "type": "api-call-service",
        "z": "b8d8bbe6.f85438",
        "name": "Raise all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_up_request\" }",
        "mergecontext": "",
        "x": 1220,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "331c97b7.156128",
        "type": "api-current-state",
        "z": "b8d8bbe6.f85438",
        "name": "Is back door open",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "binary_sensor.patio_door",
        "x": 1050,
        "y": 80,
        "wires": [
            [
                "1a822818.d967c8"
            ]
        ]
    },
    {
        "id": "ebb35db7.62cd",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Did NAS Go offline?",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "binary_sensor.condo_nas",
        "entityidfiltertype": "exact",
        "haltifstate": "on",
        "x": 130,
        "y": 700,
        "wires": [
            [
                "253dc50.b93c93c"
            ]
        ]
    },
    {
        "id": "253dc50.b93c93c",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him NAS is offline",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Condo NAS is offline\" }",
        "mergecontext": "",
        "x": 420,
        "y": 700,
        "wires": [
            []
        ]
    },
    {
        "id": "e37a1623.a00f08",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Notify Him home status",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Her phone showed home\" }",
        "mergecontext": "",
        "x": 460,
        "y": 720,
        "wires": [
            []
        ]
    },
    {
        "id": "45d35d13.c9ca94",
        "type": "api-current-state",
        "z": "68b0dc89.024a04",
        "name": "Guest override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "input_boolean.guest_override",
        "x": 700,
        "y": 160,
        "wires": [
            [
                "c0680561.2243b8",
                "91cbdfcf.e25f7"
            ]
        ]
    },
    {
        "id": "c0680561.2243b8",
        "type": "link out",
        "z": "68b0dc89.024a04",
        "name": "",
        "links": [
            "e8577086.a404d"
        ],
        "x": 895,
        "y": 120,
        "wires": []
    },
    {
        "id": "91cbdfcf.e25f7",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Set AC to away mode",
        "server": "a0e9a375.8ab54",
        "service_domain": "climate",
        "service": "set_hold_mode",
        "data": "{ \"entity_id\": \"climate.condo\", \"hold_mode\": \"away\" }",
        "mergecontext": "",
        "x": 980,
        "y": 160,
        "wires": [
            []
        ]
    },
    {
        "id": "9882f8ad.010118",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Turn on entryway lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"light.hallway\" }",
        "mergecontext": "",
        "x": 1570,
        "y": 1160,
        "wires": [
            []
        ]
    },
    {
        "id": "548fab20.5957d4",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Nest Smoke Status",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "sensor.hallway_nest_protect_smoke_status",
        "entityidfiltertype": "exact",
        "haltifstate": "Ok",
        "x": 130,
        "y": 780,
        "wires": [
            [
                "5053f0bb.9170f"
            ]
        ]
    },
    {
        "id": "4fe0aa46.9d2714",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "CO2 Levels Not Safe",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "sensor.hallway_nest_protect_co_status",
        "entityidfiltertype": "exact",
        "haltifstate": "Ok",
        "x": 120,
        "y": 860,
        "wires": [
            [
                "1d840512.3141bb"
            ]
        ]
    },
    {
        "id": "f5ddcfd5.ad4c9",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him Smoke level not OK",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Condo Smoke level not OK\" }",
        "mergecontext": "",
        "x": 680,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "1d840512.3141bb",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Him home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 370,
        "y": 860,
        "wires": [
            [
                "89a844b4.010668"
            ]
        ]
    },
    {
        "id": "1da8e09c.2239ff",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Her home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker her phone]",
        "x": 860,
        "y": 40,
        "wires": [
            [
                "39c50c4e.0207c4"
            ]
        ]
    },
    {
        "id": "39c50c4e.0207c4",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Him home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 890,
        "y": 80,
        "wires": [
            [
                "e1b1ead7.e55e78"
            ]
        ]
    },
    {
        "id": "5f3c5074.8bbd6",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him door was opened",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"🚪Back door was open while you both were away.\" }",
        "mergecontext": "",
        "x": 1390,
        "y": 40,
        "wires": [
            []
        ]
    },
    {
        "id": "2712b1fa.00fc7e",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Her door was opened",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[Her ios Device]",
        "data": "{ \"message\": \"🚪Back door was open while you both were away.\" }",
        "mergecontext": "",
        "x": 1390,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "d72e2b05.3434a8",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Did Front door unlock?",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "[Lock Entity Id]",
        "entityidfiltertype": "exact",
        "haltifstate": "locked",
        "x": 120,
        "y": 480,
        "wires": [
            [
                "ad3bbe16.2d14c"
            ]
        ]
    },
    {
        "id": "ad3bbe16.2d14c",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Her home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker her phone]",
        "x": 360,
        "y": 480,
        "wires": [
            [
                "e56890a2.6658d"
            ]
        ]
    },
    {
        "id": "e56890a2.6658d",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Him home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 590,
        "y": 480,
        "wires": [
            [
                "f0da8319.288a4"
            ]
        ]
    },
    {
        "id": "29c010.7ee38ff",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Her door was opened",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[Her ios Device]",
        "data": "{ \"message\": \"🚪 Front door was open while you both were away.\" }",
        "mergecontext": "",
        "x": 1210,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "68941351.3dc1ac",
        "type": "inject",
        "z": "bda28257.338be",
        "name": "Inject at noon every day",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "00 12 * * *",
        "once": false,
        "onceDelay": 0.1,
        "x": 170,
        "y": 120,
        "wires": [
            [
                "9232e49e.67e3f8"
            ]
        ]
    },
    {
        "id": "9232e49e.67e3f8",
        "type": "http request",
        "z": "bda28257.338be",
        "name": "Get current weather",
        "method": "GET",
        "ret": "obj",
        "url": "https://samples.openweathermap.org/data/2.5/weather?zip=37219,us&appid=[OpenWeatherApiKey]",
        "tls": "",
        "x": 450,
        "y": 120,
        "wires": [
            [
                "bacf2ae4.0a8018"
            ]
        ]
    },
    {
        "id": "bacf2ae4.0a8018",
        "type": "function",
        "z": "bda28257.338be",
        "name": "Parse JSON",
        "func": "kalvinLow = msg.payload.main.temp_min;\n\nfarenheitLow = ((kalvinLow-273.15)*1.8) + 32\n\nmsg.payload = farenheitLow;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 690,
        "y": 120,
        "wires": [
            [
                "d5712382.6a38c"
            ]
        ]
    },
    {
        "id": "f2e1a40.bac146",
        "type": "server-state-changed",
        "z": "bda28257.338be",
        "name": "Weather status?",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "weather.openweathermap",
        "entityidfiltertype": "exact",
        "haltifstate": "",
        "x": 200,
        "y": 220,
        "wires": [
            [
                "f80d36eb.bb7688"
            ]
        ]
    },
    {
        "id": "54841a9d.a8daf4",
        "type": "api-current-state",
        "z": "bda28257.338be",
        "name": "Back door status?",
        "server": "a0e9a375.8ab54",
        "halt_if": "",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "sensor.hank_hkzwdws01_doorwindow_sensor_access_control_3",
        "x": 850,
        "y": 220,
        "wires": [
            [
                "e3449ae3.ba2088"
            ]
        ]
    },
    {
        "id": "5b2dd62b.87c938",
        "type": "switch",
        "z": "bda28257.338be",
        "name": "Is Door Open or Closed?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Open",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "Closed",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 1310,
        "y": 220,
        "wires": [
            [
                "85e9f303.b6a32",
                "eb4db481.a6b528"
            ],
            []
        ]
    },
    {
        "id": "85e9f303.b6a32",
        "type": "api-call-service",
        "z": "bda28257.338be",
        "name": "Notify Him of back door status",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"It's raining and the back door is open!\" }",
        "mergecontext": "",
        "x": 1600,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "eb4db481.a6b528",
        "type": "api-call-service",
        "z": "bda28257.338be",
        "name": "Notify Her of back door status",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[Her ios Device]",
        "data": "{ \"message\": \"It's raining and the back door is open!\" }",
        "mergecontext": "",
        "x": 1600,
        "y": 180,
        "wires": [
            []
        ]
    },
    {
        "id": "f80d36eb.bb7688",
        "type": "function",
        "z": "bda28257.338be",
        "name": "Determine if it's raining",
        "func": "var weatherStatus = msg.payload;\n\nif (weatherStatus.includes(\"rain\") || weatherStatus.includes(\"drizzle\")) {\n    return \"Rain\"\n} else {\n    return null;\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 420,
        "y": 220,
        "wires": [
            [
                "45440074.650a3"
            ]
        ]
    },
    {
        "id": "45440074.650a3",
        "type": "switch",
        "z": "bda28257.338be",
        "name": "Is Raining?",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "Rain",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 650,
        "y": 220,
        "wires": [
            [
                "54841a9d.a8daf4"
            ]
        ]
    },
    {
        "id": "e3449ae3.ba2088",
        "type": "function",
        "z": "bda28257.338be",
        "name": "Door status",
        "func": "var doorStatus = msg.payload\n\nif(doorStatus == 22) {\n    msg.payload = \"Open\"\n}\nif(doorStatus == 23) {\n    msg.payload = \"Closed\"\n}\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1070,
        "y": 220,
        "wires": [
            [
                "5b2dd62b.87c938"
            ]
        ]
    },
    {
        "id": "c432a183.77656",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him door was opened",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"🚪 Front door was open while you both were away.\" }",
        "mergecontext": "",
        "x": 1210,
        "y": 440,
        "wires": [
            []
        ]
    },
    {
        "id": "89a844b4.010668",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him CO level not OK",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Condo Carbon Monoxide level not OK\" }",
        "mergecontext": "",
        "x": 670,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "5053f0bb.9170f",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Him home?",
        "server": "a0e9a375.8ab54",
        "halt_if": "home",
        "override_topic": false,
        "override_payload": false,
        "entity_id": "[Device tracker his phone]",
        "x": 370,
        "y": 780,
        "wires": [
            [
                "f5ddcfd5.ad4c9"
            ]
        ]
    },
    {
        "id": "d5712382.6a38c",
        "type": "switch",
        "z": "bda28257.338be",
        "name": "Is below freezing",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "lte",
                "v": "34",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 930,
        "y": 120,
        "wires": [
            [
                "bb91acec.12dd4",
                "9abb99c5.f2df18"
            ]
        ]
    },
    {
        "id": "bb91acec.12dd4",
        "type": "api-call-service",
        "z": "bda28257.338be",
        "name": "Notify Him of temperature",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"According to the forecast, tonight is supposed to get below freezing! ❄️❄️❄️\" }",
        "mergecontext": "",
        "x": 1200,
        "y": 80,
        "wires": [
            []
        ]
    },
    {
        "id": "9abb99c5.f2df18",
        "type": "api-call-service",
        "z": "bda28257.338be",
        "name": "Notify Her of temperature",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[Her ios Device]",
        "data": "{ \"message\": \"According to the forecast, tonight is supposed to get below freezing! ❄️❄️❄️\" }",
        "mergecontext": "",
        "x": 1200,
        "y": 120,
        "wires": [
            []
        ]
    },
    {
        "id": "f0da8319.288a4",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 830,
        "y": 480,
        "wires": [
            [
                "29c010.7ee38ff",
                "c432a183.77656"
            ]
        ]
    },
    {
        "id": "e1b1ead7.e55e78",
        "type": "api-current-state",
        "z": "84ba8565.f3de58",
        "name": "Is Guest Override?",
        "server": "a0e9a375.8ab54",
        "halt_if": "on",
        "override_topic": true,
        "override_payload": true,
        "entity_id": "input_boolean.guest_override",
        "x": 1110,
        "y": 80,
        "wires": [
            [
                "2712b1fa.00fc7e",
                "5f3c5074.8bbd6"
            ]
        ]
    },
    {
        "id": "f839c3fa.e6cd4",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Raise all blinds",
        "server": "a0e9a375.8ab54",
        "service_domain": "ifttt",
        "service": "trigger",
        "data": "{ \"event\": \"all_blinds_up_request\" }",
        "mergecontext": "",
        "x": 1260,
        "y": 620,
        "wires": [
            []
        ]
    },
    {
        "id": "fb7eaca3.8cbdb",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Play some tunes",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "media_play",
        "data": "{ \"entity_id\": \"media_player.kitchen\" }",
        "mergecontext": "",
        "x": 1560,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "a954ed4c.849a2",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Set volume to 35%",
        "server": "a0e9a375.8ab54",
        "service_domain": "media_player",
        "service": "volume_set",
        "data": "{ \"entity_id\": \"media_player.kitchen\", \"volume_level\": 0.35 }",
        "mergecontext": "",
        "x": 1570,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "5fa2d526.c9692c",
        "type": "time-range-switch",
        "z": "68b0dc89.024a04",
        "name": "Afternoon before 8:30PM",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "startTime": "13:00",
        "endTime": "20:30",
        "startOffset": 0,
        "endOffset": 0,
        "x": 1290,
        "y": 560,
        "wires": [
            [
                "fb7eaca3.8cbdb",
                "a954ed4c.849a2"
            ],
            []
        ]
    },
    {
        "id": "139f15b0.a6d4aa",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Turn on living room lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"light.living_room\" }",
        "mergecontext": "",
        "x": 1570,
        "y": 1220,
        "wires": [
            []
        ]
    },
    {
        "id": "298c1b9f.1f8904",
        "type": "poll-state",
        "z": "84ba8565.f3de58",
        "name": "Get Condo Humidity",
        "server": "a0e9a375.8ab54",
        "updateinterval": "",
        "outputinitially": true,
        "outputonchanged": true,
        "entity_id": "sensor.condo_humidity",
        "x": 130,
        "y": 960,
        "wires": [
            [
                "439d3120.072c5"
            ]
        ]
    },
    {
        "id": "439d3120.072c5",
        "type": "switch",
        "z": "84ba8565.f3de58",
        "name": "Determine Condo Humidity",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "lt",
                "v": "25",
                "vt": "str"
            },
            {
                "t": "gt",
                "v": "63",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 400,
        "y": 960,
        "wires": [
            [
                "8cd94be7.0fb8d8"
            ],
            [
                "98ad66a9.41e5e8"
            ]
        ]
    },
    {
        "id": "8cd94be7.0fb8d8",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him Humidity is low",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Humidity in the Condo is below 25%\" }",
        "mergecontext": "",
        "x": 700,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "98ad66a9.41e5e8",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Notify Him Humidity is high",
        "server": "a0e9a375.8ab54",
        "service_domain": "notify",
        "service": "[His ios Device]",
        "data": "{ \"message\": \"Humidity in the Condo is above 60%, turn on the fan in the bathroom.\" }",
        "mergecontext": "",
        "x": 710,
        "y": 1000,
        "wires": [
            []
        ]
    },
    {
        "id": "1414a9a3.d51546",
        "type": "time-range-switch",
        "z": "68b0dc89.024a04",
        "name": "Late night",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "startTime": "23:29",
        "endTime": "07:00",
        "startOffset": 0,
        "endOffset": 0,
        "x": 1220,
        "y": 940,
        "wires": [
            [
                "80e0258c.360a98"
            ],
            []
        ]
    },
    {
        "id": "fd119804.201cb8",
        "type": "link in",
        "z": "874e9039.5d2ab",
        "name": "Turn all lights to Dim",
        "links": [
            "388cb037.ea887",
            "80e0258c.360a98",
            "920bc76a.c75518",
            "5bc9581c.8fff98"
        ],
        "x": 95,
        "y": 780,
        "wires": [
            [
                "5f90446f.caf48c",
                "134d20cd.5c213f",
                "671e8135.d8c41",
                "22dd4e55.689d12"
            ]
        ]
    },
    {
        "id": "134d20cd.5c213f",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on (dim) kitchen lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"group.kitchen\", \"brightness\": 100 }",
        "mergecontext": "",
        "x": 320,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "5f90446f.caf48c",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on (dim) bedroom lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"group.bedroom\", \"brightness\": 100 }",
        "mergecontext": "",
        "x": 320,
        "y": 680,
        "wires": [
            []
        ]
    },
    {
        "id": "22dd4e55.689d12",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on (dim) living room lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"light.living_room\", \"brightness\": 100 }",
        "mergecontext": "",
        "x": 330,
        "y": 860,
        "wires": [
            []
        ]
    },
    {
        "id": "671e8135.d8c41",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on (dim) entryway lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"light.hallway\", \"brightness\": 100 }",
        "mergecontext": "",
        "x": 320,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "80e0258c.360a98",
        "type": "link out",
        "z": "68b0dc89.024a04",
        "name": "",
        "links": [
            "fd119804.201cb8"
        ],
        "x": 1475,
        "y": 920,
        "wires": []
    },
    {
        "id": "b6fdc7e9.9e5e48",
        "type": "time-range-switch",
        "z": "68b0dc89.024a04",
        "name": "Late night",
        "lat": "[Home Latitude]",
        "lon": "[Home Longitude]",
        "startTime": "23:29",
        "endTime": "07:00",
        "startOffset": 0,
        "endOffset": 0,
        "x": 1200,
        "y": 780,
        "wires": [
            [
                "5bc9581c.8fff98"
            ],
            []
        ]
    },
    {
        "id": "5bc9581c.8fff98",
        "type": "link out",
        "z": "68b0dc89.024a04",
        "name": "",
        "links": [
            "fd119804.201cb8"
        ],
        "x": 1495,
        "y": 800,
        "wires": []
    },
    {
        "id": "8d8fae1a.0adaf",
        "type": "api-call-service",
        "z": "68b0dc89.024a04",
        "name": "Unlock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "unlock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 420,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "87eb95b4.2776f8",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn off lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "light",
        "service": "turn_off",
        "data": "{ \"entity_id\": \"group.all_lights\" }",
        "mergecontext": "",
        "x": 300,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "60a7aeb5.ceea3",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Authorized person entry",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "input_boolean.authorized_person",
        "entityidfiltertype": "exact",
        "haltifstate": "off",
        "outputinitially": false,
        "x": 120,
        "y": 1120,
        "wires": [
            [
                "2da211a4.66a2ce",
                "65477996.ebc9b8"
            ]
        ]
    },
    {
        "id": "2da211a4.66a2ce",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Unlock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "unlock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 360,
        "y": 1120,
        "wires": [
            []
        ]
    },
    {
        "id": "32256566.5c9fba",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on kitchen lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"group.kitchen\", \"brightness\": 255 }",
        "mergecontext": "",
        "x": 300,
        "y": 1020,
        "wires": [
            []
        ]
    },
    {
        "id": "d630b096.2daf6",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on bedroom lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "light",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"group.bedroom\" }",
        "mergecontext": "",
        "x": 300,
        "y": 960,
        "wires": [
            []
        ]
    },
    {
        "id": "8f979bc5.0b8728",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on living room lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"light.living_room\" }",
        "mergecontext": "",
        "x": 310,
        "y": 1140,
        "wires": [
            []
        ]
    },
    {
        "id": "6bf97e55.59da7",
        "type": "api-call-service",
        "z": "874e9039.5d2ab",
        "name": "Turn on entryway lights",
        "server": "a0e9a375.8ab54",
        "service_domain": "homeassistant",
        "service": "turn_on",
        "data": "{ \"entity_id\": \"light.hallway\" }",
        "mergecontext": "",
        "x": 310,
        "y": 1080,
        "wires": [
            []
        ]
    },
    {
        "id": "a7c00aa6.509648",
        "type": "link in",
        "z": "874e9039.5d2ab",
        "name": "Turn all lights on (bright)",
        "links": [
            "7352da78.5720b4",
            "65477996.ebc9b8"
        ],
        "x": 95,
        "y": 1020,
        "wires": [
            [
                "d630b096.2daf6",
                "32256566.5c9fba",
                "6bf97e55.59da7",
                "8f979bc5.0b8728"
            ]
        ]
    },
    {
        "id": "7352da78.5720b4",
        "type": "link out",
        "z": "68b0dc89.024a04",
        "name": "",
        "links": [
            "a7c00aa6.509648"
        ],
        "x": 1495,
        "y": 680,
        "wires": []
    },
    {
        "id": "65477996.ebc9b8",
        "type": "link out",
        "z": "84ba8565.f3de58",
        "name": "",
        "links": [
            "a7c00aa6.509648"
        ],
        "x": 295,
        "y": 1160,
        "wires": []
    },
    {
        "id": "33366d26.58b1d2",
        "type": "server-state-changed",
        "z": "84ba8565.f3de58",
        "name": "Authorized person exit",
        "server": "a0e9a375.8ab54",
        "entityidfilter": "input_boolean.authorized_person",
        "entityidfiltertype": "exact",
        "haltifstate": "on",
        "outputinitially": false,
        "x": 120,
        "y": 1240,
        "wires": [
            [
                "224f569c.e9d8fa",
                "e5d41ec.d8b22e"
            ]
        ]
    },
    {
        "id": "224f569c.e9d8fa",
        "type": "link out",
        "z": "84ba8565.f3de58",
        "name": "",
        "links": [
            "e8577086.a404d"
        ],
        "x": 295,
        "y": 1280,
        "wires": []
    },
    {
        "id": "e5d41ec.d8b22e",
        "type": "api-call-service",
        "z": "84ba8565.f3de58",
        "name": "Lock the door",
        "server": "a0e9a375.8ab54",
        "service_domain": "lock",
        "service": "lock",
        "data": "{ \"entity_id\": \"[Lock Entity Id]\" }",
        "mergecontext": "",
        "x": 360,
        "y": 1240,
        "wires": [
            []
        ]
    }
]