import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500">
      <h2 className="pt-14 text-center text-4xl text-white font-bold sm:mx-24 md:mx-48">
        {`Hey there, I'm Emily!`}
      </h2>

      <div className="text-center text-xl pt-8 font-bold text-white sm:mx-24 md:mx-48">
        {`During my last semester of college, I enrolled in the Software
        Engineering Immersive Program at General Assembly, where I became versed
        in programming languages including JavaScript, SQL, CSS, and HTML and
        utilized many useful frameworks, including React, Node, Express,
        Bootstrap, Tailwind and MongoDB. After graduating from General Assembly, I enrolled in Google's UX Design Professional Certificate Course, where I learned about the processes used to design high quality and user focused applications.`}
      </div>

      <div className="">
        <h5 className="pt-2 text-center font-bold text-white mt-4 text-2xl sm:mx-24 md:mx-48">
          Languages{" "}
        </h5>

        <h5 className="text-white text-center m-2">
          JavaScript | Python | HTML5 | CSS | SQL
        </h5>

        <h5 className="text-center font-bold text-white text-2xl sm:mx-24 md:mx-48">
          Frameworks{" "}
        </h5>
        <h5 className="text-white text-center m-2">
          Node.js | Express.js | Next.js | React.js | MongoDB | Django |
          Sequelize | PostgreSQL
        </h5>
        <h5 className="text-center font-bold text-white text-2xl sm:mx-24 md:mx-48">
          Other Skills{" "}
        </h5>
        <h5 className="text-white text-center m-2">
          Figma | RESTful APIs | Mongoose | Heroku | Sketch | Tailwind |
          Bootstrap | Responsive Design | Adobe Creative Suite
        </h5>
      </div>

      <h2 className="text-center pt-6 pb-6 text-xl text-white font-bold m-4 sm:mx-24 md:mx-48">
        {`Besides for creating outstanding user experiences through clean code and user-focused designs, I'm a`}
      </h2>

      <div className="grid grid-cols-4 gap-1">
        <div className="mb-2 mx-8 text-center font-bold text-md text-white">
          <div className="text-white text-sm">
            <Image
              src="/pastry.jpeg"
              className="rounded-xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
          {`pastry enthusiast,`}
        </div>
        <div className="mb-2 mx-8  text-center justify-end font-bold text-md text-white">
          <div className="text-white text-sm">
            <Image
              src="/ruby.png"
              className="rounded-xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
          {`dog mother,`}
        </div>
        <div className="mb-2 mx-8 text-center font-bold text-md text-white">
          <div className="text-white text-sm">
            <Image
              src="/meme.jpg"
              className="rounded-xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
          {`meme creator,`}
        </div>
        <div className="mb-2 mx-8 text-center justify-end font-bold text-md text-white">
          <div className="text-white text-sm">
            <Image
              src="/h.jpeg"
              className="rounded-xl"
              alt="emily"
              width={120}
              height={160}
            />
          </div>
          {`and avid traveler.`}
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}
