export function Blog() {
  const blogPosts = [
    {
      title: "5 Tips for Choosing the Right Paper for Your Business",
      excerpt: "Not all paper is created equal. From weight to brightness to texture, learn how to select the perfect paper for every business need—from everyday printing to important presentations.",
      date: "January 15, 2025",
      author: "Jim Halpert",
      category: "Tips & Advice",
      readTime: "5 min read",
      image: "/blog-paper-tips.jpg"
    },
    {
      title: "Dunder Mifflin Sponsors Local Youth Basketball League",
      excerpt: "We're proud to announce our sponsorship of the Scranton Youth Basketball League for the 2025 season. Supporting our community's young athletes is just one way we give back to the region that's supported us for 75 years.",
      date: "January 10, 2025",
      author: "Pam Beesly",
      category: "Community",
      readTime: "3 min read",
      image: "/blog-basketball.jpg"
    },
    {
      title: "The Evolution of Office Paper: A 75-Year Perspective",
      excerpt: "From carbon paper to eco-friendly recycled stock, we've seen it all. Take a journey through the history of office paper and discover how Dunder Mifflin has adapted to serve our customers better with each passing decade.",
      date: "January 5, 2025",
      author: "Dwight Schrute",
      category: "Company History",
      readTime: "8 min read",
      image: "/blog-vintage-office.jpg"
    },
    {
      title: "Why Local Matters: The Dunder Mifflin Difference",
      excerpt: "In an age of faceless online ordering and automated customer service, we explain why choosing a local paper supplier makes a real difference for your business—and your community.",
      date: "December 28, 2024",
      author: "Michael Scott",
      category: "Business Insights",
      readTime: "6 min read",
      image: "/blog-local-business.jpg"
    },
    {
      title: "Sustainable Paper Choices for Environmentally Conscious Businesses",
      excerpt: "Going green doesn't mean compromising on quality. Discover our range of eco-friendly paper options, from recycled content to sustainably sourced products, and learn how your paper choices can make a positive environmental impact.",
      date: "December 20, 2024",
      author: "Oscar Martinez",
      category: "Sustainability",
      readTime: "7 min read",
      image: "/blog-sustainability.jpg"
    },
    {
      title: "How to Reduce Your Office Paper Costs by 30%",
      excerpt: "Smart ordering strategies, proper storage techniques, and choosing the right products can significantly reduce your paper expenses. Our expert team shares insider tips for maximizing your paper budget.",
      date: "December 15, 2024",
      author: "Angela Martin",
      category: "Cost Savings",
      readTime: "5 min read",
      image: "/blog-cost-savings.jpg"
    },
    {
      title: "Behind the Scenes: A Day in the Life at Dunder Mifflin",
      excerpt: "Ever wondered what happens between the time you place your order and when it arrives at your door? Join us for a behind-the-scenes look at how our dedicated team ensures every order is perfect.",
      date: "December 8, 2024",
      author: "Darryl Philbin",
      category: "Company Culture",
      readTime: "4 min read",
      image: "/blog-warehouse.jpg"
    },
    {
      title: "Dunder Mifflin Celebrates 75 Years of Service",
      excerpt: "From humble beginnings in 1949 to serving hundreds of businesses across northeastern Pennsylvania, we reflect on 75 years of growth, challenges, and unwavering commitment to our customers.",
      date: "December 1, 2024",
      author: "Michael Scott",
      category: "Company News",
      readTime: "10 min read",
      image: "/blog-celebration.jpg"
    },
    {
      title: "The Ultimate Guide to Paper Weights and When to Use Them",
      excerpt: "20lb, 24lb, 28lb—what do these numbers actually mean, and which one should you use? This comprehensive guide breaks down paper weights and helps you choose the right one for every application.",
      date: "November 22, 2024",
      author: "Phyllis Vance",
      category: "Tips & Advice",
      readTime: "6 min read",
      image: "/blog-paper-stack.jpg"
    }
  ];

  const categories = ["All", "Tips & Advice", "Community", "Company News", "Business Insights", "Sustainability"];

  return (
    <>
      {/* Hero Section */}
      <div className="container p-8 mx-auto xl:px-0 mt-2">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-bold tracking-wider text-[#17459D] dark:text-[#6BA3FF] uppercase mb-3">
            Blog
          </div>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl xl:text-6xl dark:text-white mb-6">
            News, Insights & Stories
          </h1>
          <p className="text-xl leading-normal text-gray-500 lg:text-2xl dark:text-gray-300">
            Expert advice, company updates, and stories from the people behind your favorite paper company
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container p-8 mx-auto xl:px-0 mt-8">
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-[#17459D] text-white'
                  : 'bg-gray-100 dark:bg-trueGray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-trueGray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container p-8 mx-auto xl:px-0 mt-8 mb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex flex-col bg-gray-50 dark:bg-trueGray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#17459D] dark:text-[#6BA3FF] uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-trueGray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <div className="font-medium text-gray-800 dark:text-white">{post.author}</div>
                    <div className="text-xs">{post.date}</div>
                  </div>
                  <a
                    href="#"
                    className="text-[#17459D] font-semibold text-sm hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container p-8 mx-auto xl:px-0 mb-20">
        <div className="bg-gray-50 dark:bg-trueGray-800 rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get the latest news, tips, and special offers delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-trueGray-600 dark:bg-trueGray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#17459D]"
            />
            <button
              type="submit"
              className="px-8 py-3 text-lg font-medium text-white bg-[#17459D] rounded-lg hover:bg-[#1a4fb5] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
