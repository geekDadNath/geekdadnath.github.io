var tree_structure = {
  chart: {
    container: "#geniebelt-portfolio",
    levelSeparation: 36,
    siblingSeparation: 12,
    subTeeSeparation: 24,
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
      }
    },
    animation: {
      nodeAnimation: "easeOut",
      nodeSpeed: 700,
      connectorsAnimation: "easeOut",
      connectorsSpeed: 700
    }
  },
  nodeStructure: {
    innerHTML: "#level1",
    children: [
      {
        innerHTML: "#level2-1",
        collapsed: true,
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
          }
        ]
      },
      {
        innerHTML: "#level2-2",
        collapsed: true,
        childrenDropLevel: 1,
        children: [
          {
            innerHTML: "#level2-2-level3-1"
          },
          {
            innerHTML: "#level2-2-level3-2"
          },
          {
            innerHTML: "#level2-2-level3-3"
          },
          {
            innerHTML: "#level2-2-level3-4"
          }
        ]
      },
      {
        innerHTML: "#level2-3",
        collapsed: true,
        childrenDropLevel: 2,
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
          }
        ]
      },
      {
        innerHTML: "#level2-4",
        collapsed: true,
        childrenDropLevel: 3,
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
          }
        ]
      },
      {
        innerHTML: "#level2-5",
        collapsed: true,
        childrenDropLevel: 4,
        children: [
          {
            innerHTML: "#level2-5-level3-1"
          },
          {
            innerHTML: "#level2-5-level3-2"
          },
          {
            innerHTML: "#level2-5-level3-3"
          },
          {
            innerHTML: "#level2-5-level3-4"
          }
        ]
      },
    ]
  }
};