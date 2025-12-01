import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const productLinks = [
'Vita Renew', 'Vita Renew', 'Vita Renew', 'Vita Renew', 'Vita Renew',
'Testobites', 'Testobites', 'Testobites', 'Testobites', 'Testobites',
'Audizen', 'Audizen', 'Audizen', 'Audizen', 'Audizen',
'Nerve Flow', 'Nerve Flow', 'Nerve Flow', 'Nerve Flow', 'Nerve Flow',
'Uro flow', 'Memof', 'Derma care', 'TestoZen', 'True Fem',

  ];

  return (
    <footer className="bg-white">
      {/* Pre-footer section */}
      <div className="bg-brand-gray py-16">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="grid grid-cols-3 gap-16">
            <div>
              <h3 className="heading-md text-black mb-6">Have a Question?</h3>
              <p className="body-md text-black mb-8">
                Check out our FAQs where we answer the most commonly asked questions
              </p>
              <Button 
                variant="outline"
                className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white"
              >
                Read FAQs
              </Button>
            </div>

            <div>
              <h3 className="heading-md text-black mb-6">Connect With Us</h3>
              <p className="body-md text-black mb-4">
                Enjoy free shipping for all orders.
              </p>
              <p className="text-[23.99px] font-bold text-black">
                1-800-822-7777
              </p>
            </div>

            <div>
              <h3 className="heading-md text-black mb-6">We're Social</h3>
              <p className="text-[21.59px] text-black">
                Like us, love us, follow us!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="flex items-center justify-between gap-8">
            <div className="text-white">
              <h3 className="text-[34.31px] font-medium mb-2">Let's Grow Together</h3>
              <p className="text-[17.58px]">We'll keep it simple. Only the news and updates you need.</p>
            </div>
            
            <div className="flex gap-4 flex-1 max-w-md">
              <Input 
                type="email"
                placeholder="Please Enter Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-8">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#fafafa] py-16">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="grid grid-cols-[300px_1fr] gap-16">
            <div>
              <img src="/footer-logo.png" alt="Health Care" className="h-16 mb-6" />
              <div className="text-brand-dark-gray text-[17px] leading-relaxed">
                <p>Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
                <p>Phone: (512) 555-2376</p>
                <p>Email: Ereforce@outlook.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-[19.19px] font-semibold text-brand-blue mb-6">Our Products</h4>
              <div className="grid grid-cols-5 gap-x-8 gap-y-3">
                {productLinks.map((link, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="text-[16.79px] text-brand-dark-gray hover:text-brand-blue transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg-white py-8">
        <div className="max-w-[1440px] mx-auto px-16">
          <div className="text-center space-y-4">
            <p className="text-[15.5px] text-brand-dark-gray leading-relaxed">
              These statements have not been evaluated by the Food and Drug Administration.<br />
              These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
            </p>
            
            <img src="/payment-methods.png" alt="Payment methods" className="h-9 mx-auto" />

            <Separator className="my-6" />

            <div className="flex items-center justify-between">
              <p className="text-[15.5px] text-brand-light-gray">
                © 2025, Health Desk Clinic. All Rights Reserved.
              </p>
              
              <div className="flex items-center gap-2 text-[15.88px] text-brand-light-gray">
                <a href="#" className="hover:text-brand-blue transition-colors">Terms And Conditions</a>
                <span>|</span>
                <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-brand-blue transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}