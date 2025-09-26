import React, { useState } from "react";
import { Card, CardBody, Button, Input } from "@heroui/react";
import { motion } from "framer-motion";

export const OurInitiatives = () => {
  const [nextGenEmail, setNextGenEmail] = useState("");

  const handleNextGenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Next Gen Cafe Crew email:", nextGenEmail);
    // Handle email submission
  };

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
          <h2 className="text-3xl font-bold text-white mb-2">Our Actions</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-white text-center mb-8">
              Our Initiatives
            </h3>
            
            <p className="text-lg text-white/90 text-center mb-8">
              At Family First Café, our initiatives are designed to make a positive impact on families, students, and the 
              environment. Each initiative reflects our values of responsibility, connection, and sustainability—helping 
              families bond while building better habits for the future.
            </p>
            
            <p className="text-lg text-white text-center mb-12">
              By leading through action, FFC aims to inspire communities to live more mindfully and inclusively.
            </p>

            <div className="space-y-8">
              {/* Bring Your Own Cup */}
              <Card className="bg-pomegranate-700/40 border border-white/20">
                <CardBody className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-white">
                      <h4 className="text-3xl font-bold mb-4">Bring your own Cup</h4>
                      <h5 className="text-2xl mb-6">
                        Get AED 1.5 discount on every drink when you used your cup!
                      </h5>
                      
                      <p className="mb-4">
                        Small choices create big changes. With our Bring Your Own Cup 
                        initiative, families are encouraged to reduce waste and embrace 
                        sustainability.
                      </p>
                      
                      <p>
                        Every time you bring your own cup, you'll receive a discount—helping 
                        the planet while enjoying your favorite drink.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/community/coffee-cup.png" 
                        alt="Reusable coffee cup"
                        className="w-64 h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Next Gen Cafe Crew */}
              <Card className="bg-pomegranate-700/40 border border-white/20">
                <CardBody className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center order-2 md:order-1">
                      <img 
                        src="/community/student-waiter.png" 
                        alt="Student in cafe uniform"
                        className="w-64 h-64 object-cover rounded-xl"
                      />
                    </div>
                    <div className="text-white order-1 md:order-2">
                      <h4 className="text-3xl font-bold mb-4">Next Gen Cafe Crew</h4>
                      <h5 className="text-xl mb-6">
                        We are opening roles for our students to join the cafe operations
                      </h5>
                      
                      <p className="mb-4">
                        At Family First Café, students don't just visit—they help run the show. 
                        Through Next Gen Cafe Crew, learners step into roles like greeters, 
                        hosts, and café ambassadors to gain real-life skills.
                      </p>
                      
                      <p className="mb-6">
                        This hands-on experience builds leadership, service, and 
                        communication skills while giving students a chance to connect with 
                        families in meaningful ways. It's about confidence, responsibility, and 
                        learning by doing.
                      </p>
                      
                      <p className="font-medium mb-6">
                        Want your children to be part of our Next Gen Cafe Crew program? Submit your email to be the first 
                        to hear about roles, openings and applications.
                      </p>
                      
                      <form onSubmit={handleNextGenSubmit} className="flex gap-4">
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={nextGenEmail}
                          onChange={(e) => setNextGenEmail(e.target.value)}
                          classNames={{
                            input: "bg-white/10 text-white placeholder:text-white/50",
                            inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                          }}
                          required
                        />
                        <Button
                          type="submit"
                          className="bg-white text-pomegranate font-semibold hover:bg-white/90"
                        >
                          Submit
                        </Button>
                      </form>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Going Cashless */}
              <Card className="bg-pomegranate-700/40 border border-white/20">
                <CardBody className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-white">
                      <h4 className="text-3xl font-bold mb-4">We are going cashless!</h4>
                      <h5 className="text-2xl mb-6">
                        Faster service, safer transactions, smarter choices
                      </h5>
                      
                      <p className="mb-4">
                        Family First Café is going cashless to create a smoother, more 
                        modern experience for families. By paying digitally, transactions 
                        become faster, safer, and more convenient. It's also a step toward 
                        innovation and sustainability—reducing cash handling and helping us 
                        focus more on families, not coins.
                      </p>
                      
                      <p className="font-semibold">
                        Starting September 15th, we'll be cash-free across all cafés.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src="/community/cashless-payment.png" 
                        alt="Digital payment"
                        className="w-64 h-64 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};