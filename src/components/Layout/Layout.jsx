import Header from "../header/Header";
import { Main } from "../content/Main";
import Footer from "../footer/Footer";
import style from "./layout.module.scss"

export default function Layout() {
  return (
    <div className={style.container}>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}
