import { countries } from "./countries";

const positionOptions = [
  {
    value: "founder/ceo",
    label: "Founder/CEO",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "other",
    label: "Other",
  },
];

const industryOptions = [
  {
    value: "apparel",
    label: "Apparel",
  },
  {
    value: "automotive",
    label: "Automotive",
  },
  {
    value: "games",
    label: "Games",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "consumer electronics",
    label: "Consumer Electronics",
  },
  {
    value: "consumer goods",
    label: "Consumer Goods",
  },
  {
    value: "services",
    label: "Services",
  },
  {
    value: "cosmetics",
    label: "Cosmetics",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "food & beverages",
    label: "Food & Beverages",
  },
  {
    value: "health, wellness, fitness",
    label: "Health, Wellness, Fitness",
  },
  {
    value: "leisure, travel, tourism",
    label: "Leisure, Travel, Tourism",
  },
  {
    value: "luxury goods, jewelry",
    label: "Luxury Goods, Jewelry",
  },

  {
    value: "marketing, advertising",
    label: "Marketing, Advertising",
  },
  {
    value: "retail",
    label: "Retail",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "home",
    label: "Home",
  },
  {
    value: "pets",
    label: "Pets",
  },
  {
    value: "kids & babies",
    label: "Kids & Babies",
  },
  {
    value: "other",
    label: "Other",
  },
];

const countriesOptions = countries.map((country) => {
  return {
    value: country.code,
    label: country.name,
  };
});

const genderOptions = ["Male", "Female", "Both"];

const ageOptions = ["18 - 24", "25 - 34", "35 - 44", "45+"];

const languageOptions = ["English", "Pidgin", "Yoruba", "Igbo", "Hausa"];

const appearanceOptions = [
  "Fit & Sporty",
  "Plus Size",
  "Alternative style",
  "Model/Influencer",
  "Causal & Relatable",
];

const lifeStyleOptions = [
  "Pet owner",
  "Parent",
  "Couple",
  "Model/Influencer",
  "Vehicle owner",
  "Luxury homeowner",
  "Outdoor enthusiast",
  "Mom Influencer",
];

const interestOptions = [
  "Cooking",
  "Fashion & Beauty",
  "Technology",
  "Skits/Comedy",
  "DIY",
  "Health & Wellness",
  "Outdoor activities ",
];

export {
  positionOptions,
  industryOptions,
  countriesOptions,
  genderOptions,
  ageOptions,
  languageOptions,
  lifeStyleOptions,
  appearanceOptions,
  interestOptions,
};
