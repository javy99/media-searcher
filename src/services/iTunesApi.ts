import { ITunesApiResponse, SearchResult } from "@/types";

const BASE_URL = 'https://itunes.apple.com/search';

interface SearchOptions {
  term: string;
  country?: string;
  media?: string;
  entity?: string;
  attribute?: string;
  limit?: number;
  lang?: string;
  version?: number;
  explicit: "Yes" | "No";
}

const buildQueryString = (options: SearchOptions): string => {
  const params = new URLSearchParams();
  console.log({options});
  console.log({params});
  for (const key in options) {
    const optionKey = key as keyof SearchOptions;
    if (options[optionKey] !== undefined) {
      params.append(key, String(options[optionKey]));
    }
  }
  console.log({ params });
  console.log('params' + params.toString());

  return params.toString();
}

export async function fetchSearchResults(options: SearchOptions): Promise<SearchResult[] | null> {
  try {
    const queryString = buildQueryString(options);
    console.log({queryString});
    const response = await fetch(`${BASE_URL}?${queryString}`);
    console.log({response});
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