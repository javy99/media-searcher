import { ITunesApiResponse, SearchOptions, SearchResult } from "@/types";

const BASE_URL = 'https://itunes.apple.com/search';

const buildQueryString = (options: SearchOptions): string => {
  const params = new URLSearchParams();
  for (const key in options) {
    const optionKey = key as keyof SearchOptions;
    if (options[optionKey] !== undefined) {
      params.append(key, String(options[optionKey]));
    }
  }

  return params.toString();
}

export async function fetchSearchResults(options: SearchOptions): Promise<SearchResult[] | null> {
  try {
    const queryString = buildQueryString(options);
    const FINAL_URL = `${BASE_URL}?${queryString}`;
    const response = await fetch(FINAL_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: ITunesApiResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}