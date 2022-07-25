import Image from "next/image"

export default function Work() {
  return (
    <main>
      <h1 className="text-4xl my-8 text-center font-semibold text-pink-400">
        Recent Work
      </h1>
      <div className="flex justify-around flex-col">
        <div className="m-10 flex justify-between">
          <div className="font-semibold text-pink-400 text-xl flex-col text-center">
            <p className="mb-6">
              CheckMate is communal to-do list application created with:
            </p>
            <p className="mb-6 text-white">MongoDB</p>
            <p className="mb-6 text-white">Tailwind</p>
            <p className="mb-6 text-white">React.js</p>
          </div>
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
                width={250}
                height={250}
              />
            </a>
          </p>
        </div>

        <div className="m-8 flex justify-between">
          <div className="font-semibold text-pink-400 text-xl flex-col text-center">
            <p className="mb-6">
              Ensemble is virtual closet organizer application created with:
            </p>
            <ul>
              <li className="mb-6 text-white">JavaScript</li>
              <li className="mb-6 text-white">MongoDB</li>
              <li className="mb-6 text-white">Mongoose</li>
              <li className="mb-6 text-white">Tailwind</li>
              <li className="mb-6 text-white">React.js</li>
            </ul>
          </div>
          <a
            href="https://62d72ddfb37fce2eea6ee563--ensemble-closet.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/en.png"
              className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
              alt="mail"
              width={250}
              height={250}
            />
          </a>
        </div>

        <div className="m-8 flex justify-between">
          <div className="font-semibold text-pink-400 text-xl flex-col text-center">
            <p className="mb-6">
              Supermarket Sweep is catch game application created with:
            </p>
            <p className="mb-6 text-white">JavaScript</p>
            <p className="mb-6 text-white">HTML5</p>
            <p className="mb-6 text-white">CSS</p>
          </div>
          <a
            href="https://emilykiss.github.io/EK-Game1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sm.png"
              className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
              alt="mail"
              width={250}
              height={250}
            />
          </a>
        </div>

        <div className="m-8 flex justify-between">
          <div className="font-semibold text-pink-400 text-xl flex-col text-center">
            <p className="mb-6">
              Pet Connection is a pet adoption application created with:
            </p>
            <p className="mb-6 text-white">Sequelize</p>
            <p className="mb-6 text-white">JavaScript</p>
            <p className="mb-6 text-white">PostgreSQL</p>
            <p className="mb-6 text-white">Bootstrap</p>
          </div>
          <a
            href="https://petconnection.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/pet.png"
              className="w-[500px] h-[400px] hover:contrast-50 drop-shadow-2xl"
              alt="mail"
              width={250}
              height={250}
            />
          </a>
        </div>
      </div>
    </main>
  )
}
