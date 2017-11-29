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
                            id: 'wordpress2',
                            type: 'image',
                            rect: ['535px', '126px', '150px', '35px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"wordpress.png",'0px','0px']
                        },
                        {
                            id: 'bitrix242',
                            type: 'image',
                            rect: ['113px', '130px', '150px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bitrix24.png",'0px','0px']
                        },
                        {
                            id: 'opencart1',
                            type: 'image',
                            rect: ['117px', '230px', '150px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"opencart1.png",'0px','0px']
                        },
                        {
                            id: 'yii2',
                            type: 'image',
                            rect: ['535px', '228px', '150px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"yii2.png",'0px','0px']
                        },
                        {
                            id: 'mac',
                            type: 'group',
                            rect: ['234px', '215px', '601px', '300px', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                                {
                                    id: 'macbook',
                                    type: 'image',
                                    rect: ['0px', '0px', '601px', '300px', 'auto', 'auto'],
                                    opacity: '1',
                                    fill: ["rgba(0,0,0,0)",im+"macbook.png",'0px','0px']
                                },
                                {
                                    id: 'smsclub',
                                    type: 'image',
                                    rect: ['173px', '103px', '255px', '90px', 'auto', 'auto'],
                                    opacity: '0',
                                    fill: ["rgba(0,0,0,0)",im+"smsclub.png",'0px','0px']
                                }]
                        },
                        {
                            id: '_1c',
                            type: 'image',
                            rect: ['86px', '161px', '53px', '30px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"1c.png",'0px','0px']
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
                    duration: 2600,
                    autoPlay: true,
                    labels: {
                        "center": 1600
                    },
                    data: [
                        [
                            "eid12",
                            "location",
                            0,
                            400,
                            "easeOutQuad",
                            "${mac}",
                            [[399.5, 345, 0, 0, 0, 0,0],[399.5, 185, 0, 0, 0, 0,160]]
                        ],
                        [
                            "eid60",
                            "location",
                            2200,
                            400,
                            "easeOutQuad",
                            "${mac}",
                            [[399.5, 215, 0, 0, 0, 0,0],[399.5, 345, 0, 0, 0, 0,130]]
                        ],
                        [
                            "eid81",
                            "location",
                            800,
                            400,
                            "easeOutQuad",
                            "${wordpress2}",
                            [[610, 143.75, 0, 0, 0, 0,0],[705, 143.25, 0, 0, 0, 0,95]]
                        ],
                        [
                            "eid95",
                            "location",
                            1600,
                            400,
                            "easeOutQuad",
                            "${wordpress2}",
                            [[705, 143.5, 0, 0, 0, 0,0],[610, 143.5, 0, 0, 0, 0,95]]
                        ],
                        [
                            "eid74",
                            "left",
                            400,
                            0,
                            "linear",
                            "${smsclub}",
                            '173px',
                            '173px'
                        ],
                        [
                            "eid83",
                            "opacity",
                            800,
                            400,
                            "easeOutQuad",
                            "${wordpress2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            1600,
                            400,
                            "easeOutQuad",
                            "${wordpress2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid91",
                            "left",
                            1200,
                            400,
                            "easeOutQuad",
                            "${yii2}",
                            '535px',
                            '630px'
                        ],
                        [
                            "eid97",
                            "left",
                            1800,
                            400,
                            "easeOutQuad",
                            "${yii2}",
                            '630px',
                            '535px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            1200,
                            400,
                            "easeOutQuad",
                            "${opencart1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            1800,
                            400,
                            "easeOutQuad",
                            "${opencart1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14",
                            "opacity",
                            0,
                            400,
                            "easeOutQuad",
                            "${mac}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "opacity",
                            2200,
                            400,
                            "easeOutQuad",
                            "${mac}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "opacity",
                            800,
                            400,
                            "easeOutQuad",
                            "${bitrix242}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            1600,
                            400,
                            "easeOutQuad",
                            "${bitrix242}",
                            '1',
                            '0'
                        ],
                        [
                            "eid92",
                            "opacity",
                            1200,
                            400,
                            "easeOutQuad",
                            "${yii2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid98",
                            "opacity",
                            1800,
                            400,
                            "easeOutQuad",
                            "${yii2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "opacity",
                            400,
                            400,
                            "easeOutQuad",
                            "${smsclub}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "left",
                            800,
                            400,
                            "easeOutQuad",
                            "${bitrix242}",
                            '113px',
                            '18px'
                        ],
                        [
                            "eid93",
                            "left",
                            1600,
                            400,
                            "easeOutQuad",
                            "${bitrix242}",
                            '18px',
                            '113px'
                        ],
                        [
                            "eid75",
                            "top",
                            400,
                            0,
                            "linear",
                            "${smsclub}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid87",
                            "left",
                            1200,
                            400,
                            "easeOutQuad",
                            "${opencart1}",
                            '117px',
                            '22px'
                        ],
                        [
                            "eid99",
                            "left",
                            1800,
                            400,
                            "easeOutQuad",
                            "${opencart1}",
                            '22px',
                            '117px'
                        ]
                    ]
                }
            }
        };



    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("/edge/slider/slide_3_edgeActions.js");
})("EDGE-184324720");
