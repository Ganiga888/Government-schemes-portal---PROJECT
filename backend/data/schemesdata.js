const schemes = [
  {
    id: 1,
    name: "Education Empowerment Scheme",
    category: "Student",
    description:
      "Provides financial aid and scholarships for students pursuing higher education in government-recognized institutions.",
    eligibilityText:
      "Students from low-income families with at least 60% marks.",
    benefits:
      "Scholarship up to ₹50,000 per year, free textbooks, and hostel fee waiver.",

    // 🔥 Eligibility rules (for backend logic)
    rules: {
      minAge: 17,
      maxAge: 25,
      maxIncome: 300000,
      userType: "Student",
    },
    tags: ["education"],
  },

  {
    id: 2,
    name: "National Healthcare Assistance",
    category: "Healthcare",
    description:
      "Offers free medical check-ups, subsidized medicines, and cashless hospitalization under government hospitals.",
    eligibilityText:
      "Available to BPL families and senior citizens above 60 years.",
    benefits: "Coverage up to ₹5 lakh per family annually.",

    rules: {
      minAge: 60,
      maxIncome: 200000,
      userType: "Senior",
    },
    tags: ["healthcare"],
  },

  {
    id: 3,
    name: "Women Welfare Yojana",
    category: "Women",
    description:
      "Supports women entrepreneurs through low-interest business loans and startup guidance.",
    eligibilityText:
      "Women aged 21–50 years running or starting a small business.",
    benefits: "Loans up to ₹2 lakh with 2% interest subsidy.",

    rules: {
      minAge: 21,
      maxAge: 50,
      gender: "Female",
      userType: "Entrepreneur",
    },
    tags: ["women", "startup"],
  },
];

module.exports = schemes;
