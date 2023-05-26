import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../pages/shared/layout'
import { Provider } from 'react-redux'
import store from './redux/store'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const token: any = Cookies.get('access_token')

  if (router.pathname.startsWith('/login')) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }else if(router.pathname.startsWith('/register') || router.pathname.startsWith('/404') || router.pathname.startsWith('/403')){
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
