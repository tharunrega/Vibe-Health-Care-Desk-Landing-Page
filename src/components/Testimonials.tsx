import { Star } from 'lucide-react';

const testimonials = [
  {
    product: 'TestoBites',
    image: '/testimonials/testobites.png',
    quote: 'TestoBites has been a game changer when it comes to my stamina and energy levels. I can truly feel a difference in my sex drive and virility as well. Highly recommended.',
    author: '- Ryan R.',
  },
  {
    product: 'Vita Renew',
    image: '/testimonials/vita-renew.png',
    quote: 'My pain therapist recommended this product to me and I was surprised by how well it worked. I can see a marked improvement in my Skin Care.',
    author: '- Jamie Fields',
  },
  {
    product: 'Nerve Freedom',
    image: '/testimonials/nerve-freedom.png',
    quote: 'I have been an RN for 20 years and love helping people find solutions to their health issues.NF Product is the best natural product for neuropathy pain hands down.',
    author: '- Anonymous',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-16">
        <h2 className="heading-xl text-center text-black mb-16">Verified Customer Testimonials</h2>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 space-y-6"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.product}
                  className="w-24 h-24 object-contain"
                />
                <div>
                  <h3 className="text-[21.59px] font-bold text-black">{testimonial.product}</h3>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f8a401] text-[#f8a401]" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="body-md text-black">
                {testimonial.quote}
              </p>

              <p className="text-black font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-8">
          <img src="/health-desk-logo.png" alt="Health Desk Clinic" className="h-24 mx-auto" />
          
          <button className="text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white px-12 py-3 rounded-lg text-[21.59px] transition-colors">
            Follow Us
          </button>

          <div className="flex justify-center gap-4">
            <a href="#" className="text-brand-blue hover:opacity-80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-brand-blue hover:opacity-80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-brand-blue hover:opacity-80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.773 13.78l-2.9-.906c-.63-.196-.642-.63.135-.93l11.566-4.458c.538-.196 1.006.128.832.93z"/>
              </svg>
            </a>
            <a href="#" className="text-brand-blue hover:opacity-80">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}