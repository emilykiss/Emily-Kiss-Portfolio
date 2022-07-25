export default function Contact() {
    return (
      <div>
        <h1 className="mt-8 text-center text-3xl font-semibold text-pink-400">
          Interested in learning more about me?
        </h1>
        <div className="flex flex-row justify-around m-10">
          <p className="flex justify-center text-xl font-semibold text-white">
            <a
              href="mailto:emilylanekiss@gmail.com? subject= subject text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/ma.jpg"
                className="w-[90px] h-[70px] rounded-lg hover:contrast-50"
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
                className="w-[100px] h-[70px] rounded-full hover:contrast-50"
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
                className="w-[70px] h-[70px] rounded-lg hover:contrast-50"
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
                className="w-[70px] h-[70px] rounded-lg hover:contrast-50"
                alt="instagram"
              />
            </a>
          </p>
        </div>
        <h1 className="mt-8 text-center text-3xl font-semibold text-pink-400">
          Don't hesitate to reach out!
        </h1>
      </div>
    )
}