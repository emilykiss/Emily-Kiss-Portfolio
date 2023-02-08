import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div>
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

      <h2 className="text-center text-4xl mt-8 mb-4 text-yellow-300 sm:mx-24 md:mx-48 tracking-widest">
        {`Hello there, I'm Emily.`}
      </h2>

      <div className="text-white">
        <p className="flex justify-center">
          <Image
            src="/em.jpg"
            className="w-[500px] h-[400px]"
            alt="emily"
            width={200}
            height={200}
          />
        </p>
      </div>

      <h2 className="text-center text-lg text-yellow-300 m-4 sm:mx-24 md:mx-48 tracking-widest">
        {`Besides for creating outstanding user experiences through clean code and user-focused designs, I'm a`}
      </h2>

      <div className="grid grid-cols-4 gap-1">
        <div className="mb-2 mx-8 tracking-widest text-center text-bold text-md text-yellow-300">
          {`pastry enthusiast,`}
          <div className="text-white text-sm">
            <Image
              src="/pastry.jpeg"
              className="w-[500px] h-[400px] drop-shadow-2xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
        </div>
        <div className="mb-2 mx-8 tracking-widest text-center justify-end text-bold text-md text-yellow-300">
          {`dog mom,`}
          <div className="text-white text-sm">
            <Image
              src="/ruby.png"
              className="w-[500px] h-[400px] drop-shadow-2xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
        </div>
        <div className="mb-2 mx-8 tracking-widest text-center  text-bold text-md text-yellow-300">
          {`meme creator,`}
          <div className="text-white text-sm">
            <Image
              src="/meme.jpg"
              className="w-[500px] h-[400px] drop-shadow-2xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
        </div>
        <div className="mb-2 mx-8 tracking-widest text-center justify-end text-bold text-md text-yellow-300">
          {`and avid traveler.`}
          <div className="text-white text-sm">
            <Image
              src="/h.jpeg"
              className="w-[500px] h-[400px] drop-shadow-2xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="text-center text-lg text-yellow-300 sm:mx-24 md:mx-48 tracking-widest">
        {`During my last semester of college, I enrolled in the Software
        Engineering Immersive Program at General Assembly, where I became versed
        in programming languages including JavaScript, SQL, CSS, and HTML and
        utilized many useful frameworks, including React, Node, Express,
        Bootstrap, Tailwind and MongoDB. After graduating from General Assembly, I enrolled in Google's UX Design Professional Certificate Course, where I learned about the processes used to design high quality and user focused applications.`}
      </div>

      <h5 className="text-center tracking-widest text-white mt-6 text-xl sm:mx-24 md:mx-48">
     Languages{" "}
     </h5>
     <h5 className="text-yellow-300 tracking-widest text-center m-6">
        JavaScript | Python | HTML5 | CSS | SQL
     </h5>
   <h5 className="text-center tracking-widest text-white text-xl sm:mx-24 md:mx-48">
         Frameworks{" "}
  </h5>
    <h5 className="text-yellow-300 tracking-widest text-center m-6">
         Node.js | Express.js | Next.js | React.js | MongoDB | Django |
      Sequelize | PostgreSQL
   </h5>
     <h5 className="text-center tracking-widest text-white text-xl sm:mx-24 md:mx-48">
         Other Skills{" "}
      </h5>
     <h5 className="text-yellow-300 tracking-widest text-center  m-6">
        Figma | RESTful APIs | Mongoose | Heroku | Sketch | Tailwind |
         Bootstrap | Responsive Design | Adobe Creative Suite
     </h5>
    </div>
  )
}
