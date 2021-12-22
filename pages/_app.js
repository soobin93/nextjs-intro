import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <h2>Hi Soobin!</h2>

      <style jsx global>{`
        h1 {
          color: blue;
        }
      `}</style>
    </div>
  );
}
