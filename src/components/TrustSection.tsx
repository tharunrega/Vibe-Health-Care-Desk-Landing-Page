export function TrustSection() {
  const trustItems = [
    { label: 'All Natural' },
    { label: 'Cruelty-Free' },
    { label: 'Money-back\nGuarantee' },
    { label: 'Giving back' },
    { label: 'Non-GMO' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-16 text-center">
        <h2 className="heading-lg text-black mb-4">A Brand That You Can Trust</h2>
        <p className="text-[21.59px] text-black mb-16">
          Our results-driven supplements are made with premium & safe ingredients
        </p>

        <div className="flex justify-center items-center gap-16">
          <img src="/trust-icons.svg" alt="Trust icons" className="h-[62px]" />
        </div>

        <div className="flex justify-center items-start gap-16 mt-8">
          {trustItems.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-[21.59px] font-medium text-brand-blue whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}