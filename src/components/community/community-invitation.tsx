import React, { useState } from "react";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { motion } from "framer-motion";

export const CommunityInvitation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    nationality: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
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
          <h2 className="text-3xl font-bold text-white mb-2">Our Invitation</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Join Community */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-center md:text-left"
          >
            <div className="mb-8">
              <img 
                src="/logo/Family First Logo.png" 
                alt="Family First Café"
                className="w-32 h-32 filter brightness-0 invert mx-auto md:mx-0 mb-6"
              />
            </div>
            
            <h3 className="text-4xl font-bold mb-6">Join our Community</h3>
            
            <p className="text-lg mb-6">
              This is your space to belong. Fill in the form and connect with a community built 
              on family, kindness and togetherness.
            </p>
            
            <p className="text-lg mb-6">
              Stay updated on all events, rewards and activations!
            </p>
            
            <p className="text-xl font-semibold">
              Strong families, stronger communities.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-pomegranate-700/40 border border-white/20">
              <CardBody className="p-8">
                <h3 className="text-2xl font-bold text-white text-center mb-6">Form</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      classNames={{
                        label: "text-white/80",
                        input: "bg-white/10 text-white",
                        inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                      }}
                      required
                    />
                    <Input
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      classNames={{
                        label: "text-white/80",
                        input: "bg-white/10 text-white",
                        inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                      }}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="email"
                      label="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      classNames={{
                        label: "text-white/80",
                        input: "bg-white/10 text-white",
                        inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                      }}
                      required
                    />
                    <Input
                      type="tel"
                      label="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      classNames={{
                        label: "text-white/80",
                        input: "bg-white/10 text-white",
                        inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                      }}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="School"
                      value={formData.school}
                      onChange={(e) => setFormData({...formData, school: e.target.value})}
                      classNames={{
                        label: "text-white/80",
                        input: "bg-white/10 text-white",
                        inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                      }}
                    />
                    <Input
                      label="Nationality"
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                      classNames={{
                        label: "text-white/80",
                        input: "bg-white/10 text-white",
                        inputWrapper: "bg-white/10 border-white/20 hover:bg-white/20"
                      }}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-white text-pomegranate font-semibold hover:bg-white/90"
                    size="lg"
                  >
                    Submit
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};