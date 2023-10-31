import { MenuItem } from "./menu.model";

export const SUBMENU: MenuItem[] = [
  //   {
  //     id: 1,
  //     label: "MENU",
  //     isTitle: true,
  //   },
  //   {
  //     id: 2,
  //     label: "DASHBOARD",
  //     icon: "ri-dashboard-2-line",
  //     link: "/",
  //   },
  {
    id: 3,
    label: "LEADS",
    icon: "ri-rocket-line",
    subItems: [
      {
        id: 301,
        label: "Leads",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 30109,
            label: "All Leads",
            link: "/leads",
            parentId: 301,
          },
          {
            id: 30110,
            label: "Accounts",
            link: "/leads/accounts",
            parentId: 301,
          },
          {
            id: 30111,
            label: "Contacts",
            link: "/leads/accounts",
            parentId: 301,
          },
          {
            id: 30112,
            label: "Opportunities",
            link: "/leads/accounts",
            parentId: 301,
          },
          {
            id: 30113,
            label: "Quotations",
            link: "/leads/accounts",
            parentId: 301,
          },
        ],
      },
      {
        id: 302,
        label: "Reservations ",
        link: "/reservations",
        parentId: 302,
      },
      {
        id: 303,
        label: "Contacts ",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 30310,
            label: "Contracts",
            link: "/leads/accounts",
            parentId: 303,
          },
          {
            id: 30311,
            label: "Addendums",
            link: "/leads/accounts",
            parentId: 303,
          },
          {
            id: 30312,
            label: "Terminations",
            link: "/leads/accounts",
            parentId: 303,
          },
          {
            id: 30313,
            label: "Temporary lease extensions",
            link: "/leads/accounts",
            parentId: 303,
          },
        ],
      },
      {
        id: 304,
        label: "Configurations",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 30410,
            label: "Lead sources",
            link: "/leads/accounts",
            parentId: 304,
          },
          {
            id: 30411,
            label: "Property locations",
            link: "/leads/accounts",
            parentId: 304,
          },
          {
            id: 30412,
            label: "Neighborhood ",
            link: "/leads/accounts",
            parentId: 304,
          },
          {
            id: 30413,
            label: "Lead stages ",
            link: "/leads/accounts",
            parentId: 304,
          },
          {
            id: 30414,
            label: "Lost reasons ",
            link: "/leads/accounts",
            parentId: 304,
          },
          {
            id: 30415,
            label: "Nationalities ",
            link: "/leads/accounts",
            parentId: 304,
          },
        ],
      },
      {
        id: 305,
        label: "External Agencies",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 30510,
            label: "Agencies ",
            link: "/leads/accounts",
            parentId: 305,
          },
          {
            id: 30511,
            label: "Bookings and Commissions",
            link: "/leads/accounts",
            parentId: 305,
          },
        ],
      },
      {
        id: 306,
        label: "Activities",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 30610,
            label: "Tasks ",
            link: "/leads/accounts",
            parentId: 306,
          },
          {
            id: 30611,
            label: "Appointments ",
            link: "/leads/accounts",
            parentId: 306,
          },
        ],
      },
      {
        id: 307,
        label: "Accounts",
        link: "/accounts",
        parentId: 3,
      },

      {
        id: 308,
        label: "Opportunities ",
        link: "/opportunities",
        parentId: 3,
      },
      {
        id: 309,
        label: "Quotations ",
        link: "/quotations",
        parentId: 3,
      },

      {
        id: 310,
        label: "Contracts ",
        link: "/contracts ",
        parentId: 3,
      },
      {
        id: 311,
        label: "Addendums ",
        link: "/addendums ",
        parentId: 3,
      },
      {
        id: 312,
        label: "Terminations ",
        link: "/terminations ",
        parentId: 3,
      },
      {
        id: 313,
        label: "Temporary lease extensions",
        link: "/lease-extensions",
        parentId: 3,
      },
      {
        id: 314,
        label: "Configurations ",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 31410,
            label: "Lead sources",
            link: "/configurations /sweetalerts",
            parentId: 314,
          },
          {
            id: 31411,
            label: "Property Locations",
            link: "/configurations /sweetalerts",
            parentId: 314,
          },
          {
            id: 31412,
            label: "Neighborhood  ",
            link: "/configurations /sweetalerts",
            parentId: 314,
          },
          {
            id: 31413,
            label: "Lead Stages",
            link: "/configurations /sweetalerts",
            parentId: 314,
          },
          {
            id: 31414,
            label: "Lost Reasons",
            link: "/configurations /sweetalerts",
            parentId: 314,
          },
          {
            id: 31415,
            label: "Nationalities",
            link: "/configurations /sweetalerts",
            parentId: 314,
          },
        ],
      },
      {
        id: 315,
        label: "External Agencies",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 31510,
            label: "Agencies  ",
            link: "/externalagencies/sweetalerts",
            parentId: 315,
          },
          {
            id: 31511,
            label: "Bookings and Commissions",
            link: "/externalagencies/sweetalerts",
            parentId: 315,
          },
        ],
      },
      {
        id: 316,
        label: "Activities ",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 31610,
            label: "Tasks  ",
            link: "/activities/sweetalerts",
            parentId: 316,
          },
          {
            id: 31611,
            label: "Appointments  ",
            link: "/activities/sweetalerts",
            parentId: 316,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "PROPERTIES",
    icon: "ri-rocket-line",
    subItems: [
      {
        id: 411,
        label: "Properties",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 41110,
            label: "Company codes",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
          {
            id: 41111,
            label: "Buildings",
            link: "/configurations /sweetalerts",
            parentId: 311,
          },
          {
            id: 41112,
            label: "Business Entities",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
          {
            id: 41113,
            label: "Building Types",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
          {
            id: 41114,
            label: "Unit Types",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
          {
            id: 41115,
            label: "Units ",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
          {
            id: 41116,
            label: "Parking ",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
          {
            id: 41117,
            label: "Utilities ",
            link: "/configurations /sweetalerts",
            parentId: 411,
          },
        ],
      },
      {
        id: 412,
        label: "Pricing",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 41210,
            label: "Unit pricing ",
            link: "/externalagencies/sweetalerts",
            parentId: 412,
          },
          {
            id: 41211,
            label: "Utility pricing ",
            link: "/externalagencies/sweetalerts",
            parentId: 412,
          },
        ],
      },

      {
        id: 413,
        label: "Unit Occupancies",
        link: "/unit",
        parentId: 4,
      },
      {
        id: 414,
        label: "Parking Allocation",
        link: "/accounts",
        parentId: 4,
      },
      {
        id: 415,
        label: "Vendors ",
        link: "/contacts",
        parentId: 4,
      },
      {
        id: 416,
        label: "Services ",
        link: "/opportunities",
        parentId: 4,
      },
    ],
  },
  {
    id: 5,
    label: "TENANTS ",
    icon: "ri-rocket-line",
    subItems: [
      {
        id: 501,
        label: "Tenants and Companions",
        link: "/tenents",
        parentId: 5,
      },
      {
        id: 502,
        label: "Move in",
        link: "/accounts",
        parentId: 5,
      },
      {
        id: 503,
        label: "Move out  ",
        link: "/contacts",
        parentId: 5,
      },
      {
        id: 504,
        label: "Service requests  ",
        link: "/opportunities",
        parentId: 5,
      },
      {
        id: 505,
        label: "Support tickets/maintenance requests",
        link: "/quotations",
        parentId: 5,
      },
      {
        id: 506,
        label: "Announcements ",
        link: "/reservations",
        parentId: 5,
      },
      {
        id: 507,
        label: "Warnings ",
        link: "/contracts ",
        parentId: 5,
      },
      {
        id: 508,
        label: "Greetings ",
        link: "/addendums ",
        parentId: 5,
      },
      {
        id: 509,
        label: "Blacklisted  ",
        link: "/terminations ",
        parentId: 5,
      },
      {
        id: 510,
        label: "Visitors / Deliveries ",
        link: "/lease-extensions",
        parentId: 5,
      },
      {
        id: 511,
        label: "Compensations  ",
        link: "/lease-extensions",
        parentId: 5,
      },
      {
        id: 512,
        label: "Non renewals ",
        link: "/lease-extensions",
        parentId: 5,
      },
    ],
  },
  {
    id: 6,
    label: "SETTINGS",
    icon: "ri-rocket-line",
    subItems: [
      {
        id: 610,
        label: "Workflows",
        icon: "ri-stack-line",
        link: "/reservations",
        parentId: 6,
      },
      {
        id: 611,
        label: "SLA",
        icon: "ri-stack-line",
        link: "/reservations",
        parentId: 6,
      },
      {
        id: 612,
        label: "Email templates",
        icon: "ri-stack-line",
        link: "/reservations",
        parentId: 6,
      },
      {
        id: 613,
        label: "CMS",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 61310,
            label: "FAQ",
            link: "/externalagencies/sweetalerts",
            parentId: 613,
          },
          {
            id: 61311,
            label: "Terms and conditions ",
            link: "/externalagencies/sweetalerts",
            parentId: 613,
          },
        ],
      },
      {
        id: 614,
        label: "Third party configurations",
        icon: "ri-stack-line",
        subItems: [
          {
            id: 61410,
            label: "Whatsapp ",
            link: "/externalagencies/sweetalerts",
            parentId: 614,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "REPORTS",
    icon: "ri-rocket-line",
    subItems: [
      {
        id: 710,
        label: "Reports",
        icon: "ri-stack-line",
        link: "/reservations",
        parentId: 7,
      },
      {
        id: 711,
        label: "analytics",
        icon: "ri-stack-line",
        link: "/reservations",
        parentId: 7,
      },
    ],
  },
  {
    id: 8,
    label: "APPROVALS",
    icon: "ri-rocket-line",
    link: "/approvals",
  },
  {
    id: 9,
    label: "USERS",
    icon: "ri-rocket-line",
    link: "/users",
  },
];
