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
}

export interface ITunesApiResponse {
  resultCount: number;
  results: SearchResult[];
}
