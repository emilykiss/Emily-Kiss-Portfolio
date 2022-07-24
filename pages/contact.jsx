export default function Contact() {
    return (
      <div>
        <h1 className="mt-8 text-center text-3xl font-semibold text-white">
          Interested in learning more about me?
        </h1>
        <div className="flex flex-row justify-around m-10">
          <p className="flex justify-center text-xl font-semibold text-white">
            <a
              href="https://www.instagram.com/emilylanekiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ma.jpg"
                className="w-[90px] h-[70px] rounded-lg"
                alt="mail"
              />
            </a>
          </p>

          <p className="flex justify-center text-xl font-semibold text-white">
            <a
              href="https://github.com/emilykiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/white.png"
                className="w-[100px] h-[70px] rounded-lg"
                alt="github"
              />
            </a>
          </p>

          <p className="flex justify-center text-xl font-semibold text-white">
            <a
              href="https://www.linkedin.com/in/emily-kiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/lw.png"
                className="w-[70px] h-[70px] rounded-lg"
                alt="linkdin"
              />
            </a>
          </p>

          <p className="flex justify-center text-xl font-semibold text-white">
            <a
              href="https://www.instagram.com/emilylanekiss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ig.png"
                className="w-[70px] h-[70px] rounded-lg"
                alt="instagram"
              />
            </a>
          </p>
        </div>
      </div>
    )
}