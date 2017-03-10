var tree_structure = {
  chart: {
    container: "#geniebelt-portfolio",
    levelSeparation: 24,
    siblingSeparation: 16,
    subTeeSeparation: 48,
    nodeAlign: "TOP",
    animateOnInit: true,      
    node: {
      collapsable: true
    },
    connectors: {
      type: "step",
      style: {
        "stroke-width": 2,
        "stroke": "#dcdad2",
        "arrow-end": "classic-wide"
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
        collapsed: true,
        stackChildren: true,
        children: [
          {
            innerHTML: "#level2-1-level3-1"
          },
          {
            innerHTML: "#level2-1-level3-2"
          },
          {
            innerHTML: "#level2-1-level3-3"
          },
          {
            innerHTML: "#level2-1-level3-4"
          },
          {
            innerHTML: "#level2-1-level3-5"
          },
          {
            innerHTML: "#level2-1-level3-6"
          },
          {
            innerHTML: "#level2-1-level3-7"
          },
          {
            innerHTML: "#level2-1-level3-8"
          },
          {
            innerHTML: "#level2-1-level3-9"
          },
          {
            innerHTML: "#level2-1-level3-10"
          },
          {
            innerHTML: "#level2-1-level3-11"
          },
          {
            innerHTML: "#level2-1-level3-12"
          },
          {
            innerHTML: "#level2-1-level3-13"
          },
          {
            innerHTML: "#level2-1-level3-14"
          },
          {
            innerHTML: "#level2-1-level3-15"
          },
          {
            innerHTML: "#level2-1-level3-16"
          },
          {
            innerHTML: "#level2-1-level3-17"
          },
          {
            innerHTML: "#level2-1-level3-18"
          }
        ]
      },
      {
        innerHTML: "#level2-2",
        collapsed: true,
        stackChildren: true,
        children: [
          {
            innerHTML: "#level2-2-level3-1"
          }
        ]
      },
      {
        innerHTML: "#level2-3",
        collapsed: true,
        stackChildren: true,
        children: [
          {
            innerHTML: "#level2-3-level3-1"
          },
          {
            innerHTML: "#level2-3-level3-2"
          },
          {
            innerHTML: "#level2-3-level3-3"
          },
          {
            innerHTML: "#level2-3-level3-4"
          },
          {
            innerHTML: "#level2-3-level3-5"
          },
          {
            innerHTML: "#level2-3-level3-6"
          },
          {
            innerHTML: "#level2-3-level3-7"
          },
          {
            innerHTML: "#level2-3-level3-8"
          },
          {
            innerHTML: "#level2-3-level3-9"
          },
          {
            innerHTML: "#level2-3-level3-10"
          },
          {
            innerHTML: "#level2-3-level3-11"
          },
          {
            innerHTML: "#level2-3-level3-12"
          },
          {
            innerHTML: "#level2-3-level3-13"
          },
          {
            innerHTML: "#level2-3-level3-14"
          }
        ]
      },
      {
        innerHTML: "#level2-4",
        collapsed: true,
        stackChildren: true,
        children: [
          {
            innerHTML: "#level2-4-level3-1"
          },
          {
            innerHTML: "#level2-4-level3-2"
          },
          {
            innerHTML: "#level2-4-level3-3"
          },
          {
            innerHTML: "#level2-4-level3-4"
          },
          {
            innerHTML: "#level2-4-level3-5"
          },
          {
            innerHTML: "#level2-4-level3-6"
          },
          {
            innerHTML: "#level2-4-level3-7"
          },
          {
            innerHTML: "#level2-4-level3-8"
          },
          {
            innerHTML: "#level2-4-level3-9"
          },
          {
            innerHTML: "#level2-4-level3-10"
          },
          {
            innerHTML: "#level2-4-level3-11"
          },
          {
            innerHTML: "#level2-4-level3-12"
          },
          {
            innerHTML: "#level2-4-level3-13"
          },
          {
            innerHTML: "#level2-4-level3-14"
          },
          {
            innerHTML: "#level2-4-level3-15"
          },
          {
            innerHTML: "#level2-4-level3-16"
          },
          {
            innerHTML: "#level2-4-level3-17"
          },
          {
            innerHTML: "#level2-4-level3-18"
          },
          {
            innerHTML: "#level2-4-level3-19"
          },
          {
            innerHTML: "#level2-4-level3-20"
          }
        ]
      },
      {
        innerHTML: "#level2-5",
        collapsed: true,
        stackChildren: true,
        children: [
          {
            innerHTML: "#level2-5-level3-1"
          },
          {
            innerHTML: "#level2-5-level3-2"
          }
        ]
      },
      {
        innerHTML: "#level2-6",
        collapsed: true,
        stackChildren: true,
        children: [
          {
            innerHTML: "#level2-6-level3-1"
          },
          {
            innerHTML: "#level2-6-level3-2"
          },
          {
            innerHTML: "#level2-6-level3-3"
          }
        ]
      },
    ]
  }
};