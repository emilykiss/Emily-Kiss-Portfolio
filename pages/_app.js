import '../styles/globals.css'
import Navbar from '../components/navbar'
import "../styles/globals.css"
import "tailwindcss/tailwind.css"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@700&family=Bodoni+Moda:opsz,wght@6..96,500&family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      <Navbar />

      <Component {...pageProps} />

      {/* footer */}
    </>
  )
}

export default MyApp
