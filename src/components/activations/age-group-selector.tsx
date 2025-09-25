import React from "react";
import { Select, SelectItem } from "@heroui/react";

// Age group data (can also be imported from activations-data.ts)
const ageGroups = [
  { key: "4-8", label: "4-8 years" },
  { key: "9-13", label: "9-13 years" },
  { key: "14-18", label: "14-18 years" }
];

interface AgeGroupSelectorProps {
  selectedAgeGroup: string;
  setSelectedAgeGroup: (group: string) => void;
  className?: string;
  label?: string;
  showLabel?: boolean;
}

export const AgeGroupSelector: React.FC<AgeGroupSelectorProps> = ({
  selectedAgeGroup,
  setSelectedAgeGroup,
  className = "",
  label = "Age Group",
  showLabel = true
}) => {
  return (
    <div className={className}>
      {showLabel && (
        <label className="text-white mb-2 block font-medium">
          {label}
        </label>
      )}
      <Select
        selectedKeys={[selectedAgeGroup]}
        onSelectionChange={(keys) => {
          const selected = Array.from(keys)[0] as string;
          if (selected) {
            setSelectedAgeGroup(selected);
          }
        }}
        className="bg-pomegranate-800/50"
        classNames={{
          trigger: "bg-pomegranate-800/50 text-white border-white/20 hover:bg-pomegranate-800/70 h-12 data-[hover=true]:bg-pomegranate-800/70",
          value: "text-white",
          popoverContent: "bg-pomegranate-700 border border-white/20",
          listbox: "bg-pomegranate-700",
          listboxWrapper: "max-h-[400px]",
        }}
        aria-label="Select age group"
        placeholder="Select an age group"
      >
        {ageGroups.map((group) => (
          <SelectItem 
            key={group.key}
            classNames={{
              base: "data-[hover=true]:bg-pomegranate-600 data-[hover=true]:text-white data-[selectable=true]:focus:bg-pomegranate-600 data-[pressed=true]:opacity-70 data-[focus-visible=true]:ring-white",
              selectedIcon: "text-white",
            }}
          >
            {group.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

// Export for use in other components
export default AgeGroupSelector;