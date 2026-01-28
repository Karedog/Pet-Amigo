import styles from "./page.module.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Servicos from "@/components/Servicos";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.caixaMenor}>
      <Header/>
      <Banner/>
      <Servicos/>
      </div>
    </div>
  );
}
