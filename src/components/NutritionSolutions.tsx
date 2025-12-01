import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const solutions = [
  {
    iconPath: '/icons/weight-loss.svg',
    title: 'Weight Loss',
    description: 'Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you',
  },
  {
    iconPath: '/icons/nerve-pain.svg',
    title: 'Nerve Pain',
    description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function',
  },
  {
    iconPath: '/icons/skin-care.svg',
    title: 'Skin Care',
    description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow',
  },
  {
    iconPath: '/icons/mens-health.svg',
    title: "Men's Health",
    description: 'Discover men\'s health products designed to boost energy, strength, and overall well-being.',
  },
  {
    iconPath: '/icons/womens-health.svg',
    title: "Women's Health",
    description: 'Explore women\'s health products that support hormonal balance, vitality, and overall wellness',
  },
];

export function NutritionSolutions() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Create duplicated items for infinite scroll effect
  const duplicatedSolutions = [...solutions, ...solutions, ...solutions];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Set initial scroll position to middle set
    container.scrollLeft = container.scrollWidth / 3;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth / 3;
      const currentScroll = container.scrollLeft;

      // If scrolled past the end of second set, jump to first set
      if (currentScroll >= scrollWidth * 2) {
        container.scrollLeft = currentScroll - scrollWidth;
      }
      // If scrolled before the first set, jump to second set
      else if (currentScroll <= 0) {
        container.scrollLeft = currentScroll + scrollWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full">
        <h2 className="heading-xl text-center text-black mb-4 px-16">
          Nutrition Solutions<br />
          for Your Complete Well-Being
        </h2>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 mt-16 overflow-x-auto scrollbar-hidden cursor-grab active:cursor-grabbing px-8"
          style={{ 
            scrollBehavior: isDragging ? 'auto' : 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedSolutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-brand-mint rounded-[19px] p-8 flex flex-col gap-[18.66px] shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-[340px]"
            >
              <div className="flex flex-col gap-[18.66px]">
                <img 
                  src={solution.iconPath} 
                  alt={solution.title}
                  className="w-[62px] h-[62px]"
                  style={{ filter: 'invert(27%) sepia(98%) saturate(1247%) hue-rotate(188deg) brightness(92%) contrast(93%)' }}
                />
                
                <div className="flex flex-col gap-[9.33px]">
                  <h3 className="card-title text-black">{solution.title}</h3>
                  <p className="card-description">{solution.description}</p>
                </div>
              </div>

              <Button 
                className="bg-gradient-to-r from-[#3a8ef6] to-[#6f3afa] hover:opacity-90 text-white font-semibold text-[13.99px] rounded-full w-full"
              >
                Buy now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}