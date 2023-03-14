import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import "@fontsource/press-start-2p"
import Link from "next/link"


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Emily Kiss Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/emily.jpg" />
      </Head>
      <main className="">
        <div className="centered">
          <h2></h2>
          {/* <Image
            src="/emily.jpg"
            alt="This is a picture of me."
            width={1400}
            height={1450}
            className="opacity-80 rounded-2xl"
          /> */}
          <div className="centered">
            <h2 className="tracking-widest mb-4 text-7xl text-blue-400">
              Emily Kiss
            </h2>
            <p className="tracking-widest text-blue-400 text-4xl italic mb-8">
              UX Designer
            </p>
            <h6 className="text-center tracking-widest m-6">
              <a
                href="mailto:emilylanekiss@gmail.com? subject= subject text"
                className="tracking-widest text-white hover:bg-blue-300 bg-blue-400  rounded-full py-2 px-4"
              >
                Collaborate
              </a>
            </h6>
          </div>
        </div>

       

      </main>
    </div>
  )
}
