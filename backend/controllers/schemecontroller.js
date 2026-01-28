// backend/controllers/schemeController.js

const schemes = [
  {
    id: 1,
    name: "PM-Kisan",
    category: "Agriculture",
    description:
      "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides direct income support to farmers across India.",
    eligibility:
      "All small and marginal farmers with cultivable landholding up to 2 hectares are eligible.",
    benefits:
      "Financial benefit of ₹6,000 per year, paid in three equal installments directly to the farmer’s bank account.",
  },
  {
    id: 2,
    name: "Ayushman Bharat",
    category: "Healthcare",
    description:
      "A flagship health insurance scheme aimed at providing quality and affordable healthcare to economically weaker sections.",
    eligibility:
      "Families identified in the SECC database based on deprivation and occupational criteria.",
    benefits:
      "Health coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
  },
  {
    id: 3,
    name: "Swachh Bharat Mission",
    category: "Sanitation",
    description:
      "National cleanliness drive to eliminate open defecation and improve solid waste management across urban and rural India.",
    eligibility:
      "All rural and urban households, local bodies, and panchayats are covered under this mission.",
    benefits:
      "Financial support for toilet construction, improved sanitation, and waste disposal systems.",
  },
  {
    id: 4,
    name: "Education Scheme",
    category: "Education",
    description:
      "Provides scholarships and financial assistance to students pursuing higher education.",
    eligibility:
      "Students from low-income families who have scored at least 60% in their previous exams.",
    benefits:
      "Scholarships up to ₹50,000 per year, free textbooks, and hostel fee waiver. https://www.tnsocialwelfare.tn.gov.in/en/specilisationswoman-welfare/pudhumai-penn" ,
  },
  {
    id: 5,
    name: "Healthcare Scheme",
    category: "Public Health",
    description:
      "Government-funded initiative providing free medical check-ups and essential medicines.",
    eligibility:
      "Citizens belonging to BPL families or those above 60 years of age.",
    benefits:
      "Free annual check-ups and 50% discount on essential medicines at government hospitals.",
  },
  {
    id: 6,
    name: "Startup Support Scheme",
    category: "Entrepreneurship",
    description:
      "Encourages young entrepreneurs to start innovative ventures through funding and mentorship.",
    eligibility:
      "Individuals aged 18–40 years with a registered startup or innovative business idea.",
    benefits:
      "Seed funding up to ₹10 lakh, 3 years of tax exemption, and free business mentorship.",
  },
];

// ✅ Function to get all schemes
const getSchemes = (req, res) => {
  res.json(schemes);
};

// ✅ Function to get single scheme by ID
const getSchemeById = (req, res) => {
  const scheme = schemes.find((s) => s.id === parseInt(req.params.id));
  if (!scheme) {
    return res.status(404).json({ message: "Scheme not found" });
  }
  res.json(scheme);
};

// ✅ Export correctly (CommonJS)
module.exports = { getSchemes, getSchemeById };
