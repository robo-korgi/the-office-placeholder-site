export function Product() {
  const productCategories = [
    {
      name: "Copy Paper",
      description: "Our signature product line. Premium white paper perfect for all your printing needs.",
      features: ["20lb, 24lb, and 28lb weights", "Bright white finish", "99.99% jam-free guarantee"]
    },
    {
      name: "Specialty Paper",
      description: "From colored paper to cardstock, we have everything for your unique projects.",
      features: ["Colored paper in 50+ shades", "Glossy and matte cardstock", "Recycled options available"]
    },
    {
      name: "Envelopes & Labels",
      description: "Complete your mailings with our extensive selection of envelopes and labels.",
      features: ["Standard and custom sizes", "Window and security envelopes", "Address and shipping labels"]
    },
    {
      name: "Custom Printing",
      description: "Professional printing services for letterhead, business cards, and more.",
      features: ["Custom letterhead design", "Business cards", "Marketing materials"]
    },
    {
      name: "Office Supplies",
      description: "Beyond paper - we stock all the essentials your office needs.",
      features: ["Ink and toner cartridges", "Filing and organization", "Writing instruments"]
    },
    {
      name: "Janitorial Supplies",
      description: "Keep your workspace clean with our commercial-grade supplies.",
      features: ["Cleaning products", "Paper towels and tissues", "Trash bags and liners"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase mb-3">
              Our Products
            </div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Premium Paper Products for Every Business
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              From standard copy paper to custom printing services, Dunder Mifflin has been northeastern
              Pennsylvania's trusted paper supplier since 1949. Quality you can count on, service you can trust.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img src="/products.webp" alt="Paper Products" width="616" height="617" className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-20 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase">
          Product Categories
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Everything Your Office Needs
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Browse our comprehensive product catalog or speak with a sales representative for personalized recommendations.
        </p>
      </div>

      {/* Product Grid */}
      <div className="container p-8 mx-auto xl:px-0">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 bg-gray-50 rounded-2xl dark:bg-trueGray-800"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#17459D] mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Our Products Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-20 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 text-center lg:text-4xl dark:text-white mb-12">
            The Dunder Mifflin Quality Guarantee
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 bg-[#17459D] rounded-md w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We source only the finest paper products from trusted manufacturers. Every ream meets our rigorous quality standards.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 bg-[#17459D] rounded-md w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Volume discounts and special pricing for regular customers. We'll match or beat any competitor's quote.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 bg-[#17459D] rounded-md w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                  <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                  <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Same-day delivery available for orders placed before noon. We know you need your supplies when you need them.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center flex-shrink-0 bg-[#17459D] rounded-md w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Personal Service
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Work directly with a dedicated account manager who understands your business and anticipates your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="bg-gray-50 dark:bg-trueGray-800 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our paper experts are here to help. Call us or request a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5705550100"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-[#17459D] rounded-md hover:bg-[#1a4fb5] transition-colors"
            >
              Call (570) 555-0100
            </a>
            <a
              href="#"
              className="px-8 py-4 text-lg font-medium text-center text-[#17459D] bg-white border-2 border-[#17459D] rounded-md hover:bg-gray-50 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
