import {
  LeadsOwner,
  LeadSource,
  MaritalStatus,
  LeadStatus,
  Nationality,
} from "./property.model";
const Leads = [
  {
    statusCode: 200,
    message: "Leads list",
    data: [
      {
        leadId: 12912,
        leadName: "Muhammed Al Jasser",
        phoneNumber: "55132657",
        email: "muhammmed98@gmail.com",
        type: "Residential",
        leadSource: "Facebook",
        leadOwner: "Mariana John",
        status: 1,
        CreatedOn: "24 sep 2023 09:34 am",
        profile: "assets/images/users/avatar-1.jpg",
        state: false,
      },
      {
        leadId: 12913,
        leadName: "Ahammed Munneb",
        phoneNumber: "55132657",
        email: "muneeb007@gmail.com",
        type: "Residential",
        leadSource: "Facebook",
        leadOwner: "Tom John",
        status: 1,
        CreatedOn: "26 sep 2023 12:34 am",
        profile: "assets/images/users/avatar-2.jpg",
        state: false,
      },
      {
        leadId: 12913,
        leadName: "Anaz Abdul lateef",
        phoneNumber: "55132657",
        email: "anzmannar@gmail.com",
        type: "Residential",
        leadSource: "Facebook",
        leadOwner: "Tom John",
        status: 1,
        CreatedOn: "96 sep 2023 11:34 am",
        profile: "assets/images/users/avatar-3.jpg",
        state: false,
      },
    ],
  },
];

const LeadsInformation = [
  {
    statusCode: 200,
    message: "Leads detail list",
    data: [
      {
        leadId: 12912,
        leadName: "Muhammed Al Jasser",
        phoneNumber: "55132657",
        email: "muhammmed98@gmail.com",
        type: "Residential",
        leadSource: "Facebook",
        leadOwner: "Mariana John",
        leadStatus: 1,
        alternateNumber: 669680823,
        company: "Qatar National Bank",
        designation: "Manager",
        industry: "Bank",
        website: "https//qnb.com",
        annualRevenue: false,
        martialStatus: "Married",
        nationality: "Qatar",
        preferredTimeToCall: "Weekend after 10 pm",
        createdBy: "Mariana John",
        CreatedOn: "24 sep 2023 09:34 am",
        modifiedBy: "Mariana John",
        modifiedOn: "24 sep 2023 09:34 am",
        address: "Al Wakra Main St, Doha, Qatar",
      },
    ],
  },
];

const LEADSOWNER: LeadsOwner[] = [
  {
    id: 1,
    name: "Marianna John",
  },
  {
    id: 2,
    name: "Larry John",
  },
  {
    id: 3,
    name: "Ahamad Muneeb",
  },
];

const LEADSSOURCE: LeadSource[] = [
  {
    id: 1,
    name: "Facebook",
  },
  {
    id: 2,
    name: "Whatsapp",
  },
  {
    id: 3,
    name: "X platform",
  },
];

const MARITALSTATUS: MaritalStatus[] = [
  {
    id: 1,
    name: "Married",
  },
  {
    id: 2,
    name: "Unmarried",
  },
];

const LEADSTATUS: LeadStatus[] = [
  {
    id: 1,
    name: "New",
  },
  {
    id: 2,
    name: "Old",
  },
];

const NATIONALITY: Nationality[] = [
  {
    id: 1,
    name: "Qatar",
  },
  {
    id: 2,
    name: "Dubai",
  },
  {
    id: 3,
    name: "Oman",
  },
  {
    id: 4,
    name: "India",
  },
];

enum CheckBoxType {
  APPLY_FOR_RESIDENTIAL,
  APPLY_FOR_COMMERCIAL,
  NONE,
}

const Views = [
  {
    id: 1,
    name: "Sea View",
  },
  {
    id: 2,
    name: "Building View",
  },
  {
    id: 3,
    name: "Sky View",
  },
];

export {
  Leads,
  LeadsInformation,
  LEADSOWNER,
  LEADSSOURCE,
  MARITALSTATUS,
  LEADSTATUS,
  NATIONALITY,
  CheckBoxType,
  Views,
};
