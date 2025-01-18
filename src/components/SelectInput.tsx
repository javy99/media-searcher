import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

export interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  value: string | number | undefined;
  options: string[] | number[] | Option[];
  onChange: (value: string | number) => void;
  placeholder: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  onChange,
  placeholder,
}) => (
  <Select onValueChange={(newValue) => onChange(newValue)}>
    <SelectTrigger>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{label}</SelectLabel>
        {options.map((option, index) => {
          const optionValue =
            typeof option === "object" ? option.value : option;
          const optionLabel =
            typeof option === "object" ? option.label : option;

          return (
            <SelectItem key={index} value={String(optionValue)}>
              {optionLabel}
            </SelectItem>
          );
        })}
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectInput;