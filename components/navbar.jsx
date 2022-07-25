import Link from "next/link"
export default function Navbar() {

  return (
    <nav className="bg-white border-gray-200 py-5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/contact" className="flex items-center">
          <span className="self-start text-pink-400 font-semibold hover:text-black text-xl whitespace-nowrap">
            EK
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 pr-4 pl-3 text-black rounded md:p-0 hover:text-pink-400"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 md:border-0 hover:text-pink-400 md:p-0"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pr-4 pl-3 text-black border-b border-gray-100  md:border-0 hover:text-pink-400 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
