import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody, CardHeader, Chip, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const blends = [
  {
    id: 1,
    name: "Kindred",
    meaning: "Reflects connection, shared values, and belonging — just like the café itself, where every cup brings people closer.",
    tastingNotes: "Smooth and balanced with milk chocolate sweetness, soft citrus brightness, and a velvety finish.",
    message: "Kindred — Blended for moments shared.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:heart",
    accent: "#6366f1"
  },
  {
    id: 2,
    name: "Haven",
    meaning: "A sense of safety, warmth, and calm — a place for families to pause and reset.",
    tastingNotes: "Low acidity, creamy body with caramel, hazelnut, and gentle vanilla.",
    message: "Haven — Your warm coffee refuge.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:shield",
    accent: "#f59e0b"
  },
  {
    id: 3,
    name: "Ember",
    meaning: "Symbolizes the glowing warmth at the center of home life — lingering moments over coffee and shared stories.",
    tastingNotes: "Rich and full-bodied with dark chocolate, toasted almond, and a whisper of spice.",
    message: "Ember — Roasted to spark connection.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:flame",
    accent: "#ef4444"
  },
  {
    id: 4,
    name: "Bloom",
    meaning: "Speaks to growth, learning, and how families and communities flourish together over shared moments.",
    tastingNotes: "Bright and floral with honeyed citrus and soft stone fruit.",
    message: "Bloom — Coffee for curious minds and warm hearts.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:flower",
    accent: "#ec4899"
  },
  {
    id: 5,
    name: "Roots",
    meaning: "Honors heritage, tradition, and the foundations that connect families through generations.",
    tastingNotes: "Earthy and comforting with nutty undertones, soft spice, and cocoa finish.",
    message: "Roots — Inspired by family traditions.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:tree-deciduous",
    accent: "#10b981"
  },
  {
    id: 6,
    name: "Dawn",
    subtitle: "Turkish Coffee",
    meaning: "Celebrates fresh starts and the cherished ritual of Turkish coffee — morning moments and deep conversations.",
    tastingNotes: "Bold and smooth with molasses sweetness, light spice, and a velvety body.",
    message: "Dawn — A Turkish coffee for shared beginnings.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:sunrise",
    accent: "#eab308"
  },
  {
    id: 7,
    name: "Unity",
    subtitle: "Arabic Coffee",
    meaning: "Represents hospitality, generosity, and the spirit of togetherness in Arabic coffee tradition.",
    tastingNotes: "Light-bodied, delicately spiced with cardamom, floral hints, and a clean finish.",
    message: "Unity — Arabic coffee for shared stories.",
    formats: ["1kg café use", "250g retail bag", "Box of 10 capsules"],
    icon: "lucide:users",
    accent: "#14b8a6"
  }
];

export const BlendShowcase = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#983a45' }}>
      {/* Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Signature Blends
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Each blend tells a story rooted in family values and connection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blends.map((blend, index) => (
            <motion.div
              key={blend.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer overflow-hidden">
                {/* Gradient Header with Icon and Name */}
                <CardHeader className="p-0 relative">
                  <div 
                    className="w-full h-32 relative"
                    style={{ background: `linear-gradient(135deg, ${blend.accent}60, ${blend.accent}80)` }}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                      <Icon 
                        icon={blend.icon} 
                        className="text-white text-4xl drop-shadow-lg" 
                      />
                    </div>

                    {/* Blend Name Integrated */}
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {blend.name}
                      </h3>
                      {blend.subtitle && (
                        <p className="text-white/90 text-sm font-medium drop-shadow">{blend.subtitle}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardBody className="p-6 space-y-4">
                  {/* Message */}
                  <div className="text-center">
                    <p className="text-white font-semibold italic text-lg">
                      "{blend.message}"
                    </p>
                  </div>

                  {/* Meaning */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: blend.accent }}
                      ></div>
                      Meaning
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {blend.meaning}
                    </p>
                  </div>

                  {/* Tasting Notes */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon icon="lucide:coffee" className="text-rose-400" style={{ color: '#f3818b' }} />
                      Tasting Notes
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {blend.tastingNotes}
                    </p>
                  </div>

                  {/* Formats */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon icon="lucide:package" className="text-rose-400" style={{ color: '#f3818b' }} />
                      Available Formats
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {blend.formats.map((format, idx) => (
                        <Chip 
                          key={idx} 
                          size="sm" 
                          variant="flat" 
                          className="bg-white/20 text-white border border-white/30"
                        >
                          {format}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    size="lg"
                    className="w-full bg-white font-semibold hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 mt-4"
                    style={{ backgroundColor: 'white', color: '#983a45' }}
                    radius="lg"
                    endContent={<Icon icon="lucide:shopping-cart" />}
                  >
                    Shop {blend.name}
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