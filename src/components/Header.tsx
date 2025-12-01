import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const scrollThreshold = 10; // Minimum scroll distance to trigger change
    const showThreshold = 5; // Minimum upward scroll to show navbar

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = currentScrollY - lastScrollY;

          // Only update if scroll difference exceeds threshold
          if (Math.abs(scrollDifference) > scrollThreshold) {
            if (currentScrollY < 50) {
              // Always show navbar at top of page
              setIsVisible(true);
            } else if (scrollDifference > 0) {
              // Scrolling down - hide navbar
              setIsVisible(false);
            } else if (scrollDifference < -showThreshold) {
              // Scrolling up with threshold - show navbar
              setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed left-0 right-0 bg-white shadow-sm z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ top: 0 }}
    >
      <div className="max-w-[1440px] mx-auto px-16 py-6 flex items-center justify-between">
        <img src="/logo.png" alt="Health Desk Clinic" className="h-[78px]" />
        
        <nav className="flex items-center gap-12">
          <a href="#home" className="nav-link text-black hover:text-brand-blue transition-colors">Home</a>
          <a href="#shop" className="nav-link text-black hover:text-brand-blue transition-colors">Shop</a>
          <a href="#about" className="nav-link text-black hover:text-brand-blue transition-colors">About Us</a>
          <a href="#faq" className="nav-link text-black hover:text-brand-blue transition-colors">FAQ</a>
          <a href="#blog" className="nav-link text-black hover:text-brand-blue transition-colors">Blog</a>
          <a href="#contact" className="nav-link text-black hover:text-brand-blue transition-colors">Contact Us</a>
        </nav>

        <button className="text-brand-blue hover:opacity-80 transition-opacity">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}