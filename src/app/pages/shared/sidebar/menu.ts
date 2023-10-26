import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "MENUITEMS.MENU.TEXT",
    isTitle: true,
  },
  {
    id: 2,
    label: "MENUITEMS.DASHBOARD.TEXT",
    icon: "ri-dashboard-2-line",
    link: "/",
  },
  {
    id: 200,
    label: "MENUITEMS.LEADS.TEXT",
    icon: "ri-rocket-line",
    subItems: [
      {
        id: 201,
        label: "MENUITEMS.LEADS.LIST.LIST",
        link: "/leads",
        parentId: 200,
      },
    ],
  },
  {
    id: 97,
    label: "HEADER.MORE.TEXT",
    icon: "ri-briefcase-2-line",
    subItems: [
      {
        id: 121,
        label: "MENUITEMS.ADVANCEUI.TEXT",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 122,
            label: "MENUITEMS.ADVANCEUI.LIST.SWEETALERTS",
            link: "/advance-ui/sweetalerts",
            parentId: 121,
          },
          {
            id: 124,
            label: "MENUITEMS.ADVANCEUI.LIST.SCROLLBAR",
            link: "/advance-ui/scrollbar",
            parentId: 121,
          },
          {
            id: 126,
            label: "MENUITEMS.ADVANCEUI.LIST.TOUR",
            link: "/advance-ui/tour",
            parentId: 121,
          },
          {
            id: 127,
            label: "MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER",
            link: "/advance-ui/swiper",
            parentId: 121,
          },
          {
            id: 128,
            label: "MENUITEMS.ADVANCEUI.LIST.RATTINGS",
            link: "/advance-ui/ratings",
            parentId: 121,
          },
          {
            id: 129,
            label: "MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT",
            link: "/advance-ui/highlight",
            parentId: 121,
          },
          {
            id: 130,
            label: "MENUITEMS.ADVANCEUI.LIST.SCROLLSPY",
            link: "/advance-ui/scrollspy",
            parentId: 121,
          },
        ],
      },
      {
        id: 131,
        label: "MENUITEMS.WIDGETS.TEXT",
        icon: "ri-honour-line",
        link: "/widgets",
      },
      {
        id: 132,
        label: "MENUITEMS.FORMS.TEXT",
        icon: "ri-file-list-3-line",
        subItems: [
          {
            id: 133,
            label: "MENUITEMS.FORMS.LIST.BASICELEMENTS",
            link: "/forms/basic",
            parentId: 132,
          },
          {
            id: 134,
            label: "MENUITEMS.FORMS.LIST.FORMSELECT",
            link: "/forms/select",
            parentId: 132,
          },
          {
            id: 135,
            label: "MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS",
            link: "/forms/checkboxs-radios",
            parentId: 132,
          },
          {
            id: 136,
            label: "MENUITEMS.FORMS.LIST.PICKERS",
            link: "/forms/pickers",
            parentId: 132,
          },
          {
            id: 137,
            label: "MENUITEMS.FORMS.LIST.INPUTMASKS",
            link: "/forms/masks",
            parentId: 132,
          },
          {
            id: 138,
            label: "MENUITEMS.FORMS.LIST.ADVANCED",
            link: "/forms/advanced",
            parentId: 132,
          },
          {
            id: 139,
            label: "MENUITEMS.FORMS.LIST.RANGESLIDER",
            link: "/forms/range-sliders",
            parentId: 132,
          },
          {
            id: 140,
            label: "MENUITEMS.FORMS.LIST.VALIDATION",
            link: "/forms/validation",
            parentId: 132,
          },
          {
            id: 141,
            label: "MENUITEMS.FORMS.LIST.WIZARD",
            link: "/forms/wizard",
            parentId: 132,
          },
          {
            id: 142,
            label: "MENUITEMS.FORMS.LIST.EDITORS",
            link: "/forms/editors",
            parentId: 132,
          },
          {
            id: 143,
            label: "MENUITEMS.FORMS.LIST.FILEUPLOADS",
            link: "/forms/file-uploads",
            parentId: 132,
          },
          {
            id: 144,
            label: "MENUITEMS.FORMS.LIST.FORMLAYOUTS",
            link: "/forms/layouts",
            parentId: 132,
          },
        ],
      },
      {
        id: 145,
        label: "MENUITEMS.TABLES.TEXT",
        icon: "ri-layout-grid-line",
        subItems: [
          {
            id: 146,
            label: "MENUITEMS.TABLES.LIST.BASICTABLES",
            link: "/tables/basic",
            parentId: 145,
          },
          {
            id: 147,
            label: "MENUITEMS.TABLES.LIST.GRIDJS",
            link: "/tables/gridjs",
            parentId: 145,
          },
          {
            id: 148,
            label: "MENUITEMS.TABLES.LIST.LISTJS",
            link: "/tables/listjs",
            parentId: 145,
          },
        ],
      },
      {
        id: 149,
        label: "MENUITEMS.CHARTS.TEXT",
        icon: "ri-pie-chart-line",
        subItems: [
          {
            id: 150,
            label: "MENUITEMS.CHARTS.LIST.APEXCHARTS",
            parentId: 149,
            subItems: [
              {
                id: 151,
                label: "MENUITEMS.CHARTS.LIST.LINE",
                link: "/charts/apex-line",
                parentId: 150,
              },
              {
                id: 152,
                label: "MENUITEMS.CHARTS.LIST.AREA",
                link: "/charts/apex-area",
                parentId: 150,
              },
              {
                id: 153,
                label: "MENUITEMS.CHARTS.LIST.COLUMN",
                link: "/charts/apex-column",
                parentId: 150,
              },
              {
                id: 154,
                label: "MENUITEMS.CHARTS.LIST.BAR",
                link: "/charts/apex-bar",
                parentId: 150,
              },
              {
                id: 155,
                label: "MENUITEMS.CHARTS.LIST.MIXED",
                link: "/charts/apex-mixed",
                parentId: 150,
              },
              {
                id: 156,
                label: "MENUITEMS.CHARTS.LIST.TIMELINE",
                link: "/charts/apex-timeline",
                parentId: 150,
              },
              {
                id: 157,
                label: "MENUITEMS.CHARTS.LIST.RANGEAREA",
                link: "/charts/range-area",
                badge: {
                  variant: "bg-success",
                  text: "MENUITEMS.DASHBOARD.BADGE",
                },
                parentId: 150,
              },
              {
                id: 15,
                label: "MENUITEMS.CHARTS.LIST.FUNNEL",
                link: "/charts/funnel",
                badge: {
                  variant: "bg-success",
                  text: "MENUITEMS.DASHBOARD.BADGE",
                },
                parentId: 150,
              },
              {
                id: 158,
                label: "MENUITEMS.CHARTS.LIST.CANDLSTICK",
                link: "/charts/apex-candlestick",
                parentId: 150,
              },
              {
                id: 159,
                label: "MENUITEMS.CHARTS.LIST.BOXPLOT",
                link: "/charts/apex-boxplot",
                parentId: 150,
              },
              {
                id: 160,
                label: "MENUITEMS.CHARTS.LIST.BUBBLE",
                link: "/charts/apex-bubble",
                parentId: 150,
              },
              {
                id: 161,
                label: "MENUITEMS.CHARTS.LIST.SCATTER",
                link: "/charts/apex-scatter",
                parentId: 150,
              },
              {
                id: 162,
                label: "MENUITEMS.CHARTS.LIST.HEATMAP",
                link: "/charts/apex-heatmap",
                parentId: 150,
              },
              {
                id: 163,
                label: "MENUITEMS.CHARTS.LIST.TREEMAP",
                link: "/charts/apex-treemap",
                parentId: 150,
              },
              {
                id: 164,
                label: "MENUITEMS.CHARTS.LIST.PIE",
                link: "/charts/apex-pie",
                parentId: 150,
              },
              {
                id: 165,
                label: "MENUITEMS.CHARTS.LIST.RADIALBAR",
                link: "/charts/apex-radialbar",
                parentId: 150,
              },
              {
                id: 166,
                label: "MENUITEMS.CHARTS.LIST.RADAR",
                link: "/charts/apex-radar",
                parentId: 150,
              },
              {
                id: 167,
                label: "MENUITEMS.CHARTS.LIST.POLARAREA",
                link: "/charts/apex-polar",
                parentId: 150,
              },
            ],
          },
          {
            id: 168,
            label: "MENUITEMS.CHARTS.LIST.CHARTJS",
            link: "/charts/chartjs",
            parentId: 149,
          },
          {
            id: 169,
            label: "MENUITEMS.CHARTS.LIST.ECHARTS",
            link: "/charts/echarts",
            parentId: 149,
          },
        ],
      },
      {
        id: 170,
        label: "MENUITEMS.ICONS.TEXT",
        icon: "ri-compasses-2-line",
        subItems: [
          {
            id: 171,
            label: "MENUITEMS.ICONS.LIST.REMIX",
            link: "/icons/remix",
            parentId: 170,
          },
          {
            id: 172,
            label: "MENUITEMS.ICONS.LIST.BOXICONS",
            link: "/icons/boxicons",
            parentId: 170,
          },
          {
            id: 173,
            label: "MENUITEMS.ICONS.LIST.MATERIALDESIGN",
            link: "/icons/materialdesign",
            parentId: 170,
          },
          {
            id: 174,
            label: "MENUITEMS.ICONS.LIST.LINEAWESOME",
            link: "/icons/lineawesome",
            parentId: 170,
          },
          {
            id: 175,
            label: "MENUITEMS.ICONS.LIST.FEATHER",
            link: "/icons/feather",
            parentId: 170,
          },
          {
            id: 176,
            label: "MENUITEMS.ICONS.LIST.CRYPTOSVG",
            link: "/icons/icons-crypto",
            parentId: 170,
          },
        ],
      },
      {
        id: 175,
        label: "MENUITEMS.MAPS.TEXT",
        icon: "ri-map-pin-line",
        subItems: [
          {
            id: 176,
            label: "MENUITEMS.MAPS.LIST.GOOGLE",
            link: "/maps/google",
            parentId: 175,
          },
          {
            id: 178,
            label: "MENUITEMS.MAPS.LIST.LEAFLET",
            link: "/maps/leaflet",
            parentId: 175,
          },
        ],
      },
      {
        id: 179,
        label: "MENUITEMS.MULTILEVEL.TEXT",
        icon: "ri-share-line",
        subItems: [
          {
            id: 180,
            label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.1",
            parentId: 179,
          },
          {
            id: 181,
            label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.2",
            subItems: [
              {
                id: 182,
                label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1",
                parentId: 181,
              },
              {
                id: 183,
                label: "MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2",
                parentId: 181,
              },
            ],
          },
        ],
      },
    ],
  },
];
