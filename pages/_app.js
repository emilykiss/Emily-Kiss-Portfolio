import '../styles/globals.css'
import Navbar from '../components/navbar'
import "../styles/globals.css"
import "tailwindcss/tailwind.css"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
      
      {/* footer */}
    </>
  )
}

export default MyApp
