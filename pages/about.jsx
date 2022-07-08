// Special SSR image component
import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About(){
    return (
      <div>
        <h1 className={`${styles.lightPink} ${styles.big}`}>About Emily</h1>
        <h2 className={styles.lightPink}>
          I am a super cool software engineer.
        </h2>
        <h3 className={styles.lightPink}>I make super cool stuff.</h3>
        <div>
            <style jsx>{`
                .orange {
                    color: orange;
                }
            `}</style>

            <h4 className="orange">I love to code.</h4>
        </div>

        <Image
          // Assume you are in the public folder
          src="/vector.jpg"
          alt="This is a picture of me."
          width={500}
          height={500}
        />
      </div>
    )
}
