import React from "react";
import { Button, Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
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

  // Updated menu items
  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Cafés", path: "/cafes" },
    { name: "Menu", path: "/coffees" }, // Renamed from Coffee to Menu
    { 
      name: "Experiences", 
      isDropdown: true,
      items: [
        { name: "Events", path: "/events" },
        { name: "Activations", path: "/activations" },
        { name: "Resources", path: "/resources" }
      ]
    },
    { name: "Our Community", path: "/community" }
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
      {/* Brand Section with Logo */}
      <NavbarContent justify="start" className="flex-grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-default-700 mr-4"
        />
        
        {/* Logo - Links to Home */}
        <NavbarBrand>
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
              />
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-6 lg:gap-8" justify="center">
        {menuItems.map((item, index) => (
          item.isDropdown ? (
            <Dropdown key={item.name} placement="bottom">
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    className={`bg-transparent p-0 min-w-0 font-medium text-sm lg:text-base ${
                      item.items?.some(subItem => location.pathname === subItem.path)
                        ? 'text-primary' 
                        : 'text-default-700 hover:text-primary'
                    }`}
                    endContent={<Icon icon="lucide:chevron-down" className="text-xs" />}
                    variant="light"
                  >
                    {item.name}
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu aria-label={`${item.name} menu`}>
                {item.items?.map((subItem) => (
                  <DropdownItem
                    key={subItem.path}
                    className={location.pathname === subItem.path ? 'text-primary' : ''}
                    onPress={() => window.location.href = subItem.path}
                  >
                    {subItem.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={item.name} isActive={location.pathname === item.path}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  to={item.path!}
                  className={`font-medium transition-colors duration-300 text-sm lg:text-base ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-default-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          )
        ))}
      </NavbarContent>

      {/* CTA Button */}
      <NavbarContent justify="end" className="flex-grow-0">
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link}
            to="/locations"
            color="primary"
            radius="full"
            size="md"
            variant="solid"
            className="font-medium transition-all duration-300 px-6 shadow-lg hover:shadow-xl"
            startContent={<Icon icon="lucide:heart" className="text-lg" />}
          >
            Where Families Connect
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md">
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
          item.isDropdown ? (
            <div key={item.name} className="border-b border-default-100 py-2">
              <p className="font-semibold text-default-700 px-2 py-1">{item.name}</p>
              {item.items?.map((subItem) => (
                <NavbarMenuItem key={subItem.path}>
                  <Link
                    to={subItem.path}
                    className={`w-full text-base py-2 px-4 block transition-colors ${
                      location.pathname === subItem.path 
                        ? 'text-primary bg-primary/10' 
                        : 'text-default-600 hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          ) : (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.path!}
                  className={`w-full font-medium text-lg py-3 block transition-colors ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-default-700 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            </NavbarMenuItem>
          )
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};