
import { getAlpha2Codes } from "i18n-iso-countries";
import { mediaTypeEntities } from "./mediaTypeEntities";
import { mediaTypeAttributes } from "./mediaTypeAttributes";

// Get all two-letter country codes: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
const countryCodes = Object.keys(getAlpha2Codes());

export const urlParams = {
  term: {
    description: "The URL-encoded text string you want to search for.",
    required: true,
    example: "jack+johnson",
  },
  country: {
    description:
      "The two-letter country code for the store you want to search.",
    required: true,
    default: "US",
    validValues: countryCodes,
  },
  media: {
    description: "The media type you want to search for.",
    required: false,
    default: "all",
    validValues: Object.keys(mediaTypeEntities),
  },
  entity: {
    description: "The type of results you want returned.",
    required: false,
    validValues: mediaTypeEntities,
  },
  attribute: {
    description: "The attribute you want to search for.",
    required: false,
    validValues: mediaTypeAttributes,
  },
  callback: {
    description: "The name of the Javascript callback function.",
    required: false,
    default: "wsSearchCB",
  },
  limit: {
    description: "The number of search results.",
    required: false,
    default: 25,
    validValues: [1, 200],
  },
  lang: {
    description: "The language for search results.",
    required: false,
    default: "en_us",
    validValues: ["en_us", "ja_jp"],
  },
  version: {
    description: "The search result key version.",
    required: false,
    default: 2,
    validValues: [1, 2],
  },
  explicit: {
    description: "A flag for explicit content.",
    required: false,
    default: "Yes",
    validValues: ["Yes", "No"],
  },
};