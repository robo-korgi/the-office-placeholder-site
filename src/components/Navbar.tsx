import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark theme
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-medium text-[#17459D] dark:text-gray-100">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <rect width="100" height="100" rx="13.5" fill="#17459D"/>
              <g fill="#fff" transform="translate(50, 50) scale(0.9) translate(-50, -50) translate(-62.5, -34)">
                <path d="m89.266 43.214c9.1338.010188 18.268-.002437 27.401-.057445 11.447 0 19.933 5.9119 19.933 12.006v59.743c.12186 6.7141-8.4905 10.143-15.307 10.143-3.5156 0-9.7814-.03284-14.564-.03284h-17.463v-81.801zm27.574 63.879v-46.875c0-3.1042-3.2228-3.2169-7.8125-3.2169v27.574 26.761c4.96 0 7.8125-1.0089 7.8125-4.2428z"/>
              </g>
            </svg>
          </span>
          <span>Dunder Mifflin</span>
        </Link>

        {/* Get Started Button & Mobile Menu Toggle */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          {/* Theme Switcher - Desktop only */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-300 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20 cursor-pointer">
              <span className="sr-only">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden mr-3 lg:flex nav__item">
            <a
              href="/"
              className="px-6 py-2 text-white bg-[#17459D] rounded-md md:ml-5">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-[#17459D] focus:text-[#17459D] focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="flex flex-wrap w-full my-5 lg:hidden">
            {/* Theme Switcher - Mobile only */}
            <button
              onClick={toggleTheme}
              className="flex items-center w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#17459D] focus:text-[#17459D] focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none cursor-pointer">
              {theme === 'dark' ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  <span>Switch to Light Mode</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <span>Switch to Dark Mode</span>
                </>
              )}
            </button>

            {navigation.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#17459D] focus:text-[#17459D] focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none">
                {item}
              </Link>
            ))}
            <a
              href="/"
              className="w-full px-6 py-2 mt-3 text-center text-white bg-[#17459D] rounded-md lg:ml-5">
              Get Started
            </a>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  to={`/${menu.toLowerCase()}`}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#17459D] focus:text-[#17459D] focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
