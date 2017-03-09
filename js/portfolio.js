var tree_structure = {
  chart: {
    container: "#geniebelt-portfolio",
    levelSeparation: 48,
    siblingSeparation: 24,
    subTeeSeparation: 32,
    nodeAlign: "TOP",
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
        collapsed: true,
        children: [
          {
            innerHTML: "#level2-1-level3-1",
            collapsed: true,
            stackChildren: true,
            children: [
              {
                innerHTML: "#level2-1-level3-1-level4-1"
              },
              {
                innerHTML: "#level2-1-level3-1-level4-2"
              },
              {
                innerHTML: "#level2-1-level3-1-level4-3"
              },
              {
                innerHTML: "#level2-1-level3-1-level4-4"
              },
              {
                innerHTML: "#level2-1-level3-1-level4-5"
              },
              {
                innerHTML: "#level2-1-level3-1-level4-6"
              },
            ]
          },
          {
            innerHTML: "#level2-1-level3-2",
            collapsed: true,
            stackChildren: true,
            children: [
              {
                innerHTML: "#level2-1-level3-2-level4-1"
              },
              {
                innerHTML: "#level2-1-level3-2-level4-2"
              },
            ]
          },
          {
            innerHTML: "#level2-1-level3-3",
            collapsed: true,
            stackChildren: true,
            children: [
              {
                innerHTML: "#level2-1-level3-3-level4-1"
              },
              {
                innerHTML: "#level2-1-level3-3-level4-2"
              },
            ]
          },
          {
            innerHTML: "#level2-1-level3-4"
          }
        ]
      },
      {
        childrenDropLevel: 1,
        innerHTML: "#level2-2",
        collapsed: true,
        children: [
          {
            innerHTML: "#level2-2-level3-1",
            collapsed: true,
            stackChildren: true,
            children: [
              {
                innerHTML: "#level2-2-level3-1-level4-1"
              },
              {
                innerHTML: "#level2-2-level3-1-level4-2"
              },
              {
                innerHTML: "#level2-2-level3-1-level4-3"
              },
            ]
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
          }
        ]
      },
      {
        childrenDropLevel: 1,
        innerHTML: "#level2-4",
        collapsed: true,
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
        childrenDropLevel: 1,
        innerHTML: "#level2-6",
        collapsed: true,
        children: [
          {
            innerHTML: "#level2-6-level3-1"
          },
          {
            innerHTML: "#level2-6-level3-2"
          }
        ]
      },
    ]
  }
};