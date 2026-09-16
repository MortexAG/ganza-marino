export type Achievement = {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  side: "left" | "right";
};

export const achievements: Achievement[] = [
  {
    number: "01",
    label: "The Beginning",
    title: "From Cadet to Officer.",
    description:
      "Ganza Marino began his journey as a cadet, learning the discipline, responsibility, and dedication required to serve and protect the community. From the start, his loyalty and efficiency set him apart.",
    image: "/images/achievement-1.jpg",
    side: "left",
  },

  {
    number: "02",
    label: "The Detective",
    title: "A New Chapter in the Office.",
    description:
      "After serving as a police officer, Ganza continued to advance through the department and became a detective. His new role brought greater responsibility, as he worked cases from his office and pursued the details others might overlook.",
    image: "/images/achievement-2.jpg",
    side: "right",
  },

  {
    number: "03",
    label: "The Chief's Side",
    title: "Working Alongside the Chief.",
    description:
      "As a detective, Ganza now works side by side with the Chief of Police, taking on important responsibilities and contributing his experience to the department. His journey from cadet to detective reflects years of service, loyalty, and commitment.",
    image: "/images/achievement-3.jpg",
    side: "left",
  },
];