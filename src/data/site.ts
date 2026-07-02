/**
 * DH Engineering — single source of truth.
 * Edit company facts, specs and copy here; every page/component reads from this file.
 * All values are taken from verified sources (ISO certificate, machine specs, profile PDF).
 * Items marked CONFIRM are placeholders awaiting client confirmation — see README.
 */

export const company = {
  name: 'DH Engineering',
  legalTagline: 'Total Solutions in Aluminium Die-Casting & Machining',
  shortDesc:
    'ISO 9001:2015 certified manufacturer of aluminium die castings and precision machined components in Kagal Five Star MIDC, Kolhapur.',
  founded: 2026,
  facilitySqFt: '65,000',
  machineCount: 7,
  gst: '27CWGPA5631R2Z3',
  email: 'info@dhengineering.co.in',
  address: {
    line1: 'A-121, Five Star MIDC, Kagal',
    line2: 'Hatkanangale Industrial Area',
    city: 'Kolhapur',
    state: 'Maharashtra',
    postalCode: '416236',
    country: 'India',
    full: '121, Kagal 5 Star MIDC Industrial Area, Halsavade, Maharashtra 416236, India',
    // Approx geo for Kagal Five Star MIDC (used for LocalBusiness schema).
    geo: { lat: 16.621536490015096, lng: 74.3443121899266 },
  },
  contacts: [
    { name: 'Afrid Ambi', phone: '+91 8308 423806', tel: '+918308423806' },
    { name: 'Himmat Ambi', phone: '+91 9881 814727', tel: '+919881814727' },
  ],
  // WhatsApp click-to-chat (Afrid). wa.me requires country code, no '+'.
  whatsapp: {
    number: '918308423806',
    prefill:
      'Hello DH Engineering, I would like to enquire about aluminium die-casting / machining for a component.',
  },
} as const;

