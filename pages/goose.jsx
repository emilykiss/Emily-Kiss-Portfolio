import Image from "next/image"
import Link from "next/link"

export default function Goose() {
  return (
    <div>
      
      <h2 className="tracking-widest flex justify-center font-bold pt-4 text-4xl mt-8 text-blue-400">
        GooseCake Bakery
      </h2>
      <h2 className="tracking-widest flex justify-center font-bold text-xl p-2 pb-12 text-blue-400">
        Mobile App Redesign
      </h2>
      <div className="bg-black p-6 text-center">
        <Image
          src="/s1.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={300}
        />
        <Image
          src="/s2.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={300}
        />
        <Image
          src="/s3.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={300}
        />
        <Image
          src="/s4.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={300}
        />
        <Image
          src="/s5.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={300}
        />
        <Image
          src="/s6.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={160}
          height={300}
        />
      </div>
      <h6 className="text-center tracking-widest m-6">
        <a
          href="https://www.figma.com/file/K2DhWEYao6ZMZOVJS623nM/Untitled?node-id=0%3A1&t=Qc3UuSvz7PAg6Gi7-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <span className="tracking-widest text-white text-xs bg-blue-400 hover:text-black hover:bg-blue-500 rounded-full py-2 px-4">
            Figma Prototype
          </span>
        </a>
      </h6>

      <div className="text-center">
        <Image
          src="/one.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/two.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/three.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/four.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/five.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/six.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/sevenn.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/eight.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/nine.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/ten.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/eleven.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/twelve.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/thirteen.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/fourteen.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/fifteen.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/sixteen.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      <div className="text-center">
        <Image
          src="/seventeen.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />

        <Image
          src="/eighteen.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={350}
        />
      </div>
      {/* <div className="flex justify-around">
        <div className="grid grid-cols-2 gap-4 place-content-center h-48">
          <div className="mt-8 mb-2 mx-8 tracking-widest text-center text-bold text-xl text-yellow-300">
            My Role
            <div className="text-white text-sm">
              {`Solo Project: I was responsible for everything from start to
              finish.`}
            </div>
          </div>
          <div className="mt-8 mb-2 mx-8 tracking-widest text-center justify-end text-bold text-xl text-yellow-300">
            Overview
            <div className="text-white text-sm">
              {" "}
              {`As a part of Google's UX Certificate course, I was tasked with
          designing a bakery's mobile application.`}
            </div>
          </div>
          <div className="mt-8 mb-2 mx-8 tracking-widest text-center  text-bold text-xl text-yellow-300">
            Client
            <div className="text-white text-sm">{`GooseCake Bakery (Conceptual)`}</div>
          </div>
          <div className="mt-8 mb-2 mx-8 tracking-widest text-center justify-end text-bold text-xl text-yellow-300">
            Timeline
            <div className="text-white text-sm"> One Week</div>
          </div>
        </div>
      </div>

      <div className="font-bold p-4 text-2xl my-4 text-yellow-300 text-center">
        Background
      </div>
      <div className="mt-4 mb-2 mx-10 text-center tracking-widest text-bold text-md text-white">
        {`GooseCake Bakery is a small, cozy bakery located in Los Angeles, California. The owner, Gabriel Klein, wanted to create a mobile app that's fun and easy to use. I was asked to make the app intuitive, and to create the ability for users to schedule their pickup time in advance.`}
      </div> */}
      {/* <div className="mt-8 flex justify-around bg-black">
        <Image
          src="/pac.jpg"
          className="drop-shadow-2xl"
          alt="cr"
          width={200}
          height={280}
        />
        <Image
          src="/cp.jpg"
          className="drop-shadow-2xl"
          alt="cr"
          width={200}
          height={280}
        />
        <Image
          src="/mad.jpg"
          className="drop-shadow-2xl"
          alt="cr"
          width={200}
          height={280}
        />
      </div> */}
      {/* <div className="font-bold p-4 text-2xl my-4 text-yellow-300 text-center">
        Developement Process
      </div>
      <div className="mt-8 flex justify-around">
        <Image
          src="/sb.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={600}
          height={200}
        />
        <Image
          src="/us.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={480}
          height={580}
        />
      </div>
      <div className="mt-4 flex justify-around">
        <Image
          src="/research.png"
          className="drop-shadow-2xl"
          alt="cr"
          width={800}
          height={380}
        />
      </div>

      <div className="font-bold p-4 text-2xl my-4 text-yellow-300 text-center">
        Key Takeaways
      </div> */}
    </div>
  )
}
