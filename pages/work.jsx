import Image from "next/image"
import Link from "next/link"

export default function Work() {
  return (
    <main>
      <div className="split left">
        <div className="flex justify-end">
          <Link href="/">
            <span className="px-3 py-2 text-xs justify-end uppercase font-bold leading-snug text-black hover:text-yellow-300 hover:animate-pulse">
              Home
            </span>
          </Link>

          <Link href="/about">
            <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-black hover:text-yellow-300 hover:animate-pulse">
              About
            </span>
          </Link>
        </div>

        <h2 className="tracking-widest flex justify-center font-bold pt-8 text-xl text-black">
          GooseCake
        </h2>
        <div className="m-8 flex justify-center">
          <Image
            src="/coffee.jpg"
            className="hover:animate-pulse drop-shadow-2xl "
            alt="sb"
            width={460}
            height={400}
          />
        </div>
        <h2 className="tracking-widest text-center text-md m-8 text-black">
          GooseCake Bakery wanted a vibrant, intuitive mobile app that allows
          users to place online orders and schedule their pickup time.
        </h2>
        <h6 className="text-center tracking-widest m-6">
          <Link href="/goose">
            <span className="tracking-widest text-black text-xs hover:text-white hover:bg-black rounded-full py-2 px-4 border border-black">
              Case Study
            </span>
          </Link>
        </h6>
        <h2 className="tracking-widest flex justify-center mb-3 pt-8 text-bold text-xl text-black">
          Supermarket Sweep
        </h2>

        <div className="m-8 flex justify-center">
          <Image
            src="/sm.png"
            className="hover:animate-pulse drop-shadow-2xl"
            alt="sb"
            width={460}
            height={400}
          />
        </div>
        <h2 className="tracking-widest text-center text-md m-8 text-black">
          {`Supermarket Sweep is a classical children's catch game that encourages the player to collect as many donuts as they can while avoiding the tomatoes!`}
        </h2>
        <h6 className="text-center tracking-widest m-6">
          <a
            href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="tracking-widest text-black text-xs hover:text-white hover:bg-black rounded-full py-2 px-4 border border-black">
              Play
            </span>
          </a>
        </h6>
      </div>
      <div className="split right">
        <div className="flex justify-start">
          <Link href="/work">
            <span className="px-3 py-2 justify-end text-xs uppercase font-bold leading-snug text-white hover:text-yellow-300 hover:animate-pulse">
              Work
            </span>
          </Link>

          <Link href="/contact">
            <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-yellow-300 hover:animate-pulse">
              Contact
            </span>
          </Link>
        </div>

        <h2 className="tracking-widest flex justify-center mb-3 pt-8 text-bold text-xl text-white">
          CheckMate
        </h2>
        <div className="m-8 flex justify-center">
          <Image
            src="/cm.png"
            className="hover:animate-pulse drop-shadow-2xl"
            alt="sb"
            width={460}
            height={400}
          />
        </div>
        <h2 className="tracking-widest text-center text-md m-8 text-white">
          CheckMate is a shared To-Do list web app that allows users to complete
          goals with their friends, families, roommates, and more.
        </h2>
        <h6 className="text-center tracking-widest m-6">
          <a
            href="https://62bf355e355a9e0c54111843--exquisite-liger-b9bd49.netlify.app/profileselection"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="tracking-widest text-white text-xs hover:text-black hover:bg-white rounded-full py-2 px-4 border border-white">
              Get Started
            </span>
          </a>
        </h6>
        <h2 className="tracking-widest flex justify-center mb-3 pt-8 text-bold text-xl text-white">
          Ensemble
        </h2>
        <div className="m-8 flex justify-center">
          <Image
            src="/en.png"
            className="hover:animate-pulse drop-shadow-2xl"
            alt="sb"
            width={460}
            height={400}
          />
        </div>
        <h2 className="tracking-widest text-center text-md m-8 text-white">
          Ensemble is a closet organizer web application that allows users to
          sort their clothing and plan their outfits while still in bed!
        </h2>
        <h6 className="text-center tracking-widest m-6">
          <a
            href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span className="tracking-widest text-white text-xs hover:text-black hover:bg-white rounded-full py-2 px-4 border border-white">
              Organize!
            </span>
          </a>
        </h6>
      </div>

      {/* <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`Ideating`}
      </h1>
      <div className="border-2 mx-40 text-white p-6">
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sb.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="sb"
              width={550}
              height={350}
            />
          </a>
        </p>
      </div>
      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`Prototyping`}
      </h1>
      <div className="border-2 mx-40 text-white p-6">
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Prototyping.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="PROTO"
              width={550}
              height={350}
            />
          </a>
        </p>
      </div>

      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`UX Research`}
      </h1>
      <div className="border-2 mx-40 text-white p-6">
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/research.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="CheckMate"
              width={600}
              height={350}
            />
          </a>
        </p>
      </div>

      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`UX Usability Study`}
      </h1>
      <div className="border-2 mx-40 text-white p-6 flex justify-center">
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/us.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="CheckMate"
              width={400}
              height={600}
            />
          </a>
        </p>
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/ustwo.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="CheckMate"
              width={400}
              height={600}
            />
          </a>
        </p> */}
      {/* </div> */}

      {/* <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`Pattern Identification`}
      </h1>
      <div className="border-2 mx-40 text-white p-6 flex justify-center">
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pi.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="pi"
              width={450}
              height={600}
            />
          </a>
        </p>
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/OJUnmg3Ep1HwHyjht22IVG/Untitled?node-id=0%3A1&t=ZLnIJSmrB2EtPFzq-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pi2.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="pi2"
              width={450}
              height={600}
            />
          </a>
        </p>
      </div>

      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`High Fidelity Designs`}
      </h1>
      <div className="border-2 mx-40 text-white p-6">
        <p className="flex justify-center">
          <a
            href="https://www.figma.com/file/K2DhWEYao6ZMZOVJS623nM/Untitled?node-id=0%3A1&t=l2pNrz78aWgEjDLT-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/hfd.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="hfd"
              width={550}
              height={550}
            />
          </a>
        </p>
      </div>
  
  */}
    </main>
  )
}