export const iso = {
  standard: 'ISO 9001:2015',
  fullStandard: 'ISO 9001:2015 — Quality Management System',
  certNo: '09115077A',
  scope:
    'Manufacturing of Aluminium Die Castings and Supply of Metal Machined Components',
  issuedBy: 'Integral Certification Ltd. (EGAC Accredited, IAF MLA Member)',
  initialDate: '22 June 2026',
  surveillanceDue: '21 June 2027',
  recertDue: '21 June 2029',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Infrastructure', href: '/infrastructure/' },
  { label: 'Quality', href: '/quality/' },
  { label: 'Products', href: '/products/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const stats = [
  { value: '2026', label: 'Established' },
  { value: '65,000', label: 'Sq. Ft. Facility' },
  { value: '7', label: 'In-House Machines' },
  { value: 'ISO 9001:2015', label: 'Certified' },
] as const;

/** Why-choose-us — short (home) uses first 4; full version used on About. */
export const whyChoose = [
  {
    title: 'Integrated Casting-to-Machining',
    short: 'Casting and machining under one roof.',
    body: 'In-house HPDC, VMC, CNC turning and tool resharpening under one roof — reducing turnaround time and dependency on outside vendors.',
  },
  {
    title: 'ISO 9001:2015 Certified',
    short: 'Independently certified quality system.',
    body: 'Independently certified by Integral Certification Ltd. (Certificate No. 09115077A), ensuring consistent, standardised processes from casting to final inspection.',
  },
  {
    title: 'Calibrated Precision Inspection',
    short: 'In-house metrology with Mitutoyo & Baker instruments.',
    body: 'In-house metrology using Mitutoyo & Baker instruments — vernier calipers, micrometers, dial gauges and bore gauges — for dimensional accuracy on every batch.',
  },
  {
    title: 'Tool Life Management',
    short: 'In-house CNC automatic tool resharpening.',
    body: 'Dedicated CNC automatic tool resharpening (drills, end mills, ball-nose & chamfer cutters, 3–22 mm) to keep machining tools at peak performance.',
  },
  {
    title: 'Modern Semi-Automatic HPDC Cell',
    short: 'Current-generation casting cell with dedicated holding furnace.',
    body: 'A current-generation YIZUMI PDC-180 run as a ladle-fed, semi-automatic cell with a dedicated electric holding furnace for consistent melt quality and casting repeatability.',
  },
] as const;

/** Industries framed by application (no named clients yet — see README). */
export const industries = [
  {
    title: 'General Engineering',
    body: 'Machined and as-cast aluminium components for general engineering assemblies and equipment.',
  },
  {
    title: 'Industrial Hardware',
    body: 'Brackets, hinge plates, levers, mounting plates and connecting links for industrial hardware applications.',
  },
  {
    title: 'Automotive & Mobility',
    body: 'Aluminium die-cast and machined parts suited to automotive and mobility applications, produced to drawing-specified tolerances.',
  },
] as const;

/** Aluminium alloys cast at DH Engineering. */
export const materials = {
  note: 'We cast to your specified aluminium grade. The grades below are commonly used — other grades available on request.',
  grades: ['ADC12', 'A360', 'A380', 'A356', 'LM24', 'LM26'],
} as const;

export const products = [
  {
    slug: 'brackets-mounting-plates',
    title: 'Brackets & Mounting Plates',
    body: 'Structural mounting components cast and machined to specification, with drilled and faced mounting features.',
    image: 'product-mounting-plate.jpg',
  },
  {
    slug: 'hinges-levers',
    title: 'Hinges & Levers',
    body: 'Functional moving-part components, including handle and lever assemblies, finished to functional tolerances.',
    image: 'product-lever-handle.jpg',
  },
  {
    slug: 'connecting-links',
    title: 'Connecting Links',
    body: 'Clevis- and link-style connecting components with machined bores and seating faces.',
    image: 'product-connecting-link.jpg',
  },
  {
    slug: 'structural-housings',
    title: 'Structural Housings',
    body: 'Cast aluminium housings and enclosures, machined for mating faces and bores.',
    image: 'product-gearbox-housing.jpg',
  },
] as const;

/** Full product gallery — real parts produced at the facility. */
export const gallery: { image: string; alt: string }[] = [
  { image: 'product-gearbox-housing.jpg', alt: 'Machined aluminium die-cast gearbox-style housing produced by DH Engineering' },
  { image: 'product-mounting-plate.jpg', alt: 'Long aluminium die-cast structural mounting plate with cast bosses' },
  { image: 'product-connecting-link.jpg', alt: 'Aluminium die-cast connecting link with machined square sockets' },
  { image: 'product-lever-handle.jpg', alt: 'Cast aluminium lever / handle component' },
  { image: 'product-cast-bracket.jpg', alt: 'Aluminium die-cast mounting bracket with central boss' },
  { image: 'product-housing-body.jpg', alt: 'Tall aluminium die-cast housing body with cylindrical boss' },
  { image: 'product-angle-bracket.jpg', alt: 'Aluminium die-cast angle bracket with mounting hole' },
  { image: 'product-hinge-plate.jpg', alt: 'Aluminium die-cast hinge / mounting plate' },
  { image: 'product-hinge-lever.jpg', alt: 'Aluminium die-cast hinge lever component' },
  { image: 'product-connecting-link-small.jpg', alt: 'Small machined aluminium connecting link' },
];

/** HPDC machine — YIZUMI PDC-180. */
export const hpdcSpec = {
  machine: 'HPDC — YIZUMI PDC-180',
  rows: [
    ['Die Mounting Plates (Vert × Horiz)', '710 × 770 mm'],
    ['Space Between Tie-Bars (H × V)', '480 × 480 mm'],
    ['Diameter of Tie-Bars', '85 mm'],
    ['Die Thickness (Max / Min)', '600 mm / 200 mm'],
    ['Die Opening Stroke', '350 mm'],
    ['Ejector Force / Stroke', '105 kN / 90 mm'],
    ['Motor Input', '400 V, 22.4 kW'],
    ['Minimum Dry-Cycle Time', '7 sec'],
    ['Oil Tank Capacity', '500 L'],
    ['Machine Weight', '6.4 Tons'],
    ['Plunger Size', '50 mm, 60 mm'],
  ] as [string, string][],
};

export const machineShop = {
  head: ['Machine', 'Qty', 'Specification'] as const,
  rows: [
    ['VMC — Macpower ECO 800', '1', 'Table 1000 × 510 mm; Travel X-810 Y-510 Z-510 mm; Spindle 7.5/11 kW'],
    ['VMC — LMW', '1', 'Table 800 × 450 mm; Travel X-800 Y-450 Z-450 mm; Spindle 7.5/11 kW'],
    ['CNC Turning Center', '1', 'Chuck 200 mm; X-170 Z-325; Max turning dia. 325 mm; 7.5/11 kW'],
    ['Lathe Machine', '1', 'MT-4 spindle bore; bed length 5 ft'],
    ['Drill Machine (Pillar Type)', '1', '1.5" capacity'],
    ['CNC Auto Tool Resharpener', '1', 'Drills, end mills, ball-nose & chamfer cutters, dia. 3–22 mm'],
  ] as [string, string, string][],
};

export const qualityInstruments = {
  head: ['Instrument', 'Specification', 'Make'] as const,
  rows: [
    ['Digital Vernier Caliper', '0–200 mm', 'Baker'],
    ['External Micrometer', '50–75 mm', 'Baker'],
    ['Lever Dial Gauge', '0.01 mm', 'Baker'],
    ['Plunger Dial Gauge', '0.001 mm', 'Baker'],
    ['Surface Plate', '630 × 630 mm', 'Luthra'],
    ['Bore Gauge', '18–35 mm / 35–60 mm', 'Mitutoyo'],
    ['Bore Gauge', '50–160 mm', 'Baker'],
    ['Digital Height Gauge', '0–300 mm', 'Baker'],
    ['Crystal Dial Stand', 'Model 1616', '—'],
  ] as [string, string, string][],
};

/** formly.email — replace with your real access key (see README). */
export const formAccessKey = '7fd5d85872a54dd089a82eb5cf207f01';
