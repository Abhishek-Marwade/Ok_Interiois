export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Modular Kitchens" | "Living & Dining" | "Commercial" | "Renovations";
  year: string;
  location: string;
  isSampleOrConcept: boolean; // Clearly indicates project status pending owner photo replacements
  heroImage: string;
  galleryImages: string[];
  description: string;
  designBrief: string;
  designApproach: string;
  materials: string[];
  featured: boolean;
  hasBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
  specs: {
    area: string;
    timeline: string;
    scope: string;
  };
}

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "limestone-villa-residence",
    title: "The Limestone Villa Sanctuary",
    category: "Residential",
    year: "2024",
    location: "Private Residence",
    isSampleOrConcept: true,
    heroImage: "/images/projects/living_minimalist.jpg",
    galleryImages: [
      "/images/projects/living_minimalist.jpg",
      "/images/projects/dining_sanctuary.jpg",
      "/images/projects/bedroom_suite.jpg"
    ],
    description: "A serene, light-drenched private residence balancing warm limestone blocks, fluted natural walnut millwork, and monolithic travertine surfaces.",
    designBrief: "The client envisioned an architectural haven of calmness—a home free of visual clutter that harmonized indoor comfort with lush outdoor greenery through floor-to-ceiling iron-framed apertures.",
    designApproach: "We eliminated decorative excesses in favor of textural depth. Hand-carved limestone blocks form a quiet rhythmic backdrop, punctuated by custom smoked walnut joinery and custom low-slung boucle seating that anchors the voluminous space.",
    materials: ["French Limestone", "Smoked Walnut", "Roman Travertine", "Boucle Linen", "Blackened Steel"],
    featured: true,
    specs: {
      area: "4,500 sq. ft.",
      timeline: "5 Months",
      scope: "Turnkey Architecture & Interior Fit-Out"
    }
  },
  {
    id: "proj-2",
    slug: "fluted-walnut-modular-kitchen",
    title: "The Calacatta & Walnut Culinary Suite",
    category: "Modular Kitchens",
    year: "2024",
    location: "Luxury Penthouse",
    isSampleOrConcept: true,
    heroImage: "/images/projects/kitchen_luxury.jpg",
    galleryImages: [
      "/images/projects/kitchen_luxury.jpg",
      "/images/projects/dining_sanctuary.jpg"
    ],
    description: "An ultra-precision modular kitchen integrating bookmatched Calacatta marble waterfall surfaces with bespoke fluted dark walnut cabinetry and concealed Blum hardware.",
    designBrief: "Create a showpiece kitchen that performs as an ergonomic culinary laboratory while seamlessly integrating with the open-plan entertaining living pavilion.",
    designApproach: "Every appliance is flush-integrated behind tactile fluted wood veneers. An expansive bookmatched marble island provides a sculptural social centerpiece with warm under-counter shadowline illumination.",
    materials: ["Bookmatched Calacatta Gold Marble", "Fluted Smoked Walnut", "Brushed Bronze Hardware", "Architectural LED Lighting"],
    featured: true,
    specs: {
      area: "750 sq. ft.",
      timeline: "6 Weeks",
      scope: "Modular Joinery, Stone Fabrication & Appliance Integration"
    }
  },
  {
    id: "proj-3",
    slug: "sanctuary-master-bedroom",
    title: "The Japandi Master Retreat",
    category: "Living & Dining",
    year: "2024",
    location: "Courtyard Villa",
    isSampleOrConcept: true,
    heroImage: "/images/projects/bedroom_suite.jpg",
    galleryImages: [
      "/images/projects/bedroom_suite.jpg",
      "/images/projects/living_minimalist.jpg"
    ],
    description: "A master bedroom suite conceived as a restful sanctuary, framed by acoustic fluted oak battens, washed linen textures, and an intimate moss garden aperture.",
    designBrief: "To craft an acoustic and visual sanctuary prioritizing restful sleep, tactile warmth, and an unbroken sightline into private courtyard greenery.",
    designApproach: "We composed an architectural headboard wall from solid oak slats with acoustic backing. Low-profile floating joinery creates visual weightlessness, softened by hand-loomed wool rugs and organic ceramic sconces.",
    materials: ["Natural White Oak", "Acoustic Felt", "Washed Belgian Linen", "Organic Ceramic", "Limestone Plaster"],
    featured: true,
    specs: {
      area: "620 sq. ft.",
      timeline: "7 Weeks",
      scope: "Complete Bedroom, Dressing & Millwork Package"
    }
  },
  {
    id: "proj-4",
    slug: "monolith-creative-studio",
    title: "Monolith Executive Design Studio",
    category: "Commercial",
    year: "2023",
    location: "Design District",
    isSampleOrConcept: true,
    heroImage: "/images/projects/commercial_studio.jpg",
    galleryImages: [
      "/images/projects/commercial_studio.jpg",
      "/images/projects/dining_sanctuary.jpg"
    ],
    description: "A contemporary commercial headquarters pairing deep charcoal steel glass partitions, a solid walnut board table, and a monolithic travertine reception counter.",
    designBrief: "A forward-thinking boutique firm needed a workspace that radiated prestige, architectural restraint, and client hospitality without sterile corporate tropes.",
    designApproach: "We utilized fluted acoustic glazing to preserve acoustic privacy while allowing daylight to wash across deep charcoal architectural walls and raw oak open library shelving.",
    materials: ["Fluted Glass & Charcoal Steel", "American Walnut", "Honed Travertine", "Charcoal Architectural Render"],
    featured: true,
    specs: {
      area: "2,800 sq. ft.",
      timeline: "3 Months",
      scope: "Commercial Space Planning, Partitions & Bespoke Furniture"
    }
  },
  {
    id: "proj-5",
    slug: "travertine-dining-pavilion",
    title: "The Travertine Dining Pavilion",
    category: "Living & Dining",
    year: "2024",
    location: "Modern Manor",
    isSampleOrConcept: true,
    heroImage: "/images/projects/dining_sanctuary.jpg",
    galleryImages: [
      "/images/projects/dining_sanctuary.jpg",
      "/images/projects/living_minimalist.jpg"
    ],
    description: "A celebration of dining ritual featuring an organic oval walnut table, sculptural boucle seating, and a monumental travertine feature wall opening onto a terrace garden.",
    designBrief: "Design an expansive dining room capable of hosting intimate family dinners or grand social gatherings with direct indoor-outdoor transition.",
    designApproach: "An organic sculptural bronze lighting fixture floats above the rounded table, balancing the monumental permanence of the vein-cut travertine stone backdrop.",
    materials: ["Solid Walnut", "Honed Vein-Cut Travertine", "Cast Bronze", "Textured Boucle", "Steel Framed Glazing"],
    featured: false,
    specs: {
      area: "540 sq. ft.",
      timeline: "6 Weeks",
      scope: "Dining Fit-Out & Architectural Lighting"
    }
  },
  {
    id: "proj-6",
    slug: "urban-apartment-transformation",
    title: "Urban Apartment Transformation",
    category: "Renovations",
    year: "2024",
    location: "City Center",
    isSampleOrConcept: true,
    heroImage: "/images/projects/renovation_after.jpg",
    galleryImages: [
      "/images/projects/renovation_after.jpg",
      "/images/projects/renovation_before.jpg",
      "/images/projects/living_minimalist.jpg"
    ],
    description: "A complete down-to-studs interior architectural renovation that turned a dark, unfinished apartment shell into a warm, luminous luxury sanctuary.",
    designBrief: "Convert a bare, raw concrete-floor apartment with outdated layouts into an open-plan contemporary residence with optimal flow and integrated millwork.",
    designApproach: "We re-engineered the spatial layout, enlarged the window aperture for daylight infusion, replaced raw concrete with warm limestone tiles, and recessed all storage behind architectural panels.",
    materials: ["Limestone Flooring", "Oak Battens", "Acoustic Plaster", "Recessed Architectural Fixtures"],
    featured: true,
    hasBeforeAfter: true,
    beforeImage: "/images/projects/renovation_before.jpg",
    afterImage: "/images/projects/renovation_after.jpg",
    specs: {
      area: "1,850 sq. ft.",
      timeline: "4 Months",
      scope: "Demolition, Structural Realignment, Full Interior Fit-Out"
    }
  }
];

export const projectCategories = [
  "All Projects",
  "Residential",
  "Modular Kitchens",
  "Living & Dining",
  "Commercial",
  "Renovations"
] as const;
