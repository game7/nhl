import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 960, margin: 'auto' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
