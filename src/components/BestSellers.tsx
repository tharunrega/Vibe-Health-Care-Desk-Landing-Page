import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const products = [
  {
    image: '/products/dent-pure.svg',
    name: 'Dent Pure',
  },
  {
    image: '/products/true-fem.png',
    name: 'True Fem',
  },
  {
    image: '/products/vita-renew.png',
    name: 'Vita Renew',
  },
  {
    image: '/products/prostazen.png',
    name: 'ProstaZen',
  },
  {
    image: '/products/nerve-freedom.png',
    name: 'Nerve Freedom',
  },
];

const tabs = ['Results-Driven', 'All-Natural', 'Non-GMO', 'Cruelty-Free'];

export function BestSellers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-16">
        <h2 className="heading-xl text-black mb-6">Our Best Sellers</h2>
        <p className="body-lg text-black mb-12">
          Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
        </p>

        <div className="flex gap-6 mb-16">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="text-[21.59px] font-bold text-brand-blue hover:underline"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="bg-gray-100 rounded-lg p-10 w-full aspect-square flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-[22.79px] font-bold text-black">{product.name}</h3>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f8a401] text-[#f8a401]" />
                ))}
              </div>

              <Button 
                variant="outline"
                className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white text-[21.59px] px-8"
              >
                Shop Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}