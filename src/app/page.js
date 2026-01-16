import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Banner/>
    </div>
  );
}
