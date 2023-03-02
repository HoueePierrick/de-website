import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPrescriptionBottleMedical,
  faCaretDown,
  faPrescriptionBottle,
  faMoneyBillTrendUp,
  faRectangleAd,
  faArrowUpRightDots,
  faCircleCheck,
  faMapLocationDot,
  faBoxesStacked,
  faStar,
  faGlobe,
  faShop,
  faMagnifyingGlassChart,
  faBusinessTime,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPrescriptionBottleMedical,
  faCaretDown,
  faPrescriptionBottle,
  faMoneyBillTrendUp,
  faRectangleAd,
  faArrowUpRightDots,
  faCircleCheck,
  faMapLocationDot,
  faBoxesStacked,
  faStar,
  faGlobe,
  faShop,
  faMagnifyingGlassChart,
  faBusinessTime,
  faFilterCircleXmark
);
import Layout from "@/Components/Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
