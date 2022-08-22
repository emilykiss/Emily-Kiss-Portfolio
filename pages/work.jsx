import Image from "next/image"

export default function Work() {
  return (
    <main>
      <h1 className="text-4xl my-8 text-center font-semibold text-white">
        Recent Work
      </h1>
      <div className="">
        <div className="">
          <p className="flex justify-center">
            <a
              href="https://62bf355e355a9e0c54111843--exquisite-liger-b9bd49.netlify.app/profileselection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/cm.png"
                className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
                alt="CheckMate"
                width={700}
                height={600}
              />
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/en.png"
              className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
              alt="mail"
              width={700}
              height={600}
            />
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="https://emilykiss.github.io/EK-Game1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sm.png"
              className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
              alt="mail"
              width={700}
              height={600}
            />
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="https://petconnection.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pet.png"
              className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
              alt="mail"
              width={700}
              height={600}
            />
          </a>
        </div>
      </div>
    </main>
  )
}
