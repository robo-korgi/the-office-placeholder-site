export function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and home offices",
      price: "$99",
      period: "/month",
      features: [
        "Up to 20 reams per month",
        "Standard copy paper (20lb)",
        "Email support",
        "Online ordering portal access",
        "Monthly invoicing",
        "5% volume discount"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Business",
      description: "Our most popular plan for growing companies",
      price: "$299",
      period: "/month",
      features: [
        "Up to 100 reams per month",
        "All paper types included",
        "Dedicated account manager",
        "Phone & email support",
        "Same-day delivery",
        "15% volume discount",
        "Custom printing services",
        "Free product samples"
      ],
      cta: "Start Saving",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large organizations",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited monthly volume",
        "All premium paper products",
        "Priority account management",
        "24/7 phone support",
        "Guaranteed same-day delivery",
        "25% volume discount",
        "Custom solutions & consulting",
        "Automatic restocking",
        "Quarterly business reviews",
        "Dedicated delivery fleet"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const addOns = [
    {
      name: "Custom Printing",
      price: "Starting at $49",
      description: "Letterhead, business cards, and marketing materials"
    },
    {
      name: "Rush Delivery",
      price: "$25 per order",
      description: "Emergency same-day delivery outside normal hours"
    },
    {
      name: "Paper Consulting",
      price: "Free",
      description: "Expert recommendations for your specific needs"
    },
    {
      name: "Storage Solutions",
      price: "From $15/month",
      description: "We'll store your paper and deliver as needed"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-2">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase mb-3">
            Pricing
          </div>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl xl:text-6xl dark:text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl leading-normal text-gray-500 lg:text-2xl dark:text-gray-300 mb-8">
            Choose the plan that fits your business. No hidden fees, no surprises. Just quality paper and
            exceptional service at prices you can count on.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            All plans include free delivery in the Scranton area • Cancel anytime • Price match guarantee
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container p-8 mx-auto xl:px-0 mt-16">
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col p-8 rounded-2xl ${
                plan.highlighted
                  ? 'bg-[#17459D] text-white ring-4 ring-[#17459D] ring-opacity-50 transform lg:scale-105'
                  : 'bg-gray-50 dark:bg-trueGray-800'
              }`}
            >
              {plan.highlighted && (
                <div className="text-sm font-bold uppercase tracking-wider mb-4 text-blue-200">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                  {plan.price}
                </span>
                <span className={`ml-1 text-lg ${plan.highlighted ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-[#17459D]'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block w-full text-center px-6 py-4 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-[#17459D] hover:bg-gray-100'
                    : 'bg-[#17459D] text-white hover:bg-[#1a4fb5]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-20 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Customize your plan with these additional services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-gray-50 dark:bg-trueGray-800 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#17459D] rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                  +
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                    {addon.name}
                  </h3>
                  <p className="text-[#17459D] font-semibold mb-2">
                    {addon.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {addon.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Pricing FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-trueGray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Can I change plans later?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-trueGray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                What if I exceed my monthly volume?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                No problem! Any orders above your plan limit are simply billed at our standard retail rate. We'll also reach out to discuss upgrading to a plan that better fits your needs.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-trueGray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Do you offer annual contracts?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Annual contracts receive an additional 10% discount and come with priority support. Contact our sales team to discuss annual pricing.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-trueGray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Is delivery really free?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Free standard delivery is included with all plans for orders within the greater Scranton area. Rush delivery and out-of-area orders may incur additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Why Pay More Elsewhere?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#17459D] mb-2">25%</div>
              <p className="text-gray-600 dark:text-gray-400">
                Average savings vs. big box stores
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#17459D] mb-2">$0</div>
              <p className="text-gray-600 dark:text-gray-400">
                Setup fees or hidden charges
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[#17459D] mb-2">75+</div>
              <p className="text-gray-600 dark:text-gray-400">
                Years of trusted service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="bg-gray-50 dark:bg-trueGray-800 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Not Sure Which Plan is Right?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's talk! Our team will help you find the perfect fit for your business.
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
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
