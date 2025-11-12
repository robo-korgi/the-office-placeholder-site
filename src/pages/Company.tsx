export function Company() {
  const teamMembers = [
    {
      name: "Michael Scott",
      role: "Regional Manager",
      image: "/staff/cast-the-office-michael-scott.webp",
      objectPosition: "50% 0%"
    },
    {
      name: "Dwight Schrute",
      role: "Assistant Regional Manager",
      image: "/staff/cast-the-office-dwight-schrute.webp",
      objectPosition: "50% 0%"
    },
    {
      name: "Jim Halpert",
      role: "Sales Representative",
      image: "/staff/cast-the-office-jim-halpert.webp",
      objectPosition: "50% 10%"
    },
    {
      name: "Pam Beesly",
      role: "Office Administrator",
      image: "/staff/cast-the-office-pam-beesly.webp",
      objectPosition: "50% 0%"
    },
    {
      name: "Stanley Hudson",
      role: "Sales Representative",
      image: "/staff/cast-the-office-stanley-hudson.webp",
      objectPosition: "50% 15%"
    },
    {
      name: "Phyllis Vance",
      role: "Sales Representative",
      image: "/staff/cast-the-office-phyllis-vance.webp",
      objectPosition: "50% 20%"
    },
    {
      name: "Angela Martin",
      role: "Senior Accountant",
      image: "/staff/cast-the-office-angela-martin.webp",
      objectPosition: "50% 25%"
    },
    {
      name: "Kevin Malone",
      role: "Accountant",
      image: "/staff/cast-the-office-kevin-malone.webp",
      objectPosition: "50% 20%"
    },
    {
      name: "Oscar Martinez",
      role: "Accountant",
      image: "/staff/cast-the-office-oscar-nunez.webp",
      objectPosition: "50% 15%"
    },
    {
      name: "Darryl Philbin",
      role: "Warehouse Foreman",
      image: "/staff/cast-the-office-darryl-philbin.webp",
      objectPosition: "50% 30%"
    },
    {
      name: "Kelly Kapoor",
      role: "Customer Service",
      image: "/staff/cast-the-office-kelly-kapoor.webp",
      objectPosition: "50% 0%"
    },
    {
      name: "Ryan Howard",
      role: "Sales Representative",
      image: "/staff/cast-the-office-ryan-howard.webp",
      objectPosition: "50% 20%"
    }
  ];

  const values = [
    {
      title: "Customer First",
      description: "Every decision we make starts with one question: How does this benefit our customers? It's not just good business—it's the right thing to do.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      )
    },
    {
      title: "Quality Matters",
      description: "We've been in business for over 75 years because we never compromise on quality. From the paper we stock to the relationships we build, excellence is non-negotiable.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Local Roots",
      description: "Scranton is our home, and northeastern Pennsylvania businesses are our family. We understand this community because we're part of it.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "People Matter",
      description: "Behind every order is a person trying to do their job well. We treat everyone—customers, employees, and partners—with respect and dignity.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mt-2">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase mb-3">
              About Us
            </div>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              The People Person's Paper People
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Since 1949, Dunder Mifflin has been more than just a paper company. We're a family-owned business
              committed to serving northeastern Pennsylvania with quality products and genuine care.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <img src="/office-drawing.webp" alt="Our Office" width="616" height="617" className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Founded in 1949 by Robert Dunder and Robert Mifflin, our company started with a simple mission:
              provide businesses with the paper they need, when they need it, at prices they can afford. Three
              generations later, that mission hasn't changed.
            </p>
            <p>
              What has changed is how we deliver on that promise. While other suppliers have automated their
              service and outsourced their support, we've doubled down on what made us successful in the first
              place: personal relationships. When you call Dunder Mifflin, you talk to someone who knows your
              name, understands your business, and genuinely cares about your success.
            </p>
            <p>
              Today, we serve hundreds of businesses across northeastern Pennsylvania—from solo entrepreneurs
              working from home to major corporations with thousands of employees. Whether you order one ream
              or one thousand, you get the same attention to detail, the same commitment to quality, and the
              same genuine service that's made us a regional institution.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-20 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These aren't just words on a wall—they guide everything we do, every day.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#17459D] rounded-full text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The friendly faces behind your favorite paper company
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute w-full h-full object-cover"
                  style={{ objectPosition: member.objectPosition }}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="bg-gradient-to-br from-[#17459D] to-[#2563eb] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Dunder Mifflin by the Numbers
          </h2>
          <div className="grid gap-8 md:grid-cols-4 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">75+</div>
              <p className="text-blue-100">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-blue-100">Business Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <p className="text-blue-100">Reams Delivered Annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <p className="text-blue-100">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Proud Members of the Scranton Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            We're more than a business—we're your neighbors. That's why we proudly support local schools,
            charities, and community events throughout northeastern Pennsylvania. When Scranton succeeds, we all succeed.
          </p>
          <div className="bg-gray-50 dark:bg-trueGray-800 rounded-xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 italic">
              "We believe in giving back to the community that's given us so much. Whether it's sponsoring
              Little League teams, supporting the annual Scranton Business Expo, or donating supplies to
              local schools, we're committed to making northeastern Pennsylvania an even better place to
              live and work."
            </p>
            <p className="mt-4 font-semibold text-gray-800 dark:text-white">
              — The Dunder Mifflin Family
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
