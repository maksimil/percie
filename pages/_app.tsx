import type { AppProps } from "next/app";
import "windi.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-full absolute bg-back">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
