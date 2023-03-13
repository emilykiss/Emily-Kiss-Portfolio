import Image from "next/image"
import Link from "next/link"

export default function Work() {
  return (
    <main>
      {/* <div className="split left"> */}
      <div className="text-center">
        <Link href="/">
          <span className="px-3 py-2 text-xs justify-end uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            Home
          </span>
        </Link>

        <Link href="/work">
          <span className="px-3 py-2 justify-end text-xs uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            Work
          </span>
        </Link>

        <Link href="/about">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            About
          </span>
        </Link>

        <Link href="/contact">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-pink-400 hover:animate-pulse">
            Contact
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div>
          <h2 className="tracking-widest flex justify-center text-center font-bold pt-12 text-3xl pl-4 text-pink-400">
            GooseCake Bakery
          </h2>
          <div className="m-8 flex justify-center">
            <Image
              src="/s2.png"
              className="rounded-3xl  drop-shadow-2xl "
              alt="sb"
              width={300}
              height={600}
            />
          </div>
          <h6 className="text-center tracking-widest m-6">
            <Link href="/goose">
              <span className="tracking-widest text-white text-xs hover:text-pink-400 hover:bg-white bg-pink-400 rounded-full py-2 px-4">
                Case Study
              </span>
            </Link>
          </h6>
        </div>
        <div>
          <h2 className="tracking-widest flex justify-center text-center font-bold pt-12 text-3xl text-pink-400">
            Pet Connection
          </h2>
          <div className="m-8 flex justify-center">
            <Image
              src="/bruce.png"
              className="rounded-3xl  drop-shadow-2xl "
              alt="sb"
              width={300}
              height={600}
            />
          </div>
          <h6 className="text-center tracking-widest m-6">
            <Link href="/pet">
              <span className="tracking-widest text-white bg-pink-400 text-xs hover:text-pink-400 hover:bg-white rounded-full py-2 px-4">
                Case Study
              </span>
            </Link>
          </h6>
        </div>
       
      </div>

      {/* <h2 className="tracking-widest flex justify-center font-bold pt-12 text-4xl text-pink-400">
        GooseCake Bakery
      </h2>
      <div className="m-8 flex justify-center">
        <Image
          src="/s2.png"
          className="rounded-3xl  drop-shadow-2xl "
          alt="sb"
          width={300}
          height={600}
        />
      </div>
      <h6 className="text-center tracking-widest m-6">
        <Link href="/goose">
          <span className="tracking-widest text-white text-xs hover:text-pink-400 hover:bg-white bg-pink-400 rounded-full py-2 px-4">
            Case Study
          </span>
        </Link>
      </h6> */}

      {/* <h2 className="tracking-widest flex justify-center font-bold pt-8 text-4xl text-pink-400">
        Pet Connection
      </h2>
      <div className="m-8 flex justify-center">
        <Image
          src="/bruce.png"
          className="rounded-3xl  drop-shadow-2xl "
          alt="sb"
          width={300}
          height={600}
        />
      </div>
      <h6 className="text-center tracking-widest m-6">
        <Link href="/pet">
          <span className="tracking-widest text-white bg-pink-400 text-xs hover:text-pink-400 hover:bg-white rounded-full py-2 px-4">
            Case Study
          </span>
        </Link>
      </h6> */}

      <h2 className="tracking-widest flex justify-center mb-3 pt-8 font-bold text-3xl text-pink-400">
        CheckMate
      </h2>
      <div className="m-8 flex justify-center">
        <Image
          src="/cm.png"
          className="rounded-3xl hover:animate-pulse drop-shadow-2xl"
          alt="sb"
          width={500}
          height={400}
        />
      </div>
      {/* <h2 className="tracking-widest text-center text-md m-8 text-white">
        CheckMate is a shared To-Do list web app that allows users to complete
        goals with their friends, families, roommates, and more.
      </h2> */}
      <h6 className="text-center tracking-widest m-6">
        <a
          href="https://www.figma.com/file/TBExpBCiLFOpg2Gn4taAV5/CheckMate?node-id=0%3A1&t=i5zkiQY0wIZ0aZ6J-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span className="tracking-widest text-white bg-pink-400 text-xs hover:text-pink-400 hover:bg-white rounded-full py-2 px-4 ">
            Figma
          </span>
        </a>
      </h6>
      <h6 className="text-center tracking-widest m-6">
        <a
          href="https://62bf355e355a9e0c54111843--exquisite-liger-b9bd49.netlify.app/profileselection"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span className="tracking-widest text-white bg-pink-400 text-xs hover:text-pink-400 hover:bg-white rounded-full py-2 px-4">
            App in action!
          </span>
        </a>
      </h6>
      <h2 className="tracking-widest flex justify-center mb-3 pt-8 font-bold text-3xl text-pink-400">
        Ensemble
      </h2>
      <div className="m-8 flex justify-center">
        <Image
          src="/en.png"
          className="rounded-3xl hover:animate-pulse drop-shadow-2xl"
          alt="sb"
          width={500}
          height={400}
        />
      </div>
      {/* <h2 className="tracking-widest text-center text-md m-8 text-white">
        Ensemble is a closet organizer web application that allows users to sort
        their clothing and plan their outfits while still in bed!
      </h2> */}
      <h6 className="text-center tracking-widest m-6">
        <a
          href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span className="tracking-widest text-white bg-pink-400 text-xs hover:text-pink-400 hover:bg-white rounded-full py-2 px-4">
            Organize!
          </span>
        </a>
      </h6>
    </main>
  )
}
