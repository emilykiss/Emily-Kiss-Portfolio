// Special SSR image component
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About(){
    return (
      <main>
      <div>
        <h1 className="text-2xl mt-8 text-center font-semibold text-white">
          I am not your average Software Engineer.
        </h1>
        <h2 className="text-2xl mt-8 text-center font-semibold text-white">
          I am a driven Software Engineer with a fresh outlook on the industry.
          My background in Anthropology empowers me to implement innovative,
          clean code. I use my experience to bridge gaps between the world of
          engineering and that of daily users, ultimately advancing human
          connection and making technology more accessible for a wider range of
          people.
        </h2>
      </div>
      </main>
    )
}
