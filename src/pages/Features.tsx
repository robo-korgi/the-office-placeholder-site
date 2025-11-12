export function Features() {
  const coreFeatures = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      title: "Dedicated Account Manager",
      description: "Every client gets a personal account manager who knows your business inside and out. No automated phone trees, no waiting on hold - just pick up the phone and talk to someone who cares."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
          <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
          <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        </svg>
      ),
      title: "Same-Day Delivery",
      description: "Need paper today? We've got you covered. Orders placed before noon qualify for same-day delivery throughout the Scranton area. Because we know you can't wait until tomorrow when you're out of paper."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Online Order Portal",
      description: "Place orders 24/7 through our easy-to-use online system. Track shipments, view order history, manage invoices, and reorder your favorites with just a few clicks. Technology meets personal service."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Volume Discounts",
      description: "The more you buy, the more you save. Our tiered pricing structure rewards loyal customers and high-volume orders. We'll work with you to find the pricing plan that fits your budget."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
          <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
          <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Every business is unique. We offer customized ordering schedules, automatic restock programs, and tailored product recommendations based on your specific needs and usage patterns."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      title: "Quality Guarantee",
      description: "We stand behind every product we sell. If you're not satisfied with your order, we'll make it right - no questions asked. 99.99% jam-free guarantee on all our paper products."
    }
  ];

  const additionalFeatures = [
    "Free product samples before you buy",
    "Flexible payment terms for established customers",
    "Emergency rush orders available",
    "Eco-friendly and recycled paper options",
    "Expert paper consultation services",
    "Custom printing and design services",
    "Detailed usage analytics and reporting",
    "Price matching guarantee"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mt-2">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase mb-3">
              Features
            </div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Why Businesses Choose Dunder Mifflin
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              It's not just about paper - it's about partnership. We've spent over 75 years perfecting the art of
              customer service, building relationships that last, and delivering value that goes beyond the bottom line.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img src="/features.webp" alt="Features" width="616" height="617" className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-20 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase">
          Core Features
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          What Sets Us Apart
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          These aren't just features - they're promises we make to every customer, every day.
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="container p-8 mx-auto xl:px-0">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-8 bg-gray-50 rounded-2xl dark:bg-trueGray-800"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-[#17459D] rounded-md text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-20 mb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#17459D] to-[#2563eb] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            And That's Not All
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg
                  className="w-6 h-6 text-white flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Success Story */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-trueGray-800 rounded-2xl p-12">
            <div className="flex items-start space-x-2 mb-4">
              <svg className="w-8 h-8 text-[#17459D]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-2xl text-gray-800 dark:text-white mb-6 leading-relaxed">
              Switching to Dunder Mifflin was one of the best business decisions we ever made. Their account
              manager actually visited our office to understand our needs, and they've been proactive about
              suggesting ways to save money ever since. It's like having a paper expert on staff.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#17459D] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                RS
              </div>
              <div>
                <div className="font-semibold text-gray-800 dark:text-white text-lg">
                  Robert Schneider
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Operations Manager, Scranton Manufacturing Co.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            From first contact to ongoing partnership, we make it simple.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#17459D] rounded-full text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Contact Us
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Call, email, or use our online form. We'll respond within hours, not days.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#17459D] rounded-full text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Get Your Quote
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We'll assess your needs and provide a customized quote with no obligation.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#17459D] rounded-full text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Start Saving
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Place your first order and experience the Dunder Mifflin difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
