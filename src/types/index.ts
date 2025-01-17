export interface SearchResult {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionType: string;
  primaryGenreName: string;
  releaseDate: string;
}

export interface ITunesApiResponse {
  resultCount: number;
  results: SearchResult[];
}