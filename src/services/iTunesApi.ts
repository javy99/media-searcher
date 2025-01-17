import { ITunesApiResponse, SearchResult } from "@/types";

const BASE_URL = 'https://itunes.apple.com/search';

export async function fetchSearchResults(term: string): Promise<SearchResult[] | null> {
  try {
    const response = await fetch(`${BASE_URL}?term=${term}&entity=song`);

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