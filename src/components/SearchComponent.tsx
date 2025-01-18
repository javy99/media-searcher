import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSearchOptions, { SearchOptionsState } from "@/hooks/useSearchOptions";
import { mediaTypeEntities, mediaTypeAttributes, MediaType, countryNames, countryObject } from "@/data";

interface SearchComponentProps {
  onSearch: (options: SearchOptionsState) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const { options, setOptions} = useSearchOptions();

  // Render Entity Options
  const renderEntityOptions = (mediaType: MediaType) => {
    const entities = mediaTypeEntities[mediaType];
    if (!entities) {
      return null;
    }

    return entities.map((entity) => (
      <SelectItem key={entity.value} value={entity.value}>
        {entity.label}
      </SelectItem>
    ));
  };

  // Render Attribute Options
  const renderAttributeOptions = (mediaType: MediaType) => {
    const attributes = mediaTypeAttributes[mediaType];
    if (!attributes) {
      return null;
    }

    return attributes.map((attribute) => (
      <SelectItem key={attribute} value={attribute}>
        {attribute}
      </SelectItem>
    ));
  };

  // Extract media types from the mediaTypeAttributes object
  const mediaTypes = Object.keys(mediaTypeAttributes) as MediaType[];

  const handleOptionChange = (
    key: keyof SearchOptionsState,
    value: string | MediaType | undefined
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
    onSearch({ ...options, [key]: value } as SearchOptionsState);
  };

  const handleCountryOptionChange = (value: string) => {
    const selectedCountryCode = Object.entries(countryObject).find(
      ([, countryName]) => countryName === value
    )?.[0];

    console.log({selectedCountryCode});

    if (selectedCountryCode) {
      handleOptionChange("country", selectedCountryCode);
    }
  };

  return (
    <div className="flex gap-4">
      <Select
        onValueChange={(value) =>
          handleOptionChange("media", value as MediaType)
        }
        value={options.media}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Media" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Media Type</SelectLabel>
            {mediaTypes.map((mediaType) => (
              <SelectItem key={mediaType} value={mediaType}>
                {mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleOptionChange("entity", value)}
        value={options.entity}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Entity" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Entity</SelectLabel>
            {renderEntityOptions(options.media)}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleOptionChange("attribute", value)}
        value={options.attribute}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Attribute" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Attribute</SelectLabel>
            {renderAttributeOptions(options.media)}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={handleCountryOptionChange}
        value={
          countryObject[options.country as keyof typeof countryObject] || ""
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            {countryNames.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleOptionChange("limit", Number(value))}
        value={options.limit}
      >
        <SelectTrigger>
          <SelectValue placeholder="Limit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Limit</SelectLabel>
            {[10, 25, 50, 100, 200].map((limit) => (
              <SelectItem key={limit} value={limit}>
                {limit}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleOptionChange("lang", value)}
        value={options.lang}
      >
        <SelectTrigger>
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Language</SelectLabel>
            {["en_us", "ja_jp"].map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) => handleOptionChange("version", Number(value))}
        value={options.version}
      >
        <SelectTrigger>
          <SelectValue placeholder="Version" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Version</SelectLabel>
            {[1, 2].map((version) => (
              <SelectItem key={version} value={version}>
                {version}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value) =>
          handleOptionChange("explicit", value as "Yes" | "No")
        }
        value={options.explicit}
      >
        <SelectTrigger>
          <SelectValue placeholder="Explicit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Explicit</SelectLabel>
            {["Yes", "No"].map((explicit) => (
              <SelectItem key={explicit} value={explicit}>
                {explicit}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchComponent;
