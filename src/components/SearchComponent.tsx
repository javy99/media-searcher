import SelectInput from "./SelectInput";
import { MediaType, SearchOptionsState } from "@/types";
import { countryNames, countryObject, mediaTypeAttributes, mediaTypeEntities } from "@/data";
import { useSearchOptions } from "@/hooks";

interface SearchComponentProps {
  onSearch: (options: SearchOptionsState) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
   const { options, setOptions } = useSearchOptions();

   const handleOptionChange = (
     key: keyof SearchOptionsState,
     value: string | MediaType | number | undefined
   ) => {
     setOptions((prev) => ({ ...prev, [key]: value }));
     onSearch({ ...options, [key]: value } as SearchOptionsState);
   };

   const handleCountryOptionChange = (value: string | number) => {
     const selectedCountryCode = Object.entries(countryObject).find(
       ([, countryName]) => countryName === value
     )?.[0];
     if (selectedCountryCode) {
       handleOptionChange("country", selectedCountryCode);
     }
   };

   // Media Types and Values for Select Inputs
   const mediaTypes = Object.keys(mediaTypeAttributes) as MediaType[];
   const limitOptions = Array.from({ length: 200 }, (_, i) => i + 1);
   const languageOptions = {
     en_us: "English",
     ja_jp: "Japanese",
     fr_fr: "French",
     es_es: "Spanish",
     de_de: "German",
     it_it: "Italian",
     pt_pt: "Portuguese",
     ru_ru: "Russian",
     zh_cn: "Chinese",
     ko_kr: "Korean",
     ar_sa: "Arabic",
     hi_in: "Hindi",
     tr_tr: "Turkish",
     pl_pl: "Polish",
     nl_nl: "Dutch",
     sv_se: "Swedish",
     no_no: "Norwegian",
     da_dk: "Danish",
     fi_fi: "Finnish",
     cs_cz: "Czech",
     el_gr: "Greek",
     ro_ro: "Romanian",
     hu_hu: "Hungarian",
     th_th: "Thai",
     id_id: "Indonesian",
     ms_my: "Malay",
     he_il: "Hebrew",
     vi_vn: "Vietnamese",
   };
   const versionOptions = [1, 2];
   const explicitOptions = ["Yes", "No"];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {/* Media Type Select */}
      <SelectInput
        label="Media Type"
        value={options.media}
        options={mediaTypes}
        onChange={(value) => handleOptionChange("media", value as MediaType)}
        placeholder="Select Media"
      />

      {/* Entity Select */}
      <SelectInput
        label="Entity"
        value={options.entity}
        options={
          mediaTypeEntities[options.media]?.map((entity) => entity.value) || []
        }
        onChange={(value) => handleOptionChange("entity", value)}
        placeholder="Select Entity"
      />

      {/* Attribute Select */}
      <SelectInput
        label="Attribute"
        value={options.attribute}
        options={mediaTypeAttributes[options.media] || []}
        onChange={(value) => handleOptionChange("attribute", value)}
        placeholder="Select Attribute"
      />

      {/* Country Select */}
      <SelectInput
        label="Country"
        value={
          countryObject[options.country as keyof typeof countryObject] || ""
        }
        options={countryNames}
        onChange={(value) => handleCountryOptionChange(value)}
        placeholder="Select Country"
      />

      {/* Limit Select */}
      <SelectInput
        label="Limit"
        value={options.limit}
        options={limitOptions}
        onChange={(value) => handleOptionChange("limit", value)}
        placeholder="Limit"
      />

      {/* Language Select */}
      <SelectInput
        label="Language"
        value={options.lang}
        options={Object.entries(languageOptions).map(([code, name]) => ({
          label: name,
          value: code,
        }))}
        onChange={(value) => handleOptionChange("lang", value)}
        placeholder="Language"
      />

      {/* Version Select */}
      <SelectInput
        label="Version"
        value={options.version}
        options={versionOptions}
        onChange={(value) => handleOptionChange("version", value)}
        placeholder="Version"
      />

      {/* Explicit Select */}
      <SelectInput
        label="Explicit"
        value={options.explicit}
        options={explicitOptions}
        onChange={(value) =>
          handleOptionChange("explicit", value as "Yes" | "No")
        }
        placeholder="Explicit"
      />
    </div>
  );
};

export default SearchComponent;
