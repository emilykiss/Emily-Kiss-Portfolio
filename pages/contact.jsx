import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500">
      <h1 className="pt-24 pb-24 text-center text-4xl text-white">
        {`Wanna chat?`}
      </h1>
      <div className="">
        <p className="flex justify-center text-2xl font-semibold hover:text-orange-200 text-white animate-pulse p-8 pl-72">
          <a
            href="mailto:emilylanekiss@gmail.com? subject= subject text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </p>

        <p className="flex justify-center text-2xl font-semibold hover:text-orange-200 text-white animate-pulse p-8 pr-48">
          <a
            href="https://github.com/emilykiss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>

        <p className="flex justify-center text-2xl font-semibold hover:text-orange-200 text-white animate-pulse p-8 pl-48">
          <a
            href="https://www.linkedin.com/in/emily-kiss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>

        <p className="flex justify-center text-2xl font-semibold hover:text-orange-200 text-white animate-pulse p-8 pr-72">
          <a
            href="https://www.instagram.com/emilylanekiss/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>

        <div className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 pt-64 pb-64"></div>
      </div>
    </div>
  )
}
