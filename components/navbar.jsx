import Link from "next/link"
export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-6  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {/* <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <Link href="/contact">
              <span className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-black hover:text-lime-600 hover:animate-pulse">
                EK
              </span>
            </Link>
          </div> */}
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                {/* <Link href="/">
                  <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-lime-600 hover:animate-pulse">
                    About
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/work">
                  <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-lime-600 hover:animate-pulse">
                    Work
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <span className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:text-lime-600 hover:animate-pulse">
                    Contact
                  </span>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
