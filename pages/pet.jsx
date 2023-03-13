import Image from "next/image"
import Link from "next/link"

export default function Pet() {
  return (
    <div>
      <div className="flex justify-center">
        <Link href="/">
          <span className="px-3 py-2 text-xs justify-end uppercase font-bold leading-snug text-white hover:text-blue-200 hover:animate-pulse">
            Home
          </span>
        </Link>

        <Link href="/work">
          <span className="px-3 py-2 justify-end text-xs uppercase font-bold leading-snug text-white hover:text-blue-200 hover:animate-pulse">
            Work
          </span>
        </Link>
        <Link href="/about">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-blue-200 hover:animate-pulse">
            About
          </span>
        </Link>
        <Link href="/contact">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-blue-200 hover:animate-pulse">
            Contact
          </span>
        </Link>
      </div>
      <h2 className="tracking-widest flex justify-center font-bold pt-4 text-4xl mt-8 text-blue-200">
        Pet Connection
      </h2>
      <h2 className="tracking-widest flex justify-center font-bold text-xl p-2 text-blue-200">
        Mobile App Design
      </h2>
      <div className="bg-black p-6 text-center">
        <Image
          src="/furry.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={310}
        />
        <Image
          src="/kit.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={310}
        />
        <Image
          src="/eeee.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={310}
        />
        <Image
          src="/sav.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={310}
        />
        <Image
          src="/bruce.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={310}
        />
        <Image
          src="/muffy.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={310}
        />
      </div>
      <h6 className="text-center tracking-widest m-6">
        <a
          href="https://www.figma.com/file/CldTOOjezF4g4yco1Ca2bb/Sitemap-Pet?node-id=24%3A844&t=ugZWSvvwVAAqHk1M-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span className="tracking-widest text-black font-bold text-xs bg-blue-200 hover:text-black hover:bg-white rounded-full py-2 px-4">
            Figma Prototype
          </span>
        </a>
      </h6>

      <div className="text-center">
        <Image
          src="/1.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/2.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/3.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/4.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/5.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/6.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/7.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/8.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/9.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/10.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/11.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/12.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/13.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/14.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/15.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/16.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/17.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/18.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
    </div>
  )
}
