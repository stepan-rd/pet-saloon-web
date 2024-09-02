import { useAppThemeStore } from "@/stores/useAppTheme";
import { motion } from "framer-motion";
import { useCallback } from "react";

export function Navbar() {
  const { theme } = useAppThemeStore();

  const handleLogoClick = useCallback(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  const handleNavClick = useCallback((section: string) => {

    switch(section) {

      case "about":
        window.scrollTo({ top: 2200 ,behavior: "smooth"})
        break
      case "services":
        window.scrollTo({ top: 1300 ,behavior: "smooth"})
        break
      case "contact":
        window.scrollTo({ top: 9999, behavior: "smooth"})
        break

    }

  }, []);

  const navItems = [
    { label: "About", onClick: () => handleNavClick("about") },
    { label: "Services", onClick: () => handleNavClick("services") },
    { label: "Contact", onClick: () => handleNavClick("contact") },
  ];

  return (
    <div className="fixed z-20 flex items-center w-full h-12 px-4 bg-white">
      <h1
        className="text-xl font-bold cursor-pointer"
        style={{ color: theme.headingTextColor }}
        onClick={handleLogoClick}
      >
        PetSln
      </h1>
      <div className="w-full h-10"></div>
      <div className="flex items-center gap-5">
        {navItems.map((navItem) => (
          <motion.a
            className="hidden cursor-pointer md:block"
            whileHover={{ color: theme.hoverTextColor }}
            style={{ color: theme.paragraphTextColor }}
            onClick={navItem.onClick}
          >
            {navItem.label}
          </motion.a>
        ))}
        <button className="flex-wrap px-4 py-1 text-white bg-black rounded-full whitespace-nowrap">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
