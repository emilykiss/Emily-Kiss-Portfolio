import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div>
      <h1 className="m-8 pt-16 text-center text-4xl text-blue-400">
        {`Wanna chat?`}
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

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400 animate-pulse">
            <a
              href="mailto:emilylanekiss@gmail.com? subject= subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </p>

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400 animate-pulse">
            <a
              href="https://github.com/emilykiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400 animate-pulse">
            <a
              href="https://www.linkedin.com/in/emily-kiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>

          <p className="flex justify-center text-3xl font-semibold hover:text-blue-500 text-blue-400 animate-pulse">
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
     
      <h1 className="mt-8 text-center text-3xl font-semibold text-white"></h1>
    </div>
  )
}
