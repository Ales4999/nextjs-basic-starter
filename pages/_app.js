// Use tailwindcss for styles
// read more here: https://tailwindcss.com/docs/utility-first
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
