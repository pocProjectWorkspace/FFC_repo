import React from "react";
import { motion } from "framer-motion";
import { Input, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CafesSearchFiltersProps {
  searchQuery: string;
  selectedType: string;
  selectedEmirate: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onEmirateChange: (value: string) => void;
}

export const CafesSearchFilters: React.FC<CafesSearchFiltersProps> = ({
  searchQuery,
  selectedType,
  selectedEmirate,
  onSearchChange,
  onTypeChange,
  onEmirateChange
}) => {
  return (
    <section className="py-16" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Perfect Café
            </h2>
            <p className="text-lg text-white/80">
              Discover Family First Café locations across the UAE
            </p>
          </div>

          {/* Filters */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Input
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              startContent={<Icon icon="lucide:search" className="text-white/60" />}
              variant="bordered"
              radius="lg"
              classNames={{
                input: "text-white placeholder:text-white/60",
                inputWrapper: "border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 focus-within:border-white/70"
              }}
            />
            
            <Select
              placeholder="Filter by type"
              selectedKeys={selectedType !== "all" ? [selectedType] : []}
              onSelectionChange={(keys) => onTypeChange(Array.from(keys)[0] as string || "all")}
              variant="bordered"
              radius="lg"
              classNames={{
                trigger: "border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 data-[focus=true]:border-white/70",
                value: "text-white"
              }}
            >
              <SelectItem key="all">All Types</SelectItem>
              <SelectItem key="school">School-Based</SelectItem>
              <SelectItem key="community">Community-Based</SelectItem>
            </Select>

            <Select
              placeholder="Filter by emirate"
              selectedKeys={selectedEmirate !== "all" ? [selectedEmirate] : []}
              onSelectionChange={(keys) => onEmirateChange(Array.from(keys)[0] as string || "all")}
              variant="bordered"
              radius="lg"
              classNames={{
                trigger: "border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 data-[focus=true]:border-white/70",
                value: "text-white"
              }}
            >
              <SelectItem key="all">All Emirates</SelectItem>
              <SelectItem key="dubai">Dubai</SelectItem>
              <SelectItem key="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem key="sharjah">Sharjah</SelectItem>
            </Select>
          </div>
        </motion.div>
      </div>
    </section>
  );
};