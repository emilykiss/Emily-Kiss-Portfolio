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
      <h1 className="tracking-widest m-8 py-6 text-center text-4xl text-white">
        {`About`}
      </h1>

      <h2 className="text-center text-xl text-white m-8 sm:mx-24 md:mx-48 tracking-widest">
        {`Hey there! I'm Emily, and I create outstanding user experiences through clean,
          innovative code and user-focused designs.`}
      </h2>
      <br></br>
      <h2 className="text-center text-white sm:mx-24 md:mx-48 tracking-widest">
        {`During my last semester of college, I enrolled in the Software
        Engineering Immersive Program at General Assembly, where I became versed
        in programming languages including JavaScript, SQL, CSS, and HTML and
        utilized many useful frameworks, including React, Node, Express,
        Bootstrap, Tailwind and MongoDB. After graduating from General Assembly, I enrolled in Google's UX Design Professional Certificate Course, where I learned about the processes used to design high quality and user focused applications.`}
      </h2>
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
        Node.js | Express.js | Next.js | React.js | MongoDB | Django | Sequelize
        | PostgreSQL
      </h5>
      <h5 className="text-center tracking-widest text-white text-xl sm:mx-24 md:mx-48">
        Other Skills{" "}
      </h5>
      <h5 className="text-yellow-300 tracking-widest text-center  m-6">
        Figma | RESTful APIs | Mongoose | Heroku | Sketch | Tailwind | Bootstrap |
        Responsive Design | Adobe Creative Suite
      </h5>
    </div>
  )
}
