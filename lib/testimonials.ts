/** Real client reviews from ZorgpuntConnect (website & Google). */
export interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ilham",
    role: "Opdrachtgever in de zorg",
    rating: 5,
    quote:
      "ZorgpuntConnect stuurt de juiste mensen naar de juiste locaties. De zelfstandige zorgprofessionals die via ZorgpuntConnect werken, geven net dat beetje extra. Er wordt streng gecontroleerd op documentatie: je moet de juiste papieren en verzekeringen hebben.",
  },
  {
    id: 2,
    name: "Yasmine",
    role: "ZZP-zorgprofessional",
    rating: 5,
    quote:
      "Sinds november werk ik voor ZPC en ik ben blij dat ik de keuze heb gemaakt om mijn horizon te verbreden. Jullie zijn erg betrokken, snel van begrip en hebben een groot verantwoordelijkheidsgevoel. Ik merk oprecht dat jullie allemaal een groot hart hebben voor de zorg.",
  },
  {
    id: 3,
    name: "Sharon",
    role: "Opdrachtgever in de zorg",
    rating: 4,
    quote:
      "De werkgever van ZorgpuntConnect werkt geregeld ook zelf op locatie om een goede inschatting te maken waar bemiddelde ZZP'ers naartoe gaan. Dat zorgt voor de beste match tussen professional en afdeling.",
  },
  {
    id: 4,
    name: "Robin",
    role: "Opdrachtgever in de zorg",
    rating: 4,
    quote:
      "ZorgpuntConnect staat in direct contact met roostermakers en afdelingen. Daardoor kan er laagdrempelig worden overlegd over de inzet van bemiddelde ZZP'ers en over mogelijkheden qua personele bezetting.",
  },
]

export const googleReviewsUrl =
  "https://www.google.com/search?q=Zorgpuntconnect+Reviews"
