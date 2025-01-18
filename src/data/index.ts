
export * from "./mediaTypeAttributes";
export * from "./mediaTypeEntities";
export * from "./urlParams";

export type MediaType =
  | "movie"
  | "podcast"
  | "music"
  | "musicVideo"
  | "audiobook"
  | "shortFilm"
  | "tvShow"
  | "software"
  | "all"
  | "ebook";

export interface Option {
  label: string;
  value: string;
}
export interface SelectOptions {
  media: MediaType;
  entities: Option[];
  attributes: string[];
}

export const mediaTypeEntities: Record<MediaType, Option[]> = {
  movie: [
    { label: "Movie", value: "movie" },
    { label: "Movie Artist", value: "movieArtist" },
  ],
  podcast: [
    { label: "Podcast", value: "podcast" },
    { label: "Podcast Author", value: "podcastAuthor" },
  ],
  music: [
    { label: "Music Artist", value: "musicArtist" },
    { label: "Music Track", value: "musicTrack" },
    { label: "Album", value: "album" },
    { label: "Music Video", value: "musicVideo" },
    { label: "Mix", value: "mix" },
    { label: "Song", value: "song" },
  ],
  musicVideo: [
    { label: "Music Artist", value: "musicArtist" },
    { label: "Music Video", value: "musicVideo" },
  ],
  audiobook: [
    { label: "Audiobook", value: "audiobook" },
    { label: "Audiobook Author", value: "audiobookAuthor" },
  ],
  shortFilm: [
    { label: "Short Film", value: "shortFilm" },
    { label: "Short Film Artist", value: "shortFilmArtist" },
  ],
  tvShow: [
    { label: "TV Episode", value: "tvEpisode" },
    { label: "TV Season", value: "tvSeason" },
  ],
  software: [
    { label: "Software", value: "software" },
    { label: "iPad Software", value: "iPadSoftware" },
    { label: "Mac Software", value: "macSoftware" },
  ],
  ebook: [{ label: "Ebook", value: "ebook" }],
  all: [
    { label: "Movie", value: "movie" },
    { label: "Album", value: "album" },
    { label: "All Artists", value: "allArtist" },
    { label: "Podcast", value: "podcast" },
    { label: "Music Video", value: "musicVideo" },
    { label: "Mix", value: "mix" },
    { label: "Audiobook", value: "audiobook" },
    { label: "TV Season", value: "tvSeason" },
    { label: "All Tracks", value: "allTrack" },
  ],
};

export const mediaTypeAttributes: Record<MediaType, string[]> = {
  movie: [
    "actorTerm",
    "genreIndex",
    "artistTerm",
    "shortFilmTerm",
    "producerTerm",
    "ratingTerm",
    "directorTerm",
    "releaseYearTerm",
    "featureFilmTerm",
    "movieArtistTerm",
    "movieTerm",
    "ratingIndex",
    "descriptionTerm",
  ],
  podcast: [
    "titleTerm",
    "languageTerm",
    "authorTerm",
    "genreIndex",
    "artistTerm",
    "ratingIndex",
    "keywordsTerm",
    "descriptionTerm",
  ],
  music: [
    "mixTerm",
    "genreIndex",
    "artistTerm",
    "composerTerm",
    "albumTerm",
    "ratingIndex",
    "songTerm",
  ],
  musicVideo: [
    "genreIndex",
    "artistTerm",
    "albumTerm",
    "ratingIndex",
    "songTerm",
  ],
  audiobook: ["titleTerm", "authorTerm", "genreIndex", "ratingIndex"],
  shortFilm: [
    "genreIndex",
    "artistTerm",
    "shortFilmTerm",
    "ratingIndex",
    "descriptionTerm",
  ],
  software: ["softwareDeveloper"],
  tvShow: [
    "genreIndex",
    "tvEpisodeTerm",
    "showTerm",
    "tvSeasonTerm",
    "ratingIndex",
    "descriptionTerm",
  ],
  all: [
    "actorTerm",
    "languageTerm",
    "allArtistTerm",
    "tvEpisodeTerm",
    "shortFilmTerm",
    "directorTerm",
    "releaseYearTerm",
    "titleTerm",
    "featureFilmTerm",
    "ratingIndex",
    "keywordsTerm",
    "descriptionTerm",
    "authorTerm",
    "genreIndex",
    "mixTerm",
    "allTrackTerm",
    "artistTerm",
    "composerTerm",
    "tvSeasonTerm",
    "producerTerm",
    "ratingTerm",
    "songTerm",
    "movieArtistTerm",
    "showTerm",
    "movieTerm",
    "albumTerm",
  ],
  ebook: [],
};

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
    validValues: 'countryCodes[0]',
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
    default: "No",
    validValues: ["Yes", "No"],
  },
};