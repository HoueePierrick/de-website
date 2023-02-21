import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPrescriptionBottleMedical } from "@fortawesome/free-solid-svg-icons";
library.add(faPrescriptionBottleMedical);
import Layout from "@/Components/Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
