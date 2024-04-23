import "@/styles/globals.css";

//INTERNAL IMPORT
import {NavBar, Footer} from "../Components";
import {CharityProvider} from '../Context/Charity';

export default function App({ Component, pageProps }) {
  return(
    <>
      <CharityProvider>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </CharityProvider>
    </>
  ) 
}
