export interface Testimonial {
  id: string;
  quote: string;
  clientInitials: string;
  projectType: string;
  city: string;
  isSampleOrPendingApproval: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "OK Interiors transformed our apartment into an oasis of calm. The way daylight plays across the limestone walls and walnut joinery still surprises us every single morning.",
    clientInitials: "R. & V. S.",
    projectType: "Full Residence Interior",
    city: "New Delhi",
    isSampleOrPendingApproval: true // Pending owner verification
  },
  {
    id: "test-2",
    quote: "Their precision with modular cabinetry and natural stone execution is world-class. Our kitchen feels more like an architectural gallery than just a cooking area.",
    clientInitials: "A. M.",
    projectType: "Modular Kitchen & Living",
    city: "Gurugram",
    isSampleOrPendingApproval: true // Pending owner verification
  },
  {
    id: "test-3",
    quote: "A studio that truly understands restraint. No gimmicks, just exquisite proportions, authentic materials, and lighting that feels like magic after dusk.",
    clientInitials: "K. D.",
    projectType: "Executive Studio Renovation",
    city: "South Delhi",
    isSampleOrPendingApproval: true // Pending owner verification
  }
];
