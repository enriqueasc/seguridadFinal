import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client' //importamos la funcion de auth0
//se client por que se esta utilizando del  lado del cliente de auth0

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
