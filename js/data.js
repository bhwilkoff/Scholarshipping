const SCHOLARSHIPS = [
  {
    "id": 1,
    "name": "Women in Engineering Scholarship 1",
    "provider": "Tech Corp",
    "amount": 3584,
    "deadline": "2026-12-05",
    "qualifications": [
      "Veteran",
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/1",
    "description": "This is a detailed description for scholarship 1. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 2,
    "name": "Community Impact Scholarship 2",
    "provider": "Community Trust",
    "amount": 1164,
    "deadline": "2026-08-14",
    "qualifications": [
      "Creative Arts",
      "High School Senior"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/2",
    "description": "This is a detailed description for scholarship 2. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 3,
    "name": "Community Impact Scholarship 3",
    "provider": "Science Alliance",
    "amount": 4093,
    "deadline": "2026-01-04",
    "qualifications": [
      "Need-based",
      "International Student"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/3",
    "description": "This is a detailed description for scholarship 3. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 4,
    "name": "Community Impact Scholarship 4",
    "provider": "Innovation Lab",
    "amount": 6879,
    "deadline": "2026-12-02",
    "qualifications": [
      "LGBTQ+",
      "Veteran"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/4",
    "description": "This is a detailed description for scholarship 4. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 5,
    "name": "Community Impact Scholarship 5",
    "provider": "Leaders of Tomorrow",
    "amount": 1541,
    "deadline": "2026-12-17",
    "qualifications": [
      "Merit-based",
      "Undergraduate",
      "International Student"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/5",
    "description": "This is a detailed description for scholarship 5. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 6,
    "name": "Entrepreneurial Spirit Grant 6",
    "provider": "Civic Group",
    "amount": 1014,
    "deadline": "2026-04-27",
    "qualifications": [
      "High School Senior",
      "STEM",
      "Undergraduate"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/6",
    "description": "This is a detailed description for scholarship 6. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 7,
    "name": "Health and Wellness Award 7",
    "provider": "Global Reach",
    "amount": 1842,
    "deadline": "2026-03-10",
    "qualifications": [
      "Undergraduate",
      "LGBTQ+",
      "Creative Arts"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Washington",
    "likelihood": "High",
    "link": "https://example.com/scholarship/7",
    "description": "This is a detailed description for scholarship 7. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 8,
    "name": "Service Excellence Grant 8",
    "provider": "Arts Council",
    "amount": 5023,
    "deadline": "2026-09-01",
    "qualifications": [
      "Undergraduate",
      "Minority",
      "Creative Arts"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/8",
    "description": "This is a detailed description for scholarship 8. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 9,
    "name": "First-Generation Success Fund 9",
    "provider": "Humanities Board",
    "amount": 2712,
    "deadline": "2026-11-13",
    "qualifications": [
      "Undergraduate",
      "Creative Arts",
      "Women"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/9",
    "description": "This is a detailed description for scholarship 9. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 10,
    "name": "Entrepreneurial Spirit Grant 10",
    "provider": "Educational Partners",
    "amount": 1333,
    "deadline": "2026-05-03",
    "qualifications": [
      "Minority",
      "LGBTQ+",
      "Women"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/10",
    "description": "This is a detailed description for scholarship 10. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 11,
    "name": "Global Perspectives Fellowship 11",
    "provider": "Leaders of Tomorrow",
    "amount": 8571,
    "deadline": "2026-04-13",
    "qualifications": [
      "Undergraduate"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Texas",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/11",
    "description": "This is a detailed description for scholarship 11. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 12,
    "name": "Green Earth Grant 12",
    "provider": "Wellness Center",
    "amount": 1093,
    "deadline": "2026-08-26",
    "qualifications": [
      "Veteran"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Oregon",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/12",
    "description": "This is a detailed description for scholarship 12. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 13,
    "name": "Tech Innovators Fund 13",
    "provider": "Heritage Foundation",
    "amount": 9798,
    "deadline": "2026-03-07",
    "qualifications": [
      "Minority",
      "Need-based"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/13",
    "description": "This is a detailed description for scholarship 13. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 14,
    "name": "Entrepreneurial Spirit Grant 14",
    "provider": "Green Initiative",
    "amount": 8931,
    "deadline": "2026-09-07",
    "qualifications": [
      "Merit-based",
      "Leadership"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/14",
    "description": "This is a detailed description for scholarship 14. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 15,
    "name": "Digital Literacy Grant 15",
    "provider": "Green Initiative",
    "amount": 3760,
    "deadline": "2026-01-26",
    "qualifications": [
      "Merit-based"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "New York",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/15",
    "description": "This is a detailed description for scholarship 15. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 16,
    "name": "Digital Literacy Grant 16",
    "provider": "Diversity Council",
    "amount": 9454,
    "deadline": "2026-05-25",
    "qualifications": [
      "Women",
      "STEM",
      "High School Senior"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Oregon",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/16",
    "description": "This is a detailed description for scholarship 16. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 17,
    "name": "Future Leaders Grant 17",
    "provider": "Arts Council",
    "amount": 4869,
    "deadline": "2026-02-16",
    "qualifications": [
      "Creative Arts"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/17",
    "description": "This is a detailed description for scholarship 17. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 18,
    "name": "Service Excellence Grant 18",
    "provider": "Community Trust",
    "amount": 6977,
    "deadline": "2026-12-02",
    "qualifications": [
      "Athletics",
      "LGBTQ+",
      "Community Service"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/18",
    "description": "This is a detailed description for scholarship 18. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 19,
    "name": "Future Leaders Grant 19",
    "provider": "Green Initiative",
    "amount": 8421,
    "deadline": "2026-11-09",
    "qualifications": [
      "Athletics"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Texas",
    "likelihood": "High",
    "link": "https://example.com/scholarship/19",
    "description": "This is a detailed description for scholarship 19. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 20,
    "name": "STEM Excellence Scholarship 20",
    "provider": "Local Heroes",
    "amount": 6788,
    "deadline": "2026-03-10",
    "qualifications": [
      "Athletics",
      "Merit-based"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/20",
    "description": "This is a detailed description for scholarship 20. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 21,
    "name": "Future Leaders Grant 21",
    "provider": "Humanities Board",
    "amount": 9698,
    "deadline": "2026-06-12",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Illinois",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/21",
    "description": "This is a detailed description for scholarship 21. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 22,
    "name": "Tech Innovators Fund 22",
    "provider": "National Merit",
    "amount": 6052,
    "deadline": "2026-07-07",
    "qualifications": [
      "Creative Arts"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/22",
    "description": "This is a detailed description for scholarship 22. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 23,
    "name": "Academic Achievement Award 23",
    "provider": "Community Trust",
    "amount": 4521,
    "deadline": "2026-10-05",
    "qualifications": [
      "Community Service"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/23",
    "description": "This is a detailed description for scholarship 23. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 24,
    "name": "Global Perspectives Fellowship 24",
    "provider": "Success Academy",
    "amount": 2334,
    "deadline": "2026-01-17",
    "qualifications": [
      "Veteran",
      "STEM"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Texas",
    "likelihood": "High",
    "link": "https://example.com/scholarship/24",
    "description": "This is a detailed description for scholarship 24. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 25,
    "name": "STEM Excellence Scholarship 25",
    "provider": "Success Academy",
    "amount": 8519,
    "deadline": "2026-09-10",
    "qualifications": [
      "Need-based",
      "Community Service"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "Global",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/25",
    "description": "This is a detailed description for scholarship 25. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 26,
    "name": "Women in Engineering Scholarship 26",
    "provider": "Humanities Board",
    "amount": 1337,
    "deadline": "2026-11-02",
    "qualifications": [
      "Need-based",
      "Minority",
      "Athletics"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/26",
    "description": "This is a detailed description for scholarship 26. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 27,
    "name": "Youth Leadership Award 27",
    "provider": "Educational Partners",
    "amount": 2386,
    "deadline": "2026-05-04",
    "qualifications": [
      "Community Service",
      "First-Generation",
      "Minority"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Texas",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/27",
    "description": "This is a detailed description for scholarship 27. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 28,
    "name": "Global Perspectives Fellowship 28",
    "provider": "Educational Partners",
    "amount": 7090,
    "deadline": "2026-05-23",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/28",
    "description": "This is a detailed description for scholarship 28. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 29,
    "name": "Civic Engagement Award 29",
    "provider": "Future Fund",
    "amount": 5186,
    "deadline": "2026-03-22",
    "qualifications": [
      "Community Service",
      "Athletics"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "High",
    "link": "https://example.com/scholarship/29",
    "description": "This is a detailed description for scholarship 29. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 30,
    "name": "Health and Wellness Award 30",
    "provider": "Leaders of Tomorrow",
    "amount": 6702,
    "deadline": "2026-06-02",
    "qualifications": [
      "Minority",
      "Women",
      "Leadership"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/30",
    "description": "This is a detailed description for scholarship 30. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 31,
    "name": "Health and Wellness Award 31",
    "provider": "Foundations Inc.",
    "amount": 9988,
    "deadline": "2026-06-01",
    "qualifications": [
      "International Student",
      "Need-based",
      "STEM"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/31",
    "description": "This is a detailed description for scholarship 31. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 32,
    "name": "Sustainable Future Scholarship 32",
    "provider": "Humanities Board",
    "amount": 5741,
    "deadline": "2026-03-12",
    "qualifications": [
      "Merit-based",
      "Undergraduate",
      "STEM"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/32",
    "description": "This is a detailed description for scholarship 32. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 33,
    "name": "Digital Literacy Grant 33",
    "provider": "Local Heroes",
    "amount": 6637,
    "deadline": "2026-06-04",
    "qualifications": [
      "Community Service"
    ],
    "restrictions": [],
    "location": "Texas",
    "likelihood": "High",
    "link": "https://example.com/scholarship/33",
    "description": "This is a detailed description for scholarship 33. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 34,
    "name": "Women in Engineering Scholarship 34",
    "provider": "Innovation Lab",
    "amount": 3226,
    "deadline": "2026-03-12",
    "qualifications": [
      "Merit-based",
      "Undergraduate"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/34",
    "description": "This is a detailed description for scholarship 34. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 35,
    "name": "Music and Arts Grant 35",
    "provider": "Global Aid",
    "amount": 632,
    "deadline": "2026-12-16",
    "qualifications": [
      "Leadership",
      "Athletics"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/35",
    "description": "This is a detailed description for scholarship 35. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 36,
    "name": "Cultural Heritage Scholarship 36",
    "provider": "Civic Group",
    "amount": 6897,
    "deadline": "2026-08-02",
    "qualifications": [
      "Need-based",
      "Merit-based"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/36",
    "description": "This is a detailed description for scholarship 36. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 37,
    "name": "Tech Innovators Fund 37",
    "provider": "Foundations Inc.",
    "amount": 8189,
    "deadline": "2026-06-02",
    "qualifications": [
      "Leadership"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/37",
    "description": "This is a detailed description for scholarship 37. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 38,
    "name": "First-Generation Success Fund 38",
    "provider": "Arts Council",
    "amount": 9551,
    "deadline": "2026-01-14",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/38",
    "description": "This is a detailed description for scholarship 38. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 39,
    "name": "Global Perspectives Fellowship 39",
    "provider": "Educational Partners",
    "amount": 4471,
    "deadline": "2026-12-16",
    "qualifications": [
      "Merit-based"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/39",
    "description": "This is a detailed description for scholarship 39. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 40,
    "name": "Social Justice Fellowship 40",
    "provider": "Diversity Council",
    "amount": 6151,
    "deadline": "2026-02-19",
    "qualifications": [
      "LGBTQ+",
      "Merit-based"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/40",
    "description": "This is a detailed description for scholarship 40. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 41,
    "name": "First-Generation Success Fund 41",
    "provider": "Local Heroes",
    "amount": 4154,
    "deadline": "2026-09-05",
    "qualifications": [
      "High School Senior"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/41",
    "description": "This is a detailed description for scholarship 41. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 42,
    "name": "Academic Achievement Award 42",
    "provider": "Future Fund",
    "amount": 3169,
    "deadline": "2026-07-12",
    "qualifications": [
      "Athletics",
      "STEM",
      "Creative Arts"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/42",
    "description": "This is a detailed description for scholarship 42. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 43,
    "name": "Music and Arts Grant 43",
    "provider": "Arts Council",
    "amount": 925,
    "deadline": "2026-02-01",
    "qualifications": [
      "Creative Arts",
      "Leadership",
      "STEM"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/43",
    "description": "This is a detailed description for scholarship 43. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 44,
    "name": "Academic Achievement Award 44",
    "provider": "Local Heroes",
    "amount": 4310,
    "deadline": "2026-03-09",
    "qualifications": [
      "First-Generation",
      "Undergraduate",
      "STEM"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/44",
    "description": "This is a detailed description for scholarship 44. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 45,
    "name": "Music and Arts Grant 45",
    "provider": "Community Trust",
    "amount": 8279,
    "deadline": "2026-10-03",
    "qualifications": [
      "Women",
      "Leadership",
      "Community Service"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/45",
    "description": "This is a detailed description for scholarship 45. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 46,
    "name": "Green Earth Grant 46",
    "provider": "Science Alliance",
    "amount": 8994,
    "deadline": "2026-02-25",
    "qualifications": [
      "High School Senior",
      "Creative Arts"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/46",
    "description": "This is a detailed description for scholarship 46. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 47,
    "name": "Cultural Heritage Scholarship 47",
    "provider": "Leaders of Tomorrow",
    "amount": 1517,
    "deadline": "2026-05-13",
    "qualifications": [
      "High School Senior"
    ],
    "restrictions": [],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/47",
    "description": "This is a detailed description for scholarship 47. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 48,
    "name": "Sustainable Future Scholarship 48",
    "provider": "Educational Partners",
    "amount": 2196,
    "deadline": "2026-07-24",
    "qualifications": [
      "Merit-based",
      "Minority"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Washington",
    "likelihood": "High",
    "link": "https://example.com/scholarship/48",
    "description": "This is a detailed description for scholarship 48. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 49,
    "name": "Entrepreneurial Spirit Grant 49",
    "provider": "Leaders of Tomorrow",
    "amount": 9248,
    "deadline": "2026-04-03",
    "qualifications": [
      "LGBTQ+"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Texas",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/49",
    "description": "This is a detailed description for scholarship 49. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 50,
    "name": "Community Impact Scholarship 50",
    "provider": "Educational Partners",
    "amount": 4237,
    "deadline": "2026-02-19",
    "qualifications": [
      "STEM",
      "Community Service",
      "Veteran"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Oregon",
    "likelihood": "High",
    "link": "https://example.com/scholarship/50",
    "description": "This is a detailed description for scholarship 50. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 51,
    "name": "Future Leaders Grant 51",
    "provider": "National Merit",
    "amount": 737,
    "deadline": "2026-12-02",
    "qualifications": [
      "Need-based",
      "Undergraduate",
      "First-Generation"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "Global",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/51",
    "description": "This is a detailed description for scholarship 51. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 52,
    "name": "Women in Engineering Scholarship 52",
    "provider": "Green Initiative",
    "amount": 6284,
    "deadline": "2026-05-24",
    "qualifications": [
      "Minority",
      "Merit-based",
      "Community Service"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Texas",
    "likelihood": "High",
    "link": "https://example.com/scholarship/52",
    "description": "This is a detailed description for scholarship 52. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 53,
    "name": "Women in Engineering Scholarship 53",
    "provider": "Heritage Foundation",
    "amount": 1890,
    "deadline": "2026-08-13",
    "qualifications": [
      "Merit-based",
      "Leadership",
      "First-Generation"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/53",
    "description": "This is a detailed description for scholarship 53. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 54,
    "name": "Service Excellence Grant 54",
    "provider": "Global Aid",
    "amount": 3543,
    "deadline": "2026-11-14",
    "qualifications": [
      "Women",
      "Leadership"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/54",
    "description": "This is a detailed description for scholarship 54. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 55,
    "name": "Community Impact Scholarship 55",
    "provider": "Heritage Foundation",
    "amount": 4912,
    "deadline": "2026-04-18",
    "qualifications": [
      "Women"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/55",
    "description": "This is a detailed description for scholarship 55. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 56,
    "name": "Social Justice Fellowship 56",
    "provider": "Arts Council",
    "amount": 5822,
    "deadline": "2026-04-07",
    "qualifications": [
      "Veteran",
      "STEM",
      "International Student"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/56",
    "description": "This is a detailed description for scholarship 56. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 57,
    "name": "Global Perspectives Fellowship 57",
    "provider": "Global Aid",
    "amount": 4428,
    "deadline": "2026-09-11",
    "qualifications": [
      "Need-based",
      "LGBTQ+",
      "Leadership"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/57",
    "description": "This is a detailed description for scholarship 57. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 58,
    "name": "Tech Innovators Fund 58",
    "provider": "Arts Council",
    "amount": 3991,
    "deadline": "2026-12-04",
    "qualifications": [
      "Creative Arts",
      "Minority",
      "High School Senior"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "New York",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/58",
    "description": "This is a detailed description for scholarship 58. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 59,
    "name": "Cultural Heritage Scholarship 59",
    "provider": "Success Academy",
    "amount": 6982,
    "deadline": "2026-09-25",
    "qualifications": [
      "Need-based",
      "Undergraduate",
      "High School Senior"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/59",
    "description": "This is a detailed description for scholarship 59. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 60,
    "name": "Tech Innovators Fund 60",
    "provider": "Innovation Lab",
    "amount": 9812,
    "deadline": "2026-10-12",
    "qualifications": [
      "Need-based",
      "International Student",
      "Veteran"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "High",
    "link": "https://example.com/scholarship/60",
    "description": "This is a detailed description for scholarship 60. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 61,
    "name": "Future Leaders Grant 61",
    "provider": "Wellness Center",
    "amount": 6595,
    "deadline": "2026-03-13",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/61",
    "description": "This is a detailed description for scholarship 61. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 62,
    "name": "Health and Wellness Award 62",
    "provider": "Leaders of Tomorrow",
    "amount": 2661,
    "deadline": "2026-10-26",
    "qualifications": [
      "Need-based",
      "Undergraduate",
      "Veteran"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/62",
    "description": "This is a detailed description for scholarship 62. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 63,
    "name": "STEM Excellence Scholarship 63",
    "provider": "Humanities Board",
    "amount": 6535,
    "deadline": "2026-11-11",
    "qualifications": [
      "Leadership",
      "Community Service"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/63",
    "description": "This is a detailed description for scholarship 63. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 64,
    "name": "Service Excellence Grant 64",
    "provider": "National Merit",
    "amount": 8671,
    "deadline": "2026-06-20",
    "qualifications": [
      "Merit-based"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Oregon",
    "likelihood": "High",
    "link": "https://example.com/scholarship/64",
    "description": "This is a detailed description for scholarship 64. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 65,
    "name": "Sustainable Future Scholarship 65",
    "provider": "Future Fund",
    "amount": 1239,
    "deadline": "2026-12-16",
    "qualifications": [
      "Need-based",
      "Women",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "High",
    "link": "https://example.com/scholarship/65",
    "description": "This is a detailed description for scholarship 65. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 66,
    "name": "Green Earth Grant 66",
    "provider": "Civic Group",
    "amount": 2937,
    "deadline": "2026-03-20",
    "qualifications": [
      "STEM",
      "Leadership",
      "First-Generation"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/66",
    "description": "This is a detailed description for scholarship 66. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 67,
    "name": "Women in Engineering Scholarship 67",
    "provider": "Green Initiative",
    "amount": 1151,
    "deadline": "2026-08-08",
    "qualifications": [
      "Need-based",
      "Minority",
      "High School Senior"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/67",
    "description": "This is a detailed description for scholarship 67. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 68,
    "name": "STEM Excellence Scholarship 68",
    "provider": "Success Academy",
    "amount": 7291,
    "deadline": "2026-07-15",
    "qualifications": [
      "High School Senior",
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/68",
    "description": "This is a detailed description for scholarship 68. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 69,
    "name": "Artistic Vision Award 69",
    "provider": "Wellness Center",
    "amount": 2708,
    "deadline": "2026-09-21",
    "qualifications": [
      "Creative Arts",
      "Women",
      "International Student"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Illinois",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/69",
    "description": "This is a detailed description for scholarship 69. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 70,
    "name": "Women in Engineering Scholarship 70",
    "provider": "Educational Partners",
    "amount": 4504,
    "deadline": "2026-09-01",
    "qualifications": [
      "Leadership"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/70",
    "description": "This is a detailed description for scholarship 70. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 71,
    "name": "Music and Arts Grant 71",
    "provider": "Civic Group",
    "amount": 5077,
    "deadline": "2026-02-28",
    "qualifications": [
      "Veteran",
      "Creative Arts",
      "STEM"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/71",
    "description": "This is a detailed description for scholarship 71. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 72,
    "name": "Entrepreneurial Spirit Grant 72",
    "provider": "Humanities Board",
    "amount": 4518,
    "deadline": "2026-01-27",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Global",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/72",
    "description": "This is a detailed description for scholarship 72. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 73,
    "name": "Cultural Heritage Scholarship 73",
    "provider": "Civic Group",
    "amount": 1655,
    "deadline": "2026-11-12",
    "qualifications": [
      "Veteran"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/73",
    "description": "This is a detailed description for scholarship 73. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 74,
    "name": "Social Justice Fellowship 74",
    "provider": "Tech Corp",
    "amount": 3842,
    "deadline": "2026-03-25",
    "qualifications": [
      "LGBTQ+",
      "International Student"
    ],
    "restrictions": [],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/74",
    "description": "This is a detailed description for scholarship 74. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 75,
    "name": "Civic Engagement Award 75",
    "provider": "Educational Partners",
    "amount": 4706,
    "deadline": "2026-06-01",
    "qualifications": [
      "Women"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/75",
    "description": "This is a detailed description for scholarship 75. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 76,
    "name": "Music and Arts Grant 76",
    "provider": "Tech Corp",
    "amount": 8389,
    "deadline": "2026-02-22",
    "qualifications": [
      "High School Senior",
      "LGBTQ+"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/76",
    "description": "This is a detailed description for scholarship 76. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 77,
    "name": "Green Earth Grant 77",
    "provider": "Heritage Foundation",
    "amount": 4844,
    "deadline": "2026-09-01",
    "qualifications": [
      "Undergraduate",
      "LGBTQ+"
    ],
    "restrictions": [],
    "location": "Oregon",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/77",
    "description": "This is a detailed description for scholarship 77. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 78,
    "name": "Sustainable Future Scholarship 78",
    "provider": "Foundations Inc.",
    "amount": 1132,
    "deadline": "2026-08-10",
    "qualifications": [
      "Veteran",
      "Need-based"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/78",
    "description": "This is a detailed description for scholarship 78. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 79,
    "name": "Health and Wellness Award 79",
    "provider": "Tech Corp",
    "amount": 2017,
    "deadline": "2026-10-10",
    "qualifications": [
      "Undergraduate",
      "Merit-based"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "High",
    "link": "https://example.com/scholarship/79",
    "description": "This is a detailed description for scholarship 79. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 80,
    "name": "Entrepreneurial Spirit Grant 80",
    "provider": "Community Trust",
    "amount": 1453,
    "deadline": "2026-11-27",
    "qualifications": [
      "Women"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/80",
    "description": "This is a detailed description for scholarship 80. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 81,
    "name": "Artistic Vision Award 81",
    "provider": "Science Alliance",
    "amount": 6669,
    "deadline": "2026-10-02",
    "qualifications": [
      "Women",
      "Creative Arts",
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/81",
    "description": "This is a detailed description for scholarship 81. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 82,
    "name": "Sustainable Future Scholarship 82",
    "provider": "Leaders of Tomorrow",
    "amount": 1274,
    "deadline": "2026-07-06",
    "qualifications": [
      "Leadership",
      "International Student"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/82",
    "description": "This is a detailed description for scholarship 82. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 83,
    "name": "Community Impact Scholarship 83",
    "provider": "Tech Corp",
    "amount": 3409,
    "deadline": "2026-08-27",
    "qualifications": [
      "Women",
      "STEM"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/83",
    "description": "This is a detailed description for scholarship 83. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 84,
    "name": "Green Earth Grant 84",
    "provider": "Success Academy",
    "amount": 4278,
    "deadline": "2026-10-10",
    "qualifications": [
      "Undergraduate",
      "Merit-based",
      "Minority"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/84",
    "description": "This is a detailed description for scholarship 84. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 85,
    "name": "STEM Excellence Scholarship 85",
    "provider": "Wellness Center",
    "amount": 1595,
    "deadline": "2026-01-02",
    "qualifications": [
      "First-Generation",
      "Need-based"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/85",
    "description": "This is a detailed description for scholarship 85. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 86,
    "name": "Future Leaders Grant 86",
    "provider": "Local Heroes",
    "amount": 4489,
    "deadline": "2026-01-01",
    "qualifications": [
      "Merit-based",
      "Community Service"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/86",
    "description": "This is a detailed description for scholarship 86. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 87,
    "name": "Women in Engineering Scholarship 87",
    "provider": "Global Aid",
    "amount": 8764,
    "deadline": "2026-02-10",
    "qualifications": [
      "Merit-based",
      "High School Senior",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/87",
    "description": "This is a detailed description for scholarship 87. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 88,
    "name": "Entrepreneurial Spirit Grant 88",
    "provider": "Leaders of Tomorrow",
    "amount": 6071,
    "deadline": "2026-11-15",
    "qualifications": [
      "Need-based"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/88",
    "description": "This is a detailed description for scholarship 88. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 89,
    "name": "Women in Engineering Scholarship 89",
    "provider": "Science Alliance",
    "amount": 8075,
    "deadline": "2026-01-27",
    "qualifications": [
      "Merit-based",
      "LGBTQ+"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/89",
    "description": "This is a detailed description for scholarship 89. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 90,
    "name": "Digital Literacy Grant 90",
    "provider": "Community Trust",
    "amount": 7346,
    "deadline": "2026-07-07",
    "qualifications": [
      "First-Generation",
      "Women"
    ],
    "restrictions": [],
    "location": "Texas",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/90",
    "description": "This is a detailed description for scholarship 90. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 91,
    "name": "STEM Excellence Scholarship 91",
    "provider": "Local Heroes",
    "amount": 8595,
    "deadline": "2026-10-28",
    "qualifications": [
      "Women",
      "Need-based"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/91",
    "description": "This is a detailed description for scholarship 91. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 92,
    "name": "Future Leaders Grant 92",
    "provider": "Success Academy",
    "amount": 3813,
    "deadline": "2026-01-11",
    "qualifications": [
      "International Student",
      "Leadership"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Texas",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/92",
    "description": "This is a detailed description for scholarship 92. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 93,
    "name": "Service Excellence Grant 93",
    "provider": "Green Initiative",
    "amount": 2723,
    "deadline": "2026-12-19",
    "qualifications": [
      "Creative Arts",
      "Need-based"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/93",
    "description": "This is a detailed description for scholarship 93. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 94,
    "name": "Social Justice Fellowship 94",
    "provider": "Heritage Foundation",
    "amount": 8810,
    "deadline": "2026-04-14",
    "qualifications": [
      "Merit-based",
      "Minority",
      "International Student"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/94",
    "description": "This is a detailed description for scholarship 94. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 95,
    "name": "Women in Engineering Scholarship 95",
    "provider": "Science Alliance",
    "amount": 5616,
    "deadline": "2026-02-05",
    "qualifications": [
      "Community Service",
      "Leadership"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/95",
    "description": "This is a detailed description for scholarship 95. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 96,
    "name": "First-Generation Success Fund 96",
    "provider": "National Merit",
    "amount": 1831,
    "deadline": "2026-08-13",
    "qualifications": [
      "Undergraduate",
      "Women"
    ],
    "restrictions": [],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/96",
    "description": "This is a detailed description for scholarship 96. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 97,
    "name": "Academic Achievement Award 97",
    "provider": "National Merit",
    "amount": 9598,
    "deadline": "2026-09-14",
    "qualifications": [
      "Women"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/97",
    "description": "This is a detailed description for scholarship 97. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 98,
    "name": "Community Impact Scholarship 98",
    "provider": "Green Initiative",
    "amount": 6404,
    "deadline": "2026-03-23",
    "qualifications": [
      "Veteran"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "High",
    "link": "https://example.com/scholarship/98",
    "description": "This is a detailed description for scholarship 98. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 99,
    "name": "Youth Leadership Award 99",
    "provider": "Science Alliance",
    "amount": 3374,
    "deadline": "2026-09-28",
    "qualifications": [
      "Veteran",
      "Community Service"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/99",
    "description": "This is a detailed description for scholarship 99. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 100,
    "name": "Women in Engineering Scholarship 100",
    "provider": "Leaders of Tomorrow",
    "amount": 3199,
    "deadline": "2026-04-26",
    "qualifications": [
      "Leadership",
      "International Student",
      "Creative Arts"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "Florida",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/100",
    "description": "This is a detailed description for scholarship 100. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 101,
    "name": "Women in Engineering Scholarship 101",
    "provider": "National Merit",
    "amount": 3056,
    "deadline": "2026-04-06",
    "qualifications": [
      "Merit-based"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/101",
    "description": "This is a detailed description for scholarship 101. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 102,
    "name": "Music and Arts Grant 102",
    "provider": "Foundations Inc.",
    "amount": 4956,
    "deadline": "2026-12-18",
    "qualifications": [
      "Minority",
      "Undergraduate",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/102",
    "description": "This is a detailed description for scholarship 102. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 103,
    "name": "Artistic Vision Award 103",
    "provider": "Global Aid",
    "amount": 9616,
    "deadline": "2026-11-07",
    "qualifications": [
      "Need-based"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/103",
    "description": "This is a detailed description for scholarship 103. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 104,
    "name": "STEM Excellence Scholarship 104",
    "provider": "Science Alliance",
    "amount": 8979,
    "deadline": "2026-05-16",
    "qualifications": [
      "Minority",
      "High School Senior",
      "Athletics"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/104",
    "description": "This is a detailed description for scholarship 104. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 105,
    "name": "Tech Innovators Fund 105",
    "provider": "Educational Partners",
    "amount": 9055,
    "deadline": "2026-04-11",
    "qualifications": [
      "Leadership",
      "Merit-based",
      "Athletics"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Florida",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/105",
    "description": "This is a detailed description for scholarship 105. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 106,
    "name": "Digital Literacy Grant 106",
    "provider": "Future Fund",
    "amount": 8394,
    "deadline": "2026-01-18",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Texas",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/106",
    "description": "This is a detailed description for scholarship 106. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 107,
    "name": "Service Excellence Grant 107",
    "provider": "Green Initiative",
    "amount": 1879,
    "deadline": "2026-10-13",
    "qualifications": [
      "Need-based",
      "Creative Arts",
      "Veteran"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "New York",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/107",
    "description": "This is a detailed description for scholarship 107. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 108,
    "name": "Women in Engineering Scholarship 108",
    "provider": "Success Academy",
    "amount": 6134,
    "deadline": "2026-03-08",
    "qualifications": [
      "Minority",
      "Creative Arts",
      "LGBTQ+"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "California",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/108",
    "description": "This is a detailed description for scholarship 108. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 109,
    "name": "Sustainable Future Scholarship 109",
    "provider": "Diversity Council",
    "amount": 4402,
    "deadline": "2026-09-27",
    "qualifications": [
      "Community Service"
    ],
    "restrictions": [],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/109",
    "description": "This is a detailed description for scholarship 109. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 110,
    "name": "Digital Literacy Grant 110",
    "provider": "Community Trust",
    "amount": 4088,
    "deadline": "2026-10-08",
    "qualifications": [
      "Leadership",
      "International Student"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "Global",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/110",
    "description": "This is a detailed description for scholarship 110. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 111,
    "name": "Green Earth Grant 111",
    "provider": "Innovation Lab",
    "amount": 8242,
    "deadline": "2026-10-02",
    "qualifications": [
      "High School Senior"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/111",
    "description": "This is a detailed description for scholarship 111. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 112,
    "name": "Green Earth Grant 112",
    "provider": "Future Fund",
    "amount": 6436,
    "deadline": "2026-05-22",
    "qualifications": [
      "STEM",
      "Women"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/112",
    "description": "This is a detailed description for scholarship 112. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 113,
    "name": "Digital Literacy Grant 113",
    "provider": "Global Aid",
    "amount": 7626,
    "deadline": "2026-03-23",
    "qualifications": [
      "Creative Arts"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/113",
    "description": "This is a detailed description for scholarship 113. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 114,
    "name": "Service Excellence Grant 114",
    "provider": "Civic Group",
    "amount": 9874,
    "deadline": "2026-02-27",
    "qualifications": [
      "Need-based"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/114",
    "description": "This is a detailed description for scholarship 114. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 115,
    "name": "Entrepreneurial Spirit Grant 115",
    "provider": "Tech Corp",
    "amount": 8524,
    "deadline": "2026-08-03",
    "qualifications": [
      "Creative Arts",
      "Women"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Oregon",
    "likelihood": "High",
    "link": "https://example.com/scholarship/115",
    "description": "This is a detailed description for scholarship 115. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 116,
    "name": "Civic Engagement Award 116",
    "provider": "Success Academy",
    "amount": 1014,
    "deadline": "2026-02-08",
    "qualifications": [
      "Need-based",
      "Athletics",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/116",
    "description": "This is a detailed description for scholarship 116. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 117,
    "name": "Youth Leadership Award 117",
    "provider": "Science Alliance",
    "amount": 7450,
    "deadline": "2026-01-15",
    "qualifications": [
      "Minority",
      "Athletics",
      "Undergraduate"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Global",
    "likelihood": "High",
    "link": "https://example.com/scholarship/117",
    "description": "This is a detailed description for scholarship 117. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 118,
    "name": "First-Generation Success Fund 118",
    "provider": "Innovation Lab",
    "amount": 2786,
    "deadline": "2026-10-21",
    "qualifications": [
      "Community Service",
      "International Student",
      "STEM"
    ],
    "restrictions": [],
    "location": "Texas",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/118",
    "description": "This is a detailed description for scholarship 118. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 119,
    "name": "Tech Innovators Fund 119",
    "provider": "Future Fund",
    "amount": 813,
    "deadline": "2026-05-21",
    "qualifications": [
      "Undergraduate",
      "Need-based"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Texas",
    "likelihood": "High",
    "link": "https://example.com/scholarship/119",
    "description": "This is a detailed description for scholarship 119. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 120,
    "name": "Social Justice Fellowship 120",
    "provider": "Heritage Foundation",
    "amount": 8591,
    "deadline": "2026-07-27",
    "qualifications": [
      "Veteran",
      "Merit-based",
      "Minority"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/120",
    "description": "This is a detailed description for scholarship 120. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 121,
    "name": "Artistic Vision Award 121",
    "provider": "Heritage Foundation",
    "amount": 8119,
    "deadline": "2026-01-20",
    "qualifications": [
      "Athletics",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/121",
    "description": "This is a detailed description for scholarship 121. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 122,
    "name": "Health and Wellness Award 122",
    "provider": "Civic Group",
    "amount": 3456,
    "deadline": "2026-02-22",
    "qualifications": [
      "International Student"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/122",
    "description": "This is a detailed description for scholarship 122. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 123,
    "name": "Sustainable Future Scholarship 123",
    "provider": "Diversity Council",
    "amount": 6419,
    "deadline": "2026-02-13",
    "qualifications": [
      "Need-based"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/123",
    "description": "This is a detailed description for scholarship 123. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 124,
    "name": "Cultural Heritage Scholarship 124",
    "provider": "Future Fund",
    "amount": 2360,
    "deadline": "2026-05-08",
    "qualifications": [
      "First-Generation",
      "Minority",
      "International Student"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "Oregon",
    "likelihood": "High",
    "link": "https://example.com/scholarship/124",
    "description": "This is a detailed description for scholarship 124. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 125,
    "name": "Social Justice Fellowship 125",
    "provider": "Green Initiative",
    "amount": 5253,
    "deadline": "2026-08-25",
    "qualifications": [
      "International Student",
      "Women"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Texas",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/125",
    "description": "This is a detailed description for scholarship 125. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 126,
    "name": "Social Justice Fellowship 126",
    "provider": "Civic Group",
    "amount": 8634,
    "deadline": "2026-12-20",
    "qualifications": [
      "High School Senior",
      "Undergraduate"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/126",
    "description": "This is a detailed description for scholarship 126. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 127,
    "name": "Academic Achievement Award 127",
    "provider": "Global Reach",
    "amount": 1380,
    "deadline": "2026-06-16",
    "qualifications": [
      "First-Generation",
      "Veteran",
      "STEM"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/127",
    "description": "This is a detailed description for scholarship 127. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 128,
    "name": "Global Perspectives Fellowship 128",
    "provider": "Community Trust",
    "amount": 7259,
    "deadline": "2026-11-25",
    "qualifications": [
      "First-Generation",
      "Merit-based"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Global",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/128",
    "description": "This is a detailed description for scholarship 128. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 129,
    "name": "Tech Innovators Fund 129",
    "provider": "Civic Group",
    "amount": 4608,
    "deadline": "2026-08-28",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/129",
    "description": "This is a detailed description for scholarship 129. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 130,
    "name": "Women in Engineering Scholarship 130",
    "provider": "Educational Partners",
    "amount": 6544,
    "deadline": "2026-02-22",
    "qualifications": [
      "Creative Arts",
      "High School Senior"
    ],
    "restrictions": [],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/130",
    "description": "This is a detailed description for scholarship 130. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 131,
    "name": "Cultural Heritage Scholarship 131",
    "provider": "Arts Council",
    "amount": 2941,
    "deadline": "2026-03-09",
    "qualifications": [
      "LGBTQ+",
      "STEM"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/131",
    "description": "This is a detailed description for scholarship 131. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 132,
    "name": "First-Generation Success Fund 132",
    "provider": "Green Initiative",
    "amount": 2455,
    "deadline": "2026-03-14",
    "qualifications": [
      "Women",
      "High School Senior",
      "Community Service"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "Global",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/132",
    "description": "This is a detailed description for scholarship 132. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 133,
    "name": "Civic Engagement Award 133",
    "provider": "Tech Corp",
    "amount": 629,
    "deadline": "2026-07-06",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/133",
    "description": "This is a detailed description for scholarship 133. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 134,
    "name": "Sustainable Future Scholarship 134",
    "provider": "Global Aid",
    "amount": 5078,
    "deadline": "2026-12-23",
    "qualifications": [
      "Community Service",
      "Creative Arts"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/134",
    "description": "This is a detailed description for scholarship 134. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 135,
    "name": "Music and Arts Grant 135",
    "provider": "Educational Partners",
    "amount": 9699,
    "deadline": "2026-05-12",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Global",
    "likelihood": "High",
    "link": "https://example.com/scholarship/135",
    "description": "This is a detailed description for scholarship 135. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 136,
    "name": "Health and Wellness Award 136",
    "provider": "National Merit",
    "amount": 1406,
    "deadline": "2026-12-04",
    "qualifications": [
      "Women"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "Illinois",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/136",
    "description": "This is a detailed description for scholarship 136. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 137,
    "name": "Sustainable Future Scholarship 137",
    "provider": "Science Alliance",
    "amount": 6098,
    "deadline": "2026-09-02",
    "qualifications": [
      "Minority"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/137",
    "description": "This is a detailed description for scholarship 137. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 138,
    "name": "Tech Innovators Fund 138",
    "provider": "Global Aid",
    "amount": 1254,
    "deadline": "2026-07-24",
    "qualifications": [
      "International Student",
      "Minority",
      "Leadership"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/138",
    "description": "This is a detailed description for scholarship 138. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 139,
    "name": "Community Impact Scholarship 139",
    "provider": "Educational Partners",
    "amount": 2695,
    "deadline": "2026-03-04",
    "qualifications": [
      "Need-based",
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/139",
    "description": "This is a detailed description for scholarship 139. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 140,
    "name": "Entrepreneurial Spirit Grant 140",
    "provider": "Green Initiative",
    "amount": 6575,
    "deadline": "2026-06-14",
    "qualifications": [
      "Community Service",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/140",
    "description": "This is a detailed description for scholarship 140. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 141,
    "name": "Green Earth Grant 141",
    "provider": "Green Initiative",
    "amount": 7647,
    "deadline": "2026-02-05",
    "qualifications": [
      "Minority"
    ],
    "restrictions": [
      "Full-time student"
    ],
    "location": "Illinois",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/141",
    "description": "This is a detailed description for scholarship 141. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 142,
    "name": "Entrepreneurial Spirit Grant 142",
    "provider": "Educational Partners",
    "amount": 5488,
    "deadline": "2026-01-18",
    "qualifications": [
      "Women"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/142",
    "description": "This is a detailed description for scholarship 142. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 143,
    "name": "Community Impact Scholarship 143",
    "provider": "Educational Partners",
    "amount": 7232,
    "deadline": "2026-04-19",
    "qualifications": [
      "Undergraduate",
      "Veteran",
      "LGBTQ+"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/143",
    "description": "This is a detailed description for scholarship 143. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 144,
    "name": "Sustainable Future Scholarship 144",
    "provider": "Global Reach",
    "amount": 5465,
    "deadline": "2026-09-21",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Oregon",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/144",
    "description": "This is a detailed description for scholarship 144. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 145,
    "name": "Artistic Vision Award 145",
    "provider": "Civic Group",
    "amount": 646,
    "deadline": "2026-10-09",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/145",
    "description": "This is a detailed description for scholarship 145. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 146,
    "name": "Academic Achievement Award 146",
    "provider": "Diversity Council",
    "amount": 9446,
    "deadline": "2026-04-15",
    "qualifications": [
      "High School Senior"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/146",
    "description": "This is a detailed description for scholarship 146. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 147,
    "name": "Social Justice Fellowship 147",
    "provider": "Diversity Council",
    "amount": 8861,
    "deadline": "2026-08-08",
    "qualifications": [
      "International Student",
      "Athletics",
      "Veteran"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/147",
    "description": "This is a detailed description for scholarship 147. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 148,
    "name": "Tech Innovators Fund 148",
    "provider": "Foundations Inc.",
    "amount": 2517,
    "deadline": "2026-06-17",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/148",
    "description": "This is a detailed description for scholarship 148. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 149,
    "name": "Youth Leadership Award 149",
    "provider": "Foundations Inc.",
    "amount": 3513,
    "deadline": "2026-08-18",
    "qualifications": [
      "Merit-based"
    ],
    "restrictions": [],
    "location": "Oregon",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/149",
    "description": "This is a detailed description for scholarship 149. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 150,
    "name": "Civic Engagement Award 150",
    "provider": "Global Aid",
    "amount": 6947,
    "deadline": "2026-05-23",
    "qualifications": [
      "Women",
      "STEM",
      "Leadership"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "California",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/150",
    "description": "This is a detailed description for scholarship 150. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 151,
    "name": "Future Leaders Grant 151",
    "provider": "Success Academy",
    "amount": 3473,
    "deadline": "2026-03-27",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/151",
    "description": "This is a detailed description for scholarship 151. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 152,
    "name": "Global Perspectives Fellowship 152",
    "provider": "Diversity Council",
    "amount": 7983,
    "deadline": "2026-12-10",
    "qualifications": [
      "First-Generation",
      "Need-based"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/152",
    "description": "This is a detailed description for scholarship 152. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 153,
    "name": "Green Earth Grant 153",
    "provider": "Leaders of Tomorrow",
    "amount": 2065,
    "deadline": "2026-06-08",
    "qualifications": [
      "Veteran",
      "LGBTQ+"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/153",
    "description": "This is a detailed description for scholarship 153. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 154,
    "name": "Green Earth Grant 154",
    "provider": "Tech Corp",
    "amount": 9598,
    "deadline": "2026-12-04",
    "qualifications": [
      "International Student",
      "Veteran"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "California",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/154",
    "description": "This is a detailed description for scholarship 154. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 155,
    "name": "Social Justice Fellowship 155",
    "provider": "Foundations Inc.",
    "amount": 9597,
    "deadline": "2026-05-23",
    "qualifications": [
      "Merit-based"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Texas",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/155",
    "description": "This is a detailed description for scholarship 155. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 156,
    "name": "Music and Arts Grant 156",
    "provider": "Arts Council",
    "amount": 2156,
    "deadline": "2026-08-17",
    "qualifications": [
      "High School Senior",
      "Athletics"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "High",
    "link": "https://example.com/scholarship/156",
    "description": "This is a detailed description for scholarship 156. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 157,
    "name": "Cultural Heritage Scholarship 157",
    "provider": "Diversity Council",
    "amount": 6650,
    "deadline": "2026-10-05",
    "qualifications": [
      "LGBTQ+"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/157",
    "description": "This is a detailed description for scholarship 157. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 158,
    "name": "Health and Wellness Award 158",
    "provider": "Heritage Foundation",
    "amount": 4496,
    "deadline": "2026-11-10",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/158",
    "description": "This is a detailed description for scholarship 158. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 159,
    "name": "First-Generation Success Fund 159",
    "provider": "Local Heroes",
    "amount": 984,
    "deadline": "2026-05-12",
    "qualifications": [
      "STEM"
    ],
    "restrictions": [],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/159",
    "description": "This is a detailed description for scholarship 159. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 160,
    "name": "Music and Arts Grant 160",
    "provider": "Global Reach",
    "amount": 2355,
    "deadline": "2026-07-16",
    "qualifications": [
      "First-Generation",
      "LGBTQ+"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/160",
    "description": "This is a detailed description for scholarship 160. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 161,
    "name": "Health and Wellness Award 161",
    "provider": "Educational Partners",
    "amount": 4348,
    "deadline": "2026-11-27",
    "qualifications": [
      "Creative Arts"
    ],
    "restrictions": [],
    "location": "Texas",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/161",
    "description": "This is a detailed description for scholarship 161. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 162,
    "name": "Community Impact Scholarship 162",
    "provider": "Educational Partners",
    "amount": 4931,
    "deadline": "2026-05-20",
    "qualifications": [
      "Community Service",
      "First-Generation",
      "Merit-based"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/162",
    "description": "This is a detailed description for scholarship 162. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 163,
    "name": "Artistic Vision Award 163",
    "provider": "Tech Corp",
    "amount": 1528,
    "deadline": "2026-12-05",
    "qualifications": [
      "Creative Arts",
      "First-Generation"
    ],
    "restrictions": [],
    "location": "Oregon",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/163",
    "description": "This is a detailed description for scholarship 163. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 164,
    "name": "Youth Leadership Award 164",
    "provider": "Green Initiative",
    "amount": 8524,
    "deadline": "2026-09-27",
    "qualifications": [
      "Athletics",
      "Creative Arts",
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/164",
    "description": "This is a detailed description for scholarship 164. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 165,
    "name": "Music and Arts Grant 165",
    "provider": "Science Alliance",
    "amount": 2500,
    "deadline": "2026-01-12",
    "qualifications": [
      "Women",
      "First-Generation"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/165",
    "description": "This is a detailed description for scholarship 165. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 166,
    "name": "Tech Innovators Fund 166",
    "provider": "Global Aid",
    "amount": 2774,
    "deadline": "2026-10-11",
    "qualifications": [
      "Veteran",
      "First-Generation"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "Global",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/166",
    "description": "This is a detailed description for scholarship 166. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 167,
    "name": "Civic Engagement Award 167",
    "provider": "Success Academy",
    "amount": 4545,
    "deadline": "2026-04-28",
    "qualifications": [
      "Athletics",
      "LGBTQ+"
    ],
    "restrictions": [],
    "location": "Oregon",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/167",
    "description": "This is a detailed description for scholarship 167. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 168,
    "name": "Service Excellence Grant 168",
    "provider": "Heritage Foundation",
    "amount": 2293,
    "deadline": "2026-02-02",
    "qualifications": [
      "Need-based",
      "Community Service"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/168",
    "description": "This is a detailed description for scholarship 168. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 169,
    "name": "Digital Literacy Grant 169",
    "provider": "Diversity Council",
    "amount": 7379,
    "deadline": "2026-10-15",
    "qualifications": [
      "Athletics",
      "Merit-based",
      "Community Service"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/169",
    "description": "This is a detailed description for scholarship 169. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 170,
    "name": "Digital Literacy Grant 170",
    "provider": "Educational Partners",
    "amount": 1235,
    "deadline": "2026-09-03",
    "qualifications": [
      "High School Senior",
      "Creative Arts"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "Washington",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/170",
    "description": "This is a detailed description for scholarship 170. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 171,
    "name": "Health and Wellness Award 171",
    "provider": "Arts Council",
    "amount": 9615,
    "deadline": "2026-06-19",
    "qualifications": [
      "First-Generation"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Washington",
    "likelihood": "High",
    "link": "https://example.com/scholarship/171",
    "description": "This is a detailed description for scholarship 171. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 172,
    "name": "Service Excellence Grant 172",
    "provider": "Local Heroes",
    "amount": 1938,
    "deadline": "2026-05-03",
    "qualifications": [
      "Minority",
      "Veteran"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/172",
    "description": "This is a detailed description for scholarship 172. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 173,
    "name": "Social Justice Fellowship 173",
    "provider": "Foundations Inc.",
    "amount": 1913,
    "deadline": "2026-12-20",
    "qualifications": [
      "Minority"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/173",
    "description": "This is a detailed description for scholarship 173. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 174,
    "name": "Sustainable Future Scholarship 174",
    "provider": "Foundations Inc.",
    "amount": 1093,
    "deadline": "2026-02-11",
    "qualifications": [
      "Veteran",
      "LGBTQ+",
      "Athletics"
    ],
    "restrictions": [],
    "location": "National",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/174",
    "description": "This is a detailed description for scholarship 174. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 175,
    "name": "Sustainable Future Scholarship 175",
    "provider": "Green Initiative",
    "amount": 7796,
    "deadline": "2026-05-24",
    "qualifications": [
      "Leadership"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "California",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/175",
    "description": "This is a detailed description for scholarship 175. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 176,
    "name": "Future Leaders Grant 176",
    "provider": "Civic Group",
    "amount": 2962,
    "deadline": "2026-04-15",
    "qualifications": [
      "Minority",
      "Creative Arts"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/176",
    "description": "This is a detailed description for scholarship 176. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 177,
    "name": "Digital Literacy Grant 177",
    "provider": "Civic Group",
    "amount": 5894,
    "deadline": "2026-03-13",
    "qualifications": [
      "International Student",
      "Leadership",
      "Community Service"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/177",
    "description": "This is a detailed description for scholarship 177. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 178,
    "name": "First-Generation Success Fund 178",
    "provider": "Heritage Foundation",
    "amount": 4487,
    "deadline": "2026-12-23",
    "qualifications": [
      "Need-based",
      "Athletics",
      "Minority"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Texas",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/178",
    "description": "This is a detailed description for scholarship 178. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 179,
    "name": "Civic Engagement Award 179",
    "provider": "Diversity Council",
    "amount": 2019,
    "deadline": "2026-06-02",
    "qualifications": [
      "High School Senior"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/179",
    "description": "This is a detailed description for scholarship 179. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 180,
    "name": "Future Leaders Grant 180",
    "provider": "Green Initiative",
    "amount": 9940,
    "deadline": "2026-03-27",
    "qualifications": [
      "Creative Arts",
      "STEM",
      "Athletics"
    ],
    "restrictions": [],
    "location": "Texas",
    "likelihood": "High",
    "link": "https://example.com/scholarship/180",
    "description": "This is a detailed description for scholarship 180. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 181,
    "name": "Cultural Heritage Scholarship 181",
    "provider": "Global Reach",
    "amount": 864,
    "deadline": "2026-03-14",
    "qualifications": [
      "LGBTQ+",
      "Merit-based",
      "Need-based"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "California",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/181",
    "description": "This is a detailed description for scholarship 181. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 182,
    "name": "STEM Excellence Scholarship 182",
    "provider": "Heritage Foundation",
    "amount": 3827,
    "deadline": "2026-01-27",
    "qualifications": [
      "Veteran",
      "Women",
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/182",
    "description": "This is a detailed description for scholarship 182. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 183,
    "name": "Community Impact Scholarship 183",
    "provider": "Wellness Center",
    "amount": 6464,
    "deadline": "2026-04-09",
    "qualifications": [
      "Veteran",
      "Minority"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "High",
    "link": "https://example.com/scholarship/183",
    "description": "This is a detailed description for scholarship 183. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 184,
    "name": "Service Excellence Grant 184",
    "provider": "Global Reach",
    "amount": 846,
    "deadline": "2026-12-17",
    "qualifications": [
      "Merit-based",
      "Women",
      "Creative Arts"
    ],
    "restrictions": [
      "Non-smoker"
    ],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/184",
    "description": "This is a detailed description for scholarship 184. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 185,
    "name": "Youth Leadership Award 185",
    "provider": "Science Alliance",
    "amount": 1987,
    "deadline": "2026-07-13",
    "qualifications": [
      "Undergraduate"
    ],
    "restrictions": [],
    "location": "Illinois",
    "likelihood": "High",
    "link": "https://example.com/scholarship/185",
    "description": "This is a detailed description for scholarship 185. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 186,
    "name": "Cultural Heritage Scholarship 186",
    "provider": "Global Aid",
    "amount": 1474,
    "deadline": "2026-04-27",
    "qualifications": [
      "Creative Arts",
      "Merit-based"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/186",
    "description": "This is a detailed description for scholarship 186. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 187,
    "name": "Future Leaders Grant 187",
    "provider": "Diversity Council",
    "amount": 8834,
    "deadline": "2026-06-27",
    "qualifications": [
      "Minority",
      "International Student"
    ],
    "restrictions": [
      "NY Resident"
    ],
    "location": "Texas",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/187",
    "description": "This is a detailed description for scholarship 187. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 188,
    "name": "Community Impact Scholarship 188",
    "provider": "National Merit",
    "amount": 2151,
    "deadline": "2026-08-22",
    "qualifications": [
      "Athletics",
      "Leadership",
      "International Student"
    ],
    "restrictions": [
      "US Citizen"
    ],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/188",
    "description": "This is a detailed description for scholarship 188. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 189,
    "name": "Digital Literacy Grant 189",
    "provider": "National Merit",
    "amount": 6008,
    "deadline": "2026-05-17",
    "qualifications": [
      "Athletics",
      "LGBTQ+"
    ],
    "restrictions": [],
    "location": "Global",
    "likelihood": "High",
    "link": "https://example.com/scholarship/189",
    "description": "This is a detailed description for scholarship 189. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 190,
    "name": "First-Generation Success Fund 190",
    "provider": "Foundations Inc.",
    "amount": 7684,
    "deadline": "2026-10-08",
    "qualifications": [
      "Veteran"
    ],
    "restrictions": [
      "TX Resident"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/190",
    "description": "This is a detailed description for scholarship 190. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 191,
    "name": "First-Generation Success Fund 191",
    "provider": "Success Academy",
    "amount": 7980,
    "deadline": "2026-01-28",
    "qualifications": [
      "Women",
      "Merit-based"
    ],
    "restrictions": [
      "CA Resident"
    ],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/191",
    "description": "This is a detailed description for scholarship 191. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 192,
    "name": "Academic Achievement Award 192",
    "provider": "Green Initiative",
    "amount": 8008,
    "deadline": "2026-02-09",
    "qualifications": [
      "Community Service",
      "Need-based"
    ],
    "restrictions": [
      "GPA > 3.5"
    ],
    "location": "New York",
    "likelihood": "High",
    "link": "https://example.com/scholarship/192",
    "description": "This is a detailed description for scholarship 192. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 193,
    "name": "Tech Innovators Fund 193",
    "provider": "Foundations Inc.",
    "amount": 9222,
    "deadline": "2026-08-13",
    "qualifications": [
      "LGBTQ+",
      "Women",
      "Veteran"
    ],
    "restrictions": [],
    "location": "Washington",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/193",
    "description": "This is a detailed description for scholarship 193. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 194,
    "name": "Civic Engagement Award 194",
    "provider": "Civic Group",
    "amount": 9516,
    "deadline": "2026-12-09",
    "qualifications": [
      "Athletics",
      "Merit-based"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/194",
    "description": "This is a detailed description for scholarship 194. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 195,
    "name": "Social Justice Fellowship 195",
    "provider": "Diversity Council",
    "amount": 7461,
    "deadline": "2026-05-24",
    "qualifications": [
      "Creative Arts",
      "Women"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/195",
    "description": "This is a detailed description for scholarship 195. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 196,
    "name": "STEM Excellence Scholarship 196",
    "provider": "Future Fund",
    "amount": 9534,
    "deadline": "2026-06-13",
    "qualifications": [
      "STEM",
      "Merit-based"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "Medium",
    "link": "https://example.com/scholarship/196",
    "description": "This is a detailed description for scholarship 196. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 197,
    "name": "Future Leaders Grant 197",
    "provider": "Humanities Board",
    "amount": 1754,
    "deadline": "2026-07-13",
    "qualifications": [
      "International Student",
      "Women"
    ],
    "restrictions": [],
    "location": "Florida",
    "likelihood": "High",
    "link": "https://example.com/scholarship/197",
    "description": "This is a detailed description for scholarship 197. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 198,
    "name": "Civic Engagement Award 198",
    "provider": "Global Reach",
    "amount": 7042,
    "deadline": "2026-09-21",
    "qualifications": [
      "LGBTQ+",
      "Community Service"
    ],
    "restrictions": [
      "GPA > 3.0"
    ],
    "location": "National",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/198",
    "description": "This is a detailed description for scholarship 198. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 199,
    "name": "Health and Wellness Award 199",
    "provider": "Arts Council",
    "amount": 5222,
    "deadline": "2026-11-19",
    "qualifications": [
      "Athletics",
      "Undergraduate",
      "Community Service"
    ],
    "restrictions": [
      "Must study in US"
    ],
    "location": "California",
    "likelihood": "High",
    "link": "https://example.com/scholarship/199",
    "description": "This is a detailed description for scholarship 199. It provides financial support for students who demonstrate excellence in their chosen field."
  },
  {
    "id": 200,
    "name": "Women in Engineering Scholarship 200",
    "provider": "Future Fund",
    "amount": 6462,
    "deadline": "2026-03-04",
    "qualifications": [
      "Veteran"
    ],
    "restrictions": [],
    "location": "New York",
    "likelihood": "Low",
    "link": "https://example.com/scholarship/200",
    "description": "This is a detailed description for scholarship 200. It provides financial support for students who demonstrate excellence in their chosen field."
  }
];