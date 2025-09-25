import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { monthlyThemesData } from "./monthly-themes-data";

interface MonthlyThemesGridProps {
  onMonthClick: (month: string) => void;
}

export const MonthlyThemesGrid: React.FC<MonthlyThemesGridProps> = ({ onMonthClick }) => {
  return (
    <section className="py-16" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {monthlyThemesData.map((theme, index) => (
            <motion.div
              key={theme.month}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full bg-pomegranate-700/50 border border-white/20 hover:bg-pomegranate-700/70 transition-all cursor-pointer group"
                isPressable
                onPress={() => onMonthClick(theme.month)}
              >
                <CardBody className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-white/90 text-sm font-medium mb-2">
                      {theme.month}
                    </h3>
                    <h4 className="text-white text-xl font-bold mb-3">
                      {theme.title}
                    </h4>
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white/20 text-white border border-white/30 hover:bg-white/30 w-full group-hover:bg-white/30"
                  >
                    {theme.cta}
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};