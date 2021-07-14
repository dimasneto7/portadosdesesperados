import styles from "../styles/EntradaNumerica.module.css";

interface EntradaNumericaProps {
  value: number;
  onChange: (newValue: number) => void;
}

export default function EntradaNumerica(props) {
  return (
    <div className={styles.entradaNumerica}>
      <h1>1</h1>
    </div>
  );
}
