export function Footer() {
  return (
    <div className="container p-8 mx-auto xl:px-0">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#17459D] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to Experience the Dunder Mifflin Difference?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Join hundreds of satisfied businesses in the region. Get your quote today!
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#17459D] bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
