export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  deliverables: string[];
  idealFor: string;
  order: number;
}

export const services: Service[] = [
  {
    id: "serv-1",
    slug: "residential-interiors",
    title: "Complete Luxury Residential Interiors",
    shortDescription: "End-to-end bespoke interior architecture, custom joinery, spatial planning, and turnkey execution for villas, apartments, and penthouses.",
    fullDescription: "From initial spatial planning and acoustic analysis to the final installation of bespoke furnishings, we curate complete residential environments tailored around the homeowner's lifestyle. Every element—from custom ceiling coves to hand-finished millwork—is designed as a unified composition.",
    image: "/images/projects/living_minimalist.jpg",
    deliverables: [
      "Architectural space planning & 3D photorealistic visualizations",
      "Custom wall paneling, fluted millwork & bespoke joinery",
      "Curated material palettes (limestone, walnut, bronze, linens)",
      "Layered architectural lighting design & automated controls",
      "Full turnkey execution with dedicated site supervision"
    ],
    idealFor: "Homeowners seeking an effortless, fully-realized sanctuary with high architectural integrity.",
    order: 1
  },
  {
    id: "serv-2",
    slug: "modular-kitchens",
    title: "Architectural Modular Kitchens",
    shortDescription: "Sculptural, high-performance culinary suites integrating bookmatched natural stone, fluted wood veneers, and concealed German hardware.",
    fullDescription: "We elevate the kitchen from a functional utility into the social and aesthetic epicenter of the residence. Working with precision European fittings and artisanal stone fabricators, our modular systems seamlessly blend ergonomic workflow with refined architectural minimalism.",
    image: "/images/projects/kitchen_luxury.jpg",
    deliverables: [
      "Custom layout optimization (galley, island, peninsular)",
      "Premium imported hardware (Blum, Hettich, Grass soft-close)",
      "Natural stone waterfall islands & seamless splashbacks",
      "Concealed appliance garage & pantry organization systems",
      "Moisture-resistant marine ply carcass with 10-year durability"
    ],
    idealFor: "Connoisseurs of fine dining and hosting who demand flawless ergonomics paired with sculptural beauty.",
    order: 2
  },
  {
    id: "serv-3",
    slug: "living-and-dining",
    title: "Living & Dining Spatial Design",
    shortDescription: "Harmonious entertaining pavilions and tranquil lounges featuring bespoke low-profile furniture, textured stone walls, and ambient cove illumination.",
    fullDescription: "Living and dining spaces require careful zoning to allow fluid movement during gatherings while preserving intimate warmth for quiet evenings. We design custom media consoles, statement dining tables, and sculptural lighting installations that define the character of the home.",
    image: "/images/projects/dining_sanctuary.jpg",
    deliverables: [
      "Custom dining tables & ergonomic sculptural seating",
      "Feature stone cladding, acoustic slats & micro-cement textures",
      "Bespoke media units with concealed cabling & acoustic bays",
      "Soft furnishings, organic wool rugs & tailored linen drapery"
    ],
    idealFor: "Families and entertainers looking to transform everyday living areas into magazine-worthy pavilions.",
    order: 3
  },
  {
    id: "serv-4",
    slug: "bedrooms-and-suites",
    title: "Master Suites & Private Sanctuaries",
    shortDescription: "Restful bedrooms designed with acoustic wall treatments, integrated headboards, custom dressing walk-ins, and warm circadian lighting.",
    fullDescription: "A bedroom should be a sanctuary of sensory calm. We design custom headboards with integrated tactile switches and dimmable reading lights, acoustic wall paneling that muffles external reverberation, and climate-conscious natural fabrics that promote restorative sleep.",
    image: "/images/projects/bedroom_suite.jpg",
    deliverables: [
      "Integrated architectural bedframes & fluted acoustic headboards",
      "Custom walk-in wardrobes with LED showcase illumination & glass fronts",
      "Vanity zones with organic backlit mirrors & jewelry organization",
      "Curated linen bedding, blackout drapery & sensory styling"
    ],
    idealFor: "Clients desiring a hotel-suite experience infused into their personal master bedroom.",
    order: 4
  },
  {
    id: "serv-5",
    slug: "commercial-and-boutique",
    title: "Commercial & Boutique Office Spaces",
    shortDescription: "Prestigious executive offices, boardrooms, and boutique retail studios designed to reflect brand identity, focus, and hospitality.",
    fullDescription: "Contemporary workspaces require an environment that fosters strategic clarity, impresses clients, and attracts top tier talent. We apply residential warmth and architectural rigor to corporate headquarters, boutique consultancies, and luxury retail galleries.",
    image: "/images/projects/commercial_studio.jpg",
    deliverables: [
      "Executive boardrooms with integrated AV & custom walnut tables",
      "Acoustic glazed partitions with fluted privacy treatments",
      "Sculptural reception desks with stone & bronze detailing",
      "Ergonomic workstations, break-out lounges & hospitality bars"
    ],
    idealFor: "Design-conscious businesses, private practices, and creative agencies seeking a memorable headquarters.",
    order: 5
  },
  {
    id: "serv-6",
    slug: "renovations-and-retrofits",
    title: "Full Architectural Renovations & Retrofits",
    shortDescription: "Down-to-studs transformations of aging properties, optimizing natural light, flow, structural apertures, and modern infrastructure.",
    fullDescription: "Transforming an existing property requires forensic insight into structural limitations and spatial opportunities. We re-engineer floor plans, widen fenestration to harvest daylight, modernize MEP (mechanical, electrical, plumbing) infrastructure, and turn dated rooms into luminous modern homes.",
    image: "/images/projects/renovation_after.jpg",
    deliverables: [
      "Complete site survey & structural feasibility analysis",
      "Demolition planning, wall removal & beam reinforcement coordination",
      "Full MEP redesign (concealed AC, electrical rewiring, plumbing)",
      "Flooring replacement & wall resurfacing with premium renders",
      "Before-and-after documented project milestones"
    ],
    idealFor: "Property owners breathing new life into older apartments, independent houses, or vintage commercial properties.",
    order: 6
  }
];
