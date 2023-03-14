import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div>
      <div className="flex justify-center">
        <Link href="/">
          <span className="px-3 py-2 text-xs justify-end uppercase font-bold leading-snug text-blue-400 hover:text-blue-500 hover:animate-pulse">
            Home
          </span>
        </Link>

        <Link href="/about">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-blue-400 hover:text-blue-500 hover:animate-pulse">
            About
          </span>
        </Link>
        <Link href="/work">
          <span className="px-3 py-2 justify-end text-xs uppercase font-bold leading-snug text-blue-400 hover:text-blue-500 hover:animate-pulse">
            Work
          </span>
        </Link>

        <Link href="/contact">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-blue-400 hover:text-blue-500 hover:animate-pulse">
            Contact
          </span>
        </Link>
      </div>

      <h1 className="m-8 pt-10 text-center text-4xl text-blue-400">
        {`Haven't had enough yet, eh?`}
      </h1>
      <h1 className="underline text-white text-8xl underline-offset-8 decoration-wavy decoration-sky-200">
        hellohellohellohellohellohellohelloem
      </h1>
      <marquee>
        <div className="flex flex-row justify-around mt-24">
          <Image
            src="/plane.png"
            className=""
            alt="cr"
            width={100}
            height={60}
          />

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400">
            <a
              href="mailto:emilylanekiss@gmail.com? subject= subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </p>

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400">
            <a
              href="https://github.com/emilykiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400">
            <a
              href="https://www.linkedin.com/in/emily-kiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400">
            <a
              href="https://www.instagram.com/emilylanekiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </marquee>
      <h1 className="underline text-white text-8xl underline-offset-8 decoration-wavy decoration-sky-200">
        hellohellohellohellohellohellohelloem
      </h1>

      <h1 className="mt-8 text-center text-3xl font-semibold text-white"></h1>
    </div>
  )
}
