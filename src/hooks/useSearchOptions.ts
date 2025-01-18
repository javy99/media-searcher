// hooks/useSearchOptions.tsx
import { useState, useEffect } from "react";
import { MediaType } from "@/data";

export interface SearchOptionsState {
  media: MediaType;
  entity: string | undefined;
  country: string;
  attribute: string;
  limit: number | undefined;
  lang: string;
  version: number | undefined;
  explicit: "Yes" | "No" | undefined;
}

const useSearchOptions = (initialMedia: MediaType = "all") => {
  const [options, setOptions] = useState<SearchOptionsState>({
    media: initialMedia,
    entity: undefined,
    country: "US",
    attribute: "",
    limit: 50,
    lang: "en_us",
    version: 2,
    explicit: "No",
  });

  useEffect(() => {
    setOptions((prev) => ({ ...prev, entity: undefined }));
  }, [options.media]);

  return {
    options,
    setOptions,
  };
};

export default useSearchOptions;
