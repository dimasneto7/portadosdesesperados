import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#8257e5">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#04d361">
          <Link href={`/jogo/4/2`}>
            <h2 className={styles.link}>INICIAR</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
