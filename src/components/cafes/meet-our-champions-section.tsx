import React, { useState } from "react";
import { motion } from "framer-motion";
import { Select, SelectItem, Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const MeetOurChampionsSection = () => {
  const [selectedSchool, setSelectedSchool] = useState("gems-wellington");

  const schools = [
    { value: "gems-wellington", label: "GEMS Wellington Academy" },
    { value: "dubai-american", label: "Dubai American Academy" },
    { value: "firstpoint", label: "FirstPoint School" },
    { value: "modern-academy", label: "GEMS Modern Academy" },
    { value: "sunrise", label: "Sunrise International School" }
  ];

  const champions = [
    {
      name: "Noah Smith",
      role: "The Dreamer",
      description: "Imagining and shaping possibilities",
      image: "/cafes/champion-1.jpg"
    },
    {
      name: "Laura James",
      role: "The Nurturer",
      description: "Fostering family warmth and trust",
      image: "/cafes/champion-2.jpg"
    },
    {
      name: "Julian Flinch",
      role: "The Guide",
      description: "Leading direction and growth",
      image: "/cafes/champion-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pomegranate to-pomegranate-700">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet our Champions!
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-4">
            At every Family First Café, we believe in building stronger communities through shared responsibility. 
            That's why each school has its own Family First Café Champions—a dedicated staff member, student, and 
            parent who represent the heart of our mission.
          </p>
          <p className="text-base text-white/80 max-w-3xl mx-auto">
            Together, they embody our values of nourishment, connection, kindness, and learning, ensuring that 
            every café becomes a true hub of family bonding. As champions, they guide, inspire, and bring the 
            Family First spirit to life—connecting people across generations and roles.
          </p>
        </motion.div>

        {/* School Selector */}
        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label className="block text-white font-semibold mb-3 text-center">
            Select your school and find out who the Champions in your school are:
          </label>
          <Select
            selectedKeys={[selectedSchool]}
            onSelectionChange={(keys) => setSelectedSchool(Array.from(keys)[0] as string)}
            className="max-w-md"
            classNames={{
              trigger: "bg-white/95 data-[hover=true]:bg-white",
              value: "text-pomegranate font-medium"
            }}
            aria-label="Select a school"
          >
            {schools.map((school) => (
              <SelectItem key={school.value}>
                {school.label}
              </SelectItem>
            ))}
          </Select>
        </motion.div>

        {/* Champions Display */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            The bond builders
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {champions.map((champion, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url('${champion.image}')`,
                      backgroundColor: '#f0f0f0'
                    }}
                  />
                </div>
                
                {/* Name */}
                <h4 className="text-white font-bold text-lg mb-1">
                  {champion.name}
                </h4>
                
                {/* Role */}
                <p className="text-rose-300 font-semibold mb-2">
                  {champion.role}
                </p>
                
                {/* Description */}
                <p className="text-white/80 text-sm">
                  {champion.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Find your nearest Family First Café
          </h3>
          <p className="text-white/80 text-lg mb-8">
            and start your bonding journey today.
          </p>
          
          <Button
            size="lg"
            className="bg-white text-pomegranate font-semibold px-8 py-6 text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
            radius="full"
            startContent={<Icon icon="lucide:map-pin" />}
            as="a"
            href="/locations"
          >
            Find a Café Near You
          </Button>
        </motion.div>
      </div>
    </section>
  );
};