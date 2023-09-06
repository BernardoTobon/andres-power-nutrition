import Navdrawer from '@/Components/NavDrawer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return<div> 
    <Navdrawer>
    <Component {...pageProps} />
    </Navdrawer>
    </div>
}
