import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <p className=' font-noto-sans'>hdjkfhsajkdfh</p>
    </>
  )
}

export default MyApp
