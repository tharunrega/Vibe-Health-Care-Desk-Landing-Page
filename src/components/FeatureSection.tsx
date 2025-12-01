import { Button } from '@/components/ui/button';

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export function FeatureSection({ title, subtitle, description, image, imagePosition }: FeatureSectionProps) {
  const content = (
    <div className="space-y-8">
      <div>
        <h2 className="text-[33.59px] font-bold leading-[45.59px] text-black mb-4">
          {title}
        </h2>
        <h3 className="text-[21.59px] font-medium text-black mb-6">
          {subtitle}
        </h3>
      </div>
      
      <p className="body-md text-black">
        {description}
      </p>

      <Button 
        variant="outline"
        className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white text-[21.59px] px-8"
      >
        Learn More
      </Button>
    </div>
  );

  const imageElement = (
    <div className="relative">
      <img 
        src={image} 
        alt={title}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-16">
        <div className="grid grid-cols-2 gap-16 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageElement}
              {content}
            </>
          ) : (
            <>
              {content}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
}