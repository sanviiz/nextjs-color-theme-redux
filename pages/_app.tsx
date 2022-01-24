import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@layout/Layout'
import { Provider } from 'react-redux'
import configureStore from '@redux/store'

function MyApp({ Component, pageProps }: AppProps) {
	const store = configureStore()

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
