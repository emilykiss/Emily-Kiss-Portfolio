import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"


export default function Work() {
  return (
    <main className="bg-blue-400">
      <h2 className="flex justify-center text-center font-bold pt-12 text-5xl pl-4 text-white">
      Recent Work
      </h2>
      <div className="grid grid-cols-2 gap-1">
        <div className=" bg-black rounded-xl m-10">
          <h2 className="flex justify-center text-center font-bold pt-12 text-2xl text-blue-400">
            GooseCake Bakery
          </h2>
          <div className="m-8 flex justify-center">
            <Image
              src="/s2.png"
              className="rounded-1xl"
              alt="sb"
              width={300}
              height={600}
            />
          </div>
          <h6 className="text-center m-6">
            <Link href="/goose">
              <span className=" text-white text-xs hover:text-white hover:bg-blue-500 bg-blue-400 rounded-full py-2 px-2">
                Case Study
              </span>
            </Link>
          </h6>
        </div>
        <div className=" bg-black rounded-xl m-10">
          <h2 className="flex justify-center text-center font-bold pt-12 text-2xl text-blue-400">
            Pet Connection
          </h2>
          <div className="m-8 flex justify-center">
            <Image
              src="/bruce.png"
              className="rounded-1xl"
              alt="sb"
              width={300}
              height={600}
            />
          </div>
          <h6 className="text-center  m-6">
            <Link href="/pet">
              <span className="text-white bg-blue-400 text-xs hover:text-white hover:bg-blue-500 rounded-full py-2 px-2">
                Case Study
              </span>
            </Link>
          </h6>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1">
        <div className="bg-black rounded-xl m-10">
          <h2 className="flex justify-center mb-3 pt-8 font-bold text-2xl text-blue-400">
            CheckMate
          </h2>
          <div className="m-8 flex justify-center">
            <Image
              src="/cm.png"
              className="rounded-2xl"
              alt="sb"
              width={500}
              height={400}
            />
          </div>

          <h6 className="text-center m-6">
            <a
              href="https://62bf355e355a9e0c54111843--exquisite-liger-b9bd49.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className=" text-white bg-blue-400 text-xs  hover:bg-blue-500 rounded-full py-2 px-2">
                Visit App
              </span>
            </a>
          </h6>
        </div>

        <div className="rounded-xl bg-black m-10">
          <h2 className="flex justify-center mb-3 pt-8 font-bold text-2xl text-blue-400">
            Ensemble
          </h2>
          <div className="m-8 flex justify-center">
            <Image
              src="/en.png"
              className="rounded-2xl"
              alt="sb"
              width={500}
              height={400}
            />
          </div>

          <h6 className="text-center m-6">
            <a
              href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span className=" text-white bg-blue-400 text-xs hover:bg-blue-500 rounded-full py-2 px-2">
                Organize!
              </span>
            </a>
          </h6>
        </div>
      </div>
    </main>
  )
}
