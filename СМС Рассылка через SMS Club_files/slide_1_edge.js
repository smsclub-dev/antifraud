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
                            id: 'window',
                            type: 'group',
                            rect: ['0px', '300px', '800', '600', 'auto', 'auto'],
                            opacity: '0',
                            userClass: "safari-window",
                            c: [
                                {
                                    id: 'safari',
                                    type: 'image',
                                    rect: ['0px', '0px', '800px', '600px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"safari.png",'0px','0px']
                                },
                                {
                                    id: 'Rectangle',
                                    type: 'rect',
                                    rect: ['1px', '42px', '798px', '316px', 'auto', 'auto'],
                                    fill: ["rgba(236,240,245,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'interface',
                                    type: 'group',
                                    rect: ['1px', '42', '798', '316', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    opacity: '1',
                                    userClass: "",
                                    c: [
                                        {
                                            id: 'i_sidabar',
                                            type: 'image',
                                            rect: ['-150px', '0px', '150px', '447px', 'auto', 'auto'],
                                            opacity: '0',
                                            fill: ["rgba(0,0,0,0)",im+"i_sidabar.png",'0px','0px']
                                        },
                                        {
                                            id: 'i_header',
                                            type: 'image',
                                            rect: ['150px', '-30px', '649px', '30px', 'auto', 'auto'],
                                            opacity: '0',
                                            fill: ["rgba(0,0,0,0)",im+"i_header.png",'0px','0px']
                                        },
                                        {
                                            id: 'i_content2',
                                            type: 'image',
                                            rect: ['162px', '100px', '623px', '307px', 'auto', 'auto'],
                                            opacity: '0',
                                            fill: ["rgba(0,0,0,0)",im+"i_content2.png",'0px','0px']
                                        }]
                                },
                                {
                                    id: 'Text',
                                    type: 'text',
                                    rect: ['129px', '21px', 'auto', 'auto', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Tahoma, Geneva, sans-serif; font-size: 11px;\">smsclub.mobi/cabinet</span></p>",
                                    font: ['Arial, Helvetica, sans-serif', [11, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                                }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '310px', 'auto', 'auto'],
                            sizeRange: ['','800px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2300,
                    autoPlay: false,
                    labels: {
                        "center": 1300
                    },
                    data: [
                        [
                            "eid12",
                            "top",
                            750,
                            400,
                            "easeOutQuad",
                            "${i_header}",
                            '-30px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "top",
                            1500,
                            400,
                            "easeOutQuad",
                            "${i_header}",
                            '0px',
                            '-30px'
                        ],
                        [
                            "eid13",
                            "opacity",
                            750,
                            400,
                            "easeOutQuad",
                            "${i_header}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1500,
                            400,
                            "easeOutQuad",
                            "${i_header}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "opacity",
                            0,
                            400,
                            "easeOutQuad",
                            "${window}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1900,
                            400,
                            "easeOutQuad",
                            "${window}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            400,
                            "easeOutQuad",
                            "${window}",
                            '300px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "top",
                            1900,
                            400,
                            "easeOutQuad",
                            "${window}",
                            '0px',
                            '300px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            900,
                            400,
                            "easeOutQuad",
                            "${i_content2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1300,
                            400,
                            "easeOutQuad",
                            "${i_content2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "left",
                            500,
                            400,
                            "easeOutQuad",
                            "${i_sidabar}",
                            '-150px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            1700,
                            400,
                            "easeOutQuad",
                            "${i_sidabar}",
                            '0px',
                            '-150px'
                        ],
                        [
                            "eid16",
                            "top",
                            900,
                            400,
                            "easeOutQuad",
                            "${i_content2}",
                            '100px',
                            '43px'
                        ],
                        [
                            "eid19",
                            "top",
                            1300,
                            400,
                            "easeOutQuad",
                            "${i_content2}",
                            '43px',
                            '100px'
                        ],
                        [
                            "eid27",
                            "left",
                            1300,
                            0,
                            "easeOutQuad",
                            "${window}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid9",
                            "opacity",
                            500,
                            400,
                            "easeOutQuad",
                            "${i_sidabar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1700,
                            400,
                            "easeOutQuad",
                            "${i_sidabar}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };


    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("/edge/slider/slide_1_edgeActions.js");
})("EDGE-slide1");
