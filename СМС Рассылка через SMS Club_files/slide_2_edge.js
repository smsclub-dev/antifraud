/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='/edge/slider/images/',
        aud='/edge/slider/media/',
        vid='/edge/slider/media/',
        js='/edge/slider/js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['97', '112px', '619', '624', 'auto', 'auto'],
                            c: [
                                {
                                    id: 'blure_iphone2',
                                    type: 'image',
                                    rect: ['-2px', '32px', '200px', '397px', 'auto', 'auto'],
                                    opacity: '0',
                                    fill: ["rgba(0,0,0,0)",im+"blure_iphone2.png",'0px','0px'],
                                    transform: [[],[],[],['0.98','0.98']]
                                },
                                {
                                    id: 'WP_blure',
                                    type: 'image',
                                    rect: ['409px', '59px', '210px', '404px', 'auto', 'auto'],
                                    opacity: '0',
                                    fill: ["rgba(0,0,0,0)",im+"WP_blure.png",'0px','0px']
                                },
                                {
                                    id: 's_sms',
                                    type: 'group',
                                    rect: ['25px', '0px', '555', '114', 'auto', 'auto'],
                                    c: [
                                        {
                                            id: 'email5Copy',
                                            type: 'image',
                                            rect: ['0px', '45px', '30px', '30px', 'auto', 'auto'],
                                            opacity: '0',
                                            fill: ["rgba(0,0,0,0)",im+"email5.svg",'0px','0px']
                                        },
                                        {
                                            id: 'email5Copy3',
                                            type: 'image',
                                            rect: ['535px', '57px', '30px', '30px', 'auto', 'auto'],
                                            opacity: '0',
                                            fill: ["rgba(0,0,0,0)",im+"email5.svg",'0px','0px']
                                        },
                                        {
                                            id: 'email5Copy4',
                                            type: 'image',
                                            rect: ['487px', '0px', '30px', '30px', 'auto', 'auto'],
                                            opacity: '0',
                                            fill: ["rgba(0,0,0,0)",im+"email5.svg",'0px','0px']
                                        }]
                                },
                                {
                                    id: 'phone',
                                    type: 'group',
                                    rect: ['171px', '90px', '263', '534', 'auto', 'auto'],
                                    opacity: '0',
                                    c: [
                                        {
                                            id: 'phone2',
                                            type: 'image',
                                            rect: ['0px', '0px', '263px', '534px', 'auto', 'auto'],
                                            fill: ["rgba(0,0,0,0)",im+"phone2.png",'0px','0px']
                                        },
                                        {
                                            id: 'phone_interface',
                                            type: 'group',
                                            rect: ['12px', '53px', '238px', '434px', 'auto', 'auto'],
                                            overflow: 'hidden',
                                            opacity: '1',
                                            c: [
                                                {
                                                    id: 'Rectangle',
                                                    type: 'rect',
                                                    rect: ['0px', '0px', '238px', '424px', 'auto', 'auto'],
                                                    fill: ["rgba(255,255,255,1.00)"],
                                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                                },
                                                {
                                                    id: 'Rectangle2',
                                                    type: 'rect',
                                                    rect: ['-3px', '-30px', '244px', '45px', 'auto', 'auto'],
                                                    opacity: '0',
                                                    fill: ["rgba(33,150,243,1.00)"],
                                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                                    boxShadow: ["", 0, 2, 2, 0, "rgba(0,0,0,0.20)"]
                                                },
                                                {
                                                    id: 'Text',
                                                    type: 'text',
                                                    rect: ['15px', '-20px', 'auto', 'auto', 'auto', 'auto'],
                                                    opacity: '0',
                                                    text: "<p style=\"margin: 0px;\">​Messages</p>",
                                                    font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1.00)", "300", "none", "", "break-word", "nowrap"]
                                                },
                                                {
                                                    id: 'msg1',
                                                    type: 'group',
                                                    rect: ['15px', '60px', '211px', '56px', 'auto', 'auto'],
                                                    opacity: '0',
                                                    c: [
                                                        {
                                                            id: 'Ellipse',
                                                            type: 'ellipse',
                                                            rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                                                            borderRadius: ["50%", "50%", "50%", "50%"],
                                                            fill: ["rgba(63,81,181,1.00)"],
                                                            stroke: [0,"rgb(0, 0, 0)","none"]
                                                        },
                                                        {
                                                            id: 'Text2',
                                                            type: 'text',
                                                            rect: ['19px', '4px', 'auto', 'auto', 'auto', 'auto'],
                                                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 24px;\">I</span></p>",
                                                            align: "left",
                                                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", "nowrap"],
                                                            textStyle: ["", "", "", "", "none"]
                                                        },
                                                        {
                                                            id: 'Text3',
                                                            type: 'text',
                                                            rect: ['60px', '0px', '148px', '56px', 'auto', 'auto'],
                                                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0); font-weight: 700;\">Info</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">​Ваш код подтверждения: 5612</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">​</span><span style=\"color: rgb(0, 0, 0); font-weight: 400;\">пн</span></p>",
                                                            align: "left",
                                                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                                                            textStyle: ["", "", "", "", "none"]
                                                        }]
                                                },
                                                {
                                                    id: 'msg1Copy',
                                                    type: 'group',
                                                    rect: ['15px', '60px', '211px', '56px', 'auto', 'auto'],
                                                    opacity: '0',
                                                    c: [
                                                        {
                                                            id: 'EllipseCopy',
                                                            type: 'ellipse',
                                                            rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                                                            borderRadius: ["50%", "50%", "50%", "50%"],
                                                            fill: ["rgba(255,152,0,1.00)"],
                                                            stroke: [0,"rgb(0, 0, 0)","none"]
                                                        },
                                                        {
                                                            id: 'Text2Copy',
                                                            type: 'text',
                                                            rect: ['15px', '4px', 'auto', 'auto', 'auto', 'auto'],
                                                            text: "<p style=\"margin: 0px;\">​<font size=\"5\">S</font></p>",
                                                            align: "left",
                                                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", "nowrap"],
                                                            textStyle: ["", "", "", "", "none"]
                                                        },
                                                        {
                                                            id: 'Text3Copy',
                                                            type: 'text',
                                                            rect: ['60px', '0px', '148px', '56px', 'auto', 'auto'],
                                                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0); font-weight: 700;\">SMS CLUB</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">​Вы успешно зарегистрированы</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">​</span><span style=\"color: rgb(0, 0, 0); font-weight: 400;\">пн</span></p>",
                                                            align: "left",
                                                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", ""],
                                                            textStyle: ["", "", "", "", "none"]
                                                        }]
                                                },
                                                {
                                                    id: 'msg1Copy2',
                                                    type: 'group',
                                                    rect: ['15', '60px', '211px', '56px', 'auto', 'auto'],
                                                    opacity: '0',
                                                    c: [
                                                        {
                                                            id: 'EllipseCopy2',
                                                            type: 'ellipse',
                                                            rect: ['0px', '0px', '45px', '45px', 'auto', 'auto'],
                                                            borderRadius: ["50%", "50%", "50%", "50%"],
                                                            fill: ["rgba(76,175,80,1.00)"],
                                                            stroke: [0,"rgb(0, 0, 0)","none"]
                                                        },
                                                        {
                                                            id: 'Text3Copy2',
                                                            type: 'text',
                                                            rect: ['60px', '0px', '148px', '56px', 'auto', 'auto'],
                                                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">PAY</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">Оплата успешно&nbsp;</span>произведена<span style=\"color: rgb(0, 0, 0); font-weight: 700;\"> </span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0); font-weight: 700;\">​</span><span style=\"color: rgb(0, 0, 0); font-weight: 400;\">пн</span></p>",
                                                            align: "left",
                                                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", ""],
                                                            textStyle: ["", "", "", "", "none"]
                                                        },
                                                        {
                                                            id: 'Text2Copy2',
                                                            type: 'text',
                                                            rect: ['15px', '4px', 'auto', 'auto', 'auto', 'auto'],
                                                            text: "<p style=\"margin: 0px;\">P</p>",
                                                            align: "left",
                                                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(255,255,255,1)", "300", "none", "normal", "break-word", "nowrap"],
                                                            textStyle: ["", "", "", "", "none"]
                                                        }]
                                                }]
                                        }]
                                }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '335px', 'auto', 'auto'],
                            sizeRange: ['','800px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "center": 3800
                    },
                    data: [
                        [
                            "eid14",
                            "location",
                            800,
                            400,
                            "easeOutQuad",
                            "${email5Copy4}",
                            [[560, 15, 0, 0, 0, 0,0],[416, 15, 0, 0, 0, 0,144]]
                        ],
                        [
                            "eid31",
                            "location",
                            2800,
                            400,
                            "easeOutQuad",
                            "${email5Copy3}",
                            [[570, 72, 0, 0, 0, 0,0],[406, 72, 0, 0, 0, 0,164]]
                        ],
                        [
                            "eid25",
                            "opacity",
                            1700,
                            133,
                            "easeOutQuad",
                            "${email5Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1967,
                            133,
                            "easeOutQuad",
                            "${email5Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "opacity",
                            800,
                            133,
                            "easeOutQuad",
                            "${email5Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1067,
                            133,
                            "easeOutQuad",
                            "${email5Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid33",
                            "opacity",
                            2800,
                            133,
                            "easeOutQuad",
                            "${email5Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            3067,
                            133,
                            "easeOutQuad",
                            "${email5Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "location",
                            250,
                            400,
                            "easeOutQuad",
                            "${blure_iphone2}",
                            [[98, 273.5, 0, 0, 0, 0,0],[98, 169.5, 0, 0, 0, 0,104]]
                        ],
                        [
                            "eid70",
                            "location",
                            4519,
                            385,
                            "easeOutQuad",
                            "${blure_iphone2}",
                            [[98, 169.52, 0, 0, 0, 0,0],[98, 274.51, 0, 0, 0, 0,105]]
                        ],
                        [
                            "eid23",
                            "location",
                            1700,
                            400,
                            "easeOutQuad",
                            "${email5Copy}",
                            [[15, 60, 0, 0, 0, 0,0],[153, 60, 0, 0, 0, 0,138]]
                        ],
                        [
                            "eid67",
                            "scaleX",
                            3529,
                            0,
                            "easeOutBack",
                            "${blure_iphone2}",
                            '0.98',
                            '0.98'
                        ],
                        [
                            "eid64",
                            "opacity",
                            250,
                            400,
                            "easeOutQuad",
                            "${blure_iphone2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            4519,
                            385,
                            "easeOutQuad",
                            "${blure_iphone2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "opacity",
                            400,
                            400,
                            "easeOutQuad",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "top",
                            400,
                            400,
                            "easeOutQuad",
                            "${Rectangle2}",
                            '-30px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "opacity",
                            100,
                            400,
                            "easeOutQuad",
                            "${WP_blure}",
                            '0',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            4400,
                            400,
                            "easeOutQuad",
                            "${WP_blure}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            3529,
                            0,
                            "easeOutBack",
                            "${blure_iphone2}",
                            '0.98',
                            '0.98'
                        ],
                        [
                            "eid59",
                            "location",
                            100,
                            400,
                            "easeOutQuad",
                            "${WP_blure}",
                            [[514, 303.98, 0, 0, 0, 0,0],[514, 200, 0, 0, 0, 0,103.98]]
                        ],
                        [
                            "eid71",
                            "location",
                            4400,
                            400,
                            "easeOutQuad",
                            "${WP_blure}",
                            [[514, 200, 0, 0, 0, 0,0],[514, 305.01, 0, 0, 0, 0,105.01]]
                        ],
                        [
                            "eid12",
                            "top",
                            400,
                            400,
                            "easeOutQuad",
                            "${Text}",
                            '-20px',
                            '13px'
                        ],
                        [
                            "eid8",
                            "opacity",
                            400,
                            400,
                            "easeOutQuad",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1200,
                            400,
                            "easeOutQuad",
                            "${msg1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            4000,
                            400,
                            "easeOutQuad",
                            "${msg1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid28",
                            "location",
                            2100,
                            400,
                            "easeOutQuad",
                            "${msg1}",
                            [[120.5, 88, 0, 0, 0, 0,0],[120.5, 160, 0, 0, 0, 0,72]]
                        ],
                        [
                            "eid37",
                            "location",
                            3200,
                            400,
                            "easeOutQuad",
                            "${msg1}",
                            [[120.5, 160, 0, 0, 0, 0,0],[120.5, 233, 0, 0, 0, 0,73]]
                        ],
                        [
                            "eid39",
                            "location",
                            4000,
                            400,
                            "easeOutQuad",
                            "${msg1}",
                            [[120.5, 233, 0, 0, 0, 0,0],[120.5, 285, 0, 0, 0, 0,52]]
                        ],
                        [
                            "eid48",
                            "left",
                            4000,
                            0,
                            "easeOutQuad",
                            "${phone}",
                            '171px',
                            '171px'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2300,
                            400,
                            "easeOutQuad",
                            "${msg1Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            4200,
                            400,
                            "easeOutQuad",
                            "${msg1Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            3400,
                            400,
                            "easeOutQuad",
                            "${msg1Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            4400,
                            400,
                            "easeOutQuad",
                            "${msg1Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid36",
                            "location",
                            3200,
                            400,
                            "easeOutQuad",
                            "${msg1Copy}",
                            [[120.5, 88, 0, 0, 0, 0,0],[120.5, 160, 0, 0, 0, 0,72]]
                        ],
                        [
                            "eid42",
                            "location",
                            4200,
                            400,
                            "easeOutQuad",
                            "${msg1Copy}",
                            [[120.5, 160, 0, 0, 0, 0,0],[120.5, 235, 0, 0, 0, 0,75]]
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            400,
                            "easeOutQuad",
                            "${phone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            4600,
                            400,
                            "easeOutQuad",
                            "${phone}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3",
                            "top",
                            0,
                            400,
                            "easeOutQuad",
                            "${phone}",
                            '90px',
                            '-110px'
                        ],
                        [
                            "eid19",
                            "top",
                            1700,
                            0,
                            "easeOutQuad",
                            "${phone}",
                            '-110px',
                            '-110px'
                        ],
                        [
                            "eid46",
                            "top",
                            4600,
                            400,
                            "easeOutQuad",
                            "${phone}",
                            '-110px',
                            '90px'
                        ],
                        [
                            "eid44",
                            "top",
                            4400,
                            400,
                            "easeOutQuad",
                            "${msg1Copy2}",
                            '60px',
                            '132px'
                        ]
                    ]
                }
            }
        };





    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("/edge/slider/slide_2_edgeActions.js");
})("EDGE-82590255");
