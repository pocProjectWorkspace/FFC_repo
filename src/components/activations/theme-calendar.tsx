import React from "react";
import { Button, Card, CardBody, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { monthlyThemes, ageGroups } from "./activations-data";

interface ThemeCalendarProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  selectedAgeGroup: string;
  setSelectedAgeGroup: (group: string) => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const ThemeCalendar: React.FC<ThemeCalendarProps> = ({
  selectedMonth,
  setSelectedMonth,
  selectedAgeGroup,
  setSelectedAgeGroup,
  activeTab = "activations",
  setActiveTab = () => {}
}) => {
  return (
    <section className="py-16" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        {/* Calendar Header Button */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-pomegranate-800/50 text-white border border-white/20 hover:bg-pomegranate-800/70 px-8 py-4"
            endContent={<Icon icon="lucide:chevron-down" className="text-lg" />}
          >
            Family First Cafe - Monthly Themed Calendar
          </Button>
        </motion.div>

        {/* Tab Navigation - Activations Menu, Audio Books, Poems & Artists */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => setActiveTab("activations")}
            className={`${
              activeTab === "activations"
                ? "bg-transparent text-white border-b-4 border-white"
                : "bg-transparent text-white/70"
            } hover:bg-white/10 rounded-none py-6 transition-all`}
          >
            Activations Menu
          </Button>

          <Button
            size="lg"
            onClick={() => setActiveTab("audio")}
            className={`${
              activeTab === "audio"
                ? "bg-transparent text-white border-b-4 border-white"
                : "bg-transparent text-white/70"
            } hover:bg-white/10 rounded-none py-6 transition-all`}
          >
            Audio Books
          </Button>

          <Button
            size="lg"
            onClick={() => setActiveTab("poems")}
            className={`${
              activeTab === "poems"
                ? "bg-transparent text-white border-b-4 border-white"
                : "bg-transparent text-white/70"
            } hover:bg-white/10 rounded-none py-6 transition-all`}
          >
            Poems & Artists
          </Button>
        </div>

        {/* Instruction Card with Dropdowns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-5xl mx-auto bg-pomegranate-700/40 border border-white/30 backdrop-blur-sm">
            <CardBody className="p-10">
              {/* Header with Logo and Instructions */}
              <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
                {/* FFC Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src="/logo/FFC Logo black.png" 
                    alt="Family First Café"
                    className="w-24 h-24 md:w-32 md:h-32 filter brightness-0 invert opacity-90"
                  />
                </div>
                
                {/* Instructions Text */}
                <div className="flex-grow pt-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
                    Select the month we are in, select the age group for the children, 
                    ask the cafe staff for the Activations materials and you are all set! Enjoy!
                  </h3>
                </div>
              </div>

              {/* Dropdowns Section */}
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Monthly Theme Dropdown */}
                  <div>
                    <label className="text-white text-lg font-semibold mb-3 block">
                      Monthly Theme
                    </label>
                    <Select
                      selectedKeys={[selectedMonth]}
                      onSelectionChange={(keys) => {
                        const selected = Array.from(keys)[0] as string;
                        if (selected) setSelectedMonth(selected);
                      }}
                      className="w-full"
                      classNames={{
                        trigger: "bg-pomegranate-800/60 text-white border-2 border-white/30 hover:bg-pomegranate-800/80 h-14 text-lg font-medium rounded-xl",
                        value: "text-white",
                        popoverContent: "bg-pomegranate-700 border-2 border-white/30",
                        listbox: "bg-pomegranate-700",
                        base: "w-full"
                      }}
                      aria-label="Select monthly theme"
                      placeholder="September"
                    >
                      {monthlyThemes.map((month) => (
                        <SelectItem 
                          key={month.key}
                          className="text-white"
                          classNames={{
                            base: "data-[hover=true]:bg-pomegranate-600 data-[hover=true]:text-white data-[selectable=true]:focus:bg-pomegranate-600 data-[pressed=true]:opacity-70",
                          }}
                        >
                          {month.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {/* Age Group Dropdown */}
                  <div>
                    <label className="text-white text-lg font-semibold mb-3 block">
                      Age Group
                    </label>
                    <Select
                      selectedKeys={[selectedAgeGroup]}
                      onSelectionChange={(keys) => {
                        const selected = Array.from(keys)[0] as string;
                        if (selected) setSelectedAgeGroup(selected);
                      }}
                      className="w-full"
                      classNames={{
                        trigger: "bg-pomegranate-800/60 text-white border-2 border-white/30 hover:bg-pomegranate-800/80 h-14 text-lg font-medium rounded-xl",
                        value: "text-white",
                        popoverContent: "bg-pomegranate-700 border-2 border-white/30",
                        listbox: "bg-pomegranate-700",
                        base: "w-full"
                      }}
                      aria-label="Select age group"
                      placeholder="4-8 years"
                    >
                      {ageGroups.map((group) => (
                        <SelectItem 
                          key={group.key}
                          className="text-white"
                          classNames={{
                            base: "data-[hover=true]:bg-pomegranate-600 data-[hover=true]:text-white data-[selectable=true]:focus:bg-pomegranate-600 data-[pressed=true]:opacity-70",
                          }}
                        >
                          {group.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};