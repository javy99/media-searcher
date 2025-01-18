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

export interface SearchOptions {
  term: string;
  country?: string;
  media?: string;
  entity?: string;
  attribute?: string;
  limit?: number;
  lang?: string;
  version?: number;
  explicit?: "Yes" | "No";
}

export interface SearchOptionsState {
  media: MediaType;
  entity: string | undefined;
  country: string;
  attribute: string;
  limit: number | undefined;
  lang: string;
  version: number | undefined;
  explicit: "Yes" | "No";
}

export interface SearchResult {
  wrapperType: string;
  explicitness: string;
  kind: string;
  trackName: string;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artworkUrl100: string;
  artworkUrl60: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  trackTimeMillis: number;
  artistId: number;
  collectionId: number;
  trackId: number;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionPrice: number;
  trackPrice: number;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount: number;
  discNumber: number;
  trackCount: number;
  trackNumber: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  releaseDate: string;
}

export interface ITunesApiResponse {
  resultCount: number;
  results: SearchResult[];
}
