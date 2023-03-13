import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div>
      <div className="flex justify-center">
        <Link href="/">
          <span className="px-3 py-2 text-xs justify-end uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            Home
          </span>
        </Link>

        <Link href="/about">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            About
          </span>
        </Link>
        <Link href="/work">
          <span className="px-3 py-2 justify-end text-xs uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            Work
          </span>
        </Link>

        <Link href="/contact">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            Contact
          </span>
        </Link>
      </div>

      <h1 className="tracking-widest m-8 py-6 text-center font-bold text-4xl text-pink-400">
        {`Haven't had enough yet, eh?`}
      </h1>
      <div className="flex flex-row justify-around m-10">
        <p className="flex justify-center text-xl font-semibold text-white">
          <a
            href="mailto:emilylanekiss@gmail.com? subject= subject text"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ma.jpg"
              className="w-[90px] h-[70px] rounded-lg "
              alt="mail"
              width={100}
              height={100}
            />
          </a>
        </p>

        <p className="flex justify-center text-xl font-semibold text-white">
          <a
            href="https://github.com/emilykiss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/white.png"
              className="w-[100px] h-[70px] rounded-full "
              alt="github"
              width={150}
              height={100}
            />
          </a>
        </p>

        <p className="flex justify-center text-xl font-semibold text-white">
          <a
            href="https://www.linkedin.com/in/emily-kiss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/lw.png"
              className="w-[70px] h-[70px] rounded-lg "
              alt="linkdin"
              width={100}
              height={100}
            />
          </a>
        </p>

        <p className="flex justify-center text-xl font-semibold text-white">
          <a
            href="https://www.instagram.com/emilylanekiss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ig.png"
              className="w-[70px] h-[70px] rounded-lg "
              alt="instagram"
              width={100}
              height={100}
            />
          </a>
        </p>
      </div>
      <h1 className="mt-8 text-center text-3xl font-semibold text-white"></h1>
    </div>
  )
}
