import React from "react";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] = React.useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async () => {
    if (email) {
      setIsSubscribing(true);
      try {
        // TODO: Replace with your preferred newsletter service integration
        // Options: Mailchimp, ConvertKit, SendGrid, Google Sheets, etc.
        console.log("Newsletter signup:", email);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setSubscriptionStatus('success');
        setEmail("");
        
        // Reset status after 3 seconds
        setTimeout(() => setSubscriptionStatus('idle'), 3000);
      } catch (error) {
        setSubscriptionStatus('error');
        setTimeout(() => setSubscriptionStatus('idle'), 3000);
      } finally {
        setIsSubscribing(false);
      }
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#983a45' }}>
      {/* Consistent Pomegranate Overlay */}
      <div className="absolute inset-0" style={{ 
        background: `linear-gradient(135deg, rgba(152, 58, 69, 0.95), rgba(152, 58, 69, 0.85), rgba(152, 58, 69, 0.9))` 
      }}></div>

      {/* Subtle Brand Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-4 left-8 w-6 h-6">
          <Icon icon="lucide:coffee" className="text-white text-lg rotate-12" />
        </div>
        <div className="absolute top-4 right-8 w-6 h-6">
          <Icon icon="lucide:heart" className="text-white text-lg -rotate-12" />
        </div>
        <div className="absolute bottom-4 left-1/4 w-4 h-4">
          <Icon icon="lucide:users" className="text-white text-sm rotate-45" />
        </div>
        <div className="absolute bottom-4 right-1/4 w-4 h-4">
          <Icon icon="lucide:home" className="text-white text-sm -rotate-45" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="/logo/Family First Logo.png" 
                  alt="Family First Café" 
                  className="h-12 w-auto mb-4 filter brightness-0 invert"
                />
                <p className="text-white/90 text-sm leading-relaxed">
                  Where families connect, learn & grow together through meaningful moments.
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
                <div className="space-y-2">
                  {['About Us', 'Our Coffee', 'Locations', 'Contact'].map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block text-white/80 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Connect */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-lg">Connect With Us</h4>
                <div className="flex gap-3 mb-4">
                  {[
                    { icon: 'lucide:instagram', label: 'Instagram', url: 'https://www.instagram.com/familyfirstcafe' },
                    { icon: 'lucide:twitter', label: 'Twitter', url: 'https://x.com/familyfirstcafe' }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/25 transition-colors duration-300 group border border-white/20"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon icon={social.icon} className="text-white text-lg" />
                    </motion.a>
                  ))}
                </div>
                <p className="text-white/70 text-xs">
                  Follow us for updates and family moments
                </p>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-semibold mb-4 text-lg">Stay Connected</h4>
                <p className="text-white/80 text-sm mb-4">Get family moments & café updates</p>
                <div className="space-y-3">
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20"
                    classNames={{
                      input: "text-white placeholder:text-white/60",
                      inputWrapper: "bg-white/10 border-white/20 hover:bg-white/15 focus-within:bg-white/15"
                    }}
                    disabled={isSubscribing}
                  />
                  <Button
                    onClick={handleSubscribe}
                    className="w-full bg-white font-semibold hover:bg-rose-50 transition-all duration-300"
                    style={{ backgroundColor: 'white', color: '#983a45' }}
                    size="sm"
                    disabled={isSubscribing || !email}
                    isLoading={isSubscribing}
                  >
                    {subscriptionStatus === 'success' ? 'Subscribed!' : 
                     subscriptionStatus === 'error' ? 'Try Again' : 
                     'Subscribe'}
                  </Button>
                  {subscriptionStatus === 'success' && (
                    <p className="text-green-300 text-xs">Thank you for subscribing!</p>
                  )}
                  {subscriptionStatus === 'error' && (
                    <p className="text-red-300 text-xs">Something went wrong. Please try again.</p>
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar - Compact */}
          <motion.div 
            className="pt-6 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-sm">
                <p className="text-white/70">
                  © 2025 Family First Café. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};