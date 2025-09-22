import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

export const EventsNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call - replace with actual API integration
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-pomegranate">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-pomegranate-600/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Get Early Access to Our Events
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Be the first to know about our Bonding Talks and United in Action events 
            coming very soon to Family First Cafés
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                size="lg"
                variant="bordered"
                classNames={{
                  input: "text-white placeholder:text-white/50",
                  inputWrapper: "bg-white/10 border-white/30 hover:border-white/50"
                }}
                startContent={
                  <Icon icon="solar:letter-linear" className="text-white/50 text-xl" />
                }
                required
              />
              
              <Button
                type="submit"
                size="lg"
                className="bg-white text-pomegranate font-semibold hover:bg-white/90 transition-colors px-8"
                isLoading={isLoading}
                endContent={
                  !isLoading && <Icon icon="solar:arrow-right-linear" className="text-xl" />
                }
              >
                Subscribe
              </Button>
            </div>

            {/* Success Message */}
            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-300 flex items-center justify-center gap-2 mt-4"
              >
                <Icon icon="solar:check-circle-bold" className="text-xl" />
                <span>Thank you for subscribing! We'll keep you updated.</span>
              </motion.div>
            )}
          </form>

          {/* Privacy Note */}
          <p className="text-white/50 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};