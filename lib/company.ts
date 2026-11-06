// Single source of truth for the legally required company details (Impressum).
// Optional fields set to null are omitted from the legal notice automatically.

export const company = {
  name: "TexGrade GmbH & Co. KG",
  street: "Bismarckstraße 30",
  postalCode: "49324",
  city: "Melle",
  registeredOffice: "Düsseldorf",
  registerCourt: "Amtsgericht Düsseldorf",
  registerNumber: "HRA 28754",

  generalPartner: {
    name: "TexGrade Beteiligungs-GmbH",
    registeredOffice: "Düsseldorf",
    registerCourt: "Amtsgericht Düsseldorf",
    registerNumber: "HRB 113801",
    managingDirectors: ["Reinhold Thate"],
  },

  phone: { display: "+49 171 470 62 60", href: "tel:+491714706260" },
  email: "info@texgrade.com",

  // Umsatzsteuer-Identifikationsnummer (§ 27a UStG), e.g. "DE123456789". Must be shown once issued.
  vatId: null as string | null,
  // Wirtschafts-Identifikationsnummer (§ 139c AO), e.g. "DE123456789-00001". Show once issued.
  economicId: null as string | null,

  // Person responsible for content (§ 18 Abs. 2 MStV).
  contentResponsible: "Reinhold Thate",

  // Hosting facts used in the privacy policy. Keep in sync with the Render setup
  // (service region, plan-dependent log retention: Hobby 7 days, Professional 14).
  hosting: {
    provider: "Render Services, Inc.",
    location: "San Francisco, USA",
    serverRegion: { de: "Frankfurt am Main (Deutschland)", en: "Frankfurt am Main, Germany", fr: "à Francfort-sur-le-Main (Allemagne)" },
    logRetentionDays: 7,
  },
} as const;
