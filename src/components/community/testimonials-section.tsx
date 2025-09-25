import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  school: string;
}

export const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Family First Café has transformed our family dinners. Our teenagers actually put down their phones and engage in real conversations now. The activities they provide give us new ways to connect and create memories together.",
      author: "Sarah M.",
      role: "Mother of Three",
      school: "GEMS Wellington Academy"
    },
    {
      quote: "Family First Café has become our favorite spot. The themed activities spark meaningful conversations, and our kids are learning values in such a fun and engaging way. It truly feels like a second home.",
      author: "Daniel R.",
      role: "Father of Two",
      school: "GEMS Modern Academy"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: '#983a45' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Our voices</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-8">
              Testimonials
            </h3>
            
            <p className="text-lg text-white/90 text-center mb-8">
              At Family First Café, the voices of our community matter most. Parents, students, and staff share their 
              real experiences of bonding, learning, and creating memories together. Read their stories and discover 
              the impact of Family First Café.
            </p>
            
            <p className="text-lg text-white text-center mb-12">
              Real families, real impact.
            </p>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-pomegranate-700/40 border border-white/20">
                    <CardBody className="p-6">
                      <Icon icon="lucide:quote" className="text-white/30 text-4xl mb-4" />
                      <p className="text-white/90 mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="border-t border-white/20 pt-4">
                        <p className="text-white font-semibold">
                          — {testimonial.author}, {testimonial.role}
                        </p>
                        <p className="text-white/70 text-sm">
                          {testimonial.school}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-white">
              We want to hear from you, share your testimonial at{" "}
              <a href="mailto:hello@familyfirstcafe.com" className="underline hover:text-white/80">
                hello@familyfirstcafe.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};