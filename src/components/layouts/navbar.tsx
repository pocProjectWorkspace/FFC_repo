import React from "react";
import { Button, Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated menu items - removed Home, updated structure
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Cafés", path: "/cafes" },
    { name: "Coffee", path: "/coffees" },
    { name: "Locations", path: "/locations" },
    { name: "Events", path: "/events" },
  ];

  return (
    <NextUINavbar 
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-300 z-50 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
      maxWidth="full"
      position="sticky"
      height="80px"
    >
      {/* Brand Section with Logo on Left for Desktop, Center for Mobile */}
      <NavbarContent justify="start" className="flex-grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-default-700 mr-4"
        />
        
        {/* Desktop Logo - Left aligned - Links to Home */}
        <NavbarBrand className="hidden sm:flex justify-start">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="relative flex items-center">
              <img 
                src="/logo/Family First Logo.png" 
                alt="Family First Café" 
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'h-12 w-auto md:h-14' 
                    : 'h-14 w-auto md:h-16'
                }`}
                style={{ transform: 'translateY(2px)' }}
              />
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>
      
      {/* Mobile Logo - Centered - Links to Home */}
      <NavbarContent justify="center" className="flex-grow sm:hidden">
        <NavbarBrand className="flex justify-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="relative flex items-center">
              <img 
                src="/logo/Family First Logo.png" 
                alt="Family First Café" 
                className="h-12 w-auto transition-all duration-300"
                style={{ transform: 'translateY(2px)' }}
              />
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>
      
      {/* Desktop Center section - empty to maintain layout */}
      <NavbarContent justify="center" className="hidden sm:flex flex-grow">
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-4 lg:gap-8" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={item.name} isActive={location.pathname === item.path}>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-primary text-sm lg:text-base ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-default-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA Button */}
      <NavbarContent justify="end" className="flex-grow-0">
        <NavbarItem>
          <Button 
            as={Link}
            to="/locations"
            color="primary"
            radius="full"
            size="lg"
            variant="solid"
            className="font-medium transition-all duration-300 px-4 lg:px-6 py-3 shadow-lg hover:shadow-xl"
            startContent={<Icon icon="lucide:map-pin" className="text-lg" />}
          >
            <span className="hidden sm:inline">Find a Café</span>
            <span className="sm:hidden">Find</span>
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        {/* Mobile Logo Section - Links to Home */}
        <NavbarMenuItem>
          <Link to="/" className="flex items-center gap-3 py-4 border-b border-default-200" onClick={() => setIsMenuOpen(false)}>
            <img 
              src="/logo/Family First Logo.png" 
              alt="Family First Café" 
              className="h-12 w-auto"
            />
            <div>
              <h2 className="font-bold text-lg text-default-900">Family First Café</h2>
              <p className="text-sm text-default-600">Where Families Connect</p>
            </div>
          </Link>
        </NavbarMenuItem>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                className={`w-full font-medium text-lg py-3 block transition-colors ${
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-default-700 hover:text-primary'
                }`}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          </NavbarMenuItem>
        ))}
        
        {/* Mobile CTA */}
        <NavbarMenuItem>
          <motion.div
            className="pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Button 
              as={Link}
              to="/locations"
              color="primary"
              radius="full"
              size="lg"
              className="w-full font-medium shadow-lg"
              startContent={<Icon icon="lucide:map-pin" className="text-lg" />}
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Café
            </Button>
          </motion.div>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};