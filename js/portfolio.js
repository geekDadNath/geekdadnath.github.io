    var tree_structure = {
        chart: {
            container: "#geniebelt-portfolio",
            levelSeparation:    70,
            siblingSeparation:  60,
            nodeAlign: "BOTTOM",
            animateOnInit: true,            
            node: {
                collapsable: true
            },
            connectors: {
                type: "step",
                style: {
                    "stroke-width": 2,
                    "stroke": "#636769",
                    "arrow-end": "classic-wide-long"
                }
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            innerHTML: "#level1",
            children: [
                {
                    innerHTML: "#level2-1",
                    children: [
                        {
                            innerHTML: "#level2-1-level3-1",
                            children: [
                                {
                                    innerHTML: "#level2-1-level3-1-level4-1"
                                },
                            ]
                        },
                        {
                            innerHTML: "#level2-1-level3-2",
                            children: [
                                {
                                    innerHTML: "#level2-1-level3-2-level4-1"
                                },
                            ]
                        }
                    ]
                },
                {
                    innerHTML: "#level2-2",
                    children: [
                        {
                            innerHTML: "#level2-2-level3-1"
                        },
                        {
                            innerHTML: "#level2-2-level3-2"
                        }
                    ]
                },
                {
                    innerHTML: "#level2-3",
                    children: [
                        {
                            innerHTML: "#level2-3-level3-1"
                        },
                        {
                            innerHTML: "#level2-3-level3-2"
                        }
                    ]
                },
            ]
        }
    };
