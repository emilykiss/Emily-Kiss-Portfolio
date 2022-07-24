import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emily Kiss Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/e.png" />
      </Head>
      <main>
        <h1 className="mt-8 text-center font-semibold tracking-tight text-pink-400 text-3xl">
          Hello there, I'm Emily Kiss!
        </h1>
        <span className="flex justify-center my-8">
          <Image
            src="/emily.jpg"
            alt="This is a picture of me."
            width={250}
            height={250}
            className="rounded-full"
          />
        </span>
        <h2 className="text-center font-semibold tracking-tight text-white text-2xl sm:mx-24 md:mx-48">
          I am a Full-Stack Software Engineer focused on creating outstanding
          user experiences through clean, innovative code.
        </h2>
        <br></br>
        <h4 className="text-center font-semibold tracking-tight text-white text-2xl mb-8 sm:mx-24 md:mx-48">
          I use my experience to bridge gaps between the world of engineering
          and that of daily users, ultimately advancing human connection and
          making technology more accessible for a wider range of people.
        </h4>
        <div className=''>
        <h5 className="text-center font-semibold tracking-tight text-white text-xl sm:mx-24 md:mx-48">
          Languages:{" "}
        </h5>
          <h5 className="text-pink-400 text-center">
            JavaScript | Python | HTML5 | CSS | SQL
          </h5>
        <h5 className="text-center font-semibold tracking-tight text-white text-xl sm:mx-24 md:mx-48">
          Frameworks:{" "}
        </h5>
          <h5 className="text-pink-400 text-center">
            Node.js | Express.js | Next.js | React.js | MongoDB | Django |
            Sequelize | PostgreSQL
          </h5>
        <h5 className="text-center font-semibold tracking-tight text-white text-xl sm:mx-24 md:mx-48">
          Other:{" "}
        </h5>
          <h5 className="text-pink-400 text-center">
            RESTful API's | Mongoose | Heroku | Netlify | Tailwind | Bootstrap | Responsive Design | Adobe Creative Suite 
          </h5>
          </div>
        <h5 className="text-center font-semibold tracking-tight text-white text-2xl my-10 sm:mx-24 md:mx-48">
          If you have any questions, please don't hesitate to{" "}
          <a
            href="mailto:emilylanekiss@gmail.com? subject= subject text"
            className="text-pink-400 hover:text-white"
          >
            reach out!
          </a>
        </h5>
      </main>
    </div>
  )
}
