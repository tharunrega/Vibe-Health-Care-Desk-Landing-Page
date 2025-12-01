import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="heading-xl text-black">
              Health Desk Clinic:<br />
              All Natural Supplements
            </h1>
            
            <p className="body-md text-black max-w-[550px]">
              Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive and optimize your health each day!
            </p>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#3a8ef6] to-[#6f3afa] hover:opacity-90 text-white font-semibold text-[13.99px] px-12 py-6 rounded-full h-auto shadow-lg"
            >
              Shop Now
            </Button>
          </div>

          <div className="relative">
            <img 
              src="/doctor.png" 
              alt="Healthcare Professional" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}