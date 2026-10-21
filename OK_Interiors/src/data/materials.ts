export interface MaterialItem {
  id: string;
  name: string;
  subheading: string;
  category: "Timber" | "Natural Stone" | "Textile" | "Metal";
  origin: string;
  finish: string;
  colorCode: string;
  description: string;
  tactileSensory: string;
  bestUsedFor: string[];
  careNotes: string;
  visualPreview: string; // High-res image or swatch representation
}

export const materials: MaterialItem[] = [
  {
    id: "mat-walnut",
    name: "Smoked American Walnut",
    subheading: "Rich warmth with deep linear grain and quiet grandeur",
    category: "Timber",
    origin: "Sustainable Northern Forests",
    finish: "Ultra-Matte Natural Hardwax Oil",
    colorCode: "#5C4033",
    description: "Sustainably harvested American black walnut, gently smoked to deepen its natural chocolate-espresso undertones without losing its fluid grain structure.",
    tactileSensory: "Smooth, velvety, and organic to the touch with natural micro-pores preserved.",
    bestUsedFor: ["Bespoke Dining Tables", "Wall Paneling & Fluted Millwork", "Kitchen Islands & Credenzas"],
    careNotes: "Clean with a dry microfibre cloth; condition annually with natural mineral wax.",
    visualPreview: "/images/projects/dining_sanctuary.jpg"
  },
  {
    id: "mat-travertine",
    name: "Roman Vein-Cut Travertine",
    subheading: "Timeless limestone formation with architectural geological banding",
    category: "Natural Stone",
    origin: "Tivoli Quarries, Italy",
    finish: "Honed with Natural Micro-Cavities",
    colorCode: "#DDD6CC",
    description: "Quarried from historic Italian mineral beds, this porous sedimentary rock showcases delicate strata of ivory, sand, and pale taupe, celebrating millions of years of earth history.",
    tactileSensory: "Cool, solid, with a chalky-smooth honed face that softens harsh architectural lines.",
    bestUsedFor: ["Feature Fireplaces", "Monolithic Coffee Tables", "Reception Desks & Bathroom Vanities"],
    careNotes: "Sealed with breathable penetrating sealer; wipe spills immediately with pH-neutral soap.",
    visualPreview: "/images/projects/living_minimalist.jpg"
  },
  {
    id: "mat-marble",
    name: "Calacatta Gold Marble",
    subheading: "Sculptural white marble traced with warm gold and charcoal veins",
    category: "Natural Stone",
    origin: "Carrara, Tuscany",
    finish: "Bookmatched Honed Velvet",
    colorCode: "#EDE8E1",
    description: "The pinnacle of metamorphic stone luxury. A luminous white crystalline ground laced with dramatic rivers of amber, honey, and charcoal veins.",
    tactileSensory: "Silky, cool, and crystalline with remarkable light reflectance.",
    bestUsedFor: ["Waterfall Kitchen Islands", "Custom Fireplace Surrounds", "Master Bath Cladding"],
    careNotes: "Honed finish conceals micro-etching; protect from high acids.",
    visualPreview: "/images/projects/kitchen_luxury.jpg"
  },
  {
    id: "mat-oak",
    name: "White Oak Battens",
    subheading: "Architectural acoustic rhythm with light Scandinavian purity",
    category: "Timber",
    origin: "Bavarian Alpine Timberland",
    finish: "Raw Soap-Finish / Invisible UV Matte",
    colorCode: "#D9C6A5",
    description: "Quarter-sawn European white oak machined into slender acoustic slats over recycled charcoal PET felt, providing auditory dampening alongside visual poetry.",
    tactileSensory: "Crisp, textured grain with distinct tactile ridges.",
    bestUsedFor: ["Acoustic Bedroom Headboards", "Concealed Pivot Doors", "Ceiling Louvers"],
    careNotes: "Dust regularly; maintain with organic plant-based wood soap.",
    visualPreview: "/images/projects/bedroom_suite.jpg"
  },
  {
    id: "mat-linen",
    name: "Belgian Heavy Boucle Linen",
    subheading: "Soft, organic, cloud-like tactile comfort with woven depth",
    category: "Textile",
    origin: "Flanders, Belgium",
    finish: "Unbleached Washed Boucle Weave",
    colorCode: "#E8E3DA",
    description: "Spun from long-staple flax and looped wool yarns to generate an irregular, cloud-soft texture that catches soft ambient light beautifully.",
    tactileSensory: "Deeply cozy, textured, warm, and inviting without feeling synthetic.",
    bestUsedFor: ["Sculptural Loungers", "Curved Modular Sofas", "Dining Armchairs"],
    careNotes: "Vacuum gently with upholstery brush; spot clean with lukewarm water.",
    visualPreview: "/images/projects/living_minimalist.jpg"
  },
  {
    id: "mat-bronze",
    name: "Muted Architectural Bronze",
    subheading: "Subtle metalwork that ages with graceful hand patina",
    category: "Metal",
    origin: "Artisanal Foundry",
    finish: "Hand-Waxed Brushed Antiqued Bronze",
    colorCode: "#A3875D",
    description: "Solid brass alloy chemically patinated by hand to a muted antique bronze luster, avoiding glaring reflections in favor of quiet understated dignity.",
    tactileSensory: "Substantial, cool, and gently textured with subtle linear brushmarks.",
    bestUsedFor: ["Architectural Sconces & Chandeliers", "Cabinet Pulls & Profiles", "Window Glazing Beaded Profiles"],
    careNotes: "Allow natural patina to develop; polish selectively with microcrystalline wax.",
    visualPreview: "/images/projects/commercial_studio.jpg"
  }
];
