import Image from "next/image"
import Link from "next/link"

export default function Work() {
  return (
    <main>
      <div className="flex justify-center">
        <Link href="/">
          <span className="px-3 py-2 text-xs justify-end uppercase font-bold leading-snug text-white hover:text-yellow-300 hover:animate-pulse">
            Home
          </span>
        </Link>

        <Link href="/about">
          <span className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:text-yellow-300 hover:animate-pulse">
            About
          </span>
        </Link>
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
      <h1 className="tracking-widest text-4xl m-8 pb-8 text-center text-white">
        {`UX Design Process`}
      </h1>

      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
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
        </p>
      </div>

      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
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
      <h1 className="tracking-widest text-4xl m-8 pb-8 text-center text-white">
        {`Software Engineering Projects`}
      </h1>
      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`CheckMate`}
      </h1>
      <div className="border-2 mx-40 text-white p-6">
        <p className="flex justify-center">
          <a
            href="https://62bf355e355a9e0c54111843--exquisite-liger-b9bd49.netlify.app/profileselection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/cm.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="cm"
              width={680}
              height={500}
            />
          </a>
        </p>
      </div>

      <h1 className="tracking-widest text-2xl m-8 text-center text-white">
        {`Ensemble`}
      </h1>
      <div className="border-2 mx-40 text-white p-6">
        <p className="flex justify-center">
          <a
            href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/en.png"
              className="w-[500px] h-[400px] hover:animate-pulse drop-shadow-2xl"
              alt="en"
              width={680}
              height={500}
            />
          </a>
        </p>
      </div>
    </main>
  )
}
